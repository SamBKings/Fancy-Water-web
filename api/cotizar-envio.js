// ── Cotizar envío con envia.com ────────────────────────────────────────
// Recibe: { cp: "64000", items: [...] }
// Devuelve: array de opciones de envío con precio, transportista y días

const ENVIA_API_KEY = process.env.ENVIA_API_KEY;
const ENVIA_API_URL = 'https://api.envia.com/ship/rate/';

// Origen: almacén Fancy Water, Monterrey
const ORIGIN = {
  name:       'Fancy Water',
  company:    'Fancy Water',
  email:      'samuel@fancywater.mx',
  phone:      '8134188472',
  street:     'Av Lázaro Cárdenas 2224 Int 103',
  number:     '2224',
  district:   'Zona Loma Larga Oriente',
  city:       'Monterrey',
  state:      'NL',
  country:    'MX',
  postalCode: '66266',
  reference:  'Int 103',
};

// Paquete estándar para productos médico-estéticos
// Ajusta weight y dimensions según tus empaques reales
function buildPackage(items) {
  const totalQty = (items || []).reduce((s, i) => s + (i.qty || 1), 0);
  return {
    content:       'Productos médico-estéticos',
    amount:        1,
    type:          'box',
    weight:        Math.max(0.5, totalQty * 0.4), // ~400g por producto
    insurance:     0,
    declaredValue: (items || []).reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0),
    weightUnit:    'KG',
    lengthUnit:    'CM',
    dimensions:    { length: 25, width: 20, height: 15 },
  };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  if (!ENVIA_API_KEY) {
    return res.status(500).json({ error: 'ENVIA_API_KEY no configurada' });
  }

  const { cp, items } = req.body || {};
  if (!cp || !/^\d{5}$/.test(cp)) {
    return res.status(400).json({ error: 'Código postal inválido (5 dígitos)' });
  }

  const body = {
    origin:      ORIGIN,
    destination: {
      name:       'Cliente',
      country:    'MX',
      postalCode: cp,
    },
    packages: [buildPackage(items)],
    shipment: {
      carrier: ['estafeta', 'fedex', 'dhl', 'sendex', 'ups'],
      type:    1,
    },
    settings: { currency: 'MXN' },
  };

  try {
    const response = await fetch(ENVIA_API_URL, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${ENVIA_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Envia API error:', JSON.stringify(data));
      return res.status(502).json({ error: 'No se pudo cotizar el envío', detail: data });
    }

    // Normalizar respuesta → array limpio para el frontend
    const rates = (data.data || []).map(r => ({
      id:         `${r.carrier}_${r.service}`,
      carrier:    r.carrier,
      service:    r.service,
      name:       `${(r.carrier || '').toUpperCase()} — ${r.serviceDescription || r.service}`,
      price:      Math.round(r.totalPrice || r.price || 0),
      days:       r.deliveryEstimate || r.days || '3–5',
      currency:   'MXN',
    })).filter(r => r.price > 0).sort((a, b) => a.price - b.price);

    // Agregar siempre opción de recoger en Monterrey gratis
    rates.push({
      id:      'pickup_monterrey',
      carrier: 'pickup',
      service: 'pickup',
      name:    'Recoger en almacén — Monterrey',
      price:   0,
      days:    '1',
      currency:'MXN',
    });

    res.status(200).json({ rates });
  } catch (err) {
    console.error('Cotizar envío error:', err.message);
    res.status(500).json({ error: 'Error al cotizar envío' });
  }
};
