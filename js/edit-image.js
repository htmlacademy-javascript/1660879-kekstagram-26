import { DEFAULT_SCALE_AMOUNT, MIN_SCALE_AMOUNT, MAX_SCALE_AMOUNT } from './constants.js';

const scaleControl = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectButtons = document.querySelectorAll('.effects__radio');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let scaleAmount;
let selectedEffect;


export const hideSlider = () => {
  sliderElement.classList.add('hidden');
};


const showSlider = () => {
  sliderElement.classList.remove('hidden');
};


export const setNoEffect = () => {
  imagePreview.className = '';
  imagePreview.style.filter = '';
};


export const setDefaultScale = () => {
  scaleAmount = DEFAULT_SCALE_AMOUNT;
  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


const onScaleBiggerButtonClick = () => {
  if (scaleAmount < MAX_SCALE_AMOUNT) {
    scaleAmount += 25;
  }

  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


const onScaleSmallerButtonClick = () => {
  if (scaleAmount > MIN_SCALE_AMOUNT) {
    scaleAmount -= 25;
  }

  imagePreview.style.transform = `scale(${scaleAmount/100})`;
  scaleControl.value =  `${scaleAmount}%`;
};


scaleSmallerButton.addEventListener('click', onScaleSmallerButtonClick);

scaleBiggerButton.addEventListener('click', onScaleBiggerButtonClick);


const setChromeEffect = () => {
  showSlider();
  selectedEffect = 'grayscale';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });
};

const setSepiaEffect = () => {
  showSlider();
  selectedEffect = 'sepia';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });
};

const setMarvinEffect = () => {
  showSlider();
  selectedEffect = 'invert';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1
  });
};

const setPhobosEffect = () => {
  showSlider();
  selectedEffect = 'blur';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};

const setHeatEffect = () => {
  showSlider();
  selectedEffect = 'brightness';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1
  });
};


for (const effectButton of effectButtons) {
  effectButton.addEventListener('click', () => {

    switch (effectButton.value) {

      case 'none' :
        hideSlider(); break;

      case 'chrome' :
        setChromeEffect(); break;

      case 'sepia' :
        setSepiaEffect(); break;

      case 'marvin' :
        setMarvinEffect(); break;

      case 'phobos' :
        setPhobosEffect(); break;

      case 'heat' :
        setHeatEffect(); break;
    }

    setNoEffect();
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
