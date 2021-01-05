const { Cue, _creatElement, _createText, _string, _if } = C;

function create(_ctx) { return _creatElement('div', { 'on-click': _ctx.toggle.bind(_ctx) }, [ _creatElement('p', {}, [ _createText(_string(_ctx.data.name)) ]),_if(_ctx.data.showHello, function() { return _creatElement('p', {}, [ _createText("hello") ]) }, function() { return _creatElement('p', {}, [ _createText("yellow") ]) }) ]) }

const app = {
  data: {
    name: 'gogogo',
    showHello: true
  },
  toggle() {
    this.setData({
      showHello: !this.data.showHello
    })
  }
};

const vm = new Cue({
  script: app,
  render: create
});

vm.mount(document.querySelector('#app'))