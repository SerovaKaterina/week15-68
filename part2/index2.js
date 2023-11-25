const citiesData = document.querySelector('.data');
const cities = ["Москва", "Мурманск", "Краснодар", "Иркутск", "Хабаровск"];
const temp = [];

for (let i = 0; i < cities.length; i++) {
    const temperatura = prompt(`Введите температуру для ${cities[i]}`);
    temp.push(temperatura);
    const city = document.createElement('li');
    city.textContent = `Температура в городе ${cities[i]}: ${temperatura} °С`;
    citiesData.append(city);
};
let minimum = Infinity;
let maximum = -Infinity;
for (let i = 0; i < temp.length; i++) {
    const result = temp[i];
    if (result < minimum) {
    minimum = result;
    }
    if (result> maximum) {
    maximum = result;
    }
}

const minTemp = document.createElement('h2');
const maxTemp = document.createElement('h2');
minTemp.textContent = `Минимальная температура: ${minimum} °С`;
maxTemp.textContent = `Маскимальная температура: ${maximum} °С`;
citiesData.after(minTemp);
citiesData.after(maxTemp);