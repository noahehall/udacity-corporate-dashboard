import { SVG } from './svg';
import React from 'react';

export const Chart = ({
  chart = { data: {}, margins: {}},
  chartType = '',
  colorScale = 'schemeAccent',
  containerHeight = 200,
  containerWidth = 200,
  id = 'barchart',
  labels = [],
  margins = {
    bottom: 20,
    left: 60,
    right: 60,
    top: 20,
  },
  value = 'total',
  xAxis = false,
  xScale = false,
  yAxis = false,
  yScale = false,
}) =>
  <SVG
    chartType={chartType}
    colorScale={colorScale}
    data={chart.data}
    id={id}
    labels={labels}
    margins={appFuncs._.isEmpty(chart.margins) ? margins : chart.margins}
    svgHeight={containerHeight}
    svgWidth={containerWidth}
    value={value}
    xAxis={xAxis}
    xScale={xScale}
    yAxis={yAxis}
    yScale={yScale}
  />;

Chart.propTypes = {
  chart: React.PropTypes.object,
  chartType: React.PropTypes.string,
  colorScale: React.PropTypes.string,
  containerHeight: React.PropTypes.number,
  containerWidth: React.PropTypes.number,
  id: React.PropTypes.string,
  labels: React.PropTypes.array,
  margins: React.PropTypes.object,
  value: React.PropTypes.string,
  xAxis: React.PropTypes.bool,
  xScale: React.PropTypes.bool,
  yAxis: React.PropTypes.bool,
  yScale: React.PropTypes.bool,
};

export default Chart;
