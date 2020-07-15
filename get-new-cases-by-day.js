// Problem - getNewCasesByDay
// takes in a date string and a 2D array and returns new cases that day

// Solution
// 1. Loop through the 2D array - each loop is a row
// 2. Get the date of the current row
// 3. If the date is equal to the date argument
// 3a. Return the new cases of the current row and return it

const getDate = require('./get-date.js');
const getNewCases = require('./get-new-cases.js');

const getNewCasesByDay = function(searchDate, data) {
  for(const row of data) {
    let rowDate = getDate(row);

    if(rowDate === searchDate) {
      return getNewCases(row);
    }
  }
}



if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
