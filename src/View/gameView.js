'use strict';


export const displayGrid = (gameBoard) => {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';

  for (let i = 0; i < gameBoard.grid.length; i++) {
    const row = gameBoard.grid[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.textContent = cell;
      cellElement.dataset.row = i.toString();
      cellElement.dataset.col = j.toString();

      rowElement.appendChild(cellElement);
    }

    container.appendChild(rowElement);
  }
}


export const displayHitMessage = (isHit) => {
  const message = isHit ? 'Treffer!' : 'Kein Treffer!';
  console.log(message); 
}
