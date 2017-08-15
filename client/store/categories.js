import axios from 'axios';

//ACTION TYPES

const GOT_CATEGORIES = 'GOT_CATEGORIES';

//ACTION CREATORS

const gotCategories = (categories) => ({type: GOT_CATEGORIES, categories});

//THUNK CREATORS

export function fetchCategories (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/categories/${userId}`)
        .then(res => dispatch(gotCategories(res.data)))
        .catch(error => { console.log(error) });
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_CATEGORIES:
      return action.categories
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
