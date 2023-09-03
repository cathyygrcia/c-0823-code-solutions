/* exported takeRight */
function takeRight(array, count) {
  if (count >= array.length) {
    return array.slice();
  } else {
    return array.slice(-count);
  }
}
