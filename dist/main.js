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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/backgroundBattelshipMain.png */ \"./src/img/backgroundBattelshipMain.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 40px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #fdf9f9;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n}\n\n#start-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 30vh;\n}\n\n#player-name {\n  margin-bottom: 20px;\n  font-size: 20px;\n  border-radius: 10px;\n  padding: 10px;\n  background-color: rgba(79, 86, 150, 0.4);\n  color: #161616;\n}\n#player-name::-moz-placeholder {\n  color: #161616;\n}\n#player-name::placeholder {\n  color: #161616;\n}\n\n#start-game {\n  padding: 10px 30px;\n  font-size: 20px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n#start-game::-moz-placeholder {\n  color: #161616;\n}\n#start-game::placeholder {\n  color: #161616;\n}\n#start-game:hover {\n  background-color: rgba(79, 86, 150, 0.4);\n}\n\n#warfieldContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10%;\n  width: 100%;\n  height: 100%;\n}\n\n.fieldContainer {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n#gridField {\n  display: flex;\n}\n\n#player-grid {\n  margin: 50px;\n}\n\n#enemy-grid {\n  margin: 50px;\n}\n\n.row {\n  width: 40px;\n  height: 40px;\n}\n\n.cell {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #161616;\n  border-radius: 5px;\n  margin: 1px;\n}\n\n#message-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 50px;\n  width: 100%;\n  height: 100%;\n  color: #161616;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#message-content {\n  background-color: #161616;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n#myImage {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 60%;\n  height: auto;\n}\n\n#captain-select {\n  margin-bottom: 20px;\n  padding: 5px;\n  border-radius: 5px;\n  font-size: 15px;\n}\n\n#game-info {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\n\n#player-name-display, #turn-counter-display {\n  padding: 10px;\n  text-align: center;\n  width: 200px;\n  color: rgb(219, 211, 211);\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n}\n\n#use-captain-ability {\n  padding: 10px;\n  font-size: 30px;\n  border-radius: 8px;\n  cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_vorlage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Controller/gameController.js":
/*!******************************************!*\
  !*** ./src/Controller/gameController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/gameModel.js */ \"./src/Model/gameModel.js\");\n/* harmony import */ var _View_gameView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/gameView.js */ \"./src/View/gameView.js\");\n/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.js */ \"./src/Controller/messages.js\");\n/* harmony import */ var _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/captain.js */ \"./src/Model/captain.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\nclass GameController {\r\n  constructor(gridSizex, gridSizey, playerName) {\r\n    this.gameBoard = new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gridSizex, gridSizey);\r\n    this.playerShips = [new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2)];\r\n    console.log(this.playerShips.length);\r\n    this.boundHandlePlayerGridClick = this.handlePlayerGridClick.bind(this);\r\n    this.boundHandleCellClick = this.handleCellClick.bind(this);\r\n    this.boundHandleKeyPress = this.handleKeyPress.bind(this);\r\n    this.enemyShips = [];\r\n    this.currentShipIndex = 0;\r\n    this.currentDirection = 'horizontal';\r\n    this.isPlayerTurn = true;\r\n    this.allShipsPlaced = false;\r\n    this.enemyMoves = [];\r\n    this.captains = [_Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.William, _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Giuseppe, _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Astrid, _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Katrin];\r\n    this.selectedCaptain = null;\r\n    this.playerName = playerName;\r\n    this.turnCounter = 0;\r\n    this.captainAbilityAvailable = false;\r\n\r\n  }\r\n  init() {\r\n    this.gameBoard.createFieldEnemy();\r\n    this.gameBoard.createFieldPlayer();\r\n    (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.pushShip)(this.gameBoard.enemyGrid, this.enemyShips);\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.playerGrid, true); // Spielerfeld\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.enemyGrid, false); // Gegnerfeld\r\n    document.getElementById('player-name-display').textContent = `${this.playerName}`;\r\n    document.getElementById('turn-counter-display').textContent = `Runden: ${this.turnCounter}`;\r\n\r\n    const captainAbilityButton = document.getElementById('use-captain-ability');\r\n    if (captainAbilityButton) {\r\n      captainAbilityButton.addEventListener('click', () => {\r\n        this.useCaptainAbility();\r\n      });\r\n    }\r\n\r\n    this.placePlayerShips();\r\n    this.addEventListeners();\r\n    setTimeout(() => {\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(\"Spiel gestartet - Platziere deine Schiffe\");\r\n    }, 1000);\r\n\r\n  }\r\n\r\n\r\n  addEventListeners() {\r\n    const playerCells = document.getElementById('player-grid').getElementsByClassName('cell');\r\n    const enemyCells = document.getElementById('enemy-grid').getElementsByClassName('cell');\r\n\r\n    for (let cell of playerCells) {\r\n      cell.removeEventListener('click', this.boundHandlePlayerGridClick);\r\n      cell.addEventListener('click', this.boundHandlePlayerGridClick);\r\n    }\r\n    for (let cell of enemyCells) {\r\n      cell.removeEventListener('click', this.boundHandleCellClick);\r\n      cell.addEventListener('click', this.boundHandleCellClick);\r\n    }\r\n\r\n    document.removeEventListener('keydown', this.boundHandleKeyPress);\r\n    document.addEventListener('keydown', this.boundHandleKeyPress);\r\n  }\r\n\r\n\r\n\r\n  handlePlayerGridClick(event) {\r\n    console.log(`Aktueller Schiffindex vor der Platzierung: ${this.currentShipIndex}`);\r\n\r\n    if (this.currentShipIndex >= this.playerShips.length) {\r\n      console.log(\"Es sind keine weiteren Schiffe zu platzieren.\");\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`Es sind keine weiteren Schiffe zu platzieren.`);\r\n\r\n      return;\r\n    }\r\n    const cell = event.target;\r\n    const x = parseInt(cell.dataset.row);\r\n    const y = parseInt(cell.dataset.col);\r\n    const currentShip = this.playerShips[this.currentShipIndex];\r\n\r\n    if (this.gameBoard.playerGrid[x][y] === '0') {\r\n      currentShip.setPosition([x, y]);\r\n      currentShip.setDirection(this.currentDirection);\r\n\r\n      console.log(`Aktuelles Schiff: Größe ${currentShip.length}`);\r\n      console.log(`Position: (${x}, ${y}), Richtung: ${currentShip.direction}`);\r\n\r\n      if ((0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.isValidPlacement)(this.gameBoard.playerGrid, currentShip)) {\r\n        (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.placeShipOnGrid)(this.gameBoard.playerGrid, currentShip);\r\n        (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.playerGrid, true);\r\n\r\n        this.addEventListeners();\r\n\r\n        this.currentShipIndex++;\r\n        console.log(this.currentShipIndex, \"indexafter\");\r\n\r\n        if (this.currentShipIndex < this.playerShips.length) {\r\n          console.log(`Platziere das nächste Schiff (Größe: ${this.playerShips[this.currentShipIndex].length})`);\r\n        } else {\r\n          console.log('Alle Schiffe wurden platziert.');\r\n\r\n          (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`Spieler beginnt.`);\r\n          console.log('Spieler beginnt.');\r\n\r\n\r\n        }\r\n      } else {\r\n        console.log('Ungültige Platzierung. Versuche es erneut.');\r\n        (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`Ungültige Platzierung. Versuche es erneut.`);\r\n      }\r\n    } else {\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`Diese Zelle ist bereits belegt. Wähle eine andere.`);\r\n\r\n      console.log('Diese Zelle ist bereits belegt. Wähle eine andere.');\r\n    }\r\n\r\n    if (this.currentShipIndex >= this.playerShips.length) {\r\n      this.allShipsPlaced = true;\r\n      return;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n  handleKeyPress(event) {\r\n    if (event.key === ' ' && this.currentShipIndex < this.playerShips.length) {\r\n      this.currentDirection = this.currentDirection === 'horizontal' ? 'vertical' : 'horizontal';\r\n      console.log(`Aktuelle Ausrichtung: ${this.currentDirection}`);\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`Aktuelle Ausrichtung: ${this.currentDirection}`);\r\n\r\n    }\r\n  }\r\n\r\n  placePlayerShips() {\r\n    console.log('Beginne mit der Platzierung der Schiffe. Klicke auf das Spielfeld, um ein Schiff zu platzieren. Drücke die Leertaste, um die Ausrichtung zu ändern.');\r\n\r\n    console.log(this.currentShipIndex, \"before\");\r\n    this.currentDirection = 'horizontal';\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n  handleCellClick(event) {\r\n    if (!this.allShipsPlaced || !this.isPlayerTurn) {\r\n      console.log(\"Du kannst jetzt nicht auf das gegnerische Feld klicken.\");\r\n      return;\r\n    }\r\n\r\n    const x = parseInt(event.currentTarget.dataset.row);\r\n    const y = parseInt(event.currentTarget.dataset.col);\r\n\r\n    (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.checkHit)(x, y, this.gameBoard, this);\r\n\r\n    this.isPlayerTurn = false;\r\n    this.enemyMove();\r\n    this.endTurn();\r\n\r\n  }\r\n\r\n  enemyMove() {\r\n    let x, y, hit;\r\n    setTimeout(() => {\r\n      do {\r\n        x = Math.floor(Math.random() * this.gameBoard.gridSizex);\r\n        y = Math.floor(Math.random() * this.gameBoard.gridSizey);\r\n      } while (this.enemyMoves.includes(`${x},${y}`));\r\n\r\n      this.enemyMoves.push(`${x},${y}`);\r\n      hit = (0,_Model_gameModel_js__WEBPACK_IMPORTED_MODULE_0__.enemyCheckHit)(x, y, this.gameBoard, this);\r\n\r\n      if (hit) {\r\n        setTimeout(() => {\r\n          (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`NPC hat getroffen bei (${x}, ${y})!`);\r\n          console.log(`NPC hat getroffen bei (${x}, ${y})!`);\r\n        }, 500)\r\n\r\n\r\n      } else {\r\n        setTimeout(() => {\r\n          (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`NPC hat verfehlt bei (${x}, ${y}). Player ist dran.`);\r\n          console.log(`NPC hat verfehlt bei (${x}, ${y}).`);\r\n        }, 500);\r\n\r\n\r\n      }\r\n\r\n      this.isPlayerTurn = true;\r\n      (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.playerGrid, true);\r\n      this.addEventListeners();\r\n      (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.enemyGrid, false);\r\n      this.addEventListeners();\r\n    }, 1000);\r\n\r\n    this.isPlayerTurn = true;\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.playerGrid, true);\r\n    this.addEventListeners();\r\n    (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.enemyGrid, false);\r\n    this.addEventListeners();\r\n\r\n\r\n  }\r\n\r\n  endTurn() {\r\n    this.turnCounter++;\r\n    document.getElementById('turn-counter-display').textContent = `Runden: ${this.turnCounter}`;\r\n\r\n\r\n    if (this.turnCounter % 1 === 0) {\r\n      this.captainAbilityAvailable = true;\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(\"Kapitänsfähigkeit ist jetzt verfügbar!\");\r\n      const captainAbilityAvailable = document.getElementById('use-captain-ability');\r\n        captainAbilityAvailable.style.backgroundColor = \"green\";\r\n      \r\n      \r\n    }\r\n  }\r\n\r\n\r\n  checkGameOver() {\r\n    const allPlayerShipsSunk = this.playerShips.every(ship => ship.isSunk());\r\n    const allEnemyShipsSunk = this.enemyShips.every(ship => ship.isSunk());\r\n\r\n    if (allPlayerShipsSunk) {\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(\"Game Over - Alle deine Schiffe sind gesunken! Gegner gewinnt.\");\r\n    } else if (allEnemyShipsSunk) {\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(\"Glückwunsch! Du hast gewonnen. Alle feindlichen Schiffe sind gesunken!\");\r\n    }\r\n  }\r\n\r\n  useCaptainAbility(x, y) {\r\n    if (this.captainAbilityAvailable) {\r\n      this.selectedCaptain.useAbility(this.gameBoard, x, y);\r\n      (0,_View_gameView_js__WEBPACK_IMPORTED_MODULE_1__.displayGrid)(this.gameBoard.enemyGrid, false);\r\n      this.captainAbilityAvailable = false;\r\n      console.log(`${this.selectedCaptain.name}'s Fähigkeit wurde eingesetzt.`);\r\n\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`${this.selectedCaptain.name}'s Fähigkeit wurde eingesetzt.`);\r\n      this.addEventListeners();\r\n    } else {\r\n      console.log(\"Kapitänsfähigkeit ist derzeit nicht verfügbar.\");\r\n      (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(\"Kapitänsfähigkeit ist derzeit nicht verfügbar.\");\r\n    }\r\n  }\r\n\r\n\r\n\r\n  selectCaptain(name) {\r\n    switch (name) {\r\n      case \"William\":\r\n        this.selectedCaptain = _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.William;\r\n        break;\r\n      case \"Giuseppe\":\r\n        this.selectedCaptain = _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Giuseppe;\r\n        break;\r\n      case \"Astrid\":\r\n        this.selectedCaptain = _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Astrid;\r\n        break;\r\n      case \"Katrin\":\r\n        this.selectedCaptain = _Model_captain_js__WEBPACK_IMPORTED_MODULE_3__.Katrin;\r\n        break;\r\n      default:\r\n        console.log(\"Unbekannter Kapitän\");\r\n        return;\r\n    }\r\n\r\n\r\n    console.log(`${this.selectedCaptain.name} wurde ausgewählt.`);\r\n\r\n    (0,_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)(`${this.selectedCaptain.name} wurde ausgewählt.`);\r\n  }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n//# sourceURL=webpack://webpack_vorlage/./src/Controller/gameController.js?");

