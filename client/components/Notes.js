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
        
        const userId = user.id

        return ((event) => {
            
            const noteId = note.id

            event.preventDefault();

            this.setState({valueSingle: ''})
            this.props.removeNote(noteId, userId)
        })
    }

    handleChangeSingle(event, value) {
        console.log('before', this.state)
        console.log('value', value)
        return (
            this.setState(
                {
                    valueSingle: value
                }, 
                console.log('after', this.state)
            )
        )
    }



    dataChanged(data) {
        const note = Object.keys(data);
        const noteId = note[0]
        const editNote = {
            text: data[note]
        }
        this.setState({valueSingle: ''})
        this.props.editNote(noteId, editNote)
    }



    render() {
        const { notes, user } = this.props;
        console.log('STATE', this.state)

        return (
            <div className="parent-center">
                <div className="align-left" >

                    {notes.map((note, idx) => (
                        <div className='lin' key={idx}>
                            {(this.state.valueSingle === "1") ?
                                (
                                    <span className='event'> &#x25AC;
                                    <RIETextArea
                                           id={note.id}
                                           value={note.text}
                                           change={this.dataChanged}
                                           propName={note.id.toString()}
                                           editProps={
                                            { style: { backgroundColor: 'yellow', 
                                        border: 10, 
                                    textColor: 'blue'} }
                                        }
                                       />
        
                                   </span>
                                ) :
                                (
                                    <span className='event-bool'> &#x25AC;  {note.text} {console.log('in false')} </span>
                                )
                            }
                            <IconMenu
                                iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
                                onChange={this.handleChangeSingle}
                                value={this.state.valueSingle}
                                
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
