let elements = document.querySelector(".container").children;
let num = 0;

function load() {
  let cliHeight = document.documentElement.clientHeight;
  let scrHeight = document.documentElement.scrollTop || document.body.scrollTop;
  for(let i = num; i < elements.length; i++){
    if(elements[i].offsetTop < cliHeight + scrHeight) {
      elements[i].style.opacity = "1";
      elements[i].style.paddingTop = "0"
      num = i + 1;
    }
  }
}
window.onscroll = load;
load()