/***/ }),

/***/ "./src/Controller/messages.js":
/*!************************************!*\
  !*** ./src/Controller/messages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMessage: () => (/* binding */ showMessage)\n/* harmony export */ });\n// messages.js\r\nlet messageQueue = [];\r\nlet isShowingMessage = false;\r\n\r\nfunction showMessage(message) {\r\n  messageQueue.push(message);\r\n  if (!isShowingMessage) {\r\n    showNextMessage();\r\n  }\r\n}\r\n\r\nfunction showNextMessage() {\r\n  if (messageQueue.length > 0) {\r\n    const message = messageQueue.shift();\r\n    displayMessage(message);\r\n  } else {\r\n    isShowingMessage = false;\r\n  }\r\n}\r\n\r\nfunction displayMessage(message) {\r\n  const messageOverlay = document.createElement(\"div\");\r\n  messageOverlay.id = \"message-overlay\";\r\n  messageOverlay.style.position = \"fixed\";\r\n  messageOverlay.style.top = \"0\";\r\n  messageOverlay.style.left = \"0\";\r\n  messageOverlay.style.width = \"100%\";\r\n  messageOverlay.style.height = \"100%\";\r\n  messageOverlay.style.backgroundColor = \"rgba(0, 0, 0, 0.5)\";\r\n  messageOverlay.style.display = \"flex\";\r\n  messageOverlay.style.justifyContent = \"center\";\r\n  messageOverlay.style.alignItems = \"center\";\r\n  messageOverlay.style.zIndex = \"1000\";\r\n\r\n  const messageContent = document.createElement(\"div\");\r\n  messageContent.textContent = message;\r\n  messageContent.style.background = \"white\";\r\n  messageContent.style.padding = \"20px\";\r\n  messageContent.style.borderRadius = \"10px\";\r\n\r\n  messageOverlay.appendChild(messageContent);\r\n\r\n  document.body.appendChild(messageOverlay);\r\n\r\n  setTimeout(() => {\r\n    document.body.removeChild(messageOverlay);\r\n    isShowingMessage = false;\r\n    showNextMessage();\r\n  }, 1500);\r\n  isShowingMessage = true;\r\n}\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/Controller/messages.js?");

