import * as api from 'axios';

const getHouseByIdApi = '/api/getHouseById';

const getHouseById = function (houseid) {
  return api.get(getHouseByIdApi, {houseid});
};

export default {
  getHouseById,
};
