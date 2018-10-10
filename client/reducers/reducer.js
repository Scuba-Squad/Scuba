import * as types from '../constants/actionTypes';

const initialState = {
  categories: [],
  subcategories: [],
  challenges: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUESTIONS:
      const categories = state.categories;
      categories.push(action.payload);
      return {
        ...state,
        categories
      };

    case types.ADD_SUBCATEGORIES:
      const newSubcategories = state.subcategories.slice(0);
      newSubcategories.push(action.payload);
      console.log(newSubcategories);
      return {
        ...state,
        subcategories: newSubcategories
      };

    default:
      return state;
  }
};

export default reducer;
