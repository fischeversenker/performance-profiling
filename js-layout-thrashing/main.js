const buttonElement = document.querySelector('button');
const contentElement = document.querySelector('#content');

buttonElement.addEventListener('click', () => {
  contentElement.innerHTML = '';
  const result = heavyTask();
  contentElement.innerHTML = JSON.stringify(result, null, 2);
});

function heavyTask() {
  const victim = document.querySelector('h1');

  for (let i = 0; i < 10000; i++) {
    victim.style.fontSize = '2em';
    victim.offsetLeft;
    victim.style.fontSize = 'revert';
  }
  return victim.clientHeight;
}
