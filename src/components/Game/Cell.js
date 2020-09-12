import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';

import { revealCell, addFlag, removeFlag, isMineSteppedOn, selectRevealedCells } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  const mineSteppedOn = useSelector(isMineSteppedOn);
  const revealedCells = useSelector(selectRevealedCells);

  const leftClick = function(e) {
    console.log('Left click on cell ID ' + props.cellId);
    dispatch(revealCell(props.cellId));
    console.log('Is it revealed now? ' + props.isRevealed);
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
      {props.isRevealed && (revealedCells[props.cellId] === 'mine') ? <FontAwesomeIcon icon={faBomb} /> : null}
      {props.isRevealed && (revealedCells[props.cellId] !== 'mine') ? revealedCells[props.cellId] : null}
    </div>
  )
}