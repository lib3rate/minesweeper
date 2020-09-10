import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, runTimer, selectTime } from './components/Header/timerSlice';
import { addFlag, removeFlag, selectMines } from './components/Game/minesSlice';
import './App.css';

import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();
  
  const time = useSelector(selectTime);
  const mines = useSelector(selectMines);
  
  useEffect(() => {
    dispatch(runTimer())
  }, []);

  return (
    <div className="App">
      <Header
        mines={mines}
        time={time}
      />
      <Game/>
    </div>
  );
};

export default App;