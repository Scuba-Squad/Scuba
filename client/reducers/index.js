import { combineReducers } from 'redux';

// import reducers here
import reducers from './reducer.js';

// combine reducers
const reducer = combineReducers({
  // if we had other reducers, they would go here
  banks: reducers,
});

export default reducer;
