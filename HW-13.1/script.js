const form = document.getElementById('helpForm');
const usernameInput = document.querySelector('.js-username');
const commentsInput = document.querySelector('.js-comments');
const phoneInput = document.querySelector('.js-phone_number');
const emailInput = document.querySelector('.js-email');
const errorName = document.querySelector('.js-error-name');
const errorComments = document.querySelector('.js-error-comments');
const errorPhone = document.querySelector('.js-error-phone');
const errorEmail = document.querySelector('.js-error-email');

const namePattern = /^[A-Za-zА-Яа-яЁё ]{2,}$/;
const phonePattern = /^\+380\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
    const nameValue = usernameInput.value.trim();
    if (!nameValue) {
        errorName.textContent = 'Ім\'я обов\'язкове для заповнення.';
        return false;
    } else if (!namePattern.test(nameValue)) {
        errorName.textContent = 'Ім\'я повинно містити лише букви та пробіли, не менше 2 символів.';
        return false;
    } else {
        errorName.textContent = '';
        return true;
    }
}

function validateComments() {
    const commentsValue = commentsInput.value.trim();
    if (commentsValue.length < 5) {
        errorComments.textContent = 'Повідомлення повинно містити не менше 5 символів.';
        return false;
    } else {
        errorComments.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    if (!phonePattern.test(phoneValue)) {
        errorPhone.textContent = 'Номер телефону повинен починатися з +380 та містити 9 цифр після коду.';
        return false;
    } else {
        errorPhone.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (!emailPattern.test(emailValue)) {
        errorEmail.textContent = 'Введіть дійсну адресу електронної пошти з @ та крапкою.';
        return false;
    } else {
        errorEmail.textContent = '';
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isCommentsValid = validateComments();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    
    return isNameValid && isCommentsValid && isPhoneValid && isEmailValid;
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        console.log('Ім\'я:', usernameInput.value);
        console.log('Повідомлення:', commentsInput.value);
        console.log('Номер телефону:', phoneInput.value);
        console.log('Email:', emailInput.value);
    }
});

usernameInput.addEventListener('input', validateName);
commentsInput.addEventListener('input', validateComments);
phoneInput.addEventListener('input', validatePhone);
emailInput.addEventListener('input', validateEmail);


