const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()  //trim() remove espaços em branco 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        //mostrar o erro
        //add classe error
        errorValidation(username, 'Preencha esse campo')
    } else {
        //add classe de sucesso
        successValidation(username)
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)){
        errorValidation(email, 'E-mail invalido')
    } else {
        successValidation(email)
    }

    if(passwordValue === '') {
        errorValidation(password, 'Preencha esse campo')
    } else if (passwordValue.length < 8) {
        errorValidation(password, 'A senha deve ter 8 caracteres')
    } else{
        successValidation(password)
    }

    if(passwordtwoValue === ''){
        errorValidation(passwordtwo, 'Preencha esse campo')
    } else if (passwordValue !== passwordtwoValue) {
        errorValidation(passwordtwo, 'Senha não é a mesma')
    } else {
        successValidation(passwordtwo)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement; //parentElement retorna uma referencia direta do pai
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}


function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
