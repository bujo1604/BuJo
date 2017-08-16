import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../store'


class AddNote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleSubmit, handleCancel, user } = this.props;
        return (
            <div>
                <form onSubmit={evt => handleSubmit(user, evt)}>
                    <textarea
                        name="note"
                        cols="60"
                        rows="6"
                        placeholder="How was your day today?"
                    />
                    <br />
                    <button type="submit"> Submit </button>
                </form>
                <button onClick={handleCancel}> Cancel </button>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user
});

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(user, evt) {
            evt.preventDefault();
            const newNote = {
                userId: user.id,
                note: evt.target.note.value,
                date: '20170908'
            }
            dispatch(postNote(newNote))
            ownProps.history.push('/day')
        },
        handleCancel() {
            ownProps.history.push('/day')
        }
    };
}

export default connect(mapState, mapDispatch)(AddNote);

