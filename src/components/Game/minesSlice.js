import { createSlice } from '@reduxjs/toolkit';

export const minesSlice = createSlice({
  name: 'mines',
  initialState: {
    value: 40,
  },
  reducers: {
    addFlag: state => state.value -= 1,
    removeFlag: state => state.value += 1,
  },
});

export const { addFlag, removeFlag } = minesSlice.actions;

export const selectMines = state => state.mines.value;

export default minesSlice.reducer;