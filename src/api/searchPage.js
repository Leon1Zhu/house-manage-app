import * as api from 'axios';

const getSelectedHouseApi = '/api/getSelectedHouse';

const getSelectedHouse = function (searchobj, index, length) {
  const params ={
    searchobj,
    index,
    length,
  };
  return api.get(getSelectedHouseApi, {params});
};

export default {
  getSelectedHouse,
};
