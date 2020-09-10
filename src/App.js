import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  // useEffect(() => {
  //   dispatch(renderRows());
  //   dispatch(renderCells());
  //   dispatch(generateMines())
  // }, []);

  return (
    <div className="App">
      <Header/>
      <Game/>
    </div>
  );
};

export default App;