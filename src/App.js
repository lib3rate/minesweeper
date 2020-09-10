import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import { addFlag, removeFlag } from './components/Game/minesSlice';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();

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
      <Header/>
      <Game
        onMouseDown={leftClick}
        onContextMenu={rightClick}
      />
    </div>
  );
};

export default App;