var app = (function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol();class s$4{constructor(t,s){if(s!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$2&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$3=new Map,o$3=t=>{let o=n$3.get(t);return void 0===o&&n$3.set(t,o=new s$4(t,e$2)),o},r$2=t=>o$3("string"==typeof t?t:t+""),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,o)=>e+(t=>{if(t instanceof s$4)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1]),t[0]);return o$3(n)},S$1=(e,s)=>{t$2?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$3,e$1,h$2,r$1;const o$2={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$2};class a$2 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$1(i));}else void 0!==i&&s.push(u$1(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$2){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$2.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$2.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null===(e$1=(s$3=globalThis).reactiveElementPlatformSupport)||void 0===e$1||e$1.call(s$3,{ReactiveElement:a$2}),(null!==(h$2=(r$1=globalThis).reactiveElementVersions)&&void 0!==h$2?h$2:r$1.reactiveElementVersions=[]).push("1.0.0-rc.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1,i$3,s$2,e;const o$1=globalThis.trustedTypes,l$1=o$1?o$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$1=`lit$${(Math.random()+"").slice(9)}$`,h$1="?"+n$1,r=`<${h$1}>`,u=document,c=(t="")=>u.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,a$1=t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,b=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T=b(1),w=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,V=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C(i.insertBefore(c(),t),t,void 0,s);}return n.I(t),n},E=u.createTreeWalker(u,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=o?o:f,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p:'"'===c[3]?g:$):u===g||u===$?u=p:u===_||u===m?u=f:(u=p,o=void 0);const a=u===p&&t[i+1].startsWith("/>")?" ":"";h+=u===f?s+r:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$1+a):s+n$1+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$1?l$1.createHTML(c):c,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M(t,i);if(this.el=N.createElement(v,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$1)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$1),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I:"?"===i[1]?L:"@"===i[1]?R:H});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y.test(e.tagName)){const t=e.textContent.split(n$1),i=t.length-1;if(i>0){e.textContent=o$1?o$1.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c()),E.nextNode(),d.push({type:2,index:++l});e.append(t[i],c());}}}else if(8===e.nodeType)if(e.data===h$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$1,t+1));)d.push({type:7,index:l}),t+=n$1.length-1;}l++;}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,l,n,h;if(i===w)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S(t,r.S(t,i.values),r,e)),i}class k{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);E.currentNode=o;let l=E.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$1(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new N(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C(this.k(c()),this.k(c()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H{constructor(t,i,s,e,o){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A),this.strings=s):this.H=A;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S(this,t,i,0),l=!d(t)||t!==this.H&&t!==w,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,e[s+n],i,n),h===w&&(h=this.H[n]),l||(l=!d(h)||h!==this.H[n]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I extends H{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R extends H{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===w)return;const e=this.H,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S(this,t);}}null===(i$3=(t$1=globalThis).litHtmlPlatformSupport)||void 0===i$3||i$3.call(t$1,N,C),(null!==(s$2=(e=globalThis).litHtmlVersions)&&void 0!==s$2?s$2:e.litHtmlVersions=[]).push("2.0.0-rc.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var i$2,l,o,s$1,n,a;(null!==(i$2=(a=globalThis).litElementVersions)&&void 0!==i$2?i$2:a.litElementVersions=[]).push("3.0.0-rc.2");class h extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w}}h.finalized=!0,h._$litElement$=!0,null===(o=(l=globalThis).litElementHydrateSupport)||void 0===o||o.call(l,{LitElement:h}),null===(n=(s$1=globalThis).litElementPlatformSupport)||void 0===n||n.call(s$1,{LitElement:h});

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i$1=t=>(...i)=>({_$litDirective$:t,values:i});class s{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s;}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i=i$1(class extends s{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.St){this.St=new Set;for(const t in r)this.St.add(t);return this.render(r)}this.St.forEach((t=>{null==r[t]&&(this.St.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.St.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return w}});

  var __defProp = Object.defineProperty;
  var __publicField = (obj, key, value) => {
    if (typeof key !== "symbol")
      key += "";
    if (key in obj)
      return __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value});
    return obj[key] = value;
  };
  class StartPage extends h {
    constructor() {
      super();
      __publicField(this, "getSliderWidth", () => {
        let container = this.renderRoot.querySelector("#container");
        this.computedStyleInitial = Number(window.getComputedStyle(container).getPropertyValue("width").replace("px", ""));
        return Number(window.getComputedStyle(container).getPropertyValue("width").replace("px", ""));
      });
      __publicField(this, "slider", () => {
        this.container = {transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
        this.container1 = {transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
        this.container2 = {transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
        this.iterator++;
        this.computedStyle += this.getSliderWidth();
        console.log(this.computedStyle);
        if (this.iterator == 3) {
          this.container1 = {transform: `translate3d(${this.computedStyleInitial * 3}px, 0px, 0px)`};
        }
        if (this.iterator == 4) {
          this.container1 = {transform: `translate3d(${this.computedStyleInitial * 2}px, 0px, 0px)`};
          this.container2 = {transform: `translate3d(${this.computedStyleInitial * 2}px, 0px, 0px)`};
        }
        if (this.iterator == 5) {
          this.container1 = {transform: `translate3d(${this.computedStyleInitial}px, 0px, 0px)`};
          this.container2 = {transform: `translate3d(${this.computedStyleInitial}px, 0px, 0px)`};
          this.computedStyle = 0;
          this.iterator = 0;
        }
        this.requestUpdate();
        setTimeout(() => this.slider(), 4e3);
      });
      __publicField(this, "getLetter", () => {
        return this.renderRoot.querySelector("#rainbow").textContent.split("");
      });
      __publicField(this, "getColor", () => {
        if (this.currentColor <= 5) {
          return this.arr[this.currentColor++];
        } else {
          this.currentColor = 0;
          return this.arr[this.currentColor++];
        }
      });
      __publicField(this, "colorize", () => {
        let html2 = "";
        let letters = this.getLetter();
        letters.forEach((element) => html2 += '<span  style="color:' + this.getColor() + '">' + element + "</span>");
        return html2;
      });
      __publicField(this, "becomeRainbow", () => {
        this.renderRoot.querySelector("#rainbow").innerHTML = this.colorize();
      });
      __publicField(this, "_scroll", () => {
        let Opacity = (document.documentElement.clientHeight - window.pageYOffset * 3.5) / document.documentElement.clientHeight;
        let OpacityFixed = Opacity.toFixed(3);
        this.welcomeOpacity = {opacity: OpacityFixed};
        if (pageYOffset > 0) {
          this.renderRoot.querySelector("#header").classList.add("headerShadow");
        } else {
          this.renderRoot.querySelector("#header").classList.remove("headerShadow");
        }
        this.requestUpdate();
        console.log(OpacityFixed);
      });
      __publicField(this, "_clickHandler", () => {
        this.popupVisibility = JSON.stringify(this.popupVisibility) == JSON.stringify({visibility: "hidden"}) ? {visibility: "visible"} : {visibility: "hidden"};
        this.requestUpdate();
      });
      this.welcomeOpacity = {opacity: 1};
      this.popupVisibility = {visibility: "hidden"};
      this.container = {transform: `translate3d(0px, 0px, 0px)`};
      this.container1 = {transform: `translate3d(0px, 0px, 0px)`};
      this.container2 = {transform: `translate3d(0px, 0px, 0px)`};
      this.arr = ["#E7484F", "#F68B1D", "#FCED00", "#009E4F", "#00AAC3", "#732982"];
      this.currentColor = 0;
      this.computedStyle = 0;
      this.computedStyleInitial = 0;
      this.iterator = 0;
    }
    firstUpdated() {
      this.becomeRainbow();
      this.slider();
    }
    connectedCallback() {
      super.connectedCallback();
      window.addEventListener("scroll", this._scroll);
    }
    static get styles() {
      return i$4`
        
      .bg {
        z-index: -1;
        position: fixed;
        overflow: hidden;
        margin-top: 64px;
        width: 100%;
        height: 100%;
        left: 0px;
      }
      
      .bgImage {
        height: 100%;
        width: 100%;
        background-repeat: repeat;
        background-image: url("src/images/background.png");
        animation: slidebg 60s linear infinite;
      }
      
      @keyframes slidebg {
        from {
          background-position-y: 0px;
          background-position-x: 0vw;
        }
        
        to {
          background-position-y: 0px;
          background-position-x: 116.5vw;
        }
        
      }

      .regButton:hover {
        animation-play-state: running;
      }
      
      .createAccButton {
        width: 20vw;
        height: 8vh;
        border: hidden;
        border-radius: 4px;font-size: 20px;
        display: grid;
        place-content: center;
        gap: 1ch;
        background: linear-gradient(135deg, rgba(255,0,24,1) 0%, rgba(255,165,44,1) 16%, rgba(255,255,65,1) 33%, rgba(0,128,24,1) 50%, rgba(0,0,249,1) 67%, rgba(134,0,125,1) 83%);
      }
      
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f8f8f8;
        height: 64px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 4;
        transition: all 0.5s ease-out;
      }
      
      .headerShadow {
        box-shadow: 0 20px 30px 0 rgba(28,9,80,.10);
      }
      
      .headerLeft {
        padding-left: 32px;
      }
      
      .headerIcon {
        width: 42px;
        height: 42px;
      }
      
      .headerCenter {
        
      }
      
      .headerText {
        font-size: 40px;  
      }
      
      .headerRight {
        padding-right: 32px;
      }
      
      .headerUser {
        width: 42px;
        height: 42px;
      }

      .shadowBox {
        z-index:8;
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.5;
      }

      .crossButton {
        z-index:9;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all 1s ease;
      }

      .crossButton:hover {
        transform: rotate(180deg);
      }

      .popupRegistration {
        z-index:10;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        left: 30vw;
        width: 40vw;
        height: 100vh;
        background-color: white;
      }

      .regImage {
        margin-top: 4vh;
        margin-bottom: 4vh;
      }

      .regTerms {
        font-size: 1.2em;
        text-align: center;
        line-height: 1.4;
        word-wrap: break-word;
        margin: 60px 80px 0px 80px;
      }

      .aTerms {
        color: #667180;
        text-decoration: underline;
      }

      .regButton {
        margin-top: 60px;
        background-color: #343A40;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        width: 14vw;
        height: 40px;
        border: hidden;
        border-radius: 4px;
        font-size: 1.2em;
        color: #667180;
      }

      .regButton{
        background-image: linear-gradient(
            to right,
            #E7484F,
            #E7484F 16.65%,
            #F68B1D 16.65%,
            #F68B1D 33.3%,
            #FCED00 33.3%,
            #FCED00 49.95%,
            #009E4F 49.95%,
            #009E4F 66.6%,
            #00AAC3 66.6%,
            #00AAC3 83.25%,
            #732982 83.25%,
            #732982 100%,
            #E7484F 100%
        );
        animation: slidein 1.5s linear infinite;
        animation-play-state: paused;
      }

      .regButton:hover {
        animation-play-state: running;
      }

      @keyframes slidein {
        to {
          background-position:14vw;
        }
      }
      
      .welcome {
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1ch;
        font-size: 4.4em;
        font-weight:bold;
        color: rgb(248, 248, 248);
      }
      
      .welcomeMessage {
        line-height: 1.1
      }

      .mainContent {
        margin: 0px 10vw 0 10vw;
        background-color: #f8f8f8;
      }

      .slider {
        margin: 16px 45px 0px 45px;
        width: 90%;
        padding: 0;
        overflow: hidden;
        display: flex;
        touch-action: pan-y;
        box-sizing: inherit;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      
      ul {
        list-style-type: none;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
      }

      .container {
        min-width: calc(33.3333% - 0px);
        max-width: calc(33.3333% - 0px);
        padding: 8px;
        flex-grow: 1;
        box-sizing: inherit;
      }
      
      li {
        display: list-item;
        text-align: -webkit-match-parent;
      }
      
      .card {
        position: relative;
        padding: 24px;
        margin: 0;
        height: 100%;
        box-shadow: 0 2px 6px 0 rgba(102 113 128 0.14);
        border-radius: 8px;
        border-color: #e6eaf0;
        border-style: solid;
        border-width: 1px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 4px;
        margin-inline-end: 4px;
      }
      
      .message {
        word-wrap: break-word;
        font-size: 1.2em;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 12px;
      }
      
      .author {
        word-wrap: break-word;
        font-size: 1.2em;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 8px;
      }
      
      .bottom {
        margin: 0px 10vw 0 10vw;
        background-color: #f8f8f8;
        box-sizing: border-box;
        border-radius: 4px;
      }
      
      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .gachiLink {
        transition: all .2s ease-in-out;
      }
      
      .gachiLink:hover {
         transform: scale(1.2);
      }
      
      .linkIcon {
        width: 32px;
        height: 32px;
      }
      
      a {
        text-decoration: none;
      }
      
      .tooltip {
        position: relative;
        background: pink;
        padding: 5px 12px;
        margin: 5px;
        font-size: 15px;
        border-radius: 100%;
        color: #FFF;
      }

      .tooltip:before,
      .tooltip:after {
        position: absolute;
        content: '';
        opacity: 0;
        transition: all 0.4s ease;
      }

      .tooltip:before {
        border-width: 10px 8px 0 8px;
        border-style: solid;
        border-color: pink transparent transparent transparent;
        top: -15px;
        transform: translateY(20px);
      }

      .tooltip:after {
        content: attr(data-tooltip);
        background: pink;
        width: 160px;
        height: 40px;
        font-size: 13px;
        font-weight: 300;
        top: -75px;
        left: -10px;
        padding: 10px;
        border-radius: 5px;
        letter-spacing: 1px;
        transform: translateY(20px);
      }

      .tooltip:hover::before,
      .tooltip:hover::after {
        opacity: 1;
        transform: translateY(-2px);
      }

      @keyframes shake {
        0% {
          transform: rotate(2deg);
        }
        50% {
          transform: rotate(-3deg);
        }
        70% {
          transform: rotate(3deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      .anim:hover {
        animation: shake 500ms ease-in-out forwards;
      }
      
      p {
        
      }
    
    `;
    }
    render() {
      return T`
        <div class="app">
            <div class="bg">
                <div class="bgImage"></div>
            </div>
            <div class="header" id="header">
                <div class="headerLeft">
                <img src="src/images/icon_gachinder.svg" class="headerIcon">
                </div>
                <div class="headerCenter">
                <span id="rainbow" class="headerText">Gachinder</span>
                </div>
                <div class="headerRight">
                <img src="src/images/icon-user-149071.svg" class="headerUser">
                </div>
            </div>
            <div class="popup" style="${i(this.popupVisibility)}">
                <div class="shadowBox"></div>
                <img class="crossButton" src="src/images/cross.svg" @click="${this._clickHandler}">
                <div class="popupRegistration">
                    <div class="regImage">
                        <img style="width: 80px; height: 80px" src="src/images/icon_gachinder.svg">
                    </div>
                    <span class="regTerms">создать аккаунт</span>
                    <div class="regTerms">
                        <span >Нажимая "Зарегестрироваться" вы принимаете наши <a class="aTerms" href="">Условия
                        </a>. Чтобы узнать, как мы обрабатываем ваши данные, ознакомьтесь с нашей <a class="aTerms" href="">Политика Конфиденциальности
                        </a> и <a class="aTerms" href="">Политика в отношении файлов Cookie</a>.</span>
                    </div>
                    <div class="anim"><span class="tooltip" data-tooltip="username must consist of 29 symbols.">?</span></div>
                    <button class="regButton">Зарегестрироваться</button>
                </div>
            </div>
            <div class="welcome" id="welcome" style="${i(this.welcomeOpacity)}">
                <span id="rainbow" class="welcomeMessage">Welcome to the Dungeon!</span>
                <button class="createAccButton" @click="${this._clickHandler}">become a real man</button>
            </div>
            <div class="mainContent">
                <ul id="slider" class="slider">
                    <li id="container" class="container" data-index="1" style="${i(this.container1)}">
                        <div class="card">
                            <span class="author">Van Darkholme</span>
                            <div></div>
                            <span class="message">This gay website turns me on </span>
                        </div>
                    </li>
                    <li id="container" class="container" data-index="2" style="${i(this.container2)}">
                        <div class="card">
                            <span class="author">Actor from sexual harassment in the workplace</span>
                            <div></div>
                            <span class="message">You've got a fat cock? I've got a fat cock too. Maybe we should rub our fat cocks together sometime?</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${i(this.container)}">
                        <div class="card">
                            <span class="author">Billy Herington</span>
                            <div></div>
                            <span class="message">We must pull up our pants</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${i(this.container)}">
                        <div class="card">
                            <span class="author">Steeve Rambo</span>
                            <div></div>
                            <span class="message">without further interruption, start chatting and suck some dick</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${i(this.container)}">
                        <div class="card">
                            <span class="author">Brad McGuire</span>
                            <div></div>
                            <span class="message">Our daddy taught us not to be ashamed of our cringe dialogues</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <div class="links">
                    <div class="gachiLink">
                        <a href="https://vk.com/gachimuchi">
                        <img class="linkIcon" src="src/images/vk.svg">Russian gachi community</a>
                    </div>
                    <div class="gachiLink">
                        <a href="https://www.twitch.tv/vansamaofficial?lang=ru">
                        <img class="linkIcon" src="src/images/twitch.svg">VanDarkholme Twitch</a>
                    </div>
                    <div class="gachiLink">
                        <a href="https://discord.com/invite/vansamaofficial">
                        <img class="linkIcon" src="src/images/discord.svg">VanDarkholme Discord</a>
                    </div>
                </div>
            </div>
            
            
            
            
            
            
        </div>
        `;
    }
  }
  customElements.define("start-page", StartPage);

  exports.StartPage = StartPage;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
