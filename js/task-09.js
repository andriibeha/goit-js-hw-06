function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBth);

function onChangeColorBth() { 
  document.body.style.backgroundColor = `${getRandomHexColor()}`;

  textColorEl.textContent = getRandomHexColor()
}
