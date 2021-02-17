const AnagramFinder = function (word) {
  this.word = word.split('');
  console.log(this.work)
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((otherWord) => {
    return otherWord.split('') === this.word.length
  })
}

module.exports = AnagramFinder;
