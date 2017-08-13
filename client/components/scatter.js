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
    name: 'dishes',
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
    this.height = 400
    this.width = 400
    this.xMax = (tasks) => d3.max(tasks, task => task.day)
    this.yMax = (tasks) => d3.max(tasks, task => task.count)
    this.xScale = d3.scaleLinear().domain([0, this.xMax(myTasks)]).range([20, this.width-20])
    this.yScale = d3.scaleLinear().domain([0, this.yMax(myTasks)]).range([this.height-20, 20])
    this.xAxis = d3.axisBottom(this.xScale).ticks(3)
    this.yAxis = d3.axisLeft(this.yScale).ticks(3)
  }

  componentDidMount(){
    d3.selectAll('.xAxis').call(this.xAxis)
    d3.selectAll('.yAxis').call(this.yAxis)
  }


  render() {

    return (
      <div>
        <svg width={this.width} height={this.height}>
          {myTasks.map((task, i) => (
            <g key={i}>
              <circle
                r="10"
                cx={this.xScale(task.day)}
                cy={this.yScale(task.count)}
                fill={task.color}
              />
            </g>)
          )}
          <g className="xAxis" transform={`translate(0, ${this.height-20})`}></g>
          <g className="yAxis" transform={`translate(20, 0)`}></g>
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



