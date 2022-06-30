import {getRandomIntInclusive, getOrderedArray, getUniqId} from './util.js';
import {COMMENTS, NAMES, PHOTOS_COUNT, COMMENTS_COUNT, AVATARS_COUNT} from './constants.js';


//Создал упорядоченные массивы для нужных полей
const ids = getOrderedArray(PHOTOS_COUNT);
const urls = getOrderedArray(PHOTOS_COUNT);
const commentIds = getOrderedArray(COMMENTS_COUNT);

const createPhoto = () => ({
  id: getUniqId(ids),
  url: `photos/${getUniqId(urls)}.jpg`,
  description: 'Еще одна удачная фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: [
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },//тут было всего 2, сделал больше для теста
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    },
    {
      id: getUniqId(commentIds),
      avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
      message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
    }
  ]
});

export const similarPhotos = Array.from({length: PHOTOS_COUNT}, createPhoto);
