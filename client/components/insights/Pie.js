import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';
var _ = require('lodash');

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
    const groupedTasks = _.groupBy(tasks, 'category.name')
    const categoriesArr = Object.getOwnPropertyNames(groupedTasks)
    const countedCategories = categoriesArr.sort().map(category => ({name: category, value: groupedTasks[category].length, color: groupedTasks[category][0].category.color.hex }))

    let pie = this.pie(countedCategories)
    return (
      <div>
      <svg width={this.width} height={this.height}>
        <g transform={`translate(${this.width / 2}, ${this.height / 2})`}>
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
      {countedCategories.map((category, i) => (
        <div key = {i} >
        <span style={{ color: `${category.color}` }}>  &#x25CF;</span>
        <span>{category.value} {category.name} tasks completed ({Math.floor((category.value) / (tasks.length) * 100)}%)</span>
        </div>
      ))

      }
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

export default connect(mapState)(Pie);

