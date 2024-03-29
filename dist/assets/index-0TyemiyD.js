function sw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ow(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qp={exports:{}},yl={},Yp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),lw=Symbol.for("react.portal"),aw=Symbol.for("react.fragment"),uw=Symbol.for("react.strict_mode"),cw=Symbol.for("react.profiler"),dw=Symbol.for("react.provider"),hw=Symbol.for("react.context"),fw=Symbol.for("react.forward_ref"),pw=Symbol.for("react.suspense"),mw=Symbol.for("react.memo"),gw=Symbol.for("react.lazy"),dh=Symbol.iterator;function _w(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,Zp={};function qr(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Jp}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function em(){}em.prototype=qr.prototype;function fc(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Jp}var pc=fc.prototype=new em;pc.constructor=fc;Xp(pc,qr.prototype);pc.isPureReactComponent=!0;var hh=Array.isArray,tm=Object.prototype.hasOwnProperty,mc={current:null},nm={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tm.call(e,r)&&!nm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vs,type:t,key:s,ref:o,props:i,_owner:mc.current}}function vw(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function yw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function ra(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yw(""+t.key):e.toString(36)}function io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case lw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ra(o,0):r,hh(i)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),io(i,e,n,"",function(u){return u})):i!=null&&(gc(i)&&(i=vw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ra(s,l);o+=io(s,e,n,a,i)}else if(a=_w(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ra(s,l++),o+=io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ms(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ww(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},so={transition:null},Ew={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:so,ReactCurrentOwner:mc};z.Children={map:Ms,forEach:function(t,e,n){Ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ms(t,function(){e++}),e},toArray:function(t){return Ms(t,function(e){return e})||[]},only:function(t){if(!gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=qr;z.Fragment=aw;z.Profiler=cw;z.PureComponent=fc;z.StrictMode=uw;z.Suspense=pw;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)tm.call(e,a)&&!nm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:vs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:hw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dw,_context:t},t.Consumer=t};z.createElement=rm;z.createFactory=function(t){var e=rm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:fw,render:t}};z.isValidElement=gc;z.lazy=function(t){return{$$typeof:gw,_payload:{_status:-1,_result:t},_init:ww}};z.memo=function(t,e){return{$$typeof:mw,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Pe.current.useCallback(t,e)};z.useContext=function(t){return Pe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Pe.current.useEffect(t,e)};z.useId=function(){return Pe.current.useId()};z.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Pe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};z.useRef=function(t){return Pe.current.useRef(t)};z.useState=function(t){return Pe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Pe.current.useTransition()};z.version="18.2.0";Yp.exports=z;var S=Yp.exports;const im=ow(S),Cw=sw({__proto__:null,default:im},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw=S,Iw=Symbol.for("react.element"),Tw=Symbol.for("react.fragment"),kw=Object.prototype.hasOwnProperty,Rw=Sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nw={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kw.call(e,r)&&!Nw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Iw,type:t,key:s,ref:o,props:i,_owner:Rw.current}}yl.Fragment=Tw;yl.jsx=sm;yl.jsxs=sm;Qp.exports=yl;var x=Qp.exports,Ka={},om={exports:{}},Ke={},lm={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var L=k.length;k.push(D);e:for(;0<L;){var re=L-1>>>1,ce=k[re];if(0<i(ce,D))k[re]=D,k[L]=ce,L=re;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],L=k.pop();if(L!==D){k[0]=L;e:for(var re=0,ce=k.length,Ds=ce>>>1;re<Ds;){var Tn=2*(re+1)-1,na=k[Tn],kn=Tn+1,Ls=k[kn];if(0>i(na,L))kn<ce&&0>i(Ls,na)?(k[re]=Ls,k[kn]=L,re=kn):(k[re]=na,k[Tn]=L,re=Tn);else if(kn<ce&&0>i(Ls,L))k[re]=Ls,k[kn]=L,re=kn;else break e}}return D}function i(k,D){var L=k.sortIndex-D.sortIndex;return L!==0?L:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(k){if(v=!1,m(k),!_)if(n(a)!==null)_=!0,ea(I);else{var D=n(u);D!==null&&ta(y,D.startTime-k)}}function I(k,D){_=!1,v&&(v=!1,p(P),P=-1),g=!0;var L=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||k&&!nt());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var ce=re(c.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var Ds=!0;else{var Tn=n(u);Tn!==null&&ta(y,Tn.startTime-D),Ds=!1}return Ds}finally{c=null,h=L,g=!1}}var R=!1,N=null,P=-1,K=5,F=-1;function nt(){return!(t.unstable_now()-F<K)}function oi(){if(N!==null){var k=t.unstable_now();F=k;var D=!0;try{D=N(!0,k)}finally{D?li():(R=!1,N=null)}}else R=!1}var li;if(typeof f=="function")li=function(){f(oi)};else if(typeof MessageChannel<"u"){var ch=new MessageChannel,iw=ch.port2;ch.port1.onmessage=oi,li=function(){iw.postMessage(null)}}else li=function(){C(oi,0)};function ea(k){N=k,R||(R=!0,li())}function ta(k,D){P=C(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ea(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return k()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=h;h=k;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(k,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,k={id:d++,callback:D,priorityLevel:k,startTime:L,expirationTime:ce,sortIndex:-1},L>re?(k.sortIndex=L,e(u,k),n(a)===null&&k===n(u)&&(v?(p(P),P=-1):v=!0,ta(y,L-re))):(k.sortIndex=ce,e(a,k),_||g||(_=!0,ea(I))),k},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(k){var D=h;return function(){var L=h;h=D;try{return k.apply(this,arguments)}finally{h=L}}}})(am);lm.exports=am;var Pw=lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=S,Ge=Pw;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,Bi={};function nr(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(Bi[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,Aw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function xw(t){return qa.call(mh,t)?!0:qa.call(ph,t)?!1:Aw.test(t)?mh[t]=!0:(ph[t]=!0,!1)}function Ow(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dw(t,e,n,r){if(e===null||typeof e>"u"||Ow(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_c,vc);we[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_c,vc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_c,vc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function yc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dw(e,n,i,r)&&(n=null),r||i===null?xw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bt=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Ya=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),Cc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),fm=Symbol.for("react.offscreen"),gh=Symbol.iterator;function ai(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,ia;function wi(t){if(ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ia=e&&e[1]||""}return`
`+ia+t}var sa=!1;function oa(t,e){if(!t||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wi(t):""}function Lw(t){switch(t.tag){case 5:return wi(t.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return t=oa(t.type,!1),t;case 11:return t=oa(t.type.render,!1),t;case 1:return t=oa(t.type,!0),t;default:return""}}function Xa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case Qa:return"Profiler";case wc:return"StrictMode";case Ya:return"Suspense";case Ja:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hm:return(t.displayName||"Context")+".Consumer";case dm:return(t._context.displayName||"Context")+".Provider";case Ec:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cc:return e=t.displayName||null,e!==null?e:Xa(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return Xa(t(e))}catch{}}return null}function Mw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(e);case 8:return e===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bw(t){var e=pm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fs(t){t._valueTracker||(t._valueTracker=bw(t))}function mm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Za(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gm(t,e){e=e.checked,e!=null&&yc(t,"checked",e,!1)}function eu(t,e){gm(t,e);var n=gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&tu(t,e.type,gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tu(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Ei(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gn(n)}}function _m(t,e){var n=gn(e.value),r=gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Us,ym=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fw=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){Fw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Uw=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(t,e){if(e){if(Uw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lu=null,kr=null,Rr=null;function Eh(t){if(t=Es(t)){if(typeof lu!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Il(e),lu(t.stateNode,t.type,e))}}function Cm(t){kr?Rr?Rr.push(t):Rr=[t]:kr=t}function Sm(){if(kr){var t=kr,e=Rr;if(Rr=kr=null,Eh(t),e)for(t=0;t<e.length;t++)Eh(e[t])}}function Im(t,e){return t(e)}function Tm(){}var la=!1;function km(t,e,n){if(la)return t(e,n);la=!0;try{return Im(t,e,n)}finally{la=!1,(kr!==null||Rr!==null)&&(Tm(),Sm())}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var au=!1;if(Lt)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){au=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{au=!1}function zw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ri=!1,So=null,Io=!1,uu=null,jw={onError:function(t){Ri=!0,So=t}};function Bw(t,e,n,r,i,s,o,l,a){Ri=!1,So=null,zw.apply(jw,arguments)}function Ww(t,e,n,r,i,s,o,l,a){if(Bw.apply(this,arguments),Ri){if(Ri){var u=So;Ri=!1,So=null}else throw Error(w(198));Io||(Io=!0,uu=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(rr(t)!==t)throw Error(w(188))}function $w(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ch(i),t;if(s===r)return Ch(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Nm(t){return t=$w(t),t!==null?Pm(t):null}function Pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pm(t);if(e!==null)return e;t=t.sibling}return null}var Am=Ge.unstable_scheduleCallback,Sh=Ge.unstable_cancelCallback,Vw=Ge.unstable_shouldYield,Hw=Ge.unstable_requestPaint,ie=Ge.unstable_now,Gw=Ge.unstable_getCurrentPriorityLevel,Ic=Ge.unstable_ImmediatePriority,xm=Ge.unstable_UserBlockingPriority,To=Ge.unstable_NormalPriority,Kw=Ge.unstable_LowPriority,Om=Ge.unstable_IdlePriority,wl=null,yt=null;function qw(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Jw,Qw=Math.log,Yw=Math.LN2;function Jw(t){return t>>>=0,t===0?32:31-(Qw(t)/Yw|0)|0}var zs=64,js=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ci(l):(s&=o,s!==0&&(r=Ci(s)))}else o=n&~i,o!==0?r=Ci(o):s!==0&&(r=Ci(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ct(e),i=1<<n,r|=t[n],e&=~i;return r}function Xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ct(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Xw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dm(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ct(e),t[e]=n}function e0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mm,kc,bm,Fm,Um,du=!1,Bs=[],rn=null,sn=null,on=null,Vi=new Map,Hi=new Map,qt=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Vi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(e.pointerId)}}function ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&kc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n0(t,e,n,r,i){switch(e){case"focusin":return rn=ci(rn,t,e,n,r,i),!0;case"dragenter":return sn=ci(sn,t,e,n,r,i),!0;case"mouseover":return on=ci(on,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vi.set(s,ci(Vi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hi.set(s,ci(Hi.get(s)||null,t,e,n,r,i)),!0}return!1}function zm(t){var e=xn(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rm(n),e!==null){t.blockedOn=e,Um(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return e=Es(n),e!==null&&kc(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){oo(t)&&n.delete(e)}function r0(){du=!1,rn!==null&&oo(rn)&&(rn=null),sn!==null&&oo(sn)&&(sn=null),on!==null&&oo(on)&&(on=null),Vi.forEach(Th),Hi.forEach(Th)}function di(t,e){t.blockedOn===e&&(t.blockedOn=null,du||(du=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,r0)))}function Gi(t){function e(i){return di(i,t)}if(0<Bs.length){di(Bs[0],t);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rn!==null&&di(rn,t),sn!==null&&di(sn,t),on!==null&&di(on,t),Vi.forEach(e),Hi.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&qt.shift()}var Nr=Bt.ReactCurrentBatchConfig,Ro=!0;function i0(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,Rc(t,e,n,r)}finally{W=i,Nr.transition=s}}function s0(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,Rc(t,e,n,r)}finally{W=i,Nr.transition=s}}function Rc(t,e,n,r){if(Ro){var i=hu(t,e,n,r);if(i===null)va(t,e,r,No,n),Ih(t,r);else if(n0(i,t,e,n,r))r.stopPropagation();else if(Ih(t,r),e&4&&-1<t0.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&Mm(s),s=hu(t,e,n,r),s===null&&va(t,e,r,No,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else va(t,e,r,null,n)}}var No=null;function hu(t,e,n,r){if(No=null,t=Sc(r),t=xn(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return No=t,null}function jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gw()){case Ic:return 1;case xm:return 4;case To:case Kw:return 16;case Om:return 536870912;default:return 16}default:return 16}}var en=null,Nc=null,lo=null;function Bm(){if(lo)return lo;var t,e=Nc,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lo=i.slice(t,1<r?1-r:void 0)}function ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function kh(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ws:kh,this.isPropagationStopped=kh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),e}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=qe(Qr),ws=ee({},Qr,{view:0,detail:0}),o0=qe(ws),ua,ca,hi,El=ee({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(ua=t.screenX-hi.screenX,ca=t.screenY-hi.screenY):ca=ua=0,hi=t),ua)},movementY:function(t){return"movementY"in t?t.movementY:ca}}),Rh=qe(El),l0=ee({},El,{dataTransfer:0}),a0=qe(l0),u0=ee({},ws,{relatedTarget:0}),da=qe(u0),c0=ee({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=qe(c0),h0=ee({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=qe(h0),p0=ee({},Qr,{data:0}),Nh=qe(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_0[t])?!!e[t]:!1}function Ac(){return v0}var y0=ee({},ws,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=qe(y0),E0=ee({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=qe(E0),C0=ee({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),S0=qe(C0),I0=ee({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=qe(I0),k0=ee({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=qe(k0),N0=[9,13,27,32],xc=Lt&&"CompositionEvent"in window,Ni=null;Lt&&"documentMode"in document&&(Ni=document.documentMode);var P0=Lt&&"TextEvent"in window&&!Ni,Wm=Lt&&(!xc||Ni&&8<Ni&&11>=Ni),Ah=" ",xh=!1;function $m(t,e){switch(t){case"keyup":return N0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function A0(t,e){switch(t){case"compositionend":return Vm(e);case"keypress":return e.which!==32?null:(xh=!0,Ah);case"textInput":return t=e.data,t===Ah&&xh?null:t;default:return null}}function x0(t,e){if(fr)return t==="compositionend"||!xc&&$m(t,e)?(t=Bm(),lo=Nc=en=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O0[t.type]:e==="textarea"}function Hm(t,e,n,r){Cm(r),e=Po(e,"onChange"),0<e.length&&(n=new Pc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Ki=null;function D0(t){ng(t,0)}function Cl(t){var e=gr(t);if(mm(e))return t}function L0(t,e){if(t==="change")return e}var Gm=!1;if(Lt){var ha;if(Lt){var fa="oninput"in document;if(!fa){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),fa=typeof Dh.oninput=="function"}ha=fa}else ha=!1;Gm=ha&&(!document.documentMode||9<document.documentMode)}function Lh(){Pi&&(Pi.detachEvent("onpropertychange",Km),Ki=Pi=null)}function Km(t){if(t.propertyName==="value"&&Cl(Ki)){var e=[];Hm(e,Ki,t,Sc(t)),km(D0,e)}}function M0(t,e,n){t==="focusin"?(Lh(),Pi=e,Ki=n,Pi.attachEvent("onpropertychange",Km)):t==="focusout"&&Lh()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Ki)}function F0(t,e){if(t==="click")return Cl(e)}function U0(t,e){if(t==="input"||t==="change")return Cl(e)}function z0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:z0;function qi(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,e){var n=Mh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qm(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function Oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j0(t){var e=Qm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(r!==null&&Oc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bh(n,s);var o=bh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B0=Lt&&"documentMode"in document&&11>=document.documentMode,pr=null,fu=null,Ai=null,pu=!1;function Fh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||pr==null||pr!==Co(r)||(r=pr,"selectionStart"in r&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&qi(Ai,r)||(Ai=r,r=Po(fu,"onSelect"),0<r.length&&(e=new Pc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function $s(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},pa={},Ym={};Lt&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Sl(t){if(pa[t])return pa[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ym)return pa[t]=e[n];return t}var Jm=Sl("animationend"),Xm=Sl("animationiteration"),Zm=Sl("animationstart"),eg=Sl("transitionend"),tg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(t,e){tg.set(t,e),nr(e,[t])}for(var ma=0;ma<Uh.length;ma++){var ga=Uh[ma],W0=ga.toLowerCase(),$0=ga[0].toUpperCase()+ga.slice(1);wn(W0,"on"+$0)}wn(Jm,"onAnimationEnd");wn(Xm,"onAnimationIteration");wn(Zm,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(eg,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function zh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ww(r,e,void 0,t),t.currentTarget=null}function ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}}}if(Io)throw t=uu,Io=!1,uu=null,t}function q(t,e){var n=e[yu];n===void 0&&(n=e[yu]=new Set);var r=t+"__bubble";n.has(r)||(rg(e,t,2,!1),n.add(r))}function _a(t,e,n){var r=0;e&&(r|=4),rg(n,t,r,e)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[Vs]){t[Vs]=!0,cm.forEach(function(n){n!=="selectionchange"&&(V0.has(n)||_a(n,!1,t),_a(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vs]||(e[Vs]=!0,_a("selectionchange",!1,e))}}function rg(t,e,n,r){switch(jm(e)){case 1:var i=i0;break;case 4:i=s0;break;default:i=Rc}n=i.bind(null,e,n,t),i=void 0,!au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function va(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}km(function(){var u=s,d=Sc(n),c=[];e:{var h=tg.get(t);if(h!==void 0){var g=Pc,_=t;switch(t){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":g=w0;break;case"focusin":_="focus",g=da;break;case"focusout":_="blur",g=da;break;case"beforeblur":case"afterblur":g=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=S0;break;case Jm:case Xm:case Zm:g=d0;break;case eg:g=T0;break;case"scroll":g=o0;break;case"wheel":g=R0;break;case"copy":case"cut":case"paste":g=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ph}var v=(e&4)!==0,C=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=$i(f,p),y!=null&&v.push(Yi(f,y,m)))),C)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ou&&(_=n.relatedTarget||n.fromElement)&&(xn(_)||_[Mt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?xn(_):null,_!==null&&(C=rr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Rh,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ph,y="onPointerLeave",p="onPointerEnter",f="pointer"),C=g==null?h:gr(g),m=_==null?h:gr(_),h=new v(y,f+"leave",g,n,d),h.target=C,h.relatedTarget=m,y=null,xn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=C,y=v),C=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=ur(m))f++;for(m=0,y=p;y;y=ur(y))m++;for(;0<f-m;)v=ur(v),f--;for(;0<m-f;)p=ur(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ur(v),p=ur(p)}v=null}else v=null;g!==null&&jh(c,h,g,v,!1),_!==null&&C!==null&&jh(c,C,_,v,!0)}}e:{if(h=u?gr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=L0;else if(Oh(h))if(Gm)I=U0;else{I=b0;var R=M0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=F0);if(I&&(I=I(t,u))){Hm(c,I,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&tu(h,"number",h.value)}switch(R=u?gr(u):window,t){case"focusin":(Oh(R)||R.contentEditable==="true")&&(pr=R,fu=u,Ai=null);break;case"focusout":Ai=fu=pr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Fh(c,n,d);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":Fh(c,n,d)}var N;if(xc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else fr?$m(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Wm&&n.locale!=="ko"&&(fr||P!=="onCompositionStart"?P==="onCompositionEnd"&&fr&&(N=Bm()):(en=d,Nc="value"in en?en.value:en.textContent,fr=!0)),R=Po(u,P),0<R.length&&(P=new Nh(P,t,null,n,d),c.push({event:P,listeners:R}),N?P.data=N:(N=Vm(n),N!==null&&(P.data=N)))),(N=P0?A0(t,n):x0(t,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(d=new Nh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}ng(c,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Po(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$i(t,n),s!=null&&r.unshift(Yi(t,s,i)),s=$i(t,e),s!=null&&r.push(Yi(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=$i(n,s),a!=null&&o.unshift(Yi(n,a,l))):i||(a=$i(n,s),a!=null&&o.push(Yi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(G0,"")}function Hs(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(w(425))}function Ao(){}var mu=null,gu=null;function _u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(Q0)}:vu;function Q0(t){setTimeout(function(){throw t})}function ya(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Yr,Ji="__reactProps$"+Yr,Mt="__reactContainer$"+Yr,yu="__reactEvents$"+Yr,Y0="__reactListeners$"+Yr,J0="__reactHandles$"+Yr;function xn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[vt])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[vt]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Il(t){return t[Ji]||null}var wu=[],_r=-1;function En(t){return{current:t}}function Y(t){0>_r||(t.current=wu[_r],wu[_r]=null,_r--)}function G(t,e){_r++,wu[_r]=t.current,t.current=e}var _n={},Te=En(_n),be=En(!1),Wn=_n;function Ur(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function xo(){Y(be),Y(Te)}function Vh(t,e,n){if(Te.current!==_n)throw Error(w(168));G(Te,e),G(be,n)}function ig(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Mw(t)||"Unknown",i));return ee({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Wn=Te.current,G(Te,t),G(be,be.current),!0}function Hh(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=ig(t,e,Wn),r.__reactInternalMemoizedMergedChildContext=t,Y(be),Y(Te),G(Te,t)):Y(be),G(be,n)}var kt=null,Tl=!1,wa=!1;function sg(t){kt===null?kt=[t]:kt.push(t)}function X0(t){Tl=!0,sg(t)}function Cn(){if(!wa&&kt!==null){wa=!0;var t=0,e=W;try{var n=kt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Tl=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),Am(Ic,Cn),i}finally{W=e,wa=!1}}return null}var vr=[],yr=0,Do=null,Lo=0,Qe=[],Ye=0,$n=null,Rt=1,Nt="";function Rn(t,e){vr[yr++]=Lo,vr[yr++]=Do,Do=t,Lo=e}function og(t,e,n){Qe[Ye++]=Rt,Qe[Ye++]=Nt,Qe[Ye++]=$n,$n=t;var r=Rt;t=Nt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var s=32-ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-ct(e)+i|n<<i|r,Nt=s+t}else Rt=1<<s|n<<i|r,Nt=t}function Dc(t){t.return!==null&&(Rn(t,1),og(t,1,0))}function Lc(t){for(;t===Do;)Do=vr[--yr],vr[yr]=null,Lo=vr[--yr],vr[yr]=null;for(;t===$n;)$n=Qe[--Ye],Qe[Ye]=null,Nt=Qe[--Ye],Qe[Ye]=null,Rt=Qe[--Ye],Qe[Ye]=null}var Ve=null,$e=null,J=!1,ot=null;function lg(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,$e=ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$n!==null?{id:Rt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,$e=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(J){var e=$e;if(e){var n=e;if(!Gh(t,e)){if(Eu(t))throw Error(w(418));e=ln(n.nextSibling);var r=Ve;e&&Gh(t,e)?lg(r,n):(t.flags=t.flags&-4097|2,J=!1,Ve=t)}}else{if(Eu(t))throw Error(w(418));t.flags=t.flags&-4097|2,J=!1,Ve=t}}}function Kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Gs(t){if(t!==Ve)return!1;if(!J)return Kh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_u(t.type,t.memoizedProps)),e&&(e=$e)){if(Eu(t))throw ag(),Error(w(418));for(;e;)lg(t,e),e=ln(e.nextSibling)}if(Kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=ln(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ve?ln(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=$e;t;)t=ln(t.nextSibling)}function zr(){$e=Ve=null,J=!1}function Mc(t){ot===null?ot=[t]:ot.push(t)}var Z0=Bt.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Mo=En(null),bo=null,wr=null,bc=null;function Fc(){bc=wr=bo=null}function Uc(t){var e=Mo.current;Y(Mo),t._currentValue=e}function Su(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){bo=t,bc=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(bo===null)throw Error(w(308));wr=t,bo.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var On=null;function zc(t){On===null?On=[t]:On.push(t)}function ug(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zc(e)):(n.next=i.next,i.next=n),e.interleaved=n,bt(t,r)}function bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kt=!1;function jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function an(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bt(t,n)}return i=r.interleaved,i===null?(e.next=e,zc(r)):(e.next=i.next,i.next=e),r.interleaved=e,bt(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tc(t,n)}}function qh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var i=t.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ee({},c,h);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hn|=o,t.lanes=o,t.memoizedState=c}}function Qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var dg=new um.Component().refs;function Iu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=cn(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(dt(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=cn(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(dt(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=cn(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=an(t,i,r),e!==null&&(dt(e,t,r,n),uo(e,t,r))}};function Yh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function hg(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=Fe(e)?Wn:Te.current,r=e.contextTypes,s=(r=r!=null)?Ur(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Tu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dg,jc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=Fe(e)?Wn:Te.current,i.context=Ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===dg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ks(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function fg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=dn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=Ra(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var I=m.type;return I===hr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Gt&&Xh(I)===f.type)?(y=i(f,m.props),y.ref=fi(p,f,m),y.return=p,y):(y=go(m.type,m.key,m.props,null,p.mode,y),y.ref=fi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Na(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,I){return f===null||f.tag!==7?(f=zn(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ra(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bs:return m=go(f.type,f.key,f.props,null,p.mode,m),m.ref=fi(p,null,f),m.return=p,m;case dr:return f=Na(f,p.mode,m),f.return=p,f;case Gt:var y=f._init;return c(p,y(f._payload),m)}if(Ei(f)||ai(f))return f=zn(f,p.mode,m,null),f.return=p,f;Ks(p,f)}return null}function h(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bs:return m.key===I?a(p,f,m,y):null;case dr:return m.key===I?u(p,f,m,y):null;case Gt:return I=m._init,h(p,f,I(m._payload),y)}if(Ei(m)||ai(m))return I!==null?null:d(p,f,m,y,null);Ks(p,m)}return null}function g(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bs:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,I);case dr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case Gt:var R=y._init;return g(p,f,m,R(y._payload),I)}if(Ei(y)||ai(y))return p=p.get(m)||null,d(f,p,y,I,null);Ks(f,y)}return null}function _(p,f,m,y){for(var I=null,R=null,N=f,P=f=0,K=null;N!==null&&P<m.length;P++){N.index>P?(K=N,N=null):K=N.sibling;var F=h(p,N,m[P],y);if(F===null){N===null&&(N=K);break}t&&N&&F.alternate===null&&e(p,N),f=s(F,f,P),R===null?I=F:R.sibling=F,R=F,N=K}if(P===m.length)return n(p,N),J&&Rn(p,P),I;if(N===null){for(;P<m.length;P++)N=c(p,m[P],y),N!==null&&(f=s(N,f,P),R===null?I=N:R.sibling=N,R=N);return J&&Rn(p,P),I}for(N=r(p,N);P<m.length;P++)K=g(N,p,P,m[P],y),K!==null&&(t&&K.alternate!==null&&N.delete(K.key===null?P:K.key),f=s(K,f,P),R===null?I=K:R.sibling=K,R=K);return t&&N.forEach(function(nt){return e(p,nt)}),J&&Rn(p,P),I}function v(p,f,m,y){var I=ai(m);if(typeof I!="function")throw Error(w(150));if(m=I.call(m),m==null)throw Error(w(151));for(var R=I=null,N=f,P=f=0,K=null,F=m.next();N!==null&&!F.done;P++,F=m.next()){N.index>P?(K=N,N=null):K=N.sibling;var nt=h(p,N,F.value,y);if(nt===null){N===null&&(N=K);break}t&&N&&nt.alternate===null&&e(p,N),f=s(nt,f,P),R===null?I=nt:R.sibling=nt,R=nt,N=K}if(F.done)return n(p,N),J&&Rn(p,P),I;if(N===null){for(;!F.done;P++,F=m.next())F=c(p,F.value,y),F!==null&&(f=s(F,f,P),R===null?I=F:R.sibling=F,R=F);return J&&Rn(p,P),I}for(N=r(p,N);!F.done;P++,F=m.next())F=g(N,p,P,F.value,y),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?P:F.key),f=s(F,f,P),R===null?I=F:R.sibling=F,R=F);return t&&N.forEach(function(oi){return e(p,oi)}),J&&Rn(p,P),I}function C(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bs:e:{for(var I=m.key,R=f;R!==null;){if(R.key===I){if(I=m.type,I===hr){if(R.tag===7){n(p,R.sibling),f=i(R,m.props.children),f.return=p,p=f;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Gt&&Xh(I)===R.type){n(p,R.sibling),f=i(R,m.props),f.ref=fi(p,R,m),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===hr?(f=zn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=go(m.type,m.key,m.props,null,p.mode,y),y.ref=fi(p,f,m),y.return=p,p=y)}return o(p);case dr:e:{for(R=m.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Na(m,p.mode,y),f.return=p,p=f}return o(p);case Gt:return R=m._init,C(p,f,R(m._payload),y)}if(Ei(m))return _(p,f,m,y);if(ai(m))return v(p,f,m,y);Ks(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ra(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return C}var jr=fg(!0),pg=fg(!1),Cs={},wt=En(Cs),Xi=En(Cs),Zi=En(Cs);function Dn(t){if(t===Cs)throw Error(w(174));return t}function Bc(t,e){switch(G(Zi,e),G(Xi,t),G(wt,Cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ru(e,t)}Y(wt),G(wt,e)}function Br(){Y(wt),Y(Xi),Y(Zi)}function mg(t){Dn(Zi.current);var e=Dn(wt.current),n=ru(e,t.type);e!==n&&(G(Xi,t),G(wt,n))}function Wc(t){Xi.current===t&&(Y(wt),Y(Xi))}var X=En(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ea=[];function $c(){for(var t=0;t<Ea.length;t++)Ea[t]._workInProgressVersionPrimary=null;Ea.length=0}var co=Bt.ReactCurrentDispatcher,Ca=Bt.ReactCurrentBatchConfig,Vn=0,Z=null,le=null,he=null,zo=!1,xi=!1,es=0,eE=0;function Ee(){throw Error(w(321))}function Vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function Hc(t,e,n,r,i,s){if(Vn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?iE:sE,t=n(r,i),xi){s=0;do{if(xi=!1,es=0,25<=s)throw Error(w(301));s+=1,he=le=null,e.updateQueue=null,co.current=oE,t=n(r,i)}while(xi)}if(co.current=jo,e=le!==null&&le.next!==null,Vn=0,he=le=Z=null,zo=!1,e)throw Error(w(300));return t}function Gc(){var t=es!==0;return es=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function tt(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,le=t;else{if(t===null)throw Error(w(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function ts(t,e){return typeof e=="function"?e(t):e}function Sa(t){var e=tt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Vn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,Hn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ft(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Hn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ia(t){var e=tt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gg(){}function _g(t,e){var n=Z,r=tt(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Kc(wg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,ns(9,yg.bind(null,n,r,i,e),void 0,null),me===null)throw Error(w(349));Vn&30||vg(n,e,i)}return i}function vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yg(t,e,n,r){e.value=n,e.getSnapshot=r,Eg(e)&&Cg(t)}function wg(t,e,n){return n(function(){Eg(e)&&Cg(t)})}function Eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Cg(t){var e=bt(t,1);e!==null&&dt(e,t,1,-1)}function Zh(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=rE.bind(null,Z,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sg(){return tt().memoizedState}function ho(t,e,n,r){var i=_t();Z.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function Rl(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Vc(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}Z.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function ef(t,e){return ho(8390656,8,t,e)}function Kc(t,e){return Rl(2048,8,t,e)}function Ig(t,e){return Rl(4,2,t,e)}function Tg(t,e){return Rl(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rg(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4,4,kg.bind(null,e,t),n)}function qc(){}function Ng(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pg(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ag(t,e,n){return Vn&21?(ft(n,e)||(n=Dm(),Z.lanes|=n,Hn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function tE(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Ca.transition;Ca.transition={};try{t(!1),e()}finally{W=n,Ca.transition=r}}function xg(){return tt().memoizedState}function nE(t,e,n){var r=cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))Dg(e,n);else if(n=ug(t,e,n,r),n!==null){var i=Ne();dt(n,t,r,i),Lg(n,e,r)}}function rE(t,e,n){var r=cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))Dg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var a=e.interleaved;a===null?(i.next=i,zc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ug(t,e,i,r),n!==null&&(i=Ne(),dt(n,t,r,i),Lg(n,e,r))}}function Og(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Dg(t,e){xi=zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tc(t,n)}}var jo={readContext:et,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},iE={readContext:et,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:ef,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ho(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return ho(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nE.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:qc,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=tE.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=_t();if(J){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),me===null)throw Error(w(349));Vn&30||vg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ef(wg.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,yg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=me.identifierPrefix;if(J){var n=Nt,r=Rt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sE={readContext:et,useCallback:Ng,useContext:et,useEffect:Kc,useImperativeHandle:Rg,useInsertionEffect:Ig,useLayoutEffect:Tg,useMemo:Pg,useReducer:Sa,useRef:Sg,useState:function(){return Sa(ts)},useDebugValue:qc,useDeferredValue:function(t){var e=tt();return Ag(e,le.memoizedState,t)},useTransition:function(){var t=Sa(ts)[0],e=tt().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:_g,useId:xg,unstable_isNewReconciler:!1},oE={readContext:et,useCallback:Ng,useContext:et,useEffect:Kc,useImperativeHandle:Rg,useInsertionEffect:Ig,useLayoutEffect:Tg,useMemo:Pg,useReducer:Ia,useRef:Sg,useState:function(){return Ia(ts)},useDebugValue:qc,useDeferredValue:function(t){var e=tt();return le===null?e.memoizedState=t:Ag(e,le.memoizedState,t)},useTransition:function(){var t=Ia(ts)[0],e=tt().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:_g,useId:xg,unstable_isNewReconciler:!1};function Wr(t,e){try{var n="",r=e;do n+=Lw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ta(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function Mg(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,bu=r),ku(t,e)},n}function bg(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EE.bind(null,t,e,n),e.then(t,t))}function nf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,an(n,e,1))),n.lanes|=1),t)}var aE=Bt.ReactCurrentOwner,De=!1;function Re(t,e,n,r){e.child=t===null?pg(e,null,n,r):jr(e,t.child,n,r)}function sf(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Hc(t,e,n,r,s,i),n=Gc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&n&&Dc(e),e.flags|=1,Re(t,e,r,i),e.child)}function of(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fg(t,e,s,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(o,r)&&t.ref===e.ref)return Ft(t,e,i)}return e.flags|=1,t=dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Ft(t,e,i)}return Ru(t,e,n,r,i)}function Ug(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Cr,We),We|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Cr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Cr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Cr,We),We|=r;return Re(t,e,i,n),e.child}function zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,r,i){var s=Fe(n)?Wn:Te.current;return s=Ur(e,s),Pr(e,i),n=Hc(t,e,n,r,s,i),r=Gc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&r&&Dc(e),e.flags|=1,Re(t,e,n,i),e.child)}function lf(t,e,n,r,i){if(Fe(n)){var s=!0;Oo(e)}else s=!1;if(Pr(e,i),e.stateNode===null)fo(t,e),hg(e,n,r),Tu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=Fe(n)?Wn:Te.current,u=Ur(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Jh(e,o,r,u),Kt=!1;var h=e.memoizedState;o.state=h,Fo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||Kt?(typeof d=="function"&&(Iu(e,n,d,r),a=e.memoizedState),(l=Kt||Yh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:it(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=et(a):(a=Fe(n)?Wn:Te.current,a=Ur(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Jh(e,o,r,a),Kt=!1,h=e.memoizedState,o.state=h,Fo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||be.current||Kt?(typeof g=="function"&&(Iu(e,n,g,r),_=e.memoizedState),(u=Kt||Yh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Nu(t,e,n,r,s,i)}function Nu(t,e,n,r,i,s){zg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hh(e,n,!1),Ft(t,e,s);r=e.stateNode,aE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Hh(e,n,!0),e.child}function jg(t){var e=t.stateNode;e.pendingContext?Vh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vh(t,e.context,!1),Bc(t,e.containerInfo)}function af(t,e,n,r,i){return zr(),Mc(i),e.flags|=256,Re(t,e,n,r),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return Cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Al(o,r,0,null),t=zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=Pu,t):Qc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=dn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dn(l,s):(s=zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,r}return s=t.child,t=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qc(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qs(t,e,n,r){return r!==null&&Mc(r),jr(e,t.child,null,n),t=Qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ta(Error(w(422))),qs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Al({mode:"visible",children:r.children},i,0,null),s=zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=Pu,s);if(!(e.mode&1))return qs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Ta(s,r,void 0),qs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(t,i),dt(r,t,i,-1))}return td(),r=Ta(Error(w(421))),qs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=ln(i.nextSibling),Ve=e,J=!0,ot=null,t!==null&&(Qe[Ye++]=Rt,Qe[Ye++]=Nt,Qe[Ye++]=$n,Rt=t.id,Nt=t.overflow,$n=e),e=Qc(e,r.children),e.flags|=4096,e)}function uf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Su(t.return,e,n)}function ka(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uf(t,n,e);else if(t.tag===19)uf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ka(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ka(e,!0,n,null,s);break;case"together":ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cE(t,e,n){switch(e.tag){case 3:jg(e),zr();break;case 5:mg(e);break;case 1:Fe(e.type)&&Oo(e);break;case 4:Bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Bg(t,e,n):(G(X,X.current&1),t=Ft(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,Ug(t,e,n)}return Ft(t,e,n)}var $g,xu,Vg,Hg;$g=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};Vg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dn(wt.current);var s=null;switch(n){case"input":i=Za(t,i),r=Za(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=nu(t,i),r=nu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ao)}iu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hg=function(t,e,n,r){n!==r&&(e.flags|=4)};function pi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dE(t,e,n){var r=e.pendingProps;switch(Lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Fe(e.type)&&xo(),Ce(e),null;case 3:return r=e.stateNode,Br(),Y(be),Y(Te),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(zu(ot),ot=null))),xu(t,e),Ce(e),null;case 5:Wc(e);var i=Dn(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)Vg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ce(e),null}if(t=Dn(wt.current),Gs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[Ji]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":_h(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":yh(r,s),q("invalid",r)}iu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",""+l]):Bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Fs(r),vh(r,s,!0);break;case"textarea":Fs(r),wh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[Ji]=r,$g(t,e,!1,!1),e.stateNode=t;e:{switch(o=su(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":_h(t,r),i=Za(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),q("invalid",t);break;case"textarea":yh(t,r),i=nu(t,r),q("invalid",t);break;default:i=r}iu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Em(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ym(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&yc(t,s,a,o))}switch(n){case"input":Fs(t),vh(t,r,!1);break;case"textarea":Fs(t),wh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Hg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Dn(Zi.current),Dn(wt.current),Gs(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:Hs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Ce(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&$e!==null&&e.mode&1&&!(e.flags&128))ag(),zr(),e.flags|=98560,s=!1;else if(s=Gs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[vt]=e}else zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else ot!==null&&(zu(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):td())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return Br(),xu(t,e),t===null&&Qi(e.stateNode.containerInfo),Ce(e),null;case 10:return Uc(e.type._context),Ce(e),null;case 17:return Fe(e.type)&&xo(),Ce(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pi(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>$r&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ce(e),null}else 2*ie()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function hE(t,e){switch(Lc(e),e.tag){case 1:return Fe(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),Y(be),Y(Te),$c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return Br(),null;case 10:return Uc(e.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var Qs=!1,Se=!1,fE=typeof WeakSet=="function"?WeakSet:Set,T=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Ou(t,e,n){try{n()}catch(r){te(t,e,r)}}var cf=!1;function pE(t,e){if(mu=Ro,t=Qm(),Oc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:t,selectionRange:n},Ro=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,C=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:it(e.type,v),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return _=cf,cf=!1,_}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ou(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gg(t){var e=t.alternate;e!==null&&(t.alternate=null,Gg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[Ji],delete e[yu],delete e[Y0],delete e[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kg(t){return t.tag===5||t.tag===3||t.tag===4}function df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ao));else if(r!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}function Mu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mu(t,e,n),t=t.sibling;t!==null;)Mu(t,e,n),t=t.sibling}var _e=null,st=!1;function Vt(t,e,n){for(n=n.child;n!==null;)qg(t,e,n),n=n.sibling}function qg(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Se||Er(n,e);case 6:var r=_e,i=st;_e=null,Vt(t,e,n),_e=r,st=i,_e!==null&&(st?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(st?(t=_e,n=n.stateNode,t.nodeType===8?ya(t.parentNode,n):t.nodeType===1&&ya(t,n),Gi(t)):ya(_e,n.stateNode));break;case 4:r=_e,i=st,_e=n.stateNode.containerInfo,st=!0,Vt(t,e,n),_e=r,st=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ou(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!Se&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Vt(t,e,n),Se=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function hf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fE),e.forEach(function(r){var i=SE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,st=!1;break e;case 3:_e=l.stateNode.containerInfo,st=!0;break e;case 4:_e=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(_e===null)throw Error(w(160));qg(s,o,i),_e=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qg(e,t),e=e.sibling}function Qg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),gt(t),r&4){try{Oi(3,t,t.return),Nl(3,t)}catch(v){te(t,t.return,v)}try{Oi(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:rt(e,t),gt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(rt(e,t),gt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gm(i,s),su(l,o);var u=su(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Em(i,c):d==="dangerouslySetInnerHTML"?ym(i,c):d==="children"?Wi(i,c):yc(i,d,c,u)}switch(l){case"input":eu(i,s);break;case"textarea":_m(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Tr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ji]=s}catch(v){te(t,t.return,v)}}break;case 6:if(rt(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(rt(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:rt(e,t),gt(t);break;case 13:rt(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xc=ie())),r&4&&hf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||d,rt(e,t),Se=u):rt(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(c=T=d;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:Oi(4,h,h.return);break;case 1:Er(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){pf(c);continue}}g!==null?(g.return=h,T=g):pf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=wm("display",o))}catch(v){te(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){te(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rt(e,t),gt(t),r&4&&hf(t);break;case 21:break;default:rt(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=df(t);Mu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=df(t);Lu(t,l,o);break;default:throw Error(w(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mE(t,e,n){T=t,Yg(t)}function Yg(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=Qs;var u=Se;if(Qs=o,(Se=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?mf(i):a!==null?(a.return=o,T=a):mf(i);for(;s!==null;)T=s,Yg(s),s=s.sibling;T=i,Qs=l,Se=u}ff(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):ff(t)}}function ff(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Gi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Se||e.flags&512&&Du(e)}catch(h){te(e,e.return,h)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function pf(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function mf(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Du(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Du(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var gE=Math.ceil,Bo=Bt.ReactCurrentDispatcher,Yc=Bt.ReactCurrentOwner,Xe=Bt.ReactCurrentBatchConfig,j=0,me=null,se=null,ye=0,We=0,Cr=En(0),ue=0,rs=null,Hn=0,Pl=0,Jc=0,Di=null,Oe=null,Xc=0,$r=1/0,Tt=null,Wo=!1,bu=null,un=null,Ys=!1,tn=null,$o=0,Li=0,Fu=null,po=-1,mo=0;function Ne(){return j&6?ie():po!==-1?po:po=ie()}function cn(t){return t.mode&1?j&2&&ye!==0?ye&-ye:Z0.transition!==null?(mo===0&&(mo=Dm()),mo):(t=W,t!==0||(t=window.event,t=t===void 0?16:jm(t.type)),t):1}function dt(t,e,n,r){if(50<Li)throw Li=0,Fu=null,Error(w(185));ys(t,n,r),(!(j&2)||t!==me)&&(t===me&&(!(j&2)&&(Pl|=n),ue===4&&Qt(t,ye)),Ue(t,r),n===1&&j===0&&!(e.mode&1)&&($r=ie()+500,Tl&&Cn()))}function Ue(t,e){var n=t.callbackNode;Zw(t,e);var r=ko(t,t===me?ye:0);if(r===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?X0(gf.bind(null,t)):sg(gf.bind(null,t)),q0(function(){!(j&6)&&Cn()}),n=null;else{switch(Lm(r)){case 1:n=Ic;break;case 4:n=xm;break;case 16:n=To;break;case 536870912:n=Om;break;default:n=To}n=i_(n,Jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jg(t,e){if(po=-1,mo=0,j&6)throw Error(w(327));var n=t.callbackNode;if(Ar()&&t.callbackNode!==n)return null;var r=ko(t,t===me?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vo(t,r);else{e=r;var i=j;j|=2;var s=Zg();(me!==t||ye!==e)&&(Tt=null,$r=ie()+500,Un(t,e));do try{yE();break}catch(l){Xg(t,l)}while(!0);Fc(),Bo.current=s,j=i,se!==null?e=0:(me=null,ye=0,e=ue)}if(e!==0){if(e===2&&(i=cu(t),i!==0&&(r=i,e=Uu(t,i))),e===1)throw n=rs,Un(t,0),Qt(t,r),Ue(t,ie()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!_E(i)&&(e=Vo(t,r),e===2&&(s=cu(t),s!==0&&(r=s,e=Uu(t,s))),e===1))throw n=rs,Un(t,0),Qt(t,r),Ue(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Nn(t,Oe,Tt);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=Xc+500-ie(),10<e)){if(ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vu(Nn.bind(null,t,Oe,Tt),e);break}Nn(t,Oe,Tt);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gE(r/1960))-r,10<r){t.timeoutHandle=vu(Nn.bind(null,t,Oe,Tt),r);break}Nn(t,Oe,Tt);break;case 5:Nn(t,Oe,Tt);break;default:throw Error(w(329))}}}return Ue(t,ie()),t.callbackNode===n?Jg.bind(null,t):null}function Uu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(Un(t,e).flags|=256),t=Vo(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&zu(e)),t}function zu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function _E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Jc,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ct(e),r=1<<n;t[n]=-1,e&=~r}}function gf(t){if(j&6)throw Error(w(327));Ar();var e=ko(t,0);if(!(e&1))return Ue(t,ie()),null;var n=Vo(t,e);if(t.tag!==0&&n===2){var r=cu(t);r!==0&&(e=r,n=Uu(t,r))}if(n===1)throw n=rs,Un(t,0),Qt(t,e),Ue(t,ie()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nn(t,Oe,Tt),Ue(t,ie()),null}function Zc(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&($r=ie()+500,Tl&&Cn())}}function Gn(t){tn!==null&&tn.tag===0&&!(j&6)&&Ar();var e=j;j|=1;var n=Xe.transition,r=W;try{if(Xe.transition=null,W=1,t)return t()}finally{W=r,Xe.transition=n,j=e,!(j&6)&&Cn()}}function ed(){We=Cr.current,Y(Cr)}function Un(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Br(),Y(be),Y(Te),$c();break;case 5:Wc(r);break;case 4:Br();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Uc(r.type._context);break;case 22:case 23:ed()}n=n.return}if(me=t,se=t=dn(t.current,null),ye=We=e,ue=0,rs=null,Jc=Pl=Hn=0,Oe=Di=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function Xg(t,e){do{var n=se;try{if(Fc(),co.current=jo,zo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(Vn=0,he=le=Z=null,xi=!1,es=0,Yc.current=null,n===null||n.return===null){ue=1,rs=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=nf(o);if(g!==null){g.flags&=-257,rf(g,o,l,s,e),g.mode&1&&tf(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){tf(s,u,e),td();break e}a=Error(w(426))}}else if(J&&l.mode&1){var C=nf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),rf(C,o,l,s,e),Mc(Wr(a,l));break e}}s=a=Wr(a,l),ue!==4&&(ue=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Mg(s,a,e);qh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(un===null||!un.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=bg(s,l,e);qh(s,y);break e}}s=s.return}while(s!==null)}t_(n)}catch(I){e=I,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Zg(){var t=Bo.current;return Bo.current=jo,t===null?jo:t}function td(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(Hn&268435455)&&!(Pl&268435455)||Qt(me,ye)}function Vo(t,e){var n=j;j|=2;var r=Zg();(me!==t||ye!==e)&&(Tt=null,Un(t,e));do try{vE();break}catch(i){Xg(t,i)}while(!0);if(Fc(),j=n,Bo.current=r,se!==null)throw Error(w(261));return me=null,ye=0,ue}function vE(){for(;se!==null;)e_(se)}function yE(){for(;se!==null&&!Vw();)e_(se)}function e_(t){var e=r_(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?t_(t):se=e,Yc.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hE(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=dE(n,e,We),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function Nn(t,e,n){var r=W,i=Xe.transition;try{Xe.transition=null,W=1,wE(t,e,n,r)}finally{Xe.transition=i,W=r}return null}function wE(t,e,n,r){do Ar();while(tn!==null);if(j&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e0(t,s),t===me&&(se=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ys||(Ys=!0,i_(To,function(){return Ar(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=W;W=1;var l=j;j|=4,Yc.current=null,pE(t,n),Qg(n,t),j0(gu),Ro=!!mu,gu=mu=null,t.current=n,mE(n),Hw(),j=l,W=o,Xe.transition=s}else t.current=n;if(Ys&&(Ys=!1,tn=t,$o=i),s=t.pendingLanes,s===0&&(un=null),qw(n.stateNode),Ue(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=bu,bu=null,t;return $o&1&&t.tag!==0&&Ar(),s=t.pendingLanes,s&1?t===Fu?Li++:(Li=0,Fu=t):Li=0,Cn(),null}function Ar(){if(tn!==null){var t=Lm($o),e=Xe.transition,n=W;try{if(Xe.transition=null,W=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,$o=0,j&6)throw Error(w(331));var i=j;for(j|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Oi(8,d,s)}var c=d.child;if(c!==null)c.return=d,T=c;else for(;T!==null;){d=T;var h=d.sibling,g=d.return;if(Gg(d),d===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(I){te(l,l.return,I)}if(l===o){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if(j=i,Cn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{W=n,Xe.transition=e}}return!1}function _f(t,e,n){e=Wr(n,e),e=Mg(t,e,1),t=an(t,e,1),e=Ne(),t!==null&&(ys(t,1,e),Ue(t,e))}function te(t,e,n){if(t.tag===3)_f(t,t,n);else for(;e!==null;){if(e.tag===3){_f(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){t=Wr(n,t),t=bg(e,t,1),e=an(e,t,1),t=Ne(),e!==null&&(ys(e,1,t),Ue(e,t));break}}e=e.return}}function EE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>ie()-Xc?Un(t,0):Jc|=n),Ue(t,e)}function n_(t,e){e===0&&(t.mode&1?(e=js,js<<=1,!(js&130023424)&&(js=4194304)):e=1);var n=Ne();t=bt(t,e),t!==null&&(ys(t,e,n),Ue(t,n))}function CE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function SE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),n_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,cE(t,e,n);De=!!(t.flags&131072)}else De=!1,J&&e.flags&1048576&&og(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fo(t,e),t=e.pendingProps;var i=Ur(e,Te.current);Pr(e,n),i=Hc(null,e,r,t,i,n);var s=Gc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,Oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,Tu(e,r,t,n),e=Nu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Dc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TE(r),t=it(r,t),i){case 0:e=Ru(null,e,r,t,n);break e;case 1:e=lf(null,e,r,t,n);break e;case 11:e=sf(null,e,r,t,n);break e;case 14:e=of(null,e,r,it(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Ru(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),lf(t,e,r,i,n);case 3:e:{if(jg(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cg(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(w(423)),e),e=af(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(w(424)),e),e=af(t,e,r,n,i);break e}else for($e=ln(e.stateNode.containerInfo.firstChild),Ve=e,J=!0,ot=null,n=pg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){e=Ft(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return mg(e),t===null&&Cu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_u(r,i)?o=null:s!==null&&_u(r,s)&&(e.flags|=32),zg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Cu(e),null;case 13:return Bg(t,e,n);case 4:return Bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),sf(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Mo,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!be.current){e=Ft(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Su(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Su(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=et(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),of(t,e,r,i,n);case 15:return Fg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),fo(t,e),e.tag=1,Fe(r)?(t=!0,Oo(e)):t=!1,Pr(e,n),hg(e,r,i),Tu(e,r,i,n),Nu(null,e,r,!0,t,n);case 19:return Wg(t,e,n);case 22:return Ug(t,e,n)}throw Error(w(156,e.tag))};function i_(t,e){return Am(t,e)}function IE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new IE(t,e,n,r)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TE(t){if(typeof t=="function")return nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ec)return 11;if(t===Cc)return 14}return 2}function dn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return zn(n.children,i,s,e);case wc:o=8,i|=8;break;case Qa:return t=Je(12,n,e,i|2),t.elementType=Qa,t.lanes=s,t;case Ya:return t=Je(13,n,e,i),t.elementType=Ya,t.lanes=s,t;case Ja:return t=Je(19,n,e,i),t.elementType=Ja,t.lanes=s,t;case fm:return Al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dm:o=10;break e;case hm:o=9;break e;case Ec:o=11;break e;case Cc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zn(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function Al(t,e,n,r){return t=Je(22,t,r,e),t.elementType=fm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ra(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Na(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rd(t,e,n,r,i,s,o,l,a){return t=new kE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(s),t}function RE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return _n;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Fe(n))return ig(t,n,e)}return e}function o_(t,e,n,r,i,s,o,l,a){return t=rd(n,r,!0,t,i,s,o,l,a),t.context=s_(null),n=t.current,r=Ne(),i=cn(n),s=Ot(r,i),s.callback=e??null,an(n,s,i),t.current.lanes=i,ys(t,i,r),Ue(t,r),t}function xl(t,e,n,r){var i=e.current,s=Ne(),o=cn(i);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=an(i,e,o),t!==null&&(dt(t,i,o,s),uo(t,i,o)),o}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function id(t,e){vf(t,e),(t=t.alternate)&&vf(t,e)}function NE(){return null}var l_=typeof reportError=="function"?reportError:function(t){console.error(t)};function sd(t){this._internalRoot=t}Ol.prototype.render=sd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));xl(t,e,null,null)};Ol.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gn(function(){xl(null,t,null,null)}),e[Mt]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&zm(t)}};function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yf(){}function PE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ho(o);s.call(u)}}var o=o_(e,r,t,0,null,!1,!1,"",yf);return t._reactRootContainer=o,t[Mt]=o.current,Qi(t.nodeType===8?t.parentNode:t),Gn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ho(a);l.call(u)}}var a=rd(t,0,!1,null,null,!1,!1,"",yf);return t._reactRootContainer=a,t[Mt]=a.current,Qi(t.nodeType===8?t.parentNode:t),Gn(function(){xl(e,a,n,r)}),a}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ho(o);l.call(a)}}xl(e,o,t,i)}else o=PE(n,e,t,i,r);return Ho(o)}Mm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ci(e.pendingLanes);n!==0&&(Tc(e,n|1),Ue(e,ie()),!(j&6)&&($r=ie()+500,Cn()))}break;case 13:Gn(function(){var r=bt(t,1);if(r!==null){var i=Ne();dt(r,t,1,i)}}),id(t,1)}};kc=function(t){if(t.tag===13){var e=bt(t,134217728);if(e!==null){var n=Ne();dt(e,t,134217728,n)}id(t,134217728)}};bm=function(t){if(t.tag===13){var e=cn(t),n=bt(t,e);if(n!==null){var r=Ne();dt(n,t,e,r)}id(t,e)}};Fm=function(){return W};Um=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};lu=function(t,e,n){switch(e){case"input":if(eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(w(90));mm(r),eu(r,i)}}}break;case"textarea":_m(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};Im=Zc;Tm=Gn;var AE={usingClientEntryPoint:!1,Events:[Es,gr,Il,Cm,Sm,Zc]},mi={findFiberByHostInstance:xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xE={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nm(t),t===null?null:t.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||NE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{wl=Js.inject(xE),yt=Js}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(e))throw Error(w(200));return RE(t,e,null,n)};Ke.createRoot=function(t,e){if(!od(t))throw Error(w(299));var n=!1,r="",i=l_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rd(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Qi(t.nodeType===8?t.parentNode:t),new sd(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Nm(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Gn(t)};Ke.hydrate=function(t,e,n){if(!Dl(e))throw Error(w(200));return Ll(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!od(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=l_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o_(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,Qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};Ke.render=function(t,e,n){if(!Dl(e))throw Error(w(200));return Ll(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(w(40));return t._reactRootContainer?(Gn(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Zc;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Ll(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(t){console.error(t)}}a_(),om.exports=Ke;var OE=om.exports,wf=OE;Ka.createRoot=wf.createRoot,Ka.hydrateRoot=wf.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const Ef="popstate";function DE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ju("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Go(i)}return ME(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ld(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LE(){return Math.random().toString(36).substr(2,8)}function Cf(t,e){return{usr:t.state,key:t.key,idx:e}}function ju(t,e,n,r){return n===void 0&&(n=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jr(e):e,{state:n,key:e&&e.key||r||LE()})}function Go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ME(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=nn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(is({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=nn.Pop;let C=d(),p=C==null?null:C-u;u=C,a&&a({action:l,location:v.location,delta:p})}function h(C,p){l=nn.Push;let f=ju(v.location,C,p);n&&n(f,C),u=d()+1;let m=Cf(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function g(C,p){l=nn.Replace;let f=ju(v.location,C,p);n&&n(f,C),u=d();let m=Cf(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:Go(C);return oe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Ef,c),a=C,()=>{i.removeEventListener(Ef,c),a=null}},createHref(C){return e(i,C)},createURL:_,encodeLocation(C){let p=_(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(C){return o.go(C)}};return v}var Sf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sf||(Sf={}));function bE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Jr(e):e,i=ad(r.pathname||"/",n);if(i==null)return null;let s=u_(t);FE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=GE(s[l],QE(i));return o}function u_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=hn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VE(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of c_(s.path))i(s,o,a)}),e}function c_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=c_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function FE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UE=/^:\w+$/,zE=3,jE=2,BE=1,WE=10,$E=-2,If=t=>t==="*";function VE(t,e){let n=t.split("/"),r=n.length;return n.some(If)&&(r+=$E),e&&(r+=jE),n.filter(i=>!If(i)).reduce((i,s)=>i+(UE.test(s)?zE:s===""?BE:WE),r)}function HE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function GE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=KE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:hn([i,d.pathname]),pathnameBase:eC(hn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=hn([i,d.pathnameBase]))}return s}function KE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=l[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=l[c];return g&&!_?u[h]=void 0:u[h]=YE(_||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function qE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ld(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QE(t){try{return decodeURI(t)}catch(e){return ld(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YE(t,e){try{return decodeURIComponent(t)}catch(n){return ld(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ad(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jr(t):t;return{pathname:n?n.startsWith("/")?n:XE(n,e):e,search:tC(r),hash:nC(i)}}function XE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function d_(t){return ZE(t).map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function h_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jr(t):(i=is({},t),oe(!i.pathname||!i.pathname.includes("?"),Pa("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Pa("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Pa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else if(r){let c=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c.pop();i.pathname=h.join("/")}l="/"+c.join("/")}else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=JE(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),eC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const f_=["post","put","patch","delete"];new Set(f_);const iC=["get",...f_];new Set(iC);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}const ud=S.createContext(null),sC=S.createContext(null),Xr=S.createContext(null),Ml=S.createContext(null),ir=S.createContext({outlet:null,matches:[],isDataRoute:!1}),p_=S.createContext(null);function oC(t,e){let{relative:n}=e===void 0?{}:e;Ss()||oe(!1);let{basename:r,navigator:i}=S.useContext(Xr),{hash:s,pathname:o,search:l}=__(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ss(){return S.useContext(Ml)!=null}function bl(){return Ss()||oe(!1),S.useContext(Ml).location}function m_(t){S.useContext(Xr).static||S.useLayoutEffect(t)}function g_(){let{isDataRoute:t}=S.useContext(ir);return t?yC():lC()}function lC(){Ss()||oe(!1);let t=S.useContext(ud),{basename:e,navigator:n}=S.useContext(Xr),{matches:r}=S.useContext(ir),{pathname:i}=bl(),s=JSON.stringify(d_(r)),o=S.useRef(!1);return m_(()=>{o.current=!0}),S.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let d=h_(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:hn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}function __(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(ir),{pathname:i}=bl(),s=JSON.stringify(d_(r));return S.useMemo(()=>h_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function aC(t,e){return uC(t,e)}function uC(t,e,n){Ss()||oe(!1);let{navigator:r}=S.useContext(Xr),{matches:i}=S.useContext(ir),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=bl(),u;if(e){var d;let v=typeof e=="string"?Jr(e):e;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||oe(!1),u=v}else u=a;let c=u.pathname||"/",h=l==="/"?c:c.slice(l.length)||"/",g=bE(t,{pathname:h}),_=pC(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?S.createElement(Ml.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nn.Pop}},_):_}function cC(){let t=vC(),e=rC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const dC=S.createElement(cC,null);class hC extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(ir.Provider,{value:this.props.routeContext},S.createElement(p_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fC(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(ud);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(ir.Provider,{value:e},r)}function pC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||oe(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let d=a.route.id?o==null?void 0:o[a.route.id]:null,c=null;n&&(c=a.route.errorElement||dC);let h=e.concat(s.slice(0,u+1)),g=()=>{let _;return d?_=c:a.route.Component?_=S.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,S.createElement(fC,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?S.createElement(hC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var v_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(v_||{}),qo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qo||{});function mC(t){let e=S.useContext(ud);return e||oe(!1),e}function gC(t){let e=S.useContext(sC);return e||oe(!1),e}function _C(t){let e=S.useContext(ir);return e||oe(!1),e}function y_(t){let e=_C(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function vC(){var t;let e=S.useContext(p_),n=gC(qo.UseRouteError),r=y_(qo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function yC(){let{router:t}=mC(v_.UseNavigateStable),e=y_(qo.UseNavigateStable),n=S.useRef(!1);return m_(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ko({fromRouteId:e},s)))},[t,e])}function _o(t){oe(!1)}function wC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1}=t;Ss()&&oe(!1);let l=e.replace(/^\/*/,"/"),a=S.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Jr(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:g="default"}=r,_=S.useMemo(()=>{let v=ad(u,l);return v==null?null:{location:{pathname:v,search:d,hash:c,state:h,key:g},navigationType:i}},[l,u,d,c,h,g,i]);return _==null?null:S.createElement(Xr.Provider,{value:a},S.createElement(Ml.Provider,{children:n,value:_}))}function EC(t){let{children:e,location:n}=t;return aC(Bu(e),n)}new Promise(()=>{});function Bu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Bu(r.props.children,s));return}r.type!==_o&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wu.apply(this,arguments)}function CC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IC(t,e){return t.button===0&&(!e||e==="_self")&&!SC(t)}const TC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kC="startTransition",Tf=Cw[kC];function RC(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=DE({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Tf?Tf(()=>a(c)):a(c)},[a,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(wC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}const NC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kf=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=CC(e,TC),{basename:g}=S.useContext(Xr),_,v=!1;if(typeof u=="string"&&PC.test(u)&&(_=u,NC))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),I=ad(y.pathname,g);y.origin===m.origin&&I!=null?u=I+y.search+y.hash:v=!0}catch{}let C=oC(u,{relative:i}),p=AC(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",Wu({},h,{href:_||C,onClick:v||s?r:f,ref:n,target:a}))});var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Rf||(Rf={}));var Nf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nf||(Nf={}));function AC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=g_(),u=bl(),d=__(t,{relative:o});return S.useCallback(c=>{if(IC(c,n)){c.preventDefault();let h=r!==void 0?r:Go(u)===Go(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var Pf={};/**
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
 */const w_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+w_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const E_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new OC;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(t){const e=E_(t);return cd.encodeByteArray(e,!0)},Qo=function(t){return C_(t).replace(/\./g,"")},Yo=function(t){try{return cd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DC(t){return S_(void 0,t)}function S_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LC(n)||(t[n]=S_(t[n],e[n]));return t}function LC(t){return t!=="__proto__"}/**
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
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bC=()=>MC().__FIREBASE_DEFAULTS__,FC=()=>{if(typeof process>"u"||typeof Pf>"u")return;const t=Pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yo(t[1]);return e&&JSON.parse(e)},dd=()=>{try{return bC()||FC()||UC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I_=t=>{var e,n;return(n=(e=dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zC=t=>{const e=I_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T_=()=>{var t;return(t=dd())===null||t===void 0?void 0:t.config},k_=t=>{var e;return(e=dd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),l].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function R_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BC(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P_(){return w_.NODE_ADMIN===!0}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function x_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function WC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $C="FirebaseError";class It extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$C,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new It(i,l,r)}}function VC(t,e){return t.replace(HC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HC=/\{\$([^}]+)}/g;/**
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
 */function ss(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const O_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ss(Yo(s[0])||""),n=ss(Yo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},GC=function(t){const e=O_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KC=function(t){const e=O_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $u(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Af(s)&&Af(o)){if(!os(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
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
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class qC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function QC(t,e){const n=new YC(t,e);return n.subscribe.bind(n)}class YC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Aa),i.error===void 0&&(i.error=Aa),i.complete===void 0&&(i.complete=Aa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Aa(){}function fd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const XC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const ZC=1e3,eS=2,tS=4*60*60*1e3,nS=.5;function xf(t,e=ZC,n=eS){const r=e*Math.pow(n,t),i=Math.round(nS*r*(Math.random()-.5)*2);return Math.min(tS,r+i)}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class rS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sS(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iS(t){return t===Pn?void 0:t}function sS(t){return t.instantiationMode==="EAGER"}/**
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
 */class oS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const lS={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},aS=$.INFO,uS={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},cS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=aS,this._logHandler=cS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const dS=(t,e)=>e.some(n=>t instanceof n);let Of,Df;function hS(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fS(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,Vu=new WeakMap,L_=new WeakMap,xa=new WeakMap,pd=new WeakMap;function pS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D_.set(n,t)}).catch(()=>{}),pd.set(e,t),e}function mS(t){if(Vu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vu.set(t,e)}let Hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gS(t){Hu=t(Hu)}function _S(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oa(this),e,...n);return L_.set(r,e.sort?e.sort():[e]),fn(r)}:fS().includes(t)?function(...e){return t.apply(Oa(this),e),fn(D_.get(this))}:function(...e){return fn(t.apply(Oa(this),e))}}function vS(t){return typeof t=="function"?_S(t):(t instanceof IDBTransaction&&mS(t),dS(t,hS())?new Proxy(t,Hu):t)}function fn(t){if(t instanceof IDBRequest)return pS(t);if(xa.has(t))return xa.get(t);const e=vS(t);return e!==t&&(xa.set(t,e),pd.set(e,t)),e}const Oa=t=>pd.get(t);function M_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(fn(o.result),a.oldVersion,a.newVersion,fn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yS=["get","getKey","getAll","getAllKeys","count"],wS=["put","add","delete","clear"],Da=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Da.set(e,s),s}gS(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class ES{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Mf="0.9.29";/**
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
 */const Kn=new zl("@firebase/app"),SS="@firebase/app-compat",IS="@firebase/analytics-compat",TS="@firebase/analytics",kS="@firebase/app-check-compat",RS="@firebase/app-check",NS="@firebase/auth",PS="@firebase/auth-compat",AS="@firebase/database",xS="@firebase/database-compat",OS="@firebase/functions",DS="@firebase/functions-compat",LS="@firebase/installations",MS="@firebase/installations-compat",bS="@firebase/messaging",FS="@firebase/messaging-compat",US="@firebase/performance",zS="@firebase/performance-compat",jS="@firebase/remote-config",BS="@firebase/remote-config-compat",WS="@firebase/storage",$S="@firebase/storage-compat",VS="@firebase/firestore",HS="@firebase/firestore-compat",GS="firebase",KS="10.9.0";/**
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
 */const Ku="[DEFAULT]",qS={[Gu]:"fire-core",[SS]:"fire-core-compat",[TS]:"fire-analytics",[IS]:"fire-analytics-compat",[RS]:"fire-app-check",[kS]:"fire-app-check-compat",[NS]:"fire-auth",[PS]:"fire-auth-compat",[AS]:"fire-rtdb",[xS]:"fire-rtdb-compat",[OS]:"fire-fn",[DS]:"fire-fn-compat",[LS]:"fire-iid",[MS]:"fire-iid-compat",[bS]:"fire-fcm",[FS]:"fire-fcm-compat",[US]:"fire-perf",[zS]:"fire-perf-compat",[jS]:"fire-rc",[BS]:"fire-rc-compat",[WS]:"fire-gcs",[$S]:"fire-gcs-compat",[VS]:"fire-fst",[HS]:"fire-fst-compat","fire-js":"fire-js",[GS]:"fire-js-all"};/**
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
 */const Xo=new Map,qu=new Map;function QS(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function St(t){const e=t.name;if(qu.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;qu.set(e,t);for(const n of Xo.values())QS(n,t);return!0}function or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const YS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new sr("app","Firebase",YS);/**
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
 */class JS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=KS;function b_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ku,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=T_()),!n)throw pn.create("no-options");const s=Xo.get(i);if(s){if(os(n,s.options)&&os(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new oS(i);for(const a of qu.values())o.addComponent(a);const l=new JS(n,r,o);return Xo.set(i,l),l}function md(t=Ku){const e=Xo.get(t);if(!e&&t===Ku&&T_())return b_();if(!e)throw pn.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let i=(r=qS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}St(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XS="firebase-heartbeat-database",ZS=1,ls="firebase-heartbeat-store";let La=null;function F_(){return La||(La=M_(XS,ZS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),La}async function eI(t){try{const n=(await F_()).transaction(ls),r=await n.objectStore(ls).get(U_(t));return await n.done,r}catch(e){if(e instanceof It)Kn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function bf(t,e){try{const r=(await F_()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,U_(t)),await r.done}catch(n){if(n instanceof It)Kn.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function U_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ff();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ff(),{heartbeatsToSend:r,unsentEntries:i}=iI(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ff(){return new Date().toISOString().substring(0,10)}function iI(t,e=tI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?x_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){St(new pt("platform-logger",e=>new ES(e),"PRIVATE")),St(new pt("heartbeat",e=>new rI(e),"PRIVATE")),Ze(Gu,Mf,t),Ze(Gu,Mf,"esm2017"),Ze("fire-js","")}oI("");function gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lI=z_,j_=new sr("auth","Firebase",z_());/**
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
 */const Zo=new zl("@firebase/auth");function aI(t,...e){Zo.logLevel<=$.WARN&&Zo.warn(`Auth (${ti}): ${t}`,...e)}function vo(t,...e){Zo.logLevel<=$.ERROR&&Zo.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw _d(t,...e)}function Et(t,...e){return _d(t,...e)}function uI(t,e,n){const r=Object.assign(Object.assign({},lI()),{[e]:n});return new sr("auth","Firebase",r).create(e,{appName:t.name})}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function O(t,e,...n){if(!t)throw _d(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Ut(t,e){t||Pt(e)}/**
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
 */function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cI(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cI()||R_()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||N_()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vd(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class B_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pI=new Is(3e4,6e4);function Sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,r,i={}){return W_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ei(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),B_.fetch()($_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function W_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fI),e);try{const i=new gI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Xs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uI(t,d,u);mt(t,d)}}catch(i){if(i instanceof It)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function Ts(t,e,n,r,i={}){const s=await In(t,e,n,r,i);return"mfaPendingCredential"in s&&mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vd(t.config,i):`${t.config.apiScheme}://${i}`}function mI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),pI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}function jf(t){return t!==void 0&&t.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vI(t,e){return In(t,"GET","/v2/recaptchaConfig",Sn(t,e))}/**
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
 */async function yI(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function wI(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=yd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(Ma(i.auth_time)),issuedAtTime:Mi(Ma(i.iat)),expirationTime:Mi(Ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ma(t){return Number(t)*1e3}function yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yo(n);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CI(t){const e=yd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&SI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class V_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),i=await as(t,wI(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RI(s.providerUserInfo):[],l=kI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new V_(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function TI(t){const e=xe(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RI(t){return t.map(e=>{var{providerId:n}=e,r=gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NI(t,e){const n=await W_(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",B_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PI(t,e){return In(t,"POST","/v2/accounts:revokeToken",Sn(t,e))}/**
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
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new us;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Ht(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return TI(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await as(this,yI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:R,stsTokenManager:N}=n;O(m&&N,e,"internal-error");const P=us.fromJSON(this.name,N);O(typeof m=="string",e,"internal-error"),Ht(c,e.name),Ht(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),Ht(g,e.name),Ht(_,e.name),Ht(v,e.name),Ht(C,e.name),Ht(p,e.name),Ht(f,e.name);const K=new jn({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(K.providerData=R.map(F=>Object.assign({},F))),C&&(K._redirectEventId=C),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new us;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}}/**
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
 */const Bf=new Map;function At(t){Ut(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Wf=H_;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(At(Wf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(Wf);const o=yo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=jn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xr(s,e,r))}}/**
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
 */function $f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(J_(e))return"Webos";if(wd(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=ke()){return/firefox\//i.test(t)}function wd(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=ke()){return/crios\//i.test(t)}function q_(t=ke()){return/iemobile/i.test(t)}function Q_(t=ke()){return/android/i.test(t)}function Y_(t=ke()){return/blackberry/i.test(t)}function J_(t=ke()){return/webos/i.test(t)}function jl(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AI(t=ke()){var e;return jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xI(){return BC()&&document.documentMode===10}function X_(t=ke()){return jl(t)||Q_(t)||J_(t)||Y_(t)||/windows phone/i.test(t)||q_(t)}function OI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=$f(ke());break;case"Worker":n=`${$f(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LI(t,e={}){return In(t,"GET","/v2/passwordPolicy",Sn(t,e))}/**
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
 */const MI=6;class bI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vf(this),this.idTokenSubscription=new Vf(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LI(this),n=new bI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lr(t){return xe(t)}class Vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=QC(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UI(t){Bl=t}function ev(t){return Bl.loadJS(t)}function zI(){return Bl.recaptchaEnterpriseScript}function jI(){return Bl.gapiScript}function BI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WI="recaptcha-enterprise",$I="NO_RECAPTCHA";class VI{constructor(e){this.type=WI,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{vI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new _I(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;jf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o($I)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=zI();a.length!==0&&(a+=l),ev(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Hf(t,e,n,r=!1){const i=new VI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function HI(t,e){const n=or(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(os(s,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function GI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KI(t,e,n){const r=lr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tv(e),{host:o,port:l}=qI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QI()}function tv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qI(t){const e=tv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gf(o)}}}function Gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ed{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function YI(t,e){return In(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JI(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",Sn(t,e))}/**
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
 */async function XI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}async function ZI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}/**
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
 */class cs extends Ed{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,n,"signInWithPassword",JI);case"emailLink":return XI(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,r,"signUpPassword",YI);case"emailLink":return ZI(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Or(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",Sn(t,e))}/**
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
 */const eT="http://localhost";class qn extends Ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:eT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
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
 */function tT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nT(t){const e=Ii(Ti(t)).link,n=e?Ii(Ti(e)).deep_link_id:null,r=Ii(Ti(t)).deep_link_id;return(r?Ii(Ti(r)).link:null)||r||n||e||t}class Cd{constructor(e){var n,r,i,s,o,l;const a=Ii(Ti(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=tT((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=nT(e);try{return new Cd(n)}catch{return null}}}/**
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
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(e,n){return cs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cd.parseLink(n);return O(r,"argument-error"),cs._fromEmailAndCode(e,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends ks{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Jt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
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
 */class Xt extends ks{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends ks{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */async function rT(t,e){return Ts(t,"POST","/v1/accounts:signUp",Sn(t,e))}/**
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
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=Kf(r);return new Qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kf(r);return new Qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tl extends It{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function rv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function iT(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
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
 */async function sT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await as(t,rv(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=yd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Qn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function iv(t,e,n=!1){const r="signIn",i=await rv(t,r,e),s=await Qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oT(t,e){return iv(lr(t),e)}/**
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
 */async function sv(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lT(t,e,n){const r=lr(t),o=await Yu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rT).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&sv(t),a}),l=await Qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function aT(t,e,n){return oT(xe(t),ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sv(t),r})}function uT(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function cT(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function dT(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}const nl="__sak";/**
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
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function hT(){const t=ke();return wd(t)||jl(t)}const fT=1e3,pT=10;class lv extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hT()&&OI(),this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const mT=lv;/**
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
 */class av extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const uv=av;/**
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
 */function gT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await gT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
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
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Sd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ct(){return window}function vT(t){Ct().location.href=t}/**
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
 */function cv(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function yT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return cv()?self:null}/**
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
 */const dv="firebaseLocalStorageDb",CT=1,rl="firebaseLocalStorage",hv="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function ST(){const t=indexedDB.deleteDatabase(dv);return new Rs(t).toPromise()}function Ju(){const t=indexedDB.open(dv,CT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await ST(),e(await Ju()))})})}async function qf(t,e,n){const r=$l(t,!0).put({[hv]:e,value:n});return new Rs(r).toPromise()}async function IT(t,e){const n=$l(t,!1).get(e),r=await new Rs(n).toPromise();return r===void 0?null:r.value}function Qf(t,e){const n=$l(t,!0).delete(e);return new Rs(n).toPromise()}const TT=800,kT=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yT(),!this.activeServiceWorker)return;this.sender=new _T(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ju();return await qf(e,nl,"1"),await Qf(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$l(i,!1).getAll();return new Rs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const RT=fv;new Is(3e4,6e4);/**
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
 */function NT(t,e){return e?At(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Id extends Ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PT(t){return iv(t.auth,new Id(t),t.bypassAuthState)}function AT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),sT(n,new Id(t),t.bypassAuthState)}async function xT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),iT(n,new Id(t),t.bypassAuthState)}/**
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
 */class pv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return AT;default:mt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OT=new Is(2e3,1e4);class Sr extends pv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OT.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const DT="pendingRedirect",wo=new Map;class LT extends pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await MT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MT(t,e){const n=UT(e),r=FT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bT(t,e){wo.set(t._key(),e)}function FT(t){return At(t._redirectPersistence)}function UT(t){return yo(DT,t.config.apiKey,t.name)}async function zT(t,e,n=!1){const r=lr(t),i=NT(r,e),o=await new LT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jT=10*60*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yf(e))}saveEventToCache(e){this.cachedEventUids.add(Yf(e)),this.lastProcessedEventTime=Date.now()}}function Yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mv(t);default:return!1}}/**
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
 */async function $T(t,e={}){return In(t,"GET","/v1/projects",e)}/**
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
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function GT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $T(t);for(const n of e)try{if(KT(n))return}catch{}mt(t,"unauthorized-domain")}function KT(t){const e=Qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HT.test(n))return!1;if(VT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qT=new Is(3e4,6e4);function Jf(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QT(t){return new Promise((e,n)=>{var r,i,s;function o(){Jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(Et(t,"network-request-failed"))},timeout:qT.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const l=BI("iframefcb");return Ct()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},ev(`${jI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function YT(t){return Eo=Eo||QT(t),Eo}/**
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
 */const JT=new Is(5e3,15e3),XT="__/auth/iframe",ZT="emulator/auth/iframe",ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nk(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vd(e,ZT):`https://${t.config.authDomain}/${XT}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=tk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function rk(t){const e=await YT(t),n=Ct().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:nk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ek,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=Ct().setTimeout(()=>{s(o)},JT.get());function a(){Ct().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ok=600,lk="_blank",ak="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uk(t,e,n,r=sk,i=ok){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},ik),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ke().toLowerCase();n&&(l=K_(u)?lk:n),G_(u)&&(e=e||ak,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(AI(u)&&l!=="_self")return ck(e||"",l),new Xf(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new Xf(c)}function ck(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dk="__/auth/handler",hk="emulator/auth/handler",fk=encodeURIComponent("fac");async function Zf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof nv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$u(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof ks){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${fk}=${encodeURIComponent(a)}`:"";return`${pk(t)}?${ei(l).slice(1)}${u}`}function pk({config:t}){return t.emulator?vd(t,hk):`https://${t.authDomain}/${dk}`}/**
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
 */const ba="webStorageSupport";class mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=zT,this._overrideRedirectResult=bT}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zf(e,n,r,Qu(),i);return uk(e,o,Sd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zf(e,n,r,Qu(),i);return vT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rk(e),r=new BT(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ba,{type:ba},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ba];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||wd()||jl()}}const gk=mk;var ep="@firebase/auth",tp="1.6.2";/**
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
 */class _k{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(t){St(new pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},u=new FI(r,i,s,a);return GI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),St(new pt("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new _k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(ep,tp,vk(t)),Ze(ep,tp,"esm2017")}/**
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
 */const wk=5*60,Ek=k_("authIdTokenMaxAge")||wk;let np=null;const Ck=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ek)return;const i=n==null?void 0:n.token;np!==i&&(np=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gv(t=md()){const e=or(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HI(t,{popupRedirectResolver:gk,persistence:[RT,mT,uv]}),r=k_("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=Ck(r);cT(n,s,()=>s(n.currentUser)),uT(n,o=>s(o))}const i=I_("auth");return i&&KI(n,`http://${i}`),n}function Sk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Sk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");const Ik="_regForm_1lynn_1",Tk="_error_1lynn_13",kk={regForm:Ik,error:Tk},Rk=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),i=gv(),s=async o=>{o.preventDefault();try{const l=await lT(i,t,n);console.log("Registered",l)}catch(l){console.error("Error in signup",l)}};return x.jsxs("form",{className:kk.regForm,onSubmit:s,children:[x.jsx("h2",{children:"Registration"}),x.jsx("input",{type:"email",placeholder:"Email",onChange:o=>e(o.target.value),required:!0}),x.jsx("input",{type:"password",placeholder:"Password",onChange:o=>r(o.target.value),required:!0}),x.jsx("button",{type:"submit",children:"Register"})]})},_v=S.createContext({}),Nk=({children:t})=>{const[e,n]=S.useState(null),r=gv(),i=async(s,o)=>{try{await aT(r,s,o)}catch(l){throw console.error("Error in login",l),l}};return S.useEffect(()=>dT(r,o=>{n(o)}),[]),x.jsx(_v.Provider,{value:{currentUser:e,login:i},children:t})},Pk=()=>S.useContext(_v),Ak="_loginForm_17fja_1",xk="_error_17fja_13",rp={loginForm:Ak,error:xk},Ok=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(null),{login:o}=Pk(),l=g_(),a=async u=>{u.preventDefault();try{await o(t,n),console.log("Logged in as",t),l("/main")}catch(d){console.error("Error in login",d),s("Invalid email or password")}};return x.jsxs("form",{className:rp.loginForm,onSubmit:a,children:[x.jsx("h2",{children:"Login"}),x.jsx("input",{type:"email",placeholder:"Email",onChange:u=>e(u.target.value),required:!0}),x.jsx("input",{type:"password",placeholder:"Password",onChange:u=>r(u.target.value),required:!0}),x.jsx("button",{type:"submit",children:"Login"}),i&&x.jsx("p",{className:rp.error,children:i})," "]})},Dk="_MainPageContainer_zhz9s_2",Lk="_InputForm_zhz9s_12",Mk="_HeaderRow_zhz9s_18",bk="_ProductListContainer_zhz9s_24",Fk="_ProductRow_zhz9s_34",Uk="_ProductName_zhz9s_46",zk="_ProductPrice_zhz9s_47",jk="_ProductCost_zhz9s_48",Bk="_PrName_zhz9s_54",Wk="_DeleteButton_zhz9s_62",$k="_AddButton_zhz9s_63",Vk="_CancelButton_zhz9s_64",Hk="_EditButton_zhz9s_65",ge={MainPageContainer:Dk,InputForm:Lk,HeaderRow:Mk,ProductListContainer:bk,ProductRow:Fk,ProductName:Uk,ProductPrice:zk,ProductCost:jk,PrName:Bk,DeleteButton:Wk,AddButton:$k,CancelButton:Vk,EditButton:Hk};var Gk="firebase",Kk="10.9.0";/**
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
 */Ze(Gk,Kk,"app");const vv="@firebase/installations",Td="0.6.5";/**
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
 */const yv=1e4,wv=`w:${Td}`,Ev="FIS_v2",qk="https://firebaseinstallations.googleapis.com/v1",Qk=60*60*1e3,Yk="installations",Jk="Installations";/**
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
 */const Xk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yn=new sr(Yk,Jk,Xk);function Cv(t){return t instanceof It&&t.code.includes("request-failed")}/**
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
 */function Sv({projectId:t}){return`${qk}/projects/${t}/installations`}function Iv(t){return{token:t.token,requestStatus:2,expiresIn:e1(t.expiresIn),creationTime:Date.now()}}async function Tv(t,e){const r=(await e.json()).error;return Yn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zk(t,{refreshToken:e}){const n=kv(t);return n.append("Authorization",t1(e)),n}async function Rv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function e1(t){return Number(t.replace("s","000"))}function t1(t){return`${Ev} ${t}`}/**
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
 */async function n1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Sv(t),i=kv(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ev,appId:t.appId,sdkVersion:wv},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Rv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Iv(u.authToken)}}else throw await Tv("Create Installation",a)}/**
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
 */function Nv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function r1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const i1=/^[cdef][\w-]{21}$/,Xu="";function s1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=o1(t);return i1.test(n)?n:Xu}catch{return Xu}}function o1(t){return r1(t).substr(0,22)}/**
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
 */function Vl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Pv=new Map;function Av(t,e){const n=Vl(t);xv(n,e),l1(n,e)}function xv(t,e){const n=Pv.get(t);if(n)for(const r of n)r(e)}function l1(t,e){const n=a1();n&&n.postMessage({key:t,fid:e}),u1()}let Ln=null;function a1(){return!Ln&&"BroadcastChannel"in self&&(Ln=new BroadcastChannel("[Firebase] FID Change"),Ln.onmessage=t=>{xv(t.data.key,t.data.fid)}),Ln}function u1(){Pv.size===0&&Ln&&(Ln.close(),Ln=null)}/**
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
 */const c1="firebase-installations-database",d1=1,Jn="firebase-installations-store";let Fa=null;function kd(){return Fa||(Fa=M_(c1,d1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}})),Fa}async function il(t,e){const n=Vl(t),i=(await kd()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Av(t,e.fid),e}async function Ov(t){const e=Vl(t),r=(await kd()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(e),await r.done}async function Hl(t,e){const n=Vl(t),i=(await kd()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Av(t,l.fid),l}/**
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
 */async function Rd(t){let e;const n=await Hl(t.appConfig,r=>{const i=h1(r),s=f1(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Xu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function h1(t){const e=t||{fid:s1(),registrationStatus:0};return Dv(e)}function f1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=p1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:m1(t)}:{installationEntry:e}}async function p1(t,e){try{const n=await n1(t,e);return il(t.appConfig,n)}catch(n){throw Cv(n)&&n.customData.serverCode===409?await Ov(t.appConfig):await il(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function m1(t){let e=await ip(t.appConfig);for(;e.registrationStatus===1;)await Nv(100),e=await ip(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rd(t);return r||n}return e}function ip(t){return Hl(t,e=>{if(!e)throw Yn.create("installation-not-found");return Dv(e)})}function Dv(t){return g1(t)?{fid:t.fid,registrationStatus:0}:t}function g1(t){return t.registrationStatus===1&&t.registrationTime+yv<Date.now()}/**
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
 */async function _1({appConfig:t,heartbeatServiceProvider:e},n){const r=v1(t,n),i=Zk(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:wv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Rv(()=>fetch(r,l));if(a.ok){const u=await a.json();return Iv(u)}else throw await Tv("Generate Auth Token",a)}function v1(t,{fid:e}){return`${Sv(t)}/${e}/authTokens:generate`}/**
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
 */async function Nd(t,e=!1){let n;const r=await Hl(t.appConfig,s=>{if(!Lv(s))throw Yn.create("not-registered");const o=s.authToken;if(!e&&E1(o))return s;if(o.requestStatus===1)return n=y1(t,e),s;{if(!navigator.onLine)throw Yn.create("app-offline");const l=S1(s);return n=w1(t,l),l}});return n?await n:r.authToken}async function y1(t,e){let n=await sp(t.appConfig);for(;n.authToken.requestStatus===1;)await Nv(100),n=await sp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Nd(t,e):r}function sp(t){return Hl(t,e=>{if(!Lv(e))throw Yn.create("not-registered");const n=e.authToken;return I1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function w1(t,e){try{const n=await _1(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await il(t.appConfig,r),n}catch(n){if(Cv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ov(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await il(t.appConfig,r)}throw n}}function Lv(t){return t!==void 0&&t.registrationStatus===2}function E1(t){return t.requestStatus===2&&!C1(t)}function C1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qk}function S1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function I1(t){return t.requestStatus===1&&t.requestTime+yv<Date.now()}/**
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
 */async function T1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rd(e);return r?r.catch(console.error):Nd(e).catch(console.error),n.fid}/**
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
 */async function k1(t,e=!1){const n=t;return await R1(n),(await Nd(n,e)).token}async function R1(t){const{registrationPromise:e}=await Rd(t);e&&await e}/**
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
 */function N1(t){if(!t||!t.options)throw Ua("App Configuration");if(!t.name)throw Ua("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ua(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ua(t){return Yn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Mv="installations",P1="installations-internal",A1=t=>{const e=t.getProvider("app").getImmediate(),n=N1(e),r=or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},x1=t=>{const e=t.getProvider("app").getImmediate(),n=or(e,Mv).getImmediate();return{getId:()=>T1(n),getToken:i=>k1(n,i)}};function O1(){St(new pt(Mv,A1,"PUBLIC")),St(new pt(P1,x1,"PRIVATE"))}O1();Ze(vv,Td);Ze(vv,Td,"esm2017");/**
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
 */const sl="analytics",D1="firebase_id",L1="origin",M1=60*1e3,b1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pd="https://www.googletagmanager.com/gtag/js";/**
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
 */const ze=new zl("@firebase/analytics");/**
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
 */const F1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new sr("analytics","Analytics",F1);/**
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
 */function U1(t){if(!t.startsWith(Pd)){const e=He.create("invalid-gtag-resource",{gtagURL:t});return ze.warn(e.message),""}return t}function bv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function z1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function j1(t,e){const n=z1("firebase-js-sdk-policy",{createScriptURL:U1}),r=document.createElement("script"),i=`${Pd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function B1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function W1(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await bv(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){ze.error(l)}t("config",i,s)}async function $1(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await bv(n);for(const a of o){const u=l.find(c=>c.measurementId===a),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ze.error(s)}}function V1(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await $1(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await W1(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){ze.error(l)}}return i}function H1(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=V1(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function G1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Pd)&&n.src.includes(t))return n;return null}/**
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
 */const K1=30,q1=1e3;class Q1{constructor(e={},n=q1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new Q1;function Y1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function J1(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Y1(r)},s=b1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function X1(t,e=Fv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw He.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw He.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new tR;return setTimeout(async()=>{l.abort()},n!==void 0?n:M1),Uv({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Uv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Fv){var s;const{appId:o,measurementId:l}=t;try{await Z1(r,e)}catch(a){if(l)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await J1(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!eR(u)){if(i.deleteThrottleMetadata(o),l)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?xf(n,i.intervalMillis,K1):xf(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),ze.debug(`Calling attemptFetch again in ${d} millis`),Uv(t,c,r,i)}}function Z1(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eR(t){if(!(t instanceof It)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function rR(){if(A_())try{await x_()}catch(t){return ze.warn(He.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ze.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iR(t,e,n,r,i,s,o){var l;const a=X1(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ze.error(g)),e.push(a);const u=rR().then(g=>{if(g)return r.getId()}),[d,c]=await Promise.all([a,u]);G1(s)||j1(s,d.measurementId),i("js",new Date);const h=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return h[L1]="firebase",h.update=!0,c!=null&&(h[D1]=c),i("config",d.measurementId,h),d.measurementId}/**
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
 */class sR{constructor(e){this.app=e}_delete(){return delete bi[this.app.options.appId],Promise.resolve()}}let bi={},op=[];const lp={};let za="dataLayer",oR="gtag",ap,zv,up=!1;function lR(){const t=[];if(R_()&&t.push("This is a browser extension environment."),WC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}function aR(t,e,n){lR();const r=t.options.appId;if(!r)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(bi[r]!=null)throw He.create("already-exists",{id:r});if(!up){B1(za);const{wrappedGtag:s,gtagCore:o}=H1(bi,op,lp,za,oR);zv=s,ap=o,up=!0}return bi[r]=iR(t,op,lp,e,ap,za,n),new sR(t)}function uR(t=md()){t=xe(t);const e=or(t,sl);return e.isInitialized()?e.getImmediate():cR(t)}function cR(t,e={}){const n=or(t,sl);if(n.isInitialized()){const i=n.getImmediate();if(os(e,n.getOptions()))return i;throw He.create("already-initialized")}return n.initialize({options:e})}function dR(t,e,n,r){t=xe(t),nR(zv,bi[t.app.options.appId],e,n,r).catch(i=>ze.error(i))}const cp="@firebase/analytics",dp="0.10.1";function hR(){St(new pt(sl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aR(r,i,n)},"PUBLIC")),St(new pt("analytics-internal",t,"PRIVATE")),Ze(cp,dp),Ze(cp,dp,"esm2017");function t(e){try{const n=e.getProvider(sl).getImmediate();return{logEvent:(r,i,s)=>dR(n,r,i,s)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}hR();var hp={};const fp="@firebase/database",pp="1.0.3";/**
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
 */let jv="";function fR(t){jv=t}/**
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
 */class pR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Bv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pR(e)}}catch{}return new mR},Mn=Bv("localStorage"),Zu=Bv("sessionStorage");/**
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
 */const Dr=new zl("@firebase/database"),gR=function(){let t=1;return function(){return t++}}(),Wv=function(t){const e=XC(t),n=new qC;n.update(e);const r=n.digest();return cd.encodeByteArray(r)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ns.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Bn=null,mp=!0;const _R=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Dr.logLevel=$.VERBOSE,Bn=Dr.log.bind(Dr),e&&Zu.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,Zu.remove("logging_enabled"))},Ie=function(...t){if(mp===!0&&(mp=!1,Bn===null&&Zu.get("logging_enabled")===!0&&_R(!0)),Bn){const e=Ns.apply(null,t);Bn(e)}},Ps=function(t){return function(...e){Ie(t,...e)}},ec=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Dr.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Dr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Dr.warn(e)},vR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$v=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",ri=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=gp(t),r=gp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wR=function(t,e){return t===e?0:t<e?-1:1},gi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Ad=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=Ad(t[e[r]]);return n+="}",n},Vv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hv=function(t){E(!$v(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},ER=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const IR=new RegExp("^-?(0*)\\d{1,10}$"),TR=-2147483648,kR=2147483647,gp=function(t){if(IR.test(t)){const e=Number(t);if(e>=TR&&e<=kR)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},RR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class NR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class PR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lr.OWNER="owner";/**
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
 */const xd="5",Gv="v",Kv="s",qv="r",Qv="f",Yv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jv="ls",Xv="p",tc="ac",Zv="websocket",ey="long_polling";/**
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
 */class ty{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ny(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Zv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ey)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AR(t)&&(n.ns=t.namespace);const i=[];return Be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class xR{constructor(){this.counters_={}}incrementCounter(e,n=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DC(this.counters_)}}/**
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
 */const ja={},Ba={};function Od(t){const e=t.toString();return ja[e]||(ja[e]=new xR),ja[e]}function OR(t,e){const n=t.toString();return Ba[n]||(Ba[n]=e()),Ba[n]}/**
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
 */class DR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _p="start",LR="close",MR="pLPCommand",bR="pRTLPCB",ry="id",iy="pw",sy="ser",FR="cb",UR="seg",zR="ts",jR="d",BR="dframe",oy=1870,ly=30,WR=oy-ly,$R=25e3,VR=3e4;class Ir{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=Od(n),this.urlFn=a=>(this.appCheckToken&&(a[tc]=this.appCheckToken),ny(n,ey,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VR)),yR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_p)this.id=l,this.password=a;else if(o===LR)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[_p]="t",r[sy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gv]=xd,this.transportSessionId&&(r[Kv]=this.transportSessionId),this.lastSessionId&&(r[Jv]=this.lastSessionId),this.applicationId&&(r[Xv]=this.applicationId),this.appCheckToken&&(r[tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yv.test(location.hostname)&&(r[qv]=Qv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ir.forceAllow_=!0}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){return Ir.forceAllow_?!0:!Ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ER()&&!CR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n),i=Vv(r,WR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BR]="t",r[ry]=e,r[iy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gR(),window[MR+this.uniqueCallbackIdentifier]=e,window[bR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ry]=this.myID,e[iy]=this.myPW,e[sy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ly+r.length<=oy;){const o=this.pendingSegs.shift();r=r+"&"+UR+i+"="+o.seg+"&"+zR+i+"="+o.ts+"&"+jR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($R)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const HR=16384,GR=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=Od(n),this.connURL=lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Gv]=xd,typeof location<"u"&&location.hostname&&Yv.test(location.hostname)&&(o[qv]=Qv),n&&(o[Kv]=n),r&&(o[Jv]=r),i&&(o[tc]=i),s&&(o[Xv]=s),ny(e,Zv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let r;P_(),this.mySock=new ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ol!==null&&!lt.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ss(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vv(n,HR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
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
 */class ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ir,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of ds.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
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
 */const KR=6e4,qR=5e3,QR=10*1024,YR=100*1024,Wa="t",vp="d",JR="s",yp="r",XR="e",wp="o",Ep="a",Cp="n",Sp="p",ZR="h";class eN{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wa in e){const n=e[Wa];n===Ep?this.upgradeIfSecondaryHealthy_():n===yp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ep,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gi(Wa,e);if(vp in e){const r=e[vp];if(n===ZR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JR?this.onConnectionShutdown_(r):n===yp?this.onReset_(r):n===XR?ec("Server Error: "+r):n===wp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ec("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xd!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ay{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class uy{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ll extends uy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ll}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ip=32,Tp=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new V("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vn(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function cy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Le(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ld(t,e){if(vn(t)!==vn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vn(t)>vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nN{constructor(e,n){this.errorPrefix_=n,this.parts_=dy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ul(this.parts_[r]);fy(this)}}function rN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ul(e),fy(t)}function iN(t){const e=t.parts_.pop();t.byteLength_-=Ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function fy(t){if(t.byteLength_>Tp)throw new Error(t.errorPrefix_+"has a key path longer than "+Tp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ip)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ip+") or object contains a cycle "+An(t))}function An(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Md extends uy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Md}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _i=1e3,sN=60*5*1e3,kp=30*1e3,oN=1.3,lN=3e4,aN="server_kill",Rp=3;class Dt extends ay{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Dt.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=sN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!P_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Dt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=GC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ec("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lN&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new eN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(aN)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&je(c),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$u(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ad(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rp&&(this.reconnectDelay_=kp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jv.replace(/\./g,"-")]=1,hd()?e["framework.cordova"]=1:N_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return $u(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
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
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
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
 */class Gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(Hr,e),i=new b(Hr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
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
 */let Zs;class py extends Gl{static get __EMPTY_NODE(){return Zs}static set __EMPTY_NODE(e){Zs=e}compare(e,n){return ri(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Xn,Zs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Zs)}toString(){return".key"}}const Mr=new py;/**
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
 */class eo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Me.EMPTY_NODE,this.right=s??Me.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class uN{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new eo(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new uN;/**
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
 */function cN(t,e){return ri(t.name,e.name)}function bd(t,e){return ri(t,e)}/**
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
 */let nc;function dN(t){nc=t}const my=function(t){return typeof t=="number"?"number:"+Hv(t):"string:"+t},gy=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else E(t===nc||t.isEmpty(),"priority of unexpected type.");E(t===nc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Np;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gy(this.priorityNode_)}static set __childrenNodeConstructor(e){Np=e}static get __childrenNodeConstructor(){return Np}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+my(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hv(this.value_):e+=this.value_,this.lazyHash_=Wv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _y,vy;function hN(t){_y=t}function fN(t){vy=t}class pN extends Gl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Xn,new de("[PRIORITY-POST]",vy))}makePost(e,n){const r=_y(e);return new b(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new pN;/**
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
 */const mN=Math.log(2);class gN{constructor(e){const n=s=>parseInt(Math.log(s)/mN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new fe(h,c.node,fe.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const C=c-_,p=c;c-=_;const f=i(C+1,p),m=t[C],y=n?n(m):m;g(new fe(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),C=Math.pow(2,a.count-(_+1));v?h(C,fe.BLACK):(h(C,fe.BLACK),h(C,fe.RED))}return d},o=new gN(t.length),l=s(o);return new Me(r||e,l)};/**
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
 */let $a;const cr={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(cr&&ne,"ChildrenNode.ts has not been loaded"),$a=$a||new xt({".priority":cr},{".priority":ne}),$a}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=al(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new xt(d,u)}addToIndexes(e,n){const r=Jo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),al(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
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
 */let vi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&gy(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vi||(vi=new A(new Me(bd),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{E(M(e)!==".priority"||vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+my(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===Mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _N extends A{constructor(){super(new Me(bd),A.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const As=new _N;Object.defineProperties(b,{MIN:{value:new b(Hr,A.EMPTY_NODE)},MAX:{value:new b(Xn,As)}});py.__EMPTY_NODE=A.EMPTY_NODE;de.__childrenNodeConstructor=A;dN(As);fN(As);/**
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
 */const vN=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ve(e))}if(!(t instanceof Array)&&vN){const n=[];let r=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=al(n,cN,o=>o.name,bd);if(r){const o=al(n,ne.getCompare());return new A(s,ve(e),new xt({".priority":o},{".priority":ne}))}else return new A(s,ve(e),xt.Default)}else{let n=A.EMPTY_NODE;return Be(t,(r,i)=>{if(Wt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}hN(ve);/**
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
 */class yN extends Gl{constructor(e){super(),this.indexPath_=e,E(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ri(e.name,n.name):s}makePost(e,n){const r=ve(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,As);return new b(Xn,e)}toString(){return dy(this.indexPath_,0).join("/")}}/**
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
 */class wN extends Gl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=ve(e);return new b(n,r)}toString(){return".value"}}const EN=new wN;/**
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
 */function yy(t){return{type:"value",snapshotNode:t}}function Gr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gr(n,r)):o.trackChildChange(fs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(hs(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fs(i,s,o))}else r.trackChildChange(Gr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ps{constructor(e){this.indexedFilter_=new Fd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class SN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(fs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(hs(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Gr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(hs(u.name,u.node)),s.trackChildChange(Gr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IN(t){return t.loadsAllData()?new Fd(t.getIndex()):t.hasLimit()?new SN(t):new ps(t)}function Pp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===EN?n="$value":t.index_===Mr?n="$key":(E(t.index_ instanceof yN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ap(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
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
 */class ul extends ay{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),l={};this.listens_[o]=l;const a=Pp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Pp(e._queryParams),r=e._path.toString(),i=new Fl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ss(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class TN{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function cl(){return{value:null,children:new Map}}function wy(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,cl());const i=t.children.get(r);e=H(e),wy(i,e,n)}}function rc(t,e,n){t.value!==null?n(e,t.value):kN(t,(r,i)=>{const s=new V(e.toString()+"/"+r);rc(i,s,n)})}function kN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class RN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const xp=10*1e3,NN=30*1e3,PN=5*60*1e3;class AN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RN(e);const r=xp+(NN-xp)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(i,s)=>{s>0&&Wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*PN))}}/**
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
 */var ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ut||(ut={}));function Ey(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ut.ACK_USER_WRITE,this.source=Ey()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new dl(B(),n,this.revert)}}else return E(M(this.path)===e,"operationForChild called for unrelated child."),new dl(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=ut.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ms(this.source,B()):new ms(this.source,H(this.path))}}/**
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
 */class Zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ut.OVERWRITE}operationForChild(e){return U(this.path)?new Zn(this.source,B(),this.snap.getImmediateChild(e)):new Zn(this.source,H(this.path),this.snap)}}/**
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
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ut.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Zn(this.source,B(),n.value):new gs(this.source,B(),n)}else return E(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class er{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ON(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(CN(o.childName,o.snapshotNode))}),yi(t,i,"child_removed",e,r,n),yi(t,i,"child_added",e,r,n),yi(t,i,"child_moved",s,r,n),yi(t,i,"child_changed",e,r,n),yi(t,i,"value",e,r,n),i}function yi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>LN(t,l,a)),o.forEach(l=>{const a=DN(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function DN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LN(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Kl(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,r){return Kl(new er(e,n,r),t.serverCache)}function Cy(t,e,n,r){return Kl(t.eventCache,new er(e,n,r))}function ic(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Va;const MN=()=>(Va||(Va=new Me(wR)),Va);class Q{constructor(e,n=MN()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Be(e,(r,i)=>{n=n.set(new V(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:ae(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set(H(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(H(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new Q(null))}}function zi(t,e,n){if(U(e))return new ht(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ht(s)}}}function Op(t,e,n){let r=t;return Be(n,(i,s)=>{r=zi(r,ae(e,i),s)}),r}function Dp(t,e){if(U(e))return ht.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ht(n)}}function sc(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Lp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function mn(t,e){if(U(e))return t;{const n=ar(t,e);return n!=null?new ht(new Q(n)):new ht(t.writeTree_.subtree(e))}}function oc(t){return t.writeTree_.isEmpty()}function Kr(t,e){return Sy(B(),t.writeTree_,e)}function Sy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Sy(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Bd(t,e){return Ry(e,t)}function bN(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=r}function FN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function UN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&zN(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return jN(t),!0;if(r.snap)t.visibleWrites=Dp(t.visibleWrites,r.path);else{const l=r.children;Be(l,a=>{t.visibleWrites=Dp(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function zN(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ae(t.path,n),e))return!0;return!1}function jN(t){t.visibleWrites=Iy(t.allWrites,BN,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BN(t){return t.visible}function Iy(t,e,n){let r=ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=Le(n,o),r=zi(r,l,s.snap)):at(o,n)&&(l=Le(o,n),r=zi(r,B(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=Le(n,o),r=Op(r,l,s.children);else if(at(o,n))if(l=Le(o,n),U(l))r=Op(r,B(),s.children);else{const a=Vr(s.children,M(l));if(a){const u=a.getChild(H(l));r=zi(r,B(),u)}}}else throw Zr("WriteRecord should have .snap or .children")}}return r}function Ty(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=mn(t.visibleWrites,e);if(oc(o))return n;if(n==null&&!sc(o,B()))return null;{const l=n||A.EMPTY_NODE;return Kr(o,l)}}}else{const s=mn(t.visibleWrites,e);if(!i&&oc(s))return n;if(!i&&n==null&&!sc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=Iy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Kr(l,a)}}}function WN(t,e,n){let r=A.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Kr(mn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),Lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mn(t.visibleWrites,e);return Lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $N(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(sc(t.visibleWrites,s))return null;{const o=mn(t.visibleWrites,s);return oc(o)?i.getChild(n):Kr(o,i.getChild(n))}}function VN(t,e,n,r){const i=ae(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mn(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function HN(t,e){return ar(t.visibleWrites,e)}function GN(t,e,n,r,i,s,o){let l;const a=mn(t.visibleWrites,e),u=ar(a,B());if(u!=null)l=u;else if(n!=null)l=Kr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function KN(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,r){return Ty(t.writeTree,t.treePath,e,n,r)}function Wd(t,e){return WN(t.writeTree,t.treePath,e)}function Mp(t,e,n,r){return $N(t.writeTree,t.treePath,e,n,r)}function fl(t,e){return HN(t.writeTree,ae(t.treePath,e))}function qN(t,e,n,r,i,s){return GN(t.writeTree,t.treePath,e,n,r,i,s)}function $d(t,e,n){return VN(t.writeTree,t.treePath,e,n)}function ky(t,e){return Ry(ae(t.treePath,e),t.writeTree)}function Ry(t,e){return{treePath:t,writeTree:e}}/**
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
 */class QN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,hs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fs(r,e.snapshotNode,i.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ny=new YN;class Vd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $d(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),s=qN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function JN(t){return{filter:t}}function XN(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZN(t,e,n,r,i){const s=new QN;let o,l;if(n.type===ut.OVERWRITE){const u=n;u.source.fromUser?o=lc(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=pl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ut.MERGE){const u=n;u.source.fromUser?o=tP(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ut.ACK_USER_WRITE){const u=n;u.revert?o=iP(t,e,u.path,r,i,s):o=nP(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ut.LISTEN_COMPLETE)o=rP(t,e,n.path,r,s);else throw Zr("Unknown operation type: "+n.type);const a=s.getChanges();return eP(e,o,a),{viewCache:o,changes:a}}function eP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ic(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(yy(ic(e)))}}function Py(t,e,n,r,i,s){const o=e.eventCache;if(fl(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tr(e),d=u instanceof A?u:A.EMPTY_NODE,c=Wd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=hl(r,tr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){E(vn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Mp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=H(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Mp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=$d(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ui(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function pl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&vn(n)>1)return e;const _=H(n),C=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),g,C,_,Ny,null)}const c=Cy(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new Vd(i,c,s);return Py(t,c,n,i,h,l)}function lc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Vd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ui(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ui(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),g=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?cy(h)===".priority"&&v.getChild(hy(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ui(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function bp(t,e){return t.eventCache.isCompleteForChild(e)}function tP(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ae(n,a);bp(e,M(d))&&(l=lc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ae(n,a);bp(e,M(d))||(l=lc(t,l,d,u,i,s,o))}),l}function Fp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ac(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=Fp(t,g,h);a=pl(t,a,new V(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=Fp(t,_,h);a=pl(t,a,new V(c),v,i,s,o,l)}}),a}function nP(t,e,n,r,i,s,o){if(fl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return pl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Q(null);return a.getNode().forEachChild(Mr,(d,c)=>{u=u.set(new V(d),c)}),ac(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=ae(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),ac(t,e,n,u,i,s,l,o)}}function rP(t,e,n,r,i){const s=e.serverCache,o=Cy(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Py(t,o,n,r,Ny,i)}function iP(t,e,n,r,i,s){let o;if(fl(r,n)!=null)return e;{const l=new Vd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hl(r,tr(e));else{const c=e.serverCache.getNode();E(c instanceof A,"serverChildren would be complete if leaf node"),d=Wd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=$d(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,H(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(r,tr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||fl(r,B())!=null,Ui(e,u,o,t.filter.filtersNodes())}}/**
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
 */class sP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fd(r.getIndex()),s=IN(r);this.processor_=JN(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new er(a,o.isFullyInitialized(),i.filtersNodes()),c=new er(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Kl(c,d),this.eventGenerator_=new xN(this.query_)}get query(){return this.query_}}function oP(t){return t.viewCache_.serverCache.getNode()}function lP(t,e){const n=tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Up(t){return t.eventRegistrations_.length===0}function aP(t,e){t.eventRegistrations_.push(e)}function zp(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function jp(t,e,n,r){e.type===ut.MERGE&&e.source.queryId!==null&&(E(tr(t.viewCache_),"We should always have a full cache before handling merges"),E(ic(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ZN(t.processor_,i,e,n,r);return XN(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ay(t,s.changes,s.viewCache.eventCache.getNode(),null)}function uP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Gr(s,o))}),n.isFullyInitialized()&&r.push(yy(n.getNode())),Ay(t,r,n.getNode(),e)}function Ay(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ON(t.eventGenerator_,e,n,i)}/**
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
 */let ml;class cP{constructor(){this.views=new Map}}function dP(t){E(!ml,"__referenceConstructor has already been defined"),ml=t}function hP(){return E(ml,"Reference.ts has not been loaded"),ml}function fP(t){return t.views.size===0}function Hd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),jp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(jp(o,e,n,r));return s}}function pP(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=hl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Wd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Kl(new er(l,a,!1),new er(r,i,!1));return new sP(e,u)}return o}function mP(t,e,n,r,i,s){const o=pP(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aP(o,n),uP(o,n)}function gP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=yn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(zp(u,n,r)),Up(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(zp(a,n,r)),Up(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!yn(t)&&s.push(new(hP())(e._repo,e._path)),{removed:s,events:o}}function xy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function br(t,e){let n=null;for(const r of t.views.values())n=n||lP(r,e);return n}function Oy(t,e){if(e._queryParams.loadsAllData())return ql(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Dy(t,e){return Oy(t,e)!=null}function yn(t){return ql(t)!=null}function ql(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gl;function _P(t){E(!gl,"__referenceConstructor has already been defined"),gl=t}function vP(){return E(gl,"Reference.ts has not been loaded"),gl}let yP=1;class Bp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=KN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ly(t,e,n,r,i){return bN(t.pendingWriteTree_,e,n,r,i),i?xs(t,new Zn(Ey(),e,n)):[]}function bn(t,e,n=!1){const r=FN(t.pendingWriteTree_,e);if(UN(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(B(),!0):Be(r.children,o=>{s=s.set(new V(o),!0)}),xs(t,new dl(r.path,s,n))}else return[]}function Ql(t,e,n){return xs(t,new Zn(zd(),e,n))}function wP(t,e,n){const r=Q.fromObject(n);return xs(t,new gs(zd(),e,r))}function EP(t,e){return xs(t,new ms(zd(),e))}function CP(t,e,n){const r=Kd(t,n);if(r){const i=qd(r),s=i.path,o=i.queryId,l=Le(s,e),a=new ms(jd(o),l);return Qd(t,s,a)}else return[]}function uc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Dy(o,e))){const a=gP(o,e,n,r);fP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>yn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=TP(h);for(let _=0;_<g.length;++_){const v=g[_],C=v.query,p=Fy(t,v);t.listenProvider_.startListening(ji(C),_l(t,C),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ji(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Yl(h));t.listenProvider_.stopListening(ji(h),g)}))}kP(t,u)}return l}function SP(t,e,n,r){const i=Kd(t,r);if(i!=null){const s=qd(i),o=s.path,l=s.queryId,a=Le(o,e),u=new Zn(jd(l),a,n);return Qd(t,o,u)}else return[]}function IP(t,e,n,r){const i=Kd(t,r);if(i){const s=qd(i),o=s.path,l=s.queryId,a=Le(o,e),u=Q.fromObject(n),d=new gs(jd(l),a,u);return Qd(t,o,d)}else return[]}function Wp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Le(h,i);s=s||br(g,_),o=o||yn(g)});let l=t.syncPointTree_.get(i);l?(o=o||yn(l),s=s||br(l,B())):(l=new cP,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=br(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=Dy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Yl(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=RP();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Bd(t.pendingWriteTree_,i);let c=mP(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Oy(l,e);c=c.concat(NP(t,e,h))}return c}function Gd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),u=br(l,a);if(u)return u});return Ty(i,e,s,n,!0)}function xs(t,e){return My(e,t.syncPointTree_,null,Bd(t.pendingWriteTree_,B()))}function My(t,e,n,r){if(U(t.path))return by(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=br(i,B()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=ky(r,o);s=s.concat(My(l,a,u,d))}return i&&(s=s.concat(Hd(i,t,r,n))),s}}function by(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=br(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ky(r,o),d=t.operationForChild(o);d&&(s=s.concat(by(d,l,a,u)))}),i&&(s=s.concat(Hd(i,t,r,n))),s}function Fy(t,e){const n=e.query,r=_l(t,n);return{hashFn:()=>(oP(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?CP(t,n._path,r):EP(t,n._path);{const s=SR(i,n);return uc(t,n,null,s)}}}}function _l(t,e){const n=Yl(e);return t.queryToTagMap.get(n)}function Yl(t){return t._path.toString()+"$"+t._queryIdentifier}function Kd(t,e){return t.tagToQueryMap.get(e)}function qd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Qd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Bd(t.pendingWriteTree_,e);return Hd(r,n,i,null)}function TP(t){return t.fold((e,n,r)=>{if(n&&yn(n))return[ql(n)];{let i=[];return n&&(i=xy(n)),Be(r,(s,o)=>{i=i.concat(o)}),i}})}function ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vP())(t._repo,t._path):t}function kP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Yl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function RP(){return yP++}function NP(t,e,n){const r=e._path,i=_l(t,e),s=Fy(t,n),o=t.listenProvider_.startListening(ji(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!yn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&yn(d))return[ql(d).query];{let h=[];return d&&(h=h.concat(xy(d).map(g=>g.query))),Be(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ji(d),_l(t,d))}}return o}/**
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
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class Jd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Jd(this.syncTree_,n)}node(){return Gd(this.syncTree_,this.path_)}}const PP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$p=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xP(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},xP=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},OP=function(t,e,n,r){return Xd(e,new Jd(n,t),r)},Uy=function(t,e,n){return Xd(t,new Yd(e),n)};function Xd(t,e,n){const r=t.getPriority().val(),i=$p(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=$p(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=Xd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Zd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function eh(t,e){let n=e instanceof V?e:new V(e),r=t,i=M(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Zd(i,r,s),n=H(n),i=M(n)}return r}function si(t){return t.node.value}function zy(t,e){t.node.value=e,cc(t)}function jy(t){return t.node.childCount>0}function DP(t){return si(t)===void 0&&!jy(t)}function Jl(t,e){Be(t.node.children,(n,r)=>{e(new Zd(n,t,r))})}function By(t,e,n,r){n&&!r&&e(t),Jl(t,i=>{By(i,e,!0,r)}),n&&r&&e(t)}function LP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Os(t){return new V(t.parent===null?t.name:Os(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&MP(t.parent,t.name,t)}function MP(t,e,n){const r=DP(n),i=Wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
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
 */const bP=/[\[\].#$\/\u0000-\u001F\u007F]/,FP=/[\[\].#$\u0000-\u001F\u007F]/,Ha=10*1024*1024,Wy=function(t){return typeof t=="string"&&t.length!==0&&!bP.test(t)},$y=function(t){return typeof t=="string"&&t.length!==0&&!FP.test(t)},UP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$y(t)},zP=function(t,e,n,r){r&&e===void 0||th(fd(t,"value"),e,n)},th=function(t,e,n){const r=n instanceof V?new nN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+An(r));if(typeof e=="function")throw new Error(t+"contains a function "+An(r)+" with contents = "+e.toString());if($v(e))throw new Error(t+"contains "+e.toString()+" "+An(r));if(typeof e=="string"&&e.length>Ha/3&&Ul(e)>Ha)throw new Error(t+"contains a string greater than "+Ha+" utf8 bytes "+An(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Wy(o)))throw new Error(t+" contains an invalid key ("+o+") "+An(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rN(r,o),th(t,l,r),iN(r)}),i&&s)throw new Error(t+' contains ".value" child '+An(r)+" in addition to actual children.")}},Vy=function(t,e,n,r){if(!(r&&n===void 0)&&!$y(n))throw new Error(fd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vy(t,e,n,r)},Hy=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},BP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UP(n))throw new Error(fd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ld(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gy(t,e,n){nh(t,n),Ky(t,r=>Ld(r,e))}function jt(t,e,n){nh(t,n),Ky(t,r=>at(r,e)||at(e,r))}function Ky(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($P(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $P(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bn&&Ie("event: "+n.toString()),ii(r)}}}/**
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
 */const VP="repo_interrupt",HP=25;class GP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new Zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KP(t,e,n){if(t.stats_=Od(t.repoInfo_),t.forceRestClient_||RR())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{Vp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{Vp(t,r,i,s,o)},r=>{Hp(t,r)},r=>{QP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=OR(t.repoInfo_,()=>new AN(t.stats_,t.server_)),t.infoData_=new TN,t.infoSyncTree_=new Bp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ql(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new Bp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);jt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function qP(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rh(t){return PP({timestamp:qP(t)})}function Vp(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Jo(n,u=>ve(u));o=IP(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=SP(t.serverSyncTree_,s,a,i)}else if(r){const a=Jo(n,u=>ve(u));o=wP(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Ql(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Xl(t,s)),jt(t.eventQueue_,l,o)}function Hp(t,e){ih(t,"connected",e),e===!1&&JP(t)}function QP(t,e){Be(e,(n,r)=>{ih(t,n,r)})}function ih(t,e,n){const r=new V("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Ql(t.infoSyncTree_,r,i);jt(t.eventQueue_,r,s)}function qy(t){return t.nextWriteId_++}function YP(t,e,n,r,i){sh(t,"set",{path:e.toString(),value:n,priority:r});const s=rh(t),o=ve(n,r),l=Gd(t.serverSyncTree_,e),a=Uy(o,l,s),u=qy(t),d=Ly(t.serverSyncTree_,e,a,u,!0);nh(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||je("set at "+e+" failed: "+h);const v=bn(t.serverSyncTree_,u,!_);jt(t.eventQueue_,e,v),eA(t,i,h,g)});const c=Zy(t,e);Xl(t,c),jt(t.eventQueue_,c,[])}function JP(t){sh(t,"onDisconnectEvents");const e=rh(t),n=cl();rc(t.onDisconnect_,B(),(i,s)=>{const o=OP(i,s,t.serverSyncTree_,e);wy(n,i,o)});let r=[];rc(n,B(),(i,s)=>{r=r.concat(Ql(t.serverSyncTree_,i,s));const o=Zy(t,i);Xl(t,o)}),t.onDisconnect_=cl(),jt(t.eventQueue_,B(),r)}function XP(t,e,n){let r;M(e._path)===".info"?r=Wp(t.infoSyncTree_,e,n):r=Wp(t.serverSyncTree_,e,n),Gy(t.eventQueue_,e._path,r)}function Gp(t,e,n){let r;M(e._path)===".info"?r=uc(t.infoSyncTree_,e,n):r=uc(t.serverSyncTree_,e,n),Gy(t.eventQueue_,e._path,r)}function ZP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(VP)}function sh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function eA(t,e,n,r){e&&ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Qy(t,e,n){return Gd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function oh(t,e=t.transactionQueueTree_){if(e||Zl(t,e),si(e)){const n=Jy(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tA(t,Os(e),n)}else jy(e)&&Jl(e,n=>{oh(t,n)})}function tA(t,e,n){const r=n.map(u=>u.currentWriteId),i=Qy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Le(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{sh(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(bn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Zl(t,eh(t.transactionQueueTree_,e)),oh(t,t.transactionQueueTree_),jt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ii(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xl(t,e)}},o)}function Xl(t,e){const n=Yy(t,e),r=Os(n),i=Jy(t,n);return nA(t,i,r),r}function nA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Le(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=HP)d=!0,c="maxretry",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Qy(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){th("transaction failed: Data returned ",g,a.path);let _=ve(g);typeof g=="object"&&g!=null&&Wt(g,".priority")||(_=_.updatePriority(h.getPriority()));const C=a.currentWriteId,p=rh(t),f=Uy(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=qy(t),o.splice(o.indexOf(C),1),i=i.concat(Ly(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(bn(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Zl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ii(r[l]);oh(t,t.transactionQueueTree_)}function Yy(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&si(r)===void 0;)r=eh(r,n),e=H(e),n=M(e);return r}function Jy(t,e){const n=[];return Xy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Xy(t,e,n){const r=si(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Jl(e,i=>{Xy(t,i,n)})}function Zl(t,e){const n=si(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zy(e,n.length>0?n:void 0)}Jl(e,r=>{Zl(t,r)})}function Zy(t,e){const n=Os(Yy(t,e)),r=eh(t.transactionQueueTree_,e);return LP(r,i=>{Ga(t,i)}),Ga(t,r),By(r,i=>{Ga(t,i)}),n}function Ga(t,e){const n=si(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zy(e,void 0):n.length=s+1,jt(t.eventQueue_,Os(e),i);for(let o=0;o<r.length;o++)ii(r[o])}}/**
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
 */function rA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kp=function(t,e){const n=sA(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ty(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},sA=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=rA(t.substring(d,c)));const h=iA(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class ew{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class tw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:cy(this._path)}get ref(){return new $t(this._repo,this._path)}get _queryIdentifier(){const e=Ap(this._queryParams),n=Ad(e);return n==="{}"?"default":n}get _queryObject(){return Ap(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof lh))return!1;const n=this._repo===e._repo,r=Ld(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tN(this._path)}}class $t extends lh{constructor(e,n){super(e,n,new Ud,!1)}get parent(){const e=hy(this._path);return e===null?null:new $t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=vl(this.ref,e);return new _s(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new _s(i,vl(this.ref,r),ne)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function to(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?vl(t._root,e):t._root}function vl(t,e){return t=xe(t),M(t._path)===null?jP("child","path",e,!1):Vy("child","path",e,!1),new $t(t._repo,ae(t._path,e))}function lA(t){return Hy("remove",t._path),dc(t,null)}function dc(t,e){t=xe(t),Hy("set",t._path),zP("set",e,t._path,!1);const n=new Fl;return YP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ah{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ew("value",this,new _s(e.snapshotNode,new $t(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tw(this,e,n):null}matches(e){return e instanceof ah?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class uh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tw(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=vl(new $t(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ew(e.type,this,new _s(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof uh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function aA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Gp(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new oA(n,s||void 0),l=e==="value"?new ah(o):new uh(e,o);return XP(t._repo,t,l),()=>Gp(t._repo,t,l)}function uA(t,e,n,r){return aA(t,"value",e,n,r)}dP($t);_P($t);/**
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
 */const cA="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let dA=!1;function hA(t,e,n,r){t.repoInfo_=new ty(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function fA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&hp&&(u=hp[cA]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Kp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Lr(Lr.OWNER):new PR(t.name,t.options,e);BP("Invalid Firebase Database URL",o),U(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=mA(l,t,d,new NR(t.name,n));return new gA(c,t)}function pA(t,e){const n=hc[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZP(t),delete n[t.key]}function mA(t,e,n,r){let i=hc[e.name];i||(i={},hc[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GP(t,dA,n,r),i[t.toURLString()]=s,s}class gA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $t(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function _A(t=md(),e){const n=or(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zC("database");r&&vA(n,...r)}return n}function vA(t,e,n,r={}){t=xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Lr(Lr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:jC(r.mockUserToken,t.app.options.projectId);s=new Lr(o)}hA(i,e,n,s)}/**
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
 */function yA(t){fR(ti),St(new pt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return fA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ze(fp,pp,t),Ze(fp,pp,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yA();const wA={apiKey:"AIzaSyBGojPkkC6s2aJTHnf4uSExxZo9iqX-lFY",authDomain:"respirator-54ab1.firebaseapp.com",databaseURL:"https://respirator-54ab1-default-rtdb.firebaseio.com",projectId:"respirator-54ab1",storageBucket:"respirator-54ab1.appspot.com",messagingSenderId:"125964604290",appId:"1:125964604290:web:0a6e3676aa43755fdef59b",measurementId:"G-K4Q8R9WF8F"},nw=b_(wA);uR(nw);const no=_A(nw);var Fn=256,rw=[],qp=256,ro;for(;Fn--;)rw[Fn]=(Fn+256).toString(16).substring(1);function EA(t){var e=0,n=t||11;if(!ro||Fn+n>qp*2)for(ro="",Fn=0;e<qp;e++)ro+=rw[Math.random()*256|0];return ro.substring(Fn,Fn+++n)}function CA(){const[t,e]=S.useState({productName:"",price:"",cost:""}),[n,r]=S.useState(null),[i,s]=S.useState({}),[o,l]=S.useState("asc");S.useEffect(()=>{const v=to(no,"/"),C=uA(v,p=>{s(p.val()||{})});return()=>C()},[]);const a=v=>{e({...t,[v.target.name]:v.target.value})},u=v=>{r(v),e({...i[v]})},d=()=>{r(null),e({productName:"",price:"",cost:""})},c=()=>{const v=EA();n?dc(to(no,`/${n}`),{...t,uuid:n}).then(()=>{console.log("Product data updated!"),r(null),e({productName:"",price:"",cost:""})}).catch(C=>{console.error("Error updating product in the database",C)}):dc(to(no,`/${v}`),{...t,uuid:v}).then(()=>{console.log("Product data written!"),e({productName:"",price:"",cost:""})}).catch(C=>{console.error("Error writing product to the database",C)})},h=v=>{lA(to(no,`/${v}`)).then(()=>{console.log("Removed:",v)}).catch(C=>{console.error("Could not remove:",C)})},g=()=>{l(o==="asc"?"desc":"asc")},_=Object.entries(i).sort((v,C)=>(o==="asc"?1:-1)*v[1].productName.localeCompare(C[1].productName));return x.jsxs("div",{className:ge.MainPageContainer,children:[x.jsxs("div",{className:ge.InputForm,children:[x.jsx("input",{name:"productName",value:t.productName,onChange:a,className:ge.Input,placeholder:"Enter product name"}),x.jsx("input",{name:"price",type:"number",value:t.price,onChange:a,className:ge.Input,placeholder:"Enter price"}),x.jsx("input",{name:"cost",type:"number",value:t.cost,onChange:a,className:ge.Input,placeholder:"Enter cost"}),x.jsx("button",{className:ge.AddButton,onClick:c,children:n?"Update Product":"Add Product"}),n&&x.jsx("button",{className:ge.CancelButton,onClick:d,children:"Cancel"})]}),x.jsx("div",{className:ge.HeaderRow,children:x.jsx("span",{className:ge.PrName,onClick:g,children:"Product Name"})}),x.jsx("div",{className:`${ge.MainPageContainer} ${ge.ProductListContainer}`,children:x.jsx("ol",{start:"1",children:_.map(([v,C])=>x.jsxs("li",{className:ge.ProductRow,children:[x.jsxs("span",{className:ge.ProductName,children:["Product Name: ",C.productName]}),x.jsxs("span",{className:ge.ProductPrice,children:["Product Price: ",C.price]}),x.jsxs("span",{className:ge.ProductCost,children:["Product Cost: ",C.cost]}),x.jsx("button",{className:ge.EditButton,onClick:()=>u(v),children:"Edit"}),x.jsx("button",{className:ge.DeleteButton,onClick:()=>h(v),children:"Delete"})]},v))})})]})}const SA="_container_1bt12_1",IA={container:SA},TA=()=>x.jsxs("div",{className:IA.container,children:[x.jsx("h2",{children:"MDK Crud App"}),x.jsx(kf,{to:"/",children:x.jsx("h3",{children:"Login"})}),x.jsx(kf,{to:"/register",children:x.jsx("h3",{children:"Register"})})]});function kA(){return x.jsx(RC,{children:x.jsxs(Nk,{children:[x.jsx(TA,{}),x.jsxs(EC,{children:[x.jsx(_o,{path:"/",element:x.jsx(Ok,{})}),x.jsx(_o,{path:"/register",element:x.jsx(Rk,{})}),x.jsx(_o,{path:"/main",element:x.jsx(CA,{})})]})]})})}Ka.createRoot(document.getElementById("root")).render(x.jsx(im.StrictMode,{children:x.jsx(kA,{})}));
