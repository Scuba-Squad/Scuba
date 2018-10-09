import { combineReducers } from 'redux';

// import reducers here
import reducers from './reducer.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  bank: reducers
});

export default reducers;
