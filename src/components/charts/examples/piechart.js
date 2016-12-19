import { SVG } from './svg.js';
import React from 'react';

export const PieChart = ({
  chart = { data: {}},
  chartType = '',
  containerHeight = 200,
  containerWidth = 200,
  id = 'piechart',
  margin = {
    bottom: 20,
    left: 60,
    right: 60,
    top: 20,
  },
}) =>
  <SVG
    chartType={chartType}
    data={chart.data}
    id={id}
    labels={[ 'lastName', 'total' ]}
    margin={margin}
    svgHeight={containerHeight}
    svgWidth={containerWidth}
    value='total'
    xAxis={false}
    xScale={false}
    yAxis={false}
    yScale={false}
  />;

PieChart.propTypes = {
  chartType: React.PropTypes.string,
  containerHeight: React.PropTypes.number,
  containerWidth: React.PropTypes.number,
  id: React.PropTypes.string,
  margin: React.PropTypes.object,
  chart: React.PropTypes.object, // eslint-disable-line
};

export default PieChart;
