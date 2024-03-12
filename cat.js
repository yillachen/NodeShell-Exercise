const fs = require('fs');

// cat is a terminal command that prints out the file contents.

module.exports = (fileName, done) => { // needs to take a fileName parameter to determine which file we're reading
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) done(error.stack);
    else done(data)
  })
}
