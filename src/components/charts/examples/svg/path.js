import React from 'react';

export const Path = ({ // eslintignore https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
  d = 'M150 0 L75 200 L225 200 Z'
}) => <path
  d={d}
/>;

Path.propTypes = {
  d: React.PropTypes.string,
};

export default Path;
