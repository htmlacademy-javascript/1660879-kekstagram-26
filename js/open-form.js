import {isEscapeKey} from './util.js';
import {pristine} from './form-validation.js';
import {setNoEffect, setDefaultScale, hideSlider} from './edit-image.js';


const form = document.querySelector('.img-upload__form');
const closeFormButton = form.querySelector('#upload-cancel');
const uploadFile = form.querySelector('#upload-file');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');


const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};


const onInputEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};


const resetInputs = () => {
  uploadFile.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
};


const openForm = () => {
  form.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
  hashtagInput.addEventListener('keydown', onInputEscKeydown);
  commentInput.addEventListener('keydown', onInputEscKeydown);
  hideSlider();
  setNoEffect();
  setDefaultScale();
};


function closeForm () {
  form.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  hashtagInput.removeEventListener('keydown', onInputEscKeydown);
  commentInput.removeEventListener('keydown', onInputEscKeydown);
  resetInputs();
  pristine.validate();
}


uploadFile.addEventListener('change', () => {
  openForm();
});


closeFormButton.addEventListener('click', () => {
  closeForm();
});
