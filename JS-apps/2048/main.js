import { Grid } from "./JS/grid.js";

const game = document.querySelector(".board-cells");
const grid = new Grid(game);
grid.getRandomEmptyCell().linkTile(new Tile(game));
