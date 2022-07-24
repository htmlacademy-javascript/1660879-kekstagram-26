import { getData } from './api.js';
import { INITIAL_COMMENTS_NUMBER, NEW_COMMENTS_RENDER_NUMBER } from './constants.js';

const fullImageWindow = document.querySelector('.big-picture');
const fullImage = fullImageWindow.querySelector('.big-picture__img').querySelector('img');
const socialComments = fullImageWindow.querySelector('.social__comments');
const commentsCountOnPage = fullImageWindow.querySelector('.comments-count-on-page');
const socialCommentsLoader = fullImageWindow.querySelector('.comments-loader');

let findedObject = {};
let counter = INITIAL_COMMENTS_NUMBER;


const addSocialCounters = (obj) => {
  fullImageWindow.querySelector('.likes-count').textContent = obj.likes;
  fullImageWindow.querySelector('.comments-count').textContent = obj.comments.length;
};


export const renderFullImage = (evt) => {
  let photoData;
  getData((data) => {
    photoData = data;
  });
  findedObject = photoData.find((item) => evt.target.src.includes(item.url));
  fullImage.src = evt.target.src;
  fullImage.alt = evt.target.alt;
  fullImageWindow.querySelector('.social__caption').textContent = findedObject.description;
  addSocialCounters(findedObject);
};


const checkCommentsCount = () => {
  if (findedObject.comments.length <= INITIAL_COMMENTS_NUMBER || counter >= findedObject.comments.length) {
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


export const onSocialCommentsLoaderClick = () => {
  counter += NEW_COMMENTS_RENDER_NUMBER;
  renderSocialComments();
};


export const clearCounter = () => {
  counter = INITIAL_COMMENTS_NUMBER;
};
