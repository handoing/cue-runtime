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