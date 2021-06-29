const path = require('path');
const fs = require('fs').promises;

targetFolder = process.argv[2];
console.log(`target folder: ${targetFolder}`);

targetPath = path.join(__dirname, targetFolder);
console.log(`target path: ${path.join(__dirname, targetFolder)}`);

capturedPath = path.join(__dirname, targetFolder, 'captured');
duplicatedPath = path.join(__dirname, targetFolder, 'duplicated');
videoPath = path.join(__dirname, targetFolder, 'video');

fs.mkdir(capturedPath) //
  .catch(console.error);

fs.mkdir(duplicatedPath) //
  .catch(console.error);

fs.mkdir(videoPath) //
  .catch(console.error);

fs.readdir(targetPath) //
  .then((files) => {
    files.forEach((file) => {
      const filePath = path.join(targetPath, file);

      if (file.endsWith('.png') || file.endsWith('.aae')) {
        const nextFilePath = path.join(capturedPath, file);

        fs.rename(filePath, nextFilePath) //
          .catch(console.error);
      }

      if (file.endsWith('.mov') || file.endsWith('.mp4')) {
        const nextFilePath = path.join(videoPath, file);

        fs.rename(filePath, nextFilePath) //
          .catch(console.error);
      }

      if (file.startsWith('IMG_E')) {
        originalFile = file.slice(0, 4) + file.slice(5);

        const filePath = path.join(targetPath, originalFile);
        const nextFilePath = path.join(duplicatedPath, originalFile);

        fs.rename(filePath, nextFilePath) //
          .catch(console.error);
      }
    });
  })
  .catch(console.error);
