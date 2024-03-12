const fs = require('fs'); // require fs module to use .readdir method. fs.readdir( path, options, callback )

// ls should print out a list of files inside the given folder

module.exports = done => {
  fs.readdir('./', 'utf8', (error, data) => {
    if (error) done(error.stack);
    else done(data.join('\n'));
  })
}
