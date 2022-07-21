import { getData } from './api.js';
import { getUniqElements, debounce } from './util.js';
import { RANDOM_PHOTOS_COUNT } from './constants.js';

const imageTemplate = document.querySelector('#picture').content;
const similarPhotosFragment = document.createDocumentFragment();
const picturesBlock = document.querySelector('.pictures');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');
let photoData;

getData((data) => {
  photoData = data;
});


const comparePhotos = (photoA, photoB) => photoB.comments.length - photoA.comments.length;


const deletePictures = () => {
  const picturesCollection = picturesBlock.querySelectorAll('.picture');
  picturesCollection.forEach((element) => element.remove());
};


export const renderAllPhotos = (similarPhotos) => {
  similarPhotos.forEach(({url, likes, comments}) => {
    const newImage = imageTemplate.cloneNode(true);
    newImage.querySelector('img').src = url;
    newImage.querySelector('.picture__likes').textContent = likes;
    newImage.querySelector('.picture__comments').textContent = comments.length;
    similarPhotosFragment.append(newImage);
  });
  deletePictures();
  picturesBlock.appendChild(similarPhotosFragment);
};


const renderRandomPhotos = (similarPhotos) => {
  const uniqElements = getUniqElements(similarPhotos, RANDOM_PHOTOS_COUNT);
  uniqElements.forEach(({url, likes, comments}) => {
    const newImage = imageTemplate.cloneNode(true);
    newImage.querySelector('img').src = url;
    newImage.querySelector('.picture__likes').textContent = likes;
    newImage.querySelector('.picture__comments').textContent = comments.length;
    similarPhotosFragment.append(newImage);
  });
  deletePictures();
  picturesBlock.appendChild(similarPhotosFragment);
};


const renderDiscussedPhotos = (similarPhotos) => {
  similarPhotos
    .slice()
    .sort(comparePhotos)
    .forEach(({url, likes, comments}) => {
      const newImage = imageTemplate.cloneNode(true);
      newImage.querySelector('img').src = url;
      newImage.querySelector('.picture__likes').textContent = likes;
      newImage.querySelector('.picture__comments').textContent = comments.length;
      similarPhotosFragment.append(newImage);
    });
  deletePictures();
  picturesBlock.appendChild(similarPhotosFragment);
};


const onDefaultButtonClick = (cb) => {
  defaultButton.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    randomButton.classList.remove('img-filters__button--active');
    discussedButton.classList.remove('img-filters__button--active');
    cb();
  });
};

onDefaultButtonClick(debounce(
  () => renderAllPhotos(photoData)
));


const onRandomButtonClick = (cb) => {
  randomButton.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    defaultButton.classList.remove('img-filters__button--active');
    discussedButton.classList.remove('img-filters__button--active');
    cb();
  });
};

onRandomButtonClick(debounce(
  () => renderRandomPhotos(photoData)
));


const onDiscussedButtonClick = (cb) => {
  discussedButton.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    defaultButton.classList.remove('img-filters__button--active');
    randomButton.classList.remove('img-filters__button--active');
    cb();
  });
};

onDiscussedButtonClick(debounce(
  () => renderDiscussedPhotos(photoData)
));
