// Problem - getDate:
// takes in a row array and returns the date from it 
// dates are at index 3

// Solution 
// 1. Return the data at index 3 of the row array, which should be the date

const getDate = function(row) {
  return row[3];
}


if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
