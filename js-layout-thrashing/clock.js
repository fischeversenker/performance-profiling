const clock = document.querySelector('#clock');

function updateClock() {
  clock.innerHTML = Date.now();
  window.requestAnimationFrame(updateClock);
}

updateClock();
