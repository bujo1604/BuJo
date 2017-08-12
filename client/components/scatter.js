import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

const myTasks = [
  {
    name: 'laundry',
    categorory: 'home',
    color: '#E91E63',
    day: 1
  },
  {
    name: 'dishes',
    categorory: 'home',
    color: '#E91E63',
    day: 1
  },
  {
    name: 'run',
    categorory: 'exercise',
    color: '#7C4DFF',
    day: 2
  },
  {
    name: 'dinner',
    categorory: 'social',
    color: '#E57373',
    day: 2
  },
  {
    name: 'redux',
    categorory: 'learning',
    color: '#2196F3',
    day: 3
  }
];

function giveCountToTasks(tasks) {
  let count = 1
  tasks.forEach((task, i) => {
    if (i > 0 && task.day === tasks[i - 1].day) {
      count++
      task.count = count
    }
    else {
      count = 1
      task.count = count
    }
  })
}

giveCountToTasks(myTasks)


//COMPONENT

export class Scatter extends Component {
  constructor(props) {
    super(props)
    this.xMax = (tasks) => d3.max(tasks, task => task.day)
    this.yScale = d3.scaleTime().range([0, 800])

  }


  render() {
    let count = 1
    return (
      <div>
        <svg width="800px" height="800px">
          {myTasks.map((task, i) => (
            <g key={i}>
              <circle
                r="10"
                cx={String(task.day * 100)}
                cy={task.count * 50}
                fill={task.color}
              />
            </g>)
          )}
        </svg>
      </div>
    )
  }
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Scatter);



