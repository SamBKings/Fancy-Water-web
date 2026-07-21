const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// Cache audience ID so we only fetch it once per cold start
let cachedAudienceId = process.env.RESEND_AUDIENCE_ID || null;

async function getAudienceId() {
  if (cachedAudienceId) return cachedAudienceId;
  // Auto-detect: use the first audience in the account
  const { data } = await resend.audiences.list();
  if (data && data.data && data.data.length > 0) {
    cachedAudienceId = data.data[0].id;
    return cachedAudienceId;
  }
  throw new Error('No se encontró ningún Audience en Resend');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Correo inválido' });
  }

  try {
    const audienceId = await getAudienceId();

    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    // Welcome email with discount code
    await resend.emails.send({
      from: 'Fancy Water <hola@fancywater.mx>',
      to:   email,
      subject: 'Tu código de 10% OFF — Fancy Water',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#2D3147;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <p style="color:rgba(255,255,255,.5);font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px;">Distribuidora Médico-Estética</p>
            <h1 style="color:#fff;margin:0;font-size:18px;letter-spacing:3px;font-weight:600;">FANCY WATER</h1>
          </div>
          <div style="background:#F4F3EF;padding:32px;border-radius:0 0 12px 12px;border:1px solid #D9D8D3;border-top:none;text-align:center;">
            <h2 style="color:#2D3147;font-size:22px;margin:0 0 10px;font-weight:700;">Tu código de descuento</h2>
            <p style="color:#7A7975;line-height:1.7;margin:0 0 24px;font-size:14px;">
              Aplícalo al finalizar tu compra y obtén un <strong style="color:#2D3147;">10% de descuento</strong> en tu primer pedido.
            </p>
            <div style="background:#fff;border:2px dashed #2D3147;border-radius:12px;padding:20px 24px;margin:0 0 24px;">
              <p style="font-size:10px;letter-spacing:2px;color:#9A9792;text-transform:uppercase;margin:0 0 8px;">Código de descuento</p>
              <p style="font-family:monospace;font-size:30px;font-weight:700;color:#2D3147;letter-spacing:5px;margin:0 0 6px;">BIENVENIDO10</p>
              <p style="font-size:11px;color:#9A9792;margin:0;">10% OFF · Válido en tu primera compra</p>
            </div>
            <a href="https://www.fancywater.mx/#productos" style="background:#2D3147;color:#fff;padding:14px 32px;border-radius:50px;text-decoration:none;font-size:11px;letter-spacing:2px;text-transform:uppercase;display:inline-block;font-weight:600;">
              Ver catálogo →
            </a>
            <p style="color:#B7B4AC;font-size:11px;margin-top:28px;line-height:1.6;">
              Distribuidora Médico-Estética · México<br>
              <a href="mailto:hola@fancywater.mx" style="color:#B7B4AC;">hola@fancywater.mx</a>
            </p>
          </div>
        </div>
      `
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    if (err.message?.includes('already exists') || err.statusCode === 422) {
      return res.status(200).json({ ok: true });
    }
    res.status(500).json({ error: err.message });
  }
};
