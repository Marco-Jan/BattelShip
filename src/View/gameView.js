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

      if (cell === 'x') {
        cellElement.style.backgroundColor = 'red'; 
      } else if (isPlayerGrid && typeof cell === 'object') {
        
        cellElement.style.backgroundColor = 'grey'; 
      } else {
        cellElement.style.backgroundColor = 'rgba(12, 77, 175, 0.5)';
      }

      cellElement.textContent = '';
      cellElement.dataset.row = i.toString();
      cellElement.dataset.col = j.toString();

      rowElement.appendChild(cellElement);
    }

    container.appendChild(rowElement);
  }
}
