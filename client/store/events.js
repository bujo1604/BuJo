import axios from 'axios';


/**
 * ACTION TYPES
 */
const GET_EVENT_LIST = 'GET_EVENT_LIST';
const GET_SINGLE_EVENT = 'GET_SINGLE_EVENT';

/**
 * INITIAL STATE
 */
const intialState = {
    eventList: [],
    singleEvent: {}
};

/**
 * ACTION CREATORS
 */
const getEventList = (eventList) => ({type: GET_EVENT_LIST, eventList});
const getSingleEvent = (singleEvent) => ({type: GET_SINGLE_EVENT, singleEvent});

/**
 * THUNK CREATORS
 */

export function fetchEventList (userId) {
    return function thunk (dispatch){
        return axios.get(`/api/events/${userId}`)
        .then(res => dispatch(getEventList(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function fetchSingleEvent (eventId) {
    return function thunk (dispatch){
        return axios.get(`/api/events/${eventId}`)
        .then(res => {
          dispatch(getSingleEvent(res.data));
        })
        .catch(error => { console.log(error) });
    };
}

export function createEvent (event) {
    return function thunk (dispatch){
        return axios.post('/api/events', {event})
        .then(res => dispatch(getSingleEvent(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function changeEvent (eventId, event) {
    return function thunk (dispatch){
        return axios.put(`/api/events/${eventId}`, {event})
        .then(res => dispatch(getSingleEvent(res.data)))
        .catch(error => { console.log(error) });
    }
}

export function deleteEvent(eventId){
    return function thunk(){
        return axios.delete(`/api/events/${eventId}`)
        .catch(error => { console.log( error) });
    };
}

/**
 * REDUCER
 */
export default function (state = intialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_EVENT_LIST:
      newState.eventList = action.eventList;
      break;
    case GET_SINGLE_EVENT:
      newState.singleEvent = action.singleEvent;
      break;
    default:
      return state;
  }
  return newState;
}
