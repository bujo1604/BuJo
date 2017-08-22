import React from 'react';
import { RIEInput } from 'riek'
import { fetchEvents, deleteEvent, changeEvent} from '../store'

import {connect} from 'react-redux'


class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'demo-edit'
        }
        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(user) {
        const userId = user.id
        return ((event) => {
            const eventId = event.target.id
            event.preventDefault()
            this.props.removeEvent(eventId, userId)

        })
    }
//work on editing events


    dataChanged(data){
        console.log(data);
        const eventId = 15
        console.log('inchnage', event)
        this.props.editEvent(eventId, data)
    }


    render(){
        const { events, user } = this.props;
        return (
            <div>
            {events.map((event, idx) => {
                return (
                    <div key={idx}>
                        <span className='event'> &#x25CB;</span>

                        <span className='event'>
                        <RIEInput
                        id={event.id}
                        value={event.time}
                        change={this.dataChanged}
                        propName="time"
                        defaultValue={
                            {id: event.id}
                        }
                        editProps= {
                            {style: {minWidth: 120}}
                        }
                        />
                        </span>
                        <span className='event'>
                        <RIEInput
                        id={event.id}
                        value={event.name}
                        change={this.dataChanged}
                        propName="name"
                        />
                       </span>
                        <span className='event'>
                        <RIEInput
                        id={event.id}
                        value={event.location}
                        change={() => this.dataChanged(event.id)}
                        propName="location"
                        />
                        </span>
                        <span className='event'>
                        <button  id={event.id} onClick={this.handleClick(user)} type="submit" >DELETE</button>
                        </span>

                    </div>
                )})}


        </div>
        )
    }

}

const mapState = (state) => ({
      user: state.user,
      day: state.day
    })

    const mapDispatch = (dispatch) => {
        return {
            editEvent(eventId, editEvent, userId){
                dispatch(changeEvent(eventId, editEvent))
                dispatch(fetchEvents(userId))


            },
            removeEvent(eventId, userId){
                dispatch(deleteEvent(eventId))
                dispatch(fetchEvents(userId))
           }
        }
    }

    export default connect(mapState, mapDispatch)(Events)


// const Events = (props) => {
//     const { events, user, handleClick } = props;
//     return (
//         <div>
//             {events.map((event, idx) => (
//                 <div key={idx}>
//                     <span> &#x25CB;</span>
//                     <span> {event.time} {event.name} </span>
//                     <button id={event.id}  onClick={  handleClick(user) } type='submit' >DELETE</button>
//                 </div>
//             ))}
//         </div>
//     )
// }


//add in button for location to do maps thing

