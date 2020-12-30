import create from './src/create';
import render from './src/render';

class Cue {
  constructor(instance) {
    this._ctx = this.initContext(instance);
    this.vNode = create(instance);
  }

  initContext(instance) {
    const vm = this;
    instance.setData = function(data) {
      this.data = {
        ...this.data,
        ...data
      }
      const vNode = create(this);
      console.log('new node: ', vNode);
      console.log('old node: ', vm.vNode);

      // TODO
      // var patches = diff(vm.vNode, vNode);
      // vm.root = patch(vm.root, patches);
      // this.vNode = vNode;
      
      vm.clearRoot();
      render(vNode, vm.root);
    }
    return instance;
  }

  mount(root) {
    this.root = root;
    render(this.vNode, this.root);
  }

  clearRoot() {
    const container = this.root;
    const childNodes = container.childNodes; 
    for (let i = 0; i < childNodes.length; i++) { 
      container.removeChild(childNodes[i]); 
    }
  }
}

export default Cue;