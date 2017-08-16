import axios from 'axios';
//intial state

//ACTION TYPES

const GOT_NEXT_MONTH = 'GOT_NEXT_MONTH';
const GOT_PREVIOUS_MONTH = 'GOT_PREVIOUS_MONTH'

//ACTION CREATORS

const gotNextMonth = (days) => ({type: GOT_NEXT_MONTH, days});
const gotPreviousMonth = (days) => ({type: GOT_PREVIOUS_MONTH, days});


//THUNK CREATORS

export function fetchNextMonth (userId) {
    return function thunk (dispatch){
        
        dispatch(gotNextMonth(res.data)
        
    };
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_EVENTS:
      return action.events
    default:
      return state;
  }
}



// export function fetchSingleEvent (eventId) {
//     return function thunk (dispatch){
//         return axios.get(`/api/events/${eventId}`)
//         .then(res => {
//           dispatch(getSingleEvent(res.data));
//         })
//         .catch(error => { console.log(error) });
//     };
// }

// export function createEvent (event) {
//     return function thunk (dispatch){
//         return axios.post('/api/events', {event})
//         .then(res => dispatch(getSingleEvent(res.data)))
//         .catch(error => { console.log(error) });
//     };
// }

// export function changeEvent (eventId, event) {
//     return function thunk (dispatch){
//         return axios.put(`/api/events/${eventId}`, {event})
//         .then(res => dispatch(getSingleEvent(res.data)))
//         .catch(error => { console.log(error) });
//     }
// }

// export function deleteEvent(eventId){
//     return function thunk(){
//         return axios.delete(`/api/events/${eventId}`)
//         .catch(error => { console.log( error) });
//     };
// }
