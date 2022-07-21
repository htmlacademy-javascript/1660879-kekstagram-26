import { getData } from './api.js';
import { INITIAL_COMMENTS_NUMBER } from './constants.js';

const fullImageWindow = document.querySelector('.big-picture');
const fullImage = fullImageWindow.querySelector('.big-picture__img').querySelector('img');
const socialComments = fullImageWindow.querySelector('.social__comments');
const commentsCountOnPage = fullImageWindow.querySelector('.comments-count-on-page');
const socialCommentsLoader = fullImageWindow.querySelector('.comments-loader');

let findedObject = {};
let counter = INITIAL_COMMENTS_NUMBER;
let photoData;


getData((data) => {
  photoData = data;
});


const addSocialCounters = (obj) => {
  fullImageWindow.querySelector('.likes-count').textContent = obj.likes;
  fullImageWindow.querySelector('.comments-count').textContent = obj.comments.length;
};


export const renderFullImage = (evt) => {
  findedObject = photoData.find((item) => evt.target.src.includes(item.url));
  fullImage.src = evt.target.src;
  fullImage.alt = evt.target.alt;
  fullImageWindow.querySelector('.social__caption').textContent = findedObject.description;
  addSocialCounters(findedObject);
};


const checkCommentsCount = () => {
  if (findedObject.comments.length <= 5 || counter >= findedObject.comments.length) {
    commentsCountOnPage.textContent = `${findedObject.comments.length} из `;
    socialCommentsLoader.classList.add('hidden');
  } else {
    commentsCountOnPage.textContent = `${counter} из `;
  }
  return commentsCountOnPage.textContent;
};


export const renderSocialComments = () => {
  checkCommentsCount();

  const commentsPart = findedObject.comments.slice(0, counter);
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsPart.length; i++) {
    const li = document.createElement('li');
    li.classList.add('social__comment');
    li.insertAdjacentHTML('beforeend', `<img class="social__picture" src ="${  commentsPart[i].avatar  }" alt =" ${  commentsPart[i].name  }" width="35" height="35"><p class="social__text">${ commentsPart[i].message  }</p>`);
    fragment.appendChild(li);
  }
  socialComments.appendChild(fragment);
};


export const renderNewComments = () => {
  counter +=5;
  renderSocialComments();
};


export const clearCounter = () => {
  counter = INITIAL_COMMENTS_NUMBER;
};
