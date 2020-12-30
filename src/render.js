import { setAttribute } from './utils';

function render(vNode, container) {
  return container.appendChild(_render(vNode));
};

function _render(vNode) {

  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const dom = document.createElement(vNode.tag);

  if (vNode.attrs) {
    Object.keys(vNode.attrs).forEach(key => {
      const value = vNode.attrs[key];
      if (key.indexOf('on-') !== -1) {
        dom.addEventListener(key.slice(3), value, false);
      } else {
        setAttribute(dom, key, value);
      }
    });
  }

  if (vNode.children) {
    vNode.children.forEach(child => render(child, dom));
  }

  return dom;
};

export default render;