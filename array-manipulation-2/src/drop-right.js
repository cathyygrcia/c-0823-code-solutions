/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  } else {
    return array.slice(0, array.length - count);
  }
}
