var R=Object.defineProperty,ie=e=>R(e,"__esModule",{value:!0}),oe=(e,t)=>{ie(e);for(var r in t)R(e,r,{get:t[r],enumerable:!0})};oe(exports,{Cue:()=>F,_creatElement:()=>Me,_createText:()=>Be,_createVNode:()=>Oe,_for:()=>He,_if:()=>Ce,_string:()=>De,_vHide:()=>Fe,_vShow:()=>Pe,_withDirectives:()=>Ie,createApp:()=>qe,h:()=>ee,registerComponent:()=>Re,resolveComponent:()=>Ke});function E(e,t,r,n,i){let o=t===void 0?void 0:t.key;return{sel:e,data:t,children:r,text:n,elm:i,key:o}}var O=Array.isArray;function L(e){return typeof e=="string"||typeof e=="number"}function se(e){return document.createElement(e)}function le(e,t){return document.createElementNS(e,t)}function fe(e){return document.createTextNode(e)}function ae(e){return document.createComment(e)}function ce(e,t,r){e.insertBefore(t,r)}function ue(e,t){e.removeChild(t)}function de(e,t){e.appendChild(t)}function pe(e){return e.parentNode}function me(e){return e.nextSibling}function ye(e){return e.tagName}function he(e,t){e.textContent=t}function ve(e){return e.textContent}function xe(e){return e.nodeType===1}function ge(e){return e.nodeType===3}function _e(e){return e.nodeType===8}var K={createElement:se,createElementNS:le,createTextNode:fe,createComment:ae,insertBefore:ce,removeChild:ue,appendChild:de,parentNode:pe,nextSibling:me,tagName:ye,setTextContent:he,getTextContent:ve,isElement:xe,isText:ge,isComment:_e};function C(e){return e===void 0}function b(e){return e!==void 0}var q=E("",{},[],void 0,void 0);function B(e,t){return e.key===t.key&&e.sel===t.sel}function be(e){return e.sel!==void 0}function Ne(e,t,r){var n;let i={};for(let o=t;o<=r;++o){let a=(n=e[o])===null||n===void 0?void 0:n.key;a!==void 0&&(i[a]=o)}return i}var D=["create","update","remove","destroy","pre","post"];function U(e,t){let r,n,i={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},o=t!==void 0?t:K;for(r=0;r<D.length;++r)for(i[D[r]]=[],n=0;n<e.length;++n){let s=e[n][D[r]];s!==void 0&&i[D[r]].push(s)}function a(s){let l=s.id?"#"+s.id:"",u=s.className?"."+s.className.split(" ").join("."):"";return E(o.tagName(s).toLowerCase()+l+u,{},[],void 0,s)}function x(s,l){return function(){if(--l===0){let f=o.parentNode(s);o.removeChild(f,s)}}}function _(s,l){var u,f;let c,p=s.data;if(p!==void 0){let d=(u=p.hook)===null||u===void 0?void 0:u.init;b(d)&&(d(s),p=s.data)}let h=s.children,m=s.sel;if(m==="!")C(s.text)&&(s.text=""),s.elm=o.createComment(s.text);else if(m!==void 0){let d=m.indexOf("#"),v=m.indexOf(".",d),y=d>0?d:m.length,g=v>0?v:m.length,N=d!==-1||v!==-1?m.slice(0,Math.min(y,g)):m,k=s.elm=b(p)&&b(c=p.ns)?o.createElementNS(c,N):o.createElement(N);for(y<g&&k.setAttribute("id",m.slice(y+1,g)),v>0&&k.setAttribute("class",m.slice(g+1).replace(/\./g," ")),c=0;c<i.create.length;++c)i.create[c](q,s);if(O(h))for(c=0;c<h.length;++c){let M=h[c];M!=null&&o.appendChild(k,_(M,l))}else L(s.text)&&o.appendChild(k,o.createTextNode(s.text));let S=s.data.hook;b(S)&&((f=S.create)===null||f===void 0||f.call(S,q,s),S.insert&&l.push(s))}else s.elm=o.createTextNode(s.text);return s.elm}function w(s,l,u,f,c,p){for(;f<=c;++f){let h=u[f];h!=null&&o.insertBefore(s,_(h,p),l)}}function A(s){var l,u;let f=s.data;if(f!==void 0){(u=(l=f==null?void 0:f.hook)===null||l===void 0?void 0:l.destroy)===null||u===void 0||u.call(l,s);for(let c=0;c<i.destroy.length;++c)i.destroy[c](s);if(s.children!==void 0)for(let c=0;c<s.children.length;++c){let p=s.children[c];p!=null&&typeof p!="string"&&A(p)}}}function T(s,l,u,f){for(var c,p;u<=f;++u){let h,m,d=l[u];if(d!=null)if(b(d.sel)){A(d),h=i.remove.length+1,m=x(d.elm,h);for(let y=0;y<i.remove.length;++y)i.remove[y](d,m);let v=(p=(c=d==null?void 0:d.data)===null||c===void 0?void 0:c.hook)===null||p===void 0?void 0:p.remove;b(v)?v(d,m):m()}else o.removeChild(s,d.elm)}}function ne(s,l,u,f){let c=0,p=0,h=l.length-1,m=l[0],d=l[h],v=u.length-1,y=u[0],g=u[v],N,k,S,M;for(;c<=h&&p<=v;)m==null?m=l[++c]:d==null?d=l[--h]:y==null?y=u[++p]:g==null?g=u[--v]:B(m,y)?(j(m,y,f),m=l[++c],y=u[++p]):B(d,g)?(j(d,g,f),d=l[--h],g=u[--v]):B(m,g)?(j(m,g,f),o.insertBefore(s,m.elm,o.nextSibling(d.elm)),m=l[++c],g=u[--v]):B(d,y)?(j(d,y,f),o.insertBefore(s,d.elm,m.elm),d=l[--h],y=u[++p]):(N===void 0&&(N=Ne(l,c,h)),k=N[y.key],C(k)?o.insertBefore(s,_(y,f),m.elm):(S=l[k],S.sel!==y.sel?o.insertBefore(s,_(y,f),m.elm):(j(S,y,f),l[k]=void 0,o.insertBefore(s,S.elm,m.elm))),y=u[++p]);(c<=h||p<=v)&&(c>h?(M=u[v+1]==null?null:u[v+1].elm,w(s,M,u,p,v,f)):T(s,l,c,h))}function j(s,l,u){var f,c,p,h,m;let d=(f=l.data)===null||f===void 0?void 0:f.hook;(c=d==null?void 0:d.prepatch)===null||c===void 0||c.call(d,s,l);let v=l.elm=s.elm,y=s.children,g=l.children;if(s===l)return;if(l.data!==void 0){for(let N=0;N<i.update.length;++N)i.update[N](s,l);(h=(p=l.data.hook)===null||p===void 0?void 0:p.update)===null||h===void 0||h.call(p,s,l)}C(l.text)?b(y)&&b(g)?y!==g&&ne(v,y,g,u):b(g)?(b(s.text)&&o.setTextContent(v,""),w(v,null,g,0,g.length-1,u)):b(y)?T(v,y,0,y.length-1):b(s.text)&&o.setTextContent(v,""):s.text!==l.text&&(b(y)&&T(v,y,0,y.length-1),o.setTextContent(v,l.text)),(m=d==null?void 0:d.postpatch)===null||m===void 0||m.call(d,s,l)}return function(l,u){let f,c,p,h=[];for(f=0;f<i.pre.length;++f)i.pre[f]();for(be(l)||(l=a(l)),B(l,u)?j(l,u,h):(c=l.elm,p=o.parentNode(c),_(u,h),p!==null&&(o.insertBefore(p,u.elm,o.nextSibling(c)),T(p,[l],0,0))),f=0;f<h.length;++f)h[f].data.hook.insert(h[f]);for(f=0;f<i.post.length;++f)i.post[f]();return u}}function z(e,t){var r,n,i=t.elm,o=e.data.class,a=t.data.class;if(!o&&!a)return;if(o===a)return;o=o||{},a=a||{};for(n in o)o[n]&&!Object.prototype.hasOwnProperty.call(a,n)&&i.classList.remove(n);for(n in a)r=a[n],r!==o[n]&&i.classList[r?"add":"remove"](n)}var G={create:z,update:z};function J(e,t){var r,n,i,o=t.elm,a=e.data.props,x=t.data.props;if(!a&&!x)return;if(a===x)return;a=a||{},x=x||{};for(r in x)n=x[r],i=a[r],i!==n&&(r!=="value"||o[r]!==n)&&(o[r]=n)}var W={create:J,update:J},X=typeof window!="undefined"&&window.requestAnimationFrame.bind(window)||setTimeout,ke=function(e){X(function(){X(e)})},H=!1;function Se(e,t,r){ke(function(){e[t]=r})}function Y(e,t){var r,n,i=t.elm,o=e.data.style,a=t.data.style;if(!o&&!a)return;if(o===a)return;o=o||{},a=a||{};var x="delayed"in o;for(n in o)a[n]||(n[0]==="-"&&n[1]==="-"?i.style.removeProperty(n):i.style[n]="");for(n in a)if(r=a[n],n==="delayed"&&a.delayed)for(let _ in a.delayed)r=a.delayed[_],(!x||r!==o.delayed[_])&&Se(i.style,_,r);else n!=="remove"&&r!==o[n]&&(n[0]==="-"&&n[1]==="-"?i.style.setProperty(n,r):i.style[n]=r)}function Te(e){var t,r,n=e.elm,i=e.data.style;if(!i||!(t=i.destroy))return;for(r in t)n.style[r]=t[r]}function je(e,t){var r=e.data.style;if(!r||!r.remove){t();return}H||(e.elm.offsetLeft,H=!0);var n,i=e.elm,o=0,a,x=r.remove,_=0,w=[];for(n in x)w.push(n),i.style[n]=x[n];a=getComputedStyle(i);for(var A=a["transition-property"].split(", ");o<A.length;++o)w.indexOf(A[o])!==-1&&_++;i.addEventListener("transitionend",function(T){T.target===i&&--_,_===0&&t()})}function Ee(){H=!1}var Z={pre:Ee,create:Y,update:Y,destroy:Te,remove:je};function $(e,t,r){if(typeof e=="function")e.call(t,r,t);else if(typeof e=="object")for(var n=0;n<e.length;n++)$(e[n],t,r)}function Le(e,t){var r=e.type,n=t.data.on;n&&n[r]&&$(n[r],t,e)}function we(){return function e(t){Le(t,e.vnode)}}function I(e,t){var r=e.data.on,n=e.listener,i=e.elm,o=t&&t.data.on,a=t&&t.elm,x;if(r===o)return;if(r&&n)if(o)for(x in r)o[x]||i.removeEventListener(x,n,!1);else for(x in r)i.removeEventListener(x,n,!1);if(o){var _=t.listener=e.listener||we();if(_.vnode=t,r)for(x in o)r[x]||a.addEventListener(x,_,!1);else for(x in o)a.addEventListener(x,_,!1)}}var Q={create:I,update:I,destroy:I};function V(e,t,r){if(e.ns="http://www.w3.org/2000/svg",r!=="foreignObject"&&t!==void 0)for(let n=0;n<t.length;++n){let i=t[n].data;i!==void 0&&V(i,t[n].children,t[n].sel)}}function ee(e,t,r){var n={},i,o,a;if(r!==void 0?(t!==null&&(n=t),O(r)?i=r:L(r)?o=r:r&&r.sel&&(i=[r])):t!=null&&(O(t)?i=t:L(t)?o=t:t&&t.sel?i=[t]:n=t),i!==void 0)for(a=0;a<i.length;++a)L(i[a])&&(i[a]=E(void 0,void 0,void 0,i[a],void 0));return e[0]==="s"&&e[1]==="v"&&e[2]==="g"&&(e.length===3||e[3]==="."||e[3]==="#")&&V(n,i,e),E(e,n,i,o,void 0)}function Ae(e){return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"")}function te(e){return Ae(e)==="String"}function Me(e,t,r){return{tag:e,attrs:t,children:r}}function Oe(e,t,r){return e.vNode}function Be(e){return e}function De(e){return e}function Ce(e,t,r){return e?t():r()}function He(e,t){return e.reduce(function(r,n,i){return r.concat(t(n,i))},[])}function Ie(e,t){return t.map(([r,n])=>te(r)?void 0:r(e,n)),e}function Pe(e,t){}function Fe(e,t){}var P={};function Re(e,t){return t?(t.name=t.name||e,t=createApp(t),P[e]=t,t):P[e]}function Ke(e){return P[e]}var re=U([G,W,Z,Q]),F=class{constructor({script:t,css:r,tpl:n,render:i}){this.render=i,this._ctx=this.initContext(t),this._created()}initContext(t){return t.setData=r=>{let n=this._ctx;this.data=Object.assign(n.data,r);let i=this.render(n);console.log("new node: ",i),console.log("old node: ",this.vNode),re(this.vNode,i),this.vNode=i,this._ctx.updated&&this._ctx.updated()},t}_created(){this.vNode=this.render(this._ctx),this._ctx.created&&this._ctx.created()}mount(t){this.root=t,re(this.root,this.vNode),this._ctx.mounted&&this._ctx.mounted()}destroy(){this.root.innerHTML="",this._ctx.destroyed&&this._ctx.destroyed()}};function qe(e){return new F(e)}