/***/ }),

/***/ "./src/Model/captain.js":
/*!******************************!*\
  !*** ./src/Model/captain.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Astrid: () => (/* binding */ Astrid),\n/* harmony export */   Captain: () => (/* binding */ Captain),\n/* harmony export */   Giuseppe: () => (/* binding */ Giuseppe),\n/* harmony export */   Katrin: () => (/* binding */ Katrin),\n/* harmony export */   William: () => (/* binding */ William)\n/* harmony export */ });\n/* harmony import */ var _gameModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameModel.js */ \"./src/Model/gameModel.js\");\n\r\n\r\n\r\nclass Captain {\r\n    constructor(name, ability) {\r\n        this.name = name;\r\n        this.ability = ability;\r\n    }\r\n\r\n    useAbility(gameBoard, x, y) {\r\n        return this.ability(gameBoard, x, y);\r\n    }\r\n}\r\n\r\nconst William = new Captain(\"William\", (gameBoard, x, y) => {\r\n    const destroyRow = Math.random() < 0.5;\r\n    if (destroyRow) {\r\n        for (let i = 0; i < gameBoard.gridSizey; i++) {\r\n            if (gameBoard.enemyGrid[x][i] instanceof _gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n                gameBoard.enemyGrid[x][i] = 'x';\r\n            }\r\n        }\r\n    } else {\r\n        for (let i = 0; i < gameBoard.gridSizex; i++) {\r\n            if (gameBoard.enemyGrid[i][y] instanceof _gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n                gameBoard.enemyGrid[i][y] = 'x';\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\nconst Giuseppe = new Captain(\"Giuseppe\", (gameBoard) => {\r\n    for (let i = 0; i < 9; i++) {\r\n        const randomX = Math.floor(Math.random() * gameBoard.gridSizex);\r\n        const randomY = Math.floor(Math.random() * gameBoard.gridSizey);\r\n        if (gameBoard.enemyGrid[randomX][randomY] instanceof _gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n            gameBoard.enemyGrid[randomX][randomY] = 'x';\r\n        }\r\n    }\r\n});\r\n\r\nconst Astrid = new Captain(\"Astrid\", (gameBoard, x, y) => {\r\n    for (let i = -1; i <= 1; i++) {\r\n        for (let j = -1; j <= 1; j++) {\r\n            const targetX = x + i;\r\n            const targetY = y + j;\r\n            if (targetX >= 0 && targetX < gameBoard.gridSizex && targetY >= 0 && targetY < gameBoard.gridSizey && gameBoard.enemyGrid[targetX][targetY] instanceof _gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n                gameBoard.enemyGrid[targetX][targetY] = 'x';\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\nconst Katrin = new Captain(\"Katrin\", (gameBoard, x, y) => {\r\n    for (let i = 0; i < 6; i++) {\r\n        const targetX = x + Math.floor(Math.random() * 3) - 1;\r\n        const targetY = y + Math.floor(Math.random() * 3) - 1;\r\n        if (targetX >= 0 && targetX < gameBoard.gridSizex && targetY >= 0 && targetY < gameBoard.gridSizey && gameBoard.enemyGrid[targetX][targetY] instanceof _gameModel_js__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n            gameBoard.enemyGrid[targetX][targetY] = 'x';\r\n        }\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/Model/captain.js?");

