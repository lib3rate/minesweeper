import { createSlice } from '@reduxjs/toolkit';
// import { countAdjacentMines } from '../../helpers/helpers';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    rows: 16,
    columns: 16,
    minesRemaining: 40,
    minesArray: [],
    // adjacentMines: 0,
    mineSteppedOn: false,
    // clickedCell: null,
    // revealedCells: [],
    revealedCells: {},
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
      // console.log('Revealed cells are ' + state.revealedCells);
      // state.revealedCells.push(cellId);
      // console.log('Now revealed cells are ' + state.revealedCells);
      // state.clickedCell = cellId;

      if (minesArray.includes(cellId)) {
        state.mineSteppedOn = true;
        alert('You stepped on a mine :( Game over, please try again!');

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

        // console.log(adjacentNorth, adjacentNorthEast, adjacentEast, adjacentSouthEast, adjacentSouth, adjacentSouthWest, adjacentWest, adjacentNorthWest);
        // console.log('Adjacent mines: ' + adjacentMines);

        // console.log('Cell ID is ' + cellId);
        // console.log('Before: ' + Object.keys(state.revealedCells));
        state.revealedCells[cellId] = adjacentMines;
        // console.log('After: ' + Object.keys(state.revealedCells));

        // state.adjacentMines = adjacentMines;
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
// export const selectMinesArray = state => state.game.minesArray;
// export const selectAdjacentMines = state => state.game.adjacentMines;
export const isMineSteppedOn = state => state.game.mineSteppedOn;
// export const selectClickedCell = state => state.game.clickedCell;
export const selectRevealedCells = state => state.game.revealedCells;

export default gameSlice.reducer;