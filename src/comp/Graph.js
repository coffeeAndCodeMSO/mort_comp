import React from 'react';
import { scaleLinear, line, axisBottom, axisLeft } from 'd3';

import './../Graph.css';

const dummyData = [
    {x: 1, y: 2},
    {x: 2, y: 5},
    {x: 3, y: 0},
]

class Graph extends React.Component {
    drawGraphSVG(width, height, data){
        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        this.plotWidth = width - margin.left - margin.right;
        this.plotHeight = height - margin.top - margin.bottom;

        const xScale = scaleLinear()
            .rangeRound([0, this.plotWidth])
            .domain([0,4]);
    
        const yScale = scaleLinear()
            .rangeRound([this.plotHeight, 0])
            .domain([0,5]);

        const xAxis = axisBottom(xScale);
        const yAxis = axisLeft(yScale);

        const pathGen = line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); });
        const dummyPath = pathGen(data);
        
        return (
            <svg width={width} height={height}>
                <g 
                    className="plot"
                    transform={`translate(${margin.left},${margin.right})`}    
                >
                    <path className='graph-line' d={dummyPath} />
                    <g className='graph-axis x'>
                        <line  x1={0} y1={this.plotHeight} x2={this.plotWidth} y2={this.plotHeight}/>
                    </g>
                    <g className='graph-axis y'>
                        <line  x1={0} y1={0} x2={0} y2={this.plotHeight}/>
                    </g>
                </g>
            </svg>
        );
    }
    
    render(){
        return(
            <div className='conclusionSection' >
                <div className="section-header">Graph!</div>
                <div className="graph">
                    {this.drawGraphSVG(300,200, dummyData)}
                </div>
            </div>
        )
    }
}

export default Graph;