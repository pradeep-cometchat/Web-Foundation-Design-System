import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";/* empty css              *//* empty css                    */import{H as De}from"./Header-DPJM8LY9.js";import{S as Be}from"./SearchBar-C2XVB5CY.js";import{d as Te}from"./GroupItem-BwGw98uw.js";import{M as Ee}from"./MessagePreview-BQuL-8-I.js";import{A as Ne,C as Le,P as Fe,V as Pe,a as Re,D as Ve,b as ze,c as He,d as Ge}from"./icons-Cw_HfLCw.js";import{a as b,U as Ze,d as $e,V as qe,A as Oe,D as Ue,e as Q,f as We,C as Je,g as Qe,M as E,h as Ke}from"./_shared-tknUeeqK.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const kt={title:"Core Components/Message Composer/Multi Attachments/End to End",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`**Multi Attachments — End to End.** A single chat with the design-system
**Single Line Composer** wired up: **drag files onto the chat** (or use ＋) to
queue previews, then **Send** to post them as separate-format bubbles running
*uploading → read*. The thread is pre-seeded with the range of states.`}}}},f=a=>`https://i.pravatar.cc/120?img=${a}`,Ye=f(12),ke="George Alan";function Xe(a){const i=a.groups[0],r=i?i.t==="media"?i.video?"video":"photo":i.t==="files"?"file":"audio":void 0,h=a.variant==="sent"?a.state==="uploading"?"sent":"read":void 0;return{type:r,text:a.caption,status:h,time:a.time==="now"?"Now":a.time}}const et=[{name:"George Alan",img:f(12),time:"6:45 PM",text:"Hey, let's catch up later!",status:"read",online:!0,active:!0},{name:"Uber Cars",img:f(52),time:"4:30 PM",sender:"John:",type:"photo",text:"Your ride has arrived. Driver is waiting outside."},{name:"Safiya Fareena",img:f(5),time:"2:10 PM",type:"video"},{name:"Robert Allen",img:f(13),time:"11:00 AM",status:"read",type:"photo",text:"Check this out from yesterday!",online:!0},{name:"Epic Game",img:f(60),time:"Yesterday",sender:"John Paul:",type:"file",text:"join the match now"},{name:"Scott Franklin",avatarText:"SF",time:"Monday",status:"error",type:"audio"},{name:"Micheal Scott",img:f(15),time:"Sunday",status:"read",text:"Emoji"},{name:"Innovative Online Shopping",img:f(16),time:"Friday",status:"read",sender:"Tessa:",text:"Order delivered"},{name:"Micheal Scott",img:f(15),time:"11/04/26",text:"Incoming voice call"}];function $(a=768){const[i,r]=p.useState(!1);return p.useEffect(()=>{const h=window.matchMedia(`(max-width: ${a}px)`),d=()=>r(h.matches);return d(),h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[a]),i}const tt=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15 19l-7-7 7-7",stroke:"var(--cometchat-icon-color-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function N({icon:a,label:i,active:r}){return e.jsxs("div",{className:"shell__tab-item",children:[e.jsx("span",{className:`icon-rounded shell__tab-icon ${r?"shell__tab-icon--active":""}`,style:r?{fontVariationSettings:'"FILL" 1'}:void 0,children:a}),e.jsx("span",{className:`shell__tab-label ${r?"shell__tab-label--active":""}`,children:i})]})}const K=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 15.83 15.83",fill:"none",children:e.jsx("path",{d:"M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z",fill:"var(--cometchat-icon-color-tertiary)"})}),Y=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 11.37 15.58",fill:"none",children:e.jsx("path",{d:"M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z",fill:"var(--cometchat-icon-color-tertiary)"})}),X=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 16.39 16.39",fill:"none",children:e.jsx("path",{d:"M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z",fill:"var(--cometchat-icon-color-tertiary)"})}),ee=()=>e.jsx("svg",{width:"22",height:"22",viewBox:"0 -960 960 960",fill:"none",style:{minWidth:22,minHeight:22},children:e.jsx("path",{d:"M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z",fill:"var(--cometchat-icon-color-tertiary)"})}),te=()=>e.jsx("svg",{width:"16",height:"14",viewBox:"0 0 15.78 13.6",fill:"none",children:e.jsx("path",{d:"M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z",fill:"currentColor"})}),at=()=>e.jsx("svg",{width:"9",height:"9",viewBox:"0 0 8 8",fill:"none",children:e.jsx("path",{d:"M1 1l6 6M7 1L1 7",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),ot={display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-2)",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)"},u={display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:"var(--cometchat-spacing-1-5)",borderRadius:"var(--cometchat-radius-2)",background:"transparent",border:"none",cursor:"pointer"},ae={width:36,height:36,borderRadius:"50%",border:"2px solid color-mix(in srgb, var(--cometchat-static-white) 12%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 1px 2px color-mix(in srgb, var(--cometchat-static-black) 5%, transparent)",flexShrink:0},oe=a=>a<1024?`${a} B`:a<1048576?`${Math.round(a/1024)} KB`:`${(a/1048576).toFixed(1)} MB`,nt={pdf:"pdf",doc:"doc",docx:"doc",xls:"xls",xlsx:"xls",csv:"xls",ppt:"ppt",pptx:"ppt",zip:"zip",rar:"zip",txt:"txt"},rt=[{id:1,variant:"received",groups:[{t:"media",count:4,total:6,video:!1}],time:"4:52 pm"},{id:2,variant:"received",groups:[{t:"files",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}]}],time:"4:52 pm"},{id:3,variant:"sent",groups:[{t:"audio",files:[{name:"Voice-reply.mp3",meta:"00:18"}]}],time:"4:53 pm",status:"read"},{id:4,variant:"received",groups:[{t:"media",count:1,total:1,video:!1}],caption:"and here's the hero shot 📸",time:"4:54 pm"},{id:5,variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"the set"}},groups:[{t:"media",count:2,total:2,video:!1}],caption:"love these 🙌",time:"4:55 pm",status:"read"}],st=[{id:1,variant:"received",groups:[{t:"media",count:4,total:6,video:!1}],time:"4:48 pm"},{id:2,variant:"sent",groups:[{t:"media",count:4,total:4,video:!0}],caption:"the highlights 🎬",time:"4:49 pm",status:"read"},{id:3,variant:"received",groups:[{t:"files",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"},{kind:"xls",name:"Budget.xlsx",meta:"12 Jun · 812 KB"},{kind:"doc",name:"Notes.docx",meta:"12 Jun · 340 KB"}]}],time:"4:50 pm"},{id:4,variant:"sent",groups:[{t:"audio",files:[{name:"Voice-reply.mp3",meta:"00:18"},{name:"Follow-up.mp3",meta:"00:42"}]}],time:"4:51 pm",status:"read"},{id:5,variant:"received",groups:[{t:"media",count:2,total:2,video:!1},{t:"files",files:[{kind:"ppt",name:"Deck.pptx",meta:"12 Jun · 6.1 MB"}]},{t:"audio",files:[{name:"Walkthrough.mp3",meta:"01:12"}]}],caption:"everything from the shoot 📦",time:"4:52 pm"},{id:6,variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"the set"}},groups:[{t:"media",count:2,total:2,video:!1}],caption:"love these 🙌",time:"4:55 pm",status:"read"},{id:7,variant:"sent",groups:[{t:"media",count:3,total:3,video:!1}],caption:"one more batch",time:"now",status:"sent",state:"uploading"}],it=[{id:90,kind:"image",name:"Photo-1.jpg",meta:"",src:b[0]},{id:91,kind:"image",name:"Photo-2.jpg",meta:"",src:b[3]},{id:92,kind:"video",name:"Clip.mp4",meta:"12 MB",src:b[1]},{id:93,kind:"doc",docType:"pdf",name:"Q3-Report.pdf",meta:"PDF · 2.4 MB"},{id:94,kind:"doc",docType:"xls",name:"Budget.xlsx",meta:"XLS · 812 KB"},{id:95,kind:"audio",name:"Voice-note.mp3",meta:"00:30"}];function Z(a){const i=a.variant==="sent"?"You":ke,r=a.groups[0];if(r){const h=r.t==="media"?r.video?"video":"image":r.t==="files"?"file":"audio",d=r.t==="media"?r.total:r.files.length;return{name:i,media:{kind:h,count:d,caption:a.caption}}}return{name:i,text:a.caption}}function ct(a){if(!a.media)return a.text??"";const i={image:["Image","Images"],video:["Video","Videos"],file:["File","Files"],audio:["Audio","Audio"]},[r,h]=i[a.media.kind];return`${a.media.count} ${a.media.count===1?r:h}${a.media.caption?` · ${a.media.caption}`:""}`}function lt({messages:a,setMessages:i,dropTarget:r="panel",initialPending:h,multiLine:d=!1}){const[x,y]=p.useState(h??[]),[I,k]=p.useState(d),w=$(),m=$(380),[C,F]=p.useState(""),[P,R]=p.useState(!1),[we,g]=p.useState(!1),[_,V]=p.useState(null),z=p.useRef(100),H=p.useRef(null),D=p.useRef(null);p.useEffect(()=>{D.current&&(D.current.scrollTop=D.current.scrollHeight)},[a,x]);function Ce(t){var l;const n=z.current++,o=((l=t.name.split(".").pop())==null?void 0:l.toLowerCase())??"";if(t.type.startsWith("image/"))return{id:n,kind:"image",name:t.name,meta:"",src:URL.createObjectURL(t)};if(t.type.startsWith("video/"))return{id:n,kind:"video",name:t.name,meta:oe(t.size),src:b[1]};if(t.type.startsWith("audio/"))return{id:n,kind:"audio",name:t.name,meta:"00:30"};const s=nt[o]??"file";return{id:n,kind:"doc",docType:s,name:t.name,meta:`${s.toUpperCase()} · ${oe(t.size)}`}}const O=t=>{const n=t.map(o=>({...o,loading:!0}));y(o=>[...o,...n]),n.forEach(o=>window.setTimeout(()=>y(s=>s.map(l=>l.id===o.id?{...l,loading:!1}:l)),1200))},U=t=>O(Array.from(t).map(Ce)),_e=t=>y(n=>n.filter(o=>o.id!==t));function G(t,n){const o=z.current++,s=t==="image"?{id:o,kind:t,name:"Photo.jpg",meta:"",src:b[o%b.length]}:t==="video"?{id:o,kind:t,name:"Clip.mp4",meta:"12 MB",src:b[1]}:t==="audio"?{id:o,kind:t,name:"Audio.mp3",meta:"00:30"}:{id:o,kind:"doc",docType:"pdf",name:"Document.pdf",meta:"PDF · 2.4 MB"};O([s]),g(!1)}const Se=[{icon:e.jsx(Le,{}),label:"Camera",onClick:()=>G("image")},{icon:e.jsx(Fe,{}),label:"Attach Image",onClick:()=>{var t;g(!1),(t=H.current)==null||t.click()}},{icon:e.jsx(Pe,{}),label:"Attach Video",onClick:()=>G("video")},{icon:e.jsx(Re,{}),label:"Attach Audio",onClick:()=>G("audio")},{icon:e.jsx(Ve,{}),label:"Attach Document",onClick:()=>{var t;g(!1),(t=H.current)==null||t.click()}},{icon:e.jsx(ze,{}),label:"Poll",onClick:()=>g(!1)},{icon:e.jsx(He,{}),label:"Collaborative Whiteboard",onClick:()=>g(!1)},{icon:e.jsx(Ge,{}),label:"Collaborative Document",onClick:()=>g(!1)}];function Ae(t){const n=t.filter(c=>c.kind==="image"),o=t.filter(c=>c.kind==="video"),s=t.filter(c=>c.kind==="doc"),l=t.filter(c=>c.kind==="audio"),v=[];return n.length&&v.push({t:"media",count:Math.min(n.length,4),total:n.length,video:!1}),o.length&&v.push({t:"media",count:Math.min(o.length,4),total:o.length,video:!0}),s.length&&v.push({t:"files",files:s.map(c=>({kind:c.docType??"file",name:c.name,meta:c.meta}))}),l.length&&v.push({t:"audio",files:l.map(c=>({name:c.name,meta:c.meta||"00:30"}))}),v}function B(){const t=Ae(x);if(!t.length&&!C.trim())return;const n=z.current++,o=_?Z(_):void 0;i(s=>[...s,{id:n,variant:"sent",groups:t,caption:C.trim()||void 0,quoted:o,time:"now",status:"sent",state:"uploading"}]),y([]),F(""),V(null),window.setTimeout(()=>{i(s=>s.map(l=>l.id===n?{...l,state:"default",status:"read"}:l))},1700)}function Me(t){const n=t.groups.length===0?[e.jsx(E,{variant:t.variant,quoted:t.quoted,caption:t.caption,time:t.time,status:t.status},"t")]:t.groups.map((o,s)=>{const l=s===t.groups.length-1,v={variant:t.variant,showMeta:l,time:t.time,status:t.status,state:t.state==="uploading"?"uploading":"default",quoted:s===0?t.quoted:void 0,caption:l?t.caption:void 0};return o.t==="media"?e.jsx(E,{...v,images:o.count,totalImages:o.total,videoAt:o.video?Array.from({length:o.count},(c,Ie)=>Ie):[]},s):o.t==="files"?e.jsx(E,{...v,files:o.files},s):e.jsx(E,{...v,files:o.files.map(c=>({kind:"audio",name:c.name,meta:c.meta}))},s)});return e.jsxs("div",{className:`e2e-row e2e-row--${t.variant}`,children:[e.jsx(Ke,{variant:t.variant,children:n}),e.jsx("button",{className:"e2e-reply",onClick:()=>V(t),"aria-label":"Reply",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:18,"--icon-fill":0},children:"reply"})})]},t.id)}const j=x.length>0||C.trim().length>0,W=x.length===0?null:e.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-2)",padding:d?"var(--cometchat-spacing-2-5) var(--cometchat-spacing-3) var(--cometchat-spacing-1)":"var(--cometchat-spacing-2) 0",overflowX:"auto",overflowY:"visible"},children:x.map(t=>e.jsxs("div",{style:{position:"relative",flexShrink:0},children:[(()=>{const n=t.loading?"loading":"none";return t.kind==="image"?e.jsx($e,{badge:n,src:t.src}):t.kind==="video"?e.jsx(qe,{badge:n,src:t.src}):t.kind==="audio"?e.jsx(Oe,{badge:n,title:t.name}):e.jsx(Ue,{badge:n,name:t.name,type:t.docType,meta:t.meta})})(),!t.loading&&e.jsx("button",{onClick:()=>_e(t.id),style:{position:"absolute",top:-6,right:-6,width:22,height:22,borderRadius:"50%",border:"2px solid var(--cometchat-background-color-01)",background:"color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},"aria-label":"Remove attachment",children:e.jsx(at,{})})]},t.id))}),T=r==="composer",J={onDragOver:t=>{t.preventDefault(),P||R(!0)},onDragLeave:t=>{t.currentTarget===t.target&&R(!1)},onDrop:t=>{t.preventDefault(),R(!1),t.dataTransfer.files.length&&U(t.dataTransfer.files)}};return e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",position:"relative",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},...T?{}:J,children:[e.jsxs("div",{className:"chat-header",children:[w&&e.jsx("button",{className:"chat-header__back-btn","aria-label":"Back to chats",children:e.jsx(tt,{})}),e.jsxs("div",{className:"chat-header__info",children:[e.jsx("div",{className:"chat-header__avatar",children:e.jsx("img",{src:Ye,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}})}),e.jsxs("div",{className:"chat-header__text",children:[e.jsx("span",{className:"chat-header__name",children:"George Alan"}),e.jsx("span",{className:"chat-header__status",children:"Online"})]})]}),e.jsxs("div",{className:"chat-header__actions",children:[!m&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"videocam"})}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"call"})})]}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"more_vert"})})]})]}),e.jsx("style",{children:`
        .e2e-row { display: flex; align-items: center; gap: 6px; }
        .e2e-row--received { justify-content: flex-start; }
        .e2e-row--sent { flex-direction: row-reverse; justify-content: flex-start; }
        .e2e-reply {
          opacity: 0; flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%;
          border: none; background: transparent; color: var(--cometchat-icon-color-secondary);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: opacity .12s ease, background .12s ease;
        }
        .e2e-row:hover .e2e-reply { opacity: 1; }
        .e2e-reply:hover { background: var(--cometchat-background-color-03); }
      `}),e.jsx("div",{ref:D,style:{flex:1,overflowY:"auto",padding:w?"var(--cometchat-spacing-3)":"var(--cometchat-spacing-4) var(--cometchat-spacing-6)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)",background:"var(--cometchat-background-color-02)"},children:a.map(Me)}),e.jsxs("div",{style:{position:"relative",padding:w?"var(--cometchat-spacing-2) var(--cometchat-spacing-3)":"var(--cometchat-spacing-3) var(--cometchat-spacing-6)",background:"var(--cometchat-background-color-02)"},...T?J:{},children:[we&&e.jsxs("div",{style:{position:"absolute",bottom:"calc(100% - 8px)",left:16,zIndex:1e3},children:[e.jsx("style",{children:".action-sheet{position:relative;z-index:1000;}"}),e.jsx(Ne,{items:Se,onClose:()=>g(!1),width:288})]}),!d&&W,_&&e.jsx("div",{style:{margin:"var(--cometchat-spacing-1) 0 var(--cometchat-spacing-1-5)"},children:e.jsx(Ee,{mode:"reply",senderName:Z(_).name,messageText:ct(Z(_))||"Message",onClose:()=>V(null)})}),e.jsxs("div",{style:d?{display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-2)",position:"relative",overflow:"hidden"}:{...ot,position:"relative",overflow:"hidden"},children:[P&&T&&e.jsx(Q,{compact:!0}),e.jsx("input",{ref:H,type:"file",multiple:!0,style:{display:"none"},onChange:t=>t.target.files&&U(t.target.files)}),d?e.jsxs(e.Fragment,{children:[I&&e.jsx(We,{}),W,e.jsx("input",{value:C,onChange:t=>F(t.target.value),onKeyDown:t=>{t.key==="Enter"&&B()},placeholder:"Type your message...",style:{border:"none",outline:"none",background:"transparent",padding:"var(--cometchat-spacing-3)",fontSize:14,lineHeight:"20px",color:"var(--cometchat-text-color-primary)",fontFamily:"inherit"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",borderTop:"1px solid var(--cometchat-border-color-light)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)",flex:1},children:[e.jsx("button",{style:u,"aria-label":"Attach file",onClick:()=>g(t=>!t),children:e.jsx(K,{})}),e.jsx("button",{style:u,"aria-label":"Voice record",children:e.jsx(Y,{})}),e.jsx("button",{style:u,"aria-label":"Emoji",children:e.jsx(X,{})}),e.jsx("button",{style:u,"aria-label":"Sticker",children:e.jsx(ee,{})}),e.jsx("button",{style:u,"aria-label":"Formatting",onClick:()=>k(t=>!t),children:e.jsx(Je,{active:I})}),e.jsx("button",{style:{...u,padding:"var(--cometchat-spacing-1)"},"aria-label":"AI features",children:e.jsx(Qe,{})})]}),e.jsx("div",{onClick:B,role:"button","aria-label":"Send",style:{...ae,cursor:j?"pointer":"default",background:j?"var(--cometchat-background-color-solid)":"var(--cometchat-background-color-03)",color:j?"var(--cometchat-static-white)":"var(--cometchat-icon-color-disabled)"},children:e.jsx(te,{})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{style:u,"aria-label":"Attach file",onClick:()=>g(t=>!t),children:e.jsx(K,{})}),e.jsx("input",{value:C,onChange:t=>F(t.target.value),onKeyDown:t=>{t.key==="Enter"&&B()},placeholder:"Enter your message here",style:{flex:1,minWidth:0,border:"none",outline:"none",background:"transparent",fontSize:14,lineHeight:"20px",color:"var(--cometchat-text-color-primary)",fontFamily:"inherit"}}),e.jsx("button",{style:u,"aria-label":"Emoji",children:e.jsx(X,{})}),e.jsx("button",{style:u,"aria-label":"Sticker",children:e.jsx(ee,{})}),e.jsx("button",{style:u,"aria-label":"Voice record",children:e.jsx(Y,{})}),e.jsx("div",{onClick:B,role:"button","aria-label":"Send",style:{...ae,cursor:j?"pointer":"default",background:j?"var(--cometchat-background-color-solid)":"var(--cometchat-background-color-03)",color:j?"var(--cometchat-static-white)":"var(--cometchat-icon-color-disabled)"},children:e.jsx(te,{})})]})]})]}),P&&!T&&e.jsx(Q,{chatName:ke})]})}function q({dropTarget:a="panel",initialPending:i,multiLine:r=!1,seed:h=rt}){const[d,x]=p.useState(h),y=d[d.length-1],I=$();return e.jsxs("div",{className:"shell",style:{height:"100vh",borderRadius:0,border:"none",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:[!I&&e.jsxs("div",{className:"shell__sidebar",children:[e.jsx(De,{title:"Chats",actions:[],showMore:!0}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-4)"},children:e.jsx(Be,{placeholder:"Search chats or messages"})}),e.jsx("div",{style:{flex:1,overflow:"auto"},children:et.map((k,w)=>{const m=k.active?{...k,...Xe(y)}:k;return e.jsx("div",{style:m.active?{background:"var(--cometchat-background-color-03)"}:void 0,children:e.jsx(Te,{title:m.name,timestamp:m.time,avatarVariant:m.avatarText?"text":"image",avatarUrl:m.img,avatarText:m.avatarText,statusIcon:m.online?"online":"none",messageStatus:m.status,senderLabel:m.sender,messageType:m.type,messageTypeLabel:m.type?!0:void 0,textContent:m.text})},w)})}),e.jsxs("div",{className:"shell__tab-bar",children:[e.jsx(N,{icon:"chat",label:"Chats",active:!0}),e.jsx(N,{icon:"call",label:"Calls"}),e.jsx(N,{icon:"group",label:"Groups"}),e.jsx(N,{icon:"person",label:"Users"})]})]}),e.jsx(lt,{messages:d,setMessages:x,dropTarget:a,initialPending:i,multiLine:r})]})}const L={parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{})},S={name:"Chat (Attachments Queued)",parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{initialPending:it,multiLine:!0,seed:st})},A={name:"Chat (Composer Drop)",parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{dropTarget:"composer"})},M={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(Ze,{composed:[{name:"Header + SearchBar + ConversationItem",desc:"Base Components composing the Chat List sidebar; the active row mirrors the latest sent message."},{name:"ActionSheet",desc:"Base Component opened by the composer ＋ — camera, image, video, audio, document, poll…"},{name:"Single Line Composer",desc:"DS composer row with the attachment preview strip and reply-preview strip above it."},{name:"MultiAttachmentBubble / MessageStack",desc:"Delivered messages — separate bubble per format, uploading → read lifecycle."}],html:`<!-- Full chat screen -->
<div class="shell">
  <aside class="shell__sidebar">
    <!-- Header + SearchBar + ConversationItem list (Base Components) -->
  </aside>

  <main class="chat">
    <header class="chat-header"><!-- avatar · name · actions --></header>

    <div class="chat__messages">
      <!-- MessageStack / MultiAttachmentBubble per message -->
    </div>

    <footer class="chat__composer">
      <!-- reply preview (when replying) -->
      <div class="chat__reply">Reply to George Alan · 6 Images</div>
      <!-- attachment preview strip (queued files) -->
      <div class="chat__strip"><!-- previews with loading → ✕ badges --></div>
      <!-- Single Line Composer -->
      <div class="composer-row">
        <button aria-label="Attach">add_circle</button>
        <input placeholder="Enter your message here" />
        <button aria-label="Send">send</button>
      </div>
    </footer>

    <!-- Drag overlay (while dragging files over the chat) -->
    <div class="chat__dropzone">
      <span class="icon-rounded">upload_file</span>
      Drop files to attach — to George Alan
    </div>
  </main>
</div>`,css:`
        .chat {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .chat__messages {
          flex: 1;
          overflow-y: auto;
          padding: var(--cometchat-spacing-4) var(--cometchat-spacing-6);
          background: var(--cometchat-background-color-02);
        }

        .chat__reply {
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
          border-left: 3px solid var(--cometchat-primary-color);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-02);
          font: var(--cometchat-font-caption1-regular);
          color: var(--cometchat-text-color-secondary);
        }

        .chat__strip {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3)
            var(--cometchat-spacing);
          overflow-x: auto;
        }

        .composer-row {
          display: flex;
          align-items: center;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
          border: 1px solid var(--cometchat-border-color-default);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-01);
        }

        /* Dark full-bleed drop overlay, white icon + text, destination chat name */
        .chat__dropzone {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: color-mix(
            in srgb,
            color-mix(
                in srgb,
                var(--cometchat-static-black) 80%,
                var(--cometchat-static-white)
              )
              92%,
            transparent
          );
          border: 2px dashed
            color-mix(in srgb, var(--cometchat-static-white) 45%, transparent);
          color: var(--cometchat-static-white);
          pointer-events: none;
        }
      `})};var ne,re,se;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatScreen />
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le,de,me;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Chat (Attachments Queued)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatScreen initialPending={SEED_PENDING} multiLine seed={SEED_ALL} />
}`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`The composer tray loaded with every attachment format at once — photos,
 video, documents and audio queued together above a thread of multi-attachment
 messages. Press Send to post them as separate-format bubbles.`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.description}}};var he,pe,ue,ge,ve;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Chat (Composer Drop)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatScreen dropTarget="composer" />
}`,...(ue=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:`Same chat, but dragging files shows a compact drop overlay on the composer
 footer only — the message thread stays visible.`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var fe,xe,be,ye,je;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "Header + SearchBar + ConversationItem",
    desc: "Base Components composing the Chat List sidebar; the active row mirrors the latest sent message."
  }, {
    name: "ActionSheet",
    desc: "Base Component opened by the composer ＋ — camera, image, video, audio, document, poll…"
  }, {
    name: "Single Line Composer",
    desc: "DS composer row with the attachment preview strip and reply-preview strip above it."
  }, {
    name: "MultiAttachmentBubble / MessageStack",
    desc: "Delivered messages — separate bubble per format, uploading → read lifecycle."
  }]} html={\`<!-- Full chat screen -->
<div class="shell">
  <aside class="shell__sidebar">
    <!-- Header + SearchBar + ConversationItem list (Base Components) -->
  </aside>

  <main class="chat">
    <header class="chat-header"><!-- avatar · name · actions --></header>

    <div class="chat__messages">
      <!-- MessageStack / MultiAttachmentBubble per message -->
    </div>

    <footer class="chat__composer">
      <!-- reply preview (when replying) -->
      <div class="chat__reply">Reply to George Alan · 6 Images</div>
      <!-- attachment preview strip (queued files) -->
      <div class="chat__strip"><!-- previews with loading → ✕ badges --></div>
      <!-- Single Line Composer -->
      <div class="composer-row">
        <button aria-label="Attach">add_circle</button>
        <input placeholder="Enter your message here" />
        <button aria-label="Send">send</button>
      </div>
    </footer>

    <!-- Drag overlay (while dragging files over the chat) -->
    <div class="chat__dropzone">
      <span class="icon-rounded">upload_file</span>
      Drop files to attach — to George Alan
    </div>
  </main>
</div>\`} css={\`
        .chat {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .chat__messages {
          flex: 1;
          overflow-y: auto;
          padding: var(--cometchat-spacing-4) var(--cometchat-spacing-6);
          background: var(--cometchat-background-color-02);
        }

        .chat__reply {
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
          border-left: 3px solid var(--cometchat-primary-color);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-02);
          font: var(--cometchat-font-caption1-regular);
          color: var(--cometchat-text-color-secondary);
        }

        .chat__strip {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3)
            var(--cometchat-spacing);
          overflow-x: auto;
        }

        .composer-row {
          display: flex;
          align-items: center;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
          border: 1px solid var(--cometchat-border-color-default);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-01);
        }

        /* Dark full-bleed drop overlay, white icon + text, destination chat name */
        .chat__dropzone {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: color-mix(
            in srgb,
            color-mix(
                in srgb,
                var(--cometchat-static-black) 80%,
                var(--cometchat-static-white)
              )
              92%,
            transparent
          );
          border: 2px dashed
            color-mix(in srgb, var(--cometchat-static-white) 45%, transparent);
          color: var(--cometchat-static-white);
          pointer-events: none;
        }
      \`} />
}`,...(be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:"Usage — HTML structure + token CSS.",...(je=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:je.description}}};const wt=["Chat","ChatAttachmentsQueued","ChatComposerDrop","Usage"];export{L as Chat,S as ChatAttachmentsQueued,A as ChatComposerDrop,M as Usage,wt as __namedExportsOrder,kt as default};
