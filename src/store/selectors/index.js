import { createSelector } from 'reselect';

export const data = (state) => state.data;

export const getBarChart = createSelector(
  [data],
  (thisData) => thisData.barChart
);

export const getTotalEmployees = createSelector(
  [data],
  (thisData) => thisData.totalEmployees
);

export const getScatterPlot = createSelector(
  [data],
  (thisData) => thisData.scatterPlot
);

export const getLineChart = createSelector(
  [data],
  (thisData) => thisData.lineChart
);

// https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-components
export const getMargins = () =>
  createSelector(
    [data],
    (thisData) => thisData.margins
  );
