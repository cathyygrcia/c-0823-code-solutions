const $openModal = document.querySelector('.open-modal');
const $overlay = document.querySelector('.overlay-container');
const $no = document.querySelector('.no-button');

$openModal.addEventListener('click', openButton);
$no.addEventListener('click', noButton);

function openButton(event) {
  $overlay.classList.remove('overlay-container');
}

function noButton(event) {
  $overlay.classList.add('overlay-container');
}
