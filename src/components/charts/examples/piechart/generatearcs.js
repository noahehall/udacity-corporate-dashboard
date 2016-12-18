import { getSlice } from './generatepaths.js';
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


export const pieSlices = ({ data, chartHeight }) => {
  const arcData = generateArcs({
    data,
    sort: null,
  });

  const arcArray = [];

  arcData.forEach((arc, i) => arcArray.push(
    <g
      className='pie-slice'
      key={i}
    >
      {getSlice({
        arc,
        chartHeight,
        id: i,
      })}
    </g>
  ));

  return arcArray;
};
