import { getPieSlices } from './slices.js';
import React from 'react';


export class PieChartSVG extends React.Component {
  static propTypes = {
    chartHeight: React.PropTypes.number,
    chartWidth: React.PropTypes.number,
    data: React.PropTypes.array,
    margin: React.PropTypes.object,
    radius: React.PropTypes.number,
    svgHeight: React.PropTypes.number,
    svgWidth: React.PropTypes.number,
  }
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <svg
        className='chart-svg'
        preserveAspectRatio={'xMinYMin meet'}
        ref={(chartSVG) => this.chartSVG = chartSVG}
        style={{
          display: 'block',
          position: 'relative',
        }}
        viewBox={`0 0 ${this.props.svgWidth} ${this.props.svgHeight}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          className='chart-g'
          height={this.props.chartWidth}
          ref={(chartG) => this.chartG = chartG}
          transform={`translate(${[ this.props.margin.left, this.props.margin.top ]})`}
          width={this.props.chartWidth}
        >
          <g
            className='piechart-slices-container'
            ref={(slicesContainer) => this.slicesContainer = slicesContainer}
            transform={`translate(${[ this.props.chartWidth/2, this.props.chartHeight/2 ]})`}
          >
            {getPieSlices({
              chartHeight: this.props.chartHeight,
              chartWidth: this.props.chartWidth,
              data: this.props.data,
              labels: [ 'lastName', 'total' ],
              radius: this.props.radius,
            })}
          </g>
        </g>
      </svg>
    );
  }
}
