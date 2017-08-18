import axios from 'axios';

//ACTION TYPES

const GOT_EVENTS = 'GOT_EVENTS';
const GOT_NEW_EVENT = 'GOT_NEW_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';

//ACTION CREATORS

const gotEvents = (events) => ({type: GOT_EVENTS, events});
const gotNewEvent = (event) => ({type: GOT_NEW_EVENT, event});
const removeEvent = (event) => ({type: REMOVE_EVENT, event});

//THUNK CREATORS

export function fetchEvents (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/events/${userId}`)
        .then(res => dispatch(gotEvents(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function postEvent (newEvent) {
    return function thunk (dispatch){
        return axios.post('/api/events/', newEvent)
        .then(res => dispatch(gotNewEvent(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function changeEvent (eventId, event) {
    return function thunk (dispatch){
        return axios.put(`/api/events/${eventId}`, event)
        .then(res => dispatch(gotEvents(res.data)))
        .catch(error => { console.log(error) });
    }
}

export function deleteEvent(eventId){
    return function thunk(dispatch){
        dispatch(removeEvent(eventId));
        return axios.delete(`/api/events/${eventId}`)
        .catch(error => { console.log( error) });
    };
}


// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GOT_EVENTS:
      return action.events

    case GOT_NEW_EVENT:
      return [...state, action.event];

    case REMOVE_EVENT:
        return [...state, [].filter(event => event.id !== action.id)];
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
