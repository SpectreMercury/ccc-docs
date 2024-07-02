// const fs = require('fs');
// const path = require('path');

// const docsPath = './docs/api'; // TypeDoc 生成的文档目录
// const targetBasePath = './docs/api'; // 新的目标基目录

// // 递归创建目录
// function ensureDir(dirPath) {
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true });
//   }
// }

// // 移动并重命名文件
// function reorganizeDocs(currentPath) {
//   fs.readdir(currentPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     files.forEach(file => {
//       if (file.isDirectory()) {
//         reorganizeDocs(path.join(currentPath, file.name)); // 递归处理子目录
//       } else {
//         const parts = file.name.split('.'); // 拆分文件名
//         if (parts.length > 2 && parts[0] === 'ccc') {
//           const category = parts[1]; // 分类如 Class, Function 等
//           const newFileName = file.name.replace(`ccc.${category}.`, ''); // 去掉 'ccc.分类.'
//           const categoryPath = path.join(targetBasePath, category.toLowerCase()); // 创建分类目录路径
//           const newFilePath = path.join(categoryPath, newFileName.toLowerCase()); // 组装新的文件路径

//           ensureDir(categoryPath); // 确保分类目录存在
//           fs.rename(path.join(currentPath, file.name), newFilePath, (err) => {
//             if (err) {
//               console.error(err);
//             } else {
//               console.log(`Moved ${file.name} to ${newFilePath}`);
//             }
//           });
//         }
//       }
//     });
//   });
// }

// reorganizeDocs(docsPath); // 开始处理文件
