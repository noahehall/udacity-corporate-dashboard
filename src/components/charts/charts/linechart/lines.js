// import * as d3 from 'd3';
import { generateLine } from '../lib/lines.js';
import { Path } from '../svg/path.js';
import React from 'react';

export const Lines = ({
  // chartHeight = 200,
  // chartDataGroupBy = '',
  chartType = 'line',
  // chartWidth = 200,
  data,
  lineCurve = 'curveBasis',
  xScale,
  xValue = '',
  yScale,
  yValue = '',
}) => {
  if (appFuncs._.isEmpty(data)) return null;

  switch (chartType.toLowerCase()) {
    case 'line': {
      const lineGenerator = generateLine({
        lineCurve,
        xScale,
        xValue,
        yScale,
        yValue,
      });
      const pathArray = [];

      for (const group in data)
        // generate path for each lineGroup
        pathArray.push(
          <Path
            chartType={chartType}
            d={lineGenerator(data[group].values)}
            fill='none'
            id={data[group].id}
            key={data[group].id}
          />
        );

      return pathArray;
    }
    default: return null;
  }
};


export default Lines;
