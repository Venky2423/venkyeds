/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = dateToDaysSinceEpoch(startDate);
  const end = dateToDaysSinceEpoch(endDate);
  
  return end - start;
}

/**
 * Converts a date to the number of days since the Unix epoch (1970-01-01).
 * 
 * If the input date is a number, it is assumed to represent the number of days since the epoch, 
 * including both integer and decimal parts. In this case, only the integer part is returned as the number of days.
 * 
 * @param {string|Date|number} date - The date to convert. 
 * Can be:
 * - An ISO string (yyyy-mm-dd)
 * - A Date object
 * - A number representing the days since the epoch, where the integer part is the number of days and the decimal part is the fraction of the day
 * 
 * @returns {number} - The number of days since the Unix epoch
 */
function dateToDaysSinceEpoch(date) {
  let dateObj;
  if (typeof date === 'string') {
      dateObj = new Date(date); 
  } else if (typeof date === 'number') {
      return Math.floor(date);
  } else if (date instanceof Date) {
      dateObj = date;
  } else {
      throw new Error('Invalid date input');
  }

  // Validate that date is valid after parsing
  if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date input');
  }
  return Math.floor(dateObj.getTime() / (1000 * 60 * 60 * 24));
}

export { getFullName, days, setMinDate, dateToDaysSinceEpoch };