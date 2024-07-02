const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, './docs/api'); // 确保这是正确的源目录路径
const targetDir = path.join(__dirname, './docs/api'); // 确保这是正确的目标目录路径

// 子目录和前缀映射
const subdirectories = {
    'core': 'ccc',
    'eip6963': 'Eip6963',
    'joy-id': 'JoyId',
    'okx': 'Okx',
    'uni-sat': 'UniSat'
};

// 类别映射
const categories = {
    'Class': 'Class',
    'Function': 'Functions',
    'Variable': 'Variable',
    'Enumeration': 'Enumeration',
    'Namespace': 'Namespace' // 确保 Namespace 也被处理
};

// 创建目标目录结构
Object.entries(categories).forEach(([category, folder]) => {
    Object.keys(subdirectories).forEach(subdir => {
        const fullPath = path.join(targetDir, folder, subdir);
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Directory created: ${fullPath}`);
    });
});

// 移动文件
Object.entries(subdirectories).forEach(([subdir, prefix]) => {
    const sourceSubDir = path.join(sourceDir, subdir);
    fs.readdir(sourceSubDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error reading subdirectory ${sourceSubDir}:`, err);
            return;
        }

        files.forEach(file => {
            if (file.isFile()) {
                // 匹配 Namespace 和其它类别的文件
                const match = file.name.match(new RegExp(`^(?:${prefix}\.)?(Class|Function|Variable|Enumeration|Namespace)\.(.+)\.md$`));
                if (match) {
                    const category = categories[match[1]];
                    const newFileName = `${match[2]}.md`;
                    const oldPath = path.join(sourceSubDir, file.name);
                    const newPath = path.join(targetDir, category, subdir, newFileName);
                    fs.rename(oldPath, newPath, err => {
                        if (err) {
                            console.error(`Error moving file from ${oldPath} to ${newPath}:`, err);
                        } else {
                            console.log(`Moved ${file.name} to ${newPath}`);
                        }
                    });
                } else {
                    console.log(`Filename does not match pattern: ${file.name}`);
                }
            }
        });
    });
});
