(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{kcJm:function(t,e,n){"use strict";n.r(e),n.d(e,"KeywordsModule",(function(){return rt}));var i=n("PCNd"),a=n("3Pt+"),o=n("YUcS"),r=n("wZkO"),c=n("/1cH"),l=n("Wp6s"),m=n("bSwM"),s=n("iadO"),d=n("kmnG"),p=n("qFsG"),b=n("FKr1"),u=n("QibW"),h=n("d3UM"),f=n("5RNC"),g=n("NFeN"),x=n("1jcm"),C=n("0IaG"),v=n("+0xr"),w=n("M9IT"),O=n("Dh3D"),P=n("tyNb"),U=n("fXoL"),T=n("DZHk"),y=n("ofXK"),S=n("yj5z");function M(t,e){if(1&t&&U.Pb(0,"mat-tab",4),2&t){const t=e.$implicit;U.lc("routerLink",t.path)("label",t.label)}}class _{constructor(t,e){this.path=t,this.label=e}}let A=(()=>{class t{constructor(){this.navLinks=[]}ngOnInit(){this.navLinks=[new _("add","Edit Title"),new _("addservice","New Client"),new _("table","List Clients")]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=U.Ib({type:t,selectors:[["app-home"]],decls:4,vars:1,consts:[[1,"bg-white","mat-elevation-z10",2,"min-height","80vh"],["routerTabs",""],[3,"routerLink","label",4,"ngFor","ngForOf"],[2,"padding","12px"],[3,"routerLink","label"]],template:function(t,e){1&t&&(U.Ub(0,"section",0),U.Ub(1,"mat-tab-group",1),U.Ac(2,M,1,2,"mat-tab",2),U.Tb(),U.Pb(3,"router-outlet",3),U.Tb()),2&t&&(U.Cb(2),U.lc("ngForOf",e.navLinks))},directives:[r.b,T.a,y.k,P.g,r.a,S.a,P.c],styles:[""]}),t})();var k=n("mrSG"),D=n("tk/3"),I=n("zBGc");let B=(()=>{class t{constructor(t,e){this.urlservice=t,this.httpClient=e,this.appUrl=this.urlservice.baseurl}getAllApplication(){return this.httpClient.get(this.appUrl+"/uPageClient").toPromise().then(t=>t).catch(this.handleError)}updateSequence(t){let e=new D.c({"Content-Type":"application/json"});return this.httpClient.put(this.appUrl+"/uPageClient",t,{headers:e}).toPromise().then(t=>t).catch(this.handleError)}addApplication(t){return this.httpClient.put(this.appUrl+"/uPageClient/new",t).toPromise().then(t=>t).catch(this.handleError)}getAllSerives(t){let e=new D.c({"Content-Type":"application/json"});return this.httpClient.post(this.appUrl+"/uPageClient",t,{headers:e}).toPromise().then(t=>t).catch(this.handleError)}updateApplication(t,e){return this.httpClient.put(this.appUrl+"/uPageClient/new/"+t,e).toPromise().then(t=>t).catch(this.handleError)}deleteTask(t){return this.httpClient.delete(this.appUrl+"/uPageClient/"+t).toPromise().then(t=>t).catch(this.handleError)}handleError(t){return Promise.reject(t.message||t)}}return t.\u0275fac=function(e){return new(e||t)(U.Yb(I.a),U.Yb(D.a))},t.\u0275prov=U.Kb({token:t,factory:t.\u0275fac}),t})();var F=n("bTqV"),j=n("XiUz");const R=["table"];function z(t,e){1&t&&(U.Ub(0,"th",12),U.Bc(1," Index "),U.Tb())}function N(t,e){if(1&t&&(U.Ub(0,"td",13),U.Bc(1),U.Tb()),2&t){const t=e.index;U.Cb(1),U.Dc(" ",t+1," ")}}function E(t,e){1&t&&(U.Ub(0,"th",12),U.Bc(1," Image "),U.Tb())}function L(t,e){if(1&t&&(U.Ub(0,"td",13),U.Pb(1,"img",14),U.Tb()),2&t){const t=e.$implicit;U.Cb(1),U.mc("alt",null==t?null:t.imageAlt),U.lc("src",(null==t?null:t.location)+(null==t?null:t.imageSrc),U.vc)}}function G(t,e){1&t&&(U.Ub(0,"th",12),U.Bc(1," Alt "),U.Tb())}function V(t,e){if(1&t&&(U.Ub(0,"td",13),U.Bc(1),U.Tb()),2&t){const t=e.$implicit;U.Cb(1),U.Dc(" ",null==t?null:t.imageAlt," ")}}function q(t,e){1&t&&U.Pb(0,"th",12)}function H(t,e){if(1&t){const t=U.Vb();U.Ub(0,"td",13),U.Ub(1,"button",15),U.cc("click",(function(){U.tc(t);const n=e.$implicit,i=e.index;return U.gc().showApplication(n,i)})),U.Ub(2,"mat-icon"),U.Bc(3,"edit"),U.Tb(),U.Tb(),U.Ub(4,"button",16),U.cc("click",(function(){U.tc(t);const n=e.$implicit,i=e.index;return U.gc().deleteTask(n,i)})),U.Ub(5,"mat-icon"),U.Bc(6,"delete"),U.Tb(),U.Tb(),U.Tb()}}function W(t,e){1&t&&U.Pb(0,"tr",17)}function $(t,e){1&t&&U.Pb(0,"tr",18)}const K=function(){return[10,20,30]},Q=["fileUploader"];let Y=(()=>{class t{constructor(t,e){this.clientService=t,this.matDialog=e,this.displayedColumns=["index","imageSrc","imageAlt","actions"]}ngOnInit(){this.pageIndex=0,this.pageSize=10,this.initApp()}initApp(){return Object(k.a)(this,void 0,void 0,(function*(){var t={pageIndex:this.pageIndex,pageSize:this.pageSize},e=yield this.clientService.getAllSerives(t);this.dataSource=e.data.dataSource,this.length=e.data.length}))}getServerData(t){return Object(k.a)(this,void 0,void 0,(function*(){this.pageIndex=t.pageIndex,this.pageSize=t.pageSize,this.initApp()}))}showApplication(t,e){return Object(k.a)(this,void 0,void 0,(function*(){this.rowData=t,this.matDialog.open(J,{height:"auto",width:"auto",disableClose:!0,hasBackdrop:!0,data:{_id:this.rowData._id,imageSrc:this.rowData.imageSrc,imageAlt:this.rowData.imageAlt,location:this.rowData.location,clientname:this.rowData.clientname,review:this.rowData.review}}).afterClosed().pipe().subscribe(t=>{this.initApp()})}))}deleteTask(t,e){return Object(k.a)(this,void 0,void 0,(function*(){this.rowData=t,this.matDialog.open(X,{height:"auto",width:"auto",disableClose:!0,hasBackdrop:!0,data:{_id:this.rowData._id,imageSrc:this.rowData.imageSrc,location:this.rowData.location,imageAlt:this.rowData.imageAlt,clientname:this.rowData.clientname,review:this.rowData.review}}).afterClosed().pipe().subscribe(t=>{this.initApp()})}))}}return t.\u0275fac=function(e){return new(e||t)(U.Ob(B),U.Ob(C.b))},t.\u0275cmp=U.Ib({type:t,selectors:[["app-inputs"]],viewQuery:function(t,e){var n;1&t&&U.Fc(R,!0),2&t&&U.qc(n=U.dc())&&(e.table=n.first)},decls:18,vars:8,consts:[["id","sample-table",1,"mat-elevation-z8","bg-white"],["mat-table","",1,"w-100",3,"dataSource"],["table",""],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","imageSrc"],["matColumnDef","imageAlt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[2,"height","50px","width","50px",3,"src","alt"],["mat-icon-button","","color","accent",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(U.Ub(0,"section",0),U.Ub(1,"table",1,2),U.Sb(3,3),U.Ac(4,z,2,0,"th",4),U.Ac(5,N,2,1,"td",5),U.Rb(),U.Sb(6,6),U.Ac(7,E,2,0,"th",4),U.Ac(8,L,2,2,"td",5),U.Rb(),U.Sb(9,7),U.Ac(10,G,2,0,"th",4),U.Ac(11,V,2,1,"td",5),U.Rb(),U.Sb(12,8),U.Ac(13,q,1,0,"th",4),U.Ac(14,H,7,0,"td",5),U.Rb(),U.Ac(15,W,1,0,"tr",9),U.Ac(16,$,1,0,"tr",10),U.Tb(),U.Ub(17,"mat-paginator",11),U.cc("page",(function(t){return e.getServerData(t)})),U.Tb(),U.Tb()),2&t&&(U.Cb(1),U.lc("dataSource",e.dataSource),U.Cb(14),U.lc("matHeaderRowDef",e.displayedColumns),U.Cb(1),U.lc("matRowDefColumns",e.displayedColumns),U.Cb(1),U.lc("length",e.length)("pageIndex",e.pageIndex)("pageSize",e.pageSize)("pageSizeOptions",U.nc(7,K)))},directives:[v.j,v.c,v.e,v.b,v.g,v.i,w.a,v.d,v.a,F.a,g.a,v.f,v.h],styles:[".example-form[_ngcontent-%COMP%]{min-width:0;max-width:800px}.example-full-width[_ngcontent-%COMP%]{width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{max-width:800px!important;width:800px!important}h4[_ngcontent-%COMP%]{text-transform:uppercase;color:#8a2be2}"]}),t})(),J=(()=>{class t{constructor(t,e,n,i){this.formBuilder=t,this.dialogRef=e,this.data=n,this.clientService=i}ngOnInit(){this.imageSRC=this.data.location+this.data.imageSrc,this.form=this.formBuilder.group({id:this.data._id,imageSrc:this.data.imageSrc,imageAlt:this.data.imageAlt,location:this.data.location,clientname:this.data.clientname,review:this.data.review})}uploadFile(t){this.form.patchValue({imageSrc:t.target.files[0]}),this.form.get("imageSrc").updateValueAndValidity()}submit(t){return Object(k.a)(this,void 0,void 0,(function*(){try{var e=new FormData;e.append("imageAlt",this.form.get("imageAlt").value),e.append("imageSrc",this.form.get("imageSrc").value),e.append("clientname",this.form.get("clientname").value),e.append("review",this.form.get("review").value);var n=yield this.clientService.updateApplication(t.value.id,e);1==n.code&&(this.dialogRef.close(n.data),this.clearForm())}catch(i){}}))}clearForm(){return Object(k.a)(this,void 0,void 0,(function*(){this.form.patchValue({imageAlt:"",imageSrc:[null],location:""}),this.fileUploader.nativeElement.value=null}))}}return t.\u0275fac=function(e){return new(e||t)(U.Ob(a.c),U.Ob(C.f),U.Ob(C.a),U.Ob(B))},t.\u0275cmp=U.Ib({type:t,selectors:[["application-edit-dialog"]],viewQuery:function(t,e){var n;1&t&&U.Fc(Q,!0),2&t&&U.qc(n=U.dc())&&(e.fileUploader=n.first)},decls:25,vars:2,consts:[["fxFlex","100","fxFlex.gt-xs","95%","fxFlex.gt-sm","800px"],["fxFlex.gt-xs","100",1,"mb15",3,"formGroup","ngSubmit"],["mat-dialog-title","","align","center"],[1,""],[1,"example-container"],["color","accent",2,"width","800px !important"],["matInput","","formControlName","imageAlt","type","text","placeholder","Image Alt"],["matInput","","placeholder","Client Name","type","text","formControlName","clientname"],["matInput","","placeholder","Review","type","text","formControlName","review"],["type","file","mat-raised-button","","color","accent",3,"change"],["fileUploader",""],[2,"height","100px","width","100px",3,"src"],["align","end"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit"]],template:function(t,e){1&t&&(U.Ub(0,"div",0),U.Ub(1,"form",1),U.cc("ngSubmit",(function(){return e.submit(e.form)})),U.Ub(2,"h4",2),U.Bc(3," Update Client "),U.Tb(),U.Ub(4,"mat-dialog-content",3),U.Ub(5,"div",4),U.Ub(6,"mat-form-field",5),U.Pb(7,"input",6),U.Tb(),U.Pb(8,"br"),U.Ub(9,"mat-form-field",5),U.Pb(10,"input",7),U.Tb(),U.Pb(11,"br"),U.Ub(12,"mat-form-field",5),U.Pb(13,"textarea",8),U.Tb(),U.Pb(14,"br"),U.Ub(15,"input",9,10),U.cc("change",(function(t){return e.uploadFile(t)})),U.Tb(),U.Pb(17,"img",11),U.Tb(),U.Tb(),U.Ub(18,"mat-dialog-actions",12),U.Ub(19,"button",13),U.cc("click",(function(){return e.dialogRef.close()})),U.Ub(20,"mat-icon"),U.Bc(21,"cancel"),U.Tb(),U.Tb(),U.Ub(22,"button",14),U.Ub(23,"mat-icon"),U.Bc(24,"edit"),U.Tb(),U.Tb(),U.Tb(),U.Tb(),U.Tb()),2&t&&(U.Cb(1),U.lc("formGroup",e.form),U.Cb(16),U.lc("src",e.imageSRC,U.vc))},directives:[j.a,a.p,a.k,a.e,C.g,C.d,d.b,p.b,a.b,a.j,a.d,C.c,F.a,g.a],styles:[".example-form[_ngcontent-%COMP%]{min-width:0;max-width:800px}.example-full-width[_ngcontent-%COMP%]{width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{max-width:800px!important;width:800px!important}h4[_ngcontent-%COMP%]{text-transform:uppercase;color:#8a2be2}"]}),t})(),X=(()=>{class t{constructor(t,e,n,i){this.formBuilder=t,this.dialogRef=e,this.data=n,this.clientService=i}ngOnInit(){this.form=this.formBuilder.group({id:this.data._id,imageSrc:{value:this.data.location+this.data.imageSrc,disabled:!0}}),this.imageSRC=this.data.location+this.data.imageSrc}deleteTask(t){return Object(k.a)(this,void 0,void 0,(function*(){var e=yield this.clientService.deleteTask(t.value.id);1==e.code&&this.dialogRef.close(e.data)}))}}return t.\u0275fac=function(e){return new(e||t)(U.Ob(a.c),U.Ob(C.f),U.Ob(C.a),U.Ob(B))},t.\u0275cmp=U.Ib({type:t,selectors:[["keyword-delete-dialog"]],decls:17,vars:2,consts:[["fxFlex","100","fxFlex.gt-xs","95%","fxFlex.gt-sm","800px"],["fxFlex.gt-xs","100",1,"mb15",3,"formGroup","ngSubmit"],["mat-dialog-title","","align","center"],[1,""],[1,"example-container"],["color","warn",2,"width","800px !important"],["matInput","","formControlName","imageSrc","type","text","placeholder","Image Alt"],[2,"height","100px","width","100px",3,"src"],["align","end"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","color","warn","type","submit"]],template:function(t,e){1&t&&(U.Ub(0,"div",0),U.Ub(1,"form",1),U.cc("ngSubmit",(function(){return e.deleteTask(e.form)})),U.Ub(2,"h4",2),U.Bc(3," Delete Client "),U.Tb(),U.Ub(4,"mat-dialog-content",3),U.Ub(5,"div",4),U.Ub(6,"mat-form-field",5),U.Pb(7,"input",6),U.Tb(),U.Pb(8,"br"),U.Pb(9,"img",7),U.Tb(),U.Tb(),U.Ub(10,"mat-dialog-actions",8),U.Ub(11,"button",9),U.cc("click",(function(){return e.dialogRef.close()})),U.Ub(12,"mat-icon"),U.Bc(13,"cancel"),U.Tb(),U.Tb(),U.Ub(14,"button",10),U.Ub(15,"mat-icon"),U.Bc(16,"delete"),U.Tb(),U.Tb(),U.Tb(),U.Tb(),U.Tb()),2&t&&(U.Cb(1),U.lc("formGroup",e.form),U.Cb(8),U.lc("src",e.imageSRC,U.vc))},directives:[j.a,a.p,a.k,a.e,C.g,C.d,d.b,p.b,a.b,a.j,a.d,C.c,F.a,g.a],styles:[".example-form[_ngcontent-%COMP%]{min-width:0;max-width:800px}.example-full-width[_ngcontent-%COMP%]{width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{max-width:800px!important;width:800px!important}h4[_ngcontent-%COMP%]{text-transform:uppercase;color:#8a2be2}"]}),t})();const Z=["fileUploader"],tt=[{path:"",component:A,children:[{path:"",redirectTo:"add"},{path:"add",component:(()=>{class t{constructor(t,e){this.clientService=t,this.formBuilder=e,this.form=this.formBuilder.group({title:null,description:null})}ngOnInit(){return Object(k.a)(this,void 0,void 0,(function*(){var t=yield this.clientService.getAllApplication();this.form=this.formBuilder.group(1==t.code?{title:t.data.title,description:t.data.description}:{title:"Enter Title",description:"Enter description"})}))}submitContact(t){return Object(k.a)(this,void 0,void 0,(function*(){var e=yield this.clientService.updateSequence(t.value);1==e.code&&this.form.setValue({title:e.data.title,description:e.data.description})}))}}return t.\u0275fac=function(e){return new(e||t)(U.Ob(B),U.Ob(a.c))},t.\u0275cmp=U.Ib({type:t,selectors:[["app-other"]],decls:15,vars:1,consts:[["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutAlign","space-around stretch"],["fxFlex.gt-xs","40",1,"mb15",3,"formGroup","ngSubmit"],["mat-card-title",""],[1,""],[1,"example-container"],["matInput","","placeholder","Title","type","text","formControlName","title"],["matInput","","placeholder","Description","type","text","formControlName","description"],["mat-raised-button","","color","primary","type","submit",1,"w-100"]],template:function(t,e){1&t&&(U.Ub(0,"div",0),U.Ub(1,"form",1),U.cc("ngSubmit",(function(){return e.submitContact(e.form)})),U.Ub(2,"mat-card"),U.Ub(3,"mat-card-header"),U.Ub(4,"h2",2),U.Bc(5,"Edit Client"),U.Tb(),U.Tb(),U.Ub(6,"mat-card-content",3),U.Ub(7,"div",4),U.Ub(8,"mat-form-field"),U.Pb(9,"input",5),U.Tb(),U.Ub(10,"mat-form-field"),U.Pb(11,"textarea",6),U.Tb(),U.Tb(),U.Tb(),U.Ub(12,"mat-card-actions"),U.Ub(13,"button",7),U.Bc(14,"UPDATE"),U.Tb(),U.Tb(),U.Tb(),U.Tb(),U.Tb()),2&t&&(U.Cb(1),U.lc("formGroup",e.form))},directives:[j.c,j.b,a.p,a.k,j.a,a.e,l.a,l.e,l.h,l.d,d.b,p.b,a.b,a.j,a.d,l.b,F.a],styles:[".mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-right:8px}.mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}.mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-moz-appearance:textfield}.example-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:20px}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px 0}.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:0 5px}input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}mat-card-header[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-transform:uppercase;color:#8a2be2}h2[_ngcontent-%COMP%]{text-align:center}"]}),t})()},{path:"table",component:Y},{path:"addservice",component:(()=>{class t{constructor(t,e){this.clientService=t,this.formBuilder=e,this.form=this.formBuilder.group({imageAlt:"",imageSrc:[null],clientname:"",review:""})}uploadFile(t){this.form.patchValue({imageSrc:t.target.files[0]}),this.form.get("imageSrc").updateValueAndValidity()}ngOnInit(){return Object(k.a)(this,void 0,void 0,(function*(){}))}submitContact(){return Object(k.a)(this,void 0,void 0,(function*(){var t=new FormData;t.append("imageAlt",this.form.get("imageAlt").value),t.append("imageSrc",this.form.get("imageSrc").value),t.append("clientname",this.form.get("clientname").value),t.append("review",this.form.get("review").value),yield this.clientService.addApplication(t),this.clearForm()}))}clearForm(){return Object(k.a)(this,void 0,void 0,(function*(){this.form.patchValue({imageAlt:"",imageSrc:[null],clientname:"",review:""}),this.fileUploader.nativeElement.value=null}))}}return t.\u0275fac=function(e){return new(e||t)(U.Ob(B),U.Ob(a.c))},t.\u0275cmp=U.Ib({type:t,selectors:[["app-new-client"]],viewQuery:function(t,e){var n;1&t&&U.Fc(Z,!0),2&t&&U.qc(n=U.dc())&&(e.fileUploader=n.first)},decls:19,vars:1,consts:[["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutAlign","space-around stretch"],["fxFlex.gt-xs","40",1,"mb15",3,"formGroup","ngSubmit"],["mat-card-title",""],[1,""],[1,"example-container"],["matInput","","placeholder","Image Alt","type","text","formControlName","imageAlt"],["matInput","","placeholder","Client Name","type","text","formControlName","clientname"],["matInput","","placeholder","Review","type","text","formControlName","review"],["type","file","mat-raised-button","","color","accent",3,"change"],["fileUploader",""],["mat-raised-button","","color","primary","type","submit",1,"w-100"]],template:function(t,e){1&t&&(U.Ub(0,"div",0),U.Ub(1,"form",1),U.cc("ngSubmit",(function(){return e.submitContact()})),U.Ub(2,"mat-card"),U.Ub(3,"mat-card-header"),U.Ub(4,"h2",2),U.Bc(5,"Add Client"),U.Tb(),U.Tb(),U.Ub(6,"mat-card-content",3),U.Ub(7,"div",4),U.Ub(8,"mat-form-field"),U.Pb(9,"input",5),U.Tb(),U.Ub(10,"mat-form-field"),U.Pb(11,"input",6),U.Tb(),U.Ub(12,"mat-form-field"),U.Pb(13,"textarea",7),U.Tb(),U.Ub(14,"input",8,9),U.cc("change",(function(t){return e.uploadFile(t)})),U.Tb(),U.Tb(),U.Tb(),U.Ub(16,"mat-card-actions"),U.Ub(17,"button",10),U.Bc(18,"NEW"),U.Tb(),U.Tb(),U.Tb(),U.Tb(),U.Tb()),2&t&&(U.Cb(1),U.lc("formGroup",e.form))},directives:[j.c,j.b,a.p,a.k,j.a,a.e,l.a,l.e,l.h,l.d,d.b,p.b,a.b,a.j,a.d,l.b,F.a],styles:[".mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-right:8px}.mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}.mfk[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-moz-appearance:textfield}.example-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:20px}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px 0}.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:0 5px}input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}mat-card-header[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-transform:uppercase;color:#8a2be2}h2[_ngcontent-%COMP%]{text-align:center}"]}),t})()},{path:"**",redirectTo:"add"}]}];let et=(()=>{class t{}return t.\u0275mod=U.Mb({type:t}),t.\u0275inj=U.Lb({factory:function(e){return new(e||t)},imports:[[P.f.forChild(tt)],P.f]}),t})();var nt=n("5+WD"),it=n("6NWb"),at=n("8tEE"),ot=n("wHSu");let rt=(()=>{class t{constructor(t){this.library=t,t.addIcons(at.f,ot.a,at.d,at.e,at.a,at.c,at.b)}}return t.\u0275mod=U.Mb({type:t}),t.\u0275inj=U.Lb({factory:function(e){return new(e||t)(U.Yb(it.a))},providers:[I.a,B],imports:[[i.a,it.b,C.e,et,a.f,v.k,w.b,O.a,a.m,o.a,r.c,c.a,x.a,F.b,d.d,p.c,l.f,m.a,u.a,s.a,b.l,h.b,f.a,g.b,nt.a]]}),t})()}}]);