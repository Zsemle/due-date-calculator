function CalculateDueDate(submitDate,turnaroundTime){
  let oneDayMs = 1000*60*60*24;
  let oneHourMs = 1000*60*60;
  let resolvedBy = new Date(submitDate);
  let timeLeft = turnaroundTime*oneHourMs;
  let submitDateEndOfWorkingHours = new Date(submitDate);
  submitDateEndOfWorkingHours.setUTCHours(17);
  submitDateEndOfWorkingHours.setUTCMinutes(0);
  submitDateEndOfWorkingHours.setUTCSeconds(0);
  submitDateEndOfWorkingHours.setUTCMilliseconds(0);
  let workingHoursLeftToday = submitDateEndOfWorkingHours.getTime() - submitDate.getTime();
  if (timeLeft <= workingHoursLeftToday){
    resolvedBy.setTime(resolvedBy.getTime() + timeLeft);
    return resolvedBy;
  }else{
    resolvedBy.setTime(resolvedBy.getTime() + oneDayMs);
    timeLeft -= workingHoursLeftToday;
  }
  let remainingFullDays = Math.floor(timeLeft/(oneHourMs*8));
  for (let i = 0; i < remainingFullDays; i++){
    resolvedBy.setTime(resolvedBy.getTime() + oneDayMs);
    timeLeft -= 1000*60*60*8;
    if (resolvedBy.getUTCDay() > 5){
      resolvedBy.setTime(resolvedBy.getTime() + oneDayMs*2);
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
