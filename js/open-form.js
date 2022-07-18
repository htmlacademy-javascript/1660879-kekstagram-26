import { isEscapeKey } from './util.js';
import { pristine, unblockSubmitButton } from './form-validation.js';
import { setNoEffect, setDefaultScale, hideSlider } from './edit-image.js';
import { FILE_TYPES } from './constants.js';


const form = document.querySelector('.img-upload__form');
const closeFormButton = form.querySelector('#upload-cancel');
const uploadFile = form.querySelector('#upload-file');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');
const preview = form.querySelector('.img-upload__preview').querySelector('img');


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


export function closeForm () {
  form.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  hashtagInput.removeEventListener('keydown', onInputEscKeydown);
  commentInput.removeEventListener('keydown', onInputEscKeydown);
  resetInputs();
  pristine.validate();
}


uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    preview.src = URL.createObjectURL(file);
    openForm();
  }
});


closeFormButton.addEventListener('click', () => {
  closeForm();
});


const onSuccessAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeSuccessAlert();
  }
};


const onErrorAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeErrorAlert();
    closeForm();
  }
};


function removeSuccessAlert() {
  unblockSubmitButton();
  document.querySelector('.success').remove();
  document.body.removeEventListener('click', onSuccesAlertClick);
  document.body.removeEventListener('keydown', onSuccessAlertEscKeydown);
}


function removeErrorAlert() {
  unblockSubmitButton();
  document.querySelector('.error').remove();
  document.body.removeEventListener('click', onErrorAlertClick);
  document.body.removeEventListener('keydown', onErrorAlertEscKeydown);
}


function onSuccesAlertClick(evt) {
  if(evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
    removeSuccessAlert();
  }
}


function onErrorAlertClick(evt) {
  if (evt.target.classList.contains('error')) {
    removeErrorAlert();
    closeForm();
  }
}


export const showSuccessAlert = () => {
  const successTemplate = document.querySelector('#success').content;
  const newSuccessMessage = successTemplate.cloneNode(true);

  document.body.addEventListener('click', onSuccesAlertClick);

  document.body.addEventListener('keydown', onSuccessAlertEscKeydown);

  document.body.appendChild(newSuccessMessage);
};


export const showErrorAlert = () => {
  const errorTemplate = document.querySelector('#error').content;
  const newErrorMessage = errorTemplate.cloneNode(true);

  const closeErrorAlertButton = newErrorMessage.querySelector('.error__button');

  closeErrorAlertButton.addEventListener('click', () => {
    removeErrorAlert();
    uploadFile.click();
  });

  document.body.addEventListener('click', onErrorAlertClick);

  document.body.addEventListener('keydown', onErrorAlertEscKeydown);

  document.body.appendChild(newErrorMessage);

  document.querySelector('.error').style.zIndex = '100';
};
