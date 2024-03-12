// head command: returns the first element from a list of files
const fs = require('fs');

const returnHead = () => {
  fs.readdir('./', 'utf8', (error, data) => {
    if (error) console.log('Error returning head: ', error);
    else return console.log(data.slice('')[0])
  })
}

const returnTail = () => {
  fs.readdir('./', 'utf8', (error, data) => {
    if (error) console.log('Error returning head: ', error);
    else return console.log(data.slice('')[data.length-1])
  })
}

module.exports = {
  returnHead,
  returnTail,
}
