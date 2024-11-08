const result = document.getElementById('result');

const btn = document.getElementById('counter');

function countDays () {
    const birthday = document.getElementById('date').value;
    if (birthday == false) {
        result.innerText = 'Пожалуйста, введите дату рождения';
        result.classList.add('red');
    } else {
        let currentDate = Date.now();
        let birthDate = Date.parse(birthday);
        diffInDays = Math.ceil((birthDate - currentDate)/(1000*60*60*24));
        const days = rightLetter(diffInDays);
        result.innerText = `До вашего дня рождения осталось ${diffInDays} ${days}`;
        result.classList.remove('red');
        result.classList.add('normal');
    };
};
function rightLetter (number) {
    let a = number % 10;
    if (a == 1) {
        return 'день';
    } else if (a == 2 || a == 3 || a == 4) {
        return 'дня';
    } else {
        return 'дней';
    };
};

btn.addEventListener('click', countDays);
