const buttonElement = document.querySelector('button');
const contentElement = document.querySelector('#content');

buttonElement.addEventListener('click', () => {
  contentElement.innerHTML = '';
  const result = addPointlessElements();
  contentElement.innerHTML = JSON.stringify(result, null, 2);
});

function addPointlessElements() {
  for (let i = 0; i < 10000; i++) {
    const newElement = document.createElement('div');
    newElement.style.visibility = 'hidden';
    document.body.appendChild(newElement);
  }
  return Math.random();
}
