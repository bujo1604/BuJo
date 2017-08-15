import axios from 'axios';

//ACTION TYPES

const GOT_EVENTS = 'GOT_EVENTS';

//ACTION CREATORS

const gotEvents = (events) => ({type: GOT_EVENTS, events});

//THUNK CREATORS

export function fetchEvents (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/events/${userId}`)
        .then(res => dispatch(gotEvents(res.data)))
        .catch(error => { console.log(error) });
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
