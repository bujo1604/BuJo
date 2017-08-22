import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../store'


class AddNote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleSubmit, handleCancel, user, day } = this.props;

        return (
            <div className="day-position">
                <form  onSubmit={evt => handleSubmit(user, evt, day)}>
                <div className='text' >
                    <textarea className="textarea"
                         name="note"
                        // cols="60"
                        // rows="6"
                        placeholder="How was your day today?"
                    />
                    </div>
                    <br />
                     <button
                  className="button is-success"

                >
                 <span className="icon is-small">
                    <i className="fa fa-check" />
                  </span>
                  <span>Add</span>
                </button>
                </form>

                <button className="button is-danger is-outlined" onClick={handleCancel}>
    <span>Cancel</span>
    <span className="icon is-small">
      <i className="fa fa-times"></i>
    </span>
  </button>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    day: state.day
});

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(user, evt, day) {
            evt.preventDefault();
            const newNote = {
                userId: user.id,
                note: evt.target.note.value,
                date: day
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

