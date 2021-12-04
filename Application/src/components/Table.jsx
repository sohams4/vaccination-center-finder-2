import * as React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className='overflow-scroll'>
      <table {...getTableProps()} className='table-auto'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='px-4 py-2'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={i % 2 !== 0 ? 'bg-gray-100' : ''}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className='border px-4 py-2'>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
