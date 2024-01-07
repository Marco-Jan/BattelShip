import { Ship } from './gameModel.js'; // Passe den Pfad an, falls notwendig


export class Captain {
    constructor(name, ability) {
        this.name = name;
        this.ability = ability;
    }

    useAbility(gameBoard, x, y) {
        return this.ability(gameBoard, x, y);
    }
}

export const William = new Captain("William", (gameBoard, x, y) => {
    const destroyRow = Math.random() < 0.5;
    if (destroyRow) {
        for (let i = 0; i < gameBoard.gridSizey; i++) {
            if (gameBoard.enemyGrid[x][i] instanceof Ship) {
                gameBoard.enemyGrid[x][i] = 'x';
            }
        }
    } else {
        for (let i = 0; i < gameBoard.gridSizex; i++) {
            if (gameBoard.enemyGrid[i][y] instanceof Ship) {
                gameBoard.enemyGrid[i][y] = 'x';
            }
        }
    }
});

export const Giuseppe = new Captain("Giuseppe", (gameBoard) => {
    for (let i = 0; i < 9; i++) {
        const randomX = Math.floor(Math.random() * gameBoard.gridSizex);
        const randomY = Math.floor(Math.random() * gameBoard.gridSizey);
        if (gameBoard.enemyGrid[randomX][randomY] instanceof Ship) {
            gameBoard.enemyGrid[randomX][randomY] = 'x';
        }
    }
});

export const Astrid = new Captain("Astrid", (gameBoard, x, y) => {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const targetX = x + i;
            const targetY = y + j;
            if (targetX >= 0 && targetX < gameBoard.gridSizex && targetY >= 0 && targetY < gameBoard.gridSizey && gameBoard.enemyGrid[targetX][targetY] instanceof Ship) {
                gameBoard.enemyGrid[targetX][targetY] = 'x';
            }
        }
    }
});

export const Katrin = new Captain("Katrin", (gameBoard, x, y) => {
    for (let i = 0; i < 6; i++) {
        const targetX = x + Math.floor(Math.random() * 3) - 1;
        const targetY = y + Math.floor(Math.random() * 3) - 1;
        if (targetX >= 0 && targetX < gameBoard.gridSizex && targetY >= 0 && targetY < gameBoard.gridSizey && gameBoard.enemyGrid[targetX][targetY] instanceof Ship) {
            gameBoard.enemyGrid[targetX][targetY] = 'x';
        }
    }
});

