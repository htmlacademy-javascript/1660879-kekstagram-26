let cache = [];


export const getData = (onSuccess, onFail) => {
  if (cache.length > 0) {
    onSuccess(cache);
  } else {
    fetch('https://26.javascript.pages.academy/kekstagram/data')
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
    'https://26.javascript.pages.academy/kekstagram', {
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
