import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';

import { revealCell, addFlag, removeFlag, selectAdjacentMines, isMineSteppedOn, selectRevealedCells } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  const adjacentMines = useSelector(selectAdjacentMines);
  const mineSteppedOn = useSelector(isMineSteppedOn);
  const revealedCells = useSelector(selectRevealedCells);

  function checkIfRevealed(revealedCells, cellId) {
    return revealedCells.includes(cellId);
  };

  const leftClick = function(e) {
    console.log('Left click on cell ID ' + props.cellId);
    dispatch(revealCell(props.cellId));
    console.log('Is it revealed now? ' + checkIfRevealed(revealedCells, props.cellId));
  };

  const rightClick = function(e) {
    e.preventDefault();
    console.log('Right click on cell ID ' + props.cellId);
    dispatch(addFlag());
    // dispatch(removeFlag());
  };

  return (
    <div className='cell'
      onMouseDown={leftClick}
      onContextMenu={rightClick}
    >
      {checkIfRevealed(revealedCells, props.cellId) && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {checkIfRevealed(revealedCells, props.cellId) && !mineSteppedOn && adjacentMines >= 0 ? adjacentMines : null}
    </div>
  )
}