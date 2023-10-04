// soal2.js

const fs = require('fs');

const logData = 'Ini adalah contoh log yang akan ditulis ke dalam file.\n';

fs.writeFile('log.txt', logData, (err) => {
  if (err) {
    console.error('Gagal menulis file:', err);
  } else {
    console.log('Log telah berhasil ditulis ke dalam file.');
  }
});
