//Задание 1
// Выведите числа от 1 до 10 в консоль
let i;
for(i = 1;i <= 10; i++) {
    console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for(i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for(i = 10; i >= 1; i--) {
    console.log(i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let x;
for(let i = 1; i <= 10; i++) {
    for(let y = 1; y <= 5; y++) {
        x = i*y;
    }
    console.log(x);
}
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
};
console.log(sum);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sumNumbers = 0;
for(let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
    console.log(sumNumbers);
}
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
    let animalsText = "прекрасное животное";
    let animalsData = animals[i] + '-' + animalsText;
    console.log(animalsData);
}
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str) {
    console.log(symbol);
  }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let arr of array) {
console.log(arr);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
    const sentencesText = sentences[i].split('');
    console.log(sentencesText);
}
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sumEl = 0;
    for(let number of numbers) {
        sumEl += number;
        console.log(sumEl);
    }
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let item of list) {
    console.log(item.length);
  }
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const texts = ['words'];
for (let text of texts) {
    console.log(text.toUpperCase());
  }
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letter of greeting) {
    if (vowels.includes(letter)) {
    vowelCount++;
    }
}
  console.log(vowelCount);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const newWords = words.join(' ');
console.log(newWords);
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let reverseNum = 10;
while (reverseNum >= 1) {
    console.log(reverseNum);
    reverseNum--;
  } 
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
//let i = 0;
while (i <= 0) {
    console.log("в массиве есть отрицательные элементы");
    break;
  } 
//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
//let i = 0;
do {
    console.log(random[i]);
    i++;
} while (random[i] >= 0); 
//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
//let i = 1;
do{
    if (i % 3 !== 0)
    console.log(i);
    i++;
} while (i <= 100);
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
/* let sumNum = 0;
do {
    let numeric = +prompt('Введите любое число:');
    sumNum += numeric;
} while (sumNum <= 100);
console.log(`Сумма чисел превышает 100`); */
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeColor(blue){
    document.getElementById("h4").style.background = blue;
}
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
do {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[randomIndex];
  } while (randomString.length < 6);
  console.log(randomString);