import React from 'react';
import * as arcs from './arcs.js';

export const getPieLabelText = ({
  arc = { data: {}},
  labels = [],
}) => {
  const label = [];
  if (labels.length)
    labels.forEach((thisLabel, idx) =>
      label.push(
        <tspan className={'label'} key={`${thisLabel}-${idx}`}>
          {`${arc.data[thisLabel]}  `}
        </tspan>
      )
    );

  return label;
};

export const getPieLabels = ({
  arc = { data: {}, endAngle: 10, startAngle: 10 },
  chartHeight = 200,
  chartWidth = 200,
  fontSize = '10px',
  idx = 0,
  labels = [],
  textAnchor = 'middle',
}) => {
  const thisArc = arcs.generateLabelArc({
    chartHeight,
    chartWidth,
    endAngle: arc.endAngle,
    startAngle: arc.startAngle,
  });
  // tbd: automatic text sizing
  // appFuncs.console('dir')(this.text.getComputedTextLength());

  const [ x, y ] = thisArc.centroid(arc),
    dx = (arc.endAngle + arc.startAngle)/2 > Math.PI
      ? -15
      : 15;

  return (
    <text
      dx={dx}
      dy={0}
      style={{ fontSize }}
      textAnchor={textAnchor}
      x={x/2}
      xlinkHref={`#arc-${idx}`}
      y={y/2}
    >
      {getPieLabelText({ arc, labels })}
    </text>
  );
};

getPieLabels.propTypes = {
  arc: React.PropTypes.object,
  chartHeight: React.PropTypes.number,
  chartWidth: React.PropTypes.number,
  fontSize: React.PropTypes.string,
  idx: React.PropTypes.number,
  labels: React.PropTypes.array,
  textAnchor: React.PropTypes.string,
};

export const getLabels = ({
  arc = { data: {}},
  chartHeight = 200,
  chartType = '',
  chartWidth = 200,
  d,
  fontSize = '10px',
  idx = 0,
  labels = [],
  textAnchor = 'middle',
}) => {
  let label;
  switch (chartType.toLowerCase()) {
    case 'pie': return getPieLabels({
      arc,
      chartHeight,
      chartType,
      chartWidth,
      fontSize,
      idx,
      labels,
      textAnchor,
    });
    default: {
      label = '';
      labels.forEach((thisLabel) => label += `${d[thisLabel]} `);
      break;
    }
  }

  return label;
};
