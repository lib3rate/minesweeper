import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import minesReducer from '../components/Game/minesSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    mines: minesReducer,
  },
});
