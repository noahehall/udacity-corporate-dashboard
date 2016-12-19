import { SVG } from './svg.js';
import React from 'react';

export const BarChart = ({
  chart = { data: {}},
  chartType = '',
  containerHeight = 200,
  containerWidth = 200,
  id = 'barchart',
  margin = {
    bottom: 20,
    left: 60,
    right: 60,
    top: 20,
  },
}) =>
  <SVG
    chartType={chartType}
    colorScale='schemeAccent'
    data={chart.data}
    id={id}
    labels={[ 'lastName', 'total' ]}
    margin={margin}
    svgHeight={containerHeight}
    svgWidth={containerWidth}
    value='total'
    xAxis={true}
    xScale={true}
    yAxis={true}
    yScale={true}
  />;

BarChart.propTypes = {
  chart: React.PropTypes.object,
  chartType: React.PropTypes.string,
  containerHeight: React.PropTypes.number,
  containerWidth: React.PropTypes.number,
  id: React.PropTypes.string,
  margin: React.PropTypes.object,
};

export default BarChart;
