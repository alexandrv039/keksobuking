import _ from 'lodash';

const getRandomInt = function (min, max) {
  return _.random(min, max, false);
};

export {getRandomInt};
