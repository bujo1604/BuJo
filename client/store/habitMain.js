import axios from 'axios';

//ACTION TYPES

const GOT_HABIT_MAINS = 'GOT_HABIT_MAINS';
const GOT_NEW_HABIT_MAIN = 'GOT_NEW_HABIT_MAIN';
const REMOVE_HABIT_MAIN = 'REMOVE_HABIT_MAIN'

//ACTION CREATORS

const gotHabitMains = (habitmains) => ({type: GOT_HABIT_MAINS, habitmains});
const gotNewHabitMain = (habitmain) => ({type: GOT_NEW_HABIT_MAIN, habitmain});
const removeHabitMain = (habitmain) => ({type: REMOVE_HABIT_MAIN, habitmain})

//THUNK CREATORS

export function fetchHabitMains (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/habitmain/${userId}`)
        .then(res => dispatch(gotHabitMains(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function postHabitMain (newHabitMain) {
    return function thunk (dispatch){
        return axios.post('/api/habitmain/', newHabitMain)
        .then(res => dispatch(gotNewHabitMain(res.data)))
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
    case GOT_HABIT_MAINS:
      return action.habitmains

    case GOT_NEW_HABIT_MAIN:
      return [...state, action.habitmain]
    /*
      case REMOVE_HABIT_MAIN:
      return [...state.filter(note => note.id !== action.id)];
    */
      default:
      return state;
  }
}
