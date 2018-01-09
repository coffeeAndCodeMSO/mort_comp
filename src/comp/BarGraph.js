import React from 'react'

import '../css/BarGraph.css'
import Chart from './Chart'
import { scaleLinear, line } from 'd3';

export default class BarGraph extends React.Component {
  render(){
      return(
        <div className="App">
          <div className="App-header">
            <h2>Welcome to the</h2><h1>BAD ASS CHART</h1>
          </div>

          <div className="App-chart-container">
            <p className="App-chart-description">
              Arnold Schwarzenegger body count per movie.
            </p>
            <p className="App-chart-source">
              Data source: <a href="http://www.moviebodycounts.com">www.moviebodycounts.com</a>
            </p>

            <Chart termData={this.props.termData}/>
          </div>
        </div>
      )
  }
}
