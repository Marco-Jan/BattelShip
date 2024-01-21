'use strict'

import "./style.css";
import GameController from './Controller/gameController.js';
import { showMessage } from './Controller/messages.js';
import myImageSrc from './img/Firefly Battelship-Wasser 17984.png';

document.getElementById('myImage').src = myImageSrc;


document.getElementById('start-game').addEventListener('click', () => {
    const playerName = document.getElementById('player-name').value;
    const selectedCaptain = document.getElementById('captain-select').value;

    if (playerName && selectedCaptain) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('myImage').style.display = 'none';
        document.getElementById('warfieldContainer').style.display = 'flex';
        document.getElementById('use-captain-ability').style.display = 'block';

        

        const gridSizex = 10;
        const gridSizey = 10;
        const gameController = new GameController(gridSizex, gridSizey, playerName);
        
        gameController.init();
        gameController.selectCaptain(selectedCaptain); 
    } else {
        showMessage('Bitte gib deinen Namen und wähle einen Kapitän aus!');
    }
});

