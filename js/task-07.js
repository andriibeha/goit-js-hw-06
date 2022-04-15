const refs = {
    inputEl: document.querySelector('input'),
    spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInputRangeChange);

function onInputRangeChange() { 
    const inputRangeSize = refs.inputEl.value;
    refs.spanEl.style.fontSize = `${inputRangeSize}px`
}

