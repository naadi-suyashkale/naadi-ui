import { TYPES } from './const';
import { get } from '../../service/lang';

export const set = lang => ({
  type: TYPES.SET,
  lang,
});

export const change = locale => dispatch =>
  get(locale).then(messages => dispatch(set({ locale, messages })));

const actions = { set, change };

export default actions;
