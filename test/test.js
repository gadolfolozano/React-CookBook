import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import thunk from 'redux-thunk';
import { Header, Login, RecipeList, RecipeItem } from '../src/components';
import reducer from '../src/reducers';

configure({ adapter: new Adapter() });

spy(Header.prototype, 'componentDidMount');
spy(Login.prototype, 'componentDidMount');

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    mount(<Header />);
    expect(Header.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<Login />', () => {
  it('calls renderErrorPassword', () => {
    const wrapper = mount(<Login />);
    expect(Login.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<RecipeList />', () => {
  it('check div is on this component', () => {
    const recipesObj = [
      {
        id: '001',
        name: 'name',
        description: 'description',
        ingredients: ['ingr1', 'ingr2'],
        category: {
          id: '901',
          name: 'deserts',
        },
      },
    ];
    const wrapper = mount(<RecipeList recipes={recipesObj} />);
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});

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
