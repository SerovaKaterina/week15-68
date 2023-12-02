const citiesData = document.querySelector('.data');
const cities = ["Москва", "Мурманск", "Краснодар", "Иркутск", "Хабаровск"];
const temp = [];
// Создаем цикл, который пройдет по массиву и попросит пользователя ввести информацию
for (let i = 0; i < cities.length; i++) {
    const temperatura = prompt(`Введите температуру для ${cities[i]}`);
    if(isNaN(temperatura)) {
        alert('Вы ввели некорректное число! Попробуйте ещё раз.');
    };//проверяем, является ли введеное значение  корректным
    temp.push(+temperatura);//преобразуем строку в число
    const city = document.createElement('li');
    city.textContent = `Температура в городе ${cities[i]}: ${temperatura} °С`;
    citiesData.append(city);
};
//Находим минимальную и максимальную температуру
const minimum = Math.min(...temp);
const maximum = Math.max(...temp);
// Добавляем информацию на страницу о минимальной и максимальной температуре
const minTemp = document.createElement('h2');
const maxTemp = document.createElement('h2');
minTemp.textContent = `Минимальная температура: ${minimum} °С`;
maxTemp.textContent = `Маскимальная температура: ${maximum} °С`;
citiesData.after(minTemp);
citiesData.after(maxTemp);