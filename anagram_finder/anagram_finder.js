const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((otherWord) => {
    if (otherWord.toLowerCase() === this.word) return false;
    return otherWord.toLowerCase().split('').sort().join('') === this.word.split('').sort().join('')
  })
}

module.exports = AnagramFinder;
