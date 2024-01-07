'use strict'
export default class GameBoard {
  constructor(gridSizex, gridSizey) {
    this.gridSizex = gridSizex;
    this.gridSizey = gridSizey;
    this.playerGrid = [];
    this.enemyGrid = [];
  }

  createFieldPlayer() {
    for (let i = 0; i < this.gridSizey; i++) {
      const rowPlayer = [];
      for (let j = 0; j < this.gridSizex; j++) {
        rowPlayer.push('0');
      }
      this.playerGrid.push(rowPlayer);
    }
  }

  createFieldEnemy() {
    for (let i = 0; i < this.gridSizey; i++) {
      const rowEnemy = [];
      for (let j = 0; j < this.gridSizex; j++) {
        rowEnemy.push('0');
      }
      this.enemyGrid.push(rowEnemy);
    }
  }

  // In der GameBoard-Klasse
  markHit(position, index, direction, isPlayer) {
    const [x, y] = position;
    const grid = isPlayer ? this.enemyGrid : this.playerGrid; // Bestimme das Zielgrid basierend auf dem Angreifer

    if (direction === 'horizontal') {
      grid[x][y + index] = 'x'; // 'x' steht für einen Treffer
    } else {
      grid[x + index][y] = 'x';
    }
  }


}

// Die Ship Klasse
export class Ship {
  constructor(length, life) {
    this.length = length;
    this.position = [];
    this.direction = '';
    this.hits = new Array(length).fill(false);
  }

  setPosition(position) {
    this.position = position;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  ishit(positionIndex) {
    if (positionIndex >= 0 && positionIndex < this.length && !this.hits[positionIndex]) {
      this.hits[positionIndex] = true;
      return true;
    }
    return false;
  }



  isSunk() {
    if (this.life === 0) {
      console.log("gesunken");
    }
    return this.hits.every(hit => hit);
  }

  toString() {
    return this.length.toString();
  }


}

// Funktionen für die Spiellogik
export const checkHit = (x, y, gameBoard, gameController) => {
  const cell = gameBoard.enemyGrid[x][y];
  if (cell instanceof Ship) {
    const ship = cell;
    const segment = ship.direction === 'horizontal' ? y - ship.position[1] : x - ship.position[0];
    if (ship.ishit(segment)) {
      gameBoard.markHit(ship.position, segment, ship.direction, true);

      if (ship.isSunk()) {
        console.log('Schiff gesunken!');
        gameController.checkGameOver();
      } else {
        console.log('Schiff getroffen!');
      }
      return true;
    }
  }
  console.log('Kein Treffer!');
  return false;
}

export const enemyCheckHit = (x, y, gameBoard, gameController) => {
  const cell = gameBoard.playerGrid[x][y];
  if (cell instanceof Ship) {
    const ship = cell;
    const segment = ship.direction === 'horizontal' ? y - ship.position[1] : x - ship.position[0];
    if (ship.ishit(segment)) {
      gameBoard.markHit(ship.position, segment, ship.direction, false);

      if (ship.isSunk()) {
        console.log('PlayerSchiff gesunken!');
        gameController.checkGameOver();
      } else {
        console.log('Player Schiff getroffen!');
      }
      return true;
    }
  }
  console.log('Kein Treffer!');
  return false;
}




export const isValidPlacement = (grid, ship) => {
  const [x, y] = ship.position;
  //console.log(grid,"grid",ship,"ship");
  if (ship.direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      if (y + i >= grid[0].length || grid[x][y + i] !== '0') {
        return false;
      }
    }
  } else {
    for (let i = 0; i < ship.length; i++) {
      if (x + i >= grid.length || grid[x + i][y] !== '0') {
        return false;
      }
    }
  }

  return true;
}

export const pushShip = (grid, ships) => {
  const shipSizes = [4, 3, 3, 2, 2, 2];
  shipSizes.forEach(size => {
    const ship = new Ship(size, size);
    let placed = false;
    while (!placed) {
      const randomX = Math.floor(Math.random() * grid.length);
      const randomY = Math.floor(Math.random() * grid[0].length);
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      ship.setPosition([randomX, randomY]);
      ship.setDirection(direction);

      if (isValidPlacement(grid, ship)) {
        placeShipOnGrid(grid, ship);
        ships.push(ship);
        placed = true;
      }
    }
  });
}

export const placeShipOnGrid = (grid, ship) => {
  const [x, y] = ship.position;
  if (ship.direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      grid[x][y + i] = ship;
    }
  } else {
    for (let i = 0; i < ship.length; i++) {
      grid[x + i][y] = ship;
    }
  }
}


