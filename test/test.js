const {
  createApp,
  _creatElement,
  _createText,
  _string,
  _if,
  _for,
  _withDirectives,
  _vShow,
  _vHide,
  h
} = C;

function create(_ctx) { return  h('div', { class: {main: true}, }, [  h('img', { class: {image1: true},on: { click: function($event) { _ctx.onChange($event) } },props: {src: "" + _string(_ctx.data.img) + ""}, }, [  ]), h('img', { class: {image2: true},on: { click: function($event) { _ctx.addItem($event) } },props: {src: "" + _string(_ctx.data.img) + ""}, }, [  ]), h('div', { class: {toggle: true}, }, [  h('p', {  }, [ _createText("toggle " + _string(_ctx.data.toggle) + "") ]) ]), _withDirectives(h('div', {  }, [ _createText("ooooo") ]), [ [_vShow, "" + _string(_ctx.data.toggle) + ""],["c-abc", "" + _string(_ctx.data.isGo) + ""], ]),..._for(_ctx.data.nnnn, function(item, item_index) { return [  h('p', {  }, [ _createText("------") ]) ] }) ]) }

const vm = createApp({
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
    },
    addItem(e) {
      this.data.nnnn.push('')
      this.setData({
        nnnn: this.data.nnnn
      })
    }
  }
});

vm.mount(document.querySelector('#app'))
setTimeout(function() {
  vm.destroy()
}, 20 * 1000);