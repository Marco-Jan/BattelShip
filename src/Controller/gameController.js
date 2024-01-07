'use strict'
import GameBoard, { Ship, pushShip, checkHit, isValidPlacement, placeShipOnGrid, enemyCheckHit } from '../Model/gameModel.js';
import { displayGrid, displayHitMessage } from '../View/gameView.js';

class GameController {
  constructor(gridSizex, gridSizey) {
    this.gameBoard = new GameBoard(gridSizex, gridSizey);
    this.playerShips = [new Ship(4), new Ship(3), new Ship(3), new Ship(2), new Ship(2), new Ship(2)];
    console.log(this.playerShips.length);

    this.boundHandlePlayerGridClick = this.handlePlayerGridClick.bind(this);
    this.boundHandleCellClick = this.handleCellClick.bind(this);
    this.boundHandleKeyPress = this.handleKeyPress.bind(this);

    this.enemyShips = [];
    this.currentShipIndex = 0;
    this.currentDirection = 'horizontal';
    this.isPlayerTurn = true; // Spieler beginnt
    this.allShipsPlaced = false; // Wird auf true gesetzt, wenn alle Schiffe platziert sind
    this.enemyMoves = []; // Speichert die Züge des Gegners
  }
  init() {
    this.gameBoard.createFieldEnemy();
    this.gameBoard.createFieldPlayer();
    pushShip(this.gameBoard.enemyGrid, this.enemyShips);
    displayGrid(this.gameBoard.playerGrid, true); // Spielerfeld
    displayGrid(this.gameBoard.enemyGrid, false); // Gegnerfeld


    this.placePlayerShips();
    this.addEventListeners();

  }

  addEventListeners() {
    const playerCells = document.getElementById('player-grid').getElementsByClassName('cell');
    const enemyCells = document.getElementById('enemy-grid').getElementsByClassName('cell');

    for (let cell of playerCells) {
      cell.removeEventListener('click', this.boundHandlePlayerGridClick);
      cell.addEventListener('click', this.boundHandlePlayerGridClick);
    }
    for (let cell of enemyCells) {
      cell.removeEventListener('click', this.boundHandleCellClick);
      cell.addEventListener('click', this.boundHandleCellClick);
    }

    document.removeEventListener('keydown', this.boundHandleKeyPress);
    document.addEventListener('keydown', this.boundHandleKeyPress);
  }



  handlePlayerGridClick(event) {
    console.log(`Aktueller Schiffindex vor der Platzierung: ${this.currentShipIndex}`);

    if (this.currentShipIndex >= this.playerShips.length) {
      console.log("Es sind keine weiteren Schiffe zu platzieren.");
      return;
    }
    const cell = event.target;
    const x = parseInt(cell.dataset.row);
    const y = parseInt(cell.dataset.col);
    const currentShip = this.playerShips[this.currentShipIndex];

    if (this.gameBoard.playerGrid[x][y] === '0') {
      currentShip.setPosition([x, y]);
      currentShip.setDirection(this.currentDirection);

      console.log(`Aktuelles Schiff: Größe ${currentShip.length}`);
      console.log(`Position: (${x}, ${y}), Richtung: ${currentShip.direction}`);

      if (isValidPlacement(this.gameBoard.playerGrid, currentShip)) {
        placeShipOnGrid(this.gameBoard.playerGrid, currentShip);
        displayGrid(this.gameBoard.playerGrid, true);

        this.addEventListeners();

        this.currentShipIndex++;
        console.log(this.currentShipIndex, "indexafter");

        if (this.currentShipIndex < this.playerShips.length) {
          console.log(`Platziere das nächste Schiff (Größe: ${this.playerShips[this.currentShipIndex].length})`);
        } else {
          console.log('Alle Schiffe wurden platziert.');
          console.log('Spieler beginnt.');


        }
      } else {
        console.log('Ungültige Platzierung. Versuche es erneut.');
      }
    } else {
      console.log('Diese Zelle ist bereits belegt. Wähle eine andere.');
    }

    if (this.currentShipIndex >= this.playerShips.length) {
      this.allShipsPlaced = true;
      return;
    }
  }




  handleKeyPress(event) {
    if (event.key === ' ' && this.currentShipIndex < this.playerShips.length) {
      this.currentDirection = this.currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      console.log(`Aktuelle Ausrichtung: ${this.currentDirection}`);
    }
  }

  placePlayerShips() {
    console.log('Beginne mit der Platzierung der Schiffe. Klicke auf das Spielfeld, um ein Schiff zu platzieren. Drücke die Leertaste, um die Ausrichtung zu ändern.');

    console.log(this.currentShipIndex, "before");
    this.currentDirection = 'horizontal';
  }





  handleCellClick(event) {
    if (!this.allShipsPlaced || !this.isPlayerTurn) {
      console.log("Du kannst jetzt nicht auf das gegnerische Feld klicken.");
      return;
    }

    const x = parseInt(event.currentTarget.dataset.row);
    const y = parseInt(event.currentTarget.dataset.col);

    checkHit(x, y, this.gameBoard, this);

    this.isPlayerTurn = false;
    this.enemyMove();
  }

  enemyMove() {
    let x, y, hit;
    setTimeout(() => {
      do {
        x = Math.floor(Math.random() * this.gameBoard.gridSizex);
        y = Math.floor(Math.random() * this.gameBoard.gridSizey);
      } while (this.enemyMoves.includes(`${x},${y}`));

      this.enemyMoves.push(`${x},${y}`);
      hit = enemyCheckHit(x, y, this.gameBoard, this);

      if (hit) {
        console.log(`NPC hat getroffen bei (${x}, ${y})!`);

      } else {
        console.log(`NPC hat verfehlt bei (${x}, ${y}).`);
        console.log(`Player ist dran.`);

      }

      this.isPlayerTurn = true;
      displayGrid(this.gameBoard.playerGrid, true);
      this.addEventListeners();
      displayGrid(this.gameBoard.enemyGrid, false);
      this.addEventListeners();
    }, 3000);

    this.isPlayerTurn = true;
    displayGrid(this.gameBoard.playerGrid, true);
    this.addEventListeners();
    displayGrid(this.gameBoard.enemyGrid, false);
    this.addEventListeners();
  }


  checkGameOver() {
    const allPlayerShipsSunk = this.playerShips.every(ship => ship.isSunk());
    const allEnemyShipsSunk = this.enemyShips.every(ship => ship.isSunk());

    if (allPlayerShipsSunk) {
      console.log("Game Over - Alle deine Schiffe sind gesunken! Gegner gewinnt.");
    } else if (allEnemyShipsSunk) {
      console.log("Glückwunsch! Du hast gewonnen. Alle feindlichen Schiffe sind gesunken!");
    }
  }

}


// displayGrid(this.gameBoard.playerGrid, true); // Spielerfeld
// displayGrid(this.gameBoard.enemyGrid, false); // Gegnerfeld
export default GameController;