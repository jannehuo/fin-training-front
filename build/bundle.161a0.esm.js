!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="Pq/i")}({"Pq/i":function(t,e,n){"use strict";n.r(e);var o=n("hosL");const{h:r,render:_,hydrate:i}=o,l=t=>t&&t.default?t.default:t,u=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=l(n("QfWi")),o={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(o=JSON.parse(decodeURI(c.innerHTML)).preRenderData||o);const s={preRenderData:o},a=o.url?u(o.url):"";(i&&a===u(location.pathname)?i:_)(r(e,{CLI_DATA:s}),document.body,t)};0,e()}},QRet:function(t,e,n){"use strict";function o(t,e){v.options.__h&&v.options.__h(p,t,m||e),m=0;var n=p.__H||(p.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:g}),n.__[t]}function r(t){return m=1,function(t,e,n){var r=o(f++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):a(void 0,e),function(t){var e=r.__N?r.__N[0]:r.__[0],n=r.t(e,t);e!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=p,!p.u)){var _=function(t,e,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return t.__c}));if(o.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var _=!1;return o.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(_=!0)}})),!(!_&&r.__c.props===t)&&(!i||i.call(this,t,e,n))};p.u=!0;var i=p.shouldComponentUpdate,l=p.componentWillUpdate;p.componentWillUpdate=function(t,e,n){if(this.__e){var o=i;i=void 0,_(t,e,n),i=o}l&&l.call(this,t,e,n)},p.shouldComponentUpdate=_}return r.__N||r.__}(a,t)}function _(t,e){var n=o(f++,3);!v.options.__s&&s(n.__H,e)&&(n.__=t,n.i=e,p.__H.__h.push(n))}function i(){for(var t;t=y.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(u),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){t.__H.__h=[],v.options.__e(e,t.__v)}}function l(t){var e,n=function(){clearTimeout(o),C&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);C&&(e=requestAnimationFrame(n))}function u(t){var e=p,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),p=e}function c(t){var e=p;t.__c=t.__(),p=e}function s(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return r}));var f,p,d,h,v=n("hosL"),m=0,y=[],g=[],b=v.options.__b,k=v.options.__r,w=v.options.diffed,P=v.options.__c,S=v.options.unmount;v.options.__b=function(t){p=null,b&&b(t)},v.options.__r=function(t){k&&k(t),f=0;var e=(p=t.__c).__H;e&&(d===p?(e.__h=[],p.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=g,t.__N=t.i=void 0}))):(e.__h.forEach(u),e.__h.forEach(c),e.__h=[])),d=p},v.options.diffed=function(t){w&&w(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==y.push(e)&&h===v.options.requestAnimationFrame||((h=v.options.requestAnimationFrame)||l)(i)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==g&&(t.__=t.__V),t.i=void 0,t.__V=g}))),d=p=null},v.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],v.options.__e(n,t.__v)}})),P&&P(t,e)},v.options.unmount=function(t){S&&S(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),n.__H=void 0,e&&v.options.__e(e,n.__v))};var C="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e);var o=n("ugae");e.default=o.a},"T/dg":function(t,e,n){"use strict";(function(t){function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=n("QRet"),i=n("jnDp");const l="https://fin-training-service.herokuapp.com";e.a=()=>{const[e,n]=Object(_.b)(""),[u,c]=Object(_.b)([]),[s,a]=Object(_.b)(0),f=async t=>{if(t.length>0){const e=`${l}/translate/${t}`,n=await fetch(e),_=await n.json(),i=u.map((e=>e.word===t?{word:e.word,translation:_.result}:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e))),f=s+1;a(f),window.localStorage.setItem("wordsAmount",f.toString()),c(i)}};Object(_.a)((()=>{const t=localStorage.getItem("wordsAmount");t&&a(parseInt(t,10))}),[a]);const p=u.length>0?"ion-ios-refresh-outline":"ion-android-arrow-forward";return t("div",{className:"container"},t("div",{className:"webflow-style-input"},t("input",{id:"amount",className:"",type:"number",placeholder:"How Many words?",value:e,onChange:t=>{n(t.target.value)}}),t("button",{onClick:async()=>{if(e.length>0){const t=`${l}/words/${e}`,n=await fetch(t),o=(await n.json()).map((t=>({word:t,translation:""})));c(o)}}},t("i",{className:`icon ${p}`}))),t(i.a,{amount:s}),t("div",{className:"words-list"},u.map((e=>t("div",{className:"word-row",key:e.word},t("span",null,e.word),e.translation.length>0&&t("span",{className:"word-translation"},e.translation),0===e.translation.length&&t("button",{className:"word-check-button",onClick:()=>f(e.word)},t("i",{className:"icon ion-checkmark"})))))))}}).call(this,n("hosL").h)},hosL:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var o,r,_,l={};for(_ in e)"key"==_?o=e[_]:"ref"==_?r=e[_]:l[_]=e[_];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===l[_]&&(l[_]=t.defaultProps[_]);return i(t,l,o,r,null)}function i(t,e,n,o,r){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++U:r};return null==r&&null!=D.vnode&&D.vnode(_),_}function l(){return{current:null}}function u(t){return t.children}function c(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function a(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return a(t)}}function f(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!p.__r++||M!==D.debounceRendering)&&((M=D.debounceRendering)||I)(p)}function p(){var t,e,n,r,_,i,l,u;for(W.sort(F);t=W.shift();)t.__d&&(e=W.length,r=void 0,_=void 0,l=(i=(n=t).__v).__e,(u=n.__P)&&(r=[],(_=o({},i)).__v=i.__v+1,P(u,i,_,n.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,r,null==l?s(i):l,i.__h),S(r,i),i.__e!=l&&a(i)),W.length>e&&W.sort(F));p.__r=0}function d(t,e,n,o,r,_,l,c,a,f){var p,d,v,g,b,k,w,S=o&&o.__k||$,C=S.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(g=n.__k[p]=null==(g=e[p])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?i(null,g,null,null,g):Array.isArray(g)?i(u,{children:g},null,null,null):g.__b>0?i(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(v=S[p])||v&&g.key==v.key&&g.type===v.type)S[p]=void 0;else for(d=0;d<C;d++){if((v=S[d])&&g.key==v.key&&g.type===v.type){S[d]=void 0;break}v=null}P(t,g,v=v||V,r,_,l,c,a,f),b=g.__e,(d=g.ref)&&v.ref!=d&&(w||(w=[]),v.ref&&w.push(v.ref,null,g),w.push(d,g.__c||b,g)),null!=b?(null==k&&(k=b),"function"==typeof g.type&&g.__k===v.__k?g.__d=a=h(g,a,t):a=m(t,g,v,S,b,a),"function"==typeof n.type&&(n.__d=a)):a&&v.__e==a&&a.parentNode!=t&&(a=s(v))}for(n.__e=k,p=C;p--;)null!=S[p]&&("function"==typeof n.type&&null!=S[p].__e&&S[p].__e==n.__d&&(n.__d=y(o).nextSibling),O(S[p],S[p]));if(w)for(p=0;p<w.length;p++)N(w[p],w[++p],w[++p])}function h(t,e,n){for(var o,r=t.__k,_=0;r&&_<r.length;_++)(o=r[_])&&(o.__=t,e="function"==typeof o.type?h(o,e,n):m(n,o,o,r,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,o,r,_){var i,l,u;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||r!=_||null==r.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(r),i=null;else{for(l=_,u=0;(l=l.nextSibling)&&u<o.length;u+=1)if(l==r)break t;t.insertBefore(r,_),i=_}return void 0!==i?i:r.nextSibling}function y(t){var e,n,o;if(null==t.type||"string"==typeof t.type)return t.__e;if(t.__k)for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(o=y(n)))return o;return null}function g(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||q.test(e)?n:n+"px"}function b(t,e,n,o,r){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof o&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||g(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||g(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?o||t.addEventListener(e,_?w:k,_):t.removeEventListener(e,_?w:k,_);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function k(t){return this.l[t.type+!1](D.event?D.event(t):t)}function w(t){return this.l[t.type+!0](D.event?D.event(t):t)}function P(t,e,n,r,_,i,l,s,a){var f,p,h,v,m,y,g,b,k,w,P,S,N,O,x,E=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(a=n.__h,s=e.__e=n.__e,e.__h=null,i=[s]),(f=D.__b)&&f(e);try{t:if("function"==typeof E){if(b=e.props,k=(f=E.contextType)&&r[f.__c],w=f?k?k.props.value:f.__:r,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?e.__c=p=new E(b,w):(e.__c=p=new c(b,w),p.constructor=E,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=r,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,E.getDerivedStateFromProps(b,p.__s))),v=p.props,m=p.state,p.__v=e,h)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)||e.__v===n.__v){for(e.__v!==n.__v&&(p.props=b,p.state=p.__s,p.__d=!1),p.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),P=0;P<p._sb.length;P++)p.__h.push(p._sb[P]);p._sb=[],p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}if(p.context=w,p.props=b,p.__P=t,S=D.__r,N=0,"prototype"in E&&E.prototype.render){for(p.state=p.__s,p.__d=!1,S&&S(e),f=p.render(p.props,p.state,p.context),O=0;O<p._sb.length;O++)p.__h.push(p._sb[O]);p._sb=[]}else do{p.__d=!1,S&&S(e),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++N<25);p.state=p.__s,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),x=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(t,Array.isArray(x)?x:[x],e,n,r,_,i,l,s,a),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=C(n.__e,e,n,r,_,i,l,a);(f=D.diffed)&&f(e)}catch(t){e.__v=null,(a||null!=i)&&(e.__e=s,e.__h=!!a,i[i.indexOf(s)]=null),D.__e(t,e,n)}}function S(t,e){D.__c&&D.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){D.__e(t,e.__v)}}))}function C(t,e,n,o,_,i,l,u){var c,a,f,p=n.props,h=e.props,v=e.type,m=0;if("svg"===v&&(_=!0),null!=i)for(;m<i.length;m++)if((c=i[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,i[m]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,u=!1}if(null===v)p===h||u&&t.data===h||(t.data=h);else{if(i=i&&T.call(t.childNodes),a=(p=n.props||V).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=i)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in e||b(t,_,null,n[_],o);for(_ in e)r&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||b(t,_,e[_],n[_],o)}(t,h,p,_,u),f)e.__k=[];else if(m=e.props.children,d(t,Array.isArray(m)?m:[m],e,n,o,_&&"foreignObject"!==v,i,l,i?i[0]:n.__k&&s(n,0),u),null!=i)for(m=i.length;m--;)null!=i[m]&&r(i[m]);u||("value"in h&&void 0!==(m=h.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&b(t,"value",m,p.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==t.checked&&b(t,"checked",m,p.checked,!1))}return t}function N(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){D.__e(t,n)}}function O(t,e,n){var o,_;if(D.unmount&&D.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||N(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){D.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&O(o[_],e,n||"function"!=typeof t.type);n||null==t.__e||r(t.__e),t.__=t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function x(t,e,n){var o,r,i;D.__&&D.__(t,e),r=(o="function"==typeof n)?null:n&&n.__k||e.__k,i=[],P(e,t=(!o&&n||e).__k=_(u,null,[t]),r||V,V,void 0!==e.ownerSVGElement,!o&&n?[n]:r?null:e.firstChild?T.call(e.childNodes):null,i,!o&&n?n:r?r.__e:e.firstChild,o),S(i,t)}function E(t,e){x(t,e,E)}function H(t,e,n){var r,_,l,u=o({},t.props);for(l in e)"key"==l?r=e[l]:"ref"==l?_=e[l]:u[l]=e[l];return arguments.length>2&&(u.children=arguments.length>3?T.call(arguments,2):n),i(t.type,u,r||t.key,_||t.ref,null)}function A(t,e){var n={__c:e="__cC"+R++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,o;return this.getChildContext||(n=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some((function(t){t.__e=!0,f(t)}))},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return c})),n.d(e,"Fragment",(function(){return u})),n.d(e,"cloneElement",(function(){return H})),n.d(e,"createContext",(function(){return A})),n.d(e,"createElement",(function(){return _})),n.d(e,"createRef",(function(){return l})),n.d(e,"h",(function(){return _})),n.d(e,"hydrate",(function(){return E})),n.d(e,"isValidElement",(function(){return L})),n.d(e,"options",(function(){return D})),n.d(e,"render",(function(){return x})),n.d(e,"toChildArray",(function(){return v}));var T,D,U,L,W,M,I,F,R,V={},$=[],q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=$.slice,D={__e:function(t,e,n,o){for(var r,_,i;e=e.__;)if((r=e.__c)&&!r.__)try{if((_=r.constructor)&&null!=_.getDerivedStateFromError&&(r.setState(_.getDerivedStateFromError(t)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(t,o||{}),i=r.__d),i)return r.__E=r}catch(e){t=e}throw t}},U=0,L=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof t&&(t=t(o({},n),this.props)),t&&o(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=u,W=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(t,e){return t.__v.__b-e.__v.__b},p.__r=0,R=0},jnDp:function(t,e,n){"use strict";(function(t){e.a=e=>t("div",{className:"stats-container"},t("span",{className:"amount-row-header"},"Viewed"),t("span",{key:e.amount,className:"amount animate"},e.amount))}).call(this,n("hosL").h)},ugae:function(t,e,n){"use strict";(function(t){var o=n("QRet"),r=n("T/dg");e.a=()=>(Object(o.a)((()=>{window.localStorage.getItem("wordsAmount")||window.localStorage.setItem("wordsAmount","0")})),t("div",{id:"app"},t(r.a,null)))}).call(this,n("hosL").h)}});
//# sourceMappingURL=bundle.161a0.esm.js.map