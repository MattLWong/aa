var DOMNodeCollection = require("./dom_node_collection.js");

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
