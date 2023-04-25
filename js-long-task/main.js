const buttonElement = document.querySelector('button');
const contentElement = document.querySelector('#content');

buttonElement.addEventListener('click', () => {
  contentElement.innerHTML = '';

  performance.mark('heavyTask:start');
  const result = heavyTask();
  performance.mark('heavyTask:stop');

  const measure = performance.measure('heavyTask', {
    start: 'heavyTask:start',
    end: 'heavyTask:stop',
  });
  console.log(measure.duration);

  contentElement.innerHTML = JSON.stringify(result, null, 2);
});

function heavyTask() {
  for (let i = 0; i < 1000000; i++) {
    Math.acos(Math.sqrt(i) * Math.pow(i, Math.log(i))) *
      Math.exp(Math.hypot([i]));
  }
  return Math.random();
}
