import axios from 'axios';

//ACTION TYPES

const GOT_FUTURE_TASKS = 'GOT_FUTURE_TASKS';
const GOT_FUTURE_TASKS_WITHIN = 'GOT_FUTURE_TASKS_WITHIN';
const GOT_NEW_FUTURE_TASK = 'GOT_NEW_FUTURE_TASK'


//ACTION CREATORS

const gotFutureTasks = (futureTasks) => ({type: GOT_FUTURE_TASKS, futureTasks});
const gotFutureTasksWithin = (futureTasks) => ({type: GOT_FUTURE_TASKS_WITHIN, futureTasks});
const gotNewFutureTask = (futureTask) => ({type: GOT_NEW_FUTURE_TASK, futureTask});


//THUNK CREATORS

export function fetchFutureTasks (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}/future/`)
        .then(res => dispatch(gotFutureTasks(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function fetchFutureTasksRange (userId, startDate, endDate) {
    return function thunk (dispatch){

        return axios.get(`/api/tasks/${userId}/future/?startdate=${startDate}&enddate=${endDate}&`)
        .then(res => dispatch(gotFutureTasksWithin(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function postNewFutureTask(newFutureTask){
    return function thunk(dispatch){
        return axios.post('/api/tasks', newFutureTask)
        .then(res => dispatch(gotNewFutureTask(res.data)))
        .catch(error => {console.log(error)});
    }

}




// REDUCER
export default function (state = [], action) {
  switch (action.type) {

    case GOT_FUTURE_TASKS:
      return action.futureTasks;
    case GOT_FUTURE_TASKS_WITHIN:
      return action.futureTasks;
     case GOT_NEW_FUTURE_TASK:
      return [...state, action.futureTask];
    default:
      return state;
  }
}

