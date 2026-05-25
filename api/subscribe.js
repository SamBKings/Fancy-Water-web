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

    // Welcome email to subscriber
    await resend.emails.send({
      from: 'Fancy Water <hola@fancywater.mx>',
      to:   email,
      subject: 'Bienvenido a Fancy Water 🎉',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#2D3147;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:2px;">FANCY WATER</h1>
          </div>
          <div style="background:#F4F3EF;padding:32px;border-radius:0 0 12px 12px;border:1px solid #D9D8D3;border-top:none;text-align:center;">
            <h2 style="color:#2D3147;font-size:22px;margin:0 0 12px;">¡Ya eres parte de la comunidad!</h2>
            <p style="color:#7A7975;line-height:1.7;margin:0 0 24px;">
              Recibirás nuestras mejores promociones, lanzamientos y precios exclusivos directamente en tu correo.
            </p>
            <a href="https://fancywater.mx/#productos" style="background:#2D3147;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:13px;letter-spacing:1px;display:inline-block;">
              VER CATÁLOGO
            </a>
            <p style="color:#B7B4AC;font-size:11px;margin-top:24px;">
              Distribuidora Médico-Estética · México<br>
              <a href="mailto:samuel@fancywater.mx" style="color:#B7B4AC;">samuel@fancywater.mx</a>
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
