import React from "react";
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import { selectMinesRemaining } from '../Game/gameSlice';
import Timer from './Timer';
import ActionsMenu from './ActionsMenu';

export default function Header(props) {  
  const minesRemaining = useSelector(selectMinesRemaining);

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
          {minesRemaining}
        </div>
        <div className='clock'>
          <FontAwesomeIcon icon={faClock} />
          <Timer/>
        </div>
      </div>
      <ActionsMenu/>
    </header>
  )
}