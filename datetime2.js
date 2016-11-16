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
console.log('Current time is: ' + hour + ' ' + merid + ' : ' + min + ' : ' + sec);
