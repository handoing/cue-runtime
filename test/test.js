const { Cue, _creatElement, _createText, _string, _if } = C;

function create(_ctx) { return _creatElement('div', { "class": "main", }, [ _creatElement('img', { "class": "image","on-click": function($event) { _ctx.onChange($event) },"src": "" + _string(_ctx.data.img) + "", }, [  ]),_creatElement('div', { "class": "toggle", }, [ _createText("toggle " + _string(_ctx.data.toggle) + "") ]),_creatElement('span', { "class": "icon", }, [  ]) ]) }

const vm = new Cue({
  render: create,
  script: {
    data: {
      toggle: true,
      img: 'https://hao8.qhimg.com/t01c413c779df7eeecb.jpg'
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