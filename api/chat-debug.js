module.exports = async function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const info = {
    hasKey: !!apiKey,
    keyPrefix: apiKey ? apiKey.slice(0, 18) + '...' : 'NO KEY',
    nodeVersion: process.version,
  };
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 30,
        messages: [{ role: 'user', content: 'Di solo: OK' }],
      }),
    });
    const data = await response.json();
    return res.status(200).json({ ...info, httpStatus: response.status, response: data });
  } catch (err) {
    return res.status(200).json({ ...info, fetchError: err.message });
  }
};
