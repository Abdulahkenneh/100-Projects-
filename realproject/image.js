
let lists = ["url('one.jpg')","url('two.jpg')","url('three.png')","url('four.jpg')","url('five.jpg')","url('six.png')", "url('seven.jpg')","url('eight.jpg')","url('ninee.png')" ]


var one = "one.jpg"
const btn  = document.querySelector(".clickme");

const background = document.body;

function changebg() {

const image = lists[Math.floor(Math.random()*lists.length)];
background.style.backgroundImage=image
}



btn.addEventListener("click",changebg);




