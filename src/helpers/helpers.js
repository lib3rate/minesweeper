// import { useSelector } from 'react-redux';

// import { selectMinesArray } from '../components/Game/gameSlice';

// const minesArray = useSelector(selectMinesArray);

export function repeat(value, number) {
  return new Array(number).fill(value);
};

// export function countAdjacentMines(cellId) {
//   let adjacentMines = 0;

//   const adjacentNorth = cellId - 16;
//   if (minesArray.includes(adjacentNorth)) {
//     adjacentMines += 1;
//   };

//   const adjacentNorthEast = cellId - 15;
//   if (minesArray.includes(adjacentNorthEast)) {
//     adjacentMines += 1;
//   };

//   const adjacentEast = cellId + 1;
//   if (minesArray.includes(adjacentEast)) {
//     adjacentMines += 1;
//   };

//   const adjacentSouthEast = cellId + 17;
//   if (minesArray.includes(adjacentSouthEast)) {
//     adjacentMines += 1;
//   };

//   const adjacentSouth = cellId + 16;
//   if (minesArray.includes(adjacentSouth)) {
//     adjacentMines += 1;
//   };

//   const adjacentSouthWest = cellId + 15;
//   if (minesArray.includes(adjacentSouthWest)) {
//     adjacentMines += 1;
//   };

//   const adjacentWest = cellId - 1;
//   if (minesArray.includes(adjacentWest)) {
//     adjacentMines += 1;
//   };

//   const adjacentNorthWest = cellId - 17;
//   if (minesArray.includes(adjacentNorthWest)) {
//     adjacentMines += 1;
//   };

//   console.log(adjacentNorth, adjacentNorthEast, adjacentEast, adjacentSouthEast, adjacentSouth, adjacentSouthWest, adjacentWest, adjacentNorthWest);
//   console.log('Adjacent mines: ' + adjacentMines);

//   return adjacentMines;
// };