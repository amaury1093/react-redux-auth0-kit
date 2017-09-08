// reducers/index.js

import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  // add your other reducers here
});

export default rootReducer;
