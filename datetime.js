var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var merid = "";

var day = d.getDay();
var dayString = "";


var amPM = function (hour) {
  if (hour < 12) {
    merid = "AM";
  } else {
    merid = "PM";
  }
  return merid;
}

var translate = function (day) {
  switch (day) {
    case 0:
      dayString = "Sunday";
      break;
    case 1:
        dayString = "Monday";
        break;
    case 2:
        dayString = "Tuesday";
        break;
    case 3:
        dayString = "Wednesday";
        break;
    case 4:
        dayString = "Thursday";
        break;
    case 5:
        dayString = "Friday";
        break;
    case 6:
        dayString = "Saturday";
        break;
  }
  return dayString;
}

translate(day);
amPM(hour);
console.log('Today is: ' + dayString);
console.log('Current time is: ' + hour + ' ' + merid + ' : ' + min + ' : ' + sec);
