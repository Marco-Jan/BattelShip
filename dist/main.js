/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller/gameController.js":
/*!******************************************!*\
  !*** ./src/Controller/gameController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/gameModel.js */ \"./src/Model/gameModel.js\");\n/* harmony import */ var _View_gameView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/gameView.js */ \"./src/View/gameView.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\nclass GameController {\r\n  constructor(gridSizex, gridSizey) {\r\n    this.gameBoard = new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gridSizex, gridSizey);\r\n  }\r\n\r\n  init() {\r\n    this.gameBoard.createField();\r\n    (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.pushShip)(this.gameBoard.grid);\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard);\r\n    this.addEventListeners();\r\n  }\r\n\r\n  addEventListeners() {\r\n    const cells = document.getElementsByClassName('cell');\r\n    for (let cell of cells) {\r\n      cell.addEventListener('click', (event) => this.handleCellClick(event));\r\n    }\r\n  }\r\n\r\n  handleCellClick(event) {\r\n    const x = parseInt(event.currentTarget.dataset.row);\r\n    const y = parseInt(event.currentTarget.dataset.col);\r\n    const result = (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.checkHit)(x, y, this.gameBoard);\r\n\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayHitMessage)(result);\r\n    (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.decreaseLife)(result);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/Controller/gameController.js?");

/***/ }),

/***/ "./src/Model/gameModel.js":
/*!********************************!*\
  !*** ./src/Model/gameModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkHit: () => (/* binding */ checkHit),\n/* harmony export */   decreaseLife: () => (/* binding */ decreaseLife),\n/* harmony export */   \"default\": () => (/* binding */ GameBoard),\n/* harmony export */   isValidPlacement: () => (/* binding */ isValidPlacement),\n/* harmony export */   pushShip: () => (/* binding */ pushShip)\n/* harmony export */ });\nclass GameBoard {\r\n    constructor(gridSizex, gridSizey) {\r\n      this.gridSizex = gridSizex;\r\n      this.gridSizey = gridSizey;\r\n      this.grid = [];\r\n    }\r\n  \r\n    createField() {\r\n      for (let i = 0; i < this.gridSizey; i++) {\r\n        const row = [];\r\n        for (let j = 0; j < this.gridSizex; j++) {\r\n          row.push('0');\r\n        }\r\n        this.grid.push(row);\r\n      }\r\n    }\r\n  }\r\n  \r\n  // Die Ship Klasse\r\n  class Ship {\r\n    constructor(length, life) {\r\n      this.length = length;\r\n      this.life = life;\r\n      this.position = [];\r\n      this.direction = '';\r\n    }\r\n  \r\n    setPosition(position) {\r\n      this.position = position;\r\n    }\r\n  \r\n    setDirection(direction) {\r\n      this.direction = direction;\r\n    }\r\n  \r\n    toString() {\r\n      return this.length.toString();\r\n    }\r\n  }\r\n  \r\n  // Funktionen für die Spiellogik\r\n  const checkHit = (x, y, gameBoard) => {\r\n    const cell = gameBoard.grid[x][y];\r\n    return ['4', '3', '2'].includes(cell);\r\n  }\r\n  \r\n  const isValidPlacement = (grid, ship) => {\r\n    const [x, y] = ship.position;\r\n  \r\n    if (ship.direction === 'horizontal') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (y + i >= grid[0].length || grid[x][y + i] !== '0') {\r\n          return false;\r\n        }\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (x + i >= grid.length || grid[x + i][y] !== '0') {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n  \r\n    return true;\r\n  }\r\n  \r\n  const pushShip = (grid) => {\r\n    const ships = [new Ship(4, 4), new Ship(3, 3), new Ship(3, 3), new Ship(2, 2), new Ship(2, 2), new Ship(2, 2)];\r\n    ships.forEach(ship => {\r\n      let placed = false;\r\n      while (!placed) {\r\n        const randomX = Math.floor(Math.random() * grid.length);\r\n        const randomY = Math.floor(Math.random() * grid[0].length);\r\n        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n        ship.setPosition([randomX, randomY]);\r\n        ship.setDirection(direction);\r\n  \r\n        if (isValidPlacement(grid, ship)) {\r\n          placeShipOnGrid(grid, ship);\r\n          placed = true;\r\n        }\r\n      }\r\n    });\r\n  }\r\n  \r\n  const placeShipOnGrid = (grid, ship) => {\r\n    const [x, y] = ship.position;\r\n    if (ship.direction === 'horizontal') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        grid[x][y + i] = ship.toString();\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        grid[x + i][y] = ship.toString();\r\n      }\r\n    }\r\n  }\r\n  \r\n  const decreaseLife = (result) => {\r\n    for (let i = 0; i < ships.life; i++) {\r\n        const ships = ships[i];\r\n        console.log(lifes, 'i');\r\n      \r\n    \r\n      if (result === true) {\r\n        console.log(\"isHit ist true\");\r\n        // ship.life--;\r\n        // console.log(ships.life, 'life');\r\n        // console.log(ships, 'shipafter');\r\n      } else {\r\n        console.log(\"isHit ist false\");\r\n      }\r\n    }\r\n  }\n\n//# sourceURL=webpack://webpack_vorlage/./src/Model/gameModel.js?");

/***/ }),

/***/ "./src/View/gameView.js":
/*!******************************!*\
  !*** ./src/View/gameView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayGrid: () => (/* binding */ displayGrid),\n/* harmony export */   displayHitMessage: () => (/* binding */ displayHitMessage)\n/* harmony export */ });\n\r\n\r\n\r\nconst displayGrid = (gameBoard) => {\r\n  const container = document.getElementById('grid-container');\r\n  container.innerHTML = '';\r\n\r\n  for (let i = 0; i < gameBoard.grid.length; i++) {\r\n    const row = gameBoard.grid[i];\r\n    const rowElement = document.createElement('div');\r\n    rowElement.classList.add('row');\r\n\r\n    for (let j = 0; j < row.length; j++) {\r\n      const cell = row[j];\r\n      const cellElement = document.createElement('div');\r\n      cellElement.classList.add('cell');\r\n      cellElement.textContent = cell;\r\n      cellElement.dataset.row = i.toString();\r\n      cellElement.dataset.col = j.toString();\r\n\r\n      rowElement.appendChild(cellElement);\r\n    }\r\n\r\n    container.appendChild(rowElement);\r\n  }\r\n}\r\n\r\n\r\nconst displayHitMessage = (isHit) => {\r\n  const message = isHit ? 'Treffer!' : 'Kein Treffer!';\r\n  console.log(message); \r\n}\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/View/gameView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller_gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller/gameController.js */ \"./src/Controller/gameController.js\");\n\r\n\r\nconst gridSizex = 10;\r\nconst gridSizey = 10;\r\nconst gameController = new _Controller_gameController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gridSizex, gridSizey);\r\n\r\ngameController.init();\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;