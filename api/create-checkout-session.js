const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { items } = req.body;
  if (!items || !items.length) {
    return res.status(400).json({ error: 'El carrito está vacío' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      locale: 'es',

      // ── Collect full shipping address ──────────────────────────────
      shipping_address_collection: {
        allowed_countries: ['MX'],
      },

      // ── Shipping options (customer chooses at checkout) ────────────
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 15000, currency: 'mxn' }, // $150 MXN
            display_name: 'Envío Estándar',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 5 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 25000, currency: 'mxn' }, // $250 MXN
            display_name: 'Envío Express (1–2 días)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 2 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'mxn' }, // gratis
            display_name: 'Recoger en almacén (Monterrey)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 1 },
            },
          },
        },
      ],

      // ── Products ───────────────────────────────────────────────────
      line_items: items.map(item => ({
        price_data: {
          currency: 'mxn',
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.qty,
      })),

      // ── Ask for phone number too ───────────────────────────────────
      phone_number_collection: { enabled: true },

      mode: 'payment',
      success_url: 'https://fancywater.mx/?payment=success',
      cancel_url:  'https://fancywater.mx/#productos',
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
};
