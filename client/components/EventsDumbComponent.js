import React, {Component} from 'react'
import {connect} from 'react-redux';

class EventsDumbComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { events } = this.props;

        return (
            <div>
           
                {events.map((event, idx) => {
                    return (
                        <div key={idx}>
                            <span className='event'>&#x25CB;</span>
                            <span className='event'>
                                {event.name}
                            </span>
                            <span className='event'>
                                {event.time}
                                
                    </span>
                         
                        </div>
                    )
                })}


            </div>
        )
    }
}


const mapState = (state) => ({
    user: state.user,
    day: state.day
})

// export default EventsDumbComponent;

export default connect(mapState)(EventsDumbComponent);