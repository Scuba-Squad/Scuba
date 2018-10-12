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
  let newSubCategories;
  let newSelectedSubCategory;
  let newSelectedChallenge;

  switch (action.type) {
    // case types.ADD_QUESTIONS:
    //   newCategories = state.categories.slice(0);
    //   newCategories.push(action.payload);
    //   return {
    //     ...state,
    //     categories: newCategories
    //   };

    case types.ADD_SUBCATEGORIES:
      const newSubcategories = state.subcategories.slice(0);
      newSubcategories.push(action.payload);
      return {
        ...state,
        subcategories: newSubcategories
      };

    case types.GET_CATEGORIES:
      newCategories = action.payload;

      return {
        ...state,
        categories: newCategories
      };

    case types.GET_SUBCATEGORIES:
      newSubCategories = action.payload;

      return {
        ...state,
        subcategories: newSubCategories
      };
    
    case types.GET_CHALLENGES:
      const newChallenges = action.payload;
      return {
        ...state,
        challenges: newChallenges
      };

    case types.CLICKED_CATEGORY:
      const newSelectedCategory = action.payload;
      newSelectedSubCategory = -1;
      // const newClickedCategory = state.selectedCategory;
      // newClickedCategory.push(action.payload);
      // console.log('From REDUCER', newClickedCategory);
      return {
        ...state,
        selectedCategory: newSelectedCategory,
        selectedSubCategory: newSelectedSubCategory,
        selectedChallenge: -1
        // selectedCategory: newClickedCategory
      };

    case types.CLICKED_SUBCATEGORY:
      newSelectedSubCategory = action.payload;
      // const newClickedCategory = state.selectedCategory;
      // newClickedCategory.push(action.payload);
      // console.log('From REDUCER', newClickedCategory);
      return {
        ...state,
        selectedSubCategory: newSelectedSubCategory,
        selectedChallenge: -1
        // selectedCategory: newClickedCategory
      };  
    
      case types.SELECTED_CHALLENGE:
      newSelectedChallenge = action.payload;
      // const newClickedCategory = state.selectedCategory;
      // newClickedCategory.push(action.payload);
      // console.log('From REDUCER', newClickedCategory);
      return {
        ...state,
        selectedChallenge: newSelectedChallenge
        // selectedCategory: newClickedCategory
      };  


    default:
      return state;
  }
};

export default reducer;
