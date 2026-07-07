import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as Y}from"./SearchBar-C2XVB5CY.js";import{U as $,a as b,F as q}from"./_shared-B-cAXUmV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const de={title:"Core Components/Message Composer/Multi Attachments/In Search",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Search.** The global chat search, filtered by
attachment type. Each filter renders its results differently:

- **Photos / Videos** — a media thumbnail with a "+N" count on the right.
- **Documents** — the first document's icon with a stack behind it, plus time.
  With a caption the count is appended after it — "the signed copy · 6 Files".
- **Audio** — a play button on the left, plus time.

The **All** filter is intentionally not shown here — it falls back to the
normal conversation list; these views are the attachment-type filters.`}}}},J=["All","Unread","Groups","Photos","Videos","Audio","Documents","Gifs","Links"],U=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 12 12",fill:"none",style:{marginLeft:t*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),K={image:"image",video:"videocam",file:"description",audio:"mic"};function Q(t,a){if(t==="audio")return"Audio";if(t==="text")return"";const o={image:["Photo","Images"],video:["Video","Videos"],file:["Document","Files"]},[n,i]=o[t];return a>1?`${a} ${i}`:n}function x({sent:t,sender:a,kind:o,count:n=1,caption:i}){const d=Q(o,n),p=t?"You":a,X=!!i&&o==="file"&&n>1,N=i??d,Z={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0};return e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5,minWidth:0,fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:[p&&e.jsxs("span",{style:{flexShrink:0},children:[p,":"]}),o!=="text"&&e.jsx("span",{className:"icon-rounded",style:{fontSize:16,color:"var(--cometchat-icon-color-secondary)","--icon-fill":0,flexShrink:0},children:K[o]}),e.jsx("span",{style:Z,children:N}),X&&e.jsxs("span",{style:{flexShrink:0},children:[" · ",d]})]})}function ee({active:t}){return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:J.map(a=>{const o=a===t;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:32,padding:"0 var(--cometchat-spacing-3)",borderRadius:"var(--cometchat-radius-max)",border:o?"1px solid var(--cometchat-primary-color)":"1px solid var(--cometchat-border-color-default)",background:o?"var(--cometchat-primary-color)":"var(--cometchat-background-color-01)",color:o?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",fontSize:13,fontWeight:500,whiteSpace:"nowrap"},children:a},a)})})}function l({active:t,children:a}){return e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("span",{style:{fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:"Chats"}),e.jsx(Y,{placeholder:"Search"}),e.jsx(ee,{active:t}),e.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--cometchat-text-color-secondary)",marginTop:4},children:"March 2026"}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:a})]})}function y({left:t,title:a,subtitle:o,right:n}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-2-5) 2px"},children:[t,e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:3},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a}),o]}),n]})}function te({kind:t,count:a,src:o}){return e.jsxs("div",{style:{position:"relative",width:76,height:54,borderRadius:"var(--cometchat-radius-2)",overflow:"hidden",flexShrink:0,border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:t==="video"?"brightness(0.8)":void 0}}),a>0?e.jsxs("div",{style:{position:"absolute",inset:0,background:"color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",color:"var(--cometchat-static-white)",fontSize:15,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center"},children:["+",a]}):t==="video"&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:30,height:30,borderRadius:"50%",background:"color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(U,{size:13})})]})}function r({title:t,kind:a,count:o=4,caption:n,sent:i,sender:d,srcOffset:p=0}){return e.jsx(y,{title:t,subtitle:e.jsx(x,{sent:i,sender:d,kind:a,count:o,caption:n}),right:e.jsx(te,{kind:a,count:o-1,src:b[p%b.length]})})}function w({w:t,fill:a,transform:o}){const n=Math.round(t*80/64);return e.jsx("svg",{width:t,height:n,viewBox:"0 0 64 80",style:{position:"absolute",left:"50%",top:5,marginLeft:-t/2,transform:o,transformOrigin:"50% 100%"},children:e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H52C56.42 0 60 3.58 60 8V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:a,stroke:"var(--cometchat-border-color-default)",strokeWidth:"1"})})}function ae({type:t="pdf"}){return e.jsxs("div",{style:{position:"relative",width:46,height:46,flexShrink:0},children:[e.jsx(w,{w:26,fill:"var(--cometchat-background-color-03)",transform:"rotate(-11deg) translateX(-3px)"}),e.jsx(w,{w:26,fill:"var(--cometchat-background-color-02)",transform:"rotate(9deg) translateX(3px)"}),e.jsx("div",{style:{position:"absolute",left:"50%",top:3,transform:"translateX(-50%)"},children:e.jsx(q,{type:t,size:40})})]})}function s({title:t,count:a=12,caption:o,sent:n,sender:i,type:d="pdf",time:p}){return e.jsx(y,{left:e.jsx(ae,{type:d}),title:t,subtitle:e.jsx(x,{sent:n,sender:i,kind:"file",count:a,caption:o}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:p})})}function oe(){return e.jsx("div",{style:{width:44,height:44,borderRadius:"50%",flexShrink:0,background:"var(--cometchat-primary-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(U,{size:16})})}function c({title:t,caption:a,sent:o,sender:n,time:i}){return e.jsx(y,{left:e.jsx(oe,{}),title:t,subtitle:e.jsx(x,{sent:o,sender:n,kind:"audio",caption:a}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:i})})}const u={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(l,{active:"Photos",children:[e.jsx(r,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(r,{title:"Group 1",kind:"image",count:4,sent:!0,caption:"hello",srcOffset:1}),e.jsx(r,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",srcOffset:2}),e.jsx(r,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:3}),e.jsx(r,{title:"George Alan",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(r,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]})})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(l,{active:"Videos",children:[e.jsx(r,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(r,{title:"Group 1",kind:"video",count:4,sent:!0,caption:"the highlights 🎬",srcOffset:2}),e.jsx(r,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(r,{title:"Group 2",kind:"video",count:1,sender:"Pradeep",caption:"watch till the end",srcOffset:0}),e.jsx(r,{title:"George Alan",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(r,{title:"George Alan",kind:"video",count:1,sent:!0,srcOffset:2})]})})},v={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(l,{active:"Documents",children:[e.jsx(s,{title:"Group 1",count:12,sent:!0,type:"pdf",time:"4:30 PM"}),e.jsx(s,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",type:"doc",time:"4:30 PM"}),e.jsx(s,{title:"George Alan",count:12,sent:!0,type:"xls",time:"4:30 PM"}),e.jsx(s,{title:"Design Team",count:9,sent:!0,caption:"here are all the assets and the final export from yesterday's review session",type:"ppt",time:"4:30 PM"}),e.jsx(s,{title:"Marketing",count:4,sender:"Priya",caption:"campaign bundle",type:"zip",time:"4:30 PM"}),e.jsx(s,{title:"George Alan",count:2,sent:!0,caption:"release notes",type:"txt",time:"4:30 PM"}),e.jsx(s,{title:"Raj Dubey",count:1,sent:!0,type:"file",time:"4:30 PM"})]})})},g={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(l,{active:"Audio",children:[e.jsx(c,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"Group 1",sender:"Pradeep",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(c,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",sent:!0,time:"4:30 PM"})]})})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-5)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsxs(l,{active:"Photos",children:[e.jsx(r,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(r,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:2}),e.jsx(r,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]}),e.jsxs(l,{active:"Videos",children:[e.jsx(r,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(r,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(r,{title:"George Alan",kind:"video",count:1,sent:!0,caption:"watch till the end",srcOffset:2})]}),e.jsxs(l,{active:"Documents",children:[e.jsx(s,{title:"Group 1",count:12,sent:!0,type:"pdf",time:"4:30 PM"}),e.jsx(s,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",type:"doc",time:"4:30 PM"}),e.jsx(s,{title:"George Alan",count:12,sent:!0,type:"xls",time:"4:30 PM"})]}),e.jsxs(l,{active:"Audio",children:[e.jsx(c,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(c,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"})]})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx($,{composed:[{name:"SearchBar",desc:"Design-system search input at the top of the panel."},{name:"Filter chips",desc:"All / Photos / Videos / Audio / Documents — active chip fills with primary."},{name:"MediaRow / DocRow / AudioRow",desc:"Filter-specific result rows: right media thumb, fanned doc stack + count, play button + time."}],html:`<!-- Search panel with attachment filters -->
<div class="ma-search">
  <!-- SearchBar (Base Component) -->
  <div class="search-bar"><!-- … --></div>

  <div class="ma-search__chips">
    <button class="ma-chip ma-chip--active">Photos</button>
    <button class="ma-chip">Videos</button>
    <button class="ma-chip">Audio</button>
    <button class="ma-chip">Documents</button>
  </div>

  <!-- Photos/Videos result — text left, media thumb right (no read receipt) -->
  <div class="ma-result">
    <div class="ma-result__body">
      <p class="ma-result__title">George Alan</p>
      <p class="ma-result__preview"><span class="icon-rounded">image</span> 4 Photos · the set</p>
    </div>
    <div class="ma-result__thumb"><img src="1.jpg" alt="" /><span>+3</span></div>
  </div>

  <!-- Documents result — fanned stack icon; count folds into the caption -->
  <div class="ma-result">
    <div class="ma-doc-stack"><!-- first doc icon + fanned copies behind --></div>
    <div class="ma-result__body">
      <p class="ma-result__title">Group 1</p>
      <p class="ma-result__preview">the signed copy · 6 Files</p>
    </div>
  </div>
