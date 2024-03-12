module.exports = (string, done) => {
  string = string.replace('echo', '')
  if (string) done(string)
  else done('No string entered')
}
