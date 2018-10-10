import * as types from '../constants/actionTypes';

const initialState = {
  categories: [],
  subcategories: [],
  challenges: [],
  selectedCategory: -1,
  selectedSubCategory: -1,
  selectedChallenge: -1
};

const reducer = (state = initialState, action) => {
  let newCategories;

  switch (action.type) {
    case types.ADD_QUESTIONS:
      newCategories = state.categories.slice(0);
      newCategories.push(action.payload);
      return {
        ...state,
        categories: newCategories
      };

    case types.ADD_SUBCATEGORIES:
      const newSubcategories = state.subcategories.slice(0);
      newSubcategories.push(action.payload);
      return {
        ...state,
        subcategories: newSubcategories
      }

    case types.GET_CATEGORIES:
      newCategories = action.payload;

      return {
        ...state,
        categories: newCategories
      };

    case types.CLICKED_CATEGORY:

      const newSelectedCategory = action.payload;
      // const newClickedCategory = state.selectedCategory;
      // newClickedCategory.push(action.payload);
      // console.log('From REDUCER', newClickedCategory);
      return {
        ...state,
        selectedCategory: newSelectedCategory
        // selectedCategory: newClickedCategory
      };

    default:
      return state;
  }
};

export default reducer;
