const $bulb = document.querySelector('.bulb');
const $body = document.querySelector('body');

function bulbClick(event) {
  if ($bulb.className === 'bulb') {
    $bulb.className = 'bulb dark';
    $body.className = 'body dark';
  } else {
    $bulb.className = 'bulb';
    $body.className = 'body';
  }
}

$bulb.addEventListener('click', bulbClick);
