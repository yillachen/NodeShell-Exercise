module.exports = done => {
  let date = new Date();

  const format = {
    dd: date.getDate(),
    mm: date.getMonth(),
    yyyy: date.getFullYear(),
    hh: date.getHours(),
    ss: date.getSeconds(),
  }

  date = `${format.dd}/${format.mm}/${format.yyyy} ${format.hh}:${format.ss}`
  done(date);
}
