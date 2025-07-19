// pages/api/[...slug].js
export default function handler(req, res) {
  // Debug: log de la méthode et du chemin
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Query:', req.query);
  
  // Vérifier si la méthode est supportée
  if (req.method === 'POST') {
    const { slug } = req.query;
    const dynamicPath = slug ? slug.join('/') : '';
    
    console.log('POST detected, dynamicPath:', dynamicPath);
    console.log('Body:', req.body);
    
    // Page HTML qui re-soumet vers ton site SANS /api/
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Redirection en cours...</title>
        <meta charset="utf-8">
      </head>
      <body>
        <p>Redirection en cours...</p>
        <form method="POST" action="https://unircorn.net/${dynamicPath}" id="redirectForm">
          ${Object.entries(req.body || {}).map(([key, value]) => 
            `<input type="hidden" name="${key}" value="${value}">`
          ).join('')}
        </form>
        <script>
          document.getElementById('redirectForm').submit();
        </script>
      </body>
      </html>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  }
  
  if (req.method === 'GET') {
    const { slug } = req.query;
    const dynamicPath = slug ? slug.join('/') : '';
    console.log('GET detected, redirecting to:', `https://unircorn.net/${dynamicPath}`);
    return res.redirect(302, `https://unircorn.net/${dynamicPath}`);
  }
  
  // Si ni GET ni POST, retourner 405
  console.log('Method not allowed:', req.method);
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: 'Method not allowed' });
}