/***/ }),

/***/ "./src/Model/gameModel.js":
/*!********************************!*\
  !*** ./src/Model/gameModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   checkHit: () => (/* binding */ checkHit),\n/* harmony export */   \"default\": () => (/* binding */ GameBoard),\n/* harmony export */   enemyCheckHit: () => (/* binding */ enemyCheckHit),\n/* harmony export */   isValidPlacement: () => (/* binding */ isValidPlacement),\n/* harmony export */   placeShipOnGrid: () => (/* binding */ placeShipOnGrid),\n/* harmony export */   pushShip: () => (/* binding */ pushShip)\n/* harmony export */ });\n/* harmony import */ var _Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/messages.js */ \"./src/Controller/messages.js\");\n\r\n\r\n;\r\n\r\nclass GameBoard {\r\n  constructor(gridSizex, gridSizey) {\r\n    this.gridSizex = gridSizex;\r\n    this.gridSizey = gridSizey;\r\n    this.playerGrid = [];\r\n    this.enemyGrid = [];\r\n  }\r\n\r\n  createFieldPlayer() {\r\n    for (let i = 0; i < this.gridSizey; i++) {\r\n      const rowPlayer = [];\r\n      for (let j = 0; j < this.gridSizex; j++) {\r\n        rowPlayer.push('0');\r\n      }\r\n      this.playerGrid.push(rowPlayer);\r\n    }\r\n  }\r\n\r\n  createFieldEnemy() {\r\n    for (let i = 0; i < this.gridSizey; i++) {\r\n      const rowEnemy = [];\r\n      for (let j = 0; j < this.gridSizex; j++) {\r\n        rowEnemy.push('0');\r\n      }\r\n      this.enemyGrid.push(rowEnemy);\r\n    }\r\n  }\r\n\r\n  // In der GameBoard-Klasse\r\n  markHit(position, index, direction, isPlayer) {\r\n    const [x, y] = position;\r\n    const grid = isPlayer ? this.enemyGrid : this.playerGrid; // Bestimme das Zielgrid basierend auf dem Angreifer\r\n\r\n    if (direction === 'horizontal') {\r\n      grid[x][y + index] = 'x'; // 'x' steht für einen Treffer\r\n    } else {\r\n      grid[x + index][y] = 'x';\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\n// Die Ship Klasse\r\nclass Ship {\r\n  constructor(length, life) {\r\n    this.length = length;\r\n    this.position = [];\r\n    this.direction = '';\r\n    this.hits = new Array(length).fill(false);\r\n  }\r\n\r\n  setPosition(position) {\r\n    this.position = position;\r\n  }\r\n\r\n  setDirection(direction) {\r\n    this.direction = direction;\r\n  }\r\n\r\n  ishit(positionIndex) {\r\n    if (positionIndex >= 0 && positionIndex < this.length && !this.hits[positionIndex]) {\r\n      this.hits[positionIndex] = true;\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n\r\n\r\n  isSunk() {\r\n    if (this.life === 0) {\r\n      (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Dein Schiff is Gesunken!`);\r\n      console.log(\"gesunken\");\r\n    }\r\n    return this.hits.every(hit => hit);\r\n  }\r\n\r\n  toString() {\r\n    return this.length.toString();\r\n  }\r\n\r\n\r\n}\r\n\r\n// Funktionen für die Spiellogik\r\nconst checkHit = (x, y, gameBoard, gameController) => {\r\n  const cell = gameBoard.enemyGrid[x][y];\r\n  if (cell instanceof Ship) {\r\n    const ship = cell;\r\n    const segment = ship.direction === 'horizontal' ? y - ship.position[1] : x - ship.position[0];\r\n    if (ship.ishit(segment)) {\r\n      gameBoard.markHit(ship.position, segment, ship.direction, true);\r\n\r\n      if (ship.isSunk()) {\r\n        console.log('Schiff gesunken!');\r\n        (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Schiff is Gesunken!`);\r\n        gameController.checkGameOver();\r\n      } else {\r\n        console.log('Schiff getroffen!');\r\n        (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Schiff is getroffen!`);\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n  console.log('Kein Treffer!');\r\n  setTimeout(()=>{\r\n    (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Kein Treffer!`);\r\n  },1000);\r\n  \r\n  return false;\r\n}\r\n\r\nconst enemyCheckHit = (x, y, gameBoard, gameController) => {\r\n  const cell = gameBoard.playerGrid[x][y];\r\n  if (cell instanceof Ship) {\r\n    const ship = cell;\r\n    const segment = ship.direction === 'horizontal' ? y - ship.position[1] : x - ship.position[0];\r\n    if (ship.ishit(segment)) {\r\n      gameBoard.markHit(ship.position, segment, ship.direction, false);\r\n\r\n      if (ship.isSunk()) {\r\n        (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Dein Schiff is Gesunken!`);\r\n        console.log('PlayerSchiff gesunken!');\r\n        gameController.checkGameOver();\r\n      } else {\r\n        (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Dein Schiff wurde getroffen!`);\r\n        console.log('Player Schiff getroffen!');\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n  \r\n  setTimeout(()=>{\r\n    (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`Kein Treffer!`);\r\n  },1000);\r\n  console.log('Kein Treffer!');\r\n  return false;\r\n}\r\n\r\n\r\n\r\n\r\nconst isValidPlacement = (grid, ship) => {\r\n  const [x, y] = ship.position;\r\n  //console.log(grid,\"grid\",ship,\"ship\");\r\n  if (ship.direction === 'horizontal') {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (y + i >= grid[0].length || grid[x][y + i] !== '0') {\r\n        return false;\r\n      }\r\n    }\r\n  } else {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (x + i >= grid.length || grid[x + i][y] !== '0') {\r\n        return false;\r\n      }\r\n    }\r\n  }\r\n\r\n  return true;\r\n}\r\n\r\nconst pushShip = (grid, ships) => {\r\n  const shipSizes = [4, 3, 3, 2, 2, 2];\r\n  shipSizes.forEach(size => {\r\n    const ship = new Ship(size, size);\r\n    let placed = false;\r\n    while (!placed) {\r\n      const randomX = Math.floor(Math.random() * grid.length);\r\n      const randomY = Math.floor(Math.random() * grid[0].length);\r\n      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n      ship.setPosition([randomX, randomY]);\r\n      ship.setDirection(direction);\r\n\r\n      if (isValidPlacement(grid, ship)) {\r\n        placeShipOnGrid(grid, ship);\r\n        ships.push(ship);\r\n        placed = true;\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nconst placeShipOnGrid = (grid, ship) => {\r\n  const [x, y] = ship.position;\r\n  if (ship.direction === 'horizontal') {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      grid[x][y + i] = ship;\r\n    }\r\n  } else {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      grid[x + i][y] = ship;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/Model/gameModel.js?");

