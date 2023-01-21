import {similarAuthors, similarOffers} from './data.js';
import {getOffers} from './offersFilling.js';

const SIMILAR_AUTHORS_COUNT = 10;
const SIMILAR_OFFERS_COUNT = 10;

let templateOffer = document.querySelector('#card');
let mapCanvas = document.querySelector('#map-canvas');
let offersElements = getOffers(templateOffer, SIMILAR_OFFERS_COUNT);

mapCanvas.appendChild(offersElements[0]);

console.log(similarAuthors(SIMILAR_AUTHORS_COUNT));
console.log(similarOffers(SIMILAR_OFFERS_COUNT));
