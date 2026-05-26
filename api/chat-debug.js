module.exports = async function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Prueba estos modelos en orden hasta encontrar uno que funcione
  const candidates = [
    'claude-haiku-4-5',
    'claude-haiku-4-0',
    'claude-3-haiku-20240307',
    'claude-3-5-sonnet-20241022',
    'claude-sonnet-4-5',
  ];

  const results = {};

  for (const model of candidates) {
    try {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model,
          max_tokens: 20,
          messages: [{ role: 'user', content: 'Di: OK' }],
        }),
      });
      const data = await r.json();
      results[model] = r.status === 200 ? '✅ FUNCIONA' : `❌ ${data?.error?.message || r.status}`;
      if (r.status === 200) break; // encontramos uno que jala
    } catch (e) {
      results[model] = `❌ Error: ${e.message}`;
    }
  }

  return res.status(200).json({ results });
};
