import {ALERT_SHOW_TIME} from './constants.js';

/*
Функция, возвращающая случайное целое число из переданного диапазона включительно
Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Добавлены условия проверки неотрицательности значений диапазона, а также условие о верхней границе
*/
export const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || max <= min) {
    return -1;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// Функция для проверки максимальной длины строки.
export const checkMaxLength = (string, maxLength) => string.length <= maxLength;

//Функция для создания массива от 1 до max
export const getOrderedArray = (max) => {
  const orderedArray = [];
  for (let i = 1; i <= max; i++) {
    orderedArray.push(i);
  }
  return orderedArray;
};

//Функция для выбора случайного числа из созданного массива и "выбрасывания" этого числа из него
export const getUniqId = (arr) => Number(arr.splice(getRandomIntInclusive(1, arr.length - 1), 1));

//Функция, проверяющая нажат ли Escape
const isEscapeKey = (evt) => evt.code === 'Escape' || evt.code === 'Esc';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, showAlert};
