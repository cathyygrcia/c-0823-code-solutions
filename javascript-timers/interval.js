const $countDown = document.querySelector('.countdown-display');
let count = 4;

const interval = setInterval(countDown, 1000);

function countDown() {
  count--;
  if (count > 0) {
    $countDown.textContent = count;
  } else {
    $countDown.textContent = '~Earth Beeelooowww us';
    clearInterval(interval);
  }
}
