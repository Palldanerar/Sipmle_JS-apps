import { Column } from "./column.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const FONT_SIZE = 16;
let columns = [];
let columnsCount = 0;

initCanvasSize();
initColumns();

animation();

function initCanvasSize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function initColumns() {
  columnsCount = canvas.width / FONT_SIZE;
  columns = [];
  for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
  }
}

function animation() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#8b00ff";
  context.font = `bold ${FONT_SIZE}px monospace`;
  columns.forEach((column) => column.drawSymbol());

  setTimeout(() => requestAnimationFrame(animation), 50);
}

window.addEventListener("resize", () => {
  initCanvasSize();
  initColumns();
  context.clearRect(0, 0, canvas.width, canvas.height);
});
