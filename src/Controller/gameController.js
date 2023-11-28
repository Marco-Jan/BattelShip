'use strict'

import GameBoard from '../Model/gameModel.js';
import { displayGrid, displayHitMessage } from '../View/gameView.js';
import { pushShip, checkHit } from '../Model/gameModel.js';

class GameController {
  constructor(gridSizex, gridSizey) {
    this.gameBoard = new GameBoard(gridSizex, gridSizey);
  }

  init() {
    this.gameBoard.createFieldEnemy();
    this.gameBoard.createFieldPlayer();
    pushShip(this.gameBoard.enemyGrid);
    displayGrid(this.gameBoard.enemyGrid, false); // Gegnergitter
    displayGrid(this.gameBoard.playerGrid, true); // Spielergitter
    this.addEventListeners();
  }

  addEventListeners() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
      cell.addEventListener('click', (event) => this.handleCellClick(event));
    }
  }

  handleCellClick(event) {
    const x = parseInt(event.currentTarget.dataset.row);
    const y = parseInt(event.currentTarget.dataset.col);
    const result = checkHit(x, y, this.gameBoard);
    console.log(result);
    displayHitMessage(result);
  }
}

export default GameController;