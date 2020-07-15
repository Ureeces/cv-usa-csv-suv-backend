// Problem - getRows:
// takes in newline-separated string and convert to 2d array 

// Solution
// 1. Make a new empty array
// 2. Make another array equal to:
// 2a. Split through the string, using new line as a separator
// 3. Loop through the split data
// 4. Push each array from the split data into the array created in step 1
// 5. At the end of loop, return row array
const getRow = require('./get-row.js');

const getRows = function(str) {
  const rows = [];
  const splitStr = str.split("\n");

  for(const line of splitStr) {
    rows.push(getRow(line));
  }

  return rows;
}


if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
