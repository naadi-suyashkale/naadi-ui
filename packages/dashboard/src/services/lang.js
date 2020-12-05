import service from './index';

export const get = locale =>
  service({
    url: `./lang/${locale}.json`,
    prepended: false,
  });
