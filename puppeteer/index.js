const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Read CSS file
  const cssFilePath = 'styles.css';
  const cssContent = fs.readFileSync(cssFilePath, 'utf8');

  // Define template data
  const templateData = {
    title: 'Sample PDF',
    message: 'This is a sample PDF generated from HTML using Puppeteer.',
    name: 'John Doe',
    date: new Date().toLocaleDateString(),
  };

  // Define HTML template
  const htmlTemplate = `
    <html>
      <head>
        <title>${templateData.title}</title>
      </head>
      <body>
        <h1>Hello, ${templateData.name}!</h1>
        <p>${templateData.message}</p>
        <p>Generated on: ${templateData.date}</p>
      </body>
    </html>
  `;

  // Set the HTML content
  await page.setContent(htmlTemplate, { waitUntil: 'networkidle0' });

  // Inject CSS into the page
  await page.addStyleTag({ content: cssContent });

  // Generate PDF
  await page.pdf({ path: 'sample.pdf', format: 'A4' });

  await browser.close();
})();
