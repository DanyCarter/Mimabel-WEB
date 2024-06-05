const __vite__fileDeps=["./NewProductView-I71cic5b.js","./useImage-CeCjftvU.js","./EditProductView-9Mrqwldi.js","./Conocenos-BpR-Aqgm.js","./Conocenos-CTx1-BpV.css","./Register-LN_S3p84.js","./Register-CGrdeRry.css","./Login-Bcd-o-iR.js","./Login-ap-cyvcW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hp(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const nt={},Ji=[],Pn=()=>{},UC=()=>!1,sh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wp=t=>t.startsWith("onUpdate:"),gt=Object.assign,zp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BC=Object.prototype.hasOwnProperty,$e=(t,e)=>BC.call(t,e),ue=Array.isArray,Zi=t=>Rl(t)==="[object Map]",ih=t=>Rl(t)==="[object Set]",ry=t=>Rl(t)==="[object Date]",ve=t=>typeof t=="function",_t=t=>typeof t=="string",Fr=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",sb=t=>(Ke(t)||ve(t))&&ve(t.then)&&ve(t.catch),ib=Object.prototype.toString,Rl=t=>ib.call(t),jC=t=>Rl(t).slice(8,-1),ob=t=>Rl(t)==="[object Object]",Kp=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oa=Hp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qC=/-(\w)/g,_r=oh(t=>t.replace(qC,(e,n)=>n?n.toUpperCase():"")),HC=/\B([A-Z])/g,No=oh(t=>t.replace(HC,"-$1").toLowerCase()),ah=oh(t=>t.charAt(0).toUpperCase()+t.slice(1)),kf=oh(t=>t?`on${ah(t)}`:""),Is=(t,e)=>!Object.is(t,e),Uc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ab=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},vd=t=>{const e=parseFloat(t);return isNaN(e)?t:e},WC=t=>{const e=_t(t)?Number(t):NaN;return isNaN(e)?t:e};let sy;const lb=()=>sy||(sy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_t(r)?QC(r):lh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(_t(t)||Ke(t))return t}const zC=/;(?![^(]*\))/g,KC=/:([^]+)/,GC=/\/\*[^]*?\*\//g;function QC(t){const e={};return t.replace(GC,"").split(zC).forEach(n=>{if(n){const r=n.split(KC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _s(t){let e="";if(_t(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=_s(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function oz(t){if(!t)return null;let{class:e,style:n}=t;return e&&!_t(e)&&(t.class=_s(e)),n&&(t.style=lh(n)),t}const YC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XC=Hp(YC);function cb(t){return!!t||t===""}function JC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ch(t[r],e[r]);return n}function ch(t,e){if(t===e)return!0;let n=ry(t),r=ry(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fr(t),r=Fr(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?JC(t,e):!1;if(n=Ke(t),r=Ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ch(t[o],e[o]))return!1}}return String(t)===String(e)}function ub(t,e){return t.findIndex(n=>ch(n,e))}const hn=t=>_t(t)?t:t==null?"":ue(t)||Ke(t)&&(t.toString===ib||!ve(t.toString))?JSON.stringify(t,hb,2):String(t),hb=(t,e)=>e&&e.__v_isRef?hb(t,e.value):Zi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Nf(r,i)+" =>"]=s,n),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nf(n))}:Fr(e)?Nf(e):Ke(e)&&!ue(e)&&!ob(e)?String(e):e,Nf=(t,e="")=>{var n;return Fr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class fb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gn;try{return gn=this,e()}finally{gn=n}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(t){return new fb(t)}function ZC(t,e=gn){e&&e.active&&e.effects.push(t)}function Qp(){return gn}function db(t){gn&&gn.cleanups.push(t)}let ii;class Yp{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ZC(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Os();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(eP(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ds()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ys,n=ii;try{return ys=!0,ii=this,this._runnings++,iy(this),this.fn()}finally{oy(this),this._runnings--,ii=n,ys=e}}stop(){this.active&&(iy(this),oy(this),this.onStop&&this.onStop(),this.active=!1)}}function eP(t){return t.value}function iy(t){t._trackId++,t._depsLength=0}function oy(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)pb(t.deps[e],t);t.deps.length=t._depsLength}}function pb(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ys=!0,Ed=0;const mb=[];function Os(){mb.push(ys),ys=!1}function Ds(){const t=mb.pop();ys=t===void 0?!0:t}function Xp(){Ed++}function Jp(){for(Ed--;!Ed&&wd.length;)wd.shift()()}function gb(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&pb(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wd=[];function _b(t,e,n){Xp();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&wd.push(r.scheduler)))}Jp()}const yb=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ou=new WeakMap,oi=Symbol(""),bd=Symbol("");function dn(t,e,n){if(ys&&ii){let r=ou.get(t);r||ou.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yb(()=>r.delete(n))),gb(ii,s)}}function Or(t,e,n,r,s,i){const o=ou.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ue(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Fr(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ue(t)?Kp(n)&&a.push(o.get("length")):(a.push(o.get(oi)),Zi(t)&&a.push(o.get(bd)));break;case"delete":ue(t)||(a.push(o.get(oi)),Zi(t)&&a.push(o.get(bd)));break;case"set":Zi(t)&&a.push(o.get(oi));break}Xp();for(const l of a)l&&_b(l,4);Jp()}function tP(t,e){const n=ou.get(t);return n&&n.get(e)}const nP=Hp("__proto__,__v_isRef,__isVue"),vb=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fr)),ay=rP();function rP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ne(this);for(let i=0,o=this.length;i<o;i++)dn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os(),Xp();const r=Ne(this)[e].apply(this,n);return Jp(),Ds(),r}}),t}function sP(t){Fr(t)||(t=String(t));const e=Ne(this);return dn(e,"has",t),e.hasOwnProperty(t)}class Eb{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?_P:Ib:i?Tb:bb).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){if(o&&$e(ay,n))return Reflect.get(ay,n,r);if(n==="hasOwnProperty")return sP}const a=Reflect.get(e,n,r);return(Fr(n)?vb.has(n):nP(n))||(s||dn(e,"get",n),i)?a:st(a)?o&&Kp(n)?a:a.value:Ke(a)?s?Rb(a):lr(a):a}}class wb extends Eb{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=el(i);if(!au(r)&&!el(r)&&(i=Ne(i),r=Ne(r)),!ue(e)&&st(i)&&!st(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&Kp(n)?Number(n)<e.length:$e(e,n),a=Reflect.set(e,n,r,s);return e===Ne(s)&&(o?Is(r,i)&&Or(e,"set",n,r):Or(e,"add",n,r)),a}deleteProperty(e,n){const r=$e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Or(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fr(n)||!vb.has(n))&&dn(e,"has",n),r}ownKeys(e){return dn(e,"iterate",ue(e)?"length":oi),Reflect.ownKeys(e)}}class iP extends Eb{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oP=new wb,aP=new iP,lP=new wb(!0);const Zp=t=>t,uh=t=>Reflect.getPrototypeOf(t);function yc(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ne(t),i=Ne(e);n||(Is(e,i)&&dn(s,"get",e),dn(s,"get",i));const{has:o}=uh(s),a=r?Zp:n?nm:tl;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function vc(t,e=!1){const n=this.__v_raw,r=Ne(n),s=Ne(t);return e||(Is(t,s)&&dn(r,"has",t),dn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ec(t,e=!1){return t=t.__v_raw,!e&&dn(Ne(t),"iterate",oi),Reflect.get(t,"size",t)}function ly(t){t=Ne(t);const e=Ne(this);return uh(e).has.call(e,t)||(e.add(t),Or(e,"add",t,t)),this}function cy(t,e){e=Ne(e);const n=Ne(this),{has:r,get:s}=uh(n);let i=r.call(n,t);i||(t=Ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Is(e,o)&&Or(n,"set",t,e):Or(n,"add",t,e),this}function uy(t){const e=Ne(this),{has:n,get:r}=uh(e);let s=n.call(e,t);s||(t=Ne(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Or(e,"delete",t,void 0),i}function hy(){const t=Ne(this),e=t.size!==0,n=t.clear();return e&&Or(t,"clear",void 0,void 0),n}function wc(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ne(o),l=e?Zp:t?nm:tl;return!t&&dn(a,"iterate",oi),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function bc(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=Zi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Zp:e?nm:tl;return!e&&dn(i,"iterate",l?bd:oi),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Jr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cP(){const t={get(i){return yc(this,i)},get size(){return Ec(this)},has:vc,add:ly,set:cy,delete:uy,clear:hy,forEach:wc(!1,!1)},e={get(i){return yc(this,i,!1,!0)},get size(){return Ec(this)},has:vc,add:ly,set:cy,delete:uy,clear:hy,forEach:wc(!1,!0)},n={get(i){return yc(this,i,!0)},get size(){return Ec(this,!0)},has(i){return vc.call(this,i,!0)},add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear"),forEach:wc(!0,!1)},r={get(i){return yc(this,i,!0,!0)},get size(){return Ec(this,!0)},has(i){return vc.call(this,i,!0)},add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear"),forEach:wc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bc(i,!1,!1),n[i]=bc(i,!0,!1),e[i]=bc(i,!1,!0),r[i]=bc(i,!0,!0)}),[t,n,e,r]}const[uP,hP,fP,dP]=cP();function em(t,e){const n=e?t?dP:fP:t?hP:uP;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get($e(n,s)&&s in r?n:r,s,i)}const pP={get:em(!1,!1)},mP={get:em(!1,!0)},gP={get:em(!0,!1)};const bb=new WeakMap,Tb=new WeakMap,Ib=new WeakMap,_P=new WeakMap;function yP(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vP(t){return t.__v_skip||!Object.isExtensible(t)?0:yP(jC(t))}function lr(t){return el(t)?t:tm(t,!1,oP,pP,bb)}function Ab(t){return tm(t,!1,lP,mP,Tb)}function Rb(t){return tm(t,!0,aP,gP,Ib)}function tm(t,e,n,r,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vP(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function dr(t){return el(t)?dr(t.__v_raw):!!(t&&t.__v_isReactive)}function el(t){return!!(t&&t.__v_isReadonly)}function au(t){return!!(t&&t.__v_isShallow)}function Sb(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function Oo(t){return Object.isExtensible(t)&&ab(t,"__v_skip",!0),t}const tl=t=>Ke(t)?lr(t):t,nm=t=>Ke(t)?Rb(t):t;class Cb{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yp(()=>e(this._value),()=>Da(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ne(this);return(!e._cacheable||e.effect.dirty)&&Is(e._value,e._value=e.effect.run())&&Da(e,4),Pb(e),e.effect._dirtyLevel>=2&&Da(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function EP(t,e,n=!1){let r,s;const i=ve(t);return i?(r=t,s=Pn):(r=t.get,s=t.set),new Cb(r,s,i||!s,n)}function Pb(t){var e;ys&&ii&&(t=Ne(t),gb(ii,(e=t.dep)!=null?e:t.dep=yb(()=>t.dep=void 0,t instanceof Cb?t:void 0)))}function Da(t,e=4,n){t=Ne(t);const r=t.dep;r&&_b(r,e)}function st(t){return!!(t&&t.__v_isRef===!0)}function Ae(t){return Nb(t,!1)}function kb(t){return Nb(t,!0)}function Nb(t,e){return st(t)?t:new wP(t,e)}class wP{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ne(e),this._value=n?e:tl(e)}get value(){return Pb(this),this._value}set value(e){const n=this.__v_isShallow||au(e)||el(e);e=n?e:Ne(e),Is(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tl(e),Da(this,4))}}function Tc(t){Da(t,4)}function me(t){return st(t)?t.value:t}function Rr(t){return ve(t)?t():me(t)}const bP={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ob(t){return dr(t)?t:new Proxy(t,bP)}function TP(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=xb(t,n);return e}class IP{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tP(Ne(this._object),this._key)}}class AP{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Db(t,e,n){return st(t)?t:ve(t)?new AP(t):Ke(t)&&arguments.length>1?xb(t,e,n):Ae(t)}function xb(t,e,n){const r=t[e];return st(r)?r:new IP(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vs(t,e,n,r){try{return r?t(...r):t()}catch(s){hh(s,e,n)}}function Nn(t,e,n,r){if(ve(t)){const s=vs(t,e,n,r);return s&&sb(s)&&s.catch(i=>{hh(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Nn(t[i],e,n,r));return s}}function hh(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Os(),vs(l,null,10,[t,o,a]),Ds();return}}RP(t,n,s,r)}function RP(t,e,n,r=!0){console.error(t)}let nl=!1,Td=!1;const Qt=[];let ar=0;const eo=[];let os=null,Xs=0;const Mb=Promise.resolve();let rm=null;function fh(t){const e=rm||Mb;return t?e.then(this?t.bind(this):t):e}function SP(t){let e=ar+1,n=Qt.length;for(;e<n;){const r=e+n>>>1,s=Qt[r],i=rl(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function sm(t){(!Qt.length||!Qt.includes(t,nl&&t.allowRecurse?ar+1:ar))&&(t.id==null?Qt.push(t):Qt.splice(SP(t.id),0,t),Lb())}function Lb(){!nl&&!Td&&(Td=!0,rm=Mb.then(Fb))}function CP(t){const e=Qt.indexOf(t);e>ar&&Qt.splice(e,1)}function PP(t){ue(t)?eo.push(...t):(!os||!os.includes(t,t.allowRecurse?Xs+1:Xs))&&eo.push(t),Lb()}function fy(t,e,n=nl?ar+1:0){for(;n<Qt.length;n++){const r=Qt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Qt.splice(n,1),n--,r()}}}function Vb(t){if(eo.length){const e=[...new Set(eo)].sort((n,r)=>rl(n)-rl(r));if(eo.length=0,os){os.push(...e);return}for(os=e,Xs=0;Xs<os.length;Xs++)os[Xs]();os=null,Xs=0}}const rl=t=>t.id==null?1/0:t.id,kP=(t,e)=>{const n=rl(t)-rl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fb(t){Td=!1,nl=!0,Qt.sort(kP);try{for(ar=0;ar<Qt.length;ar++){const e=Qt[ar];e&&e.active!==!1&&vs(e,null,14)}}finally{ar=0,Qt.length=0,Vb(),nl=!1,rm=null,(Qt.length||eo.length)&&Fb()}}function NP(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||nt;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[h]||nt;p&&(s=n.map(g=>_t(g)?g.trim():g)),f&&(s=n.map(vd))}let a,l=r[a=kf(e)]||r[a=kf(_r(e))];!l&&i&&(l=r[a=kf(No(e))]),l&&Nn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(u,t,6,s)}}function $b(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ve(t)){const l=u=>{const h=$b(u,e,!0);h&&(a=!0,gt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ke(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):gt(o,i),Ke(t)&&r.set(t,o),o)}function dh(t,e){return!t||!sh(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,No(e))||$e(t,e))}let wt=null,ph=null;function lu(t){const e=wt;return wt=t,ph=t&&t.type.__scopeId||null,e}function Ub(t){ph=t}function Bb(){ph=null}function ut(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Iy(-1);const i=lu(e);let o;try{o=t(...s)}finally{lu(i),r._d&&Iy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Of(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:_,inheritAttrs:v}=t,A=lu(t);let S,O;try{if(n.shapeFlag&4){const x=s||r,F=x;S=or(u.call(F,x,h,f,g,p,_)),O=a}else{const x=e;S=or(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),O=e.props?a:OP(a)}}catch(x){Va.length=0,hh(x,t,1),S=Me(yn)}let D=S;if(O&&v!==!1){const x=Object.keys(O),{shapeFlag:F}=D;x.length&&F&7&&(i&&x.some(Wp)&&(O=DP(O,i)),D=As(D,O,!1,!0))}return n.dirs&&(D=As(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),S=D,lu(A),S}const OP=t=>{let e;for(const n in t)(n==="class"||n==="style"||sh(n))&&((e||(e={}))[n]=t[n]);return e},DP=(t,e)=>{const n={};for(const r in t)(!Wp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xP(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?dy(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!dh(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dy(r,o,u):!0:!!o;return!1}function dy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dh(n,i))return!0}return!1}function MP({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jb="components";function mh(t,e){return VP(jb,t,!0,e)||t}const LP=Symbol.for("v-ndc");function VP(t,e,n=!0,r=!1){const s=wt||Nt;if(s){const i=s.type;if(t===jb){const a=kk(i,!1);if(a&&(a===e||a===_r(e)||a===ah(_r(e))))return i}const o=py(s[t]||i[t],e)||py(s.appContext[t],e);return!o&&r?i:o}}function py(t,e){return t&&(t[e]||t[_r(e)]||t[ah(_r(e))])}const FP=t=>t.__isSuspense;function $P(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):PP(t)}const UP=Symbol.for("v-scx"),BP=()=>xt(UP);function Un(t,e){return im(t,null,e)}const Ic={};function Gn(t,e,n){return im(t,e,n)}function im(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=nt){if(e&&i){const k=e;e=(...I)=>{k(...I),F()}}const l=Nt,u=k=>r===!0?k:ti(k,r===!1?1:void 0);let h,f=!1,p=!1;if(st(t)?(h=()=>t.value,f=au(t)):dr(t)?(h=()=>u(t),f=!0):ue(t)?(p=!0,f=t.some(k=>dr(k)||au(k)),h=()=>t.map(k=>{if(st(k))return k.value;if(dr(k))return u(k);if(ve(k))return vs(k,l,2)})):ve(t)?e?h=()=>vs(t,l,2):h=()=>(g&&g(),Nn(t,l,3,[_])):h=Pn,e&&r){const k=h;h=()=>ti(k())}let g,_=k=>{g=D.onStop=()=>{vs(k,l,4),g=D.onStop=void 0}},v;if(Eh)if(_=Pn,e?n&&Nn(e,l,3,[h(),p?[]:void 0,_]):h(),s==="sync"){const k=BP();v=k.__watcherHandles||(k.__watcherHandles=[])}else return Pn;let A=p?new Array(t.length).fill(Ic):Ic;const S=()=>{if(!(!D.active||!D.dirty))if(e){const k=D.run();(r||f||(p?k.some((I,y)=>Is(I,A[y])):Is(k,A)))&&(g&&g(),Nn(e,l,3,[k,A===Ic?void 0:p&&A[0]===Ic?[]:A,_]),A=k)}else D.run()};S.allowRecurse=!!e;let O;s==="sync"?O=S:s==="post"?O=()=>ln(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),O=()=>sm(S));const D=new Yp(h,Pn,O),x=Qp(),F=()=>{D.stop(),x&&zp(x.effects,D)};return e?n?S():A=D.run():s==="post"?ln(D.run.bind(D),l&&l.suspense):D.run(),v&&v.push(F),F}function jP(t,e,n){const r=this.proxy,s=_t(t)?t.includes(".")?qb(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=Sl(this),a=im(s,i.bind(r),n);return o(),a}function qb(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ti(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,st(t))ti(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)ti(t[r],e,n);else if(ih(t)||Zi(t))t.forEach(r=>{ti(r,e,n)});else if(ob(t))for(const r in t)ti(t[r],e,n);return t}function Hb(t,e){if(wt===null)return t;const n=wh(wt)||wt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=nt]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&ti(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function zs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Os(),Nn(l,n,8,[t.el,a,t,e]),Ds())}}const as=Symbol("_leaveCb"),Ac=Symbol("_enterCb");function Wb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Do(()=>{t.isMounted=!0}),am(()=>{t.isUnmounting=!0}),t}const Cn=[Function,Array],zb={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Cn,onEnter:Cn,onAfterEnter:Cn,onEnterCancelled:Cn,onBeforeLeave:Cn,onLeave:Cn,onAfterLeave:Cn,onLeaveCancelled:Cn,onBeforeAppear:Cn,onAppear:Cn,onAfterAppear:Cn,onAppearCancelled:Cn},qP={name:"BaseTransition",props:zb,setup(t,{slots:e}){const n=Rs(),r=Wb();return()=>{const s=e.default&&om(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==yn){i=p;break}}const o=Ne(t),{mode:a}=o;if(r.isLeaving)return Df(i);const l=my(i);if(!l)return Df(i);const u=sl(l,o,r,n);il(l,u);const h=n.subTree,f=h&&my(h);if(f&&f.type!==yn&&!Js(l,f)){const p=sl(f,o,r,n);if(il(f,p),a==="out-in"&&l.type!==yn)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Df(i);a==="in-out"&&l.type!==yn&&(p.delayLeave=(g,_,v)=>{const A=Kb(r,f);A[String(f.key)]=f,g[as]=()=>{_(),g[as]=void 0,delete u.delayedLeave},u.delayedLeave=v})}return i}}},HP=qP;function Kb(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function sl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:A,onAfterAppear:S,onAppearCancelled:O}=e,D=String(t.key),x=Kb(n,t),F=(y,b)=>{y&&Nn(y,r,9,b)},k=(y,b)=>{const P=b[1];F(y,b),ue(y)?y.every(E=>E.length<=1)&&P():y.length<=1&&P()},I={mode:i,persisted:o,beforeEnter(y){let b=a;if(!n.isMounted)if(s)b=v||a;else return;y[as]&&y[as](!0);const P=x[D];P&&Js(t,P)&&P.el[as]&&P.el[as](),F(b,[y])},enter(y){let b=l,P=u,E=h;if(!n.isMounted)if(s)b=A||l,P=S||u,E=O||h;else return;let R=!1;const T=y[Ac]=he=>{R||(R=!0,he?F(E,[y]):F(P,[y]),I.delayedLeave&&I.delayedLeave(),y[Ac]=void 0)};b?k(b,[y,T]):T()},leave(y,b){const P=String(t.key);if(y[Ac]&&y[Ac](!0),n.isUnmounting)return b();F(f,[y]);let E=!1;const R=y[as]=T=>{E||(E=!0,b(),T?F(_,[y]):F(g,[y]),y[as]=void 0,x[P]===t&&delete x[P])};x[P]=t,p?k(p,[y,R]):R()},clone(y){return sl(y,e,n,r)}};return I}function Df(t){if(_h(t))return t=As(t),t.children=null,t}function my(t){if(!_h(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function il(t,e){t.shapeFlag&6&&t.component?il(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function om(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===mt?(o.patchFlag&128&&s++,r=r.concat(om(o.children,e,a))):(e||o.type!==yn)&&r.push(a!=null?As(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function gh(t,e){return ve(t)?gt({name:t.name},e,{setup:t}):t}const xa=t=>!!t.type.__asyncLoader,_h=t=>t.type.__isKeepAlive;function WP(t,e){Gb(t,"a",e)}function zP(t,e){Gb(t,"da",e)}function Gb(t,e,n=Nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yh(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_h(s.parent.vnode)&&KP(r,e,n,s),s=s.parent}}function KP(t,e,n,r){const s=yh(e,t,r,!0);lm(()=>{zp(r[e],s)},n)}function yh(t,e,n=Nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os();const a=Sl(n),l=Nn(e,n,t,o);return a(),Ds(),l});return r?s.unshift(i):s.push(i),i}}const Wr=t=>(e,n=Nt)=>(!Eh||t==="sp")&&yh(t,(...r)=>e(...r),n),GP=Wr("bm"),Do=Wr("m"),QP=Wr("bu"),Qb=Wr("u"),am=Wr("bum"),lm=Wr("um"),Yb=Wr("sp"),YP=Wr("rtg"),XP=Wr("rtc");function JP(t,e=Nt){yh("ec",t,e)}function ol(t,e,n,r){let s;const i=n;if(ue(t)||_t(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function Id(t,e,n={},r,s){if(wt.isCE||wt.parent&&xa(wt.parent)&&wt.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Te();const o=i&&Xb(i(n)),a=On(mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Xb(t){return t.some(e=>uu(e)?!(e.type===yn||e.type===mt&&!Xb(e.children)):!0)?t:null}const Ad=t=>t?fT(t)?wh(t)||t.proxy:Ad(t.parent):null,Ma=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ad(t.parent),$root:t=>Ad(t.root),$emit:t=>t.emit,$options:t=>cm(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,sm(t.update)}),$nextTick:t=>t.n||(t.n=fh.bind(t.proxy)),$watch:t=>jP.bind(t)}),xf=(t,e)=>t!==nt&&!t.__isScriptSetup&&$e(t,e),ZP={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(xf(r,e))return o[e]=1,r[e];if(s!==nt&&$e(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,i[e];if(n!==nt&&$e(n,e))return o[e]=4,n[e];Rd&&(o[e]=0)}}const h=Ma[e];let f,p;if(h)return e==="$attrs"&&dn(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==nt&&$e(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,$e(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return xf(s,e)?(s[e]=n,!0):r!==nt&&$e(r,e)?(r[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==nt&&$e(t,o)||xf(e,o)||(a=i[0])&&$e(a,o)||$e(r,o)||$e(Ma,o)||$e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gy(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rd=!0;function ek(t){const e=cm(t),n=t.proxy,r=t.ctx;Rd=!1,e.beforeCreate&&_y(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:v,deactivated:A,beforeDestroy:S,beforeUnmount:O,destroyed:D,unmounted:x,render:F,renderTracked:k,renderTriggered:I,errorCaptured:y,serverPrefetch:b,expose:P,inheritAttrs:E,components:R,directives:T,filters:he}=e;if(u&&tk(u,r,null),o)for(const de in o){const be=o[de];ve(be)&&(r[de]=be.bind(n))}if(s){const de=s.call(n,n);Ke(de)&&(t.data=lr(de))}if(Rd=!0,i)for(const de in i){const be=i[de],at=ve(be)?be.bind(n,n):ve(be.get)?be.get.bind(n,n):Pn,It=!ve(be)&&ve(be.set)?be.set.bind(n):Pn,At=Ze({get:at,set:It});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>At.value,set:lt=>At.value=lt})}if(a)for(const de in a)Jb(a[de],r,n,de);if(l){const de=ve(l)?l.call(n):l;Reflect.ownKeys(de).forEach(be=>{La(be,de[be])})}h&&_y(h,t,"c");function Y(de,be){ue(be)?be.forEach(at=>de(at.bind(n))):be&&de(be.bind(n))}if(Y(GP,f),Y(Do,p),Y(QP,g),Y(Qb,_),Y(WP,v),Y(zP,A),Y(JP,y),Y(XP,k),Y(YP,I),Y(am,O),Y(lm,x),Y(Yb,b),ue(P))if(P.length){const de=t.exposed||(t.exposed={});P.forEach(be=>{Object.defineProperty(de,be,{get:()=>n[be],set:at=>n[be]=at})})}else t.exposed||(t.exposed={});F&&t.render===Pn&&(t.render=F),E!=null&&(t.inheritAttrs=E),R&&(t.components=R),T&&(t.directives=T)}function tk(t,e,n=Pn){ue(t)&&(t=Sd(t));for(const r in t){const s=t[r];let i;Ke(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),st(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _y(t,e,n){Nn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jb(t,e,n,r){const s=r.includes(".")?qb(n,r):()=>n[r];if(_t(t)){const i=e[t];ve(i)&&Gn(s,i)}else if(ve(t))Gn(s,t.bind(n));else if(Ke(t))if(ue(t))t.forEach(i=>Jb(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&Gn(s,i,t)}}function cm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>cu(l,u,o,!0)),cu(l,e,o)),Ke(e)&&i.set(e,l),l}function cu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cu(t,i,n,!0),s&&s.forEach(o=>cu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nk={data:yy,props:vy,emits:vy,methods:ba,computed:ba,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:ba,directives:ba,watch:sk,provide:yy,inject:rk};function yy(t,e){return e?t?function(){return gt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function rk(t,e){return ba(Sd(t),Sd(e))}function Sd(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function ba(t,e){return t?gt(Object.create(null),t,e):e}function vy(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),gy(t),gy(e??{})):e}function sk(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function Zb(){return{app:null,config:{isNativeTag:UC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ik=0;function ok(t,e){return function(r,s=null){ve(r)||(r=gt({},r)),s!=null&&!Ke(s)&&(s=null);const i=Zb(),o=new WeakSet;let a=!1;const l=i.app={_uid:ik++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ok,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&ve(u.install)?(o.add(u),u.install(l,...h)):ve(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,f){if(!a){const p=Me(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(p,u):t(p,u,f),a=!0,l._container=u,u.__vue_app__=l,wh(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=to;to=l;try{return u()}finally{to=h}}};return l}}let to=null;function La(t,e){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=Nt||wt;if(r||to){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:to._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function ak(){return!!(Nt||wt||to)}const eT={},tT=()=>Object.create(eT),nT=t=>Object.getPrototypeOf(t)===eT;function lk(t,e,n,r=!1){const s={},i=tT();t.propsDefaults=Object.create(null),rT(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ab(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ck(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ne(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(dh(t.emitsOptions,p))continue;const g=e[p];if(l)if($e(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=_r(p);s[_]=Cd(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{rT(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!$e(e,f)&&((h=No(f))===f||!$e(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Cd(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!$e(e,f))&&(delete i[f],u=!0)}u&&Or(t.attrs,"set","")}function rT(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oa(l))continue;const u=e[l];let h;s&&$e(s,h=_r(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:dh(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ne(n),u=a||nt;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Cd(s,l,f,u[f],t,!$e(u,f))}}return o}function Cd(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=$e(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ve(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Sl(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===No(n))&&(r=!0))}return r}function sT(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ve(t)){const h=f=>{l=!0;const[p,g]=sT(f,e,!0);gt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ke(t)&&r.set(t,Ji),Ji;if(ue(i))for(let h=0;h<i.length;h++){const f=_r(i[h]);Ey(f)&&(o[f]=nt)}else if(i)for(const h in i){const f=_r(h);if(Ey(f)){const p=i[h],g=o[f]=ue(p)||ve(p)?{type:p}:gt({},p);if(g){const _=Ty(Boolean,g.type),v=Ty(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||$e(g,"default"))&&a.push(f)}}}const u=[o,a];return Ke(t)&&r.set(t,u),u}function Ey(t){return t[0]!=="$"&&!Oa(t)}function wy(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function by(t,e){return wy(t)===wy(e)}function Ty(t,e){return ue(e)?e.findIndex(n=>by(n,t)):ve(e)&&by(e,t)?0:-1}const iT=t=>t[0]==="_"||t==="$stable",um=t=>ue(t)?t.map(or):[or(t)],uk=(t,e,n)=>{if(e._n)return e;const r=ut((...s)=>um(e(...s)),n);return r._c=!1,r},oT=(t,e,n)=>{const r=t._ctx;for(const s in t){if(iT(s))continue;const i=t[s];if(ve(i))e[s]=uk(s,i,r);else if(i!=null){const o=um(i);e[s]=()=>o}}},aT=(t,e)=>{const n=um(e);t.slots.default=()=>n},hk=(t,e)=>{const n=t.slots=tT();if(t.vnode.shapeFlag&32){const r=e._;r?(gt(n,e),ab(n,"_",r,!0)):oT(e,n)}else e&&aT(t,e)},fk=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=nt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(gt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,oT(e,s)),o=e}else e&&(aT(t,e),o={default:1});if(i)for(const a in s)!iT(a)&&o[a]==null&&delete s[a]};function Pd(t,e,n,r,s=!1){if(ue(t)){t.forEach((p,g)=>Pd(p,e&&(ue(e)?e[g]:e),n,r,s));return}if(xa(r)&&!s)return;const i=r.shapeFlag&4?wh(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===nt?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(_t(u)?(h[u]=null,$e(f,u)&&(f[u]=null)):st(u)&&(u.value=null)),ve(l))vs(l,a,12,[o,h]);else{const p=_t(l),g=st(l);if(p||g){const _=()=>{if(t.f){const v=p?$e(f,l)?f[l]:h[l]:l.value;s?ue(v)&&zp(v,i):ue(v)?v.includes(i)||v.push(i):p?(h[l]=[i],$e(f,l)&&(f[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,$e(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(_.id=-1,ln(_,n)):_()}}}const ln=$P;function dk(t){return pk(t)}function pk(t,e){const n=lb();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=Pn,insertStaticContent:_}=t,v=(C,N,L,q=null,U=null,K=null,X=void 0,z=null,G=!!N.dynamicChildren)=>{if(C===N)return;C&&!Js(C,N)&&(q=B(C),lt(C,U,K,!0),C=null),N.patchFlag===-2&&(G=!1,N.dynamicChildren=null);const{type:W,ref:te,shapeFlag:le}=N;switch(W){case vh:A(C,N,L,q);break;case yn:S(C,N,L,q);break;case Bc:C==null&&O(N,L,q,X);break;case mt:R(C,N,L,q,U,K,X,z,G);break;default:le&1?F(C,N,L,q,U,K,X,z,G):le&6?T(C,N,L,q,U,K,X,z,G):(le&64||le&128)&&W.process(C,N,L,q,U,K,X,z,G,se)}te!=null&&U&&Pd(te,C&&C.ref,K,N||C,!N)},A=(C,N,L,q)=>{if(C==null)r(N.el=a(N.children),L,q);else{const U=N.el=C.el;N.children!==C.children&&u(U,N.children)}},S=(C,N,L,q)=>{C==null?r(N.el=l(N.children||""),L,q):N.el=C.el},O=(C,N,L,q)=>{[C.el,C.anchor]=_(C.children,N,L,q,C.el,C.anchor)},D=({el:C,anchor:N},L,q)=>{let U;for(;C&&C!==N;)U=p(C),r(C,L,q),C=U;r(N,L,q)},x=({el:C,anchor:N})=>{let L;for(;C&&C!==N;)L=p(C),s(C),C=L;s(N)},F=(C,N,L,q,U,K,X,z,G)=>{N.type==="svg"?X="svg":N.type==="math"&&(X="mathml"),C==null?k(N,L,q,U,K,X,z,G):b(C,N,U,K,X,z,G)},k=(C,N,L,q,U,K,X,z)=>{let G,W;const{props:te,shapeFlag:le,transition:ae,dirs:oe}=C;if(G=C.el=o(C.type,K,te&&te.is,te),le&8?h(G,C.children):le&16&&y(C.children,G,null,q,U,Mf(C,K),X,z),oe&&zs(C,null,q,"created"),I(G,C,C.scopeId,X,q),te){for(const Ve in te)Ve!=="value"&&!Oa(Ve)&&i(G,Ve,null,te[Ve],K,C.children,q,U,Rt);"value"in te&&i(G,"value",null,te.value,K),(W=te.onVnodeBeforeMount)&&sr(W,q,C)}oe&&zs(C,null,q,"beforeMount");const fe=mk(U,ae);fe&&ae.beforeEnter(G),r(G,N,L),((W=te&&te.onVnodeMounted)||fe||oe)&&ln(()=>{W&&sr(W,q,C),fe&&ae.enter(G),oe&&zs(C,null,q,"mounted")},U)},I=(C,N,L,q,U)=>{if(L&&g(C,L),q)for(let K=0;K<q.length;K++)g(C,q[K]);if(U){let K=U.subTree;if(N===K){const X=U.vnode;I(C,X,X.scopeId,X.slotScopeIds,U.parent)}}},y=(C,N,L,q,U,K,X,z,G=0)=>{for(let W=G;W<C.length;W++){const te=C[W]=z?ls(C[W]):or(C[W]);v(null,te,N,L,q,U,K,X,z)}},b=(C,N,L,q,U,K,X)=>{const z=N.el=C.el;let{patchFlag:G,dynamicChildren:W,dirs:te}=N;G|=C.patchFlag&16;const le=C.props||nt,ae=N.props||nt;let oe;if(L&&Ks(L,!1),(oe=ae.onVnodeBeforeUpdate)&&sr(oe,L,N,C),te&&zs(N,C,L,"beforeUpdate"),L&&Ks(L,!0),W?P(C.dynamicChildren,W,z,L,q,Mf(N,U),K):X||be(C,N,z,null,L,q,Mf(N,U),K,!1),G>0){if(G&16)E(z,N,le,ae,L,q,U);else if(G&2&&le.class!==ae.class&&i(z,"class",null,ae.class,U),G&4&&i(z,"style",le.style,ae.style,U),G&8){const fe=N.dynamicProps;for(let Ve=0;Ve<fe.length;Ve++){const Qe=fe[Ve],pt=le[Qe],pn=ae[Qe];(pn!==pt||Qe==="value")&&i(z,Qe,pt,pn,U,C.children,L,q,Rt)}}G&1&&C.children!==N.children&&h(z,N.children)}else!X&&W==null&&E(z,N,le,ae,L,q,U);((oe=ae.onVnodeUpdated)||te)&&ln(()=>{oe&&sr(oe,L,N,C),te&&zs(N,C,L,"updated")},q)},P=(C,N,L,q,U,K,X)=>{for(let z=0;z<N.length;z++){const G=C[z],W=N[z],te=G.el&&(G.type===mt||!Js(G,W)||G.shapeFlag&70)?f(G.el):L;v(G,W,te,null,q,U,K,X,!0)}},E=(C,N,L,q,U,K,X)=>{if(L!==q){if(L!==nt)for(const z in L)!Oa(z)&&!(z in q)&&i(C,z,L[z],null,X,N.children,U,K,Rt);for(const z in q){if(Oa(z))continue;const G=q[z],W=L[z];G!==W&&z!=="value"&&i(C,z,W,G,X,N.children,U,K,Rt)}"value"in q&&i(C,"value",L.value,q.value,X)}},R=(C,N,L,q,U,K,X,z,G)=>{const W=N.el=C?C.el:a(""),te=N.anchor=C?C.anchor:a("");let{patchFlag:le,dynamicChildren:ae,slotScopeIds:oe}=N;oe&&(z=z?z.concat(oe):oe),C==null?(r(W,L,q),r(te,L,q),y(N.children||[],L,te,U,K,X,z,G)):le>0&&le&64&&ae&&C.dynamicChildren?(P(C.dynamicChildren,ae,L,U,K,X,z),(N.key!=null||U&&N===U.subTree)&&lT(C,N,!0)):be(C,N,L,te,U,K,X,z,G)},T=(C,N,L,q,U,K,X,z,G)=>{N.slotScopeIds=z,C==null?N.shapeFlag&512?U.ctx.activate(N,L,q,X,G):he(N,L,q,U,K,X,G):Re(C,N,G)},he=(C,N,L,q,U,K,X)=>{const z=C.component=Ak(C,q,U);if(_h(C)&&(z.ctx.renderer=se),Rk(z),z.asyncDep){if(U&&U.registerDep(z,Y),!C.el){const G=z.subTree=Me(yn);S(null,G,N,L)}}else Y(z,C,N,L,U,K,X)},Re=(C,N,L)=>{const q=N.component=C.component;if(xP(C,N,L))if(q.asyncDep&&!q.asyncResolved){de(q,N,L);return}else q.next=N,CP(q.update),q.effect.dirty=!0,q.update();else N.el=C.el,q.vnode=N},Y=(C,N,L,q,U,K,X)=>{const z=()=>{if(C.isMounted){let{next:te,bu:le,u:ae,parent:oe,vnode:fe}=C;{const Rn=cT(C);if(Rn){te&&(te.el=fe.el,de(C,te,X)),Rn.asyncDep.then(()=>{C.isUnmounted||z()});return}}let Ve=te,Qe;Ks(C,!1),te?(te.el=fe.el,de(C,te,X)):te=fe,le&&Uc(le),(Qe=te.props&&te.props.onVnodeBeforeUpdate)&&sr(Qe,oe,te,fe),Ks(C,!0);const pt=Of(C),pn=C.subTree;C.subTree=pt,v(pn,pt,f(pn.el),B(pn),C,U,K),te.el=pt.el,Ve===null&&MP(C,pt.el),ae&&ln(ae,U),(Qe=te.props&&te.props.onVnodeUpdated)&&ln(()=>sr(Qe,oe,te,fe),U)}else{let te;const{el:le,props:ae}=N,{bm:oe,m:fe,parent:Ve}=C,Qe=xa(N);if(Ks(C,!1),oe&&Uc(oe),!Qe&&(te=ae&&ae.onVnodeBeforeMount)&&sr(te,Ve,N),Ks(C,!0),le&&Ge){const pt=()=>{C.subTree=Of(C),Ge(le,C.subTree,C,U,null)};Qe?N.type.__asyncLoader().then(()=>!C.isUnmounted&&pt()):pt()}else{const pt=C.subTree=Of(C);v(null,pt,L,q,C,U,K),N.el=pt.el}if(fe&&ln(fe,U),!Qe&&(te=ae&&ae.onVnodeMounted)){const pt=N;ln(()=>sr(te,Ve,pt),U)}(N.shapeFlag&256||Ve&&xa(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&C.a&&ln(C.a,U),C.isMounted=!0,N=L=q=null}},G=C.effect=new Yp(z,Pn,()=>sm(W),C.scope),W=C.update=()=>{G.dirty&&G.run()};W.id=C.uid,Ks(C,!0),W()},de=(C,N,L)=>{N.component=C;const q=C.vnode.props;C.vnode=N,C.next=null,ck(C,N.props,q,L),fk(C,N.children,L),Os(),fy(C),Ds()},be=(C,N,L,q,U,K,X,z,G=!1)=>{const W=C&&C.children,te=C?C.shapeFlag:0,le=N.children,{patchFlag:ae,shapeFlag:oe}=N;if(ae>0){if(ae&128){It(W,le,L,q,U,K,X,z,G);return}else if(ae&256){at(W,le,L,q,U,K,X,z,G);return}}oe&8?(te&16&&Rt(W,U,K),le!==W&&h(L,le)):te&16?oe&16?It(W,le,L,q,U,K,X,z,G):Rt(W,U,K,!0):(te&8&&h(L,""),oe&16&&y(le,L,q,U,K,X,z,G))},at=(C,N,L,q,U,K,X,z,G)=>{C=C||Ji,N=N||Ji;const W=C.length,te=N.length,le=Math.min(W,te);let ae;for(ae=0;ae<le;ae++){const oe=N[ae]=G?ls(N[ae]):or(N[ae]);v(C[ae],oe,L,null,U,K,X,z,G)}W>te?Rt(C,U,K,!0,!1,le):y(N,L,q,U,K,X,z,G,le)},It=(C,N,L,q,U,K,X,z,G)=>{let W=0;const te=N.length;let le=C.length-1,ae=te-1;for(;W<=le&&W<=ae;){const oe=C[W],fe=N[W]=G?ls(N[W]):or(N[W]);if(Js(oe,fe))v(oe,fe,L,null,U,K,X,z,G);else break;W++}for(;W<=le&&W<=ae;){const oe=C[le],fe=N[ae]=G?ls(N[ae]):or(N[ae]);if(Js(oe,fe))v(oe,fe,L,null,U,K,X,z,G);else break;le--,ae--}if(W>le){if(W<=ae){const oe=ae+1,fe=oe<te?N[oe].el:q;for(;W<=ae;)v(null,N[W]=G?ls(N[W]):or(N[W]),L,fe,U,K,X,z,G),W++}}else if(W>ae)for(;W<=le;)lt(C[W],U,K,!0),W++;else{const oe=W,fe=W,Ve=new Map;for(W=fe;W<=ae;W++){const Jt=N[W]=G?ls(N[W]):or(N[W]);Jt.key!=null&&Ve.set(Jt.key,W)}let Qe,pt=0;const pn=ae-fe+1;let Rn=!1,Xo=0;const Gr=new Array(pn);for(W=0;W<pn;W++)Gr[W]=0;for(W=oe;W<=le;W++){const Jt=C[W];if(pt>=pn){lt(Jt,U,K,!0);continue}let Sn;if(Jt.key!=null)Sn=Ve.get(Jt.key);else for(Qe=fe;Qe<=ae;Qe++)if(Gr[Qe-fe]===0&&Js(Jt,N[Qe])){Sn=Qe;break}Sn===void 0?lt(Jt,U,K,!0):(Gr[Sn-fe]=W+1,Sn>=Xo?Xo=Sn:Rn=!0,v(Jt,N[Sn],L,null,U,K,X,z,G),pt++)}const Oi=Rn?gk(Gr):Ji;for(Qe=Oi.length-1,W=pn-1;W>=0;W--){const Jt=fe+W,Sn=N[Jt],Di=Jt+1<te?N[Jt+1].el:q;Gr[W]===0?v(null,Sn,L,Di,U,K,X,z,G):Rn&&(Qe<0||W!==Oi[Qe]?At(Sn,L,Di,2):Qe--)}}},At=(C,N,L,q,U=null)=>{const{el:K,type:X,transition:z,children:G,shapeFlag:W}=C;if(W&6){At(C.component.subTree,N,L,q);return}if(W&128){C.suspense.move(N,L,q);return}if(W&64){X.move(C,N,L,se);return}if(X===mt){r(K,N,L);for(let le=0;le<G.length;le++)At(G[le],N,L,q);r(C.anchor,N,L);return}if(X===Bc){D(C,N,L);return}if(q!==2&&W&1&&z)if(q===0)z.beforeEnter(K),r(K,N,L),ln(()=>z.enter(K),U);else{const{leave:le,delayLeave:ae,afterLeave:oe}=z,fe=()=>r(K,N,L),Ve=()=>{le(K,()=>{fe(),oe&&oe()})};ae?ae(K,fe,Ve):Ve()}else r(K,N,L)},lt=(C,N,L,q=!1,U=!1)=>{const{type:K,props:X,ref:z,children:G,dynamicChildren:W,shapeFlag:te,patchFlag:le,dirs:ae}=C;if(z!=null&&Pd(z,null,L,C,!0),te&256){N.ctx.deactivate(C);return}const oe=te&1&&ae,fe=!xa(C);let Ve;if(fe&&(Ve=X&&X.onVnodeBeforeUnmount)&&sr(Ve,N,C),te&6)rr(C.component,L,q);else{if(te&128){C.suspense.unmount(L,q);return}oe&&zs(C,null,N,"beforeUnmount"),te&64?C.type.remove(C,N,L,U,se,q):W&&(K!==mt||le>0&&le&64)?Rt(W,N,L,!1,!0):(K===mt&&le&384||!U&&te&16)&&Rt(G,N,L),q&&ct(C)}(fe&&(Ve=X&&X.onVnodeUnmounted)||oe)&&ln(()=>{Ve&&sr(Ve,N,C),oe&&zs(C,null,N,"unmounted")},L)},ct=C=>{const{type:N,el:L,anchor:q,transition:U}=C;if(N===mt){Kr(L,q);return}if(N===Bc){x(C);return}const K=()=>{s(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(C.shapeFlag&1&&U&&!U.persisted){const{leave:X,delayLeave:z}=U,G=()=>X(L,K);z?z(C.el,K,G):G()}else K()},Kr=(C,N)=>{let L;for(;C!==N;)L=p(C),s(C),C=L;s(N)},rr=(C,N,L)=>{const{bum:q,scope:U,update:K,subTree:X,um:z}=C;q&&Uc(q),U.stop(),K&&(K.active=!1,lt(X,C,N,L)),z&&ln(z,N),ln(()=>{C.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Rt=(C,N,L,q=!1,U=!1,K=0)=>{for(let X=K;X<C.length;X++)lt(C[X],N,L,q,U)},B=C=>C.shapeFlag&6?B(C.component.subTree):C.shapeFlag&128?C.suspense.next():p(C.anchor||C.el);let ne=!1;const Z=(C,N,L)=>{C==null?N._vnode&&lt(N._vnode,null,null,!0):v(N._vnode||null,C,N,null,null,null,L),ne||(ne=!0,fy(),Vb(),ne=!1),N._vnode=C},se={p:v,um:lt,m:At,r:ct,mt:he,mc:y,pc:be,pbc:P,n:B,o:t};let Oe,Ge;return{render:Z,hydrate:Oe,createApp:ok(Z,Oe)}}function Mf({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mk(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lT(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ls(s[i]),a.el=o.el),n||lT(o,a)),a.type===vh&&(a.el=o.el)}}function gk(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cT(e)}const _k=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),vh=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Bc=Symbol.for("v-stc"),Va=[];let jn=null;function Te(t=!1){Va.push(jn=t?null:[])}function yk(){Va.pop(),jn=Va[Va.length-1]||null}let al=1;function Iy(t){al+=t}function uT(t){return t.dynamicChildren=al>0?jn||Ji:null,yk(),al>0&&jn&&jn.push(t),t}function Be(t,e,n,r,s,i){return uT(re(t,e,n,r,s,i,!0))}function On(t,e,n,r,s){return uT(Me(t,e,n,r,s,!0))}function uu(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const hT=({key:t})=>t??null,jc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||st(t)||ve(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hT(e),ref:e&&jc(e),scopeId:ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return a?(hm(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),al>0&&!o&&jn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&jn.push(l),l}const Me=vk;function vk(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===LP)&&(t=yn),uu(t)){const a=As(t,e,!0);return n&&hm(a,n),al>0&&!i&&jn&&(a.shapeFlag&6?jn[jn.indexOf(t)]=a:jn.push(a)),a.patchFlag|=-2,a}if(Nk(t)&&(t=t.__vccOpts),e){e=Ek(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=_s(a)),Ke(l)&&(Sb(l)&&!ue(l)&&(l=gt({},l)),e.style=lh(l))}const o=_t(t)?1:FP(t)?128:_k(t)?64:Ke(t)?4:ve(t)?2:0;return re(t,e,n,r,s,o,i,!0)}function Ek(t){return t?Sb(t)||nT(t)?gt({},t):t:null}function As(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?bk(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&hT(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(jc(e)):[i,jc(e)]:jc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&As(t.ssContent),ssFallback:t.ssFallback&&As(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(h.transition=l.clone(h)),h}function Pt(t=" ",e=0){return Me(vh,null,t,e)}function wk(t,e){const n=Me(Bc,null,t);return n.staticCount=e,n}function cn(t="",e=!1){return e?(Te(),On(yn,null,t)):Me(yn,null,t)}function or(t){return t==null||typeof t=="boolean"?Me(yn):ue(t)?Me(mt,null,t.slice()):typeof t=="object"?ls(t):Me(vh,null,String(t))}function ls(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:As(t)}function hm(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hm(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!nT(e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function bk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_s([e.class,r.class]));else if(s==="style")e.style=lh([e.style,r.style]);else if(sh(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sr(t,e,n,r=null){Nn(t,e,7,[n,r])}const Tk=Zb();let Ik=0;function Ak(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tk,i={uid:Ik++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sT(r,s),emitsOptions:$b(r,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NP.bind(null,i),t.ce&&t.ce(i),i}let Nt=null;const Rs=()=>Nt||wt;let hu,kd;{const t=lb(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hu=e("__VUE_INSTANCE_SETTERS__",n=>Nt=n),kd=e("__VUE_SSR_SETTERS__",n=>Eh=n)}const Sl=t=>{const e=Nt;return hu(t),t.scope.on(),()=>{t.scope.off(),hu(e)}},Ay=()=>{Nt&&Nt.scope.off(),hu(null)};function fT(t){return t.vnode.shapeFlag&4}let Eh=!1;function Rk(t,e=!1){e&&kd(e);const{props:n,children:r}=t.vnode,s=fT(t);lk(t,n,s,e),hk(t,r);const i=s?Sk(t,e):void 0;return e&&kd(!1),i}function Sk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ZP);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pk(t):null,i=Sl(t);Os();const o=vs(r,t,0,[t.props,s]);if(Ds(),i(),sb(o)){if(o.then(Ay,Ay),e)return o.then(a=>{Ry(t,a,e)}).catch(a=>{hh(a,t,0)});t.asyncDep=o}else Ry(t,o,e)}else dT(t,e)}function Ry(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Ob(e)),dT(t,n)}let Sy;function dT(t,e,n){const r=t.type;if(!t.render){if(!e&&Sy&&!r.render){const s=r.template||cm(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=gt(gt({isCustomElement:i,delimiters:a},o),l);r.render=Sy(s,u)}}t.render=r.render||Pn}{const s=Sl(t);Os();try{ek(t)}finally{Ds(),s()}}}const Ck={get(t,e){return dn(t,"get",""),t[e]}};function Pk(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ck),slots:t.slots,emit:t.emit,expose:e}}function wh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ob(Oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ma)return Ma[n](t)},has(e,n){return n in e||n in Ma}}))}function kk(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function Nk(t){return ve(t)&&"__vccOpts"in t}const Ze=(t,e)=>EP(t,e,Eh);function po(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!ue(e)?uu(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&uu(n)&&(n=[n]),Me(t,e,n))}const Ok="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dk="http://www.w3.org/2000/svg",xk="http://www.w3.org/1998/Math/MathML",cs=typeof document<"u"?document:null,Cy=cs&&cs.createElement("template"),Mk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cs.createElementNS(Dk,t):e==="mathml"?cs.createElementNS(xk,t):cs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cs.createTextNode(t),createComment:t=>cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Cy.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Cy.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zr="transition",ha="animation",mo=Symbol("_vtc"),pT=(t,{slots:e})=>po(HP,gT(t),e);pT.displayName="Transition";const mT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lk=pT.props=gt({},zb,mT),Gs=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Py=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function gT(t){const e={};for(const R in t)R in mT||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=Vk(s),v=_&&_[0],A=_&&_[1],{onBeforeEnter:S,onEnter:O,onEnterCancelled:D,onLeave:x,onLeaveCancelled:F,onBeforeAppear:k=S,onAppear:I=O,onAppearCancelled:y=D}=e,b=(R,T,he)=>{ss(R,T?h:a),ss(R,T?u:o),he&&he()},P=(R,T)=>{R._isLeaving=!1,ss(R,f),ss(R,g),ss(R,p),T&&T()},E=R=>(T,he)=>{const Re=R?I:O,Y=()=>b(T,R,he);Gs(Re,[T,Y]),ky(()=>{ss(T,R?l:i),Ar(T,R?h:a),Py(Re)||Ny(T,r,v,Y)})};return gt(e,{onBeforeEnter(R){Gs(S,[R]),Ar(R,i),Ar(R,o)},onBeforeAppear(R){Gs(k,[R]),Ar(R,l),Ar(R,u)},onEnter:E(!1),onAppear:E(!0),onLeave(R,T){R._isLeaving=!0;const he=()=>P(R,T);Ar(R,f),Ar(R,p),yT(),ky(()=>{R._isLeaving&&(ss(R,f),Ar(R,g),Py(x)||Ny(R,r,A,he))}),Gs(x,[R,he])},onEnterCancelled(R){b(R,!1),Gs(D,[R])},onAppearCancelled(R){b(R,!0),Gs(y,[R])},onLeaveCancelled(R){P(R),Gs(F,[R])}})}function Vk(t){if(t==null)return null;if(Ke(t))return[Lf(t.enter),Lf(t.leave)];{const e=Lf(t);return[e,e]}}function Lf(t){return WC(t)}function Ar(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[mo]||(t[mo]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[mo];n&&(n.delete(e),n.size||(t[mo]=void 0))}function ky(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Fk=0;function Ny(t,e,n,r){const s=t._endId=++Fk,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=_T(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function _T(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${Zr}Delay`),i=r(`${Zr}Duration`),o=Oy(s,i),a=r(`${ha}Delay`),l=r(`${ha}Duration`),u=Oy(a,l);let h=null,f=0,p=0;e===Zr?o>0&&(h=Zr,f=o,p=i.length):e===ha?u>0&&(h=ha,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?Zr:ha:null,p=h?h===Zr?i.length:l.length:0);const g=h===Zr&&/\b(transform|all)(,|$)/.test(r(`${Zr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function Oy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Dy(n)+Dy(t[r])))}function Dy(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yT(){return document.body.offsetHeight}function $k(t,e,n){const r=t[mo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fu=Symbol("_vod"),vT=Symbol("_vsh"),az={beforeMount(t,{value:e},{transition:n}){t[fu]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):fa(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),fa(t,!0),r.enter(t)):r.leave(t,()=>{fa(t,!1)}):fa(t,e))},beforeUnmount(t,{value:e}){fa(t,e)}};function fa(t,e){t.style.display=e?t[fu]:"none",t[vT]=!e}const Uk=Symbol(""),Bk=/(^|;)\s*display\s*:/;function jk(t,e,n){const r=t.style,s=_t(n);let i=!1;if(n&&!s){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qc(r,a,"")}else for(const o in e)n[o]==null&&qc(r,o,"");for(const o in n)o==="display"&&(i=!0),qc(r,o,n[o])}else if(s){if(e!==n){const o=r[Uk];o&&(n+=";"+o),r.cssText=n,i=Bk.test(n)}}else e&&t.removeAttribute("style");fu in t&&(t[fu]=i?r.display:"",t[vT]&&(r.display="none"))}const xy=/\s*!important$/;function qc(t,e,n){if(ue(n))n.forEach(r=>qc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qk(t,e);xy.test(n)?t.setProperty(No(r),n.replace(xy,""),"important"):t[r]=n}}const My=["Webkit","Moz","ms"],Vf={};function qk(t,e){const n=Vf[e];if(n)return n;let r=_r(e);if(r!=="filter"&&r in t)return Vf[e]=r;r=ah(r);for(let s=0;s<My.length;s++){const i=My[s]+r;if(i in t)return Vf[e]=i}return e}const Ly="http://www.w3.org/1999/xlink";function Hk(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ly,e.slice(6,e.length)):t.setAttributeNS(Ly,e,n);else{const i=XC(e);n==null||i&&!cb(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Wk(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?t.getAttribute("value")||"":t.value,h=n??"";(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=cb(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Zs(t,e,n,r){t.addEventListener(e,n,r)}function zk(t,e,n,r){t.removeEventListener(e,n,r)}const Vy=Symbol("_vei");function Kk(t,e,n,r,s=null){const i=t[Vy]||(t[Vy]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Gk(e);if(r){const u=i[e]=Xk(r,s);Zs(t,a,u,l)}else o&&(zk(t,a,o,l),i[e]=void 0)}}const Fy=/(?:Once|Passive|Capture)$/;function Gk(t){let e;if(Fy.test(t)){e={};let r;for(;r=t.match(Fy);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):No(t.slice(2)),e]}let Ff=0;const Qk=Promise.resolve(),Yk=()=>Ff||(Qk.then(()=>Ff=0),Ff=Date.now());function Xk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nn(Jk(r,n.value),e,5,[r])};return n.value=t,n.attached=Yk(),n}function Jk(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $y=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zk=(t,e,n,r,s,i,o,a,l)=>{const u=s==="svg";e==="class"?$k(t,r,u):e==="style"?jk(t,n,r):sh(e)?Wp(e)||Kk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eN(t,e,r,u))?Wk(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hk(t,e,r,u))};function eN(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$y(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $y(e)&&_t(n)?!1:e in t}const ET=new WeakMap,wT=new WeakMap,du=Symbol("_moveCb"),Uy=Symbol("_enterCb"),bT={name:"TransitionGroup",props:gt({},Lk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Rs(),r=Wb();let s,i;return Qb(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!iN(s[0].el,n.vnode.el,o))return;s.forEach(nN),s.forEach(rN);const a=s.filter(sN);yT(),a.forEach(l=>{const u=l.el,h=u.style;Ar(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[du]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[du]=null,ss(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Ne(t),a=gT(o);let l=o.tag||mt;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),il(h,sl(h,a,r,n)),ET.set(h,h.el.getBoundingClientRect()))}i=e.default?om(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&il(h,sl(h,a,r,n))}return Me(l,null,i)}}},tN=t=>delete t.mode;bT.props;const lz=bT;function nN(t){const e=t.el;e[du]&&e[du](),e[Uy]&&e[Uy]()}function rN(t){wT.set(t,t.el.getBoundingClientRect())}function sN(t){const e=ET.get(t),n=wT.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function iN(t,e,n){const r=t.cloneNode(),s=t[mo];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=_T(r);return i.removeChild(r),o}const pu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Uc(e,n):e};function oN(t){t.target.composing=!0}function By(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const no=Symbol("_assign"),aN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[no]=pu(s);const i=r||s.props&&s.props.type==="number";Zs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vd(a)),t[no](a)}),n&&Zs(t,"change",()=>{t.value=t.value.trim()}),e||(Zs(t,"compositionstart",oN),Zs(t,"compositionend",By),Zs(t,"change",By))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[no]=pu(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?vd(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},lN={deep:!0,created(t,e,n){t[no]=pu(n),Zs(t,"change",()=>{const r=t._modelValue,s=cN(t),i=t.checked,o=t[no];if(ue(r)){const a=ub(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(ih(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(TT(t,i))})},mounted:jy,beforeUpdate(t,e,n){t[no]=pu(n),jy(t,e,n)}};function jy(t,{value:e,oldValue:n},r){t._modelValue=e,ue(e)?t.checked=ub(e,r.props.value)>-1:ih(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ch(e,TT(t,!0)))}function cN(t){return"_value"in t?t._value:t.value}function TT(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uN=["ctrl","shift","alt","meta"],hN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uN.some(n=>t[`${n}Key`]&&!e.includes(n))},cz=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=hN[e[o]];if(a&&a(s,e))return}return t(s,...i)})},fN=gt({patchProp:Zk},Mk);let qy;function dN(){return qy||(qy=dk(fN))}const pN=(...t)=>{const e=dN().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gN(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,mN(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mN(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gN(t){return _t(t)?document.querySelector(t):t}var _N=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let IT;const bh=t=>IT=t,AT=Symbol();function Nd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Fa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fa||(Fa={}));function yN(){const t=Gp(!0),e=t.run(()=>Ae({}));let n=[],r=[];const s=Oo({install(i){bh(s),s._a=i,i.provide(AT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_N?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const RT=()=>{};function Hy(t,e,n,r=RT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qp()&&db(s),s}function Fi(t,...e){t.slice().forEach(n=>{n(...e)})}const vN=t=>t();function Od(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Nd(s)&&Nd(r)&&t.hasOwnProperty(n)&&!st(r)&&!dr(r)?t[n]=Od(s,r):t[n]=r}return t}const EN=Symbol();function wN(t){return!Nd(t)||!t.hasOwnProperty(EN)}const{assign:is}=Object;function bN(t){return!!(st(t)&&t.effect)}function TN(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=TP(n.state.value[t]);return is(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Oo(Ze(()=>{bh(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return l=ST(t,u,e,n,r,!0),l}function ST(t,e,n={},r,s,i){let o;const a=is({actions:{}},n),l={deep:!0};let u,h,f=[],p=[],g;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Ae({});let v;function A(y){let b;u=h=!1,typeof y=="function"?(y(r.state.value[t]),b={type:Fa.patchFunction,storeId:t,events:g}):(Od(r.state.value[t],y),b={type:Fa.patchObject,payload:y,storeId:t,events:g});const P=v=Symbol();fh().then(()=>{v===P&&(u=!0)}),h=!0,Fi(f,b,r.state.value[t])}const S=i?function(){const{state:b}=n,P=b?b():{};this.$patch(E=>{is(E,P)})}:RT;function O(){o.stop(),f=[],p=[],r._s.delete(t)}function D(y,b){return function(){bh(r);const P=Array.from(arguments),E=[],R=[];function T(Y){E.push(Y)}function he(Y){R.push(Y)}Fi(p,{args:P,name:y,store:F,after:T,onError:he});let Re;try{Re=b.apply(this&&this.$id===t?this:F,P)}catch(Y){throw Fi(R,Y),Y}return Re instanceof Promise?Re.then(Y=>(Fi(E,Y),Y)).catch(Y=>(Fi(R,Y),Promise.reject(Y))):(Fi(E,Re),Re)}}const x={_p:r,$id:t,$onAction:Hy.bind(null,p),$patch:A,$reset:S,$subscribe(y,b={}){const P=Hy(f,y,b.detached,()=>E()),E=o.run(()=>Gn(()=>r.state.value[t],R=>{(b.flush==="sync"?h:u)&&y({storeId:t,type:Fa.direct,events:g},R)},is({},l,b)));return P},$dispose:O},F=lr(x);r._s.set(t,F);const I=(r._a&&r._a.runWithContext||vN)(()=>r._e.run(()=>(o=Gp()).run(e)));for(const y in I){const b=I[y];if(st(b)&&!bN(b)||dr(b))i||(_&&wN(b)&&(st(b)?b.value=_[y]:Od(b,_[y])),r.state.value[t][y]=b);else if(typeof b=="function"){const P=D(y,b);I[y]=P,a.actions[y]=b}}return is(F,I),is(Ne(F),I),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:y=>{A(b=>{is(b,y)})}}),r._p.forEach(y=>{is(F,o.run(()=>y({store:F,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(F.$state,_),u=!0,h=!0,F}function fm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=ak();return a=a||(u?xt(AT,null):null),a&&bh(a),a=IT,a._s.has(r)||(i?ST(r,e,s,a):TN(r,s,a)),a._s.get(r)}return o.$id=r,o}function IN(t){{t=Ne(t);const e={};for(const n in t){const r=t[n];(st(r)||dr(r))&&(e[n]=Db(t,n))}return e}}var Wy={};/**
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
 */const CT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(t,e){if(!t)throw xo(e)},xo=function(t){return new Error("Firebase Database ("+CT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const PT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},AN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new RN;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kT=function(t){const e=PT(t);return Th.encodeByteArray(e,!0)},mu=function(t){return kT(t).replace(/\./g,"")},gu=function(t){try{return Th.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SN(t){return NT(void 0,t)}function NT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CN(n)||(t[n]=NT(t[n],e[n]));return t}function CN(t){return t!=="__proto__"}/**
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
 */function PN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kN=()=>PN().__FIREBASE_DEFAULTS__,NN=()=>{if(typeof process>"u"||typeof Wy>"u")return;const t=Wy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ON=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gu(t[1]);return e&&JSON.parse(e)},Ih=()=>{try{return kN()||NN()||ON()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OT=t=>{var e,n;return(n=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DT=t=>{const e=OT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xT=()=>{var t;return(t=Ih())===null||t===void 0?void 0:t.config},MT=t=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function DN(){var t;const e=(t=Ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MN(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FT(){return CT.NODE_ADMIN===!0}function LN(){return!DN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $T(){try{return typeof indexedDB=="object"}catch{return!1}}function VN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const FN="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FN,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$N(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wr(s,a,r)}}function $N(t,e){return t.replace(UN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UN=/\{\$([^}]+)}/g;/**
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
 */function cl(t){return JSON.parse(t)}function Vt(t){return JSON.stringify(t)}/**
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
 */const UT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=cl(gu(i[0])||""),n=cl(gu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},BN=function(t){const e=UT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jN=function(t){const e=UT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function go(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _u(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zy(i)&&zy(o)){if(!yu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zy(t){return t!==null&&typeof t=="object"}/**
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
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ta(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class qN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function HN(t,e){const n=new WN(t,e);return n.subscribe.bind(n)}class WN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$f),s.error===void 0&&(s.error=$f),s.complete===void 0&&(s.complete=$f);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $f(){}function KN(t,e){return`${t} failed: ${e} argument `}/**
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
 */const GN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,J(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ah=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qs="[DEFAULT]";/**
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
 */class QN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XN(e))try{this.getOrInitializeService({instanceIdentifier:Qs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qs){return this.instances.has(e)}getOptions(e=Qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qs){return this.component?this.component.multipleInstances?e:Qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YN(t){return t===Qs?void 0:t}function XN(t){return t.instantiationMode==="EAGER"}/**
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
 */class JN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const ZN={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},eO=Se.INFO,tO={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},nO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=eO,this._logHandler=nO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const rO=(t,e)=>e.some(n=>t instanceof n);let Ky,Gy;function sO(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iO(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BT=new WeakMap,xd=new WeakMap,jT=new WeakMap,Uf=new WeakMap,pm=new WeakMap;function oO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Es(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BT.set(n,t)}).catch(()=>{}),pm.set(e,t),e}function aO(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let Md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lO(t){Md=t(Md)}function cO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bf(this),e,...n);return jT.set(r,e.sort?e.sort():[e]),Es(r)}:iO().includes(t)?function(...e){return t.apply(Bf(this),e),Es(BT.get(this))}:function(...e){return Es(t.apply(Bf(this),e))}}function uO(t){return typeof t=="function"?cO(t):(t instanceof IDBTransaction&&aO(t),rO(t,sO())?new Proxy(t,Md):t)}function Es(t){if(t instanceof IDBRequest)return oO(t);if(Uf.has(t))return Uf.get(t);const e=uO(t);return e!==t&&(Uf.set(t,e),pm.set(e,t)),e}const Bf=t=>pm.get(t);function hO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Es(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Es(o.result),l.oldVersion,l.newVersion,Es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fO=["get","getKey","getAll","getAllKeys","count"],dO=["put","add","delete","clear"],jf=new Map;function Qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jf.get(e))return jf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fO.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return jf.set(e,i),i}lO(t=>({...t,get:(e,n,r)=>Qy(e,n)||t.get(e,n,r),has:(e,n)=>!!Qy(e,n)||t.has(e,n)}));/**
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
 */class pO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",Yy="0.10.3";/**
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
 */const ui=new Cl("@firebase/app"),gO="@firebase/app-compat",_O="@firebase/analytics-compat",yO="@firebase/analytics",vO="@firebase/app-check-compat",EO="@firebase/app-check",wO="@firebase/auth",bO="@firebase/auth-compat",TO="@firebase/database",IO="@firebase/database-compat",AO="@firebase/functions",RO="@firebase/functions-compat",SO="@firebase/installations",CO="@firebase/installations-compat",PO="@firebase/messaging",kO="@firebase/messaging-compat",NO="@firebase/performance",OO="@firebase/performance-compat",DO="@firebase/remote-config",xO="@firebase/remote-config-compat",MO="@firebase/storage",LO="@firebase/storage-compat",VO="@firebase/firestore",FO="@firebase/vertexai-preview",$O="@firebase/firestore-compat",UO="firebase",BO="10.12.0";/**
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
 */const Vd="[DEFAULT]",jO={[Ld]:"fire-core",[gO]:"fire-core-compat",[yO]:"fire-analytics",[_O]:"fire-analytics-compat",[EO]:"fire-app-check",[vO]:"fire-app-check-compat",[wO]:"fire-auth",[bO]:"fire-auth-compat",[TO]:"fire-rtdb",[IO]:"fire-rtdb-compat",[AO]:"fire-fn",[RO]:"fire-fn-compat",[SO]:"fire-iid",[CO]:"fire-iid-compat",[PO]:"fire-fcm",[kO]:"fire-fcm-compat",[NO]:"fire-perf",[OO]:"fire-perf-compat",[DO]:"fire-rc",[xO]:"fire-rc-compat",[MO]:"fire-gcs",[LO]:"fire-gcs-compat",[VO]:"fire-fst",[$O]:"fire-fst-compat",[FO]:"fire-vertex","fire-js":"fire-js",[UO]:"fire-js-all"};/**
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
 */const vu=new Map,qO=new Map,Fd=new Map;function Xy(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(Fd.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,t);for(const n of vu.values())Xy(n,t);for(const n of qO.values())Xy(n,t);return!0}function Rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
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
 */const HO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new Mo("app","Firebase",HO);/**
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
 */class WO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=BO;function qT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(n||(n=xT()),!n)throw ws.create("no-options");const i=vu.get(s);if(i){if(yu(n,i.options)&&yu(r,i.config))return i;throw ws.create("duplicate-app",{appName:s})}const o=new JN(s);for(const l of Fd.values())o.addComponent(l);const a=new WO(n,r,o);return vu.set(s,a),a}function Sh(t=Vd){const e=vu.get(t);if(!e&&t===Vd&&xT())return qT();if(!e)throw ws.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let s=(r=jO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}yr(new Jn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zO="firebase-heartbeat-database",KO=1,ul="firebase-heartbeat-store";let qf=null;function HT(){return qf||(qf=hO(zO,KO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw ws.create("idb-open",{originalErrorMessage:t.message})})),qf}async function GO(t){try{const n=(await HT()).transaction(ul),r=await n.objectStore(ul).get(WT(t));return await n.done,r}catch(e){if(e instanceof wr)ui.warn(e.message);else{const n=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function Jy(t,e){try{const r=(await HT()).transaction(ul,"readwrite");await r.objectStore(ul).put(e,WT(t)),await r.done}catch(n){if(n instanceof wr)ui.warn(n.message);else{const r=ws.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(r.message)}}}function WT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QO=1024,YO=30*24*60*60*1e3;class XO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:r,unsentEntries:s}=JO(this._heartbeatsCache.heartbeats),i=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zy(){return new Date().toISOString().substring(0,10)}function JO(t,e=QO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ev(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $T()?VN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ev(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function e1(t){yr(new Jn("platform-logger",e=>new pO(e),"PRIVATE")),yr(new Jn("heartbeat",e=>new XO(e),"PRIVATE")),wn(Ld,Yy,t),wn(Ld,Yy,"esm2017"),wn("fire-js","")}e1("");function mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=zT,KT=new Mo("auth","Firebase",zT());/**
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
 */const Eu=new Cl("@firebase/auth");function n1(t,...e){Eu.logLevel<=Se.WARN&&Eu.warn(`Auth (${xs}): ${t}`,...e)}function Hc(t,...e){Eu.logLevel<=Se.ERROR&&Eu.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function Mn(t,...e){throw _m(t,...e)}function Qn(t,...e){return _m(t,...e)}function gm(t,e,n){const r=Object.assign(Object.assign({},t1()),{[e]:n});return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function Dr(t){return gm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function r1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mn(t,"argument-error"),gm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _m(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KT.create(t,...e)}function _e(t,e,...n){if(!t)throw _m(e,...n)}function Cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function $r(t,e){t||Cr(e)}/**
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
 */function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s1(){return tv()==="http:"||tv()==="https:"}function tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||xN()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,$r(n>e,"Short delay should be less than long delay!"),this.isMobile=dm()||VT()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ym(t,e){$r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class GT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const a1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const l1=new Pl(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,r,s={}){return QT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),GT.fetch()(YT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function QT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a1),e);try{const s=new u1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Rc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gm(t,h,u);Mn(t,h)}}catch(s){if(s instanceof wr)throw s;Mn(t,"network-request-failed",{message:String(s)})}}async function kl(t,e,n,r,s={}){const i=await Ls(t,e,n,r,s);return"mfaPendingCredential"in i&&Mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function YT(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ym(t.config,s):`${t.config.apiScheme}://${s}`}function c1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class u1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),l1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qn(t,e,r);return s.customData._tokenResponse=n,s}function nv(t){return t!==void 0&&t.enterprise!==void 0}class h1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return c1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function f1(t,e){return Ls(t,"GET","/v2/recaptchaConfig",Ms(t,e))}/**
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
 */async function d1(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function XT(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p1(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=vm(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$a(Hf(s.auth_time)),issuedAtTime:$a(Hf(s.iat)),expirationTime:$a(Hf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hf(t){return Number(t)*1e3}function vm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const s=gu(n);return s?JSON.parse(s):(Hc("Failed to decode base64 JWT payload"),null)}catch(s){return Hc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rv(t){const e=vm(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&m1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class g1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hl(t,XT(n,{idToken:r}));_e(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?JT(i.providerUserInfo):[],a=y1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ud(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function _1(t){const e=Je(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function JT(t){return t.map(e=>{var{providerId:n}=e,r=mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function v1(t,e){const n=await QT(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=YT(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",GT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E1(t,e){return Ls(t,"POST","/v2/accounts:revokeToken",Ms(t,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=rv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await v1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ro;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function es(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ud(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return p1(this,e)}reload(){return _1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await hl(this,d1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:x,isAnonymous:F,providerData:k,stsTokenManager:I}=n;_e(D&&I,e,"internal-error");const y=ro.fromJSON(this.name,I);_e(typeof D=="string",e,"internal-error"),es(f,e.name),es(p,e.name),_e(typeof x=="boolean",e,"internal-error"),_e(typeof F=="boolean",e,"internal-error"),es(g,e.name),es(_,e.name),es(v,e.name),es(A,e.name),es(S,e.name),es(O,e.name);const b=new Pr({uid:D,auth:e,email:p,emailVerified:x,displayName:f,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:y,createdAt:S,lastLoginAt:O});return k&&Array.isArray(k)&&(b.providerData=k.map(P=>Object.assign({},P))),A&&(b._redirectEventId=A),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new ro;s.updateFromServerResponse(n);const i=new Pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?JT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ro;a.updateFromIdToken(r);const l=new Pr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const sv=new Map;function kr(t){$r(t instanceof Function,"Expected a class definition");let e=sv.get(t);return e?($r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sv.set(t,e),e)}/**
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
 */class ZT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZT.type="NONE";const iv=ZT;/**
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
 */function Wc(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(kr(iv),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kr(iv);const o=Wc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Pr._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new so(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new so(i,e,r))}}/**
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
 */function ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sI(e))return"Blackberry";if(iI(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||tI(e))&&!e.includes("edge/"))return"Chrome";if(rI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eI(t=jt()){return/firefox\//i.test(t)}function Em(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tI(t=jt()){return/crios\//i.test(t)}function nI(t=jt()){return/iemobile/i.test(t)}function rI(t=jt()){return/android/i.test(t)}function sI(t=jt()){return/blackberry/i.test(t)}function iI(t=jt()){return/webos/i.test(t)}function Ch(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w1(t=jt()){var e;return Ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b1(){return MN()&&document.documentMode===10}function oI(t=jt()){return Ch(t)||rI(t)||iI(t)||sI(t)||/windows phone/i.test(t)||nI(t)}function T1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function aI(t,e=[]){let n;switch(t){case"Browser":n=ov(jt());break;case"Worker":n=`${ov(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function A1(t,e={}){return Ls(t,"GET","/v2/passwordPolicy",Ms(t,e))}/**
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
 */const R1=6;class S1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:R1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class C1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await XT(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Dr(this));const n=e?Je(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return Je(t)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=HN(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P1(t){Ph=t}function lI(t){return Ph.loadJS(t)}function k1(){return Ph.recaptchaEnterpriseScript}function N1(){return Ph.gapiScript}function O1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const D1="recaptcha-enterprise",x1="NO_RECAPTCHA";class M1{constructor(e){this.type=D1,this.auth=Vs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{f1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new h1(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;nv(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(x1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&nv(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=k1();l.length!==0&&(l+=a),lI(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function lv(t,e,n,r=!1){const s=new M1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await lv(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function cI(t,e){const n=Rh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yu(i,e??{}))return s;Mn(s,"already-initialized")}return n.initialize({options:e})}function L1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function V1(t,e,n){const r=Vs(t);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=uI(e),{host:o,port:a}=F1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$1()}function uI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F1(t){const e=uI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,n){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function U1(t,e){return Ls(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function B1(t,e){return kl(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
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
 */async function j1(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function q1(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
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
 */class fl extends wm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,n,"signInWithPassword",B1);case"emailLink":return j1(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,r,"signUpPassword",U1);case"emailLink":return q1(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function io(t,e){return kl(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
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
 */const H1="http://localhost";class hi extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:H1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
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
 */function W1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z1(t){const e=Ta(Ia(t)).link,n=e?Ta(Ia(e)).deep_link_id:null,r=Ta(Ia(t)).deep_link_id;return(r?Ta(Ia(r)).link:null)||r||n||e||t}class bm{constructor(e){var n,r,s,i,o,a;const l=Ta(Ia(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=W1((s=l.mode)!==null&&s!==void 0?s:null);_e(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=z1(e);try{return new bm(n)}catch{return null}}}/**
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
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,n){return fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bm.parseLink(n);return _e(r,"argument-error"),fl._fromEmailAndCode(e,r.code,r.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nl extends Tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hs extends Nl{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";hs.PROVIDER_ID="facebook.com";/**
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
 */class fs extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fs.credential(n,r)}catch{return null}}}fs.GOOGLE_SIGN_IN_METHOD="google.com";fs.PROVIDER_ID="google.com";/**
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
 */class ds extends Nl{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.GITHUB_SIGN_IN_METHOD="github.com";ds.PROVIDER_ID="github.com";/**
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
 */class ps extends Nl{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ps.credential(n,r)}catch{return null}}}ps.TWITTER_SIGN_IN_METHOD="twitter.com";ps.PROVIDER_ID="twitter.com";/**
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
 */async function K1(t,e){return kl(t,"POST","/v1/accounts:signUp",Ms(t,e))}/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pr._fromIdTokenResponse(e,r,s),o=uv(r);return new fi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uv(r);return new fi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bu extends wr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bu(e,n,r,s)}}function hI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(t,i,e,r):i})}async function G1(t,e,n=!1){const r=await hl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function Q1(t,e,n=!1){const{auth:r}=t;if(qn(r.app))return Promise.reject(Dr(r));const s="reauthenticate";try{const i=await hl(t,hI(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=vm(i.idToken);_e(o,r,"internal-error");const{sub:a}=o;return _e(t.uid===a,r,"user-mismatch"),fi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),i}}/**
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
 */async function fI(t,e,n=!1){if(qn(t.app))return Promise.reject(Dr(t));const r="signIn",s=await hI(t,r,e),i=await fi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Y1(t,e){return fI(Vs(t),e)}/**
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
 */async function dI(t){const e=Vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uz(t,e,n){if(qn(t.app))return Promise.reject(Dr(t));const r=Vs(t),o=await Bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",K1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dI(t),l}),a=await fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function hz(t,e,n){return qn(t.app)?Promise.reject(Dr(t)):Y1(Je(t),Vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dI(t),r})}function pI(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function X1(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Im(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function J1(t){return Je(t).signOut()}const Tu="__sak";/**
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
 */class mI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Z1(){const t=jt();return Em(t)||Ch(t)}const eD=1e3,tD=10;class gI extends mI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z1()&&T1(),this.fallbackToPolling=oI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);b1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const _I=gI;/**
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
 */class yI extends mI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yI.type="SESSION";const Am=yI;/**
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
 */function nD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await nD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
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
 */function Rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Rm("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pr(){return window}function sD(t){pr().location.href=t}/**
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
 */function vI(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function iD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aD(){return vI()?self:null}/**
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
 */const EI="firebaseLocalStorageDb",lD=1,Iu="firebaseLocalStorage",wI="fbase_key";class Ol{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nh(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function cD(){const t=indexedDB.deleteDatabase(EI);return new Ol(t).toPromise()}function jd(){const t=indexedDB.open(EI,lD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:wI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await cD(),e(await jd()))})})}async function hv(t,e,n){const r=Nh(t,!0).put({[wI]:e,value:n});return new Ol(r).toPromise()}async function uD(t,e){const n=Nh(t,!1).get(e),r=await new Ol(n).toPromise();return r===void 0?null:r.value}function fv(t,e){const n=Nh(t,!0).delete(e);return new Ol(n).toPromise()}const hD=800,fD=3;class bI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(aD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await hv(e,Tu,"1"),await fv(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nh(s,!1).getAll();return new Ol(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bI.type="LOCAL";const TI=bI;new Pl(3e4,6e4);/**
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
 */function II(t,e){return e?kr(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sm extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dD(t){return fI(t.auth,new Sm(t),t.bypassAuthState)}function pD(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),Q1(n,new Sm(t),t.bypassAuthState)}async function mD(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),G1(n,new Sm(t),t.bypassAuthState)}/**
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
 */class AI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dD;case"linkViaPopup":case"linkViaRedirect":return mD;case"reauthViaPopup":case"reauthViaRedirect":return pD;default:Mn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gD=new Pl(2e3,1e4);async function fz(t,e,n){if(qn(t.app))return Promise.reject(Qn(t,"operation-not-supported-in-this-environment"));const r=Vs(t);r1(t,e,Tm);const s=II(r,n);return new ni(r,"signInViaPopup",e,s).executeNotNull()}class ni extends AI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gD.get())};e()}}ni.currentPopupAction=null;/**
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
 */const _D="pendingRedirect",zc=new Map;class yD extends AI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const r=await vD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vD(t,e){const n=bD(e),r=wD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ED(t,e){zc.set(t._key(),e)}function wD(t){return kr(t._redirectPersistence)}function bD(t){return Wc(_D,t.config.apiKey,t.name)}async function TD(t,e,n=!1){if(qn(t.app))return Promise.reject(Dr(t));const r=Vs(t),s=II(r,e),o=await new yD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ID=10*60*1e3;class AD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ID&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RI(t);default:return!1}}/**
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
 */async function SD(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const CD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PD=/^https?/;async function kD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SD(t);for(const n of e)try{if(ND(n))return}catch{}Mn(t,"unauthorized-domain")}function ND(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PD.test(n))return!1;if(CD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OD=new Pl(3e4,6e4);function pv(){const t=pr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DD(t){return new Promise((e,n)=>{var r,s,i;function o(){pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pv(),n(Qn(t,"network-request-failed"))},timeout:OD.get()})}if(!((s=(r=pr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pr().gapi)===null||i===void 0)&&i.load)o();else{const a=O1("iframefcb");return pr()[a]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},lI(`${N1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Kc=null,e})}let Kc=null;function xD(t){return Kc=Kc||DD(t),Kc}/**
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
 */const MD=new Pl(5e3,15e3),LD="__/auth/iframe",VD="emulator/auth/iframe",FD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UD(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ym(e,VD):`https://${t.config.authDomain}/${LD}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=$D.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Lo(r).slice(1)}`}async function BD(t){const e=await xD(t),n=pr().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:UD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),a=pr().setTimeout(()=>{i(o)},MD.get());function l(){pr().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const jD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qD=500,HD=600,WD="_blank",zD="http://localhost";class mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KD(t,e,n,r=qD,s=HD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=jt().toLowerCase();n&&(a=tI(u)?WD:n),eI(u)&&(e=e||zD,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(w1(u)&&a!=="_self")return GD(e||"",a),new mv(null);const f=window.open(e||"",a,h);_e(f,t,"popup-blocked");try{f.focus()}catch{}return new mv(f)}function GD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QD="__/auth/handler",YD="emulator/auth/handler",XD=encodeURIComponent("fac");async function gv(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof Tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Nl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${XD}=${encodeURIComponent(l)}`:"";return`${JD(t)}?${Lo(a).slice(1)}${u}`}function JD({config:t}){return t.emulator?ym(t,YD):`https://${t.authDomain}/${QD}`}/**
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
 */const Wf="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Am,this._completeRedirectFn=TD,this._overrideRedirectResult=ED}async _openPopup(e,n,r,s){var i;$r((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gv(e,n,r,$d(),s);return KD(e,o,Rm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await gv(e,n,r,$d(),s);return sD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($r(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BD(e),r=new AD(e);return n.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wf];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oI()||Em()||Ch()}}const SI=ZD;var _v="@firebase/auth",yv="1.7.3";/**
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
 */class ex{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nx(t){yr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aI(t)},u=new C1(r,s,i,l);return L1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Jn("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(r=>new ex(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(_v,yv,tx(t)),wn(_v,yv,"esm2017")}/**
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
 */const rx=5*60,sx=MT("authIdTokenMaxAge")||rx;let vv=null;const ix=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sx)return;const s=n==null?void 0:n.token;vv!==s&&(vv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cm(t=Sh()){const e=Rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cI(t,{popupRedirectResolver:SI,persistence:[TI,_I,Am]}),r=MT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ix(i.toString());X1(n,o,()=>o(n.currentUser)),pI(n,a=>o(a))}}const s=OT("auth");return s&&V1(n,`http://${s}`),n}function ox(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}P1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ox().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nx("Browser");/**
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
 */const ax=new Map,lx={activated:!1,tokenObservers:[]};function Zn(t){return ax.get(t)||Object.assign({},lx)}const Ev={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class cx{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ll,this.pending.promise.catch(n=>{}),await ux(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ll,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ux(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const hx={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Au=new Mo("appCheck","AppCheck",hx);function CI(t){if(!Zn(t).activated)throw Au.create("use-before-activation",{appName:t.name})}/**
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
 */const fx="firebase-app-check-database",dx=1,qd="firebase-app-check-store";let Sc=null;function px(){return Sc||(Sc=new Promise((t,e)=>{try{const n=indexedDB.open(fx,dx);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Au.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(qd,{keyPath:"compositeKey"})}}}catch(n){e(Au.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Sc)}function mx(t,e){return gx(_x(t),e)}async function gx(t,e){const r=(await px()).transaction(qd,"readwrite"),i=r.objectStore(qd).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(Au.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function _x(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Hd=new Cl("@firebase/app-check");function wv(t,e){return $T()?mx(t,e).catch(n=>{Hd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const yx={error:"UNKNOWN_ERROR"};function vx(t){return Th.encodeString(JSON.stringify(t),!1)}async function Wd(t,e=!1){const n=t.app;CI(n);const r=Zn(n);let s=r.token,i;if(s&&!Aa(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Aa(l)?s=l:await wv(n,void 0))}if(!e&&s&&Aa(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Zn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Hd.warn(l.message):Hd.error(l),i=l}let a;return s?i?Aa(s)?a={token:s.token,internalError:i}:a=Tv(i):(a={token:s.token},r.token=s,await wv(n,s)):a=Tv(i),o&&Tx(n,a),a}async function Ex(t){const e=t.app;CI(e);const{provider:n}=Zn(e);{const{token:r}=await n.getToken();return{token:r}}}function wx(t,e,n,r){const{app:s}=t,i=Zn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Aa(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),bv(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>bv(t))}function PI(t,e){const n=Zn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function bv(t){const{app:e}=t,n=Zn(e);let r=n.tokenRefresher;r||(r=bx(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function bx(t){const{app:e}=t;return new cx(async()=>{const n=Zn(e);let r;if(n.token?r=await Wd(t,!0):r=await Wd(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Zn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Ev.RETRIAL_MIN_WAIT,Ev.RETRIAL_MAX_WAIT)}function Tx(t,e){const n=Zn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Aa(t){return t.expireTimeMillis-Date.now()>0}function Tv(t){return{token:vx(yx),error:t}}/**
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
 */class Ix{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Zn(this.app);for(const n of e)PI(this.app,n.next);return Promise.resolve()}}function Ax(t,e){return new Ix(t,e)}function Rx(t){return{getToken:e=>Wd(t,e),getLimitedUseToken:()=>Ex(t),addTokenListener:e=>wx(t,"INTERNAL",e),removeTokenListener:e=>PI(t.app,e)}}const Sx="@firebase/app-check",Cx="0.8.4",Px="app-check",Iv="app-check-internal";function kx(){yr(new Jn(Px,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ax(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Iv).initialize()})),yr(new Jn(Iv,t=>{const e=t.getProvider("app-check").getImmediate();return Rx(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wn(Sx,Cx)}kx();var Nx="firebase",Ox="10.12.0";/**
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
 */wn(Nx,Ox,"app");const kI=Symbol("firebaseApp");function Dl(t){return Rs()&&xt(kI,null)||Sh(t)}const cr=()=>{};function Pm(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function Dx(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function Ii(t){return!!t&&typeof t=="object"}const xx=Object.prototype;function Mx(t){return Ii(t)&&Object.getPrototypeOf(t)===xx}function km(t){return Ii(t)&&t.type==="document"}function Lx(t){return Ii(t)&&t.type==="collection"}function Vx(t){return km(t)||Lx(t)}function Fx(t){return Ii(t)&&t.type==="query"}function $x(t){return Ii(t)&&"ref"in t}function Ux(t){return Ii(t)&&typeof t.bucket=="string"}function Bx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const jx=Symbol.for("v-scx");function qx(){return Rs(),!!xt(jx,0)}const Cc=new WeakMap;function Hx(t,e){if(!Cc.has(t)){const n=Gp(!0);Cc.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Cc.delete(t)}}return Cc.get(t)}const Wx=new WeakMap,Pc=new WeakMap;function zx(t){const e=Dl(t);if(!Pc.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Pc.set(e,i),n(i.value)}];Pc.set(e,s)}return Pc.get(e)}function Kx(t,e){pI(e,n=>{const r=zx();t.value=n,Array.isArray(r)&&r[1](t)})}var Av={};const Rv="@firebase/database",Sv="1.0.5";/**
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
 */let NI="";function Gx(t){NI=t}/**
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
 */class Qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Vt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Yx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const OI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qx(e)}}catch{}return new Yx},ri=OI("localStorage"),Xx=OI("sessionStorage");/**
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
 */const oo=new Cl("@firebase/database"),Jx=function(){let t=1;return function(){return t++}}(),DI=function(t){const e=GN(t),n=new qN;n.update(e);const r=n.digest();return Th.encodeByteArray(r)},xl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xl.apply(null,r):typeof r=="object"?e+=Vt(r):e+=r,e+=" "}return e};let Ua=null,Cv=!0;const Zx=function(t,e){J(!e,"Can't turn on custom loggers persistently."),oo.logLevel=Se.VERBOSE,Ua=oo.log.bind(oo)},Kt=function(...t){if(Cv===!0&&(Cv=!1,Ua===null&&Xx.get("logging_enabled")===!0&&Zx()),Ua){const e=xl.apply(null,t);Ua(e)}},Ml=function(t){return function(...e){Kt(t,...e)}},zd=function(...t){const e="FIREBASE INTERNAL ERROR: "+xl(...t);oo.error(e)},di=function(...t){const e=`FIREBASE FATAL ERROR: ${xl(...t)}`;throw oo.error(e),new Error(e)},bn=function(...t){const e="FIREBASE WARNING: "+xl(...t);oo.warn(e)},eM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_o="[MIN_NAME]",pi="[MAX_NAME]",Fo=function(t,e){if(t===e)return 0;if(t===_o||e===pi)return-1;if(e===_o||t===pi)return 1;{const n=Pv(t),r=Pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nM=function(t,e){return t===e?0:t<e?-1:1},da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Vt(e))},Nm=function(t){if(typeof t!="object"||t===null)return Vt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Vt(e[r]),n+=":",n+=Nm(t[e[r]]);return n+="}",n},MI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const LI=function(t){J(!xI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},rM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},iM=new RegExp("^-?(0*)\\d{1,10}$"),oM=-2147483648,aM=2147483647,Pv=function(t){if(iM.test(t)){const e=Number(t);if(e>=oM&&e<=aM)return e}return null},Ll=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bn("Exception was thrown by user callback.",n),e},Math.floor(0))}},lM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ba=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){bn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bn(e)}}/**
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
 */const Om="5",VI="v",FI="s",$I="r",UI="f",BI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jI="ls",qI="p",Kd="ac",HI="websocket",WI="long_polling";/**
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
 */class hM{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zI(t,e,n){J(typeof e=="string","typeof type must == string"),J(typeof n=="object","typeof params must == object");let r;if(e===HI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===WI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fM(t)&&(n.ns=t.namespace);const s=[];return Ln(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class dM{constructor(){this.counters_={}}incrementCounter(e,n=1){zr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SN(this.counters_)}}/**
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
 */const zf={},Kf={};function Dm(t){const e=t.toString();return zf[e]||(zf[e]=new dM),zf[e]}function pM(t,e){const n=t.toString();return Kf[n]||(Kf[n]=e()),Kf[n]}/**
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
 */class mM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ll(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kv="start",gM="close",_M="pLPCommand",yM="pRTLPCB",KI="id",GI="pw",QI="ser",vM="cb",EM="seg",wM="ts",bM="d",TM="dframe",YI=1870,XI=30,IM=YI-XI,AM=25e3,RM=3e4;class Ki{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ml(e),this.stats_=Dm(n),this.urlFn=l=>(this.appCheckToken&&(l[Kd]=this.appCheckToken),zI(n,WI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RM)),tM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xm((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kv)this.id=a,this.password=l;else if(o===gM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[kv]="t",r[QI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[VI]=Om,this.transportSessionId&&(r[FI]=this.transportSessionId),this.lastSessionId&&(r[jI]=this.lastSessionId),this.applicationId&&(r[qI]=this.applicationId),this.appCheckToken&&(r[Kd]=this.appCheckToken),typeof location<"u"&&location.hostname&&BI.test(location.hostname)&&(r[$I]=UI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ki.forceAllow_=!0}static forceDisallow(){Ki.forceDisallow_=!0}static isAvailable(){return Ki.forceAllow_?!0:!Ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rM()&&!sM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kT(n),s=MI(r,IM);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[TM]="t",r[KI]=e,r[GI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Vt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xm{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jx(),window[_M+this.uniqueCallbackIdentifier]=e,window[yM+this.uniqueCallbackIdentifier]=n,this.myIFrame=xm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[KI]=this.myID,e[GI]=this.myPW,e[QI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+XI+r.length<=YI;){const o=this.pendingSegs.shift();r=r+"&"+EM+s+"="+o.seg+"&"+wM+s+"="+o.ts+"&"+bM+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(AM)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const SM=16384,CM=45e3;let Ru=null;typeof MozWebSocket<"u"?Ru=MozWebSocket:typeof WebSocket<"u"&&(Ru=WebSocket);class Bn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ml(this.connId),this.stats_=Dm(n),this.connURL=Bn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[VI]=Om,typeof location<"u"&&location.hostname&&BI.test(location.hostname)&&(o[$I]=UI),n&&(o[FI]=n),r&&(o[jI]=r),s&&(o[Kd]=s),i&&(o[qI]=i),zI(e,HI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;FT(),this.mySock=new Ru(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ru!==null&&!Bn.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=MI(n,SM);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bn.responsesRequiredToBeHealthy=2;Bn.healthyTimeout=3e4;/**
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
 */class dl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ki,Bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bn&&Bn.isAvailable();let r=n&&!Bn.previouslyFailed();if(e.webSocketOnly&&(n||bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Bn];else{const s=this.transports_=[];for(const i of dl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);dl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dl.globalTransportInitialized_=!1;/**
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
 */const PM=6e4,kM=5e3,NM=10*1024,OM=100*1024,Gf="t",Nv="d",DM="s",Ov="r",xM="e",Dv="o",xv="a",Mv="n",Lv="p",MM="h";class LM{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ml("c:"+this.id+":"),this.transportManager_=new dl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ba(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gf in e){const n=e[Gf];n===xv?this.upgradeIfSecondaryHealthy_():n===Ov?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=da("t",e),r=da("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=da("t",e),r=da("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=da(Gf,e);if(Nv in e){const r=e[Nv];if(n===MM){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Mv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DM?this.onConnectionShutdown_(r):n===Ov?this.onReset_(r):n===xM?zd("Server Error: "+r):n===Dv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Om!==r&&bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ba(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ba(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class JI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ZI{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Su extends ZI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Su}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Vv=32,Fv=768;class it{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ze(){return new it("")}function xe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ss(t){return t.pieces_.length-t.pieceNum_}function rt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new it(t.pieces_,e)}function e0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function VM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function t0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function n0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new it(e,0)}function Ot(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new it(n,0)}function ke(t){return t.pieceNum_>=t.pieces_.length}function kn(t,e){const n=xe(t),r=xe(e);if(n===null)return e;if(n===r)return kn(rt(t),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function r0(t,e){if(Ss(t)!==Ss(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ss(t)>Ss(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FM{constructor(e,n){this.errorPrefix_=n,this.parts_=t0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ah(this.parts_[r]);s0(this)}}function $M(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ah(e),s0(t)}function UM(t){const e=t.parts_.pop();t.byteLength_-=Ah(e),t.parts_.length>0&&(t.byteLength_-=1)}function s0(t){if(t.byteLength_>Fv)throw new Error(t.errorPrefix_+"has a key path longer than "+Fv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vv+") or object contains a cycle "+Ys(t))}function Ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mm extends ZI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Mm}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pa=1e3,BM=60*5*1e3,$v=30*1e3,jM=1.3,qM=3e4,HM="server_kill",Uv=3;class xr extends JI{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xr.nextPersistentConnectionId_++,this.log_=Ml("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pa,this.maxReconnectDelay_=BM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!FT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Su.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Vt(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ll,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;xr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zr(e,"w")){const r=go(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$v)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=BN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Vt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zd("Unrecognized action received from server: "+Vt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qM&&(this.reconnectDelay_=pa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new LM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{bn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(HM)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&bn(f),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dd(this.interruptReasons_)&&(this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Nm(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new it(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uv&&(this.reconnectDelay_=$v,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NI.replace(/\./g,"-")]=1,dm()?e["framework.cordova"]=1:VT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Su.getInstance().currentlyOnline();return Dd(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
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
 */class Le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Le(e,n)}}/**
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
 */class Oh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Le(_o,e),s=new Le(_o,n);return this.compare(r,s)!==0}minPost(){return Le.MIN}}/**
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
 */let kc;class i0 extends Oh{static get __EMPTY_NODE(){return kc}static set __EMPTY_NODE(e){kc=e}compare(e,n){return Fo(e.name,n.name)}isDefinedOn(e){throw xo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Le.MIN}maxPost(){return new Le(pi,kc)}makePost(e,n){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Le(e,kc)}toString(){return".key"}}const ao=new i0;/**
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
 */let Nc=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},_n=class Ra{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ra.RED,this.left=s??ur.EMPTY_NODE,this.right=i??ur.EMPTY_NODE}copy(e,n,r,s,i){return new Ra(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ur.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ur.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ra.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ra.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};_n.RED=!0;_n.BLACK=!1;class WM{copy(e,n,r,s,i){return this}insert(e,n,r){return new _n(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ur=class Gc{constructor(e,n=Gc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Gc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_n.BLACK,null,null))}remove(e){return new Gc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_n.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nc(this.root_,null,this.comparator_,!0,e)}};ur.EMPTY_NODE=new WM;/**
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
 */function zM(t,e){return Fo(t.name,e.name)}function Lm(t,e){return Fo(t,e)}/**
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
 */let Gd;function KM(t){Gd=t}const o0=function(t){return typeof t=="number"?"number:"+LI(t):"string:"+t},a0=function(t){if(t.isLeafNode()){const e=t.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zr(e,".sv"),"Priority must be a string or number.")}else J(t===Gd||t.isEmpty(),"priority of unexpected type.");J(t===Gd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bv;class St{constructor(e,n=St.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),a0(this.priorityNode_)}static set __childrenNodeConstructor(e){Bv=e}static get __childrenNodeConstructor(){return Bv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new St(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:xe(e)===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:St.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=xe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||Ss(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,St.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+o0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=LI(this.value_):e+=this.value_,this.lazyHash_=DI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===St.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof St.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=St.VALUE_TYPE_ORDER.indexOf(n),i=St.VALUE_TYPE_ORDER.indexOf(r);return J(s>=0,"Unknown leaf type: "+n),J(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}St.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let l0,c0;function GM(t){l0=t}function QM(t){c0=t}class YM extends Oh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Fo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(pi,new St("[PRIORITY-POST]",c0))}makePost(e,n){const r=l0(e);return new Le(n,new St("[PRIORITY-POST]",r))}toString(){return".priority"}}const Yt=new YM;/**
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
 */const XM=Math.log(2);class JM{constructor(e){const n=i=>parseInt(Math.log(i)/XM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cu=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let f,p;if(h===0)return null;if(h===1)return f=t[l],p=n?n(f):f,new _n(p,f.node,_n.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=s(l,g),v=s(g+1,u);return f=t[g],p=n?n(f):f,new _n(p,f.node,_n.BLACK,_,v)}},i=function(l){let u=null,h=null,f=t.length;const p=function(_,v){const A=f-_,S=f;f-=_;const O=s(A+1,S),D=t[A],x=n?n(D):D;g(new _n(x,D.node,v,null,O))},g=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),A=Math.pow(2,l.count-(_+1));v?p(A,_n.BLACK):(p(A,_n.BLACK),p(A,_n.RED))}return h},o=new JM(t.length),a=i(o);return new ur(r||e,a)};/**
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
 */let Qf;const $i={};class Nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return J($i&&Yt,"ChildrenNode.ts has not been loaded"),Qf=Qf||new Nr({".priority":$i},{".priority":Yt}),Qf}get(e){const n=go(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ur?n:null}hasIndex(e){return zr(this.indexSet_,e.toString())}addIndex(e,n){J(e!==ao,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Le.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Cu(r,e.getCompare()):a=$i;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Nr(h,u)}addToIndexes(e,n){const r=_u(this.indexes_,(s,i)=>{const o=go(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),s===$i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Le.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Cu(a,o.getCompare())}else return $i;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Le(e.name,a))),l.insert(e,e.node)}});return new Nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=_u(this.indexes_,s=>{if(s===$i)return s;{const i=n.get(e.name);return i?s.remove(new Le(e.name,i)):s}});return new Nr(r,this.indexSet_)}}/**
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
 */let ma;class qe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&a0(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ma||(ma=new qe(new ur(Lm),null,Nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ma}updatePriority(e){return this.children_.isEmpty()?this:new qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ma:n}}getChild(e){const n=xe(e);return n===null?this:this.getImmediateChild(n).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(J(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Le(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ma:this.priorityNode_;return new qe(s,o,i)}}updateChild(e,n){const r=xe(e);if(r===null)return n;{J(xe(e)!==".priority"||Ss(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Yt,(o,a)=>{n[o]=a.val(e),r++,i&&qe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+o0(this.getPriority().val())+":"),this.forEachChild(Yt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":DI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Le(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vl?-1:0}withIndex(e){if(e===ao||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new qe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ao||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Yt),s=n.getIterator(Yt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ao?null:this.indexMap_.get(e.toString())}}qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZM extends qe{constructor(){super(new ur(Lm),qe.EMPTY_NODE,Nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return qe.EMPTY_NODE}isEmpty(){return!1}}const Vl=new ZM;Object.defineProperties(Le,{MIN:{value:new Le(_o,qe.EMPTY_NODE)},MAX:{value:new Le(pi,Vl)}});i0.__EMPTY_NODE=qe.EMPTY_NODE;St.__childrenNodeConstructor=qe;KM(Vl);QM(Vl);/**
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
 */const eL=!0;function Gt(t,e=null){if(t===null)return qe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new St(n,Gt(e))}if(!(t instanceof Array)&&eL){const n=[];let r=!1;if(Ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Gt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Le(o,l)))}}),n.length===0)return qe.EMPTY_NODE;const i=Cu(n,zM,o=>o.name,Lm);if(r){const o=Cu(n,Yt.getCompare());return new qe(i,Gt(e),new Nr({".priority":o},{".priority":Yt}))}else return new qe(i,Gt(e),Nr.Default)}else{let n=qe.EMPTY_NODE;return Ln(t,(r,s)=>{if(zr(t,r)&&r.substring(0,1)!=="."){const i=Gt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Gt(e))}}GM(Gt);/**
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
 */class tL extends Oh{constructor(e){super(),this.indexPath_=e,J(!ke(e)&&xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Fo(e.name,n.name):i}makePost(e,n){const r=Gt(e),s=qe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Le(n,s)}maxPost(){const e=qe.EMPTY_NODE.updateChild(this.indexPath_,Vl);return new Le(pi,e)}toString(){return t0(this.indexPath_,0).join("/")}}/**
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
 */class nL extends Oh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,n){const r=Gt(e);return new Le(n,r)}toString(){return".value"}}const rL=new nL;/**
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
 */function sL(t){return{type:"value",snapshotNode:t}}function iL(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oL(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Vm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Yt}copy(){const e=new Vm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Yt?n="$priority":t.index_===rL?n="$value":t.index_===ao?n="$key":(J(t.index_ instanceof tL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Vt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Vt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Vt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Vt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Vt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Yt&&(e.i=t.index_.toString()),e}/**
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
 */class Pu extends JI{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ml("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Pu.getListenId_(e,r),a={};this.listens_[o]=a;const l=qv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),go(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=Pu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qv(e._queryParams),r=e._path.toString(),s=new ll;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Lo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=cl(a.responseText)}catch{bn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&bn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class lL{constructor(){this.rootNode_=qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ku(){return{value:null,children:new Map}}function u0(t,e,n){if(ke(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=xe(e);t.children.has(r)||t.children.set(r,ku());const s=t.children.get(r);e=rt(e),u0(s,e,n)}}function Qd(t,e,n){t.value!==null?n(e,t.value):cL(t,(r,s)=>{const i=new it(e.toString()+"/"+r);Qd(s,i,n)})}function cL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class uL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ln(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Wv=10*1e3,hL=30*1e3,fL=5*60*1e3;class dL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uL(e);const r=Wv+(hL-Wv)*Math.random();Ba(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ln(e,(s,i)=>{i>0&&zr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ba(this.reportStats_.bind(this),Math.floor(Math.random()*2*fL))}}/**
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
 */var hr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hr||(hr={}));function h0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function f0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function d0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=hr.ACK_USER_WRITE,this.source=h0()}operationForChild(e){if(ke(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new it(e));return new Nu(ze(),n,this.revert)}}else return J(xe(this.path)===e,"operationForChild called for unrelated child."),new Nu(rt(this.path),this.affectedTree,this.revert)}}/**
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
 */class mi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=hr.OVERWRITE}operationForChild(e){return ke(this.path)?new mi(this.source,ze(),this.snap.getImmediateChild(e)):new mi(this.source,rt(this.path),this.snap)}}/**
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
 */class pl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=hr.MERGE}operationForChild(e){if(ke(this.path)){const n=this.children.subtree(new it(e));return n.isEmpty()?null:n.value?new mi(this.source,ze(),n.value):new pl(this.source,ze(),n)}else return J(xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pl(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const n=xe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function pL(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(aL(o.childName,o.snapshotNode))}),ga(t,s,"child_removed",e,r,n),ga(t,s,"child_added",e,r,n),ga(t,s,"child_moved",i,r,n),ga(t,s,"child_changed",e,r,n),ga(t,s,"value",e,r,n),s}function ga(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gL(t,a,l)),o.forEach(a=>{const l=mL(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function mL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gL(t,e,n){if(e.childName==null||n.childName==null)throw xo("Should only compare child_ events.");const r=new Le(e.childName,e.snapshotNode),s=new Le(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function p0(t,e){return{eventCache:t,serverCache:e}}function ja(t,e,n,r){return p0(new Fm(e,n,r),t.serverCache)}function m0(t,e,n,r){return p0(t.eventCache,new Fm(e,n,r))}function Yd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yf;const _L=()=>(Yf||(Yf=new ur(nM)),Yf);class tt{constructor(e,n=_L()){this.value=e,this.children=n}static fromObject(e){let n=new tt(null);return Ln(e,(r,s)=>{n=n.set(new it(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ze(),value:this.value};if(ke(e))return null;{const r=xe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(rt(e),n);return i!=null?{path:Ot(new it(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ke(e))return this;{const n=xe(e),r=this.children.get(n);return r!==null?r.subtree(rt(e)):new tt(null)}}set(e,n){if(ke(e))return new tt(n,this.children);{const r=xe(e),i=(this.children.get(r)||new tt(null)).set(rt(e),n),o=this.children.insert(r,i);return new tt(this.value,o)}}remove(e){if(ke(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const n=xe(e),r=this.children.get(n);if(r){const s=r.remove(rt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new tt(null):new tt(this.value,i)}else return this}}get(e){if(ke(e))return this.value;{const n=xe(e),r=this.children.get(n);return r?r.get(rt(e)):null}}setTree(e,n){if(ke(e))return n;{const r=xe(e),i=(this.children.get(r)||new tt(null)).setTree(rt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new tt(this.value,o)}}fold(e){return this.fold_(ze(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ot(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ze(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ke(e))return null;{const i=xe(e),o=this.children.get(i);return o?o.findOnPath_(rt(e),Ot(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ze(),n)}foreachOnPath_(e,n,r){if(ke(e))return this;{this.value&&r(n,this.value);const s=xe(e),i=this.children.get(s);return i?i.foreachOnPath_(rt(e),Ot(n,s),r):new tt(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ot(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Yn{constructor(e){this.writeTree_=e}static empty(){return new Yn(new tt(null))}}function qa(t,e,n){if(ke(e))return new Yn(new tt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=kn(s,e);return i=i.updateChild(o,n),new Yn(t.writeTree_.set(s,i))}else{const s=new tt(n),i=t.writeTree_.setTree(e,s);return new Yn(i)}}}function zv(t,e,n){let r=t;return Ln(n,(s,i)=>{r=qa(r,Ot(e,s),i)}),r}function Kv(t,e){if(ke(e))return Yn.empty();{const n=t.writeTree_.setTree(e,new tt(null));return new Yn(n)}}function Xd(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kn(n.path,e)):null}function Gv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Yt,(r,s)=>{e.push(new Le(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Le(r,s.value))}),e}function bs(t,e){if(ke(e))return t;{const n=Ai(t,e);return n!=null?new Yn(new tt(n)):new Yn(t.writeTree_.subtree(e))}}function Jd(t){return t.writeTree_.isEmpty()}function yo(t,e){return g0(ze(),t.writeTree_,e)}function g0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=g0(Ot(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ot(t,".priority"),r)),n}}/**
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
 */function _0(t,e){return b0(e,t)}function yL(t,e,n,r,s){J(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=qa(t.visibleWrites,e,n)),t.lastWriteId=r}function vL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function EL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);J(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wL(a,r.path)?s=!1:Hn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return bL(t),!0;if(r.snap)t.visibleWrites=Kv(t.visibleWrites,r.path);else{const a=r.children;Ln(a,l=>{t.visibleWrites=Kv(t.visibleWrites,Ot(r.path,l))})}return!0}else return!1}function wL(t,e){if(t.snap)return Hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Hn(Ot(t.path,n),e))return!0;return!1}function bL(t){t.visibleWrites=y0(t.allWrites,TL,ze()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TL(t){return t.visible}function y0(t,e,n){let r=Yn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Hn(n,o)?(a=kn(n,o),r=qa(r,a,i.snap)):Hn(o,n)&&(a=kn(o,n),r=qa(r,ze(),i.snap.getChild(a)));else if(i.children){if(Hn(n,o))a=kn(n,o),r=zv(r,a,i.children);else if(Hn(o,n))if(a=kn(o,n),ke(a))r=zv(r,ze(),i.children);else{const l=go(i.children,xe(a));if(l){const u=l.getChild(rt(a));r=qa(r,ze(),u)}}}else throw xo("WriteRecord should have .snap or .children")}}return r}function v0(t,e,n,r,s){if(!r&&!s){const i=Ai(t.visibleWrites,e);if(i!=null)return i;{const o=bs(t.visibleWrites,e);if(Jd(o))return n;if(n==null&&!Xd(o,ze()))return null;{const a=n||qe.EMPTY_NODE;return yo(o,a)}}}else{const i=bs(t.visibleWrites,e);if(!s&&Jd(i))return n;if(!s&&n==null&&!Xd(i,ze()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Hn(u.path,e)||Hn(e,u.path))},a=y0(t.allWrites,o,e),l=n||qe.EMPTY_NODE;return yo(a,l)}}}function IL(t,e,n){let r=qe.EMPTY_NODE;const s=Ai(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Yt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=bs(t.visibleWrites,e);return n.forEachChild(Yt,(o,a)=>{const l=yo(bs(i,new it(o)),a);r=r.updateImmediateChild(o,l)}),Gv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=bs(t.visibleWrites,e);return Gv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function AL(t,e,n,r,s){J(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ot(e,n);if(Xd(t.visibleWrites,i))return null;{const o=bs(t.visibleWrites,i);return Jd(o)?s.getChild(n):yo(o,s.getChild(n))}}function RL(t,e,n,r){const s=Ot(e,n),i=Ai(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=bs(t.visibleWrites,s);return yo(o,r.getNode().getImmediateChild(n))}else return null}function SL(t,e){return Ai(t.visibleWrites,e)}function CL(t,e,n,r,s,i,o){let a;const l=bs(t.visibleWrites,e),u=Ai(l,ze());if(u!=null)a=u;else if(n!=null)a=yo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=p.getNext();for(;g&&h.length<s;)f(g,r)!==0&&h.push(g),g=p.getNext();return h}else return[]}function PL(){return{visibleWrites:Yn.empty(),allWrites:[],lastWriteId:-1}}function Zd(t,e,n,r){return v0(t.writeTree,t.treePath,e,n,r)}function E0(t,e){return IL(t.writeTree,t.treePath,e)}function Qv(t,e,n,r){return AL(t.writeTree,t.treePath,e,n,r)}function Ou(t,e){return SL(t.writeTree,Ot(t.treePath,e))}function kL(t,e,n,r,s,i){return CL(t.writeTree,t.treePath,e,n,r,s,i)}function $m(t,e,n){return RL(t.writeTree,t.treePath,e,n)}function w0(t,e){return b0(Ot(t.treePath,e),t.writeTree)}function b0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class NL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;J(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,jv(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,oL(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,iL(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,jv(r,e.snapshotNode,s.oldSnap));else throw xo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class OL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const T0=new OL;class Um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $m(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gi(this.viewCache_),i=kL(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function DL(t,e){J(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xL(t,e,n,r,s){const i=new NL;let o,a;if(n.type===hr.OVERWRITE){const u=n;u.source.fromUser?o=ep(t,e,u.path,u.snap,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ke(u.path),o=Du(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===hr.MERGE){const u=n;u.source.fromUser?o=LL(t,e,u.path,u.children,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=tp(t,e,u.path,u.children,r,s,a,i))}else if(n.type===hr.ACK_USER_WRITE){const u=n;u.revert?o=$L(t,e,u.path,r,s,i):o=VL(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===hr.LISTEN_COMPLETE)o=FL(t,e,n.path,r,i);else throw xo("Unknown operation type: "+n.type);const l=i.getChanges();return ML(e,o,l),{viewCache:o,changes:l}}function ML(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Yd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(sL(Yd(e)))}}function I0(t,e,n,r,s,i){const o=e.eventCache;if(Ou(r,n)!=null)return e;{let a,l;if(ke(n))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=gi(e),h=u instanceof qe?u:qe.EMPTY_NODE,f=E0(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Zd(r,gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=xe(n);if(u===".priority"){J(Ss(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Qv(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=rt(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Qv(r,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=$m(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return ja(e,a,o.isFullyInitialized()||ke(n),t.filter.filtersNodes())}}function Du(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ke(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=xe(n);if(!l.isCompleteForPath(n)&&Ss(n)>1)return e;const _=rt(n),A=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=h.updatePriority(l.getNode(),A):u=h.updateChild(l.getNode(),g,A,_,T0,null)}const f=m0(e,u,l.isFullyInitialized()||ke(n),h.filtersNodes()),p=new Um(s,f,i);return I0(t,f,n,s,p,a)}function ep(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new Um(s,e,i);if(ke(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ja(e,u,!0,t.filter.filtersNodes());else{const f=xe(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ja(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=rt(n),g=a.getNode().getImmediateChild(f);let _;if(ke(p))_=r;else{const v=h.getCompleteChild(f);v!=null?e0(p)===".priority"&&v.getChild(n0(p)).isEmpty()?_=v:_=v.updateChild(p,r):_=qe.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),f,_,p,h,o);l=ja(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yv(t,e){return t.eventCache.isCompleteForChild(e)}function LL(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=Ot(n,l);Yv(e,xe(h))&&(a=ep(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=Ot(n,l);Yv(e,xe(h))||(a=ep(t,a,h,u,s,i,o))}),a}function Xv(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function tp(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ke(n)?u=r:u=new tt(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=Xv(t,g,p);l=Du(t,l,new it(f),_,s,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const g=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),v=Xv(t,_,p);l=Du(t,l,new it(f),v,s,i,o,a)}}),l}function VL(t,e,n,r,s,i,o){if(Ou(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ke(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Du(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ke(n)){let u=new tt(null);return l.getNode().forEachChild(ao,(h,f)=>{u=u.set(new it(h),f)}),tp(t,e,n,u,s,i,a,o)}else return e}else{let u=new tt(null);return r.foreach((h,f)=>{const p=Ot(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),tp(t,e,n,u,s,i,a,o)}}function FL(t,e,n,r,s){const i=e.serverCache,o=m0(e,i.getNode(),i.isFullyInitialized()||ke(n),i.isFiltered());return I0(t,o,n,r,T0,s)}function $L(t,e,n,r,s,i){let o;if(Ou(r,n)!=null)return e;{const a=new Um(r,e,s),l=e.eventCache.getNode();let u;if(ke(n)||xe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Zd(r,gi(e));else{const f=e.serverCache.getNode();J(f instanceof qe,"serverChildren would be complete if leaf node"),h=E0(r,f)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=xe(n);let f=$m(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,rt(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,qe.EMPTY_NODE,rt(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zd(r,gi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Ou(r,ze())!=null,ja(e,u,o,t.filter.filtersNodes())}}function UL(t,e){const n=gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ke(e)&&!n.getImmediateChild(xe(e)).isEmpty())?n.getChild(e):null}function Jv(t,e,n,r){e.type===hr.MERGE&&e.source.queryId!==null&&(J(gi(t.viewCache_),"We should always have a full cache before handling merges"),J(Yd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=xL(t.processor_,s,e,n,r);return DL(t.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,BL(t,i.changes,i.viewCache.eventCache.getNode())}function BL(t,e,n,r){const s=t.eventRegistrations_;return pL(t.eventGenerator_,e,n,s)}/**
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
 */let Zv;function jL(t){J(!Zv,"__referenceConstructor has already been defined"),Zv=t}function Bm(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return J(i!=null,"SyncTree gave us an op for an invalid query."),Jv(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Jv(o,e,n,r));return i}}function jm(t,e){let n=null;for(const r of t.views.values())n=n||UL(r,e);return n}/**
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
 */let eE;function qL(t){J(!eE,"__referenceConstructor has already been defined"),eE=t}class tE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=PL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HL(t,e,n,r,s){return yL(t.pendingWriteTree_,e,n,r,s),s?xh(t,new mi(h0(),e,n)):[]}function Gi(t,e,n=!1){const r=vL(t.pendingWriteTree_,e);if(EL(t.pendingWriteTree_,e)){let i=new tt(null);return r.snap!=null?i=i.set(ze(),!0):Ln(r.children,o=>{i=i.set(new it(o),!0)}),xh(t,new Nu(r.path,i,n))}else return[]}function Dh(t,e,n){return xh(t,new mi(f0(),e,n))}function WL(t,e,n){const r=tt.fromObject(n);return xh(t,new pl(f0(),e,r))}function zL(t,e,n,r){const s=C0(t,r);if(s!=null){const i=P0(s),o=i.path,a=i.queryId,l=kn(o,e),u=new mi(d0(a),l,n);return k0(t,o,u)}else return[]}function KL(t,e,n,r){const s=C0(t,r);if(s){const i=P0(s),o=i.path,a=i.queryId,l=kn(o,e),u=tt.fromObject(n),h=new pl(d0(a),l,u);return k0(t,o,h)}else return[]}function A0(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=kn(o,e),u=jm(a,l);if(u)return u});return v0(s,e,i,n,!0)}function xh(t,e){return R0(e,t.syncPointTree_,null,_0(t.pendingWriteTree_,ze()))}function R0(t,e,n,r){if(ke(t.path))return S0(t,e,n,r);{const s=e.get(ze());n==null&&s!=null&&(n=jm(s,ze()));let i=[];const o=xe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=w0(r,o);i=i.concat(R0(a,l,u,h))}return s&&(i=i.concat(Bm(s,t,r,n))),i}}function S0(t,e,n,r){const s=e.get(ze());n==null&&s!=null&&(n=jm(s,ze()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=w0(r,o),h=t.operationForChild(o);h&&(i=i.concat(S0(h,a,l,u)))}),s&&(i=i.concat(Bm(s,t,r,n))),i}function C0(t,e){return t.tagToQueryMap.get(e)}function P0(t){const e=t.indexOf("$");return J(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new it(t.substr(0,e))}}function k0(t,e,n){const r=t.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const s=_0(t.pendingWriteTree_,e);return Bm(r,n,s,null)}/**
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
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qm(n)}node(){return this.node_}}class Hm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ot(this.path_,e);return new Hm(this.syncTree_,n)}node(){return A0(this.syncTree_,this.path_)}}const GL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nE=function(t,e,n){if(!t||typeof t!="object")return t;if(J(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return YL(t[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:J(!1,"Unexpected server value: "+t)}},YL=function(t,e,n){t.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const s=e.node();if(J(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},XL=function(t,e,n,r){return Wm(e,new Hm(n,t),r)},JL=function(t,e,n){return Wm(t,new qm(e),n)};function Wm(t,e,n){const r=t.getPriority().val(),s=nE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=nE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new St(a,Gt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new St(s))),o.forEachChild(Yt,(a,l)=>{const u=Wm(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class zm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Km(t,e){let n=e instanceof it?e:new it(e),r=t,s=xe(n);for(;s!==null;){const i=go(r.node.children,s)||{children:{},childCount:0};r=new zm(s,r,i),n=rt(n),s=xe(n)}return r}function $o(t){return t.node.value}function N0(t,e){t.node.value=e,np(t)}function O0(t){return t.node.childCount>0}function ZL(t){return $o(t)===void 0&&!O0(t)}function Mh(t,e){Ln(t.node.children,(n,r)=>{e(new zm(n,t,r))})}function D0(t,e,n,r){n&&!r&&e(t),Mh(t,s=>{D0(s,e,!0,r)}),n&&r&&e(t)}function eV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Fl(t){return new it(t.parent===null?t.name:Fl(t.parent)+"/"+t.name)}function np(t){t.parent!==null&&tV(t.parent,t.name,t)}function tV(t,e,n){const r=ZL(n),s=zr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,np(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,np(t))}/**
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
 */const nV=/[\[\].#$\/\u0000-\u001F\u007F]/,rV=/[\[\].#$\u0000-\u001F\u007F]/,Xf=10*1024*1024,x0=function(t){return typeof t=="string"&&t.length!==0&&!nV.test(t)},sV=function(t){return typeof t=="string"&&t.length!==0&&!rV.test(t)},iV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sV(t)},M0=function(t,e,n){const r=n instanceof it?new FM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ys(r)+" with contents = "+e.toString());if(xI(e))throw new Error(t+"contains "+e.toString()+" "+Ys(r));if(typeof e=="string"&&e.length>Xf/3&&Ah(e)>Xf)throw new Error(t+"contains a string greater than "+Xf+" utf8 bytes "+Ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ln(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!x0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$M(r,o),M0(t,a,r),UM(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ys(r)+" in addition to actual children.")}},oV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!x0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iV(n))throw new Error(KN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lV(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!r0(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ri(t,e,n){lV(t,n),cV(t,r=>Hn(r,e)||Hn(e,r))}function cV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(uV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ua&&Kt("event: "+n.toString()),Ll(r)}}}/**
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
 */const hV="repo_interrupt",fV=25;class dV{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ku(),this.transactionQueueTree_=new zm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pV(t,e,n){if(t.stats_=Dm(t.repoInfo_),t.forceRestClient_||lM())t.server_=new Pu(t.repoInfo_,(r,s,i,o)=>{rE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Vt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xr(t.repoInfo_,e,(r,s,i,o)=>{rE(t,r,s,i,o)},r=>{sE(t,r)},r=>{gV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pM(t.repoInfo_,()=>new dL(t.stats_,t.server_)),t.infoData_=new lL,t.infoSyncTree_=new tE({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Dh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gm(t,"connected",!1),t.serverSyncTree_=new tE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Ri(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function mV(t){const n=t.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function L0(t){return GL({timestamp:mV(t)})}function rE(t,e,n,r,s){t.dataUpdateCount++;const i=new it(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=_u(n,u=>Gt(u));o=KL(t.serverSyncTree_,i,l,s)}else{const l=Gt(n);o=zL(t.serverSyncTree_,i,l,s)}else if(r){const l=_u(n,u=>Gt(u));o=WL(t.serverSyncTree_,i,l)}else{const l=Gt(n);o=Dh(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ym(t,i)),Ri(t.eventQueue_,a,o)}function sE(t,e){Gm(t,"connected",e),e===!1&&yV(t)}function gV(t,e){Ln(e,(n,r)=>{Gm(t,n,r)})}function Gm(t,e,n){const r=new it("/.info/"+e),s=Gt(n);t.infoData_.updateSnapshot(r,s);const i=Dh(t.infoSyncTree_,r,s);Ri(t.eventQueue_,r,i)}function _V(t){return t.nextWriteId_++}function yV(t){V0(t,"onDisconnectEvents");const e=L0(t),n=ku();Qd(t.onDisconnect_,ze(),(s,i)=>{const o=XL(s,i,t.serverSyncTree_,e);u0(n,s,o)});let r=[];Qd(n,ze(),(s,i)=>{r=r.concat(Dh(t.serverSyncTree_,s,i));const o=bV(t,s);Ym(t,o)}),t.onDisconnect_=ku(),Ri(t.eventQueue_,ze(),r)}function vV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hV)}function V0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function F0(t,e,n){return A0(t.serverSyncTree_,e,n)||qe.EMPTY_NODE}function Qm(t,e=t.transactionQueueTree_){if(e||Lh(t,e),$o(e)){const n=U0(t,e);J(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&EV(t,Fl(e),n)}else O0(e)&&Mh(e,n=>{Qm(t,n)})}function EV(t,e,n){const r=n.map(u=>u.currentWriteId),s=F0(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=kn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{V0(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Gi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Lh(t,Km(t.transactionQueueTree_,e)),Qm(t,t.transactionQueueTree_),Ri(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Ll(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{bn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Ym(t,e)}},o)}function Ym(t,e){const n=$0(t,e),r=Fl(n),s=U0(t,n);return wV(t,s,r),r}function wV(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=kn(n,l.path);let h=!1,f;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(Gi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fV)h=!0,f="maxretry",s=s.concat(Gi(t.serverSyncTree_,l.currentWriteId,!0));else{const p=F0(t,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){M0("transaction failed: Data returned ",g,l.path);let _=Gt(g);typeof g=="object"&&g!=null&&zr(g,".priority")||(_=_.updatePriority(p.getPriority()));const A=l.currentWriteId,S=L0(t),O=JL(_,p,S);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=O,l.currentWriteId=_V(t),o.splice(o.indexOf(A),1),s=s.concat(HL(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),s=s.concat(Gi(t.serverSyncTree_,A,!0))}else h=!0,f="nodata",s=s.concat(Gi(t.serverSyncTree_,l.currentWriteId,!0))}Ri(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Lh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ll(r[a]);Qm(t,t.transactionQueueTree_)}function $0(t,e){let n,r=t.transactionQueueTree_;for(n=xe(e);n!==null&&$o(r)===void 0;)r=Km(r,n),e=rt(e),n=xe(e);return r}function U0(t,e){const n=[];return B0(t,e,n),n.sort((r,s)=>r.order-s.order),n}function B0(t,e,n){const r=$o(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Mh(e,s=>{B0(t,s,n)})}function Lh(t,e){const n=$o(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,N0(e,n.length>0?n:void 0)}Mh(e,r=>{Lh(t,r)})}function bV(t,e){const n=Fl($0(t,e)),r=Km(t.transactionQueueTree_,e);return eV(r,s=>{Jf(t,s)}),Jf(t,r),D0(r,s=>{Jf(t,s)}),n}function Jf(t,e){const n=$o(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(J(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?N0(e,void 0):n.length=i+1,Ri(t.eventQueue_,Fl(e),s);for(let o=0;o<r.length;o++)Ll(r[o])}}/**
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
 */function TV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function IV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bn(`Invalid query segment '${n}' in query '${t}'`)}return e}const iE=function(t,e){const n=AV(t),r=n.namespace;n.domain==="firebase.com"&&di(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&di("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hM(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new it(n.pathString)}},AV=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=TV(t.substring(h,f)));const p=IV(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Xm{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ke(this._path)?null:e0(this._path)}get ref(){return new Uo(this._repo,this._path)}get _queryIdentifier(){const e=Hv(this._queryParams),n=Nm(e);return n==="{}"?"default":n}get _queryObject(){return Hv(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof Xm))return!1;const n=this._repo===e._repo,r=r0(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+VM(this._path)}}class Uo extends Xm{constructor(e,n){super(e,n,new Vm,!1)}get parent(){const e=n0(this._path);return e===null?null:new Uo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}jL(Uo);qL(Uo);/**
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
 */const RV="FIREBASE_DATABASE_EMULATOR_HOST",rp={};let SV=!1;function CV(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||di("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=iE(i,s),a=o.repoInfo,l;typeof process<"u"&&Av&&(l=Av[RV]),l?(i=`http://${l}?ns=${a.namespace}`,o=iE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new uM(t.name,t.options,e);oV("Invalid Firebase Database URL",o),ke(o.path)||di("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kV(a,t,u,new cM(t.name,n));return new NV(h,t)}function PV(t,e){const n=rp[e];(!n||n[t.key]!==t)&&di(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vV(t),delete n[t.key]}function kV(t,e,n,r){let s=rp[e.name];s||(s={},rp[e.name]=s);let i=s[t.toURLString()];return i&&di("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new dV(t,SV,n,r),s[t.toURLString()]=i,i}class NV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Uo(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&di("Cannot call "+e+" on a deleted database.")}}/**
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
 */function OV(t){Gx(xs),yr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return CV(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),wn(Rv,Sv,t),wn(Rv,Sv,"esm2017")}xr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OV();var oE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ai,j0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function b(){}b.prototype=y.prototype,I.D=y.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(P,E,R){for(var T=Array(arguments.length-2),he=2;he<arguments.length;he++)T[he-2]=arguments[he];return y.prototype[E].apply(P,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,b){b||(b=0);var P=Array(16);if(typeof y=="string")for(var E=0;16>E;++E)P[E]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(E=0;16>E;++E)P[E]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=I.g[0],b=I.g[1],E=I.g[2];var R=I.g[3],T=y+(R^b&(E^R))+P[0]+3614090360&4294967295;y=b+(T<<7&4294967295|T>>>25),T=R+(E^y&(b^E))+P[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=E+(b^R&(y^b))+P[2]+606105819&4294967295,E=R+(T<<17&4294967295|T>>>15),T=b+(y^E&(R^y))+P[3]+3250441966&4294967295,b=E+(T<<22&4294967295|T>>>10),T=y+(R^b&(E^R))+P[4]+4118548399&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(E^y&(b^E))+P[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=E+(b^R&(y^b))+P[6]+2821735955&4294967295,E=R+(T<<17&4294967295|T>>>15),T=b+(y^E&(R^y))+P[7]+4249261313&4294967295,b=E+(T<<22&4294967295|T>>>10),T=y+(R^b&(E^R))+P[8]+1770035416&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(E^y&(b^E))+P[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=E+(b^R&(y^b))+P[10]+4294925233&4294967295,E=R+(T<<17&4294967295|T>>>15),T=b+(y^E&(R^y))+P[11]+2304563134&4294967295,b=E+(T<<22&4294967295|T>>>10),T=y+(R^b&(E^R))+P[12]+1804603682&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(E^y&(b^E))+P[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=E+(b^R&(y^b))+P[14]+2792965006&4294967295,E=R+(T<<17&4294967295|T>>>15),T=b+(y^E&(R^y))+P[15]+1236535329&4294967295,b=E+(T<<22&4294967295|T>>>10),T=y+(E^R&(b^E))+P[1]+4129170786&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^E&(y^b))+P[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=E+(y^b&(R^y))+P[11]+643717713&4294967295,E=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(E^R))+P[0]+3921069994&4294967295,b=E+(T<<20&4294967295|T>>>12),T=y+(E^R&(b^E))+P[5]+3593408605&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^E&(y^b))+P[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=E+(y^b&(R^y))+P[15]+3634488961&4294967295,E=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(E^R))+P[4]+3889429448&4294967295,b=E+(T<<20&4294967295|T>>>12),T=y+(E^R&(b^E))+P[9]+568446438&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^E&(y^b))+P[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=E+(y^b&(R^y))+P[3]+4107603335&4294967295,E=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(E^R))+P[8]+1163531501&4294967295,b=E+(T<<20&4294967295|T>>>12),T=y+(E^R&(b^E))+P[13]+2850285829&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^E&(y^b))+P[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=E+(y^b&(R^y))+P[7]+1735328473&4294967295,E=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(E^R))+P[12]+2368359562&4294967295,b=E+(T<<20&4294967295|T>>>12),T=y+(b^E^R)+P[5]+4294588738&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^E)+P[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=E+(R^y^b)+P[11]+1839030562&4294967295,E=R+(T<<16&4294967295|T>>>16),T=b+(E^R^y)+P[14]+4259657740&4294967295,b=E+(T<<23&4294967295|T>>>9),T=y+(b^E^R)+P[1]+2763975236&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^E)+P[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=E+(R^y^b)+P[7]+4139469664&4294967295,E=R+(T<<16&4294967295|T>>>16),T=b+(E^R^y)+P[10]+3200236656&4294967295,b=E+(T<<23&4294967295|T>>>9),T=y+(b^E^R)+P[13]+681279174&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^E)+P[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=E+(R^y^b)+P[3]+3572445317&4294967295,E=R+(T<<16&4294967295|T>>>16),T=b+(E^R^y)+P[6]+76029189&4294967295,b=E+(T<<23&4294967295|T>>>9),T=y+(b^E^R)+P[9]+3654602809&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^E)+P[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=E+(R^y^b)+P[15]+530742520&4294967295,E=R+(T<<16&4294967295|T>>>16),T=b+(E^R^y)+P[2]+3299628645&4294967295,b=E+(T<<23&4294967295|T>>>9),T=y+(E^(b|~R))+P[0]+4096336452&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~E))+P[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=E+(y^(R|~b))+P[14]+2878612391&4294967295,E=R+(T<<15&4294967295|T>>>17),T=b+(R^(E|~y))+P[5]+4237533241&4294967295,b=E+(T<<21&4294967295|T>>>11),T=y+(E^(b|~R))+P[12]+1700485571&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~E))+P[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=E+(y^(R|~b))+P[10]+4293915773&4294967295,E=R+(T<<15&4294967295|T>>>17),T=b+(R^(E|~y))+P[1]+2240044497&4294967295,b=E+(T<<21&4294967295|T>>>11),T=y+(E^(b|~R))+P[8]+1873313359&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~E))+P[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=E+(y^(R|~b))+P[6]+2734768916&4294967295,E=R+(T<<15&4294967295|T>>>17),T=b+(R^(E|~y))+P[13]+1309151649&4294967295,b=E+(T<<21&4294967295|T>>>11),T=y+(E^(b|~R))+P[4]+4149444226&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~E))+P[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=E+(y^(R|~b))+P[2]+718787259&4294967295,E=R+(T<<15&4294967295|T>>>17),T=b+(R^(E|~y))+P[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(E+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var b=y-this.blockSize,P=this.B,E=this.h,R=0;R<y;){if(E==0)for(;R<=b;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(P[E++]=I.charCodeAt(R++),E==this.blockSize){s(this,P),E=0;break}}else for(;R<y;)if(P[E++]=I[R++],E==this.blockSize){s(this,P),E=0;break}}this.h=E,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var b=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=b&255,b/=256;for(this.u(I),I=Array(16),y=b=0;4>y;++y)for(var P=0;32>P;P+=8)I[b++]=this.g[y]>>>P&255;return I};function i(I,y){var b=a;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=y(I)}function o(I,y){this.h=y;for(var b=[],P=!0,E=I.length-1;0<=E;E--){var R=I[E]|0;P&&R==y||(b[E]=R,P=!1)}this.g=b}var a={};function l(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return A(u(-I));for(var y=[],b=1,P=0;I>=b;P++)y[P]=I/b|0,b*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return A(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(y,8)),P=f,E=0;E<I.length;E+=8){var R=Math.min(8,I.length-E),T=parseInt(I.substring(E,E+R),y);8>R?(R=u(Math.pow(y,R)),P=P.j(R).add(u(T))):(P=P.j(b),P=P.add(u(T)))}return P}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(v(this))return-A(this).m();for(var I=0,y=1,b=0;b<this.g.length;b++){var P=this.i(b);I+=(0<=P?P:4294967296+P)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(v(this))return"-"+A(this).toString(I);for(var y=u(Math.pow(I,6)),b=this,P="";;){var E=x(b,y).g;b=S(b,E.j(y));var R=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=E,_(b))return R+P;for(;6>R.length;)R="0"+R;P=R+P}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function v(I){return I.h==-1}t.l=function(I){return I=S(this,I),v(I)?-1:_(I)?0:1};function A(I){for(var y=I.g.length,b=[],P=0;P<y;P++)b[P]=~I.g[P];return new o(b,~I.h).add(p)}t.abs=function(){return v(this)?A(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],P=0,E=0;E<=y;E++){var R=P+(this.i(E)&65535)+(I.i(E)&65535),T=(R>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);P=T>>>16,R&=65535,T&=65535,b[E]=T<<16|R}return new o(b,b[b.length-1]&-2147483648?-1:0)};function S(I,y){return I.add(A(y))}t.j=function(I){if(_(this)||_(I))return f;if(v(this))return v(I)?A(this).j(A(I)):A(A(this).j(I));if(v(I))return A(this.j(A(I)));if(0>this.l(g)&&0>I.l(g))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,b=[],P=0;P<2*y;P++)b[P]=0;for(P=0;P<this.g.length;P++)for(var E=0;E<I.g.length;E++){var R=this.i(P)>>>16,T=this.i(P)&65535,he=I.i(E)>>>16,Re=I.i(E)&65535;b[2*P+2*E]+=T*Re,O(b,2*P+2*E),b[2*P+2*E+1]+=R*Re,O(b,2*P+2*E+1),b[2*P+2*E+1]+=T*he,O(b,2*P+2*E+1),b[2*P+2*E+2]+=R*he,O(b,2*P+2*E+2)}for(P=0;P<y;P++)b[P]=b[2*P+1]<<16|b[2*P];for(P=y;P<2*y;P++)b[P]=0;return new o(b,0)};function O(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function D(I,y){this.g=I,this.h=y}function x(I,y){if(_(y))throw Error("division by zero");if(_(I))return new D(f,f);if(v(I))return y=x(A(I),y),new D(A(y.g),A(y.h));if(v(y))return y=x(I,A(y)),new D(A(y.g),y.h);if(30<I.g.length){if(v(I)||v(y))throw Error("slowDivide_ only works with positive integers.");for(var b=p,P=y;0>=P.l(I);)b=F(b),P=F(P);var E=k(b,1),R=k(P,1);for(P=k(P,2),b=k(b,2);!_(P);){var T=R.add(P);0>=T.l(I)&&(E=E.add(b),R=T),P=k(P,1),b=k(b,1)}return y=S(I,E.j(y)),new D(E,y)}for(E=f;0<=I.l(y);){for(b=Math.max(1,Math.floor(I.m()/y.m())),P=Math.ceil(Math.log(b)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),R=u(b),T=R.j(y);v(T)||0<T.l(I);)b-=P,R=u(b),T=R.j(y);_(R)&&(R=p),E=E.add(R),I=S(I,T)}return new D(E,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],P=0;P<y;P++)b[P]=this.i(P)&I.i(P);return new o(b,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],P=0;P<y;P++)b[P]=this.i(P)|I.i(P);return new o(b,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],P=0;P<y;P++)b[P]=this.i(P)^I.i(P);return new o(b,this.h^I.h)};function F(I){for(var y=I.g.length+1,b=[],P=0;P<y;P++)b[P]=I.i(P)<<1|I.i(P-1)>>>31;return new o(b,I.h)}function k(I,y){var b=y>>5;y%=32;for(var P=I.g.length-b,E=[],R=0;R<P;R++)E[R]=0<y?I.i(R+b)>>>y|I.i(R+b+1)<<32-y:I.i(R+b);return new o(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,j0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ai=o}).apply(typeof oE<"u"?oE:typeof self<"u"?self:typeof window<"u"?window:{});var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q0,H0,Sa,W0,Qc,sp,z0,K0,G0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oc=="object"&&Oc];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var M=c[w];if(!(M in m))break e;m=m[M]}c=c[c.length-1],w=m[c],d=d(w),d!=w&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,w=!1,M={next:function(){if(!w&&m<c.length){var V=m++;return{value:d(V,c[V]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,m){return c.call.apply(c.bind,arguments)}function f(c,d,m){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),c.apply(d,M)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function _(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(w,M,V){for(var Q=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)Q[Ye-2]=arguments[Ye];return d.prototype[M].apply(w,Q)}}function v(c){const d=c.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=c[w];return m}return[]}function A(c,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(l(w)){const M=c.length||0,V=w.length||0;c.length=M+V;for(let Q=0;Q<V;Q++)c[M+Q]=w[Q]}else c.push(w)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(c){return/^[\s\xa0]*$/.test(c)}function D(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function x(c){return x[" "](c),c}x[" "]=function(){};var F=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function k(c,d,m){for(const w in c)d.call(m,c[w],w,c)}function I(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function y(c){const d={};for(const m in c)d[m]=c[m];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(c,d){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)c[m]=w[m];for(let V=0;V<b.length;V++)m=b[V],Object.prototype.hasOwnProperty.call(w,m)&&(c[m]=w[m])}}function E(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function R(c){a.setTimeout(()=>{throw c},0)}function T(){var c=at;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class he{constructor(){this.h=this.g=null}add(d,m){const w=Re.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Re=new S(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let de,be=!1,at=new he,It=()=>{const c=a.Promise.resolve(void 0);de=()=>{c.then(At)}};var At=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){R(m)}var d=Re;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}be=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Kr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function rr(c,d){if(ct.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(F){e:{try{x(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Rt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&rr.aa.h.call(this)}}_(rr,ct);var Rt={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ne=0;function Z(c,d,m,w,M){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=M,this.key=++ne,this.da=this.fa=!1}function se(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Oe(c){this.src=c,this.g={},this.h=0}Oe.prototype.add=function(c,d,m,w,M){var V=c.toString();c=this.g[V],c||(c=this.g[V]=[],this.h++);var Q=C(c,d,w,M);return-1<Q?(d=c[Q],m||(d.fa=!1)):(d=new Z(d,this.src,V,!!w,M),d.fa=m,c.push(d)),d};function Ge(c,d){var m=d.type;if(m in c.g){var w=c.g[m],M=Array.prototype.indexOf.call(w,d,void 0),V;(V=0<=M)&&Array.prototype.splice.call(w,M,1),V&&(se(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function C(c,d,m,w){for(var M=0;M<c.length;++M){var V=c[M];if(!V.da&&V.listener==d&&V.capture==!!m&&V.ha==w)return M}return-1}var N="closure_lm_"+(1e6*Math.random()|0),L={};function q(c,d,m,w,M){if(Array.isArray(d)){for(var V=0;V<d.length;V++)q(c,d[V],m,w,M);return null}return m=ae(m),c&&c[B]?c.K(d,m,u(w)?!!w.capture:!!w,M):U(c,d,m,!1,w,M)}function U(c,d,m,w,M,V){if(!d)throw Error("Invalid event type");var Q=u(M)?!!M.capture:!!M,Ye=te(c);if(Ye||(c[N]=Ye=new Oe(c)),m=Ye.add(d,m,w,Q,V),m.proxy)return m;if(w=K(),m.proxy=w,w.src=c,w.listener=m,c.addEventListener)Kr||(M=Q),M===void 0&&(M=!1),c.addEventListener(d.toString(),w,M);else if(c.attachEvent)c.attachEvent(G(d.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function K(){function c(m){return d.call(c.src,c.listener,m)}const d=W;return c}function X(c,d,m,w,M){if(Array.isArray(d))for(var V=0;V<d.length;V++)X(c,d[V],m,w,M);else w=u(w)?!!w.capture:!!w,m=ae(m),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(V=c.g[d],m=C(V,m,w,M),-1<m&&(se(V[m]),Array.prototype.splice.call(V,m,1),V.length==0&&(delete c.g[d],c.h--)))):c&&(c=te(c))&&(d=c.g[d.toString()],c=-1,d&&(c=C(d,m,w,M)),(m=-1<c?d[c]:null)&&z(m))}function z(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])Ge(d.i,c);else{var m=c.type,w=c.proxy;d.removeEventListener?d.removeEventListener(m,w,c.capture):d.detachEvent?d.detachEvent(G(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=te(d))?(Ge(m,c),m.h==0&&(m.src=null,d[N]=null)):se(c)}}}function G(c){return c in L?L[c]:L[c]="on"+c}function W(c,d){if(c.da)c=!0;else{d=new rr(d,this);var m=c.listener,w=c.ha||c.src;c.fa&&z(c),c=m.call(w,d)}return c}function te(c){return c=c[N],c instanceof Oe?c:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(c){return typeof c=="function"?c:(c[le]||(c[le]=function(d){return c.handleEvent(d)}),c[le])}function oe(){lt.call(this),this.i=new Oe(this),this.M=this,this.F=null}_(oe,lt),oe.prototype[B]=!0,oe.prototype.removeEventListener=function(c,d,m,w){X(this,c,d,m,w)};function fe(c,d){var m,w=c.F;if(w)for(m=[];w;w=w.F)m.push(w);if(c=c.M,w=d.type||d,typeof d=="string")d=new ct(d,c);else if(d instanceof ct)d.target=d.target||c;else{var M=d;d=new ct(w,c),P(d,M)}if(M=!0,m)for(var V=m.length-1;0<=V;V--){var Q=d.g=m[V];M=Ve(Q,w,!0,d)&&M}if(Q=d.g=c,M=Ve(Q,w,!0,d)&&M,M=Ve(Q,w,!1,d)&&M,m)for(V=0;V<m.length;V++)Q=d.g=m[V],M=Ve(Q,w,!1,d)&&M}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],w=0;w<m.length;w++)se(m[w]);delete c.g[d],c.h--}}this.F=null},oe.prototype.K=function(c,d,m,w){return this.i.add(String(c),d,!1,m,w)},oe.prototype.L=function(c,d,m,w){return this.i.add(String(c),d,!0,m,w)};function Ve(c,d,m,w){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,V=0;V<d.length;++V){var Q=d[V];if(Q&&!Q.da&&Q.capture==m){var Ye=Q.listener,Mt=Q.ha||Q.src;Q.fa&&Ge(c.i,Q),M=Ye.call(Mt,w)!==!1&&M}}return M&&!w.defaultPrevented}function Qe(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function pt(c){c.g=Qe(()=>{c.g=null,c.i&&(c.i=!1,pt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class pn extends lt{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(c){lt.call(this),this.h=c,this.g={}}_(Rn,lt);var Xo=[];function Gr(c){k(c.g,function(d,m){this.g.hasOwnProperty(m)&&z(d)},c),c.g={}}Rn.prototype.N=function(){Rn.aa.N.call(this),Gr(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oi=a.JSON.stringify,Jt=a.JSON.parse,Sn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Di(){}Di.prototype.h=null;function f_(c){return c.h||(c.h=c.i())}function d_(){}var Jo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gf(){ct.call(this,"d")}_(gf,ct);function _f(){ct.call(this,"c")}_(_f,ct);var js={},p_=null;function sc(){return p_=p_||new oe}js.La="serverreachability";function m_(c){ct.call(this,js.La,c)}_(m_,ct);function Zo(c){const d=sc();fe(d,new m_(d))}js.STAT_EVENT="statevent";function g_(c,d){ct.call(this,js.STAT_EVENT,c),this.stat=d}_(g_,ct);function Zt(c){const d=sc();fe(d,new g_(d,c))}js.Ma="timingevent";function __(c,d){ct.call(this,js.Ma,c),this.size=d}_(__,ct);function ea(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function ta(){this.g=!0}ta.prototype.xa=function(){this.g=!1};function _C(c,d,m,w,M,V){c.info(function(){if(c.g)if(V)for(var Q="",Ye=V.split("&"),Mt=0;Mt<Ye.length;Mt++){var Ue=Ye[Mt].split("=");if(1<Ue.length){var qt=Ue[0];Ue=Ue[1];var Ht=qt.split("_");Q=2<=Ht.length&&Ht[1]=="type"?Q+(qt+"="+Ue+"&"):Q+(qt+"=redacted&")}}else Q=null;else Q=V;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+d+`
`+m+`
`+Q})}function yC(c,d,m,w,M,V,Q){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+d+`
`+m+`
`+V+" "+Q})}function xi(c,d,m,w){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+EC(c,m)+(w?" "+w:"")})}function vC(c,d){c.info(function(){return"TIMEOUT: "+d})}ta.prototype.info=function(){};function EC(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var w=m[c];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var V=M[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Q=1;Q<M.length;Q++)M[Q]=""}}}}return Oi(m)}catch{return d}}var ic={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},y_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yf;function oc(){}_(oc,Di),oc.prototype.g=function(){return new XMLHttpRequest},oc.prototype.i=function(){return{}},yf=new oc;function Qr(c,d,m,w){this.j=c,this.i=d,this.l=m,this.R=w||1,this.U=new Rn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new v_}function v_(){this.i=null,this.g="",this.h=!1}var E_={},vf={};function Ef(c,d,m){c.L=1,c.v=uc(br(d)),c.m=m,c.P=!0,w_(c,null)}function w_(c,d){c.F=Date.now(),ac(c),c.A=br(c.v);var m=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),M_(m.i,"t",w),c.C=0,m=c.j.J,c.h=new v_,c.g=Z_(c.j,m?d:null,!c.m),0<c.O&&(c.M=new pn(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,w=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(Xo[0]=M.toString()),M=Xo);for(var V=0;V<M.length;V++){var Q=q(m,M[V],w||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Zo(),_C(c.i,c.u,c.A,c.l,c.R,c.m)}Qr.prototype.ca=function(c){c=c.target;const d=this.M;d&&Tr(c)==3?d.j():this.Y(c)},Qr.prototype.Y=function(c){try{if(c==this.g)e:{const Ht=Tr(this.g);var d=this.g.Ba();const Vi=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||j_(this.g)))){this.J||Ht!=4||d==7||(d==8||0>=Vi?Zo(3):Zo(2)),wf(this);var m=this.g.Z();this.X=m;t:if(b_(this)){var w=j_(this.g);c="";var M=w.length,V=Tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qs(this),na(this);var Q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,c+=this.h.i.decode(w[d],{stream:!(V&&d==M-1)});w.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,yC(this.i,this.u,this.A,this.l,this.R,Ht,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Mt=this.g;if((Ye=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ye)){var Ue=Ye;break t}}Ue=null}if(m=Ue)xi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bf(this,m);else{this.o=!1,this.s=3,Zt(12),qs(this),na(this);break e}}if(this.P){m=!0;let Vn;for(;!this.J&&this.C<Q.length;)if(Vn=wC(this,Q),Vn==vf){Ht==4&&(this.s=4,Zt(14),m=!1),xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Vn==E_){this.s=4,Zt(15),xi(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else xi(this.i,this.l,Vn,null),bf(this,Vn);if(b_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||Q.length!=0||this.h.h||(this.s=1,Zt(16),m=!1),this.o=this.o&&m,!m)xi(this.i,this.l,Q,"[Invalid Chunked Response]"),qs(this),na(this);else if(0<Q.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Cf(qt),qt.M=!0,Zt(11))}}else xi(this.i,this.l,Q,null),bf(this,Q);Ht==4&&qs(this),this.o&&!this.J&&(Ht==4?Q_(this.j,this):(this.o=!1,ac(this)))}else FC(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Zt(12)):(this.s=0,Zt(13)),qs(this),na(this)}}}catch{}finally{}};function b_(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function wC(c,d){var m=c.C,w=d.indexOf(`
`,m);return w==-1?vf:(m=Number(d.substring(m,w)),isNaN(m)?E_:(w+=1,w+m>d.length?vf:(d=d.slice(w,w+m),c.C=w+m,d)))}Qr.prototype.cancel=function(){this.J=!0,qs(this)};function ac(c){c.S=Date.now()+c.I,T_(c,c.I)}function T_(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ea(p(c.ba,c),d)}function wf(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Qr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(vC(this.i,this.A),this.L!=2&&(Zo(),Zt(17)),qs(this),this.s=2,na(this)):T_(this,this.S-c)};function na(c){c.j.G==0||c.J||Q_(c.j,c)}function qs(c){wf(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Gr(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function bf(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||Tf(m.h,c))){if(!c.K&&Tf(m.h,c)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)mc(m),dc(m);else break e;Sf(m),Zt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=ea(p(m.Za,m),6e3));if(1>=R_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ws(m,11)}else if((c.K||m.g==c)&&mc(m),!O(d))for(M=m.Da.g.parse(d),d=0;d<M.length;d++){let Ue=M[d];if(m.T=Ue[0],Ue=Ue[1],m.G==2)if(Ue[0]=="c"){m.K=Ue[1],m.ia=Ue[2];const qt=Ue[3];qt!=null&&(m.la=qt,m.j.info("VER="+m.la));const Ht=Ue[4];Ht!=null&&(m.Aa=Ht,m.j.info("SVER="+m.Aa));const Vi=Ue[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(w=1.5*Vi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Vn=c.g;if(Vn){const _c=Vn.g?Vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_c){var V=w.h;V.g||_c.indexOf("spdy")==-1&&_c.indexOf("quic")==-1&&_c.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(If(V,V.h),V.h=null))}if(w.D){const Pf=Vn.g?Vn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pf&&(w.ya=Pf,et(w.I,w.D,Pf))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var Q=c;if(w.qa=J_(w,w.J?w.ia:null,w.W),Q.K){S_(w.h,Q);var Ye=Q,Mt=w.L;Mt&&(Ye.I=Mt),Ye.B&&(wf(Ye),ac(Ye)),w.g=Q}else K_(w);0<m.i.length&&pc(m)}else Ue[0]!="stop"&&Ue[0]!="close"||Ws(m,7);else m.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Ws(m,7):Rf(m):Ue[0]!="noop"&&m.l&&m.l.ta(Ue),m.v=0)}}Zo(4)}catch{}}var bC=class{constructor(c,d){this.g=c,this.map=d}};function I_(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function A_(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function R_(c){return c.h?1:c.g?c.g.size:0}function Tf(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function If(c,d){c.g?c.g.add(d):c.h=d}function S_(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}I_.prototype.cancel=function(){if(this.i=C_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function C_(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return v(c.i)}function TC(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],m=c.length,w=0;w<m;w++)d.push(c[w]);return d}d=[],m=0;for(w in c)d[m++]=c[w];return d}function IC(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const w in c)d[m++]=w;return d}}}function P_(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=IC(c),w=TC(c),M=w.length,V=0;V<M;V++)d.call(void 0,w[V],m&&m[V],c)}var k_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AC(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var w=c[m].indexOf("="),M=null;if(0<=w){var V=c[m].substring(0,w);M=c[m].substring(w+1)}else V=c[m];d(V,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Hs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Hs){this.h=c.h,lc(this,c.j),this.o=c.o,this.g=c.g,cc(this,c.s),this.l=c.l;var d=c.i,m=new ia;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),N_(this,m),this.m=c.m}else c&&(d=String(c).match(k_))?(this.h=!1,lc(this,d[1]||"",!0),this.o=ra(d[2]||""),this.g=ra(d[3]||"",!0),cc(this,d[4]),this.l=ra(d[5]||"",!0),N_(this,d[6]||"",!0),this.m=ra(d[7]||"")):(this.h=!1,this.i=new ia(null,this.h))}Hs.prototype.toString=function(){var c=[],d=this.j;d&&c.push(sa(d,O_,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(sa(d,O_,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(sa(m,m.charAt(0)=="/"?CC:SC,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",sa(m,kC)),c.join("")};function br(c){return new Hs(c)}function lc(c,d,m){c.j=m?ra(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function cc(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function N_(c,d,m){d instanceof ia?(c.i=d,NC(c.i,c.h)):(m||(d=sa(d,PC)),c.i=new ia(d,c.h))}function et(c,d,m){c.i.set(d,m)}function uc(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ra(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function sa(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,RC),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function RC(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var O_=/[#\/\?@]/g,SC=/[#\?:]/g,CC=/[#\?]/g,PC=/[#\?@]/g,kC=/#/g;function ia(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Yr(c){c.g||(c.g=new Map,c.h=0,c.i&&AC(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=ia.prototype,t.add=function(c,d){Yr(this),this.i=null,c=Mi(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function D_(c,d){Yr(c),d=Mi(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function x_(c,d){return Yr(c),d=Mi(c,d),c.g.has(d)}t.forEach=function(c,d){Yr(this),this.g.forEach(function(m,w){m.forEach(function(M){c.call(d,M,w,this)},this)},this)},t.na=function(){Yr(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const M=c[w];for(let V=0;V<M.length;V++)m.push(d[w])}return m},t.V=function(c){Yr(this);let d=[];if(typeof c=="string")x_(this,c)&&(d=d.concat(this.g.get(Mi(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return Yr(this),this.i=null,c=Mi(this,c),x_(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function M_(c,d,m){D_(c,d),0<m.length&&(c.i=null,c.g.set(Mi(c,d),v(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const V=encodeURIComponent(String(w)),Q=this.V(w);for(w=0;w<Q.length;w++){var M=V;Q[w]!==""&&(M+="="+encodeURIComponent(String(Q[w]))),c.push(M)}}return this.i=c.join("&")};function Mi(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function NC(c,d){d&&!c.j&&(Yr(c),c.i=null,c.g.forEach(function(m,w){var M=w.toLowerCase();w!=M&&(D_(this,w),M_(this,M,m))},c)),c.j=d}function OC(c,d){const m=new ta;if(a.Image){const w=new Image;w.onload=g(Xr,m,"TestLoadImage: loaded",!0,d,w),w.onerror=g(Xr,m,"TestLoadImage: error",!1,d,w),w.onabort=g(Xr,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=g(Xr,m,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else d(!1)}function DC(c,d){const m=new ta,w=new AbortController,M=setTimeout(()=>{w.abort(),Xr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:w.signal}).then(V=>{clearTimeout(M),V.ok?Xr(m,"TestPingServer: ok",!0,d):Xr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),Xr(m,"TestPingServer: error",!1,d)})}function Xr(c,d,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function xC(){this.g=new Sn}function MC(c,d,m){const w=m||"";try{P_(c,function(M,V){let Q=M;u(M)&&(Q=Oi(M)),d.push(w+V+"="+encodeURIComponent(Q))})}catch(M){throw d.push(w+"type="+encodeURIComponent("_badmap")),M}}function oa(c){this.l=c.Ub||null,this.j=c.eb||!1}_(oa,Di),oa.prototype.g=function(){return new hc(this.l,this.j)},oa.prototype.i=function(c){return function(){return c}}({});function hc(c,d){oe.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(hc,oe),t=hc.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,la(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,aa(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;L_(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function L_(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?aa(this):la(this),this.readyState==3&&L_(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,aa(this))},t.Qa=function(c){this.g&&(this.response=c,aa(this))},t.ga=function(){this.g&&aa(this)};function aa(c){c.readyState=4,c.l=null,c.j=null,c.v=null,la(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function la(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function V_(c){let d="";return k(c,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function Af(c,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=V_(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):et(c,d,m))}function dt(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(dt,oe);var LC=/^https?$/i,VC=["POST","PUT"];t=dt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yf.g(),this.v=this.o?f_(this.o):f_(yf),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(V){F_(this,V);return}if(c=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())m.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(V=>V.toLowerCase()=="content-type"),M=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(VC,d,void 0))||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Q]of m)this.g.setRequestHeader(V,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{B_(this),this.u=!0,this.g.send(c),this.u=!1}catch(V){F_(this,V)}};function F_(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,$_(c),fc(c)}function $_(c){c.A||(c.A=!0,fe(c,"complete"),fe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,fe(this,"complete"),fe(this,"abort"),fc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fc(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?U_(this):this.bb())},t.bb=function(){U_(this)};function U_(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Tr(c)!=4||c.Z()!=2)){if(c.u&&Tr(c)==4)Qe(c.Ea,0,c);else if(fe(c,"readystatechange"),Tr(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=Q===0){var M=String(c.D).match(k_)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!LC.test(M?M.toLowerCase():"")}m=w}if(m)fe(c,"complete"),fe(c,"success");else{c.m=6;try{var V=2<Tr(c)?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.Z()+"]",$_(c)}}finally{fc(c)}}}}function fc(c,d){if(c.g){B_(c);const m=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||fe(c,"ready");try{m.onreadystatechange=w}catch{}}}function B_(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Tr(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Jt(d)}};function j_(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function FC(c){const d={};c=(c.g&&2<=Tr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(O(c[w]))continue;var m=E(c[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const V=d[M]||[];d[M]=V,V.push(m)}I(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ca(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function q_(c){this.Aa=0,this.i=[],this.j=new ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ca("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ca("baseRetryDelayMs",5e3,c),this.cb=ca("retryDelaySeedMs",1e4,c),this.Wa=ca("forwardChannelMaxRetries",2,c),this.wa=ca("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new I_(c&&c.concurrentRequestLimit),this.Da=new xC,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=q_.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,w){Zt(0),this.W=c,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=J_(this,null,this.W),pc(this)};function Rf(c){if(H_(c),c.G==3){var d=c.U++,m=br(c.I);if(et(m,"SID",c.K),et(m,"RID",d),et(m,"TYPE","terminate"),ua(c,m),d=new Qr(c,c.j,d),d.L=2,d.v=uc(br(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Z_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ac(d)}X_(c)}function dc(c){c.g&&(Cf(c),c.g.cancel(),c.g=null)}function H_(c){dc(c),c.u&&(a.clearTimeout(c.u),c.u=null),mc(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function pc(c){if(!A_(c.h)&&!c.s){c.s=!0;var d=c.Ga;de||It(),be||(de(),be=!0),at.add(d,c),c.B=0}}function $C(c,d){return R_(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ea(p(c.Ga,c,d),Y_(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new Qr(this,this.j,c);let V=this.o;if(this.S&&(V?(V=y(V),P(V,this.S)):V=this.S),this.m!==null||this.O||(M.H=V,V=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=z_(this,M,d),m=br(this.I),et(m,"RID",c),et(m,"CVER",22),this.D&&et(m,"X-HTTP-Session-Id",this.D),ua(this,m),V&&(this.O?d="headers="+encodeURIComponent(String(V_(V)))+"&"+d:this.m&&Af(m,this.m,V)),If(this.h,M),this.Ua&&et(m,"TYPE","init"),this.P?(et(m,"$req",d),et(m,"SID","null"),M.T=!0,Ef(M,m,null)):Ef(M,m,d),this.G=2}}else this.G==3&&(c?W_(this,c):this.i.length==0||A_(this.h)||W_(this))};function W_(c,d){var m;d?m=d.l:m=c.U++;const w=br(c.I);et(w,"SID",c.K),et(w,"RID",m),et(w,"AID",c.T),ua(c,w),c.m&&c.o&&Af(w,c.m,c.o),m=new Qr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=z_(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),If(c.h,m),Ef(m,w,d)}function ua(c,d){c.H&&k(c.H,function(m,w){et(d,w,m)}),c.l&&P_({},function(m,w){et(d,w,m)})}function z_(c,d,m){m=Math.min(c.i.length,m);var w=c.l?p(c.l.Na,c.l,c):null;e:{var M=c.i;let V=-1;for(;;){const Q=["count="+m];V==-1?0<m?(V=M[0].g,Q.push("ofs="+V)):V=0:Q.push("ofs="+V);let Ye=!0;for(let Mt=0;Mt<m;Mt++){let Ue=M[Mt].g;const qt=M[Mt].map;if(Ue-=V,0>Ue)V=Math.max(0,M[Mt].g-100),Ye=!1;else try{MC(qt,Q,"req"+Ue+"_")}catch{w&&w(qt)}}if(Ye){w=Q.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,w}function K_(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;de||It(),be||(de(),be=!0),at.add(d,c),c.v=0}}function Sf(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ea(p(c.Fa,c),Y_(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,G_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ea(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Zt(10),dc(this),G_(this))};function Cf(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function G_(c){c.g=new Qr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=br(c.qa);et(d,"RID","rpc"),et(d,"SID",c.K),et(d,"AID",c.T),et(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(d,"TO",c.ja),et(d,"TYPE","xmlhttp"),ua(c,d),c.m&&c.o&&Af(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=uc(br(d)),m.m=null,m.P=!0,w_(m,c)}t.Za=function(){this.C!=null&&(this.C=null,dc(this),Sf(this),Zt(19))};function mc(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Q_(c,d){var m=null;if(c.g==d){mc(c),Cf(c),c.g=null;var w=2}else if(Tf(c.h,d))m=d.D,S_(c.h,d),w=1;else return;if(c.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var M=c.B;w=sc(),fe(w,new __(w,m)),pc(c)}else K_(c);else if(M=d.s,M==3||M==0&&0<d.X||!(w==1&&$C(c,d)||w==2&&Sf(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),M){case 1:Ws(c,5);break;case 4:Ws(c,10);break;case 3:Ws(c,6);break;default:Ws(c,2)}}}function Y_(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function Ws(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),w=c.Xa;const M=!w;w=new Hs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||lc(w,"https"),uc(w),M?OC(w.toString(),m):DC(w.toString(),m)}else Zt(2);c.G=0,c.l&&c.l.sa(d),X_(c),H_(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Zt(2)):(this.j.info("Failed to ping google.com"),Zt(1))};function X_(c){if(c.G=0,c.ka=[],c.l){const d=C_(c.h);(d.length!=0||c.i.length!=0)&&(A(c.ka,d),A(c.ka,c.i),c.h.i.length=0,v(c.i),c.i.length=0),c.l.ra()}}function J_(c,d,m){var w=m instanceof Hs?br(m):new Hs(m);if(w.g!="")d&&(w.g=d+"."+w.g),cc(w,w.s);else{var M=a.location;w=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var V=new Hs(null);w&&lc(V,w),d&&(V.g=d),M&&cc(V,M),m&&(V.l=m),w=V}return m=c.D,d=c.ya,m&&d&&et(w,m,d),et(w,"VER",c.la),ua(c,w),w}function Z_(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new dt(new oa({eb:m})):new dt(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ey(){}t=ey.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gc(){}gc.prototype.g=function(c,d){return new mn(c,d)};function mn(c,d){oe.call(this),this.g=new q_(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!O(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Li(this)}_(mn,oe),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Rf(this.g)},mn.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Oi(c),c=m);d.i.push(new bC(d.Ya++,c)),d.G==3&&pc(d)},mn.prototype.N=function(){this.g.l=null,delete this.j,Rf(this.g),delete this.g,mn.aa.N.call(this)};function ty(c){gf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}_(ty,gf);function ny(){_f.call(this),this.status=1}_(ny,_f);function Li(c){this.g=c}_(Li,ey),Li.prototype.ua=function(){fe(this.g,"a")},Li.prototype.ta=function(c){fe(this.g,new ty(c))},Li.prototype.sa=function(c){fe(this.g,new ny)},Li.prototype.ra=function(){fe(this.g,"b")},gc.prototype.createWebChannel=gc.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,G0=function(){return new gc},K0=function(){return sc()},z0=js,sp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ic.NO_ERROR=0,ic.TIMEOUT=8,ic.HTTP_ERROR=6,Qc=ic,y_.COMPLETE="complete",W0=y_,d_.EventType=Jo,Jo.OPEN="a",Jo.CLOSE="b",Jo.ERROR="c",Jo.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Sa=d_,H0=oa,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,q0=dt}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});const aE="@firebase/firestore";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Bo="10.12.0";/**
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
 */const _i=new Cl("@firebase/firestore");function _a(){return _i.logLevel}function ie(t,...e){if(_i.logLevel<=Se.DEBUG){const n=e.map(Jm);_i.debug(`Firestore (${Bo}): ${t}`,...n)}}function Ur(t,...e){if(_i.logLevel<=Se.ERROR){const n=e.map(Jm);_i.error(`Firestore (${Bo}): ${t}`,...n)}}function vo(t,...e){if(_i.logLevel<=Se.WARN){const n=e.map(Jm);_i.warn(`Firestore (${Bo}): ${t}`,...n)}}function Jm(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function He(t,e){t||pe()}function we(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class xV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MV{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new Q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new zt(e)}}class LV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new FV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function UV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Y0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=UV(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function je(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new bt(0,0))}static max(){return new ge(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends ml{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const BV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends ml{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return BV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ee(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ee(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Xe.fromString(e))}static fromName(e){return new ce(Xe.fromString(e).popFirst(5))}static empty(){return new ce(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Xe(e.slice()))}}function jV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new Cs(s,ce.empty(),e)}function qV(t){return new Cs(t.readTime,t.key,-1)}class Cs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cs(ge.min(),ce.empty(),-1)}static max(){return new Cs(ge.max(),ce.empty(),-1)}}function HV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:je(t.largestBatchId,e.largestBatchId))}/**
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
 */const WV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $l(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==WV)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zm.oe=-1;function Bl(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function GV(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function lE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ht{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dc(this.root,e,this.comparator,!0)}}class Dc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cE(this.data.getIterator())}getIteratorFrom(e){return new cE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ut(this.comparator);return n.data=e,n}}class cE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new vn([])}unionWith(e){let n=new Ut(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J0("Invalid base64 string: "+i):i}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const QV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(t){if(He(!!t),typeof t=="string"){let e=0;const n=QV.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
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
 */function eg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tg(t){const e=t.mapValue.fields.__previous_value__;return eg(e)?tg(e):e}function gl(t){const e=Ps(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
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
 */class YV{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class _l{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _l("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _l&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eg(t)?4:XV(t)?9007199254740991:10:pe()}function vr(t,e){if(t===e)return!0;const n=vi(t);if(n!==vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ps(s.timestampValue),a=Ps(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yi(s.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=vt(s.doubleValue),a=vt(i.doubleValue);return o===a?xu(o)===xu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(lE(o)!==lE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!vr(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function yl(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function wo(t,e){if(t===e)return 0;const n=vi(t),r=vi(e);if(n!==r)return je(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=vt(i.integerValue||i.doubleValue),l=vt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return uE(t.timestampValue,e.timestampValue);case 4:return uE(gl(t),gl(e));case 5:return je(t.stringValue,e.stringValue);case 6:return function(i,o){const a=yi(i),l=yi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=je(a[u],l[u]);if(h!==0)return h}return je(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=je(vt(i.latitude),vt(o.latitude));return a!==0?a:je(vt(i.longitude),vt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=wo(a[u],l[u]);if(h)return h}return je(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===xc.mapValue&&o===xc.mapValue)return 0;if(i===xc.mapValue)return 1;if(o===xc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=je(l[f],h[f]);if(p!==0)return p;const g=wo(a[l[f]],u[h[f]]);if(g!==0)return g}return je(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function uE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return je(t,e);const n=Ps(t),r=Ps(e),s=je(n.seconds,r.seconds);return s!==0?s:je(n.nanos,r.nanos)}function bo(t){return ip(t)}function ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ps(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ip(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ip(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function hE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function op(t){return!!t&&"integerValue"in t}function ng(t){return!!t&&"arrayValue"in t}function fE(t){return!!t&&"nullValue"in t}function dE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yc(t){return!!t&&"mapValue"in t}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=Ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ha(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(Ha(this.value))}}function Z0(t){const e=[];return Si(t.fields,(n,r)=>{const s=new Ft([n]);if(Yc(r)){const i=Z0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vn(e)}/**
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
 */class kt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ge.min(),ge.min(),ge.min(),rn.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,ge.min(),ge.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ge.min(),ge.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mu{constructor(e,n){this.position=e,this.inclusive=n}}function pE(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=wo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function JV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eA{}class Et extends eA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eF(e,n,r):n==="array-contains"?new rF(e,r):n==="in"?new sF(e,r):n==="not-in"?new iF(e,r):n==="array-contains-any"?new oF(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tF(e,r):new nF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wo(n,this.value)):n!==null&&vi(this.value)===vi(n)&&this.matchesComparison(wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends eA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new er(e,n)}matches(e){return tA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tA(t){return t.op==="and"}function nA(t){return ZV(t)&&tA(t)}function ZV(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function ap(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+bo(t.value);if(nA(t))return t.filters.map(e=>ap(e)).join(",");{const e=t.filters.map(n=>ap(n)).join(",");return`${t.op}(${e})`}}function rA(t,e){return t instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.field.isEqual(s.field)&&vr(r.value,s.value)}(t,e):t instanceof er?function(r,s){return s instanceof er&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&rA(o,s.filters[a]),!0):!1}(t,e):void pe()}function sA(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(sA).join(" ,")+"}"}(t):"Filter"}class eF extends Et{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class tF extends Et{constructor(e,n){super(e,"in",n),this.keys=iA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nF extends Et{constructor(e,n){super(e,"not-in",n),this.keys=iA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class rF extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ng(n)&&yl(n.arrayValue,this.value)}}class sF extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yl(this.value.arrayValue,n)}}class iF extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yl(this.value.arrayValue,n)}}class oF extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ng(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yl(this.value.arrayValue,r))}}/**
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
 */class aF{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function gE(t,e=null,n=[],r=[],s=null,i=null,o=null){return new aF(t,e,n,r,s,i,o)}function rg(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bo(r)).join(",")),e.ue=n}return e.ue}function sg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mE(t.startAt,e.startAt)&&mE(t.endAt,e.endAt)}function lp(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class jo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lF(t,e,n,r,s,i,o,a){return new jo(t,e,n,r,s,i,o,a)}function Vh(t){return new jo(t)}function _E(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oA(t){return t.collectionGroup!==null}function Wa(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new vl(i,r))}),n.has(Ft.keyField().canonicalString())||e.ce.push(new vl(Ft.keyField(),r))}return e.ce}function gr(t){const e=we(t);return e.le||(e.le=cF(e,Wa(t))),e.le}function cF(t,e){if(t.limitType==="F")return gE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vl(s.field,i)});const n=t.endAt?new Mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mu(t.startAt.position,t.startAt.inclusive):null;return gE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cp(t,e){const n=t.filters.concat([e]);return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function up(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fh(t,e){return sg(gr(t),gr(e))&&t.limitType===e.limitType}function aA(t){return`${rg(gr(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>sA(s)).join(", ")}]`),Bl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bo(s)).join(",")),`Target(${r})`}(gr(t))}; limitType=${t.limitType})`}function $h(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=pE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Wa(r),s)||r.endAt&&!function(o,a,l){const u=pE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Wa(r),s))}(t,e)}function uF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lA(t){return(e,n)=>{let r=!1;for(const s of Wa(t)){const i=hF(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hF(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?wo(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class qo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
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
 */const fF=new ht(ce.comparator);function Br(){return fF}const cA=new ht(ce.comparator);function Ca(...t){let e=cA;for(const n of t)e=e.insert(n.key,n);return e}function uA(t){let e=cA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return za()}function hA(){return za()}function za(){return new qo(t=>t.toString(),(t,e)=>t.isEqual(e))}const dF=new ht(ce.comparator),pF=new Ut(ce.comparator);function Ce(...t){let e=pF;for(const n of t)e=e.add(n);return e}const mF=new Ut(je);function gF(){return mF}/**
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
 */function fA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function dA(t){return{integerValue:""+t}}function _F(t,e){return GV(e)?dA(e):fA(t,e)}/**
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
 */class Uh{constructor(){this._=void 0}}function yF(t,e,n){return t instanceof Lu?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eg(i)&&(i=tg(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof El?mA(t,e):t instanceof wl?gA(t,e):function(s,i){const o=pA(s,i),a=yE(o)+yE(s.Pe);return op(o)&&op(s.Pe)?dA(a):fA(s.serializer,a)}(t,e)}function vF(t,e,n){return t instanceof El?mA(t,e):t instanceof wl?gA(t,e):n}function pA(t,e){return t instanceof Vu?function(r){return op(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Lu extends Uh{}class El extends Uh{constructor(e){super(),this.elements=e}}function mA(t,e){const n=_A(e);for(const r of t.elements)n.some(s=>vr(s,r))||n.push(r);return{arrayValue:{values:n}}}class wl extends Uh{constructor(e){super(),this.elements=e}}function gA(t,e){let n=_A(e);for(const r of t.elements)n=n.filter(s=>!vr(s,r));return{arrayValue:{values:n}}}class Vu extends Uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yE(t){return vt(t.integerValue||t.doubleValue)}function _A(t){return ng(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EF(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof El&&s instanceof El||r instanceof wl&&s instanceof wl?Eo(r.elements,s.elements,vr):r instanceof Vu&&s instanceof Vu?vr(r.Pe,s.Pe):r instanceof Lu&&s instanceof Lu}(t.transform,e.transform)}class wF{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bh{}function yA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jh(t.key,$t.none()):new jl(t.key,t.data,$t.none());{const n=t.data,r=rn.empty();let s=new Ut(Ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fs(t.key,r,new vn(s.toArray()),$t.none())}}function bF(t,e,n){t instanceof jl?function(s,i,o){const a=s.value.clone(),l=EE(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(s,i,o){if(!Xc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=EE(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(vA(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ka(t,e,n,r){return t instanceof jl?function(i,o,a,l){if(!Xc(i.precondition,o))return a;const u=i.value.clone(),h=wE(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(i,o,a,l){if(!Xc(i.precondition,o))return a;const u=wE(i.fieldTransforms,l,o),h=o.data;return h.setAll(vA(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Xc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TF(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pA(r.transform,s||null);i!=null&&(n===null&&(n=rn.empty()),n.set(r.field,i))}return n||null}function vE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Eo(r,s,(i,o)=>EF(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jl extends Bh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fs extends Bh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function EE(t,e,n){const r=new Map;He(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,vF(o,a,n[s]))}return r}function wE(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yF(i,o,e))}return r}class jh extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EA extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IF{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bF(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hA();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=yA(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>vE(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>vE(n,r))}}class ig{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length);let s=function(){return dF}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ig(e,n,r,s)}}/**
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
 */class AF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var yt,De;function wA(t){switch(t){default:return pe();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function bA(t){if(t===void 0)return Ur("GRPC error has no .code"),j.UNKNOWN;switch(t){case yt.OK:return j.OK;case yt.CANCELLED:return j.CANCELLED;case yt.UNKNOWN:return j.UNKNOWN;case yt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case yt.INTERNAL:return j.INTERNAL;case yt.UNAVAILABLE:return j.UNAVAILABLE;case yt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case yt.NOT_FOUND:return j.NOT_FOUND;case yt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case yt.ABORTED:return j.ABORTED;case yt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case yt.DATA_LOSS:return j.DATA_LOSS;default:return pe()}}(De=yt||(yt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SF(){return new TextEncoder}/**
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
 */const CF=new ai([4294967295,4294967295],0);function bE(t){const e=SF().encode(t),n=new j0;return n.update(e),new Uint8Array(n.digest())}function TE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ai([n,r],0),new ai([s,i],0)]}class og{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pa(`Invalid padding: ${n}`);if(r<0)throw new Pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ai.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ai.fromNumber(r)));return s.compare(CF)===1&&(s=new ai([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bE(e),[r,s]=TE(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new og(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=bE(e),[r,s]=TE(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qh(ge.min(),s,new ht(je),Br(),Ce())}}class ql{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ql(r,n,Ce(),Ce(),Ce())}}/**
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
 */class Jc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class TA{constructor(e,n){this.targetId=e,this.me=n}}class IA{constructor(e,n,r=Xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class IE{constructor(){this.fe=0,this.ge=RE(),this.pe=Xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ce(),n=Ce(),r=Ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new ql(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=RE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,He(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PF{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=AE(),this.Qe=new ht(je)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(lp(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,kt.newNoDocument(o,ge.min()))}else He(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=yi(r).toUint8Array()}catch(l){if(l instanceof J0)return vo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new og(o,s,i)}catch(l){return vo(l instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&lp(a.target)){const l=new ce(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,kt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Ce();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new qh(e,n,this.Qe,this.ke,r);return this.ke=Br(),this.qe=AE(),this.Qe=new ht(je),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new IE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ut(je),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new IE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function AE(){return new ht(ce.comparator)}function RE(){return new ht(ce.comparator)}const kF={asc:"ASCENDING",desc:"DESCENDING"},NF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OF={and:"AND",or:"OR"};class DF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hp(t,e){return t.useProto3Json||Bl(e)?e:{value:e}}function Fu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xF(t,e){return Fu(t,e.toTimestamp())}function Tn(t){return He(!!t),ge.fromTimestamp(function(n){const r=Ps(n);return new bt(r.seconds,r.nanos)}(t))}function ag(t,e){return fp(t,e).canonicalString()}function fp(t,e){const n=function(s){return new Xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function RA(t){const e=Xe.fromString(t);return He(OA(e)),e}function $u(t,e){return ag(t.databaseId,e.path)}function Ga(t,e){const n=RA(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(CA(n))}function SA(t,e){return ag(t.databaseId,e)}function MF(t){const e=RA(t);return e.length===4?Xe.emptyPath():CA(e)}function dp(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CA(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function SE(t,e,n){return{name:$u(t,e),fields:n.value.mapValue.fields}}function LF(t,e){return"found"in e?function(r,s){He(!!s.found),s.found.name,s.found.updateTime;const i=Ga(r,s.found.name),o=Tn(s.found.updateTime),a=s.found.createTime?Tn(s.found.createTime):ge.min(),l=new rn({mapValue:{fields:s.found.fields}});return kt.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){He(!!s.missing),He(!!s.readTime);const i=Ga(r,s.missing),o=Tn(s.readTime);return kt.newNoDocument(i,o)}(t,e):pe()}function VF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(He(h===void 0||typeof h=="string"),Xt.fromBase64String(h||"")):(He(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:bA(u.code);return new ee(h,u.message||"")}(o);n=new IA(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):ge.min(),a=new rn({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Jc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(t,r.document),i=r.readTime?Tn(r.readTime):ge.min(),o=kt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(t,r.document),i=r.removedTargetIds||[];n=new Jc([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RF(s,i),a=r.targetId;n=new TA(a,o)}}return n}function PA(t,e){let n;if(e instanceof jl)n={update:SE(t,e.key,e.value)};else if(e instanceof jh)n={delete:$u(t,e.key)};else if(e instanceof Fs)n={update:SE(t,e.key,e.data),updateMask:zF(e.fieldMask)};else{if(!(e instanceof EA))return pe();n={verify:$u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof El)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xF(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function FF(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(ge.min())&&(o=Tn(i)),new wF(o,s.transformResults||[])}(n,e))):[]}function $F(t,e){return{documents:[SA(t,e.path)]}}function UF(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SA(t,s);const i=function(u){if(u.length!==0)return NA(er.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:qi(p.field),direction:qF(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function BF(t){let e=MF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=kA(f);return p instanceof er&&nA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(_){return new vl(Hi(_.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Bl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new Mu(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new Mu(g,p)}(n.endAt)),lF(e,s,o,i,a,"F",l,u)}function jF(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hi(n.unaryFilter.field);return Et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hi(n.unaryFilter.field);return Et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(Hi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>kA(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function qF(t){return kF[t]}function HF(t){return NF[t]}function WF(t){return OF[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return Ft.fromServerFormat(t.fieldPath)}function NA(t){return t instanceof Et?function(n){if(n.op==="=="){if(dE(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NAN"}};if(fE(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dE(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NAN"}};if(fE(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(n.field),op:HF(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(s=>NA(s));return r.length===1?r[0]:{compositeFilter:{op:WF(n.op),filters:r}}}(t):pe()}function zF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gs{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=Xt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KF{constructor(e){this.ct=e}}function GF(t){const e=BF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?up(e,e.limit,"L"):e}/**
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
 */class QF{constructor(){this._n=new YF}addToCollectionParentIndex(e,n){return this._n.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Cs.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class YF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ut(Xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ut(Xe.comparator)).toArray()}}/**
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
 */class To{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new To(0)}static Ln(){return new To(-1)}}/**
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
 */class XF{constructor(){this.changes=new qo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZF{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ka(r.mutation,s,vn.empty(),bt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const s=si();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ca();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Br();const o=za(),a=function(){return za()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ka(h.mutation,u,h.mutation.getFieldMask(),bt.now())):o.set(u.key,vn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new JF(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=za();let s=new ht((o,a)=>o-a),i=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||vn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||Ce()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=hA();h.forEach(p=>{if(!i.has(p)){const g=yA(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(si());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ce())).next(h=>({batchId:a,changes:uA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=Ca();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ca();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(f,p){return new jo(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=Ca();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Ka(h.mutation,u,vn.empty(),bt.now()),$h(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class e${constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return H.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:GF(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class t${constructor(){this.overlays=new ht(ce.comparator),this.hr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=si(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ht((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=si(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=si(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AF(n,r));let i=this.hr.get(n);i===void 0&&(i=Ce(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class lg{constructor(){this.Pr=new Ut(Ct.Ir),this.Tr=new Ut(Ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ce(new Xe([])),r=new Ct(n,e),s=new Ct(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ce(new Xe([])),r=new Ct(n,e),s=new Ct(n,e+1);let i=Ce();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ce.comparator(e.key,n.key)||je(e.pr,n.pr)}static Er(e,n){return je(e.pr,n.pr)||ce.comparator(e.key,n.key)}}/**
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
 */class n${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ut(Ct.Ir)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IF(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ct(n,0),s=new Ct(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ut(je);return n.forEach(s=>{const i=new Ct(s,0),o=new Ct(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),H.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new Ct(new ce(i),0);let a=new Ut(je);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.pr)),!0)},o),H.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return H.forEach(n.mutations,s=>{const i=new Ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ct(n,0),s=this.wr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class r${constructor(e){this.vr=e,this.docs=function(){return new ht(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Br();const o=n.path,a=new ce(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||HV(qV(h),r)<=0||(s.has(h.key)||$h(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Fr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new s$(this)}getSize(e){return H.resolve(this.size)}}class s$ extends XF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class i${constructor(e){this.persistence=e,this.Mr=new qo(n=>rg(n),sg),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new lg,this.targetCount=0,this.Lr=To.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),H.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new To(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.qn(n),H.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Nr.containsKey(n))}}/**
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
 */class o${constructor(e,n){this.Br={},this.overlays={},this.kr=new Zm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new i$(this),this.indexManager=new QF,this.remoteDocumentCache=function(s){return new r$(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new KF(n),this.$r=new e$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new t$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new n$(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new a$(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return H.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class a$ extends zV{constructor(e){super(),this.currentSequenceNumber=e}}class cg{constructor(e){this.persistence=e,this.zr=new lg,this.jr=null}static Hr(e){return new cg(e)}get Jr(){if(this.jr)return this.jr;throw pe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),H.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Jr,r=>{const s=ce.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return H.or([()=>H.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class ug{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ce(),s=Ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ug(e,n.fromCache,r,s)}}/**
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
 */class l${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c${constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return LN()?8:KV(jt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new l$;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(_a()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),H.resolve()):(_a()<=Se.DEBUG&&ie("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(_a()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gr(n))):H.resolve())}ji(e,n){if(_E(n))return H.resolve(null);let r=gr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=up(n,null,"F"),r=gr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ce(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,up(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return _E(n)||s.isEqual(ge.min())?H.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?H.resolve(null):(_a()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ji(n)),this.es(e,o,n,jV(s,-1)).next(a=>a))})}Zi(e,n){let r=new Ut(lA(e));return n.forEach((s,i)=>{$h(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return _a()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ji(n)),this.zi.getDocumentsMatchingQuery(e,n,Cs.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class u${constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ht(je),this.rs=new qo(i=>rg(i),sg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function h$(t,e,n,r){return new u$(t,e,n,r)}async function DA(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ce();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function f$(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let g=H.resolve();return p.forEach(_=>{g=g.next(()=>h.getEntry(l,_)).next(v=>{const A=u.docVersions.get(_);He(A!==null),v.version.compareTo(A)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xA(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function d$(t,e){const n=we(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Xt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(v,A,S){return v.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,h)&&a.push(n.Qr.updateTargetData(i,g))});let l=Br(),u=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(p$(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(ge.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(f=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function p$(t,e,n){let r=Ce(),s=Ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Br();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ie("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function m$(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function g$(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new gs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function pp(t,e,n){const r=we(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ul(o))throw o;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function CE(t,e,n){const r=we(t);let s=ge.min(),i=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=we(l),p=f.rs.get(h);return p!==void 0?H.resolve(f.ns.get(p)):f.Qr.getTargetData(u,h)}(r,o,gr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ce())).next(a=>(_$(r,uF(e),a),{documents:a,hs:i})))}function _$(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class PE{constructor(){this.activeTargetIds=gF()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y${constructor(){this.no=new PE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new PE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v${io(e){}shutdown(){}}/**
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
 */class kE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function Zf(){return Mc===null?Mc=function(){return 268435456+Math.round(2147483648*Math.random())}():Mc++,"0x"+Mc.toString(16)}/**
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
 */const E$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class w${constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Wt="WebChannelConnection";class b$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const a=Zf(),l=this.vo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(ie("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw vo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,a){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=E$[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Zf();return new Promise((o,a)=>{const l=new q0;l.setWithCredentials(!0),l.listenOnce(W0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qc.NO_ERROR:const h=l.getResponseJson();ie(Wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Qc.TIMEOUT:ie(Wt,`RPC '${e}' ${i} timed out`),a(new ee(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const f=l.getStatus();if(ie(Wt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(A){const S=A.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(S)>=0?S:j.UNKNOWN}(g.status);a(new ee(_,g.message))}else a(new ee(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ee(j.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ie(Wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ie(Wt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Zf(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=G0(),a=K0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new H0({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ie(Wt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const _=new w$({lo:A=>{g?ie(Wt,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(p||(ie(Wt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),ie(Wt,`RPC '${e}' stream ${s} sending:`,A),f.send(A))},ho:()=>f.close()}),v=(A,S,O)=>{A.listen(S,D=>{try{O(D)}catch(x){setTimeout(()=>{throw x},0)}})};return v(f,Sa.EventType.OPEN,()=>{g||(ie(Wt,`RPC '${e}' stream ${s} transport opened.`),_.mo())}),v(f,Sa.EventType.CLOSE,()=>{g||(g=!0,ie(Wt,`RPC '${e}' stream ${s} transport closed`),_.po())}),v(f,Sa.EventType.ERROR,A=>{g||(g=!0,vo(Wt,`RPC '${e}' stream ${s} transport errored:`,A),_.po(new ee(j.UNAVAILABLE,"The operation could not be completed")))}),v(f,Sa.EventType.MESSAGE,A=>{var S;if(!g){const O=A.data[0];He(!!O);const D=O,x=D.error||((S=D[0])===null||S===void 0?void 0:S.error);if(x){ie(Wt,`RPC '${e}' stream ${s} received error:`,x);const F=x.status;let k=function(b){const P=yt[b];if(P!==void 0)return bA(P)}(F),I=x.message;k===void 0&&(k=j.INTERNAL,I="Unknown error status: "+F+" with message "+x.message),g=!0,_.po(new ee(k,I)),f.close()}else ie(Wt,`RPC '${e}' stream ${s} received:`,O),_.yo(O)}}),v(a,z0.STAT_EVENT,A=>{A.stat===sp.PROXY?ie(Wt,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===sp.NOPROXY&&ie(Wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function ed(){return typeof document<"u"?document:null}/**
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
 */function Hh(t){return new DF(t,!0)}/**
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
 */class hg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class MA{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new hg(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ee(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T$ extends MA{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=VF(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Tn(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=dp(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=lp(l)?{documents:$F(i,l)}:{query:UF(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=AA(i,o.resumeToken);const u=hp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Fu(i,o.snapshotVersion.toTimestamp());const u=hp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=jF(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=dp(this.serializer),n.removeTarget=e,this.i_(n)}}class I$ extends MA{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=FF(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.A_(r,n)}return He(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=dp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PA(this.serializer,r))};this.i_(n)}}/**
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
 */class A$ extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,fp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(j.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,fp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class R${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ur(n),this.y_=!1):ie("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class S${constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ci(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=we(l);u.M_.add(4),await Hl(u),u.N_.set("Unknown"),u.M_.delete(4),await Wh(u)}(this))})}),this.N_=new R$(r,s)}}async function Wh(t){if(Ci(t))for(const e of t.x_)await e(!0)}async function Hl(t){for(const e of t.x_)await e(!1)}function LA(t,e){const n=we(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),mg(n)?pg(n):Ho(n).Xo()&&dg(n,e))}function fg(t,e){const n=we(t),r=Ho(n);n.F_.delete(e),r.Xo()&&VA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ci(n)&&n.N_.set("Unknown"))}function dg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).P_(e)}function VA(t,e){t.L_.xe(e),Ho(t).I_(e)}function pg(t){t.L_=new PF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.N_.w_()}function mg(t){return Ci(t)&&!Ho(t).Zo()&&t.F_.size>0}function Ci(t){return we(t).M_.size===0}function FA(t){t.L_=void 0}async function C$(t){t.N_.set("Online")}async function P$(t){t.F_.forEach((e,n)=>{dg(t,e)})}async function k$(t,e){FA(t),mg(t)?(t.N_.D_(e),pg(t)):t.N_.set("Unknown")}async function N$(t,e,n){if(t.N_.set("Online"),e instanceof IA&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof Jc?t.L_.Ke(e):e instanceof TA?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await xA(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(Xt.EMPTY_BYTE_STRING,h.snapshotVersion)),VA(i,l);const f=new gs(h.target,l,u,h.sequenceNumber);dg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!Ul(e))throw e;t.M_.add(1),await Hl(t),t.N_.set("Offline"),n||(n=()=>xA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Wh(t)})}function $A(t,e){return e().catch(n=>Uu(t,n,e))}async function zh(t){const e=we(t),n=ks(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;O$(e);)try{const s=await m$(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,D$(e,s)}catch(s){await Uu(e,s)}UA(e)&&BA(e)}function O$(t){return Ci(t)&&t.v_.length<10}function D$(t,e){t.v_.push(e);const n=ks(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function UA(t){return Ci(t)&&!ks(t).Zo()&&t.v_.length>0}function BA(t){ks(t).start()}async function x$(t){ks(t).V_()}async function M$(t){const e=ks(t);for(const n of t.v_)e.d_(n.mutations)}async function L$(t,e,n){const r=t.v_.shift(),s=ig.from(r,e,n);await $A(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await zh(t)}async function V$(t,e){e&&ks(t).E_&&await async function(r,s){if(function(o){return wA(o)&&o!==j.ABORTED}(s.code)){const i=r.v_.shift();ks(r).t_(),await $A(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zh(r)}}(t,e),UA(t)&&BA(t)}async function NE(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=Ci(n);n.M_.add(3),await Hl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Wh(n)}async function F$(t,e){const n=we(t);e?(n.M_.delete(2),await Wh(n)):e||(n.M_.add(2),await Hl(n),n.N_.set("Unknown"))}function Ho(t){return t.B_||(t.B_=function(n,r,s){const i=we(n);return i.f_(),new T$(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:C$.bind(null,t),To:P$.bind(null,t),Ao:k$.bind(null,t),h_:N$.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),mg(t)?pg(t):t.N_.set("Unknown")):(await t.B_.stop(),FA(t))})),t.B_}function ks(t){return t.k_||(t.k_=function(n,r,s){const i=we(n);return i.f_(),new I$(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:x$.bind(null,t),Ao:V$.bind(null,t),R_:M$.bind(null,t),A_:L$.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await zh(t)):(await t.k_.stop(),t.v_.length>0&&(ie("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class gg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new gg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _g(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Ul(t))return new ee(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class lo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Ca(),this.sortedSet=new ht(this.comparator)}static emptySet(e){return new lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class OE{constructor(){this.q_=new ht(ce.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):pe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Io{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Io(e,n,lo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class $${constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class U${constructor(){this.queries=new qo(e=>aA(e),Fh),this.onlineState="Unknown",this.z_=new Set}}async function yg(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new $$,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=_g(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Eg(n)}async function vg(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function B$(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&Eg(n)}function j$(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Eg(t){t.z_.forEach(e=>{e.next()})}var mp,DE;(DE=mp||(mp={})).J_="default",DE.Cache="cache";class wg{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==mp.Cache}}/**
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
 */class jA{constructor(e){this.key=e}}class qA{constructor(e){this.key=e}}class q${constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ce(),this.mutatedKeys=Ce(),this.Ia=lA(e),this.Ta=new lo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new OE,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=$h(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;p&&g?p.data.isEqual(g.data)?_!==v&&(r.track({type:3,doc:g}),A=!0):this.Ra(p,g)||(r.track({type:2,doc:g}),A=!0,(l&&this.Ia(g,l)>0||u&&this.Ia(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),A=!0):p&&!g&&(r.track({type:1,doc:p}),A=!0,(l||u)&&(a=!0)),A&&(g?(o=o.add(g),i=v?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(g,_){const v=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return v(g)-v(_)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Io(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new OE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ce(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new qA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new jA(r))}),n}pa(e){this.la=e.hs,this.Pa=Ce();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Io.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class H${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W${constructor(e){this.key=e,this.wa=!1}}class z${constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new qo(a=>aA(a),Fh),this.Da=new Map,this.Ca=new Set,this.va=new ht(ce.comparator),this.Fa=new Map,this.Ma=new lg,this.xa={},this.Oa=new Map,this.Na=To.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function K$(t,e,n=!0){const r=QA(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await HA(r,e,n,!0),s}async function G$(t,e){const n=QA(t);await HA(n,e,!0,!1)}async function HA(t,e,n,r){const s=await g$(t.localStore,gr(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Q$(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&LA(t.remoteStore,s),a}async function Q$(t,e,n,r,s){t.Ba=(f,p,g)=>async function(v,A,S,O){let D=A.view.da(S);D.Xi&&(D=await CE(v.localStore,A.query,!1).then(({documents:I})=>A.view.da(I,D)));const x=O&&O.targetChanges.get(A.targetId),F=O&&O.targetMismatches.get(A.targetId)!=null,k=A.view.applyChanges(D,v.isPrimaryClient,x,F);return ME(v,A.targetId,k.fa),k.snapshot}(t,f,p,g);const i=await CE(t.localStore,e,!0),o=new q$(e,i.hs),a=o.da(i.documents),l=ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);ME(t,n,u.fa);const h=new H$(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function Y$(t,e,n){const r=we(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Fh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fg(r.remoteStore,s.targetId),gp(r,s.targetId)}).catch($l)):(gp(r,s.targetId),await pp(r.localStore,s.targetId,!0))}async function X$(t,e){const n=we(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fg(n.remoteStore,r.targetId))}async function J$(t,e,n){const r=iU(t);try{const s=await function(o,a){const l=we(o),u=bt.now(),h=a.reduce((g,_)=>g.add(_.key),Ce());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=Br(),v=Ce();return l.os.getEntries(g,h).next(A=>{_=A,_.forEach((S,O)=>{O.isValidDocument()||(v=v.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(A=>{f=A;const S=[];for(const O of a){const D=TF(O,f.get(O.key).overlayedDocument);D!=null&&S.push(new Fs(O.key,D,Z0(D.value.mapValue),$t.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,S,a)}).next(A=>{p=A;const S=A.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(g,A.batchId,S)})}).then(()=>({batchId:p.batchId,changes:uA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ht(je)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Wl(r,s.changes),await zh(r.remoteStore)}catch(s){const i=_g(s,"Failed to persist write");n.reject(i)}}async function WA(t,e){const n=we(t);try{const r=await d$(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?He(o.wa):s.removedDocuments.size>0&&(He(o.wa),o.wa=!1))}),await Wl(n,r,e)}catch(r){await $l(r)}}function xE(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=we(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.U_)p.j_(a)&&(u=!0)}),u&&Eg(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z$(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new ht(ce.comparator);o=o.insert(i,kt.newNoDocument(i,ge.min()));const a=Ce().add(i),l=new qh(ge.min(),new Map,new ht(je),o,a);await WA(r,l),r.va=r.va.remove(i),r.Fa.delete(e),bg(r)}else await pp(r.localStore,e,!1).then(()=>gp(r,e,n)).catch($l)}async function eU(t,e){const n=we(t),r=e.batch.batchId;try{const s=await f$(n.localStore,e);KA(n,r,null),zA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,s)}catch(s){await $l(s)}}async function tU(t,e,n){const r=we(t);try{const s=await function(o,a){const l=we(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(He(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);KA(r,e,n),zA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wl(r,s)}catch(s){await $l(s)}}function zA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function KA(t,e,n){const r=we(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function gp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||GA(t,r)})}function GA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(fg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),bg(t))}function ME(t,e,n){for(const r of n)r instanceof jA?(t.Ma.addReference(r.key,e),nU(t,r)):r instanceof qA?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||GA(t,r.key)):pe()}function nU(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.Ca.add(r),bg(t))}function bg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ce(Xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new W$(n)),t.va=t.va.insert(n,r),LA(t.remoteStore,new gs(gr(Vh(n.path)),r,"TargetPurposeLimboResolution",Zm.oe))}}async function Wl(t,e,n){const r=we(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const h=ug.Ki(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=we(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.qi,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>H.forEach(p.Qi,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ul(f))throw f;ie("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.ns.get(p),_=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(_);h.ns=h.ns.insert(p,v)}}}(r.localStore,i))}async function rU(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await DA(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new ee(j.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wl(n,r.us)}}function sU(t,e){const n=we(t),r=n.Fa.get(e);if(r&&r.wa)return Ce().add(r.key);{let s=Ce();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function QA(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z$.bind(null,e),e.Sa.h_=B$.bind(null,e.eventManager),e.Sa.ka=j$.bind(null,e.eventManager),e}function iU(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tU.bind(null,e),e}class LE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return h$(this.persistence,new c$,e.initialUser,this.serializer)}createPersistence(e){return new o$(cg.Hr,this.serializer)}createSharedClientState(e){return new y$}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rU.bind(null,this.syncEngine),await F$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new U$}()}createDatastore(e){const n=Hh(e.databaseInfo.databaseId),r=function(i){return new b$(i)}(e.databaseInfo);return function(i,o,a,l){return new A$(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new S$(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>xE(this.syncEngine,n,0),function(){return kE.D()?new kE:new v$}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const f=new z$(s,i,o,a,l,u);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=we(r);ie("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Hl(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class aU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ee(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=we(s),a={documents:i.map(f=>$u(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,Xe.emptyPath(),a,i.length),u=new Map;l.forEach(f=>{const p=LF(o.serializer,f);u.set(p.key.toString(),p)});const h=[];return i.forEach(f=>{const p=u.get(f.toString());He(!!p),h.push(p)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new jh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=ce.fromPath(r);this.mutations.push(new EA(s,this.precondition(s)))}),await async function(r,s){const i=we(r),o={writes:s.map(a=>PA(i.serializer,a))};await i.Co("Commit",i.serializer.databaseId,Xe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw pe();n=ge.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new ee(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ge.min())?$t.exists(!1):$t.updateTime(n):$t.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ge.min()))throw new ee(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $t.updateTime(n)}return $t.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class lU{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Za=r.maxAttempts,this.Yo=new hg(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new aU(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.nu(s)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Bl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!wA(n)}return!1}}/**
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
 */class cU{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=zt.UNAUTHENTICATED,this.clientId=Y0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ie("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ie("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_g(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function td(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await DA(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function VE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hU(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>NE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>NE(e.remoteStore,s)),t._onlineComponents=e}function uU(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function hU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await td(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uU(n))throw n;vo("Error using user provided cache. Falling back to memory cache: "+n),await td(t,new LE)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await td(t,new LE);return t._offlineComponents}async function Ig(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await VE(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await VE(t,new oU))),t._onlineComponents}function fU(t){return Ig(t).then(e=>e.syncEngine)}function dU(t){return Ig(t).then(e=>e.datastore)}async function Bu(t){const e=await Ig(t),n=e.eventManager;return n.onListen=K$.bind(null,e.syncEngine),n.onUnlisten=Y$.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=G$.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X$.bind(null,e.syncEngine),n}function pU(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Tg({next:p=>{o.enqueueAndForget(()=>vg(i,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new ee(j.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new wg(Vh(a.path),h,{includeMetadataChanges:!0,ra:!0});return yg(i,f)}(await Bu(t),t.asyncQueue,e,n,r)),r.promise}function mU(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Tg({next:p=>{o.enqueueAndForget(()=>vg(i,f)),p.fromCache&&l.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new wg(a,h,{includeMetadataChanges:!0,ra:!0});return yg(i,f)}(await Bu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function YA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const FE=new Map;/**
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
 */function XA(t,e,n){if(!n)throw new ee(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gU(t,e,n,r){if(e===!0&&r===!0)throw new ee(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $E(t){if(!ce.isDocumentKey(t))throw new ee(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function UE(t){if(ce.isDocumentKey(t))throw new ee(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new ee(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class BE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new BE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new BE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DV;switch(r.type){case"firstParty":return new VV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=FE.get(n);r&&(ie("ComponentProvider","Removing Datastore"),FE.delete(n),r.terminate())}(this),Promise.resolve()}}function _U(t,e,n,r={}){var s;const i=(t=sn(t,Gh))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=zt.MOCK_USER;else{a=LT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ee(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new zt(u)}t._authCredentials=new xV(new Q0(a,l))}}/**
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
 */class $s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $s(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Ts extends $s{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ce(e))}withConverter(e){return new Ts(this.firestore,e,this._path)}}function _p(t,e,...n){if(t=Je(t),XA("collection","path",e),t instanceof Gh){const r=Xe.fromString(e,...n);return UE(r),new Ts(t,null,r)}{if(!(t instanceof Bt||t instanceof Ts))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return UE(r),new Ts(t.firestore,null,r)}}function Wo(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Y0.newId()),XA("doc","path",e),t instanceof Gh){const r=Xe.fromString(e,...n);return $E(r),new Bt(t,null,new ce(r))}{if(!(t instanceof Bt||t instanceof Ts))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return $E(r),new Bt(t.firestore,t instanceof Ts?t.converter:null,new ce(r))}}/**
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
 */class yU{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new hg(this,"async_queue_retry"),this.hu=()=>{const n=ed();n&&ie("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new mr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ul(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=gg.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&pe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function jE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Er extends Gh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new yU}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JA(this),this._firestoreClient.terminate()}}function Qh(t,e){const n=typeof t=="object"?t:Sh(),r=typeof t=="string"?t:"(default)",s=Rh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DT("firestore");i&&_U(s,...i)}return s}function zl(t){return t._firestoreClient||JA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JA(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new YV(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,YA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new cU(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(Xt.fromBase64String(e))}catch(n){throw new ee(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ag{constructor(e){this._methodName=e}}/**
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
 */class Yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
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
 */const vU=/^__.*__$/;class EU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new jl(e,this.data,n,this.fieldTransforms)}}class ZA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Rg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Rg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ju(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(eR(this.fu)&&vU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class wU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hh(e)}Fu(e,n,r,s=!1){return new Rg({fu:e,methodName:n,vu:r,path:Ft.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gl(t){const e=t._freezeSettings(),n=Hh(t._databaseId);return new wU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sg(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Cg("Data must be an object, but it was:",o,r);const a=rR(r,o);let l,u;if(i.merge)l=new vn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=yp(e,f,n);if(!o.contains(p))throw new ee(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iR(h,p)||h.push(p)}l=new vn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new EU(new rn(a),l,u)}class Xh extends Ag{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xh}}function tR(t,e,n,r){const s=t.Fu(1,e,n);Cg("Data must be an object, but it was:",s,r);const i=[],o=rn.empty();Si(r,(l,u)=>{const h=Pg(e,l,n);u=Je(u);const f=s.Su(h);if(u instanceof Xh)i.push(h);else{const p=Ql(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new vn(i);return new ZA(o,a,s.fieldTransforms)}function nR(t,e,n,r,s,i){const o=t.Fu(1,e,n),a=[yp(e,r,n)],l=[s];if(i.length%2!=0)throw new ee(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(yp(e,i[p])),l.push(i[p+1]);const u=[],h=rn.empty();for(let p=a.length-1;p>=0;--p)if(!iR(u,a[p])){const g=a[p];let _=l[p];_=Je(_);const v=o.Su(g);if(_ instanceof Xh)u.push(g);else{const A=Ql(_,v);A!=null&&(u.push(g),h.set(g,A))}}const f=new vn(u);return new ZA(h,f,o.fieldTransforms)}function bU(t,e,n,r=!1){return Ql(n,t.Fu(r?4:3,e))}function Ql(t,e){if(sR(t=Je(t)))return Cg("Unsupported field value:",e,t),rR(t,e);if(t instanceof Ag)return function(r,s){if(!eR(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ql(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _F(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:Fu(s.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fu(s.serializer,i)}}if(r instanceof Yh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ei)return{bytesValue:AA(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ag(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Kh(r)}`)}(t,e)}function rR(t,e){const n={};return X0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,(r,s)=>{const i=Ql(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof Yh||t instanceof Ei||t instanceof Bt||t instanceof Ag)}function Cg(t,e,n){if(!sR(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function yp(t,e,n){if((e=Je(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Pg(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const TU=new RegExp("[~\\*/\\[\\]]");function Pg(t,e,n){if(e.search(TU)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee(j.INVALID_ARGUMENT,a+t+l)}function iR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qu{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IU extends qu{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?Pg(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
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
 */function oR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class aR extends kg{}function AU(t,e,...n){let r=[];e instanceof kg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ng).length,a=i.filter(l=>l instanceof Zh).length;if(o>1||o>0&&a>0)throw new ee(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Zh extends aR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zh(e,n,r)}_apply(e){const n=this._parse(e);return lR(e._query,n),new $s(e.firestore,e.converter,cp(e._query,n))}_parse(e){const n=Gl(e.firestore);return function(i,o,a,l,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ee(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){HE(f,h);const g=[];for(const _ of f)g.push(qE(l,i,_));p={arrayValue:{values:g}}}else p=qE(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||HE(f,h),p=bU(a,o,f,h==="in"||h==="not-in");return Et.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _z(t,e,n){const r=e,s=Jh("where",t);return Zh._create(s,r,n)}class Ng extends kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ng(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:er.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)lR(o,l),o=cp(o,l)}(e._query,n),new $s(e.firestore,e.converter,cp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Og extends aR{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Og(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ee(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ee(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vl(i,o)}(e._query,this._field,this._direction);return new $s(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new jo(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function RU(t,e="asc"){const n=e,r=Jh("orderBy",t);return Og._create(r,n)}function qE(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new ee(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oA(e)&&n.indexOf("/")!==-1)throw new ee(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Xe.fromString(n));if(!ce.isDocumentKey(r))throw new ee(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hE(t,new ce(r))}if(n instanceof Bt)return hE(t,n._key);throw new ee(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function HE(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lR(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cR{convertValue(e,n="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Si(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yh(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=Ps(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);He(OA(r));const s=new _l(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Ur(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class SU extends cR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}/**
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
 */class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xg extends qu{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zc extends xg{data(e={}){return super.data(e)}}class uR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zc(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Zc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Zc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:CU(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function zo(t){t=sn(t,Bt);const e=sn(t.firestore,Er);return pU(zl(e),t._key).then(n=>fR(e,t,n))}class ef extends cR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function PU(t){t=sn(t,$s);const e=sn(t.firestore,Er),n=zl(e),r=new ef(e);return oR(t._query),mU(n,t._query).then(s=>new uR(e,r,t,s))}function yz(t,e,n){t=sn(t,Bt);const r=sn(t.firestore,Er),s=Dg(t.converter,e,n);return tf(r,[Sg(Gl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,$t.none())])}function WE(t,e,n,...r){t=sn(t,Bt);const s=sn(t.firestore,Er),i=Gl(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Kl?nR(i,"updateDoc",t._key,e,n,r):tR(i,"updateDoc",t._key,e),tf(s,[o.toMutation(t._key,$t.exists(!0))])}function kU(t){return tf(sn(t.firestore,Er),[new jh(t._key,$t.none())])}function hR(t,e){const n=sn(t.firestore,Er),r=Wo(t),s=Dg(t.converter,e);return tf(n,[Sg(Gl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function Mg(t,...e){var n,r,s;t=Je(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||jE(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(jE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let l,u,h;if(t instanceof Bt)u=sn(t.firestore,Er),h=Vh(t._key.path),l={next:f=>{e[o]&&e[o](fR(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=sn(t,$s);u=sn(f.firestore,Er),h=f._query;const p=new ef(u);l={next:g=>{e[o]&&e[o](new uR(u,p,f,g))},error:e[o+1],complete:e[o+2]},oR(t._query)}return function(p,g,_,v){const A=new Tg(v),S=new wg(g,A,_);return p.asyncQueue.enqueueAndForget(async()=>yg(await Bu(p),S)),()=>{A.$a(),p.asyncQueue.enqueueAndForget(async()=>vg(await Bu(p),S))}}(zl(u),h,a,l)}function tf(t,e){return function(r,s){const i=new mr;return r.asyncQueue.enqueueAndForget(async()=>J$(await fU(r),s,i)),i.promise}(zl(t),e)}function fR(t,e,n){const r=n.docs.get(e._key),s=new ef(t);return new xg(t,s,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const NU={maxAttempts:5};function ya(t,e){if((t=Je(t)).firestore!==e)throw new ee(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class OU extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Gl(n)}get(n){const r=ya(n,this._firestore),s=new SU(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return pe();const o=i[0];if(o.isFoundDocument())return new qu(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new qu(this._firestore,s,r._key,null,r.converter);throw pe()})}set(n,r,s){const i=ya(n,this._firestore),o=Dg(i.converter,r,s),a=Sg(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){const o=ya(n,this._firestore);let a;return a=typeof(r=Je(r))=="string"||r instanceof Kl?nR(this._dataReader,"Transaction.update",o._key,r,s,i):tR(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=ya(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ya(e,this._firestore),r=new ef(this._firestore);return super.get(e).then(s=>new xg(this._firestore,r,n._key,s._document,new Qi(!1,!1),n.converter))}}function DU(t,e,n){t=sn(t,Er);const r=Object.assign(Object.assign({},NU),n);return function(i){if(i.maxAttempts<1)throw new ee(j.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const l=new mr;return i.asyncQueue.enqueueAndForget(async()=>{const u=await dU(i);new lU(i.asyncQueue,u,a,o,l).Xa()}),l.promise}(zl(t),s=>e(new OU(t,s)),r)}(function(e,n=!0){(function(s){Bo=s})(xs),yr(new Jn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Er(new MV(r.getProvider("auth-internal")),new $V(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _l(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),wn(aE,"4.6.2",e),wn(aE,"4.6.2","esm2017")})();/**
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
 */const dR="firebasestorage.googleapis.com",pR="storageBucket",xU=2*60*1e3,MU=10*60*1e3,LU=1e3;/**
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
 */class ft extends wr{constructor(e,n,r=0){super(nd(e),`Firebase Storage: ${n} (${nd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function nd(t){return"storage/"+t}function Lg(){const t="An unknown error occurred, please check the error payload for server response.";return new ft(ot.UNKNOWN,t)}function VU(t){return new ft(ot.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FU(t){return new ft(ot.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $U(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft(ot.UNAUTHENTICATED,t)}function UU(){return new ft(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BU(t){return new ft(ot.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mR(){return new ft(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gR(){return new ft(ot.CANCELED,"User canceled the upload/download.")}function jU(t){return new ft(ot.INVALID_URL,"Invalid URL '"+t+"'.")}function qU(t){return new ft(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function HU(){return new ft(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pR+"' property when initializing the app?")}function _R(){return new ft(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WU(){return new ft(ot.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zU(){return new ft(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KU(t){return new ft(ot.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vp(t){return new ft(ot.INVALID_ARGUMENT,t)}function yR(){return new ft(ot.APP_DELETED,"The Firebase app was deleted.")}function GU(t){return new ft(ot.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qa(t,e){return new ft(ot.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function va(t){throw new ft(ot.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class En{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=En.makeFromUrl(e,n)}catch{return new En(e,"")}if(r.path==="")return r;throw qU(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},v=n===dR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",S=new RegExp(`^https?://${v}/${s}/${A}`,"i"),D=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<D.length;x++){const F=D[x],k=F.regex.exec(e);if(k){const I=k[F.indices.bucket];let y=k[F.indices.path];y||(y=""),r=new En(I,y),F.postModify(r);break}}if(r==null)throw jU(e);return r}}class QU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function YU(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...A){u||(u=!0,e.apply(null,A))}function f(A){s=setTimeout(()=>{s=null,t(g,l())},A)}function p(){i&&clearTimeout(i)}function g(A,...S){if(u){p();return}if(A){p(),h.call(null,A,...S);return}if(l()||o){p(),h.call(null,A,...S);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,f(D)}let _=!1;function v(A){_||(_=!0,p(),!u&&(s!==null?(A||(a=2),clearTimeout(s),f(0)):A||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function XU(t){t(!1)}/**
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
 */function JU(t){return t!==void 0}function ZU(t){return typeof t=="function"}function e2(t){return typeof t=="object"&&!Array.isArray(t)}function nf(t){return typeof t=="string"||t instanceof String}function zE(t){return Vg()&&t instanceof Blob}function Vg(){return typeof Blob<"u"}function KE(t,e,n,r){if(r<e)throw vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ko(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function vR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var li;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(li||(li={}));/**
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
 */function ER(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class t2{constructor(e,n,r,s,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Lc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===li.NO_ERROR,l=i.getStatus();if(!a||ER(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===li.ABORT;r(!1,new Lc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Lc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());JU(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Lg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?yR():gR();o(l)}else{const l=mR();o(l)}};this.canceled_?n(!1,new Lc(!1,null,!0)):this.backoffId_=YU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function n2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function r2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function s2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function i2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function o2(t,e,n,r,s,i,o=!0){const a=vR(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return s2(u,e),n2(u,n),r2(u,i),i2(u,r),new t2(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function a2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function l2(...t){const e=a2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vg())return new Blob(t);throw new ft(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function c2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function u2(t){if(typeof atob>"u")throw KU("base-64");return atob(t)}/**
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
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rd{constructor(e,n){this.data=e,this.contentType=n||null}}function h2(t,e){switch(t){case fr.RAW:return new rd(wR(e));case fr.BASE64:case fr.BASE64URL:return new rd(bR(t,e));case fr.DATA_URL:return new rd(d2(e),p2(e))}throw Lg()}function wR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function f2(t){let e;try{e=decodeURIComponent(t)}catch{throw Qa(fr.DATA_URL,"Malformed data URL.")}return wR(e)}function bR(t,e){switch(t){case fr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Qa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Qa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=u2(e)}catch(s){throw s.message.includes("polyfill")?s:Qa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class TR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qa(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=m2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function d2(t){const e=new TR(t);return e.base64?bR(fr.BASE64,e.rest):f2(e.rest)}function p2(t){return new TR(t).contentType}function m2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ms{constructor(e,n){let r=0,s="";zE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(zE(this.data_)){const r=this.data_,s=c2(r,e,n);return s===null?null:new ms(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ms(r,!0)}}static getBlob(...e){if(Vg()){const n=e.map(r=>r instanceof ms?r.data_:r);return new ms(l2.apply(null,n))}else{const n=e.map(o=>nf(o)?h2(fr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ms(s,!0)}}uploadData(){return this.data_}}/**
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
 */function IR(t){let e;try{e=JSON.parse(t)}catch{return null}return e2(e)?e:null}/**
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
 */function g2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function y2(t,e){return e}class en{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||y2}}let Vc=null;function v2(t){return!nf(t)||t.length<2?t:AR(t)}function RR(){if(Vc)return Vc;const t=[];t.push(new en("bucket")),t.push(new en("generation")),t.push(new en("metageneration")),t.push(new en("name","fullPath",!0));function e(i,o){return v2(o)}const n=new en("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new en("size");return s.xform=r,t.push(s),t.push(new en("timeCreated")),t.push(new en("updated")),t.push(new en("md5Hash",null,!0)),t.push(new en("cacheControl",null,!0)),t.push(new en("contentDisposition",null,!0)),t.push(new en("contentEncoding",null,!0)),t.push(new en("contentLanguage",null,!0)),t.push(new en("contentType",null,!0)),t.push(new en("metadata","customMetadata",!0)),Vc=t,Vc}function E2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new En(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function w2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return E2(r,t),r}function SR(t,e,n){const r=IR(e);return r===null?null:w2(t,r,n)}function b2(t,e,n,r){const s=IR(e);if(s===null||!nf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Ko(p,n,r),_=vR({alt:"media",token:u});return g+_})[0]}function CR(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Pi{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Mr(t){if(!t)throw Lg()}function Fg(t,e){function n(r,s){const i=SR(t,s,e);return Mr(i!==null),i}return n}function T2(t,e){function n(r,s){const i=SR(t,s,e);return Mr(i!==null),b2(i,s,t.host,t._protocol)}return n}function Yl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=UU():s=$U():n.getStatus()===402?s=FU(t.bucket):n.getStatus()===403?s=BU(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $g(t){const e=Yl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=VU(t.path)),i.serverResponse=s.serverResponse,i}return n}function I2(t,e,n){const r=e.fullServerUrl(),s=Ko(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Pi(s,i,Fg(t,n),o);return a.errorHandler=$g(e),a}function A2(t,e,n){const r=e.fullServerUrl(),s=Ko(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Pi(s,i,T2(t,n),o);return a.errorHandler=$g(e),a}function R2(t,e){const n=e.fullServerUrl(),r=Ko(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,u){}const a=new Pi(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=$g(e),a}function S2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=S2(null,e)),r}function C2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let x=0;x<2;x++)D=D+Math.random().toString().slice(2);return D}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=PR(e,r,s),h=CR(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=ms.getBlob(f,r,p);if(g===null)throw _R();const _={name:u.fullPath},v=Ko(i,t.host,t._protocol),A="POST",S=t.maxUploadRetryTime,O=new Pi(v,A,Fg(t,n),S);return O.urlParams=_,O.headers=o,O.body=g.uploadData(),O.errorHandler=Yl(e),O}class Hu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Ug(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Mr(!1)}return Mr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function P2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=PR(e,r,s),a={name:o.fullPath},l=Ko(i,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=CR(o,n),p=t.maxUploadRetryTime;function g(v){Ug(v);let A;try{A=v.getResponseHeader("X-Goog-Upload-URL")}catch{Mr(!1)}return Mr(nf(A)),A}const _=new Pi(l,u,g,p);return _.urlParams=a,_.headers=h,_.body=f,_.errorHandler=Yl(e),_}function k2(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const h=Ug(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Mr(!1)}f||Mr(!1);const p=Number(f);return Mr(!isNaN(p)),new Hu(p,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Pi(n,o,i,a);return l.headers=s,l.errorHandler=Yl(e),l}const GE=256*1024;function N2(t,e,n,r,s,i,o,a){const l=new Hu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw WU();const u=l.total-l.current;let h=u;s>0&&(h=Math.min(h,s));const f=l.current,p=f+h;let g="";h===0?g="finalize":u===h?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(f,p);if(v===null)throw _R();function A(x,F){const k=Ug(x,["active","final"]),I=l.current+h,y=r.size();let b;return k==="final"?b=Fg(e,i)(x,F):b=null,new Hu(I,y,k==="final",b)}const S="POST",O=e.maxUploadRetryTime,D=new Pi(n,S,A,O);return D.headers=_,D.body=v.uploadData(),D.progressCallback=a||null,D.errorHandler=Yl(t),D}const un={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function sd(t){switch(t){case"running":case"pausing":case"canceling":return un.RUNNING;case"paused":return un.PAUSED;case"success":return un.SUCCESS;case"canceled":return un.CANCELED;case"error":return un.ERROR;default:return un.ERROR}}/**
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
 */class O2{constructor(e,n,r){if(ZU(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Ui(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class D2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=li.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=li.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=li.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw va("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw va("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw va("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw va("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw va("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class x2 extends D2{initXhr(){this.xhr_.responseType="text"}}function ei(){return new x2}/**
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
 */class M2{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=RR(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(ot.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(ER(s.status,[]))if(i)s=mR();else{this.sleepTime=Math.max(this.sleepTime*2,LU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(ot.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=P2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ei,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=k2(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ei,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=GE*this._chunkMultiplier,n=new Hu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=N2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ei,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){GE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=I2(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ei,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=C2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ei,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=gR(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=sd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new O2(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(sd(this._state)){case un.SUCCESS:Ui(this._resolve.bind(null,this.snapshot))();break;case un.CANCELED:case un.ERROR:const n=this._reject;Ui(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(sd(this._state)){case un.RUNNING:case un.PAUSED:e.next&&Ui(e.next.bind(e,this.snapshot))();break;case un.SUCCESS:e.complete&&Ui(e.complete.bind(e))();break;case un.CANCELED:case un.ERROR:e.error&&Ui(e.error.bind(e,this._error))();break;default:e.error&&Ui(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class wi{constructor(e,n){this._service=e,n instanceof En?this._location=n:this._location=En.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wi(e,n)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AR(this._location.path)}get storage(){return this._service}get parent(){const e=g2(this._location.path);if(e===null)return null;const n=new En(this._location.bucket,e);return new wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GU(e)}}function L2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new M2(t,new ms(e),n)}function V2(t){t._throwIfRoot("getDownloadURL");const e=A2(t.storage,t._location,RR());return t.storage.makeRequestWithTokens(e,ei).then(n=>{if(n===null)throw zU();return n})}function F2(t){t._throwIfRoot("deleteObject");const e=R2(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ei)}function $2(t,e){const n=_2(t._location.path,e),r=new En(t._location.bucket,n);return new wi(t.storage,r)}/**
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
 */function U2(t){return/^[A-Za-z]+:\/\//.test(t)}function B2(t,e){return new wi(t,e)}function kR(t,e){if(t instanceof Bg){const n=t;if(n._bucket==null)throw HU();const r=new wi(n,n._bucket);return e!=null?kR(r,e):r}else return e!==void 0?$2(t,e):t}function j2(t,e){if(e&&U2(e)){if(t instanceof Bg)return B2(t,e);throw vp("To use ref(service, url), the first argument must be a Storage instance.")}else return kR(t,e)}function QE(t,e){const n=e==null?void 0:e[pR];return n==null?null:En.makeFromBucketSpec(n,t)}function q2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:LT(s,t.app.options.projectId))}class Bg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=dR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xU,this._maxUploadRetryTime=MU,this._requests=new Set,s!=null?this._bucket=En.makeFromBucketSpec(s,this._host):this._bucket=QE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=QE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){KE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){KE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new QU(yR());{const o=o2(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const YE="@firebase/storage",XE="0.12.5";/**
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
 */const NR="storage";function Ez(t,e,n){return t=Je(t),L2(t,e,n)}function wz(t){return t=Je(t),V2(t)}function H2(t){return t=Je(t),F2(t)}function W2(t,e){return t=Je(t),j2(t,e)}function z2(t=Sh(),e){t=Je(t);const r=Rh(t,NR).getImmediate({identifier:e}),s=DT("storage");return s&&K2(r,...s),r}function K2(t,e,n,r={}){q2(t,e,n,r)}function G2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Bg(n,r,s,e,xs)}function Q2(){yr(new Jn(NR,G2,"PUBLIC").setMultipleInstances(!0)),wn(YE,XE,""),wn(YE,XE,"esm2017")}Q2();const id=new WeakMap;function OR(t,e){return id.has(e)||id.set(e,{f:{},r:{},s:{},u:{}}),id.get(e)}function Y2(t,e,n,r){if(!t)return n;const[s,i]=DR(t);if(!s)return n;const o=OR(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function X2(t,e,n,r){if(!t)return;const[s,i]=DR(t);if(!s)return;const o=OR(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(cr),a}function DR(t){return Vx(t)||Fx(t)?["f",t.path]:$x(t)?["r",t.toString()]:Ux(t)?["s",t.toString()]:[]}const od=new WeakMap;function J2(t,e,n){const r=Dl();od.has(r)||od.set(r,new Map);const s=od.get(r),i=X2(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):cr}const Z2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Ep(t,e,n,r){if(!Mx(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[f,p]=h;Object.getOwnPropertyNames(a).forEach(g=>{const _=Object.getOwnPropertyDescriptor(a,g);_&&!_.enumerable&&Object.defineProperty(f,g,_)});for(const g in a){const _=a[g];if(_==null||_ instanceof Date||_ instanceof bt||_ instanceof Yh)f[g]=_;else if(km(_)){const v=u+g;f[g]=v in n?l[g]:_.path,p[v]=_.converter?_:_.withConverter(r.converter)}else if(Array.isArray(_)){f[g]=Array(_.length);for(let v=0;v<_.length;v++){const A=_[v];A&&A.path in i&&(f[g][v]=i[A.path])}o(_,l[g]||f[g],u+g+".",[f[g],p])}else Ii(_)?(f[g]={},o(_,l[g],u+g+".",[f[g],p])):f[g]=_}}return o(t,e,"",s),s}const jg={reset:!1,wait:!0,maxRefDepth:2,converter:Z2,snapshotOptions:{serverTimestamps:"estimate"}};function Wu(t){for(const e in t)t[e].unsub()}function wp(t,e,n,r,s,i,o,a,l){const[u,h]=Ep(r.data(t.snapshotOptions),Pm(e,n),s,t);i.set(e,n,u),bp(t,e,n,s,h,i,o,a,l)}function e4({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let u=cr;return a.once?zo(t).then(h=>{h.exists()?wp(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):u=Mg(t,h=>{h.exists()?wp(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{u(),Wu(l)}}function bp(t,e,n,r,s,i,o,a,l){const u=Object.keys(s);if(Object.keys(r).filter(v=>u.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const p=u.length,g=Object.create(null);function _(v){v in g&&++f>=p&&a(n)}u.forEach(v=>{const A=r[v],S=s[v],O=`${n}.${v}`;if(g[O]=!0,A)if(A.path!==S.path)A.unsub();else return;r[v]={data:()=>Pm(e,O),unsub:e4({ref:S,target:e,path:O,depth:o,ops:i,resolve:_.bind(null,O),reject:l},t),path:S.path}})}function t4(t,e,n,r,s,i){const o=Object.assign({},jg,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,f="value";let p=Ae(u?[]:t.value);u||n.set(t,f,[]);const g=r;let _,v=cr;const A=[],S={added:({newIndex:D,doc:x})=>{A.splice(D,0,Object.create(null));const F=A[D],[k,I]=Ep(x.data(l),void 0,F,o);n.add(Rr(p),D,k),bp(o,p,`${f}.${D}`,F,I,n,0,r.bind(null,x),s)},modified:({oldIndex:D,newIndex:x,doc:F})=>{const k=Rr(p),I=A[D],y=k[D],[b,P]=Ep(F.data(l),y,I,o);A.splice(x,0,I),n.remove(k,D),n.add(k,x,b),bp(o,p,`${f}.${x}`,I,P,n,0,r,s)},removed:({oldIndex:D})=>{const x=Rr(p);n.remove(x,D),Wu(A.splice(D,1)[0])}};function O(D){const x=D.docChanges(a);if(!_&&x.length){_=!0;let F=0;const k=x.length,I=Object.create(null);for(let y=0;y<k;y++)I[x[y].doc.id]=!0;r=y=>{y&&y.id in I&&++F>=k&&(u&&(n.set(t,f,Rr(p)),p=t),g(Rr(p)),r=cr)}}x.forEach(F=>{S[F.type](F)}),x.length||(u&&(n.set(t,f,Rr(p)),p=t),r(Rr(p)))}return h?PU(e).then(O).catch(s):v=Mg(e,O,s),D=>{if(v(),D){const x=typeof D=="function"?D():[];n.set(t,f,x)}A.forEach(Wu)}}function n4(t,e,n,r,s,i){const o=Object.assign({},jg,i),a="value",l=Object.create(null);r=Bx(r,()=>Pm(t,a));let u=cr;function h(f){f.exists()?wp(o,t,a,f,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?zo(e).then(h).catch(s):u=Mg(e,h,s),f=>{if(u(),f){const p=typeof f=="function"?f():null;n.set(t,a,p)}Wu(l)}}const JE=Symbol();function xR(t,e){let n=cr;const r=Object.assign({},jg,e),s=Rr(t),i=r.target||Ae();qx()&&(r.once=!0);const o=Y2(s,r.ssrKey,JE,Dl()),a=o!==JE;a&&(i.value=o);let l=!a;const u=Ae(!1),h=Ae(),f=kb(),p=Qp();let g=cr;function _(){let S=Rr(t);const O=new Promise((D,x)=>{if(n(r.reset),!S)return n=cr,D(null);u.value=l,l=!0,S.converter||(S=S.withConverter(r.converter)),n=(km(S)?n4:t4)(i,S,r4,D,x,r)}).catch(D=>(f.value===O&&(h.value=D),Promise.reject(D))).finally(()=>{f.value===O&&(u.value=!1)});f.value=O}let v=cr;(st(t)||typeof t=="function")&&(v=Gn(t,_)),_(),s&&(g=J2(f.value,s,r.ssrKey)),Rs()&&Yb(()=>f.value),p&&db(A);function A(S=r.reset){v(),g(),n(S)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>A}})}const r4={set:(t,e,n)=>Dx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function s4(t,e){return xR(t,{target:Ae([]),...e})}function bz(t,e){return xR(t,e)}function MR(t){return Qh(Dl(t))}function i4(t){return a4({initialUser:t,dependencies:{popupRedirectResolver:SI,persistence:[TI,_I,Am]}})}const o4=Symbol("VueFireAuth");function a4({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=l4(n,r,e,t);Kx(s,i)}}function l4(t,e,n,r,s=cI(t,r)){const i=Hx(t,e).run(()=>Ae(n));return Wx.set(t,i),e.provide(o4,s),[i,s]}function c4(t){return z2(Dl(t))}function u4(t,{firebaseApp:e,modules:n=[]}){t.provide(kI,e);for(const r of n)r(e,t)}const h4={apiKey:"AIzaSyDpvp2iGRthK7mDzAgab-Xs237-HVjy4PE",authDomain:"",projectId:"posvue-5faa0",storageBucket:"",messagingSenderId:"732919111902",appId:"1:732919111902:web:85309f13d3bce46835a24f"},qg=qT(h4),f4=Qh(qg),d4=Cm(qg);var LR=["__key","__init","__shim","__original","__index","__prevKey"];function Go(){return Math.random().toString(36).substring(2,15)}function p4(t,e){return[...t instanceof Set?t:new Set(t)]}function Ee(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function on(t,e,n=!0,r=["__key"]){if(t===e)return!0;if(typeof e=="object"&&typeof t=="object"){if(t instanceof Map||t instanceof Set)return!1;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return m4(t,e);if(t===null||e===null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s of r)if((s in t||s in e)&&t[s]!==e[s])return!1;for(const s in t)if(!(s in e)||t[s]!==e[s]&&!n||n&&!on(t[s],e[s],n,r))return!1;return!0}return!1}function m4(t,e){return t.source===e.source&&t.flags.split("").sort().join("")===e.flags.split("").sort().join("")}function Dn(t){const e=typeof t;if(e==="number")return!1;if(t===void 0)return!0;if(e==="string")return t==="";if(e==="object"){if(t===null)return!0;for(const n in t)return!1;return!(t instanceof RegExp||t instanceof Date)}return!1}function g4(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _4(t){const e=`^${g4(t)}$`,n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][0-9]|3[01])",D:"([012]?[0-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"},r=Object.keys(n);return new RegExp(r.reduce((s,i)=>s.replace(i,n[i]),e))}function zu(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ya(t){return zu(t)||Array.isArray(t)}function Ao(t){if(zu(t)===!1||t.__FKNode__||t.__POJO__===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(zu(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)}var Ns=(t,e,n=!1,r=!1)=>{if(e===null)return null;const s={};if(typeof e=="string")return e;for(const i in t)if(Ee(e,i)&&(e[i]!==void 0||!r)){if(n&&Array.isArray(t[i])&&Array.isArray(e[i])){s[i]=t[i].concat(e[i]);continue}if(e[i]===void 0)continue;Ao(t[i])&&Ao(e[i])?s[i]=Ns(t[i],e[i],n,r):s[i]=e[i]}else s[i]=t[i];for(const i in e)!Ee(s,i)&&e[i]!==void 0&&(s[i]=e[i]);return s};function y4(t){if(t[0]!=='"'&&t[0]!=="'"||t[0]!==t[t.length-1])return!1;const e=t[0];for(let n=1;n<t.length;n++)if(t[n]===e&&(n===1||t[n-1]!=="\\")&&n!==t.length-1)return!1;return!0}function v4(t){if(!t.length)return"";let e="",n="";for(let r=0;r<t.length;r++){const s=t.charAt(r);(s!=="\\"||n==="\\")&&(e+=s),n=s}return e}function Bi(...t){return t.reduce((e,n)=>{const{value:r,name:s,modelValue:i,config:o,plugins:a,...l}=n;return Object.assign(e,l)},{})}function E4(t){const e=[];let n="",r=0,s="",i="";for(let o=0;o<t.length;o++){const a=t.charAt(o);a===s&&i!=="\\"?s="":(a==="'"||a==='"')&&!s&&i!=="\\"?s=a:a==="("&&!s?r++:a===")"&&!s&&r--,a===","&&!s&&r===0?(e.push(n),n=""):(a!==" "||s)&&(n+=a),i=a}return n&&e.push(n),e}function ZE(t,e){const n={},r=e.filter(i=>i instanceof RegExp),s=new Set(e);for(const i in t)!s.has(i)&&!r.some(o=>o.test(i))&&(n[i]=t[i]);return n}function ew(t,e){const n={},r=e.filter(s=>s instanceof RegExp);return e.forEach(s=>{s instanceof RegExp||(n[s]=t[s])}),Object.keys(t).forEach(s=>{r.some(i=>i.test(s))&&(n[s]=t[s])}),n}function co(t){return t.replace(/-([a-z0-9])/gi,(e,n)=>n.toUpperCase())}function VR(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,r)=>n+"-"+r.toLowerCase()).replace(" ","-").toLowerCase()}function Tp(t,e=LR){if(t!==null&&typeof t=="object"){let n;if(Array.isArray(t)?n=[...t]:Ao(t)&&(n={...t}),n)return b4(t,n,e),n}return t}function Ro(t,e=LR){if(t===null||t instanceof RegExp||t instanceof Date||t instanceof Map||t instanceof Set||typeof File=="function"&&t instanceof File)return t;let n;Array.isArray(t)?n=t.map(r=>typeof r=="object"?Ro(r,e):r):n=Object.keys(t).reduce((r,s)=>(r[s]=typeof t[s]=="object"?Ro(t[s],e):t[s],r),{});for(const r of e)r in t&&Object.defineProperty(n,r,{enumerable:!1,value:t[r]});return n}function Wn(t){return typeof t=="object"?Ro(t):t}function w4(t,e){if(!t||typeof t!="object")return null;const n=e.split(".");let r=t;for(const s in n){const i=n[s];if(Ee(r,i)&&(r=r[i]),+s===n.length-1)return r;if(!r||typeof r!="object")return null}return null}function zn(t){return t!==void 0&&t!=="false"&&t!==!1?!0:void 0}function So(t){return Object.isFrozen(t)?t:Object.defineProperty(t,"__init",{enumerable:!1,value:!0})}function Hg(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g," ").trim().replace(/\s+/g,"-")}function b4(t,e,n){for(const r of n)r in t&&Object.defineProperty(e,r,{enumerable:!1,value:t[r]});return e}function T4(t){let e=!1;return(...n)=>{if(!e)return e=!0,queueMicrotask(()=>e=!1),t(...n)}}function I4(t){if(!(t==="false"||t===!1))return!0}function Wg(){const t=[];let e=0;const n=s=>t.push(s),r=s=>{const i=t[e];return typeof i=="function"?i(s,o=>(e++,r(o))):(e=0,s)};return n.dispatch=r,n.unshift=s=>t.unshift(s),n.remove=s=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)},n}function FR(){const t=new Map,e=new Map;let n;const r=(s,i)=>{if(n){n.set(i.name,[s,i]);return}t.has(i.name)&&t.get(i.name).forEach(o=>{(i.origin===s||o.modifiers.includes("deep"))&&o.listener(i)}),i.bubble&&s.bubble(i)};return r.flush=()=>{t.clear(),e.clear(),n==null||n.clear()},r.on=(s,i,o="push")=>{const[a,...l]=s.split("."),u=i.receipt||Go(),h={modifiers:l,event:a,listener:i,receipt:u};return t.has(a)?t.get(a)[o](h):t.set(a,[h]),e.has(u)?e.get(u)[o](a):e.set(u,[a]),u},r.off=s=>{var i;e.has(s)&&((i=e.get(s))==null||i.forEach(o=>{const a=t.get(o);Array.isArray(a)&&t.set(o,a.filter(l=>l.receipt!==s))}),e.delete(s))},r.pause=s=>{n||(n=new Map),s&&s.walk(i=>i._e.pause())},r.play=s=>{if(!n)return;const i=n;n=void 0,i.forEach(([o,a])=>r(o,a)),s&&s.walk(o=>o._e.play())},r}function A4(t,e,n,r,s=!0,i){return e._e(t,{payload:r,name:n,bubble:s,origin:t,meta:i}),t}function R4(t,e,n){return Jl(t.parent)&&t.parent._e(t.parent,n),t}function S4(t,e,n,r,s){return e._e.on(n,r,s)}function C4(t,e,n){return e._e.off(n),t}var zg=Wg();zg((t,e)=>(t.message||(t.message=`E${t.code}`),e(t)));var Kg=Wg();Kg((t,e)=>{t.message||(t.message=`W${t.code}`);const n=e(t);return console&&typeof console.warn=="function"&&console.warn(n.message),n});function ki(t,e={}){Kg.dispatch({code:t,data:e})}function In(t,e={}){throw Error(zg.dispatch({code:t,data:e}).message)}function An(t,e){return{blocking:!1,key:Go(),meta:{},type:"state",visible:!0,...t}}var tw={apply:x4,set:k4,remove:$R,filter:O4,reduce:D4,release:V4,touch:N4};function P4(t=!1){const e={};let n,r=t,s=[];const i=new Map;let o;const a=new Proxy(e,{get(...l){const[u,h]=l;return h==="buffer"?r:h==="_b"?s:h==="_m"?i:h==="_r"?o:Ee(tw,h)?tw[h].bind(null,e,a,n):Reflect.get(...l)},set(l,u,h){return u==="_n"?(n=h,o==="__n"&&UR(n,a),!0):u==="_b"?(s=h,!0):u==="buffer"?(r=h,!0):u==="_r"?(o=h,!0):(In(101,n),!1)}});return a}function k4(t,e,n,r){if(e.buffer)return e._b.push([[r]]),e;if(t[r.key]!==r){if(typeof r.value=="string"&&r.meta.localize!==!1){const i=r.value;r.value=n.t(r),r.value!==i&&(r.meta.locale=n.props.locale)}const s=`message-${Ee(t,r.key)?"updated":"added"}`;t[r.key]=Object.freeze(n.hook.message.dispatch(r)),n.emit(s,r)}return e}function N4(t,e){for(const n in t){const r={...t[n]};e.set(r)}}function $R(t,e,n,r){if(Ee(t,r)){const s=t[r];delete t[r],n.emit("message-removed",s)}return e.buffer===!0&&(e._b=e._b.filter(s=>(s[0]=s[0].filter(i=>i.key!==r),s[1]||s[0].length))),e}function O4(t,e,n,r,s){for(const i in t){const o=t[i];(!s||o.type===s)&&!r(o)&&$R(t,e,n,i)}}function D4(t,e,n,r,s){for(const i in t){const o=t[i];s=r(s,o)}return s}function x4(t,e,n,r,s){if(Array.isArray(r)){if(e.buffer){e._b.push([r,s]);return}const i=new Set(r.map(o=>(e.set(o),o.key)));typeof s=="string"?e.filter(o=>o.type!==s||i.has(o.key)):typeof s=="function"&&e.filter(o=>!s(o)||i.has(o.key))}else for(const i in r){const o=n.at(i);o?o.store.apply(r[i],s):L4(n,e,i,r[i],s)}}function M4(t,...e){const n=`${t.name}-set`,r=s=>An({key:Hg(s),type:"error",value:s,meta:{source:n,autoClear:!0}});return e.filter(s=>!!s).map(s=>{if(typeof s=="string"&&(s=[s]),Array.isArray(s))return s.map(i=>r(i));{const i={};for(const o in s)Array.isArray(s[o])?i[o]=s[o].map(a=>r(a)):i[o]=[r(s[o])];return i}})}function L4(t,e,n,r,s){var o;const i=e._m;i.has(n)||i.set(n,[]),e._r||(e._r=UR(t,e)),(o=i.get(n))==null||o.push([r,s])}function UR(t,e){return t.on("child.deep",({payload:n})=>{e._m.forEach((r,s)=>{t.at(s)===n&&(r.forEach(([i,o])=>{n.store.apply(i,o)}),e._m.delete(s))}),e._m.size===0&&e._r&&(t.off(e._r),e._r=void 0)})}function V4(t,e){e.buffer=!1,e._b.forEach(([n,r])=>e.apply(n,r)),e._b=[]}function F4(){const t={};let e;return{count:(...n)=>$4(e,t,...n),init(n){e=n,n.on("message-added.deep",nw(t,1)),n.on("message-removed.deep",nw(t,-1))},merge:n=>rw(e,t,n),settled(n){return Ee(t,n)?t[n].promise:Promise.resolve()},unmerge:n=>rw(e,t,n,!0),value(n){return Ee(t,n)?t[n].count:0}}}function $4(t,e,n,r,s=0){if(r=U4(r||n),!Ee(e,n)){const i={condition:r,count:0,name:n,node:t,promise:Promise.resolve(),resolve:()=>{}};e[n]=i,s=t.store.reduce((o,a)=>o+i.condition(a)*1,s),t.each(o=>{o.ledger.count(i.name,i.condition),s+=o.ledger.value(i.name)})}return BR(e[n],s).promise}function U4(t){return typeof t=="function"?t:e=>e.type===t}function BR(t,e){const n=t.count,r=t.count+e;return t.count=r,n===0&&r!==0?(t.node.emit(`unsettled:${t.name}`,t.count,!1),t.promise=new Promise(s=>t.resolve=s)):n!==0&&r===0&&(t.node.emit(`settled:${t.name}`,t.count,!1),t.resolve()),t.node.emit(`count:${t.name}`,t.count,!1),t}function nw(t,e){return n=>{for(const r in t){const s=t[r];s.condition(n.payload)&&BR(s,e)}}}function rw(t,e,n,r=!1){const s=t;for(const i in e){const o=e[i].condition;r||n.ledger.count(i,o);const a=n.ledger.value(i)*(r?-1:1);if(t){do t.ledger.count(i,o,a),t=t.parent;while(t);t=s}}}var Gg=new Map,eu=new Map,Qg=FR();function B4(t){t.props.id&&(Gg.set(t.props.id,t),eu.set(t,t.props.id),Qg(t,{payload:t,name:t.props.id,bubble:!1,origin:t}))}function j4(t){if(eu.has(t)){const e=eu.get(t);eu.delete(t),Gg.delete(e),Qg(t,{payload:null,name:e,bubble:!1,origin:t})}}function Xl(t){return Gg.get(t)}function q4(t,e){return Qg.on(t,e)}function Ip(t,e,n){let r=!0;return e in t.config._t?r=!1:t.emit(`config:${e}`,n,!1),e in t.props||(t.emit("prop",{prop:e,value:n}),t.emit(`prop:${e}`,n)),r}function H4(t={}){const e=new Set,n={...t,_add:s=>e.add(s),_rm:s=>e.delete(s)};return new Proxy(n,{set(s,i,o,a){return typeof i=="string"&&e.forEach(l=>Ip(l,i,o)),Reflect.set(s,i,o,a)}})}function jR(t,e){const n=(e||document).getElementById(t);if(n instanceof HTMLFormElement){const r=new Event("submit",{cancelable:!0,bubbles:!0});n.dispatchEvent(r);return}ki(151,t)}function W4(t){const e=n=>{for(const r in n.store){const s=n.store[r];s.type==="error"||s.type==="ui"&&r==="incomplete"?n.store.remove(r):s.type==="state"&&n.store.set({...s,value:!1})}};e(t),t.walk(e)}function qR(t,e){const n=typeof t=="string"?Xl(t):t;if(n){const r=o=>Wn(o.props.initial)||(o.type==="group"?{}:o.type==="list"?[]:void 0);n._e.pause(n);const s=Wn(e);return e&&!Dn(e)&&(n.props.initial=Ya(s)?So(s):s,n.props._init=n.props.initial),n.input(r(n),!1),n.walk(o=>{o.type==="list"&&o.sync||o.input(r(o),!1)}),n.input(Dn(s)&&s?s:r(n),!1),n.type!=="input"&&e&&!Dn(e)&&Ya(e)&&n.walk(o=>{o.props.initial=Ya(o.value)?So(o.value):o.value,o.props._init=o.props.initial}),n._e.play(n),W4(n),n.emit("reset",n),n}ki(152,t)}var z4={delimiter:".",delay:0,locale:"en",rootClasses:t=>({[`formkit-${VR(t)}`]:!0})},HR=Symbol("index"),Ap=Symbol("removed"),Rp=Symbol("moved"),WR=Symbol("inserted");function K4(t){return t.type==="list"&&Array.isArray(t._value)}function Jl(t){return t&&typeof t=="object"&&t.__FKNode__===!0}var tu=(t,e,n)=>{In(102,[t,n])},G4={_c:Fe(mB,tu,!1),add:Fe(aB),addProps:Fe(oB),address:Fe(_B,tu,!1),at:Fe(yB),bubble:Fe(R4),clearErrors:Fe(SB),calm:Fe(rB),config:Fe(!1),define:Fe(iB),disturb:Fe(nB),destroy:Fe(sB),extend:Fe(PB),hydrate:Fe(eB),index:Fe(pB,dB,!1),input:Fe(GR),each:Fe(uB),emit:Fe(A4),find:Fe(EB),on:Fe(S4),off:Fe(C4),parent:Fe(!1,lB),plugins:Fe(!1),remove:Fe(cB),root:Fe(bB,tu,!1),reset:Fe(AB),resetConfig:Fe(fB),setErrors:Fe(RB),submit:Fe(IB),t:Fe(TB),use:Fe(Yg),name:Fe(gB,!1,!1),walk:Fe(hB)};function Q4(){return new Map(Object.entries(G4))}function Fe(t,e,n=!0){return{get:t?(r,s)=>n?(...i)=>t(r,s,...i):t(r,s):!1,set:e!==void 0?e:tu.bind(null)}}function Y4(){const t=new Map;return new Proxy(t,{get(e,n){return t.has(n)||t.set(n,Wg()),t.get(n)}})}var zR=0,X4=0;function J4(t){var e,n;return((e=t.parent)==null?void 0:e.type)==="list"?HR:t.name||`${((n=t.props)==null?void 0:n.type)||"input"}_${++zR}`}function KR(t){return t.type==="group"?So(t.value&&typeof t.value=="object"&&!Array.isArray(t.value)?t.value:{}):t.type==="list"?So(Array.isArray(t.value)?t.value:[]):t.value}function GR(t,e,n,r=!0){return e._value=Z4(t,t.hook.input.dispatch(n)),t.emit("input",e._value),t.isCreated&&t.type==="input"&&on(e._value,e.value)&&!t.props.mergeStrategy?(t.emit("commitRaw",e.value),e.settled):(e.isSettled&&t.disturb(),r?(e._tmo&&clearTimeout(e._tmo),e._tmo=setTimeout(Ku,t.props.delay,t,e)):Ku(t,e),e.settled)}function Z4(t,e){switch(t.type){case"input":break;case"group":(!e||typeof e!="object")&&In(107,[t,e]);break;case"list":Array.isArray(e)||In(108,[t,e]);break}return e}function Ku(t,e,n=!0,r=!0){e._value=e.value=t.hook.commit.dispatch(e._value),t.type!=="input"&&r&&t.hydrate(),t.emit("commitRaw",e.value),t.emit("commit",e.value),n&&t.calm()}function QR(t,{name:e,value:n,from:r}){if(!Object.isFrozen(t._value)){if(K4(t)){const s=n===Ap?[]:n===Rp&&typeof r=="number"?t._value.splice(r,1):[n];t._value.splice(e,n===Rp||r===WR?0:1,...s);return}n!==Ap?t._value[e]=n:delete t._value[e]}}function eB(t,e){const n=e._value;return t.type==="list"&&t.sync&&tB(t,e),e.children.forEach(r=>{if(typeof n=="object")if(r.name in n){const s=r.type!=="input"||n[r.name]&&typeof n[r.name]=="object"?So(n[r.name]):n[r.name];if(!r.isSettled||(!Ya(s)||r.props.mergeStrategy)&&on(s,r._value))return;r.input(s,!1)}else(t.type!=="list"||typeof r.name=="number")&&QR(e,{name:r.name,value:r.value}),n.__init||(r.type==="group"?r.input({},!1):r.type==="list"?r.input([],!1):r.input(void 0,!1))}),t}function tB(t,e){const n=t._value;if(!Array.isArray(n))return;const r=[],s=new Set(e.children),i=new Map;n.forEach((a,l)=>{if(e.children[l]&&e.children[l]._value===a)r.push(e.children[l]),s.delete(e.children[l]);else{r.push(null);const u=i.get(a)||[];u.push(l),i.set(a,u)}}),s.size&&i.size&&s.forEach(a=>{if(i.has(a._value)){const l=i.get(a._value),u=l.shift();r[u]=a,s.delete(a),l.length||i.delete(a._value)}});const o=[];for(i.forEach(a=>{o.push(...a)});s.size&&o.length;){const a=s.values().next().value,l=o.shift();if(l===void 0)break;r[l]=a,s.delete(a)}o.forEach((a,l)=>{r[a]=DB({value:l})}),s.size&&s.forEach(a=>{if(!("__FKP"in a)){const l=a._c.parent;if(!l||xB(l))return;l.ledger.unmerge(a),a._c.parent=null,a.destroy()}}),e.children=r}function nB(t,e){var n;return e._d<=0&&(e.isSettled=!1,t.emit("settled",!1,!1),e.settled=new Promise(r=>{e._resolve=r}),t.parent&&((n=t.parent)==null||n.disturb())),e._d++,t}function rB(t,e,n){var r;if(n!==void 0&&t.type!=="input"){QR(e,n);const s=!!(t.config.mergeStrategy&&t.config.mergeStrategy[n.name]);return Ku(t,e,!0,s)}e._d>0&&e._d--,e._d===0&&(e.isSettled=!0,t.emit("settled",!0,!1),t.parent&&((r=t.parent)==null||r.calm({name:t.name,value:e.value})),e._resolve&&e._resolve(e.value))}function sB(t,e){t.emit("destroying",t),t.store.filter(()=>!1),t.parent&&t.parent.remove(t),j4(t),t.emit("destroyed",t),e._e.flush(),e._value=e.value=void 0;for(const n in e.context)delete e.context[n];e.plugins.clear(),e.context=null}function iB(t,e,n){e.type=n.type;const r=Ro(n);t.props.__propDefs=YR(t.props.__propDefs??[],(r==null?void 0:r.props)||[]),r.props=t.props.__propDefs,e.props.definition=r,e.value=e._value=KR({type:t.type,value:e.value}),n.forceTypeProp&&(t.props.type&&(t.props.originalType=t.props.type),e.props.type=n.forceTypeProp),n.family&&(e.props.family=n.family),n.features&&n.features.forEach(s=>s(t)),n.props&&t.addProps(n.props),t.emit("defined",n)}function oB(t,e,n){const r=Array.isArray(n)?n:Object.keys(n),s=Array.isArray(n)?{}:r.reduce((o,a)=>("default"in n[a]&&(o[a]=n[a].default),o),{});if(t.props.attrs){const o={...t.props.attrs};t.props._emit=!1;for(const l in o){const u=co(l);r.includes(u)&&(t.props[u]=o[l],delete o[l])}Array.isArray(n)||r.forEach(l=>{"default"in n[l]&&t.props[l]===void 0&&(t.props[l]=s[l])});const a=Wn(e._value);t.props.initial=t.type!=="input"?So(a):a,t.props._emit=!0,t.props.attrs=o}const i=YR(t.props.__propDefs??[],n);return t.props.definition&&(t.props.definition.props=i),t.props.__propDefs=i,t.emit("added-props",n),t}function Sp(t){return Array.isArray(t)?t.reduce((e,n)=>(e[n]={},e),{}):t}function YR(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):Ns(Sp(t),Sp(e))}function aB(t,e,n,r){if(t.type==="input"&&In(100,t),n.parent&&n.parent!==t&&n.parent.remove(n),!e.children.includes(n)){if(r!==void 0&&t.type==="list"){const s=e.children[r];s&&"__FKP"in s?(n._c.uid=s.uid,e.children.splice(r,1,n)):e.children.splice(r,0,n),Array.isArray(t.value)&&t.value.length<e.children.length&&t.disturb().calm({name:r,value:n.value,from:WR})}else e.children.push(n);n.isSettled||t.disturb()}if(n.parent!==t){if(n.parent=t,n.parent!==t)return t.remove(n),n.parent.add(n),t}else n.use(t.plugins);return Ku(t,e,!1),t.ledger.merge(n),t.emit("child",n),t}function lB(t,e,n,r){return Jl(r)?(t.parent&&t.parent!==r&&t.parent.remove(t),e.parent=r,t.resetConfig(),r.children.includes(t)?t.use(r.plugins):r.add(t),!0):r===null?(e.parent=null,!0):!1}function cB(t,e,n){const r=e.children.indexOf(n);if(r!==-1){n.isSettled&&t.disturb(),e.children.splice(r,1);let s=zn(n.props.preserve),i=n.parent;for(;s===void 0&&i;)s=zn(i.props.preserve),i=i.parent;s?t.calm():t.calm({name:t.type==="list"?r:n.name,value:Ap}),n.parent=null,n.config._rmn=n}return t.ledger.unmerge(n),t.emit("childRemoved",n),t}function uB(t,e,n){e.children.forEach(r=>!("__FKP"in r)&&n(r))}function hB(t,e,n,r=!1,s=!1){e.children.some(i=>{if("__FKP"in i)return!1;const o=n(i);return r&&o===!1?!0:s&&o===!1?!1:i.walk(n,r,s)})}function fB(t,e){const n=t.parent||void 0;e.config=XR(t.config._t,n),t.walk(r=>r.resetConfig())}function Yg(t,e,n,r=!0,s=!0){return Array.isArray(n)||n instanceof Set?(n.forEach(i=>Yg(t,e,i)),t):(e.plugins.has(n)||(s&&typeof n.library=="function"&&n.library(t),r&&n(t)!==!1&&(e.plugins.add(n),t.children.forEach(i=>i.use(n)))),t)}function dB(t,e,n,r){if(Jl(t.parent)){const s=t.parent.children,i=r>=s.length?s.length-1:r<0?0:r,o=s.indexOf(t);return o===-1?!1:(s.splice(o,1),s.splice(i,0,t),t.parent.children=s,t.parent.type==="list"&&t.parent.disturb().calm({name:i,value:Rp,from:o}),!0)}return!1}function pB(t){if(t.parent){const e=[...t.parent.children].indexOf(t);return e===-1?t.parent.children.length:e}return-1}function mB(t,e){return e}function gB(t,e){var n;return((n=t.parent)==null?void 0:n.type)==="list"?t.index:e.name!==HR?e.name:t.index}function _B(t,e){return e.parent?e.parent.address.concat([t.name]):[t.name]}function yB(t,e,n){const r=typeof n=="string"?n.split(t.config.delimiter):n;if(!r.length)return;const s=r[0];let i=t.parent;for(i||(String(r[0])===String(t.name)&&r.shift(),i=t),s==="$parent"&&r.shift();i&&r.length;){const o=r.shift();switch(o){case"$root":i=t.root;break;case"$parent":i=i.parent;break;case"$self":i=t;break;default:i=i.children.find(a=>!("__FKP"in a)&&String(a.name)===String(o))||vB(i,o)}}return i||void 0}function vB(t,e){const n=String(e).match(/^(find)\((.*)\)$/);if(n){const[,r,s]=n,i=s.split(",").map(o=>o.trim());switch(r){case"find":return t.find(i[0],i[1]);default:return}}}function EB(t,e,n,r){return wB(t,n,r)}function wB(t,e,n="name"){const r=typeof n=="string"?i=>i[n]==e:n,s=[t];for(;s.length;){const i=s.shift();if(!("__FKP"in i)){if(r(i,e))return i;s.push(...i.children)}}}function bB(t){let e=t;for(;e.parent;)e=e.parent;return e}function XR(t={},e){let n;return new Proxy(t,{get(...r){const s=r[1];if(s==="_t")return t;const i=Reflect.get(...r);if(i!==void 0)return i;if(e){const o=e.config[s];if(o!==void 0)return o}if(t.rootConfig&&typeof s=="string"){const o=t.rootConfig[s];if(o!==void 0)return o}return s==="delay"&&(n==null?void 0:n.type)==="input"?20:z4[s]},set(...r){const s=r[1],i=r[2];if(s==="_n")return n=i,t.rootConfig&&t.rootConfig._add(n),!0;if(s==="_rmn")return t.rootConfig&&t.rootConfig._rm(n),n=void 0,!0;if(!on(t[s],i,!1)){const o=Reflect.set(...r);return n&&(n.emit(`config:${s}`,i,!1),Ip(n,s,i),n.walk(a=>Ip(a,s,i),!1,!0)),o}return!0}})}function TB(t,e,n,r="ui"){const s=typeof n=="string"?{key:n,value:n,type:r}:n,i=t.hook.text.dispatch(s);return t.emit("text",i,!1),i.value}function IB(t){const e=t.name;do{if(t.props.isForm===!0)break;t.parent||In(106,e),t=t.parent}while(t);t.props.id&&jR(t.props.id,t.props.__root)}function AB(t,e,n){return qR(t,n)}function RB(t,e,n,r){const s=`${t.name}-set`,i=t.hook.setErrors.dispatch({localErrors:n,childErrors:r});return M4(t,i.localErrors,i.childErrors).forEach(o=>{t.store.apply(o,a=>a.meta.source===s)}),t}function SB(t,e,n=!0,r){return t.store.filter(s=>!(r===void 0||s.meta.source===r),"error"),n&&(r=r||`${t.name}-set`,t.walk(s=>{s.store.filter(i=>!(i.type==="error"&&i.meta&&i.meta.source===r))})),t}function CB(t){const e={initial:typeof t=="object"?Wn(t):t};let n,r=!0,s={};return new Proxy(e,{get(...i){var h,f,p,g;const[o,a]=i;let l;Ee(e,a)?(l=Reflect.get(...i),(h=s[a])!=null&&h.boolean&&(l=I4(l))):n&&typeof a=="string"&&n.config[a]!==void 0?(l=n.config[a],a==="mergeStrategy"&&(n==null?void 0:n.type)==="input"&&zu(l)&&n.name in l&&(l=l[n.name])):l=(f=s[a])==null?void 0:f.default;const u=(p=s[a])==null?void 0:p.getter;return(g=s[a])!=null&&g.boolean&&(l=!!l),u?u(l,n):l},set(i,o,a,l){var p;if(o==="_n")return n=a,!0;if(o==="_emit")return r=a,!0;let{prop:u,value:h}=n.hook.prop.dispatch({prop:o,value:a});const f=(p=s[u])==null?void 0:p.setter;if(h=f?f(h,n):h,!on(e[u],h,!1)||typeof h=="object"){const g=Reflect.set(i,u,h,l);return u==="__propDefs"&&(s=Sp(h)),r&&(n.emit("prop",{prop:u,value:h}),typeof u=="string"&&n.emit(`prop:${u}`,h)),g}return!0}})}function PB(t,e,n,r){return e.traps.set(n,r),t}function kB(t,e){if(t.props.definition)return t.define(t.props.definition);for(const n of e){if(t.props.definition)return;typeof n.library=="function"&&n.library(t)}}function NB(t){const e=KR(t),n=XR(t.config||{},t.parent);return{_d:0,_e:FR(),uid:Symbol(),_resolve:!1,_tmo:!1,_value:e,children:p4(t.children||[]),config:n,hook:Y4(),isCreated:!1,isSettled:!0,ledger:F4(),name:J4(t),parent:t.parent||null,plugins:new Set,props:CB(e),settled:Promise.resolve(e),store:P4(!0),sync:t.sync||!1,traps:Q4(),type:t.type||"input",value:e}}function OB(t,e){var r,s;const n=(r=e.props)==null?void 0:r.id;if(n||(s=e.props)==null||delete s.id,t.ledger.init(t.store._n=t.props._n=t.config._n=t),t.props._emit=!1,Object.assign(t.props,n?{}:{id:`input_${X4++}`},e.props??{}),t.props._emit=!0,kB(t,new Set([...e.plugins||[],...t.parent?t.parent.plugins:[]])),e.plugins)for(const i of e.plugins)Yg(t,t._c,i,!0,!1);return t.each(i=>t.add(i)),t.parent&&t.parent.add(t,e.index),t.type==="input"&&t.children.length&&In(100,t),GR(t,t._c,t._value,!1),t.store.release(),n&&B4(t),t.emit("created",t),t.isCreated=!0,t}function DB(t){return{__FKP:!0,uid:Symbol(),name:(t==null?void 0:t.name)??`p_${zR++}`,value:(t==null?void 0:t.value)??null,_value:(t==null?void 0:t.value)??null,type:(t==null?void 0:t.type)??"input",props:{},use:()=>{},input(e){return this._value=e,this.value=e,Promise.resolve()},isSettled:!0}}function xB(t){return"__FKP"in t}function MB(t){const e=t||{},n=NB(e),r=new Proxy(n,{get(...s){const[,i]=s;if(i==="__FKNode__")return!0;const o=n.traps.get(i);return o&&o.get?o.get(r,n):Reflect.get(...s)},set(...s){const[,i,o]=s,a=n.traps.get(i);return a&&a.set?a.set(r,n,i,o):Reflect.set(...s)}});return OB(r,e)}function Cp(t){return typeof t!="string"&&Ee(t,"$el")}function Pp(t){return typeof t!="string"&&Ee(t,"$cmp")}function Wi(t){return!t||typeof t=="string"?!1:Ee(t,"if")&&Ee(t,"then")}function LB(t){return typeof t!="string"&&"$formkit"in t}function VB(t){if(typeof t=="string")return{$el:"text",children:t};if(LB(t)){const{$formkit:e,for:n,if:r,children:s,bind:i,...o}=t;return Object.assign({$cmp:"FormKit",props:{...o,type:e}},r?{if:r}:{},n?{for:n}:{},s?{children:s}:{},i?{bind:i}:{})}return t}function Fn(t){let e;const n=new Set,r=function(A,S){return typeof A=="function"?A(S):A},s=[{"&&":(v,A,S)=>r(v,S)&&r(A,S),"||":(v,A,S)=>r(v,S)||r(A,S)},{"===":(v,A,S)=>r(v,S)===r(A,S),"!==":(v,A,S)=>r(v,S)!==r(A,S),"==":(v,A,S)=>r(v,S)==r(A,S),"!=":(v,A,S)=>r(v,S)!=r(A,S),">=":(v,A,S)=>r(v,S)>=r(A,S),"<=":(v,A,S)=>r(v,S)<=r(A,S),">":(v,A,S)=>r(v,S)>r(A,S),"<":(v,A,S)=>r(v,S)<r(A,S)},{"+":(v,A,S)=>r(v,S)+r(A,S),"-":(v,A,S)=>r(v,S)-r(A,S)},{"*":(v,A,S)=>r(v,S)*r(A,S),"/":(v,A,S)=>r(v,S)/r(A,S),"%":(v,A,S)=>r(v,S)%r(A,S)}],i=s.reduce((v,A)=>v.concat(Object.keys(A)),[]),o=new Set(i.map(v=>v.charAt(0)));function a(v,A,S,O){const D=v.filter(x=>x.startsWith(A));return D.length?D.find(x=>O.length>=S+x.length&&O.substring(S,S+x.length)===x?x:!1):!1}function l(v,A,S=1){let O=S?A.substring(v+1).trim():A.substring(0,v).trim();if(!O.length)return-1;if(!S){const x=O.split("").reverse(),F=x.findIndex(k=>o.has(k));O=x.slice(F).join("")}const D=O[0];return s.findIndex(x=>{const F=Object.keys(x);return!!a(F,D,0,O)})}function u(v,A){let S="";const O=A.length;let D=0;for(let x=v;x<O;x++){const F=A.charAt(x);if(F==="(")D++;else if(F===")")D--;else if(D===0&&F===" ")continue;if(D===0&&a(i,F,x,A))return[S,x-1];S+=F}return[S,A.length-1]}function h(v,A=0){const S=s[A],O=v.length,D=Object.keys(S);let x=0,F=!1,k=null,I="",y=null,b,P="",E="",R="",T="",he=0;const Re=(Y,de)=>{Y?R+=de:I+=de};for(let Y=0;Y<O;Y++)if(P=E,E=v.charAt(Y),(E==="'"||E==='"')&&P!=="\\"&&(x===0&&!F||x&&!T)){x?T=E:F=E,Re(x,E);continue}else if(F&&(E!==F||P==="\\")||T&&(E!==T||P==="\\")){Re(x,E);continue}else if(F===E){F=!1,Re(x,E);continue}else if(T===E){T=!1,Re(x,E);continue}else{if(E===" ")continue;if(E==="(")x===0?he=Y:R+=E,x++;else if(E===")")if(x--,x===0){const de=typeof I=="string"&&I.startsWith("$")?I:void 0,be=de&&v.charAt(Y+1)===".";let at="";be&&([at,Y]=u(Y+2,v));const It=k?A:l(he,v,0),At=l(Y,v);It===-1&&At===-1?(I=f(R,-1,de,at),typeof I=="string"&&(I=R)):k&&(It>=At||At===-1)&&A===It?(y=k.bind(null,f(R,-1,de,at)),k=null,I=""):At>It&&A===At?I=f(R,-1,de,at):I+=`(${R})${be?`.${at}`:""}`,R=""}else R+=E;else if(x===0&&(b=a(D,E,Y,v))){Y===0&&In(103,[b,v]),Y+=b.length-1,Y===v.length-1&&In(104,[b,v]),k?I&&(y=k.bind(null,f(I,A)),k=S[b].bind(null,y),I=""):y?(k=S[b].bind(null,f(y,A)),y=null):(k=S[b].bind(null,f(I,A)),I="");continue}else Re(x,E)}return I&&k&&(k=k.bind(null,f(I,A))),k=!k&&y?y:k,!k&&I&&(k=(Y,de)=>typeof Y=="function"?Y(de):Y,k=k.bind(null,f(I,A))),!k&&!I&&In(105,v),k}function f(v,A,S,O){if(S){const D=f(S,s.length);let x,F=O?Fn(`$${O}`):!1;if(typeof D=="function"){const k=E4(String(v)).map(I=>f(I,-1));return I=>{const y=D(I);return typeof y!="function"?(ki(150,S),y):(x=y(...k.map(b=>typeof b=="function"?b(I):b)),F&&(F=F.provide(b=>{const P=e(b);return b.reduce((R,T)=>{if(T===O||(O==null?void 0:O.startsWith(`${T}(`))){const Re=w4(x,T);R[T]=()=>Re}else R[T]=P[T];return R},{})})),F?F():x)}}}else if(typeof v=="string"){if(v==="true")return!0;if(v==="false")return!1;if(v==="undefined")return;if(y4(v))return v4(v.substring(1,v.length-1));if(!isNaN(+v))return Number(v);if(A<s.length-1)return h(v,A+1);if(v.startsWith("$")){const D=v.substring(1);return n.add(D),function(F){return D in F?F[D]():void 0}}return v}return v}const p=h(t.startsWith("$:")?t.substring(2):t),g=Array.from(n);function _(v){return e=v,Object.assign(p.bind(null,v(g)),{provide:_})}return Object.assign(p,{provide:_})}function nu(t,e,n){return n?typeof n=="string"?n.split(" ").reduce((s,i)=>Object.assign(s,{[i]:!0}),{}):typeof n=="function"?nu(t,e,n(e,t)):n:{}}function FB(t,e,...n){const r=n.reduce((s,i)=>{if(!i)return ad(s);const{$reset:o,...a}=i;return ad(o?a:Object.assign(s,a))},{});return Object.keys(t.hook.classes.dispatch({property:e,classes:r}).classes).filter(s=>r[s]).join(" ")||null}function ad(t){const e="$remove:";let n=!1;const r=Object.keys(t).filter(s=>(t[s]&&s.startsWith(e)&&(n=!0),t[s]));return r.length>1&&n&&r.filter(i=>i.startsWith(e)).map(i=>{const o=i.substring(e.length);t[o]=!1,t[i]=!1}),t}function $B(t,e,n){const r=Xl(t);r?r.setErrors(e,n):ki(651,t)}function UB(t,e=!0){const n=Xl(t);n?n.clearErrors(e):ki(652,t)}var Gu="1.6.3",JR=new WeakSet;function bl(t,e){const n=e||Object.assign(new Map,{active:!1}),r=new Map,s=function(h){var f;n.active&&(n.has(t)||n.set(t,new Set),(f=n.get(t))==null||f.add(h))},i=function(h){return new Proxy(h,{get(...f){return typeof f[1]=="string"&&s(`prop:${f[1]}`),Reflect.get(...f)}})},o=function(h){return new Proxy(h,{get(...f){return f[1]==="value"?p=>(s(`count:${p}`),h.value(p)):Reflect.get(...f)}})},a=function(h,f){return Jl(h)?bl(h,n):(f==="value"&&s("commit"),f==="_value"&&s("input"),f==="props"?i(h):f==="ledger"?o(h):(f==="children"&&(s("child"),s("childRemoved")),h))},{proxy:l,revoke:u}=Proxy.revocable(t,{get(...h){switch(h[1]){case"_node":return t;case"deps":return n;case"watch":return(p,g,_)=>tS(l,p,g,_);case"observe":return()=>{const p=new Map(n);return n.clear(),n.active=!0,p};case"stopObserve":return()=>{const p=new Map(n);return n.active=!1,p};case"receipts":return r;case"kill":return()=>{eS(r),JR.add(h[2]),u()}}const f=Reflect.get(...h);return typeof f=="function"?(...p)=>{const g=f(...p);return a(g,h[1])}:a(f,h[1])}});return l}function ZR(t,[e,n],r,s){e.forEach((i,o)=>{i.forEach(a=>{t.receipts.has(o)||t.receipts.set(o,{});const l=t.receipts.get(o)??{};l[a]=l[a]??[],l[a].push(o.on(a,r,s)),t.receipts.set(o,l)})}),n.forEach((i,o)=>{i.forEach(a=>{if(t.receipts.has(o)){const l=t.receipts.get(o);l&&Ee(l,a)&&(l[a].map(o.off),delete l[a],t.receipts.set(o,l))}})})}function eS(t){t.forEach((e,n)=>{for(const r in e)e[r].map(n.off)}),t.clear()}function tS(t,e,n,r){const s=a=>{const l=t.stopObserve();ZR(t,nS(i,l),()=>tS(t,e,n,r),r),n&&n(a)},i=new Map(t.deps);t.observe();const o=e(t);o instanceof Promise?o.then(a=>s(a)):s(o)}function nS(t,e){const n=new Map,r=new Map;return e.forEach((s,i)=>{if(!t.has(i))n.set(i,s);else{const o=new Set,a=t.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),n.set(i,o)}}),t.forEach((s,i)=>{if(!e.has(i))r.set(i,s);else{const o=new Set,a=e.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),r.set(i,o)}}),[n,r]}function rS(t){return JR.has(t)}var sS=function({value:e}){return["yes","on","1",1,!0,"true"].includes(e)};sS.skipEmpty=!1;var BB=sS,jB=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r>n},qB=jB,HB=function({value:t},e="default"){const n={default:new RegExp("^\\p{L}+$","u"),latin:/^[a-z]+$/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},WB=HB,zB=function({value:t},e="default"){const n={default:/^[\p{L} ]+$/u,latin:/^[a-z ]+$/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},KB=zB,GB=function({value:t},e="default"){const n={default:/^[0-9\p{L}]+$/u,latin:/^[0-9a-z]+$/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},QB=GB,YB=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r<n},XB=YB,JB=function({value:e},n,r){if(!isNaN(e)&&!isNaN(n)&&!isNaN(r)){const s=1*e;n=Number(n),r=Number(r);const[i,o]=n<=r?[n,r]:[r,n];return s>=1*i&&s<=1*o}return!1},ZB=JB,sw=/(_confirm(?:ed)?)$/,ej=function(e,n,r="loose"){var i;n||(n=sw.test(e.name)?e.name.replace(sw,""):`${e.name}_confirm`);const s=(i=e.at(n))==null?void 0:i.value;return r==="strict"?e.value===s:e.value==s},tj=ej,nj=function({value:t},e="default"){const n={default:new RegExp("\\p{L}","u"),latin:/[a-z]/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},rj=nj,sj=function({value:t},e="default"){const n={default:/[\p{L} ]/u,latin:/[a-z ]/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},ij=sj,oj=function({value:t},e="default"){const n={default:/[0-9\p{L}]/u,latin:/[0-9a-z]/i},r=Ee(n,e)?e:"default";return n[r].test(String(t))},aj=oj,lj=function({value:t},e="default"){const n={default:new RegExp("\\p{Ll}","u"),latin:/[a-z]/},r=Ee(n,e)?e:"default";return n[r].test(String(t))},cj=lj,uj=function({value:e}){return/[0-9]/.test(String(e))},hj=uj,fj=function({value:t}){return/[!-/:-@[-`{-~]/.test(String(t))},dj=fj,pj=function({value:t},e="default"){const n={default:new RegExp("\\p{Lu}","u"),latin:/[A-Z]/},r=Ee(n,e)?e:"default";return n[r].test(String(t))},mj=pj,gj=function({value:e},n,r){n=n instanceof Date?n.getTime():Date.parse(n),r=r instanceof Date?r.getTime():Date.parse(r);const s=e instanceof Date?e.getTime():Date.parse(String(e));if(n&&!r)r=n,n=Date.now();else if(!n||!s)return!1;return s>=n&&s<=r},_j=gj,yj=function({value:e},n){return n&&typeof n=="string"?_4(n).test(String(e)):!isNaN(Date.parse(String(e)))},vj=yj,Ej=function({value:e}){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e))},wj=Ej,bj=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.endsWith(r)):typeof e=="string"&&n.length===0},Tj=bj,Ij=function({value:e},...n){return n.some(r=>typeof r=="object"?on(r,e):r==e)},Aj=Ij,Rj=function({value:e},n=0,r=1/0){n=parseInt(n),r=isNaN(parseInt(r))?1/0:parseInt(r);const s=n<=r?n:r,i=r>=n?r:n;if(typeof e=="string"||Array.isArray(e))return e.length>=s&&e.length<=i;if(e&&typeof e=="object"){const o=Object.keys(e).length;return o>=s&&o<=i}return!1},Sj=Rj,Cj=function({value:t},e="default"){const n={default:new RegExp("^\\p{Ll}+$","u"),allow_non_alpha:/^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,allow_numeric:/^[0-9\p{Ll}]+$/u,allow_numeric_dashes:/^[0-9\p{Ll}-]+$/u,latin:/^[a-z]+$/},r=Ee(n,e)?e:"default";return n[r].test(String(t))},Pj=Cj,kj=function({value:e},...n){return n.some(r=>(typeof r=="string"&&r.substr(0,1)==="/"&&r.substr(-1)==="/"&&(r=new RegExp(r.substr(1,r.length-2))),r instanceof RegExp?r.test(String(e)):r===e))},Nj=kj,Oj=function({value:e},n=10){return Array.isArray(e)?e.length<=n:Number(e)<=Number(n)},Dj=Oj,xj=function({value:e},n=1){return Array.isArray(e)?e.length>=n:Number(e)>=Number(n)},Mj=xj,Lj=function({value:e},...n){return!n.some(r=>typeof r=="object"?on(r,e):r===e)},Vj=Lj,Fj=function({value:e}){return!isNaN(e)},$j=Fj,iS=function(t,...e){return Dn(t.value)?e.map(r=>{var s;return(s=t.at(r))==null?void 0:s.value}).some(r=>!Dn(r)):!0};iS.skipEmpty=!1;var Uj=iS,oS=function({value:e},n="default"){return n==="trim"&&typeof e=="string"?!Dn(e.trim()):!Dn(e)};oS.skipEmpty=!1;var Bj=oS,jj=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.startsWith(r)):typeof e=="string"&&n.length===0},qj=jj,Hj=function({value:t}){return/^[!-/:-@[-`{-~]+$/.test(String(t))},Wj=Hj,zj=function({value:t},e="default"){const n={default:new RegExp("^\\p{Lu}+$","u"),latin:/^[A-Z]+$/},r=Ee(n,e)?e:"default";return n[r].test(String(t))},Kj=zj,Gj=function({value:e},...n){try{const r=n.length?n:["http:","https:"],s=new URL(String(e));return r.includes(s.protocol)}catch{return!1}},Qj=Gj;const Yj=Object.freeze(Object.defineProperty({__proto__:null,accepted:BB,alpha:WB,alpha_spaces:KB,alphanumeric:QB,between:ZB,confirm:tj,contains_alpha:rj,contains_alpha_spaces:ij,contains_alphanumeric:aj,contains_lowercase:cj,contains_numeric:hj,contains_symbol:dj,contains_uppercase:mj,date_after:qB,date_before:XB,date_between:_j,date_format:vj,email:wj,ends_with:Tj,is:Aj,length:Sj,lowercase:Pj,matches:Nj,max:Dj,min:Mj,not:Vj,number:$j,require_one:Uj,required:Bj,starts_with:qj,symbol:Wj,uppercase:Kj,url:Qj},Symbol.toStringTag,{value:"Module"}));var kp=An({type:"state",blocking:!0,visible:!1,value:!0,key:"validating"});function Xj(t={}){return function(n){let r=Wn(n.props.validationRules||{}),s={...t,...r},i=bl(n);const o={input:Go(),rerun:null,isPassing:!0};let a=Wn(n.props.validation);n.on("prop:validation",({payload:u})=>l(u,r)),n.on("prop:validationRules",({payload:u})=>l(a,u));function l(u,h){var f;on(Object.keys(r||{}),Object.keys(h||{}))&&on(a,u)||(r=Wn(h),a=Wn(u),s={...t,...r},eS(i.receipts),(f=n.props.parsedRules)==null||f.forEach(p=>{var g;p.messageObserver=(g=p.messageObserver)==null?void 0:g.kill()}),n.store.filter(()=>!1,"validation"),n.props.parsedRules=ow(u,s),i.kill(),i=bl(n),Np(i,n.props.parsedRules,o))}n.props.parsedRules=ow(a,s),Np(i,n.props.parsedRules,o)}}function Np(t,e,n){rS(t)||(n.input=Go(),t.store.set(An({key:"passing",value:n.isPassing,visible:!1})),n.isPassing=!0,t.store.filter(r=>!r.meta.removeImmediately,"validation"),e.forEach(r=>r.debounce&&clearTimeout(r.timer)),e.length&&(t.store.set(kp),Op(0,e,t,n,!1,()=>{t.store.remove(kp.key),t.store.set(An({key:"passing",value:n.isPassing,visible:!1}))})))}function Op(t,e,n,r,s,i){const o=e[t];if(!o)return i();const a=r.input;o.state=null;function l(u,h){r.isPassing=r.isPassing&&!!h,o.queued=!1;const f=n.stopObserve();ZR(n,nS(o.deps,f),function(){try{n.store.set(kp)}catch{}o.queued=!0,r.rerun&&clearTimeout(r.rerun),r.rerun=setTimeout(Np,0,n,e,r)},"unshift"),o.deps=f,r.input===a&&(o.state=h,h===!1?eq(n,o,s||u):Zj(n,o),e.length>t+1?Op(t+1,e,n,r,s||u,i):i())}(!Dn(n.value)||!o.skipEmpty)&&(r.isPassing||o.force)?o.queued?Jj(o,n,u=>{u instanceof Promise?u.then(h=>l(!0,h)):l(!1,u)}):Op(t+1,e,n,r,s,i):Dn(n.value)&&o.skipEmpty&&r.isPassing?(n.observe(),n.value,l(!1,r.isPassing)):l(!1,null)}function Jj(t,e,n){t.debounce?t.timer=setTimeout(()=>{e.observe(),n(t.rule(e,...t.args))},t.debounce):(e.observe(),n(t.rule(e,...t.args)))}function Zj(t,e){const n=`rule_${e.name}`;e.messageObserver&&(e.messageObserver=e.messageObserver.kill()),Ee(t.store,n)&&t.store.remove(n)}function eq(t,e,n){rS(t)||(e.messageObserver||(e.messageObserver=bl(t._node)),e.messageObserver.watch(r=>nq(r,e),r=>{const s=tq(t,e,r),i=An({blocking:e.blocking,key:`rule_${e.name}`,meta:{messageKey:e.name,removeImmediately:n,localize:!s,i18nArgs:r},type:"validation",value:s||"This field is not valid."});t.store.set(i)}))}function tq(t,e,n){const r=t.props.validationMessages&&Ee(t.props.validationMessages,e.name)?t.props.validationMessages[e.name]:void 0;return typeof r=="function"?r(...n):r}function nq(t,e){return[{node:t,name:aS(t),args:e.args}]}function aS(t){return typeof t.props.validationLabel=="function"?t.props.validationLabel(t):t.props.validationLabel||t.props.label||t.props.name||String(t.name)}var lS="(?:[\\*+?()0-9]+)",cS="[a-zA-Z][a-zA-Z0-9_]+",rq=new RegExp(`^(${lS}?${cS})(?:\\:(.*)+)?$`,"i"),sq=new RegExp(`^(${lS})(${cS})$`,"i"),iq=/([\*+?]+)?(\(\d+\))([\*+?]+)?/,iw=/\(\d+\)/,oq={blocking:!0,debounce:0,force:!1,skipEmpty:!0,name:""};function ow(t,e){return t?(typeof t=="string"?aq(t):Ro(t)).reduce((r,s)=>{let i=s.shift();const o={};if(typeof i=="string"){const[a,l]=cq(i);Ee(e,a)&&(i=e[a],Object.assign(o,l))}return typeof i=="function"&&r.push({rule:i,args:s,timer:0,state:null,queued:!0,deps:new Map,...oq,...uq(o,i)}),r},[]):[]}function aq(t){return t.split("|").reduce((e,n)=>{const r=lq(n);return r&&e.push(r),e},[])}function lq(t){const e=t.trim();if(e){const n=e.match(rq);if(n&&typeof n[1]=="string"){const r=n[1].trim(),s=n[2]&&typeof n[2]=="string"?n[2].split(",").map(i=>i.trim()):[];return[r,...s]}}return!1}function cq(t){const e=t.match(sq);if(!e)return[t,{name:t}];const n={"*":{force:!0},"+":{skipEmpty:!1},"?":{blocking:!1}},[,r,s]=e,i=iw.test(r)?r.match(iq)||[]:[,r];return[s,[i[1],i[2],i[3]].reduce((o,a)=>(a&&(iw.test(a)?o.debounce=parseInt(a.substr(1,a.length-1)):a.split("").forEach(l=>Ee(n,l)&&Object.assign(o,n[l]))),o),{name:s})]}function uq(t,e){return t.name||(t.name=e.ruleName||e.name),["skipEmpty","force","debounce","blocking"].reduce((n,r)=>(Ee(e,r)&&!Ee(n,r)&&Object.assign(n,{[r]:e[r]}),n),t)}function Pe(t){return t[0].toUpperCase()+t.substr(1)}function aw(t,e="or"){return t.reduce((n,r,s)=>(n+=r,s<=t.length-2&&t.length>2&&(n+=", "),s===t.length-2&&(n+=`${t.length===2?" ":""}${e} `),n),"")}function Fc(t){const e=typeof t=="string"?new Date(Date.parse(t)):t;return e instanceof Date?new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}).format(e):"(unknown)"}function hq(t,e){return Number(t)>=Number(e)?[e,t]:[t,e]}var fq={add:"Add",remove:"Remove",removeAll:"Remove all",incomplete:"Sorry, not all fields are filled out correctly.",submit:"Submit",noFiles:"No file chosen",moveUp:"Move up",moveDown:"Move down",isLoading:"Loading...",loadMore:"Load more",next:"Next",prev:"Previous",addAllValues:"Add all values",addSelectedValues:"Add selected values",removeAllValues:"Remove all values",removeSelectedValues:"Remove selected values",chooseDate:"Choose date",changeDate:"Change date",summaryHeader:"There were errors in your form.",close:"Close",open:"Open"},dq={accepted({name:t}){return`Please accept the ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${Pe(t)} must be after ${Fc(e[0])}.`:`${Pe(t)} must be in the future.`},alpha({name:t}){return`${Pe(t)} can only contain alphabetical characters.`},alphanumeric({name:t}){return`${Pe(t)} can only contain letters and numbers.`},alpha_spaces({name:t}){return`${Pe(t)} can only contain letters and spaces.`},contains_alpha({name:t}){return`${Pe(t)} must contain alphabetical characters.`},contains_alphanumeric({name:t}){return`${Pe(t)} must contain letters or numbers.`},contains_alpha_spaces({name:t}){return`${Pe(t)} must contain letters or spaces.`},contains_symbol({name:t}){return`${Pe(t)} must contain a symbol.`},contains_uppercase({name:t}){return`${Pe(t)} must contain an uppercase letter.`},contains_lowercase({name:t}){return`${Pe(t)} must contain a lowercase letter.`},contains_numeric({name:t}){return`${Pe(t)} must contain numbers.`},symbol({name:t}){return`${Pe(t)} must be a symbol.`},uppercase({name:t}){return`${Pe(t)} can only contain uppercase letters.`},lowercase({name:t,args:e}){let n="";return Array.isArray(e)&&e.length&&(e[0]==="allow_non_alpha"&&(n=", numbers and symbols"),e[0]==="allow_numeric"&&(n=" and numbers"),e[0]==="allow_numeric_dashes"&&(n=", numbers and dashes")),`${Pe(t)} can only contain lowercase letters${n}.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${Pe(t)} must be before ${Fc(e[0])}.`:`${Pe(t)} must be in the past.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"This field was configured incorrectly and can’t be submitted.";const[n,r]=hq(e[0],e[1]);return`${Pe(t)} must be between ${n} and ${r}.`},confirm({name:t}){return`${Pe(t)} does not match.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`${Pe(t)} is not a valid date, please use the format ${e[0]}`:"This field was configured incorrectly and can’t be submitted"},date_between({name:t,args:e}){return`${Pe(t)} must be between ${Fc(e[0])} and ${Fc(e[1])}`},email:"Please enter a valid email address.",ends_with({name:t,args:e}){return`${Pe(t)} doesn’t end with ${aw(e)}.`},is({name:t}){return`${Pe(t)} is not an allowed value.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`${Pe(t)} must be at least one character.`:r==0&&s?`${Pe(t)} must be less than or equal to ${s} characters.`:r===s?`${Pe(t)} should be ${s} characters long.`:r&&s===1/0?`${Pe(t)} must be greater than or equal to ${r} characters.`:`${Pe(t)} must be between ${r} and ${s} characters.`},matches({name:t}){return`${Pe(t)} is not an allowed value.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have more than ${n[0]} ${t}.`:`${Pe(t)} must be no more than ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${Pe(t)} must be of the type: ${e[0]}`:"No file formats allowed."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have fewer than ${n[0]} ${t}.`:`${Pe(t)} must be at least ${n[0]}.`},not({name:t,node:{value:e}}){return`“${e}” is not an allowed ${t}.`},number({name:t}){return`${Pe(t)} must be a number.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?aS(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" or ")} is required.`},required({name:t}){return`${Pe(t)} is required.`},starts_with({name:t,args:e}){return`${Pe(t)} doesn’t start with ${aw(e)}.`},url(){return"Please enter a valid URL."},invalidDate:"The selected date is invalid."},pq={ui:fq,validation:dq},lw=new Set;function mq(t){return function(n){lw.add(n),n.on("destroying",()=>lw.delete(n));let r=cw(n.config.locale,t),s=r?t[r]:{};n.on("prop:locale",({payload:i})=>{r=cw(i,t),s=r?t[r]:{},n.store.touch()}),n.on("prop:label",()=>n.store.touch()),n.on("prop:validationLabel",()=>n.store.touch()),n.hook.text((i,o)=>{var l,u;const a=((l=i.meta)==null?void 0:l.messageKey)||i.key;if(Ee(s,i.type)&&Ee(s[i.type],a)){const h=s[i.type][a];typeof h=="function"?i.value=Array.isArray((u=i.meta)==null?void 0:u.i18nArgs)?h(...i.meta.i18nArgs):h(i):i.value=h}return o(i)})}}function cw(t,e){if(Ee(e,t))return t;const[n]=t.split("-");if(Ee(e,n))return n;for(const r in e)return r;return!1}function gq(...t){const e=t.reduce((r,s)=>Ns(r,s),{}),n=()=>{};return n.library=function(r){const s=co(r.props.type);Ee(e,s)&&r.define(e[s])},n}var _q=["classes","config","delay","errors","id","index","inputErrors","library","modelValue","onUpdate:modelValue","name","number","parent","plugins","sectionsSchema","type","validation","validationLabel","validationMessages","validationRules","onInput","onInputRaw","onUpdate:modelValue","onNode","onSubmit","onSubmitInvalid","onSubmitRaw"];function rf(t){return t&&typeof t=="object"&&"group"in t&&Array.isArray(t.options)}function uS(t,e={count:1}){return Array.isArray(t)?t.map(n=>{if(typeof n=="string"||typeof n=="number")return{label:String(n),value:String(n)};if(typeof n=="object"){if("group"in n)return n.options=uS(n.options||[],e),n;"value"in n&&typeof n.value!="string"&&Object.assign(n,{value:`__mask_${e.count++}`,__original:n.value})}return n}):Object.keys(t).map(n=>({label:t[n],value:n}))}function bi(t,e,n=!1){if(Array.isArray(t)){for(const r of t)if(!(typeof r!="object"&&r)){if(rf(r)){const s=bi(r.options,e,!0);if(s!==void 0)return s}else if(e==r.value)return"__original"in r?r.__original:r.value}}return n?void 0:e}function Co(t,e){return t===null&&e===void 0||t===void 0&&e===null?!1:t==e?!0:Ao(t)&&Ao(e)?on(t,e):!1}function Xg(t){t.hook.prop((e,n)=>{var r;return e.prop==="options"&&(typeof e.value=="function"?(t.props.optionsLoader=e.value,e.value=[]):((r=t.props)._normalizeCounter??(r._normalizeCounter={count:1}),e.value=uS(e.value,t.props._normalizeCounter))),n(e)})}function ye(t,e,n=!1){return(...r)=>{const s=i=>{const o=!e||typeof e=="string"?{$el:e}:e();return(Cp(o)||Pp(o))&&(o.meta?o.meta.section=t:o.meta={section:t},r.length&&!o.children&&(o.children=[...r.map(a=>typeof a=="function"?a(i):a)]),Cp(o)&&(o.attrs={class:`$classes.${t}`,...o.attrs||{}})),{if:`$slots.${t}`,then:`$slots.${t}`,else:t in i?ka(o,i[t]):o}};return s._s=t,n?yq(s):s}}function yq(t){return e=>[t(e)]}function Qu(t){return!!(t&&typeof t=="object"&&("$el"in t||"$cmp"in t||"$formkit"in t))}function ka(t,e={}){return typeof t=="string"?Qu(e)||typeof e=="string"?e:t:Array.isArray(t)?Qu(e)?e:t:Ns(t,e)}var vq=ye("actions",()=>({$el:"div",if:"$actions"})),Yu=ye("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",name:"$node.props.altName || $node.name",disabled:"$option.attrs.disabled || $disabled",onInput:"$handlers.toggleChecked",checked:"$fns.eq($_value, $onValue)",onBlur:"$handlers.blur",value:"$: true",id:"$id","aria-describedby":{if:"$options.length",then:{if:"$option.help",then:'$: "help-" + $option.attrs.id',else:void 0},else:{if:"$help",then:'$: "help-" + $id',else:void 0}}}})),hS=ye("optionHelp",()=>({$el:"div",if:"$option.help",attrs:{id:'$: "help-" + $option.attrs.id'}})),Xu=ye("inner","span"),Ju=ye("label","span"),fS=ye("option",()=>({$el:"li",for:["option","$options"],attrs:{"data-disabled":"$option.attrs.disabled || $disabled || undefined"}})),dS=ye("options","ul"),Zu=ye("wrapper",()=>({$el:"label",attrs:{"data-disabled":{if:"$options.length",then:void 0,else:"$disabled || undefined"},"data-checked":{if:"$options == undefined",then:"$fns.eq($_value, $onValue) || undefined",else:"$fns.isChecked($option.value) || undefined"}}})),Eq=ye("input",()=>({$el:"button",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",id:"$id"}})),wq=ye("default",null),eh=ye("decorator",()=>({$el:"span",attrs:{"aria-hidden":"true"}})),pS=ye("fieldset",()=>({$el:"fieldset",attrs:{id:"$id","aria-describedby":{if:"$help",then:'$: "help-" + $id',else:void 0}}})),bq=ye("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"file",disabled:"$disabled",name:"$node.name",onChange:"$handlers.files",onBlur:"$handlers.blur",id:"$id","aria-describedby":"$describedBy","aria-required":"$state.required || undefined"}})),Tq=ye("fileItem",()=>({$el:"li",for:["file","$value"]})),Iq=ye("fileList",()=>({$el:"ul",if:"$value.length",attrs:{"data-has-multiple":"$_hasMultipleFiles"}})),Aq=ye("fileName",()=>({$el:"span",attrs:{class:"$classes.fileName"}})),uw=ye("fileRemove",()=>({$el:"button",attrs:{type:"button",onClick:"$handlers.resetFiles"}})),Rq=ye("form",()=>({$el:"form",bind:"$attrs",meta:{autoAnimate:!0},attrs:{id:"$id",name:"$node.name",onSubmit:"$handlers.submit","data-loading":"$state.loading || undefined"}})),Jg=ye("wrapper",null,!0),jr=ye("help",()=>({$el:"div",if:"$help",attrs:{id:'$: "help-" + $id'}})),Dt=(t,e)=>ye(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$${t}Icon && $${n}`,$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " " + $classes.icon`,innerHTML:`$${n}`,onClick:`$handlers.iconClick(${t})`,role:`$fns.iconRole(${t})`,tabindex:`$fns.iconRole(${t}) === "button" && "0" || undefined`,for:{if:`${e==="label"}`,then:"$id"}}}})(),sf=ye("inner","div"),of=ye("label",()=>({$el:"label",if:"$label",attrs:{for:"$id"}})),mS=ye("legend",()=>({$el:"legend",if:"$label"})),Us=ye("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}})),Bs=ye("messages",()=>({$el:"ul",if:"$defaultMessagePlacement && $fns.length($messages)"})),Sq=ye("noFiles",()=>({$el:"span",if:"$value.length == 0"})),Cq=ye("optGroup",()=>({$el:"optgroup",bind:"$option.attrs",attrs:{label:"$option.group"}})),hw=ye("option",()=>({$el:"option",bind:"$option.attrs",attrs:{class:"$classes.option",value:"$option.value",selected:"$fns.isSelected($option)"}})),fw=ye("options",()=>({$el:null,if:"$options.length",for:["option","$option.options || $options"]})),Ni=ye("outer",()=>({$el:"div",meta:{autoAnimate:!0},attrs:{key:"$id","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-has-multiple":"$_hasMultipleFiles","data-disabled":'$: ($disabled !== "false" && $disabled) || undefined',"data-empty":"$state.empty || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.invalid || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined","data-prefix-icon":"$_rawPrefixIcon !== undefined || undefined","data-suffix-icon":"$_rawSuffixIcon !== undefined || undefined","data-prefix-icon-click":"$onPrefixIconClick !== undefined || undefined","data-suffix-icon-click":"$onSuffixIconClick !== undefined || undefined"}})),qr=ye("prefix",null),Pq=ye("input",()=>({$el:"select",bind:"$attrs",attrs:{id:"$id","data-placeholder":"$fns.showPlaceholder($_value, $placeholder)",disabled:"$disabled",class:"$classes.input",name:"$node.name",onChange:"$handlers.onChange",onInput:"$handlers.selectInput",onBlur:"$handlers.blur","aria-describedby":"$describedBy","aria-required":"$state.required || undefined"}})),kq=ye("submit",()=>({$cmp:"FormKit",bind:"$submitAttrs",props:{type:"submit",label:"$submitLabel"}})),Hr=ye("suffix",null),gS=ye("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy","aria-required":"$state.required || undefined"}})),Nq=ye("input",()=>({$el:"textarea",bind:"$attrs",attrs:{disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy","aria-required":"$state.required || undefined"},children:"$initialValue"})),Zl=ye("wrapper","div"),Oq=0;function _S(t){(t.type==="group"||t.type==="list")&&t.plugins.add(Dq)}function Dq(t){t.props.type==="radio"&&(t.addProps(["altName"]),t.props.altName=`${t.name}_${Oq++}`)}function yS(t){return function(e,n){return e.prop==="options"&&Array.isArray(e.value)&&(e.value=e.value.map(r=>{var s;return(s=r.attrs)!=null&&s.id?r:Ns(r,{attrs:{id:`${t.props.id}-option-${Hg(String(r.value))}`}})}),t.props.type==="checkbox"&&!Array.isArray(t.value)&&(t.isCreated?t.input([],!1):t.on("created",()=>{Array.isArray(t.value)||t.input([],!1)}))),n(e)}}function xq(t,e){const n=e.target;if(n instanceof HTMLInputElement){const r=Array.isArray(t.props.options)?bi(t.props.options,n.value):n.value;Array.isArray(t.props.options)&&t.props.options.length?Array.isArray(t._value)?t._value.some(s=>Co(r,s))?t.input(t._value.filter(s=>!Co(r,s))):t.input([...t._value,r]):t.input([r]):n.checked?t.input(t.props.onValue):t.input(t.props.offValue)}}function Mq(t,e){var n,r;return(n=t.context)==null||n.value,(r=t.context)==null||r._value,Array.isArray(t._value)?t._value.some(s=>Co(bi(t.props.options,e),s)):!1}function Lq(t){t.on("created",()=>{var e,n;(e=t.context)!=null&&e.handlers&&(t.context.handlers.toggleChecked=xq.bind(null,t)),(n=t.context)!=null&&n.fns&&(t.context.fns.isChecked=Mq.bind(null,t)),Ee(t.props,"onValue")||(t.props.onValue=!0),Ee(t.props,"offValue")||(t.props.offValue=!1)}),t.hook.prop(yS(t))}function uo(t,e){return n=>{n.props[`${t}Icon`]===void 0&&(n.props[`${t}Icon`]=e.startsWith("<svg")?e:`default:${e}`)}}function Zg(t){t.on("created",()=>{"disabled"in t.props&&(t.props.disabled=zn(t.props.disabled),t.config.disabled=zn(t.props.disabled))}),t.hook.prop(({prop:e,value:n},r)=>(n=e==="disabled"?zn(n):n,r({prop:e,value:n}))),t.on("prop:disabled",({payload:e})=>{t.config.disabled=zn(e)})}function ru(t,e){return n=>{n.store.set(An({key:t,type:"ui",value:e||t,meta:{localize:!0,i18nArgs:[n]}}))}}var ld=typeof window<"u";function vS(t){t.target instanceof HTMLElement&&t.target.hasAttribute("data-file-hover")&&t.target.removeAttribute("data-file-hover")}function dw(t,e){e.target instanceof HTMLInputElement?t==="dragover"&&e.target.setAttribute("data-file-hover","true"):e.preventDefault(),t==="drop"&&vS(e)}function Vq(t){ru("noFiles","Select file")(t),ru("removeAll","Remove all")(t),ru("remove")(t),t.addProps(["_hasMultipleFiles"]),ld&&(window._FormKit_File_Drop||(window.addEventListener("dragover",dw.bind(null,"dragover")),window.addEventListener("drop",dw.bind(null,"drop")),window.addEventListener("dragleave",vS),window._FormKit_File_Drop=!0)),t.hook.input((e,n)=>n(Array.isArray(e)?e:[])),t.on("input",({payload:e})=>{t.props._hasMultipleFiles=Array.isArray(e)&&e.length>1?!0:void 0}),t.on("reset",()=>{if(t.props.id&&ld){const e=document.getElementById(t.props.id);e&&(e.value="")}}),t.on("created",()=>{Array.isArray(t.value)||t.input([],!1),t.context&&(t.context.handlers.resetFiles=e=>{if(e.preventDefault(),t.input([]),t.props.id&&ld){const n=document.getElementById(t.props.id);n&&(n.value=""),n==null||n.focus()}},t.context.handlers.files=e=>{var r,s;const n=[];if(e.target instanceof HTMLInputElement&&e.target.files){for(let i=0;i<e.target.files.length;i++){let o;(o=e.target.files.item(i))&&n.push({name:o.name,file:o})}t.input(n)}t.context&&(t.context.files=n),typeof((r=t.props.attrs)==null?void 0:r.onChange)=="function"&&((s=t.props.attrs)==null||s.onChange(e))})})}var pw=An({key:"loading",value:!0,visible:!1});async function Fq(t,e){const n=Math.random();if(t.props._submitNonce=n,e.preventDefault(),await t.settled,t.ledger.value("validating")&&(t.store.set(pw),await t.ledger.settled("validating"),t.store.remove("loading"),t.props._submitNonce!==n))return;const r=s=>s.store.set(An({key:"submitted",value:!0,visible:!1}));if(t.walk(r),r(t),t.emit("submit-raw"),typeof t.props.onSubmitRaw=="function"&&t.props.onSubmitRaw(e,t),t.ledger.value("blocking"))typeof t.props.onSubmitInvalid=="function"&&t.props.onSubmitInvalid(t),t.props.incompleteMessage!==!1&&ES(t);else if(typeof t.props.onSubmit=="function"){const s=t.props.onSubmit(t.hook.submit.dispatch(Ro(t.value)),t);if(s instanceof Promise){const i=t.props.disabled===void 0&&t.props.submitBehavior!=="live";i&&(t.props.disabled=!0),t.store.set(pw),await s,i&&(t.props.disabled=!1),t.store.remove("loading")}}else e.target instanceof HTMLFormElement&&e.target.submit()}function ES(t){t.store.set(An({blocking:!1,key:"incomplete",meta:{localize:t.props.incompleteMessage===void 0,i18nArgs:[{node:t}],showAsMessage:!0},type:"ui",value:t.props.incompleteMessage||"Form incomplete."}))}function $q(t){var e;t.props.isForm=!0,t.ledger.count("validating",n=>n.key==="validating"),(e=t.props).submitAttrs??(e.submitAttrs={disabled:t.props.disabled}),t.on("prop:disabled",({payload:n})=>{t.props.submitAttrs={...t.props.submitAttrs,disabled:n}}),t.on("created",()=>{var n;(n=t.context)!=null&&n.handlers&&(t.context.handlers.submit=Fq.bind(null,t)),Ee(t.props,"actions")||(t.props.actions=!0)}),t.on("prop:incompleteMessage",()=>{t.store.incomplete&&ES(t)}),t.on("settled:blocking",()=>t.store.remove("incomplete"))}function Uq(t){t.props.ignore===void 0&&(t.props.ignore=!0,t.parent=null)}function Bq(t){t.on("created",()=>{t.context&&(t.context.initialValue=t.value||"")})}function wS(t){if(typeof t.props.number>"u")return;const e=["number","range","hidden"].includes(t.props.type);t.hook.input((n,r)=>{if(n==="")return r(void 0);const s=t.props.number==="integer"?parseInt(n):parseFloat(n);return Number.isFinite(s)?r(s):r(e?void 0:n)})}function jq(t,e){e.target instanceof HTMLInputElement&&t.input(bi(t.props.options,e.target.value))}function qq(t,e){var n,r;return(n=t.context)==null||n.value,(r=t.context)==null||r._value,Co(bi(t.props.options,e),t._value)}function Hq(t){t.on("created",()=>{var e,n;Array.isArray(t.props.options)||ki(350,{node:t,inputType:"radio"}),(e=t.context)!=null&&e.handlers&&(t.context.handlers.toggleChecked=jq.bind(null,t)),(n=t.context)!=null&&n.fns&&(t.context.fns.isChecked=qq.bind(null,t))}),t.hook.prop(yS(t))}function Wq(t,e){if(rf(e))return!1;t.context&&t.context.value;const n="__original"in e?e.__original:e.value;return Array.isArray(t._value)?t._value.some(r=>Co(r,n)):(t._value===void 0||t._value===null&&!bS(t.props.options,null))&&e.attrs&&e.attrs["data-is-placeholder"]?!0:Co(n,t._value)}function bS(t,e){return t.some(n=>rf(n)?bS(n.options,e):("__original"in n?n.__original:n.value)===e)}async function zq(t,e){var n;typeof((n=t.props.attrs)==null?void 0:n.onChange)=="function"&&(await new Promise(r=>setTimeout(r,0)),await t.settled,t.props.attrs.onChange(e))}function Kq(t,e){const n=e.target,r=n.hasAttribute("multiple")?Array.from(n.selectedOptions).map(s=>bi(t.props.options,s.value)):bi(t.props.options,n.value);t.input(r)}function mw(t,e){return t.some(n=>n.attrs&&n.attrs["data-is-placeholder"])?t:[{label:e,value:"",attrs:{hidden:!0,disabled:!0,"data-is-placeholder":"true"}},...t]}function TS(t){const e=t.length>0?t[0]:void 0;if(e)return rf(e)?TS(e.options):"__original"in e?e.__original:e.value}function Gq(t){t.on("created",()=>{var n,r,s;const e=zn((n=t.props.attrs)==null?void 0:n.multiple);!e&&t.props.placeholder&&Array.isArray(t.props.options)&&(t.hook.prop(({prop:i,value:o},a)=>(i==="options"&&(o=mw(o,t.props.placeholder)),a({prop:i,value:o}))),t.props.options=mw(t.props.options,t.props.placeholder)),e?t.value===void 0&&t.input([],!1):t.context&&!t.context.options&&(t.props.attrs=Object.assign({},t.props.attrs,{value:t._value}),t.on("input",({payload:i})=>{t.props.attrs=Object.assign({},t.props.attrs,{value:i})})),(r=t.context)!=null&&r.handlers&&(t.context.handlers.selectInput=Kq.bind(null,t),t.context.handlers.onChange=zq.bind(null,t)),(s=t.context)!=null&&s.fns&&(t.context.fns.isSelected=Wq.bind(null,t),t.context.fns.showPlaceholder=(i,o)=>{if(!Array.isArray(t.props.options))return!1;const a=t.props.options.some(l=>{if(l.attrs&&"data-is-placeholder"in l.attrs)return!1;const u="__original"in l?l.__original:l.value;return on(i,u)});return o&&!a?!0:void 0})}),t.hook.input((e,n)=>{var r,s,i;return!t.props.placeholder&&e===void 0&&Array.isArray((r=t.props)==null?void 0:r.options)&&t.props.options.length&&!zn((i=(s=t.props)==null?void 0:s.attrs)==null?void 0:i.multiple)&&(e=TS(t.props.options)),n(e)})}function Dp(t){return!!(Wi(t)&&t.if&&t.if.startsWith("$slots.")&&typeof t.then=="string"&&t.then.startsWith("$slots.")&&"else"in t)}function Lr(t,e,n){const r=s=>{const i=e(s);if(n||Qu(i)&&"if"in i||Dp(i)){const o={if:t,then:i};return n&&(o.else=n(s)),o}else Dp(i)?Object.assign(i.else,{if:t}):Qu(i)&&Object.assign(i,{if:t});return i};return r._s=Go(),r}function ho(t,e){const n=r=>{const s=t({});return Dp(s)?(Array.isArray(s.else)||(s.else=ka(ka(s.else,e),t._s?r[t._s]:{})),s):ka(ka(s,e),t._s?r[t._s]:{})};return n._s=t._s,n}var gw={schema:Ni(Bs(Us("$message.value")),Zl(Eq(Dt("prefix"),qr(),wq("$label || $ui.submit.value"),Hr(),Dt("suffix"))),jr("$help")),type:"input",family:"button",props:[],features:[ru("submit"),Uq],schemaMemoKey:"h6st4epl3j8"},Qq={schema:Ni(Lr("$options == undefined",Zu(Xu(qr(),Yu(),eh(Dt("decorator")),Hr()),ho(Ju("$label"),{if:"$label"})),pS(mS("$label"),jr("$help"),dS(fS(Zu(Xu(qr(),ho(Yu(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),eh(Dt("decorator")),Hr()),ho(Ju("$option.label"),{if:"$option.label"})),hS("$option.help"))))),Lr("$options == undefined && $help",jr("$help")),Bs(Us("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[Xg,Lq,uo("decorator","checkboxDecorator")],schemaMemoKey:"qje02tb3gu8"},Yq={schema:Ni(Zl(of("$label"),sf(Dt("prefix","label"),qr(),bq(),Iq(Tq(Dt("fileItem"),Aq("$file.name"),Lr("$value.length === 1",uw(Dt("fileRemove"),'$ui.remove.value + " " + $file.name')))),Lr("$value.length > 1",uw("$ui.removeAll.value")),Sq(Dt("noFiles"),"$ui.noFiles.value"),Hr(),Dt("suffix"))),jr("$help"),Bs(Us("$message.value"))),type:"input",family:"text",props:[],features:[Vq,uo("fileItem","fileItem"),uo("fileRemove","fileRemove"),uo("noFiles","noFiles")],schemaMemoKey:"9kqc4852fv8"},Xq={schema:Rq("$slots.default",Bs(Us("$message.value")),vq(kq())),type:"group",props:["actions","submit","submitLabel","submitAttrs","submitBehavior","incompleteMessage"],features:[$q,Zg],schemaMemoKey:"5bg016redjo"},Jq={schema:Jg("$slots.default"),type:"group",props:[],features:[Zg,_S]},Zq={schema:gS(),type:"input",props:[],features:[wS]},e9={schema:Jg("$slots.default"),type:"list",props:["sync","dynamic"],features:[Zg,_S]},t9={schema:Jg(),type:"input",props:[],features:[]},n9={schema:Ni(Lr("$options == undefined",Zu(Xu(qr(),Yu(),eh(Dt("decorator")),Hr()),ho(Ju("$label"),{if:"$label"})),pS(mS("$label"),jr("$help"),dS(fS(Zu(Xu(qr(),ho(Yu(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),eh(Dt("decorator")),Hr()),ho(Ju("$option.label"),{if:"$option.label"})),hS("$option.help"))))),Lr("$options == undefined && $help",jr("$help")),Bs(Us("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[Xg,Hq,uo("decorator","radioDecorator")],schemaMemoKey:"qje02tb3gu8"},r9={schema:Ni(Zl(of("$label"),sf(Dt("prefix"),qr(),Pq(Lr("$slots.default",()=>"$slots.default",fw(Lr("$option.group",Cq(fw(hw("$option.label"))),hw("$option.label"))))),Lr("$attrs.multiple !== undefined",()=>"",Dt("select")),Hr(),Dt("suffix"))),jr("$help"),Bs(Us("$message.value"))),type:"input",props:["options","placeholder","optionsLoader"],features:[Xg,Gq,uo("select","select")],schemaMemoKey:"cb119h43krg"},s9={schema:Ni(Zl(of("$label"),sf(Dt("prefix","label"),qr(),Nq(),Hr(),Dt("suffix"))),jr("$help"),Bs(Us("$message.value"))),type:"input",props:[],features:[Bq],schemaMemoKey:"b1n0td79m9g"},an={schema:Ni(Zl(of("$label"),sf(Dt("prefix","label"),qr(),gS(),Hr(),Dt("suffix"))),jr("$help"),Bs(Us("$message.value"))),type:"input",family:"text",props:[],features:[wS],schemaMemoKey:"c3cc4kflsg"},i9={button:gw,submit:gw,checkbox:Qq,file:Yq,form:Xq,group:Jq,hidden:Zq,list:e9,meta:t9,radio:n9,select:r9,textarea:s9,text:an,color:an,date:an,datetimeLocal:an,email:an,month:an,number:an,password:an,search:an,tel:an,time:an,url:an,week:an,range:an};function o9(t){const e={};return Object.keys(t).forEach(n=>{Object.keys(t[n]).forEach(r=>{e[r]?e[r][n]=t[n][r]:e[r]={[n]:t[n][r]}})}),Object.keys(e).forEach(n=>{const r=e[n];e[n]=function(s,i){return a9(s,i,r)}}),e}function a9(t,e,n){const r=t.props.type,s=t.props.family;let i="";n.global&&(i+=n.global+" "),n[`family:${s}`]&&(i+=n[`family:${s}`]+" "),n[r]&&(i+=n[r]);const o=i.split("$reset");return o.length>1?`$reset ${o[o.length-1].trim()}`:o[0].trim()}var Kn=void 0,ir=null,th,IS=!1,Na=!1,l9=new Promise(t=>{th=()=>{IS=!0,t()}}),Vr=typeof window<"u"&&typeof fetch<"u";Kn=Vr?getComputedStyle(document.documentElement):void 0;var Yi={},cd={};function c9(t,e,n,r){e&&Object.assign(Yi,e),Vr&&!Na&&(Kn!=null&&Kn.getPropertyValue("--formkit-theme"))?(th(),Na=!0):t&&!Na&&Vr?u9(t):!Na&&Vr&&th();const s=function(o){var a,l;o.addProps(["iconLoader","iconLoaderUrl"]),o.props.iconHandler=_w((a=o.props)!=null&&a.iconLoader?o.props.iconLoader:r,(l=o.props)!=null&&l.iconLoaderUrl?o.props.iconLoaderUrl:n),d9(o,o.props.iconHandler),o.on("created",()=>{var u,h;(u=o==null?void 0:o.context)!=null&&u.handlers&&(o.context.handlers.iconClick=f=>{const p=`on${f.charAt(0).toUpperCase()}${f.slice(1)}IconClick`,g=o.props[p];if(g&&typeof g=="function")return _=>g(o,_)}),(h=o==null?void 0:o.context)!=null&&h.fns&&(o.context.fns.iconRole=f=>{const p=`on${f.charAt(0).toUpperCase()}${f.slice(1)}IconClick`;return typeof o.props[p]=="function"?"button":null})})};return s.iconHandler=_w(r,n),s}function u9(t){if(!(!t||!Vr||typeof getComputedStyle!="function")&&(Na=!0,ir=document.getElementById("formkit-theme"),t&&Vr&&(!(Kn!=null&&Kn.getPropertyValue("--formkit-theme"))&&!ir||ir!=null&&ir.getAttribute("data-theme")&&(ir==null?void 0:ir.getAttribute("data-theme"))!==t))){const n=`https://cdn.jsdelivr.net/npm/@formkit/themes@${Gu.startsWith("__")?"latest":Gu}/dist/${t}/theme.css`,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.id="formkit-theme",r.setAttribute("data-theme",t),r.onload=()=>{Kn=getComputedStyle(document.documentElement),th()},document.head.appendChild(r),r.href=n,ir&&ir.remove()}}function _w(t,e){return n=>{if(typeof n!="string")return;if(n.startsWith("<svg"))return n;const r=n.startsWith("default:");n=r?n.split(":")[1]:n;const s=n in Yi;let i;if(s)return Yi[n];if(!cd[n]){if(i=h9(n),i=Vr&&typeof i>"u"?Promise.resolve(i):i,i instanceof Promise)cd[n]=i.then(o=>!o&&typeof n=="string"&&!r?i=typeof t=="function"?t(n):f9(n,e):o).then(o=>(typeof n=="string"&&(Yi[r?`default:${n}`:n]=o),o));else if(typeof i=="string")return Yi[r?`default:${n}`:n]=i,i}return cd[n]}}function h9(t){if(Vr)return IS?yw(t):l9.then(()=>yw(t))}function yw(t){const e=Kn==null?void 0:Kn.getPropertyValue(`--fk-icon-${t}`);if(e){const n=atob(e);if(n.startsWith("<svg"))return Yi[t]=n,n}}function f9(t,e){const n=Gu.startsWith("__")?"latest":Gu,r=typeof e=="function"?e(t):`https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${t}.svg`;if(Vr)return fetch(`${r}`).then(async s=>{const i=await s.text();if(i.startsWith("<svg"))return i}).catch(s=>{console.error(s)})}function d9(t,e){const n=/^[a-zA-Z-]+(?:-icon|Icon)$/;Object.keys(t.props).filter(s=>n.test(s)).forEach(s=>p9(t,e,s))}function p9(t,e,n){const r=t.props[n],s=e(r),i=`_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;if(t.addProps([i,o]),t.on(`prop:${n}`,m9),s instanceof Promise)return s.then(a=>{t.props[i]=a});t.props[i]=s}function m9(t){var o;const e=t.origin,n=t.payload,r=(o=e==null?void 0:e.props)==null?void 0:o.iconHandler,s=t.name.split(":")[1],i=`_raw${s.charAt(0).toUpperCase()}${s.slice(1)}`;if(r&&typeof r=="function"){const a=r(n);if(a instanceof Promise)return a.then(l=>{e.props[i]=l});e.props[i]=a}}var vw={100:({data:t})=>`Only groups, lists, and forms can have children (${t.name}).`,101:({data:t})=>`You cannot directly modify the store (${t.name}). See: https://formkit.com/advanced/core#message-store`,102:({data:[t,e]})=>`You cannot directly assign node.${e} (${t.name})`,103:({data:[t]})=>`Schema expressions cannot start with an operator (${t})`,104:({data:[t,e]})=>`Schema expressions cannot end with an operator (${t} in "${e}")`,105:({data:t})=>`Invalid schema expression: ${t}`,106:({data:t})=>`Cannot submit because (${t}) is not in a form.`,107:({data:[t,e]})=>`Cannot set ${t.name} to non object value: ${e}`,108:({data:[t,e]})=>`Cannot set ${t.name} to non array value: ${e}`,300:({data:[t]})=>`Cannot set behavior prop to overscroll (on ${t.name} input) when options prop is a function.`,600:({data:t})=>`Unknown input type${typeof t.props.type=="string"?' "'+t.props.type+'"':""} ("${t.name}")`,601:({data:t})=>`Input definition${typeof t.props.type=="string"?' "'+t.props.type+'"':""} is missing a schema or component property (${t.name}).`},Ew={150:({data:t})=>`Schema function "${t}()" is not a valid function.`,151:({data:t})=>`No form element with id: ${t}`,152:({data:t})=>`No input element with id: ${t}`,350:({data:{node:t,inputType:e}})=>`Invalid options prop for ${t.name} input (${e}). See https://formkit.com/inputs/${e}`,650:'Schema "$get()" must use the id of an input to access.',651:({data:t})=>`Cannot setErrors() on "${t}" because no such id exists.`,652:({data:t})=>`Cannot clearErrors() on "${t}" because no such id exists.`,800:({data:t})=>`${t} is deprecated.`},g9=(t,e)=>{if(t.code in vw){const n=vw[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},ww=!1;function _9(){ww||(zg(g9),Kg(y9),ww=!0)}var y9=(t,e)=>{if(t.code in Ew){const n=Ew[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},v9=Object.defineProperty,E9=Object.getOwnPropertyNames,AS=(t,e)=>function(){return t&&(e=(0,t[E9(t)[0]])(t=0)),e},w9=(t,e)=>{for(var n in e)v9(t,n,{get:e[n],enumerable:!0})},bw,RS,SS=AS({"packages/vue/src/bindings.ts"(){bw=function(e){e.ledger.count("blocking",E=>E.blocking);const n=Ae(!e.ledger.value("blocking"));e.ledger.count("errors",E=>E.type==="error");const r=Ae(!!e.ledger.value("errors"));let s=!1;fh(()=>{s=!0});const i=lr(e.store.reduce((E,R)=>(R.visible&&(E[R.key]=R),E),{})),o=Ae(e.props.validationVisibility||(e.props.type==="checkbox"?"dirty":"blur"));e.on("prop:validationVisibility",({payload:E})=>{o.value=E});const a=Ae(o.value==="live"),l=Ae(!1),u=E=>{l.value=(E??[]).some(R=>R.name==="required")};u(e.props.parsedRules),e.on("prop:parsedRules",({payload:E})=>u(E));const h=Ae(e.children.map(E=>E.uid)),f=Ze(()=>{if(!k.state)return!1;if(k.state.submitted)return!0;if(!a.value&&!k.state.settled)return!1;switch(o.value){case"live":return!0;case"blur":return k.state.blurred;case"dirty":return k.state.dirty;default:return!1}}),p=Ze(()=>!k.state.passing&&f.value),g=Ze(()=>k&&_.value?n.value&&!r.value:k.state.dirty&&!Dn(k.value)),_=Ae(Array.isArray(e.props.parsedRules)&&e.props.parsedRules.length>0);e.on("prop:parsedRules",({payload:E})=>{_.value=Array.isArray(E)&&E.length>0});const v=Ze(()=>{const E={};for(const R in i){const T=i[R];(T.type!=="validation"||f.value)&&(E[R]=T)}return E}),A=lr(e.store.reduce((E,R)=>(R.type==="ui"&&R.visible&&(E[R.key]=R),E),{})),S=lr({}),O=new Proxy(S,{get(...E){const[R,T]=E;let he=Reflect.get(...E);return!he&&typeof T=="string"&&!Ee(R,T)&&!T.startsWith("__v")&&bl(e).watch(Y=>{const de=typeof Y.config.rootClasses=="function"?Y.config.rootClasses(T,Y):{},be=Y.config.classes?nu(T,Y,Y.config.classes[T]):{},at=nu(T,Y,Y.props[`_${T}Class`]),It=nu(T,Y,Y.props[`${T}Class`]);he=FB(Y,T,de,be,at,It),R[T]=he??""}),he}});e.on("prop:rootClasses",()=>{const E=Object.keys(S);for(const R of E)delete S[R]});const D=Ze(()=>{const E=[];k.help&&E.push(`help-${e.props.id}`);for(const R in v.value)E.push(`${e.props.id}-${R}`);return E.length?E.join(" "):void 0}),x=Ae(e.value),F=Ae(e.value),k=lr({_value:F,attrs:e.props.attrs,disabled:e.props.disabled,describedBy:D,fns:{length:E=>Object.keys(E).length,number:E=>Number(E),string:E=>String(E),json:E=>JSON.stringify(E),eq:on},handlers:{blur:E=>{e&&(e.store.set(An({key:"blurred",visible:!1,value:!0})),typeof e.props.attrs.onBlur=="function"&&e.props.attrs.onBlur(E))},touch:()=>{var T;const E=k.dirtyBehavior==="compare";if((T=e.store.dirty)!=null&&T.value&&!E)return;const R=!on(e.props._init,e._value);!R&&!E||e.store.set(An({key:"dirty",visible:!1,value:R}))},DOMInput:E=>{e.input(E.target.value),e.emit("dom-input-event",E)}},help:e.props.help,id:e.props.id,items:h,label:e.props.label,messages:v,didMount:!1,node:Oo(e),options:e.props.options,defaultMessagePlacement:!0,slots:e.props.__slots,state:{blurred:!1,complete:g,dirty:!1,empty:Dn(x),submitted:!1,settled:e.isSettled,valid:n,invalid:p,errors:r,rules:_,validationVisible:f,required:l,passing:!0},type:e.props.type,family:e.props.family,ui:A,value:x,classes:O});e.on("created",()=>{on(k.value,e.value)||(F.value=e.value,x.value=e.value,Tc(x),Tc(F)),(async()=>(await e.settled,e&&(e.props._init=Wn(e.value))))()}),e.on("mounted",()=>{k.didMount=!0}),e.on("settled",({payload:E})=>{k.state.settled=E});function I(E){(Array.isArray(E)?E:Object.keys(E)).forEach(T=>{T=co(T),Ee(k,T)||(k[T]=e.props[T]),e.on(`prop:${T}`,({payload:he})=>{k[T]=he})})}I((()=>{const E=["__root","help","label","disabled","options","type","attrs","preserve","preserveErrors","id","dirtyBehavior"],R=/^[a-zA-Z-]+(?:-icon|Icon)$/,T=Object.keys(e.props).filter(he=>R.test(he));return E.concat(T)})());function b(E){E.props&&I(E.props)}e.props.definition&&b(e.props.definition),e.on("added-props",({payload:E})=>I(E)),e.on("input",({payload:E})=>{e.type!=="input"&&!st(E)&&!dr(E)?F.value=Tp(E):(F.value=E,Tc(F))}),e.on("commitRaw",({payload:E})=>{e.type!=="input"&&!st(E)&&!dr(E)?x.value=F.value=Tp(E):(x.value=F.value=E,Tc(x)),e.emit("modelUpdated")}),e.on("commit",({payload:E})=>{var R;if((!k.state.dirty||k.dirtyBehavior==="compare")&&e.isCreated&&s)if(!((R=e.store.validating)!=null&&R.value))k.handlers.touch();else{const T=e.on("message-removed",({payload:he})=>{he.key==="validating"&&(k.handlers.touch(),e.off(T))})}g&&e.type==="input"&&r.value&&!zn(e.props.preserveErrors)&&e.store.filter(T=>{var he;return!(T.type==="error"&&((he=T.meta)==null?void 0:he.autoClear)===!0)}),e.type==="list"&&e.sync&&(h.value=e.children.map(T=>T.uid)),k.state.empty=Dn(E)});const P=async E=>{E.type==="ui"&&E.visible&&!E.meta.showAsMessage?A[E.key]=E:E.visible?i[E.key]=E:E.type==="state"&&(k.state[E.key]=!!E.value)};e.on("message-added",E=>P(E.payload)),e.on("message-updated",E=>P(E.payload)),e.on("message-removed",({payload:E})=>{delete A[E.key],delete i[E.key],delete k.state[E.key]}),e.on("settled:blocking",()=>{n.value=!0}),e.on("unsettled:blocking",()=>{n.value=!1}),e.on("settled:errors",()=>{r.value=!1}),e.on("unsettled:errors",()=>{r.value=!0}),Gn(f,E=>{E&&(a.value=!0)}),e.context=k,e.emit("context",e,!1),e.on("destroyed",()=>{e.context=void 0,e=null})},RS=bw}}),b9={};w9(b9,{defaultConfig:()=>e_});var e_,T9=AS({"packages/vue/src/defaultConfig.ts"(){SS(),e_=(t={})=>{_9();const{rules:e={},locales:n={},inputs:r={},messages:s={},locale:i=void 0,theme:o=void 0,iconLoaderUrl:a=void 0,iconLoader:l=void 0,icons:u={},...h}=t,f=Xj({...Yj,...e||{}}),p=mq(Ns({en:pq,...n||{}},s)),g=gq(i9,r),_=c9(o,u,a,l);return Ns({plugins:[g,_,RS,p,f],...i?{config:{locale:i}}:{}},h||{},!0)}}}),I9=typeof window>"u",ud=new Map;function A9(t,e){var n;!I9||!t||(ud.has(t)||ud.set(t,new Set),(n=ud.get(t))==null||n.add(e))}var CS=typeof window>"u",Xa={},fo={},nn,Sr=new WeakMap,R9="__raw__",S9=/[a-zA-Z0-9\-][cC]lass$/;function C9(t,e){const n=Ae(null);if(t==="get"){const s={};return n.value=P9.bind(null,s),n}const r=t.split(".");return Un(()=>{n.value=t_(st(e)?e.value:e,r)}),n}function t_(t,e){if(Array.isArray(t)){for(const s of t){const i=s!==!1&&t_(s,e);if(i!==void 0)return i}return}let n,r=t;for(const s in e){const i=e[s];if(typeof r!="object"||r===null){n=void 0;break}const o=r[i];if(Number(s)===e.length-1&&o!==void 0){n=typeof o=="function"?o.bind(r):o;break}r=o}return n}function P9(t,e){if(typeof e!="string")return ki(650);if(e in t||(t[e]=Ae(void 0)),t[e].value===void 0){t[e].value=null;const n=Xl(e);n&&(t[e].value=n.context),q4(e,({payload:r})=>{t[e].value=Jl(r)?r.context:r})}return t[e].value}function Tw(t,e,n){function r(g,_){const v=f(Fn(_.if),{if:!0}),A=u(g,_.then),S=_.else?u(g,_.else):null;return[v,A,S]}function s(g,_){var O,D;const v=f(Fn(g.if));let A=()=>_,S=()=>_;return typeof g.then=="object"?S=i(g.then,void 0):typeof g.then=="string"&&((O=g.then)!=null&&O.startsWith("$"))?S=f(Fn(g.then)):S=()=>g.then,Ee(g,"else")&&(typeof g.else=="object"?A=i(g.else):typeof g.else=="string"&&((D=g.else)!=null&&D.startsWith("$"))?A=f(Fn(g.else)):A=()=>g.else),()=>v()?S():A()}function i(g,_,v={}){const A=new Set(Object.keys(g||{})),S=_?f(Fn(_)):()=>({}),O=[D=>{const x=S();for(const F in x)A.has(F)||(D[F]=x[F])}];if(g){if(Wi(g))return s(g,v);for(let D in g){const x=g[D];let F;const k=typeof x=="string";D.startsWith(R9)?(D=D.substring(7),F=()=>x):k&&x.startsWith("$")&&x.length>1&&!(x.startsWith("$reset")&&S9.test(D))?F=f(Fn(x)):typeof x=="object"&&Wi(x)?F=s(x,void 0):typeof x=="object"&&Ao(x)?F=i(x):F=()=>x,O.push(I=>{I[D]=F()})}}return()=>{const D=Array.isArray(g)?[]:{};return O.forEach(x=>x(D)),D}}function o(g,_){let v=null,A=()=>null,S=!1,O=null,D=null,x=null,F=!1;const k=VB(_);if(Cp(k)?(v=k.$el,A=k.$el!=="text"?i(k.attrs,k.bind):()=>null):Pp(k)?(typeof k.$cmp=="string"?Ee(g,k.$cmp)?v=g[k.$cmp]:(v=k.$cmp,F=!0):v=k.$cmp,A=i(k.props,k.bind)):Wi(k)&&([S,O,D]=r(g,k)),!Wi(k)&&"if"in k?S=f(Fn(k.if)):!Wi(k)&&v===null&&(S=()=>!0),"children"in k&&k.children)if(typeof k.children=="string")if(k.children.startsWith("$slots."))v=v==="text"?"slot":v,O=f(Fn(k.children));else if(k.children.startsWith("$")&&k.children.length>1){const I=f(Fn(k.children));O=()=>String(I())}else O=()=>String(k.children);else if(Array.isArray(k.children))O=u(g,k.children);else{const[I,y,b]=r(g,k.children);O=P=>I&&I()?y&&y(P):b&&b(P)}if(Pp(k))if(O){const I=O;O=y=>({default(b,P){var T,he,Re,Y;const E=nn;P&&(nn=P),b&&((T=Sr.get(nn))==null||T.unshift(b)),y&&((he=Sr.get(nn))==null||he.unshift(y));const R=I(y);return b&&((Re=Sr.get(nn))==null||Re.shift()),y&&((Y=Sr.get(nn))==null||Y.shift()),nn=E,R}}),O.slot=!0}else O=()=>({});if("for"in k&&k.for){const I=k.for.length===3?k.for[2]:k.for[1];x=[typeof I=="string"&&I.startsWith("$")?f(Fn(I)):()=>I,k.for[0],k.for.length===3?String(k.for[1]):null]}return[S,v,A,O,D,x,F]}function a(g,_){const v=g(_),A=nn;return Object.keys(v).reduce((S,O)=>{const D=v&&v[O];return S[O]=x=>D&&D(x,A)||null,S},{})}function l(g,_){const[v,A,S,O,D,x,F]=o(g,_);let k=I=>{if(v&&A===null&&O)return v()?O(I):D&&D(I);if(A&&(!v||v())){if(A==="text"&&O)return Pt(String(O()));if(A==="slot"&&O)return O(I);const y=F?mh(A):A,b=O!=null&&O.slot?a(O,I):null;return po(y,S(),b||(O?O(I):[]))}return typeof D=="function"?D(I):D};if(x){const I=k,[y,b,P]=x;k=()=>{const E=y(),R=Number.isFinite(E)?Array(Number(E)).fill(0).map((Y,de)=>de):E,T=[];if(typeof R!="object")return null;const he=Sr.get(nn)||[],Re=Array.isArray(R);for(const Y in R){if(Re&&Y in Array.prototype)continue;const de=Object.defineProperty({...he.reduce((be,at)=>be.__idata?{...be,...at}:at,{}),[b]:R[Y],...P!==null?{[P]:Re?Number(Y):Y}:{}},"__idata",{enumerable:!1,value:!0});he.unshift(de),T.push(I.bind(null,de)()),he.shift()}return T}}return k}function u(g,_){if(Array.isArray(_)){const A=_.map(l.bind(null,g));return S=>A.map(O=>O(S))}const v=l(g,_);return A=>v(A)}const h=[];function f(g,_={}){const v=new WeakMap;return h.push((A,S)=>{v.set(S,g.provide(O=>A(O,_)))}),()=>v.get(nn)()}function p(g,_){n??(n=kS(e));const[v,A]=Ee(Xa,n)?Xa[n]:[u(t,e),h];return CS||(fo[n]??(fo[n]=0),fo[n]++,Xa[n]=[v,A]),A.forEach(S=>{S(g,_)}),()=>(nn=_,v())}return p}function PS(t,e){const n=Sr.get(nn)||[];let r;return n.length&&(r=t_(n,t.split("."))),r===void 0?e:r}function k9(t,e){return new Proxy(t,{get(...n){let r;const s=n[1];if(typeof s=="string"){const i=nn;nn=e,r=PS(s,void 0),nn=i}return r!==void 0?r:Reflect.get(...n)}})}function Iw(t,e,n){return t((r,s={})=>r.reduce((i,o)=>{if(o.startsWith("slots.")){const a=o.substring(6),l=()=>e.slots&&Ee(e.slots,a)&&typeof e.slots[a]=="function";if(s.if)i[o]=l;else if(e.slots){const u=k9(e,n);i[o]=()=>l()?e.slots[a](u):null}}else{const a=C9(o,e);i[o]=()=>PS(o,a.value)}return i},{}),n)}function Aw(t,e,n){if(e??(e=kS(t)),fo[e]--,fo[e]===0){delete fo[e];const[,r]=Xa[e];delete Xa[e],r.length=0}Sr.delete(n)}function kS(t){return JSON.stringify(t,(e,n)=>typeof n=="function"?n.toString():n)}var NS=gh({name:"FormKitSchema",props:{schema:{type:[Array,Object],required:!0},data:{type:Object,default:()=>({})},library:{type:Object,default:()=>({})},memoKey:{type:String,required:!1}},emits:["mounted"],setup(t,e){var u;const n=Rs();let r={};Sr.set(r,[]);const s={FormKit:Oo(DS),...t.library};let i=Tw(s,t.schema,t.memoKey),o,a;CS||Gn(()=>t.schema,(h,f)=>{var g;const p=r;r={},Sr.set(r,[]),i=Tw(s,t.schema,t.memoKey),o=Iw(i,a,r),h===f&&((g=n==null?void 0:n.proxy)==null?void 0:g.$forceUpdate).call(g),Aw(t.schema,t.memoKey,p)},{deep:!0}),Un(()=>{a=Object.assign(lr(t.data??{}),{slots:e.slots}),e.slots,o=Iw(i,a,r)});function l(){Aw(t.schema,t.memoKey,r),a.node&&a.node.destroy(),a.slots=null,a=null,o=null}return Do(()=>e.emit("mounted")),lm(l),A9((u=Rs())==null?void 0:u.appContext.app,l),()=>o?o():null}}),N9=NS,O9=typeof window>"u",Rw=Symbol("FormKitParent"),D9=Symbol("FormKitComponentCallback");function x9(t,e){const n=j9(t,e);if(n.props.definition||In(600,n),n.props.definition.component)return()=>{var u;return po((u=n.props.definition)==null?void 0:u.component,{context:n.context},{...e.slots})};const r=Ae([]);let s=n.props.definition.schemaMemoKey;const i=()=>{var h,f;const u=(f=(h=n.props)==null?void 0:h.definition)==null?void 0:f.schema;u||In(601,n),typeof u=="function"?(r.value=u({...t.sectionsSchema||{}}),(s&&t.sectionsSchema||"memoKey"in u&&typeof u.memoKey=="string")&&(s=(s??(u==null?void 0:u.memoKey))+JSON.stringify(t.sectionsSchema))):r.value=u};i(),O9||n.on("schema",()=>{s+="♻️",i()}),e.emit("node",n);const o=n.props.definition.library,a={FormKit:Oo(OS),...o,...t.library??{}};function l(){n.emit("mounted")}return e.expose({node:n}),()=>po(NS,{schema:r.value,data:n.context,onMounted:l,library:a,memoKey:s},{...e.slots})}var OS=gh(x9,{props:_q,inheritAttrs:!1}),DS=OS,M9=Symbol();function L9(t,e){return t.component(e.alias||"FormKit",DS).component(e.schemaAlias||"FormKitSchema",N9),{get:Xl,setLocale:n=>{var r;(r=e.config)!=null&&r.rootConfig&&(e.config.rootConfig.locale=n)},clearErrors:UB,setErrors:$B,submit:jR,reset:qR}}var xS=Symbol.for("FormKitOptions"),V9=Symbol.for("FormKitConfig"),F9={install(t,e){const n=Object.assign({alias:"FormKit",schemaAlias:"FormKitSchema"},typeof e=="function"?e():e),r=H4(n.config||{});n.config={rootConfig:r},t.config.globalProperties.$formkit=L9(t,n),t.provide(xS,n),t.provide(V9,r),typeof window<"u"&&(globalThis.__FORMKIT_CONFIGS__=(globalThis.__FORMKIT_CONFIGS__||[]).concat([r]))}},$9=typeof window<"u",hd=["ignore","disabled","preserve","help","label",/^preserve(-e|E)rrors/,/^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,/^[a-zA-Z-]+(?:-class|Class)$/,"prefixIcon","suffixIcon",/^[a-zA-Z-]+(?:-icon|Icon)$/],U9=["disabled","ignore","preserve"];function Sw(t,e){e.classes&&Object.keys(e.classes).forEach(n=>{typeof n=="string"&&(t.props[`_${n}Class`]=e.classes[n],Ya(e.classes[n])&&n==="inner"&&Object.values(e.classes[n]))})}function B9(t){return t?["Submit","SubmitRaw","SubmitInvalid"].reduce((n,r)=>{const s=`on${r}`;return s in t&&typeof t[s]=="function"&&(n[s]=t[s]),n},{}):{}}function j9(t,e,n={}){const r=Object.assign({},xt(xS)||{},n),s=xt(M9,Ae($9?document:void 0)),i=xt(D9,()=>{}),o=Rs(),a=B9(o==null?void 0:o.vnode.props),l=["modelValue","model-value"].some(k=>k in((o==null?void 0:o.vnode.props)??{}));let u=!1;Do(()=>{u=!0});const h=t.modelValue!==void 0?t.modelValue:Wn(e.attrs.value);function f(){const k={...Bi(t),...a,type:t.type??"text",__root:s.value,__slots:e.slots},I=ZE(Bi(e.attrs),hd);I.key||(I.key=Go()),k.attrs=I;const y=ew(Bi(e.attrs),hd);for(const P in y)U9.includes(P)&&y[P]===""&&(y[P]=!0),k[co(P)]=y[P];const b={props:{}};return Sw(b,t),Object.assign(k,b.props),typeof k.type!="string"&&(k.definition=k.type,delete k.type),k}const p=f(),g=p.ignore?null:t.parent||xt(Rw,null),_=MB(Ns(r||{},{name:t.name||void 0,value:h,parent:g,plugins:(r.plugins||[]).concat(t.plugins??[]),config:t.config||{},props:p,index:t.index,sync:!!zn(e.attrs.sync||e.attrs.dynamic)},!1,!0));i(_),_.props.definition||In(600,_);const v=Ae(new Set(Array.isArray(_.props.__propDefs)?_.props.__propDefs:Object.keys(_.props.__propDefs??{})));_.on("added-props",({payload:k})=>{(Array.isArray(k)?k:Object.keys(k??{})).forEach(y=>v.value.add(y))});const A=Ze(()=>hd.concat([...v.value]).reduce((k,I)=>(typeof I=="string"?(k.push(co(I)),k.push(VR(I))):k.push(I),k),[]));Un(()=>Sw(_,t));const S=Bi(t);for(const k in S)Gn(()=>t[k],()=>{t[k]!==void 0&&(_.props[k]=t[k])});Un(()=>{_.props.__root=s.value});const O=new Set,D=Bi(e.attrs);Un(()=>{x(ew(D,A.value))});function x(k){O.forEach(I=>{I(),O.delete(I)});for(const I in k){const y=co(I);O.add(Gn(()=>e.attrs[I],()=>{_.props[y]=e.attrs[I]}))}}if(Un(()=>{const k=ZE(Bi(e.attrs),A.value);"multiple"in k&&(k.multiple=zn(k.multiple)),typeof k.onBlur=="function"&&(k.onBlur=T4(k.onBlur)),_.props.attrs=Object.assign({},_.props.attrs||{},k)}),Un(()=>{const k=(t.errors??[]).map(I=>An({key:Hg(I),type:"error",value:I,meta:{source:"prop"}}));_.store.apply(k,I=>I.type==="error"&&I.meta.source==="prop")}),_.type!=="input"){const k=`${_.name}-prop`;Un(()=>{const I=t.inputErrors??{},y=Object.keys(I);y.length||_.clearErrors(!0,k);const b=y.reduce((P,E)=>{let R=I[E];return typeof R=="string"&&(R=[R]),Array.isArray(R)&&(P[E]=R.map(T=>An({key:T,type:"error",value:T,meta:{source:k}}))),P},{});_.store.apply(b,P=>P.type==="error"&&P.meta.source===k)})}Un(()=>Object.assign(_.config,t.config)),_.type!=="input"&&La(Rw,_);let F;return _.on("modelUpdated",()=>{var k,I;e.emit("inputRaw",(k=_.context)==null?void 0:k.value,_),u&&e.emit("input",(I=_.context)==null?void 0:I.value,_),l&&_.context&&(F=Wn(_.value),e.emit("update:modelValue",Tp(_.value)))}),l&&(Gn(Db(t,"modelValue"),k=>{on(F,k)||_.input(k,!1)},{deep:!0}),_.value!==h&&_.emit("modelUpdated")),am(()=>_.destroy()),_}var q9=ye("messages",()=>({$el:"ul",if:"$fns.length($messages)"})),H9=ye("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}}));q9(H9("$message.value"));var W9=ye("summary",()=>({$el:"div",attrs:{"aria-live":"polite"}})),z9=ye("summaryInner",()=>({$el:"div",if:"$summaries.length && $showSummaries"})),K9=ye("messages",()=>({$el:"ul",if:"$summaries.length && $showSummaries"})),G9=ye("message",()=>({$el:"li",for:["summary","$summaries"],attrs:{key:"$summary.key","data-message-type":"$summary.type"}})),Q9=ye("summaryHeader",()=>({$el:"h2",attrs:{id:"$id"}})),Y9=ye("messageLink",()=>({$el:"a",attrs:{id:"$summary.key",href:'$: "#" + $summary.id',onClick:"$jumpLink"}}));W9(z9(Q9("$summaryHeader"),K9(G9(Y9("$summary.message")))));T9();SS();const X9={config:{classes:o9({global:{label:"block mb-1 font-bold text-lg",message:"text-red-500 mb-5",wrapper:"space-y-2 mb-3",input:"w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400"},file:{noFiles:"block my-2",fileItem:"hidden"},submit:{input:"$reset bg-green-400 hover:bg-green-500 w-full p-2 font-bold uppercase disabled:opacity-50"}})}};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zi=typeof document<"u";function J9(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const We=Object.assign;function fd(t,e){const n={};for(const r in e){const s=e[r];n[r]=tr(s)?s.map(t):t(s)}return n}const Ja=()=>{},tr=Array.isArray,MS=/#/g,Z9=/&/g,eH=/\//g,tH=/=/g,nH=/\?/g,LS=/\+/g,rH=/%5B/g,sH=/%5D/g,VS=/%5E/g,iH=/%60/g,FS=/%7B/g,oH=/%7C/g,$S=/%7D/g,aH=/%20/g;function n_(t){return encodeURI(""+t).replace(oH,"|").replace(rH,"[").replace(sH,"]")}function lH(t){return n_(t).replace(FS,"{").replace($S,"}").replace(VS,"^")}function xp(t){return n_(t).replace(LS,"%2B").replace(aH,"+").replace(MS,"%23").replace(Z9,"%26").replace(iH,"`").replace(FS,"{").replace($S,"}").replace(VS,"^")}function cH(t){return xp(t).replace(tH,"%3D")}function uH(t){return n_(t).replace(MS,"%23").replace(nH,"%3F")}function hH(t){return t==null?"":uH(t).replace(eH,"%2F")}function Tl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fH=/\/$/,dH=t=>t.replace(fH,"");function dd(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_H(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Tl(o)}}function pH(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cw(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mH(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Po(e.matched[r],n.matched[s])&&US(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Po(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function US(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gH(t[n],e[n]))return!1;return!0}function gH(t,e){return tr(t)?Pw(t,e):tr(e)?Pw(e,t):t===e}function Pw(t,e){return tr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _H(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Il;(function(t){t.pop="pop",t.push="push"})(Il||(Il={}));var Za;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Za||(Za={}));function yH(t){if(!t)if(zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dH(t)}const vH=/^[^#]+#/;function EH(t,e){return t.replace(vH,"#")+e}function wH(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const af=()=>({left:window.scrollX,top:window.scrollY});function bH(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wH(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kw(t,e){return(history.state?history.state.position-e:-1)+t}const Mp=new Map;function TH(t,e){Mp.set(t,e)}function IH(t){const e=Mp.get(t);return Mp.delete(t),e}let AH=()=>location.protocol+"//"+location.host;function BS(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Cw(l,"")}return Cw(n,t)+r+s}function RH(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=BS(t,location),_=n.value,v=e.value;let A=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}A=v?p.position-v.position:0}else r(g);s.forEach(S=>{S(n.value,_,{delta:A,type:Il.pop,direction:A?A>0?Za.forward:Za.back:Za.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(We({},p.state,{scroll:af()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Nw(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?af():null}}function SH(t){const{history:e,location:n}=window,r={value:BS(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:AH()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=We({},e.state,Nw(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=We({},s.value,e.state,{forward:l,scroll:af()});i(h.current,h,!0);const f=We({},Nw(r.value,l,null),{position:h.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function CH(t){t=yH(t);const e=SH(t),n=RH(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=We({location:"",base:t,go:r,createHref:EH.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PH(t){return typeof t=="string"||t&&typeof t=="object"}function jS(t){return typeof t=="string"||typeof t=="symbol"}const ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qS=Symbol("");var Ow;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ow||(Ow={}));function ko(t,e){return We(new Error,{type:t,[qS]:!0},e)}function Ir(t,e){return t instanceof Error&&qS in t&&(e==null||!!(t.type&e))}const Dw="[^/]+?",kH={sensitive:!1,strict:!1,start:!0,end:!0},NH=/[.+*?^${}()[\]/\\]/g;function OH(t,e){const n=We({},kH,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(NH,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:v,optional:A,regexp:S}=p;i.push({name:_,repeatable:v,optional:A});const O=S||Dw;if(O!==Dw){g+=10;try{new RegExp(`(${O})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+x.message)}}let D=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),s+=D,g+=20,A&&(g+=-8),v&&(g+=-20),O===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:A}=g,S=_ in u?u[_]:"";if(tr(S)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=tr(S)?S.join("/"):S;if(!O)if(A)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=O}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function DH(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xH(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DH(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xw(r))return 1;if(xw(s))return-1}return s.length-r.length}function xw(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MH={type:0,value:""},LH=/[a-zA-Z0-9_]/;function VH(t){if(!t)return[[]];if(t==="/")return[[MH]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:LH.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function FH(t,e,n){const r=OH(VH(t.path),n),s=We(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $H(t,e){const n=[],r=new Map;e=Vw({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,f,p){const g=!p,_=UH(h);_.aliasOf=p&&p.record;const v=Vw(e,h),A=[_];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const x of D)A.push(We({},_,{components:p?p.record.components:_.components,path:x,aliasOf:p?p.record:_}))}let S,O;for(const D of A){const{path:x}=D;if(f&&x[0]!=="/"){const F=f.record.path,k=F[F.length-1]==="/"?"":"/";D.path=f.record.path+(x&&k+x)}if(S=FH(D,f,v),p?p.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),g&&h.name&&!Lw(S)&&o(h.name)),_.children){const F=_.children;for(let k=0;k<F.length;k++)i(F[k],S,p&&p.children[k])}p=p||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return O?()=>{o(O)}:Ja}function o(h){if(jS(h)){const f=r.get(h);f&&(r.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let f=0;for(;f<n.length&&xH(h,n[f])>=0&&(h.record.path!==n[f].record.path||!HS(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!Lw(h)&&r.set(h.record.name,h)}function u(h,f){let p,g={},_,v;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw ko(1,{location:h});v=p.record.name,g=We(Mw(f.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&Mw(h.params,p.keys.map(O=>O.name))),_=p.stringify(g)}else if(h.path!=null)_=h.path,p=n.find(O=>O.re.test(_)),p&&(g=p.parse(_),v=p.record.name);else{if(p=f.name?r.get(f.name):n.find(O=>O.re.test(f.path)),!p)throw ko(1,{location:h,currentLocation:f});v=p.record.name,g=We({},f.params,h.params),_=p.stringify(g)}const A=[];let S=p;for(;S;)A.unshift(S.record),S=S.parent;return{name:v,path:_,params:g,matched:A,meta:jH(A)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function UH(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BH(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BH(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lw(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jH(t){return t.reduce((e,n)=>We(e,n.meta),{})}function Vw(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function HS(t,e){return e.children.some(n=>n===t||HS(t,n))}function qH(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(LS," "),o=i.indexOf("="),a=Tl(o<0?i:i.slice(0,o)),l=o<0?null:Tl(i.slice(o+1));if(a in e){let u=e[a];tr(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Fw(t){let e="";for(let n in t){const r=t[n];if(n=cH(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tr(r)?r.map(i=>i&&xp(i)):[r&&xp(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HH(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tr(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const WH=Symbol(""),$w=Symbol(""),lf=Symbol(""),r_=Symbol(""),Lp=Symbol("");function Ea(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function us(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(ko(4,{from:n,to:e})):p instanceof Error?l(p):PH(p)?l(ko(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function pd(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(zH(l)){const h=(l.__vccOpts||l)[e];h&&i.push(us(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=J9(h)?h.default:h;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&us(g,n,r,o,a,s)()}))}}return i}function zH(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uw(t){const e=xt(lf),n=xt(r_),r=Ze(()=>{const l=me(t.to);return e.resolve(l)}),s=Ze(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Po.bind(null,h));if(p>-1)return p;const g=Bw(l[u-2]);return u>1&&Bw(h)===g&&f[f.length-1].path!==g?f.findIndex(Po.bind(null,l[u-2])):p}),i=Ze(()=>s.value>-1&&QH(n.params,r.value.params)),o=Ze(()=>s.value>-1&&s.value===n.matched.length-1&&US(n.params,r.value.params));function a(l={}){return GH(l)?e[me(t.replace)?"replace":"push"](me(t.to)).catch(Ja):Promise.resolve()}return{route:r,href:Ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const KH=gh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uw,setup(t,{slots:e}){const n=lr(Uw(t)),{options:r}=xt(lf),s=Ze(()=>({[jw(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jw(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:po("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$n=KH;function GH(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QH(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tr(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bw(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jw=(t,e,n)=>t??e??n,YH=gh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(Lp),s=Ze(()=>t.route||r.value),i=xt($w,0),o=Ze(()=>{let u=me(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Ze(()=>s.value.matched[o.value]);La($w,Ze(()=>o.value+1)),La(WH,a),La(Lp,s);const l=Ae();return Gn(()=>[l.value,a.value,t.name],([u,h,f],[p,g,_])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Po(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return qw(n.default,{Component:p,route:u});const g=f.props[h],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,A=po(p,We({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return qw(n.default,{Component:A,route:u})||A}}});function qw(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WS=YH;function XH(t){const e=$H(t.routes,t),n=t.parseQuery||qH,r=t.stringifyQuery||Fw,s=t.history,i=Ea(),o=Ea(),a=Ea(),l=kb(ts);let u=ts;zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=fd.bind(null,B=>""+B),f=fd.bind(null,hH),p=fd.bind(null,Tl);function g(B,ne){let Z,se;return jS(B)?(Z=e.getRecordMatcher(B),se=ne):se=B,e.addRoute(se,Z)}function _(B){const ne=e.getRecordMatcher(B);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(B=>B.record)}function A(B){return!!e.getRecordMatcher(B)}function S(B,ne){if(ne=We({},ne||l.value),typeof B=="string"){const N=dd(n,B,ne.path),L=e.resolve({path:N.path},ne),q=s.createHref(N.fullPath);return We(N,L,{params:p(L.params),hash:Tl(N.hash),redirectedFrom:void 0,href:q})}let Z;if(B.path!=null)Z=We({},B,{path:dd(n,B.path,ne.path).path});else{const N=We({},B.params);for(const L in N)N[L]==null&&delete N[L];Z=We({},B,{params:f(N)}),ne.params=f(ne.params)}const se=e.resolve(Z,ne),Oe=B.hash||"";se.params=h(p(se.params));const Ge=pH(r,We({},B,{hash:lH(Oe),path:se.path})),C=s.createHref(Ge);return We({fullPath:Ge,hash:Oe,query:r===Fw?HH(B.query):B.query||{}},se,{redirectedFrom:void 0,href:C})}function O(B){return typeof B=="string"?dd(n,B,l.value.path):We({},B)}function D(B,ne){if(u!==B)return ko(8,{from:ne,to:B})}function x(B){return I(B)}function F(B){return x(We(O(B),{replace:!0}))}function k(B){const ne=B.matched[B.matched.length-1];if(ne&&ne.redirect){const{redirect:Z}=ne;let se=typeof Z=="function"?Z(B):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),We({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function I(B,ne){const Z=u=S(B),se=l.value,Oe=B.state,Ge=B.force,C=B.replace===!0,N=k(Z);if(N)return I(We(O(N),{state:typeof N=="object"?We({},Oe,N.state):Oe,force:Ge,replace:C}),ne||Z);const L=Z;L.redirectedFrom=ne;let q;return!Ge&&mH(r,se,Z)&&(q=ko(16,{to:L,from:se}),At(se,se,!0,!1)),(q?Promise.resolve(q):P(L,se)).catch(U=>Ir(U)?Ir(U,2)?U:It(U):be(U,L,se)).then(U=>{if(U){if(Ir(U,2))return I(We({replace:C},O(U.to),{state:typeof U.to=="object"?We({},Oe,U.to.state):Oe,force:Ge}),ne||L)}else U=R(L,se,!0,C,Oe);return E(L,se,U),U})}function y(B,ne){const Z=D(B,ne);return Z?Promise.reject(Z):Promise.resolve()}function b(B){const ne=Kr.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(B):B()}function P(B,ne){let Z;const[se,Oe,Ge]=JH(B,ne);Z=pd(se.reverse(),"beforeRouteLeave",B,ne);for(const N of se)N.leaveGuards.forEach(L=>{Z.push(us(L,B,ne))});const C=y.bind(null,B,ne);return Z.push(C),Rt(Z).then(()=>{Z=[];for(const N of i.list())Z.push(us(N,B,ne));return Z.push(C),Rt(Z)}).then(()=>{Z=pd(Oe,"beforeRouteUpdate",B,ne);for(const N of Oe)N.updateGuards.forEach(L=>{Z.push(us(L,B,ne))});return Z.push(C),Rt(Z)}).then(()=>{Z=[];for(const N of Ge)if(N.beforeEnter)if(tr(N.beforeEnter))for(const L of N.beforeEnter)Z.push(us(L,B,ne));else Z.push(us(N.beforeEnter,B,ne));return Z.push(C),Rt(Z)}).then(()=>(B.matched.forEach(N=>N.enterCallbacks={}),Z=pd(Ge,"beforeRouteEnter",B,ne,b),Z.push(C),Rt(Z))).then(()=>{Z=[];for(const N of o.list())Z.push(us(N,B,ne));return Z.push(C),Rt(Z)}).catch(N=>Ir(N,8)?N:Promise.reject(N))}function E(B,ne,Z){a.list().forEach(se=>b(()=>se(B,ne,Z)))}function R(B,ne,Z,se,Oe){const Ge=D(B,ne);if(Ge)return Ge;const C=ne===ts,N=zi?history.state:{};Z&&(se||C?s.replace(B.fullPath,We({scroll:C&&N&&N.scroll},Oe)):s.push(B.fullPath,Oe)),l.value=B,At(B,ne,Z,C),It()}let T;function he(){T||(T=s.listen((B,ne,Z)=>{if(!rr.listening)return;const se=S(B),Oe=k(se);if(Oe){I(We(Oe,{replace:!0}),se).catch(Ja);return}u=se;const Ge=l.value;zi&&TH(kw(Ge.fullPath,Z.delta),af()),P(se,Ge).catch(C=>Ir(C,12)?C:Ir(C,2)?(I(C.to,se).then(N=>{Ir(N,20)&&!Z.delta&&Z.type===Il.pop&&s.go(-1,!1)}).catch(Ja),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),be(C,se,Ge))).then(C=>{C=C||R(se,Ge,!1),C&&(Z.delta&&!Ir(C,8)?s.go(-Z.delta,!1):Z.type===Il.pop&&Ir(C,20)&&s.go(-1,!1)),E(se,Ge,C)}).catch(Ja)}))}let Re=Ea(),Y=Ea(),de;function be(B,ne,Z){It(B);const se=Y.list();return se.length?se.forEach(Oe=>Oe(B,ne,Z)):console.error(B),Promise.reject(B)}function at(){return de&&l.value!==ts?Promise.resolve():new Promise((B,ne)=>{Re.add([B,ne])})}function It(B){return de||(de=!B,he(),Re.list().forEach(([ne,Z])=>B?Z(B):ne()),Re.reset()),B}function At(B,ne,Z,se){const{scrollBehavior:Oe}=t;if(!zi||!Oe)return Promise.resolve();const Ge=!Z&&IH(kw(B.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return fh().then(()=>Oe(B,ne,Ge)).then(C=>C&&bH(C)).catch(C=>be(C,B,ne))}const lt=B=>s.go(B);let ct;const Kr=new Set,rr={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:A,getRoutes:v,resolve:S,options:t,push:x,replace:F,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:at,install(B){const ne=this;B.component("RouterLink",$n),B.component("RouterView",WS),B.config.globalProperties.$router=ne,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>me(l)}),zi&&!ct&&l.value===ts&&(ct=!0,x(s.location).catch(Oe=>{}));const Z={};for(const Oe in ts)Object.defineProperty(Z,Oe,{get:()=>l.value[Oe],enumerable:!0});B.provide(lf,ne),B.provide(r_,Ab(Z)),B.provide(Lp,l);const se=B.unmount;Kr.add(B),B.unmount=function(){Kr.delete(B),Kr.size<1&&(u=ts,T&&T(),T=null,l.value=ts,ct=!1,de=!1),se()}}};function Rt(B){return B.reduce((ne,Z)=>ne.then(()=>b(Z)),Promise.resolve())}return rr}function JH(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Po(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Po(u,l))||s.push(l))}return[n,r,s]}function ZH(){return xt(lf)}function Tz(){return xt(r_)}const e6={__name:"App",setup(t){return(e,n)=>(Te(),On(me(WS)))}},t6="modulepreload",n6=function(t,e){return new URL(t,e).href},Hw={},ns=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=n6(l,r),l in Hw)return;Hw[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const _=i[g];if(_.href===l&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":t6,u||(p.as="script",p.crossOrigin=""),p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},zS=fm("products",()=>{const t=MR(),e=c4(),n=Ae(1),r=[{id:1,name:"Sudaderas"},{id:2,name:"Zapatillas"},{id:3,name:"Gafas"},{id:4,name:"Camisetas"},{id:5,name:"Bañadores"},{id:6,name:"Calcetines"}],s=AU(_p(t,"products"),RU("availability","asc")),i=s4(s);async function o(p){await hR(_p(t,"products"),p)}async function a(p,g){const{image:_,url:v,...A}=g;_.length?await WE(p,{...A,image:v.value}):await WE(p,A)}async function l(p){if(confirm("¿Eliminar Producto?")){const g=Wo(t,"products",p),_=await zo(g),{image:v}=_.data(),A=W2(e,v);await Promise.all([kU(g),H2(A)])}}const u=Ze(()=>[{label:"Seleccione",value:"",attrs:{disabled:!0}},...r.map(g=>({label:g.name,value:g.id}))]),h=Ze(()=>i.value.length===0),f=Ze(()=>i.value.filter(p=>p.category===n.value).filter(p=>p.availability>0));return{createProduct:o,updateProduct:a,deleteProduct:l,productsCollection:i,categories:r,selectedCategory:n,categoryOptions:u,noResults:h,filteredProducts:f}}),r6={__name:"Link",props:{to:{type:String}},setup(t){return(e,n)=>(Te(),On(me($n),{to:{name:t.to},class:"rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10",style:{position:"absolute",right:"20px"}},{default:ut(()=>[Id(e.$slots,"default")]),_:3},8,["to"]))}},s6=""+new URL("../img/MIMABEL.webp",import.meta.url).href,i6=["src"],KS={__name:"Logo",setup(t){return(e,n)=>(Te(),Be("img",{src:me(s6),alt:"Logo",class:"h-16 w-auto rounded-full"},null,8,i6))}},cf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ec=t=>(Ub("data-v-514b5e6d"),t=t(),Bb(),t),o6={class:"px-10 py-5 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10"},a6={class:"flex items-center gap-5"},l6={key:0,class:"movil lg:hidden"},c6=ec(()=>re("label",{for:"btn_menu",class:"menu-btn"},[re("span",{class:"menu-btn__line"}),re("span",{class:"menu-btn__line"}),re("span",{class:"menu-btn__line"})],-1)),u6={key:1,class:"hidden-below-1400 lg:flex gap-5 text-white items-center"},h6={class:"flex items-center gap-4"},f6=["onClick"],d6=ec(()=>re("button",{class:"py-2 px-4 rounded bg-green-500 text-white hover:bg-green-400 transition-colors mx-2"}," Conócenos ",-1)),p6={key:0,class:"container_flex lg:hidden bg-indigo-600"},m6={class:"container_menu flex_column"},g6=["onClick"],_6={key:0},y6={key:1},v6={key:1,class:"hidden-below-1400 lg:flex items-center gap-4"},E6={key:0,class:"hidden"},w6=ec(()=>re("button",{class:"py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2"}," Register ",-1)),b6=ec(()=>re("button",{class:"py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-400 transition-colors mx-2"}," Login ",-1)),T6=ec(()=>re("button",{class:"py-2 px-4 rounded bg-yellow-500 text-white hover:bg-yellow-400 transition-colors mx-2"}," Administrar ",-1)),I6={__name:"MainNav",props:{showButtons:{type:Boolean,default:!0},hideHamburger:{type:Boolean,default:!1}},setup(t){const e=t,n=zS(),r=g=>{n.selectedCategory=g},s=Ae(!1),i=Ae(""),o=Ae(!1),a=Cm(),l=Qh();Im(a,async g=>{if(g){s.value=!0,i.value=g.email;const _=await zo(Wo(l,"users",g.uid));if(_.exists()){const v=_.data();o.value=v.role==="admin"}}else s.value=!1,i.value="",o.value=!1});const u=async()=>{await J1(a)},h=Ze(()=>e.showButtons&&window.innerWidth>=1400),f=()=>{};window.addEventListener("resize",f),Do(f);const p=Ae(!1);return(g,_)=>(Te(),Be("header",o6,[re("div",a6,[Me(me($n),{to:"/"},{default:ut(()=>[Me(KS)]),_:1}),!e.hideHamburger&&!h.value?(Te(),Be("div",l6,[Hb(re("input",{type:"checkbox",id:"btn_menu","onUpdate:modelValue":_[0]||(_[0]=v=>p.value=v),class:"menu-checkbox hidden"},null,512),[[lN,p.value]]),c6])):cn("",!0),h.value?(Te(),Be("div",u6,[re("div",h6,[(Te(!0),Be(mt,null,ol(me(n).categories,v=>(Te(),Be("button",{key:v.id,class:_s(["py-2 px-4 rounded mx-2",me(n).selectedCategory===v.id?"bg-indigo-600 text-white":"bg-gray-200 text-black","hover:bg-indigo-500 transition-colors"]),onClick:A=>r(v.id)},hn(v.name),11,f6))),128))]),Me(me($n),{to:"/conocenos"},{default:ut(()=>[d6]),_:1})])):cn("",!0)]),p.value?(Te(),Be("div",p6,[re("nav",null,[re("ul",m6,[(Te(!0),Be(mt,null,ol(me(n).categories,v=>(Te(),Be("li",{key:v.id},[re("button",{onClick:A=>{r(v.id),p.value=!1},class:"menu-link"},hn(v.name),9,g6)]))),128)),re("li",null,[Me(me($n),{to:"/conocenos",class:"menu-link",onClick:_[1]||(_[1]=v=>p.value=!1)},{default:ut(()=>[Pt(" Conócenos ")]),_:1})]),re("li",null,[Me(me($n),{to:"/register",class:"menu-link",onClick:_[2]||(_[2]=v=>p.value=!1)},{default:ut(()=>[Pt(" Register ")]),_:1})]),re("li",null,[Me(me($n),{to:"/login",class:"menu-link",onClick:_[3]||(_[3]=v=>p.value=!1)},{default:ut(()=>[Pt(" Login ")]),_:1})]),o.value?(Te(),Be("li",_6,[Me(me($n),{to:"/admin/productos",class:"menu-link",onClick:_[4]||(_[4]=v=>p.value=!1)},{default:ut(()=>[Pt(" Administrar ")]),_:1})])):cn("",!0),s.value?(Te(),Be("li",y6,[re("button",{onClick:u,class:"menu-link bg-red-500 text-white"}," Log out ")])):cn("",!0)])])])):cn("",!0),h.value?(Te(),Be("nav",v6,[s.value?(Te(),Be("p",E6,hn(i.value),1)):cn("",!0),s.value?cn("",!0):(Te(),On(me($n),{key:1,to:"/register"},{default:ut(()=>[w6]),_:1})),s.value?cn("",!0):(Te(),On(me($n),{key:2,to:"/login"},{default:ut(()=>[b6]),_:1})),o.value?(Te(),On(me($n),{key:3,to:"/admin/productos"},{default:ut(()=>[T6]),_:1})):cn("",!0),s.value?(Te(),Be("button",{key:4,onClick:u,class:"py-2 px-4 rounded bg-red-500 text-white hover:bg-red-400 transition-colors mx-2"}," Log out ")):cn("",!0)])):cn("",!0)]))}},A6=cf(I6,[["__scopeId","data-v-514b5e6d"]]),s_=fm("coupon",()=>{const t=uf(),e=Ae("10DESCUENTO"),n=Ae(""),r=Ae(0),s=Ae(0),i=[{name:"10DESCUENTO",discount:.1},{name:"20DESCUENTO",discount:.2}];Un(()=>{s.value=(t.subtotal*r.value).toFixed(2)});function o(){i.some(u=>u.name===e.value)?(n.value="Aplicando cupón...",setTimeout(()=>{r.value=i.find(u=>u.name===e.value).discount,n.value="¡Descuento Aplicado!"},3e3)):n.value="No existe ese cupón",setTimeout(()=>{n.value=""},6e3)}function a(){e.value="",n.value="",r.value=0,s.value=0}const l=Ze(()=>r.value>0);return{couponInput:e,applyCoupon:o,$reset:a,discount:s,couponValidationMessage:n,isValidCoupon:l}}),Xi=t=>Number(t).toLocaleString("en-US",{style:"currency",currency:"USD"}),R6=()=>{const t=new Date,e=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getFullYear();return`${e}/${n}/${r}`},uf=fm("cart",()=>{const t=s_(),e=MR(),n=Ae([]),r=Ae(0),s=Ae(0),i=Ae(0),o=5,a=.1;Un(()=>{r.value=n.value.reduce((S,O)=>S+O.quantity*O.price,0),s.value=r.value*a,i.value=r.value+s.value-parseFloat(t.discount)});function l(S){const O=g(S.id);if(O>=0){if(_(S,O)){alert("¡Has alcanzado el límite!");return}n.value[O].quantity++}else n.value.push({...S,quantity:1,id:S.id})}function u(S,O){n.value=n.value.map(D=>D.id===S?{...D,quantity:O}:D)}function h(S){n.value=n.value.filter(O=>O.id!==S)}async function f(){try{await hR(_p(e,"sales"),{items:n.value,subtotal:r.value,taxes:s.value,discount:t.discount,total:i.value,date:R6()}),n.value.forEach(async S=>{const O=Wo(e,"products",S.id);await DU(e,async D=>{const F=(await D.get(O)).data().availability-S.quantity;console.log(F),D.update(O,{availability:F})})}),p(),t.$reset()}catch(S){console.error("Error al crear la venta:",S)}}function p(){n.value=[],r.value=0,s.value=0,i.value=0}const g=S=>n.value.findIndex(O=>O.id===S),_=(S,O)=>n.value[O].quantity>=S.availability||n.value[O].quantity>=o,v=Ze(()=>n.value.length===0),A=Ze(()=>S=>S.availability<o?S.availability:o);return{items:n,subtotal:r,taxes:s,total:i,addItem:l,updateQuantity:u,removeItem:h,checkout:f,isEmpty:v,checkProductAvailability:A}}),S6={class:"rounded bg-white shadow relative"},C6=["src","alt"],P6={class:"p-3 space-y-2"},k6={class:"text-xl font-black text-gray-500"},N6={class:"text-gray-500"},O6={class:"text-2xl font-extrabold text-gray-900"},D6=re("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 bg-indigo-600 rounded-full text-white"},[re("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),x6=[D6],M6={__name:"ProductCard",props:{product:{type:Object}},setup(t){const e=uf();return(n,r)=>(Te(),Be("div",S6,[re("img",{src:t.product.image,alt:"Imagen de "+t.product.name},null,8,C6),re("div",P6,[re("h3",k6,hn(t.product.name),1),re("p",N6,"Disponibles: "+hn(t.product.availability),1),re("p",O6,hn(me(Xi)(t.product.price)),1)]),re("button",{type:"button",class:"absolute top-5 -right-4",onClick:r[0]||(r[0]=s=>me(e).addItem(t.product))},x6)]))}},L6={class:"flex space-x-6 py-6"},V6=["src","alt"],F6={class:"flex-auto space-y-2"},$6={class:"text-gray-900"},U6=["value"],B6=["value"],j6=re("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",class:"w-8 h-8 text-red-500"},[re("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1),q6=[j6],H6={__name:"ShoppingCartItem",props:{item:{type:Object}},setup(t){const e=uf();return(n,r)=>(Te(),Be("li",L6,[re("img",{src:t.item.image,alt:"Imagen de "+t.item.name,class:"h-24 w-24 flex-none rounded-md"},null,8,V6),re("div",F6,[re("h3",$6,hn(t.item.name),1),re("p",null,hn(me(Xi)(t.item.price)),1),re("select",{class:"w-32 p-2 rounded-lg bg-white",onChange:r[0]||(r[0]=s=>me(e).updateQuantity(t.item.id,+s.target.value)),value:t.item.quantity},[(Te(!0),Be(mt,null,ol(me(e).checkProductAvailability(t.item),s=>(Te(),Be("option",{key:s,value:s},hn(s),9,B6))),128))],40,U6)]),re("div",null,[re("button",{type:"button",onClick:r[1]||(r[1]=s=>me(e).removeItem(t.item.id))},q6)])]))}},W6={},z6={class:"flex justify-between p-1"},K6={class:"font-bold"},G6={class:"text-gray-900"};function Q6(t,e){return Te(),Be("div",z6,[re("dt",K6,[Id(t.$slots,"label")]),re("dd",G6,[Id(t.$slots,"default")])])}const $c=cf(W6,[["render",Q6]]),Y6=re("p",{class:"mt-5 py-5 font-bold border-t border-gray-200"},"¿Tienes un cupon?",-1),X6={class:"flex"},J6=["disabled"],Z6={class:"py-2 text-center text-sm font-extrabold"},eW={__name:"CouponForm",setup(t){const e=s_();return(n,r)=>(Te(),Be(mt,null,[Y6,re("div",X6,[Hb(re("input",{type:"text",placeholder:"Ingresa un cupon",class:"p-2 bg-white border-gray-300 w-full","onUpdate:modelValue":r[0]||(r[0]=s=>me(e).couponInput=s)},null,512),[[aN,me(e).couponInput]]),re("button",{type:"button",class:"p-3 bg-green-400 font-bold disabled:opacity-30",onClick:r[1]||(r[1]=(...s)=>me(e).applyCoupon&&me(e).applyCoupon(...s)),disabled:me(e).isValidCoupon},"Canjear",8,J6)]),re("p",Z6,hn(me(e).couponValidationMessage),1)],64))}},tW={key:0,class:"text-xl text-center text-gray-900"},nW={key:1},rW=re("p",{class:"text-4xl font-bold text-gray-900"},"Resumen de Venta",-1),sW={role:"list",class:"mt-6 divide-y divide-gray-200 border-t"},iW={class:"space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"},oW={__name:"ShoppingCart",setup(t){const e=uf(),n=s_();return(r,s)=>me(e).isEmpty?(Te(),Be("p",tW,"El carrito esta vacio")):(Te(),Be("div",nW,[rW,re("ul",sW,[(Te(!0),Be(mt,null,ol(me(e).items,i=>(Te(),On(H6,{key:i.id,item:i},null,8,["item"]))),128))]),re("dl",iW,[Me($c,null,{label:ut(()=>[Pt("Subtotal:")]),default:ut(()=>[Pt(" "+hn(me(Xi)(me(e).subtotal)),1)]),_:1}),Me($c,null,{label:ut(()=>[Pt("Impuestos:")]),default:ut(()=>[Pt(" "+hn(me(Xi)(me(e).taxes)),1)]),_:1}),me(n).isValidCoupon?(Te(),On($c,{key:0},{label:ut(()=>[Pt("Descuento:")]),default:ut(()=>[Pt(" "+hn(me(Xi)(me(n).discount)),1)]),_:1})):cn("",!0),Me($c,null,{label:ut(()=>[Pt("Total a pagar:")]),default:ut(()=>[Pt(" "+hn(me(Xi)(me(e).total)),1)]),_:1})]),Me(eW),re("button",{type:"button",class:"mt-10 w-full bg-indigo-600 hover:gb-indigo 700 text-white uppercase font-bold p-3",onClick:s[0]||(s[0]=(...i)=>me(e).checkout&&me(e).checkout(...i))}," Confirmar Compra ")]))}},aW={class:"pt-10 lg:flex lg:h-screen lg:overflow-y-hidden"},lW={class:"lg:w-2/3 lg:screen lg:overflow-y-scroll py-24 px-10"},cW={key:0,class:"text-center text-4xl"},uW={key:1,class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5"},hW={class:"lg:w-1/3 lg:screen lg:overflow-y-scroll py-24 px-10"},fW={__name:"ShopView",setup(t){const e=zS(),{filteredProducts:n}=IN(e),r=Ze(()=>n.value.length===0);return(s,i)=>(Te(),Be(mt,null,[Me(A6),re("main",aW,[re("div",lW,[r.value?(Te(),Be("p",cW,"No hay Productos")):(Te(),Be("div",uW,[(Te(!0),Be(mt,null,ol(me(n),o=>(Te(),On(M6,{key:o.id,product:o},null,8,["product"]))),128))]))]),re("aside",hW,[Me(oW)])])],64))}},dW={class:"px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10"},pW={class:"flex items-center"},mW={__name:"AdminNav",setup(t){const e=Cm(),n=Qh(),r=ZH(),s=Ae(!1);return Do(async()=>{Im(e,async i=>{if(i){const o=await zo(Wo(n,"users",i.uid));if(o.exists()){const a=o.data();s.value=a.role==="admin"}else r.push("/login")}else r.push("/login")})}),(i,o)=>{const a=mh("RouterLink");return Te(),Be("header",dW,[re("div",null,[Me(KS)]),re("nav",pW,[s.value?(Te(),On(a,{key:0,to:{name:"products"},class:_s(["rounded text-white font-bold p-2 space-x-4",{"border-b-2 border-white":i.$route.name==="products"}]),style:{position:"absolute",right:"250px"}},{default:ut(()=>[Pt(" Productos ")]),_:1},8,["class"])):cn("",!0),s.value?(Te(),On(a,{key:1,to:{name:"ventas"},class:_s(["rounded text-white font-bold p-2 space-x-4",{"border-b-2 border-white":i.$route.name==="ventas"}]),style:{position:"absolute",right:"350px"}},{default:ut(()=>[Pt(" Ventas ")]),_:1},8,["class"])):cn("",!0),Me(r6,{to:"shop",class:_s(["rounded text-white font-bold p-2",{"border-b-2 border-white":i.$route.name==="shop"}]),style:{position:"absolute",right:"100px"}},{default:ut(()=>[Pt(" Tienda ")]),_:1},8,["class"])])])}}},gW={class:"pt-32 container mx-auto lg:min-h-screen"},_W={__name:"AdminLayout",setup(t){return(e,n)=>{const r=mh("RouterView");return Te(),Be(mt,null,[Me(mW),re("div",gW,[Me(r)])],64)}}},yW={methods:{goHome(){window.location.href="/"}}},vW=wk('<div class="error-message" data-v-1a4c5e70>Error 403: Acceso Prohibido</div><div class="hover" data-v-1a4c5e70><div class="background" data-v-1a4c5e70><div class="door" data-v-1a4c5e70>403</div><div class="rug" data-v-1a4c5e70></div></div><div class="foreground" data-v-1a4c5e70><div class="bouncer" data-v-1a4c5e70><div class="head" data-v-1a4c5e70><div class="neck" data-v-1a4c5e70></div><div class="eye left" data-v-1a4c5e70></div><div class="eye right" data-v-1a4c5e70></div><div class="ear" data-v-1a4c5e70></div></div><div class="body" data-v-1a4c5e70></div><div class="arm" data-v-1a4c5e70></div></div><div class="poles" data-v-1a4c5e70><div class="pole left" data-v-1a4c5e70></div><div class="pole right" data-v-1a4c5e70></div><div class="rope" data-v-1a4c5e70></div></div></div></div>',2);function EW(t,e,n,r,s,i){return Te(),Be("div",null,[vW,re("button",{class:"back-button",onClick:e[0]||(e[0]=(...o)=>i.goHome&&i.goHome(...o))},"Volver a inicio")])}const wW=cf(yW,[["render",EW],["__scopeId","data-v-1a4c5e70"]]),bW={name:"NotFound"},i_=t=>(Ub("data-v-910960ec"),t=t(),Bb(),t),TW={class:"page_404"},IW={class:"container"},AW={class:"row"},RW={class:"col-sm-12 text-center"},SW=i_(()=>re("div",{class:"four_zero_four_bg"},[re("h1",{class:"text-center"},"404")],-1)),CW={class:"contant_box_404"},PW=i_(()=>re("h3",{class:"h2"},"Parece que te has perdido...",-1)),kW=i_(()=>re("p",null,"La página que estás buscando no Existe!",-1));function NW(t,e,n,r,s,i){const o=mh("router-link");return Te(),Be("section",TW,[re("div",IW,[re("div",AW,[re("div",RW,[SW,re("div",CW,[PW,kW,Me(o,{to:"/",class:"link_404"},{default:ut(()=>[Pt("Volver a Inicio")]),_:1})])])])])])}const OW=cf(bW,[["render",NW],["__scopeId","data-v-910960ec"]]),DW=[{path:"/",name:"shop",component:fW},{path:"/admin",name:"admin",component:_W,meta:{requiresAuth:!0},children:[{path:"productos",name:"products",component:()=>ns(()=>import("./ProductsView-BcC4B6GU.js"),[],import.meta.url)},{path:"productos/nuevo",name:"new-product",component:()=>ns(()=>import("./NewProductView-I71cic5b.js"),__vite__mapDeps([0,1]),import.meta.url)},{path:"productos/editar/:id",name:"edit-product",component:()=>ns(()=>import("./EditProductView-9Mrqwldi.js"),__vite__mapDeps([2,1]),import.meta.url)},{path:"productos/seeder",name:"seed-product",component:()=>ns(()=>import("./SeederView-BjzSKBpl.js"),[],import.meta.url)},{path:"ventas",name:"ventas",component:()=>ns(()=>import("./SalesView-Bhg2N8W1.js"),[],import.meta.url)}]},{path:"/conocenos",name:"conocenos",component:()=>ns(()=>import("./Conocenos-BpR-Aqgm.js"),__vite__mapDeps([3,4]),import.meta.url)},{path:"/register",name:"Register",component:()=>ns(()=>import("./Register-LN_S3p84.js"),__vite__mapDeps([5,6]),import.meta.url)},{path:"/login",name:"Login",component:()=>ns(()=>import("./Login-Bcd-o-iR.js"),__vite__mapDeps([7,8]),import.meta.url)},{path:"/403",name:"Error403",component:wW},{path:"/:catchAll(.*)",name:"NotFound",component:OW}],o_=XH({history:CH("./"),routes:DW});o_.beforeEach((t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?Im(d4,async s=>{if(s){const o=(await zo(Wo(f4,"users",s.uid))).data();o&&o.role==="admin"?n():n({name:"Error403"})}else n("/login")}):n()});function GS(t,e){return function(){return t.apply(e,arguments)}}const{toString:xW}=Object.prototype,{getPrototypeOf:a_}=Object,hf=(t=>e=>{const n=xW.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),nr=t=>(t=t.toLowerCase(),e=>hf(e)===t),ff=t=>e=>typeof e===t,{isArray:Qo}=Array,Al=ff("undefined");function MW(t){return t!==null&&!Al(t)&&t.constructor!==null&&!Al(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const QS=nr("ArrayBuffer");function LW(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&QS(t.buffer),e}const VW=ff("string"),xn=ff("function"),YS=ff("number"),df=t=>t!==null&&typeof t=="object",FW=t=>t===!0||t===!1,su=t=>{if(hf(t)!=="object")return!1;const e=a_(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},$W=nr("Date"),UW=nr("File"),BW=nr("Blob"),jW=nr("FileList"),qW=t=>df(t)&&xn(t.pipe),HW=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xn(t.append)&&((e=hf(t))==="formdata"||e==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"))},WW=nr("URLSearchParams"),[zW,KW,GW,QW]=["ReadableStream","Request","Response","Headers"].map(nr),YW=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tc(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Qo(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function XS(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const JS=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ZS=t=>!Al(t)&&t!==JS;function Vp(){const{caseless:t}=ZS(this)&&this||{},e={},n=(r,s)=>{const i=t&&XS(e,s)||s;su(e[i])&&su(r)?e[i]=Vp(e[i],r):su(r)?e[i]=Vp({},r):Qo(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&tc(arguments[r],n);return e}const XW=(t,e,n,{allOwnKeys:r}={})=>(tc(e,(s,i)=>{n&&xn(s)?t[i]=GS(s,n):t[i]=s},{allOwnKeys:r}),t),JW=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ZW=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},e5=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&a_(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},t5=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},n5=t=>{if(!t)return null;if(Qo(t))return t;let e=t.length;if(!YS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},r5=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&a_(Uint8Array)),s5=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},i5=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},o5=nr("HTMLFormElement"),a5=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ww=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),l5=nr("RegExp"),eC=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};tc(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},c5=t=>{eC(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},u5=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Qo(t)?r(t):r(String(t).split(e)),n},h5=()=>{},f5=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,md="abcdefghijklmnopqrstuvwxyz",zw="0123456789",tC={DIGIT:zw,ALPHA:md,ALPHA_DIGIT:md+md.toUpperCase()+zw},d5=(t=16,e=tC.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function p5(t){return!!(t&&xn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const m5=t=>{const e=new Array(10),n=(r,s)=>{if(df(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Qo(r)?[]:{};return tc(r,(o,a)=>{const l=n(o,s+1);!Al(l)&&(i[a]=l)}),e[s]=void 0,i}}return r};return n(t,0)},g5=nr("AsyncFunction"),_5=t=>t&&(df(t)||xn(t))&&xn(t.then)&&xn(t.catch),$={isArray:Qo,isArrayBuffer:QS,isBuffer:MW,isFormData:HW,isArrayBufferView:LW,isString:VW,isNumber:YS,isBoolean:FW,isObject:df,isPlainObject:su,isReadableStream:zW,isRequest:KW,isResponse:GW,isHeaders:QW,isUndefined:Al,isDate:$W,isFile:UW,isBlob:BW,isRegExp:l5,isFunction:xn,isStream:qW,isURLSearchParams:WW,isTypedArray:r5,isFileList:jW,forEach:tc,merge:Vp,extend:XW,trim:YW,stripBOM:JW,inherits:ZW,toFlatObject:e5,kindOf:hf,kindOfTest:nr,endsWith:t5,toArray:n5,forEachEntry:s5,matchAll:i5,isHTMLForm:o5,hasOwnProperty:Ww,hasOwnProp:Ww,reduceDescriptors:eC,freezeMethods:c5,toObjectSet:u5,toCamelCase:a5,noop:h5,toFiniteNumber:f5,findKey:XS,global:JS,isContextDefined:ZS,ALPHABET:tC,generateString:d5,isSpecCompliantForm:p5,toJSONObject:m5,isAsyncFn:g5,isThenable:_5};function Ie(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}$.inherits(Ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nC=Ie.prototype,rC={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{rC[t]={value:t}});Object.defineProperties(Ie,rC);Object.defineProperty(nC,"isAxiosError",{value:!0});Ie.from=(t,e,n,r,s,i)=>{const o=Object.create(nC);return $.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ie.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const y5=null;function Fp(t){return $.isPlainObject(t)||$.isArray(t)}function sC(t){return $.endsWith(t,"[]")?t.slice(0,-2):t}function Kw(t,e,n){return t?t.concat(e).map(function(s,i){return s=sC(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function v5(t){return $.isArray(t)&&!t.some(Fp)}const E5=$.toFlatObject($,{},null,function(e){return/^is[A-Z]/.test(e)});function pf(t,e,n){if(!$.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,A){return!$.isUndefined(A[v])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(e);if(!$.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if($.isDate(_))return _.toISOString();if(!l&&$.isBlob(_))throw new Ie("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(_)||$.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,v,A){let S=_;if(_&&!A&&typeof _=="object"){if($.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if($.isArray(_)&&v5(_)||($.isFileList(_)||$.endsWith(v,"[]"))&&(S=$.toArray(_)))return v=sC(v),S.forEach(function(D,x){!($.isUndefined(D)||D===null)&&e.append(o===!0?Kw([v],x,i):o===null?v:v+"[]",u(D))}),!1}return Fp(_)?!0:(e.append(Kw(A,v,i),u(_)),!1)}const f=[],p=Object.assign(E5,{defaultVisitor:h,convertValue:u,isVisitable:Fp});function g(_,v){if(!$.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),$.forEach(_,function(S,O){(!($.isUndefined(S)||S===null)&&s.call(e,S,$.isString(O)?O.trim():O,v,p))===!0&&g(S,v?v.concat(O):[O])}),f.pop()}}if(!$.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Gw(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function l_(t,e){this._pairs=[],t&&pf(t,this,e)}const iC=l_.prototype;iC.append=function(e,n){this._pairs.push([e,n])};iC.toString=function(e){const n=e?function(r){return e.call(this,r,Gw)}:Gw;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function w5(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oC(t,e,n){if(!e)return t;const r=n&&n.encode||w5,s=n&&n.serialize;let i;if(s?i=s(e,n):i=$.isURLSearchParams(e)?e.toString():new l_(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Qw{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,function(r){r!==null&&e(r)})}}const aC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b5=typeof URLSearchParams<"u"?URLSearchParams:l_,T5=typeof FormData<"u"?FormData:null,I5=typeof Blob<"u"?Blob:null,A5={isBrowser:!0,classes:{URLSearchParams:b5,FormData:T5,Blob:I5},protocols:["http","https","file","blob","url","data"]},c_=typeof window<"u"&&typeof document<"u",R5=(t=>c_&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),S5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",C5=c_&&window.location.href||"http://localhost",P5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:c_,hasStandardBrowserEnv:R5,hasStandardBrowserWebWorkerEnv:S5,origin:C5},Symbol.toStringTag,{value:"Module"})),Xn={...P5,...A5};function k5(t,e){return pf(t,new Xn.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Xn.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function N5(t){return $.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function O5(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function lC(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&$.isArray(s)?s.length:o,l?($.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!$.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&$.isArray(s[o])&&(s[o]=O5(s[o])),!a)}if($.isFormData(t)&&$.isFunction(t.entries)){const n={};return $.forEachEntry(t,(r,s)=>{e(N5(r),s,n,0)}),n}return null}function D5(t,e,n){if($.isString(t))try{return(e||JSON.parse)(t),$.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const nc={transitional:aC,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=$.isObject(e);if(i&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return s?JSON.stringify(lC(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return k5(e,this.formSerializer).toString();if((a=$.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return pf(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),D5(e)):e}],transformResponse:[function(e){const n=this.transitional||nc.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ie.from(a,Ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xn.classes.FormData,Blob:Xn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],t=>{nc.headers[t]={}});const x5=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),M5=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&x5[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Yw=Symbol("internals");function wa(t){return t&&String(t).trim().toLowerCase()}function iu(t){return t===!1||t==null?t:$.isArray(t)?t.map(iu):String(t)}function L5(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const V5=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gd(t,e,n,r,s){if($.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!$.isString(e)){if($.isString(r))return e.indexOf(r)!==-1;if($.isRegExp(r))return r.test(e)}}function F5(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function $5(t,e){const n=$.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class fn{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,l,u){const h=wa(l);if(!h)throw new Error("header name must be a non-empty string");const f=$.findKey(s,h);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||l]=iu(a))}const o=(a,l)=>$.forEach(a,(u,h)=>i(u,h,l));if($.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if($.isString(e)&&(e=e.trim())&&!V5(e))o(M5(e),n);else if($.isHeaders(e))for(const[a,l]of e.entries())i(l,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=wa(e),e){const r=$.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return L5(s);if($.isFunction(n))return n.call(this,s,r);if($.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wa(e),e){const r=$.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=wa(o),o){const a=$.findKey(r,o);a&&(!n||gd(r,r[a],a,n))&&(delete r[a],s=!0)}}return $.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||gd(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return $.forEach(this,(s,i)=>{const o=$.findKey(r,i);if(o){n[o]=iu(s),delete n[i];return}const a=e?F5(i):String(i).trim();a!==i&&delete n[i],n[a]=iu(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return $.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Yw]=this[Yw]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=wa(o);r[a]||($5(s,o),r[a]=!0)}return $.isArray(e)?e.forEach(i):i(e),this}}fn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(fn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});$.freezeMethods(fn);function _d(t,e){const n=this||nc,r=e||n,s=fn.from(r.headers);let i=r.data;return $.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function cC(t){return!!(t&&t.__CANCEL__)}function Yo(t,e,n){Ie.call(this,t??"canceled",Ie.ERR_CANCELED,e,n),this.name="CanceledError"}$.inherits(Yo,Ie,{__CANCEL__:!0});function uC(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ie("Request failed with status code "+n.status,[Ie.ERR_BAD_REQUEST,Ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function U5(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function B5(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=r[i];o||(o=u),n[s]=l,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const g=h&&u-h;return g?Math.round(p*1e3/g):void 0}}function j5(t,e){let n=0;const r=1e3/e;let s=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return s&&(clearTimeout(s),s=null),n=a,t.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}const nh=(t,e,n=3)=>{let r=0;const s=B5(50,250);return j5(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:i,lengthComputable:a!=null};f[e?"download":"upload"]=!0,t(f)},n)},q5=Xn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=$.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),H5=Xn.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];$.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),$.isString(r)&&o.push("path="+r),$.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function W5(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function z5(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function hC(t,e){return t&&!W5(e)?z5(t,e):e}const Xw=t=>t instanceof fn?{...t}:t;function Ti(t,e){e=e||{};const n={};function r(u,h,f){return $.isPlainObject(u)&&$.isPlainObject(h)?$.merge.call({caseless:f},u,h):$.isPlainObject(h)?$.merge({},h):$.isArray(h)?h.slice():h}function s(u,h,f){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,h,f)}function i(u,h){if(!$.isUndefined(h))return r(void 0,h)}function o(u,h){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function a(u,h,f){if(f in e)return r(u,h);if(f in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h)=>s(Xw(u),Xw(h),!0)};return $.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=l[h]||s,p=f(t[h],e[h],h);$.isUndefined(p)&&f!==a||(n[h]=p)}),n}const fC=t=>{const e=Ti({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=fn.from(o),e.url=oC(hC(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if($.isFormData(n)){if(Xn.hasStandardBrowserEnv||Xn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Xn.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(e)),r||r!==!1&&q5(e.url))){const u=s&&i&&H5.read(i);u&&o.set(s,u)}return e},K5=typeof XMLHttpRequest<"u",G5=K5&&function(t){return new Promise(function(n,r){const s=fC(t);let i=s.data;const o=fn.from(s.headers).normalize();let{responseType:a}=s,l;function u(){s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function f(){if(!h)return;const g=fn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),v={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:g,config:t,request:h};uC(function(S){n(S),u()},function(S){r(S),u()},v),h=null}"onloadend"in h?h.onloadend=f:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(f)},h.onabort=function(){h&&(r(new Ie("Request aborted",Ie.ECONNABORTED,s,h)),h=null)},h.onerror=function(){r(new Ie("Network Error",Ie.ERR_NETWORK,s,h)),h=null},h.ontimeout=function(){let _=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const v=s.transitional||aC;s.timeoutErrorMessage&&(_=s.timeoutErrorMessage),r(new Ie(_,v.clarifyTimeoutError?Ie.ETIMEDOUT:Ie.ECONNABORTED,s,h)),h=null},i===void 0&&o.setContentType(null),"setRequestHeader"in h&&$.forEach(o.toJSON(),function(_,v){h.setRequestHeader(v,_)}),$.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),a&&a!=="json"&&(h.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&h.addEventListener("progress",nh(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",nh(s.onUploadProgress)),(s.cancelToken||s.signal)&&(l=g=>{h&&(r(!g||g.type?new Yo(null,t,h):g),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const p=U5(s.url);if(p&&Xn.protocols.indexOf(p)===-1){r(new Ie("Unsupported protocol "+p+":",Ie.ERR_BAD_REQUEST,t));return}h.send(i||null)})},Q5=(t,e)=>{let n=new AbortController,r;const s=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof Ie?u:new Yo(u instanceof Error?u.message:u))}};let i=e&&setTimeout(()=>{s(new Ie(`timeout ${e} of ms exceeded`,Ie.ETIMEDOUT))},e);const o=()=>{t&&(i&&clearTimeout(i),i=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",s):l.unsubscribe(s))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",s));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{i&&clearTimeout(i),i=null}]},Y5=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},X5=async function*(t,e,n){for await(const r of t)yield*Y5(ArrayBuffer.isView(r)?r:await n(String(r)),e)},Jw=(t,e,n,r,s)=>{const i=X5(t,e,s);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await i.next();if(l){a.close(),r();return}let h=u.byteLength;n&&n(o+=h),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),i.return()}},{highWaterMark:2})},Zw=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},mf=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",dC=mf&&typeof ReadableStream=="function",$p=mf&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),J5=dC&&(()=>{let t=!1;const e=new Request(Xn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),eb=64*1024,Up=dC&&!!(()=>{try{return $.isReadableStream(new Response("").body)}catch{}})(),rh={stream:Up&&(t=>t.body)};mf&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!rh[e]&&(rh[e]=$.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new Ie(`Response type '${e}' is not supported`,Ie.ERR_NOT_SUPPORT,r)})})})(new Response);const Z5=async t=>{if(t==null)return 0;if($.isBlob(t))return t.size;if($.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if($.isArrayBufferView(t))return t.byteLength;if($.isURLSearchParams(t)&&(t=t+""),$.isString(t))return(await $p(t)).byteLength},ez=async(t,e)=>{const n=$.toFiniteNumber(t.getContentLength());return n??Z5(e)},tz=mf&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:f="same-origin",fetchOptions:p}=fC(t);u=u?(u+"").toLowerCase():"text";let[g,_]=s||i||o?Q5([s,i],o):[],v,A;const S=()=>{!v&&setTimeout(()=>{g&&g.unsubscribe()}),v=!0};let O;try{if(l&&J5&&n!=="get"&&n!=="head"&&(O=await ez(h,r))!==0){let k=new Request(e,{method:"POST",body:r,duplex:"half"}),I;$.isFormData(r)&&(I=k.headers.get("content-type"))&&h.setContentType(I),k.body&&(r=Jw(k.body,eb,Zw(O,nh(l)),null,$p))}$.isString(f)||(f=f?"cors":"omit"),A=new Request(e,{...p,signal:g,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let D=await fetch(A);const x=Up&&(u==="stream"||u==="response");if(Up&&(a||x)){const k={};["status","statusText","headers"].forEach(y=>{k[y]=D[y]});const I=$.toFiniteNumber(D.headers.get("content-length"));D=new Response(Jw(D.body,eb,a&&Zw(I,nh(a,!0)),x&&S,$p),k)}u=u||"text";let F=await rh[$.findKey(rh,u)||"text"](D,t);return!x&&S(),_&&_(),await new Promise((k,I)=>{uC(k,I,{data:F,headers:fn.from(D.headers),status:D.status,statusText:D.statusText,config:t,request:A})})}catch(D){throw S(),D&&D.name==="TypeError"&&/fetch/i.test(D.message)?Object.assign(new Ie("Network Error",Ie.ERR_NETWORK,t,A),{cause:D.cause||D}):Ie.from(D,D&&D.code,t,A)}}),Bp={http:y5,xhr:G5,fetch:tz};$.forEach(Bp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const tb=t=>`- ${t}`,nz=t=>$.isFunction(t)||t===null||t===!1,pC={getAdapter:t=>{t=$.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!nz(n)&&(r=Bp[(o=String(n)).toLowerCase()],r===void 0))throw new Ie(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(tb).join(`
`):" "+tb(i[0]):"as no adapter specified";throw new Ie("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Bp};function yd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yo(null,t)}function nb(t){return yd(t),t.headers=fn.from(t.headers),t.data=_d.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),pC.getAdapter(t.adapter||nc.adapter)(t).then(function(r){return yd(t),r.data=_d.call(t,t.transformResponse,r),r.headers=fn.from(r.headers),r},function(r){return cC(r)||(yd(t),r&&r.response&&(r.response.data=_d.call(t,t.transformResponse,r.response),r.response.headers=fn.from(r.response.headers))),Promise.reject(r)})}const mC="1.7.2",u_={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{u_[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const rb={};u_.transitional=function(e,n,r){function s(i,o){return"[Axios v"+mC+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new Ie(s(o," has been removed"+(n?" in "+n:"")),Ie.ERR_DEPRECATED);return n&&!rb[o]&&(rb[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function rz(t,e,n){if(typeof t!="object")throw new Ie("options must be an object",Ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new Ie("option "+i+" must be "+l,Ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ie("Unknown option "+i,Ie.ERR_BAD_OPTION)}}const jp={assertOptions:rz,validators:u_},rs=jp.validators;class ci{constructor(e){this.defaults=e,this.interceptors={request:new Qw,response:new Qw}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ti(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&jp.assertOptions(r,{silentJSONParsing:rs.transitional(rs.boolean),forcedJSONParsing:rs.transitional(rs.boolean),clarifyTimeoutError:rs.transitional(rs.boolean)},!1),s!=null&&($.isFunction(s)?n.paramsSerializer={serialize:s}:jp.assertOptions(s,{encode:rs.function,serialize:rs.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=fn.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let h,f=0,p;if(!l){const _=[nb.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),p=_.length,h=Promise.resolve(n);f<p;)h=h.then(_[f++],_[f++]);return h}p=a.length;let g=n;for(f=0;f<p;){const _=a[f++],v=a[f++];try{g=_(g)}catch(A){v.call(this,A);break}}try{h=nb.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,p=u.length;f<p;)h=h.then(u[f++],u[f++]);return h}getUri(e){e=Ti(this.defaults,e);const n=hC(e.baseURL,e.url);return oC(n,e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(e){ci.prototype[e]=function(n,r){return this.request(Ti(r||{},{method:e,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Ti(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ci.prototype[e]=n(),ci.prototype[e+"Form"]=n(!0)});class h_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Yo(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new h_(function(s){e=s}),cancel:e}}}function sz(t){return function(n){return t.apply(null,n)}}function iz(t){return $.isObject(t)&&t.isAxiosError===!0}const qp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qp).forEach(([t,e])=>{qp[e]=t});function gC(t){const e=new ci(t),n=GS(ci.prototype.request,e);return $.extend(n,ci.prototype,e,{allOwnKeys:!0}),$.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return gC(Ti(t,s))},n}const Tt=gC(nc);Tt.Axios=ci;Tt.CanceledError=Yo;Tt.CancelToken=h_;Tt.isCancel=cC;Tt.VERSION=mC;Tt.toFormData=pf;Tt.AxiosError=Ie;Tt.Cancel=Tt.CanceledError;Tt.all=function(e){return Promise.all(e)};Tt.spread=sz;Tt.isAxiosError=iz;Tt.mergeConfig=Ti;Tt.AxiosHeaders=fn;Tt.formToJSON=t=>lC($.isHTMLForm(t)?new FormData(t):t);Tt.getAdapter=pC.getAdapter;Tt.HttpStatusCode=qp;Tt.default=Tt;Tt.interceptors.response.use(t=>t,t=>(t.response&&t.response.status===403&&o_.push({name:"Error403"}),Promise.reject(t)));const rc=pN(e6);rc.use(u4,{firebaseApp:qg,modules:[i4()]});rc.use(yN());rc.use(F9,e_(X9));rc.use(o_);rc.mount("#app");export{_z as $,Ez as A,wz as B,_p as C,hR as D,ns as E,mt as F,gh as G,fh as H,Un as I,Sb as J,La as K,Hb as L,az as M,Id as N,bk as O,cz as P,aN as Q,po as R,Do as S,pT as T,lm as U,lz as V,As as W,xt as X,fm as Y,AU as Z,r6 as _,Be as a,s4 as a0,$c as a1,Db as a2,am as a3,oz as a4,Ek as a5,Oo as a6,cf as a7,A6 as a8,wk as a9,Ub as aa,Bb as ab,uz as ac,d4 as ad,yz as ae,f4 as af,fs as ag,fz as ah,Cm as ai,Qh as aj,hz as ak,zo as al,re as b,Ze as c,me as d,Me as e,Xi as f,ol as g,Pt as h,On as i,ZH as j,lr as k,cn as l,Tz as m,_s as n,Te as o,MR as p,Wo as q,mh as r,bz as s,hn as t,zS as u,Gn as v,ut as w,Ae as x,c4 as y,W2 as z};
