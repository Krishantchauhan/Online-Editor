import React from 'react';

function Output({ html, css, js }) {
  const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
    </html>
  `;

  return <iframe title="Output" className="w-full h-full" sandbox="allow-scripts" srcDoc={srcDoc} />;
}

export default Output;
