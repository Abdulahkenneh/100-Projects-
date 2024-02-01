const button = document.querySelector(".btn");
const image = document.querySelector("#image");

const ozone = document.getElementById("ozone").src;

const lists = document.getElementsByTagName("li");




function changepic() {
  // Tab to edit
  
  image.setAttribute("src",ozone) = ozone.sr;
  return false
  
}
button.addEventListener("click",changepic);



/*function listCount(param) {
  // Tab to edit
  for (i=0;i<lists.length;i++){
    if (lists[i].classname == "work"){
      alert("He is a student",lists[i].classname)
    };
    alert("no list");
    return false;
  }
  
}
button.addEventListener("click",listCount)*/