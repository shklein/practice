var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log('Today is : ' + daylist[day] + '.');

var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var merid = "";

var amPM = function (hour) {
  if (hour < 12) {
    merid = "AM";
  } else {
    merid = "PM";
  }
  return merid;
}

amPM(hour);

var year = today.getFullYear().toString();
var month = today.getMonth() + 1;
month = month.toString();
var date = today.getDate().toString();
console.log('Current time is: ' + hour + ' ' + merid + ' : ' + min + ' : ' + sec);

var currentDate = date + '/' + month + '/' + year;
console.log(currentDate);
document.write('Today is ' + currentDate + '.');
