import React from "react";
import { useSelector } from 'react-redux';

import { repeat, checkIfRevealed, checkIfFlagged } from '../../helpers/helpers';
import { selectRows, selectColumns, selectRevealedCells, selectFlaggedCells } from './gameSlice';
import Cell from './Cell';

export default function Game(props) {
  const numberOfRows = useSelector(selectRows);
  const numberOfColumns = useSelector(selectColumns);
  const revealedCells = useSelector(selectRevealedCells);
  const flaggedCells = useSelector(selectFlaggedCells);

  // Generate an array of empty rows for the game grid  
  function renderGrid() {
    return (
      repeat(null, numberOfRows)
        .map((_, index) => renderRows(index))
    )
  };

  // Fill the generated empty rows with actual HTML rows
  function renderRows(row) {
    return (
      <div
        className='row'
        key={'row ' + row + 1}
        row_id={row}
      >
        {renderCells(row)}
      </div>
    )
  };

  // Fill the HTML rows with cells
  function renderCells(row) {
    return (
      repeat(null, numberOfColumns)
        .map((_, index) => {
          const cellId = row * numberOfColumns + index;

          const isRevealed = checkIfRevealed(revealedCells, cellId);
          const isFlagged = checkIfFlagged(flaggedCells, cellId);

          return (
            <Cell
              key={'cell ' + cellId}
              cellId={cellId}
              isRevealed={isRevealed}
              isFlagged={isFlagged}
            />
          )
        })
    )
  };

  return (
    <div className='grid'>
      {renderGrid()}
    </div>
  )
}