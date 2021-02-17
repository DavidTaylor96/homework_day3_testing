const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  count = 1
  return this.word.every((banana, index) => {
    return this.word.indexOf(banana) === index
  });
};

module.exports = IsogramFinder;
