import * as d3 from 'd3';

export const getYAxis = ({
  thisYScale = null,
  getit = false,
}) => {
  if (getit && thisYScale) {
    const yScale = thisYScale.copy();
    // eslintignore need 0 to be in bottom left
    const yAxis = yScale.range(yScale.range().reverse()); // eslint-disable-line
    // barchart vertical axis
    // appFuncs.console('dir')(node);

    return true;
  }

  return null;
};

export const getXAxis = ({
  id = '', // eslint-disable-line
  thisXScale = null,
}) => (
  id && thisXScale && typeof document !== 'undefined'
    ? d3
      .select(document.getElementById(`${id}`))
      .select('.x.axis')
      .call(d3.axisBottom(thisXScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)")
    : null
);
