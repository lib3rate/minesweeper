import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => state.value += 1,
  },
});

export const { increment } = timerSlice.actions;

// export const runTimer = () => setInterval(() => increment(), 1000);

export const runTimer = () => dispatch => {
  setInterval(() => {
    dispatch(increment());
  }, 1000);
};

export const selectTime = state => state.timer.value;

export default timerSlice.reducer;