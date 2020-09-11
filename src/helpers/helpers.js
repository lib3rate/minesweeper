// import { useSelector } from 'react-redux';

// import { selectRows, selectColumns, selectMines } from '../components/Game/gameSlice';

// const numberOfRows = useSelector(selectRows);
// const numberOfColumns = useSelector(selectColumns);
// const numberOfMines = useSelector(selectMines);

export function repeat(value, number) {
  return new Array(number).fill(value);
};

// export function generateMines() {
//   const numberOfCells = numberOfRows * numberOfColumns;
//   const minesArray = new Array(numberOfMines);
//   let minesCreated = 0;

//   while (minesCreated < numberOfMines) {
//     const cellIndex = Math.floor(Math.random() * numberOfCells);
    
//     if (!minesArray.includes(cellIndex)) {
//       minesArray.push(cellIndex);
//       minesCreated += 1;
//     };
//   }
// };