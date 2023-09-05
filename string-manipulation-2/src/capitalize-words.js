/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  let newString = '';
  for (let i = 0; i < words.length; i++) {
    newString += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    if (i < words.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
