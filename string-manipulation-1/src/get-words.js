/* exported getWords */
function getWords(string) {
  const split = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return split;
  }
}
