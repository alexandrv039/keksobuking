import {getRandomInt, getRandomFloat, getrandomArrayElement} from './util.js';

const USERS_IDS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TITLES = ['Уютное местечко', 'Невероятное бунгало', 'Мужское убежище'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Большие комнаты', 'Маленькие комнаты', 'Стандартные комнаты'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createAuthor = function () {
  return {
    avatar: 'img/avatars/user' + getrandomArrayElement(USERS_IDS) + '.png',
  }
};

const createLocation = function () {
  return {
    x: getRandomFloat(35.65000, 37.00000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
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

export {similarAuthors, similarOffers};
