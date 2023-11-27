export default class GameBoard {
    constructor(gridSizex, gridSizey) {
      this.gridSizex = gridSizex;
      this.gridSizey = gridSizey;
      this.grid = [];
    }
  
    createField() {
      for (let i = 0; i < this.gridSizey; i++) {
        const row = [];
        for (let j = 0; j < this.gridSizex; j++) {
          row.push('0');
        }
        this.grid.push(row);
      }
    }
  }
  
  // Die Ship Klasse
  class Ship {
    constructor(length, life) {
      this.length = length;
      this.life = life;
      this.position = [];
      this.direction = '';
    }
  
    setPosition(position) {
      this.position = position;
    }
  
    setDirection(direction) {
      this.direction = direction;
    }
  
    toString() {
      return this.length.toString();
    }
  }
  
  // Funktionen für die Spiellogik
  export const checkHit = (x, y, gameBoard) => {
    const cell = gameBoard.grid[x][y];
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
  
  export const pushShip = (grid) => {
    const ships = [new Ship(4, 4), new Ship(3, 3), new Ship(3, 3), new Ship(2, 2), new Ship(2, 2), new Ship(2, 2)];
    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const randomX = Math.floor(Math.random() * grid.length);
        const randomY = Math.floor(Math.random() * grid[0].length);
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        ship.setPosition([randomX, randomY]);
        ship.setDirection(direction);
  
        if (isValidPlacement(grid, ship)) {
          placeShipOnGrid(grid, ship);
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
  
