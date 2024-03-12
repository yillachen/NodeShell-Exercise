// curl prints out downloads the HTML content from websites!
const request = require('request')

module.exports = (url, done) => {
  url = !url.includes('https://') ? `https://${url}` : url;
  request(url, (err, response, body) => {
    if (err) done(err);
    else done(body);
  })
}
