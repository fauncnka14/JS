const form = document.forms.myForm; //Получаем форму

const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const agreeTermsCheckbox = form.elements.agreeTerms;
const gender = form.elements.pole;
const profession = form.elements.profession;
const passwordInput = form.elements.password;

const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const passwordError = document.getElementById('passwordError');


form.addEventListener('change', function (evt) {
    let hasError = false;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    ageError.style.display = 'none';
    passwordError.style.display = 'none';

    if (nameInput.value === '') {
        nameError.style.display = 'block';
        hasError = true;
    };
    if (validateEmail(emailInput.value) === false) {
        emailError.textContent = 'Введите корректный email.';
        emailError.style.display = 'block';
        hasError = true;
    };
    if (ageInput.value === '') {
        ageError.style.display = 'block';
        hasError = true;
    };
    if (passwordInput.value === '') {
        passwordError.style.display = 'block';
        hasError = true;
    };
    if (profession.value ==='0') {
        hasError = true;
    };
    if (gender.checked === false) {
        hasError = true;
    };
    if (hasError === false) {
        submitBtn.disabled = !agreeTermsCheckbox.checked;
    };
});

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
};

//Добавляем на неё обработчик события submit
form.addEventListener('submit', function (evt) {
    evt.preventDefault(); //Отменяем стандартное поведение
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(ageInput.value);
    console.log(gender.value);
    console.log(profession.value);
    console.log(passwordInput.value);
    console.log(agreeTermsCheckbox.checked);
    form.reset();
    submitBtn.disabled;
});