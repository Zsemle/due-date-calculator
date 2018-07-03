var assert = require('assert');
var CalculateDueDate = require('../due-date-calculator');

describe('due-date-calculator', function(){
  let submitDate = new Date('2018-07-03T10:15:13.985Z');

  it('should return the due date, which is on the next day', function(){
    let turnaroundTime = 8;
    let expectedDate = new Date('2018-07-04T10:15:13.985Z');
    assert.equal(CalculateDueDate(submitDate,turnaroundTime).toUTCString(), expectedDate.toUTCString());
  });
  it('should return the due date, which is on the day after the next day', function(){
    let turnaroundTime = 16;
    let expectedDate = new Date('2018-07-05T10:15:13.985Z');
    assert.equal(CalculateDueDate(submitDate,turnaroundTime).toUTCString(), expectedDate.toUTCString());
  });
  it('should return the due date, which is on the next week', function(){
    let turnaroundTime = 40;
    let expectedDate = new Date('2018-07-10T10:15:13.985Z');
    assert.equal(CalculateDueDate(submitDate,turnaroundTime).toUTCString(), expectedDate.toUTCString());
  });
});
