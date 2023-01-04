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

  let holeTop = parseInt(
    Window.getComputedStyle(hole).getPropertyValue("top")
  );

  let cTop = -(500-characterTop);

  if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft >= 50) 
    && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
    alert("Game Over. Score: "+(counter-1));
    character.style.top = 100 + "px";
    counter = 0;
  }
}, 10);