import axios from 'axios';

//ACTION TYPES

const GOT_ROWS = 'GOT_ROWS';
const GOT_NEW_ROW = 'GOT_NEW_ROW';
const REMOVE_ROW = 'REMOVE_ROW'

//ACTION CREATORS

const gotRows = (rows) => ({type: GOT_ROWS, rows});
const gotNewRow = (row) => ({type: GOT_NEW_ROW, row});
const removeRow = (row) => ({type: REMOVE_ROW, row})

//THUNK CREATORS

export function fetchRows (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/habitrow/${userId}`)
        .then(res => dispatch(gotRows(res.data)))
        .catch(error => { console.log(error) });
    };
}

/*
export function postNote (newNote) {
    return function thunk (dispatch){
        return axios.post('/api/notes/', newNote)
        .then(res => dispatch(gotNewNote(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function changeNote (noteId, note) {
    return function thunk (dispatch){
        return axios.put(`/api/notes/${noteId}`, note)
        .then(res => dispatch(gotNotes(res.data)))
        .catch(error => { console.log(error) });
    }
}

export function deleteNote(noteId){
    return function thunk(dispatch){
        dispatch(removeNote(noteId));
        return axios.delete(`/api/notes/${noteId}`)
        .catch(error => { console.log( error) });
    };
}

*/
// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_ROWS:
      return action.rows
/*
    case GOT_NEW_NOTE:
      return [...state, action.note]

      case REMOVE_NOTE:
      return [...state.filter(note => note.id !== action.id)];
    */
      default:
      return state;
  }
}
