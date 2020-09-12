import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';

import { revealCell, addFlag, removeFlag, selectAdjacentMines, isMineSteppedOn, selectClickedCell, selectRevealedCells } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  // const adjacentMines = useSelector(selectAdjacentMines);
  const mineSteppedOn = useSelector(isMineSteppedOn);
  // const clickedCell = useSelector(selectClickedCell);
  const revealedCells = useSelector(selectRevealedCells);

  function checkIfRevealed(revealedCells, cellId) {
    // const keys = Object.keys(revealedCells);
    return Object.keys(revealedCells).includes(cellId);
    // return Object.keys(revealedCells).includes(Number(cellId));
  };

  // function checkIfRevealed(revealedCells, cellId) {
  //   return revealedCells.includes(cellId);
  // };

  // function checkIfClicked(clickedCell, cellId) {
  //   return clickedCell === cellId;
  // };

  const leftClick = function(e) {
    console.log('Left click on cell ID ' + props.cellId);
    dispatch(revealCell(props.cellId));
    console.log('Is it revealed now? ' + props.isRevealed);
    // console.log('Revealed cells are: ' + revealedCells);
    // console.log('Object keys are: ' + Object.keys(revealedCells));
    // console.log('Is it revealed now? ' + checkIfRevealed(revealedCells, props.cellId));
    // console.log('Adjacent mines for this revealed cell are: ' + revealedCells[props.cellId]);
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
      {props.isRevealed && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {props.isRevealed && !mineSteppedOn ? revealedCells[props.cellId] : null}
      {/* {checkIfRevealed(revealedCells, props.cellId) && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {checkIfRevealed(revealedCells, props.cellId) && !mineSteppedOn ? revealedCells[props.cellId] : null} */}
      {/* {props.isClicked && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {props.isClicked && !mineSteppedOn ? adjacentMines : null} */}
      {/* {checkIfClicked(clickedCell, props.cellId) && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {checkIfClicked(clickedCell, props.cellId) && !mineSteppedOn ? adjacentMines : null} */}
      {/* {checkIfRevealed(revealedCells, props.cellId) && mineSteppedOn ? <FontAwesomeIcon icon={faBomb} /> : null}
      {checkIfRevealed(revealedCells, props.cellId) && !mineSteppedOn ? adjacentMines : null} */}
    </div>
  )
}