import React from 'react';
// import InlineEdit from 'react-edit-inline'
import { RIETextArea } from 'riek'
import { connect } from 'react-redux'
import { fetchNotes, deleteNote,  changeNote } from '../store'


class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text : 'demo-edit'
        }
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

    dataChanged(data){
        const note = Object.keys(data);
        const noteId = note[0]
        const editNote = {
            text: data[note]
        }

        this.props.editNote(noteId, editNote)
    }


    render(){
        const { notes, user } = this.props;
        return (
            <div>
            <h3 className="singleName-headings">Notes</h3>
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
                        <span className='event'>
                        <button id={note.id} onClick={this.handleClick(user)} type='submit' >DELETE</button>
                        </span>
                    </div>
                ))}


        </div>
        )
    }

}



// <InlineEdit
// activeClassName="editing"
// text={note.text}
// id={note.id}
// paramName="text"
// change={this.dataChanged}
// style={{
//   backgroundColor: 'light blue',
//   minWidth: 150,
//   display: 'inline-block',
//   margin: 5,
//   padding: 0,
//   fontSize: 15,
//   outline: 0,
//   border: 0
// }}
// />




// const Notes = (props) => {
//     const { notes, user, handleClick } = props;
//     return (
//         <div>
//
//             {notes.map((note, idx) => (
//                 <div key={idx}>
//                     <span> &#x25AC;</span>
//                     <span> {note.text} </span>
//                     <button id={note.id}  onClick={  handleClick(user) } type='submit' >DELETE</button>
//                 </div>
//             ))}
//         </div>
//     )
// }


const mapState = (state) => ({
      user: state.user,
      day: state.day
    })

    const mapDispatch = (dispatch) => {
        return {
            editNote(noteId, editNote, userId ){
                dispatch(changeNote(noteId, editNote))
                dispatch(fetchNotes(userId))

                },
            removeNote(noteId, userId){
                 dispatch(deleteNote(noteId))
                 dispatch(fetchNotes(userId))
            }

            }
        }


    export default connect(mapState, mapDispatch)(Notes)
