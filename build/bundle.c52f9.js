!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(t){return n[t]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/",t(t.s="Pq/i")}({"Pq/i":function(n,t,e){"use strict";e.r(t);var r=e("hosL"),o=r.h,_=r.render,i=r.hydrate,u=function(n){return n&&n.default?n.default:n},l=function(n){return"/"===n[n.length-1]?n:n+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(e.p)+"sw.js"),"function"==typeof u(e("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var n=u(e("QfWi")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var f={preRenderData:t},a=t.url?l(t.url):"";(i&&a===l(location.pathname)?i:_)(o(n,{CLI_DATA:f}),document.body,c)}()}},QRet:function(n,t,e){"use strict";function r(n,t){d.options.__h&&d.options.__h(a,n,h||t),h=0;var e=a.__H||(a.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({__V:y}),e.__[n]}function o(n){return h=1,function(n,t,e){var o=r(f++,2);if(o.t=n,!o.__c&&(o.__=[e?e(t):c(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],e=o.t(t,n);t!==e&&(o.__N=[e,o.__[1]],o.__c.setState({}))}],o.__c=a,!a.u)){var _=function(n,t,e){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(n){return n.__c}));if(r.every((function(n){return!n.__N})))return!i||i.call(this,n,t,e);var _=!1;return r.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(_=!0)}})),!(!_&&o.__c.props===n)&&(!i||i.call(this,n,t,e))};a.u=!0;var i=a.shouldComponentUpdate,u=a.componentWillUpdate;a.componentWillUpdate=function(n,t,e){if(this.__e){var r=i;i=void 0,_(n,t,e),i=r}u&&u.call(this,n,t,e)},a.shouldComponentUpdate=_}return o.__N||o.__}(c,n)}function _(){for(var n;n=v.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(u),n.__H.__h.forEach(l),n.__H.__h=[]}catch(t){n.__H.__h=[],d.options.__e(t,n.__v)}}function i(n){var t,e=function(){clearTimeout(r),S&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(e,100);S&&(t=requestAnimationFrame(e))}function u(n){var t=a,e=n.__c;"function"==typeof e&&(n.__c=void 0,e()),a=t}function l(n){var t=a;n.__c=n.__(),a=t}function c(n,t){return"function"==typeof t?t(n):t}e.d(t,"a",(function(){return o}));var f,a,s,p,d=e("hosL"),h=0,v=[],y=[],m=d.options.__b,b=d.options.__r,g=d.options.diffed,k=d.options.__c,w=d.options.unmount;d.options.__b=function(n){a=null,m&&m(n)},d.options.__r=function(n){b&&b(n),f=0;var t=(a=n.__c).__H;t&&(s===a?(t.__h=[],a.__h=[],t.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=y,n.__N=n.i=void 0}))):(t.__h.forEach(u),t.__h.forEach(l),t.__h=[])),s=a},d.options.diffed=function(n){g&&g(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==v.push(t)&&p===d.options.requestAnimationFrame||((p=d.options.requestAnimationFrame)||i)(_)),t.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==y&&(n.__=n.__V),n.i=void 0,n.__V=y}))),s=a=null},d.options.__c=function(n,t){t.some((function(n){try{n.__h.forEach(u),n.__h=n.__h.filter((function(n){return!n.__||l(n)}))}catch(e){t.some((function(n){n.__h&&(n.__h=[])})),t=[],d.options.__e(e,n.__v)}})),k&&k(n,t)},d.options.unmount=function(n){w&&w(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.forEach((function(n){try{u(n)}catch(n){t=n}})),e.__H=void 0,t&&d.options.__e(t,e.__v))};var S="function"==typeof requestAnimationFrame},QfWi:function(n,t,e){"use strict";e.r(t);var r=e("ugae");t.default=r.a},"T/dg":function(n,t,e){"use strict";(function(n){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function _(n,t,e){return(t=function(n){var t=function(n,t){if("object"!==r(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===r(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t,e,r,o,_,i){try{var u=n[_](i),l=u.value}catch(n){return void e(n)}u.done?t(l):Promise.resolve(l).then(r,o)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){function _(n){i(l,r,o,_,u,"next",n)}function u(n){i(l,r,o,_,u,"throw",n)}var l=n.apply(t,e);_(void 0)}))}}function l(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,_,i,u=[],l=!0,c=!1;try{if(_=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=_.call(e)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var f=e("QRet"),a="https://fin-training-service.herokuapp.com";t.a=function(){var t=l(Object(f.a)(""),2),e=t[0],r=t[1],i=l(Object(f.a)([]),2),c=i[0],s=i[1],p=function(){var n=u((function*(){var n="".concat(a,"/words/").concat(e),t=yield fetch(n),r=(yield t.json()).map((function(n){return{word:n,translation:""}}));s(r)}));return function(){return n.apply(this,arguments)}}(),d=function(){var n=u((function*(n){var t="".concat(a,"/translate/").concat(n),e=yield fetch(t),r=yield e.json(),i=c.map((function(t){return t.word===n?{word:t.word,translation:r.result}:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){_(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},t)}));s(i)}));return function(t){return n.apply(this,arguments)}}(),h=c.length>0?"ion-ios-refresh-outline":"ion-android-arrow-forward";return n("div",{className:"container"},n("div",{className:"webflow-style-input"},n("input",{id:"amount",className:"",type:"number",placeholder:"How Many words?",value:e,onChange:function(n){r(n.target.value)}}),n("button",{onClick:p},n("i",{className:"icon ".concat(h)}))),n("div",{className:"words-list"},c.map((function(t){return n("div",{className:"word-row",key:t.word},n("span",null,t.word),n("span",null,t.translation),0===t.translation.length&&n("button",{className:"word-check-button",onClick:function(){return d(t.word)}},n("i",{className:"icon ion-checkmark"})))}))))}}).call(this,e("hosL").h)},hosL:function(n,t,e){"use strict";function r(n,t){for(var e in t)n[e]=t[e];return n}function o(n){var t=n.parentNode;t&&t.removeChild(n)}function _(n,t,e){var r,o,_,u={};for(_ in t)"key"==_?r=t[_]:"ref"==_?o=t[_]:u[_]=t[_];if(arguments.length>2&&(u.children=arguments.length>3?T.call(arguments,2):e),"function"==typeof n&&null!=n.defaultProps)for(_ in n.defaultProps)void 0===u[_]&&(u[_]=n.defaultProps[_]);return i(n,u,r,o,null)}function i(n,t,e,r,o){var _={type:n,props:t,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=D.vnode&&D.vnode(_),_}function u(){return{current:null}}function l(n){return n.children}function c(n,t){this.props=n,this.context=t}function f(n,t){if(null==t)return n.__?f(n.__,n.__.__k.indexOf(n)+1):null;for(var e;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e)return e.__e;return"function"==typeof n.type?f(n):null}function a(n){var t,e;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,t=0;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e){n.__e=n.__c.base=e.__e;break}return a(n)}}function s(n){(!n.__d&&(n.__d=!0)&&W.push(n)&&!p.__r++||M!==D.debounceRendering)&&((M=D.debounceRendering)||F)(p)}function p(){var n,t,e,o,_,i,u,l;for(W.sort(I);n=W.shift();)n.__d&&(t=W.length,o=void 0,_=void 0,u=(i=(e=n).__v).__e,(l=e.__P)&&(o=[],(_=r({},i)).__v=i.__v+1,S(l,i,_,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?f(i):u,i.__h),P(o,i),i.__e!=u&&a(i)),W.length>t&&W.sort(I));p.__r=0}function d(n,t,e,r,o,_,u,c,a,s){var p,d,v,b,g,k,w,P=r&&r.__k||q,C=P.length;for(e.__k=[],p=0;p<t.length;p++)if(null!=(b=e.__k[p]=null==(b=t[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?i(null,b,null,null,b):Array.isArray(b)?i(l,{children:b},null,null,null):b.__b>0?i(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=e,b.__b=e.__b+1,null===(v=P[p])||v&&b.key==v.key&&b.type===v.type)P[p]=void 0;else for(d=0;d<C;d++){if((v=P[d])&&b.key==v.key&&b.type===v.type){P[d]=void 0;break}v=null}S(n,b,v=v||V,o,_,u,c,a,s),g=b.__e,(d=b.ref)&&v.ref!=d&&(w||(w=[]),v.ref&&w.push(v.ref,null,b),w.push(d,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===v.__k?b.__d=a=h(b,a,n):a=y(n,b,v,P,g,a),"function"==typeof e.type&&(e.__d=a)):a&&v.__e==a&&a.parentNode!=n&&(a=f(v))}for(e.__e=k,p=C;p--;)null!=P[p]&&("function"==typeof e.type&&null!=P[p].__e&&P[p].__e==e.__d&&(e.__d=m(r).nextSibling),j(P[p],P[p]));if(w)for(p=0;p<w.length;p++)O(w[p],w[++p],w[++p])}function h(n,t,e){for(var r,o=n.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=n,t="function"==typeof r.type?h(r,t,e):y(e,r,r,o,r.__e,t));return t}function v(n,t){return t=t||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){v(n,t)})):t.push(n)),t}function y(n,t,e,r,o,_){var i,u,l;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==e||o!=_||null==o.parentNode)n:if(null==_||_.parentNode!==n)n.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=1)if(u==o)break n;n.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function m(n){var t,e,r;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(t=n.__k.length-1;t>=0;t--)if((e=n.__k[t])&&(r=m(e)))return r;return null}function b(n,t,e){"-"===t[0]?n.setProperty(t,null==e?"":e):n[t]=null==e?"":"number"!=typeof e||Q.test(t)?e:e+"px"}function g(n,t,e,r,o){var _;n:if("style"===t)if("string"==typeof e)n.style.cssText=e;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(t in r)e&&t in e||b(n.style,t,"");if(e)for(t in e)r&&e[t]===r[t]||b(n.style,t,e[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in n?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+_]=e,e?r||n.addEventListener(t,_?w:k,_):n.removeEventListener(t,_?w:k,_);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in n)try{n[t]=null==e?"":e;break n}catch(n){}"function"==typeof e||(null==e||!1===e&&"-"!==t[4]?n.removeAttribute(t):n.setAttribute(t,e))}}function k(n){return this.l[n.type+!1](D.event?D.event(n):n)}function w(n){return this.l[n.type+!0](D.event?D.event(n):n)}function S(n,t,e,o,_,i,u,f,a){var s,p,h,v,y,m,b,g,k,w,S,P,O,j,E,N=t.type;if(void 0!==t.constructor)return null;null!=e.__h&&(a=e.__h,f=t.__e=e.__e,t.__h=null,i=[f]),(s=D.__b)&&s(t);try{n:if("function"==typeof N){if(g=t.props,k=(s=N.contextType)&&o[s.__c],w=s?k?k.props.value:s.__:o,e.__c?b=(p=t.__c=e.__c).__=p.__E:("prototype"in N&&N.prototype.render?t.__c=p=new N(g,w):(t.__c=p=new c(g,w),p.constructor=N,p.render=x),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=N.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,N.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,p.__v=t,h)null==N.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==N.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,w)||t.__v===e.__v){for(t.__v!==e.__v&&(p.props=g,p.state=p.__s,p.__d=!1),p.__e=!1,t.__e=e.__e,t.__k=e.__k,t.__k.forEach((function(n){n&&(n.__=t)})),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&u.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=w,p.props=g,p.__P=n,P=D.__r,O=0,"prototype"in N&&N.prototype.render){for(p.state=p.__s,p.__d=!1,P&&P(t),s=p.render(p.props,p.state,p.context),j=0;j<p._sb.length;j++)p.__h.push(p._sb[j]);p._sb=[]}else do{p.__d=!1,P&&P(t),s=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++O<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),E=null!=s&&s.type===l&&null==s.key?s.props.children:s,d(n,Array.isArray(E)?E:[E],t,e,o,_,i,u,f,a),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===e.__v?(t.__k=e.__k,t.__e=e.__e):t.__e=C(e.__e,t,e,o,_,i,u,a);(s=D.diffed)&&s(t)}catch(n){t.__v=null,(a||null!=i)&&(t.__e=f,t.__h=!!a,i[i.indexOf(f)]=null),D.__e(n,t,e)}}function P(n,t){D.__c&&D.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(n){n.call(t)}))}catch(n){D.__e(n,t.__v)}}))}function C(n,t,e,r,_,i,u,l){var c,a,s,p=e.props,h=t.props,v=t.type,y=0;if("svg"===v&&(_=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,i[y]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)p===h||l&&n.data===h||(n.data=h);else{if(i=i&&T.call(n.childNodes),a=(p=e.props||V).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(s||a)&&(s&&(a&&s.__html==a.__html||s.__html===n.innerHTML)||(n.innerHTML=s&&s.__html||""))}if(function(n,t,e,r,o){var _;for(_ in e)"children"===_||"key"===_||_ in t||g(n,_,null,e[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||e[_]===t[_]||g(n,_,t[_],e[_],r)}(n,h,p,_,l),s)t.__k=[];else if(y=t.props.children,d(n,Array.isArray(y)?y:[y],t,e,r,_&&"foreignObject"!==v,i,u,i?i[0]:e.__k&&f(e,0),l),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);l||("value"in h&&void 0!==(y=h.value)&&(y!==n.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&g(n,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==n.checked&&g(n,"checked",y,p.checked,!1))}return n}function O(n,t,e){try{"function"==typeof n?n(t):n.current=t}catch(n){D.__e(n,e)}}function j(n,t,e){var r,_;if(D.unmount&&D.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||O(r,null,t)),null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){D.__e(n,t)}r.base=r.__P=null,n.__c=void 0}if(r=n.__k)for(_=0;_<r.length;_++)r[_]&&j(r[_],t,e||"function"!=typeof n.type);e||null==n.__e||o(n.__e),n.__=n.__e=n.__d=void 0}function x(n,t,e){return this.constructor(n,e)}function E(n,t,e){var r,o,i;D.__&&D.__(n,t),o=(r="function"==typeof e)?null:e&&e.__k||t.__k,i=[],S(t,n=(!r&&e||t).__k=_(l,null,[n]),o||V,V,void 0!==t.ownerSVGElement,!r&&e?[e]:o?null:t.firstChild?T.call(t.childNodes):null,i,!r&&e?e:o?o.__e:t.firstChild,r),P(i,n)}function N(n,t){E(n,t,N)}function A(n,t,e){var o,_,u,l=r({},n.props);for(u in t)"key"==u?o=t[u]:"ref"==u?_=t[u]:l[u]=t[u];return arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):e),i(n.type,l,o||n.key,_||n.ref,null)}function H(n,t){var e={__c:t="__cC"+R++,__:n,Consumer:function(n,t){return n.children(t)},Provider:function(n){var e,r;return this.getChildContext||(e=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&e.some((function(n){n.__e=!0,s(n)}))},this.sub=function(n){e.push(n);var t=n.componentWillUnmount;n.componentWillUnmount=function(){e.splice(e.indexOf(n),1),t&&t.call(n)}}),n.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(t),e.d(t,"Component",(function(){return c})),e.d(t,"Fragment",(function(){return l})),e.d(t,"cloneElement",(function(){return A})),e.d(t,"createContext",(function(){return H})),e.d(t,"createElement",(function(){return _})),e.d(t,"createRef",(function(){return u})),e.d(t,"h",(function(){return _})),e.d(t,"hydrate",(function(){return N})),e.d(t,"isValidElement",(function(){return L})),e.d(t,"options",(function(){return D})),e.d(t,"render",(function(){return E})),e.d(t,"toChildArray",(function(){return v}));var T,D,U,L,W,M,F,I,R,V={},q=[],Q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=q.slice,D={__e:function(n,t,e,r){for(var o,_,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(n)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),i=o.__d),i)return o.__E=o}catch(t){n=t}throw n}},U=0,L=function(n){return null!=n&&void 0===n.constructor},c.prototype.setState=function(n,t){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof n&&(n=n(r({},e),this.props)),n&&r(e,n),null!=n&&this.__v&&(t&&this._sb.push(t),s(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),s(this))},c.prototype.render=l,W=[],F="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I=function(n,t){return n.__v.__b-t.__v.__b},p.__r=0,R=0},ugae:function(n,t,e){"use strict";(function(n){var r=e("T/dg");t.a=function(){return n("div",{id:"app"},n(r.a,null))}}).call(this,e("hosL").h)}});
//# sourceMappingURL=bundle.c52f9.js.map