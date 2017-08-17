import moment from 'moment'

//INITIAL STATE
const initialState = moment(new Date()).startOf('week').format('YYYYMMDD');

//ACTION TYPES

const GOT_NEXT_WEEK = 'GOT_NEXT_WEEK';
const GOT_PREVIOUS_WEEK = 'GOT_PREVIOUS_WEEK';
const UPDATE_WEEK = 'UPDATE_WEEK';

//ACTION CREATORS

export const gotNextWeek = () => ({ type: GOT_NEXT_WEEK });
export const gotPreviousWeek = () => ({ type: GOT_PREVIOUS_WEEK });
export const updatedWeek = (week) => ({ type: UPDATE_WEEK, week });


//THUNK CREATORS


// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_NEXT_WEEK:
      return moment(state).add(1, "week").format('YYYYMMDD');
    case GOT_PREVIOUS_WEEK:
      return moment(state).subtract(1, "week").format('YYYYMMDD');
    case UPDATE_WEEK:
      return action.week;
    default:
      return state;
  }
}