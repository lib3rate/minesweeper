import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ActionsMenu(props) {

  return (
    <div className='actions'>
      <FontAwesomeIcon icon={faVolumeUp} />
      <FontAwesomeIcon icon={faShareAlt} />
      <FontAwesomeIcon icon={faTimes} />
  </div>
  )
}