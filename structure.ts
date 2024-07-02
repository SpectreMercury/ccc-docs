const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, './docs'); // 修改为你的Markdown文件存放目录

// 读取和更新文件中的链接，删除所有Markdown链接
function updateLinks(filePath) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // 正则表达式用于匹配并删除Markdown链接，只保留链接文本
    const updatedContent = content.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

    // 如果内容有更新，则写回文件
    if (content !== updatedContent) {
      fs.writeFile(filePath, updatedContent, 'utf8', err => {
        if (err) {
          console.error(`Error writing file ${filePath}:`, err);
          return;
        }
        console.log(`Updated links in ${filePath}`);
      });
    }
  });
}

// 遍历目录下的所有文件
function traverseDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Error reading directory: ${directory}`, err);
      return;
    }

    entries.forEach(entry => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        updateLinks(fullPath);
      }
    });
  });
}

traverseDirectory(docsDir);
