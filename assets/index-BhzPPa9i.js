function rE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var og={exports:{}},vl={},ag={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),sE=Symbol.for("react.portal"),oE=Symbol.for("react.fragment"),aE=Symbol.for("react.strict_mode"),lE=Symbol.for("react.profiler"),uE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),hE=Symbol.for("react.forward_ref"),dE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),pE=Symbol.for("react.lazy"),jf=Symbol.iterator;function mE(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,cg={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=Ci.prototype;function mh(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}var gh=mh.prototype=new hg;gh.constructor=mh;ug(gh,Ci.prototype);gh.isPureReactComponent=!0;var Bf=Array.isArray,dg=Object.prototype.hasOwnProperty,yh={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)dg.call(e,r)&&!fg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:oo,type:t,key:s,ref:a,props:i,_owner:yh.current}}function gE(t,e){return{$$typeof:oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function yE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zf=/\/+/g;function yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yE(""+t.key):e.toString(36)}function ua(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case oo:case sE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+yu(a,0):r,Bf(i)?(n="",t!=null&&(n=t.replace(zf,"$&/")+"/"),ua(i,e,n,"",function(h){return h})):i!=null&&(vh(i)&&(i=gE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Bf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+yu(s,l);a+=ua(s,e,n,u,i)}else if(u=mE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+yu(s,l++),a+=ua(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function jo(t,e,n){if(t==null)return t;var r=[],i=0;return ua(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},ca={transition:null},_E={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:ca,ReactCurrentOwner:yh};function mg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Ci;X.Fragment=oE;X.Profiler=lE;X.PureComponent=mh;X.StrictMode=aE;X.Suspense=dE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_E;X.act=mg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ug({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)dg.call(e,u)&&!fg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:oo,type:t.type,key:i,ref:s,props:r,_owner:a}};X.createContext=function(t){return t={$$typeof:cE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uE,_context:t},t.Consumer=t};X.createElement=pg;X.createFactory=function(t){var e=pg.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:hE,render:t}};X.isValidElement=vh;X.lazy=function(t){return{$$typeof:pE,_payload:{_status:-1,_result:t},_init:vE}};X.memo=function(t,e){return{$$typeof:fE,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=ca.transition;ca.transition={};try{t()}finally{ca.transition=e}};X.unstable_act=mg;X.useCallback=function(t,e){return nt.current.useCallback(t,e)};X.useContext=function(t){return nt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};X.useEffect=function(t,e){return nt.current.useEffect(t,e)};X.useId=function(){return nt.current.useId()};X.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return nt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};X.useRef=function(t){return nt.current.useRef(t)};X.useState=function(t){return nt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return nt.current.useTransition()};X.version="18.3.1";ag.exports=X;var $=ag.exports;const vt=iE($),EE=rE({__proto__:null,default:vt},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=$,IE=Symbol.for("react.element"),TE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,AE=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PE={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)SE.call(e,r)&&!PE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IE,type:t,key:s,ref:a,props:i,_owner:AE.current}}vl.Fragment=TE;vl.jsx=gg;vl.jsxs=gg;og.exports=vl;var L=og.exports,tc={},yg={exports:{}},mt={},vg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var q=B.length;B.push(G);e:for(;0<q;){var de=q-1>>>1,re=B[de];if(0<i(re,G))B[de]=G,B[q]=re,q=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],q=B.pop();if(q!==G){B[0]=q;e:for(var de=0,re=B.length,_e=re>>>1;de<_e;){var Qt=2*(de+1)-1,Xt=B[Qt],Yt=Qt+1,Jt=B[Yt];if(0>i(Xt,q))Yt<re&&0>i(Jt,Xt)?(B[de]=Jt,B[Yt]=q,de=Yt):(B[de]=Xt,B[Qt]=q,de=Qt);else if(Yt<re&&0>i(Jt,q))B[de]=Jt,B[Yt]=q,de=Yt;else break e}}return G}function i(B,G){var q=B.sortIndex-G.sortIndex;return q!==0?q:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,m=null,y=3,C=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function O(B){if(N=!1,S(B),!P)if(n(u)!==null)P=!0,Mi(U);else{var G=n(h);G!==null&&qt(O,G.startTime-B)}}function U(B,G){P=!1,N&&(N=!1,T(g),g=-1),C=!0;var q=y;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!A());){var de=m.callback;if(typeof de=="function"){m.callback=null,y=m.priorityLevel;var re=de(m.expirationTime<=G);G=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var _e=!0;else{var Qt=n(h);Qt!==null&&qt(O,Qt.startTime-G),_e=!1}return _e}finally{m=null,y=q,C=!1}}var j=!1,E=null,g=-1,_=5,w=-1;function A(){return!(t.unstable_now()-w<_)}function k(){if(E!==null){var B=t.unstable_now();w=B;var G=!0;try{G=E(!0,B)}finally{G?I():(j=!1,E=null)}}else j=!1}var I;if(typeof v=="function")I=function(){v(k)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,sr=yt.port2;yt.port1.onmessage=k,I=function(){sr.postMessage(null)}}else I=function(){D(k,0)};function Mi(B){E=B,j||(j=!0,I())}function qt(B,G){g=D(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||C||(P=!0,Mi(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var q=y;y=G;try{return B()}finally{y=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=y;y=B;try{return G()}finally{y=q}},t.unstable_scheduleCallback=function(B,G,q){var de=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?de+q:de):q=de,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,B={id:f++,callback:G,priorityLevel:B,startTime:q,expirationTime:re,sortIndex:-1},q>de?(B.sortIndex=q,e(h,B),n(u)===null&&B===n(h)&&(N?(T(g),g=-1):N=!0,qt(O,q-de))):(B.sortIndex=re,e(u,B),P||C||(P=!0,Mi(U))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var G=y;return function(){var q=y;y=G;try{return B.apply(this,arguments)}finally{y=q}}}})(_g);vg.exports=_g;var RE=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=$,pt=RE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eg=new Set,Ns={};function Or(t,e){mi(t,e),mi(t+"Capture",e)}function mi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)Eg.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,kE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},Hf={};function NE(t){return nc.call(Hf,t)?!0:nc.call($f,t)?!1:kE.test(t)?Hf[t]=!0:($f[t]=!0,!1)}function xE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OE(t,e,n,r){if(e===null||typeof e>"u"||xE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _h=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_h,Eh);be[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_h,Eh);be[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_h,Eh);be[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OE(e,n,i,r)&&(n=null),r||i===null?NE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _n=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Wf=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,vu;function ls(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var _u=!1;function Eu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function DE(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=Eu(t.type,!1),t;case 11:return t=Eu(t.type.render,!1),t;case 1:return t=Eu(t.type,!0),t;default:return""}}function oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case Wr:return"Portal";case rc:return"Profiler";case Ih:return"StrictMode";case ic:return"Suspense";case sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case wg:return(t._context.displayName||"Context")+".Provider";case Th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:oc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return oc(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=VE(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function lc(t,e){Pg(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&uc(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uc(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(us(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function Rg(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $o,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){ME.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function Ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ng(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FE=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(FE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function Ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,oi=null,ai=null;function Xf(t){if(t=uo(t)){if(typeof mc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Tl(e),mc(t.stateNode,t.type,e))}}function Og(t){oi?ai?ai.push(t):ai=[t]:oi=t}function Dg(){if(oi){var t=oi,e=ai;if(ai=oi=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function Lg(t,e){return t(e)}function Vg(){}var wu=!1;function Mg(t,e,n){if(wu)return t(e,n);wu=!0;try{return Lg(t,e,n)}finally{wu=!1,(oi!==null||ai!==null)&&(Vg(),Dg())}}function Os(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var gc=!1;if(fn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{gc=!1}function UE(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ys=!1,ka=null,Na=!1,yc=null,bE={onError:function(t){ys=!0,ka=t}};function jE(t,e,n,r,i,s,a,l,u){ys=!1,ka=null,UE.apply(bE,arguments)}function BE(t,e,n,r,i,s,a,l,u){if(jE.apply(this,arguments),ys){if(ys){var h=ka;ys=!1,ka=null}else throw Error(M(198));Na||(Na=!0,yc=h)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(Dr(t)!==t)throw Error(M(188))}function zE(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),t;if(s===r)return Yf(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Ug(t){return t=zE(t),t!==null?bg(t):null}function bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bg(t);if(e!==null)return e;t=t.sibling}return null}var jg=pt.unstable_scheduleCallback,Jf=pt.unstable_cancelCallback,$E=pt.unstable_shouldYield,HE=pt.unstable_requestPaint,Ee=pt.unstable_now,WE=pt.unstable_getCurrentPriorityLevel,Ph=pt.unstable_ImmediatePriority,Bg=pt.unstable_UserBlockingPriority,xa=pt.unstable_NormalPriority,KE=pt.unstable_LowPriority,zg=pt.unstable_IdlePriority,_l=null,zt=null;function GE(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:XE,qE=Math.log,QE=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(qE(t)/QE|0)|0}var Ho=64,Wo=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=cs(l):(s&=a,s!==0&&(r=cs(s)))}else a=n&~i,a!==0?r=cs(a):s!==0&&(r=cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function YE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Dt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=YE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $g(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wg,Ch,Kg,Gg,qg,_c=!1,Ko=[],Fn=null,Un=null,bn=null,Ds=new Map,Ls=new Map,Cn=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Zi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=uo(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tw(t,e,n,r,i){switch(e){case"focusin":return Fn=Zi(Fn,t,e,n,r,i),!0;case"dragenter":return Un=Zi(Un,t,e,n,r,i),!0;case"mouseover":return bn=Zi(bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ds.set(s,Zi(Ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Zi(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Qg(t){var e=fr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,qg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return e=uo(n),e!==null&&Ch(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){ha(t)&&n.delete(e)}function nw(){_c=!1,Fn!==null&&ha(Fn)&&(Fn=null),Un!==null&&ha(Un)&&(Un=null),bn!==null&&ha(bn)&&(bn=null),Ds.forEach(ep),Ls.forEach(ep)}function es(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,nw)))}function Vs(t){function e(i){return es(i,t)}if(0<Ko.length){es(Ko[0],t);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fn!==null&&es(Fn,t),Un!==null&&es(Un,t),bn!==null&&es(bn,t),Ds.forEach(e),Ls.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&Cn.shift()}var li=_n.ReactCurrentBatchConfig,Da=!0;function rw(t,e,n,r){var i=ne,s=li.transition;li.transition=null;try{ne=1,kh(t,e,n,r)}finally{ne=i,li.transition=s}}function iw(t,e,n,r){var i=ne,s=li.transition;li.transition=null;try{ne=4,kh(t,e,n,r)}finally{ne=i,li.transition=s}}function kh(t,e,n,r){if(Da){var i=Ec(t,e,n,r);if(i===null)Ou(t,e,r,La,n),Zf(t,r);else if(tw(i,t,e,n,r))r.stopPropagation();else if(Zf(t,r),e&4&&-1<ew.indexOf(t)){for(;i!==null;){var s=uo(i);if(s!==null&&Wg(s),s=Ec(t,e,n,r),s===null&&Ou(t,e,r,La,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ou(t,e,r,null,n)}}var La=null;function Ec(t,e,n,r){if(La=null,t=Ah(r),t=fr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return La=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WE()){case Ph:return 1;case Bg:return 4;case xa:case KE:return 16;case zg:return 536870912;default:return 16}default:return 16}}var Ln=null,Nh=null,da=null;function Yg(){if(da)return da;var t,e=Nh,n=e.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return da=i.slice(t,1<r?1-r:void 0)}function fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function tp(){return!1}function gt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:tp,this.isPropagationStopped=tp,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xh=gt(ki),lo=ge({},ki,{view:0,detail:0}),sw=gt(lo),Tu,Su,ts,El=ge({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(Tu=t.screenX-ts.screenX,Su=t.screenY-ts.screenY):Su=Tu=0,ts=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),np=gt(El),ow=ge({},El,{dataTransfer:0}),aw=gt(ow),lw=ge({},lo,{relatedTarget:0}),Au=gt(lw),uw=ge({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),cw=gt(uw),hw=ge({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dw=gt(hw),fw=ge({},ki,{data:0}),rp=gt(fw),pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gw[t])?!!e[t]:!1}function Oh(){return yw}var vw=ge({},lo,{key:function(t){if(t.key){var e=pw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_w=gt(vw),Ew=ge({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=gt(Ew),ww=ge({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),Iw=gt(ww),Tw=ge({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sw=gt(Tw),Aw=ge({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pw=gt(Aw),Rw=[9,13,27,32],Dh=fn&&"CompositionEvent"in window,vs=null;fn&&"documentMode"in document&&(vs=document.documentMode);var Cw=fn&&"TextEvent"in window&&!vs,Jg=fn&&(!Dh||vs&&8<vs&&11>=vs),sp=" ",op=!1;function Zg(t,e){switch(t){case"keyup":return Rw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ey(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function kw(t,e){switch(t){case"compositionend":return ey(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return t=e.data,t===sp&&op?null:t;default:return null}}function Nw(t,e){if(Gr)return t==="compositionend"||!Dh&&Zg(t,e)?(t=Yg(),da=Nh=Ln=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xw[t.type]:e==="textarea"}function ty(t,e,n,r){Og(r),e=Va(e,"onChange"),0<e.length&&(n=new xh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _s=null,Ms=null;function Ow(t){dy(t,0)}function wl(t){var e=Xr(t);if(Ag(e))return t}function Dw(t,e){if(t==="change")return e}var ny=!1;if(fn){var Pu;if(fn){var Ru="oninput"in document;if(!Ru){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Ru=typeof lp.oninput=="function"}Pu=Ru}else Pu=!1;ny=Pu&&(!document.documentMode||9<document.documentMode)}function up(){_s&&(_s.detachEvent("onpropertychange",ry),Ms=_s=null)}function ry(t){if(t.propertyName==="value"&&wl(Ms)){var e=[];ty(e,Ms,t,Ah(t)),Mg(Ow,e)}}function Lw(t,e,n){t==="focusin"?(up(),_s=e,Ms=n,_s.attachEvent("onpropertychange",ry)):t==="focusout"&&up()}function Vw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(Ms)}function Mw(t,e){if(t==="click")return wl(e)}function Fw(t,e){if(t==="input"||t==="change")return wl(e)}function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vt=typeof Object.is=="function"?Object.is:Uw;function Fs(t,e){if(Vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(e,i)||!Vt(t[i],e[i]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=cp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function iy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sy(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bw(t){var e=sy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iy(n.ownerDocument.documentElement,n)){if(r!==null&&Lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hp(n,s);var a=hp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jw=fn&&"documentMode"in document&&11>=document.documentMode,qr=null,wc=null,Es=null,Ic=!1;function dp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||qr==null||qr!==Ca(r)||(r=qr,"selectionStart"in r&&Lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Es&&Fs(Es,r)||(Es=r,r=Va(wc,"onSelect"),0<r.length&&(e=new xh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Cu={},oy={};fn&&(oy=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Il(t){if(Cu[t])return Cu[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in oy)return Cu[t]=e[n];return t}var ay=Il("animationend"),ly=Il("animationiteration"),uy=Il("animationstart"),cy=Il("transitionend"),hy=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){hy.set(t,e),Or(e,[t])}for(var ku=0;ku<fp.length;ku++){var Nu=fp[ku],Bw=Nu.toLowerCase(),zw=Nu[0].toUpperCase()+Nu.slice(1);er(Bw,"on"+zw)}er(ay,"onAnimationEnd");er(ly,"onAnimationIteration");er(uy,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(cy,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));function pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BE(r,e,void 0,t),t.currentTarget=null}function dy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;pp(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;pp(i,l,h),s=u}}}if(Na)throw t=yc,Na=!1,yc=null,t}function ue(t,e){var n=e[Rc];n===void 0&&(n=e[Rc]=new Set);var r=t+"__bubble";n.has(r)||(fy(e,t,2,!1),n.add(r))}function xu(t,e,n){var r=0;e&&(r|=4),fy(n,t,r,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[Qo]){t[Qo]=!0,Eg.forEach(function(n){n!=="selectionchange"&&($w.has(n)||xu(n,!1,t),xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,xu("selectionchange",!1,e))}}function fy(t,e,n,r){switch(Xg(e)){case 1:var i=rw;break;case 4:i=iw;break;default:i=kh}n=i.bind(null,e,n,t),i=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ou(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=fr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Mg(function(){var h=s,f=Ah(n),m=[];e:{var y=hy.get(t);if(y!==void 0){var C=xh,P=t;switch(t){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":C=_w;break;case"focusin":P="focus",C=Au;break;case"focusout":P="blur",C=Au;break;case"beforeblur":case"afterblur":C=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Iw;break;case ay:case ly:case uy:C=cw;break;case cy:C=Sw;break;case"scroll":C=sw;break;case"wheel":C=Pw;break;case"copy":case"cut":case"paste":C=dw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ip}var N=(e&4)!==0,D=!N&&t==="scroll",T=N?y!==null?y+"Capture":null:y;N=[];for(var v=h,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Os(v,T),O!=null&&N.push(bs(v,O,S)))),D)break;v=v.return}0<N.length&&(y=new C(y,P,null,n,f),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",y&&n!==pc&&(P=n.relatedTarget||n.fromElement)&&(fr(P)||P[pn]))break e;if((C||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=h,P=P?fr(P):null,P!==null&&(D=Dr(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=h),C!==P)){if(N=np,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=ip,O="onPointerLeave",T="onPointerEnter",v="pointer"),D=C==null?y:Xr(C),S=P==null?y:Xr(P),y=new N(O,v+"leave",C,n,f),y.target=D,y.relatedTarget=S,O=null,fr(f)===h&&(N=new N(T,v+"enter",P,n,f),N.target=S,N.relatedTarget=D,O=N),D=O,C&&P)t:{for(N=C,T=P,v=0,S=N;S;S=zr(S))v++;for(S=0,O=T;O;O=zr(O))S++;for(;0<v-S;)N=zr(N),v--;for(;0<S-v;)T=zr(T),S--;for(;v--;){if(N===T||T!==null&&N===T.alternate)break t;N=zr(N),T=zr(T)}N=null}else N=null;C!==null&&mp(m,y,C,N,!1),P!==null&&D!==null&&mp(m,D,P,N,!0)}}e:{if(y=h?Xr(h):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var U=Dw;else if(ap(y))if(ny)U=Fw;else{U=Vw;var j=Lw}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=Mw);if(U&&(U=U(t,h))){ty(m,U,n,f);break e}j&&j(t,y,h),t==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&uc(y,"number",y.value)}switch(j=h?Xr(h):window,t){case"focusin":(ap(j)||j.contentEditable==="true")&&(qr=j,wc=h,Es=null);break;case"focusout":Es=wc=qr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,dp(m,n,f);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":dp(m,n,f)}var E;if(Dh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Gr?Zg(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Jg&&n.locale!=="ko"&&(Gr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Gr&&(E=Yg()):(Ln=f,Nh="value"in Ln?Ln.value:Ln.textContent,Gr=!0)),j=Va(h,g),0<j.length&&(g=new rp(g,t,null,n,f),m.push({event:g,listeners:j}),E?g.data=E:(E=ey(n),E!==null&&(g.data=E)))),(E=Cw?kw(t,n):Nw(t,n))&&(h=Va(h,"onBeforeInput"),0<h.length&&(f=new rp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}dy(m,e)})}function bs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Va(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Os(t,n),s!=null&&r.unshift(bs(t,s,i)),s=Os(t,e),s!=null&&r.push(bs(t,s,i))),t=t.return}return r}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Os(n,s),u!=null&&a.unshift(bs(n,u,l))):i||(u=Os(n,s),u!=null&&a.push(bs(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Hw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(Hw,`
`).replace(Ww,"")}function Xo(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(M(425))}function Ma(){}var Tc=null,Sc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(qw)}:Pc;function qw(t){setTimeout(function(){throw t})}function Du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),jt="__reactFiber$"+Ni,js="__reactProps$"+Ni,pn="__reactContainer$"+Ni,Rc="__reactEvents$"+Ni,Qw="__reactListeners$"+Ni,Xw="__reactHandles$"+Ni;function fr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[jt])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function uo(t){return t=t[jt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Tl(t){return t[js]||null}var Cc=[],Yr=-1;function tr(t){return{current:t}}function ce(t){0>Yr||(t.current=Cc[Yr],Cc[Yr]=null,Yr--)}function oe(t,e){Yr++,Cc[Yr]=t.current,t.current=e}var Xn={},Xe=tr(Xn),ot=tr(!1),wr=Xn;function gi(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Fa(){ce(ot),ce(Xe)}function _p(t,e,n){if(Xe.current!==Xn)throw Error(M(168));oe(Xe,e),oe(ot,n)}function py(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,LE(t)||"Unknown",i));return ge({},n,r)}function Ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,wr=Xe.current,oe(Xe,t),oe(ot,ot.current),!0}function Ep(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=py(t,e,wr),r.__reactInternalMemoizedMergedChildContext=t,ce(ot),ce(Xe),oe(Xe,t)):ce(ot),oe(ot,n)}var nn=null,Sl=!1,Lu=!1;function my(t){nn===null?nn=[t]:nn.push(t)}function Yw(t){Sl=!0,my(t)}function nr(){if(!Lu&&nn!==null){Lu=!0;var t=0,e=ne;try{var n=nn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nn=null,Sl=!1}catch(i){throw nn!==null&&(nn=nn.slice(t+1)),jg(Ph,nr),i}finally{ne=e,Lu=!1}}return null}var Jr=[],Zr=0,ba=null,ja=0,_t=[],Et=0,Ir=null,rn=1,sn="";function cr(t,e){Jr[Zr++]=ja,Jr[Zr++]=ba,ba=t,ja=e}function gy(t,e,n){_t[Et++]=rn,_t[Et++]=sn,_t[Et++]=Ir,Ir=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function Vh(t){t.return!==null&&(cr(t,1),gy(t,1,0))}function Mh(t){for(;t===ba;)ba=Jr[--Zr],Jr[Zr]=null,ja=Jr[--Zr],Jr[Zr]=null;for(;t===Ir;)Ir=_t[--Et],_t[Et]=null,sn=_t[--Et],_t[Et]=null,rn=_t[--Et],_t[Et]=null}var ft=null,dt=null,he=!1,kt=null;function yy(t,e){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,dt=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,dt=null,!0):!1;default:return!1}}function kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(he){var e=dt;if(e){var n=e;if(!wp(t,e)){if(kc(t))throw Error(M(418));e=jn(n.nextSibling);var r=ft;e&&wp(t,e)?yy(r,n):(t.flags=t.flags&-4097|2,he=!1,ft=t)}}else{if(kc(t))throw Error(M(418));t.flags=t.flags&-4097|2,he=!1,ft=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function Yo(t){if(t!==ft)return!1;if(!he)return Ip(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=dt)){if(kc(t))throw vy(),Error(M(418));for(;e;)yy(t,e),e=jn(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ft?jn(t.stateNode.nextSibling):null;return!0}function vy(){for(var t=dt;t;)t=jn(t.nextSibling)}function yi(){dt=ft=null,he=!1}function Fh(t){kt===null?kt=[t]:kt.push(t)}var Jw=_n.ReactCurrentBatchConfig;function ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Jo(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function _y(t){function e(T,v){if(t){var S=T.deletions;S===null?(T.deletions=[v],T.flags|=16):S.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Hn(T,v),T.index=0,T.sibling=null,T}function s(T,v,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<v?(T.flags|=2,v):S):(T.flags|=2,v)):(T.flags|=1048576,v)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,S,O){return v===null||v.tag!==6?(v=Bu(S,T.mode,O),v.return=T,v):(v=i(v,S),v.return=T,v)}function u(T,v,S,O){var U=S.type;return U===Kr?f(T,v,S.props.children,O,S.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Pn&&Tp(U)===v.type)?(O=i(v,S.props),O.ref=ns(T,v,S),O.return=T,O):(O=Ea(S.type,S.key,S.props,null,T.mode,O),O.ref=ns(T,v,S),O.return=T,O)}function h(T,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=zu(S,T.mode,O),v.return=T,v):(v=i(v,S.children||[]),v.return=T,v)}function f(T,v,S,O,U){return v===null||v.tag!==7?(v=vr(S,T.mode,O,U),v.return=T,v):(v=i(v,S),v.return=T,v)}function m(T,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bu(""+v,T.mode,S),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:return S=Ea(v.type,v.key,v.props,null,T.mode,S),S.ref=ns(T,null,v),S.return=T,S;case Wr:return v=zu(v,T.mode,S),v.return=T,v;case Pn:var O=v._init;return m(T,O(v._payload),S)}if(us(v)||Yi(v))return v=vr(v,T.mode,S,null),v.return=T,v;Jo(T,v)}return null}function y(T,v,S,O){var U=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(T,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bo:return S.key===U?u(T,v,S,O):null;case Wr:return S.key===U?h(T,v,S,O):null;case Pn:return U=S._init,y(T,v,U(S._payload),O)}if(us(S)||Yi(S))return U!==null?null:f(T,v,S,O,null);Jo(T,S)}return null}function C(T,v,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,l(v,T,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Bo:return T=T.get(O.key===null?S:O.key)||null,u(v,T,O,U);case Wr:return T=T.get(O.key===null?S:O.key)||null,h(v,T,O,U);case Pn:var j=O._init;return C(T,v,S,j(O._payload),U)}if(us(O)||Yi(O))return T=T.get(S)||null,f(v,T,O,U,null);Jo(v,O)}return null}function P(T,v,S,O){for(var U=null,j=null,E=v,g=v=0,_=null;E!==null&&g<S.length;g++){E.index>g?(_=E,E=null):_=E.sibling;var w=y(T,E,S[g],O);if(w===null){E===null&&(E=_);break}t&&E&&w.alternate===null&&e(T,E),v=s(w,v,g),j===null?U=w:j.sibling=w,j=w,E=_}if(g===S.length)return n(T,E),he&&cr(T,g),U;if(E===null){for(;g<S.length;g++)E=m(T,S[g],O),E!==null&&(v=s(E,v,g),j===null?U=E:j.sibling=E,j=E);return he&&cr(T,g),U}for(E=r(T,E);g<S.length;g++)_=C(E,T,g,S[g],O),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?g:_.key),v=s(_,v,g),j===null?U=_:j.sibling=_,j=_);return t&&E.forEach(function(A){return e(T,A)}),he&&cr(T,g),U}function N(T,v,S,O){var U=Yi(S);if(typeof U!="function")throw Error(M(150));if(S=U.call(S),S==null)throw Error(M(151));for(var j=U=null,E=v,g=v=0,_=null,w=S.next();E!==null&&!w.done;g++,w=S.next()){E.index>g?(_=E,E=null):_=E.sibling;var A=y(T,E,w.value,O);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(T,E),v=s(A,v,g),j===null?U=A:j.sibling=A,j=A,E=_}if(w.done)return n(T,E),he&&cr(T,g),U;if(E===null){for(;!w.done;g++,w=S.next())w=m(T,w.value,O),w!==null&&(v=s(w,v,g),j===null?U=w:j.sibling=w,j=w);return he&&cr(T,g),U}for(E=r(T,E);!w.done;g++,w=S.next())w=C(E,T,g,w.value,O),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),v=s(w,v,g),j===null?U=w:j.sibling=w,j=w);return t&&E.forEach(function(k){return e(T,k)}),he&&cr(T,g),U}function D(T,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Kr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Bo:e:{for(var U=S.key,j=v;j!==null;){if(j.key===U){if(U=S.type,U===Kr){if(j.tag===7){n(T,j.sibling),v=i(j,S.props.children),v.return=T,T=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Pn&&Tp(U)===j.type){n(T,j.sibling),v=i(j,S.props),v.ref=ns(T,j,S),v.return=T,T=v;break e}n(T,j);break}else e(T,j);j=j.sibling}S.type===Kr?(v=vr(S.props.children,T.mode,O,S.key),v.return=T,T=v):(O=Ea(S.type,S.key,S.props,null,T.mode,O),O.ref=ns(T,v,S),O.return=T,T=O)}return a(T);case Wr:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(T,v.sibling),v=i(v,S.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=zu(S,T.mode,O),v.return=T,T=v}return a(T);case Pn:return j=S._init,D(T,v,j(S._payload),O)}if(us(S))return P(T,v,S,O);if(Yi(S))return N(T,v,S,O);Jo(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,S),v.return=T,T=v):(n(T,v),v=Bu(S,T.mode,O),v.return=T,T=v),a(T)):n(T,v)}return D}var vi=_y(!0),Ey=_y(!1),Ba=tr(null),za=null,ei=null,Uh=null;function bh(){Uh=ei=za=null}function jh(t){var e=Ba.current;ce(Ba),t._currentValue=e}function xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ui(t,e){za=t,Uh=ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},ei===null){if(za===null)throw Error(M(308));ei=t,za.dependencies={lanes:0,firstContext:t}}else ei=ei.next=t;return e}var pr=null;function Bh(t){pr===null?pr=[t]:pr.push(t)}function wy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bh(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bh(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rh(t,n)}}function Sp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $a(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=h=u=null,l=s;do{var y=l.lane,C=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(y=e,C=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(C,m,y);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,y=typeof P=="function"?P.call(C,m,y):P,y==null)break e;m=ge({},m,y);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=m):f=f.next=C,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=m}}function Ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var co={},$t=tr(co),Bs=tr(co),zs=tr(co);function mr(t){if(t===co)throw Error(M(174));return t}function $h(t,e){switch(oe(zs,e),oe(Bs,t),oe($t,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hc(e,t)}ce($t),oe($t,e)}function _i(){ce($t),ce(Bs),ce(zs)}function Ty(t){mr(zs.current);var e=mr($t.current),n=hc(e,t.type);e!==n&&(oe(Bs,t),oe($t,n))}function Hh(t){Bs.current===t&&(ce($t),ce(Bs))}var pe=tr(0);function Ha(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function Wh(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var ma=_n.ReactCurrentDispatcher,Mu=_n.ReactCurrentBatchConfig,Tr=0,me=null,Ae=null,ke=null,Wa=!1,ws=!1,$s=0,Zw=0;function $e(){throw Error(M(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vt(t[n],e[n]))return!1;return!0}function Gh(t,e,n,r,i,s){if(Tr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ma.current=t===null||t.memoizedState===null?rI:iI,t=n(r,i),ws){s=0;do{if(ws=!1,$s=0,25<=s)throw Error(M(301));s+=1,ke=Ae=null,e.updateQueue=null,ma.current=sI,t=n(r,i)}while(ws)}if(ma.current=Ka,e=Ae!==null&&Ae.next!==null,Tr=0,ke=Ae=me=null,Wa=!1,e)throw Error(M(300));return t}function qh(){var t=$s!==0;return $s=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?me.memoizedState=ke=t:ke=ke.next=t,ke}function St(){if(Ae===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=ke===null?me.memoizedState:ke.next;if(e!==null)ke=e,Ae=t;else{if(t===null)throw Error(M(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},ke===null?me.memoizedState=ke=t:ke=ke.next=t}return ke}function Hs(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=St(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Tr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,me.lanes|=f,Sr|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Vt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=St(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Vt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Sy(){}function Ay(t,e){var n=me,r=St(),i=e(),s=!Vt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Qh(Cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ws(9,Ry.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(M(349));Tr&30||Py(n,e,i)}return i}function Py(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ry(t,e,n,r){e.value=n,e.getSnapshot=r,ky(e)&&Ny(t)}function Cy(t,e,n){return n(function(){ky(e)&&Ny(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vt(t,n)}catch{return!0}}function Ny(t){var e=mn(t,1);e!==null&&Lt(e,t,1,-1)}function Pp(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=nI.bind(null,me,t),[e.memoizedState,t]}function Ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xy(){return St().memoizedState}function ga(t,e,n,r){var i=bt();me.flags|=t,i.memoizedState=Ws(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var a=Ae.memoizedState;if(s=a.destroy,r!==null&&Kh(r,a.deps)){i.memoizedState=Ws(e,n,s,r);return}}me.flags|=t,i.memoizedState=Ws(1|e,n,s,r)}function Rp(t,e){return ga(8390656,8,t,e)}function Qh(t,e){return Al(2048,8,t,e)}function Oy(t,e){return Al(4,2,t,e)}function Dy(t,e){return Al(4,4,t,e)}function Ly(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,Ly.bind(null,e,t),n)}function Xh(){}function My(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fy(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uy(t,e,n){return Tr&21?(Vt(n,e)||(n=$g(),me.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function eI(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Mu.transition;Mu.transition={};try{t(!1),e()}finally{ne=n,Mu.transition=r}}function by(){return St().memoizedState}function tI(t,e,n){var r=$n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))By(e,n);else if(n=wy(t,e,n,r),n!==null){var i=tt();Lt(n,t,r,i),zy(n,e,r)}}function nI(t,e,n){var r=$n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))By(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var u=e.interleaved;u===null?(i.next=i,Bh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=wy(t,e,i,r),n!==null&&(i=tt(),Lt(n,t,r,i),zy(n,e,r))}}function jy(t){var e=t.alternate;return t===me||e!==null&&e===me}function By(t,e){ws=Wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rh(t,n)}}var Ka={readContext:Tt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},rI={readContext:Tt,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:Rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ga(4194308,4,Ly.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return ga(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tI.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:Xh,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=eI.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=bt();if(he){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),xe===null)throw Error(M(349));Tr&30||Py(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rp(Cy.bind(null,r,s,t),[t]),r.flags|=2048,Ws(9,Ry.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=xe.identifierPrefix;if(he){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iI={readContext:Tt,useCallback:My,useContext:Tt,useEffect:Qh,useImperativeHandle:Vy,useInsertionEffect:Oy,useLayoutEffect:Dy,useMemo:Fy,useReducer:Fu,useRef:xy,useState:function(){return Fu(Hs)},useDebugValue:Xh,useDeferredValue:function(t){var e=St();return Uy(e,Ae.memoizedState,t)},useTransition:function(){var t=Fu(Hs)[0],e=St().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:Ay,useId:by,unstable_isNewReconciler:!1},sI={readContext:Tt,useCallback:My,useContext:Tt,useEffect:Qh,useImperativeHandle:Vy,useInsertionEffect:Oy,useLayoutEffect:Dy,useMemo:Fy,useReducer:Uu,useRef:xy,useState:function(){return Uu(Hs)},useDebugValue:Xh,useDeferredValue:function(t){var e=St();return Ae===null?e.memoizedState=t:Uy(e,Ae.memoizedState,t)},useTransition:function(){var t=Uu(Hs)[0],e=St().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:Ay,useId:by,unstable_isNewReconciler:!1};function Rt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=$n(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Lt(e,t,i,r),pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=$n(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Lt(e,t,i,r),pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=$n(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bn(t,i,r),e!==null&&(Lt(e,t,r,n),pa(e,t,r))}};function Cp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fs(n,r)||!Fs(i,s):!0}function $y(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=at(e)?wr:Xe.current,r=e.contextTypes,s=(r=r!=null)?gi(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=at(e)?wr:Xe.current,i.context=gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pl.enqueueReplaceState(i,i.state,null),$a(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ei(t,e){try{var n="",r=e;do n+=DE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oI=typeof WeakMap=="function"?WeakMap:Map;function Hy(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qa||(qa=!0,Hc=r),Lc(t,e)},n}function Wy(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lc(t,e),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Np(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EI.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Op(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,Bn(n,e,1))),n.lanes|=1),t)}var aI=_n.ReactCurrentOwner,st=!1;function et(t,e,n,r){e.child=t===null?Ey(e,null,n,r):vi(e,t.child,n,r)}function Dp(t,e,n,r,i){n=n.render;var s=e.ref;return ui(e,i),r=Gh(t,e,n,r,s,i),n=qh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(he&&n&&Vh(e),e.flags|=1,et(t,e,r,i),e.child)}function Lp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ky(t,e,s,r,i)):(t=Ea(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fs,n(a,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ky(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Vc(t,e,n,r,i)}function Gy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(ni,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(ni,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(ni,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(ni,ht),ht|=r;return et(t,e,i,n),e.child}function qy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vc(t,e,n,r,i){var s=at(n)?wr:Xe.current;return s=gi(e,s),ui(e,i),n=Gh(t,e,n,r,s,i),r=qh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(he&&r&&Vh(e),e.flags|=1,et(t,e,n,i),e.child)}function Vp(t,e,n,r,i){if(at(n)){var s=!0;Ua(e)}else s=!1;if(ui(e,i),e.stateNode===null)ya(t,e),$y(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Tt(h):(h=at(n)?wr:Xe.current,h=gi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&kp(e,a,r,h),Rn=!1;var y=e.memoizedState;a.state=y,$a(e,r,a,i),u=e.memoizedState,l!==r||y!==u||ot.current||Rn?(typeof f=="function"&&(Oc(e,n,f,r),u=e.memoizedState),(l=Rn||Cp(e,n,l,r,y,u,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Iy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Rt(e.type,l),a.props=h,m=e.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=at(n)?wr:Xe.current,u=gi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||y!==u)&&kp(e,a,r,u),Rn=!1,y=e.memoizedState,a.state=y,$a(e,r,a,i);var P=e.memoizedState;l!==m||y!==P||ot.current||Rn?(typeof C=="function"&&(Oc(e,n,C,r),P=e.memoizedState),(h=Rn||Cp(e,n,h,r,y,P,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Mc(t,e,n,r,s,i)}function Mc(t,e,n,r,i,s){qy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Ep(e,n,!1),gn(t,e,s);r=e.stateNode,aI.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=vi(e,t.child,null,s),e.child=vi(e,null,l,s)):et(t,e,l,s),e.memoizedState=r.state,i&&Ep(e,n,!0),e.child}function Qy(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),$h(t,e.containerInfo)}function Mp(t,e,n,r,i){return yi(),Fh(i),e.flags|=256,et(t,e,n,r),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xy(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(pe,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kl(a,r,0,null),t=vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uc(n),e.memoizedState=Fc,t):Yh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lI(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Hn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Hn(l,s):(s=vr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Uc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Fc,r}return s=t.child,t=s.sibling,r=Hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yh(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,r){return r!==null&&Fh(r),vi(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lI(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=bu(Error(M(422))),Zo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kl({mode:"visible",children:r.children},i,0,null),s=vr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vi(e,t.child,null,a),e.child.memoizedState=Uc(a),e.memoizedState=Fc,s);if(!(e.mode&1))return Zo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=bu(s,r,void 0),Zo(t,e,a,r)}if(l=(a&t.childLanes)!==0,st||l){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Lt(r,t,i,-1))}return rd(),r=bu(Error(M(421))),Zo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=jn(i.nextSibling),ft=e,he=!0,kt=null,t!==null&&(_t[Et++]=rn,_t[Et++]=sn,_t[Et++]=Ir,rn=t.id,sn=t.overflow,Ir=e),e=Yh(e,r.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xc(t.return,e,n)}function ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ha(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ha(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uI(t,e,n){switch(e.tag){case 3:Qy(e),yi();break;case 5:Ty(e);break;case 1:at(e.type)&&Ua(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?Xy(t,e,n):(oe(pe,pe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Gy(t,e,n)}return gn(t,e,n)}var Jy,bc,Zy,ev;Jy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};Zy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mr($t.current);var s=null;switch(n){case"input":i=ac(t,i),r=ac(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=cc(t,i),r=cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ma)}dc(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ns.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};ev=function(t,e,n,r){n!==r&&(e.flags|=4)};function rs(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cI(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return at(e.type)&&Fa(),He(e),null;case 3:return r=e.stateNode,_i(),ce(ot),ce(Xe),Wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(Gc(kt),kt=null))),bc(t,e),He(e),null;case 5:Hh(e);var i=mr(zs.current);if(n=e.type,t!==null&&e.stateNode!=null)Zy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return He(e),null}if(t=mr($t.current),Yo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[js]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<hs.length;i++)ue(hs[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Kf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":qf(r,s),ue("invalid",r)}dc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,t),i=["children",""+l]):Ns.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":zo(r),Gf(r,s,!0);break;case"textarea":zo(r),Qf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ma)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[jt]=e,t[js]=r,Jy(t,e,!1,!1),e.stateNode=t;e:{switch(a=fc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<hs.length;i++)ue(hs[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Kf(t,r),i=ac(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",t);break;case"textarea":qf(t,r),i=cc(t,r),ue("invalid",t);break;default:i=r}dc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?xg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xs(t,u):typeof u=="number"&&xs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&wh(t,s,u,a))}switch(n){case"input":zo(t),Gf(t,r,!1);break;case"textarea":zo(t),Qf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?si(t,!!r.multiple,s,!1):r.defaultValue!=null&&si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)ev(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=mr(zs.current),mr($t.current),Yo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return He(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&dt!==null&&e.mode&1&&!(e.flags&128))vy(),yi(),e.flags|=98560,s=!1;else if(s=Yo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[jt]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else kt!==null&&(Gc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Pe===0&&(Pe=3):rd())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return _i(),bc(t,e),t===null&&Us(e.stateNode.containerInfo),He(e),null;case 10:return jh(e.type._context),He(e),null;case 17:return at(e.type)&&Fa(),He(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)rs(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ha(t),a!==null){for(e.flags|=128,rs(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>wi&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ha(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return He(e),null}else 2*Ee()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return nd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function hI(t,e){switch(Mh(e),e.tag){case 1:return at(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),ce(ot),ce(Xe),Wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return _i(),null;case 10:return jh(e.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var ea=!1,Ge=!1,dI=typeof WeakSet=="function"?WeakSet:Set,z=null;function ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function jc(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Up=!1;function fI(t,e){if(Tc=Da,t=sy(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(C=m.firstChild)!==null;)y=m,m=C;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=a),y===s&&++f===r&&(u=a),(C=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},Da=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:Rt(e.type,N),D);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){ve(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return P=Up,Up=!1,P}function Is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jc(e,n,s)}i=i.next}while(i!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tv(t){var e=t.alternate;e!==null&&(t.alternate=null,tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[js],delete e[Rc],delete e[Qw],delete e[Xw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nv(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ma));else if(r!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}function $c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}var Le=null,Ct=!1;function Sn(t,e,n){for(n=n.child;n!==null;)rv(t,e,n),n=n.sibling}function rv(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Ge||ti(n,e);case 6:var r=Le,i=Ct;Le=null,Sn(t,e,n),Le=r,Ct=i,Le!==null&&(Ct?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ct?(t=Le,n=n.stateNode,t.nodeType===8?Du(t.parentNode,n):t.nodeType===1&&Du(t,n),Vs(t)):Du(Le,n.stateNode));break;case 4:r=Le,i=Ct,Le=n.stateNode.containerInfo,Ct=!0,Sn(t,e,n),Le=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jc(n,e,a),i=i.next}while(i!==r)}Sn(t,e,n);break;case 1:if(!Ge&&(ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,e,l)}Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Sn(t,e,n),Ge=r):Sn(t,e,n);break;default:Sn(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Ct=!1;break e;case 3:Le=l.stateNode.containerInfo,Ct=!0;break e;case 4:Le=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Le===null)throw Error(M(160));rv(s,a,i),Le=null,Ct=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ve(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iv(e,t),e=e.sibling}function iv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Ut(t),r&4){try{Is(3,t,t.return),Rl(3,t)}catch(N){ve(t,t.return,N)}try{Is(5,t,t.return)}catch(N){ve(t,t.return,N)}}break;case 1:Pt(e,t),Ut(t),r&512&&n!==null&&ti(n,n.return);break;case 5:if(Pt(e,t),Ut(t),r&512&&n!==null&&ti(n,n.return),t.flags&32){var i=t.stateNode;try{xs(i,"")}catch(N){ve(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pg(i,s),fc(l,a);var h=fc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?xg(i,m):f==="dangerouslySetInnerHTML"?kg(i,m):f==="children"?xs(i,m):wh(i,f,m,h)}switch(l){case"input":lc(i,s);break;case"textarea":Rg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?si(i,!!s.multiple,C,!1):y!==!!s.multiple&&(s.defaultValue!=null?si(i,!!s.multiple,s.defaultValue,!0):si(i,!!s.multiple,s.multiple?[]:"",!1))}i[js]=s}catch(N){ve(t,t.return,N)}}break;case 6:if(Pt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){ve(t,t.return,N)}}break;case 3:if(Pt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(N){ve(t,t.return,N)}break;case 4:Pt(e,t),Ut(t);break;case 13:Pt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ed=Ee())),r&4&&jp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(h=Ge)||f,Pt(e,t),Ge=h):Pt(e,t),Ut(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(m=z=f;z!==null;){switch(y=z,C=y.child,y.tag){case 0:case 11:case 14:case 15:Is(4,y,y.return);break;case 1:ti(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){ve(r,n,N)}}break;case 5:ti(y,y.return);break;case 22:if(y.memoizedState!==null){zp(m);continue}}C!==null?(C.return=y,z=C):zp(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ng("display",a))}catch(N){ve(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){ve(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pt(e,t),Ut(t),r&4&&jp(t);break;case 21:break;default:Pt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var s=bp(t);$c(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=bp(t);zc(t,l,a);break;default:throw Error(M(161))}}catch(u){ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pI(t,e,n){z=t,sv(t)}function sv(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ea;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ge;l=ea;var h=Ge;if(ea=a,(Ge=u)&&!h)for(z=i;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?$p(i):u!==null?(u.return=a,z=u):$p(i);for(;s!==null;)z=s,sv(s),s=s.sibling;z=i,ea=l,Ge=h}Bp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Bp(t)}}function Bp(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ap(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ap(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Vs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ge||e.flags&512&&Bc(e)}catch(y){ve(e,e.return,y)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function zp(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function $p(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(u){ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ve(e,i,u)}}var s=e.return;try{Bc(e)}catch(u){ve(e,s,u)}break;case 5:var a=e.return;try{Bc(e)}catch(u){ve(e,a,u)}}}catch(u){ve(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var mI=Math.ceil,Ga=_n.ReactCurrentDispatcher,Jh=_n.ReactCurrentOwner,It=_n.ReactCurrentBatchConfig,ee=0,xe=null,Te=null,Ue=0,ht=0,ni=tr(0),Pe=0,Ks=null,Sr=0,Cl=0,Zh=0,Ts=null,it=null,ed=0,wi=1/0,tn=null,qa=!1,Hc=null,zn=null,ta=!1,Vn=null,Qa=0,Ss=0,Wc=null,va=-1,_a=0;function tt(){return ee&6?Ee():va!==-1?va:va=Ee()}function $n(t){return t.mode&1?ee&2&&Ue!==0?Ue&-Ue:Jw.transition!==null?(_a===0&&(_a=$g()),_a):(t=ne,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function Lt(t,e,n,r){if(50<Ss)throw Ss=0,Wc=null,Error(M(185));ao(t,n,r),(!(ee&2)||t!==xe)&&(t===xe&&(!(ee&2)&&(Cl|=n),Pe===4&&kn(t,Ue)),lt(t,r),n===1&&ee===0&&!(e.mode&1)&&(wi=Ee()+500,Sl&&nr()))}function lt(t,e){var n=t.callbackNode;JE(t,e);var r=Oa(t,t===xe?Ue:0);if(r===0)n!==null&&Jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jf(n),e===1)t.tag===0?Yw(Hp.bind(null,t)):my(Hp.bind(null,t)),Gw(function(){!(ee&6)&&nr()}),n=null;else{switch(Hg(r)){case 1:n=Ph;break;case 4:n=Bg;break;case 16:n=xa;break;case 536870912:n=zg;break;default:n=xa}n=fv(n,ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ov(t,e){if(va=-1,_a=0,ee&6)throw Error(M(327));var n=t.callbackNode;if(ci()&&t.callbackNode!==n)return null;var r=Oa(t,t===xe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xa(t,r);else{e=r;var i=ee;ee|=2;var s=lv();(xe!==t||Ue!==e)&&(tn=null,wi=Ee()+500,yr(t,e));do try{vI();break}catch(l){av(t,l)}while(!0);bh(),Ga.current=s,ee=i,Te!==null?e=0:(xe=null,Ue=0,e=Pe)}if(e!==0){if(e===2&&(i=vc(t),i!==0&&(r=i,e=Kc(t,i))),e===1)throw n=Ks,yr(t,0),kn(t,r),lt(t,Ee()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!gI(i)&&(e=Xa(t,r),e===2&&(s=vc(t),s!==0&&(r=s,e=Kc(t,s))),e===1))throw n=Ks,yr(t,0),kn(t,r),lt(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:hr(t,it,tn);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=ed+500-Ee(),10<e)){if(Oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pc(hr.bind(null,t,it,tn),e);break}hr(t,it,tn);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Dt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mI(r/1960))-r,10<r){t.timeoutHandle=Pc(hr.bind(null,t,it,tn),r);break}hr(t,it,tn);break;case 5:hr(t,it,tn);break;default:throw Error(M(329))}}}return lt(t,Ee()),t.callbackNode===n?ov.bind(null,t):null}function Kc(t,e){var n=Ts;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Xa(t,e),t!==2&&(e=it,it=n,e!==null&&Gc(e)),t}function Gc(t){it===null?it=t:it.push.apply(it,t)}function gI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Zh,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Hp(t){if(ee&6)throw Error(M(327));ci();var e=Oa(t,0);if(!(e&1))return lt(t,Ee()),null;var n=Xa(t,e);if(t.tag!==0&&n===2){var r=vc(t);r!==0&&(e=r,n=Kc(t,r))}if(n===1)throw n=Ks,yr(t,0),kn(t,e),lt(t,Ee()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,it,tn),lt(t,Ee()),null}function td(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(wi=Ee()+500,Sl&&nr())}}function Ar(t){Vn!==null&&Vn.tag===0&&!(ee&6)&&ci();var e=ee;ee|=1;var n=It.transition,r=ne;try{if(It.transition=null,ne=1,t)return t()}finally{ne=r,It.transition=n,ee=e,!(ee&6)&&nr()}}function nd(){ht=ni.current,ce(ni)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:_i(),ce(ot),ce(Xe),Wh();break;case 5:Hh(r);break;case 4:_i();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:jh(r.type._context);break;case 22:case 23:nd()}n=n.return}if(xe=t,Te=t=Hn(t.current,null),Ue=ht=e,Pe=0,Ks=null,Zh=Cl=Sr=0,it=Ts=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}pr=null}return t}function av(t,e){do{var n=Te;try{if(bh(),ma.current=Ka,Wa){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wa=!1}if(Tr=0,ke=Ae=me=null,ws=!1,$s=0,Jh.current=null,n===null||n.return===null){Pe=1,Ks=e,Te=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=xp(a);if(C!==null){C.flags&=-257,Op(C,a,l,s,e),C.mode&1&&Np(s,h,e),e=C,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Np(s,h,e),rd();break e}u=Error(M(426))}}else if(he&&l.mode&1){var D=xp(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Op(D,a,l,s,e),Fh(Ei(u,l));break e}}s=u=Ei(u,l),Pe!==4&&(Pe=2),Ts===null?Ts=[s]:Ts.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Hy(s,u,e);Sp(s,T);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(zn===null||!zn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Wy(s,l,e);Sp(s,O);break e}}s=s.return}while(s!==null)}cv(n)}catch(U){e=U,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function lv(){var t=Ga.current;return Ga.current=Ka,t===null?Ka:t}function rd(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),xe===null||!(Sr&268435455)&&!(Cl&268435455)||kn(xe,Ue)}function Xa(t,e){var n=ee;ee|=2;var r=lv();(xe!==t||Ue!==e)&&(tn=null,yr(t,e));do try{yI();break}catch(i){av(t,i)}while(!0);if(bh(),ee=n,Ga.current=r,Te!==null)throw Error(M(261));return xe=null,Ue=0,Pe}function yI(){for(;Te!==null;)uv(Te)}function vI(){for(;Te!==null&&!$E();)uv(Te)}function uv(t){var e=dv(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?cv(t):Te=e,Jh.current=null}function cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hI(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Te=null;return}}else if(n=cI(n,e,ht),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Pe===0&&(Pe=5)}function hr(t,e,n){var r=ne,i=It.transition;try{It.transition=null,ne=1,_I(t,e,n,r)}finally{It.transition=i,ne=r}return null}function _I(t,e,n,r){do ci();while(Vn!==null);if(ee&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZE(t,s),t===xe&&(Te=xe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,fv(xa,function(){return ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var a=ne;ne=1;var l=ee;ee|=4,Jh.current=null,fI(t,n),iv(n,t),bw(Sc),Da=!!Tc,Sc=Tc=null,t.current=n,pI(n),HE(),ee=l,ne=a,It.transition=s}else t.current=n;if(ta&&(ta=!1,Vn=t,Qa=i),s=t.pendingLanes,s===0&&(zn=null),GE(n.stateNode),lt(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qa)throw qa=!1,t=Hc,Hc=null,t;return Qa&1&&t.tag!==0&&ci(),s=t.pendingLanes,s&1?t===Wc?Ss++:(Ss=0,Wc=t):Ss=0,nr(),null}function ci(){if(Vn!==null){var t=Hg(Qa),e=It.transition,n=ne;try{if(It.transition=null,ne=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,Qa=0,ee&6)throw Error(M(331));var i=ee;for(ee|=4,z=t.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Is(8,f,s)}var m=f.child;if(m!==null)m.return=f,z=m;else for(;z!==null;){f=z;var y=f.sibling,C=f.return;if(tv(f),f===h){z=null;break}if(y!==null){y.return=C,z=y;break}z=C}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Is(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,z=T;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){a=z;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,z=S;else e:for(a=v;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(U){ve(l,l.return,U)}if(l===a){z=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,z=O;break e}z=l.return}}if(ee=i,nr(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{ne=n,It.transition=e}}return!1}function Wp(t,e,n){e=Ei(n,e),e=Hy(t,e,1),t=Bn(t,e,1),e=tt(),t!==null&&(ao(t,1,e),lt(t,e))}function ve(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){t=Ei(n,t),t=Wy(e,t,1),e=Bn(e,t,1),t=tt(),e!==null&&(ao(e,1,t),lt(e,t));break}}e=e.return}}function EI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Ue&n)===n&&(Pe===4||Pe===3&&(Ue&130023424)===Ue&&500>Ee()-ed?yr(t,0):Zh|=n),lt(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=tt();t=mn(t,e),t!==null&&(ao(t,e,n),lt(t,n))}function wI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),hv(t,n)}var dv;dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,uI(t,e,n);st=!!(t.flags&131072)}else st=!1,he&&e.flags&1048576&&gy(e,ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ya(t,e),t=e.pendingProps;var i=gi(e,Xe.current);ui(e,n),i=Gh(null,e,r,t,i,n);var s=qh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Ua(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zh(e),i.updater=Pl,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=Mc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Vh(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SI(r),t=Rt(r,t),i){case 0:e=Vc(null,e,r,t,n);break e;case 1:e=Vp(null,e,r,t,n);break e;case 11:e=Dp(null,e,r,t,n);break e;case 14:e=Lp(null,e,r,Rt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Vc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Vp(t,e,r,i,n);case 3:e:{if(Qy(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iy(t,e),$a(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ei(Error(M(423)),e),e=Mp(t,e,r,n,i);break e}else if(r!==i){i=Ei(Error(M(424)),e),e=Mp(t,e,r,n,i);break e}else for(dt=jn(e.stateNode.containerInfo.firstChild),ft=e,he=!0,kt=null,n=Ey(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){e=gn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return Ty(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Ac(r,i)?a=null:s!==null&&Ac(r,s)&&(e.flags|=32),qy(t,e),et(t,e,a,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Xy(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Dp(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,oe(Ba,r._currentValue),r._currentValue=a,s!==null)if(Vt(s.value,a)){if(s.children===i.children&&!ot.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=un(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(M(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),xc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ui(e,n),i=Tt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Lp(t,e,r,i,n);case 15:return Ky(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),ya(t,e),e.tag=1,at(r)?(t=!0,Ua(e)):t=!1,ui(e,n),$y(e,r,i),Dc(e,r,i,n),Mc(null,e,r,!0,t,n);case 19:return Yy(t,e,n);case 22:return Gy(t,e,n)}throw Error(M(156,e.tag))};function fv(t,e){return jg(t,e)}function TI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(t,e,n,r){return new TI(t,e,n,r)}function id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SI(t){if(typeof t=="function")return id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Th)return 11;if(t===Sh)return 14}return 2}function Hn(t,e){var n=t.alternate;return n===null?(n=wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ea(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")id(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Kr:return vr(n.children,i,s,e);case Ih:a=8,i|=8;break;case rc:return t=wt(12,n,e,i|2),t.elementType=rc,t.lanes=s,t;case ic:return t=wt(13,n,e,i),t.elementType=ic,t.lanes=s,t;case sc:return t=wt(19,n,e,i),t.elementType=sc,t.lanes=s,t;case Tg:return kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wg:a=10;break e;case Ig:a=9;break e;case Th:a=11;break e;case Sh:a=14;break e;case Pn:a=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=wt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vr(t,e,n,r){return t=wt(7,t,r,e),t.lanes=n,t}function kl(t,e,n,r){return t=wt(22,t,r,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Bu(t,e,n){return t=wt(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sd(t,e,n,r,i,s,a,l,u){return t=new AI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function PI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pv(t){if(!t)return Xn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(at(n))return py(t,n,e)}return e}function mv(t,e,n,r,i,s,a,l,u){return t=sd(n,r,!0,t,i,s,a,l,u),t.context=pv(null),n=t.current,r=tt(),i=$n(n),s=un(r,i),s.callback=e??null,Bn(n,s,i),t.current.lanes=i,ao(t,i,r),lt(t,r),t}function Nl(t,e,n,r){var i=e.current,s=tt(),a=$n(i);return n=pv(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bn(i,e,a),t!==null&&(Lt(t,i,a,s),pa(t,i,a)),a}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function od(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function RI(){return null}var gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}xl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Nl(t,e,null,null)};xl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Nl(null,t,null,null)}),e[pn]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&Qg(t)}};function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function CI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ya(a);s.call(h)}}var a=mv(e,r,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=a,t[pn]=a.current,Us(t.nodeType===8?t.parentNode:t),Ar(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ya(u);l.call(h)}}var u=sd(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=u,t[pn]=u.current,Us(t.nodeType===8?t.parentNode:t),Ar(function(){Nl(e,u,n,r)}),u}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ya(a);l.call(u)}}Nl(e,a,t,i)}else a=CI(n,e,t,i,r);return Ya(a)}Wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(Rh(e,n|1),lt(e,Ee()),!(ee&6)&&(wi=Ee()+500,nr()))}break;case 13:Ar(function(){var r=mn(t,1);if(r!==null){var i=tt();Lt(r,t,1,i)}}),od(t,1)}};Ch=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=tt();Lt(e,t,134217728,n)}od(t,134217728)}};Kg=function(t){if(t.tag===13){var e=$n(t),n=mn(t,e);if(n!==null){var r=tt();Lt(n,t,e,r)}od(t,e)}};Gg=function(){return ne};qg=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};mc=function(t,e,n){switch(e){case"input":if(lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tl(r);if(!i)throw Error(M(90));Ag(r),lc(r,i)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&si(t,!!n.multiple,e,!1)}};Lg=td;Vg=Ar;var kI={usingClientEntryPoint:!1,Events:[uo,Xr,Tl,Og,Dg,td]},is={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NI={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ug(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||RI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{_l=na.inject(NI),zt=na}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(e))throw Error(M(200));return PI(t,e,null,n)};mt.createRoot=function(t,e){if(!ld(t))throw Error(M(299));var n=!1,r="",i=gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sd(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Us(t.nodeType===8?t.parentNode:t),new ad(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Ug(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Ar(t)};mt.hydrate=function(t,e,n){if(!Ol(e))throw Error(M(200));return Dl(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!ld(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=gv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=mv(e,null,t,1,n??null,i,!1,s,a),t[pn]=e.current,Us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xl(e)};mt.render=function(t,e,n){if(!Ol(e))throw Error(M(200));return Dl(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(M(40));return t._reactRootContainer?(Ar(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};mt.unstable_batchedUpdates=td;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Dl(t,e,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)}catch(t){console.error(t)}}yv(),yg.exports=mt;var xI=yg.exports,qp=xI;tc.createRoot=qp.createRoot,tc.hydrateRoot=qp.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gs.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const Qp="popstate";function OI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return qc("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ja(i)}return LI(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DI(){return Math.random().toString(36).substr(2,8)}function Xp(t,e){return{usr:t.state,key:t.key,idx:e}}function qc(t,e,n,r){return n===void 0&&(n=null),Gs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xi(e):e,{state:n,key:e&&e.key||r||DI()})}function Ja(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Mn.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Gs({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=Mn.Pop;let D=f(),T=D==null?null:D-h;h=D,u&&u({action:l,location:N.location,delta:T})}function y(D,T){l=Mn.Push;let v=qc(N.location,D,T);h=f()+1;let S=Xp(v,h),O=N.createHref(v);try{a.pushState(S,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function C(D,T){l=Mn.Replace;let v=qc(N.location,D,T);h=f();let S=Xp(v,h),O=N.createHref(v);a.replaceState(S,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function P(D){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:Ja(D);return v=v.replace(/ $/,"%20"),Se(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let N={get action(){return l},get location(){return t(i,a)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qp,m),u=D,()=>{i.removeEventListener(Qp,m),u=null}},createHref(D){return e(i,D)},createURL:P,encodeLocation(D){let T=P(D);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:y,replace:C,go(D){return a.go(D)}};return N}var Yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yp||(Yp={}));function VI(t,e,n){return n===void 0&&(n="/"),MI(t,e,n,!1)}function MI(t,e,n,r){let i=typeof e=="string"?xi(e):e,s=ud(i.pathname||"/",n);if(s==null)return null;let a=_v(t);FI(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let h=qI(s);l=KI(a[u],h,r)}return l}function _v(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Wn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),_v(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:HI(h,s.index),routesMeta:f})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of Ev(s.path))i(s,a,u)}),e}function Ev(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Ev(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function FI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UI=/^:[\w-]+$/,bI=3,jI=2,BI=1,zI=10,$I=-2,Jp=t=>t==="*";function HI(t,e){let n=t.split("/"),r=n.length;return n.some(Jp)&&(r+=$I),e&&(r+=jI),n.filter(i=>!Jp(i)).reduce((i,s)=>i+(UI.test(s)?bI:s===""?BI:zI),r)}function WI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KI(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=Zp({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),y=u.route;if(!m&&h&&n&&!r[r.length-1].route.index&&(m=Zp({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:Wn([s,m.pathname]),pathnameBase:JI(Wn([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=Wn([s,m.pathnameBase]))}return a}function Zp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:y,isOptional:C}=f;if(y==="*"){let N=l[m]||"";a=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[m];return C&&!P?h[y]=void 0:h[y]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:t}}function GI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ud(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xi(t):t;return{pathname:n?n.startsWith("/")?n:XI(n,e):e,search:ZI(r),hash:eT(i)}}function XI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $u(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wv(t,e){let n=YI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Iv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xi(t):(i=Gs({},t),Se(!i.pathname||!i.pathname.includes("?"),$u("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),$u("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),$u("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let m=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=QI(i,l),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),JI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Tv=["post","put","patch","delete"];new Set(Tv);const nT=["get",...Tv];new Set(nT);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qs.apply(this,arguments)}const cd=$.createContext(null),rT=$.createContext(null),Lr=$.createContext(null),Ll=$.createContext(null),Vr=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Sv=$.createContext(null);function iT(t,e){let{relative:n}=e===void 0?{}:e;ho()||Se(!1);let{basename:r,navigator:i}=$.useContext(Lr),{hash:s,pathname:a,search:l}=Pv(t,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Wn([r,a])),i.createHref({pathname:u,search:l,hash:s})}function ho(){return $.useContext(Ll)!=null}function Vl(){return ho()||Se(!1),$.useContext(Ll).location}function Av(t){$.useContext(Lr).static||$.useLayoutEffect(t)}function sT(){let{isDataRoute:t}=$.useContext(Vr);return t?vT():oT()}function oT(){ho()||Se(!1);let t=$.useContext(cd),{basename:e,future:n,navigator:r}=$.useContext(Lr),{matches:i}=$.useContext(Vr),{pathname:s}=Vl(),a=JSON.stringify(wv(i,n.v7_relativeSplatPath)),l=$.useRef(!1);return Av(()=>{l.current=!0}),$.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let m=Iv(h,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Wn([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,s,t])}function Pv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=$.useContext(Lr),{matches:i}=$.useContext(Vr),{pathname:s}=Vl(),a=JSON.stringify(wv(i,r.v7_relativeSplatPath));return $.useMemo(()=>Iv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function aT(t,e){return lT(t,e)}function lT(t,e,n,r){ho()||Se(!1);let{navigator:i}=$.useContext(Lr),{matches:s}=$.useContext(Vr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Vl(),f;if(e){var m;let D=typeof e=="string"?xi(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||Se(!1),f=D}else f=h;let y=f.pathname||"/",C=y;if(u!=="/"){let D=u.replace(/^\//,"").split("/");C="/"+y.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=VI(t,{pathname:C}),N=fT(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:Wn([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Wn([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?$.createElement(Ll.Provider,{value:{location:qs({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Mn.Pop}},N):N}function uT(){let t=yT(),e=tT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:i},n):null,null)}const cT=$.createElement(uT,null);class hT extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(Vr.Provider,{value:this.props.routeContext},$.createElement(Sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dT(t){let{routeContext:e,match:n,children:r}=t,i=$.useContext(cd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Vr.Provider,{value:e},r)}function fT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Se(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:y,errors:C}=n,P=m.route.loader&&y[m.route.id]===void 0&&(!C||C[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,y)=>{let C,P=!1,N=null,D=null;n&&(C=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||cT,u&&(h<0&&y===0?(P=!0,D=null):h===y&&(P=!0,D=m.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,y+1)),v=()=>{let S;return C?S=N:P?S=D:m.route.Component?S=$.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,$.createElement(dT,{match:m,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?$.createElement(hT,{location:n.location,revalidation:n.revalidation,component:N,error:C,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var Rv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Rv||{}),Za=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Za||{});function pT(t){let e=$.useContext(cd);return e||Se(!1),e}function mT(t){let e=$.useContext(rT);return e||Se(!1),e}function gT(t){let e=$.useContext(Vr);return e||Se(!1),e}function Cv(t){let e=gT(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function yT(){var t;let e=$.useContext(Sv),n=mT(Za.UseRouteError),r=Cv(Za.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function vT(){let{router:t}=pT(Rv.UseNavigateStable),e=Cv(Za.UseNavigateStable),n=$.useRef(!1);return Av(()=>{n.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qs({fromRouteId:e},s)))},[t,e])}function Qs(t){Se(!1)}function _T(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:a=!1,future:l}=t;ho()&&Se(!1);let u=e.replace(/^\/*/,"/"),h=$.useMemo(()=>({basename:u,navigator:s,static:a,future:qs({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=xi(r));let{pathname:f="/",search:m="",hash:y="",state:C=null,key:P="default"}=r,N=$.useMemo(()=>{let D=ud(f,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:C,key:P},navigationType:i}},[u,f,m,y,C,P,i]);return N==null?null:$.createElement(Lr.Provider,{value:h},$.createElement(Ll.Provider,{children:n,value:N}))}function kv(t){let{children:e,location:n}=t;return aT(Qc(e),n)}new Promise(()=>{});function Qc(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(r,i)=>{if(!$.isValidElement(r))return;let s=[...e,i];if(r.type===$.Fragment){n.push.apply(n,Qc(r.props.children,s));return}r.type!==Qs&&Se(!1),!r.props.index||!r.props.children||Se(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Qc(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xc.apply(this,arguments)}function ET(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IT(t,e){return t.button===0&&(!e||e==="_self")&&!wT(t)}const TT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ST="6";try{window.__reactRouterVersion=ST}catch{}const AT="startTransition",em=EE[AT];function PT(t){let{basename:e,children:n,future:r,window:i}=t,s=$.useRef();s.current==null&&(s.current=OI({window:i,v5Compat:!0}));let a=s.current,[l,u]=$.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=$.useCallback(m=>{h&&em?em(()=>u(m)):u(m)},[u,h]);return $.useLayoutEffect(()=>a.listen(f),[a,f]),$.createElement(_T,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const RT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ds=$.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:u,to:h,preventScrollReset:f,unstable_viewTransition:m}=e,y=ET(e,TT),{basename:C}=$.useContext(Lr),P,N=!1;if(typeof h=="string"&&CT.test(h)&&(P=h,RT))try{let S=new URL(window.location.href),O=h.startsWith("//")?new URL(S.protocol+h):new URL(h),U=ud(O.pathname,C);O.origin===S.origin&&U!=null?h=U+O.search+O.hash:N=!0}catch{}let D=iT(h,{relative:i}),T=kT(h,{replace:a,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:m});function v(S){r&&r(S),S.defaultPrevented||T(S)}return $.createElement("a",Xc({},y,{href:P||D,onClick:N||s?r:v,ref:n,target:u}))});var tm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(tm||(tm={}));var nm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nm||(nm={}));function kT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:l}=e===void 0?{}:e,u=sT(),h=Vl(),f=Pv(t,{relative:a});return $.useCallback(m=>{if(IT(m,n)){m.preventDefault();let y=r!==void 0?r:Ja(h)===Ja(f);u(t,{replace:y,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:l})}},[h,u,f,r,i,n,t,s,a,l])}const NT="_navlinks_wkb1l_47",xT="_hamburguer_wkb1l_57",OT="_btn_line_wkb1l_71",DT="_imgContainer_wkb1l_93",$r={navlinks:NT,hamburguer:xT,btn_line:OT,imgContainer:DT},LT="/aubeaver_g/assets/logo-hIvKJrmO.svg",VT=()=>L.jsx(L.Fragment,{children:L.jsx("header",{children:L.jsxs("nav",{children:[L.jsx("div",{className:$r.imgContainer,children:L.jsx(ds,{to:"/",children:L.jsx("img",{src:LT,alt:"logo"})})}),L.jsxs("ul",{className:$r.navlinks,children:[L.jsxs("li",{children:[" ",L.jsx(ds,{to:"quemSomos",children:" Quem somos "})," "]}),L.jsxs("li",{children:[" ",L.jsx(ds,{to:"doacao",children:" Doação "})," "]}),L.jsxs("li",{children:[" ",L.jsx(ds,{to:"login",children:" Criar / Entrar "})," "]}),L.jsxs("li",{children:[" ",L.jsxs("div",{className:$r.hamburguer,children:[L.jsx("div",{className:$r.btn_line}),L.jsx("div",{className:$r.btn_line}),L.jsx("div",{className:$r.btn_line})]})," "]})]})]})})}),MT=()=>L.jsx(L.Fragment,{children:L.jsx("footer",{children:L.jsx("nav",{children:L.jsx("ul",{children:L.jsx("li",{children:L.jsx("a",{href:""})})})})})}),FT=()=>L.jsx("div",{children:" Home "}),ri=({id:t,label:e,value:n,type:r,setValue:i})=>L.jsxs(L.Fragment,{children:[L.jsx("label",{htmlFor:t,children:e}),L.jsx("p",{children:" "}),L.jsx("input",{type:r,id:t,name:t,value:n,onChange:({target:s})=>i(s.value)})]}),UT=({options:t,value:e,setValue:n,label:r,...i})=>L.jsxs(L.Fragment,{children:[L.jsx("label",{htmlFor:"",children:r}),L.jsx("p",{children:" "}),L.jsxs("select",{value:e,onChange:({target:s})=>n(s.value),...i,children:[L.jsx("option",{children:"Selecione"}),t.map(s=>L.jsx("option",{children:s},s))]})]}),bT="_containerImg_1fh50_83",jT="_content_1fh50_103",BT="_content1_1fh50_119",zT="_checkbox_1fh50_227",$T="_inputCheckbox_1fh50_243",HT="_imagem_1fh50_275",Hu={containerImg:bT,content:jT,content1:BT,checkbox:zT,inputCheckbox:$T,imagem:HT},Nv="/aubeaver_g/assets/rosto-CiArKAv-.svg";var rm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(y=64)),r.push(n[f],n[m],n[y],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new KT;const y=s<<2|l>>4;if(r.push(y),h!==64){const C=l<<4&240|h>>2;if(r.push(C),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GT=function(t){const e=xv(t);return Ov.encodeByteArray(e,!0)},el=function(t){return GT(t).replace(/\./g,"")},Dv=function(t){try{return Ov.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=()=>qT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof rm>"u")return;const t=rm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dv(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return QT()||XT()||YT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=Lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vv=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},Mv=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[el(JSON.stringify(n)),el(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function n1(){var t;const e=(t=Ml())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s1(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o1(){return!n1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function l1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?c1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new En(i,l,r)}}function c1(t,e){return t.replace(h1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h1=/\{\$([^}]+)}/g;function d1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(im(s)&&im(a)){if(!tl(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function im(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function f1(t,e){const n=new p1(t,e);return n.subscribe.bind(n)}class p1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wu),i.error===void 0&&(i.error=Wu),i.complete===void 0&&(i.complete=Wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v1(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y1(t){return t===dr?void 0:t}function v1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const E1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},w1=Y.INFO,I1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},T1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=I1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=w1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const S1=(t,e)=>e.some(n=>t instanceof n);let sm,om;function A1(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P1(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,Yc=new WeakMap,Uv=new WeakMap,Ku=new WeakMap,dd=new WeakMap;function R1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Kn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Fv.set(n,t)}).catch(()=>{}),dd.set(e,t),e}function C1(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Yc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k1(t){Jc=t(Jc)}function N1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gu(this),e,...n);return Uv.set(r,e.sort?e.sort():[e]),Kn(r)}:P1().includes(t)?function(...e){return t.apply(Gu(this),e),Kn(Fv.get(this))}:function(...e){return Kn(t.apply(Gu(this),e))}}function x1(t){return typeof t=="function"?N1(t):(t instanceof IDBTransaction&&C1(t),S1(t,A1())?new Proxy(t,Jc):t)}function Kn(t){if(t instanceof IDBRequest)return R1(t);if(Ku.has(t))return Ku.get(t);const e=x1(t);return e!==t&&(Ku.set(t,e),dd.set(e,t)),e}const Gu=t=>dd.get(t);function O1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Kn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kn(a.result),u.oldVersion,u.newVersion,Kn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const D1=["get","getKey","getAll","getAllKeys","count"],L1=["put","add","delete","clear"],qu=new Map;function am(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qu.get(e))return qu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||D1.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return qu.set(e,s),s}k1(t=>({...t,get:(e,n,r)=>am(e,n)||t.get(e,n,r),has:(e,n)=>!!am(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function M1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",lm="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new hd("@firebase/app"),F1="@firebase/app-compat",U1="@firebase/analytics-compat",b1="@firebase/analytics",j1="@firebase/app-check-compat",B1="@firebase/app-check",z1="@firebase/auth",$1="@firebase/auth-compat",H1="@firebase/database",W1="@firebase/database-compat",K1="@firebase/functions",G1="@firebase/functions-compat",q1="@firebase/installations",Q1="@firebase/installations-compat",X1="@firebase/messaging",Y1="@firebase/messaging-compat",J1="@firebase/performance",Z1="@firebase/performance-compat",eS="@firebase/remote-config",tS="@firebase/remote-config-compat",nS="@firebase/storage",rS="@firebase/storage-compat",iS="@firebase/firestore",sS="@firebase/vertexai-preview",oS="@firebase/firestore-compat",aS="firebase",lS="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",uS={[Zc]:"fire-core",[F1]:"fire-core-compat",[b1]:"fire-analytics",[U1]:"fire-analytics-compat",[B1]:"fire-app-check",[j1]:"fire-app-check-compat",[z1]:"fire-auth",[$1]:"fire-auth-compat",[H1]:"fire-rtdb",[W1]:"fire-rtdb-compat",[K1]:"fire-fn",[G1]:"fire-fn-compat",[q1]:"fire-iid",[Q1]:"fire-iid-compat",[X1]:"fire-fcm",[Y1]:"fire-fcm-compat",[J1]:"fire-perf",[Z1]:"fire-perf-compat",[eS]:"fire-rc",[tS]:"fire-rc-compat",[nS]:"fire-gcs",[rS]:"fire-gcs-compat",[iS]:"fire-fst",[oS]:"fire-fst-compat",[sS]:"fire-vertex","fire-js":"fire-js",[aS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,cS=new Map,th=new Map;function um(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(th.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of nl.values())um(n,t);for(const n of cS.values())um(n,t);return!0}function fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new fo("app","Firebase",hS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=lS;function bv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=Vv()),!n)throw Gn.create("no-options");const s=nl.get(i);if(s){if(tl(n,s.options)&&tl(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const a=new _1(i);for(const u of th.values())a.addComponent(u);const l=new dS(n,r,a);return nl.set(i,l),l}function jv(t=eh){const e=nl.get(t);if(!e&&t===eh&&Vv())return bv();if(!e)throw Gn.create("no-app",{appName:t});return e}function qn(t,e,n){var r;let i=(r=uS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(l.join(" "));return}Ii(new Pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="firebase-heartbeat-database",pS=1,Xs="firebase-heartbeat-store";let Qu=null;function Bv(){return Qu||(Qu=O1(fS,pS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function mS(t){try{const n=(await Bv()).transaction(Xs),r=await n.objectStore(Xs).get(zv(t));return await n.done,r}catch(e){if(e instanceof En)yn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function cm(t,e){try{const r=(await Bv()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,zv(t)),await r.done}catch(n){if(n instanceof En)yn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function zv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=1024,yS=30*24*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ES(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=yS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hm(),{heartbeatsToSend:r,unsentEntries:i}=_S(this._heartbeatsCache.heartbeats),s=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yn.warn(n),""}}}function hm(){return new Date().toISOString().substring(0,10)}function _S(t,e=gS){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),dm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ES{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?l1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dm(t){return el(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){Ii(new Pr("platform-logger",e=>new V1(e),"PRIVATE")),Ii(new Pr("heartbeat",e=>new vS(e),"PRIVATE")),qn(Zc,lm,t),qn(Zc,lm,"esm2017"),qn("fire-js","")}wS("");function pd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=$v,Hv=new fo("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new hd("@firebase/auth");function TS(t,...e){rl.logLevel<=Y.WARN&&rl.warn(`Auth (${Oi}): ${t}`,...e)}function wa(t,...e){rl.logLevel<=Y.ERROR&&rl.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw md(t,...e)}function Ht(t,...e){return md(t,...e)}function Wv(t,e,n){const r=Object.assign(Object.assign({},IS()),{[e]:n});return new fo("auth","Firebase",r).create(e,{appName:t.name})}function cn(t){return Wv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hv.create(t,...e)}function W(t,e,...n){if(!t)throw md(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function vn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SS(){return fm()==="http:"||fm()==="https:"}function fm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||r1()||"connection"in navigator)?navigator.onLine:!0}function PS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=t1()||i1()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new mo(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,i={}){return Gv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=po(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Kv.fetch()(qv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Gv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RS),e);try{const i=new NS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ra(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw ra(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wv(t,f,h);Ft(t,f)}}catch(i){if(i instanceof En)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function go(t,e,n,r,i={}){const s=await ir(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gd(t.config,i):`${t.config.apiScheme}://${i}`}function kS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),CS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function pm(t){return t!==void 0&&t.enterprise!==void 0}class xS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OS(t,e){return ir(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Qv(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LS(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=yd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:As(Xu(i.auth_time)),issuedAtTime:As(Xu(i.iat)),expirationTime:As(Xu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dv(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mm(t){const e=yd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&VS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,Qv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xv(s.providerUserInfo):[],l=US(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function FS(t){const e=Mt(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xv(t){return t.map(e=>{var{providerId:n}=e,r=pd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e){const n=await Gv(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=qv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Kv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jS(t,e){return ir(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=mm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new hi;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LS(this,e)}reload(){return FS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Ys(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:U,providerData:j,stsTokenManager:E}=n;W(S&&E,e,"internal-error");const g=hi.fromJSON(this.name,E);W(typeof S=="string",e,"internal-error"),An(m,e.name),An(y,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),An(C,e.name),An(P,e.name),An(N,e.name),An(D,e.name),An(T,e.name),An(v,e.name);const _=new an({uid:S,auth:e,email:y,emailVerified:O,displayName:m,isAnonymous:U,photoURL:P,phoneNumber:C,tenantId:N,stsTokenManager:g,createdAt:T,lastLoginAt:v});return j&&Array.isArray(j)&&(_.providerData=j.map(w=>Object.assign({},w))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new hi;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hi;l.updateFromIdToken(r);const u=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new Map;function ln(t){vn(t instanceof Function,"Expected a class definition");let e=gm.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const ym=Yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(ln(ym),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ln(ym);const a=Ia(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const m=an._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new di(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r_(e))return"Blackberry";if(i_(e))return"Webos";if(Zv(e))return"Safari";if((e.includes("chrome/")||e_(e))&&!e.includes("edge/"))return"Chrome";if(n_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jv(t=Ye()){return/firefox\//i.test(t)}function Zv(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e_(t=Ye()){return/crios\//i.test(t)}function t_(t=Ye()){return/iemobile/i.test(t)}function n_(t=Ye()){return/android/i.test(t)}function r_(t=Ye()){return/blackberry/i.test(t)}function i_(t=Ye()){return/webos/i.test(t)}function vd(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BS(t=Ye()){var e;return vd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return s1()&&document.documentMode===10}function s_(t=Ye()){return vd(t)||n_(t)||i_(t)||r_(t)||/windows phone/i.test(t)||t_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e=[]){let n;switch(t){case"Browser":n=vm(Ye());break;case"Worker":n=`${vm(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e={}){return ir(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=6;class KS{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:WS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _m(this),this.idTokenSubscription=new _m(this),this.beforeStateQueue=new $S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qv(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(cn(this));const n=e?Mt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HS(this),n=new KS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return Mt(t)}class _m{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qS(t){Fl=t}function a_(t){return Fl.loadJS(t)}function QS(){return Fl.recaptchaEnterpriseScript}function XS(){return Fl.gapiScript}function YS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JS="recaptcha-enterprise",ZS="NO_RECAPTCHA";class eA{constructor(e){this.type=JS,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{OS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xS(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;pm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ZS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&pm(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QS();u.length!==0&&(u+=l),a_(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Em(t,e,n,r=!1){const i=new eA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ih(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Em(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Em(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){const n=fd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tl(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function nA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rA(t,e,n){const r=Mr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=l_(e),{host:a,port:l}=iA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),sA()}function l_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iA(t){const e=l_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:wm(a)}}}function wm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function oA(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){return go(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function uA(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends _d{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,n,"signInWithPassword",aA);case"emailLink":return lA(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,r,"signUpPassword",oA);case"emailLink":return uA(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e){return go(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="http://localhost";class Rr extends _d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pd(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:cA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dA(t){const e=fs(ps(t)).link,n=e?fs(ps(e)).deep_link_id:null,r=fs(ps(t)).deep_link_id;return(r?fs(ps(r)).link:null)||r||n||e||t}class Ed{constructor(e){var n,r,i,s,a,l;const u=fs(ps(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=hA((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=dA(e);try{return new Ed(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ed.parseLink(n);return W(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends yo{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends yo{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e){return go(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),a=Im(r);return new Cr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Im(r);return new Cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Im(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function c_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function pA(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(cn(r));const i="reauthenticate";try{const s=await Ys(t,c_(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=yd(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e,n=!1){if(Bt(t.app))return Promise.reject(cn(t));const r="signIn",i=await c_(t,r,e),s=await Cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gA(t,e){return h_(Mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yA(t,e,n){if(Bt(t.app))return Promise.reject(cn(t));const r=Mr(t),a=await ih(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&d_(t),u}),l=await Cr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function vA(t,e,n){return Bt(t.app)?Promise.reject(cn(t)):gA(Mt(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&d_(t),r})}function _A(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function EA(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=1e3,IA=10;class p_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);zS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const TA=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const g_=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await SA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=wd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function PA(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function RA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kA(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebaseLocalStorageDb",NA=1,al="firebaseLocalStorage",__="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function xA(){const t=indexedDB.deleteDatabase(v_);return new vo(t).toPromise()}function sh(){const t=indexedDB.open(v_,NA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:__})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await xA(),e(await sh()))})})}async function Tm(t,e,n){const r=bl(t,!0).put({[__]:e,value:n});return new vo(r).toPromise()}async function OA(t,e){const n=bl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Sm(t,e){const n=bl(t,!0).delete(e);return new vo(n).toPromise()}const DA=800,LA=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(kA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new AA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await Tm(e,ol,"1"),await Sm(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bl(i,!1).getAll();return new vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const VA=E_;new mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t,e){return e?ln(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends _d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FA(t){return h_(t.auth,new Id(t),t.bypassAuthState)}function UA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mA(n,new Id(t),t.bypassAuthState)}async function bA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),pA(n,new Id(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FA;case"linkViaPopup":case"linkViaRedirect":return bA;case"reauthViaPopup":case"reauthViaRedirect":return UA;default:Ft(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new mo(2e3,1e4);class ii extends w_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jA.get())};e()}}ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="pendingRedirect",Ta=new Map;class zA extends w_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const r=await $A(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(t,e){const n=KA(e),r=WA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HA(t,e){Ta.set(t._key(),e)}function WA(t){return ln(t._redirectPersistence)}function KA(t){return Ia(BA,t.config.apiKey,t.name)}async function GA(t,e,n=!1){if(Bt(t.app))return Promise.reject(cn(t));const r=Mr(t),i=MA(r,e),a=await new zA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=10*60*1e3;class QA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Am(e))}saveEventToCache(e){this.cachedEventUids.add(Am(e)),this.lastProcessedEventTime=Date.now()}}function Am(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZA=/^https?/;async function eP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YA(t);for(const n of e)try{if(tP(n))return}catch{}Ft(t,"unauthorized-domain")}function tP(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!ZA.test(n))return!1;if(JA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new mo(3e4,6e4);function Pm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rP(t){return new Promise((e,n)=>{var r,i,s;function a(){Pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pm(),n(Ht(t,"network-request-failed"))},timeout:nP.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)a();else{const l=YS("iframefcb");return Wt()[l]=()=>{gapi.load?a():n(Ht(t,"network-request-failed"))},a_(`${XS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function iP(t){return Sa=Sa||rP(t),Sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new mo(5e3,15e3),oP="__/auth/iframe",aP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gd(e,aP):`https://${t.config.authDomain}/${oP}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=uP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function hP(t){const e=await iP(t),n=Wt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:cP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ht(t,"network-request-failed"),l=Wt().setTimeout(()=>{s(a)},sP.get());function u(){Wt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,pP=600,mP="_blank",gP="http://localhost";class Rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yP(t,e,n,r=fP,i=pP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dP),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Ye().toLowerCase();n&&(l=e_(h)?mP:n),Jv(h)&&(e=e||gP,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[C,P])=>`${y}${C}=${P},`,"");if(BS(h)&&l!=="_self")return vP(e||"",l),new Rm(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new Rm(m)}function vP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="__/auth/handler",EP="emulator/auth/handler",wP=encodeURIComponent("fac");async function Cm(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof u_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",d1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof yo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${wP}=${encodeURIComponent(u)}`:"";return`${IP(t)}?${po(l).slice(1)}${h}`}function IP({config:t}){return t.emulator?gd(t,EP):`https://${t.authDomain}/${_P}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class TP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=GA,this._overrideRedirectResult=HA}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Cm(e,n,r,nh(),i);return yP(e,a,wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cm(e,n,r,nh(),i);return PA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hP(e),r=new QA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yu];a!==void 0&&n(!!a),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Zv()||vd()}}const SP=TP;var km="@firebase/auth",Nm="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RP(t){Ii(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o_(t)},h=new GS(r,i,s,u);return nA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new Pr("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(km,Nm,PP(t)),qn(km,Nm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=5*60,kP=Mv("authIdTokenMaxAge")||CP;let xm=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kP)return;const i=n==null?void 0:n.token;xm!==i&&(xm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xP(t=jv()){const e=fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tA(t,{popupRedirectResolver:SP,persistence:[VA,TA,g_]}),r=Mv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=NP(s.toString());EA(n,a,()=>a(n.currentUser)),_A(n,l=>a(l))}}const i=Lv("auth");return i&&rA(n,`http://${i}`),n}function OP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RP("Browser");const DP=()=>{const[t,e]=vt.useState(""),[n,r]=vt.useState("");vt.useState(""),vt.useState([]);const i=async s=>{s.preventDefault(),console.log("entrou");try{await vA(auth,t,n),console.log("Login feito com sucesso!")}catch(a){console.log(a)}};return L.jsxs("section",{children:[L.jsx("div",{className:Hu.content1,children:L.jsxs("div",{className:Hu.content,children:[L.jsxs("form",{onSubmit:i,children:[L.jsx("a",{children:L.jsx(ri,{label:"Email",type:"email",id:"email",value:t,setValue:e})}),L.jsx("p",{}),L.jsx("a",{children:L.jsx(ri,{label:"Senha",type:"password",id:"password",value:n,setValue:r})}),L.jsx("p",{}),L.jsx("center",{children:L.jsx("button",{children:"Entrar"})})]}),L.jsx("h4",{children:L.jsx(ds,{to:"/login/criar",children:"Cadastre-se"})})]})}),L.jsxs("div",{className:Hu.containerImg,children:[" ",L.jsx("img",{src:Nv,alt:"RostoMascote"})," "]})]})},LP="_content_1be1c_103",VP="_content1_1be1c_119",MP="_containerImg_1be1c_147",FP="_elemento_1be1c_183",UP="_checkbox_1be1c_247",bP="_inputCheckbox_1be1c_265",ss={content:LP,content1:VP,containerImg:MP,elemento:FP,checkbox:UP,inputCheckbox:bP};var jP="firebase",BP="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(jP,BP,"app");var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(w,A,k){for(var I=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)I[yt-2]=arguments[yt];return g.prototype[A].apply(w,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)w[A]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],A=E.g[2];var k=E.g[3],I=g+(k^_&(A^k))+w[0]+3614090360&4294967295;g=_+(I<<7&4294967295|I>>>25),I=k+(A^g&(_^A))+w[1]+3905402710&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(_^k&(g^_))+w[2]+606105819&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(g^A&(k^g))+w[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=g+(k^_&(A^k))+w[4]+4118548399&4294967295,g=_+(I<<7&4294967295|I>>>25),I=k+(A^g&(_^A))+w[5]+1200080426&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(_^k&(g^_))+w[6]+2821735955&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(g^A&(k^g))+w[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=g+(k^_&(A^k))+w[8]+1770035416&4294967295,g=_+(I<<7&4294967295|I>>>25),I=k+(A^g&(_^A))+w[9]+2336552879&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(_^k&(g^_))+w[10]+4294925233&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(g^A&(k^g))+w[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=g+(k^_&(A^k))+w[12]+1804603682&4294967295,g=_+(I<<7&4294967295|I>>>25),I=k+(A^g&(_^A))+w[13]+4254626195&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(_^k&(g^_))+w[14]+2792965006&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(g^A&(k^g))+w[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=g+(A^k&(_^A))+w[1]+4129170786&4294967295,g=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(g^_))+w[6]+3225465664&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^_&(k^g))+w[11]+643717713&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^g&(A^k))+w[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(_^A))+w[5]+3593408605&4294967295,g=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(g^_))+w[10]+38016083&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^_&(k^g))+w[15]+3634488961&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^g&(A^k))+w[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(_^A))+w[9]+568446438&4294967295,g=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(g^_))+w[14]+3275163606&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^_&(k^g))+w[3]+4107603335&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^g&(A^k))+w[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(_^A))+w[13]+2850285829&4294967295,g=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(g^_))+w[2]+4243563512&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^_&(k^g))+w[7]+1735328473&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^g&(A^k))+w[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=g+(_^A^k)+w[5]+4294588738&4294967295,g=_+(I<<4&4294967295|I>>>28),I=k+(g^_^A)+w[8]+2272392833&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^_)+w[11]+1839030562&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^g)+w[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=g+(_^A^k)+w[1]+2763975236&4294967295,g=_+(I<<4&4294967295|I>>>28),I=k+(g^_^A)+w[4]+1272893353&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^_)+w[7]+4139469664&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^g)+w[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=g+(_^A^k)+w[13]+681279174&4294967295,g=_+(I<<4&4294967295|I>>>28),I=k+(g^_^A)+w[0]+3936430074&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^_)+w[3]+3572445317&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^g)+w[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=g+(_^A^k)+w[9]+3654602809&4294967295,g=_+(I<<4&4294967295|I>>>28),I=k+(g^_^A)+w[12]+3873151461&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^_)+w[15]+530742520&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^g)+w[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=g+(A^(_|~k))+w[0]+4096336452&4294967295,g=_+(I<<6&4294967295|I>>>26),I=k+(_^(g|~A))+w[7]+1126891415&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~_))+w[14]+2878612391&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~g))+w[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=g+(A^(_|~k))+w[12]+1700485571&4294967295,g=_+(I<<6&4294967295|I>>>26),I=k+(_^(g|~A))+w[3]+2399980690&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~_))+w[10]+4293915773&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~g))+w[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=g+(A^(_|~k))+w[8]+1873313359&4294967295,g=_+(I<<6&4294967295|I>>>26),I=k+(_^(g|~A))+w[15]+4264355552&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~_))+w[6]+2734768916&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~g))+w[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=g+(A^(_|~k))+w[4]+4149444226&4294967295,g=_+(I<<6&4294967295|I>>>26),I=k+(_^(g|~A))+w[11]+3174756917&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~_))+w[2]+718787259&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,w=this.B,A=this.h,k=0;k<g;){if(A==0)for(;k<=_;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<g;)if(w[A++]=E.charCodeAt(k++),A==this.blockSize){i(this,w),A=0;break}}else for(;k<g;)if(w[A++]=E[k++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)E[_++]=this.g[g]>>>w&255;return E};function s(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],w=!0,A=E.length-1;0<=A;A--){var k=E[A]|0;w&&k==g||(_[A]=k,w=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return D(h(-E));for(var g=[],_=1,w=0;E>=_;w++)g[w]=E/_|0,_*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return D(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,A=0;A<E.length;A+=8){var k=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+k),g);8>k?(k=h(Math.pow(g,k)),w=w.j(k).add(h(I))):(w=w.j(_),w=w.add(h(I)))}return w}var m=u(0),y=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);E+=(0<=w?w:4294967296+w)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var g=h(Math.pow(E,6)),_=this,w="";;){var A=O(_,g).g;_=T(_,A.j(g));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,P(_))return k+w;for(;6>k.length;)k="0"+k;w=k+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=T(this,E),N(E)?-1:P(E)?0:1};function D(E){for(var g=E.g.length,_=[],w=0;w<g;w++)_[w]=~E.g[w];return new a(_,~E.h).add(y)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0,A=0;A<=g;A++){var k=w+(this.i(A)&65535)+(E.i(A)&65535),I=(k>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);w=I>>>16,k&=65535,I&=65535,_[A]=I<<16|k}return new a(_,_[_.length-1]&-2147483648?-1:0)};function T(E,g){return E.add(D(g))}t.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<E.g.length;A++){var k=this.i(w)>>>16,I=this.i(w)&65535,yt=E.i(A)>>>16,sr=E.i(A)&65535;_[2*w+2*A]+=I*sr,v(_,2*w+2*A),_[2*w+2*A+1]+=k*sr,v(_,2*w+2*A+1),_[2*w+2*A+1]+=I*yt,v(_,2*w+2*A+1),_[2*w+2*A+2]+=k*yt,v(_,2*w+2*A+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function v(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function S(E,g){this.g=E,this.h=g}function O(E,g){if(P(g))throw Error("division by zero");if(P(E))return new S(m,m);if(N(E))return g=O(D(E),g),new S(D(g.g),D(g.h));if(N(g))return g=O(E,D(g)),new S(D(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(E);)_=U(_),w=U(w);var A=j(_,1),k=j(w,1);for(w=j(w,2),_=j(_,2);!P(w);){var I=k.add(w);0>=I.l(E)&&(A=A.add(_),k=I),w=j(w,1),_=j(_,1)}return g=T(E,A.j(g)),new S(A,g)}for(A=m;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),k=h(_),I=k.j(g);N(I)||0<I.l(E);)_-=w,k=h(_),I=k.j(g);P(k)&&(k=y),A=A.add(k),E=T(E,I)}return new S(A,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&E.i(w);return new a(_,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|E.i(w);return new a(_,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^E.i(w);return new a(_,this.h^E.h)};function U(E){for(var g=E.g.length+1,_=[],w=0;w<g;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(_,E.h)}function j(E,g){var _=g>>5;g%=32;for(var w=E.g.length-_,A=[],k=0;k<w;k++)A[k]=0<g?E.i(k+_)>>>g|E.i(k+_+1)<<32-g:E.i(k+_);return new a(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,T_=a}).apply(typeof Om<"u"?Om:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S_,A_,ms,P_,Aa,oh,R_,C_,k_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function y(o,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function C(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,x){for(var b=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)b[ie-2]=arguments[ie];return c.prototype[R].apply(p,b)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function D(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,x=p.length||0;o.length=R+x;for(let b=0;b<x;b++)o[R+b]=p[b]}else o.push(p)}}class T{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function k(o){l.setTimeout(()=>{throw o},0)}function I(){var o=G;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class yt{constructor(){this.h=this.g=null}add(c,d){const p=sr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var sr=new T(()=>new Mi,o=>o.reset());class Mi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let qt,B=!1,G=new yt,q=()=>{const o=l.Promise.resolve(void 0);qt=()=>{o.then(de)}};var de=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){k(d)}var c=sr;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Xt(o,c){if(_e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{O(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xt.aa.h.call(this)}}P(Xt,_e);var Yt={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),P0=0;function R0(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++P0,this.da=this.fa=!1}function To(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function So(o){this.src=o,this.g={},this.h=0}So.prototype.add=function(o,c,d,p,R){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var b=Ql(o,c,p,R);return-1<b?(c=o[b],d||(c.fa=!1)):(c=new R0(c,this.src,x,!!p,R),c.fa=d,o.push(c)),c};function ql(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=R)&&Array.prototype.splice.call(p,R,1),x&&(To(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ql(o,c,d,p){for(var R=0;R<o.length;++R){var x=o[R];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return R}return-1}var Xl="closure_lm_"+(1e6*Math.random()|0),Yl={};function jd(o,c,d,p,R){if(Array.isArray(c)){for(var x=0;x<c.length;x++)jd(o,c[x],d,p,R);return null}return d=$d(d),o&&o[Jt]?o.K(c,d,h(p)?!!p.capture:!!p,R):C0(o,c,d,!1,p,R)}function C0(o,c,d,p,R,x){if(!c)throw Error("Invalid event type");var b=h(R)?!!R.capture:!!R,ie=Zl(o);if(ie||(o[Xl]=ie=new So(o)),d=ie.add(c,d,p,b,x),d.proxy)return d;if(p=k0(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Qt||(R=b),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(zd(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function k0(){function o(d){return c.call(o.src,o.listener,d)}const c=N0;return o}function Bd(o,c,d,p,R){if(Array.isArray(c))for(var x=0;x<c.length;x++)Bd(o,c[x],d,p,R);else p=h(p)?!!p.capture:!!p,d=$d(d),o&&o[Jt]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=Ql(x,d,p,R),-1<d&&(To(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=Zl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ql(c,d,p,R)),(d=-1<o?c[o]:null)&&Jl(d))}function Jl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Jt])ql(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(zd(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Zl(c))?(ql(d,o),d.h==0&&(d.src=null,c[Xl]=null)):To(o)}}}function zd(o){return o in Yl?Yl[o]:Yl[o]="on"+o}function N0(o,c){if(o.da)o=!0;else{c=new Xt(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Jl(o),o=d.call(p,c)}return o}function Zl(o){return o=o[Xl],o instanceof So?o:null}var eu="__closure_events_fn_"+(1e9*Math.random()>>>0);function $d(o){return typeof o=="function"?o:(o[eu]||(o[eu]=function(c){return o.handleEvent(c)}),o[eu])}function je(){re.call(this),this.i=new So(this),this.M=this,this.F=null}P(je,re),je.prototype[Jt]=!0,je.prototype.removeEventListener=function(o,c,d,p){Bd(this,o,c,d,p)};function Je(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new _e(c,o);else if(c instanceof _e)c.target=c.target||o;else{var R=c;c=new _e(p,o),w(c,R)}if(R=!0,d)for(var x=d.length-1;0<=x;x--){var b=c.g=d[x];R=Ao(b,p,!0,c)&&R}if(b=c.g=o,R=Ao(b,p,!0,c)&&R,R=Ao(b,p,!1,c)&&R,d)for(x=0;x<d.length;x++)b=c.g=d[x],R=Ao(b,p,!1,c)&&R}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)To(d[p]);delete o.g[c],o.h--}}this.F=null},je.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},je.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Ao(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,x=0;x<c.length;++x){var b=c[x];if(b&&!b.da&&b.capture==d){var ie=b.listener,De=b.ha||b.src;b.fa&&ql(o.i,b),R=ie.call(De,p)!==!1&&R}}return R&&!p.defaultPrevented}function Hd(o,c,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Wd(o){o.g=Hd(()=>{o.g=null,o.i&&(o.i=!1,Wd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class x0 extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(o){re.call(this),this.h=o,this.g={}}P(Fi,re);var Kd=[];function Gd(o){j(o.g,function(c,d){this.g.hasOwnProperty(d)&&Jl(c)},o),o.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),Gd(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tu=l.JSON.stringify,O0=l.JSON.parse,D0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function nu(){}nu.prototype.h=null;function qd(o){return o.h||(o.h=o.i())}function Qd(){}var Ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ru(){_e.call(this,"d")}P(ru,_e);function iu(){_e.call(this,"c")}P(iu,_e);var or={},Xd=null;function Po(){return Xd=Xd||new je}or.La="serverreachability";function Yd(o){_e.call(this,or.La,o)}P(Yd,_e);function bi(o){const c=Po();Je(c,new Yd(c))}or.STAT_EVENT="statevent";function Jd(o,c){_e.call(this,or.STAT_EVENT,o),this.stat=c}P(Jd,_e);function Ze(o){const c=Po();Je(c,new Jd(c,o))}or.Ma="timingevent";function Zd(o,c){_e.call(this,or.Ma,o),this.size=c}P(Zd,_e);function ji(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function L0(o,c,d,p,R,x){o.info(function(){if(o.g)if(x)for(var b="",ie=x.split("&"),De=0;De<ie.length;De++){var te=ie[De].split("=");if(1<te.length){var Be=te[0];te=te[1];var ze=Be.split("_");b=2<=ze.length&&ze[1]=="type"?b+(Be+"="+te+"&"):b+(Be+"=redacted&")}}else b=null;else b=x;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+b})}function V0(o,c,d,p,R,x,b){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+x+" "+b})}function Ur(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+F0(o,d)+(p?" "+p:"")})}function M0(o,c){o.info(function(){return"TIMEOUT: "+c})}Bi.prototype.info=function(){};function F0(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var b=1;b<R.length;b++)R[b]=""}}}}return tu(d)}catch{return c}}var Ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ef={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},su;function Co(){}P(Co,nu),Co.prototype.g=function(){return new XMLHttpRequest},Co.prototype.i=function(){return{}},su=new Co;function wn(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tf}function tf(){this.i=null,this.g="",this.h=!1}var nf={},ou={};function au(o,c,d){o.L=1,o.v=Oo(Zt(c)),o.m=d,o.P=!0,rf(o,null)}function rf(o,c){o.F=Date.now(),ko(o),o.A=Zt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),vf(d.i,"t",p),o.C=0,d=o.j.J,o.h=new tf,o.g=Mf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new x0(y(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Kd[0]=R.toString()),R=Kd);for(var x=0;x<R.length;x++){var b=jd(d,R[x],p||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),bi(),L0(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const c=this.M;c&&en(o)==3?c.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)e:{const ze=en(this.g);var c=this.g.Ba();const Br=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Af(this.g)))){this.J||ze!=4||c==7||(c==8||0>=Br?bi(3):bi(2)),lu(this);var d=this.g.Z();this.X=d;t:if(sf(this)){var p=Af(this.g);o="";var R=p.length,x=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),zi(this);var b="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=d==200,V0(this.i,this.u,this.A,this.l,this.R,ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,De=this.g;if((ie=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ie)){var te=ie;break t}}te=null}if(d=te)Ur(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uu(this,d);else{this.o=!1,this.s=3,Ze(12),ar(this),zi(this);break e}}if(this.P){d=!0;let At;for(;!this.J&&this.C<b.length;)if(At=U0(this,b),At==ou){ze==4&&(this.s=4,Ze(14),d=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(At==nf){this.s=4,Ze(15),Ur(this.i,this.l,b,"[Invalid Chunk]"),d=!1;break}else Ur(this.i,this.l,At,null),uu(this,At);if(sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||b.length!=0||this.h.h||(this.s=1,Ze(16),d=!1),this.o=this.o&&d,!d)Ur(this.i,this.l,b,"[Invalid Chunked Response]"),ar(this),zi(this);else if(0<b.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),mu(Be),Be.M=!0,Ze(11))}}else Ur(this.i,this.l,b,null),uu(this,b);ze==4&&ar(this),this.o&&!this.J&&(ze==4?Of(this.j,this):(this.o=!1,ko(this)))}else tE(this.g),d==400&&0<b.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),ar(this),zi(this)}}}catch{}finally{}};function sf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function U0(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?ou:(d=Number(c.substring(d,p)),isNaN(d)?nf:(p+=1,p+d>c.length?ou:(c=c.slice(p,p+d),o.C=p+d,c)))}wn.prototype.cancel=function(){this.J=!0,ar(this)};function ko(o){o.S=Date.now()+o.I,of(o,o.I)}function of(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ji(y(o.ba,o),c)}function lu(o){o.B&&(l.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(M0(this.i,this.A),this.L!=2&&(bi(),Ze(17)),ar(this),this.s=2,zi(this)):of(this,this.S-o)};function zi(o){o.j.G==0||o.J||Of(o.j,o)}function ar(o){lu(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Gd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function uu(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||cu(d.h,o))){if(!o.K&&cu(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Fo(d),Vo(d);else break e;pu(d),Ze(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ji(y(d.Za,d),6e3));if(1>=uf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ur(d,11)}else if((o.K||d.g==o)&&Fo(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let te=R[c];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Be=te[3];Be!=null&&(d.la=Be,d.j.info("VER="+d.la));const ze=te[4];ze!=null&&(d.Aa=ze,d.j.info("SVER="+d.Aa));const Br=te[5];Br!=null&&typeof Br=="number"&&0<Br&&(p=1.5*Br,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const At=o.g;if(At){const bo=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bo){var x=p.h;x.g||bo.indexOf("spdy")==-1&&bo.indexOf("quic")==-1&&bo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(hu(x,x.h),x.h=null))}if(p.D){const gu=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;gu&&(p.ya=gu,le(p.I,p.D,gu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var b=o;if(p.qa=Vf(p,p.J?p.ia:null,p.W),b.K){cf(p.h,b);var ie=b,De=p.L;De&&(ie.I=De),ie.B&&(lu(ie),ko(ie)),p.g=b}else Nf(p);0<d.i.length&&Mo(d)}else te[0]!="stop"&&te[0]!="close"||ur(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?ur(d,7):fu(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}bi(4)}catch{}}var b0=class{constructor(o,c){this.g=o,this.map=c}};function af(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uf(o){return o.h?1:o.g?o.g.size:0}function cu(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function hu(o,c){o.g?o.g.add(c):o.h=c}function cf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}af.prototype.cancel=function(){if(this.i=hf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function j0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function B0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function df(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=B0(o),p=j0(o),R=p.length,x=0;x<R;x++)c.call(void 0,p[x],d&&d[x],o)}var ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var x=o[d].substring(0,p);R=o[d].substring(p+1)}else x=o[d];c(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function lr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof lr){this.h=o.h,No(this,o.j),this.o=o.o,this.g=o.g,xo(this,o.s),this.l=o.l;var c=o.i,d=new Wi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),pf(this,d),this.m=o.m}else o&&(c=String(o).match(ff))?(this.h=!1,No(this,c[1]||"",!0),this.o=$i(c[2]||""),this.g=$i(c[3]||"",!0),xo(this,c[4]),this.l=$i(c[5]||"",!0),pf(this,c[6]||"",!0),this.m=$i(c[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}lr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Hi(c,mf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Hi(c,mf,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Hi(d,d.charAt(0)=="/"?W0:H0,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Hi(d,G0)),o.join("")};function Zt(o){return new lr(o)}function No(o,c,d){o.j=d?$i(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function xo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function pf(o,c,d){c instanceof Wi?(o.i=c,q0(o.i,o.h)):(d||(c=Hi(c,K0)),o.i=new Wi(c,o.h))}function le(o,c,d){o.i.set(c,d)}function Oo(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $i(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hi(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,$0),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mf=/[#\/\?@]/g,H0=/[#\?:]/g,W0=/[#\?]/g,K0=/[#\?@]/g,G0=/#/g;function Wi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&z0(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Wi.prototype,t.add=function(o,c){In(this),this.i=null,o=br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function gf(o,c){In(o),c=br(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function yf(o,c){return In(o),c=br(o,c),o.g.has(c)}t.forEach=function(o,c){In(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){In(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let x=0;x<R.length;x++)d.push(c[p])}return d},t.V=function(o){In(this);let c=[];if(typeof o=="string")yf(this,o)&&(c=c.concat(this.g.get(br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return In(this),this.i=null,o=br(this,o),yf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function vf(o,c,d){gf(o,c),0<d.length&&(o.i=null,o.g.set(br(o,c),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),b=this.V(p);for(p=0;p<b.length;p++){var R=x;b[p]!==""&&(R+="="+encodeURIComponent(String(b[p]))),o.push(R)}}return this.i=o.join("&")};function br(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function q0(o,c){c&&!o.j&&(In(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(gf(this,p),vf(this,R,d))},o)),o.j=c}function Q0(o,c){const d=new Bi;if(l.Image){const p=new Image;p.onload=C(Tn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=C(Tn,d,"TestLoadImage: error",!1,c,p),p.onabort=C(Tn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=C(Tn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function X0(o,c){const d=new Bi,p=new AbortController,R=setTimeout(()=>{p.abort(),Tn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(R),x.ok?Tn(d,"TestPingServer: ok",!0,c):Tn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Tn(d,"TestPingServer: error",!1,c)})}function Tn(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Y0(){this.g=new D0}function J0(o,c,d){const p=d||"";try{df(o,function(R,x){let b=R;h(R)&&(b=tu(R)),c.push(p+x+"="+encodeURIComponent(b))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Ki(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Ki,nu),Ki.prototype.g=function(){return new Do(this.l,this.j)},Ki.prototype.i=function(o){return function(){return o}}({});function Do(o,c){je.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Do,je),t=Do.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,qi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_f(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _f(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Gi(this):qi(this),this.readyState==3&&_f(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Gi(this))},t.Qa=function(o){this.g&&(this.response=o,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,qi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function qi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ef(o){let c="";return j(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function du(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ef(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,c,d))}function ye(o){je.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ye,je);var Z0=/^https?$/i,eE=["POST","PUT"];t=ye.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():su.g(),this.v=this.o?qd(this.o):qd(su),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){wf(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(eE,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,b]of d)this.g.setRequestHeader(x,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sf(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){wf(this,x)}};function wf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,If(o),Lo(o)}function If(o){o.A||(o.A=!0,Je(o,"complete"),Je(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Je(this,"complete"),Je(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Tf(this):this.bb())},t.bb=function(){Tf(this)};function Tf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||en(o)!=4||o.Z()!=2)){if(o.u&&en(o)==4)Hd(o.Ea,0,o);else if(Je(o,"readystatechange"),en(o)==4){o.h=!1;try{const b=o.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=b===0){var R=String(o.D).match(ff)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Z0.test(R?R.toLowerCase():"")}d=p}if(d)Je(o,"complete"),Je(o,"success");else{o.m=6;try{var x=2<en(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",If(o)}}finally{Lo(o)}}}}function Lo(o,c){if(o.g){Sf(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Je(o,"ready");try{d.onreadystatechange=p}catch{}}}function Sf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function en(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),O0(c)}};function Af(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function tE(o){const c={};o=(o.g&&2<=en(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(v(o[p]))continue;var d=A(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[R]||[];c[R]=x,x.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Pf(o){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qi("baseRetryDelayMs",5e3,o),this.cb=Qi("retryDelaySeedMs",1e4,o),this.Wa=Qi("forwardChannelMaxRetries",2,o),this.wa=Qi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new af(o&&o.concurrentRequestLimit),this.Da=new Y0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){Ze(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Vf(this,null,this.W),Mo(this)};function fu(o){if(Rf(o),o.G==3){var c=o.U++,d=Zt(o.I);if(le(d,"SID",o.K),le(d,"RID",c),le(d,"TYPE","terminate"),Xi(o,d),c=new wn(o,o.j,c),c.L=2,c.v=Oo(Zt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Mf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ko(c)}Lf(o)}function Vo(o){o.g&&(mu(o),o.g.cancel(),o.g=null)}function Rf(o){Vo(o),o.u&&(l.clearTimeout(o.u),o.u=null),Fo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Mo(o){if(!lf(o.h)&&!o.s){o.s=!0;var c=o.Ga;qt||q(),B||(qt(),B=!0),G.add(c,o),o.B=0}}function nE(o,c){return uf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ji(y(o.Ga,o,c),Df(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new wn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=kf(this,R,c),d=Zt(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Xi(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Ef(x)))+"&"+c:this.m&&du(d,this.m,x)),hu(this.h,R),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),R.T=!0,au(R,d,null)):au(R,d,c),this.G=2}}else this.G==3&&(o?Cf(this,o):this.i.length==0||lf(this.h)||Cf(this))};function Cf(o,c){var d;c?d=c.l:d=o.U++;const p=Zt(o.I);le(p,"SID",o.K),le(p,"RID",d),le(p,"AID",o.T),Xi(o,p),o.m&&o.o&&du(p,o.m,o.o),d=new wn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=kf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),hu(o.h,d),au(d,p,c)}function Xi(o,c){o.H&&j(o.H,function(d,p){le(c,p,d)}),o.l&&df({},function(d,p){le(c,p,d)})}function kf(o,c,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let x=-1;for(;;){const b=["count="+d];x==-1?0<d?(x=R[0].g,b.push("ofs="+x)):x=0:b.push("ofs="+x);let ie=!0;for(let De=0;De<d;De++){let te=R[De].g;const Be=R[De].map;if(te-=x,0>te)x=Math.max(0,R[De].g-100),ie=!1;else try{J0(Be,b,"req"+te+"_")}catch{p&&p(Be)}}if(ie){p=b.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Nf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;qt||q(),B||(qt(),B=!0),G.add(c,o),o.v=0}}function pu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ji(y(o.Fa,o),Df(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,xf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ji(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Vo(this),xf(this))};function mu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function xf(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Zt(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),Xi(o,c),o.m&&o.o&&du(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Oo(Zt(c)),d.m=null,d.P=!0,rf(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),pu(this),Ze(19))};function Fo(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Of(o,c){var d=null;if(o.g==c){Fo(o),mu(o),o.g=null;var p=2}else if(cu(o.h,c))d=c.D,cf(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=Po(),Je(p,new Zd(p,d)),Mo(o)}else Nf(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&nE(o,c)||p==2&&pu(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:ur(o,5);break;case 4:ur(o,10);break;case 3:ur(o,6);break;default:ur(o,2)}}}function Df(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function ur(o,c){if(o.j.info("Error code "+c),c==2){var d=y(o.fb,o),p=o.Xa;const R=!p;p=new lr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||No(p,"https"),Oo(p),R?Q0(p.toString(),d):X0(p.toString(),d)}else Ze(2);o.G=0,o.l&&o.l.sa(c),Lf(o),Rf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Lf(o){if(o.G=0,o.ka=[],o.l){const c=hf(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Vf(o,c,d){var p=d instanceof lr?Zt(d):new lr(d);if(p.g!="")c&&(p.g=c+"."+p.g),xo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var x=new lr(null);p&&No(x,p),c&&(x.g=c),R&&xo(x,R),d&&(x.l=d),p=x}return d=o.D,c=o.ya,d&&c&&le(p,d,c),le(p,"VER",o.la),Xi(o,p),p}function Mf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ye(new Ki({eb:d})):new ye(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ff(){}t=Ff.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Uo(){}Uo.prototype.g=function(o,c){return new ct(o,c)};function ct(o,c){je.call(this),this.g=new Pf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!v(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new jr(this)}P(ct,je),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){fu(this.g)},ct.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=tu(o),o=d);c.i.push(new b0(c.Ya++,o)),c.G==3&&Mo(c)},ct.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,ct.aa.N.call(this)};function Uf(o){ru.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Uf,ru);function bf(){iu.call(this),this.status=1}P(bf,iu);function jr(o){this.g=o}P(jr,Ff),jr.prototype.ua=function(){Je(this.g,"a")},jr.prototype.ta=function(o){Je(this.g,new Uf(o))},jr.prototype.sa=function(o){Je(this.g,new bf)},jr.prototype.ra=function(){Je(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,k_=function(){return new Uo},C_=function(){return Po()},R_=or,oh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ro.NO_ERROR=0,Ro.TIMEOUT=8,Ro.HTTP_ERROR=6,Aa=Ro,ef.COMPLETE="complete",P_=ef,Qd.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",je.prototype.listen=je.prototype.K,ms=Qd,A_=Ki,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,S_=ye}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const Dm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new hd("@firebase/firestore");function os(){return kr.logLevel}function H(t,...e){if(kr.logLevel<=Y.DEBUG){const n=e.map(Td);kr.debug(`Firestore (${Li}): ${t}`,...n)}}function Nr(t,...e){if(kr.logLevel<=Y.ERROR){const n=e.map(Td);kr.error(`Firestore (${Li}): ${t}`,...n)}}function ll(t,...e){if(kr.logLevel<=Y.WARN){const n=e.map(Td);kr.warn(`Firestore (${Li}): ${t}`,...n)}}function Td(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+t;throw Nr(e),new Error(e)}function Re(t,e){t||J()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class $P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HP{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new N_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new Ke(e)}}class WP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new GP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Oe(0,0))}static max(){return new fe(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Zs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const XP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Zs{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return XP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ie.fromString(e))}static fromName(e){return new Q(Ie.fromString(e).popFirst(5))}static empty(){return new Q(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ie(e.slice()))}}function YP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Yn(i,Q.empty(),e)}function JP(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(fe.min(),Q.empty(),-1)}static max(){return new Yn(fe.max(),Q.empty(),-1)}}function ZP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==eR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}D_.oe=-1;function Sd(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function rR(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _o(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vm(this.data.getIterator())}getIteratorFrom(e){return new Vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Qe(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iR("Invalid base64 string: "+s):s}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const sR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(Re(!!t),typeof t=="string"){let e=0;const n=sR.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function eo(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function V_(t){const e=t.mapValue.fields.__previous_value__;return Ad(e)?V_(e):e}function cl(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,i,s,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ad(t)?4:lR(t)?9007199254740991:aR(t)?10:11:J()}function Gt(t,e){if(t===e)return!0;const n=Si(t);if(n!==Si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=xr(i.timestampValue),l=xr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return eo(i.bytesValue).isEqual(eo(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Me(i.doubleValue),l=Me(s.doubleValue);return a===l?ul(a)===ul(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Lm(a)!==Lm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Gt(a[u],l[u])))return!1;return!0}(t,e);default:return J()}}function to(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Ai(t,e){if(t===e)return 0;const n=Si(t),r=Si(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Me(s.integerValue||s.doubleValue),u=Me(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Mm(t.timestampValue,e.timestampValue);case 4:return Mm(cl(t),cl(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,a){const l=eo(s),u=eo(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=se(Me(s.latitude),Me(a.latitude));return l!==0?l:se(Me(s.longitude),Me(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},y=a.fields||{},C=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=se(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Fm(C,P)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===oa.mapValue&&a===oa.mapValue)return 0;if(s===oa.mapValue)return 1;if(a===oa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=se(u[m],f[m]);if(y!==0)return y;const C=Ai(l[u[m]],h[f[m]]);if(C!==0)return C}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function Mm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=xr(t),r=xr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Fm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ai(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Pi(t){return ah(t)}function ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return eo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${ah(n.fields[a])}`;return i+"}"}(t.mapValue):J()}function lh(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function Pa(t){return!!t&&"mapValue"in t}function aR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _o(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ps(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Ps(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_o(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Ps(this.value))}}function M_(t){const e=[];return _o(t.fields,(n,r)=>{const i=new Fe([n]);if(Pa(r)){const s=M_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,fe.min(),fe.min(),fe.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,fe.min(),fe.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,fe.min(),fe.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function Um(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),n.key):r=Ai(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n="asc"){this.field=e,this.dir=n}}function uR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{}class Ne extends F_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hR(e,n,r):n==="array-contains"?new pR(e,r):n==="in"?new mR(e,r):n==="not-in"?new gR(e,r):n==="array-contains-any"?new yR(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dR(e,r):new fR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ai(n,this.value)):n!==null&&Si(this.value)===Si(n)&&this.matchesComparison(Ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends F_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jn(e,n)}matches(e){return U_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function U_(t){return t.op==="and"}function b_(t){return cR(t)&&U_(t)}function cR(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function uh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(b_(t))return t.filters.map(e=>uh(e)).join(",");{const e=t.filters.map(n=>uh(n)).join(",");return`${t.op}(${e})`}}function j_(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Gt(r.value,i.value)}(t,e):t instanceof Jn?function(r,i){return i instanceof Jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&j_(a,i.filters[l]),!0):!1}(t,e):void J()}function B_(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof Jn?function(n){return n.op.toString()+" {"+n.getFilters().map(B_).join(" ,")+"}"}(t):"Filter"}class hR extends Ne{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class dR extends Ne{constructor(e,n){super(e,"in",n),this.keys=z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fR extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class pR extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&to(n.arrayValue,this.value)}}class mR extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&to(this.value.arrayValue,n)}}class gR extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!to(this.value.arrayValue,n)}}class yR extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>to(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function jm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new vR(t,e,n,r,i,s,a)}function Rd(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.ue=n}return e.ue}function Cd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!j_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bm(t.startAt,e.startAt)&&bm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _R(t,e,n,r,i,s,a,l){return new Bl(t,e,n,r,i,s,a,l)}function ER(t){return new Bl(t)}function Bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wR(t){return t.collectionGroup!==null}function Rs(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Qe(Fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fl(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new fl(Fe.keyField(),r))}return e.ce}function Er(t){const e=ae(t);return e.le||(e.le=IR(e,Rs(t))),e.le}function IR(t,e){if(t.limitType==="F")return jm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fl(i.field,s)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return jm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ch(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $_(t,e){return Cd(Er(t),Er(e))&&t.limitType===e.limitType}function H_(t){return`${Rd(Er(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>B_(i)).join(", ")}]`),Sd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Pi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Pi(i)).join(",")),`Target(${r})`}(Er(t))}; limitType=${t.limitType})`}function kd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Rs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Um(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Rs(r),i)||r.endAt&&!function(a,l,u){const h=Um(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Rs(r),i))}(t,e)}function TR(t){return(e,n)=>{let r=!1;for(const i of Rs(t)){const s=SR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ai(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_o(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return L_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new ut(Q.comparator);function pl(){return AR}const W_=new ut(Q.comparator);function aa(...t){let e=W_;for(const n of t)e=e.insert(n.key,n);return e}function K_(t){let e=W_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return Cs()}function G_(){return Cs()}function Cs(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const PR=new ut(Q.comparator),RR=new Qe(Q.comparator);function qe(...t){let e=RR;for(const n of t)e=e.add(n);return e}const CR=new Qe(se);function kR(){return CR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function q_(t){return{integerValue:""+t}}function NR(t,e){return rR(e)?q_(e):Nd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this._=void 0}}function xR(t,e,n){return t instanceof ml?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ad(s)&&(s=V_(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof no?X_(t,e):t instanceof ro?Y_(t,e):function(i,s){const a=Q_(i,s),l=zm(a)+zm(i.Pe);return lh(a)&&lh(i.Pe)?q_(l):Nd(i.serializer,l)}(t,e)}function OR(t,e,n){return t instanceof no?X_(t,e):t instanceof ro?Y_(t,e):n}function Q_(t,e){return t instanceof gl?function(r){return lh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ml extends zl{}class no extends zl{constructor(e){super(),this.elements=e}}function X_(t,e){const n=J_(e);for(const r of t.elements)n.some(i=>Gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends zl{constructor(e){super(),this.elements=e}}function Y_(t,e){let n=J_(e);for(const r of t.elements)n=n.filter(i=>!Gt(i,r));return{arrayValue:{values:n}}}class gl extends zl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zm(t){return Me(t.integerValue||t.doubleValue)}function J_(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof no&&i instanceof no||r instanceof ro&&i instanceof ro?Ti(r.elements,i.elements,Gt):r instanceof gl&&i instanceof gl?Gt(r.Pe,i.Pe):r instanceof ml&&i instanceof ml}(t.transform,e.transform)}class LR{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function Z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new t0(t.key,hn.none()):new Eo(t.key,t.data,hn.none());{const n=t.data,r=xt.empty();let i=new Qe(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Fr(t.key,r,new Ot(i.toArray()),hn.none())}}function VR(t,e,n){t instanceof Eo?function(i,s,a){const l=i.value.clone(),u=Hm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(i,s,a){if(!Ra(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Hm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(e0(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ks(t,e,n,r){return t instanceof Eo?function(s,a,l,u){if(!Ra(s.precondition,a))return l;const h=s.value.clone(),f=Wm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,a,l,u){if(!Ra(s.precondition,a))return l;const h=Wm(s.fieldTransforms,u,a),f=a.data;return f.setAll(e0(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return Ra(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function MR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q_(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function $m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ti(r,i,(s,a)=>DR(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends $l{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends $l{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function e0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hm(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,OR(a,l,n[i]))}return r}function Wm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,xR(s,a,e))}return r}class t0 extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FR extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=Z_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),qe())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>$m(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>$m(n,r))}}class xd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return PR}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new xd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,Z;function jR(t){switch(t){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function BR(t){if(t===void 0)return Nr("GRPC error has no .code"),F.UNKNOWN;switch(t){case we.OK:return F.OK;case we.CANCELLED:return F.CANCELLED;case we.UNKNOWN:return F.UNKNOWN;case we.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case we.INTERNAL:return F.INTERNAL;case we.UNAVAILABLE:return F.UNAVAILABLE;case we.UNAUTHENTICATED:return F.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case we.NOT_FOUND:return F.NOT_FOUND;case we.ALREADY_EXISTS:return F.ALREADY_EXISTS;case we.PERMISSION_DENIED:return F.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case we.ABORTED:return F.ABORTED;case we.OUT_OF_RANGE:return F.OUT_OF_RANGE;case we.UNIMPLEMENTED:return F.UNIMPLEMENTED;case we.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(Z=we||(we={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new T_([4294967295,4294967295],0);class zR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $R(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HR(t,e){return hh(t,e.toTimestamp())}function pi(t){return Re(!!t),fe.fromTimestamp(function(n){const r=xr(n);return new Oe(r.seconds,r.nanos)}(t))}function n0(t,e){return dh(t,e).canonicalString()}function dh(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WR(t){const e=Ie.fromString(t);return Re(ZR(e)),e}function fh(t,e){return n0(t.databaseId,e.path)}function KR(t){const e=WR(t);return e.length===4?Ie.emptyPath():qR(e)}function GR(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qR(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Km(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function QR(t,e){let n;if(e instanceof Eo)n={update:Km(t,e.key,e.value)};else if(e instanceof t0)n={delete:fh(t,e.key)};else if(e instanceof Fr)n={update:Km(t,e.key,e.data),updateMask:JR(e.fieldMask)};else{if(!(e instanceof FR))return J();n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof ml)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof no)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ro)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gl)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function XR(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?pi(i.updateTime):pi(s);return a.isEqual(fe.min())&&(a=pi(s)),new LR(a,i.transformResults||[])}(n,e))):[]}function YR(t){let e=KR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=r0(m);return y instanceof Jn&&b_(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(y=>function(P){return new fl(Hr(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Sd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,C=m.values||[];return new dl(C,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,C=m.values||[];return new dl(C,y)}(n.endAt)),_R(e,i,a,s,l,"F",u,h)}function r0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hr(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hr(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hr(n.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Hr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jn.create(n.compositeFilter.filters.map(r=>r0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function Hr(t){return Fe.fromServerFormat(t.fieldPath)}function JR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.ct=e}}function tC(t){const e=YR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.un=new rC}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class rC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ri(0)}static kn(){return new Ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ks(r.mutation,i,Ot.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,qe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=qe()){const i=gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=aa();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,qe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=pl();const a=Cs(),l=function(){return Cs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Fr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ks(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):a.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new sC(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Cs();let i=new ut((a,l)=>a-l),s=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ot.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||qe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=G_();f.forEach(y=>{if(!s.has(y)){const C=Z_(n.get(y),r.get(y));C!==null&&m.set(y,C),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(gr());let l=-1,u=s;return a.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,qe())).next(f=>({batchId:l,changes:K_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=aa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=aa();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new Bl(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Nt.newInvalidDocument(f)))});let l=aa();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ks(f.mutation,h,Ot.empty(),Oe.now()),kd(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pi(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:tC(i.bundledQuery),readTime:pi(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.overlays=new ut(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=gr(),s=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=gr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=gr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new bR(n,r));let s=this.Ir.get(n);s===void 0&&(s=qe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Tr=new Qe(Ce.Er),this.dr=new Qe(Ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ce(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ce(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Ie([])),r=new Ce(n,e),i=new Ce(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Ie([])),r=new Ce(n,e),i=new Ce(n,e+1);let s=qe();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ce(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Qe(Ce.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new UR(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ce(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ce(n,0),i=new Ce(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(se);return n.forEach(i=>{const s=new Ce(i,0),a=new Ce(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const a=new Ce(new Q(s),0);let l=new Qe(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ce(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ce(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.Mr=e,this.docs=function(){return new ut(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=pl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=pl();const a=n.path,l=new Q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ZP(JP(f),r)<=0||(i.has(f.key)||kd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dC(this)}getSize(e){return V.resolve(this.size)}}class dC extends iC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.persistence=e,this.Nr=new Vi(n=>Rd(n),Cd),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Od,this.targetCount=0,this.kr=Ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new D_(0),this.Kr=!1,this.Kr=!0,this.$r=new uC,this.referenceDelegate=e(this),this.Ur=new fC(this),this.indexManager=new nC,this.remoteDocumentCache=function(i){return new hC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new eC(n),this.Gr=new aC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new cC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new mC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class mC extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Jr=new Od,this.Yr=null}static Zr(e){return new Dd(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=qe(),i=qe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ld(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return o1()?8:nR(Ye())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new gC;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(os()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(os()<=Y.DEBUG&&H("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(os()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Er(n))):V.resolve())}Yi(e,n){if(Bm(n))return V.resolve(null);let r=Er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ch(n,null,"F"),r=Er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=qe(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,ch(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Bm(n)||i.isEqual(fe.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(os()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),as(n)),this.rs(e,a,n,YP(i,-1)).next(l=>l))})}ts(e,n){let r=new Qe(TR(e));return n.forEach((i,s)=>{kd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return os()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ut(se),this._s=new Vi(s=>Rd(s),Cd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function _C(t,e,n,r){return new vC(t,e,n,r)}async function i0(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=qe();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function EC(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let C=V.resolve();return y.forEach(P=>{C=C.next(()=>f.getEntry(u,P)).next(N=>{const D=h.docVersions.get(P);Re(D!==null),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=qe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wC(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function IC(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Gm{constructor(){this.activeTargetIds=kR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TC{constructor(){this.so=new Gm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la=null;function Ju(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class RC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Ju(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ll("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Li}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=AC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ju();return new Promise((a,l)=>{const u=new S_;u.setWithCredentials(!0),u.listenOnce(P_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Aa.NO_ERROR:const f=u.getResponseJson();H(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Aa.TIMEOUT:H(We,`RPC '${e}' ${s} timed out`),l(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case Aa.HTTP_ERROR:const m=u.getStatus();if(H(We,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y==null?void 0:y.error;if(C&&C.status&&C.message){const P=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(C.status);l(new K(P,C.message))}else l(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(We,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(We,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Ju(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=k_(),l=C_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new A_({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(We,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let y=!1,C=!1;const P=new PC({Io:D=>{C?H(We,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(H(We,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),H(We,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),N=(D,T,v)=>{D.listen(T,S=>{try{v(S)}catch(O){setTimeout(()=>{throw O},0)}})};return N(m,ms.EventType.OPEN,()=>{C||(H(We,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(m,ms.EventType.CLOSE,()=>{C||(C=!0,H(We,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(m,ms.EventType.ERROR,D=>{C||(C=!0,ll(We,`RPC '${e}' stream ${i} transport errored:`,D),P.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),N(m,ms.EventType.MESSAGE,D=>{var T;if(!C){const v=D.data[0];Re(!!v);const S=v,O=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(O){H(We,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let j=function(_){const w=we[_];if(w!==void 0)return BR(w)}(U),E=O.message;j===void 0&&(j=F.INTERNAL,E="Unknown error status: "+U+" with message "+O.message),C=!0,P.So(new K(j,E)),m.close()}else H(We,`RPC '${e}' stream ${i} received:`,v),P.bo(v)}}),N(l,R_.STAT_EVENT,D=>{D.stat===oh.PROXY?H(We,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===oh.NOPROXY&&H(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Zu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){return new zR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new s0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kC extends CC{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Re(!!e.streamToken),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=XR(e.writeResults,e.commitTime),r=pi(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=GR(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,dh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,dh(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(F.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Io(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.L_.add(4),await wo(h),h.q_.set("Unknown"),h.L_.delete(4),await Wl(h)}(this))})}),this.q_=new xC(r,i)}}async function Wl(t){if(Io(t))for(const e of t.B_)await e(!0)}async function wo(t){for(const e of t.B_)await e(!1)}function Io(t){return ae(t).L_.size===0}async function o0(t,e,n){if(!jl(e))throw e;t.L_.add(1),await wo(t),t.q_.set("Offline"),n||(n=()=>wC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Wl(t)})}function a0(t,e){return e().catch(n=>o0(t,n,e))}async function Kl(t){const e=ae(t),n=Zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DC(e);)try{const i=await IC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,LC(e,i)}catch(i){await o0(e,i)}l0(e)&&u0(e)}function DC(t){return Io(t)&&t.O_.length<10}function LC(t,e){t.O_.push(e);const n=Zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function l0(t){return Io(t)&&!Zn(t).n_()&&t.O_.length>0}function u0(t){Zn(t).start()}async function VC(t){Zn(t).p_()}async function MC(t){const e=Zn(t);for(const n of t.O_)e.m_(n.mutations)}async function FC(t,e,n){const r=t.O_.shift(),i=xd.from(r,e,n);await a0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function UC(t,e){e&&Zn(t).V_&&await async function(r,i){if(function(a){return jR(a)&&a!==F.ABORTED}(i.code)){const s=r.O_.shift();Zn(r).s_(),await a0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kl(r)}}(t,e),l0(t)&&u0(t)}async function Qm(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Io(n);n.L_.add(3),await wo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Wl(n)}async function bC(t,e){const n=ae(t);e?(n.L_.delete(2),await Wl(n)):e||(n.L_.add(2),await wo(n),n.q_.set("Unknown"))}function Zn(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new kC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VC.bind(null,t),mo:UC.bind(null,t),f_:MC.bind(null,t),g_:FC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Vd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function c0(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),jl(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}class jC{constructor(){this.queries=Xm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=Xm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function Xm(){return new Vi(t=>H_(t),$_)}function BC(t){t.Y_.forEach(e=>{e.next()})}var Ym,Jm;(Jm=Ym||(Ym={})).ea="default",Jm.Cache="cache";class zC{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vi(l=>H_(l),$_),this.Ma=new Map,this.xa=new Set,this.Oa=new ut(Q.comparator),this.Na=new Map,this.La=new Od,this.Ba={},this.ka=new Map,this.qa=Ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $C(t,e,n){const r=GC(t);try{const i=await function(a,l){const u=ae(a),h=Oe.now(),f=l.reduce((C,P)=>C.add(P.key),qe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=pl(),N=qe();return u.cs.getEntries(C,f).next(D=>{P=D,P.forEach((T,v)=>{v.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,P)).next(D=>{m=D;const T=[];for(const v of l){const S=MR(v,m.get(v.key).overlayedDocument);S!=null&&T.push(new Fr(v.key,S,M_(S.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,T,l)}).next(D=>{y=D;const T=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(C,D.batchId,T)})}).then(()=>({batchId:y.batchId,changes:K_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new ut(se)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,n),await Gl(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=c0(i,"Failed to persist write");n.reject(s)}}function Zm(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=ae(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&BC(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HC(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await EC(n.localStore,e);d0(n,r,null),h0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gl(n,i)}catch(i){await O_(i)}}async function WC(t,e,n){const r=ae(t);try{const i=await function(a,l){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Re(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);d0(r,e,n),h0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gl(r,i)}catch(i){await O_(i)}}function h0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function d0(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Gl(t,e,n){const r=ae(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Ld.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.$i,C=>f.persistence.referenceDelegate.addReference(m,y.targetId,C)).next(()=>V.forEach(y.Ui,C=>f.persistence.referenceDelegate.removeReference(m,y.targetId,C)))))}catch(m){if(!jl(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const C=f.os.get(y),P=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,N)}}}(r.localStore,s))}async function KC(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await i0(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gl(n,r.hs)}}function GC(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WC.bind(null,e),e}class eg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _C(this.persistence,new yC,e.initialUser,this.serializer)}createPersistence(e){return new pC(Dd.Zr,this.serializer)}createSharedClientState(e){return new TC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KC.bind(null,this.syncEngine),await bC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jC}()}createDatastore(e){const n=Hl(e.databaseInfo.databaseId),r=function(s){return new RC(s)}(e.databaseInfo);return function(s,a,l,u){return new NC(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new OC(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zm(this.syncEngine,n,0),function(){return qm.D()?new qm:new SC}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const m=new zC(i,s,a,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await wo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=x_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=c0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ec(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await i0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YC(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qm(e.remoteStore,i)),t._onlineComponents=e}function XC(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function YC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XC(n))throw n;ll("Error using user provided cache. Falling back to memory cache: "+n),await ec(t,new eg)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ec(t,new eg);return t._offlineComponents}async function JC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await tg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await tg(t,new qC))),t._onlineComponents}function ZC(t){return JC(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tk(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rg(t){if(!Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function ph(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Md(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zP;switch(r.type){case"firstParty":return new KP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ng.get(n);r&&(H("ComponentProvider","Removing Datastore"),ng.delete(n),r.terminate())}(this),Promise.resolve()}}function nk(t,e,n,r={}){var i;const s=(t=ph(t,Fd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ke.MOCK_USER;else{l=e1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ke(h)}t._authCredentials=new $P(new N_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ud(this.firestore,e,this._query)}}class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new io(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class io extends Ud{constructor(e,n,r){super(e,n,ER(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new Q(e))}withConverter(e){return new io(this.firestore,e,this._path)}}function rk(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=x_.newId()),ek("doc","path",e),t instanceof Fd){const r=Ie.fromString(e,...n);return rg(r),new dn(t,null,new Q(r))}{if(!(t instanceof dn||t instanceof io))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return rg(r),new dn(t.firestore,t instanceof io?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new s0(this,"async_queue_retry"),this.Eu=()=>{const n=Zu();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Zu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new _r;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!jl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Vd.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&J()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class p0 extends Fd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ik}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||m0(this),this._firestoreClient.terminate()}}function sk(t,e){const n=typeof t=="object"?t:jv(),r=typeof t=="string"?t:"(default)",i=fd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=JT("firestore");s&&nk(i,...s)}return i}function ok(t){return t._firestoreClient||m0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function m0(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new oR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new QC(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(Kt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^__.*__$/;class lk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}function E0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class bd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return yl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(E0(this.wu)&&ak.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class uk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hl(e)}Nu(e,n,r,i=!1){return new bd({wu:e,methodName:n,Ou:r,path:Fe.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ck(t){const e=t._freezeSettings(),n=Hl(t._databaseId);return new uk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hk(t,e,n,r,i,s={}){const a=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);S0("Data must be an object, but it was:",a,r);const l=I0(r,a);let u,h;if(s.merge)u=new Ot(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=dk(e,m,n);if(!a.contains(y))throw new K(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);mk(f,y)||f.push(y)}u=new Ot(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new lk(new xt(l),u,h)}function w0(t,e){if(T0(t=Mt(t)))return S0("Unsupported field value:",e,t),I0(t,e);if(t instanceof y0)return function(r,i){if(!E0(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=w0(l,i.Fu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:hh(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hh(i.serializer,s)}}if(r instanceof v0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:$R(i.serializer,r._byteString)};if(r instanceof dn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:n0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _0)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return Nd(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Md(r)}`)}(t,e)}function I0(t,e){const n={};return L_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_o(t,(r,i)=>{const s=w0(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function T0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof v0||t instanceof so||t instanceof dn||t instanceof y0||t instanceof _0)}function S0(t,e,n){if(!T0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Md(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function dk(t,e,n){if((e=Mt(e))instanceof g0)return e._internalPath;if(typeof e=="string")return pk(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const fk=new RegExp("[~\\*/\\[\\]]");function pk(t,e,n){if(e.search(fk)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new g0(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function mk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function yk(t,e,n){t=ph(t,dn);const r=ph(t.firestore,p0),i=gk(t.converter,e);return vk(r,[hk(ck(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function vk(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>$C(await ZC(r),i,s)),s.promise}(ok(t),e)}(function(e,n=!0){(function(i){Li=i})(Oi),Ii(new Pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new p0(new HP(r.getProvider("auth-internal")),new qP(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qn(Dm,"4.7.1",e),qn(Dm,"4.7.1","esm2017")})();const _k={apiKey:"AIzaSyDI2Ra6xg7pbvt2RLmHZt0AgWQoXmygfxo",authDomain:"aubeaver-8aa8a.firebaseapp.com",projectId:"aubeaver-8aa8a",storageBucket:"aubeaver-8aa8a.appspot.com",messagingSenderId:"229985108021",appId:"1:229985108021:web:ae7f78866760da7a72b17c"},A0=bv(_k),sg=xP(A0),Ek=sk(A0),wk=()=>{const[t,e]=vt.useState(""),[n,r]=vt.useState(""),[i,s]=vt.useState("");vt.useState("");const[a,l]=vt.useState(""),[u,h]=vt.useState(""),[f,m]=vt.useState(""),y=async C=>{C.preventDefault(),console.log(i,a,n,u);try{await yA(sg,a,u);const P=sg.currentUser;console.log(P),P&&await yk(rk(Ek,"Usuários",P.uid),{nome:i,email:P.email,username:n,senha:u,Tipo_de_cadastro:t})}catch(P){console.log(P)}};return L.jsx(L.Fragment,{children:L.jsx("body",{children:L.jsxs("section",{children:[L.jsx("div",{className:ss.content1,children:L.jsxs("div",{className:ss.content,children:[L.jsx("h2",{children:"Cadastre-se"}),L.jsx("p",{}),L.jsx("p",{}),L.jsxs("form",{onSubmit:y,children:[L.jsx(UT,{label:"Entrar como",options:["Pessoa física","Pessoa jurídica"],value:t,setValue:e}),L.jsx("p",{}),L.jsx(ri,{label:"Nome",type:"nome",id:"nome",value:i,setValue:s}),L.jsx("p",{}),L.jsx(ri,{label:"Email",type:"email",id:"email",value:a,setValue:l}),L.jsx("p",{}),L.jsx(ri,{label:"Username",type:"username",id:"usename",value:n,setValue:r}),L.jsx("p",{}),L.jsx(ri,{label:"Senha",type:"password",id:"password",value:u,setValue:h}),L.jsx("p",{}),L.jsxs("label",{className:ss.checkbox,children:[" ",L.jsx("input",{className:ss.inputCheckbox,type:"checkbox",value:f,checked:f,onChange:function({target:P}){m(P.checked)}})," Li e aceito os termos. "]}),L.jsx("p",{}),L.jsx("center",{children:L.jsx("button",{type:"submit",children:"Cadastre-se"})})]})]})}),L.jsx("div",{className:ss.containerImg,children:L.jsx("img",{src:Nv,alt:"RostoMascote"})})]})})})},Ik=()=>L.jsx(L.Fragment,{children:L.jsxs(kv,{children:[L.jsx(Qs,{path:"/",element:L.jsx(DP,{})}),L.jsx(Qs,{path:"criar",element:L.jsx(wk,{})})]})}),Tk=()=>L.jsx(L.Fragment,{children:L.jsxs(PT,{children:[L.jsx(VT,{}),L.jsxs(kv,{children:[L.jsx(Qs,{path:"/",element:L.jsx(FT,{})}),L.jsx(Qs,{path:"/login/*",element:L.jsx(Ik,{})})]}),L.jsx(MT,{})]})});tc.createRoot(document.getElementById("root")).render(L.jsx(Tk,{}));