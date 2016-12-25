import React from 'react';

export const Table = () => (
  <table>
    <tbody>
      <tr>
        <th> heading 1</th>
        <th> heading 2</th>
      </tr>
      <tr>
        <td> cell 1 </td>
        <td> cell 2 </td>
      </tr>
    </tbody>
  </table>
);

Table.propTypes = {
  data: React.PropTypes.object,
};

export default Table;
