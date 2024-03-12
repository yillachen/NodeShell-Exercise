// pwd should print out the pathname of where we are.

module.exports = (done) => {
  done(process.cwd()) // done is a success callback fn, pwd is the action that prints where you are in the terminal
}
