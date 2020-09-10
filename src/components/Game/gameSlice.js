import { createSlice } from '@reduxjs/toolkit';

export const minesSlice = createSlice({
  name: 'game',
  initialState: {
    rows: 16,
    columns: 16,
    mines: 40,
  },
  reducers: {
    // generateMines: ,
    addFlag: state => {
      state.mines -= 1;
    },
    removeFlag: state => {
      state.mines += 1;
    },
  },
});

export const { addFlag, removeFlag } = minesSlice.actions;

export const selectRows = state => state.game.rows;
export const selectColumns = state => state.game.columns;
export const selectMines = state => state.game.mines;

export default minesSlice.reducer;