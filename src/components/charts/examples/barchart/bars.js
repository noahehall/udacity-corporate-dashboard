import { Rect } from '../svg/rect';
import React from 'react';

const getLabels = (d, labels) => {
  let thisLabel = '';
  labels.forEach((label) => thisLabel += `${d[label]} `);

  return thisLabel;
};

export const Bars = ({
  chartHeight = 200,
  colorScale,
  data,
  labels,
  value = 'total',
  xScale,
  yScale,
}) => {
  if (!yScale || !xScale || !chartHeight) return null;
  const rects = [];
  data.forEach((d, i) => {
    rects.push(
      <g className='bar' key={getLabels(d, labels).replace(/\s+/g, '-').toLowerCase()}>
        <Rect
          className='rect'
          fill={colorScale(i)}
          height={chartHeight - yScale(d[value])}
          width={xScale.bandwidth()}
          // `i * (barWidth + barOffset)` if you're not using scaleBands
          x={xScale(getLabels(d, labels))}
          y={yScale(d[value])}
        />
      </g>
    );
  });

  return rects;
};

export default Bars;
