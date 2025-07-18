export default async function handler(req, res) {
  console.log('Method:', req.method, 'URL:', req.url);
  
  if (req.method === 'POST') {
    const { slug } = req.query;
    const dynamicPath = slug ? slug.join('/') : '';
    const postData = req.body;
    
    // Page HTML qui re-soumet automatiquement les données POST
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
            ${Object.entries(postData || {}).map(([key, value]) => 
              `<input type="hidden" name="${key}" value="${value}" />`
            ).join('')}
          </form>
          <script>
            // Attendre un peu pour que l'utilisateur voie le message
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
  
  // Pour les autres méthodes, retourner une erreur avec debug info
  return res.status(405).json({
    error: 'Method Not Allowed',
    method: req.method,
    url: req.url,
    allowedMethods: ['POST']
  });
}
