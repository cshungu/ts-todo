/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Landscape phones and down */\n/* Landscape phone to portait tablet */\n/* Portrait table to landscape and desktop */\n/* Large desktop */\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n  margin: inherit;\n  padding: inherit;\n}\n\n:root {\n  --primary:#0984e3;\n  --primary-light: #74b9ff;\n  --secondary: #00b894;\n  --secondary-light: #55efc4;\n  --error: #d63031;\n  --error-light: #ff7675;\n  --accent:#2c3e50;\n  --dark: #3d3d3d;\n  --divider:#ecf0f1;\n  --hint: #95a5a6;\n  --linear-gradient: linear-gradient(-20deg, #d0b782 20%, #74b9ff 80%);\n  --light: white;\n  --font-family: \"Mulish\", sans-serif;\n  --box-shadow: 0 1px 2px rgba(60, 64, 67, 0.1), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\nbody {\n  font-size: 1.6rem;\n  margin: 0;\n  padding: 0;\n  font-family: var(--font-family);\n  color: var(--dark);\n}\n\n.wrapper {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 5rem 1fr 5rem;\n  grid-template-areas: \"hd hd hd\" \"mn mn mn\" \"ft ft ft\";\n  background-color: var(--divider);\n}\n\nheader {\n  grid-area: hd;\n  padding: 0;\n}\n\nnav {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  color: var(--light);\n  background: var(--linear-gradient);\n  box-shadow: var(--box-shadow);\n}\nnav .nav-brand {\n  color: var(--light);\n  font-size: 2rem;\n  font-weight: 700;\n}\nnav a {\n  text-decoration: none;\n}\n\nmain {\n  grid-area: mn;\n  padding: 1rem;\n}\n\nfooter {\n  grid-area: ft;\n  background: var(--linear-gradient);\n  padding: 1rem;\n  text-align: center;\n  color: var(--light);\n}\n\n.app {\n  width: 60rem;\n  margin: 0 auto;\n  box-shadow: var(--box-shadow);\n  background: var(--linear-gradient);\n  padding: 0.2rem 0.4rem;\n}\n.app h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.app form {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  margin-bottom: 0.2rem;\n}\n.app form input {\n  flex: 1;\n  margin-right: 15px;\n  padding: 1rem !important;\n  outline: 0;\n  border: 1px solid #ddd;\n  border-radius: 0.2rem;\n}\n.app form button {\n  border: 0;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  outline: 0;\n  background: var(--primary-light);\n  color: var(--light);\n  padding: 1rem !important;\n}\n.app ul.todolist {\n  list-style: none;\n  padding: 0;\n}\n.app ul.todolist li {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0.2rem 0.3rem 0.2rem;\n  margin: 0 0.5rem;\n  border-top: 0.1rem solid var(--hint);\n  border-bottom: 0.1rem solid var(--hint);\n  background-color: #dfe4ea;\n  opacity: 0.6;\n  margin-bottom: 0.2rem;\n}\n.app ul.todolist li .item--left {\n  flex: 1;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-start;\n}\n.app ul.todolist li .item--left label {\n  flex: 1;\n  color: var(--accent);\n}\n.app ul.todolist li .item--left input[type=text] {\n  flex: 1;\n  padding: 0.8rem !important;\n  background-color: #ffffff;\n  outline: 0;\n  border: 1px solid var(--hint);\n  border-radius: 0.2rem;\n}\n.app ul.todolist li .item--left input[type=checkbox]:checked + label {\n  text-decoration-line: line-through;\n}\n.app ul.todolist li .item--right button {\n  border: none;\n  background-color: unset;\n  color: var(--linear-gradient);\n  cursor: pointer;\n}\n.app ul.todolist li .item--right button.done {\n  cursor: not-allowed;\n  color: var(--divider);\n}\n.app div.todotasks {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  margin: 0.5rem 0.2rem;\n}\n.app div.todotasks .tasks--left {\n  flex: 1 1 1rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.app div.todotasks .tasks--left span {\n  padding: 0.6rem;\n  background-color: #d0b782;\n  color: var(--accent);\n  padding: 0.7rem;\n}\n.app div.todotasks .tasks--right {\n  flex: 1 1 1rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.app div.todotasks .tasks--right button {\n  background-color: var(--primary-light);\n  border: 0;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  outline: 0;\n  padding: 1rem;\n  color: var(--light);\n}", "",{"version":3,"sources":["webpack://./src/sass/_mixin.scss","webpack://./src/sass/app.scss"],"names":[],"mappings":"AA+BA,8BAAA;AAMA,sCAAA;AAMA,4CAAA;AAMA,kBAAA;AC7CA;EACI,sBAAA;EACA,gBAAA;AACJ;;AACA;EACI,mBAAA;EACA,eAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,iBAAA;EACA,wBAAA;EACA,oBAAA;EACA,0BAAA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,oEAAA;EACA,cAAA;EACA,mCAAA;EACA,mFAAA;AAGJ;;AADA;EACI,iBAAA;EACA,SAAA;EACA,UAAA;EACA,+BAAA;EACA,kBAAA;AAIJ;;AAFA;EACI,aAAA;EACA,aAAA;EACA,kCAAA;EACA,iCAAA;EACA,qDACI;EAIJ,gCAAA;AACJ;;AACA;EACI,aAAA;EACA,UAAA;AAEJ;;AAAA;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;EACA,mBAAA;EACA,kCAAA;EACA,6BAAA;AAGJ;AAFI;EACI,mBAAA;EACA,eAAA;EACA,gBAAA;AAIR;AAFI;EACI,qBAAA;AAIR;;AADA;EACI,aAAA;EACA,aAAA;AAIJ;;AAFA;EACI,aAAA;EACA,kCAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AAKJ;;AAHA;EACI,YAAA;EACA,cAAA;EACA,6BAAA;EACA,kCAAA;EACA,sBAAA;AAMJ;AALI;EACI,kBAAA;EACA,yBAAA;EACA,gBAAA;AAOR;AALI;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,qBAAA;AAOR;AANQ;EACI,OAAA;EACA,kBAAA;EACA,wBAAA;EACA,UAAA;EACA,sBAAA;EACA,qBAAA;AAQZ;AANQ;EACI,SAAA;EACA,qBAAA;EACA,eAAA;EACA,UAAA;EACA,gCAAA;EACA,mBAAA;EACA,wBAAA;AAQZ;AALI;EACI,gBAAA;EACA,UAAA;AAOR;AANQ;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;EACA,oCAAA;EACA,gBAAA;EACA,oCAAA;EACA,uCAAA;EACA,yBAAA;EACA,YAAA;EACA,qBAAA;AAQZ;AANY;EACI,OAAA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,2BAAA;AAQhB;AAPgB;EACI,OAAA;EACA,oBAAA;AASpB;AAPgB;EACI,OAAA;EACA,0BAAA;EACA,yBAAA;EACA,UAAA;EACA,6BAAA;EACA,qBAAA;AASpB;AAPgB;EACI,kCAAA;AASpB;AALgB;EACI,YAAA;EACA,uBAAA;EACA,6BAAA;EACA,eAAA;AAOpB;AANoB;EACI,mBAAA;EACA,qBAAA;AAQxB;AAFI;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,qBAAA;AAIR;AAHQ;EACI,cAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;AAKZ;AAJY;EACI,eAAA;EACA,yBAAA;EACA,oBAAA;EACA,eAAA;AAMhB;AAHQ;EACI,cAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAKZ;AAJY;EACG,sCAAA;EACA,SAAA;EACA,qBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;AAMf","sourcesContent":["@mixin --box-sizing ($property) {\r\n    -webkit-box-sizing: $property;\r\n       -moz-box-sizing: $property;\r\n            box-sizing: $property;\r\n}\r\n@mixin --flex () {\r\n    display: flex;\r\n    display: -webkit-box;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n}\r\n@mixin --flex-flow ($property) {\r\n    -webkit-flex-flow: $property;\r\n        -ms-flex-flow: $property;\r\n            flex-flow: $property; \r\n}\r\n@mixin --box-shadow ($property) {\r\n    -webkit-box-shadow: $property;\r\n       -moz-box-shadow: $property;\r\n            box-shadow: $property;\r\n}\r\n@mixin --transform ($property) {\r\n    -webkit-transform: $property; /* Safari et Chrome */\r\n       -moz-transform: $property; /* Firefox */\r\n        -ms-transform: $property; /* Internet Explorer */\r\n         -o-transform: $property; /* Opera */\r\n            transform: $property;\r\n}\r\n\r\n\r\n/* Landscape phones and down */\r\n@mixin xs {\r\n    @media (max-width: 480px) {\r\n        @content;\r\n    }\r\n}\r\n/* Landscape phone to portait tablet */\r\n@mixin sm {\r\n    @media (max-width: 767px) {\r\n        @content;\r\n    }\r\n}\r\n/* Portrait table to landscape and desktop */\r\n@mixin md {\r\n    @media (min-width: 768px)  and (max-width: 979px) {\r\n        @content;\r\n    }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n    @media (min-width: 1200px) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin ex {\r\n    @media (min-width: 48em) {\r\n        @content;\r\n    }\r\n}","\r\n@use './mixin' as *;\r\n@use 'variables';\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    font-size: 62.5%;\r\n}\r\n*, *::after, *::before {\r\n    box-sizing: inherit;\r\n    margin: inherit;\r\n    padding: inherit;\r\n}\r\n:root {\r\n    --primary:#0984e3;\r\n    --primary-light: #74b9ff;\r\n    --secondary: #00b894;\r\n    --secondary-light: #55efc4;\r\n    --error: #d63031;\r\n    --error-light: #ff7675;\r\n    --accent:#2c3e50;\r\n    --dark: #3d3d3d;\r\n    --divider:#ecf0f1;\r\n    --hint: #95a5a6;\r\n    --linear-gradient: linear-gradient(-20deg, #d0b782 20%, #74b9ff 80%);\r\n    --light: white;\r\n    --font-family: 'Mulish', sans-serif;\r\n    --box-shadow: 0 1px 2px rgba(60, 64, 67, 0.1), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\r\n}\r\nbody {\r\n    font-size: 1.6rem;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: var(--font-family);\r\n    color: var(--dark);\r\n}\r\n.wrapper{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 5rem 1fr 5rem;\r\n    grid-template-areas: \r\n        \"hd hd hd\"\r\n        \"mn mn mn\"\r\n        \"ft ft ft\"\r\n    ;\r\n    background-color: var(--divider);\r\n}\r\nheader { \r\n    grid-area: hd; \r\n    padding: 0;\r\n}\r\nnav {\r\n    display: flex;\r\n    flex-flow:row nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    color: var(--light);\r\n    background: var(--linear-gradient);\r\n    box-shadow: var(--box-shadow);\r\n    .nav-brand {\r\n        color: var(--light);\r\n        font-size: 2rem;\r\n        font-weight: 700;\r\n    }\r\n    a {\r\n        text-decoration: none;\r\n    }\r\n}\r\nmain { \r\n    grid-area: mn;\r\n    padding: 1rem;\r\n}\r\nfooter { \r\n    grid-area: ft; \r\n    background: var(--linear-gradient);\r\n    padding: 1rem;\r\n    text-align: center;\r\n    color: var(--light);\r\n}\r\n.app {\r\n    width: 60rem;\r\n    margin: 0 auto;\r\n    box-shadow: var(--box-shadow);\r\n    background: var(--linear-gradient);\r\n    padding: 0.2rem 0.4rem;\r\n    h2 {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n    }\r\n    form {\r\n        display: flex;\r\n        flex-flow: row nowrap;\r\n        justify-content: space-between;\r\n        margin-bottom: 0.2rem;\r\n        input {\r\n            flex: 1;\r\n            margin-right: 15px;\r\n            padding: 1rem !important;\r\n            outline: 0;\r\n            border: 1px solid #ddd;\r\n            border-radius: 0.2rem;\r\n        }\r\n        button {\r\n            border: 0;\r\n            border-radius: 0.2rem;\r\n            cursor: pointer;\r\n            outline: 0;\r\n            background: var(--primary-light);\r\n            color: var(--light);\r\n            padding: 1rem !important;\r\n        }\r\n    }\r\n    ul.todolist {\r\n        list-style: none;\r\n        padding: 0;\r\n        li {\r\n            display: flex;\r\n            flex-flow: row nowrap;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: .3rem .2rem .3rem .2rem;\r\n            margin: 0 0.5rem;\r\n            border-top: .1rem solid var(--hint);\r\n            border-bottom:  .1rem solid var(--hint);\r\n            background-color: #dfe4ea;\r\n            opacity: 0.6;\r\n            margin-bottom: 0.2rem;\r\n            \r\n            .item--left {\r\n                flex: 1;\r\n                display: flex;\r\n                flex-flow: row nowrap;\r\n                align-items: center;\r\n                justify-content: flex-start;\r\n                label {\r\n                    flex: 1;\r\n                    color: var(--accent);\r\n                }\r\n                input[type=\"text\"] {\r\n                    flex: 1;\r\n                    padding: 0.8rem !important;\r\n                    background-color: #ffffff;\r\n                    outline: 0;\r\n                    border: 1px solid var(--hint);\r\n                    border-radius: 0.2rem;\r\n                }\r\n                input[type=\"checkbox\"]:checked + label {\r\n                    text-decoration-line: line-through;\r\n                } \r\n            }\r\n            .item--right {\r\n                button {\r\n                    border: none;\r\n                    background-color: unset;\r\n                    color: var(--linear-gradient);\r\n                    cursor: pointer;\r\n                    &.done {\r\n                        cursor: not-allowed;\r\n                        color: var(--divider);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    div.todotasks {\r\n        display: flex;\r\n        flex-flow: row nowrap;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        padding: 0;\r\n        margin: 0.5rem 0.2rem;\r\n        .tasks--left {\r\n            flex: 1 1 1rem;\r\n            display: flex;\r\n            justify-content: flex-start;\r\n            align-items: center;\r\n            span {\r\n                padding: 0.6rem;\r\n                background-color: #d0b782;\r\n                color: var(--accent);\r\n                padding: 0.7rem;\r\n            }\r\n        }\r\n        .tasks--right {\r\n            flex: 1 1 1rem;\r\n            display: flex;\r\n            justify-content: flex-end;\r\n            align-items: center;\r\n            button {\r\n               background-color: var(--primary-light);\r\n               border: 0;\r\n               border-radius: 0.2rem;\r\n               cursor: pointer;\r\n               outline: 0;\r\n               padding: 1rem;\r\n               color: var(--light);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
    * @description      :
    * @author           : christian
    * @group            :
    * @created          : 07/10/2021 - 21:07:52
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : christian
    * - Modification    :
**/
__webpack_require__(/*! ./sass/app.scss */ "./src/sass/app.scss");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map