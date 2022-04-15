/* Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
підставляє його поточне значення в span#name - output.Якщо інпут порожній,
у спані повинен відображатися рядок "Anonymous". */

const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInput);

function onInput(event) { 
    const result = event.target.value;
    
    refs.outputEl.textContent = result

    if (refs.outputEl.textContent === "") {
     refs.outputEl.textContent = "Anonymous"
    }
};

