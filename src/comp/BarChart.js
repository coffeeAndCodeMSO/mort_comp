import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'

import Axes from './Axes'
import Bars from './Bars'
import ResponsiveWrapper from './ResponsiveWrapper'

class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    }

    const maxValue = Math.max(...this.props.termData.map(d => d.value))

    const xScale = this.xScale
      .padding(0.5)
      .domain(this.props.termData.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.props.termData}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}

export default ResponsiveWrapper(BarChart)
