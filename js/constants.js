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
const COMMENTS_COUNT = 1250;
const AVATARS_COUNT = 6;
const COMMENT_LENGTH = 140;
const HASH_TAG_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const INITIAL_COMMENTS_NUMBER = 5;
const DEFAULT_SCALE_AMOUNT = 100;
const MIN_SCALE_AMOUNT = 25;
const MAX_SCALE_AMOUNT = 100;

export {COMMENTS, NAMES, PHOTOS_COUNT, COMMENTS_COUNT, AVATARS_COUNT, COMMENT_LENGTH, HASH_TAG_REGULAR_EXPRESSION, INITIAL_COMMENTS_NUMBER, DEFAULT_SCALE_AMOUNT, MIN_SCALE_AMOUNT, MAX_SCALE_AMOUNT};
