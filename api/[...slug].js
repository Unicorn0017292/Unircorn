export default function handler(req, res) {
  if (req.method === 'POST') {
    const { slug } = req.query;
    // Enlever 'api' du chemin pour rediriger vers le bon endroit
    const dynamicPath = slug ? slug.join('/') : '';
    
    console.log('POST detected, dynamicPath:', dynamicPath);
    
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
    return res.send(html);
  }
  
  // Pour GET, redirection simple
  const { slug } = req.query;
  const dynamicPath = slug ? slug.join('/') : '';
  return res.redirect(302, `https://unircorn.net/${dynamicPath}`);
}
