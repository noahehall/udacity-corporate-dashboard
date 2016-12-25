import React from 'react';

export const Table = ({ id }) => (
  <section>
    <table className='sortable' id={id}>
      <thead>
        <tr>
          <td>
            <input
              className='flt'
              id={`flt0_${id}`}
              onKeyUp={appFuncs.filterTable.Filter}
              type='text'
            />
          </td>
          <th>
            <input
              className='flt_s'
              id={`flt1_${id}`}
              onKeyUp={appFuncs.filterTable.Filter}
              type='text'
            />
          </th>
        </tr>
        <tr>
          <th> heading 1</th>
          <th> heading 2</th>
        </tr>
      </thead>
      <tbody>
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
      <tfoot / >
    </table>
  </section>
);

Table.propTypes = {
  id: React.PropTypes.string,
};

export default Table;
