import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../store'


class AddEvent extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { handleSubmit, handleCancel, user } = this.props;
        
        return (
            <div>
            Event
                <form onSubmit= {evt => handleSubmit(user, evt)}>
                    Name:<input
                    name="name"
                    />
                    Location: <input
                    name="location"
                    />
                    Time: <input
                    name="time"
                    placeholder= "HH:MM"
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

            const newEvent = {
                userId: user.id,
                name: evt.target.name.value,
                location: evt.target.location.value,
                time: evt.target.time.value,
                date: '20170908'
            }
            
            // console.log('THIS IS NEW EVENT', newEvent)
            dispatch(postEvent(newEvent))
            ownProps.history.push('/day')
        },
        handleCancel() {
            ownProps.history.push('/day')
        }
    };
}

export default connect(mapState, mapDispatch)(AddEvent);

