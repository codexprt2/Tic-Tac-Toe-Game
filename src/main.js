import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
	tile.addEventListener("click", () => {
		console.log("Tile Clicked!!!");
		onTileClick(tile.dataset.index);
	});
});

function onTileClick(i) {
	// do something
	game.makeMove(i);

	// update board
	gameView.updateBoard(game);
	// change turn
}
