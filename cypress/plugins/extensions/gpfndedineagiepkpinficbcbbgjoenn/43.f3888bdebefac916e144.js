(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{qCuA:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_popover",function(){return d});var i=t("wEJo"),r=t("E/Mt"),n=t("acej"),s=t("SOSK"),p=t("74mu"),a=t("Js3/"),c=t("meiF");t("1vRN"),t("B4Jq");const iosEnterAnimation=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),n=r.getBoundingClientRect(),s=n.width,p=n.height,a=o.ownerDocument.defaultView.innerWidth,d=o.ownerDocument.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:d/2-p/2,b=null!=h&&"left"in h?h.left:a/2,m=h&&h.width||0,f=h&&h.height||0,u=o.querySelector(".popover-arrow"),x=u.getBoundingClientRect(),g=x.width,w=x.height;null==h&&(u.style.display="none");const y={top:v+f,left:b+m/2-g/2},k={top:v+f+(w-1),left:b+m/2-s/2};let j=!1,O=!1;k.left<l+25?(j=!0,k.left=l):s+l+k.left+25>a&&(O=!0,k.left=a-s-l,i="right"),v+f+p>d&&v-p>0?(y.top=v-(w+1),k.top=v-p-(w-1),o.className=o.className+" popover-bottom",t="bottom"):v+f+p>d&&(r.style.bottom=l+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",j&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),O&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const D=Object(c.a)(),E=Object(c.a)(),P=Object(c.a)();return E.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(100).addAnimation([E,P])},l=5,iosLeaveAnimation=o=>{const e=Object(c.a)(),t=Object(c.a)(),i=Object(c.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},mdEnterAnimation=(o,e)=>{const t=o.ownerDocument,i="rtl"===t.dir;let r="top",n=i?"right":"left";const s=o.querySelector(".popover-content"),p=s.getBoundingClientRect(),a=p.width,l=p.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,v=e&&e.target&&e.target.getBoundingClientRect(),b=null!=v&&"bottom"in v?v.bottom:h/2-l/2,m=null!=v&&"left"in v?i?v.left-a+v.width:v.left:d/2-a/2,f=v&&v.height||0,u={top:b,left:m};u.left<12?(u.left=12,n="left"):a+12+u.left>d&&(u.left=d-a-12,n="right"),b+f+l>h&&b-l>0?(u.top=b-l-f,o.className=o.className+" popover-bottom",r="bottom"):b+f+l>h&&(s.style.bottom="12px");const x=Object(c.a)(),g=Object(c.a)(),w=Object(c.a)(),y=Object(c.a)(),k=Object(c.a)();return g.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(s).beforeStyles({top:u.top+"px",left:u.left+"px","transform-origin":`${r} ${n}`}).fromTo("transform","scale(0.001)","scale(1)"),k.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),x.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,y,k])},mdLeaveAnimation=o=>{const e=Object(c.a)(),t=Object(c.a)(),i=Object(c.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},d=class{constructor(o){Object(i.o)(this,o),this.didPresent=Object(i.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.onLifecycle=o=>{const e=this.usersElement,t=h[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}}}connectedCallback(){Object(s.f)(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(n.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e),await Object(a.f)(this.usersElement),Object(s.e)(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)}async dismiss(o,e){const t=await Object(s.g)(this,o,e,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event);return t&&await Object(n.b)(this.delegate,this.usersElement),t}onDidDismiss(){return Object(s.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionPopoverWillDismiss")}render(){const o=Object(r.b)(this),{onLifecycle:e}=this;return Object(i.j)(i.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(p.b)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.j)("div",{tabindex:"0"}),Object(i.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(i.j)("div",{class:"popover-arrow"}),Object(i.j)("div",{class:"popover-content"})),Object(i.j)("div",{tabindex:"0"}))}get el(){return Object(i.k)(this)}},h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};d.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);