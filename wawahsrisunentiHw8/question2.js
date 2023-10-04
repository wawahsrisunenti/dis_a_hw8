// question2.js

const fs = require('fs');

const logData = 'This is an example log that will be written to a file.\n';

fs.writeFile('log.txt', logData, (err) => {
  if (err) {
    console.error('Failed to write the file:', err.message);
  } else {
    console.log('The log has been successfully written to the file.');
  }
});
