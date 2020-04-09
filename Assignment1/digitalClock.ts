 class DigitalClock{

  GetCurrentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    return hour + " : " + min + " : " + sec + " " + midday;
  }
}

let dc=new DigitalClock();
console.log(dc.GetCurrentTime());
 
 