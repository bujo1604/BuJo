import moment from 'moment'

//INITIAL STATE
const initialState = moment(new Date()).format('MMMM YYYY')

//ACTION TYPES

const GOT_NEXT_MONTH = 'GOT_NEXT_MONTH';
const GOT_PREVIOUS_MONTH = 'GOT_PREVIOUS_MONTH';
const UPDATE_MONTH = 'UPDATE_MONTH';

//ACTION CREATORS

export const gotNextMonth = () => ({ type: GOT_NEXT_MONTH });
export const gotPreviousMonth = () => ({ type: GOT_PREVIOUS_MONTH });
export const updatedMonth = (month) => ({ type: UPDATE_MONTH, month });


//THUNK CREATORS


// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_NEXT_MONTH:
      return moment(state).add(1, "month").format("MMMM YYYY");
    case GOT_PREVIOUS_MONTH:
      return moment(state).subtract(1, "month").format("MMMM YYYY");
    case UPDATE_MONTH:
      return action.month;
    default:
      return state;
  }
}



