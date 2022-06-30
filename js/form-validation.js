import {checkMaxLength} from './util.js';
import {COMMENT_LENGTH} from './constants.js';

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, true);

function validateHashtags (inputValue) {
  const arr = inputValue.split(' ');
  const isHashtag = () => arr.every((element) => re.test(element));
  const hasRequiredLength = () => arr.length <= 5;
  const isEmpty = () => arr[0] === '';
  const hasDuplicates = () => {
    const valuesObj = {};
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i].toLowerCase();
      if (value in valuesObj) {
        return true;
      }
      valuesObj[value] = true;
    }
    return false;
  };
  return isHashtag() && hasRequiredLength() && !hasDuplicates() || isEmpty();
}

function validateComment (inputValue) {
  return checkMaxLength(inputValue, COMMENT_LENGTH);
}

const getCommentErrorText = () => `Длина комментария не должна быть больше ${COMMENT_LENGTH} символов!`;

pristine.addValidator(hashtagField, validateHashtags, 'Не соответствует условиям');
pristine.addValidator(commentField, validateComment, getCommentErrorText);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {validateHashtags};
