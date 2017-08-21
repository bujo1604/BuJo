//INITIAL STATE'
const initialState = 'week'

//ACTION TYPES

const UPDATE_VIEW = 'UPDATE_VIEW'

//ACTION CREATORS

export const updateView = (view) => ({ type: UPDATE_VIEW, view });

//THUNK CREATORS


// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.view;
    default:
      return state;
  }
}
