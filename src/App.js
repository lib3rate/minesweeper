import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import { setMines } from './components/Game/gameSlice';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMines())
  }, []);

  return (
    <div className="App">
      <Header/>
      <Game/>
    </div>
  );
};

export default App;