const isSubstring = function(searchString, substring) {
  for (let i = 0; i < searchString.length; i++) {
    for (let j = i+1; j < searchString.length; j++) {
      let subSubstring = searchString.slice(i, j);
      if (subSubstring === substring) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubstring("time to program", "time"))

console.log(isSubstring("Jump for joy", "joys"))

function isSubstring2(phrase, subphrase) {
  return phrase.includes(subphrase);
}
