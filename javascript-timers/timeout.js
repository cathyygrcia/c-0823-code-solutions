const $message = document.querySelector('.message');

function timeOut() {
  $message.textContent = 'Hello There';
}

setTimeout(timeOut, 2000);
