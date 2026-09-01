const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.jsx')) {
      callback(dirPath);
    }
  });
}

walkDir(path.join(__dirname, 'src'), (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    // Check if line contains Signature or signature
    if (line.match(/signature/i)) {
      // Ignore if it's an import, a URL, email, or a prop assignment like attr="...Signature..."
      if (!line.match(/import|from|\.css|\.jpg|\.png|\.avif|\.otf|\.fr|\.com|href|url|className=|alt=|title=|description=|url=|\/signature|padelsignature/i)) {
        console.log(`${filePath}:${index + 1}: ${line.trim()}`);
      }
    }
  });
});
