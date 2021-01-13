const {
  Cue,
  _creatElement,
  _createText,
  _string,
  _if,
  _for,
  _withDirectives,
  _vShow,
  _vHide
} = C;

function create(_ctx) { return  _creatElement('div', { "class": "main", }, [  _creatElement('img', { "class": "image","on-click": function($event) { _ctx.onChange($event) },"src": "" + _string(_ctx.data.img) + "", }, [  ]), _creatElement('div', { "class": "toggle", }, [ _createText("toggle " + _string(_ctx.data.toggle) + "") ]), _withDirectives(_creatElement('div', {  }, [ _createText("ooooo") ]), [ [_vShow, "" + _string(_ctx.data.toggle) + ""],["c-abc", "" + _string(_ctx.data.isGo) + ""], ]),_for(_ctx.data.nnnn, function(item, item_index) { return [  _creatElement('p', {  }, [ _createText("------") ]) ] }) ]) }

const vm = new Cue({
  render: create,
  script: {
    data: {
      toggle: true,
      img: 'https://hao8.qhimg.com/t01c413c779df7eeecb.jpg',
      nnnn: new Array(10).fill('')
    },
    created() {
      console.log('created');
    },
    updated() {
      console.log('updated');
    },
    mounted() {
      console.log('mounted');
    },
    destroyed() {
      console.log('destroyed');
    },
    onChange(e) {
      this.setData({
        toggle: !this.data.toggle
      })
    }
  }
});

vm.mount(document.querySelector('#app'))
setTimeout(function() {
  vm.destroy()
}, 20 * 1000);