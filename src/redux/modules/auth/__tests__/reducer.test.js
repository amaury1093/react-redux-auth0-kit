import { expect } from 'chai';

import authReducer, { authTypes } from '../';

describe('(Reducer) auth', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_REQUEST })).to.deep.equal({
      isAuthenticated: false,
      isFetching: true,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_SUCCESS, profile: { fakeProperty: 'fakeValue' } })).to.deep.equal({
      isAuthenticated: true,
      isFetching: false,
      profile: { fakeProperty: 'fakeValue' },
      error: null,
    });
  });

  it('should handle LOGIN_ERROR', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_ERROR, error: 'fakeError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: 'fakeError',
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(authReducer(undefined, { type: authTypes.LOGOUT_SUCCESS, error: 'fakeError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null,
    });
  });
});
