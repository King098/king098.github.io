var O=Object.defineProperty;var W=(c,o,a)=>o in c?O(c,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[o]=a;var z=(c,o,a)=>(W(c,typeof o!="symbol"?o+"":o,a),a);import{d as R,r as V,b as l,o as C,h as A,w as t,a as e,i as L,e as p,T as b,E as F,c as D,F as T,g as y,j,t as E,u as U,k as P,l as G,p as Z,n as H}from"./index-77336cd3.js";import{s as N}from"./service-7b1edaf9.js";const v=R({__name:"MemberView",setup(c){const o=V([{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3}]);function a(s){}return(s,d)=>{const n=l("el-table-column"),m=l("el-button"),r=l("el-table"),i=l("el-scrollbar");return C(),A(i,{height:"inherit"},{default:t(()=>[e(r,{data:o.value,"max-height":"inherit",height:"fit-content",style:{width:"100%"}},{default:t(()=>[e(n,{prop:"openId",label:"ID",width:"180"}),e(n,{prop:"name",label:"姓名",width:"180"}),e(n,{prop:"gender",label:"性别"}),e(n,{prop:"birthday",label:"出生日期"}),e(n,{prop:"lesson",label:"剩余课时"}),e(n,{prop:"score",label:"会员积分"}),e(n,{fixed:"right",label:"Operations",width:"120"},{default:t(_=>[e(m,{link:"",type:"primary",size:"small",onClick:L(f=>(_.$index,void 0),["prevent"])},{default:t(()=>[p(" 修改 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})}}}),M=class{static getKeywordsList(o){const a=b.loading();let s=b.getRequestBody("WechatConsole",b.getNowTimeSpan().toString(),{});N({url:"WechatConsole/GetKeywordsList",method:"post",data:s}).then(d=>{a.close(),console.log(d.data);let[n,m]=b.getResponseData(d.data);console.log(m),n?(M.keywordsList=m,o&&o()):F({title:"提示",message:m.message,type:"error"})},d=>{a.close(),console.warn(d),F({title:"错误",message:d,type:"error"})})}static getMemberList(o){const a=b.loading();let s=b.getRequestBody("WechatConsole",b.getNowTimeSpan().toString(),{});N({url:"WechatConsole/GetMembers",method:"post",data:s}).then(d=>{a.close();let[n,m]=b.getResponseData(d.data);n?(M.memberList=m,o&&o()):F({title:"提示",message:m.message,type:"error"})},d=>{a.close(),console.warn(d),F({title:"错误",message:d,type:"error"})})}};let w=M;z(w,"keywordsList",new Array),z(w,"memberList",new Array);function J(c){return{all:c=c||new Map,on:function(o,a){var s=c.get(o);s?s.push(a):c.set(o,[a])},off:function(o,a){var s=c.get(o);s&&(a?s.splice(s.indexOf(a)>>>0,1):c.set(o,[]))},emit:function(o,a){var s=c.get(o);s&&s.slice().map(function(d){d(a)}),(s=c.get("*"))&&s.slice().map(function(d){d(o,a)})}}}const Q=J(),B=Q,X=R({__name:"KeywordsView",setup(c){const o=V([{name:"两岁桌游推荐",keyword:"2岁;两岁;二岁",response:"文本"}]);function a(){B.emit("yjy_wechat_console_update_menu","update_keyword")}function s(){B.emit("yjy_wechat_console_update_menu","msg_keyword")}function d(r){}function n(r){}function m(r){}return(r,i)=>{const _=l("el-button"),f=l("el-table-column"),k=l("el-table"),g=l("el-scrollbar");return C(),D(T,null,[e(_,{type:"primary",size:"large",onClick:i[0]||(i[0]=x=>a())},{default:t(()=>[p("新增规则")]),_:1}),e(_,{type:"primary",size:"large",onClick:i[1]||(i[1]=x=>s())},{default:t(()=>[p("刷新规则")]),_:1}),e(g,{height:"inherit"},{default:t(()=>[e(k,{data:o.value,"max-height":"inherit",height:"fit-content",style:{width:"100%"}},{default:t(()=>[e(f,{prop:"name",label:"规则名称",width:"180"}),e(f,{prop:"keyword",label:"关键字"}),e(f,{prop:"response",label:"回复消息类型"}),e(f,{fixed:"right",label:"操作",width:"300"},{default:t(x=>[e(_,{type:"primary",size:"small",onClick:L(h=>(x.$index,void 0),["prevent"])},{default:t(()=>[p(" 查看 ")]),_:2},1032,["onClick"]),e(_,{type:"primary",size:"small",onClick:L(h=>(x.$index,void 0),["prevent"])},{default:t(()=>[p(" 修改 ")]),_:2},1032,["onClick"]),e(_,{type:"danger",size:"small",onClick:L(h=>(x.$index,void 0),["prevent"])},{default:t(()=>[p(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})],64)}}}),Y=y("br",null,null,-1),ee=y("br",null,null,-1),te=y("span",{class:"text-gray-500"},"-",-1),oe=R({__name:"UpdateKeywordView",setup(c){const o=V({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});function a(){B.emit("yjy_wechat_console_update_menu","msg_keyword")}const s=()=>{console.log("submit!")};return(d,n)=>{const m=l("el-button"),r=l("el-input"),i=l("el-form-item"),_=l("el-option"),f=l("el-select"),k=l("el-date-picker"),g=l("el-col"),x=l("el-time-picker"),h=l("el-switch"),q=l("el-checkbox"),S=l("el-checkbox-group"),I=l("el-radio"),$=l("el-radio-group"),K=l("el-form");return C(),D(T,null,[e(m,{type:"primary",size:"large",onClick:n[0]||(n[0]=u=>a())},{default:t(()=>[p("返回列表")]),_:1}),Y,ee,e(K,{model:o.value,"label-width":"120px"},{default:t(()=>[e(i,{label:"规则名字"},{default:t(()=>[e(r,{modelValue:o.value.name,"onUpdate:modelValue":n[1]||(n[1]=u=>o.value.name=u)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity zone"},{default:t(()=>[e(f,{modelValue:o.value.region,"onUpdate:modelValue":n[2]||(n[2]=u=>o.value.region=u),placeholder:"please select your zone"},{default:t(()=>[e(_,{label:"Zone one",value:"shanghai"}),e(_,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity time"},{default:t(()=>[e(g,{span:11},{default:t(()=>[e(k,{modelValue:o.value.date1,"onUpdate:modelValue":n[3]||(n[3]=u=>o.value.date1=u),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(g,{span:2,class:"text-center"},{default:t(()=>[te]),_:1}),e(g,{span:11},{default:t(()=>[e(x,{modelValue:o.value.date2,"onUpdate:modelValue":n[4]||(n[4]=u=>o.value.date2=u),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"Instant delivery"},{default:t(()=>[e(h,{modelValue:o.value.delivery,"onUpdate:modelValue":n[5]||(n[5]=u=>o.value.delivery=u)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity type"},{default:t(()=>[e(S,{modelValue:o.value.type,"onUpdate:modelValue":n[6]||(n[6]=u=>o.value.type=u)},{default:t(()=>[e(q,{label:"Online activities",name:"type"}),e(q,{label:"Promotion activities",name:"type"}),e(q,{label:"Offline activities",name:"type"}),e(q,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Resources"},{default:t(()=>[e($,{modelValue:o.value.resource,"onUpdate:modelValue":n[7]||(n[7]=u=>o.value.resource=u)},{default:t(()=>[e(I,{label:"Sponsor"}),e(I,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity form"},{default:t(()=>[e(r,{modelValue:o.value.desc,"onUpdate:modelValue":n[8]||(n[8]=u=>o.value.desc=u),type:"textarea"},null,8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(m,{type:"primary",onClick:s},{default:t(()=>[p("Create")]),_:1}),e(m,null,{default:t(()=>[p("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])],64)}}}),ne=y("span",{class:"text-large font-600 mr-3",style:{color:"#eebe77"}},"退出",-1),le=y("span",{class:"text-large font-600 mr-3",style:{color:"#FFFFFF"}},"与鲸游-微信公众号后台",-1),ae=y("span",null,"消息回复设置",-1),se=y("span",null,"会员管理",-1),re=y("span",null,"素材库",-1),ue=R({__name:"WechatConsole",props:{username:{type:String,default:"名字"}},setup(c){const o=V("member"),a=new Map([["msg_keyword",X],["msg_default",v],["msg_events",v],["member",v],["res",v],["update_keyword",oe]]),s=new Map([["msg_keyword",w.getKeywordsList],["member",w.getMemberList],["update_keyword",r=>{r&&r()}]]),d=V(v),n=(r,i)=>{if(console.log(r,i),a.has(r)){o.value=r;let _=s.get(r);_&&_(()=>{let f=a.get(r);d.value=f||v})}},m=(r,i)=>{console.log(r,i)};return j(()=>{B.on("yjy_wechat_console_update_menu",r=>{n(r,[])})}),(r,i)=>{const _=l("el-text"),f=l("el-page-header"),k=l("el-header"),g=l("el-icon"),x=l("el-menu-item"),h=l("el-sub-menu"),q=l("el-menu"),S=l("el-aside"),I=l("el-main"),$=l("el-container");return C(),D("div",null,[e($,{style:{height:"100vh"}},{default:t(()=>[e(k,{style:{height:"60px",backgroundColor:"#606266"}},{default:t(()=>[e(f,{style:{"padding-top":"15px"}},{title:t(()=>[ne]),content:t(()=>[le]),extra:t(()=>[e(_,{tag:"b",style:{color:"#FFFFFF"}},{default:t(()=>[p(E(c.username),1)]),_:1})]),_:1})]),_:1}),e($,{style:{height:"calc(100vh-60px)"}},{default:t(()=>[e(S,{width:"200px"},{default:t(()=>[e(q,{style:{height:"100%"},"active-text-color":"#eebe77","background-color":"#909399","default-active":"member","text-color":"#faecd8",onSelect:n,onClose:m},{default:t(()=>[e(h,{index:"msg"},{title:t(()=>[e(g,null,{default:t(()=>[e(U(P))]),_:1}),ae]),default:t(()=>[e(x,{index:"msg_keyword"},{default:t(()=>[p("关键字设置")]),_:1}),e(x,{index:"msg_default"},{default:t(()=>[p("默认回复模板")]),_:1}),e(x,{index:"msg_events"},{default:t(()=>[p("事件模板")]),_:1})]),_:1}),e(x,{index:"member"},{default:t(()=>[e(g,null,{default:t(()=>[e(U(G))]),_:1}),se]),_:1}),e(x,{index:"res"},{default:t(()=>[e(g,null,{default:t(()=>[e(U(Z))]),_:1}),re]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[(C(),A(H(d.value)))]),_:1})]),_:1})]),_:1})])}}});export{ue as default};
