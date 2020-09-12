import { createSlice } from '@reduxjs/toolkit';
// import { countAdjacentMines } from '../../helpers/helpers';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    rows: 16,
    columns: 16,
    minesRemaining: 40,
    minesArray: [],
    mineSteppedOn: false,
    revealedCells: {},
    flaggedCells: [],
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
      
      const cellId = action.payload;

      if (minesArray.includes(cellId)) {
        state.mineSteppedOn = true;
        state.revealedCells[cellId] = 'mine';
        // alert('You stepped on a mine :( Game over, please try again!');

      } else {
        // const adjacentMines = countAdjacentMines(cellId);
        let adjacentMines = 0;

        const adjacentNorth = cellId - 16;
        if (minesArray.includes(adjacentNorth)) {
          adjacentMines += 1;
        };

        const adjacentNorthEast = cellId - 15;
        if (minesArray.includes(adjacentNorthEast)) {
          adjacentMines += 1;
        };

        const adjacentEast = cellId + 1;
        if (minesArray.includes(adjacentEast)) {
          adjacentMines += 1;
        };

        const adjacentSouthEast = cellId + 17;
        if (minesArray.includes(adjacentSouthEast)) {
          adjacentMines += 1;
        };

        const adjacentSouth = cellId + 16;
        if (minesArray.includes(adjacentSouth)) {
          adjacentMines += 1;
        };

        const adjacentSouthWest = cellId + 15;
        if (minesArray.includes(adjacentSouthWest)) {
          adjacentMines += 1;
        };

        const adjacentWest = cellId - 1;
        if (minesArray.includes(adjacentWest)) {
          adjacentMines += 1;
        };

        const adjacentNorthWest = cellId - 17;
        if (minesArray.includes(adjacentNorthWest)) {
          adjacentMines += 1;
        };

        state.revealedCells[cellId] = adjacentMines;
      }
    },
    addFlag: (state, action) => {
      const cellId = action.payload;

      state.minesRemaining -= 1;
      state.flaggedCells.push(cellId);
    },
    removeFlag: (state, action) => {
      const cellId = action.payload;

      state.minesRemaining += 1;

      const index = state.flaggedCells.indexOf(cellId);
      state.flaggedCells.splice(index, 1);
    },
  },
});

export const { setMines, revealCell, addFlag, removeFlag } = gameSlice.actions;

export const selectRows = state => state.game.rows;
export const selectColumns = state => state.game.columns;
export const selectMinesRemaining = state => state.game.minesRemaining;
export const isMineSteppedOn = state => state.game.mineSteppedOn;
export const selectRevealedCells = state => state.game.revealedCells;
export const selectFlaggedCells = state => state.game.flaggedCells;

export default gameSlice.reducer;