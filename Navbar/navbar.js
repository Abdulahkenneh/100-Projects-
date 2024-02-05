const cont = document.querySelector(".container");
const ul = document.querySelector("ul")
function myFunction() {
  if (cont.classList.contains("rotate")) {
  cont.classList.remove("rotate")
  ul.classList.toggle("display")
  } else {
  cont.classList.add("rotate")
  ul.classList.toggle("display")
  }
//  cont.classList.toggle("rotate")
  // Tab to edit
}