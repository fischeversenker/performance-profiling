const buttonElement = document.querySelector('button');
const contentElement = document.querySelector('#content');

buttonElement.addEventListener('click', async () => {
  contentElement.innerHTML = '';
  const result = await fetch('//127.0.0.1:3000/posts').then((res) =>
    res.json()
  );
  contentElement.innerHTML = JSON.stringify(result, null, 2);
});
