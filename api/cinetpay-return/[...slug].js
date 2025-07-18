export default async function handler(req, res) {
  console.log('Method:', req.method);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  
  const { slug } = req.query;
  
  // Construire le chemin dynamique
  const dynamicPath = Array.isArray(slug) ? slug.join('/') : (slug || '');
  const redirectUrl = `https://unircorn.net/${dynamicPath}`;
  
  console.log('Redirecting to:', redirectUrl);
  
  // Gérer POST et GET
  if (req.method === 'POST' || req.method === 'GET') {
    // Redirection 302 vers la page FlutterFlow
    return res.redirect(302, redirectUrl);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
