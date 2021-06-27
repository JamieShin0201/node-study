const fs = require('fs');

// 3
// rename(..., callback(error, data))
// try { renameSync(...) } catch(e) { }
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt'); // 동기이기에 가급적 사용하지 않는게 좋다.
} catch (error) {
  console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello!!');

fs.promises
  .rename('./text2.txt', './text2-new.txt') //
  .then(() => console.log('Done'))
  .catch(console.error);
