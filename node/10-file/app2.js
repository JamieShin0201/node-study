const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8') //
  .then(console.log)
  .catch(console.error);

fs.writeFile('./file.txt', 'Hello, Jamie! ') //
  .catch(console.error);

fs.appendFile('./file.txt', 'Hello, Jamie! :)') //
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt') //
      .catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') //
  .then(console.log)
  .catch(console.error);
