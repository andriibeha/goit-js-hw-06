/* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

Оновлюй інтерфейс новим значенням змінної counterValue. */

const refs = {
    BtnDecrement : document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
    BtnIncrement : document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;

refs.BtnDecrement.addEventListener('click', onBtnDecrement);
refs.BtnIncrement.addEventListener('click', onBtnIncrement);

function onBtnDecrement() { 
    counterValue = counterValue - 1;

    refs.counter.innerHTML = counterValue;
}

function onBtnIncrement() { 
    counterValue = counterValue + 1;
    
    refs.counter.innerHTML = counterValue;
}



