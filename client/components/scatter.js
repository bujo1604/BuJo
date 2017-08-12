import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

//set scale

// var yScale = d3.scaleTime().range([0, 800])


const tasks = [
  {
    name: 'laundry',
    categorory: 'home',
    color: '#E91E63'
  },
  {
    name: 'dishes',
    categorory: 'home',
    color: '#E91E63'
  },
  {
    name: 'run',
    categorory: 'exercise',
    color: '#7C4DFF'
  },
  {
    name: 'dinner',
    categorory: 'social',
    color: '#E57373'
  },
  {
    name: 'redux',
    categorory: 'learning',
    color: '#2196F3'
  }
];

//COMPONENT

export class Scatter extends Component {
  constructor(props) {
    super(props)
    // this.thickenCircles = this.thickenCircles.bind(this)

  }

  componentDidMount() {

    var circles = d3.selectAll('circle').attr('r', '50')
  }

  render() {
    return (
      <div>
        <svg width="800px" height="800px">
          {tasks.map((task, i) => (
            <g key={i}>
              <circle onClick={this.thickenCircles} title={task.name} r="10" cx={String((i + 5) * 50)} cy={String((i + 5) * 50)} fill={task.color} >{task.name}</circle>
            </g>
          ))}
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

