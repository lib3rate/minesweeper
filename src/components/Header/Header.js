import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Clock from './Clock';

export default function Header(props) {

  return (
    <header>
      <select className='difficulty'>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <div className='stats'>
        <div className='mines'>
          <FontAwesomeIcon icon={faFlag} />
          {props.mines}
        </div>
        <div className='clock'>
          <FontAwesomeIcon icon={faClock} />
          <Clock
            time = {props.time}
          />
        </div>
      </div>
      <div className='actions'>
        <FontAwesomeIcon icon={faVolumeUp} />
        <FontAwesomeIcon icon={faShareAlt} />
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </header>
  )
}