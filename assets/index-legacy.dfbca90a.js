!function(){function e(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,o=[],l=!0,u=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){u=!0,r=i}finally{try{l||null==a.return||a.return()}finally{if(u)throw r}}return o}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=document.createElement("style");o.innerHTML=".task-table[data-v-105cac7b]{margin-top:16px}.task-table__add[data-v-105cac7b]{margin-top:16px;text-align:center}.board[data-v-11334159]{padding:0 20px}.board__info[data-v-11334159]{text-align:left}.board__info>span[data-v-11334159]{font-size:12px;margin-bottom:20px;display:inline-block}.board__project[data-v-11334159]{text-align:left}.board__project-title[data-v-11334159]{font-size:18px;font-weight:bold}.board__project-list[data-v-11334159]{display:flex;flex-wrap:wrap;margin-top:16px}.board__project-item[data-v-11334159]{width:50%;width:calc(50% - 100px);margin-bottom:30px;margin-left:50px;cursor:pointer;border:1px solid transparent;max-width:700px;min-width:500px}.board__project-item--active[data-v-11334159]{border-color:#2799c1;border-radius:4px}.board__project-avatar[data-v-11334159]{font-size:20px;background:#7d9fe3;font-weight:bold}.board__detail[data-v-11334159]{text-align:left}.board__detail-head[data-v-11334159]{color:#706e6e}.board__detail-search[data-v-11334159]{margin-top:60px;text-align:left}.board__detail-title[data-v-11334159]{font-size:18px;font-weight:bold;margin-bottom:16px}.board__detail-empty[data-v-11334159]{color:#d3d0d0;line-height:200px;text-align:center}.board__detail-wrap[data-v-11334159]{min-height:200px}.board__detail-name[data-v-11334159]{font-weight:bold}.board__detail-tag[data-v-11334159]{margin-left:16px}.board__detail-task[data-v-11334159]{margin-top:30px}\n",document.head.appendChild(o),System.register(["./lodash-legacy.7d39c2c9.js","./index-legacy.cc842480.js","./vendor-legacy.5aaa7420.js"],(function(t){"use strict";var a,r,o,l,u,i,d,c,s,f,p,v,b,m,_,k,y,g,j,x,w,h;return{setters:[function(e){a=e._},function(e){r=e.r},function(e){o=e.r,l=e.d,u=e.k,i=e.e,d=e.c,c=e.s,s=e.q,f=e.m,p=e.v,v=e.I,b=e.g,m=e.y,_=e.w,k=e.i,y=e.F,g=e.t,j=e.n,x=e.bm,w=e.p,h=e.f}],execute:function(){var I={class:"task-table"},T={key:1},P={key:1},V={key:1},O=v("保存"),S=v("编辑"),M=v("删除"),C={class:"task-table__add"},L=v("+ 新增任务"),U=l({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup:function(e,t){var a=t.emit;function n(){a("addProjectTask")}return function(t,r){var o=u("el-input"),l=u("el-table-column"),m=u("el-option"),_=u("el-select"),k=u("el-tag"),y=u("el-button"),g=u("el-popconfirm"),j=u("el-table");return i(),d("div",I,[c(j,{data:e.data,style:{width:"100%"}},{default:s((function(){return[c(l,{prop:"taskName",label:"任务名称"},{default:s((function(e){return[e.row.edit?(i(),f(o,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":function(t){return e.row.taskName=t}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",T,p(e.row.taskName),1))]})),_:1}),c(l,{prop:"developTime",label:"开发工时"},{default:s((function(e){return[e.row.edit?(i(),f(o,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":function(t){return e.row.developTime=t}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",P,p(e.row.developTime),1))]})),_:1}),c(l,{prop:"developMember",label:"开发人"},{default:s((function(e){return[e.row.edit?(i(),f(o,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":function(t){return e.row.developMember=t}},null,8,["modelValue","onUpdate:modelValue"])):(i(),d("span",V,p(e.row.developMember),1))]})),_:1}),c(l,{prop:"taskStatus",label:"任务状态"},{default:s((function(t){var a;return[t.row.edit?(i(),f(_,{key:0,modelValue:t.row.taskStatus,"onUpdate:modelValue":function(e){return t.row.taskStatus=e},placeholder:"选择任务状态"},{default:s((function(){return[c(m,{label:"准备阶段",value:1}),c(m,{label:"开发中",value:2}),c(m,{label:"开发完成",value:3}),c(m,{label:"测试阶段",value:4}),c(m,{label:"待发布",value:5})]})),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),f(k,{key:1,type:null===(a=e.status.get("".concat(t.row.taskStatus)))||void 0===a?void 0:a.type},{default:s((function(){var a;return[v(p(null===(a=e.status.get("".concat(t.row.taskStatus)))||void 0===a?void 0:a.text),1)]})),_:2},1032,["type"]))]})),_:1}),c(l,{label:"操作",width:"200"},{default:s((function(e){return[e.row.edit?(i(),f(y,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:function(t){return n=e.$index,r=e.row,console.log(n,r),a("updateTask",n,r),void a("modifyTaskEdit",n,!1);var n,r}},{default:s((function(){return[O]})),_:2},1032,["onClick"])):(i(),f(y,{key:1,size:"mini",icon:"el-icon-edit",onClick:function(t){return n=e.$index,r=e.row,console.log(n,r),void a("modifyTaskEdit",n,!0);var n,r}},{default:s((function(){return[S]})),_:2},1032,["onClick"])),c(g,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:function(t){return n=e.$index,e.row,void a("deleteProjectTask",n);var n}},{reference:s((function(){return[c(y,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:s((function(){return[M]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["data"]),b("div",C,[c(y,{onClick:n},{default:s((function(){return[L]})),_:1})])])}}});U.__scopeId="data-v-105cac7b";var E=function(e){return w("data-v-11334159"),e=e(),h(),e},z={class:"board"},N={class:"board__info"},A=v("项目看板"),D=E((function(){return b("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1)})),$={class:"board__project"},q=E((function(){return b("div",{class:"board__project-title"},"项目概览",-1)})),B={class:"board__project-list"},F=["onClick"],H={class:"board__detail"},G=E((function(){return b("div",{class:"board__detail-title"},"项目详情",-1)})),J={key:0,class:"board__detail-empty"},K={key:1,class:"board__detail-content"},Q={class:"board__detail-head"},R=E((function(){return b("span",{class:"board__detail-name"},"项目名称",-1)})),W=E((function(){return b("span",{class:"board__detail-name"},"负责人",-1)})),X=E((function(){return b("span",{class:"board__detail-name"},"开发工时",-1)})),Y=E((function(){return b("span",{class:"board__detail-name"},"项目状态",-1)})),Z=E((function(){return b("span",{class:"board__detail-name"},"任务总数",-1)})),ee=E((function(){return b("span",{class:"board__detail-name"},"任务进度",-1)})),te=v("： "),ae={class:"board__detail-search"},ne=v("查询"),re={class:"board__detail-table"};t("default",l({setup:function(t){var l=m({taskStatus:null,developMember:""}),w=new Map([["1",{text:"准备阶段",type:"info"}],["2",{text:"开发中",type:""}],["3",{text:"开发完成",type:"success"}],["4",{text:"测试阶段",type:"danger"}],["5",{text:"待发布",type:"warning"}]]),h=o({}),I=o([]),T=function(){var e=o([]);return{data:e,getProjectInfo:function(){return r({url:"/api/project/list",method:"get",json:!0}).then((function(t){0===t.status&&(e.value=t.data)}))},updatedProjectInfo:function(t,n,r){var o=a.findIndex(e.value,["projectId",t]);e.value[o].taskList.splice(n,1,r)},addProjectTask:function(t,n){var r=a.findIndex(e.value,["projectId",t]);e.value[r].taskList.push(n)},deleteTask:function(t,n){var r=a.findIndex(e.value,["projectId",t]);e.value[r].taskList.splice(n,1)},getProjectDetail:function(t){return a.find(e.value,(function(e){return e.projectId===t}))},modifyTaskEdit:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=a.findIndex(e.value,["projectId",t]),u=e.value[l].taskList;e.value[l].taskList=a.map(u,(function(e,t){return r===t?n(n({},e),{},{edit:o}):e}))}}}(),P=T.data,V=T.getProjectInfo,O=T.updatedProjectInfo,S=T.addProjectTask,M=T.deleteTask,C=T.getProjectDetail,L=T.modifyTaskEdit;V().then((function(){h.value=P.value[0]})),_((function(){return h.value}),(function(e){I.value=e.taskList}),{deep:!0});var E=k((function(){var e=a.map(h.value.taskList,(function(e){return e.developMember})).filter((function(e){return e}));return a.uniq(e)}));function oe(){console.log("search!",l);var e=l.taskStatus,t=l.developMember;if(e&&t){var n=a.map(h.value.taskList,(function(a){if(a.developMember===t&&a.taskStatus===e)return a})).filter((function(e){return e}));I.value=n}else if(e){var r=a.map(h.value.taskList,(function(t){if(t.taskStatus===e)return t})).filter((function(e){return e}));I.value=r}else if(t){var o=a.map(h.value.taskList,(function(e){if(e.developMember===t)return e})).filter((function(e){return e}));I.value=o}else I.value=h.value.taskList}function le(e,t){var a=h.value.projectId;L(a,e,t),h.value=C(a)}function ue(e,t){var a=h.value.projectId;O(a,e,t)}function ie(){var e=h.value.projectId;S(e,{taskName:"",developTime:"",developMember:"",taskStatus:1,edit:!0})}function de(e){var t=h.value.projectId;M(t,e)}return function(t,r){var o=u("el-divider"),m=u("el-avatar"),_=u("el-col"),k=u("el-row"),T=u("el-card"),V=u("el-tag"),O=u("el-option"),S=u("el-select"),M=u("el-form-item"),C=u("el-button"),L=u("el-form");return i(),d("div",z,[b("div",N,[c(o,{"content-position":"left"},{default:s((function(){return[A]})),_:1}),D]),b("div",$,[q,b("div",B,[(i(!0),d(y,null,g(x(P),(function(e,t){return i(),d("div",{key:t,class:j(["board__project-item",{"board__project-item--active":h.value.projectId===e.projectId}]),onClick:function(t){return a=e,void(h.value=a);var a}},[c(T,null,{default:s((function(){return[c(k,null,{default:s((function(){return[c(_,{span:5},{default:s((function(){return[c(m,{class:"board__project-avatar",size:90},{default:s((function(){return[v(p(e.projectName.substr(0,1)),1)]})),_:2},1024)]})),_:2},1024),c(_,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:s((function(){return[b("p",null,"项目名称："+p(e.projectName),1),b("p",null,"总负责人："+p(e.principal),1),b("p",null,"开发耗时："+p(e.timeConsuming),1),b("p",null,"项目状态: "+p(e.status),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)],10,F)})),128))])]),b("div",H,[G,c(T,{class:"board__detail-wrap"},{default:s((function(){return[h.value.projectId?(i(),d("div",K,[b("div",Q,[c(k,null,{default:s((function(){return[c(_,{span:5},{default:s((function(){return[R,v("："+p(h.value.projectName),1)]})),_:1}),c(_,{span:5},{default:s((function(){return[W,v("："+p(h.value.principal),1)]})),_:1}),c(_,{span:5},{default:s((function(){return[X,v("："+p(h.value.timeConsuming),1)]})),_:1}),c(_,{span:5},{default:s((function(){return[Y,v("："+p(h.value.status),1)]})),_:1})]})),_:1}),c(k,{class:"board__detail-task"},{default:s((function(){return[c(_,{span:5},{default:s((function(){return[Z,v("："+p(h.value.taskList.length),1)]})),_:1}),c(_,{span:18},{default:s((function(){return[ee,te,(i(!0),d(y,null,g((t=h.value.taskList,r=a.countBy(t,(function(e){return e.taskStatus})),a.map(Object.entries(r),(function(t){var a=e(t,2),r=a[0],o=a[1];return n(n({},w.get(r)),{},{count:o})}))),(function(e,t){return i(),f(V,{key:t,class:"board__detail-tag",type:e.type},{default:s((function(){return[v(p(e.text)+": "+p(e.count),1)]})),_:2},1032,["type"])})),128))];var t,r})),_:1})]})),_:1})]),c(o),b("div",ae,[c(L,{inline:!0,model:x(l)},{default:s((function(){return[c(M,{label:"开发人"},{default:s((function(){return[c(S,{clearable:"",modelValue:x(l).developMember,"onUpdate:modelValue":r[0]||(r[0]=function(e){return x(l).developMember=e}),placeholder:"选择任务开发者"},{default:s((function(){return[(i(!0),d(y,null,g(x(E),(function(e,t){return i(),f(O,{key:t,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),c(M,{label:"任务状态"},{default:s((function(){return[c(S,{clearable:"",modelValue:x(l).taskStatus,"onUpdate:modelValue":r[1]||(r[1]=function(e){return x(l).taskStatus=e}),placeholder:"选择任务状态"},{default:s((function(){return[c(O,{label:"准备阶段",value:1}),c(O,{label:"开发中",value:2}),c(O,{label:"开发完成",value:3}),c(O,{label:"测试阶段",value:4}),c(O,{label:"待发布",value:5})]})),_:1},8,["modelValue"])]})),_:1}),c(M,null,{default:s((function(){return[c(C,{type:"primary",onClick:oe},{default:s((function(){return[ne]})),_:1})]})),_:1})]})),_:1},8,["model"])]),b("div",re,[c(U,{data:I.value,status:x(w),onUpdateTask:ue,onModifyTaskEdit:le,onAddProjectTask:ie,onDeleteProjectTask:de},null,8,["data","status"])])])):(i(),d("div",J,"请选择项目，查看项目详情！！！"))]})),_:1})])])}}})).__scopeId="data-v-11334159"}}}))}();