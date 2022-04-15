const inputEl = document.querySelector('input');
 
inputEl.addEventListener('blur', onInputBlur);

const dataSetInputEl = parseInt(inputEl.dataset.length)

function onInputBlur(event) { 
    if (event.target.value.length === dataSetInputEl) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    } else { 
        inputEl.classList.add('invalid')
    }
}