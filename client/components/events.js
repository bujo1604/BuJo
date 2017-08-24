import React from 'react';
import { RIEInput } from 'riek'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { fetchEvents, deleteEvent, changeEvent } from '../store'

import { connect } from 'react-redux'


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'demo-edit',
            edit: 'true' // for setState issue change to slectec value thing
        }
        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSingle = this.handleChangeSingle.bind(this);

    }

    handleClick(user, evt) {
        const userId = user.id
        return ((event) => {
            console.log(evt);
            const eventId = evt.id
            event.preventDefault()
            this.props.removeEvent(eventId, userId)

        })
    }

    handleChangeSingle(event, value) {
        // console.log('in chnage')
        return (
            this.setState(
                {
                    valueSingle: value,
                    edit: false
                }
            )
        )
    }


    dataChanged(data) {
        // console.log(data);
        this.props.editEvent(eventId, data)
    }


    render() {
        const { events, user } = this.props;
        return (
            <div className='parent-center'>
                <div className='align-left'>
                    {events.map((event, idx) => {
                        return (
                            <div key={idx}>

                                <span className='event-bool'> &#x25CB; </span>

                                {(this.state.edit) ?
                                    (

                                        <span className='event'>  {event.name}  {event.time}  </span>


                                    ) :
                                    (

                                        <span className='event'>
                                            <RIEInput
                                                id={event.id}
                                                value={event.name}
                                                change={this.dataChanged}
                                                propName="name"
                                            />


                                            <RIEInput
                                                id={event.id}
                                                value={event.time}
                                                change={this.dataChanged}
                                                propName="time"
                                                defaultValue={
                                                    { id: event.id }
                                                }
                                                editProps={
                                                    { style: { minWidth: 120 } }
                                                }
                                            />
                                        </span>


                                    )

                                }


                                    <IconMenu
                                        iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
                                        onChange={this.handleChangeSingle}
                                        value={this.state.valueSingle}
                                    >
                                        <MenuItem value="1" primaryText="Edit Event" />
                                        <MenuItem onClick={this.handleClick(user, event)} value="2" primaryText="Delete Event" />

                                    </IconMenu>


                            </div>
                        )
                    })}
                </div>

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
        editEvent(eventId, editEvent, userId) {
            dispatch(changeEvent(eventId, editEvent))
            dispatch(fetchEvents(userId))


        },
        removeEvent(eventId, userId) {
            dispatch(deleteEvent(eventId))
            dispatch(fetchEvents(userId))
        }
    }
}

export default connect(mapState, mapDispatch)(Events)


