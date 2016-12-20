import { Rect } from '../svg/rect';
import React from 'react';

export const BarRects = ({
  colorScale,
  data,
  height,
  xScale,
  yScale,
}) => {
  const rects = [];
  data.forEach((d, i) => {
    rects.push(
      <Rect
        fill={colorScale(i)}
        height={yScale(d)}
        width={xScale.bandwidth()}
        x={xScale(i)} // eslintignore `i * (barWidth + barOffset)` if you're not using scaleBands
        y={height - thisHeight}
      />
    );
  });
};
