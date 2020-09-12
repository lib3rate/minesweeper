import React from "react";
import { useSelector } from 'react-redux';

import { repeat } from '../../helpers/helpers';
import { selectRows, selectColumns, selectRevealedCells } from './gameSlice';
import Cell from './Cell';

export default function Game(props) {
  const numberOfRows = useSelector(selectRows);
  const numberOfColumns = useSelector(selectColumns);
  const revealedCells = useSelector(selectRevealedCells);

  function checkIfRevealed(revealedCells, cellId) {
    const arrayOfKeys = [];
    for (let key of Object.keys(revealedCells)) {
      const convertedKey = Number(key);
      arrayOfKeys.push(convertedKey);
    }
    return arrayOfKeys.includes(cellId);
    // console.log(Object.keys(revealedCells));
    // const keys = Object.keys(revealedCells);
    // return Object.keys(revealedCells).includes(cellId);
    // return Object.keys(revealedCells).includes(Number(cellId));
  };

  // Generate an array of empty rows for the game grid  
  function renderGrid() {
    return (
      repeat(null, numberOfRows)
        // .map(index => renderRows(index))
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

          return (
            <Cell
              key={'cell ' + cellId}
              cellId={cellId}
              isRevealed={isRevealed}
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