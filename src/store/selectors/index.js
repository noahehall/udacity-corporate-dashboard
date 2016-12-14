import { createSelector } from 'reselect';

export const data = (state) => state.data;

export const styles = (state) => state.data.styles;

export const getArrayData = createSelector(
  [data],
  (thisData) => thisData.array
);

export const getBarChart = createSelector(
  [data],
  (thisData) => thisData.barChart
);

export const getColors = createSelector(
  [styles],
  (thisStyles) => thisStyles.colors
);
