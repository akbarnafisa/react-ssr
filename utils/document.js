export const document = (htmlContent, initialData) => {
  return `
    <!DOCTYPE html >
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${htmlContent}</div>
        <script>window.__SSR_DATA__ = ${JSON.stringify(initialData)}</script>
        <script src="/static/app.js"></script>
      </body>
    </html>
    `;
}