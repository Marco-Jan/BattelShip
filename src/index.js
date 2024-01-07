'use strict'

import "./style.css";
import GameController from './Controller/gameController.js';

document.getElementById('start-game').addEventListener('click', () => {
  const playerName = document.getElementById('player-name').value;
  if (playerName) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('warfieldContainer').style.display = 'flex';

    const gridSizex = 10;
    const gridSizey = 10;
    const gameController = new GameController(gridSizex, gridSizey);
    gameController.init();
  } else {
    alert('Bitte gib deinen Namen ein!');
  }
});
