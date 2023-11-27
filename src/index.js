import GameController from './Controller/gameController.js';
import "./style.css";

const gridSizex = 10;
const gridSizey = 10;
const gameController = new GameController(gridSizex, gridSizey);

gameController.init();
