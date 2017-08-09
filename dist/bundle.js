/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Walle {

  constructor() {
    this.dom = document.querySelector('#app');
    this.data = window.data;
    this.regex = /\{\{.+\}\}/;
    this.render();
  }

  render() {
    // 遍历属性s
    for (var i = 0; i < this.dom.attributes.length; i++) {
      var attr = this.dom.attributes[i];

      if (this.regex.test(attr.value)) {
        attr.value = this.attrMapValue(attr.value, this.data);
      }
    }

    // 遍历文本节点
    if (this.regex.test(this.dom.text.trim())) {
      this.dom.text = this.attrMapValue(this.dom.text, this.data);
    }

    // v-if v-show v-for ......
  }

  attrMapValue() {
    var res = "__none__";
    var keys = str.replace("{{", '').replace('}}', '').trim().split('.');
    keys.forEach(key => {
      key = key.trim();
      if (res !== '__none__') {
        res = res[key]
      } else {
        res = window[key]
      }
    })

    return res;
  }

}

var walle = new Walle();


// window.walle = {
//     dom: document.querySelector('#app'),
//     data: window.data,
//     regex: /\{\{.+\}\}/,
//     render: function () {
//       // 遍历属性s
//       for (var i = 0; i < this.dom.attributes.length; i++) {
//         var attr = this.dom.attributes[i];
//
//         if (this.regex.test(attr.value)) {
//           attr.value = this.attrMapValue(attr.value, this.data);
//         }
//       }
//
//       // 遍历文本节点
//       if (this.regex.test(this.dom.text.trim())) {
//         this.dom.text = this.attrMapValue(this.dom.text, this.data);
//       }
//
//       // v-if v-show v-for ......
//
//     },
//     attrMapValue: function (str, data) {
//       var res = "__none__";
//       var keys = str.replace("{{", '').replace('}}', '').trim().split('.');
//       keys.forEach(key => {
//         key = key.trim();
//         if (res !== '__none__') {
//           res = res[key]
//         } else {
//           res = window[key]
//         }
//       })
//
//       return res;
//     }
// }
//
// // setTimeout(walle.render, 1000)
// walle.render.call(walle);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map