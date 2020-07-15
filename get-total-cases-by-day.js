// Problem - getTotalCasesByDay
// takes in a date string
// and a 2D array and returns total cases that day 

// Solution
// 1. Loop through 2D array given as 2nd argument - each loop is a row
// 2. Get the date of current row
// 3. If the date is equal to the date argument:
// 3a. Get the total cases of the current row and return it 
const getDate = require('./get-date.js');
const getTotalCases = require('./get-total-cases.js');

const getTotalCasesByDay = function(searchDate, data) {
  for(const row of data) {
    let rowDate = getDate(row);
    if(rowDate === searchDate) {
      return getTotalCases(row);
    }
  }
}




if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
