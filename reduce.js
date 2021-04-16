// reduce() = reduces an array to a single value, the return value of the callback function is the accumulated result, an is provided as an argument in the next call to the callback function.

let letters = ["I", "M", "A", "A", "D"];

function combineLetters(total, nextLetter, index, array) {
  return total + nextLetter;
}

let word = letters.reduce(combineLetters);
console.log(word);