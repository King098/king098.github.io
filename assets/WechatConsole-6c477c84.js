import{d as F,j as C,b as o,o as v,k as U,w as n,a as e,l as A,e as i,r as $,i as u,c as B,t as D,u as k,m as M,n as N,p as O,q as z}from"./index-e0639de8.js";const p=F({__name:"MemberView",setup(V){const a=C([{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3},{openId:"aaa-xxx-qqq-xxxx",name:"小小",gender:"男",birthday:"2016-05-03",lesson:5,score:1e3}]);function b(f){}return(f,t)=>{const d=o("el-table-column"),l=o("el-button"),r=o("el-table"),x=o("el-scrollbar");return v(),U(x,{height:"inherit"},{default:n(()=>[e(r,{data:a.value,"max-height":"inherit",height:"fit-content",style:{width:"100%"}},{default:n(()=>[e(d,{prop:"openId",label:"ID",width:"180"}),e(d,{prop:"name",label:"姓名",width:"180"}),e(d,{prop:"gender",label:"性别"}),e(d,{prop:"birthday",label:"出生日期"}),e(d,{prop:"lesson",label:"剩余课时"}),e(d,{prop:"score",label:"会员积分"}),e(d,{fixed:"right",label:"Operations",width:"120"},{default:n(q=>[e(l,{link:"",type:"primary",size:"small",onClick:A(_=>(q.$index,void 0),["prevent"])},{default:n(()=>[i(" 修改 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})}}}),P=u("span",{class:"text-gray-500"},"-",-1),j=F({__name:"KeywordsView",setup(V){const a=$({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),b=()=>{console.log("submit!")};return(f,t)=>{const d=o("el-input"),l=o("el-form-item"),r=o("el-option"),x=o("el-select"),q=o("el-date-picker"),_=o("el-col"),h=o("el-time-picker"),c=o("el-switch"),m=o("el-checkbox"),w=o("el-checkbox-group"),y=o("el-radio"),I=o("el-radio-group"),g=o("el-button"),S=o("el-form");return v(),U(S,{model:a,"label-width":"120px"},{default:n(()=>[e(l,{label:"Activity name"},{default:n(()=>[e(d,{modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=s=>a.name=s)},null,8,["modelValue"])]),_:1}),e(l,{label:"Activity zone"},{default:n(()=>[e(x,{modelValue:a.region,"onUpdate:modelValue":t[1]||(t[1]=s=>a.region=s),placeholder:"please select your zone"},{default:n(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"Activity time"},{default:n(()=>[e(_,{span:11},{default:n(()=>[e(q,{modelValue:a.date1,"onUpdate:modelValue":t[2]||(t[2]=s=>a.date1=s),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(_,{span:2,class:"text-center"},{default:n(()=>[P]),_:1}),e(_,{span:11},{default:n(()=>[e(h,{modelValue:a.date2,"onUpdate:modelValue":t[3]||(t[3]=s=>a.date2=s),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{label:"Instant delivery"},{default:n(()=>[e(c,{modelValue:a.delivery,"onUpdate:modelValue":t[4]||(t[4]=s=>a.delivery=s)},null,8,["modelValue"])]),_:1}),e(l,{label:"Activity type"},{default:n(()=>[e(w,{modelValue:a.type,"onUpdate:modelValue":t[5]||(t[5]=s=>a.type=s)},{default:n(()=>[e(m,{label:"Online activities",name:"type"}),e(m,{label:"Promotion activities",name:"type"}),e(m,{label:"Offline activities",name:"type"}),e(m,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"Resources"},{default:n(()=>[e(I,{modelValue:a.resource,"onUpdate:modelValue":t[6]||(t[6]=s=>a.resource=s)},{default:n(()=>[e(y,{label:"Sponsor"}),e(y,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"Activity form"},{default:n(()=>[e(d,{modelValue:a.desc,"onUpdate:modelValue":t[7]||(t[7]=s=>a.desc=s),type:"textarea"},null,8,["modelValue"])]),_:1}),e(l,null,{default:n(()=>[e(g,{type:"primary",onClick:b},{default:n(()=>[i("Create")]),_:1}),e(g,null,{default:n(()=>[i("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}}),R=u("span",{class:"text-large font-600 mr-3",style:{color:"#eebe77"}},"退出",-1),Z=u("span",{class:"text-large font-600 mr-3",style:{color:"#FFFFFF"}},"与鲸游-微信公众号后台",-1),E=u("span",null,"消息回复设置",-1),K=u("span",null,"会员管理",-1),T=u("span",null,"素材库",-1),G=F({__name:"WechatConsole",props:{username:{type:String,default:"名字"}},setup(V){const a=C("member"),b=new Map([["msg_keyword",j],["msg_default",p],["msg_events",p],["member",p],["res",p]]),f=C(p),t=(l,r)=>{if(console.log(l,r),b.has(l)){a.value=l;let x=b.get(l);f.value=x||p}},d=(l,r)=>{console.log(l,r)};return(l,r)=>{const x=o("el-text"),q=o("el-page-header"),_=o("el-header"),h=o("el-icon"),c=o("el-menu-item"),m=o("el-sub-menu"),w=o("el-menu"),y=o("el-aside"),I=o("el-main"),g=o("el-container");return v(),B("div",null,[e(g,{style:{height:"100vh"}},{default:n(()=>[e(_,{style:{height:"60px",backgroundColor:"#606266"}},{default:n(()=>[e(q,{style:{"padding-top":"15px"}},{title:n(()=>[R]),content:n(()=>[Z]),extra:n(()=>[e(x,{tag:"b",style:{color:"#FFFFFF"}},{default:n(()=>[i(D(V.username),1)]),_:1})]),_:1})]),_:1}),e(g,{style:{height:"calc(100vh-60px)"}},{default:n(()=>[e(y,{width:"200px"},{default:n(()=>[e(w,{style:{height:"100%"},"active-text-color":"#eebe77","background-color":"#909399","default-active":"member","text-color":"#faecd8",onSelect:t,onClose:d},{default:n(()=>[e(m,{index:"msg"},{title:n(()=>[e(h,null,{default:n(()=>[e(k(M))]),_:1}),E]),default:n(()=>[e(c,{index:"msg_keyword"},{default:n(()=>[i("关键字设置")]),_:1}),e(c,{index:"msg_default"},{default:n(()=>[i("默认回复模板")]),_:1}),e(c,{index:"msg_events"},{default:n(()=>[i("事件模板")]),_:1})]),_:1}),e(c,{index:"member"},{default:n(()=>[e(h,null,{default:n(()=>[e(k(N))]),_:1}),K]),_:1}),e(c,{index:"res"},{default:n(()=>[e(h,null,{default:n(()=>[e(k(O))]),_:1}),T]),_:1})]),_:1})]),_:1}),e(I,null,{default:n(()=>[(v(),U(z(f.value)))]),_:1})]),_:1})]),_:1})])}}});export{G as default};
