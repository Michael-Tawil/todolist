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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: #fcaf98;\\n    color: black;\\n    overflow: hidden;\\n    height: 100vh;\\n    width: 100vw;\\n    margin: 0 0;\\n}\\n\\n#main {\\n\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    height: 100%;\\n\\n}\\n\\nh2 {\\n    color: #034c52;\\n    word-wrap: normal;\\n}\\n\\n#header {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: flex-start;\\n    width: 20%;\\n    height: 100%;\\n    border: 1px solid #034c52;\\n    flex: 0 0 auto;\\n}\\n\\n#ptab {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#pbody {\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-content: flex-start;\\n    flex-wrap: wrap;\\n    position: relative;\\n\\n}\\n\\n.dcard {\\n    min-width: 150px;\\n    min-height: 150px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    border-radius: 5px;\\n    margin: 15px;\\n    padding: 10px 10px;\\n    box-shadow: 5px 5px 10px -2px rgba(33, 33, 33, .3);\\n    font-size: 20px;\\n    text-align: center;\\n    font-size: 17px;\\n    background-color: #f18666;\\n    color: Black;\\n}\\n\\n.tcard {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border-bottom: 1px solid #034c52;\\n    width: 100%;\\n    margin: 5px;\\n    padding-bottom: 5px;\\n    color: #034c52;\\n    font-size: 20px;\\n    text-align: center;\\n    font-size: 17px;\\n}\\n\\n.newbuttn {\\n    position: absolute;\\n    bottom: 36px;\\n    right: 36px;\\n    width: 100px;\\n    height: 50px;\\n    background-color: #034c52;\\n    color: whitesmoke;\\n    border-radius: 5px;\\n    box-shadow: 0px 13px 50px -1px rgba(0, 0, 0, 0.28);\\n}\\n\\n.timebanner {\\n    position: absolute;\\n    bottom: 36px;\\n    left:36px;\\n    font-size: 1.25rem;\\n    color: #034c52;\\n    text-shadow: 1px 5px 10px #000000;\\n}\\n\\n.nbtnpro {\\n    width: 100%;\\n    height: 50px;\\n    background-color: #034c52;\\n    color: whitesmoke;\\n}\\n\\n.modal,.modal2 {\\n    display: none;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%) scale(0);\\n    transition: 200ms ease-in-out;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    z-index: 10;\\n    background-color: #f3744e;\\n    width: 500px;\\n    max-width: 800px;\\n}\\n\\n.modal.active,.modal2.active {\\n    transform: translate(-50%, -50%) scale(1);\\n    display: block;\\n}\\n\\n.modal-header {\\n    padding: 10px 15px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    border-bottom: 1px solid black;\\n}\\n\\n.modal-header .title {\\n    font-size: 1.25rem;\\n    font-weight: bold;\\n}\\n\\n.modal-header .close-button {\\n    cursor: pointer;\\n    border: none;\\n    outline: none;\\n    background: none;\\n    font-size: 1.25rem;\\n    font-weight: bold;\\n}\\n\\n.modal-body,\\nform {\\n    padding: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.modal-body input,\\n.modal-body select,\\n#submit-nbook {\\n    width: 250px;\\n    height: 20px;\\n    border: none;\\n    border-radius: 5px;\\n    margin: 10px;\\n    text-align: center;\\n    font-size: 20px;\\n    padding: 5px;\\n}\\n\\n.modal-body select,\\n#submit-nbook {\\n    font-size: 16px;\\n    padding: 2px;\\n}\\n\\n#overlay {\\n    display: none;\\n    position: fixed;\\n    opacity: 0;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-color: rgba(0, 0, 0, .5);\\n    pointer-events: none;\\n    transition: 200ms ease-in-out;\\n}\\n\\n#overlay.active {\\n    pointer-events: all;\\n    opacity: 1;\\n    display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pbody\": () => (/* binding */ Pbody),\n/* harmony export */   \"Ptabs\": () => (/* binding */ Ptabs),\n/* harmony export */   \"nban\": () => (/* binding */ nban),\n/* harmony export */   \"newbtn\": () => (/* binding */ newbtn),\n/* harmony export */   \"ovlay\": () => (/* binding */ ovlay),\n/* harmony export */   \"shwproj\": () => (/* binding */ shwproj),\n/* harmony export */   \"shwtasks\": () => (/* binding */ shwtasks),\n/* harmony export */   \"subtn2\": () => (/* binding */ subtn2)\n/* harmony export */ });\n/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ \"./src/worker.js\");\n\n\nconst modal2 = document.querySelector(\"#modal2\");\n\nconst subtn = document.querySelector(\"#submit-nbook\");\nsubtn.addEventListener(\"click\", _worker__WEBPACK_IMPORTED_MODULE_0__.nproject);\n\nconst subtn2 = document.querySelector(\"#submit-nbook2\");\nsubtn2.addEventListener(\"click\", _worker__WEBPACK_IMPORTED_MODULE_0__.newtsk);\n\nconst ovlay = document.querySelector(\"#overlay\");\n\nconst closeforms = document.querySelectorAll(\".close-button\");\ncloseforms.forEach(btn => btn.addEventListener(\"click\",_worker__WEBPACK_IMPORTED_MODULE_0__.closeNewp))\n\nconst Ptabs = document.querySelector(\"#ptab\");\n\nconst Pbody = document.querySelector(\"#pbody\");\n\nlet newbtn = document.createElement(\"button\");\nnewbtn.classList.add(\"newbuttn\");\nnewbtn.innerHTML = \"ADD A TASK\";\nnewbtn.addEventListener(\"click\",_worker__WEBPACK_IMPORTED_MODULE_0__.addNewp);\n\n\nlet nban = document.createElement(\"div\");\nnban.classList.add(\"timebanner\");\n\nlet shwtasks = (temp) => {\n  if(_worker__WEBPACK_IMPORTED_MODULE_0__.projects[temp].tasks.length == 0){\n    newbtn.dataset.info = temp;\n    Pbody.appendChild(newbtn);\n    nban.innerHTML = \"Project Due Date: \" + _worker__WEBPACK_IMPORTED_MODULE_0__.projects[temp].ddate;\n    Pbody.appendChild(nban);\n  }else{\n  _worker__WEBPACK_IMPORTED_MODULE_0__.projects[temp].tasks.forEach((el,i) => {\n    let card = document.createElement(\"div\");\n    card.innerHTML = `${el.name} ${el.ddate} ${el.desc} ${el.priority}`;\n    card.classList.add(\"dcard\");\n    let delcard = document.createElement(\"button\");\n    delcard.addEventListener(\"click\",_worker__WEBPACK_IMPORTED_MODULE_0__.dtask)\n    delcard.innerHTML = \"Delete\"\n    delcard.dataset.dinfo = i;\n    card.dataset.cnfo = i;\n    card.addEventListener(\"dblclick\",_worker__WEBPACK_IMPORTED_MODULE_0__.addNewp)\n    delcard.classList.add(\"delcards\");\n    Pbody.appendChild(card);\n    card.appendChild(delcard);\n    newbtn.dataset.info = temp;\n    Pbody.appendChild(newbtn);\n    nban.innerHTML = \"Project Due Date: \" + _worker__WEBPACK_IMPORTED_MODULE_0__.projects[temp].ddate;\n    Pbody.appendChild(nban);\n    if (el.priority == \"1\"){\n      card.style.backgroundColor = \"#ff4545\"\n    }\n  });\n\n}}\nlet tabclick = (e) => {\n  let inof = e.target.dataset.info;\n  Pbody.innerHTML = \"\";\n  shwtasks(inof);\n};\nlet shwproj = () => {\n  Ptabs.innerHTML = \"\";\n\n  let npro = document.createElement(\"button\");\n  npro.innerHTML = \"ADD A PROJECT\";\n  npro.classList.add(\"nbtnpro\");\n  npro.addEventListener(\"click\", _worker__WEBPACK_IMPORTED_MODULE_0__.addNewp);\n  Ptabs.appendChild(npro);\n\n  _worker__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((el, i) => {\n    let tab = document.createElement(\"div\");\n    tab.addEventListener(\"click\", tabclick);\n    tab.addEventListener(\"dblclick\",function(e){\n      _worker__WEBPACK_IMPORTED_MODULE_0__.projects.splice(e.target.dataset.info,1)\n      shwproj()\n      Pbody.innerHTML = \"Project DELETED, Please choose another\"\n    })\n    tab.innerText = el.name;\n    tab.dataset.info = i;\n\n    tab.classList.add(\"tcard\");\n    Ptabs.appendChild(tab);\n  });\n};\n\nlet shwpri = () => {\n  _worker__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(pro => pro.tasks.forEach(el => {\n    if (el.priority == \"1\"){\n\n    let card = document.createElement(\"div\");\n    card.innerHTML = `${el.name} ${el.ddate} ${el.desc} ${el.priority}`;\n    card.classList.add(\"dcard\");\n    card.style.backgroundColor = \"#ff4545\";\n   \n    Pbody.appendChild(card);\n    } \n  }))\n}\n\nshwpri();\nshwproj()\n\n\n\n//# sourceURL=webpack://todolist/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker */ \"./src/worker.js\");\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\nclass Project {\n  constructor(name, ddate) {\n    this.name = name;\n    this.ddate = ddate;\n    this.tasks = [];\n  }\n  GetName = () => this.name;\n  SetName = (nname) => (this.name = nname);\n\n  AddTask = (name, ddate, desc, priority) => {\n    let newtask = new _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, ddate, desc, priority);\n    this.tasks.push(newtask);\n  };\n  RemoveTask = (temp) => {\n    \n    this.tasks.splice(temp, 1);\n  };\n  SetTN = (cinfo, newn) => {\n  \n    this.tasks[cinfo].name = newn;\n  };\n  SetTD = (cinfo, ndd) => {\n    \n    this.tasks[cinfo].ddate = ndd;\n  };\n  SetTDesc = (cinfo, ndesc) => {\n    \n    this.tasks[cinfo].desc = ndesc;\n  };\n  \n  SetTP = (cinfo, pri) => {\n    \n    this.tasks[cinfo].priority = pri;\n  };\n}\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, ddate, desc, priority) {\n    this.name = name;\n    this.ddate = ddate;\n    this.desc = desc;\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

