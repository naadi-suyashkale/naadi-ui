import { DEFAULT, TYPES } from './const';

const remove = (busy, ind) => {
  const new_busy = [...busy];
  new_busy.splice(ind, 1);
  return new_busy;
};

const reducer = (busy = DEFAULT, action) => {
  const { type } = action;
  const t = busy.indexOf(type);
  if (t >= 0) {
    return remove(busy, t);
  }
  switch (action.type) {
    case TYPES.ADD: {
      return [...busy, action.key];
    }
    case TYPES.REMOVE: {
      const k = busy.indexOf(action.key);
      if (k >= 0) {
        return remove(busy, k);
      }
      return [...busy];
    }
    default: {
      return [...busy];
    }
  }
};

export default reducer;
