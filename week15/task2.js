const cities = ["Москва", "Оренбург", "Краснодар", "Мурманск", "Красноярск"];

let temps = [];
let i;
const listOfCities = document.getElementById('list');
const minTemp = document.getElementById('min');
const maxTemp = document.getElementById('max');

for (i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру в городе ${cities[i]}`);
    temps.push(Number(temperature));
};
console.log(temps);

for (i = 0; i < cities.length; i++) {
    const city = document.createElement('li');
    city.textContent = `Температура в городе ${cities[i]}: ${temps[i]} \u00B0C`;
    listOfCities.append(city);
};

let min = temps[0];
let max = min;
for (i = 1; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
    minTemp.innerText = `Минимальная температура: ${min}\u00B0C`;
    maxTemp.innerText = `Максимальная температура: ${max}\u00B0C`;
};