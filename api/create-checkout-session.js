const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  // Only accept POST
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
      line_items: items.map(item => ({
        price_data: {
          currency: 'mxn',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Stripe usa centavos
        },
        quantity: item.qty,
      })),
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
