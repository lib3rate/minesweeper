import React from "react";
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

// import configureStore from '../../app/store';
// import { revealCell } from '../../helpers/helpers';
import { revealCell, addFlag, removeFlag } from './gameSlice';

export default function Cell(props) {
  const dispatch = useDispatch();

  // const store = configureStore();

  const leftClick = function(e) {
    console.log('Left click');
    console.log('Cell ID is ' + props.cellId);
    // console.log(store.getState());
    dispatch(revealCell({ payload: props.cellId }));
    // revealCell(props.cellId);
  };

  const rightClick = function(e) {
    e.preventDefault();
    console.log('Right click');
    dispatch(addFlag());
    // dispatch(removeFlag());
  };

  return (
    <div className='cell'
      onMouseDown={leftClick}
      onContextMenu={rightClick}
    >
    </div>
  )
}