
const SIMILAR_AUTHORS_COUNT = 10;
const SIMILAR_OFFERS_COUNT = 10;

const USERS_IDS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TITLES = ['Уютное местечко', 'Невероятное бунгало', 'Мужское убежище'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Большие комнаты', 'Маленькие комнаты', 'Стандартные комнаты'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// eslint-disable-next-line no-unused-vars
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

/**
 * @param {[]} array
 */
const getrandomArrayElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

const createLocation = function () {
  return {
    x: getRandomFloat(35.65000, 37.00000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  }
};

const createAuthor = function () {
  return {
    avatar: 'img/avatars/user' + getrandomArrayElement(USERS_IDS) + '.png',
  }
};

const createOffer = function () {
  let location = createLocation();
  let features = new Array(getRandomInt(1, 8)).fill(null).map(() => getrandomArrayElement(FEATURES));
  let photos = new Array(getRandomInt(1, 3)).fill(null).map(() => getrandomArrayElement(PHOTOS));
  return {
    title: getrandomArrayElement(TITLES),
    address: (location.x).toString() + ', ' + location.y,
    price: getRandomInt(500, 2000),
    type: getrandomArrayElement(TYPES),
    rooms: getRandomInt(1, 4),
    guests: getRandomInt(1, 5),
    checkin: getrandomArrayElement(TIMES),
    checkout: getrandomArrayElement(TIMES),
    features: Array.from(new Set(features)),
    description: getrandomArrayElement(DESCRIPTIONS),
    photos: Array.from(new Set(photos)),
  }
};

const similarAuthors = function (count) {
  return new Array(count).fill(null).map(() => createAuthor());
};

const similarOffers = function (count) {
  return new Array(count).fill(null).map(() => createOffer());
}

console.log(similarAuthors(SIMILAR_AUTHORS_COUNT));
console.log(similarOffers(SIMILAR_OFFERS_COUNT));
