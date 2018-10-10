import * as types from '../constants/actionTypes';

const initialState = {
  categories: [],
  subcategories: [],
  challenges: [],
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
      const subcategories = state.subcategories;
      subcategories.push(action.payload);
      return {
        ...state,
        subcategories
      };

    default:
      return state;
  }
};

export default reducer;
