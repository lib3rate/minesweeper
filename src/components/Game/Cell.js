import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';

import { revealCell, addFlag, removeFlag, selectRevealedCells, isMineSteppedOn } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  const revealedCells = useSelector(selectRevealedCells);
  const gameOver = useSelector(isMineSteppedOn);

  const leftClick = function(e) {
    // console.log('Left click on cell ID ' + props.cellId);
    if (!gameOver) {
      dispatch(revealCell(props.cellId));
    }
  };

  const rightClick = function(e) {
    e.preventDefault();
    // console.log('Right click on cell ID ' + props.cellId);
    if (!gameOver && !props.isFlagged) {
      dispatch(addFlag(props.cellId));
    } else if (!gameOver && props.isFlagged) {
      dispatch(removeFlag(props.cellId));
    }
  };

  return (
    <div className='cell'
      onClick={leftClick}
      onContextMenu={rightClick}
    >
      {props.isFlagged ? <FontAwesomeIcon icon={faFlag} /> : null}
      {props.isRevealed && (revealedCells[props.cellId] === 'mine') ? <FontAwesomeIcon icon={faBomb} /> : null}
      {props.isRevealed && (revealedCells[props.cellId] !== 'mine') ? revealedCells[props.cellId] : null}
    </div>
  )
}