function CalculateDueDate(submitDate,turnaroundTime){
  let resolvedBy = new Date(submitDate);
  let turnaroundTimeInMs = turnaroundTime*60*60*1000;
  let timeLeft = turnaroundTimeInMs;
  let submitDateEndOfWorkingHours = new Date(submitDate);
  submitDateEndOfWorkingHours.setUTCHours(17);
  submitDateEndOfWorkingHours.setUTCMinutes(0);
  submitDateEndOfWorkingHours.setUTCSeconds(0);
  submitDateEndOfWorkingHours.setUTCMilliseconds(0);
  let workingHoursLeftToday = submitDateEndOfWorkingHours.getTime() - submitDate.getTime();
  timeLeft -= workingHoursLeftToday;
  let remainingFullDays = Math.floor(timeLeft/1000/60/60/8);
  timeLeft %= 1000*60*60*8;

  for (let i = -1; i < remainingFullDays; i++){
    resolvedBy.setTime(resolvedBy.getTime() + 1000*60*60*24);
    if (resolvedBy.getUTCDay() > 5){
      resolvedBy.setTime(resolvedBy.getTime() + 1000*60*60*24*2);
    }
  }
  resolvedBy.setUTCHours(9);
  resolvedBy.setUTCMinutes(0);
  resolvedBy.setUTCSeconds(0);
  resolvedBy.setUTCMilliseconds(0);

  resolvedBy.setTime(resolvedBy.getTime() + timeLeft);

  return resolvedBy;
}

module.exports = function(submitDate,turnaroundTime){
  return CalculateDueDate(submitDate,turnaroundTime)
}
