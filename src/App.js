import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const [state, setState] = useState({
    time: 0,
    flags: 0
  });

  function timer() {
    let newTime = 0;

    return setInterval(
      () => {
        newTime += 1;
        setState({...state, time: newTime});
      }
      , 1000
    );
  };

  useEffect(() => {
    timer()
  }, []);

  return (
    <div className="App">
      <Header
        flags={state.flags}
        time={state.time}
      />
      <Game/>
    </div>
  );
}

export default App;