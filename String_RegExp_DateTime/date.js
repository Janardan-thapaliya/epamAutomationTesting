//Get the day, month and year of the current date and output it to the console separately

let dates = new Date();

console.log(dates); //Day Month Date Year hh:mm:ss timezone (timezone name)
console.log("Year: " + dates.getFullYear()); //Returns full year 4-digits (contrary to 2-digits for getYear())
console.log("Month: " + dates.getMonth());  //Returns 0 to 11 where 0 is January
console.log("Date: " + dates.getDate());
console.log("Day: " + dates.getDay()); //Returns 0 to 6 where 0 is Sunday

//Note: Might be confusing when looking at number output for day and month, (they start with 0).