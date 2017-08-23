import axios from 'axios';

//ACTION TYPES

const GOT_ROWS = 'GOT_ROWS';
const GOT_NEW_ROW = 'GOT_NEW_ROW';
const REMOVE_ROW = 'REMOVE_ROW';
const UPDATE_ROW = 'UPDATE_ROW';

//ACTION CREATORS

const gotRows = (rows) => ({type: GOT_ROWS, rows});
const gotNewRow = (row) => ({type: GOT_NEW_ROW, row});
const removeRow = (row) => ({type: REMOVE_ROW, row});
const updateRow = (row) => ({type: UPDATE_ROW, row});

//THUNK CREATORS

export function fetchRows (userId, startDate, endDate) {
    return function thunk (dispatch){
        return axios.get(`/api/habitrow/${userId}/?startdate=${startDate}&enddate=${endDate}&`)
        //return axios.get(`api/habitrow/${userId}`)
        .then(res => dispatch(gotRows(res.data)))
        .catch(error => { console.log(error) });
    };
}
export function updateRowThunk (rowId, update) {
    return function thunk (dispatch){
        return axios.put(`/api/habitrow/${rowId}`, update)
        .then(res => {
            dispatch(updateRow(res.data))})
        .catch(error => { console.log(error, "error in updateRowThunk") });
    }
}

export function postRow (newRow) {
    return function thunk (dispatch){
        return axios.post('/api/habitrow/', newRow)
        .then(res => dispatch(gotNewRow(res.data)))
        .catch(error => { console.log(error) });
    };
}
/*
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
    case UPDATE_ROW: 
        return state.map(row => (
            action.row.id === row.id ? action.row : row
        ));

    case GOT_NEW_ROW:
      return [...state, action.row]
/*
      case REMOVE_NOTE:
      return [...state.filter(note => note.id !== action.id)];
    */
      default:
      return state;
  }
}
