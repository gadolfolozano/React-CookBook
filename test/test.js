import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/reducers';

const assert = require('assert');

const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const initialState = store.getState();

describe('initial state', () => {
  describe('auth field', () => {
    it('username should be empty', () => {
      assert.equal(initialState.auth.username, '');
    });
    it('password should be empty', () => {
      assert.equal(initialState.auth.password, '');
    });
    it('isFetching should be false', () => {
      assert.equal(initialState.auth.isFetching, false);
    });
    it('usernameError should be false', () => {
      assert.equal(initialState.auth.usernameError, false);
    });
    it('passwordError should be false', () => {
      assert.equal(initialState.auth.passwordError, false);
    });
    it('loginError should be false', () => {
      assert.equal(initialState.auth.loginError, false);
    });
  });
  describe('dashboard field', () => {
    it('categories items should be empty', () => {
      assert.equal(initialState.dashboard.categories.length, 0);
    });
    it('isLoading should be false', () => {
      assert.equal(initialState.dashboard.isLoading, false);
    });
    it('error should be false', () => {
      assert.equal(initialState.dashboard.error, false);
    });
  });
});
