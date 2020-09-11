// import { useSelector } from 'react-redux';

// import { selectMinesArray } from '../components/Game/gameSlice';

// const minesArray = useSelector(selectMinesArray);

export function repeat(value, number) {
  return new Array(number).fill(value);
};

// export function revealCell(cellId) {
//   if (minesArray.includes(cellId)) {
//     console.log('Mine here!');
//   }
// };