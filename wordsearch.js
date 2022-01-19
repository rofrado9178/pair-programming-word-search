const transpose = function (matrix) {
  const rowNum = matrix[0].length;
  const transposedMatrix = [];
  for (let i = 0; i < rowNum; i++) {
    const row = [];
    for (const arr of matrix) {
      const val = arr[i];
      row.push(val);
    }
    transposedMatrix.push(row);
  }
  return transposedMatrix;
  // Put your solution here
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const transposedLetters = transpose(letters);
  const horizontalJoin1 = transposedLetters.map((ls) => ls.join(""));
  for (l of horizontalJoin1) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
