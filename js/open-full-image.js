import {isEscapeKey} from './util.js';
import {renderFullImage} from './render-full.js';

const fullImageWindow = document.querySelector('.big-picture');
const cancelButton = fullImageWindow.querySelector('.cancel');
const picturesBlock = document.querySelector('.pictures');

const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullImage();
  }
};

const openFullImage = () => {
  fullImageWindow.classList.remove('hidden');
  fullImageWindow.querySelector('.social__comment-count').classList.add('hidden');
  fullImageWindow.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onImageEscKeydown);
};

function closeFullImage () {
  fullImageWindow.classList.add('hidden');
  fullImageWindow.querySelector('.social__comment-count').classList.remove('hidden');
  fullImageWindow.querySelector('.comments-loader').classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImageEscKeydown);
}

picturesBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    openFullImage();
    renderFullImage(evt);
  }
});

cancelButton.addEventListener('click', () => {
  closeFullImage();
});
