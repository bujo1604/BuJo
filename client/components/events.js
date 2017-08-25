import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {greenA200} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

import { fetchEvents, deleteEvent, changeEvent } from '../store'

import { connect } from 'react-redux'


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: 'demo-edit',
            edit: 'true' // for setState issue change to slectec value thing
        }
        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSingle = this.handleChangeSingle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleClick(user, evt) {
        const userId = user.id
        return ((event) => {
            const eventId = evt.id
            event.preventDefault()
            this.props.removeEvent(eventId, userId)
        })
    }

    handleChangeSingle(event, value) {
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
        this.props.editEvent(eventId, data)
    }

    handleOpen() {
        console.log('IN HANDLE OPEN')
        this.setState({open: true});
      }
    
    handleClose(){
        this.setState({open: false});
      }
    
    render() {
        const { events, user } = this.props;
        const actions = [
            <FlatButton
              label="Ok"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];


        return (
            <div className='parent-center'>
                <div className='align-left'>
                    {events.map((event, idx) => {
                        return (
                            <div key={idx}>
                                <span className='event-bool'> &#x25CB; </span>

                                    <span className='event'>  {event.name}  {event.time}  </span>
                                    <IconButton onClick={this.handleOpen}> <FontIcon className="material-icons md-10" hoverColor={greenA200} > mode_edit </FontIcon> </IconButton>
                                    <IconButton tooltip='Migrate'> <FontIcon className="material-icons md-18" hoverColor={greenA200} > compare_arrows </FontIcon> </IconButton>
                                    <IconButton onClick={this.handleClick(user, event)} > <FontIcon className="material-icons md-18" hoverColor={greenA200} > delete </FontIcon> </IconButton>
                                    
                                    <Dialog
                                        title="Dialog With Date Picker"
                                        actions={actions}
                                        modal={false}
                                        open={this.state.open}
                                        onRequestClose={this.handleClose}
                                    >
                                        Open a Date Picker dialog from within a dialog.
                              <DatePicker hintText="Date Picker" />
                                    </Dialog>
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



// <IconMenu
// iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
// onChange={this.handleChangeSingle}
// value={this.state.valueSingle}
// >
// <MenuItem value="1" primaryText="Edit Note" />
// <MenuItem onClick={this.handleClick(user, event)} value="2" primaryText="Delete Note" />
// </IconMenu>