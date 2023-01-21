import {similarOffers, similarAuthors} from './data.js';

let getOfferTypeName = function (offerType) {
  switch (offerType) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};

let fillOffer = function (offerElement, offerData) {
  let popupTitle = offerElement.querySelector('.popup__title');
  popupTitle.textContent = offerData.title;

  let offerAddress = offerElement.querySelector('.popup__text--address');
  offerAddress.textContent = offerData.address;

  let offerPrice = offerElement.querySelector('.popup__text--price');
  offerPrice.textContent = offerData.price;

  let offerType = offerElement.querySelector('.popup__type');
  offerType.textContent = getOfferTypeName(offerData.type);

  let popupTextCapacity = offerElement.querySelector('.popup__text--capacity');
  popupTextCapacity.textContent = offerData.rooms + ' комнаты для ' + offerData.guests + ' гостей';

  let popupTextTime = offerElement.querySelector('.popup__text--time');
  popupTextTime.textContent = 'Заезд после ' + offerData.checkin + ', выезд до ' + offerData.checkout;

  let popupFeatures = offerElement.querySelector('.popup__features');
  for (const feature of offerData.features) {
    let featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add('popup__feature--' + feature);
    popupFeatures.appendChild(featureElement);
  }

  let description = offerElement.querySelector('.popup__description');
  description.textContent = offerData.description;

  let popupPhotos = offerElement.querySelector('.popup__photos');
  for (const photo of offerData.photos) {
    let photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.src = photo;
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    popupPhotos.appendChild(photoElement);
  }

  let avatarElement = offerElement.querySelector('.popup__avatar');
  let avatar = similarAuthors(1)[0].avatar;
  avatarElement.src = avatar;

};

let getOffers = function (templateOffer, count) {
  let offers = [];
  let offersData = similarOffers(count);
  for (const offerData of offersData) {
    let offerElement = templateOffer.content.querySelector('.popup').cloneNode(true);
    fillOffer(offerElement, offerData)
    offers.push(offerElement);
  }
  return offers;
};

export {getOffers};