</div>`,css:`.ma-search__chips { display: flex; flex-wrap: wrap; gap: var(--cometchat-spacing-1-5); }
.ma-chip {
  height: 34px; padding: 0 var(--cometchat-spacing-4);
  border-radius: var(--cometchat-radius-max);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  font: var(--cometchat-font-body-medium);
}
.ma-chip--active {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}

.ma-result {
  display: flex; align-items: center; gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-1);
}
.ma-result__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-result__preview { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-secondary); }
.ma-result__thumb {
  width: 76px; height: 54px;
  border-radius: var(--cometchat-radius-2); overflow: hidden;
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-result__thumb span {
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
  font: var(--cometchat-font-caption2-semibold);
}`})};var P,j,k;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <ChatSearchPanel active="Photos">
        <MediaRow title="Group 1" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="Group 1" kind="image" count={4} sent caption="hello" srcOffset={1} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" srcOffset={2} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" caption="on the way!" srcOffset={3} />
        <MediaRow title="George Alan" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="George Alan" kind="image" count={1} sent caption="check this out 👀" srcOffset={1} />
      </ChatSearchPanel>
    </div>
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var G,M,S;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <ChatSearchPanel active="Videos">
        <MediaRow title="Group 1" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="Group 1" kind="video" count={4} sent caption="the highlights 🎬" srcOffset={2} />
        <MediaRow title="Group 2" kind="video" count={4} sender="Pradeep" srcOffset={3} />
        <MediaRow title="Group 2" kind="video" count={1} sender="Pradeep" caption="watch till the end" srcOffset={0} />
        <MediaRow title="George Alan" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="George Alan" kind="video" count={1} sent srcOffset={2} />
      </ChatSearchPanel>
    </div>
}`,...(S=(M=f.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var A,R,_;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      {/* One row per file-type icon we support: PDF, DOC, XLS, PPT, ZIP, TXT, generic. */}
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" />
        <DocRow title="Design Team" count={9} sent caption="here are all the assets and the final export from yesterday's review session" type="ppt" time="4:30 PM" />
        <DocRow title="Marketing" count={4} sender="Priya" caption="campaign bundle" type="zip" time="4:30 PM" />
        <DocRow title="George Alan" count={2} sent caption="release notes" type="txt" time="4:30 PM" />
        <DocRow title="Raj Dubey" count={1} sent type="file" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,D,C;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <ChatSearchPanel active="Audio">
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" time="4:30 PM" />
        <AudioRow title="George Alan" sent caption="Hello.mp3" time="4:30 PM" />
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" caption="voice note 🎙" time="4:30 PM" />
        <AudioRow title="George Alan" sent time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(C=(D=g.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var I,F,V,T,z;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-5)",
    padding: "var(--cometchat-spacing-6)",
    alignItems: "flex-start"
  }}>
      <ChatSearchPanel active="Photos">
        <MediaRow title="Group 1" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" caption="on the way!" srcOffset={2} />
        <MediaRow title="George Alan" kind="image" count={1} sent caption="check this out 👀" srcOffset={1} />
      </ChatSearchPanel>
      <ChatSearchPanel active="Videos">
        <MediaRow title="Group 1" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="Group 2" kind="video" count={4} sender="Pradeep" srcOffset={3} />
        <MediaRow title="George Alan" kind="video" count={1} sent caption="watch till the end" srcOffset={2} />
      </ChatSearchPanel>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" />
      </ChatSearchPanel>
      <ChatSearchPanel active="Audio">
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="George Alan" sent caption="Hello.mp3" time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" caption="voice note 🎙" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`All attachment-type filters side by side (excludes "All"). Each shows both an
 attachment-only preview and one with a caption.`,...(z=(T=h.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};var W,B,L,E,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "SearchBar",
    desc: "Design-system search input at the top of the panel."
  }, {
    name: "Filter chips",
    desc: "All / Photos / Videos / Audio / Documents — active chip fills with primary."
  }, {
    name: "MediaRow / DocRow / AudioRow",
    desc: "Filter-specific result rows: right media thumb, fanned doc stack + count, play button + time."
  }]} html={\`<!-- Search panel with attachment filters -->
<div class="ma-search">
  <!-- SearchBar (Base Component) -->
  <div class="search-bar"><!-- … --></div>

  <div class="ma-search__chips">
    <button class="ma-chip ma-chip--active">Photos</button>
    <button class="ma-chip">Videos</button>
    <button class="ma-chip">Audio</button>
    <button class="ma-chip">Documents</button>
  </div>

  <!-- Photos/Videos result — text left, media thumb right (no read receipt) -->
  <div class="ma-result">
    <div class="ma-result__body">
      <p class="ma-result__title">George Alan</p>
      <p class="ma-result__preview"><span class="icon-rounded">image</span> 4 Photos · the set</p>
    </div>
    <div class="ma-result__thumb"><img src="1.jpg" alt="" /><span>+3</span></div>
  </div>

  <!-- Documents result — fanned stack icon; count folds into the caption -->
  <div class="ma-result">
    <div class="ma-doc-stack"><!-- first doc icon + fanned copies behind --></div>
    <div class="ma-result__body">
      <p class="ma-result__title">Group 1</p>
      <p class="ma-result__preview">the signed copy · 6 Files</p>
    </div>
  </div>
</div>\`} css={\`.ma-search__chips { display: flex; flex-wrap: wrap; gap: var(--cometchat-spacing-1-5); }
.ma-chip {
  height: 34px; padding: 0 var(--cometchat-spacing-4);
  border-radius: var(--cometchat-radius-max);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  font: var(--cometchat-font-body-medium);
}
.ma-chip--active {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}

.ma-result {
  display: flex; align-items: center; gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-1);
}
.ma-result__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-result__preview { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-secondary); }
.ma-result__thumb {
  width: 76px; height: 54px;
  border-radius: var(--cometchat-radius-2); overflow: hidden;
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-result__thumb span {
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
  font: var(--cometchat-font-caption2-semibold);
}\`} />
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Usage — HTML structure + token CSS.",...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};const pe=["Photos","Videos","Documents","Audio","Overview","Usage"];export{g as Audio,v as Documents,h as Overview,u as Photos,m as Usage,f as Videos,pe as __namedExportsOrder,de as default};
