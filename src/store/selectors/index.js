import { createSelector } from 'reselect';

export const data = (state) => state.data;

export const getBarChart = createSelector(
  [data],
  (thisData) => thisData.barChart
);

export const getPieChart = createSelector(
  [data],
  (thisData) => thisData.pieChart
);

export const getScatterPlot = createSelector(
  [data],
  (thisData) => thisData.scatterPlot
);

// https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-components
export const getMargins = () =>
  createSelector(
    [data],
    (thisData) => thisData.margins
  );
