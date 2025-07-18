// api/cinetpay-return/[...slug].js
export default async function handler(req, res) {
  try {
    console.log('=== CINETPAY RETURN HANDLER ===');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    
    const { slug } = req.query;
    
    // Construire le chemin de redirection
    let redirectPath = '';
    if (Array.isArray(slug)) {
      redirectPath = slug.join('/');
    } else if (slug) {
      redirectPath = slug;
    }
    
    const redirectUrl = `https://unircorn.net/${redirectPath}`;
    
    console.log('Redirecting to:', redirectUrl);
    
    // Accepter POST et GET
    if (req.method === 'POST' || req.method === 'GET') {
      res.setHeader('Location', redirectUrl);
      res.status(302).end();
      return;
    }
    
    // Autres méthodes non supportées
    res.status(405).json({ 
      error: 'Method Not Allowed',
      method: req.method,
      allowed: ['GET', 'POST']
    });
    
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
