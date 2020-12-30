import { _creatElement, _createText, _string, _if } from './vNode';

function create(_ctx) { return _creatElement('div', { 'on-click': _ctx.toggle.bind(_ctx) }, [ _creatElement('p', {}, [ _createText(_string(_ctx.data.name)) ]),_if(_ctx.data.showHello, function() { return _creatElement('p', {}, [ _createText("hello") ]) }, function() { return _creatElement('p', {}, [ _createText("yellow") ]) }) ]) }

export default create;