const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre = '', empresa = '', email = '', telefono = '', mensaje = '' } = req.body || {};

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    await resend.emails.send({
      from: 'Fancy Water Web <pedidos@fancywater.mx>',
      to:   'samuel@fancywater.mx',
      replyTo: email,
      subject: `📋 Nueva solicitud de ${nombre}${empresa ? ' · ' + empresa : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#2D3147;padding:28px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:1px;">
              FANCY WATER — Nueva Solicitud
            </h1>
          </div>
          <div style="background:#F4F3EF;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #D9D8D3;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;width:140px;">Nombre</td>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;font-weight:600;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;">Clínica / Spa</td>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;">${empresa || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;">Correo</td>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;"><a href="mailto:${email}" style="color:#2D3147;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;color:#7A7975;font-size:13px;">Teléfono</td>
                <td style="padding:10px 0;border-bottom:1px solid #D9D8D3;">${telefono || '—'}</td>
              </tr>
              <tr>
                <td style="padding:14px 0 0;color:#7A7975;font-size:13px;vertical-align:top;">Mensaje</td>
                <td style="padding:14px 0 0;white-space:pre-wrap;">${mensaje || '—'}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #D9D8D3;font-size:12px;color:#B7B4AC;">
              Enviado desde fancywater.mx · ${new Date().toLocaleString('es-MX',{timeZone:'America/Monterrey'})}
            </div>
          </div>
        </div>
      `
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    res.status(500).json({ error: err.message });
  }
};
