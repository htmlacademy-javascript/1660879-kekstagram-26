import {DEFAULT_SCALE_AMOUNT, MIN_SCALE_AMOUNT, MAX_SCALE_AMOUNT} from './constants.js';
const scaleControl = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectButtons = document.querySelectorAll('.effects__radio');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let scaleAmount;
let selectedEffect;


export const refreshScale = () => {
  scaleAmount = DEFAULT_SCALE_AMOUNT;
  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


const addScale = () => {
  if (scaleAmount >= MAX_SCALE_AMOUNT) {
    scaleAmount += 0;
  } else {
    scaleAmount += 25;
  }

  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


const removeScale = () => {
  if (scaleAmount <= MIN_SCALE_AMOUNT) {
    scaleAmount -= 0;
  } else {
    scaleAmount -= 25;
  }

  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


scaleSmallerButton.addEventListener('click', removeScale);

scaleBiggerButton.addEventListener('click', addScale);


for (const effectButton of effectButtons) {
  effectButton.addEventListener('click', () => {

    switch (effectButton.value) {

      case 'none' : sliderElement.classList.add('hidden'); break;

      case 'chrome' :
        selectedEffect = 'grayscale';
        sliderElement.classList.remove('hidden');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1
        }); break;

      case 'sepia' :
        selectedEffect = 'sepia';
        sliderElement.classList.remove('hidden');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1
        }); break;

      case 'marvin' :
        selectedEffect = 'invert';
        sliderElement.classList.remove('hidden');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1
        }); break;

      case 'phobos' :
        selectedEffect = 'blur';
        sliderElement.classList.remove('hidden');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        }); break;

      case 'heat' :
        selectedEffect = 'brightness';
        sliderElement.classList.remove('hidden');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1
        }); break;
    }

    imagePreview.className = '';
    imagePreview.style.filter = '';
    imagePreview.classList.add(`effects__preview--${effectButton.value}`);
  });
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower'
});

sliderElement.classList.add('hidden');


sliderElement.noUiSlider.on('update', () => {

  valueElement.value = sliderElement.noUiSlider.get();

  switch (selectedEffect) {

    case 'grayscale' :
    case 'sepia' :
    case 'brightness' :
      imagePreview.style.filter = `${selectedEffect}(${valueElement.value})`; break;

    case 'invert' :
      imagePreview.style.filter = `${selectedEffect}(${valueElement.value}%)`; break;

    case 'blur' :
      imagePreview.style.filter = `${selectedEffect}(${valueElement.value}px)`; break;
  }
});
