const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((alphabet) => {
    return this.phrase.includes(alphabet)
  });
};

module.exports = PangramFinder;
