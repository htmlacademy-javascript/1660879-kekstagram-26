import {checkMaxLength} from './util.js';
import {COMMENT_LENGTH} from './constants.js';

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error'
}, true);

const validateHashtag = (inputValue) => {
  const arr = inputValue.split(' ');
  const isHashtag = () => arr.every((element) => re.test(element));
  const isEmpty = () => arr[0] === '';
  return isHashtag() || isEmpty();
};

const validateHashtagDuplicates = (inputValue) => {
  const arr = inputValue.split(' ');
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
  const arr = inputValue.split(' ');
  return arr.length <= 5;
};

const validateComment = (inputValue) => checkMaxLength(inputValue, COMMENT_LENGTH);

const getCommentErrorText = () => `Длина комментария не должна быть больше ${COMMENT_LENGTH} символов!`;

pristine.addValidator(hashtagField, validateHashtag, 'Хэштег должен начинаться с символа #, не должен иметь спецсимволов, не состоять только из #, длина не больше 20 символов!');
pristine.addValidator(hashtagField, validateHashtagsLength, 'Не больше пяти хэштегов!');
pristine.addValidator(hashtagField, validateHashtagDuplicates, 'Хэштеги не должны повторяться!');
pristine.addValidator(commentField, validateComment, getCommentErrorText);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {validateHashtag};