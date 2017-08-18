import axios from 'axios';


/**
 * ACTION TYPES
 */
const GET_COLORS = 'GET_COLORS';

/**
 * ACTION CREATORS
 */
const getColors = (colors) => ({type: GET_COLORS, colors});


/**
 * THUNK CREATORS
 */
export const fetchColors = () => dispatch => {

axios.get('/api/colors')
       .then(res => {
           dispatch(getColors(res.data));
       })
      .catch(err => console.error(err));
};

/**
 * REDUCER
 */

export default function (state = [], action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_COLORS:
     newState = action.colors;
     return newState;

    default:
      return state;
  }
}
