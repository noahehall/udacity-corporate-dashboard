import { getPieSlices } from './slices.js';
import React from 'react';

export const PieChartSVG = ({
  chartHeight,
  chartWidth,
  data,
  margin,
  preserveAspectRatio,
  radius,
  svgHeight,
  svgWidth,
}) =>
  <svg
    className='chart-svg'
    preserveAspectRatio={preserveAspectRatio}
    style={{
      display: 'block',
      position: 'relative',
    }}
    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g
      className='chart-g'
      height={chartWidth}
      transform={`translate(${[ margin.left, margin.top ]})`}
      width={chartWidth}
    >
      <g
        className='piechart-slices-container'
        transform={`translate(${[ chartWidth/2, chartHeight/2 ]})`}
      >
        {getPieSlices({
          chartHeight: chartHeight,
          chartWidth: chartWidth,
          data: data,
          labels: [ 'lastName', 'total' ],
          radius: radius,
        })}
      </g>
    </g>
  </svg>;

PieChartSVG.propTypes = {
  chartHeight: React.PropTypes.number,
  chartWidth: React.PropTypes.number,
  data: React.PropTypes.array,
  margin: React.PropTypes.object,
  preserveAspectRatio: React.PropTypes.string,
  radius: React.PropTypes.number,
  svgHeight: React.PropTypes.number,
  svgWidth: React.PropTypes.number,
};
