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

const vm = new Cue.default(app);

vm.mount(document.querySelector('#app'))