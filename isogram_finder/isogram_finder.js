const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every((word, letter) => {
    return this.word.indexOf(word) === letter
  });
};

module.exports = IsogramFinder;
