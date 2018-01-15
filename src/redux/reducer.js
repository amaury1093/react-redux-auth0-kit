import { combineReducers } from 'redux';

import authReducer from './modules/auth';

export default combineReducers({
  auth: authReducer
});
