import React from 'react';
import { connect } from 'react-redux'
import { fetchNotes, deleteNote } from '../store'

const Notes = (props) => {
    const { notes, user, handleClick } = props;
    return (
        <div>
            <h3 className="singleName-headings">Notes</h3>
            {notes.map((note, idx) => (
                <div key={idx}>
                    <span> &#x25AC;</span>
                    <span> {note.text} </span>
                    <button id={note.id}  onClick={  handleClick(user) } type='submit' >DELETE</button>
                </div>
            ))}
        </div>
    )
}


const mapState = (state) => ({
      user: state.user
    })
    
    const mapDispatch = (dispatch) => {
        return {
            handleClick(user){
                
                return ( (event) => {
                    event.preventDefault()
                dispatch(deleteNote(event.target.id))
                dispatch(fetchNotes(user.id))
    
                }
                )
            }
        }
    }
    
    export default connect(mapState, mapDispatch)(Notes)
