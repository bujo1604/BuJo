import axios from 'axios';
import {addCountToTasks} from './taskUtils'

//ACTION TYPES

const GOT_TASKS = 'GOT_TASKS';

//ACTION CREATORS

const gotTasks = (tasks) => ({type: GOT_TASKS, tasks});


//THUNK CREATORS

export function fetchTasks (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}`)
        .then(res => dispatch(gotTasks(res.data)))
        .catch(error => { console.log(error) });
    };
}


export function fetchTasksWithCount (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}`)
        .then(res => (res.data))
        .then(tasks => {
          addCountToTasks(tasks);
          return tasks
        })
        .then(tasks => dispatch(gotTasks(tasks)))
        .catch(error => { console.log(error) });
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {

    case GOT_TASKS:
      return action.tasks
    default:
      return state;
  }
}


// export function fetchSingleTask (taskId) {
//     return function thunk (dispatch){
//         return axios.get(`/api/tasks/${taskId}`)
//         .then(res => {
//           dispatch(getSingleTask(res.data));
//         })
//         .catch(error => { console.log(error) });
//     };
// }

// export function createTask (task) {
//     return function thunk (dispatch){
//         return axios.post('/api/tasks', {task})
//         .then(res => dispatch(getSingleTask(res.data)))
//         .catch(error => { console.log(error) });
//     };
// }

// export function changeTask (taskId, task) {
//     return function thunk (dispatch){
//         return axios.put(`/api/tasks/${taskId}`, {task})
//         .then(res => dispatch(getSingleTask(res.data)))
//         .catch(error => { console.log(error) });
//     }
// }

// export function deleteTask(taskId){
//     return function thunk(){
//         return axios.delete(`/api/tasks/${taskId}`)
//         .catch(error => { console.log( error) });
//     };
// }
