
let lists = ["red","blue","green","yellow"]

const div = document.querySelector(".content")
const para = document.createElement("p");
let text = document.createTextNode("Background color :");
para.appendChild(text);
div.append(para);

//another p element inside of para


const colorName = document.createElement("p")
para.appendChild(colorName)

//styling the content

 para.style.color = "white";
 para.style.textAlign= "center";
 para.style.fontSize = "2rem"
 

const btn  = document.querySelector(".clickme");

const background = document.body;

function changebg(){
 const color = lists[Math.floor(Math.random()*lists.length)];

if(color !="yellow"){
  colorName.style.color ="black"
  background.style.backgroundColor = color
  colorName.innerHTML = color
}
colorName.style.color = "black"
background.style.backgroundColor = color
colorName.innerHTML = color;
colorName.style.textTransform="upperCase"

}

btn.addEventListener("click",changebg);




