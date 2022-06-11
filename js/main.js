/*
Функция, возвращающая случайное целое число из переданного диапазона включительно
Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Добавлены условия проверки неотрицательности значений диапазона, а также условие о верхней границе
*/
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || max <= min) {
    return -1;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

//Функция для проверки максимальной длины строки.
//Закомментировал, чтобы не ругался линтер, функицю не применял, в условиях не было.
//const checkMaxLength = (string, maxLength) => string.length <= maxLength;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Милана', 'Владимир', 'Кирилл', 'Виктория', 'Вероника', 'Алиса', 'Каролина', 'Злата', 'Тимофей', 'Амелия', 'Иван', 'Мирослав', 'Валентина', 'Ян', 'Алина', 'Дмитрий', 'Максим', 'Адам', 'Арина', 'Алёна'];

const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 300;
const AVATARS_COUNT = 6;

//Функция для создания массива от 1 до max
const getOrderedArray = (max) => {
  const orderedArray = [];
  for (let i = 1; i <= max; i++) {
    orderedArray.push(i);
  }
  return orderedArray;
};

const idArr = getOrderedArray(PHOTOS_COUNT);
const urlArr = getOrderedArray(PHOTOS_COUNT);
const commentIdArr = getOrderedArray(COMMENTS_COUNT);

const getUniqId = (array) => Number(array.splice(getRandomIntInclusive(1, array.length - 1), 1));


const createPhoto = () => ({
  id: getUniqId(idArr),
  url: `photos/${getUniqId(urlArr)}.jpg`,
  description: 'Еще одна удачная фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: [
    {
      id: getUniqId(commentIdArr),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length)],
    },
    {
      id: getUniqId(commentIdArr),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length)],
    },
  ]
});
const similarPhotos = Array.from({length: PHOTOS_COUNT}, createPhoto);
//чтобы не ругался линтер
similarPhotos();
