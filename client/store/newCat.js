import axios from 'axios';


/**
 * ACTION TYPES
 */

const GET_SINGLE_CAT = 'GET_SINGLE_CAT';

/**
 * ACTION CREATORS
 */

const getSingleCat = (singleCat) => ({type: GET_SINGLE_CAT, singleCat});

/**
 * THUNK CREATORS
 */


export function createCat (category) {
    return function thunk (dispatch){
        return axios.post('/api/categories', {category})
        .then(res => dispatch(getSingleCat(res.data)))
        .catch(error => { console.log(error) });
    };
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_SINGLE_CAT:
      newState.singleCat = action.singleCat;
      break;
    default:
      return state;
  }
  return newState;
}
