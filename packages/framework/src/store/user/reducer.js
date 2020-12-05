import { DEFAULT, TYPES } from './const';

const reducer = (user = DEFAULT, action) => {
  if (action.type === TYPES.SET) {
    return { ...action.user };
  }
  return user ? { ...user } : user;
};

export default reducer;
