export const getLabels = ({ d, labels }) => {
  let thisLabel = '';
  labels.forEach((label) => thisLabel += `${d[label]} `);

  return thisLabel;
};
