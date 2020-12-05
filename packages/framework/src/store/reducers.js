import { combineReducers } from 'redux';

import busy from './busy/reducer';
import lang from './lang/reducer';
import user from './user/reducer';

export default combineReducers({
  busy,
  lang,
  user,
});

export const reducers = {
  busy,
  lang,
  user,
};
