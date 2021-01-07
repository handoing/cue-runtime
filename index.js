import _render from './src/render';
import { _creatElement, _createText, _string, _if } from './src/vNode/index';

class Cue {
  constructor({
    script,
    css,
    tpl,
    render
  }) {
    this.render = render;
    this._ctx = this.initContext(script);
    this.vNode = this.render(this._ctx);
    this._ctx.created && this._ctx.created();
  }

  initContext(instance) {
    const vm = this;
    instance.setData = function(data) {
      this.data = {
        ...this.data,
        ...data
      }
      const vNode = vm.render(this);
      console.log('new node: ', vNode);
      console.log('old node: ', vm.vNode);

      // TODO
      // var patches = diff(vm.vNode, vNode);
      // vm.root = patch(vm.root, patches);
      // this.vNode = vNode;
      
      vm.clearRoot();
      _render(vNode, vm.root);
      vm._ctx.updated && this._ctx.updated();
    }
    return instance;
  }

  mount(root) {
    this.root = root;
    _render(this.vNode, this.root);
    this._ctx.mounted && this._ctx.mounted();
  }

  clearRoot() {
    const container = this.root;
    const childNodes = container.childNodes; 
    for (let i = 0; i < childNodes.length; i++) { 
      container.removeChild(childNodes[i]); 
    }
  }
}

export {
  Cue,
  _creatElement,
  _createText,
  _string,
  _if
};