/***/ }),

/***/ "./src/View/gameView.js":
/*!******************************!*\
  !*** ./src/View/gameView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayGrid: () => (/* binding */ displayGrid)\n/* harmony export */ });\n\r\n\r\nconst displayGrid = (grid, isPlayerGrid) => {\r\n  const container = document.getElementById(isPlayerGrid ? 'player-grid' : 'enemy-grid');\r\n  container.innerHTML = '';\r\n\r\n  for (let i = 0; i < grid.length; i++) {\r\n    const row = grid[i];\r\n    const rowElement = document.createElement('div');\r\n    rowElement.classList.add('row');\r\n\r\n    for (let j = 0; j < row.length; j++) {\r\n      const cell = row[j];\r\n      const cellElement = document.createElement('div');\r\n      cellElement.classList.add('cell');\r\n\r\n      if (cell === 'x') {\r\n        cellElement.style.backgroundColor = 'red'; \r\n      } else if (isPlayerGrid && typeof cell === 'object') {\r\n        \r\n        cellElement.style.backgroundColor = 'grey'; \r\n      } else {\r\n        cellElement.style.backgroundColor = 'rgba(12, 77, 175, 0.5)';\r\n      }\r\n\r\n      cellElement.textContent = '';\r\n      cellElement.dataset.row = i.toString();\r\n      cellElement.dataset.col = j.toString();\r\n\r\n      rowElement.appendChild(cellElement);\r\n    }\r\n\r\n    container.appendChild(rowElement);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/View/gameView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Controller_gameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller/gameController.js */ \"./src/Controller/gameController.js\");\n/* harmony import */ var _Controller_messages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/messages.js */ \"./src/Controller/messages.js\");\n/* harmony import */ var _img_Firefly_Battelship_Wasser_17984_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Firefly Battelship-Wasser 17984.png */ \"./src/img/Firefly Battelship-Wasser 17984.png\");\n\r\n\r\n;\r\n\r\n\r\n\r\n\r\ndocument.getElementById('myImage').src = _img_Firefly_Battelship_Wasser_17984_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n\r\ndocument.getElementById('start-game').addEventListener('click', () => {\r\n    const playerName = document.getElementById('player-name').value;\r\n    const selectedCaptain = document.getElementById('captain-select').value;\r\n\r\n    if (playerName && selectedCaptain) {\r\n        document.getElementById('start-screen').style.display = 'none';\r\n        document.getElementById('myImage').style.display = 'none';\r\n        document.getElementById('warfieldContainer').style.display = 'flex';\r\n        document.getElementById('use-captain-ability').style.display = 'block';\r\n\r\n        \r\n\r\n        const gridSizex = 10;\r\n        const gridSizey = 10;\r\n        const gameController = new _Controller_gameController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gridSizex, gridSizey, playerName);\r\n        \r\n        gameController.init();\r\n        gameController.selectCaptain(selectedCaptain); \r\n    } else {\r\n        (0,_Controller_messages_js__WEBPACK_IMPORTED_MODULE_2__.showMessage)('Bitte gib deinen Namen und wähle einen Kapitän aus!');\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack_vorlage/./src/index.js?");

/***/ }),

/***/ "./src/img/Firefly Battelship-Wasser 17984.png":
/*!*****************************************************!*\
  !*** ./src/img/Firefly Battelship-Wasser 17984.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19ad470abe9cf6f52ac9.png\";\n\n//# sourceURL=webpack://webpack_vorlage/./src/img/Firefly_Battelship-Wasser_17984.png?");

/***/ }),

/***/ "./src/img/backgroundBattelshipMain.png":
/*!**********************************************!*\
  !*** ./src/img/backgroundBattelshipMain.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e80760885b3f3f2f67d1.png\";\n\n//# sourceURL=webpack://webpack_vorlage/./src/img/backgroundBattelshipMain.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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