/***/ }),

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewp\": () => (/* binding */ addNewp),\n/* harmony export */   \"closeNewp\": () => (/* binding */ closeNewp),\n/* harmony export */   \"dtask\": () => (/* binding */ dtask),\n/* harmony export */   \"edittask\": () => (/* binding */ edittask),\n/* harmony export */   \"newtsk\": () => (/* binding */ newtsk),\n/* harmony export */   \"nproject\": () => (/* binding */ nproject),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n\nlet projects = [];\n\nif (!localStorage.getItem(\"projarr\")){\n  projects = [];\n  let G = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"General\", \"24/4/25\");\n  let N = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"new project\", \"23/4/55\");\n\n  G.AddTask(\"TASK1\", \"23/4/23\", \"dosomething1\", \"1\");\n  G.AddTask(\"TASK2\", \"24/4/23\", \"dosomething1\", \"2\");\n  G.AddTask(\"TASK3\", \"25/4/23\", \"dosomething1\", \"2\");\n  G.AddTask(\"TASK4\", \"26/4/23\", \"dosomething1\", \"3\");\n  G.AddTask(\"TASK5\", \"27/4/23\", \"dosomething1\", \"4\");\n  G.AddTask(\"TASK6\", \"28/4/23\", \"dosomething1\", \"5\");\n  G.AddTask(\"TASK7\", \"29/4/23\", \"dosomething1\", \"61\");\n  G.AddTask(\"TASK8\", \"30/4/23\", \"dosomething1\", \"1\");\n  G.AddTask(\"TASK9\", \"31/4/23\", \"dosomething1\", \"5\");\n  G.AddTask(\"TASK10\", \"01/4/23\", \"dosomething1\", \"5\");\n  G.AddTask(\"TASK11\", \"02/4/23\", \"dosomething1\", \"5\");\n  G.AddTask(\"TASK12\", \"03/4/23\", \"dosomething1\", \"1\");\n  N.AddTask(\"TASK 3\", \"25/5/23\", \"dosomething3\", \"3\");\n  N.AddTask(\"Task 4\", \"29/5/23\", \"dosomething4\", \"4\");\n  projects.push(G);\n  projects.push(N);\n}else{\n  projects = localStorage.getItem(\"projarr\");\n}\n\n\n\n\n\nlet addNewp = (e) => {\n \n\n  if (e.target.classList.value === \"nbtnpro\") {\n    modal.classList.add(\"active\");\n    _UI__WEBPACK_IMPORTED_MODULE_2__.ovlay.classList.add(\"active\");\n  } else if (e.target.classList.value === \"newbuttn\") {\n    modal2.classList.add(\"active\");\n    _UI__WEBPACK_IMPORTED_MODULE_2__.ovlay.classList.add(\"active\");\n  }else if (e.target.classList.value == \"dcard\"){\n    modal2.classList.add(\"active\");\n    _UI__WEBPACK_IMPORTED_MODULE_2__.ovlay.classList.add(\"active\");\n    _UI__WEBPACK_IMPORTED_MODULE_2__.subtn2.dataset.cnfo = e.target.dataset.cnfo;\n    _UI__WEBPACK_IMPORTED_MODULE_2__.subtn2.removeEventListener(\"click\",newtsk)\n    _UI__WEBPACK_IMPORTED_MODULE_2__.subtn2.addEventListener(\"click\",edittask)\n  }\n};\n\nlet closeNewp = () => {\n  modal.classList.remove(\"active\");\n  modal2.classList.remove(\"active\");\n  _UI__WEBPACK_IMPORTED_MODULE_2__.ovlay.classList.remove(\"active\");\n  document.querySelector(\"form\").reset();\n  _UI__WEBPACK_IMPORTED_MODULE_2__.subtn2.addEventListener(\"click\",newtsk)\n  _UI__WEBPACK_IMPORTED_MODULE_2__.subtn2.removeEventListener(\"click\",edittask)\n};\n\nlet nproject = (e) => {\n \n  e.preventDefault();\n  let title = document.querySelector(\"#projecttitle\").value;\n  let dtate = document.querySelector(\"#projectdate\").value;\n  projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, dtate));\n  closeNewp();\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.shwproj)();\n};\n\nlet newtsk = (e) => {\n  e.preventDefault();\n  let temp = document.querySelector(\".newbuttn\").dataset.info;\n  console.log(temp)\n  let tname = document.querySelector(\"#tasktitle\").value;\n  let tddate = document.querySelector(\"#taskdate\").value;\n  let tdesc = document.querySelector(\"#taskdesc\").value;\n  let tpriority = document.querySelector(\"#taskPriority\").value;\n  projects[temp].AddTask(tname,tddate,tdesc,tpriority);\n  _UI__WEBPACK_IMPORTED_MODULE_2__.Pbody.innerHTML = \"\";\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.shwtasks)(temp)\n  closeNewp();\n}\nlet dtask = (e) =>{\n  let tempy = document.querySelector(\".newbuttn\").dataset.info;\n  console.log(e)\n  projects[tempy].RemoveTask(e.target.dataset.dinfo);\n  console.log(e)\n  _UI__WEBPACK_IMPORTED_MODULE_2__.Pbody.innerHTML = \"\";\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.shwtasks)(tempy)\n}\n\nlet edittask = (e) =>{\n\n  e.preventDefault();\n  let temp = document.querySelector(\".newbuttn\").dataset.info;\n  let tempe = e.target.dataset.cnfo;\n  console.log(tempe)\n  let tname = document.querySelector(\"#tasktitle\").value;\n  let tddate = document.querySelector(\"#taskdate\").value;\n  let tdesc = document.querySelector(\"#taskdesc\").value;\n  let tpriority = document.querySelector(\"#taskPriority\").value;\n  projects[temp].SetTN(tempe,tname);\n  projects[temp].SetTD(tempe,tddate);\n  projects[temp].SetTDesc(tempe,tdesc);\n  projects[temp].SetTP(tempe,tpriority);\n  _UI__WEBPACK_IMPORTED_MODULE_2__.Pbody.innerHTML = \"\";\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.shwtasks)(temp)\n  closeNewp();\n\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/worker.js?");

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