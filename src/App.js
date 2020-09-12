import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import './App.css';

// import { store } from './app/store';
import { setMines, isMineSteppedOn } from './components/Game/gameSlice';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const dispatch = useDispatch();

  // const mineSteppedOn = useSelector(isMineSteppedOn);

  useEffect(() => {
    dispatch(setMines())
  }, []);

  return (
    // <Provider store={store}>
      <div className="App">
        <Header/>
        <Game/>
      </div>
    // </Provider>
  );
};

export default App;