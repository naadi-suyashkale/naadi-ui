import { TYPES } from './const';

export const set = user => ({
  user,
  type: TYPES.SET,
});

const actions = { set };

export default actions;
