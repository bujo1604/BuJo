import React from 'react';
// import InlineEdit from 'react-edit-inline'
import { RIETextArea } from 'riek'
import { connect } from 'react-redux'
import { fetchNotes, deleteNote, changeNote } from '../store'
import moment from 'moment'
import {sortTasksByDate} from '../store/taskUtils'


class Reflections extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(user) {
        const userId = user.id
        return ((event) => {
            const noteId = event.target.id
            event.preventDefault()
            this.props.removeNote(noteId, userId)

        })
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
        sortTasksByDate(notes)
        return (
             <div className="parent-center">
            <div className='align-left'>
                <h3 className="singleName-headings">Reflections</h3>
                {notes.map((note, idx) => (

                    <div key={idx}>
                        <span className='event'> &#x25AC;</span>
                        <span className='event'>
                        <RIETextArea
                            id={note.id}
                            value={note.text}
                            change={this.dataChanged}
                            propName={note.id.toString()}
                        />
                        </span>
                        <span className='event'>{moment(note.date).format("MM.D.YY")}</span>
                       <div className='del'>
                        <span >
                        <button id={note.id} onClick={this.handleClick(user)} type='submit' >DELETE</button>
                        </span>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}



const mapState = (state) => ({
    user: state.user,
    day: state.day,
    notes: state.notes
})

const mapDispatch = (dispatch) => {
    return {
        loadNotes(userId) {
            dispatch(fetchNotes(userId));
        },
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


export default connect(mapState, mapDispatch)(Reflections)
