import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";/* empty css              *//* empty css                    */import{H as de}from"./Header-DPJM8LY9.js";import{S as me}from"./SearchBar-C2XVB5CY.js";import{d as he}from"./GroupItem-BE0-YeeH.js";import{M as pe}from"./MessagePreview-BQuL-8-I.js";import{A as ue,C as ge,P as ve,V as fe,a as xe,D as be,b as ye,c as je,d as we}from"./icons-Cw_HfLCw.js";import{U as ke,d as _e,V as Ce,A as Se,D as Ae,e as H,M as k,f as Me,a as _}from"./_shared-DeypJf0Z.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const at={title:"Core Components/Message Composer/Multi Attachments/End to End",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`**Multi Attachments — End to End.** A single chat with the design-system
**Single Line Composer** wired up: **drag files onto the chat** (or use ＋) to
queue previews, then **Send** to post them as separate-format bubbles running
*uploading → read*. The thread is pre-seeded with the range of states.`}}}},g=a=>`https://i.pravatar.cc/120?img=${a}`,Ie=g(12),te="George Alan";function De(a){const s=a.groups[0],i=s?s.t==="media"?s.video?"video":"photo":s.t==="files"?"file":"audio":void 0,m=a.variant==="sent"?a.state==="uploading"?"sent":"read":void 0;return{type:i,text:a.caption,status:m,time:a.time==="now"?"Now":a.time}}const Te=[{name:"George Alan",img:g(12),time:"6:45 PM",text:"Hey, let's catch up later!",status:"read",online:!0,active:!0},{name:"Uber Cars",img:g(52),time:"4:30 PM",sender:"John:",type:"photo",text:"Your ride has arrived. Driver is waiting outside."},{name:"Safiya Fareena",img:g(5),time:"2:10 PM",type:"video"},{name:"Robert Allen",img:g(13),time:"11:00 AM",status:"read",type:"photo",text:"Check this out from yesterday!",online:!0},{name:"Epic Game",img:g(60),time:"Yesterday",sender:"John Paul:",type:"file",text:"join the match now"},{name:"Scott Franklin",avatarText:"SF",time:"Monday",status:"error",type:"audio"},{name:"Micheal Scott",img:g(15),time:"Sunday",status:"read",text:"Emoji"},{name:"Innovative Online Shopping",img:g(16),time:"Friday",status:"read",sender:"Tessa:",text:"Order delivered"},{name:"Micheal Scott",img:g(15),time:"11/04/26",text:"Incoming voice call"}];function C({icon:a,label:s,active:i}){return e.jsxs("div",{className:"shell__tab-item",children:[e.jsx("span",{className:`icon-rounded shell__tab-icon ${i?"shell__tab-icon--active":""}`,children:a}),e.jsx("span",{className:`shell__tab-label ${i?"shell__tab-label--active":""}`,children:s})]})}const Be=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 15.83 15.83",fill:"none",children:e.jsx("path",{d:"M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z",fill:"var(--cometchat-icon-color-tertiary)"})}),Ne=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 11.37 15.58",fill:"none",children:e.jsx("path",{d:"M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z",fill:"var(--cometchat-icon-color-tertiary)"})}),Ee=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 16.39 16.39",fill:"none",children:e.jsx("path",{d:"M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z",fill:"var(--cometchat-icon-color-tertiary)"})}),Re=()=>e.jsx("svg",{width:"22",height:"22",viewBox:"0 -960 960 960",fill:"none",style:{minWidth:22,minHeight:22},children:e.jsx("path",{d:"M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z",fill:"var(--cometchat-icon-color-tertiary)"})}),Le=()=>e.jsx("svg",{width:"16",height:"14",viewBox:"0 0 15.78 13.6",fill:"none",children:e.jsx("path",{d:"M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z",fill:"currentColor"})}),Ve=()=>e.jsx("svg",{width:"9",height:"9",viewBox:"0 0 8 8",fill:"none",children:e.jsx("path",{d:"M1 1l6 6M7 1L1 7",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),ze={display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-2)",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)"},S={display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:"var(--cometchat-spacing-1-5)",borderRadius:"var(--cometchat-radius-2)",background:"transparent",border:"none",cursor:"pointer"},Pe={width:36,height:36,borderRadius:"50%",border:"2px solid color-mix(in srgb, var(--cometchat-static-white) 12%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 1px 2px color-mix(in srgb, var(--cometchat-static-black) 5%, transparent)",flexShrink:0},F=a=>a<1024?`${a} B`:a<1048576?`${Math.round(a/1024)} KB`:`${(a/1048576).toFixed(1)} MB`,He={pdf:"pdf",doc:"doc",docx:"doc",xls:"xls",xlsx:"xls",csv:"xls",ppt:"ppt",pptx:"ppt",zip:"zip",rar:"zip",txt:"txt"},Fe=[{id:1,variant:"received",groups:[{t:"media",count:4,total:6,video:!1}],time:"4:52 pm"},{id:2,variant:"received",groups:[{t:"files",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}]}],time:"4:52 pm"},{id:3,variant:"sent",groups:[{t:"audio",files:[{name:"Voice-reply.mp3",meta:"00:18"}]}],time:"4:53 pm",status:"read"},{id:4,variant:"received",groups:[{t:"media",count:1,total:1,video:!1}],caption:"and here's the hero shot 📸",time:"4:54 pm"},{id:5,variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"the set"}},groups:[{t:"media",count:2,total:2,video:!1}],caption:"love these 🙌",time:"4:55 pm",status:"read"}];function R(a){const s=a.variant==="sent"?"You":te,i=a.groups[0];if(i){const m=i.t==="media"?i.video?"video":"image":i.t==="files"?"file":"audio",h=i.t==="media"?i.total:i.files.length;return{name:s,media:{kind:m,count:h,caption:a.caption}}}return{name:s,text:a.caption}}function Ze(a){if(!a.media)return a.text??"";const s={image:["Image","Images"],video:["Video","Videos"],file:["File","Files"],audio:["Audio","Audio"]},[i,m]=s[a.media.kind];return`${a.media.count} ${a.media.count===1?i:m}${a.media.caption?` · ${a.media.caption}`:""}`}function $e({messages:a,setMessages:s,dropTarget:i="panel"}){const[m,h]=p.useState([]),[f,d]=p.useState(""),[M,I]=p.useState(!1),[oe,v]=p.useState(!1),[x,D]=p.useState(null),T=p.useRef(100),B=p.useRef(null),j=p.useRef(null);p.useEffect(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[a,m]);function ne(t){var l;const n=T.current++,o=((l=t.name.split(".").pop())==null?void 0:l.toLowerCase())??"";if(t.type.startsWith("image/"))return{id:n,kind:"image",name:t.name,meta:"",src:URL.createObjectURL(t)};if(t.type.startsWith("video/"))return{id:n,kind:"video",name:t.name,meta:F(t.size),src:_[1]};if(t.type.startsWith("audio/"))return{id:n,kind:"audio",name:t.name,meta:"00:30"};const r=He[o]??"file";return{id:n,kind:"doc",docType:r,name:t.name,meta:`${r.toUpperCase()} · ${F(t.size)}`}}const L=t=>{const n=t.map(o=>({...o,loading:!0}));h(o=>[...o,...n]),n.forEach(o=>window.setTimeout(()=>h(r=>r.map(l=>l.id===o.id?{...l,loading:!1}:l)),1200))},V=t=>L(Array.from(t).map(ne)),re=t=>h(n=>n.filter(o=>o.id!==t));function N(t,n){const o=T.current++,r=t==="image"?{id:o,kind:t,name:"Photo.jpg",meta:"",src:_[o%_.length]}:t==="video"?{id:o,kind:t,name:"Clip.mp4",meta:"12 MB",src:_[1]}:t==="audio"?{id:o,kind:t,name:"Audio.mp3",meta:"00:30"}:{id:o,kind:"doc",docType:"pdf",name:"Document.pdf",meta:"PDF · 2.4 MB"};L([r]),v(!1)}const se=[{icon:e.jsx(ge,{}),label:"Camera",onClick:()=>N("image")},{icon:e.jsx(ve,{}),label:"Attach Image",onClick:()=>{var t;v(!1),(t=B.current)==null||t.click()}},{icon:e.jsx(fe,{}),label:"Attach Video",onClick:()=>N("video")},{icon:e.jsx(xe,{}),label:"Attach Audio",onClick:()=>N("audio")},{icon:e.jsx(be,{}),label:"Attach Document",onClick:()=>{var t;v(!1),(t=B.current)==null||t.click()}},{icon:e.jsx(ye,{}),label:"Poll",onClick:()=>v(!1)},{icon:e.jsx(je,{}),label:"Collaborative Whiteboard",onClick:()=>v(!1)},{icon:e.jsx(we,{}),label:"Collaborative Document",onClick:()=>v(!1)}];function ie(t){const n=t.filter(c=>c.kind==="image"),o=t.filter(c=>c.kind==="video"),r=t.filter(c=>c.kind==="doc"),l=t.filter(c=>c.kind==="audio"),u=[];return n.length&&u.push({t:"media",count:Math.min(n.length,4),total:n.length,video:!1}),o.length&&u.push({t:"media",count:Math.min(o.length,4),total:o.length,video:!0}),r.length&&u.push({t:"files",files:r.map(c=>({kind:c.docType??"file",name:c.name,meta:c.meta}))}),l.length&&u.push({t:"audio",files:l.map(c=>({name:c.name,meta:c.meta||"00:30"}))}),u}function z(){const t=ie(m);if(!t.length&&!f.trim())return;const n=T.current++,o=x?R(x):void 0;s(r=>[...r,{id:n,variant:"sent",groups:t,caption:f.trim()||void 0,quoted:o,time:"now",status:"sent",state:"uploading"}]),h([]),d(""),D(null),window.setTimeout(()=>{s(r=>r.map(l=>l.id===n?{...l,state:"default",status:"read"}:l))},1700)}function ce(t){const n=t.groups.length===0?[e.jsx(k,{variant:t.variant,quoted:t.quoted,caption:t.caption,time:t.time,status:t.status},"t")]:t.groups.map((o,r)=>{const l=r===t.groups.length-1,u={variant:t.variant,showMeta:l,time:t.time,status:t.status,state:t.state==="uploading"?"uploading":"default",quoted:r===0?t.quoted:void 0,caption:l?t.caption:void 0};return o.t==="media"?e.jsx(k,{...u,images:o.count,totalImages:o.total,videoAt:o.video?Array.from({length:o.count},(c,le)=>le):[]},r):o.t==="files"?e.jsx(k,{...u,files:o.files},r):e.jsx(k,{...u,files:o.files.map(c=>({kind:"audio",name:c.name,meta:c.meta}))},r)});return e.jsxs("div",{className:`e2e-row e2e-row--${t.variant}`,children:[e.jsx(Me,{variant:t.variant,children:n}),e.jsx("button",{className:"e2e-reply",onClick:()=>D(t),"aria-label":"Reply",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:18,"--icon-fill":0},children:"reply"})})]},t.id)}const E=m.length>0||f.trim().length>0,w=i==="composer",P={onDragOver:t=>{t.preventDefault(),M||I(!0)},onDragLeave:t=>{t.currentTarget===t.target&&I(!1)},onDrop:t=>{t.preventDefault(),I(!1),t.dataTransfer.files.length&&V(t.dataTransfer.files)}};return e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",position:"relative",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},...w?{}:P,children:[e.jsxs("div",{className:"chat-header",children:[e.jsxs("div",{className:"chat-header__info",children:[e.jsx("div",{className:"chat-header__avatar",children:e.jsx("img",{src:Ie,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}})}),e.jsxs("div",{className:"chat-header__text",children:[e.jsx("span",{className:"chat-header__name",children:"George Alan"}),e.jsx("span",{className:"chat-header__status",children:"Online"})]})]}),e.jsxs("div",{className:"chat-header__actions",children:[e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"videocam"})}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"call"})}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"more_vert"})})]})]}),e.jsx("style",{children:`
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
      `}),e.jsx("div",{ref:j,style:{flex:1,overflowY:"auto",padding:"var(--cometchat-spacing-4) var(--cometchat-spacing-6)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)",background:"var(--cometchat-background-color-02)"},children:a.map(ce)}),e.jsxs("div",{style:{position:"relative",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderTop:"1px solid var(--cometchat-border-color-light)"},...w?P:{},children:[oe&&e.jsxs("div",{style:{position:"absolute",bottom:"calc(100% - 8px)",left:16,zIndex:1e3},children:[e.jsx("style",{children:".action-sheet{position:relative;z-index:1000;}"}),e.jsx(ue,{items:se,onClose:()=>v(!1),width:288})]}),m.length>0&&e.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-2-5) var(--cometchat-spacing-3) var(--cometchat-spacing)",marginBottom:2,overflowX:"auto",overflowY:"visible"},children:m.map(t=>e.jsxs("div",{style:{position:"relative",flexShrink:0},children:[(()=>{const n=t.loading?"loading":"none";return t.kind==="image"?e.jsx(_e,{badge:n,src:t.src}):t.kind==="video"?e.jsx(Ce,{badge:n,src:t.src}):t.kind==="audio"?e.jsx(Se,{badge:n,title:t.name}):e.jsx(Ae,{badge:n,name:t.name,type:t.docType,meta:t.meta})})(),!t.loading&&e.jsx("button",{onClick:()=>re(t.id),style:{position:"absolute",top:-6,right:-6,width:22,height:22,borderRadius:"50%",border:"2px solid var(--cometchat-background-color-01)",background:"color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},"aria-label":"Remove attachment",children:e.jsx(Ve,{})})]},t.id))}),x&&e.jsx("div",{style:{margin:"var(--cometchat-spacing-1) 0 var(--cometchat-spacing-1-5)"},children:e.jsx(pe,{mode:"reply",senderName:R(x).name,messageText:Ze(R(x))||"Message",onClose:()=>D(null)})}),e.jsxs("div",{style:{...ze,position:"relative",overflow:"hidden"},children:[M&&w&&e.jsx(H,{compact:!0}),e.jsx("input",{ref:B,type:"file",multiple:!0,style:{display:"none"},onChange:t=>t.target.files&&V(t.target.files)}),e.jsx("button",{style:S,"aria-label":"Attach file",onClick:()=>v(t=>!t),children:e.jsx(Be,{})}),e.jsx("input",{value:f,onChange:t=>d(t.target.value),onKeyDown:t=>{t.key==="Enter"&&z()},placeholder:"Enter your message here",style:{flex:1,minWidth:0,border:"none",outline:"none",background:"transparent",fontSize:14,lineHeight:"20px",color:"var(--cometchat-text-color-primary)",fontFamily:"inherit"}}),e.jsx("button",{style:S,"aria-label":"Emoji",children:e.jsx(Ee,{})}),e.jsx("button",{style:S,"aria-label":"Sticker",children:e.jsx(Re,{})}),e.jsx("button",{style:S,"aria-label":"Voice record",children:e.jsx(Ne,{})}),e.jsx("div",{onClick:z,role:"button","aria-label":"Send",style:{...Pe,cursor:E?"pointer":"default",background:E?"var(--cometchat-background-color-solid)":"var(--cometchat-background-color-03)",color:E?"var(--cometchat-static-white)":"var(--cometchat-icon-color-disabled)"},children:e.jsx(Le,{})})]})]}),M&&!w&&e.jsx(H,{chatName:te})]})}function ae({dropTarget:a="panel"}){const[s,i]=p.useState(Fe),m=s[s.length-1];return e.jsxs("div",{className:"shell",style:{height:"100vh",borderRadius:0,border:"none",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:[e.jsxs("div",{className:"shell__sidebar",children:[e.jsx(de,{title:"Chats",actions:[],showMore:!0}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-4)"},children:e.jsx(me,{placeholder:"Search chats or messages"})}),e.jsx("div",{style:{flex:1,overflow:"auto"},children:Te.map((h,f)=>{const d=h.active?{...h,...De(m)}:h;return e.jsx("div",{style:d.active?{background:"var(--cometchat-background-color-03)"}:void 0,children:e.jsx(he,{title:d.name,timestamp:d.time,avatarVariant:d.avatarText?"text":"image",avatarUrl:d.img,avatarText:d.avatarText,statusIcon:d.online?"online":"none",messageStatus:d.status,senderLabel:d.sender,messageType:d.type,messageTypeLabel:d.type?!0:void 0,textContent:d.text})},f)})}),e.jsxs("div",{className:"shell__tab-bar",children:[e.jsx(C,{icon:"chat",label:"Chats",active:!0}),e.jsx(C,{icon:"call",label:"Calls"}),e.jsx(C,{icon:"group",label:"Groups"}),e.jsx(C,{icon:"person",label:"Users"})]})]}),e.jsx($e,{messages:s,setMessages:i,dropTarget:a})]})}const A={parameters:{controls:{disable:!0}},render:()=>e.jsx(ae,{})},b={name:"Chat (Composer Drop)",parameters:{controls:{disable:!0}},render:()=>e.jsx(ae,{dropTarget:"composer"})},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(ke,{composed:[{name:"Header + SearchBar + ConversationItem",desc:"Base Components composing the Chat List sidebar; the active row mirrors the latest sent message."},{name:"ActionSheet",desc:"Base Component opened by the composer ＋ — camera, image, video, audio, document, poll…"},{name:"Single Line Composer",desc:"DS composer row with the attachment preview strip and reply-preview strip above it."},{name:"MultiAttachmentBubble / MessageStack",desc:"Delivered messages — separate bubble per format, uploading → read lifecycle."}],html:`<!-- Full chat screen -->
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
      `})};var Z,$,G;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatScreen />
}`,...(G=($=A.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var O,U,q,W,Y;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Chat (Composer Drop)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatScreen dropTarget="composer" />
}`,...(q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Same chat, but dragging files shows a compact drop overlay on the composer
 footer only — the message thread stays visible.`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var J,K,X,Q,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Usage — HTML structure + token CSS.",...(ee=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:ee.description}}};const ot=["Chat","ChatComposerDrop","Usage"];export{A as Chat,b as ChatComposerDrop,y as Usage,ot as __namedExportsOrder,at as default};
