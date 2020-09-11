import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    rows: 16,
    columns: 16,
    minesRemaining: 40,
    minesArray: [],
  },
  reducers: {
    setMines: state => {
      const numberOfCells = state.rows * state.columns;
      const minesArray = state.minesArray;
      let minesCreated = 0;
    
      while (minesCreated < state.minesRemaining) {
        const cellIndex = Math.floor(Math.random() * numberOfCells);
        
        if (!minesArray.includes(cellIndex)) {
          minesArray.push(cellIndex);
          minesCreated += 1;
        };
      }
    },
    revealCell: (state, action) => {
      const minesArray = state.minesArray;
      console.log('MinesArray is ' + minesArray);
      
      if (minesArray.includes(action.payload.payload)) {
        console.log('You stepped on a mine :( Game over, please try again!')
      }
    },
    addFlag: state => {
      state.minesRemaining -= 1;
    },
    removeFlag: state => {
      state.minesRemaining += 1;
    },
  },
});

export const { setMines, revealCell, addFlag, removeFlag } = gameSlice.actions;

export const selectRows = state => state.game.rows;
export const selectColumns = state => state.game.columns;
export const selectMinesRemaining = state => state.game.minesRemaining;
export const selectMinesArray = state => state.game.minesArray;

export default gameSlice.reducer;