import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import minesReducer from '../components/Game/minesSlice';
import timerReducer from '../components/Header/timerSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    mines: minesReducer,
    timer: timerReducer,
  },
});