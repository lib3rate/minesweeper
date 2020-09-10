import React from "react";
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { selectMines } from '../Game/minesSlice';
import Timer from './Timer';

export default function Header(props) {  
  const mines = useSelector(selectMines);

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
          {mines}
        </div>
        <div className='clock'>
          <FontAwesomeIcon icon={faClock} />
          <Timer/>
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