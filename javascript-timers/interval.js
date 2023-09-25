const $countDown = document.querySelector('.countdown-display');
let count = $countDown.textContent;
const interval = setInterval(countDown, 1000);

function countDown() {
  $countDown.textContent = count;

  if (count === 0) {
    $countDown.textContent = '~Earth Beeeeloooww Us~';
    clearInterval(interval);
  }
  count--;
}
