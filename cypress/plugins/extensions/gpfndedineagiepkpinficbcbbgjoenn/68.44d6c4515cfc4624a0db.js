(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{cg4z:function(e,t,o){"use strict";o.r(t),o.d(t,"startTapClick",function(){return startTapClick});var n=o("1vRN");const startTapClick=e=>{let t,o,r,d,l=10*-c,u=0;const v=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),p=new WeakMap,onTouchEnd=e=>{l=Object(n.o)(e),pointerUp(e)},cancelActive=()=>{clearTimeout(d),d=void 0,o&&(removeActivated(!1),o=void 0)},pointerDown=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,setActivatedElement(getActivatableTarget(e),e))},pointerUp=e=>{setActivatedElement(void 0,e)},setActivatedElement=(e,t)=>{if(e&&e===o)return;clearTimeout(d),d=void 0;const{x:a,y:c}=Object(n.p)(t);if(o){if(p.has(o))throw new Error("internal error");o.classList.contains(i)||addActivated(o,a,c),removeActivated(!0)}if(e){const t=p.get(e);t&&(clearTimeout(t),p.delete(e));const o=isInstant(e)?0:s;e.classList.remove(i),d=setTimeout(()=>{addActivated(e,a,c),d=void 0},o)}o=e},addActivated=(e,t,o)=>{u=Date.now(),e.classList.add(i);const n=v&&getRippleEffect(e);n&&n.addRipple&&(removeRipple(),r=n.addRipple(t,o))},removeRipple=()=>{void 0!==r&&(r.then(e=>e()),r=void 0)},removeActivated=e=>{removeRipple();const t=o;if(!t)return;const n=a-Date.now()+u;if(e&&n>0&&!isInstant(t)){const e=setTimeout(()=>{t.classList.remove(i),p.delete(t)},a);p.set(t,e)}else t.classList.remove(i)},f=document;f.addEventListener("ionScrollStart",e=>{t=e.target,cancelActive()}),f.addEventListener("ionScrollEnd",()=>{t=void 0}),f.addEventListener("ionGestureCaptured",cancelActive),f.addEventListener("touchstart",e=>{l=Object(n.o)(e),pointerDown(e)},!0),f.addEventListener("touchcancel",onTouchEnd,!0),f.addEventListener("touchend",onTouchEnd,!0),f.addEventListener("mousedown",e=>{const t=Object(n.o)(e)-c;l<t&&pointerDown(e)},!0),f.addEventListener("mouseup",e=>{const t=Object(n.o)(e)-c;l<t&&pointerUp(e)},!0)},getActivatableTarget=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},isInstant=e=>e.classList.contains("ion-activatable-instant"),getRippleEffect=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},i="ion-activated",s=200,a=200,c=2500}}]);