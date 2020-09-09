import React, { useState, useEffect } from 'react';
import { configureStore } from '@reduxjs/toolkit'
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

  const initialState = { bombs: 40 }

  function bombsReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'bombs/findBomb') {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        bombs: state.bombs - 1
      }
    }
    // otherwise return the existing state unchanged
    return state
  }

  const store = configureStore({ reducer: bombsReducer })

  console.log(store.getState())
  // {bombs: 40}

  const findBomb = () => {
    return {
      type: 'bombs/findBomb'
    }
  }
  
  store.dispatch(findBomb())
  
  console.log(store.getState())
  // {value: 2}

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