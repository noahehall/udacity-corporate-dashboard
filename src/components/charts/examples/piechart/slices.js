import { PiePath } from './paths.js';
import * as label from '../lib/labels.js';
import React from 'react';
import * as arcs from '../lib/arcs.js';

export const PieSlices = ({
  chartHeight,
  chartWidth,
  data,
  fontSize = '10px',
  textAnchor = 'middle',
  labels,
  value = 'total',
}) => {
  const arcData = arcs.generateArcs({
    data,
    sort: null,
    value,
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
      {
        label.getLabels({
          arc,
          chartHeight,
          chartType: 'pie',
          chartWidth,
          fontSize,
          idx,
          labels,
          textAnchor,
        })
      }
    </g>
  ));

  return arcArray;
};
