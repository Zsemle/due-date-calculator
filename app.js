var CalculateDueDate = require('./due-date-calculator');

let submitDate = new Date('2018-07-03T10:15:13.985Z');
let turnaroundTime = 16;

console.log('Expected Resolution by: ', CalculateDueDate(submitDate,turnaroundTime));
