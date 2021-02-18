const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every((word, index) => {
    return this.word.indexOf(word) === index
  });
};

module.exports = IsogramFinder;
