import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFlag, removeFlag, selectMines } from './components/Game/minesSlice';
import './App.css';

import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();
  
  const mines = useSelector(selectMines);

  const leftClick = function(e) {
    console.log('Left click');
    dispatch(addFlag());
  };

  const rightClick = function(e) {
    console.log('Right click');
    dispatch(removeFlag());
  };

  return (
    <div className="App">
      <Header
        mines={mines}
      />
      <Game
        onMouseDown={leftClick}
        onContextMenu={rightClick}
      />
    </div>
  );
};

export default App;