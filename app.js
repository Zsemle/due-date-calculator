var CalculateDueDate = require('./due-date-calculator');

let currentDate = new Date(Date.now())
let submitDate = currentDate;
let turnaroundTime = 1;

console.log('Expected Resolution by: ', CalculateDueDate(submitDate,turnaroundTime));
