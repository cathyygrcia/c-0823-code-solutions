const $char = document.querySelectorAll('span');

let i = 0;

document.addEventListener('keydown', letter);

function letter(event) {
  if ($char[i].textContent === event.key) {
    $char[i].className = 'correct';
    i++;
    $char[i].classList.remove('underline');
    $char[i].classList.add('underline');
  } else {
    $char[i].className = 'incorrect';
    $char[i].classList.add('underline');
  }
}
