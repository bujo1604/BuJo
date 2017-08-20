import moment from 'moment'

//INITIAL STATE
const initialState = moment(new Date()).startOf("year").format('YYYYMMDD')

//ACTION TYPES

const GOT_NEXT_YEAR = 'GOT_NEXT_YEAR';
const GOT_PREVIOUS_YEAR = 'GOT_PREVIOUS_YEAR';
const UPDATE_YEAR = 'UPDATE_YEAR';

//ACTION CREATORS

export const gotNextYear = () => ({ type: GOT_NEXT_YEAR });
export const gotPreviousYear = () => ({ type: GOT_PREVIOUS_YEAR });
export const updatedYear = (year) => ({ type: UPDATE_YEAR, year });


//THUNK CREATORS


// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_NEXT_YEAR:
      return moment(state).add(1, "year").format("YYYYMMDD");
    case GOT_PREVIOUS_YEAR:
      return moment(state).subtract(1, "year").format("YYYYMMDD");
    case UPDATE_YEAR:
      return action.year;
    default:
      return state;
  }
}