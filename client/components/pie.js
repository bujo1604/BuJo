import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

const tasks = [
  {
    name: 'laundry',
    value: 1,
    categorory: 'home',
    color: '#E91E63'
  },
  {
    name: 'dishes',
    value: 1,
    categorory: 'home',
    color: '#E91E63'
  },
  {
    name: 'run',
    value: 1,
    categorory: 'exercise',
    color: '#7C4DFF'
  },
  {
    name: 'dinner',
    value: 1,
    categorory: 'social',
    color: '#E57373'
  },
  {
    name: 'redux',
    value: 1,
    categorory: 'learning',
    color: '#2196F3'
  }
]

//COMPONENT

export class Pie extends Component {
  constructor(props) {
    super(props)
    this.pie = d3.pie().value(d => d.value)
    this.arc = d3.arc().innerRadius(130).outerRadius(150)
  }

  render() {
    let pie = this.pie(tasks)
    return (
      <svg width="800px" height="800px">
        <g transform="translate(300, 300)">
          <text textAnchor="middle" x="0" y="0">You have completed {tasks.length} tasks</text>
          {pie.map((d, i) => (
            <path
              key={i}
              d={this.arc(d)}
              style={{ fill: d.data.color }}
            />
          ))}
        </g>
      </svg>
    )
  }
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Pie);

