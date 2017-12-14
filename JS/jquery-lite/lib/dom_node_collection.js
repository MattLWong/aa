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
      this.nodes[0].setAttribute(attribute, val);
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
}
module.exports = DOMNodeCollection;
