import axios from 'axios';


/**
 * ACTION TYPES
 */
const GET_CAT_LIST = 'GET_CAT_LIST';
const GET_SINGLE_CAT = 'GET_SINGLE_CAT';

/**
 * INITIAL STATE
 */
const intialState = {
    catList: [],
    singleCat: {}
};

/**
 * ACTION CREATORS
 */
const getCatList = (catList) => ({type: GET_CAT_LIST, catList});
const getSingleCat = (singleCat) => ({type: GET_SINGLE_CAT, singleCat});

/**
 * THUNK CREATORS
 */

export function fetchCatList (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/categories/${userId}`)
        .then(res => dispatch(getCatList(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function fetchSingleCat (categoryId) {
    return function thunk (dispatch){
        return axios.get(`/api/categories/${categoryId}`)
        .then(res => {
          dispatch(getSingleCat(res.data));
        })
        .catch(error => { console.log(error) });
    };
}

export function createCat (category) {
    return function thunk (dispatch){
        return axios.post('/api/categories', {category})
        .then(res => dispatch(getSingleCat(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function changeCat (categoryId, category) {
    return function thunk (dispatch){
        return axios.put(`/api/categories/${categoryId}`, {category})
        .then(res => dispatch(getSingleCat(res.data)))
        .catch(error => { console.log(error) });
    }
}

export function deleteCat(categoryId){
    return function thunk(){
        return axios.delete(`/api/categories/${categoryId}`)
        .catch(error => { console.log( error) });
    };
}

/**
 * REDUCER
 */
export default function (state = intialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_CAT_LIST:
      newState.catList = action.catList;
      break;
    case GET_SINGLE_CAT:
      newState.singleCat = action.singleCat;
      break;
    default:
      return state;
  }
  return newState;
}
