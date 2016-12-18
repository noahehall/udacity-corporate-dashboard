import { PiePath } from './paths.js';
import { PieLabel } from './labels.js';
import * as d3 from 'd3';
import React from 'react';
/**
 * Returns an array of objects with data for each slice
 * @method generateArcs
 * @param  {[type]}     [sort=null] [description]
 * @return {[type]}     [description]
 */

function generateArcs ({ data, sort }) {
  return d3.pie()
    .sort(sort)
    .value((d) => d.total)(data);
}


export const getPieSlices = ({
  chartHeight,
  chartWidth,
  data,
  labels,
  radius, // eslint-disable-line
}) => {
  const arcData = generateArcs({
    data,
    sort: null,
  });

  const arcArray = [];

  arcData.forEach((arc, idx) => arcArray.push(
    <g
      className='pie-slice'
      key={idx}
    >
      <PiePath
        arc={arc}
        chartHeight={chartHeight}
        chartWidth={chartWidth}
        idx={idx}
      />
      <PieLabel
        arc={arc}
        chartHeight={chartHeight}
        chartWidth={chartWidth}
        idx={idx}
        labels={labels}
      />
    </g>
  ));

  return arcArray;
};
