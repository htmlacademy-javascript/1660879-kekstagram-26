import {similarPhotos} from './data.js';

const imageTemplate = document.querySelector('#picture').content;
const similarPhotosFragment = document.createDocumentFragment();
const picturesBlock = document.querySelector('.pictures');

similarPhotos.forEach(({url, likes, comments}) => {
  const newImage = imageTemplate.cloneNode(true);
  newImage.querySelector('img').src = url;
  newImage.querySelector('.picture__likes').textContent = likes;
  newImage.querySelector('.picture__comments').textContent = comments.length;
  similarPhotosFragment.append(newImage);
});

picturesBlock.appendChild(similarPhotosFragment);
