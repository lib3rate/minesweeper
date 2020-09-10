import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

export default function Cell(props) {

  const handleRightClick = e => {
    e.preventDefault();
    props.onRightClick()
  };

  return (
    <div className='cell'
      onClick={props.onLeftClick}
      onContextMenu={handleRightClick}
    >
      <FontAwesomeIcon icon={faFlag} />
    </div>
  )
}