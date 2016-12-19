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
  const rects = [];
  data.forEach((d, i) => {
    rects.push(
      <g className='bars' key={getLabels(d, labels).replace(/\s+/g, '-').toLowerCase()}>
        <Rect
          className={`rects bar`}
          fill={colorScale(i)}
          height={chartHeight - yScale(d[value])}
          width={xScale.bandwidth()}
          x={xScale(getLabels(d, labels))} // eslintignore `i * (barWidth + barOffset)` if you're not using scaleBands
          y={yScale(d[value])}
        />
      </g>
    );
  });

  return rects;
};
