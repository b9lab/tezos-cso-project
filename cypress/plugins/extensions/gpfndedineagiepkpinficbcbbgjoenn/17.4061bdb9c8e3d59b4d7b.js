(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{gGlD:function(e,i,s){"use strict";s.r(i),s.d(i,"PermissionListPageRoutingModule",function(){return P});var n=s("tyNb"),o=s("DYCq"),t=s("ASmo"),r=s("fXoL"),a=s("TEn/"),c=s("ofXK"),l=s("Y22S");function PermissionListPage_ion_item_11_Template(e,i){if(1&e){const e=r.Qb();r.Pb(0,"ion-item",3),r.Pb(1,"ion-label"),r.Pb(2,"h3"),r.Pb(3,"strong"),r.oc(4),r.Ob(),r.Pb(5,"small"),r.oc(6),r.Ob(),r.Ob(),r.Pb(7,"div",4),r.Lb(8,"identicon",5),r.Pb(9,"p",6),r.oc(10),r.Ob(),r.Ob(),r.Pb(11,"ion-badge",7),r.oc(12),r.Ob(),r.Ob(),r.Pb(13,"ion-button",8),r.Xb("click",function PermissionListPage_ion_item_11_Template_ion_button_click_13_listener(){r.kc(e);const s=i.$implicit;return r.Zb().deletePermission(s)}),r.oc(14," Remove "),r.Ob(),r.Ob()}if(2&e){const e=i.$implicit;r.Ab(4),r.pc(e.appMetadata.name),r.Ab(2),r.pc(e.website),r.Ab(2),r.fc("address",e.address),r.Ab(2),r.pc(e.address),r.Ab(2),r.qc(" ",e.scopes," ")}}const m=[{path:"",component:(()=>{class PermissionListPage{constructor(e,i){this.chromeMessagingService=e,this.alertController=i,this.permissions=[],this.loadPermissions().catch(console.error)}async loadPermissions(){this.chromeMessagingService.sendChromeMessage(t.a.PERMISSIONS_GET,void 0).then(e=>{e.data&&(this.permissions=e.data.permissions,console.log("permissions set",e.data.permissions))}).catch(console.error)}async deletePermission(e){const i=await this.alertController.create({header:"Delete Permission?",message:"Are you sure you want to delete this permission? The DApp will not be able to perform operations anymore until new permissions are granted.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:async()=>{await this.chromeMessagingService.sendChromeMessage(t.a.PERMISSION_DELETE,{permission:e}),await this.loadPermissions()}}]});await i.present()}}return PermissionListPage.\u0275fac=function PermissionListPage_Factory(e){return new(e||PermissionListPage)(r.Kb(o.a),r.Kb(a.a))},PermissionListPage.\u0275cmp=r.Eb({type:PermissionListPage,selectors:[["app-permission-list"]],decls:12,vars:1,consts:[[1,"ion-no-border"],["slot","start"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"d-flex","ion-align-items-center"],[3,"address"],[1,"ion-no-margin"],["color","light"],["slot","end","size","small","fill","outline",3,"click"]],template:function PermissionListPage_Template(e,i){1&e&&(r.Pb(0,"ion-header",0),r.Pb(1,"ion-toolbar"),r.Pb(2,"ion-buttons",1),r.Lb(3,"ion-menu-button"),r.Ob(),r.Pb(4,"ion-title"),r.oc(5," Permissions "),r.Ob(),r.Ob(),r.Ob(),r.Pb(6,"ion-content"),r.Pb(7,"ion-list"),r.Pb(8,"ion-list-header"),r.Pb(9,"ion-label"),r.oc(10,"Connected dApps"),r.Ob(),r.Ob(),r.nc(11,PermissionListPage_ion_item_11_Template,15,5,"ion-item",2),r.Ob(),r.Ob()),2&e&&(r.Ab(11),r.fc("ngForOf",i.permissions))},directives:[a.p,a.J,a.i,a.x,a.H,a.n,a.u,a.v,a.t,c.k,a.s,l.a,a.g,a.h],styles:["ion-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{padding-right:4px}ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 8px}"]}),PermissionListPage})()}];let P=(()=>{class PermissionListPageRoutingModule{}return PermissionListPageRoutingModule.\u0275fac=function PermissionListPageRoutingModule_Factory(e){return new(e||PermissionListPageRoutingModule)},PermissionListPageRoutingModule.\u0275mod=r.Ib({type:PermissionListPageRoutingModule}),PermissionListPageRoutingModule.\u0275inj=r.Hb({imports:[[n.i.forChild(m)],n.i]}),PermissionListPageRoutingModule})()}}]);