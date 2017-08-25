import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {greenA200} from 'material-ui/styles/colors';


import { connect } from 'react-redux'

import { fetchNotes, deleteNote, changeNote } from '../store'


class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSingle: '',
            edit: 'true'
        }
        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSingle = this.handleChangeSingle.bind(this);


    }

    handleClick(user, note) {
        // console.log('in handle click')
        const userId = user.id

        return ((event) => {
            console.log(note.id);
            const noteId = note.id

            event.preventDefault();
            this.props.removeNote(noteId, userId)
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
        const note = Object.keys(data);
        const noteId = note[0]
        const editNote = {
            text: data[note]
        }
        this.props.editNote(noteId, editNote)
    }


    render() {
        const { notes, user } = this.props;


        return (
            <div className="parent-center">
                <div className="align-left" >

                    {notes.map((note, idx) => (
                        <div className="lin" key={idx}>
                                    <span className="event-bool"> &#x25AC;  {note.text}  </span>
                                    <IconButton> <FontIcon className="material-icons md-10" hoverColor={greenA200} > mode_edit </FontIcon> </IconButton>
                                    <IconButton onClick={this.handleClick(user, note)} > <FontIcon className="material-icons md-18" hoverColor={greenA200} > delete </FontIcon> </IconButton>
                        </div>
                    ))}

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
        editNote(noteId, editNote, userId) {
            dispatch(changeNote(noteId, editNote))
            dispatch(fetchNotes(userId))

        },
        removeNote(noteId, userId) {
            dispatch(deleteNote(noteId))
            dispatch(fetchNotes(userId))
        }

    }
}


export default connect(mapState, mapDispatch)(Notes)


// <IconMenu
// iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
// onChange={this.handleChangeSingle}
// value={this.state.valueSingle}

// >
// <MenuItem value="1" primaryText="Edit Note" />
// <MenuItem onClick={this.handleClick(user, note)} value="2" primaryText="Delete Note" />
// </IconMenu>
