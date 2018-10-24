import * as api from 'axios';

const getLikeHouseApi = '/api/getLikeHouse';

const getLikeHouse = function (page, size) {
  const params = {
    page,
    size,
  };
  return api.get(getLikeHouseApi, {params});
};

export default {
  getLikeHouse,
};
