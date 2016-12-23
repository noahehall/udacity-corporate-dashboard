import * as d3 from 'd3';

export const generateLine = ({
  // https://github.com/d3/d3-shape#curves
  lineCurve = '',
  xScale,
  xValue = '',
  yScale,
  yValue = '',
}) => {
  if (!xScale || !xValue || !yValue || !yScale) {
    appFuncs.logError({
      data: [
        xScale,
        xValue,
        yScale,
        yValue,
      ],
      loc: __filename,
      msg: 'xScale, xValue, yScale and yValue must be valid variables in lines.generateLine(), returning null',
    });

    return null;
  }

  let thisCurve;

  if (!lineCurve || !d3[lineCurve]) {
    appFuncs.logError({
      data: [
        lineCurve,
        d3[lineCurve],
      ],
      loc: __filename,
      msg: 'lineCurve must be valid variable in lines.generateLine(), returning defaultLine curveBasis instead',
    });

    thisCurve = d3.curveBasis;
  } else thisCurve = d3[lineCurve];

  return d3
    .line()
    .curve(thisCurve)
    .x((d) => xScale(d[xValue]))
    .y((d) => yScale(d[yValue]));
};
