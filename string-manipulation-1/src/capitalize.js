/* exported capitalize */
function capitalize(word) {
  let str = '';
  for (let i = 0; i < word.length; i++) {
    const firstChar = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    str = firstChar + rest;
  }
  return str;
}
