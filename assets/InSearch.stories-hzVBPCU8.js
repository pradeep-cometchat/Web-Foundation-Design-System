import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i,c as q}from"./T-C6nayWAE.js";import{U as J,a as w,l as K,m as Q,t as j}from"./_shared-CyTdT-MQ.js";import{S as ee}from"./SearchBar-DjvCsfWl.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const fe={title:"Core Components/Message Composer/Multi Attachments/In Search",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Search.** The global chat search, filtered by
attachment type. Each filter renders its results differently:

- **Photos / Videos** — a media thumbnail with a "+N" count on the right.
- **Documents** — the first document's icon with a stack behind it, plus time.
  With a caption the count is appended after it — "the signed copy · 6 Files".
- **Audio** — a play button on the left, plus time.

The **All** filter is intentionally not shown here — it falls back to the
normal conversation list; these views are the attachment-type filters.`}}}},te=["All","Unread","Groups","Photos","Videos","Audio","Documents","Gifs","Links"],X=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 12 12",fill:"none",style:{marginInlineStart:t*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),ae={image:"image",video:"videocam",file:"description",audio:"mic"};function oe(t,a){if(t==="audio")return"Audio";if(t==="text")return"";const o={image:["Photo","Images"],video:["Video","Videos"],file:["Document","Files"]},[r,s]=o[t];return a>1?Q(`${a} ${j(s)}`):j(r)}function y({sent:t,sender:a,kind:o,count:r=1,caption:s}){q();const p=oe(o,r),u=t?"You":a,$=!!s&&o==="file"&&r>1,Y=s??p,Z={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0};return e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5,minWidth:0,fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:[u&&e.jsxs("span",{style:{flexShrink:0},children:[e.jsx(i,{children:u}),":"]}),o!=="text"&&e.jsx("span",{className:"icon-rounded",style:{fontSize:16,color:"var(--cometchat-icon-color-secondary)","--icon-fill":0,flexShrink:0},children:ae[o]}),e.jsx("span",{style:Z,children:e.jsx(i,{children:Y})}),$&&e.jsxs("span",{style:{flexShrink:0},children:[" · ",e.jsx(i,{children:p})]})]})}function ne({active:t}){return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:te.map(a=>{const o=a===t;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:32,padding:"0 var(--cometchat-spacing-3)",borderRadius:"var(--cometchat-radius-max)",border:o?"1px solid var(--cometchat-primary-color)":"1px solid var(--cometchat-border-color-default)",background:o?"var(--cometchat-primary-color)":"var(--cometchat-background-color-01)",color:o?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",fontSize:13,fontWeight:500,whiteSpace:"nowrap"},children:e.jsx(i,{children:a})},a)})})}function d({active:t,children:a}){return e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("span",{style:{fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:e.jsx(i,{children:"Chats"})}),e.jsx(ee,{placeholder:"Search"}),e.jsx(ne,{active:t}),e.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--cometchat-text-color-secondary)",marginTop:4},children:e.jsx(i,{children:"March 2026"})}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:a})]})}function b({left:t,title:a,subtitle:o,right:r}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-2-5) 2px"},children:[t,e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:3},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.jsx(i,{children:a})}),e.jsx(i,{children:o})]}),r]})}function re({kind:t,count:a,src:o}){return e.jsxs("div",{style:{position:"relative",width:76,height:54,borderRadius:"var(--cometchat-radius-2)",overflow:"hidden",flexShrink:0,border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:t==="video"?"brightness(0.8)":void 0}}),a>0?e.jsx("div",{style:{position:"absolute",inset:0,background:"color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",color:"var(--cometchat-static-white)",fontSize:15,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(i,{children:`+${a}`})}):t==="video"&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:30,height:30,borderRadius:"50%",background:"color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(X,{size:13})})]})}function n({title:t,kind:a,count:o=4,caption:r,sent:s,sender:p,srcOffset:u=0}){return e.jsx(b,{title:t,subtitle:e.jsx(y,{sent:s,sender:p,kind:a,count:o,caption:r}),right:e.jsx(re,{kind:a,count:o-1,src:w[u%w.length]})})}function P({w:t,fill:a,transform:o}){const r=Math.round(t*80/64);return e.jsx("svg",{width:t,height:r,viewBox:"0 0 64 80",style:{position:"absolute",left:"50%",top:5,marginInlineStart:-t/2,transform:o,transformOrigin:"50% 100%"},children:e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H52C56.42 0 60 3.58 60 8V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:a,stroke:"var(--cometchat-border-color-default)",strokeWidth:"1"})})}function ie(){return e.jsxs("div",{style:{position:"relative",width:46,height:46,flexShrink:0},children:[e.jsx(P,{w:26,fill:"var(--cometchat-background-color-03)",transform:"rotate(-11deg) translateX(-3px)"}),e.jsx(P,{w:26,fill:"var(--cometchat-background-color-02)",transform:"rotate(9deg) translateX(3px)"}),e.jsx("div",{style:{position:"absolute",left:"50%",top:3,transform:"translateX(-50%)"},children:e.jsx(K,{size:40})})]})}function c({title:t,count:a=12,caption:o,sent:r,sender:s,time:p}){return e.jsx(b,{left:e.jsx(ie,{}),title:t,subtitle:e.jsx(y,{sent:r,sender:s,kind:"file",count:a,caption:o}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:e.jsx(i,{children:p})})})}function se(){return e.jsx("div",{style:{width:44,height:44,borderRadius:"50%",flexShrink:0,background:"var(--cometchat-primary-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(X,{size:16})})}function l({title:t,caption:a,sent:o,sender:r,time:s}){return e.jsx(b,{left:e.jsx(se,{}),title:t,subtitle:e.jsx(y,{sent:o,sender:r,kind:"audio",caption:a}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:e.jsx(i,{children:s})})})}const f={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(d,{active:"Photos",children:[e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,caption:"hello",srcOffset:1}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",srcOffset:2}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:3}),e.jsx(n,{title:"George Alan",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]})})},v={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(d,{active:"Videos",children:[e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,caption:"the highlights 🎬",srcOffset:2}),e.jsx(n,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(n,{title:"Group 2",kind:"video",count:1,sender:"Pradeep",caption:"watch till the end",srcOffset:0}),e.jsx(n,{title:"George Alan",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"George Alan",kind:"video",count:1,sent:!0,srcOffset:2})]})})},g={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(d,{active:"Documents",children:[e.jsx(c,{title:"Group 1",count:12,sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:12,sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"Design Team",count:9,sent:!0,caption:"here are all the assets and the final export from yesterday's review session",time:"4:30 PM"}),e.jsx(c,{title:"Marketing",count:4,sender:"Priya",caption:"campaign bundle",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:2,sent:!0,caption:"release notes",time:"4:30 PM"}),e.jsx(c,{title:"Raj Dubey",count:1,sent:!0,time:"4:30 PM"})]})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(d,{active:"Audio",children:[e.jsx(l,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(l,{title:"Group 1",sender:"Pradeep",time:"4:30 PM"}),e.jsx(l,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(l,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(l,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"}),e.jsx(l,{title:"George Alan",sent:!0,time:"4:30 PM"})]})})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-5)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsxs(d,{active:"Photos",children:[e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:2}),e.jsx(n,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]}),e.jsxs(d,{active:"Videos",children:[e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(n,{title:"George Alan",kind:"video",count:1,sent:!0,caption:"watch till the end",srcOffset:2})]}),e.jsxs(d,{active:"Documents",children:[e.jsx(c,{title:"Group 1",count:12,sent:!0,time:"4:30 PM"}),e.jsx(c,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:12,sent:!0,time:"4:30 PM"})]}),e.jsxs(d,{active:"Audio",children:[e.jsx(l,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(l,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(l,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"})]})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(J,{composed:[{name:"SearchBar",desc:"Design-system search input at the top of the panel."},{name:"Filter chips",desc:"All / Photos / Videos / Audio / Documents — active chip fills with primary."},{name:"MediaRow / DocRow / AudioRow",desc:"Filter-specific result rows: right media thumb, fanned doc stack + count, play button + time."}],html:`<!-- Search panel with attachment filters -->
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
</div>`,css:`
        .ma-search__chips {
          display: flex;
          flex-wrap: wrap;
          gap: var(--cometchat-spacing-1-5);
        }
        .ma-chip {
          height: 34px;
          padding: 0 var(--cometchat-spacing-4);
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
          display: flex;
          align-items: center;
          gap: var(--cometchat-spacing-3);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-1);
        }
        .ma-result__title {
          font: var(--cometchat-font-body-semibold);
          color: var(--cometchat-text-color-primary);
        }
        .ma-result__preview {
          font: var(--cometchat-font-caption1-regular);
          color: var(--cometchat-text-color-secondary);
        }
        .ma-result__thumb {
          width: 76px;
          height: 54px;
          border-radius: var(--cometchat-radius-2);
          overflow: hidden;
          border: 1px solid var(--cometchat-border-color-default);
        }
        .ma-result__thumb span {
          background: color-mix(
            in srgb,
            var(--cometchat-static-black) 60%,
            transparent
          );
          color: var(--cometchat-static-white);
          font: var(--cometchat-font-caption2-semibold);
        }
      `})};var k,G,M;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(G=f.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var S,A,R;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,D,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent time="4:30 PM" />
        <DocRow title="Design Team" count={9} sent caption="here are all the assets and the final export from yesterday's review session" time="4:30 PM" />
        <DocRow title="Marketing" count={4} sender="Priya" caption="campaign bundle" time="4:30 PM" />
        <DocRow title="George Alan" count={2} sent caption="release notes" time="4:30 PM" />
        <DocRow title="Raj Dubey" count={1} sent time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var C,I,V;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(I=x.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var F,W,z,T,B;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <DocRow title="Group 1" count={12} sent time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent time="4:30 PM" />
      </ChatSearchPanel>
      <ChatSearchPanel active="Audio">
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="George Alan" sent caption="Hello.mp3" time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" caption="voice note 🎙" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:`All attachment-type filters side by side (excludes "All"). Each shows both an
 attachment-only preview and one with a caption.`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var E,H,U,L,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
</div>\`} css={\`
        .ma-search__chips {
          display: flex;
          flex-wrap: wrap;
          gap: var(--cometchat-spacing-1-5);
        }
        .ma-chip {
          height: 34px;
          padding: 0 var(--cometchat-spacing-4);
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
          display: flex;
          align-items: center;
          gap: var(--cometchat-spacing-3);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-1);
        }
        .ma-result__title {
          font: var(--cometchat-font-body-semibold);
          color: var(--cometchat-text-color-primary);
        }
        .ma-result__preview {
          font: var(--cometchat-font-caption1-regular);
          color: var(--cometchat-text-color-secondary);
        }
        .ma-result__thumb {
          width: 76px;
          height: 54px;
          border-radius: var(--cometchat-radius-2);
          overflow: hidden;
          border: 1px solid var(--cometchat-border-color-default);
        }
        .ma-result__thumb span {
          background: color-mix(
            in srgb,
            var(--cometchat-static-black) 60%,
            transparent
          );
          color: var(--cometchat-static-white);
          font: var(--cometchat-font-caption2-semibold);
        }
      \`} />
}`,...(U=(H=m.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"Usage — HTML structure + token CSS.",...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};const ve=["Photos","Videos","Documents","Audio","Overview","Usage"];export{x as Audio,g as Documents,h as Overview,f as Photos,m as Usage,v as Videos,ve as __namedExportsOrder,fe as default};
