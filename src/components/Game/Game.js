import React from "react";
import { useSelector } from 'react-redux';

import { repeat } from '../../helpers/helpers';
import { selectRows, selectColumns } from './gameSlice';
import Cell from './Cell';

export default function Game(props) {
  const numberOfRows = useSelector(selectRows);
  const numberOfColumns = useSelector(selectColumns);

  function renderGrid() {
    return (
      repeat(null, numberOfRows)
        .map(index => renderRows(index))
    )
  };

  function renderRows(row) {
    return (
      <div
        className='row'
        key={'row ' + row + 1}
      >
        {renderCells(row)}
      </div>
    )
  };

  function renderCells(row) {
    return (
      repeat(null, numberOfColumns)
        .map(index => {
          const cellId = row * numberOfColumns + index;

          return <Cell
                   key={'cell ' + cellId}
                 />
        })
    )
  };

  return (
    <div className='grid'>
      {renderGrid()}
    </div>
  )
}