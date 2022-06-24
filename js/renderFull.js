import {similarPhotos} from './data.js';

const fullImageWindow = document.querySelector('.big-picture');
const cancelButton = fullImageWindow.querySelector('.cancel');
const fullImage = fullImageWindow.querySelector('.big-picture__img').querySelector('img');
const socialComments = fullImageWindow.querySelector('.social__comments');
const picturesBlock = document.querySelector('.pictures');

const openFullImage = () => {
  fullImageWindow.classList.remove('hidden');
  fullImageWindow.querySelector('.social__comment-count').classList.add('hidden');
  fullImageWindow.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
};

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

picturesBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const findedObject = similarPhotos.find((item) => evt.target.src.includes(item.url));
    openFullImage();
    fullImage.src = evt.target.src;
    fullImage.alt = evt.target.alt;
    fullImageWindow.querySelector('.social__caption').textContent = findedObject.description;
    addSocialCounters(findedObject);
    addSocialComments(findedObject);
  }
});

cancelButton.addEventListener('click', () => {
  fullImageWindow.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    fullImageWindow.classList.add('hidden');
  }
});
