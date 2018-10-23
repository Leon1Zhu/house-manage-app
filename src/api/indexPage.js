import * as api from 'axios';

const getLikeHouseApi = '/api/getLikeHouse';

const getLikeHouse = function (index, length) {
  return api.get(getLikeHouseApi, {index, length});
};

export default {
  getLikeHouse,
};
