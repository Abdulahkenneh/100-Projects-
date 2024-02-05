const toggle = document.getElementById("container");
const body = document.querySelector("body");
const span = document.querySelector("span")
//toggle.style.background = "white"

toggle.onclick = function() {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  span.classList.toggle("active")
}

span.onclick = function(){
  if (span.innerHTML==="OFF"){
  span.innerHTML = "ON"
  }
  else {
   span.innerHTML="OFF"
  }
}