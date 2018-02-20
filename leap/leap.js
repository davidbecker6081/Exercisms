var Year = function(input) {
  this.year = input
};

Year.prototype.isLeap = function() {
  let intYear = parseInt(this.year)
  if (intYear % 4 === 0 && intYear % 100 !== 0) {
    return true
  } else if (intYear % 4 !== 0) {
    return false
  } else if (intYear % 4 === 0 &&  intYear % 100 === 0) {
    return intYear % 400 === 0
  } else {
    return false
  }
};

module.exports = Year;
