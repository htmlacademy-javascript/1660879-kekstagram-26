import { GET_URL, POST_URL } from './constants.js';

let cache = [];


export const getData = (onSuccess, onFail) => {
  if (cache.length > 0) {
    onSuccess(cache);
  } else {
    fetch(GET_URL)
      .then((response) => response.json())
      .then((data) => {
        cache = data;
        onSuccess(cache);
      })
      .catch(onFail);
  }
};


export const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_URL, {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};
