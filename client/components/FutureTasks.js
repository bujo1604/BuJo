import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import {  fetchFutureTasks } from '../store'

class FutureTasks extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadData(this.props.user.id);

    }

    
 
    renderForm() {
       
    }

    handleSubmit() {
        
    }

    render() {
        console.log(this.props, "this.props in Future Tasks")
   
        // console.log("CATEGORY", categories)
        return (
            <div>Test Test Test 1 2 3 </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    future: state.future
});

const mapDispatch = (dispatch) => {
    return {
        loadData(userId) {
            dispatch(fetchFutureTasks(userId));
        }
    };
}


export default connect(mapState, mapDispatch)(FutureTasks);