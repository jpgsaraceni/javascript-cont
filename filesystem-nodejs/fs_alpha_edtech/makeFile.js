const fs = require('fs');

////////////////////////
//    ASSÍNCRONA      //
////////////////////////

const data = new Uint8Array(Buffer.from('Done.'));
fs.writeFile('dirA/textoB.txt', data, (err) => {
  if (err) throw err;
});

///////////////////////
//      SÍNCRONA     //
///////////////////////

const dataSync = new Uint8Array(Buffer.from('Done.'));
fs.writeFileSync('dirA_sync/textoB_sync.txt', dataSync, (err) => {
  if (err) throw err;
});