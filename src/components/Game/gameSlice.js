import { createSlice } from '@reduxjs/toolkit';
// import { generateMines } from '../../helpers/helpers';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    rows: 16,
    columns: 16,
    mines: 40,
    minesArray: [],
  },
  reducers: {
    // setMines: generateMines,
    setMines: state => {
      const numberOfCells = state.rows * state.columns;
      // const minesArray = new Array(state.mines);
      const minesArray = state.minesArray;
      let minesCreated = 0;
    
      while (minesCreated < state.mines) {
        const cellIndex = Math.floor(Math.random() * numberOfCells);
        
        if (!minesArray.includes(cellIndex)) {
          minesArray.push(cellIndex);
          minesCreated += 1;
        };
      }
    },
    addFlag: state => {
      state.mines -= 1;
    },
    removeFlag: state => {
      state.mines += 1;
    },
  },
});

export const { setMines, addFlag, removeFlag } = gameSlice.actions;

export const selectRows = state => state.game.rows;
export const selectColumns = state => state.game.columns;
export const selectMines = state => state.game.mines;

export default gameSlice.reducer;