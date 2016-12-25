import React from 'react';

export const Table = () => (
  <table className='sortable'>
    <tbody>
      <tr>
        <th> heading 1</th>
        <th> heading 2</th>
      </tr>
      <tr>
        <td> cell 1 </td>
        <td> cell 2 </td>
      </tr>
      <tr>
        <td> cell 0 </td>
        <td> cell 3 </td>
      </tr>
      <tr>
        <td> cell 10 </td>
        <td> cell 20 </td>
      </tr>
      <tr>
        <td> cell 4 </td>
        <td> cell 5 </td>
      </tr>
    </tbody>
  </table>
);

Table.propTypes = {
  data: React.PropTypes.object,
};

export default Table;
