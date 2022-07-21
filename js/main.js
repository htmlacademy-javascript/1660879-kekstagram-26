import './open-full-image.js';
import './edit-image.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderAllPhotos } from './render-small.js';
import { setUserFormSubmit } from './form-validation.js';

const filterBar = document.querySelector('.img-filters');

const onSuccessGet = (data) => {
  renderAllPhotos(data);
  filterBar.classList.remove('img-filters--inactive');
};

const onErrorGet = () => {
  showAlert('Не удалось загрузить данные с сервера, попробуйте еще раз');
};


getData(onSuccessGet, onErrorGet);


setUserFormSubmit();
