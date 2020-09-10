import React from "react";
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import { addFlag, removeFlag } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  const leftClick = function(e) {
    console.log('Left click');
    dispatch(addFlag());
  };

  const rightClick = function(e) {
    e.preventDefault();
    console.log('Right click');
    dispatch(removeFlag());
  };

  return (
    <div className='cell'
      onMouseDown={leftClick}
      onContextMenu={rightClick}
    >
      <FontAwesomeIcon icon={faFlag} />
    </div>
  )
}