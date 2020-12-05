import { TYPES } from './const';

export const add = key => ({
  type: TYPES.ADD,
  key,
});

export const remove = key => ({
  type: TYPES.REMOVE,
  key,
});

const actions = {
  add,
  remove,
};

export default actions;
