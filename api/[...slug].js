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
          <title>Redirection...</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .spinner { border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 20px auto; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          </style>
        </head>
        <body>
          <h3>Redirection en cours...</h3>
          <div class="spinner"></div>
          <form id="redirectForm" method="POST" action="https://unircorn.net/${dynamicPath}">
            ${Object.entries(req.body || {}).map(([key, value]) => 
              `<input type="hidden" name="${key}" value="${value}" />`
            ).join('')}
          </form>
          <script>
            setTimeout(() => {
              document.getElementById('redirectForm').submit();
            }, 1000);
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
