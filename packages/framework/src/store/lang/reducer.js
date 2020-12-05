import { DEFAULT, TYPES } from './const';

const reducer = (lang = DEFAULT, action) => {
  if (action.type === TYPES.SET) {
    return action.lang;
  }
  return lang;
};

export default reducer;
