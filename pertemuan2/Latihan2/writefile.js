const fs = require('fs');

var content = "Hello World";
fs.writeFile('example2.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully.');
});