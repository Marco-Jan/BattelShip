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
    
  }
  
  // Die Ship Klasse
export class Ship {
    constructor(length, life) {
      this.length = length;
      this.life = life;
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
      if (positionIndex >= 0 && positionIndex < this.length) {
        this.hits[positionIndex] = true;
        console.log("hit",positionIndex);
        this.life -= 1; // Reduziere das Leben des Schiffs, wenn es getroffen wird
      }
    }
  
    isSunk() {
      console.log("isSunk");
      return this.hits.every(hit => hit);
    }
  
    toString() {
      return this.length.toString();
    }
  }
  
  // Funktionen für die Spiellogik
  export const checkHit = (x, y, gameBoard) => {

    const cell = gameBoard.enemyGrid[x][y];
    console.log(cell,"cell");

    return ['4', '3', '2'].includes(cell);
  }
  
  export const isValidPlacement = (grid, ship) => {
    const [x, y] = ship.position;
  
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
  
  export const pushShip = (enemyGrid) => {
    const ships = [new Ship(4, 4), new Ship(3, 3), new Ship(3, 3), new Ship(2, 2), new Ship(2, 2), new Ship(2, 2)];
    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const randomX = Math.floor(Math.random() * enemyGrid.length);
        const randomY = Math.floor(Math.random() * enemyGrid[0].length);
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        ship.setPosition([randomX, randomY]);
        ship.setDirection(direction);
  
        if (isValidPlacement(enemyGrid, ship)) {
          placeShipOnGrid(enemyGrid, ship);
          placed = true;
        }
      }
    });
  }
  
  const placeShipOnGrid = (grid, ship) => {
    const [x, y] = ship.position;
    if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        grid[x][y + i] = ship.toString();
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        grid[x + i][y] = ship.toString();
      }
    }
  }

  