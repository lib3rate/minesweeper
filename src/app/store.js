import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../components/Game/gameSlice';
import timerReducer from '../components/Header/timerSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
    timer: timerReducer,
  },
});