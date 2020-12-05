import { combineReducers } from 'redux';

import { reducers } from '@naadi/framework';

const { busy, lang, user } = reducers;

export default combineReducers({
  busy,
  lang,
  user,
});
