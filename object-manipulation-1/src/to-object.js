/* exported toObject */
function toObject(keyValuePair) {
  const newObject = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    newObject[keyValuePair[0]] = keyValuePair[i];
  }
  return newObject;
}
