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

var DOMNodeCollection = __webpack_require__(1);

let _docReadyCallbacks = [];
let _docReady = false;

window.$l = (arg) => {
  let cbs = [];
  switch (typeof arg) {
    case "object":
      if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
      } else {
        alert('this is not a valid HTML element');
      }
      break;
    case 'function':
      return registerDocReadyCallback(arg);
    case 'string':
      return getNodesFromDom(arg);
  }
};

$l.extend = (base, ...otherObjs) => {
  let finalObj = Object.assign({}, base);
  otherObjs.forEach(obj => {
    let currentKeys = Object.keys(finalObj);
    Object.keys(obj).forEach(key => {
      finalObj[key] = obj[key];
    });
  });
  return finalObj;
};

$l.ajax = (options) => {
  const request = new XMLHttpRequest();
  const defaultOptions = {
    method: 'GET',
    url: '',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    error: function(err) {},
    success: function(resp) {},
    data: {},
  };
  options = $l.extend(defaultOptions, options);
  options.method = options.method.toUpperCase();
  if (options.method === "GET") {
    options.url += `?${toQueryString(options.data)}`;
  }
  request.open(options.method, options.url, true);
  request.onload = (e) => {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  };
  request.send(JSON.stringify(options.data));
};

const toQueryString = (obj) => {
  let result = "";
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result += `${prop}=${obj[prop]}&`;
    }
  }
  return result.substring(0, result.length-1);
};

const registerDocReadyCallback = (fn) => {
  if (!_docReady) {
    _docReadyCallbacks.push(fn);
  } else {
    fn();
  }
};

const getNodesFromDOM = (string) => {
  let nodes = document.querySelectorAll(string);
  const nodesArray = Array.from(nodes);
  return new DOMNodeCollection(nodesArray);
};

document.addEventListener('DOMContentLoaded', function() {
  _docReady = true;
  _docReadyCallbacks.forEach(func => func());
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  html(string) {
    if (typeof string === 'string') {
      this.each((node) => {
        node.innerHTML = string;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(children) {
    if (this.nodes.length === 0) return;

    if (typeof children === 'object' &&
      !(children instanceof DOMNodeCollection)) {
        children = $l(children);
    }

    if (children instanceof DOMNodeCollection) {
      this.each((node) => {
        children.each((childNode) => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    } else if (typeof children === "string") {
      this.each((node) => {
        node.innerHTML += children;
      });
    }
  }

  attr(attribute, val) {
    if (val) {
      this.each(node => node.setAttribute(attribute, val));
    } else {
      return this.nodes[0].getAttribute(attribute);
    }
  }

  addClass(className) {
    this.each(node => node.classList.add(className));
  }

  removeClass(oldClass) {
    this.each(node => node.classList.remove(oldClass));
  }

  toggleClass(toggleClass) {
    this.each(node => node.classList.toggle(toggleClass));
  }

  children() {
    let childNodes = [];
    this.each(node => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });
    return new DOMNodeCollection(childNodes);
  }

  parents() {
    let parents = [];
    this.each(({ parentNode }) => {
      if (!parentNode.visited) {
        parents.push(parentNode);
        parentNode.visited = true; //adding on a new property
      }
    });

    parents.forEach((node) => {
      node.visited = false;
    });
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let foundNodes = [];
    this.each(node => {
      const selectedNodes = node.querySelectorAll(selector);
      foundNodes = foundNodes.concat(Array.from(selectedNodes));
    });
    return new DOMNodeCollection(foundNodes);
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }

  on(type, fn) {
    this.each(node => {
      node.addEventListener(type, fn);
      const eventKey = `jqliteEvents-${type}`;
      if (typeof node[eventKey] === 'undefined') {
        node[eventKey] = [];
      }
      node[eventKey].push(fn);
    });
  }

  off(eventName) {
    this.each((node) => {
      const eventKey = `jqliteEvents-${eventName}`;
      if (node[eventKey]) {
        node[eventKey].forEach((callback) => {
          node.removeEventListener(eventName, callback);
        });
      }
      node[eventKey] = [];
    });
  }
}
module.exports = DOMNodeCollection;


/***/ })
/******/ ]);
//# sourceMappingURL=jquery_lite.js.map