let h = document.querySelector(".h");
let colon = document.querySelector(".colon");
let m = document.querySelector(".s");
let s = document.getElementById("sec");
let pm = document.getElementById("pm")

function clock(){
  let date = new Date();
  let hour = date.getHours()
  let second = date.getSeconds()
  let munite = date.getMinutes()
  
   if (hour >= 12) {
        am_pm = "PM";
        pm.innerHTML = am_pm
        
   }
   else if (hour < 12) {
        am_pm = "AM"
        pm.innerHTML=am_pm
   

    } else if (hour == 0) {

        hour = 12;
        am_pm = "AM";
        pm.innerHTML = am_pm
  
} 
h.innerHTML = hour;
m.innerHTML = munite;
s.innerHTML = second

setTimeout(clock,1000)

}