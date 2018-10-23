import * as api from 'axios';

const getSelectedHouseApi = '/api/getSelectedHouse';

const getSelectedHouse = function (searchobj, index, length) {
  return api.get(getSelectedHouse, {searchObj, index, length});
};

export default {
  getSelectedHouse,
};
