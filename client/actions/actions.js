import * as types from '../constants/actionTypes.js';

export const addQuestion = data => ({
  type: types.ADD_QUESTIONS,
  payload: data
});

export const addSubcategories = data => ({
  type: types.ADD_SUBCATEGORIES,
  payload: data
});

export const clickedCategory = category => ({
  type: types.CLICKED_CATEGORY,
  payload: category
});
export const getCategories = categories => ({
  type: types.GET_CATEGORIES,
  payload: categories
});
