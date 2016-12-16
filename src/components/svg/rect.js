import React from 'react';

export const Rect = ({
  height = 200,
  rx = 0, // eslintignore x axis radius of corners
  ry = 0, // eslintignore y axis radius of corners
  style = {
    fill:'red',
    stroke: 'blue',
    strokeWidth: 3,
  },
  width = 200,
  x = 0, // eslintignore x axis starting point of upper left corner
  y = 0, // eslintignore y axis starting point of upper left corner
}) => <rect
  height={height}
  rx={rx}
  ry={ry}
  style={style}
  width={width}
  x={x}
  y={y}
/>;

Rect.propTypes = {
  height: React.PropTypes.number,
  rx: React.PropTypes.number,
  ry: React.PropTypes.number,
  style: React.PropTypes.object,
  width: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Rect;
