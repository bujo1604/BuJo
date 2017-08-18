import axios from 'axios';

//ACTION TYPES

const GOT_COMPLETE_TASKS = 'GOT_COMPLETE_TASKS';

//ACTION CREATORS

const gotCompleteTasks = (completeTasks) => ({type: GOT_COMPLETE_TASKS, completeTasks});


//THUNK CREATORS

//get all completed tasks by date and add count
export function fetchCompleteTasksByDate (userId, startDate, endDate) {
    return function thunk (dispatch){
        return axios.get(`/api/tasks/${userId}/complete?startdate=${startDate}&enddate=${endDate}&`)
        .then(res => (res.data))
        // .then(completeTasks => {
        //   addCountToTasks(completeTasks);
        //   return completeTasks
        // })
        .then(completeTasks => dispatch(gotCompleteTasks(completeTasks)))
        .catch(error => { console.log(error) });
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {

    case GOT_COMPLETE_TASKS:
      return action.completeTasks
    default:
      return state;
  }
}
