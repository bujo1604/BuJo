import React from 'react';
import { fetchEvents, deleteEvent} from '../store'
import {connect} from 'react-redux'

const Events = (props) => {
    const { events, user, handleClick } = props;
    return (
        <div>
            {events.map((event, idx) => (
                <div key={idx}>
                    <span> &#x25CB;</span>
                    <span> {event.time} {event.name} </span>
                    <button id={event.id}  onClick={  handleClick(user) } type='submit' >DELETE</button>
                </div>
            ))}
        </div>
    )
}


//add in button for location to do maps thing


const mapState = (state) => ({
      user: state.user
    })
    
    const mapDispatch = (dispatch) => {
        return {
            handleClick(user){
    
                return ( (event) => {
                    event.preventDefault()
                dispatch(deleteEvent(event.target.id))
                dispatch(fetchEvents(user.id))
    
                }
                )
            }
        }
    }
    
    export default connect(mapState, mapDispatch)(Events)