import React from 'react'
import {connect} from 'react-redux'
import d3 from 'd3';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

const tasks = [
  {name: 'laundry',
  categorory: 'home',
  color: '#E91E63'},
  {name: 'run',
  categorory: 'exercise',
  color: '#7C4DFF'},
  {name: 'dinner',
  categorory: 'social',
  color: '#E57373'},
  {name: 'redux',
  categorory: 'learning',
  color: '#2196F3'}
];

//COMPONENT

export const Chart = (props) => {

  return (
    <div>
      <svg width="800px" height = "800px">
      {tasks.map((task, i) => (
        <g key={i}>
          <circle title={task.name} r="10" cx={String((i+5)*50)} cy={String((i+5)*50)} fill={task.color} >{task.name}</circle>
        </g>
      ))}
      </svg>
    </div>
  )
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Chart);

