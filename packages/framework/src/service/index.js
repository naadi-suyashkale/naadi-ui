import axios from 'axios';

import { BASE_URL } from '../configs/url';

const service = ({
  prepended = true,
  headers = {},
  method = 'GET',
  ...rest
}) => {
  let params = {};
  if (prepended) {
    rest.url = BASE_URL + rest.url;
  }
  if (method.toUpperCase() === 'GET' && rest.data) {
    params = { ...params, ...rest.data };
  }
  rest.url += objectToParams(params);
  return axios({ ...rest, method, headers }).then(response => response.data);
};

export const objectToParams = o => {
  let s = '';
  for (const k in o) {
    const v = o[k.toString()];
    s += s ? '&' : '?';
    s += k + '=' + encodeURIComponent(v);
  }
  return s;
};

export default service;
