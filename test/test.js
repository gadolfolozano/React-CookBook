var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

/*import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'

const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

//store.dispatch(loginUser('gadolfolozano', 'e10adc3949ba59abbe56e057f20f883e'))

console.log({intialState: store.getState()});*/

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../src/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk2.default];
var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));

//store.dispatch(loginUser('gadolfolozano', 'e10adc3949ba59abbe56e057f20f883e'))

console.log({ intialState: store.getState() });
