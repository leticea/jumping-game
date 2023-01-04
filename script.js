const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");

let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
  let random = -((Math.random()*300)+150);
  hole.style.top = random + "px"; //faz os "canos" mudarem de posição
  counter++;
});

setInterval(function(){
  let characterTop = parseInt(
    Window.getComputedStyle(character).getPropertyValue("top")
  );
  
  if (jumping == 0) {
    character.style.top = (characterTop+3)+"px";
  }

  let blockLeft = parseInt(
    Window.getComputedStyle(block).getPropertyValue("left")
  );
});