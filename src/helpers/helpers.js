export function repeat(value, number) {
  return new Array(number).fill(value);
};

export function checkIfRevealed(revealedCells, cellId) {
  const arrayOfKeys = [];
  for (let key of Object.keys(revealedCells)) {
    const convertedKey = Number(key);
    arrayOfKeys.push(convertedKey);
  }
  return arrayOfKeys.includes(cellId);
};

export function checkIfFlagged(flaggedCells, cellId) {
  return flaggedCells.includes(cellId);
};