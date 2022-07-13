import './open-full-image.js';
import './edit-image.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderSmallPhotos } from './render-small.js';
import { setUserFormSubmit } from './form-validation.js';

export let photoData;


const onSuccessGet = (data) => {
  renderSmallPhotos(data);
  photoData = data;
};

const onErrorGet = () => {
  showAlert('Не удалось загрузить данные с сервера, попробуйте еще раз');
};


getData(onSuccessGet, onErrorGet);


setUserFormSubmit();
