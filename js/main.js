/*
Функция, возвращающая случайное целое число из переданного диапазона включительно
Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return console.log('Ошибка! Диапазон может быть только положительный')
  }

  if (max <= min) {
    console.log('Ошибка! Верхний предел диапазона должен быть больше, чем нижний!')
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomIntInclusive(1, 5);

//Функция для проверки максимальной длины строки.

const checkMaxLength = (string, maxLength) => {
  if (string.length > maxLength) {
    return false;
  } else {
    return true;
  }
};

checkMaxLength ('Я сделяль', 140);
