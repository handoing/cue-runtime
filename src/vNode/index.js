import { isString } from '../utils';

export function _creatElement(tag, attrs, children) {
  return {
    tag,
    attrs,
    children
  }
}

export function _createText(text) {
  return text
}

export function _string(text) {
  return text
}

export function _if(check, f1, f2) {
  return check ? f1() : f2();
}

export function _withDirectives(vNode, directives) {
  directives.map(([ directive, directiveValue ]) => {
    if (!isString(directive)) {
      return directive(vNode, directiveValue)
    }
    return;
  })
  return vNode;
}

export function _vShow(vNode, value) {
  vNode.attrs.style = `display: ${value === 'true' ? 'block' : 'none'};`
}

export function _vHide(vNode, value) {
  vNode.attrs.style = `display: ${value === 'true' ? 'none' : 'block'};`
}