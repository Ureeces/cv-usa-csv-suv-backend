// Problem - getRow:
// Takes in a comma-separated string and converts it to array,
// returning that array

// Solution (Using .split)
// 1. Make new empty array to hold the following:
// 1a. Split the given argument (which should be a string) 
//     using comma as a separator
// 2. Set the empty array equal to the array given in step 2
// 3. Return our array

const getRow = function(str) {
  const row = str.split(",");
  return row;
}





if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
