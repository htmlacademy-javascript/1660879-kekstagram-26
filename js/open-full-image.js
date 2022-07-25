import { isEscapeKey } from './util.js';
import { renderFullImage, renderSocialComments, clearCounter, onSocialCommentsLoaderClick } from './render-full.js';

const fullImageWindow = document.querySelector('.big-picture');
const cancelButton = fullImageWindow.querySelector('.cancel');
const picturesBlock = document.querySelector('.pictures');
const socialCommentsLoader = fullImageWindow.querySelector('.comments-loader');


const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullImage();
  }
};


const openFullImage = () => {
  fullImageWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onImageEscKeydown);

  socialCommentsLoader.classList.remove('hidden');
  socialCommentsLoader.addEventListener ('click', onSocialCommentsLoaderClick);
};


function closeFullImage () {
  fullImageWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImageEscKeydown);
  socialCommentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
  clearCounter();
}


picturesBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    openFullImage();
    renderFullImage(evt);
    renderSocialComments(evt);
  }
});


cancelButton.addEventListener('click', () => {
  closeFullImage();
});


