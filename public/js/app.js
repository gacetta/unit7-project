console.log('client side JS is up and running');

const buttonEl = document.querySelector('button');
const buttonResponseEl = document.querySelector('#button-response');

buttonEl.addEventListener('click', (e) => {

  buttonResponseEl.textContent = '...Loading';

  fetch('/greet').then((response) => {
    response.json().then((data) => {
      buttonResponseEl.textContent = data.message;
    })
  })
})