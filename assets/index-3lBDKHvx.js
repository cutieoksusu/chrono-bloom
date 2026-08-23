(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Ay={exports:{}},Jl={},Cy={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),ME=Symbol.for("react.portal"),FE=Symbol.for("react.fragment"),jE=Symbol.for("react.strict_mode"),UE=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),$E=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),HE=Symbol.for("react.suspense"),WE=Symbol.for("react.memo"),qE=Symbol.for("react.lazy"),zp=Symbol.iterator;function KE(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ry=Object.assign,Py={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||ky}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xy(){}xy.prototype=ri.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||ky}var rd=nd.prototype=new xy;rd.constructor=nd;Ry(rd,ri.prototype);rd.isPureReactComponent=!0;var $p=Array.isArray,Ny=Object.prototype.hasOwnProperty,sd={current:null},Dy={key:!0,ref:!0,__self:!0,__source:!0};function Vy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ny.call(e,r)&&!Dy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oo,type:t,key:i,ref:o,props:s,_owner:sd.current}}function GE(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function QE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QE(""+t.key):e.toString(36)}function La(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case ME:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ec(o,0):r,$p(s)?(n="",t!=null&&(n=t.replace(Bp,"$&/")+"/"),La(s,e,n,"",function(h){return h})):s!=null&&(id(s)&&(s=GE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",$p(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+ec(i,l);o+=La(i,e,n,u,s)}else if(u=KE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+ec(i,l++),o+=La(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],s=0;return La(t,r,"","",function(i){return e.call(n,i,s++)}),r}function XE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Ma={transition:null},JE={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:sd};function by(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ri;te.Fragment=FE;te.Profiler=UE;te.PureComponent=nd;te.StrictMode=jE;te.Suspense=HE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;te.act=by;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ry({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=sd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ny.call(e,u)&&!Dy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:$E,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zE,_context:t},t.Consumer=t};te.createElement=Vy;te.createFactory=function(t){var e=Vy.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:BE,render:t}};te.isValidElement=id;te.lazy=function(t){return{$$typeof:qE,_payload:{_status:-1,_result:t},_init:XE}};te.memo=function(t,e){return{$$typeof:WE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};te.unstable_act=by;te.useCallback=function(t,e){return dt.current.useCallback(t,e)};te.useContext=function(t){return dt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};te.useEffect=function(t,e){return dt.current.useEffect(t,e)};te.useId=function(){return dt.current.useId()};te.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return dt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};te.useRef=function(t){return dt.current.useRef(t)};te.useState=function(t){return dt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return dt.current.useTransition()};te.version="18.3.1";Cy.exports=te;var re=Cy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=re,ZE=Symbol.for("react.element"),eT=Symbol.for("react.fragment"),tT=Object.prototype.hasOwnProperty,nT=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rT={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tT.call(e,r)&&!rT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:ZE,type:t,key:i,ref:o,props:s,_owner:nT.current}}Jl.Fragment=eT;Jl.jsx=Oy;Jl.jsxs=Oy;Ay.exports=Jl;var T=Ay.exports,Ly={exports:{}},kt={},My={exports:{}},Fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var ye=J-1>>>1,Ce=$[ye];if(0<s(Ce,G))$[ye]=G,$[J]=Ce,J=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var ye=0,Ce=$.length,Nr=Ce>>>1;ye<Nr;){var Pt=2*(ye+1)-1,Dr=$[Pt],jt=Pt+1,jn=$[jt];if(0>s(Dr,J))jt<Ce&&0>s(jn,Dr)?($[ye]=jn,$[jt]=J,ye=jt):($[ye]=Dr,$[Pt]=J,ye=Pt);else if(jt<Ce&&0>s(jn,J))$[ye]=jn,$[jt]=J,ye=jt;else break e}}return G}function s($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,I=!1,P=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=$)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function x($){if(D=!1,k($),!P)if(n(u)!==null)P=!0,Ae(M);else{var G=n(h);G!==null&&le(x,G.startTime-$)}}function M($,G){P=!1,D&&(D=!1,C(y),y=-1),I=!0;var J=g;try{for(k(G),p=n(u);p!==null&&(!(p.expirationTime>G)||$&&!A());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var Ce=ye(p.expirationTime<=G);G=t.unstable_now(),typeof Ce=="function"?p.callback=Ce:p===n(u)&&r(u),k(G)}else r(u);p=n(u)}if(p!==null)var Nr=!0;else{var Pt=n(h);Pt!==null&&le(x,Pt.startTime-G),Nr=!1}return Nr}finally{p=null,g=J,I=!1}}var F=!1,v=null,y=-1,_=5,S=-1;function A(){return!(t.unstable_now()-S<_)}function R(){if(v!==null){var $=t.unstable_now();S=$;var G=!0;try{G=v(!0,$)}finally{G?E():(F=!1,v=null)}}else F=!1}var E;if(typeof w=="function")E=function(){w(R)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Xe=ge.port2;ge.port1.onmessage=R,E=function(){Xe.postMessage(null)}}else E=function(){b(R,0)};function Ae($){v=$,F||(F=!0,E())}function le($,G){y=b(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||I||(P=!0,Ae(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return $()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=g;g=$;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function($,G,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,$){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=J+Ce,$={id:f++,callback:G,priorityLevel:$,startTime:J,expirationTime:Ce,sortIndex:-1},J>ye?($.sortIndex=J,e(h,$),n(u)===null&&$===n(h)&&(D?(C(y),y=-1):D=!0,le(x,J-ye))):($.sortIndex=Ce,e(u,$),P||I||(P=!0,Ae(M))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var G=g;return function(){var J=g;g=G;try{return $.apply(this,arguments)}finally{g=J}}}})(Fy);My.exports=Fy;var sT=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT=re,Ct=sT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,oo={};function as(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(oo[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,oT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},Wp={};function aT(t){return Uc.call(Wp,t)?!0:Uc.call(Hp,t)?!1:oT.test(t)?Wp[t]=!0:(Hp[t]=!0,!1)}function lT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uT(t,e,n,r){if(e===null||typeof e>"u"||lT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,r){var s=Ge.hasOwnProperty(e)?Ge[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uT(e,n,s,r)&&(n=null),r||s===null?aT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=iT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),zy=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),qp=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,tc;function Fi(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function cT(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case zc:return"Profiler";case ud:return"StrictMode";case $c:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zy:return(t.displayName||"Context")+".Consumer";case Uy:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function hT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dT(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=dT(t))}function Hy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wy(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function qc(t,e){Wy(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ji(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function qy(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ky(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ky(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,Gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fT=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(t){fT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qi[e]=qi[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qi.hasOwnProperty(t)&&qi[t]?(""+e).trim():e+"px"}function Xy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var pT=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(pT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,bs=null,Os=null;function Jp(t){if(t=Fo(t)){if(typeof Zc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=nu(e),Zc(t.stateNode,t.type,e))}}function Jy(t){bs?Os?Os.push(t):Os=[t]:bs=t}function Yy(){if(bs){var t=bs,e=Os;if(Os=bs=null,Jp(t),e)for(t=0;t<e.length;t++)Jp(e[t])}}function Zy(t,e){return t(e)}function e_(){}var sc=!1;function t_(t,e,n){if(sc)return t(e,n);sc=!0;try{return Zy(t,e,n)}finally{sc=!1,(bs!==null||Os!==null)&&(e_(),Yy())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var eh=!1;if(kn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{eh=!1}function mT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ki=!1,il=null,ol=!1,th=null,gT={onError:function(t){Ki=!0,il=t}};function yT(t,e,n,r,s,i,o,l,u){Ki=!1,il=null,mT.apply(gT,arguments)}function _T(t,e,n,r,s,i,o,l,u){if(yT.apply(this,arguments),Ki){if(Ki){var h=il;Ki=!1,il=null}else throw Error(j(198));ol||(ol=!0,th=h)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yp(t){if(ls(t)!==t)throw Error(j(188))}function vT(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Yp(s),t;if(i===r)return Yp(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function r_(t){return t=vT(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var i_=Ct.unstable_scheduleCallback,Zp=Ct.unstable_cancelCallback,wT=Ct.unstable_shouldYield,ET=Ct.unstable_requestPaint,Re=Ct.unstable_now,TT=Ct.unstable_getCurrentPriorityLevel,fd=Ct.unstable_ImmediatePriority,o_=Ct.unstable_UserBlockingPriority,al=Ct.unstable_NormalPriority,IT=Ct.unstable_LowPriority,a_=Ct.unstable_IdlePriority,Yl=null,sn=null;function ST(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:kT,AT=Math.log,CT=Math.LN2;function kT(t){return t>>>=0,t===0?32:31-(AT(t)/CT|0)|0}var ga=64,ya=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ui(l):(i&=o,i!==0&&(r=Ui(i)))}else o=n&~s,o!==0?r=Ui(o):i!==0&&(r=Ui(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),s=1<<n,r|=t[n],e&=~s;return r}function RT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Gt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=RT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function xT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Gt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function u_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c_,md,h_,d_,f_,rh=!1,_a=[],sr=null,ir=null,or=null,uo=new Map,co=new Map,Xn=[],NT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function xi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Fo(e),e!==null&&md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function DT(t,e,n,r,s){switch(e){case"focusin":return sr=xi(sr,t,e,n,r,s),!0;case"dragenter":return ir=xi(ir,t,e,n,r,s),!0;case"mouseover":return or=xi(or,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return uo.set(i,xi(uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,co.set(i,xi(co.get(i)||null,t,e,n,r,s)),!0}return!1}function p_(t){var e=$r(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,f_(t.priority,function(){h_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=Fo(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){Fa(t)&&n.delete(e)}function VT(){rh=!1,sr!==null&&Fa(sr)&&(sr=null),ir!==null&&Fa(ir)&&(ir=null),or!==null&&Fa(or)&&(or=null),uo.forEach(tm),co.forEach(tm)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,VT)))}function ho(t){function e(s){return Ni(s,t)}if(0<_a.length){Ni(_a[0],t);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Ni(sr,t),ir!==null&&Ni(ir,t),or!==null&&Ni(or,t),uo.forEach(e),co.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&Xn.shift()}var Ls=Mn.ReactCurrentBatchConfig,ul=!0;function bT(t,e,n,r){var s=ae,i=Ls.transition;Ls.transition=null;try{ae=1,gd(t,e,n,r)}finally{ae=s,Ls.transition=i}}function OT(t,e,n,r){var s=ae,i=Ls.transition;Ls.transition=null;try{ae=4,gd(t,e,n,r)}finally{ae=s,Ls.transition=i}}function gd(t,e,n,r){if(ul){var s=sh(t,e,n,r);if(s===null)mc(t,e,r,cl,n),em(t,r);else if(DT(s,t,e,n,r))r.stopPropagation();else if(em(t,r),e&4&&-1<NT.indexOf(t)){for(;s!==null;){var i=Fo(s);if(i!==null&&c_(i),i=sh(t,e,n,r),i===null&&mc(t,e,r,cl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var cl=null;function sh(t,e,n,r){if(cl=null,t=dd(r),t=$r(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TT()){case fd:return 1;case o_:return 4;case al:case IT:return 16;case a_:return 536870912;default:return 16}default:return 16}}var nr=null,yd=null,ja=null;function g_(){if(ja)return ja;var t,e=yd,n=e.length,r,s="value"in nr?nr.value:nr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ja=s.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function nm(){return!1}function Rt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:nm,this.isPropagationStopped=nm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Rt(si),Mo=Te({},si,{view:0,detail:0}),LT=Rt(Mo),oc,ac,Di,Zl=Te({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(oc=t.screenX-Di.screenX,ac=t.screenY-Di.screenY):ac=oc=0,Di=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),rm=Rt(Zl),MT=Te({},Zl,{dataTransfer:0}),FT=Rt(MT),jT=Te({},Mo,{relatedTarget:0}),lc=Rt(jT),UT=Te({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),zT=Rt(UT),$T=Te({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BT=Rt($T),HT=Te({},si,{data:0}),sm=Rt(HT),WT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KT[t])?!!e[t]:!1}function vd(){return GT}var QT=Te({},Mo,{key:function(t){if(t.key){var e=WT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XT=Rt(QT),JT=Te({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Rt(JT),YT=Te({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),ZT=Rt(YT),eI=Te({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),tI=Rt(eI),nI=Te({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rI=Rt(nI),sI=[9,13,27,32],wd=kn&&"CompositionEvent"in window,Gi=null;kn&&"documentMode"in document&&(Gi=document.documentMode);var iI=kn&&"TextEvent"in window&&!Gi,y_=kn&&(!wd||Gi&&8<Gi&&11>=Gi),om=" ",am=!1;function __(t,e){switch(t){case"keyup":return sI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function oI(t,e){switch(t){case"compositionend":return v_(e);case"keypress":return e.which!==32?null:(am=!0,om);case"textInput":return t=e.data,t===om&&am?null:t;default:return null}}function aI(t,e){if(Ts)return t==="compositionend"||!wd&&__(t,e)?(t=g_(),ja=yd=nr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y_&&e.locale!=="ko"?null:e.data;default:return null}}var lI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lI[t.type]:e==="textarea"}function w_(t,e,n,r){Jy(r),e=hl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,fo=null;function uI(t){N_(t,0)}function eu(t){var e=As(t);if(Hy(e))return t}function cI(t,e){if(t==="change")return e}var E_=!1;if(kn){var uc;if(kn){var cc="oninput"in document;if(!cc){var um=document.createElement("div");um.setAttribute("oninput","return;"),cc=typeof um.oninput=="function"}uc=cc}else uc=!1;E_=uc&&(!document.documentMode||9<document.documentMode)}function cm(){Qi&&(Qi.detachEvent("onpropertychange",T_),fo=Qi=null)}function T_(t){if(t.propertyName==="value"&&eu(fo)){var e=[];w_(e,fo,t,dd(t)),t_(uI,e)}}function hI(t,e,n){t==="focusin"?(cm(),Qi=e,fo=n,Qi.attachEvent("onpropertychange",T_)):t==="focusout"&&cm()}function dI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(fo)}function fI(t,e){if(t==="click")return eu(e)}function pI(t,e){if(t==="input"||t==="change")return eu(e)}function mI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:mI;function po(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uc.call(e,s)||!Jt(t[s],e[s]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function I_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gI(t){var e=S_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I_(n.ownerDocument.documentElement,n)){if(r!==null&&Ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=dm(n,i);var o=dm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yI=kn&&"documentMode"in document&&11>=document.documentMode,Is=null,ih=null,Xi=null,oh=!1;function fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Is==null||Is!==sl(r)||(r=Is,"selectionStart"in r&&Ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&po(Xi,r)||(Xi=r,r=hl(ih,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},hc={},A_={};kn&&(A_=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function tu(t){if(hc[t])return hc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A_)return hc[t]=e[n];return t}var C_=tu("animationend"),k_=tu("animationiteration"),R_=tu("animationstart"),P_=tu("transitionend"),x_=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){x_.set(t,e),as(e,[t])}for(var dc=0;dc<pm.length;dc++){var fc=pm[dc],_I=fc.toLowerCase(),vI=fc[0].toUpperCase()+fc.slice(1);Cr(_I,"on"+vI)}Cr(C_,"onAnimationEnd");Cr(k_,"onAnimationIteration");Cr(R_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(P_,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wI=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_T(r,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;mm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;mm(s,l,h),i=u}}}if(ol)throw t=th,ol=!1,th=null,t}function de(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(D_(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),D_(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ea]){t[Ea]=!0,jy.forEach(function(n){n!=="selectionchange"&&(wI.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,pc("selectionchange",!1,e))}}function D_(t,e,n,r){switch(m_(e)){case 1:var s=bT;break;case 4:s=OT;break;default:s=gd}n=s.bind(null,e,n,t),s=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}t_(function(){var h=i,f=dd(n),p=[];e:{var g=x_.get(t);if(g!==void 0){var I=_d,P=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":I=XT;break;case"focusin":P="focus",I=lc;break;case"focusout":P="blur",I=lc;break;case"beforeblur":case"afterblur":I=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=FT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=ZT;break;case C_:case k_:case R_:I=zT;break;case P_:I=tI;break;case"scroll":I=LT;break;case"wheel":I=rI;break;case"copy":case"cut":case"paste":I=BT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=im}var D=(e&4)!==0,b=!D&&t==="scroll",C=D?g!==null?g+"Capture":null:g;D=[];for(var w=h,k;w!==null;){k=w;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,C!==null&&(x=lo(w,C),x!=null&&D.push(go(w,x,k)))),b)break;w=w.return}0<D.length&&(g=new I(g,P,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Yc&&(P=n.relatedTarget||n.fromElement)&&($r(P)||P[Rn]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(P=n.relatedTarget||n.toElement,I=h,P=P?$r(P):null,P!==null&&(b=ls(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(I=null,P=h),I!==P)){if(D=rm,x="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=im,x="onPointerLeave",C="onPointerEnter",w="pointer"),b=I==null?g:As(I),k=P==null?g:As(P),g=new D(x,w+"leave",I,n,f),g.target=b,g.relatedTarget=k,x=null,$r(f)===h&&(D=new D(C,w+"enter",P,n,f),D.target=k,D.relatedTarget=b,x=D),b=x,I&&P)t:{for(D=I,C=P,w=0,k=D;k;k=ps(k))w++;for(k=0,x=C;x;x=ps(x))k++;for(;0<w-k;)D=ps(D),w--;for(;0<k-w;)C=ps(C),k--;for(;w--;){if(D===C||C!==null&&D===C.alternate)break t;D=ps(D),C=ps(C)}D=null}else D=null;I!==null&&gm(p,g,I,D,!1),P!==null&&b!==null&&gm(p,b,P,D,!0)}}e:{if(g=h?As(h):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var M=cI;else if(lm(g))if(E_)M=pI;else{M=dI;var F=hI}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=fI);if(M&&(M=M(t,h))){w_(p,M,n,f);break e}F&&F(t,g,h),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Kc(g,"number",g.value)}switch(F=h?As(h):window,t){case"focusin":(lm(F)||F.contentEditable==="true")&&(Is=F,ih=h,Xi=null);break;case"focusout":Xi=ih=Is=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,fm(p,n,f);break;case"selectionchange":if(yI)break;case"keydown":case"keyup":fm(p,n,f)}var v;if(wd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ts?__(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(y_&&n.locale!=="ko"&&(Ts||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ts&&(v=g_()):(nr=f,yd="value"in nr?nr.value:nr.textContent,Ts=!0)),F=hl(h,y),0<F.length&&(y=new sm(y,t,null,n,f),p.push({event:y,listeners:F}),v?y.data=v:(v=v_(n),v!==null&&(y.data=v)))),(v=iI?oI(t,n):aI(t,n))&&(h=hl(h,"onBeforeInput"),0<h.length&&(f=new sm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}N_(p,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=lo(t,n),i!=null&&r.unshift(go(t,i,s)),i=lo(t,e),i!=null&&r.push(go(t,i,s))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=lo(n,i),u!=null&&o.unshift(go(n,u,l))):s||(u=lo(n,i),u!=null&&o.push(go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EI=/\r\n?/g,TI=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(EI,`
`).replace(TI,"")}function Ta(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(j(425))}function dl(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,II=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,SI=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(AI)}:ch;function AI(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ho(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),rn="__reactFiber$"+ii,yo="__reactProps$"+ii,Rn="__reactContainer$"+ii,hh="__reactEvents$"+ii,CI="__reactListeners$"+ii,kI="__reactHandles$"+ii;function $r(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[rn])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[rn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function nu(t){return t[yo]||null}var dh=[],Cs=-1;function kr(t){return{current:t}}function me(t){0>Cs||(t.current=dh[Cs],dh[Cs]=null,Cs--)}function ce(t,e){Cs++,dh[Cs]=t.current,t.current=e}var _r={},it=kr(_r),_t=kr(!1),Xr=_r;function qs(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function fl(){me(_t),me(it)}function wm(t,e,n){if(it.current!==_r)throw Error(j(168));ce(it,e),ce(_t,n)}function V_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,hT(t)||"Unknown",s));return Te({},n,r)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Xr=it.current,ce(it,t),ce(_t,_t.current),!0}function Em(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=V_(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,me(_t),me(it),ce(it,t)):me(_t),ce(_t,n)}var yn=null,ru=!1,yc=!1;function b_(t){yn===null?yn=[t]:yn.push(t)}function RI(t){ru=!0,b_(t)}function Rr(){if(!yc&&yn!==null){yc=!0;var t=0,e=ae;try{var n=yn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,ru=!1}catch(s){throw yn!==null&&(yn=yn.slice(t+1)),i_(fd,Rr),s}finally{ae=e,yc=!1}}return null}var ks=[],Rs=0,ml=null,gl=0,xt=[],Nt=0,Jr=null,_n=1,vn="";function jr(t,e){ks[Rs++]=gl,ks[Rs++]=ml,ml=t,gl=e}function O_(t,e,n){xt[Nt++]=_n,xt[Nt++]=vn,xt[Nt++]=Jr,Jr=t;var r=_n;t=vn;var s=32-Gt(r)-1;r&=~(1<<s),n+=1;var i=32-Gt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,_n=1<<32-Gt(e)+s|n<<s|r,vn=i+t}else _n=1<<i|n<<s|r,vn=t}function Td(t){t.return!==null&&(jr(t,1),O_(t,1,0))}function Id(t){for(;t===ml;)ml=ks[--Rs],ks[Rs]=null,gl=ks[--Rs],ks[Rs]=null;for(;t===Jr;)Jr=xt[--Nt],xt[Nt]=null,vn=xt[--Nt],xt[Nt]=null,_n=xt[--Nt],xt[Nt]=null}var At=null,It=null,_e=!1,Wt=null;function L_(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,It=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,It=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(_e){var e=It;if(e){var n=e;if(!Tm(t,e)){if(fh(t))throw Error(j(418));e=ar(n.nextSibling);var r=At;e&&Tm(t,e)?L_(r,n):(t.flags=t.flags&-4097|2,_e=!1,At=t)}}else{if(fh(t))throw Error(j(418));t.flags=t.flags&-4097|2,_e=!1,At=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Ia(t){if(t!==At)return!1;if(!_e)return Im(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=It)){if(fh(t))throw M_(),Error(j(418));for(;e;)L_(t,e),e=ar(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=At?ar(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=It;t;)t=ar(t.nextSibling)}function Ks(){It=At=null,_e=!1}function Sd(t){Wt===null?Wt=[t]:Wt.push(t)}var PI=Mn.ReactCurrentBatchConfig;function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sm(t){var e=t._init;return e(t._payload)}function F_(t){function e(C,w){if(t){var k=C.deletions;k===null?(C.deletions=[w],C.flags|=16):k.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function s(C,w){return C=hr(C,w),C.index=0,C.sibling=null,C}function i(C,w,k){return C.index=k,t?(k=C.alternate,k!==null?(k=k.index,k<w?(C.flags|=2,w):k):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,w,k,x){return w===null||w.tag!==6?(w=Sc(k,C.mode,x),w.return=C,w):(w=s(w,k),w.return=C,w)}function u(C,w,k,x){var M=k.type;return M===Es?f(C,w,k.props.children,x,k.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Sm(M)===w.type)?(x=s(w,k.props),x.ref=Vi(C,w,k),x.return=C,x):(x=Ka(k.type,k.key,k.props,null,C.mode,x),x.ref=Vi(C,w,k),x.return=C,x)}function h(C,w,k,x){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Ac(k,C.mode,x),w.return=C,w):(w=s(w,k.children||[]),w.return=C,w)}function f(C,w,k,x,M){return w===null||w.tag!==7?(w=Kr(k,C.mode,x,M),w.return=C,w):(w=s(w,k),w.return=C,w)}function p(C,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Sc(""+w,C.mode,k),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return k=Ka(w.type,w.key,w.props,null,C.mode,k),k.ref=Vi(C,null,w),k.return=C,k;case ws:return w=Ac(w,C.mode,k),w.return=C,w;case Gn:var x=w._init;return p(C,x(w._payload),k)}if(ji(w)||Ri(w))return w=Kr(w,C.mode,k,null),w.return=C,w;Sa(C,w)}return null}function g(C,w,k,x){var M=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(C,w,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case fa:return k.key===M?u(C,w,k,x):null;case ws:return k.key===M?h(C,w,k,x):null;case Gn:return M=k._init,g(C,w,M(k._payload),x)}if(ji(k)||Ri(k))return M!==null?null:f(C,w,k,x,null);Sa(C,k)}return null}function I(C,w,k,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(k)||null,l(w,C,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fa:return C=C.get(x.key===null?k:x.key)||null,u(w,C,x,M);case ws:return C=C.get(x.key===null?k:x.key)||null,h(w,C,x,M);case Gn:var F=x._init;return I(C,w,k,F(x._payload),M)}if(ji(x)||Ri(x))return C=C.get(k)||null,f(w,C,x,M,null);Sa(w,x)}return null}function P(C,w,k,x){for(var M=null,F=null,v=w,y=w=0,_=null;v!==null&&y<k.length;y++){v.index>y?(_=v,v=null):_=v.sibling;var S=g(C,v,k[y],x);if(S===null){v===null&&(v=_);break}t&&v&&S.alternate===null&&e(C,v),w=i(S,w,y),F===null?M=S:F.sibling=S,F=S,v=_}if(y===k.length)return n(C,v),_e&&jr(C,y),M;if(v===null){for(;y<k.length;y++)v=p(C,k[y],x),v!==null&&(w=i(v,w,y),F===null?M=v:F.sibling=v,F=v);return _e&&jr(C,y),M}for(v=r(C,v);y<k.length;y++)_=I(v,C,y,k[y],x),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?y:_.key),w=i(_,w,y),F===null?M=_:F.sibling=_,F=_);return t&&v.forEach(function(A){return e(C,A)}),_e&&jr(C,y),M}function D(C,w,k,x){var M=Ri(k);if(typeof M!="function")throw Error(j(150));if(k=M.call(k),k==null)throw Error(j(151));for(var F=M=null,v=w,y=w=0,_=null,S=k.next();v!==null&&!S.done;y++,S=k.next()){v.index>y?(_=v,v=null):_=v.sibling;var A=g(C,v,S.value,x);if(A===null){v===null&&(v=_);break}t&&v&&A.alternate===null&&e(C,v),w=i(A,w,y),F===null?M=A:F.sibling=A,F=A,v=_}if(S.done)return n(C,v),_e&&jr(C,y),M;if(v===null){for(;!S.done;y++,S=k.next())S=p(C,S.value,x),S!==null&&(w=i(S,w,y),F===null?M=S:F.sibling=S,F=S);return _e&&jr(C,y),M}for(v=r(C,v);!S.done;y++,S=k.next())S=I(v,C,y,S.value,x),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?y:S.key),w=i(S,w,y),F===null?M=S:F.sibling=S,F=S);return t&&v.forEach(function(R){return e(C,R)}),_e&&jr(C,y),M}function b(C,w,k,x){if(typeof k=="object"&&k!==null&&k.type===Es&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case fa:e:{for(var M=k.key,F=w;F!==null;){if(F.key===M){if(M=k.type,M===Es){if(F.tag===7){n(C,F.sibling),w=s(F,k.props.children),w.return=C,C=w;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Sm(M)===F.type){n(C,F.sibling),w=s(F,k.props),w.ref=Vi(C,F,k),w.return=C,C=w;break e}n(C,F);break}else e(C,F);F=F.sibling}k.type===Es?(w=Kr(k.props.children,C.mode,x,k.key),w.return=C,C=w):(x=Ka(k.type,k.key,k.props,null,C.mode,x),x.ref=Vi(C,w,k),x.return=C,C=x)}return o(C);case ws:e:{for(F=k.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(C,w.sibling),w=s(w,k.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=Ac(k,C.mode,x),w.return=C,C=w}return o(C);case Gn:return F=k._init,b(C,w,F(k._payload),x)}if(ji(k))return P(C,w,k,x);if(Ri(k))return D(C,w,k,x);Sa(C,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(C,w.sibling),w=s(w,k),w.return=C,C=w):(n(C,w),w=Sc(k,C.mode,x),w.return=C,C=w),o(C)):n(C,w)}return b}var Gs=F_(!0),j_=F_(!1),yl=kr(null),_l=null,Ps=null,Ad=null;function Cd(){Ad=Ps=_l=null}function kd(t){var e=yl.current;me(yl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){_l=t,Ad=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(_l===null)throw Error(j(308));Ps=t,_l.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Br=null;function Rd(t){Br===null?Br=[t]:Br.push(t)}function U_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Rd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Pn(t,n)}return s=r.interleaved,s===null?(e.next=e,Rd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Pn(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}function Am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,r){var s=t.updateQueue;Qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(g=e,I=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){p=P.call(I,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,g=typeof P=="function"?P.call(I,p,g):P,g==null)break e;p=Te({},p,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=p):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=p}}function Cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var jo={},on=kr(jo),_o=kr(jo),vo=kr(jo);function Hr(t){if(t===jo)throw Error(j(174));return t}function xd(t,e){switch(ce(vo,e),ce(_o,t),ce(on,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}me(on),ce(on,e)}function Qs(){me(on),me(_o),me(vo)}function $_(t){Hr(vo.current);var e=Hr(on.current),n=Qc(e,t.type);e!==n&&(ce(_o,t),ce(on,n))}function Nd(t){_o.current===t&&(me(on),me(_o))}var we=kr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Dd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var $a=Mn.ReactCurrentDispatcher,vc=Mn.ReactCurrentBatchConfig,Yr=0,Ee=null,be=null,Ue=null,El=!1,Ji=!1,wo=0,xI=0;function Ye(){throw Error(j(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function bd(t,e,n,r,s,i){if(Yr=i,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?bI:OI,t=n(r,s),Ji){i=0;do{if(Ji=!1,wo=0,25<=i)throw Error(j(301));i+=1,Ue=be=null,e.updateQueue=null,$a.current=LI,t=n(r,s)}while(Ji)}if($a.current=Tl,e=be!==null&&be.next!==null,Yr=0,Ue=be=Ee=null,El=!1,e)throw Error(j(300));return t}function Od(){var t=wo!==0;return wo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ee.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ft(){if(be===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?Ee.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(j(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?Ee.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Eo(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=f,Zr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ee.lanes|=i,Zr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Ft(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Jt(i,e.memoizedState)||(yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function B_(){}function H_(t,e){var n=Ee,r=Ft(),s=e(),i=!Jt(r.memoizedState,s);if(i&&(r.memoizedState=s,yt=!0),r=r.queue,Ld(K_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,To(9,q_.bind(null,n,r,s,e),void 0,null),ze===null)throw Error(j(349));Yr&30||W_(n,e,s)}return s}function W_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&Q_(t)}function K_(t,e,n){return n(function(){G_(e)&&Q_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function Q_(t){var e=Pn(t,1);e!==null&&Qt(e,t,1,-1)}function km(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=VI.bind(null,Ee,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X_(){return Ft().memoizedState}function Ba(t,e,n,r){var s=tn();Ee.flags|=t,s.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var s=Ft();r=r===void 0?null:r;var i=void 0;if(be!==null){var o=be.memoizedState;if(i=o.destroy,r!==null&&Vd(r,o.deps)){s.memoizedState=To(e,n,i,r);return}}Ee.flags|=t,s.memoizedState=To(1|e,n,i,r)}function Rm(t,e){return Ba(8390656,8,t,e)}function Ld(t,e){return su(2048,8,t,e)}function J_(t,e){return su(4,2,t,e)}function Y_(t,e){return su(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ev(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,Z_.bind(null,e,t),n)}function Md(){}function tv(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nv(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Yr&21?(Jt(n,e)||(n=l_(),Ee.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function NI(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{ae=n,vc.transition=r}}function sv(){return Ft().memoizedState}function DI(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))ov(e,n);else if(n=U_(t,e,n,r),n!==null){var s=ht();Qt(n,t,r,s),av(n,e,r)}}function VI(t,e,n){var r=cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))ov(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(s.next=s,Rd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=U_(t,e,s,r),n!==null&&(s=ht(),Qt(n,t,r,s),av(n,e,r))}}function iv(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function ov(t,e){Ji=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function av(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}var Tl={readContext:Mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},bI={readContext:Mt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:Md,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=NI.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,s=tn();if(_e){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),ze===null)throw Error(j(349));Yr&30||W_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rm(K_.bind(null,r,i,t),[t]),r.flags|=2048,To(9,q_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=tn(),e=ze.identifierPrefix;if(_e){var n=vn,r=_n;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OI={readContext:Mt,useCallback:tv,useContext:Mt,useEffect:Ld,useImperativeHandle:ev,useInsertionEffect:J_,useLayoutEffect:Y_,useMemo:nv,useReducer:wc,useRef:X_,useState:function(){return wc(Eo)},useDebugValue:Md,useDeferredValue:function(t){var e=Ft();return rv(e,be.memoizedState,t)},useTransition:function(){var t=wc(Eo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:H_,useId:sv,unstable_isNewReconciler:!1},LI={readContext:Mt,useCallback:tv,useContext:Mt,useEffect:Ld,useImperativeHandle:ev,useInsertionEffect:J_,useLayoutEffect:Y_,useMemo:nv,useReducer:Ec,useRef:X_,useState:function(){return Ec(Eo)},useDebugValue:Md,useDeferredValue:function(t){var e=Ft();return be===null?e.memoizedState=t:rv(e,be.memoizedState,t)},useTransition:function(){var t=Ec(Eo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:H_,useId:sv,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),s=cr(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(Qt(e,t,s,r),za(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),s=cr(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(Qt(e,t,s,r),za(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=cr(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=lr(t,s,r),e!==null&&(Qt(e,t,r,n),za(e,t,r))}};function Pm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(s,i):!0}function lv(t,e,n){var r=!1,s=_r,i=e.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(s=vt(e)?Xr:it.current,r=e.contextTypes,i=(r=r!=null)?qs(t,s):_r),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Pd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Mt(i):(i=vt(e)?Xr:it.current,s.context=qs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&iu.enqueueReplaceState(s,s.state,null),vl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=cT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MI=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,Rh=r),_h(t,e)},n}function cv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){_h(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=JI.bind(null,t,e,n),e.then(t,t))}function Dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var FI=Mn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?j_(e,null,n,r):Gs(e,t.child,n,r)}function bm(t,e,n,r,s){n=n.render;var i=e.ref;return Ms(e,s),r=bd(t,e,n,r,i,s),n=Od(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(_e&&n&&Td(e),e.flags|=1,ct(t,e,r,s),e.child)}function Om(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Wd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,hv(t,e,i,r,s)):(t=Ka(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return xn(t,e,s)}return e.flags|=1,t=hr(i,r),t.ref=e.ref,t.return=e,e.child=t}function hv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(po(i,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,xn(t,e,s)}return vh(t,e,n,r,s)}function dv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ns,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ns,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(Ns,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ce(Ns,Tt),Tt|=r;return ct(t,e,s,n),e.child}function fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,s){var i=vt(n)?Xr:it.current;return i=qs(e,i),Ms(e,s),n=bd(t,e,n,r,i,s),r=Od(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(_e&&r&&Td(e),e.flags|=1,ct(t,e,n,s),e.child)}function Lm(t,e,n,r,s){if(vt(n)){var i=!0;pl(e)}else i=!1;if(Ms(e,s),e.stateNode===null)Ha(t,e),lv(e,n,r),yh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Mt(h):(h=vt(n)?Xr:it.current,h=qs(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&xm(e,o,r,h),Qn=!1;var g=e.memoizedState;o.state=g,vl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||_t.current||Qn?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(l=Qn||Pm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Bt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=vt(n)?Xr:it.current,u=qs(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&xm(e,o,r,u),Qn=!1,g=e.memoizedState,o.state=g,vl(e,r,o,s);var P=e.memoizedState;l!==p||g!==P||_t.current||Qn?(typeof I=="function"&&(gh(e,n,I,r),P=e.memoizedState),(h=Qn||Pm(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,i,s)}function wh(t,e,n,r,s,i){fv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Em(e,n,!1),xn(t,e,i);r=e.stateNode,FI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,i),e.child=Gs(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&Em(e,n,!0),e.child}function pv(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),xd(t,e.containerInfo)}function Mm(t,e,n,r,s){return Ks(),Sd(s),e.flags|=256,ct(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function mv(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ce(we,s&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=lu(o,r,0,null),t=Kr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Th(n),e.memoizedState=Eh,t):Fd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=hr(l,i):(i=Kr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return i=t.child,t=i.sibling,r=hr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&Sd(r),Gs(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(j(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=lu({mode:"visible",children:r.children},s,0,null),i=Kr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=Eh,i);if(!(e.mode&1))return Aa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Tc(i,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Pn(t,s),Qt(r,t,s,-1))}return Hd(),r=Tc(Error(j(421))),Aa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=YI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,It=ar(s.nextSibling),At=e,_e=!0,Wt=null,t!==null&&(xt[Nt++]=_n,xt[Nt++]=vn,xt[Nt++]=Jr,_n=t.id,vn=t.overflow,Jr=e),e=Fd(e,r.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function Ic(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function gv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ic(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&wl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ic(e,!0,n,null,i);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UI(t,e,n){switch(e.tag){case 3:pv(e),Ks();break;case 5:$_(e);break;case 1:vt(e.type)&&pl(e);break;case 4:xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ce(yl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?mv(t,e,n):(ce(we,we.current&1),t=xn(t,e,n),t!==null?t.sibling:null);ce(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ce(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,dv(t,e,n)}return xn(t,e,n)}var yv,Ih,_v,vv;yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};_v=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Hr(on.current);var i=null;switch(n){case"input":s=Wc(t,s),r=Wc(t,r),i=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":s=Gc(t,s),r=Gc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=dl)}Xc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(oo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};vv=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zI(t,e,n){var r=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&fl(),Ze(e),null;case 3:return r=e.stateNode,Qs(),me(_t),me(it),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Nh(Wt),Wt=null))),Ih(t,e),Ze(e),null;case 5:Nd(e);var s=Hr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)_v(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ze(e),null}if(t=Hr(on.current),Ia(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[rn]=e,r[yo]=i,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(s=0;s<zi.length;s++)de(zi[s],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Kp(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":Qp(r,i),de("invalid",r)}Xc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),s=["children",""+l]):oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":pa(r),Gp(r,i,!0);break;case"textarea":pa(r),Xp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=dl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ky(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[yo]=r,yv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jc(n,r),n){case"dialog":de("cancel",t),de("close",t),s=r;break;case"iframe":case"object":case"embed":de("load",t),s=r;break;case"video":case"audio":for(s=0;s<zi.length;s++)de(zi[s],t);s=r;break;case"source":de("error",t),s=r;break;case"img":case"image":case"link":de("error",t),de("load",t),s=r;break;case"details":de("toggle",t),s=r;break;case"input":Kp(t,r),s=Wc(t,r),de("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),de("invalid",t);break;case"textarea":Qp(t,r),s=Gc(t,r),de("invalid",t);break;default:s=r}Xc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Xy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ao(t,u):typeof u=="number"&&ao(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&de("scroll",t):u!=null&&ld(t,i,u,o))}switch(n){case"input":pa(t),Gp(t,r,!1);break;case"textarea":pa(t),Xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Vs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)vv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Hr(vo.current),Hr(on.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(i=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return Ze(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&It!==null&&e.mode&1&&!(e.flags&128))M_(),Ks(),e.flags|=98560,i=!1;else if(i=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[rn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),i=!1}else Wt!==null&&(Nh(Wt),Wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):Hd())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Qs(),Ih(t,e),t===null&&mo(e.stateNode.containerInfo),Ze(e),null;case 10:return kd(e.type._context),Ze(e),null;case 17:return vt(e.type)&&fl(),Ze(e),null;case 19:if(me(we),i=e.memoizedState,i===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)bi(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,bi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>Js&&(e.flags|=128,r=!0,bi(i,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return Ze(e),null}else 2*Re()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,bi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=we.current,ce(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function $I(t,e){switch(Id(e),e.tag){case 1:return vt(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),me(_t),me(it),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Qs(),null;case 10:return kd(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var Ca=!1,nt=!1,BI=typeof WeakSet=="function"?WeakSet:Set,B=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Sh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var jm=!1;function HI(t,e){if(ah=ul,t=S_(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var I;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)g=p,p=I;for(;;){if(p===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},ul=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,b=P.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?D:Bt(e.type,D),b);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){Se(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=jm,jm=!1,P}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Sh(e,n,i)}s=s.next}while(s!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[yo],delete e[hh],delete e[CI],delete e[kI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function Um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}var Be=null,Ht=!1;function qn(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:nt||xs(n,e);case 6:var r=Be,s=Ht;Be=null,qn(t,e,n),Be=r,Ht=s,Be!==null&&(Ht?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ht?(t=Be,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),ho(t)):gc(Be,n.stateNode));break;case 4:r=Be,s=Ht,Be=n.stateNode.containerInfo,Ht=!0,qn(t,e,n),Be=r,Ht=s;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Sh(n,e,o),s=s.next}while(s!==r)}qn(t,e,n);break;case 1:if(!nt&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,qn(t,e,n),nt=r):qn(t,e,n);break;default:qn(t,e,n)}}function zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BI),e.forEach(function(r){var s=ZI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ht=!1;break e;case 3:Be=l.stateNode.containerInfo,Ht=!0;break e;case 4:Be=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(Be===null)throw Error(j(160));Tv(i,o,s),Be=null,Ht=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Se(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),en(t),r&4){try{Yi(3,t,t.return),ou(3,t)}catch(D){Se(t,t.return,D)}try{Yi(5,t,t.return)}catch(D){Se(t,t.return,D)}}break;case 1:Ut(e,t),en(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(Ut(e,t),en(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var s=t.stateNode;try{ao(s,"")}catch(D){Se(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Wy(s,i),Jc(l,o);var h=Jc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Xy(s,p):f==="dangerouslySetInnerHTML"?Gy(s,p):f==="children"?ao(s,p):ld(s,f,p,h)}switch(l){case"input":qc(s,i);break;case"textarea":qy(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Vs(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?Vs(s,!!i.multiple,i.defaultValue,!0):Vs(s,!!i.multiple,i.multiple?[]:"",!1))}s[yo]=i}catch(D){Se(t,t.return,D)}}break;case 6:if(Ut(e,t),en(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(D){Se(t,t.return,D)}}break;case 3:if(Ut(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(D){Se(t,t.return,D)}break;case 4:Ut(e,t),en(t);break;case 13:Ut(e,t),en(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(zd=Re())),r&4&&zm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(h=nt)||f,Ut(e,t),nt=h):Ut(e,t),en(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(p=B=f;B!==null;){switch(g=B,I=g.child,g.tag){case 0:case 11:case 14:case 15:Yi(4,g,g.return);break;case 1:xs(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){Se(r,n,D)}}break;case 5:xs(g,g.return);break;case 22:if(g.memoizedState!==null){Bm(p);continue}}I!==null?(I.return=g,B=I):Bm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qy("display",o))}catch(D){Se(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Se(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),en(t),r&4&&zm(t);break;case 21:break;default:Ut(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ao(s,""),r.flags&=-33);var i=Um(t);kh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Um(t);Ch(t,l,o);break;default:throw Error(j(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WI(t,e,n){B=t,Sv(t)}function Sv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ca;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||nt;l=Ca;var h=nt;if(Ca=o,(nt=u)&&!h)for(B=s;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Hm(s):u!==null?(u.return=o,B=u):Hm(s);for(;i!==null;)B=i,Sv(i),i=i.sibling;B=s,Ca=l,nt=h}$m(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,B=i):$m(t)}}function $m(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Cm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}nt||e.flags&512&&Ah(e)}catch(g){Se(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Bm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Hm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Se(e,s,u)}}var i=e.return;try{Ah(e)}catch(u){Se(e,i,u)}break;case 5:var o=e.return;try{Ah(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var qI=Math.ceil,Il=Mn.ReactCurrentDispatcher,jd=Mn.ReactCurrentOwner,Ot=Mn.ReactCurrentBatchConfig,ie=0,ze=null,xe=null,Ke=0,Tt=0,Ns=kr(0),Le=0,Io=null,Zr=0,au=0,Ud=0,Zi=null,mt=null,zd=0,Js=1/0,gn=null,Sl=!1,Rh=null,ur=null,ka=!1,rr=null,Al=0,eo=0,Ph=null,Wa=-1,qa=0;function ht(){return ie&6?Re():Wa!==-1?Wa:Wa=Re()}function cr(t){return t.mode&1?ie&2&&Ke!==0?Ke&-Ke:PI.transition!==null?(qa===0&&(qa=l_()),qa):(t=ae,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t):1}function Qt(t,e,n,r){if(50<eo)throw eo=0,Ph=null,Error(j(185));Lo(t,n,r),(!(ie&2)||t!==ze)&&(t===ze&&(!(ie&2)&&(au|=n),Le===4&&Jn(t,Ke)),wt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Js=Re()+500,ru&&Rr()))}function wt(t,e){var n=t.callbackNode;PT(t,e);var r=ll(t,t===ze?Ke:0);if(r===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?RI(Wm.bind(null,t)):b_(Wm.bind(null,t)),SI(function(){!(ie&6)&&Rr()}),n=null;else{switch(u_(r)){case 1:n=fd;break;case 4:n=o_;break;case 16:n=al;break;case 536870912:n=a_;break;default:n=al}n=Dv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(Wa=-1,qa=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=ll(t,t===ze?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cl(t,r);else{e=r;var s=ie;ie|=2;var i=kv();(ze!==t||Ke!==e)&&(gn=null,Js=Re()+500,qr(t,e));do try{QI();break}catch(l){Cv(t,l)}while(!0);Cd(),Il.current=i,ie=s,xe!==null?e=0:(ze=null,Ke=0,e=Le)}if(e!==0){if(e===2&&(s=nh(t),s!==0&&(r=s,e=xh(t,s))),e===1)throw n=Io,qr(t,0),Jn(t,r),wt(t,Re()),n;if(e===6)Jn(t,r);else{if(s=t.current.alternate,!(r&30)&&!KI(s)&&(e=Cl(t,r),e===2&&(i=nh(t),i!==0&&(r=i,e=xh(t,i))),e===1))throw n=Io,qr(t,0),Jn(t,r),wt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Ur(t,mt,gn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=zd+500-Re(),10<e)){if(ll(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ch(Ur.bind(null,t,mt,gn),e);break}Ur(t,mt,gn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Gt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qI(r/1960))-r,10<r){t.timeoutHandle=ch(Ur.bind(null,t,mt,gn),r);break}Ur(t,mt,gn);break;case 5:Ur(t,mt,gn);break;default:throw Error(j(329))}}}return wt(t,Re()),t.callbackNode===n?Av.bind(null,t):null}function xh(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=mt,mt=n,e!==null&&Nh(e)),t}function Nh(t){mt===null?mt=t:mt.push.apply(mt,t)}function KI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Jt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~Ud,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Wm(t){if(ie&6)throw Error(j(327));Fs();var e=ll(t,0);if(!(e&1))return wt(t,Re()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=Io,qr(t,0),Jn(t,e),wt(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mt,gn),wt(t,Re()),null}function $d(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Js=Re()+500,ru&&Rr())}}function es(t){rr!==null&&rr.tag===0&&!(ie&6)&&Fs();var e=ie;ie|=1;var n=Ot.transition,r=ae;try{if(Ot.transition=null,ae=1,t)return t()}finally{ae=r,Ot.transition=n,ie=e,!(ie&6)&&Rr()}}function Bd(){Tt=Ns.current,me(Ns)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,II(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Qs(),me(_t),me(it),Dd();break;case 5:Nd(r);break;case 4:Qs();break;case 13:me(we);break;case 19:me(we);break;case 10:kd(r.type._context);break;case 22:case 23:Bd()}n=n.return}if(ze=t,xe=t=hr(t.current,null),Ke=Tt=e,Le=0,Io=null,Ud=au=Zr=0,mt=Zi=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Br=null}return t}function Cv(t,e){do{var n=xe;try{if(Cd(),$a.current=Tl,El){for(var r=Ee.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}El=!1}if(Yr=0,Ue=be=Ee=null,Ji=!1,wo=0,jd.current=null,n===null||n.return===null){Le=1,Io=e,xe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Dm(o);if(I!==null){I.flags&=-257,Vm(I,o,l,i,e),I.mode&1&&Nm(i,h,e),e=I,u=h;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){Nm(i,h,e),Hd();break e}u=Error(j(426))}}else if(_e&&l.mode&1){var b=Dm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Vm(b,o,l,i,e),Sd(Xs(u,l));break e}}i=u=Xs(u,l),Le!==4&&(Le=2),Zi===null?Zi=[i]:Zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=uv(i,u,e);Am(i,C);break e;case 1:l=u;var w=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ur===null||!ur.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=cv(i,l,e);Am(i,x);break e}}i=i.return}while(i!==null)}Pv(n)}catch(M){e=M,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function kv(){var t=Il.current;return Il.current=Tl,t===null?Tl:t}function Hd(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(Zr&268435455)&&!(au&268435455)||Jn(ze,Ke)}function Cl(t,e){var n=ie;ie|=2;var r=kv();(ze!==t||Ke!==e)&&(gn=null,qr(t,e));do try{GI();break}catch(s){Cv(t,s)}while(!0);if(Cd(),ie=n,Il.current=r,xe!==null)throw Error(j(261));return ze=null,Ke=0,Le}function GI(){for(;xe!==null;)Rv(xe)}function QI(){for(;xe!==null&&!wT();)Rv(xe)}function Rv(t){var e=Nv(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Pv(t):xe=e,jd.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$I(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,xe=null;return}}else if(n=zI(n,e,Tt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Le===0&&(Le=5)}function Ur(t,e,n){var r=ae,s=Ot.transition;try{Ot.transition=null,ae=1,XI(t,e,n,r)}finally{Ot.transition=s,ae=r}return null}function XI(t,e,n,r){do Fs();while(rr!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(xT(t,i),t===ze&&(xe=ze=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Dv(al,function(){return Fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var o=ae;ae=1;var l=ie;ie|=4,jd.current=null,HI(t,n),Iv(n,t),gI(lh),ul=!!ah,lh=ah=null,t.current=n,WI(n),ET(),ie=l,ae=o,Ot.transition=i}else t.current=n;if(ka&&(ka=!1,rr=t,Al=s),i=t.pendingLanes,i===0&&(ur=null),ST(n.stateNode),wt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Sl)throw Sl=!1,t=Rh,Rh=null,t;return Al&1&&t.tag!==0&&Fs(),i=t.pendingLanes,i&1?t===Ph?eo++:(eo=0,Ph=t):eo=0,Rr(),null}function Fs(){if(rr!==null){var t=u_(Al),e=Ot.transition,n=ae;try{if(Ot.transition=null,ae=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,Al=0,ie&6)throw Error(j(331));var s=ie;for(ie|=4,B=t.current;B!==null;){var i=B,o=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Yi(8,f,i)}var p=f.child;if(p!==null)p.return=f,B=p;else for(;B!==null;){f=B;var g=f.sibling,I=f.return;if(wv(f),f===h){B=null;break}if(g!==null){g.return=I,B=g;break}B=I}}}var P=i.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}B=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,B=o;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yi(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,B=C;break e}B=i.return}}var w=t.current;for(B=w;B!==null;){o=B;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,B=k;else e:for(o=w;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(M){Se(l,l.return,M)}if(l===o){B=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,B=x;break e}B=l.return}}if(ie=s,Rr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Yl,t)}catch{}r=!0}return r}finally{ae=n,Ot.transition=e}}return!1}function qm(t,e,n){e=Xs(n,e),e=uv(t,e,1),t=lr(t,e,1),e=ht(),t!==null&&(Lo(t,1,e),wt(t,e))}function Se(t,e,n){if(t.tag===3)qm(t,t,n);else for(;e!==null;){if(e.tag===3){qm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Xs(n,t),t=cv(e,t,1),e=lr(e,t,1),t=ht(),e!==null&&(Lo(e,1,t),wt(e,t));break}}e=e.return}}function JI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ke&n)===n&&(Le===4||Le===3&&(Ke&130023424)===Ke&&500>Re()-zd?qr(t,0):Ud|=n),wt(t,e)}function xv(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=ht();t=Pn(t,e),t!==null&&(Lo(t,e,n),wt(t,n))}function YI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xv(t,n)}function ZI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),xv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,UI(t,e,n);yt=!!(t.flags&131072)}else yt=!1,_e&&e.flags&1048576&&O_(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ha(t,e),t=e.pendingProps;var s=qs(e,it.current);Ms(e,n),s=bd(null,e,r,t,s,n);var i=Od();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,pl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Pd(e),s.updater=iu,e.stateNode=s,s._reactInternals=e,yh(e,r,t,n),e=wh(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&Td(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=t1(r),t=Bt(r,t),s){case 0:e=vh(null,e,r,t,n);break e;case 1:e=Lm(null,e,r,t,n);break e;case 11:e=bm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,Bt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),vh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),Lm(t,e,r,s,n);case 3:e:{if(pv(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,z_(t,e),vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(j(423)),e),e=Mm(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(j(424)),e),e=Mm(t,e,r,n,s);break e}else for(It=ar(e.stateNode.containerInfo.firstChild),At=e,_e=!0,Wt=null,n=j_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===s){e=xn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return $_(e),t===null&&ph(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,uh(r,s)?o=null:i!==null&&uh(r,i)&&(e.flags|=32),fv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return mv(t,e,n);case 4:return xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),bm(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ce(yl,r._currentValue),r._currentValue=o,i!==null)if(Jt(i.value,o)){if(i.children===s.children&&!_t.current){e=xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),mh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ms(e,n),s=Mt(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=Bt(r,e.pendingProps),s=Bt(r.type,s),Om(t,e,r,s,n);case 15:return hv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),Ha(t,e),e.tag=1,vt(r)?(t=!0,pl(e)):t=!1,Ms(e,n),lv(e,r,s),yh(e,r,s,n),wh(null,e,r,!0,t,n);case 19:return gv(t,e,n);case 22:return dv(t,e,n)}throw Error(j(156,e.tag))};function Dv(t,e){return i_(t,e)}function e1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new e1(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t1(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===hd)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Kr(n.children,s,i,e);case ud:o=8,s|=8;break;case zc:return t=bt(12,n,e,s|2),t.elementType=zc,t.lanes=i,t;case $c:return t=bt(13,n,e,s),t.elementType=$c,t.lanes=i,t;case Bc:return t=bt(19,n,e,s),t.elementType=Bc,t.lanes=i,t;case $y:return lu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uy:o=10;break e;case zy:o=9;break e;case cd:o=11;break e;case hd:o=14;break e;case Gn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Kr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=bt(22,t,r,e),t.elementType=$y,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function n1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,r,s,i,o,l,u){return t=new n1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(i),t}function r1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return _r;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(vt(n))return V_(t,n,e)}return e}function bv(t,e,n,r,s,i,o,l,u){return t=qd(n,r,!0,t,s,i,o,l,u),t.context=Vv(null),n=t.current,r=ht(),s=cr(n),i=Sn(r,s),i.callback=e??null,lr(n,i,s),t.current.lanes=s,Lo(t,s,r),wt(t,r),t}function uu(t,e,n,r){var s=e.current,i=ht(),o=cr(s);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(s,e,o),t!==null&&(Qt(t,s,o,i),za(t,s,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){Km(t,e),(t=t.alternate)&&Km(t,e)}function s1(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}cu.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));uu(t,e,null,null)};cu.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){uu(null,t,null,null)}),e[Rn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=d_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&p_(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function i1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=kl(o);i.call(h)}}var o=bv(e,r,t,0,null,!1,!1,"",Gm);return t._reactRootContainer=o,t[Rn]=o.current,mo(t.nodeType===8?t.parentNode:t),es(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=kl(u);l.call(h)}}var u=qd(t,0,!1,null,null,!1,!1,"",Gm);return t._reactRootContainer=u,t[Rn]=u.current,mo(t.nodeType===8?t.parentNode:t),es(function(){uu(e,u,n,r)}),u}function du(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=kl(o);l.call(u)}}uu(e,o,t,s)}else o=i1(n,e,t,s,r);return kl(o)}c_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ui(e.pendingLanes);n!==0&&(pd(e,n|1),wt(e,Re()),!(ie&6)&&(Js=Re()+500,Rr()))}break;case 13:es(function(){var r=Pn(t,1);if(r!==null){var s=ht();Qt(r,t,1,s)}}),Kd(t,1)}};md=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ht();Qt(e,t,134217728,n)}Kd(t,134217728)}};h_=function(t){if(t.tag===13){var e=cr(t),n=Pn(t,e);if(n!==null){var r=ht();Qt(n,t,e,r)}Kd(t,e)}};d_=function(){return ae};f_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Zc=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nu(r);if(!s)throw Error(j(90));Hy(r),qc(r,s)}}}break;case"textarea":qy(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};Zy=$d;e_=es;var o1={usingClientEntryPoint:!1,Events:[Fo,As,nu,Jy,Yy,$d]},Oi={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a1={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||s1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Yl=Ra.inject(a1),sn=Ra}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(j(200));return r1(t,e,null,n)};kt.createRoot=function(t,e){if(!Qd(t))throw Error(j(299));var n=!1,r="",s=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,r,s),t[Rn]=e.current,mo(t.nodeType===8?t.parentNode:t),new Gd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=r_(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return es(t)};kt.hydrate=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bv(e,null,t,1,n??null,s,!1,i,o),t[Rn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cu(e)};kt.render=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!hu(t))throw Error(j(40));return t._reactRootContainer?(es(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};kt.unstable_batchedUpdates=$d;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return du(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Ly.exports=kt;var l1=Ly.exports,Mv,Qm=l1;Mv=Qm.createRoot,Qm.hydrateRoot;/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=t=>{const e=c1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},d1=re.createContext({}),f1=()=>re.useContext(d1),p1=re.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>{const{size:h=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:g="currentColor",className:I=""}=f1()??{},P=r??p?Number(n??f)*24/Number(e??h):n??f;return re.createElement("svg",{ref:u,...Cc,width:e??h??Cc.width,height:e??h??Cc.height,stroke:t??g,strokeWidth:P,className:Fv("lucide",I,s),...!i&&!h1(l)&&{"aria-hidden":"true"},...l},[...o.map(([D,b])=>re.createElement(D,b)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(t,e)=>{const n=re.forwardRef(({className:r,...s},i)=>re.createElement(p1,{ref:i,iconNode:e,className:Fv(`lucide-${u1(Xm(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Xm(t),n};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],g1=$e("chart-column",m1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_1=$e("chevron-right",y1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],w1=$e("chevron-left",v1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Rl=$e("circle-check",E1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Jm=$e("circle",T1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],S1=$e("clock",I1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],C1=$e("house",A1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],R1=$e("layers",k1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1",key:"cif1o7"}]],x1=$e("list-todo",P1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],D1=$e("lock",N1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],b1=$e("map",V1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],L1=$e("plus",O1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],F1=$e("settings-2",M1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],U1=$e("settings",j1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],Ym=$e("sprout",z1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],B1=$e("star",$1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],jv=$e("trash-2",H1);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xd=$e("x",W1),q1=()=>{};var Zm={};/**
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
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},K1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new G1;const g=i<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q1=function(t){const e=Uv(t);return zv.encodeByteArray(e,!0)},Pl=function(t){return Q1(t).replace(/\./g,"")},$v=function(t){try{return zv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J1=()=>X1().__FIREBASE_DEFAULTS__,Y1=()=>{if(typeof process>"u"||typeof Zm>"u")return;const t=Zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$v(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return q1()||J1()||Y1()||Z1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bv=t=>{var e,n;return(n=(e=fu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},eS=t=>{const e=Bv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hv=()=>{var t;return(t=fu())==null?void 0:t.config},Wv=t=>{var e;return(e=fu())==null?void 0:e[`_${t}`]};/**
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
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Pl(JSON.stringify(n)),Pl(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function sS(){var e;const t=(e=fu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lS(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uS(){return!sS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cS(){try{return typeof indexedDB=="object"}catch{return!1}}function hS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const dS="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dS,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function fS(t,e){return t.replace(pS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pS=/\{\$([^}]+)}/g;function mS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eg(i)&&eg(o)){if(!ts(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eg(t){return t!==null&&typeof t=="object"}/**
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
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gS(t,e){const n=new yS(t,e);return n.subscribe.bind(n)}class yS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qv(t){return(await fetch(t,{credentials:"include"})).ok}class ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class vS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ES(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(t){return t===zr?void 0:t}function ES(t){return t.instantiationMode==="EAGER"}/**
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
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const IS={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},SS=ne.INFO,AS={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},CS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=SS,this._logHandler=CS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const kS=(t,e)=>e.some(n=>t instanceof n);let tg,ng;function RS(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PS(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,Dh=new WeakMap,Gv=new WeakMap,Rc=new WeakMap,Yd=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function NS(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DS(t){Vh=t(Vh)}function VS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),dr(r)}:PS().includes(t)?function(...e){return t.apply(Pc(this),e),dr(Kv.get(this))}:function(...e){return dr(t.apply(Pc(this),e))}}function bS(t){return typeof t=="function"?VS(t):(t instanceof IDBTransaction&&NS(t),kS(t,RS())?new Proxy(t,Vh):t)}function dr(t){if(t instanceof IDBRequest)return xS(t);if(Rc.has(t))return Rc.get(t);const e=bS(t);return e!==t&&(Rc.set(t,e),Yd.set(e,t)),e}const Pc=t=>Yd.get(t);function OS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const LS=["get","getKey","getAll","getAllKeys","count"],MS=["put","add","delete","clear"],xc=new Map;function rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=MS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return xc.set(e,i),i}DS(t=>({...t,get:(e,n,r)=>rg(e,n)||t.get(e,n,r),has:(e,n)=>!!rg(e,n)||t.has(e,n)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",sg="0.14.13";/**
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
 */const Nn=new Jd("@firebase/app"),US="@firebase/app-compat",zS="@firebase/analytics-compat",$S="@firebase/analytics",BS="@firebase/app-check-compat",HS="@firebase/app-check",WS="@firebase/auth",qS="@firebase/auth-compat",KS="@firebase/database",GS="@firebase/data-connect",QS="@firebase/database-compat",XS="@firebase/functions",JS="@firebase/functions-compat",YS="@firebase/installations",ZS="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",sA="@firebase/remote-config",iA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",lA="@firebase/firestore",uA="@firebase/ai",cA="@firebase/firestore-compat",hA="firebase",dA="12.14.0";/**
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
 */const Oh="[DEFAULT]",fA={[bh]:"fire-core",[US]:"fire-core-compat",[$S]:"fire-analytics",[zS]:"fire-analytics-compat",[HS]:"fire-app-check",[BS]:"fire-app-check-compat",[WS]:"fire-auth",[qS]:"fire-auth-compat",[KS]:"fire-rtdb",[GS]:"fire-data-connect",[QS]:"fire-rtdb-compat",[XS]:"fire-fn",[JS]:"fire-fn-compat",[YS]:"fire-iid",[ZS]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[sA]:"fire-rc",[iA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[lA]:"fire-fst",[cA]:"fire-fst-compat",[uA]:"fire-vertex","fire-js":"fire-js",[hA]:"fire-js-all"};/**
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
 */const xl=new Map,pA=new Map,Lh=new Map;function ig(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(Lh.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of xl.values())ig(n,t);for(const n of pA.values())ig(n,t);return!0}function Zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Uo("app","Firebase",mA);/**
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
 */class gA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=dA;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Oh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=Hv()),!n)throw fr.create("no-options");const i=xl.get(s);if(i){if(ts(n,i.options)&&ts(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new TS(s);for(const u of Lh.values())o.addComponent(u);const l=new gA(n,r,o);return xl.set(s,l),l}function Xv(t=Oh){const e=xl.get(t);if(!e&&t===Oh&&Hv())return Qv();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){let r=fA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}Ys(new ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const yA="firebase-heartbeat-database",_A=1,So="firebase-heartbeat-store";let Nc=null;function Jv(){return Nc||(Nc=OS(yA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function vA(t){try{const n=(await Jv()).transaction(So),r=await n.objectStore(So).get(Yv(t));return await n.done,r}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function og(t,e){try{const r=(await Jv()).transaction(So,"readwrite");await r.objectStore(So).put(e,Yv(t)),await r.done}catch(n){if(n instanceof Fn)Nn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Yv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wA=1024,EA=30;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>EA){const o=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ag(),{heartbeatsToSend:r,unsentEntries:s}=IA(this._heartbeatsCache.heartbeats),i=Pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function ag(){return new Date().toISOString().substring(0,10)}function IA(t,e=wA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cS()?hS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lg(t){return Pl(JSON.stringify({version:2,heartbeats:t})).length}function AA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function CA(t){Ys(new ns("platform-logger",e=>new FS(e),"PRIVATE")),Ys(new ns("heartbeat",e=>new TA(e),"PRIVATE")),pr(bh,sg,t),pr(bh,sg,"esm2020"),pr("fire-js","")}CA("");var kA="firebase",RA="12.14.0";/**
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
 */pr(kA,RA,"app");function Zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PA=Zv,e0=new Uo("auth","Firebase",Zv());/**
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
 */const Nl=new Jd("@firebase/auth");function xA(t,...e){Nl.logLevel<=ne.WARN&&Nl.warn(`Auth (${oi}): ${t}`,...e)}function Ga(t,...e){Nl.logLevel<=ne.ERROR&&Nl.error(`Auth (${oi}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw ef(t,...e)}function an(t,...e){return ef(t,...e)}function t0(t,e,n){const r={...PA(),[e]:n};return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return t0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e0.create(t,...e)}function K(t,e,...n){if(!t)throw ef(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function Vn(t,e){t||wn(e)}/**
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
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NA(){return ug()==="http:"||ug()==="https:"}function ug(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NA()||oS()||"connection"in navigator)?navigator.onLine:!0}function VA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=rS()||aS()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tf(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LA=new Bo(3e4,6e4);function Ho(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ai(t,e,n,r,s={}){return r0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return iS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&$o(t.emulatorConfig.host)&&(h.credentials="include"),n0.fetch()(await s0(t,t.config.apiHost,n,l),h)})}async function r0(t,e,n){t._canInitEmulator=!1;const r={...bA,...e};try{const s=new MA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw t0(t,f,h);Dn(t,f)}}catch(s){if(s instanceof Fn)throw s;Dn(t,"network-request-failed",{message:String(s)})}}async function nf(t,e,n,r,s={}){const i=await ai(t,e,n,r,s);return"mfaPendingCredential"in i&&Dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function s0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?tf(t.config,s):`${t.config.apiScheme}://${s}`;return OA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class MA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),LA.get())})}}function Pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function FA(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function Dl(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=rf(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:to(Dc(s.auth_time)),issuedAtTime:to(Dc(s.iat)),expirationTime:to(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=$v(n);return s?JSON.parse(s):(Ga("Failed to decode base64 JWT payload"),null)}catch(s){return Ga("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cg(t){const e=rf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&UA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ao(t,Dl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?i0(s.providerUserInfo):[],o=BA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Fh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function $A(t){const e=at(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function i0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function HA(t,e){const n=await r0(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await s0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&$o(t.emulatorConfig.host)&&(u.credentials="include"),n0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WA(t,e){return ai(t,"POST","/v2/accounts:revokeToken",Ho(t,e))}/**
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
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new js;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return $A(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Ao(this,FA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:P,stsTokenManager:D}=n;K(p&&D,e,"internal-error");const b=js.fromJSON(this.name,D);K(typeof p=="string",e,"internal-error"),Kn(r,e.name),Kn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof I=="boolean",e,"internal-error"),Kn(i,e.name),Kn(o,e.name),Kn(l,e.name),Kn(u,e.name),Kn(h,e.name),Kn(f,e.name);const C=new qt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(C.providerData=P.map(w=>({...w}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new js;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?i0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new js;l.updateFromIdToken(r);const u=new qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const hg=new Map;function En(t){Vn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
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
 */class o0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o0.type="NONE";const dg=o0;/**
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
 */function Qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Dl(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(En(dg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(dg);const o=Qa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Dl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await qt._fromGetAccountInfoResponse(e,g,f)}else p=qt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Us(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Us(i,e,r))}}/**
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
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d0(e))return"Blackberry";if(f0(e))return"Webos";if(l0(e))return"Safari";if((e.includes("chrome/")||u0(e))&&!e.includes("edge/"))return"Chrome";if(h0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a0(t=ot()){return/firefox\//i.test(t)}function l0(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u0(t=ot()){return/crios\//i.test(t)}function c0(t=ot()){return/iemobile/i.test(t)}function h0(t=ot()){return/android/i.test(t)}function d0(t=ot()){return/blackberry/i.test(t)}function f0(t=ot()){return/webos/i.test(t)}function sf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qA(t=ot()){var e;return sf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function KA(){return lS()&&document.documentMode===10}function p0(t=ot()){return sf(t)||h0(t)||f0(t)||d0(t)||/windows phone/i.test(t)||c0(t)}/**
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
 */function m0(t,e=[]){let n;switch(t){case"Browser":n=fg(ot());break;case"Worker":n=`${fg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class GA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function QA(t,e={}){return ai(t,"GET","/v2/passwordPolicy",Ho(t,e))}/**
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
 */const XA=6;class JA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class YA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new GA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dl(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(An(this));const n=e?at(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QA(this),n=new JA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&xA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Wo(t){return at(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZA(t){of=t}function eC(t){return of.loadJS(t)}function tC(){return of.gapiScript}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function rC(t,e){const n=Zd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ts(i,e??{}))return s;Dn(s,"already-initialized")}return n.initialize({options:e})}function sC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iC(t,e,n){const r=Wo(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=g0(e),{host:o,port:l}=oC(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ts(h,r.config.emulator)&&ts(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$o(o)?qv(`${i}//${o}${u}`):aC()}function g0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oC(t){const e=g0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mg(o)}}}function mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class y0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function zs(t,e){return nf(t,"POST","/v1/accounts:signInWithIdp",Ho(t,e))}/**
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
 */const lC="http://localhost";class rs extends y0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
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
 */class _0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends _0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends qo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class er extends qo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends qo{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */async function uC(t,e){return nf(t,"POST","/v1/accounts:signUp",Ho(t,e))}/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=gg(r);return new bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gg(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function yg(t){var s;if(Dt(t.app))return Promise.reject(An(t));const e=Wo(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new bn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await uC(e,{returnSecureToken:!0}),r=await bn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class bl extends Fn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function v0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function cC(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function hC(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await Ao(t,v0(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=rf(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),bn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),i}}/**
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
 */async function dC(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r="signIn",s=await v0(t,r,e),i=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
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
 */async function fC(t,e){return nf(t,"POST","/v1/accounts:signInWithCustomToken",Ho(t,e))}/**
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
 */async function pC(t,e){if(Dt(t.app))return Promise.reject(An(t));const n=Wo(t),r=await fC(n,{token:e,returnSecureToken:!0}),s=await bn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function mC(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function gC(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function yC(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}const Ol="__sak";/**
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
 */class w0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _C=1e3,vC=10;class E0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);KA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const wC=E0;/**
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
 */class T0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const I0=T0;/**
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
 */function EC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await EC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=af("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function IC(t){ln().location.href=t}/**
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
 */function S0(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function SC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function CC(){return S0()?self:null}/**
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
 */const A0="firebaseLocalStorageDb",kC=1,Ll="firebaseLocalStorage",C0="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function RC(){const t=indexedDB.deleteDatabase(A0);return new Ko(t).toPromise()}function k0(){const t=indexedDB.open(A0,kC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:C0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await RC(),e(await k0()))})})}async function _g(t,e,n){const r=mu(t,!0).put({[C0]:e,value:n});return new Ko(r).toPromise()}async function PC(t,e){const n=mu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=mu(t,!0).delete(e);return new Ko(n).toPromise()}const xC=800,NC=3;class R0{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=k0(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NC)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return S0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(CC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await SC(),!this.activeServiceWorker)return;this.sender=new TC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await _g(e,Ol,"1"),await vg(e,Ol)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new Ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const DC=R0;new Bo(3e4,6e4);/**
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
 */function VC(t,e){return e?En(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lf extends y0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bC(t){return dC(t.auth,new lf(t),t.bypassAuthState)}function OC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hC(n,new lf(t),t.bypassAuthState)}async function LC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),cC(n,new lf(t),t.bypassAuthState)}/**
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
 */class P0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bC;case"linkViaPopup":case"linkViaRedirect":return LC;case"reauthViaPopup":case"reauthViaRedirect":return OC;default:Dn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MC=new Bo(2e3,1e4);class Ds extends P0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MC.get())};e()}}Ds.currentPopupAction=null;/**
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
 */const FC="pendingRedirect",Xa=new Map;class jC extends P0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await UC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UC(t,e){const n=BC(e),r=$C(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zC(t,e){Xa.set(t._key(),e)}function $C(t){return En(t._redirectPersistence)}function BC(t){return Qa(FC,t.config.apiKey,t.name)}async function HC(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r=Wo(t),s=VC(r,e),o=await new jC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WC=10*60*1e3;class qC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x0(t);default:return!1}}/**
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
 */async function GC(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
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
 */const QC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(YC(n))return}catch{}Dn(t,"unauthorized-domain")}function YC(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XC.test(n))return!1;if(QC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ZC=new Bo(3e4,6e4);function Eg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ek(t){return new Promise((e,n)=>{var s,i,o;function r(){Eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eg(),n(an(t,"network-request-failed"))},timeout:ZC.get()})}if((i=(s=ln().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const l=nC("iframefcb");return ln()[l]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},eC(`${tC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function tk(t){return Ja=Ja||ek(t),Ja}/**
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
 */const nk=new Bo(5e3,15e3),rk="__/auth/iframe",sk="emulator/auth/iframe",ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tf(e,sk):`https://${t.config.authDomain}/${rk}`,r={apiKey:e.apiKey,appName:t.name,v:oi},s=ok.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zo(r).slice(1)}`}async function lk(t){const e=await tk(t),n=ln().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ak(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ik,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},nk.get());function u(){ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const uk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ck=500,hk=600,dk="_blank",fk="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pk(t,e,n,r=ck,s=hk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...uk,width:r.toString(),height:s.toString(),top:i,left:o},h=ot().toLowerCase();n&&(l=u0(h)?dk:n),a0(h)&&(e=e||fk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,P])=>`${g}${I}=${P},`,"");if(qA(h)&&l!=="_self")return mk(e||"",l),new Tg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Tg(p)}function mk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gk="__/auth/handler",yk="emulator/auth/handler",_k=encodeURIComponent("fac");async function Ig(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:s};if(e instanceof _0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof qo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${_k}=${encodeURIComponent(u)}`:"";return`${vk(t)}?${zo(l).slice(1)}${h}`}function vk({config:t}){return t.emulator?tf(t,yk):`https://${t.authDomain}/${gk}`}/**
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
 */const Vc="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I0,this._completeRedirectFn=HC,this._overrideRedirectResult=zC}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ig(e,n,r,Mh(),s);return pk(e,i,af())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ig(e,n,r,Mh(),s);return IC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lk(e),r=new qC(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Vc];i!==void 0&&n(!!i),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p0()||l0()||sf()}}const Ek=wk;var Sg="@firebase/auth",Ag="1.13.2";/**
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
 */class Tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sk(t){Ys(new ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m0(t)},h=new YA(r,s,i,u);return sC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ys(new ns("auth-internal",e=>{const n=Wo(e.getProvider("auth").getImmediate());return(r=>new Tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Sg,Ag,Ik(t)),pr(Sg,Ag,"esm2020")}/**
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
 */const Ak=5*60,Ck=Wv("authIdTokenMaxAge")||Ak;let Cg=null;const kk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ck)return;const s=n==null?void 0:n.token;Cg!==s&&(Cg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rk(t=Xv()){const e=Zd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rC(t,{popupRedirectResolver:Ek,persistence:[DC,wC,I0]}),r=Wv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kk(i.toString());gC(n,o,()=>o(n.currentUser)),mC(n,l=>o(l))}}const s=Bv("auth");return s&&iC(n,`http://${s}`),n}function Pk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ZA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sk("Browser");var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,N0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.F=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(S,A,R){for(var E=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)E[ge-2]=arguments[ge];return y.prototype[A].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,_){_||(_=0);const S=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)S[A]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(A=0;A<16;++A)S[A]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],A=v.g[2];let R=v.g[3],E;E=y+(R^_&(A^R))+S[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=R+(A^y&(_^A))+S[1]+3905402710&4294967295,R=y+(E<<12&4294967295|E>>>20),E=A+(_^R&(y^_))+S[2]+606105819&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(y^A&(R^y))+S[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(R^_&(A^R))+S[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=R+(A^y&(_^A))+S[5]+1200080426&4294967295,R=y+(E<<12&4294967295|E>>>20),E=A+(_^R&(y^_))+S[6]+2821735955&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(y^A&(R^y))+S[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(R^_&(A^R))+S[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=R+(A^y&(_^A))+S[9]+2336552879&4294967295,R=y+(E<<12&4294967295|E>>>20),E=A+(_^R&(y^_))+S[10]+4294925233&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(y^A&(R^y))+S[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(R^_&(A^R))+S[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=R+(A^y&(_^A))+S[13]+4254626195&4294967295,R=y+(E<<12&4294967295|E>>>20),E=A+(_^R&(y^_))+S[14]+2792965006&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(y^A&(R^y))+S[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(A^R&(_^A))+S[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(y^_))+S[6]+3225465664&4294967295,R=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(R^y))+S[11]+643717713&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^y&(A^R))+S[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^R&(_^A))+S[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(y^_))+S[10]+38016083&4294967295,R=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(R^y))+S[15]+3634488961&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^y&(A^R))+S[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^R&(_^A))+S[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(y^_))+S[14]+3275163606&4294967295,R=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(R^y))+S[3]+4107603335&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^y&(A^R))+S[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^R&(_^A))+S[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(y^_))+S[2]+4243563512&4294967295,R=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(R^y))+S[7]+1735328473&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^y&(A^R))+S[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(_^A^R)+S[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=R+(y^_^A)+S[8]+2272392833&4294967295,R=y+(E<<11&4294967295|E>>>21),E=A+(R^y^_)+S[11]+1839030562&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^y)+S[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^R)+S[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=R+(y^_^A)+S[4]+1272893353&4294967295,R=y+(E<<11&4294967295|E>>>21),E=A+(R^y^_)+S[7]+4139469664&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^y)+S[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^R)+S[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=R+(y^_^A)+S[0]+3936430074&4294967295,R=y+(E<<11&4294967295|E>>>21),E=A+(R^y^_)+S[3]+3572445317&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^y)+S[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^R)+S[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=R+(y^_^A)+S[12]+3873151461&4294967295,R=y+(E<<11&4294967295|E>>>21),E=A+(R^y^_)+S[15]+530742520&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^y)+S[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(A^(_|~R))+S[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=R+(_^(y|~A))+S[7]+1126891415&4294967295,R=y+(E<<10&4294967295|E>>>22),E=A+(y^(R|~_))+S[14]+2878612391&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~y))+S[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~R))+S[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=R+(_^(y|~A))+S[3]+2399980690&4294967295,R=y+(E<<10&4294967295|E>>>22),E=A+(y^(R|~_))+S[10]+4293915773&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~y))+S[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~R))+S[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=R+(_^(y|~A))+S[15]+4264355552&4294967295,R=y+(E<<10&4294967295|E>>>22),E=A+(y^(R|~_))+S[6]+2734768916&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~y))+S[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~R))+S[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=R+(_^(y|~A))+S[11]+3174756917&4294967295,R=y+(E<<10&4294967295|E>>>22),E=A+(y^(R|~_))+S[2]+718787259&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~y))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const _=y-this.blockSize,S=this.C;let A=this.h,R=0;for(;R<y;){if(A==0)for(;R<=_;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(S[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,S),A=0;break}}else for(;R<y;)if(S[A++]=v[R++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,_=0;_<4;++_)for(let S=0;S<32;S+=8)v[y++]=this.g[_]>>>S&255;return v};function i(v,y){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;const _=[];let S=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;S&&R==y||(_[A]=R,S=!1)}this.g=_}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return b(h(-v));const y=[];let _=1;for(let S=0;v>=_;S++)y[S]=v/_|0,_*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return b(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let S=p;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const E=parseInt(v.substring(R,R+A),y);A<8?(A=h(Math.pow(y,A)),S=S.j(A).add(h(E))):(S=S.j(_),S=S.add(h(E)))}return S}var p=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();let v=0,y=1;for(let _=0;_<this.g.length;_++){const S=this.i(_);v+=(S>=0?S:4294967296+S)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(D(this))return"-"+b(this).toString(v);const y=h(Math.pow(v,6));var _=this;let S="";for(;;){const A=x(_,y).g;_=C(_,A.j(y));let R=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=A,P(_))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=C(this,v),D(v)?-1:P(v)?0:1};function b(v){const y=v.g.length,_=[];for(let S=0;S<y;S++)_[S]=~v.g[S];return new o(_,~v.h).add(g)}t.abs=function(){return D(this)?b(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),_=[];let S=0;for(let A=0;A<=y;A++){let R=S+(this.i(A)&65535)+(v.i(A)&65535),E=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);S=E>>>16,R&=65535,E&=65535,_[A]=E<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function C(v,y){return v.add(b(y))}t.j=function(v){if(P(this)||P(v))return p;if(D(this))return D(v)?b(this).j(b(v)):b(b(this).j(v));if(D(v))return b(this.j(b(v)));if(this.l(I)<0&&v.l(I)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,_=[];for(var S=0;S<2*y;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<v.g.length;A++){const R=this.i(S)>>>16,E=this.i(S)&65535,ge=v.i(A)>>>16,Xe=v.i(A)&65535;_[2*S+2*A]+=E*Xe,w(_,2*S+2*A),_[2*S+2*A+1]+=R*Xe,w(_,2*S+2*A+1),_[2*S+2*A+1]+=E*ge,w(_,2*S+2*A+1),_[2*S+2*A+2]+=R*ge,w(_,2*S+2*A+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function k(v,y){this.g=v,this.h=y}function x(v,y){if(P(y))throw Error("division by zero");if(P(v))return new k(p,p);if(D(v))return y=x(b(v),y),new k(b(y.g),b(y.h));if(D(y))return y=x(v,b(y)),new k(b(y.g),y.h);if(v.g.length>30){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,S=y;S.l(v)<=0;)_=M(_),S=M(S);var A=F(_,1),R=F(S,1);for(S=F(S,2),_=F(_,2);!P(S);){var E=R.add(S);E.l(v)<=0&&(A=A.add(_),R=E),S=F(S,1),_=F(_,1)}return y=C(v,A.j(y)),new k(A,y)}for(A=p;v.l(y)>=0;){for(_=Math.max(1,Math.floor(v.m()/y.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=h(_),E=R.j(y);D(E)||E.l(v)>0;)_-=S,R=h(_),E=R.j(y);P(R)&&(R=g),A=A.add(R),v=C(v,E)}return new k(A,v)}t.B=function(v){return x(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)&v.i(S);return new o(_,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)|v.i(S);return new o(_,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)^v.i(S);return new o(_,this.h^v.h)};function M(v){const y=v.g.length+1,_=[];for(let S=0;S<y;S++)_[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(_,v.h)}function F(v,y){const _=y>>5;y%=32;const S=v.g.length-_,A=[];for(let R=0;R<S;R++)A[R]=y>0?v.i(R+_)>>>y|v.i(R+_+1)<<32-y:v.i(R+_);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,N0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,mr=o}).apply(typeof kg<"u"?kg:typeof self<"u"?self:typeof window<"u"?window:{});var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,$i,V0,Ya,jh,b0,O0,L0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xa=="object"&&xa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in d))break e;d=d[N]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,N,V){for(var U=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)U[Y-2]=arguments[Y];return c.prototype[N].apply(m,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function P(a,c){for(let m=1;m<arguments.length;m++){const N=arguments[m];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let U=0;U<V;U++)a[d+U]=N[U]}else a.push(N)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(a){o.setTimeout(()=>{throw a},0)}function C(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const m=k.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var k=new D(()=>new x,a=>a.reset());class x{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,v=new w,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(_)}};function _(){for(var a;a=C();){try{a.h.call(a.g)}catch(d){b(d)}var c=k;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ge(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(ge,A),ge.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xe="closure_listenable_"+(Math.random()*1e6|0),Ae=0;function le(a,c,d,m,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=N,this.key=++Ae,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function J(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ye(a){const c={};for(const d in a)c[d]=a[d];return c}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(a,c){let d,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(d in m)a[d]=m[d];for(let V=0;V<Ce.length;V++)d=Ce[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Pt(a){this.src=a,this.g={},this.h=0}Pt.prototype.add=function(a,c,d,m,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=jt(a,c,m,N);return U>-1?(c=a[U],d||(c.fa=!1)):(c=new le(c,this.src,V,!!m,N),c.fa=d,a.push(c)),c};function Dr(a,c){const d=c.type;if(d in a.g){var m=a.g[d],N=Array.prototype.indexOf.call(m,c,void 0),V;(V=N>=0)&&Array.prototype.splice.call(m,N,1),V&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function jt(a,c,d,m){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==m)return N}return-1}var jn="closure_lm_"+(Math.random()*1e6|0),Vu={};function Bf(a,c,d,m,N){if(Array.isArray(c)){for(let V=0;V<c.length;V++)Bf(a,c[V],d,m,N);return null}return d=qf(d),a&&a[Xe]?a.J(c,d,l(m)?!!m.capture:!1,N):lE(a,c,d,!1,m,N)}function lE(a,c,d,m,N,V){if(!c)throw Error("Invalid event type");const U=l(N)?!!N.capture:!!N;let Y=Ou(a);if(Y||(a[jn]=Y=new Pt(a)),d=Y.add(c,d,m,U,V),d.proxy)return d;if(m=uE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(N=U),N===void 0&&(N=!1),a.addEventListener(c.toString(),m,N);else if(a.attachEvent)a.attachEvent(Wf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uE(){function a(d){return c.call(a.src,a.listener,d)}const c=cE;return a}function Hf(a,c,d,m,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)Hf(a,c[V],d,m,N);else m=l(m)?!!m.capture:!!m,d=qf(d),a&&a[Xe]?(a=a.i,V=String(c).toString(),V in a.g&&(c=a.g[V],d=jt(c,d,m,N),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[V],a.h--)))):a&&(a=Ou(a))&&(c=a.g[c.toString()],a=-1,c&&(a=jt(c,d,m,N)),(d=a>-1?c[a]:null)&&bu(d))}function bu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Xe])Dr(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Wf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Ou(c))?(Dr(d,a),d.h==0&&(d.src=null,c[jn]=null)):$(a)}}}function Wf(a){return a in Vu?Vu[a]:Vu[a]="on"+a}function cE(a,c){if(a.da)a=!0;else{c=new ge(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&bu(a),a=d.call(m,c)}return a}function Ou(a){return a=a[jn],a instanceof Pt?a:null}var Lu="__closure_events_fn_"+(Math.random()*1e9>>>0);function qf(a){return typeof a=="function"?a:(a[Lu]||(a[Lu]=function(c){return a.handleEvent(c)}),a[Lu])}function Je(){S.call(this),this.i=new Pt(this),this.M=this,this.G=null}p(Je,S),Je.prototype[Xe]=!0,Je.prototype.removeEventListener=function(a,c,d,m){Hf(this,a,c,d,m)};function lt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var N=c;c=new A(m,a),Nr(c,N)}N=!0;let V,U;if(d)for(U=d.length-1;U>=0;U--)V=c.g=d[U],N=ea(V,m,!0,c)&&N;if(V=c.g=a,N=ea(V,m,!0,c)&&N,N=ea(V,m,!1,c)&&N,d)for(U=0;U<d.length;U++)V=c.g=d[U],N=ea(V,m,!1,c)&&N}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)$(d[m]);delete a.g[c],a.h--}}this.G=null},Je.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Je.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function ea(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let V=0;V<c.length;++V){const U=c[V];if(U&&!U.da&&U.capture==d){const Y=U.listener,Ve=U.ha||U.src;U.fa&&Dr(a.i,U),N=Y.call(Ve,m)!==!1&&N}}return N&&!m.defaultPrevented}function hE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Kf(a){a.g=hE(()=>{a.g=null,a.i&&(a.i=!1,Kf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class dE extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Kf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(a){S.call(this),this.h=a,this.g={}}p(di,S);var Gf=[];function Qf(a){G(a.g,function(c,d){this.g.hasOwnProperty(d)&&bu(c)},a),a.g={}}di.prototype.N=function(){di.Z.N.call(this),Qf(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mu=o.JSON.stringify,fE=o.JSON.parse,pE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Xf(){}function Jf(){}var fi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fu(){A.call(this,"d")}p(Fu,A);function ju(){A.call(this,"c")}p(ju,A);var Vr={},Yf=null;function ta(){return Yf=Yf||new Je}Vr.Ia="serverreachability";function Zf(a){A.call(this,Vr.Ia,a)}p(Zf,A);function pi(a){const c=ta();lt(c,new Zf(c))}Vr.STAT_EVENT="statevent";function ep(a,c){A.call(this,Vr.STAT_EVENT,a),this.stat=c}p(ep,A);function ut(a){const c=ta();lt(c,new ep(c,a))}Vr.Ja="timingevent";function tp(a,c){A.call(this,Vr.Ja,a),this.size=c}p(tp,A);function mi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function gi(){this.g=!0}gi.prototype.ua=function(){this.g=!1};function mE(a,c,d,m,N,V){a.info(function(){if(a.g)if(V){var U="",Y=V.split("&");for(let ue=0;ue<Y.length;ue++){var Ve=Y[ue].split("=");if(Ve.length>1){const Fe=Ve[0];Ve=Ve[1];const Zt=Fe.split("_");U=Zt.length>=2&&Zt[1]=="type"?U+(Fe+"="+Ve+"&"):U+(Fe+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+c+`
`+d+`
`+U})}function gE(a,c,d,m,N,V,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+c+`
`+d+`
`+V+" "+U})}function hs(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+_E(a,d)+(m?" "+m:"")})}function yE(a,c){a.info(function(){return"TIMEOUT: "+c})}gi.prototype.info=function(){};function _E(a,c){if(!a.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var N=m[0];if(N!="noop"&&N!="stop"&&N!="close")for(let U=1;U<m.length;U++)m[U]=""}}}}return Mu(V)}catch{return c}}var na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rp;function Uu(){}p(Uu,Xf),Uu.prototype.g=function(){return new XMLHttpRequest},rp=new Uu;function yi(a){return encodeURIComponent(String(a))}function vE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Un(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sp}function sp(){this.i=null,this.g="",this.h=!1}var ip={},zu={};function $u(a,c,d){a.M=1,a.A=sa(Yt(c)),a.u=d,a.R=!0,op(a,null)}function op(a,c){a.F=Date.now(),ra(a),a.B=Yt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),vp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new sp,a.g=Mp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new dE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Gf[0]=N.toString()),N=Gf);for(let V=0;V<N.length;V++){const U=Bf(d,N[V],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),pi(),mE(a.i,a.v,a.B,a.l,a.S,a.u)}Un.prototype.ba=function(a){a=a.target;const c=this.O;c&&Bn(a)==3?c.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Bn(this.g),Ve=this.g.ya(),ue=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Cp(this.g)))){this.K||Y!=4||Ve==7||(Ve==8||ue<=0?pi(3):pi(2)),Bu(this);var c=this.g.ca();this.X=c;var d=wE(this);if(this.o=c==200,gE(this.i,this.v,this.B,this.l,this.S,Y,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,N=this.g;if((m=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var V=m;break t}}V=null}if(a=V)hs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hu(this,a);else{this.o=!1,this.m=3,ut(12),br(this),_i(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<d.length;)if(Fe=EE(this,d),Fe==zu){Y==4&&(this.m=4,ut(14),a=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==ip){this.m=4,ut(15),hs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else hs(this.i,this.l,Fe,null),Hu(this,Fe);if(ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||d.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)hs(this.i,this.l,d,"[Invalid Chunked Response]"),br(this),_i(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Yu(U),U.P=!0,ut(11))}}else hs(this.i,this.l,d,null),Hu(this,d);Y==4&&br(this),this.o&&!this.K&&(Y==4?Vp(this.j,this):(this.o=!1,ra(this)))}else OE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),br(this),_i(this)}}}catch{}finally{}};function wE(a){if(!ap(a))return a.g.la();const c=Cp(a.g);if(c==="")return"";let d="";const m=c.length,N=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),_i(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<m;V++)a.h.h=!0,d+=a.h.i.decode(c[V],{stream:!(N&&V==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function ap(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function EE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?zu:(d=Number(c.substring(d,m)),isNaN(d)?ip:(m+=1,m+d>c.length?zu:(c=c.slice(m,m+d),a.C=m+d,c)))}Un.prototype.cancel=function(){this.K=!0,br(this)};function ra(a){a.T=Date.now()+a.H,lp(a,a.H)}function lp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=mi(h(a.aa,a),c)}function Bu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Un.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yE(this.i,this.B),this.M!=2&&(pi(),ut(17)),br(this),this.m=2,_i(this)):lp(this,this.T-a)};function _i(a){a.j.I==0||a.K||Vp(a.j,a)}function br(a){Bu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Qf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Hu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Wu(d.h,a))){if(!a.L&&Wu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ua(d),aa(d);else break e;Ju(d),ut(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=mi(h(d.Va,d),6e3));hp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Lr(d,11)}else if((a.L||d.g==a)&&ua(d),!E(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let ue=N[c];const Fe=ue[0];if(!(Fe<=d.K))if(d.K=Fe,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Zt=ue[3];Zt!=null&&(d.ka=Zt,d.j.info("VER="+d.ka));const Mr=ue[4];Mr!=null&&(d.za=Mr,d.j.info("SVER="+d.za));const Hn=ue[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(m=1.5*Hn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Wn=a.g;if(Wn){const ha=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ha){var V=m.h;V.g||ha.indexOf("spdy")==-1&&ha.indexOf("quic")==-1&&ha.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qu(V,V.h),V.h=null))}if(m.G){const Zu=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(m.wa=Zu,he(m.J,m.G,Zu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var U=a;if(m.na=Lp(m,m.L?m.ba:null,m.W),U.L){dp(m.h,U);var Y=U,Ve=m.O;Ve&&(Y.H=Ve),Y.D&&(Bu(Y),ra(Y)),m.g=U}else Np(m);d.i.length>0&&la(d)}else ue[0]!="stop"&&ue[0]!="close"||Lr(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Lr(d,7):Xu(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}pi(4)}catch{}}var TE=class{constructor(a,c){this.g=a,this.map=c}};function up(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hp(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function qu(a,c){a.g?a.g.add(c):a.h=c}function dp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}up.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return I(a.i)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let N,V=null;m>=0?(N=a[d].substring(0,m),V=a[d].substring(m+1)):N=a[d],c(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof zn?(this.l=a.l,vi(this,a.j),this.o=a.o,this.g=a.g,wi(this,a.u),this.h=a.h,Ku(this,wp(a.i)),this.m=a.m):a&&(c=String(a).match(pp))?(this.l=!1,vi(this,c[1]||"",!0),this.o=Ei(c[2]||""),this.g=Ei(c[3]||"",!0),wi(this,c[4]),this.h=Ei(c[5]||"",!0),Ku(this,c[6]||"",!0),this.m=Ei(c[7]||"")):(this.l=!1,this.i=new Ii(null,this.l))}zn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ti(c,mp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ti(c,mp,!0),"@"),a.push(yi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ti(d,d.charAt(0)=="/"?CE:AE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ti(d,RE)),a.join("")},zn.prototype.resolve=function(a){const c=Yt(this);let d=!!a.j;d?vi(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)wi(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var N=c.h.lastIndexOf("/");N!=-1&&(m=c.h.slice(0,N+1)+m)}if(N=m,N==".."||N==".")m="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){m=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let U=0;U<N.length;){const Y=N[U++];Y=="."?m&&U==N.length&&V.push(""):Y==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),m&&U==N.length&&V.push("")):(V.push(Y),m=!0)}m=V.join("/")}else m=N}return d?c.h=m:d=a.i.toString()!=="",d?Ku(c,wp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Yt(a){return new zn(a)}function vi(a,c,d){a.j=d?Ei(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function wi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ku(a,c,d){c instanceof Ii?(a.i=c,PE(a.i,a.l)):(d||(c=Ti(c,kE)),a.i=new Ii(c,a.l))}function he(a,c,d){a.i.set(c,d)}function sa(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ei(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,SE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function SE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mp=/[#\/\?@]/g,AE=/[#\?:]/g,CE=/[#\?]/g,kE=/[#\?@]/g,RE=/#/g;function Ii(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Or(a){a.g||(a.g=new Map,a.h=0,a.i&&IE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ii.prototype,t.add=function(a,c){Or(this),this.i=null,a=ds(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function gp(a,c){Or(a),c=ds(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function yp(a,c){return Or(a),c=ds(a,c),a.g.has(c)}t.forEach=function(a,c){Or(this),this.g.forEach(function(d,m){d.forEach(function(N){a.call(c,N,m,this)},this)},this)};function _p(a,c){Or(a);let d=[];if(typeof c=="string")yp(a,c)&&(d=d.concat(a.g.get(ds(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Or(this),this.i=null,a=ds(this,a),yp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=_p(this,a),a.length>0?String(a[0]):c):c};function vp(a,c,d){gp(a,c),d.length>0&&(a.i=null,a.g.set(ds(a,c),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const N=yi(d);d=_p(this,d);for(let V=0;V<d.length;V++){let U=N;d[V]!==""&&(U+="="+yi(d[V])),a.push(U)}}return this.i=a.join("&")};function wp(a){const c=new Ii;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ds(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function PE(a,c){c&&!a.j&&(Or(a),a.i=null,a.g.forEach(function(d,m){const N=m.toLowerCase();m!=N&&(gp(this,m),vp(this,N,d))},a)),a.j=c}function xE(a,c){const d=new gi;if(o.Image){const m=new Image;m.onload=f($n,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f($n,d,"TestLoadImage: error",!1,c,m),m.onabort=f($n,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f($n,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function NE(a,c){const d=new gi,m=new AbortController,N=setTimeout(()=>{m.abort(),$n(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(N),V.ok?$n(d,"TestPingServer: ok",!0,c):$n(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),$n(d,"TestPingServer: error",!1,c)})}function $n(a,c,d,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(d)}catch{}}function DE(){this.g=new pE}function Gu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Gu,Xf),Gu.prototype.g=function(){return new ia(this.i,this.h)};function ia(a,c){Je.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ia,Je),t=ia.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ep(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ep(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Si(this):Ai(this),this.readyState==3&&Ep(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Si(this))},t.Na=function(a){this.g&&(this.response=a,Si(this))},t.ga=function(){this.g&&Si(this)};function Si(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ai(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tp(a){let c="";return G(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Tp(d),typeof a=="string"?d!=null&&yi(d):he(a,c,d))}function Ie(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,Je);var VE=/^https?$/i,bE=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rp.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){Ip(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)d.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(bE,c,void 0)>=0)||m||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Ip(this,V)}};function Ip(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Sp(a),oa(a)}function Sp(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ap(this):this.Xa())},t.Xa=function(){Ap(this)};function Ap(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=V===0){let U=String(a.D).match(pp)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),m=!VE.test(U?U.toLowerCase():"")}d=m}if(d)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var N=Bn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Sp(a)}}finally{oa(a)}}}}function oa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||lt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),fE(c)}};function Cp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(a){const c={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=vE(a[m]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[N]||[];c[N]=V,V.push(d)}J(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function kp(a){this.za=0,this.i=[],this.j=new gi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ci("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ci("baseRetryDelayMs",5e3,a),this.Za=Ci("retryDelaySeedMs",1e4,a),this.Ta=Ci("forwardChannelMaxRetries",2,a),this.va=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new up(a&&a.concurrentRequestLimit),this.Ba=new DE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=kp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){ut(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Lp(this,null,this.W),la(this)};function Xu(a){if(Rp(a),a.I==3){var c=a.V++,d=Yt(a.J);if(he(d,"SID",a.M),he(d,"RID",c),he(d,"TYPE","terminate"),ki(a,d),c=new Un(a,a.j,c),c.M=2,c.A=sa(Yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Mp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ra(c)}Op(a)}function aa(a){a.g&&(Yu(a),a.g.cancel(),a.g=null)}function Rp(a){aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),ua(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function la(a){if(!cp(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||y(),F||(M(),F=!0),v.add(c,a),a.D=0}}function LE(a,c){return hp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=mi(h(a.Ea,a,c),bp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Un(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ye(V),Nr(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=xp(this,N,c),d=Yt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),ki(this,d),V&&(this.R?c="headers="+yi(Tp(V))+"&"+c:this.u&&Qu(d,this.u,V)),qu(this.h,N),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",c),he(d,"SID","null"),N.U=!0,$u(N,d,null)):$u(N,d,c),this.I=2}}else this.I==3&&(a?Pp(this,a):this.i.length==0||cp(this.h)||Pp(this))};function Pp(a,c){var d;c?d=c.l:d=a.V++;const m=Yt(a.J);he(m,"SID",a.M),he(m,"RID",d),he(m,"AID",a.K),ki(a,m),a.u&&a.o&&Qu(m,a.u,a.o),d=new Un(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=xp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qu(a.h,d),$u(d,m,c)}function ki(a,c){a.H&&G(a.H,function(d,m){he(c,m,d)}),a.l&&G({},function(d,m){he(c,m,d)})}function xp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var N=a.i;let Y=-1;for(;;){const Ve=["count="+d];Y==-1?d>0?(Y=N[0].g,Ve.push("ofs="+Y)):Y=0:Ve.push("ofs="+Y);let ue=!0;for(let Fe=0;Fe<d;Fe++){var V=N[Fe].g;const Zt=N[Fe].map;if(V-=Y,V<0)Y=Math.max(0,N[Fe].g-100),ue=!1;else try{V="req"+V+"_"||"";try{var U=Zt instanceof Map?Zt:Object.entries(Zt);for(const[Mr,Hn]of U){let Wn=Hn;l(Hn)&&(Wn=Mu(Hn)),Ve.push(V+Mr+"="+encodeURIComponent(Wn))}}catch(Mr){throw Ve.push(V+"type="+encodeURIComponent("_badmap")),Mr}}catch{m&&m(Zt)}}if(ue){U=Ve.join("&");break e}}U=void 0}return a=a.i.splice(0,d),c.G=a,U}function Np(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||y(),F||(M(),F=!0),v.add(c,a),a.A=0}}function Ju(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=mi(h(a.Da,a),bp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Dp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=mi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),aa(this),Dp(this))};function Yu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Dp(a){a.g=new Un(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Yt(a.na);he(c,"RID","rpc"),he(c,"SID",a.M),he(c,"AID",a.K),he(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(c,"TO",a.ia),he(c,"TYPE","xmlhttp"),ki(a,c),a.u&&a.o&&Qu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=sa(Yt(c)),d.u=null,d.R=!0,op(d,a)}t.Va=function(){this.C!=null&&(this.C=null,aa(this),Ju(this),ut(19))};function ua(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vp(a,c){var d=null;if(a.g==c){ua(a),Yu(a),a.g=null;var m=2}else if(Wu(a.h,c))d=c.G,dp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=a.D;m=ta(),lt(m,new tp(m,d)),la(a)}else Np(a);else if(N=c.m,N==3||N==0&&c.X>0||!(m==1&&LE(a,c)||m==2&&Ju(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function bp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Lr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const N=!m;m=new zn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||vi(m,"https"),sa(m),N?xE(m.toString(),d):NE(m.toString(),d)}else ut(2);a.I=0,a.l&&a.l.pa(c),Op(a),Rp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Op(a){if(a.I=0,a.ja=[],a.l){const c=fp(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Lp(a,c,d){var m=d instanceof zn?Yt(d):new zn(d);if(m.g!="")c&&(m.g=c+"."+m.g),wi(m,m.u);else{var N=o.location;m=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const V=new zn(null);m&&vi(V,m),c&&(V.g=c),N&&wi(V,N),d&&(V.h=d),m=V}return d=a.G,c=a.wa,d&&c&&he(m,d,c),he(m,"VER",a.ka),ki(a,m),m}function Mp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ie(new Gu({ab:d})):new Ie(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fp(){}t=Fp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ca(){}ca.prototype.g=function(a,c){return new Et(a,c)};function Et(a,c){Je.call(this),this.g=new kp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new fs(this)}p(Et,Je),Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Xu(this.g)},Et.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Mu(a),a=d);c.i.push(new TE(c.Ya++,a)),c.I==3&&la(c)},Et.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,Et.Z.N.call(this)};function jp(a){Fu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(jp,Fu);function Up(){ju.call(this),this.status=1}p(Up,ju);function fs(a){this.g=a}p(fs,Fp),fs.prototype.ra=function(){lt(this.g,"a")},fs.prototype.qa=function(a){lt(this.g,new jp(a))},fs.prototype.pa=function(a){lt(this.g,new Up)},fs.prototype.oa=function(){lt(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,L0=function(){return new ca},O0=function(){return ta()},b0=Vr,jh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,Ya=na,np.COMPLETE="complete",V0=np,Jf.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Je.prototype.listen=Je.prototype.J,$i=Jf,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,D0=Ie}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let li="12.14.0";function xk(t){li=t}/**
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
 *//**
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
 */const ss=new Jd("@firebase/firestore");function gs(){return ss.logLevel}function z(t,...e){if(ss.logLevel<=ne.DEBUG){const n=e.map(uf);ss.debug(`Firestore (${li}): ${t}`,...n)}}function On(t,...e){if(ss.logLevel<=ne.ERROR){const n=e.map(uf);ss.error(`Firestore (${li}): ${t}`,...n)}}function is(t,...e){if(ss.logLevel<=ne.WARN){const n=e.map(uf);ss.warn(`Firestore (${li}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,M0(t,r,n)}function M0(t,e,n){let r=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||M0(e,s,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class F0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vk{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new F0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new tt(e)}}class bk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ok{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new bk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Mk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Mk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Uh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return bc(s)===bc(i)?Z(s,i):bc(s)?1:-1}return Z(t.length,e.length)}const Fk=55296,jk=57343;function bc(t){const e=t.charCodeAt(0);return e>=Fk&&e<=jk}function Zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Pg="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Z(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),s=nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(n)):Uh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class fe extends nn{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends nn{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return Uk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pg}static keyField(){return new qe([Pg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}/**
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
 */function j0(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zk(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xg(t){if(!W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ng(t){if(W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function U0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q(12329,{type:typeof t})}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Go(t,e){if(!U0(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Dg=-62135596800,Vg=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vg);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dg)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vg}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Go(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Ne("string",pe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new pe(0,0))}static max(){return new Q(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Co=-1;function $k(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new vr(s,W.empty(),e)}function Bk(t){return new vr(t.readTime,t.key,Co)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Q.min(),W.empty(),Co)}static max(){return new vr(Q.max(),W.empty(),Co)}}function Hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const Wk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ui(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Wk)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Kk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ci(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gu.ce=-1;/**
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
 */const df=-1;function yu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function Gk(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const z0="";function Qk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bg(e)),e=Xk(t.get(n),e);return bg(e)}function Xk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case z0:n+="";break;default:n+=i}}return n}function bg(t){return t+z0+""}/**
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
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new St([])}unionWith(e){let n=new Me(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class B0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new B0("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=Jk.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const H0="server_timestamp",W0="__type__",q0="__previous_value__",K0="__local_write_time__";function ff(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[W0])==null?void 0:r.stringValue)===H0}function _u(t){const e=t.mapValue.fields[q0];return ff(e)?_u(e):e}function ko(t){const e=wr(t.mapValue.fields[K0].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class Yk{constructor(e,n,r,s,i,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Fl="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||Fl}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===Fl}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}function Zk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(t.options.projectId,e)}/**
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
 */const G0="__type__",eR="__max__",Da={mapValue:{}},Q0="__vector__",jl="value";function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ff(t)?4:nR(t)?9007199254740991:tR(t)?10:11:q(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wr(s.timestampValue),l=wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?Ml(o)===Ml(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Og(o)!==Og(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return q(52216,{left:t})}}function Po(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Mg(t.timestampValue,e.timestampValue);case 4:return Mg(ko(t),ko(e));case 5:return Uh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Er(i),u=Er(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Z(ke(i.latitude),ke(o.latitude));return l!==0?l:Z(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,P,D;const l=i.fields||{},u=o.fields||{},h=(g=l[jl])==null?void 0:g.arrayValue,f=(I=u[jl])==null?void 0:I.arrayValue,p=Z(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Fg(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Da.mapValue&&o===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Uh(u[p],f[p]);if(g!==0)return g;const I=ei(l[u[p]],h[f[p]]);if(I!==0)return I}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw q(23264,{he:n})}}function Mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=wr(t),r=wr(e),s=Z(n.seconds,r.seconds);return s!==0?s:Z(n.nanos,r.nanos)}function Fg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ei(n[s],r[s]);if(i)return i}return Z(n.length,r.length)}function ti(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zh(n.fields[o])}`;return s+"}"}(t.mapValue):q(61005,{value:t})}function Za(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_u(t);return e?16+Za(e):16;case 5:return 2*t.stringValue.length;case 6:return Er(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Za(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Pr(r.fields,(i,o)=>{s+=i.length+Za(o)}),s}(t.mapValue);default:throw q(13486,{value:t})}}function xo(t){return!!t&&"integerValue"in t}function X0(t){return xo(t)||function(n){return!!n&&"doubleValue"in n}(t)}function pf(t){return!!t&&"arrayValue"in t}function jg(t){return!!t&&"nullValue"in t}function Ug(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function tR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[G0])==null?void 0:r.stringValue)===Q0}function no(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return{...t}}function nR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eR}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];el(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(no(this.value))}}function J0(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new qe([n]);if(el(r)){const i=J0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Q.min(),Q.min(),Q.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,Q.min(),Q.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Q.min(),Q.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ul{constructor(e,n){this.position=e,this.inclusive=n}}function zg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function rR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Y0{}class Oe extends Y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iR(e,n,r):n==="array-contains"?new lR(e,r):n==="in"?new uR(e,r):n==="not-in"?new cR(e,r):n==="array-contains-any"?new hR(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oR(e,r):new aR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ei(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends Y0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function ew(t){return sR(t)&&Z0(t)}function sR(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function $h(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ti(t.value);if(ew(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function tw(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&tw(o,s.filters[l]),!0):!1}(t,e):void q(19439)}function nw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ti(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(nw).join(" ,")+"}"}(t):"Filter"}class iR extends Oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class oR extends Oe{constructor(e,n){super(e,"in",n),this.keys=rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aR extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class lR extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&Po(n.arrayValue,this.value)}}class uR extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class cR extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Po(this.value.arrayValue,n)}}class hR extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
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
 */class dR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Bg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dR(t,e,n,r,s,i,o)}function mf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ti(r)).join(",")),e.Te=n}return e.Te}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$g(t.startAt,e.startAt)&&$g(t.endAt,e.endAt)}function Bh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function fR(t,e,n,r,s,i,o,l){return new vu(t,e,n,r,s,i,o,l)}function yf(t){return new vu(t)}function Hg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pR(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function mR(t){return t.collectionGroup!==null}function ro(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zl(i,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new zl(qe.keyField(),r))}return e.Ie}function cn(t){const e=X(t);return e.Ee||(e.Ee=gR(e,ro(t))),e.Ee}function gR(t,e){if(t.limitType==="F")return Bg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zl(s.field,i)});const n=t.endAt?new Ul(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ul(t.startAt.position,t.startAt.inclusive):null;return Bg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e,n){return new vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wu(t,e){return gf(cn(t),cn(e))&&t.limitType===e.limitType}function sw(t){return`${mf(cn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>nw(s)).join(", ")}]`),yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ti(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=zg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const h=zg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ro(r),s))}(t,e)}function yR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=_R(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _R(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ei(u,h):q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:t.dir})}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $0(this.inner)}size(){return this.innerSize}}/**
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
 */const vR=new ve(W.comparator);function Ln(){return vR}const ow=new ve(W.comparator);function Bi(...t){let e=ow;for(const n of t)e=e.insert(n.key,n);return e}function aw(t){let e=ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return so()}function lw(){return so()}function so(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const wR=new ve(W.comparator),ER=new Me(W.comparator);function ee(...t){let e=ER;for(const n of t)e=e.add(n);return e}const TR=new Me(Z);function IR(){return TR}/**
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
 */function Tu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function _f(t){return{integerValue:""+t}}function SR(t,e){return Gk(e)?_f(e):Tu(t,e)}/**
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
 */class Iu{constructor(){this._=void 0}}function AR(t,e,n){return t instanceof $l?function(s,i){const o={fields:{[W0]:{stringValue:H0},[K0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ff(i)&&(i=_u(i)),i&&(o.fields[q0]=i),{mapValue:o}}(n,e):t instanceof No?cw(t,e):t instanceof Do?hw(t,e):t instanceof Vo?function(s,i){const o=uw(s,i),l=Wl(o)+Wl(s.Ae);return xo(o)&&xo(s.Ae)?_f(l):Tu(s.serializer,l)}(t,e):t instanceof Bl?function(s,i){return Wg(s,i,Math.min)}(t,e):t instanceof Hl?function(s,i){return Wg(s,i,Math.max)}(t,e):void 0}function CR(t,e,n){return t instanceof No?cw(t,e):t instanceof Do?hw(t,e):n}function uw(t,e){return t instanceof Vo?X0(e)?e:{integerValue:0}:null}class $l extends Iu{}class No extends Iu{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends Iu{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class vf extends Iu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class Vo extends vf{}class Bl extends vf{}class Hl extends vf{}function Wg(t,e,n){if(!X0(e))return t.Ae;const r=n(Wl(e),Wl(t.Ae));return xo(e)&&xo(t.Ae)?_f(r):Tu(t.serializer,r)}function Wl(t){return ke(t.integerValue||t.doubleValue)}function dw(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof No&&s instanceof No||r instanceof Do&&s instanceof Do?Zs(r.elements,s.elements,fn):r instanceof Vo&&s instanceof Vo||r instanceof Bl&&s instanceof Bl||r instanceof Hl&&s instanceof Hl?fn(r.Ae,s.Ae):r instanceof $l&&s instanceof $l}(t.transform,e.transform)}class RR{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Su{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wf(t.key,Lt.none()):new Qo(t.key,t.data,Lt.none());{const n=t.data,r=gt.empty();let s=new Me(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xr(t.key,r,new St(s.toArray()),Lt.none())}}function PR(t,e,n){t instanceof Qo?function(s,i,o){const l=s.value.clone(),u=Kg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(s,i,o){if(!tl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof Qo?function(i,o,l,u){if(!tl(i.precondition,o))return l;const h=i.value.clone(),f=Gg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(i,o,l,u){if(!tl(i.precondition,o))return l;const h=Gg(i.fieldTransforms,u,o),f=o.data;return f.setAll(pw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return tl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=uw(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function qg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zs(r,s,(i,o)=>kR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends Su{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xr extends Su{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,CR(o,l,n[s]))}return r}function Gg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AR(i,o,e))}return r}class wf extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NR extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=fw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>qg(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>qg(n,r))}}class Ef{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return wR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ef(e,n,r,s)}}/**
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
 */class VR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,se;function OR(t){switch(t){case L.OK:return q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return q(15467,{code:t})}}function mw(t){if(t===void 0)return On("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return q(39323,{code:t})}}(se=Pe||(Pe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LR(){return new TextEncoder}/**
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
 */const MR=new mr([4294967295,4294967295],0);function Qg(t){const e=LR().encode(t),n=new N0;return n.update(e),new Uint8Array(n.digest())}function Xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class Tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hi(`Invalid padding: ${n}`);if(r<0)throw new Hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare(MR)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qg(e),[r,s]=Xg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Tf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Qg(e),[r,s]=Xg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xo(Q.min(),s,new ve(Z),Ln(),ee())}}class Jo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ee(),ee(),ee())}}/**
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
 */class nl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class gw{constructor(e,n){this.targetId=e,this.Ce=n}}class yw{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jg{constructor(e){this.targetId=e,this.ve=0,this.Fe=Yg(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),n=ee(),r=ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new Jo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Yg()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Li="WatchChangeAggregator";class FR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.Je=Va(),this.He=Va(),this.Ze=new ve(Z)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}else z(Li,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.Ce.count,s=this.st(n);if(s){const i=s.target;if(Bh(i))if(r===0){const o=new W(i.path);this.et(n,o,rt.newNoDocument(o,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Er(r).toUint8Array()}catch(u){if(u instanceof B0)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tf(o,s,i)}catch(u){return is(u instanceof Hi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Pt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Bh(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.et(o,u,rt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ee();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Xo(e,n,this.Ze,this.je,r);return this.je=Ln(),this.Je=Va(),this.He=Va(),this.Ze=new ve(Z),s}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void z(Li,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,n.key)?2:0;r.Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):z(Li,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||(z(Li,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new Jg(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new Me(Z),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new Me(Z),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||z(Li,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Jg(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Va(){return new ve(W.comparator)}function Yg(){return new ve(W.comparator)}const jR={asc:"ASCENDING",desc:"DESCENDING"},UR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zR={and:"AND",or:"OR"};class $R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||yu(e)?e:{value:e}}function ql(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BR(t,e){return ql(t,e.toTimestamp())}function hn(t){return oe(!!t,49232),Q.fromTimestamp(function(n){const r=wr(n);return new pe(r.seconds,r.nanos)}(t))}function If(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vw(t){const e=fe.fromString(t);return oe(Sw(e),10190,{key:e.toString()}),e}function Kh(t,e){return If(t.databaseId,e.path)}function Oc(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Ew(n))}function ww(t,e){return If(t.databaseId,e)}function HR(t){const e=vw(t);return e.length===4?fe.emptyPath():Ew(e)}function Gh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zg(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function WR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:mw(h.code);return new H(f,h.message||"")}(o);n=new yw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):Q.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new nl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(t,r.document),i=r.readTime?hn(r.readTime):Q.min(),o=rt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(t,r.document),i=r.removedTargetIds||[];n=new nl([],i,s,null)}else{if(!("filter"in e))return q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bR(s,i),l=r.targetId;n=new gw(l,o)}}return n}function qR(t,e){let n;if(e instanceof Qo)n={update:Zg(t,e.key,e.value)};else if(e instanceof wf)n={delete:Kh(t,e.key)};else if(e instanceof xr)n={update:Zg(t,e.key,e.data),updateMask:tP(e.fieldMask)};else{if(!(e instanceof NR))return q(16599,{Vt:e.type});n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof $l)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof Hl)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:BR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(t,e.precondition)),n}function KR(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(Q.min())&&(o=hn(i)),new RR(o,s.transformResults||[])}(n,e))):[]}function GR(t,e){return{documents:[ww(t,e.path)]}}function QR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ww(t,s);const i=function(h){if(h.length!==0)return Iw(pn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:_s(g.field),direction:YR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{dt:n,parent:s}}function XR(t){let e=HR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Tw(p);return g instanceof pn&&ew(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new zl(vs(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,yu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,I=p.values||[];return new Ul(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,I=p.values||[];return new Ul(I,g)}(n.endAt)),fR(e,s,o,i,l,"F",u,h)}function JR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>Tw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(n.compositeFilter.op))}(t):q(30097,{filter:t})}function YR(t){return jR[t]}function ZR(t){return UR[t]}function eP(t){return zR[t]}function _s(t){return{fieldPath:t.canonicalString()}}function vs(t){return qe.fromServerFormat(t.fieldPath)}function Iw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Ug(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(jg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ug(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(jg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:ZR(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>Iw(s));return r.length===1?r[0]:{compositeFilter:{op:eP(n.op),filters:r}}}(t):q(54877,{filter:t})}function tP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Aw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Tn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nP{constructor(e){this.gt=e}}function rP(t){const e=XR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
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
 */class sP{constructor(){this.Sn=new iP}addToCollectionParentIndex(e,n){return this.Sn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(vr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class iP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(fe.comparator)).toArray()}}/**
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
 */const ey={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cw=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(Cw,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class Ir{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Ir(0)}static _r(){return new Ir(-1)}}/**
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
 */const ty="LruGarbageCollector",oP=1048576;function ny([t,e],[n,r]){const s=Z(t,n);return s===0?Z(e,r):s}class aP{constructor(e){this.hr=e,this.buffer=new Me(ny),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ny(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){z(ty,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ci(n)?z(ty,"Ignoring IndexedDB error during garbage collection: ",n):await ui(n)}await this.Rr(3e5)})}}class uP{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(gu.ce);const r=new aP(n);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(ey)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ey):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),gs()<=ne.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function cP(t,e){return new uP(t,e)}/**
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
 */class hP{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,St.empty(),pe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Ln();const o=so(),l=function(){return so()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof xr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),io(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new dP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new ve((o,l)=>o-l),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ee()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=lw();f.forEach(g=>{if(!i.has(g)){const I=fw(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return pR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Wr());let l=Co,u=i;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:aw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(p,g){return new vu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,rt.newInvalidDocument(f)))});let l=Bi();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&io(f.mutation,h,St.empty(),pe.now()),Eu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class pP{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return O.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(s){return{name:s.name,query:rP(s.bundledQuery),readTime:hn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class mP{constructor(){this.overlays=new ve(W.comparator),this.Br=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Br.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Wr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Wr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VR(n,r));let i=this.Br.get(n);i===void 0&&(i=ee(),this.Br.set(n,i)),this.Br.set(n,i.add(r.key))}}/**
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
 */class gP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Sf{constructor(){this.Lr=new Me(je.kr),this.qr=new Me(je.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new je(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new W(new fe([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.$r(o),i.push(o.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new W(new fe([])),r=new je(n,e),s=new je(n,e+1);let i=ee();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return W.comparator(e.key,n.key)||Z(e.jr,n.jr)}static Kr(e,n){return Z(e.jr,n.jr)||W.comparator(e.key,n.key)}}/**
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
 */class yP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new Me(je.kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Zr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?df:this.Xn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Hr(o.jr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(Z);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.jr)})}),O.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new je(new W(i),0);let l=new Me(Z);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.jr)),!0)},o),O.resolve(this.Xr(l))}Xr(e){const n=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return O.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new je(n,0),s=this.Jr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _P{constructor(e){this.ei=e,this.docs=function(){return new ve(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Hk(Bk(f),r)<=0||(s.has(f.key)||Eu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){q(9500)}ti(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vP(this)}getSize(e){return O.resolve(this.size)}}class vP extends hP{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
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
 */class wP{constructor(e){this.persistence=e,this.ni=new us(n=>mf(n),gf),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ri=0,this.ii=new Sf,this.targetCount=0,this.si=Ir.sr()}forEachTarget(e,n){return this.ni.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),O.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new Ir(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.cr(n),O.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ni.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.ii.containsKey(n))}}/**
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
 */class kw{constructor(e,n){this.oi={},this.overlays={},this._i=new gu(0),this.ai=!1,this.ai=!0,this.ui=new gP,this.referenceDelegate=e(this),this.ci=new wP(this),this.indexManager=new sP,this.remoteDocumentCache=function(s){return new _P(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new nP(n),this.hi=new pP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new yP(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const s=new EP(this._i.next());return this.referenceDelegate.Pi(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return O.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class EP extends qk{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.Ei=new Sf,this.Ri=null}static Ai(e){return new Af(e)}get Vi(){if(this.Ri)return this.Ri;throw q(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Vi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Vi,r=>{const s=W.fromPath(r);return this.di(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return O.or([()=>O.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Kl{constructor(e,n){this.persistence=e,this.mi=new us(r=>Qk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cP(this,n)}static Ai(e,n){return new Kl(e,n)}Pi(){}Ti(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return O.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,o=>this.yr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),O.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Za(e.data.value)),n}yr(e,n,r){return O.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.mi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Cf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=s}static Is(e,n){let r=ee(),s=ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cf(e,n.fromCache,r,s)}}/**
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
 */class TP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IP{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return uS()?8:Kk(ot())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.fs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.gs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TP;return this.ps(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.ys(e,n,o,l.size)})}).next(()=>i.result)}ys(e,n,r,s){return r.documentReadCount<this.As?(gs()<=ne.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),O.resolve()):(gs()<=ne.DEBUG&&z("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(gs()<=ne.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):O.resolve())}fs(e,n){if(Hg(n))return O.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ee(...i);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ws(n,l);return this.Ss(n,h,o,u.readTime)?this.fs(e,Hh(n,null,"F")):this.bs(e,h,n,u)}))})))}gs(e,n,r,s){return Hg(n)||s.isEqual(Q.min())?O.resolve(null):this.ds.getDocuments(e,r).next(i=>{const o=this.ws(n,i);return this.Ss(n,o,r,s)?O.resolve(null):(gs()<=ne.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.bs(e,o,n,$k(s,Co)).next(l=>l))})}ws(e,n){let r=new Me(iw(e));return n.forEach((s,i)=>{Eu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,n,r){return gs()<=ne.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",ys(n)),this.ds.getDocumentsMatchingQuery(e,n,vr.min(),r)}bs(e,n,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const kf="LocalStore",SP=3e8;class AP{constructor(e,n,r,s){this.persistence=e,this.Ds=n,this.serializer=s,this.Cs=new ve(Z),this.vs=new us(i=>mf(i),gf),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fP(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function CP(t,e,n,r){return new AP(t,e,n,r)}async function Rw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ee();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Os:h,removedBatchIds:o,addedBatchIds:l}))})})}function kP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let I=O.resolve();return g.forEach(P=>{I=I.next(()=>f.getEntry(u,P)).next(D=>{const b=h.docVersions.get(P);oe(b!==null,48541),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Pw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function RP(t,e){const n=X(t),r=e.snapshotVersion;let s=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});s=n.Cs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.ci.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.ci.addMatchingKeys(i,f.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Qe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),function(D,b,C){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=SP?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,I,f)&&l.push(n.ci.updateTargetData(i,I))});let u=Ln(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(PP(i,o,e.documentUpdates).next(f=>{u=f.Ns,h=f.Bs})),!r.isEqual(Q.min())){const f=n.ci.getLastRemoteSnapshotVersion(i).next(p=>n.ci.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Cs=s,i))}function PP(t,e,n){let r=ee(),s=ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(kf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ns:o,Bs:s}})}function xP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=df),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ci.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ci.allocateTargetId(r).next(o=>(s=new Tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=X(t),s=r.Cs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ci(o))throw o;z(kf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function ry(t,e,n){const r=X(t);let s=Q.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),g=p.vs.get(f);return g!==void 0?O.resolve(p.Cs.get(g)):p.ci.getTargetData(h,f)}(r,o,cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:ee())).next(l=>(DP(r,yR(e),l),{documents:l,Ls:i})))}function DP(t,e,n){let r=t.Fs.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Fs.set(e,r)}class sy{constructor(){this.activeTargetIds=IR()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.Co=new sy,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bP{Fo(e){}shutdown(){}}/**
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
 */const iy="ConnectivityMonitor";class oy{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){z(iy,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){z(iy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function Xh(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
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
 */const Lc="RestConnection",OP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LP{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===Fl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,n,r,s,i){const o=Xh(),l=this.Wo(e,n.toUriEncodedString());z(Lc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,s,i);const{host:h}=new URL(l),f=$o(h);return this.Go(e,l,u,r,f).then(p=>(z(Lc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw is(Lc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,n,r,s,i,o){return this.$o(e,n,r,s,i)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+li}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Wo(e,n){const r=OP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class MP{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const et="WebChannelConnection",Mi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class $s extends LP{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!$s.u_){const e=O0();Mi(e,b0.STAT_EVENT,n=>{n.stat===jh.PROXY?z(et,"STAT_EVENT: detected buffering proxy"):n.stat===jh.NOPROXY&&z(et,"STAT_EVENT: detected no buffering proxy")}),$s.u_=!0}}Go(e,n,r,s,i){const o=Xh();return new Promise((l,u)=>{const h=new D0;h.setWithCredentials(!0),h.listenOnce(V0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ya.NO_ERROR:const p=h.getResponseJson();z(et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ya.TIMEOUT:z(et,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=h.getStatus();if(z(et,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const D=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(P.status);u(new H(D,P.message))}else u(new H(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{z(et,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);z(et,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}P_(e,n,r){const s=Xh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");z(et,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.T_(f);let p=!1,g=!1;const I=new MP({jo:P=>{g?z(et,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(z(et,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),z(et,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Jo:()=>f.close()});return Mi(f,$i.EventType.OPEN,()=>{g||(z(et,`RPC '${e}' stream ${s} transport opened.`),I.r_())}),Mi(f,$i.EventType.CLOSE,()=>{g||(g=!0,z(et,`RPC '${e}' stream ${s} transport closed`),I.s_(),this.I_(f))}),Mi(f,$i.EventType.ERROR,P=>{g||(g=!0,is(et,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),I.s_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),Mi(f,$i.EventType.MESSAGE,P=>{var D;if(!g){const b=P.data[0];oe(!!b,16349);const C=b,w=(C==null?void 0:C.error)||((D=C[0])==null?void 0:D.error);if(w){z(et,`RPC '${e}' stream ${s} received error:`,w);const k=w.status;let x=function(v){const y=Pe[v];if(y!==void 0)return mw(y)}(k),M=w.message;k==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&is(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),x===void 0&&(x=L.INTERNAL,M="Unknown error status: "+k+" with message "+w.message),g=!0,I.s_(new H(x,M)),f.close()}else z(et,`RPC '${e}' stream ${s} received:`,b),I.o_(b)}}),$s.a_(),setTimeout(()=>{I.i_()},0),I}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return L0()}}/**
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
 */function FP(t){return new $s(t)}function Mc(){return typeof document<"u"?document:null}/**
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
 */function Au(t){return new $R(t,!0)}/**
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
 */$s.u_=!1;class xw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ay="PersistentStream";class Nw{constructor(e,n,r,s,i,o,l,u){this.Di=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new xw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.Q_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():(z(ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jP extends Nw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=WR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?hn(o.readTime):Q.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Bh(u)?{documents:GR(i,u)}:{query:QR(i,u).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_w(i,o.resumeToken);const h=Wh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=ql(i,o.snapshotVersion.toTimestamp());const h=Wh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=JR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.k_(n)}}class UP extends Nw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=KR(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Gh(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qR(this.serializer,r))};this.k_(n)}}/**
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
 */class zP{}class $P extends zP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.$o(e,qh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}zo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,qh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function BP(t,e,n,r){return new $P(t,e,n,r)}class HP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(On(n),this._a=!1):z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const mn="RemoteStore";class WP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Ir(1e3),this.Aa=new Ir(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{cs(this)&&(z(mn,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.Va.add(4),await Yo(h),h.fa.set("Unknown"),h.Va.delete(4),await Cu(h)}(this))})}),this.fa=new HP(r,s)}}async function Cu(t){if(cs(t))for(const e of t.da)await e(!0)}async function Yo(t){for(const e of t.da)await e(!1)}function Jh(t,e){return t.Ia.get(e)||void 0}function Dw(t,e){const n=X(t),r=Jh(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const s=function(l,u){const h=Jh(l,u);h!==void 0&&l.Ea.delete(h);const f=function(g,I){return I%2!=0?g.Aa.next():g.Ra.next()}(l,u);return l.Ia.set(u,f),l.Ea.set(f,u),f}(n,e.targetId);z(mn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Tn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(s,i),Nf(n)?xf(n):hi(n).x_()&&Pf(n,i)}function Rf(t,e){const n=X(t),r=hi(n),s=Jh(n,e);z(mn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ta.delete(s),n.Ia.delete(e),n.Ea.delete(s),r.x_()&&Vw(n,s),n.Ta.size===0&&(r.x_()?r.B_():cs(n)&&n.fa.set("Unknown"))}function Pf(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void z(mn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}hi(t).H_(e)}function Vw(t,e){t.ga.$e(e),hi(t).Z_(e)}function xf(t){t.ga=new FR({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ee()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.fa.aa()}function Nf(t){return cs(t)&&!hi(t).M_()&&t.Ta.size>0}function cs(t){return X(t).Va.size===0}function bw(t){t.ga=void 0}async function qP(t){t.fa.set("Online")}async function KP(t){t.Ta.forEach((e,n)=>{Pf(t,e)})}async function GP(t,e){bw(t),Nf(t)?(t.fa.la(e),xf(t)):t.fa.set("Unknown")}async function QP(t,e,n){if(t.fa.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ta.has(l)){const u=s.Ea.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ia.delete(u),s.Ea.delete(l)),s.Ta.delete(l)}s.ga.removeTarget(l)}}(t,e)}catch(r){z(mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof nl?t.ga.Xe(e):e instanceof gw?t.ga.it(e):t.ga.tt(e),!n.isEqual(Q.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ga.Pt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ta.get(f);p&&i.Ta.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=i.Ta.get(h);if(!p)return;i.Ta.set(h,p.withResumeToken(Qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Vw(i,h);const g=new Tn(p.target,h,f,p.sequenceNumber);Pf(i,g)});const u=function(f,p){const g=new Map;p.targetChanges.forEach((P,D)=>{const b=f.Ea.get(D);b!==void 0&&g.set(b,P)});let I=new ve(Z);return p.targetMismatches.forEach((P,D)=>{const b=f.Ea.get(P);b!==void 0&&(I=I.insert(b,D))}),new Xo(p.snapshotVersion,g,I,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){z(mn,"Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!ci(e))throw e;t.Va.add(1),await Yo(t),t.fa.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(mn,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await Cu(t)})}function Ow(t,e){return e().catch(n=>Gl(t,n,e))}async function ku(t){const e=X(t),n=Sr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:df;for(;XP(e);)try{const s=await xP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,JP(e,s)}catch(s){await Gl(e,s)}Lw(e)&&Mw(e)}function XP(t){return cs(t)&&t.Pa.length<10}function JP(t,e){t.Pa.push(e);const n=Sr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function Lw(t){return cs(t)&&!Sr(t).M_()&&t.Pa.length>0}function Mw(t){Sr(t).start()}async function YP(t){Sr(t).na()}async function ZP(t){const e=Sr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function ex(t,e,n){const r=t.Pa.shift(),s=Ef.from(r,e,n);await Ow(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ku(t)}async function tx(t,e){e&&Sr(t).X_&&await async function(r,s){if(function(o){return OR(o)&&o!==L.ABORTED}(s.code)){const i=r.Pa.shift();Sr(r).N_(),await Ow(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ku(r)}}(t,e),Lw(t)&&Mw(t)}async function ly(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),z(mn,"RemoteStore received new credentials");const r=cs(n);n.Va.add(3),await Yo(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await Cu(n)}async function nx(t,e){const n=X(t);e?(n.Va.delete(2),await Cu(n)):e||(n.Va.add(2),await Yo(n),n.fa.set("Unknown"))}function hi(t){return t.pa||(t.pa=function(n,r,s){const i=X(n);return i.ia(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ho:qP.bind(null,t),Xo:KP.bind(null,t),e_:GP.bind(null,t),J_:QP.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),Nf(t)?xf(t):t.fa.set("Unknown")):(await t.pa.stop(),bw(t))})),t.pa}function Sr(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.ia(),new UP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:YP.bind(null,t),e_:tx.bind(null,t),ea:ZP.bind(null,t),ta:ex.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await ku(t)):(await t.ya.stop(),t.Pa.length>0&&(z(mn,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
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
 */class Df{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Df(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(t,e){if(On("AsyncQueue",`${e}: ${t}`),ci(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uy{constructor(){this.wa=new ve(W.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):q(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ni{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ni(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rx{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class sx{constructor(){this.queries=cy(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=cy(),i.forEach((o,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function cy(){return new us(t=>sw(t),wu)}async function ix(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.va()&&e.Fa()&&(r=2):(i=new rx,r=e.Fa()?0:1);try{switch(r){case 0:i.Da=await n.onListen(s,!0);break;case 1:i.Da=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Vf(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ca.push(e),e.xa(n.onlineState),i.Da&&e.Oa(i.Da)&&bf(n)}async function ox(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ca.indexOf(e);o>=0&&(i.Ca.splice(o,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ax(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Ca)l.Oa(s)&&(r=!0);o.Da=s}}r&&bf(n)}function lx(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.Ca)i.onError(n);r.queries.delete(e)}function bf(t){t.Ma.forEach(e=>{e.next()})}var Yh,hy;(hy=Yh||(Yh={})).Na="default",hy.Cache="cache";class ux{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Yh.Cache}}/**
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
 */class Fw{constructor(e){this.key=e}}class jw{constructor(e){this.key=e}}class cx{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=ee(),this.mutatedKeys=ee(),this.ru=iw(e),this.iu=new Bs(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new uy,s=n?n.iu:this.iu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),I=Eu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;g&&I?g.data.isEqual(I.data)?P!==D&&(r.track({type:3,doc:I}),b=!0):this.au(g,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.ru(I,u)>0||h&&this.ru(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),b=!0):g&&!I&&(r.track({type:1,doc:g}),b=!0,(u||h)&&(l=!0)),b&&(I?(o=o.add(I),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{iu:o,_u:r,Ss:l,mutatedKeys:i}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((f,p)=>function(I,P){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{At:b})}};return D(I)-D(P)}(f.type,p.type)||this.ru(f.doc,p.doc)),this.uu(r),s=s??!1;const l=n&&!s?this.cu():[],u=this.nu.size===0&&this.current&&!s?1:0,h=u!==this.tu;return this.tu=u,o.length!==0||h?{snapshot:new ni(this.query,e.iu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new uy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=ee(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new jw(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new Fw(r))}),n}Pu(e){this.eu=e.Ls,this.nu=ee();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return ni.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Of="SyncEngine";class hx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dx{constructor(e){this.key=e,this.Iu=!1}}class fx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new us(l=>sw(l),wu),this.Au=new Map,this.Vu=new Set,this.du=new ve(W.comparator),this.mu=new Map,this.fu=new Sf,this.gu={},this.pu=new Map,this.yu=Ir._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function px(t,e,n=!0){const r=Ww(t);let s;const i=r.Ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await Uw(r,e,n,!0),s}async function mx(t,e){const n=Ww(t);await Uw(n,e,!0,!1)}async function Uw(t,e,n,r){const s=await NP(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await gx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Dw(t.remoteStore,s),l}async function gx(t,e,n,r,s){t.Su=(p,g,I)=>async function(D,b,C,w){let k=b.view.ou(C);k.Ss&&(k=await ry(D.localStore,b.query,!1).then(({documents:v})=>b.view.ou(v,k)));const x=w&&w.targetChanges.get(b.targetId),M=w&&w.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(k,D.isPrimaryClient,x,M);return fy(D,b.targetId,F.lu),F.snapshot}(t,p,g,I);const i=await ry(t.localStore,e,!0),o=new cx(e,i.Ls),l=o.ou(i.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);fy(t,n,h.lu);const f=new hx(e,n,o);return t.Ru.set(e,f),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),h.snapshot}async function yx(t,e,n){const r=X(t),s=r.Ru.get(e),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(o=>!wu(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Rf(r.remoteStore,s.targetId),Zh(r,s.targetId)}).catch(ui)):(Zh(r,s.targetId),await Qh(r.localStore,s.targetId,!0))}async function _x(t,e){const n=X(t),r=n.Ru.get(e),s=n.Au.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rf(n.remoteStore,r.targetId))}async function vx(t,e,n){const r=Cx(t);try{const s=await function(o,l){const u=X(o),h=pe.now(),f=l.reduce((I,P)=>I.add(P.key),ee());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Ln(),D=ee();return u.Ms.getEntries(I,f).next(b=>{P=b,P.forEach((C,w)=>{w.isValidDocument()||(D=D.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,P)).next(b=>{p=b;const C=[];for(const w of l){const k=xR(w,p.get(w.key).overlayedDocument);k!=null&&C.push(new xr(w.key,k,J0(k.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,C,l)}).next(b=>{g=b;const C=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(I,b.batchId,C)})}).then(()=>({batchId:g.batchId,changes:aw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.gu[o.currentUser.toKey()];h||(h=new ve(Z)),h=h.insert(l,u),o.gu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Zo(r,s.changes),await ku(r.remoteStore)}catch(s){const i=Vf(s,"Failed to persist write");n.reject(i)}}async function zw(t,e){const n=X(t);try{const r=await RP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.mu.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Iu=!0:s.modifiedDocuments.size>0?oe(o.Iu,14607):s.removedDocuments.size>0&&(oe(o.Iu,42227),o.Iu=!1))}),await Zo(n,r,e)}catch(r){await ui(r)}}function dy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ru.forEach((i,o)=>{const l=o.view.xa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Ca)g.xa(l)&&(h=!0)}),h&&bf(u)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wx(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.mu.get(e),i=s&&s.key;if(i){let o=new ve(W.comparator);o=o.insert(i,rt.newNoDocument(i,Q.min()));const l=ee().add(i),u=new Xo(Q.min(),new Map,new ve(Z),o,l);await zw(r,u),r.du=r.du.remove(i),r.mu.delete(e),Lf(r)}else await Qh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(ui)}async function Ex(t,e){const n=X(t),r=e.batch.batchId;try{const s=await kP(n.localStore,e);Bw(n,r,null),$w(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await ui(s)}}async function Tx(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Bw(r,e,n),$w(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,s)}catch(s){await ui(s)}}function $w(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function Bw(t,e,n){const r=X(t);let s=r.gu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||Hw(t,r)})}function Hw(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Rf(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),Lf(t))}function fy(t,e,n){for(const r of n)r instanceof Fw?(t.fu.addReference(r.key,e),Ix(t,r)):r instanceof jw?(z(Of,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||Hw(t,r.key)):q(19791,{Du:r})}function Ix(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||(z(Of,"New document in limbo: "+n),t.Vu.add(r),Lf(t))}function Lf(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new W(fe.fromString(e)),r=t.yu.next();t.mu.set(r,new dx(n)),t.du=t.du.insert(n,r),Dw(t.remoteStore,new Tn(cn(yf(n.path)),r,"TargetPurposeLimboResolution",gu.ce))}}async function Zo(t,e,n){const r=X(t),s=[],i=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{o.push(r.Su(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Cf.Is(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Eu.J_(s),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,g=>O.forEach(g.Ps,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>O.forEach(g.Ts,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!ci(p))throw p;z(kf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const I=f.Cs.get(g),P=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(P);f.Cs=f.Cs.insert(g,D)}}}(r.localStore,i))}async function Sx(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){z(Of,"User change. New user:",e.toKey());const r=await Rw(n.localStore,e);n.currentUser=e,function(i,o){i.pu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Os)}}function Ax(t,e){const n=X(t),r=n.mu.get(e);if(r&&r.Iu)return ee().add(r.key);{let s=ee();const i=n.Au.get(e);if(!i)return s;for(const o of i){const l=n.Ru.get(o);s=s.unionWith(l.view.su)}return s}}function Ww(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ax.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wx.bind(null,e),e.Eu.J_=ax.bind(null,e.eventManager),e.Eu.bu=lx.bind(null,e.eventManager),e}function Cx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ex.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tx.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Au(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return CP(this.persistence,new IP,e.initialUser,this.serializer)}Mu(e){return new kw(Af.Ai,this.serializer)}Fu(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class kx extends Ql{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){oe(this.persistence.referenceDelegate instanceof Kl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lP(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new kw(r=>Kl.Ai(r,n),this.serializer)}}class ed{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sx.bind(null,this.syncEngine),await nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sx}()}createDatastore(e){const n=Au(e.databaseInfo.databaseId),r=FP(e.databaseInfo);return BP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new WP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return oy.v()?new oy:new bP}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new fx(s,i,o,l,u,h);return f&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);z(mn,"RemoteStore shutting down."),i.Va.add(5),await Yo(i),i.ma.shutdown(),i.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ed.provider={build:()=>new ed};/**
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
 *//**
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
 */class Rx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ar="FirestoreClient";class Px{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=cf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{z(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fc(t,e){t.asyncQueue.verifyOperationInProgress(),z(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xx(t);z(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ly(e.remoteStore,s)),t._onlineComponents=e}async function xx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(Ar,"Using user provided OfflineComponentProvider");try{await Fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Fc(t,new Ql)}}else z(Ar,"Using default OfflineComponentProvider"),await Fc(t,new kx(void 0));return t._offlineComponents}async function qw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(Ar,"Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(z(Ar,"Using default OnlineComponentProvider"),await py(t,new ed))),t._onlineComponents}function Nx(t){return qw(t).then(e=>e.syncEngine)}async function my(t){const e=await qw(t),n=e.eventManager;return n.onListen=px.bind(null,e.syncEngine),n.onUnlisten=yx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_x.bind(null,e.syncEngine),n}function Dx(t,e,n,r){const s=new Rx(r),i=new ux(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>ix(await my(t),i)),()=>{s.ku(),t.asyncQueue.enqueueAndForget(async()=>ox(await my(t),i))}}function Vx(t,e){const n=new Gr;return t.asyncQueue.enqueueAndForget(async()=>vx(await Nx(t),e,n)),n.promise}/**
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
 */function Kw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bx="ComponentProvider",gy=new Map;function Ox(t,e,n,r,s){return new Yk(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Kw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Gw="firestore.googleapis.com",yy=!0;class _y{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gw,this.ssl=yy}else this.host=e.host,this.ssl=e.ssl??yy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oP)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ru{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _y({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _y(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nk;switch(r.type){case"firstParty":return new Ok(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gy.get(n);r&&(z(bx,"Removing Datastore"),gy.delete(n),r.terminate())}(this),Promise.resolve()}}function Lx(t,e,n,r={}){var h;t=un(t,Ru);const s=$o(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&qv(`https://${l}`),i.host!==Gw&&i.host!==l&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ts(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=tt.MOCK_USER;else{f=nS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new tt(g)}t._authCredentials=new Dk(new F0(f,p))}}/**
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
 */class Pu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pu(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Go(n,De._jsonSchema))return new De(e,r||null,new W(fe.fromString(n.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:Ne("string",De._jsonSchemaVersion),referencePath:Ne("string")};class gr extends Pu{constructor(e,n,r){super(e,n,yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new W(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function $t(t,e,...n){if(t=at(t),j0("collection","path",e),t instanceof Ru){const r=fe.fromString(e,...n);return Ng(r),new gr(t,null,r)}{if(!(t instanceof De||t instanceof gr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ng(r),new gr(t.firestore,null,r)}}function We(t,e,...n){if(t=at(t),arguments.length===1&&(e=cf.newId()),j0("doc","path",e),t instanceof Ru){const r=fe.fromString(e,...n);return xg(r),new De(t,null,new W(r))}{if(!(t instanceof De||t instanceof gr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return xg(r),new De(t.firestore,t instanceof gr?t.converter:null,new W(r))}}/**
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
 */const vy="AsyncQueue";class wy{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new xw(this,"async_queue_retry"),this.cc=()=>{const r=Mc();r&&z(vy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new Gr;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ci(e))throw e;z(vy,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,On("INTERNAL UNHANDLED ERROR: ",Ey(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const s=Df.createAndSchedule(this,e,n,r,i=>this.Ic(i));return this.sc.push(s),s}hc(){this.oc&&q(47125,{Ec:Ey(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function Ey(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class os extends Ru{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wy(e),this._firestoreClient=void 0,await e}}}function Mx(t,e){const n=typeof t=="object"?t:Xv(),r=typeof t=="string"?t:Fl,s=Zd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eS("firestore");i&&Lx(s,...i)}return s}function Qw(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Fx(t),t._firestoreClient}function Fx(t){var r,s,i,o;const e=t._freezeSettings(),n=Ox(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Px(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Qe.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Go(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Ne("string",Vt._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class Mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ff{constructor(e){this._methodName=e}}/**
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
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Go(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:Ne("string",dn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Go(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Ne("string",Xt._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const jx=/^__.*__$/;class Ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}class Xw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:t})}}class jf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new jf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Xl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(Jw(this.dataSource)&&jx.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class zx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Au(e)}V(e,n,r,s=!1){return new jf({dataSource:e,methodName:n,targetDoc:r,path:qe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uf(t){const e=t._freezeSettings(),n=Au(t._databaseId);return new zx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yw(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);zf("Data must be an object, but it was:",o,r);const l=Zw(r,o);let u,h;if(i.merge)u=new St(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=bo(e,p,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);nE(f,g)||f.push(g)}u=new St(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Ux(new gt(l),u,h)}class xu extends Ff{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xu}}function $x(t,e,n,r){const s=t.V(1,e,n);zf("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();Pr(r,(u,h)=>{const f=tE(e,u,n);h=at(h);const p=s.wc(f);if(h instanceof xu)i.push(f);else{const g=Nu(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new St(i);return new Xw(o,l,s.fieldTransforms)}function Bx(t,e,n,r,s,i){const o=t.V(1,e,n),l=[bo(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(bo(e,i[g])),u.push(i[g+1]);const h=[],f=gt.empty();for(let g=l.length-1;g>=0;--g)if(!nE(h,l[g])){const I=l[g];let P=u[g];P=at(P);const D=o.wc(I);if(P instanceof xu)h.push(I);else{const b=Nu(P,D);b!=null&&(h.push(I),f.set(I,b))}}const p=new St(h);return new Xw(f,p,o.fieldTransforms)}function Nu(t,e){if(eE(t=at(t)))return zf("Unsupported field value:",e,t),Zw(t,e);if(t instanceof Ff)return function(r,s){if(!Jw(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Nu(l,s.Sc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=pe.fromDate(r);return{timestampValue:ql(s.serializer,i)}}if(r instanceof pe){const i=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ql(s.serializer,i)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:_w(s.serializer,r._byteString)};if(r instanceof De){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:If(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return function(o,l){const u=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[G0]:{stringValue:Q0},[jl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return Tu(l.serializer,f)})}}}}}}(r,s);if(Aw(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${hf(r)}`)}(t,e)}function Zw(t,e){const n={};return $0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=Nu(s,e.gc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof dn||t instanceof Vt||t instanceof De||t instanceof Ff||t instanceof Xt||Aw(t))}function zf(t,e,n){if(!eE(n)||!U0(n)){const r=hf(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function bo(t,e,n){if((e=at(e))instanceof Mf)return e._internalPath;if(typeof e=="string")return tE(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hx=new RegExp("[~\\*/\\[\\]]");function tE(t,e,n){if(e.search(Hx)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function nE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wx{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[jl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new Xt(n)}convertGeoPoint(e){return new dn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_u(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=wr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(Sw(r),9688,{name:e});const s=new Ro(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class rE extends Wx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}const Ty="@firebase/firestore",Iy="4.15.0";/**
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
 */function Sy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class sE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(bo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qx extends sE{data(){return super.data()}}/**
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
 */function Kx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function iE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qr extends sE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qr._jsonSchema={type:Ne("string",Qr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class rl extends Qr{data(e={}){return super.data(e)}}class Hs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Gx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:t})}}/**
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
 */Hs._jsonSchemaVersion="firestore/querySnapshot/1.0",Hs._jsonSchema={type:Ne("string",Hs._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};function td(t,e,n){t=un(t,De);const r=un(t.firestore,os),s=iE(t.converter,e,n),i=Uf(r);return Du(r,[Yw(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function Cn(t,e,n,...r){t=un(t,De);const s=un(t.firestore,os),i=Uf(s);let o;return o=typeof(e=at(e))=="string"||e instanceof Mf?Bx(i,"updateDoc",t._key,e,n,r):$x(i,"updateDoc",t._key,e),Du(s,[o.toMutation(t._key,Lt.exists(!0))])}function oE(t){return Du(un(t.firestore,os),[new wf(t._key,Lt.none())])}function $f(t,e){const n=un(t.firestore,os),r=We(t),s=iE(t.converter,e),i=Uf(t.firestore);return Du(n,[Yw(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function ms(t,...e){var h,f,p;t=at(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Sy(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,l;if(t instanceof De)o=un(t.firestore,os),l=yf(t._key.path),i={next:g=>{e[r]&&e[r](Qx(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=un(t,Pu);o=un(g.firestore,os),l=g._query;const I=new rE(o);i={next:P=>{e[r]&&e[r](new Hs(o,I,g,P))},error:e[r+1],complete:e[r+2]},Kx(t._query)}const u=Qw(o);return Dx(u,l,s,i)}function Du(t,e){const n=Qw(t);return Vx(n,e)}function Qx(t,e,n){const r=n.docs.get(e._key),s=new rE(t);return new Qr(t,s,e._key,r,new Wi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){xk(oi),Ys(new ns("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new os(new Vk(r.getProvider("auth-internal")),new Lk(o,r.getProvider("app-check-internal")),Zk(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pr(Ty,Iy,e),pr(Ty,Iy,"esm2020")})();const Xx={apiKey:"AIzaSyAEy_uqAMv2iOTggVO5s6WLjLml-SLM1gY",authDomain:"plan-garden.firebaseapp.com",projectId:"plan-garden",storageBucket:"plan-garden.firebasestorage.app",messagingSenderId:"423356619921",appId:"1:423356619921:web:f6fd35bcc3f6ed1fb2b330",measurementId:"G-CT751EHPMW"},aE=Qv(Xx),Oa=Rk(aE),st=Mx(aE),zt="plan-garden",In=[{id:"t01",name:"새싹 정원",color:"#4ade80",icons:["🌰","🌱","🌿","🌷","🌳"],stages:["씨앗","새싹","작은 풀잎","꽃봉오리","빛나는 정원"]},{id:"t02",name:"우주선 키우기",color:"#60a5fa",icons:["⚙️","🚀","🛰️","🛸","🌌"],stages:["부품","작은 로켓","탐사선","우주선","별빛 항해선"]},{id:"t03",name:"몬스터 진화",color:"#c084fc",icons:["🥚","🦖","🐉","🐲","👹"],stages:["알","아기 몬스터","장난꾸러기","강한 몬스터","전설 몬스터"]},{id:"t04",name:"고양이 마을",color:"#fbbf24",icons:["🐾","🧶","🐈","🏠","🏰"],stages:["길고양이","작은 집","고양이 가게","고양이 광장","고양이 왕국"]},{id:"t05",name:"마법 도서관",color:"#818cf8",icons:["🪶","📜","📚","🔮","🏛️"],stages:["빈 책상","책 더미","마법책","비밀 서가","대마법 도서관"]},{id:"t06",name:"바닷속 산호섬",color:"#2dd4bf",icons:["🫧","🪸","🐠","🐬","🧜‍♀️"],stages:["모래 바닥","작은 산호","물고기 무리","산호 정원","심해 궁전"]},{id:"t07",name:"구름 왕국",color:"#bae6fd",icons:["☁️","🌤️","⛅","🌈","🏰"],stages:["작은 구름","구름 계단","하늘 집","무지개 다리","구름 성"]},{id:"t08",name:"사막 오아시스",color:"#fcd34d",icons:["🏜️","🐪","🌴","⛺","🕌"],stages:["모래언덕","작은 샘","야자수","오아시스 마을","황금 궁전"]},{id:"t09",name:"눈꽃 마을",color:"#e0f2fe",icons:["❄️","⛄","🛖","⛸️","🏰"],stages:["눈송이","작은 오두막","눈사람 마을","얼음 정원","오로라 성"]},{id:"t10",name:"도시 건설",color:"#9ca3af",icons:["🧱","🏗️","🏪","🏢","🏙️"],stages:["빈 땅","작은 가게","거리","빌딩 숲","빛나는 도시"]},{id:"t11",name:"커피 연구소",color:"#78350f",icons:["🫘","☕","🍯","🧪","🏪"],stages:["원두","작은 카페","로스팅 룸","연구소","마스터 카페"]},{id:"t12",name:"용의 둥지",color:"#ef4444",icons:["🔥","🐉","🌋","🏰","👑"],stages:["용알","아기 용","작은 둥지","하늘 나는 용","고대 용의 성"]},{id:"t13",name:"달빛 기차",color:"#4f46e5",icons:["🎫","🚂","🛤️","🚉","🌌"],stages:["낡은 역","작은 열차","달빛 철로","별의 플랫폼","은하 특급"]},{id:"t14",name:"숲속 동물원",color:"#16a34a",icons:["🍃","🐰","🦊","🎪","🏞️"],stages:["풀밭","토끼 굴","동물 친구들","숲속 축제","대자연 보호구역"]},{id:"t15",name:"미니 행성",color:"#a78bfa",icons:["🪨","🌍","🪐","🌟","✨"],stages:["작은 돌덩이","풀밭 행성","물 행성","문명 행성","빛나는 행성"]},{id:"t16",name:"요리 왕국",color:"#f97316",icons:["🍳","🥘","🍱","👨‍🍳","🏰"],stages:["작은 냄비","주방","레스토랑","왕실 주방","미식 왕국"]},{id:"t17",name:"탐험가 캠프",color:"#65a30d",icons:["🎒","⛺","🔥","🗺️","⛰️"],stages:["배낭","텐트","캠프파이어","탐험 기지","전설의 지도"]},{id:"t18",name:"음악 스튜디오",color:"#ec4899",icons:["🎵","🎸","🎧","🎹","🎭"],stages:["작은 악보","악기 방","녹음실","콘서트홀","별빛 무대"]},{id:"t19",name:"문구점 세계",color:"#f43f5e",icons:["✏️","📓","🖍️","🏪","🎨"],stages:["연필","노트","책상","문구점","창작 아틀리에"]},{id:"t20",name:"시간의 탑",color:"#d97706",icons:["⏳","🕰️","⚙️","🔭","🗼"],stages:["낡은 시계","작은 탑","톱니바퀴 방","시간 관측소","영원의 탑"]},{id:"t21",name:"유령 저택",color:"#6b7280",icons:["🕯️","🚪","👻","🏰","🦇"],stages:["촛불","작은 방","유령 친구","비밀 저택","달밤의 성"]},{id:"t22",name:"벌꿀 정원",color:"#eab308",icons:["🌼","🐝","🍯","🌻","👑"],stages:["꽃씨","벌집","꿀단지","꽃밭","황금 벌꿀 왕국"]},{id:"t23",name:"로봇 공장",color:"#3b82f6",icons:["🔩","🤖","⚙️","🏭","🚀"],stages:["나사","작은 로봇","조립 라인","자동 공장","슈퍼 로봇 기지"]},{id:"t24",name:"별자리 박물관",color:"#1e3a8a",icons:["⭐","🌌","🖼️","🔭","🏛️"],stages:["작은 별","별자리판","전시관","천문대","우주 박물관"]},{id:"t25",name:"요정 숲",color:"#84cc16",icons:["✨","🍄","🧚","🌲","🏰"],stages:["반딧불","작은 버섯집","요정 마을","마법 숲","요정 왕국"]},{id:"t26",name:"고대 유적",color:"#b45309",icons:["🪨","🏛️","🏺","🗺️","👑"],stages:["돌조각","기둥","신전 입구","유적 도시","잊힌 왕국"]},{id:"t27",name:"해적섬",color:"#111827",icons:["📦","⛵","🏴‍☠️","🏝️","⚓"],stages:["나무상자","작은 배","해적 깃발","보물섬","전설의 함대"]},{id:"t28",name:"영화 제작소",color:"#be185d",icons:["🎬","🎥","🎞️","🍿","🏆"],stages:["카메라","작은 세트장","편집실","시사회장","대작 스튜디오"]},{id:"t29",name:"놀이공원",color:"#db2777",icons:["🎟️","🎠","🎡","🎢","🎪"],stages:["티켓","작은 회전목마","놀이기구","퍼레이드","환상의 놀이공원"]},{id:"t30",name:"별빛 정원",color:"#312e81",icons:["🌱","✨","🌸","🌌","👑"],stages:["작은 별씨앗","별빛 새싹","은하 꽃","우주 정원","영원의 정원"]}],Jx=[{id:"cat_study",name:"공부",color:"#60a5fa"},{id:"cat_work",name:"업무",color:"#f87171"},{id:"cat_health",name:"운동",color:"#4ade80"},{id:"cat_rest",name:"휴식",color:"#facc15"},{id:"cat_sleep",name:"수면",color:"#818cf8"},{id:"cat_etc",name:"기타",color:"#9ca3af"}],jc={totalSuccessDays:0,totalExp:0,level:1,currentThemeIndex:0,currentThemeProgress:0,themeDuration:100,selectedDisplayThemeId:null,streak:0,history:{}},Kt={getTodayStr:(t=0)=>{const e=new Date;return e.setDate(e.getDate()+t),`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},calculateDailyRate:(t,e,n,r)=>{const s=t.filter(h=>h.date===r),i=e.filter(h=>h.isActive),o=s.filter(h=>h.completed).length,l=i.filter(h=>n.find(f=>f.taskId===h.id&&f.date===r&&f.completed)).length,u=s.length+i.length;return u===0?0:(o+l)/u},addProgressIfSuccess:async(t,e,n,r,s)=>{var w;if(n<.6||(e.history[r]||{}).progressAdded)return;let{totalSuccessDays:o,totalExp:l,level:u,currentThemeIndex:h,currentThemeProgress:f,streak:p,themeDuration:g}=e;const I=g||100;l+=30,u=Math.floor(l/100)+1;const P=Kt.getTodayStr(-1);(w=e.history[P])!=null&&w.success?p+=1:p=1,o+=1;let D=!1;h<In.length&&(f+=1,f>=I&&(f=0,h+=1,D=!0));const b={...e.history,[r]:{success:!0,progressAdded:!0}},C={totalSuccessDays:o,totalExp:l,level:u,currentThemeIndex:h,currentThemeProgress:f,streak:p,history:b};await Cn(We(st,"artifacts",zt,"users",t,"profile","gamestats"),C),s("목표 달성! 🚀","성장 진행도가 1일 증가했습니다. (+30XP)","✨"),D&&h<In.length&&setTimeout(()=>s("새로운 테마 해금! 🎉",`'${In[h].name}' 테마가 열렸습니다!`,In[h].icons[0]),1500)}};function Yx(){const[t,e]=re.useState(null),[n,r]=re.useState("today"),[s,i]=re.useState(!1),[o,l]=re.useState([]),[u,h]=re.useState([]),[f,p]=re.useState([]),[g,I]=re.useState([]),[P,D]=re.useState({}),[b,C]=re.useState(jc),[w,k]=re.useState(!0),[x,M]=re.useState([]);re.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await pC(Oa,__initial_auth_token):await yg(Oa)}catch(A){console.warn("Auth initial error fallback",A);try{await yg(Oa)}catch{}}})();const S=yC(Oa,e);return()=>S()},[]),re.useEffect(()=>{if(!t)return;const _=We(st,"artifacts",zt,"users",t.uid),S=ms(We($t(_,"profile"),"gamestats"),Ae=>{Ae.exists()?C({...jc,...Ae.data()}):td(We($t(_,"profile"),"gamestats"),jc),k(!1)}),A=ms($t(_,"categories"),Ae=>{Ae.empty?Jx.forEach(le=>td(We($t(_,"categories"),le.id),le)):I(Ae.docs.map(le=>({id:le.id,...le.data()})))}),R=ms($t(_,"tasks"),Ae=>l(Ae.docs.map(le=>({id:le.id,...le.data()})))),E=ms($t(_,"recurringTasks"),Ae=>h(Ae.docs.map(le=>({id:le.id,...le.data()})))),ge=ms($t(_,"taskCompletions"),Ae=>p(Ae.docs.map(le=>({id:le.id,...le.data()})))),Xe=ms($t(_,"timeLogs"),Ae=>{const le={};Ae.docs.forEach($=>{le[$.id]=$.data().blocks||{}}),D(le)});return()=>{S(),A(),R(),E(),ge(),Xe()}},[t]);const F=(_,S,A)=>M(R=>[...R,{id:Date.now(),title:_,message:S,icon:A}]),v=async(_,S,A=!1)=>{if(!t)return;const R=Kt.getTodayStr(),E=!S;if(A){const ge=f.find(Xe=>Xe.taskId===_&&Xe.date===R);ge?await Cn(We(st,"artifacts",zt,"users",t.uid,"taskCompletions",ge.id),{completed:E}):await $f($t(st,"artifacts",zt,"users",t.uid,"taskCompletions"),{taskId:_,date:R,completed:E})}else await Cn(We(st,"artifacts",zt,"users",t.uid,"tasks",_),{completed:E});if(E){const ge=A?[...f,{taskId:_,date:R,completed:!0}]:f,Xe=A?o:o.map(le=>le.id===_?{...le,completed:!0}:le),Ae=Kt.calculateDailyRate(Xe,u,ge,R);Kt.addProgressIfSuccess(t.uid,b,Ae,R,F)}},y=async _=>{var A;JSON.stringify(P[_]||{}).length>5&&_===Kt.getTodayStr()&&!((A=b.history)!=null&&A[`${_}_time_reward`])&&(await Cn(We(st,"artifacts",zt,"users",t.uid,"profile","gamestats"),{history:{...b.history,[`${_}_time_reward`]:!0},totalExp:b.totalExp+15}),F("꼼꼼한 기록가 ⏱️","오늘 첫 시간 기록을 남겼습니다! (+15XP)","📝"))};return w?T.jsx("div",{className:"flex h-screen items-center justify-center bg-stone-50",children:"데이터 불러오는 중..."}):T.jsxs("div",{className:"flex flex-col h-screen max-w-md mx-auto bg-stone-50 text-stone-800 shadow-xl overflow-hidden relative",children:[T.jsxs("header",{className:"px-5 py-4 bg-white shadow-sm z-10 flex justify-between items-center",children:[T.jsxs("h1",{className:"font-bold text-xl text-stone-800 flex items-center gap-2",children:[T.jsx(Ym,{className:"text-emerald-500"})," Chrono Bloom"]}),T.jsxs("div",{className:"flex gap-2 text-xs font-semibold items-center",children:[T.jsxs("span",{className:"flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-full text-stone-600",children:["Lv.",b.level]}),T.jsxs("span",{className:"flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full",children:[T.jsx(B1,{size:12})," ",b.totalExp,"XP"]}),T.jsx("button",{onClick:()=>i(!0),className:"p-1 text-stone-400 hover:text-stone-600 ml-1 transition-colors",children:T.jsx(F1,{size:18})})]})]}),T.jsxs("main",{className:"flex-1 overflow-y-auto pb-20 no-scrollbar bg-stone-50",children:[n==="today"&&T.jsx(Zx,{user:t,appId:zt,tasks:o,recurringTasks:u,taskCompletions:f,categories:g,handleTaskToggle:v,stats:b}),n==="recurring"&&T.jsx(e2,{user:t,appId:zt,recurringTasks:u,categories:g}),n==="tracker"&&T.jsx(t2,{user:t,appId:zt,categories:g,timeLogs:P,onLogUpdate:y}),n==="growth"&&T.jsx(s2,{stats:b}),n==="collection"&&T.jsx(i2,{user:t,appId:zt,stats:b}),n==="map"&&T.jsx(o2,{stats:b}),n==="stats"&&T.jsx(r2,{categories:g,timeLogs:P})]}),T.jsx("nav",{className:"absolute bottom-0 w-full bg-white border-t border-stone-200 z-20 pb-safe",children:T.jsxs("div",{className:"flex overflow-x-auto no-scrollbar px-2 py-2 items-center min-w-max gap-1",children:[T.jsx(Fr,{icon:T.jsx(C1,{size:22}),label:"Today",active:n==="today",onClick:()=>r("today")}),T.jsx(Fr,{icon:T.jsx(x1,{size:22}),label:"반복",active:n==="recurring",onClick:()=>r("recurring")}),T.jsx(Fr,{icon:T.jsx(S1,{size:22}),label:"시간기록",active:n==="tracker",onClick:()=>r("tracker")}),T.jsx(Fr,{icon:T.jsx(g1,{size:22}),label:"통계",active:n==="stats",onClick:()=>r("stats")}),T.jsx(Fr,{icon:T.jsx(Ym,{size:22}),label:"성장",active:n==="growth",onClick:()=>r("growth")}),T.jsx(Fr,{icon:T.jsx(R1,{size:22}),label:"컬렉션",active:n==="collection",onClick:()=>r("collection")}),T.jsx(Fr,{icon:T.jsx(b1,{size:22}),label:"월드맵",active:n==="map",onClick:()=>r("map")})]})}),x.length>0&&T.jsx(l2,{data:x[0],onClose:()=>M(_=>_.slice(1))}),s&&T.jsx(a2,{user:t,appId:zt,stats:b,onClose:()=>i(!1)})]})}const Zx=({user:t,appId:e,tasks:n,recurringTasks:r,taskCompletions:s,categories:i,handleTaskToggle:o,stats:l})=>{const[u,h]=re.useState(""),f=Kt.getTodayStr(),p=n.filter(x=>x.date===f),g=r.filter(x=>x.isActive),I=p.length+g.length,P=p.filter(x=>x.completed).length,D=g.filter(x=>s.find(M=>M.taskId===x.id&&M.date===f&&M.completed)).length,b=P+D,C=I===0?0:Math.round(b/I*100),w=async x=>{x.preventDefault(),!(!u.trim()||!t)&&(await $f($t(st,"artifacts",e,"users",t.uid,"tasks"),{title:u,completed:!1,date:f}),h(""))},k=async x=>{t&&await oE(We(st,"artifacts",e,"users",t.uid,"tasks",x))};return T.jsxs("div",{className:"p-5 space-y-6",children:[T.jsxs("div",{className:"bg-white p-5 rounded-3xl shadow-sm border border-stone-100 relative overflow-hidden",children:[T.jsx("div",{className:"absolute top-0 left-0 w-2 h-full bg-blue-500"}),T.jsxs("div",{className:"flex justify-between items-end mb-4 pl-2",children:[T.jsxs("div",{children:[T.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"오늘의 여정"}),T.jsx("p",{className:"text-stone-400 text-sm mt-1",children:I===0?"계획을 추가해보세요.":"60% 달성 시 성장 진행도가 오릅니다."})]}),T.jsxs("div",{className:"text-right",children:[T.jsx("span",{className:"text-3xl font-bold text-blue-600",children:b}),T.jsxs("span",{className:"text-stone-400 font-medium",children:[" / ",I]})]})]}),T.jsx("div",{className:"h-4 w-full bg-stone-100 rounded-full overflow-hidden ml-2",children:T.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${C>=60?"bg-emerald-500":"bg-blue-500"}`,style:{width:`${C}%`}})})]}),T.jsxs("div",{className:"space-y-3",children:[g.map(x=>{const M=!!s.find(v=>v.taskId===x.id&&v.date===f&&v.completed),F=i.find(v=>v.id===x.categoryId);return T.jsxs("div",{className:"flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden",children:[T.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1.5",style:{backgroundColor:(F==null?void 0:F.color)||"#cbd5e1"}}),T.jsx("button",{onClick:()=>o(x.id,M,!0),className:"ml-2 text-stone-300 hover:text-blue-500",children:M?T.jsx(Rl,{className:"text-blue-500",size:26}):T.jsx(Jm,{size:26})}),T.jsxs("div",{className:"flex-1",children:[T.jsx("div",{className:"flex items-center gap-2 mb-1",children:T.jsxs("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded text-white",style:{backgroundColor:(F==null?void 0:F.color)||"#94a3b8"},children:[(F==null?void 0:F.name)||"분류없음"," 🔁"]})}),T.jsx("span",{className:`block ${M?"text-stone-400 line-through":"text-stone-700 font-medium"}`,children:x.title})]})]},x.id)}),p.map(x=>T.jsxs("div",{className:"flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 group",children:[T.jsx("button",{onClick:()=>o(x.id,x.completed),className:"text-stone-300 hover:text-blue-500",children:x.completed?T.jsx(Rl,{className:"text-blue-500",size:26}):T.jsx(Jm,{size:26})}),T.jsx("span",{className:`flex-1 font-medium ${x.completed?"text-stone-400 line-through":"text-stone-700"}`,children:x.title}),T.jsx("button",{onClick:()=>k(x.id),className:"text-stone-200 hover:text-red-400 opacity-0 group-hover:opacity-100 p-2",children:T.jsx(jv,{size:16})})]},x.id))]}),T.jsxs("form",{onSubmit:w,className:"relative mt-4",children:[T.jsx("input",{type:"text",value:u,onChange:x=>h(x.target.value),placeholder:"단건 계획 추가...",className:"w-full bg-white border border-stone-200 rounded-2xl py-4 pl-4 pr-12 focus:ring-2 outline-none shadow-sm"}),T.jsx("button",{type:"submit",disabled:!u.trim(),className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-800 text-white rounded-xl disabled:bg-stone-300",children:T.jsx(L1,{size:20})})]})]})},e2=({user:t,appId:e,recurringTasks:n,categories:r})=>{const[s,i]=re.useState(!1),[o,l]=re.useState(""),[u,h]=re.useState(""),f=async I=>{if(I.preventDefault(),!t||!o.trim()||!u)return alert("제목과 카테고리를 입력하세요.");await $f($t(st,"artifacts",e,"users",t.uid,"recurringTasks"),{title:o,categoryId:u,isActive:!0,createdAt:new Date().toISOString()}),i(!1),l("")},p=async(I,P)=>{t&&await Cn(We(st,"artifacts",e,"users",t.uid,"recurringTasks",I),{isActive:!P})},g=async I=>{!t||!window.confirm("이 반복 할 일을 완전히 삭제하시겠습니까?")||await oE(We(st,"artifacts",e,"users",t.uid,"recurringTasks",I))};return T.jsxs("div",{className:"p-5",children:[T.jsxs("div",{className:"flex justify-between items-center mb-6",children:[T.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"반복 할 일 관리"}),T.jsx("button",{onClick:()=>i(!s),className:"bg-stone-800 text-white px-3 py-1.5 rounded-xl text-sm font-medium",children:s?"닫기":"+ 새 반복 추가"})]}),s&&T.jsxs("form",{onSubmit:f,className:"bg-white p-5 rounded-2xl shadow-sm border border-stone-100 mb-6 space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"제목"}),T.jsx("input",{type:"text",value:o,onChange:I=>l(I.target.value),placeholder:"예: 단어 50개 외우기",className:"w-full border rounded-xl p-3 outline-none"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"카테고리"}),T.jsxs("select",{value:u,onChange:I=>h(I.target.value),className:"w-full border rounded-xl p-3 outline-none bg-white",children:[T.jsx("option",{value:"",children:"선택..."}),r.map(I=>T.jsx("option",{value:I.id,children:I.name},I.id))]})]}),T.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white font-bold py-3 rounded-xl",children:"저장하기"})]}),T.jsx("div",{className:"space-y-3",children:n.map(I=>{const P=r.find(D=>D.id===I.categoryId);return T.jsxs("div",{className:`bg-white p-4 rounded-2xl border flex items-center gap-3 transition-opacity ${I.isActive?"shadow-sm":"opacity-50"}`,children:[T.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:(P==null?void 0:P.color)||"#ccc"}}),T.jsxs("div",{className:"flex-1",children:[T.jsx("div",{className:"text-xs text-stone-400 mb-1",children:P==null?void 0:P.name}),T.jsx("h3",{className:`font-bold text-stone-800 ${!I.isActive&&"line-through"}`,children:I.title})]}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:()=>p(I.id,I.isActive),className:"text-xs px-2 py-1 bg-stone-100 rounded-lg text-stone-600 font-medium hover:bg-stone-200",children:I.isActive?"끄기":"켜기"}),T.jsx("button",{onClick:()=>g(I.id),className:"p-1.5 text-stone-400 hover:text-red-500",children:T.jsx(jv,{size:16})})]})]},I.id)})})]})},t2=({user:t,appId:e,categories:n,timeLogs:r,onLogUpdate:s})=>{const[i,o]=re.useState(Kt.getTodayStr()),[l,u]=re.useState(""),[h,f]=re.useState(!1),[p,g]=re.useState(!1),I=Array.from({length:48},(x,M)=>M),P=r[i]||{},D=async(x,M)=>{if(!t)return;const F={...P};M?F[x]=M:F[x]=null,await td(We(st,"artifacts",e,"users",t.uid,"timeLogs",i),{blocks:F,updatedAt:new Date().toISOString()},{merge:!0}),s(i)},b=x=>{f(!0),D(x,l)},C=x=>{h&&D(x,l)},w=()=>f(!1),k=x=>{if(!h)return;const M=x.touches[0],F=document.elementFromPoint(M.clientX,M.clientY);F&&F.dataset.index&&D(F.dataset.index,l)};return T.jsxs("div",{className:"h-full flex flex-col bg-white select-none",children:[T.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-stone-100 bg-white sticky top-0 z-20 shadow-sm",children:[T.jsx("button",{onClick:()=>o(Kt.getTodayStr(new Date(i).getDate()-1-new Date().getDate())),className:"p-2 text-stone-400",children:T.jsx(w1,{})}),T.jsx("h2",{className:"font-bold text-stone-800",children:i===Kt.getTodayStr()?"오늘":i}),T.jsx("button",{onClick:()=>o(Kt.getTodayStr(new Date(i).getDate()+1-new Date().getDate())),className:"p-2 text-stone-400",children:T.jsx(_1,{})})]}),T.jsxs("div",{className:"p-3 bg-stone-50 border-b flex gap-2 overflow-x-auto no-scrollbar z-20",children:[T.jsx("button",{onClick:()=>u(""),className:`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${l===""?"border-stone-800 bg-white":"border-transparent bg-stone-200 text-stone-500"}`,children:"지우개 🧽"}),n.map(x=>T.jsx("button",{onClick:()=>u(x.id),className:"flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all shadow-sm text-white",style:{backgroundColor:x.color,borderColor:l===x.id?"#1c1917":"transparent",transform:l===x.id?"scale(1.05)":"scale(1)"},children:x.name},x.id)),T.jsx("button",{onClick:()=>g(!0),className:"flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center hover:bg-stone-300 ml-2",children:T.jsx(U1,{size:14})})]}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-4 relative",onMouseUp:w,onMouseLeave:w,onTouchEnd:w,onTouchCancel:w,onTouchMove:k,children:[T.jsx("div",{className:"absolute top-0 left-12 bottom-0 w-px bg-stone-200"}),I.map(x=>{const M=Math.floor(x/2),F=x%2!==0,v=P[x],y=n.find(S=>S.id===v),_=y?y.color:"#f8fafc";return T.jsxs("div",{className:"flex group h-10 relative",children:[T.jsx("div",{className:"w-12 pr-2 text-right relative -top-3",children:!F&&T.jsxs("span",{className:"text-[10px] font-bold text-stone-400",children:[String(M).padStart(2,"0"),":00"]})}),T.jsx("div",{className:"flex-1 pl-4 pb-1 relative",children:T.jsx("div",{"data-index":x,onMouseDown:()=>b(x),onMouseEnter:()=>C(x),onTouchStart:()=>b(x),className:"w-full h-full rounded-md border border-white transition-colors cursor-pointer shadow-sm relative overflow-hidden group-hover:brightness-95",style:{backgroundColor:_},children:v&&T.jsx("span",{className:"absolute inset-0 flex items-center px-2 text-[10px] font-bold text-white/80 opacity-0 group-hover:opacity-100",children:y==null?void 0:y.name})})})]},x)})]}),p&&T.jsx(n2,{user:t,appId:e,categories:n,onClose:()=>g(!1)})]})},n2=({user:t,appId:e,categories:n,onClose:r})=>{const[s,i]=re.useState([...n]),[o,l]=re.useState(!1),u=(p,g)=>i(I=>I.map(P=>P.id===p?{...P,name:g}:P)),h=(p,g)=>i(I=>I.map(P=>P.id===p?{...P,color:g}:P)),f=async()=>{t&&(l(!0),await Promise.all(s.map(p=>Cn(We(st,"artifacts",e,"users",t.uid,"categories",p.id),{name:p.name,color:p.color}))),l(!1),r())};return T.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300",children:T.jsxs("div",{className:"bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl flex flex-col max-h-[80vh]",children:[T.jsxs("div",{className:"flex justify-between items-center mb-4",children:[T.jsx("h3",{className:"text-xl font-bold text-stone-800",children:"카테고리 편집"}),T.jsx("button",{onClick:r,className:"text-stone-400 hover:text-stone-600",children:T.jsx(Xd,{size:20})})]}),T.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-4 pr-2 no-scrollbar",children:s.map(p=>T.jsxs("div",{className:"flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100",children:[T.jsx("div",{className:"w-8 h-8 rounded-full overflow-hidden border-2 border-stone-200 flex-shrink-0 relative",children:T.jsx("input",{type:"color",value:p.color,onChange:g=>h(p.id,g.target.value),className:"absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0"})}),T.jsx("input",{type:"text",value:p.name,onChange:g=>u(p.id,g.target.value),className:"flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-stone-700 font-medium",placeholder:"카테고리 이름"})]},p.id))}),T.jsx("button",{onClick:f,disabled:o,className:"w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 disabled:opacity-50",children:o?"저장 중...":"완료"})]})})},r2=({categories:t,timeLogs:e})=>{const n=Kt.getTodayStr(),r=e[n]||{},s={};let i=0;Object.values(r).forEach(l=>{l&&(s[l]=(s[l]||0)+1,i++)});const o=Object.entries(s).sort(([,l],[,u])=>u-l).map(([l,u])=>({cat:t.find(h=>h.id===l)||{name:"알수없음",color:"#ccc"},hours:u*.5,percentage:Math.round(u/Math.max(1,i)*100)}));return T.jsxs("div",{className:"p-5 space-y-6",children:[T.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"오늘의 시간 통계"}),T.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center",children:[T.jsx("p",{className:"text-stone-500 font-medium mb-1",children:"총 기록 시간"}),T.jsxs("p",{className:"text-4xl font-bold text-stone-800",children:[i*.5,T.jsx("span",{className:"text-lg text-stone-400 ml-1",children:"시간"})]})]}),T.jsxs("div",{className:"bg-white p-5 rounded-3xl shadow-sm border border-stone-100",children:[T.jsx("h3",{className:"font-bold text-stone-800 mb-4",children:"카테고리별 사용"}),T.jsx("div",{className:"space-y-4",children:o.length===0?T.jsx("p",{className:"text-center text-stone-400 py-4",children:"아직 기록된 시간이 없습니다."}):o.map(({cat:l,hours:u,percentage:h},f)=>T.jsxs("div",{className:"relative",children:[T.jsxs("div",{className:"flex justify-between text-sm font-bold text-stone-700 mb-1",children:[T.jsxs("span",{className:"flex items-center gap-1",children:[T.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:l.color}}),l.name]}),T.jsxs("span",{children:[u,"h (",h,"%)"]})]}),T.jsx("div",{className:"h-2 w-full bg-stone-100 rounded-full overflow-hidden",children:T.jsx("div",{className:"h-full rounded-full",style:{width:`${h}%`,backgroundColor:l.color}})})]},f))})]})]})},s2=({stats:t})=>{const e=t.themeDuration||100,n=t.selectedDisplayThemeId!==null,r=n?In.findIndex(I=>I.id===t.selectedDisplayThemeId):t.currentThemeIndex,s=Math.min(r,In.length-1),i=In[s],l=t.currentThemeIndex>s||n?e:t.currentThemeProgress,u=Math.min(Math.floor(l/e*5),4),h=i.icons[u],f=i.stages[u],g=Math.ceil((u+1)*(e/5))-l;return T.jsxs("div",{className:"p-5 h-full flex flex-col items-center pt-10 relative overflow-hidden bg-stone-50",children:[T.jsx("div",{className:"absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-30",style:{backgroundColor:i.color}}),T.jsx("div",{className:"absolute bottom-40 right-10 w-40 h-40 rounded-full blur-3xl opacity-20",style:{backgroundColor:i.color}}),T.jsxs("div",{className:"bg-white px-5 py-2 rounded-full shadow-sm text-sm font-bold border border-stone-100 mb-6 z-10 flex items-center gap-2",style:{color:i.color},children:[T.jsxs("span",{children:["테마 ",s+1]})," ",T.jsx("span",{className:"text-stone-300",children:"|"})," ",T.jsx("span",{className:"text-stone-600",children:i.name})]}),T.jsxs("div",{className:"w-56 h-56 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-4 border-white z-10 relative mb-8 transition-transform hover:scale-105 duration-300",children:[T.jsx("span",{className:"text-8xl drop-shadow-lg",children:h}),u>=4&&T.jsx("div",{className:"absolute inset-0 bg-yellow-200/30 rounded-full blur-xl animate-pulse -z-10"})]}),T.jsxs("div",{className:"text-center z-10 w-full px-4",children:[T.jsxs("h2",{className:"text-2xl font-bold mb-1 text-stone-800",children:[u+1,"단계: ",f]}),l>=e?T.jsx("p",{className:"text-emerald-500 font-bold mb-6",children:"마스터한 테마입니다! ✨"}):T.jsxs("p",{className:"text-stone-500 text-sm mb-6",children:["다음 변화까지 ",T.jsxs("span",{className:"font-bold text-stone-700",children:[g,"일"]})," 남음"]}),T.jsxs("div",{className:"bg-white p-4 rounded-3xl shadow-sm border border-stone-100",children:[T.jsxs("div",{className:"flex justify-between text-xs font-bold text-stone-500 mb-2 px-1",children:[T.jsx("span",{children:"테마 진행도"}),T.jsxs("span",{children:[l," / ",e," 일"]})]}),T.jsx("div",{className:"h-4 w-full bg-stone-100 rounded-full overflow-hidden shadow-inner",children:T.jsx("div",{className:"h-full rounded-full transition-all duration-1000 relative",style:{width:`${l/e*100}%`,backgroundColor:i.color},children:T.jsx("div",{className:"absolute inset-0 bg-white/20"})})}),T.jsxs("div",{className:"mt-4 pt-3 border-t border-stone-100 text-xs text-stone-400 text-left",children:["목표 기간: ",T.jsxs("span",{className:"font-bold text-stone-600",children:[e,"일 완성 모드"]})]})]})]})]})},i2=({user:t,appId:e,stats:n})=>{const r=async i=>{t&&await Cn(We(st,"artifacts",e,"users",t.uid,"profile","gamestats"),{selectedDisplayThemeId:i})},s=async()=>{t&&await Cn(We(st,"artifacts",e,"users",t.uid,"profile","gamestats"),{selectedDisplayThemeId:null})};return T.jsxs("div",{className:"p-5 bg-stone-50 min-h-full",children:[T.jsxs("div",{className:"mb-6 flex justify-between items-end",children:[T.jsxs("div",{children:[T.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"컬렉션"}),T.jsx("p",{className:"text-stone-500 text-sm",children:"달성한 테마를 대표로 설정하세요."})]}),n.selectedDisplayThemeId&&T.jsx("button",{onClick:s,className:"text-xs bg-stone-200 text-stone-600 px-3 py-1.5 rounded-lg font-bold",children:"복귀"})]}),T.jsx("div",{className:"grid grid-cols-2 gap-4",children:In.map((i,o)=>{const l=o<=n.currentThemeIndex,u=o<n.currentThemeIndex,h=o===n.currentThemeIndex,f=n.selectedDisplayThemeId===i.id||!n.selectedDisplayThemeId&&h;return T.jsxs("div",{onClick:()=>u&&r(i.id),className:`relative p-4 rounded-3xl border-2 transition-all ${l?"bg-white cursor-pointer hover:shadow-md":"bg-stone-100/50 border-stone-100 opacity-60"} ${f?"border-blue-400 shadow-sm":"border-transparent shadow-sm"}`,children:[!l&&T.jsx("div",{className:"absolute inset-0 bg-stone-100/30 backdrop-blur-[1px] rounded-3xl flex items-center justify-center z-10",children:T.jsx(D1,{className:"text-stone-400"})}),T.jsx("div",{className:"text-4xl mb-3 text-center",children:l?i.icons[4]:"❓"}),T.jsx("h3",{className:"font-bold text-sm text-stone-800 text-center mb-1",children:i.name}),T.jsx("div",{className:"text-center",children:u?T.jsx("span",{className:"text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold",children:"마스터"}):h?T.jsx("span",{className:"text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold",children:"진행중"}):T.jsx("span",{className:"text-[10px] text-stone-400",children:"잠김"})}),f&&T.jsx("div",{className:"absolute -top-2 -right-2 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md border-2 border-white",children:"✔"})]},i.id)})})]})},o2=({stats:t})=>{const e=t.currentThemeIndex;return T.jsxs("div",{className:"p-5 relative bg-stone-50 min-h-[120%]",children:[T.jsxs("div",{className:"mb-8 bg-white p-5 rounded-3xl shadow-sm border border-stone-100 sticky top-0 z-10",children:[T.jsx("h2",{className:"text-2xl font-bold text-stone-800 mb-1",children:"월드 맵"}),T.jsx("p",{className:"text-stone-500 text-sm font-medium",children:"30개의 섬으로 이루어진 대장정"})]}),T.jsxs("div",{className:"relative pl-10 space-y-16 pb-20",children:[T.jsx("div",{className:"absolute left-[3.25rem] top-4 bottom-0 w-1 bg-stone-200 rounded-full"}),T.jsx("div",{className:"absolute left-[3.25rem] top-4 w-1 bg-blue-500 rounded-full transition-all duration-1000",style:{height:`${e/30*100}%`,maxHeight:"100%"}}),In.map((n,r)=>{const s=r<e,i=r===e,o=r>e;return T.jsxs("div",{className:"relative flex items-center group",children:[T.jsx("div",{className:`absolute -left-[1.65rem] w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs z-10 border-4 transition-all ${s?"bg-blue-500 text-white border-blue-200":i?"bg-white text-blue-500 border-blue-400 ring-4 ring-blue-100 scale-110":"bg-white text-stone-300 border-stone-200"}`,children:s?T.jsx(Rl,{size:14}):r+1}),T.jsxs("div",{className:`ml-8 p-4 rounded-3xl flex-1 border transition-all flex items-center gap-4 ${s?"bg-white border-blue-100 shadow-sm":i?"bg-white border-blue-300 shadow-md transform scale-[1.02]":"bg-stone-50/50 border-stone-100 opacity-60"}`,children:[T.jsx("div",{className:`text-4xl ${o?"grayscale opacity-50":""} drop-shadow-sm`,children:o?"☁️":n.icons[4]}),T.jsxs("div",{children:[T.jsx("h3",{className:`font-bold ${o?"text-stone-400":"text-stone-800"}`,children:n.name}),T.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:s?"탐험 완료 🌟":i?"현재 진행 중":"미지의 영역"})]})]})]},n.id)})]})]})},a2=({user:t,appId:e,stats:n,onClose:r})=>{const[s,i]=re.useState(n.themeDuration||100),[o,l]=re.useState(!1),u=async()=>{if(!t)return;l(!0);let h=n.currentThemeProgress;h>=s&&(h=s-1),await Cn(We(st,"artifacts",e,"users",t.uid,"profile","gamestats"),{themeDuration:Number(s),currentThemeProgress:h}),l(!1),r()};return T.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300",children:T.jsxs("div",{className:"bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl flex flex-col",children:[T.jsxs("div",{className:"flex justify-between items-center mb-6",children:[T.jsx("h3",{className:"text-xl font-bold text-stone-800",children:"성장 설정"}),T.jsx("button",{onClick:r,className:"text-stone-400 hover:text-stone-600",children:T.jsx(Xd,{size:20})})]}),T.jsxs("div",{className:"mb-6 flex-1 overflow-y-auto no-scrollbar",children:[T.jsx("label",{className:"block text-sm font-bold text-stone-700 mb-2",children:"테마 달성 목표일"}),T.jsx("p",{className:"text-xs text-stone-500 mb-4 leading-relaxed",children:"하나의 테마를 완성하는 데 필요한 일수를 선택하세요. 작심삼일 모드를 선택하면 3일 만에 테마가 최종 진화합니다!"}),T.jsx("div",{className:"space-y-2",children:[3,10,30,50,100].map(h=>T.jsxs("button",{onClick:()=>i(h),className:`w-full p-4 rounded-2xl border-2 text-left transition-all font-medium flex justify-between items-center ${s===h?"border-blue-500 bg-blue-50 text-blue-700 shadow-sm":"border-stone-100 bg-white text-stone-600 hover:bg-stone-50"}`,children:[T.jsxs("span",{children:[h,"일 완성",h===3&&T.jsx("span",{className:"ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-lg font-bold",children:"작심삼일 🔥"}),h===100&&T.jsx("span",{className:"ml-2 text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded-lg font-bold",children:"기본"})]}),s===h&&T.jsx(Rl,{size:20,className:"text-blue-500"})]},h))})]}),T.jsx("button",{onClick:u,disabled:o,className:"w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 transition-colors disabled:opacity-50",children:o?"저장 중...":"저장하기"})]})})},Fr=({icon:t,label:e,active:n,onClick:r})=>T.jsxs("button",{onClick:r,className:`flex flex-col items-center justify-center w-14 h-14 transition-colors px-2 ${n?"text-stone-800":"text-stone-400 hover:text-stone-600"}`,children:[T.jsx("div",{className:`mb-1 transition-transform ${n?"scale-110":"scale-100"}`,children:t}),T.jsx("span",{className:`text-[10px] font-semibold ${n?"opacity-100 text-stone-800 font-bold":"opacity-80"}`,children:e})]}),l2=({data:t,onClose:e})=>T.jsxs("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300",children:[T.jsxs("div",{className:"bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl transform scale-100 animate-in zoom-in-95 duration-300 text-center relative overflow-hidden",children:[T.jsx("div",{className:"absolute -top-20 -right-20 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50"}),T.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-stone-400 hover:text-stone-600 z-10",children:T.jsx(Xd,{size:20})}),T.jsx("div",{className:"text-7xl mb-6 bounce-animation relative z-10",children:t.icon}),T.jsx("h3",{className:"text-2xl font-bold text-stone-800 mb-2 relative z-10",children:t.title}),T.jsx("p",{className:"text-stone-500 font-medium mb-8 relative z-10 leading-relaxed",children:t.message}),T.jsx("button",{onClick:e,className:"w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 transition-colors relative z-10 shadow-md",children:"계속하기"})]}),T.jsx("style",{children:`
        @keyframes bounce { 0%, 100% { transform: translateY(-3%); } 50% { transform: translateY(3%); } }
        .bounce-animation { animation: bounce 2s infinite ease-in-out; }
      `})]});Mv(document.getElementById("root")).render(T.jsx(re.StrictMode,{children:T.jsx(Yx,{})}));
