import { configureStore } from '@reduxjs/toolkit';
import minesReducer from '../components/Game/minesSlice';
import timerReducer from '../components/Header/timerSlice';

export default configureStore({
  reducer: {
    mines: minesReducer,
    timer: timerReducer,
  },
});