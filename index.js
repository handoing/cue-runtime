import _render from './src/render';
import _diff from './src/diff';
import _patch from './src/patch';
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
    instance.setData = (data) => {
      const _ctx = this._ctx;
      this.data = Object.assign(_ctx.data, data)
      const vNode = this.render(this);
      console.log('new node: ', vNode);
      console.log('old node: ', this.vNode);

      var patches = _diff(this.vNode, vNode);
      console.log(patches)
      _patch(this.root, patches);
      this.vNode = vNode;
      
      this._ctx.updated && this._ctx.updated();
    }
    return instance;
  }

  mount(root) {
    this.root = root;
    _render(this.vNode, this.root);
    this._ctx.mounted && this._ctx.mounted();
  }

  destroy() {
    this.root.innerHTML = '';
    this._ctx.destroyed && this._ctx.destroyed();
  }
}

function createApp(options) {
  return new Cue(options);
}

export {
  Cue,
  createApp
};
export * from './src/vNode/index';