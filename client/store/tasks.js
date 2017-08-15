import axios from 'axios';


/**
 * ACTION TYPES
 */
const GET_TASK_LIST = 'GET_TASK_LIST';
// const GET_SINGLE_TASK = 'GET_SINGLE_TASK';

/**
 * INITIAL STATE
 */
const intialState = []

/**
 * ACTION CREATORS
 */
const getTaskList = (taskList) => ({type: GET_TASK_LIST, taskList});
// const getSingleTask = (singleTask) => ({type: GET_SINGLE_TASK, singleTask});

/**
 * THUNK CREATORS
 */

export function fetchTaskList (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}`)
        .then(res => dispatch(getTaskList(res.data)))
        .catch(error => { console.log(error) });
    };
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

/**
 * REDUCER
 */
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_TASK_LIST:
      return action.taskList
    // case GET_SINGLE_TASK:
    //   newState.singleTask = action.singleTask;
    //   break;
    default:
      return state;
  }
}
