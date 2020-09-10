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

  const initialState = {
    mines: 40,
    time: 0
  }

  function minesReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'mines/addFlag') {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        mines: state.mines - 1
      }
    }
    // otherwise return the existing state unchanged
    return state
  }

  function timeReducer(state = initialState) {
    let newTime = 0;

    return setInterval(
      () => {
        newTime += 1;
        setState({...state, time: newTime});
      }
      , 1000
    );
  };

  const store = configureStore({ reducer: minesReducer })

  console.log(store.getState())
  // {mines: 40}

  const findMine = () => {
    return {
      type: 'mines/addFlag'
    }
  }
  
  store.dispatch(findMine())
  
  console.log(store.getState())
  // {mines: 39}

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