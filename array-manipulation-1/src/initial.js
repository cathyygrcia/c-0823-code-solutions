/* exported initial */
function initial(array) {
  const newArray = [];
  const length = array.length - 1;
  for (let i = 0; i < length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
