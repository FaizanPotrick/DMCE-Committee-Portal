import{i,o as _,a as d,b as n,d as e,t as s,F as p,j as m,u as c,k as h}from"./index.2c4ce5ed.js";const u={class:"min-h-screen"},f={class:"flex flex-col items-end mb-6 text-[#fff]"},y={class:"text-xl font-semibold capitalize"},x={class:"text-sm"},w={class:"flex w-full rounded-xl shadow-md bg-[#fff] px-3"},g={class:"w-full divide-y divide-gray-300"},v=e("thead",{class:"text-center sm:text-lg"},[e("tr",null,[e("th",{class:"py-5"},"Event"),e("th",{class:"py-5"},"Committee"),e("th",{class:"py-5"},"Date"),e("th",{class:"py-5"},"Time"),e("th",{class:"py-5"},"Venue"),e("th",{class:"py-5"},"Mode")])],-1),b={class:"py-4 whitespace-nowrap capitalize"},k={class:"py-4 whitespace-nowrap uppercase"},z={class:"py-4 whitespace-nowrap"},B={class:"py-4 whitespace-nowrap"},D={class:"py-4 whitespace-nowrap capitalize"},E={class:"py-4 whitespace-nowrap"},$={class:"px-2 py-1 font-semibold text-green-800 bg-green-100 rounded-full capitalize"},S={__name:"Dashboard",setup(F){const o=i({name:"",email_address:""}),l=i([]),r=async()=>{c().loading=!0;const{data:a}=await h.get("/api/dashboard");o.value={name:`${a.user_name.last_name} ${a.user_name.first_name} ${a.user_name.middle_name}`,email_address:a.email_address},l.value=a.events.reverse(),c().loading=!1};return _(()=>{r()}),(a,L)=>(d(),n("div",u,[e("header",f,[e("div",y,s(o.value.name),1),e("div",x,s(o.value.email_address),1)]),e("div",w,[e("table",g,[v,e("tbody",null,[(d(!0),n(p,null,m(l.value,t=>(d(),n("tr",{key:t.user_id,class:"text-center font-semibold"},[e("td",b,s(t.event_name),1),e("td",k,s(t.tag),1),e("td",z,s(t.date),1),e("td",B,s(t.time),1),e("td",D,s(t.venue),1),e("td",E,[e("div",$,s(t.mode),1)])]))),128))])])])]))}};export{S as default};
