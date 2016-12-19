import * as d3 from 'd3';
import * as d3chromatic from 'd3-scale-chromatic'; // eslintignore https://github.com/d3/d3-scale-chromatic

// anywhere you need the Y dimension of the bar to scale to the viewport of the svg
// first send it into this function e.g. below in the Height and Y properties
export const yScale = ({
  chartHeight,
  dataMaxNumber,
}) => d3
  .scaleLinear()
  .domain([ 0, dataMaxNumber ])
  .range([ chartHeight, 0 ]);

// anywhere you need the X dimension of the bar to scale to the viewport of the svg
export const xScale = ({
  dataLabelsArray,
  chartWidth
}) => d3
  .scaleBand()
  .domain(dataLabelsArray)
  .rangeRound([ 0, chartWidth ])
  .paddingInner(0.1)
  .paddingOuter(0.5);


// set color scale based on
export const colorScale = (type) => (
  type && d3chromatic[type]
    ? d3.scaleOrdinal(d3chromatic[type])
    : null
);
