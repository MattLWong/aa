var DOMNodeCollection = require("./dom_node_collection.js");

window.$l = (arg) => {
  switch (typeof arg) {
    case "object":
      if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
      }
  }
};


//empty
//Remove
//attr
//addClass
//removeClass
//html
//find
//children
//parent
