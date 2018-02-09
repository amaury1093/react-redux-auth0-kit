import * as types from './types';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = profile => ({
  type: types.LOGIN_SUCCESS,
  payload: { profile }
});

export const loginError = error => ({
  type: types.LOGIN_ERROR,
  error
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});
