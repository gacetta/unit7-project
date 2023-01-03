console.log('client side JS is up and running')

const button = document.querySelector('button');
const responseEl = document.querySelector('#response')

button.addEventListener('click', (e) => {
  e.preventDefault;

  responseEl.textContent = '';
  
  fetch('/test').then((response) => {
    response.json().then((data) => {
      responseEl.textContent = data;
    })
  })

})