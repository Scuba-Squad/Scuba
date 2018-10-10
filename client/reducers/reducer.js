import * as types from '../constants/actionTypes';

const initialState = {
  categories: [
    { name: 'Algorithm', _id: 0 },
    { name: 'Data Structure', _id: 1 },
    { name: 'System Design', _id: 2 }
  ],
  subcategories: [
    {
      category_id: 0,
      name: 'Recursion',
      subcategory_id: 0
    },
    {
      category_id: 0,
      name: 'Higher Order Function',
      subcategory_id: 1
    },
    {
      category_id: 1,
      name: 'Link Lists',
      subcategory_id: 2
    },
    {
      category_id: 2,
      name: 'Build a System',
      subcategory_id: 3
    }

  ],
  challenges: [
    {
      subcategory_id: 0,
      name: 'Sort array [5,2,3]',

    },
    {
      subcategory_id: 0,
      name: 'given a number return a + 2'
    },
    {
      subcategory_id: 1,
      name: 'Traverse a Link List'
    },
    {
      subcategory_id: 2,
      name: 'Build a Twitter'
    }
  ],
  selectedCategory: -1,
  selectedSubcategories: -1,
  selectedChallenges: -1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUESTIONS:
      const newCategories = state.categories.slice(0)
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
