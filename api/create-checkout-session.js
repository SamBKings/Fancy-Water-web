const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { items, shipping } = req.body;
  if (!items || !items.length) return res.status(400).json({ error: 'El carrito está vacío' });

  // ── Construir shipping_options ─────────────────────────────────────
  // Si el frontend pasó una tarifa real de envia.com la usamos;
  // si no, caemos a las tarifas fijas como respaldo.
  let shippingOptions;

  if (shipping && shipping.name && typeof shipping.price === 'number') {
    // Tarifa dinámica seleccionada por el cliente
    shippingOptions = [{
      shipping_rate_data: {
        type:         'fixed_amount',
        fixed_amount: { amount: Math.round(shipping.price * 100), currency: 'mxn' },
        display_name: shipping.name,
        ...(shipping.days ? {
          delivery_estimate: {
            minimum: { unit: 'business_day', value: parseInt(shipping.days) || 1 },
            maximum: { unit: 'business_day', value: parseInt(shipping.days) + 1 || 5 },
          }
        } : {}),
      },
    }];
  } else {
    // Tarifas fijas de respaldo (si no se cotizó)
    shippingOptions = [
      {
        shipping_rate_data: {
          type:         'fixed_amount',
          fixed_amount: { amount: 15000, currency: 'mxn' },
          display_name: 'Envío Estándar',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 3 },
            maximum: { unit: 'business_day', value: 5 },
          },
        },
      },
      {
        shipping_rate_data: {
          type:         'fixed_amount',
          fixed_amount: { amount: 25000, currency: 'mxn' },
          display_name: 'Envío Express (1–2 días)',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 1 },
            maximum: { unit: 'business_day', value: 2 },
          },
        },
      },
      {
        shipping_rate_data: {
          type:         'fixed_amount',
          fixed_amount: { amount: 0, currency: 'mxn' },
          display_name: 'Recoger en almacén (Monterrey)',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 1 },
            maximum: { unit: 'business_day', value: 1 },
          },
        },
      },
    ];
  }

  // Calcular total para conversión de Google Ads
  const subtotal    = items.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);
  const shippingAmt = (shipping && typeof shipping.price === 'number') ? shipping.price : 0;
  const orderTotal  = Math.round(subtotal + shippingAmt);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types:         ['card'],
      locale:                       'es',
      shipping_address_collection:  { allowed_countries: ['MX'] },
      phone_number_collection:      { enabled: true },
      shipping_options:             shippingOptions,
      line_items: items.map(item => ({
        price_data: {
          currency:     'mxn',
          product_data: { name: item.name },
          unit_amount:  Math.round(item.price * 100),
        },
        quantity: item.qty,
      })),
      mode:        'payment',
      success_url: `https://www.fancywater.mx/?payment=success&value=${orderTotal}&sid={CHECKOUT_SESSION_ID}`,
      cancel_url:  'https://www.fancywater.mx/#productos',
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
};
