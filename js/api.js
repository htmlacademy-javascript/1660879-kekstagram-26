import {renderSmallPhotos} from './render-small.js';
import {closeForm} from './open-form.js';
import {setUserFormSubmit} from './form-validation.js';

let photoData;

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderSmallPhotos(data);
    photoData = data;
  });

setUserFormSubmit(closeForm);


export {photoData};
