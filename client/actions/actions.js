import * as types from '../constants/actionTypes.js';

export const addQuestion = (data) => ({
  type: types.ADD_QUESTIONS,
  payload: data,
})
// export const createContact = (data) => ({
//     type: types.CREATE_CONTACT,
//     payload: data,
// });

// export const updateContact = (contactId, newData) => ({
//     type: types.UPDATE_CONTACT,
//     payload: {id: contactId, ...newData}, 
// });

// export const deleteContact = (contactId) => ({
//     type: types.DELETE_CONTACT,
//     payload: {id: contactId}
// });

// export const updateNewName = (newName) => ({
//     type: types.NEW_NAME,
//     payload: newName,
// });

// export const updateNewAddress = (newAddress) => ({
//     type: types.NEW_ADDRESS,
//     payload: newAddress,
// });

// export const updateNewPhone = (newPhone) => ({
//     type: types.NEW_PHONE,
//     payload: newPhone,
// });