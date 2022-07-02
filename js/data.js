import {getRandomIntInclusive, getOrderedArray, getUniqId} from './util.js';
import {COMMENTS, NAMES, PHOTOS_COUNT, COMMENTS_COUNT, AVATARS_COUNT} from './constants.js';


//Создал упорядоченные массивы для нужных полей
const ids = getOrderedArray(PHOTOS_COUNT);
const urls = getOrderedArray(PHOTOS_COUNT);
const commentIds = getOrderedArray(COMMENTS_COUNT);

const createComments = () => ({
  id: getUniqId(commentIds),
  avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
  message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
  name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
});

const createPhoto = () => ({
  id: getUniqId(ids),
  url: `photos/${getUniqId(urls)}.jpg`,
  description: 'Еще одна удачная фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: Array.from({length: getRandomIntInclusive(1, 14)}, createComments)
});

export const similarPhotos = Array.from({length: PHOTOS_COUNT}, createPhoto);
