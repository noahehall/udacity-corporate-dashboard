import { createSelector } from 'reselect';

export const data = (state) => state.data;

export const getNewIssues = createSelector(
  [data],
  (thisData) => thisData.newIssues
);

export const getOpenIssues = createSelector(
  [data],
  (thisData) => thisData.openIssues
);

export const getTotalEmployees = createSelector(
  [data],
  (thisData) => thisData.totalEmployees
);

export const getPayingCustomers = createSelector(
  [data],
  (thisData) => thisData.payingCustomers
);

export const getTable = createSelector(
  [data],
  (thisData) => thisData.table
);

// https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-components
export const getMargins = () =>
  createSelector(
    [data],
    (thisData) => thisData.margins
  );
