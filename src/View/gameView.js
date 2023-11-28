'use strict';

export const displayGrid = (grid, isPlayerGrid) => {
  const container = document.getElementById(isPlayerGrid ? 'player-grid' : 'enemy-grid');
  container.innerHTML = '';

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.style.backgroundColor = isPlayerGrid ? "green" : "red";
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
