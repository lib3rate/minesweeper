import { createSlice } from '@reduxjs/toolkit';

export const minesSlice = createSlice({
  name: 'mines',
  initialState: {
    mines: 40,
  },
  reducers: {
    addFlag: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mines -= 1;
    },
    removeFlag: state => {
      state.mines += 1;
    },
  },
});

export const { addFlag, removeFlag } = minesSlice.actions;

export default minesSlice.reducer;

// function minesReducer(state = initialState, action) {
//   // Check to see if the reducer cares about this action
//   if (action.type === 'mines/addFlag') {
//     // If so, make a copy of `state`
//     return {
//       ...state,
//       // and update the copy with the new value
//       mines: state.mines - 1
//     }
//   }
//   // otherwise return the existing state unchanged
//   return state
// };