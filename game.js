const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

let canvasSize;
let elementsSize;

/*tamaño canvas*/
function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
}
/* RELLENO CANVAS */
const map = maps[0];
const mapRows = map.trim().split("\n");
const mapsRowsCols = mapRows.map((row) => row.trim().split(""));

function startGame() {
  game.font = elementsSize + "px Verdana";
  game.textAlign = "end";

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      game.fillText(
        emojis[mapsRowsCols[row - 1][col - 1]],
        elementsSize * col,
        elementsSize * row
      );
    }
  }
}
