import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../store'


class AddEvent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            intialValue : ''
        }
    }

    render() {
        const { handleSubmit, handleCancel, user } = this.props;

        return (
            <div>
                <form onSubmit={evt => handleSubmit(user, evt)}>
                    <input 
                    name="name"
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
            dispatch(postEvent(newNote))
            ownProps.history.push('/day')
        },
        handleCancel() {
            ownProps.history.push('/day')
        }
    };
}

export default connect(mapState, mapDispatch)(AddEvent);

