function pop() {
  const player = document.getElementsByClassName('player')[0];
  const image = document.getElementsByClassName('bolhaLogo')[0];

  image.classList.remove('make');
  image.classList.add('pop');
  player.play();
  setTimeout(() => {
    image.src = `/assets/png/${Math.floor(Math.random() * 3) + 1}.png`;
    player.src = `/assets/mp3/${Math.floor(Math.random() * 2) + 1}.mp3`;
    image.classList.remove('pop');
    image.classList.add('make');
  }, 600);
}

function resetAnimation(element, className) {
  element.classList.add(className);
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null;
}

function type(text) {
  return new Promise((resolve) => {
    
  });
}