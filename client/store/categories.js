import axios from 'axios';

//ACTION TYPES

const GOT_CATEGORIES = 'GOT_CATEGORIES';

const ADD_CATEGORY = 'ADD_CATEGORY';
//ACTION CREATORS

const gotCategories = (categories) => ({type: GOT_CATEGORIES, categories});

export function addCategory (category) {
  const action = { type: ADD_CATEGORY, category };
  return action;
}

//THUNK CREATORS

export function fetchCategories (userId) {
    return function thunk (dispatch){
        console.log('USERID IN THUNK', userId)
        return axios.get(`/api/categories/${userId}`)
        .then(res => dispatch(gotCategories(res.data)))
        .catch(error => { console.log(error) });
    };
}
export const addNewCategory = (category, userId) => (dispatch) => {
      axios.post(`/api/categories`, category)

        .then(res =>
           {
            dispatch(fetchCategories(userId))})
        .catch(err => console.error('Adding category unsuccesful', err));
 };

// REDUCER
export default function (state = [], action) {
    let newState = Object.assign({}, state);
  switch (action.type) {
    case GOT_CATEGORIES:
     newState = action.categories;
     return newState;

      case ADD_CATEGORY:
      newState = [...state, action.category];
      return newState;

    default:
      return state;
  }
}


// export function createCat (category) {
//     return function thunk (dispatch){
//         return axios.post('/api/categories', {category})
//         .then(res => dispatch(getSingleCat(res.data)))
//         .catch(error => { console.log(error) });
//     };
// }

// export function changeCat (categoryId, category) {
//     return function thunk (dispatch){
//         return axios.put(`/api/categories/${categoryId}`, {category})
//         .then(res => dispatch(getSingleCat(res.data)))
//         .catch(error => { console.log(error) });
//     }
// }

// export function deleteCat(categoryId){
//     return function thunk(){
//         return axios.delete(`/api/categories/${categoryId}`)
//         .catch(error => { console.log( error) });
//     };
// }
