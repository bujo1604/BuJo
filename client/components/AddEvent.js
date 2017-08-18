import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../store'


class AddEvent extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { handleSubmit, handleCancel, user, day } = this.props;

        return (
            <div>
                Event
                <form onSubmit={evt => handleSubmit(user, evt, day)}>
                    Name:<input
                        name="name"
                    />
                    Location: <input
                        name="location"
                    />
                    Time: <input
                        name="time"
                        placeholder="HH:MM"
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
    user: state.user,
    day: state.day
});

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(user, evt, day) {
            evt.preventDefault();

            const newEvent = {
                userId: user.id,
                name: evt.target.name.value,
                location: evt.target.location.value,
                time: evt.target.time.value,
                date: day
            }

            dispatch(postEvent(newEvent))
            ownProps.history.push('/day')
        },
        handleCancel() {
            ownProps.history.push('/day')
        }
    };
}

export default connect(mapState, mapDispatch)(AddEvent);

