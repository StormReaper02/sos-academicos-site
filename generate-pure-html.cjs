const fs = require('fs');

const rawHtml = fs.readFileSync('output.html', 'utf-8');
const css = fs.readFileSync('src/index.css', 'utf-8');

const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOS Acadêmicos - Da Ideia à Entrega</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Fredoka:wght@300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS Script -->
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    
    <!-- Custom CSS -->
    <style type="text/tailwindcss">
${css}
    </style>
</head>
<body>
    <div id="root">${rawHtml}</div>
    
    <script>
      // Toggle Mobile Menu
      document.addEventListener('DOMContentLoaded', () => {
          // Find the mobile menu button and drawer
          // (Requires setting IDs in the React code before SSR, or writing custom JS here)
      });
    </script>
</body>
</html>`;

fs.writeFileSync('index-puro.html', finalHtml);
console.log("Written to index-puro.html");
