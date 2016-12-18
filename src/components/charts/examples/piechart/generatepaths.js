import React from 'react';
import * as d3 from 'd3';

// path generator
function generateArcPath ({
  chartHeight,
  conerRadius = 8,
  endAngle,
  padAngle = 0.03,
  startAngle,
}) {
  return d3.arc()
    .cornerRadius(conerRadius)
    .endAngle(endAngle)
    .innerRadius(chartHeight/4)
    .outerRadius(chartHeight/2)
    .padAngle(padAngle)
    .startAngle(startAngle);
}

export const getSlice = ({ arc, chartHeight, id }) => {
  const thisArc = generateArcPath({
    chartHeight,
    endAngle: arc.endAngle,
    startAngle: arc.startAngle,
  });
  appFuncs.console('dir')(arc);
  appFuncs.console('dir')(thisArc);

  return <path
    d={thisArc()}
    fill={d3.interpolateCool(Math.random())}
    id={`arc-${id}`}
    stroke='gray'
  />;
};

getSlice.propTypes = {
  arc: React.PropTypes.object,
  chartHeight: React.PropTypes.number,
  id: React.PropTypes.number,
};
