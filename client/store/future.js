import axios from 'axios';

//ACTION TYPES

const GOT_FUTURE_TASKS = 'GOT_FUTURE_TASKS';


//ACTION CREATORS

const gotFutureTasks = (futureTasks) => ({type: GOT_FUTURE_TASKS, futureTasks});


//THUNK CREATORS

export function fetchFutureTasks (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}/future`)
        .then(res => dispatch(gotFutureTasks(res.data)))
        .catch(error => { console.log(error) });
    };
}


// REDUCER
export default function (state = [], action) {
  switch (action.type) {

    case GOT_FUTURE_TASKS:
      return action.futureTasks;

    default:
      return state;
  }
}

