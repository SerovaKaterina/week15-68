const numbers = [];
//заполнить массив целыми числами от -10 до 10 с помощью цикла for

for( let i = -10; i <=10; i++) {
    numbers.push(i);
    console.log(numbers)
};
 //Удалите все отрицательные числа из массива

 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      numbers.splice(i, 1);
      i--;
    } else {
      numbers[i] = numbers[i] ** 2;//Возведите каждое число в квадрат
    }
  };

  //Отсортируйте числа в порядке убывания

  numbers.sort((a, b) => b - a);

  //Удалите повторяющиеся числа из массива
  
  const uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);