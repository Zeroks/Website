const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
});

function showAlert(text) {
  let alertEl = document.getElementsByClassName('alert-wrapper')[0];
  alertEl.children[0].children[0].innerHTML = text;
  alertEl.style.display = 'block';
  setTimeout(() => {
    alertEl.style.display = 'none';
  }, 3000);
}


let modal = document.getElementById('modal');
let btn = document.getElementById('openModal');
let close = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

let sendForm = document.getElementById('send-modal');

sendForm.onclick = function() {
  let input = document.getElementById('phone');

  if (input.value.trim() == '') {
    input.classList.add('is-invalid');
    input.previousElementSibling.classList.add('is-invalid');
    showAlert("Enter your number phone");
  } else {
    input.classList.remove('is-invalid');
    input.previousElementSibling.classList.remove('is-invalid');
    showAlert("Successfully!");
    input.value = '';
  }
}