!function(){function i(i,e){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),c.push.apply(c,n)}return c}function e(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(i){c(e,i,l[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(l,i))}))}return e}function c(i,e,c){return e in i?Object.defineProperty(i,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[e]=c,i}var n=document.createElement("style");n.innerHTML=".icon-panel[data-v-57f84410]{padding:1rem;user-select:none}.icon-items[data-v-57f84410]{display:inline-block;padding:.2rem;border:1px solid #efefef;margin:.01rem;color:#6f7180;border-radius:.3rem;transition:all .3s}.icon-items[data-v-57f84410]:hover{background:#1daaef;color:#fff}.icon-items i[data-v-57f84410]{font-size:1.3rem}\n",document.head.appendChild(n),System.register(["./index-legacy.e3af1aab.js","./vendor-legacy.5aaa7420.js","./index-legacy.046e2eb7.js"],(function(i,c){"use strict";var n,l,t,o,r,a,u,s,f,d,m,p,g,b,h,v,y,k,w,C,V,_,S,z,O,j;return{setters:[function(i){n=i.u,l=i.a},function(i){t=i.d,o=i.y,r=i.r,a=i.b,u=i.A,s=i.k,f=i.e,d=i.c,m=i.s,p=i.q,g=i.g,b=i.F,h=i.t,v=i.n,y=i.p,k=i.f,w=i.aR,C=i.G,V=i.I,_=i.J,S=i.i,z=i.v,O=i.K},function(i){j=i.c}],execute:function(){var x=t({name:"Icon",props:{msg:{type:String,required:!1,default:""}},emits:["success"],setup:function(i,c){var n=c.emit,l=o({icons:["ic ic-accessory","ic ic-activity","ic ic-activity-fill","ic ic-add","ic ic-addition-fill","ic ic-addition","ic ic-addpeople-fill","ic ic-addpeople","ic ic-addressbook-fill","ic ic-addressbook","ic ic-barrage-fill","ic ic-barrage","ic ic-browse-fill","ic ic-browse","ic ic-brush","ic ic-brush-fill","ic ic-businesscard-fill","ic ic-businesscard","ic ic-camera-fill","ic ic-camera","ic ic-clock-fill","ic ic-clock","ic ic-close","ic ic-collection-fill","ic ic-collection","ic ic-computer-fill","ic ic-computer","ic ic-coordinates-fill","ic ic-coordinates","ic ic-coupons-fill","ic ic-coupons","ic ic-createtask-fill","ic ic-createtask","ic ic-customerservice-fill","ic ic-customerservice","ic ic-delete-fill","ic ic-delete","ic ic-document","ic ic-document-fill","ic ic-dynamic ic-fill","ic ic-dynamic","ic ic-editor","ic ic-eit","ic ic-emoji-fill","ic ic-emoji","ic ic-empty","ic ic-empty-fill","ic ic-enter","ic ic-enterinto","ic ic-enterinto-fill","ic ic-feedback-fill","ic ic-feedback","ic ic-flag-fill","ic ic-flag","ic ic-flashlight","ic ic-flashlight-fill","ic ic-flip","ic ic-flip-fill","ic ic-fullscreen","ic ic-group","ic ic-group-fill","ic ic-headlines-fill","ic ic-headlines","ic ic-homepage-fill","ic ic-homepage","ic ic-integral-fill","ic ic-integral","ic ic-interactive-fill","ic ic-interactive","ic ic-keyboard","ic ic-label","ic ic-label-fill","ic ic-like-fill","ic ic-like","ic ic-live-fill","ic ic-live","ic ic-lock-fill","ic ic-lock","ic ic-mail","ic ic-mail-fill","ic ic-manage-fill","ic ic-manage","ic ic-message","ic ic-message-fill","ic ic-mine","ic ic-mine-fill","ic ic-mobilephone-fill","ic ic-mobilephone","ic ic-more","ic ic-narrow","ic ic-offline-fill","ic ic-offline","ic ic-order-fill","ic ic-order","ic ic-other","ic ic-people-fill","ic ic-people","ic ic-picture-fill","ic ic-picture","ic ic-play","ic ic-play-fill","ic ic-playon-fill","ic ic-playon","ic ic-praise-fill","ic ic-praise","ic ic-prompt-fill","ic ic-prompt","ic ic-qrcode-fill","ic ic-qrcode","ic ic-redpacket-fill","ic ic-redpacket","ic ic-refresh","ic ic-remind-fill","ic ic-remind","ic ic-return","ic ic-right","ic ic-scan","ic ic-select-fill","ic ic-select","ic ic-send","ic ic-service-fill","ic ic-service","ic ic-setup-fill","ic ic-setup","ic ic-share-fill","ic ic-share","ic ic-shielding-fill","ic ic-shielding","ic ic-smallscreen-fill","ic ic-smallscreen","ic ic-stealth-fill","ic ic-stealth","ic ic-success-fill","ic ic-success","ic ic-suspend","ic ic-switch","ic ic-systemprompt-fill","ic ic-systemprompt","ic ic-tailor","ic ic-task","ic ic-task-fill","ic ic-tasklist-fill","ic ic-tasklist","ic ic-text","ic ic-time-fill","ic ic-time","ic ic-translation-fill","ic ic-translation","ic ic-trash","ic ic-trash-fill","ic ic-undo","ic ic-unlock-fill","ic ic-unlock","ic ic-video","ic ic-video-fill","ic ic-warning-fill","ic ic-warning","ic ic-workbench-fill","ic ic-workbench","ic ic-search","ic ic-searchfill","ic ic-publishgoods-fill","ic ic-shop-fill","ic ic-transaction-fill","ic ic-packup","ic ic-unfold","ic ic-wangwang","ic ic-financial-fill","ic ic-marketing-fill","ic ic-shake","ic ic-decoration-fill","ic ic-questions","ic ic-supply","ic ic-tools","ic ic-int","ic ic-commodity","ic ic-zhtn"],data:[""],key:""}),t=r(0);return a((function(){l.data=l.icons})),e(e({count:t},u(l)),{},{search:function(){var i=l.key,e=l.icons;l.data=i?e.filter(function(i){return function(e){return e.toLowerCase().indexOf(i.toLowerCase())>0}}(i)):e},selected:function(i){n("success",i)}})}}),E=function(i){return y("data-v-57f84410"),i=i(),k(),i},M={class:"icon-panel"},q=E((function(){return g("br",null,null,-1)})),P=E((function(){return g("br",null,null,-1)})),U=["onClick"],R=E((function(){return g("br",null,null,-1)}));x.render=function(i,e,c,n,l,t){var o=s("el-button"),r=s("el-input");return f(),d("div",M,[m(r,{modelValue:i.key,"onUpdate:modelValue":e[1]||(e[1]=function(e){return i.key=e}),placeholder:"搜索图标",onInput:i.search},{default:p((function(){return[m(o,{icon:"el-icon-search",onClick:e[0]||(e[0]=function(e){return i.search()})})]})),_:1},8,["modelValue","onInput"]),q,P,g("section",null,[(f(!0),d(b,null,h(i.data,(function(e){return f(),d("span",{key:e,class:"icon-items",onClick:function(c){return i.selected(e)}},[g("i",{class:v(e)},null,2),R],8,U)})),128))])])},x.__scopeId="data-v-57f84410";var A=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,I=function(i,e,c){A.test(e)?c():c(new Error("必须输入正确的路径"))},D=t({name:"MenuNew",components:{Icons:x},emits:["success"],setup:function(i,c){var n=c.emit,l={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:I,trigger:"blur"}]},t=r(),a=o({form:{path:"",meta:{title:"",icon:""}},modal:!1,loading:!1});return e(e({},u(a)),{},{formRef:t,rules:l,onSuccess:function(i){console.log("val is ",i),a.modal=!1,a.form.meta.icon=i},submitForm:function(){t.value.validate((function(i){return!!i&&(console.log(a.form),n("success",a.form),!0)}))},handleClickChoose:function(){a.modal=!a.modal,console.log(" state.modal",a.modal)}})}}),F={class:"new"},L=V("选择图标"),Z=g("i",{class:"fa fa-plus"},null,-1),$=V(" 确认修改 ");D.render=function(i,e,c,n,l,t){var o=s("el-input"),r=s("el-form-item"),a=s("el-button"),u=s("icons"),b=s("el-popover"),h=s("el-row"),y=s("el-form"),k=w("loading");return C((f(),d("div",F,[m(y,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:p((function(){return[m(r,{label:"菜单名称",prop:"meta.title"},{default:p((function(){return[m(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=function(e){return i.form.meta.title=e}),placeholder:"请输入菜单名称"},null,8,["modelValue"])]})),_:1}),m(r,{label:"菜单图标",prop:"meta.icon"},{default:p((function(){return[m(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=function(e){return i.form.meta.icon=e}),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),m(a,{disabled:"disabled"},{default:p((function(){return[g("i",{class:v(i.form.meta.icon)},null,2)]})),_:1}),m(b,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:p((function(){return[m(a,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:p((function(){return[L]})),_:1},8,["onClick"])]})),default:p((function(){return[m(u,{onSuccess:i.onSuccess},null,8,["onSuccess"])]})),_:1},8,["visible"])]})),_:1}),m(r,{label:"菜单路径",prop:"path"},{default:p((function(){return[m(o,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=function(e){return i.form.path=e}),placeholder:"请输入菜单路径"},null,8,["modelValue"])]})),_:1}),m(h,{class:"btn-container"},{default:p((function(){return[m(a,{size:"mini",type:"primary",onClick:e[3]||(e[3]=function(e){return i.submitForm()})},{default:p((function(){return[Z,$]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])],512)),[[k,i.loading]])};var B=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,T=function(i,e,c){B.test(e)?c():c(new Error("必须输入正确的路径"))},N=t({name:"MenuEdit",components:{Icons:x},props:{currentMenu:{type:Object,default:null}},emits:["success"],setup:function(i,c){var n=c.emit,l=_(i,"currentMenu");console.log(l);var t={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:T,trigger:"blur"}]},a=r(),s=o({form:l,modal:!1,loading:!1});return e(e({},u(s)),{},{formRef:a,rules:t,onSuccess:function(i){console.log("val is ",i),s.modal=!1,s.form.meta.icon=i},submitForm:function(){a.value.validate((function(i){return!!i&&(console.log(s.form),n("success",s.form),!0)}))},handleClickChoose:function(){s.modal=!s.modal,console.log(" state.modal",s.modal)}})}}),G={class:"new"},H=V("选择图标"),J=g("i",{class:"fa fa-plus"},null,-1),K=V(" 确认修改 ");N.render=function(i,e,c,n,l,t){var o=s("el-input"),r=s("el-form-item"),a=s("el-button"),u=s("icons"),b=s("el-popover"),h=s("el-row"),y=s("el-form"),k=w("loading");return C((f(),d("div",G,[m(y,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:p((function(){return[m(r,{label:"菜单名称",prop:"meta.title"},{default:p((function(){return[m(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=function(e){return i.form.meta.title=e}),placeholder:"请输入菜单名称"},null,8,["modelValue"])]})),_:1}),m(r,{label:"菜单图标",prop:"meta.icon"},{default:p((function(){return[m(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=function(e){return i.form.meta.icon=e}),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),m(a,{disabled:"disabled"},{default:p((function(){return[g("i",{class:v(i.form.meta.icon)},null,2)]})),_:1}),m(b,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:p((function(){return[m(a,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:p((function(){return[H]})),_:1},8,["onClick"])]})),default:p((function(){return[m(u,{onSuccess:i.onSuccess},null,8,["onSuccess"])]})),_:1},8,["visible"])]})),_:1}),m(r,{label:"菜单路径",prop:"path"},{default:p((function(){return[m(o,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=function(e){return i.form.path=e}),placeholder:"请输入菜单路径"},null,8,["modelValue"])]})),_:1}),m(h,{class:"btn-container"},{default:p((function(){return[m(a,{size:"mini",type:"primary",onClick:e[3]||(e[3]=function(e){return i.submitForm()})},{default:p((function(){return[J,K]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])],512)),[[k,i.loading]])};var Q=i("default",t({name:"Menu",components:{MenuNew:D,MenuEdit:N},setup:function(){var i=n(),t=S((function(){return i.getters["settingsModule/getLangState"]})),r=o({url:{c:"/menu/add",r:"/menu/list",u:"/menu/update",d:"/menu/delete"},param:{limit:10,page:1},data:[{path:"/",redirect:"/home",meta:{title:"首页",icon:"el-icon-s-home"},children:[{path:"/home",name:"home",component:function(){return l((function(){return c.import("./home-legacy.f9ba8b14.js")}),void 0)},meta:{title:"首页",icon:"home"}}]}],total:1,loading:!1,addVisible:!1,editVisible:!1,detailVisible:!1,posted:{menu:{path:"",meta:{title:"",icon:""}}}}),s=S((function(){return i.state.permissionModule.accessRoutes})),f=function(i){console.log(i)};return a((function(){var i;i=s.value.filter((function(i){var e;return!0!==(null==i||null===(e=i.meta)||void 0===e?void 0:e.hidden)})),r.data=i})),e(e({},u(r)),{},{onError:function(){},lang:t,onAddSuccess:function(){r.addVisible=!1,f()},onEditSuccess:function(){console.log("on edit success"),r.editVisible=!1},onDelete:function(i,e){console.log(e),function(i){console.log(i),j.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){j.ElMessage({type:"success",message:"删除成功"})})).catch((function(){j.ElMessage({type:"info",message:"已取消删除"})}))}(i)},onCurrentChange:function(i){f(i)},onSizeChange:function(i){r.param.limit=i,f(i)},onCreate:function(){r.addVisible=!0},onRefresh:function(){f()},onEdit:function(i,e){console.log("row,",e,i),r.posted.menu=e,r.editVisible=!0}})}})),W=V("新增"),X=V("刷新"),Y={class:"pagination"};Q.render=function(i,e,c,n,l,t){var o=s("el-button"),r=s("el-col"),a=s("el-table-column"),u=s("el-tag"),h=s("el-tooltip"),y=s("el-table"),k=s("el-pagination"),_=s("el-row"),S=s("el-card"),j=s("menu-new"),x=s("el-dialog"),E=s("menu-edit"),M=w("loading");return f(),d("div",null,[m(S,{class:"card-ctrl"},{default:p((function(){return[m(_,null,{default:p((function(){return[m(r,null,{default:p((function(){return[m(r,null,{default:p((function(){return[m(o,{type:"primary",icon:"el-icon-plus",size:"small",onClick:i.onCreate},{default:p((function(){return[W]})),_:1},8,["onClick"]),m(o,{type:"success",icon:"el-icon-refresh",size:"small",onClick:i.onRefresh},{default:p((function(){return[X]})),_:1},8,["onClick"])]})),_:1}),C(m(y,{data:i.data,stripe:"",class:"table"},{default:p((function(){return[m(a,{label:"菜单名称",align:"center"},{default:p((function(e){return[g("span",null,z(e.row.meta.title[i.lang]),1)]})),_:1}),m(a,{label:"图标",align:"center"},{default:p((function(i){return[g("i",{class:v(i.row.meta.icon)},null,2)]})),_:1}),m(a,{label:"路径",align:"center"},{default:p((function(i){return[m(u,{size:"mini",type:"info"},{default:p((function(){return[V(z(i.row.path),1)]})),_:2},1024)]})),_:1}),m(a,{label:"操作",align:"center"},{default:p((function(e){return[0!=e.row.state?(f(),d(b,{key:0},[m(h,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:p((function(){return[m(o,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:function(c){return i.onEdit(e.$index,e.row)}},null,8,["onClick"])]})),_:2},1024),m(h,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:p((function(){return[m(o,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:function(c){return i.onDelete(e.$index,e.row)}},null,8,["onClick"])]})),_:2},1024)],64)):O("",!0)]})),_:1})]})),_:1},8,["data"]),[[M,i.loading]]),g("div",Y,[m(k,{"current-page":i.param.page,"page-size":i.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:i.total,background:"",onCurrentChange:i.onCurrentChange,onSizeChange:i.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]})),_:1})]})),_:1})]})),_:1}),m(x,{modelValue:i.addVisible,"onUpdate:modelValue":e[0]||(e[0]=function(e){return i.addVisible=e}),width:"632px",title:"新增菜单"},{default:p((function(){return[m(j,{onSuccess:i.onAddSuccess},null,8,["onSuccess"])]})),_:1},8,["modelValue"]),m(x,{modelValue:i.editVisible,"onUpdate:modelValue":e[1]||(e[1]=function(e){return i.editVisible=e}),center:"",width:"632px",title:i.posted.menu.meta.title},{default:p((function(){return[m(E,{"current-menu":i.posted.menu,onSuccess:i.onEditSuccess},null,8,["current-menu","onSuccess"])]})),_:1},8,["modelValue","title"])])}}}}))}();
