const fs = require('fs');
const path = require('path');

const chunkPath = path.join(__dirname, '..', '.next', 'static', 'chunks', '46066b2813a935b7.js');

if (fs.existsSync(chunkPath)) {
  const stub = `(function() {
    'use strict';
    var exports = {};
    var module = { exports: exports };
    if (typeof window !== 'undefined') {
      window.__FRAMER_MOTION_STUB__ = {};
    }
    return module.exports;
  })();
`;
  
  fs.writeFileSync(chunkPath, stub);
  console.log('✅ Заменил содержимое старого чанка framer-motion на заглушку');
} else {
  console.log('ℹ️ Старый чанк не найден, пропускаю замену');
}

// Также исправляем ссылки на старый чанк в других файлах
const chunksDir = path.join(__dirname, '..', '.next', 'static', 'chunks');
if (fs.existsSync(chunksDir)) {
  const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(chunksDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Удаляем ссылки на старый чанк
    content = content.replace(/"static\/chunks\/46066b2813a935b7\.js"[,]?/g, '');
    content = content.replace(/static\/chunks\/46066b2813a935b7\.js[,]?/g, '');
    content = content.replace(/,"static\/chunks\/46066b2813a935b7\.js"/g, '');
    content = content.replace(/,"static\/chunks\/46066b2813a935b7\.js",/g, '');
    
    // Исправляем Promise.all с пустым массивом
    content = content.replace(/Promise\.all\(\["static\/chunks\/4addbc03f5648801\.js",\]\.map/g, 'Promise.all(["static/chunks/4addbc03f5648801.js"].map');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
    }
  });
  
  if (fixedCount > 0) {
    console.log(`✅ Исправил ссылки на старый чанк в ${fixedCount} файлах`);
  }
}
