 class DigitalClock{

  GetCurrentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    return hour + " : " + min + " : " + sec + " " + midday;
  }
}

var dc=new DigitalClock();
console.log(dc.GetCurrentTime());
 
 