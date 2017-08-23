import React from 'react';
import { RIETextArea } from 'riek'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
                        <div className='lin' key={idx}>
                            {(this.state.edit) ?
                                (
                                    <span className='event-bool'> &#x25AC;  {note.text}  </span>
                                ) :
                                (
                                    <span className='event'> &#x25AC;
                                     <RIETextArea
                                            id={note.id}
                                            value={note.text}
                                            change={this.dataChanged}
                                            propName={note.id.toString()}
                                        />
                                    </span>
                                )
                            }
                            <IconMenu
                                iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                                onChange={this.handleChangeSingle}
                                value={this.state.valueSingle}
                                className="del"
                            >
                                <MenuItem value="1" primaryText="Edit Note" />
                                <MenuItem onClick={this.handleClick(user, note)} value="2" primaryText="Delete Note" />
                            </IconMenu>
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
