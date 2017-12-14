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
