import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

//COMPONENT

export class ScatterWeek extends Component {
  constructor(props) {
    super(props)
    this.height = 300
    this.width = 300
    this.padding = 40
    this.parseTime = d3.timeParse('%Y%m%d')
    //create X scale with domain min and max as the start and end date
    this.xScale = d3.scaleTime()
      .domain([this.parseTime(this.props.startDate), this.parseTime(this.props.endDate)]).range([this.padding, this.width - this.padding])
    //create Y scale with domain min as 0 and max as either 10 or highest count
    this.yMax = (tasks) => Math.max(10, d3.max(tasks, task => task.count))
    this.yScale = d3.scaleLinear()
      .domain([0, this.yMax(this.props.tasks)]).range([this.height - this.padding, this.padding])
    //create axis with scales
    this.xAxis = d3.axisBottom(this.xScale).ticks(7)
    this.yAxis = d3.axisLeft(this.yScale).ticks(3)
  }

  componentDidMount(){
    d3.selectAll('.xAxis').call(this.xAxis)
  }

  componentWillReceiveProps(nextProps){
     if (this.props.tasks !== nextProps.tasks){
          //recreate X scale with domain min and max as the new start and end dates
          this.xScale = d3.scaleTime()
            .domain([this.parseTime(nextProps.startDate), this.parseTime(nextProps.endDate)]).range([this.padding, this.width - this.padding])
          //recreate Y scale with domain min as 0 and max as either 10 or highest count
          this.yScale = d3.scaleLinear().domain([0, this.yMax(nextProps.tasks)]).range([this.height - this.padding, this.padding])
          //create axis with scales and render the xAxis
          this.xAxis = d3.axisBottom(this.xScale).ticks(7)
          this.yAxis = d3.axisLeft(this.yScale).ticks(3)
          d3.selectAll('.xAxis').call(this.xAxis)
    }
  }

  render() {
    const {tasks} = this.props
    return (
      <div>
        <svg width={this.width} height={this.height}>
          {tasks.map((task, i) => {
            return (
            <g key={i}>
              <circle
                r="10"
                cx={this.xScale(this.parseTime(task.date))}
                cy={this.yScale(task.count)}
                fill={task.category.color.hex}
              >
              <title>{task.name}</title>
              </circle>
            </g>)}
          )}
          <g className="xAxis" transform={`translate(0, ${this.height - this.padding})`} />
          <g className="yAxis" transform={`translate(${this.padding}, 0)`} />
        </svg>
      </div>
    )
  }
}

            //  <text
            //     className="tooltip"
            //     x={this.xScale(this.parseTime(task.date))}
            //     y={this.yScale(task.count)}
            //     visibility="visible">{task.name}
            //   </text>

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email,
    month: state.month
  }
}

export default connect(mapState)(ScatterWeek);



