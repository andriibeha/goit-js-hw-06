function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const BoxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);
  
function createBoxes(amount) {
  amount = parseInt(inputValueEl.value);

  const divArray = [];
  let width = 30;
  let height = 30;

  for (let index = 0; index < amount; index++) {
    const div = document.createElement("div");

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor()
    
    width += 10;
    height += 10;

    divArray.push(div)
    
  }

  BoxesEl.append(...divArray)
}

function destroyBoxes() {
  BoxesEl.innerHTML = ""
}

