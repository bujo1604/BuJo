import React, {Component} from 'react'
import { connect } from 'react-redux'

import {Pie, Scatter} from './';
import {fetchTasksWithCount } from '../store';


//COMPONENT

export class Insights extends Component {
  constructor(props) {
    super(props);
  }

 componentDidMount() {
    this.props.loadData(this.props.user.id);
  }

  render(){
  const { email, tasks, user } = this.props
  return (
    <div>
      <h3>Hi, {email}</h3>
      <p> Here are your insights </p>
      {tasks.length && tasks[0].count &&
        <div className='flexbox-container'>
          <Pie tasks = {tasks} />
          <Scatter tasks = {tasks} />
        </div>}
    </div> )
  }
}



//CONTAINER

const mapState = (state) => {
  return {
   user: state.user,
    email: state.user.email,
    tasks: state.tasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTasksWithCount(userId));
    }
  };
}

export default connect(mapState, mapDispatch)(Insights)

