// question2.js

const fs = require('fs');

const logData = 'This is an example log that will be written to a file.\n';

fs.writeFile('log.txt', logData, (err) => {
  if (err) {
    console.error('Failed to write the file:', err.message);
  } else {
    console.log('The log has been successfully written to the file. This is Homework in week-7 by Wawah Sri Sunenti, FSWD 5B');

    // show my name
    const myName = "Wawah Sri Sunenti from Politeknik LP3I Bandung"; 
    console.log(`Hello, I am ${myName}!`);
  }
});
