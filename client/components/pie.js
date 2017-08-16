import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

//COMPONENT

export class Pie extends Component {
  constructor(props) {
    super(props)
    this.height = 300
    this.width = 300
    this.pie = d3.pie().value(d => d.value)
    this.arc = d3.arc().innerRadius(130).outerRadius(150)
  }

  render() {
    const {tasks} = this.props
    let pie = this.pie(tasks)
    return (
      <svg width={this.width} height={this.height}>
        <g transform={`translate(${this.width / 2}, ${this.height / 2})`}>
          <text textAnchor="middle" x="0" y="0">You have completed {tasks.length} tasks</text>
          {pie.map((d, i) => (
            <path
              key={i}
              d={this.arc(d)}
              style={{ fill: d.data.category.color.hex }}
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

