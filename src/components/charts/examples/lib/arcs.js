import * as d3 from 'd3';

export const generateLabelArc = ({
  chartHeight = 200,
  chartWidth = 200,
  endAngle,
  startAngle,
}) => d3
  .arc()
  .endAngle(endAngle)
  .innerRadius(Math.min(chartHeight, chartWidth)) // eslintignore bigger number = smaller donut
  .outerRadius(Math.min(chartHeight, chartWidth)) // eslintignore bigger number = smaller pie
  .startAngle(startAngle);

/**
 * Returns an array of objects with data for each slice
 * @method generateArcs
 * @param  {[type]}     [sort=null] [description]
 * @return {[type]}     [description]
 */
export const generateArcs = ({
  data,
  sort = null,
  value,
}) => d3
  .pie()
  .sort(sort)
  .value((d) => d[value])(data);
