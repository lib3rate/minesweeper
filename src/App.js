import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/styles.scss';

import { setMines, isMineSteppedOn } from './components/Game/gameSlice';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();

  const mineSteppedOn = useSelector(isMineSteppedOn);

  useEffect(() => {
    dispatch(setMines())
  }, []);

  return (
    <div className="App">
      <Header/>
      {mineSteppedOn ? <Message/> : null}
      <Game/>
    </div>
  );
};

export default App;