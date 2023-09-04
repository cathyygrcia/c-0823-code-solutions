/* exported chunk */
function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunked.push(chunk);
  }

  return chunked;
}
