import axios from 'axios';

//ACTION TYPES

const GOT_NOTES = 'GOT_NOTES';

//ACTION CREATORS

const gotNotes = (notes) => ({type: GOT_NOTES, notes});

//THUNK CREATORS

export function fetchNotes (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/notes/${userId}`)
        .then(res => dispatch(gotNotes(res.data)))
        .catch(error => { console.log(error) });
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_NOTES:
      return action.notes
    default:
      return state;
  }
}
