// import {getRandomInt} from './adapter.js';

/**
 * @param {number} min
 * @param {number} max
 * @param {number} countSing
 *
 * Функция возвращает случайное число в диапозоне от min до max и округляет до указанного в countSing количества
 * знаков после запятой
 */
// eslint-disable-next-line no-unused-vars
const getRandomFloat = function(min, max, countSing) {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min + 1) + min).toFixed(countSing);
}

const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {[]} array
 */
const getrandomArrayElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

export{getrandomArrayElement, getRandomInt, getRandomFloat};
