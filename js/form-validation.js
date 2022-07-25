import { sendData } from './api.js';
import { checkMaxLength } from './util.js';
import { COMMENT_LENGTH, HASH_TAG_REGULAR_EXPRESSION } from './constants.js';
import { closeForm, showSuccessAlert, showErrorAlert } from './open-form.js';


const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');


export const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error'
}, true);


const validateHashtag = (inputValue) => {
  const arr = inputValue.trim().split(/\s+/);
  return arr.every((element) => HASH_TAG_REGULAR_EXPRESSION.test(element)) || arr[0] === '';
};


const validateHashtagDuplicates = (inputValue) => {
  const arr = inputValue.trim().split(/\s+/);
  const valuesObj = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i].toLowerCase();

    if (value in valuesObj) {
      return false;
    }

    valuesObj[value] = true;

  }
  return true;
};


const validateHashtagsLength = (inputValue) => {
  const arr = inputValue.trim().split(/\s+/);
  return arr.length <= 5;
};


const validateComment = (inputValue) => checkMaxLength(inputValue, COMMENT_LENGTH);


const getCommentErrorText = () => `Длина комментария не должна быть больше ${COMMENT_LENGTH} символов!`;


pristine.addValidator(hashtagField, validateHashtag, 'Хэштег должен начинаться с символа #, не должен иметь спецсимволов, не состоять только из #, длина не больше 20 символов!');
pristine.addValidator(hashtagField, validateHashtagsLength, 'Не больше пяти хэштегов!');
pristine.addValidator(hashtagField, validateHashtagDuplicates, 'Хэштеги не должны повторяться!');
pristine.addValidator(commentField, validateComment, getCommentErrorText);


const blockSubmitButton = () => {
  submitButton.disabled = true;
};


export const unblockSubmitButton = () => {
  submitButton.disabled = false;
};


const onSuccessSend = () => {
  closeForm();
  showSuccessAlert();
};


const onErrorSend = () => {
  showErrorAlert();
};


export const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(onSuccessSend, onErrorSend, new FormData(evt.target));
    }
  });
};
