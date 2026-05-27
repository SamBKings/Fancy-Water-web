// ── Stripe Webhook ─────────────────────────────────────────────────────
// Escucha checkout.session.completed y envía:
//   1. Email a samuel@fancywater.mx con todos los datos del pedido
//   2. Email de confirmación al cliente
//
// Requiere en Vercel env vars:
//   STRIPE_SECRET_KEY        → sk_live_...
//   STRIPE_WEBHOOK_SECRET    → whsec_... (del dashboard de Stripe)
//   RESEND_API_KEY           → ya configurado

const stripe  = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Resend } = require('resend');
const resend  = new Resend(process.env.RESEND_API_KEY);

// Vercel: deshabilitar bodyParser para poder verificar firma de Stripe
module.exports.config = { api: { bodyParser: false } };

// Leer el body como buffer
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(typeof c === 'string' ? Buffer.from(c) : c));
    req.on('end',  () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig    = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;

  // ── Obtener los line_items del pedido ──────────────────────────────
  let lineItems = [];
  try {
    const expanded = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items'],
    });
    lineItems = expanded.line_items.data || [];
  } catch (e) {
    console.error('Error fetching line items:', e.message);
  }

  // ── Datos del cliente ──────────────────────────────────────────────
  const customerName    = session.customer_details?.name    || 'Cliente';
  const customerEmail   = session.customer_details?.email   || '';
  const customerPhone   = session.customer_details?.phone   || '—';
  const shipping        = session.shipping_details?.address || {};
  const shippingName    = session.shipping_details?.name    || customerName;
  const shippingMethod  = session.shipping_cost?.shipping_rate || '';

  const addressLines = [
    shipping.line1,
    shipping.line2,
    shipping.city,
    shipping.state,
    shipping.postal_code,
    shipping.country,
  ].filter(Boolean).join(', ');

  const total = ((session.amount_total || 0) / 100).toLocaleString('es-MX', {
    style: 'currency', currency: 'MXN',
  });

  // ── Tabla de productos ─────────────────────────────────────────────
  const itemsHtml = lineItems.map(item => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;">${item.description}</td>
      <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;text-align:center;">${item.quantity}</td>
      <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;text-align:right;">
        $${((item.amount_total || 0) / 100).toLocaleString('es-MX')} MXN
      </td>
    </tr>`).join('');

  const itemsText = lineItems.map(i =>
    `• ${i.description} × ${i.quantity}  →  $${((i.amount_total||0)/100).toLocaleString('es-MX')} MXN`
  ).join('\n');

  const orderDate = new Date().toLocaleString('es-MX', { timeZone: 'America/Monterrey' });

  // ══════════════════════════════════════════════════════════════════
  // 1. EMAIL A SAMUEL — datos completos para surtir el pedido
  // ══════════════════════════════════════════════════════════════════
  const ownerHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="background:#2D3147;padding:28px 32px;border-radius:12px 12px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:1px;">
          🛒 NUEVO PEDIDO — Fancy Water
        </h1>
        <p style="color:rgba(255,255,255,.6);margin:8px 0 0;font-size:13px;">${orderDate}</p>
      </div>
      <div style="background:#F4F3EF;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #D9D8D3;border-top:none;">

        <h2 style="font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#7A7975;margin:0 0 16px;">
          Datos del cliente
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
          <tr>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;width:140px;">Nombre</td>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;font-weight:600;">${customerName}</td>
          </tr>
          <tr>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;">Correo</td>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;">
              <a href="mailto:${customerEmail}" style="color:#2D3147;">${customerEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;">Teléfono</td>
            <td style="padding:9px 0;border-bottom:1px solid #D9D8D3;">${customerPhone}</td>
          </tr>
          <tr>
            <td style="padding:9px 0;color:#7A7975;font-size:13px;vertical-align:top;">Dirección de envío</td>
            <td style="padding:9px 0;">${addressLines || '—'}</td>
          </tr>
        </table>

        <h2 style="font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#7A7975;margin:0 0 16px;">
          Productos
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <thead>
            <tr>
              <th style="text-align:left;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Producto</th>
              <th style="text-align:center;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Cant.</th>
              <th style="text-align:right;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Total</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <div style="text-align:right;font-size:20px;font-weight:700;color:#2D3147;margin-bottom:24px;">
          Total pagado: ${total}
        </div>

        <div style="background:#2D3147;border-radius:10px;padding:16px 20px;color:rgba(255,255,255,.8);font-size:13px;line-height:1.7;">
          <strong style="color:#fff;display:block;margin-bottom:6px;">ID Stripe:</strong>
          ${session.id}
        </div>

        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #D9D8D3;font-size:11px;color:#B7B4AC;">
          Pedido recibido en fancywater.mx · ${orderDate}
        </div>
      </div>
    </div>`;

  // ══════════════════════════════════════════════════════════════════
  // 2. EMAIL AL CLIENTE — confirmación de su pedido
  // ══════════════════════════════════════════════════════════════════
  const clientHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="background:#2D3147;padding:28px 32px;border-radius:12px 12px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:1px;">
          ¡Pedido confirmado!
        </h1>
        <p style="color:rgba(255,255,255,.6);margin:8px 0 0;font-size:13px;">
          Gracias por tu compra en Fancy Water
        </p>
      </div>
      <div style="background:#F4F3EF;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #D9D8D3;border-top:none;">

        <p style="font-size:15px;line-height:1.7;margin:0 0 24px;">
          Hola <strong>${customerName}</strong>, hemos recibido tu pedido correctamente.
          Nos pondremos en contacto contigo en breve para confirmar el envío.
        </p>

        <h2 style="font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#7A7975;margin:0 0 16px;">
          Tu pedido
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <thead>
            <tr>
              <th style="text-align:left;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Producto</th>
              <th style="text-align:center;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Cant.</th>
              <th style="text-align:right;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;padding-bottom:8px;">Total</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <div style="text-align:right;font-size:18px;font-weight:700;color:#2D3147;margin-bottom:24px;">
          Total: ${total}
        </div>

        ${addressLines ? `
        <div style="background:#fff;border:1px solid #D9D8D3;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
          <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B7B4AC;margin-bottom:8px;">Dirección de envío</div>
          <div style="font-size:14px;line-height:1.6;">${shippingName}<br>${addressLines}</div>
        </div>` : ''}

        <div style="background:#2D3147;border-radius:10px;padding:18px 20px;color:rgba(255,255,255,.8);font-size:13px;line-height:1.8;">
          ¿Tienes alguna duda sobre tu pedido?<br>
          Escríbenos al <strong style="color:#fff;">WhatsApp: 813 418 8472</strong> o a
          <a href="mailto:samuel@fancywater.mx" style="color:#fff;">samuel@fancywater.mx</a>
        </div>

        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #D9D8D3;font-size:11px;color:#B7B4AC;text-align:center;">
          Fancy Water · Distribuidora Médico-Estética · Monterrey, México<br>
          ${orderDate}
        </div>
      </div>
    </div>`;

  // ── Enviar ambos emails en paralelo ────────────────────────────────
  try {
    await Promise.all([
      // A samuel
      resend.emails.send({
        from:    'Fancy Water <pedidos@fancywater.mx>',
        to:      'samuel@fancywater.mx',
        subject: `🛒 Nuevo pedido — ${customerName} · ${total}`,
        html:    ownerHtml,
        text:    `NUEVO PEDIDO\n\nCliente: ${customerName}\nCorreo: ${customerEmail}\nTeléfono: ${customerPhone}\nDirección: ${addressLines}\n\nProductos:\n${itemsText}\n\nTotal: ${total}\nID: ${session.id}`,
      }),
      // Al cliente (solo si tiene email)
      ...(customerEmail ? [
        resend.emails.send({
          from:    'Fancy Water <pedidos@fancywater.mx>',
          to:      customerEmail,
          subject: `Confirmación de pedido — Fancy Water`,
          html:    clientHtml,
          text:    `¡Hola ${customerName}! Tu pedido en Fancy Water fue confirmado.\n\nProductos:\n${itemsText}\n\nTotal: ${total}\n\nContáctanos: samuel@fancywater.mx | WhatsApp 813 418 8472`,
        }),
      ] : []),
    ]);
    console.log('Emails enviados para pedido:', session.id);
  } catch (emailErr) {
    // No fallar el webhook por un error de email
    console.error('Error enviando emails:', emailErr.message);
  }

  res.status(200).json({ received: true });
};
