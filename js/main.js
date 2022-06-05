/*
Функция, возвращающая случайное целое число из переданного диапазона включительно
Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Добавлены условия проверки неотрицательности значений диапазона, а также условие о верхней границе
*/

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return false;
    //console.log('Ошибка! Диапазон может быть только положительный')
    //почему линт ругается на консоль? в тренажерах сообщения в консоль выводим постоянно, а тут не пропускает.
  }

  if (max <= min) {
    return false;
    //console.log('Ошибка! Верхний предел диапазона должен быть больше, чем нижний!')
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomIntInclusive(1, 5);

//Функция для проверки максимальной длины строки.

const checkMaxLength = (string, maxLength) => string.length <= maxLength;

checkMaxLength ('Я сделяль', 140);
