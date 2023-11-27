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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './Model/gameModel.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './View/gameView.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n;\r\n\r\n\r\n\r\nclass GameController {\r\n  constructor(gridSizex, gridSizey) {\r\n    this.gameBoard = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Model/gameModel.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(gridSizex, gridSizey);\r\n  }\r\n\r\n  init() {\r\n    this.gameBoard.createField();\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Model/gameModel.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.gameBoard.grid);\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './View/gameView.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.gameBoard);\r\n    this.addEventListeners();\r\n  }\r\n\r\n  addEventListeners() {\r\n    const cells = document.getElementsByClassName('cell');\r\n    for (let cell of cells) {\r\n      cell.addEventListener('click', (event) => this.handleCellClick(event));\r\n    }\r\n  }\r\n\r\n  handleCellClick(event) {\r\n    const x = parseInt(event.currentTarget.dataset.row);\r\n    const y = parseInt(event.currentTarget.dataset.col);\r\n    const result = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Model/gameModel.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(x, y, this.gameBoard);\r\n\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './View/gameView.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(result);\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Model/gameModel.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(result);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/Controller/gameController.js?");

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