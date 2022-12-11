import{i as d,a as i,b as r,d as e,A as u,B as c,C as f,k as x}from"./index.2c4ce5ed.js";const p={class:"justify-between items-center min-h-screen w-full rounded-xl gap-6 p-2",id:"chat_background"},m=e("div",{class:"flex flex-col gap-6 w-full h-full",id:"chat"},[e("div",{class:"flex justify-start items-end"},[e("div",{class:"p-4 max-w-sm w-full rounded-br-xl rounded-tr-xl rounded-tl-xl bg-[#fff]"}," Hi, KIWI here, How may I help you :) ")])],-1),v=["onSubmit"],_=e("button",{type:"submit",class:"text-[#fff] absolute right-2 bottom-1.5 bg-[#121212] hover:bg-[#121212]/90 rounded-xl px-5 py-2.5"}," Send ",-1),w={__name:"ChatBot",setup(h){const t=d(""),o=async()=>{const l=document.getElementById("chat"),s=`<div class="flex justify-start items-end flex-row-reverse">
        <div
          class="p-4 max-w-sm w-full rounded-bl-xl rounded-tr-xl rounded-tl-xl bg-[#8a2ce2] text-[#fff]"
        >
          ${t.value}
        </div>
      </div>`;l.innerHTML+=s;const{data:a}=await x.get(`/api/chatbot/${t.value}`);t.value="";const n=`<div class="flex justify-start items-end">
        <div
          class="p-4 max-w-sm w-full rounded-br-xl rounded-tr-xl rounded-tl-xl bg-[#fff]"
        >
          ${a}
        </div>
      </div>`;l.innerHTML+=n};return(l,s)=>(i(),r("div",p,[m,e("form",{class:"relative w-full",onSubmit:f(o,["prevent"])},[u(e("input",{type:"text",class:"block p-4 w-full bg-gray-50 rounded-2xl focus:outline-none",placeholder:"Enter your message...","onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),required:""},null,512),[[c,t.value]]),_],40,v)]))}};export{w as default};
