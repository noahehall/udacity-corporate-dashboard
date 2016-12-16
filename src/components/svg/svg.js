import React from 'react';

export const Svg = ({
  children,
  height = 200,
  preserveAspectRatio = 'xMaxYMax meet',
  version = 1.1, // eslintignore version of svg being used
  viewBoxHeight = -1,
  viewBoxMinX = 0,
  viewBoxMinY = 0,
  viewBoxWidth = -1,
  width = 200,
  x = 0, // eslintignore x axis of upper left corner
  y = 0, // eslintignore y axis of upper left corner
}) => <svg
  height={height}
  preserveAspectRatio={preserveAspectRatio}
  version={version}
  viewBox={`${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth > -1 ? viewBoxWidth : width} ${viewBoxHeight > -1 ? viewBoxHeight : height}`}
  width={width}
  x={x}
  y={y}
>{children}</svg>;

Svg.propTypes = {
  children: React.PropTypes.node,
  height: React.PropTypes.number,
  preserveAspectRatio: React.PropTypes.string,
  version: React.PropTypes.number,
  viewBoxHeight: React.PropTypes.number,
  viewBoxMinX: React.PropTypes.number,
  viewBoxMinY: React.PropTypes.number,
  viewBoxWidth: React.PropTypes.number,
  width: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Svg;
