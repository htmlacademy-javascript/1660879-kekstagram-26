import {similarPhotos} from './data.js';

const fullImageWindow = document.querySelector('.big-picture');
const fullImage = fullImageWindow.querySelector('.big-picture__img').querySelector('img');
const socialComments = fullImageWindow.querySelector('.social__comments');

const addSocialComments = (obj) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < obj.comments.length; i++) {
    socialComments.insertAdjacentHTML('beforeend', `<li class="social__comment"><img class="social__picture" src ="${  obj.comments[i].avatar  }" alt =" ${  obj.comments[i].name  }" width="35" height="35"><p class="social__text">${ obj.comments[i].message  }</p></li>`);
  }
  socialComments.appendChild(fragment);
};

const addSocialCounters = (obj) => {
  fullImageWindow.querySelector('.likes-count').textContent = obj.likes;
  fullImageWindow.querySelector('.comments-count').textContent = obj.comments.length;
};

export const renderFullImage = (evt) => {
  const findedObject = similarPhotos.find((item) => evt.target.src.includes(item.url));
  fullImage.src = evt.target.src;
  fullImage.alt = evt.target.alt;
  fullImageWindow.querySelector('.social__caption').textContent = findedObject.description;
  addSocialCounters(findedObject);
  addSocialComments(findedObject);
};
