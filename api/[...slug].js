export default function handler(req, res) {
  console.log('Method:', req.method);
  console.log('Query:', req.query);
  console.log('URL:', req.url);
  
  // Debug info
  const debugInfo = {
    method: req.method,
    url: req.url,
    query: req.query,
    slug: req.query.slug
  };
  
  if (req.method === 'POST') {
    const { slug } = req.query;
    const dynamicPath = slug ? slug.join('/') : '';
    
    console.log('POST detected, dynamicPath:', dynamicPath);
    
    // Pour l'instant, juste retourner du JSON pour voir si ça marche
    return res.json({
      message: 'POST received',
      dynamicPath,
      slug,
      redirectUrl: `https://unircorn.net/${dynamicPath}`
    });
  }
  
  // Pour les autres méthodes, retourner debug info
  return res.json(debugInfo);
}
