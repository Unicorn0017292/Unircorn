export default function handler(req, res) {
  return res.json({ 
    message: 'API works!', 
    method: req.method,
    url: req.url
  });
}
