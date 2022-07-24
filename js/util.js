import { ALERT_SHOW_TIME } from './constants.js';

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

// //Функция для создания массива от 1 до max
// export const getOrderedArray = (max) => {
//   const orderedArray = [];
//   for (let i = 1; i <= max; i++) {
//     orderedArray.push(i);
//   }
//   return orderedArray;
// };

// //Функция для выбора случайного числа из созданного массива и "выбрасывания" этого числа из него
// export const getUniqId = (arr) => Number(arr.splice(getRandomIntInclusive(1, arr.length - 1), 1));

//Функция, проверяющая нажат ли Escape
export const isEscapeKey = (evt) => evt.code === 'Escape' || evt.code === 'Esc';

//Функция для отрисовки алерта
export const showAlert = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.classList.add('alert');

  alertContainer.textContent = message;

  document.body.append(alertContainer);


  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

/*
Функция debounce для устранения дребезга:
Функция взята из интернета и доработана
Источник - https://www.freecodecamp.org/news/javascript-debounce-example
*/
export const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

//Функция для выбора случайного кол-ва (amount) элементов из массива (arr)
export const getUniqElements = (arr, amount) => {
  const elements = [];
  const arrCopy = arr.slice();
  for (let i = 0; i < amount; i++) {
    const uniqElement = arrCopy.splice(getRandomIntInclusive(0, arrCopy.length - 1), 1);
    elements.push(...uniqElement);
  }
  return elements;
};
