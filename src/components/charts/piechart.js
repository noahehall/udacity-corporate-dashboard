import React from 'react';

export const PieChart = ({
  label = 'Oooh you need to send a label',
}) => <section>{label}</section>;

PieChart.propTypes = {
  label: React.PropTypes.string,
};

export default PieChart;
