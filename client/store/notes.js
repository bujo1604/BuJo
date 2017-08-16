import axios from 'axios';

//ACTION TYPES

const GOT_NOTES = 'GOT_NOTES';
const GOT_NEW_NOTE = 'GOT_NEW_NOTE';

//ACTION CREATORS

const gotNotes = (notes) => ({type: GOT_NOTES, notes});
const gotNewNote = (note) => ({type: GOT_NEW_NOTE, note});

//THUNK CREATORS

export function fetchNotes (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/notes/${userId}`)
        .then(res => dispatch(gotNotes(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function postNote (newNote) {
    return function thunk (dispatch){
        return axios.post('/api/notes/', newNote)
        .then(res => dispatch(gotNewNote(res.data)))
        .catch(error => { console.log(error) });
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_NOTES:
      return action.notes
    case GOT_NEW_NOTE:
      return [...state, action.note];
    default:
      return state;
  }
}
