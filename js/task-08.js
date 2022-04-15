const formEl = document.querySelector('form');

const formData = { };

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) { 
    event.preventDefault();

    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if ( email === "" || password === "") { 
        alert('All fields must be filled!   Всі поля повинні бути заповнені!')
    } else { 
        formData.name = email;
        formData.password = password;
        console.log('Form Data: ', formData);
        formEl.reset();
    }
};

