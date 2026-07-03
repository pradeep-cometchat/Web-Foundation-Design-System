import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as y,F as Z}from"./_shared-l0Q3ErMB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const oe={title:"Core Components/Message Composer/Multi Attachments/In Search",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Search.** The global chat search, filtered by
attachment type. Each filter renders its results differently:

- **Photos / Videos** — a media thumbnail with a "+N" count on the right.
- **Documents** — the first document's icon with a stack behind it, plus time.
  With a caption the count is appended after it — "the signed copy · 6 Files".
- **Audio** — a play button on the left, plus time.

The **All** filter is intentionally not shown here — it falls back to the
normal conversation list; these views are the attachment-type filters.`}}}},B=["All","Unread","Groups","Photos","Videos","Audio","Documents","Gifs","Links"],z=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 12 12",fill:"none",style:{marginLeft:t*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),_={image:"image",video:"videocam",file:"description",audio:"mic"};function N(t,o){if(t==="audio")return"Audio";if(t==="text")return"";const r={image:["Photo","Images"],video:["Video","Videos"],file:["Document","Files"]},[i,s]=r[t];return o>1?`${o} ${s}`:i}function g({sent:t,sender:o,kind:r,count:i=1,caption:s}){const d=N(r,i),p=t?"You":o,T=!!s&&r==="file"&&i>1,E=s??d,H={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0};return e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5,minWidth:0,fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:[p&&e.jsxs("span",{style:{flexShrink:0},children:[p,":"]}),r!=="text"&&e.jsx("span",{className:"icon-rounded",style:{fontSize:16,color:"var(--cometchat-icon-color-secondary)","--icon-fill":0,flexShrink:0},children:_[r]}),e.jsx("span",{style:H,children:E}),T&&e.jsxs("span",{style:{flexShrink:0},children:[" · ",d]})]})}function X(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,height:44,padding:"0 16px",borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-background-color-02)",border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{color:"var(--cometchat-icon-color-secondary)",flexShrink:0},children:e.jsx("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"currentColor"})}),e.jsx("span",{style:{fontSize:15,color:"var(--cometchat-text-color-placeholder)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:"Search"})]})}function Y({active:t}){return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:B.map(o=>{const r=o===t;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:32,padding:"0 12px",borderRadius:"var(--cometchat-radius-max)",border:r?"1px solid var(--cometchat-primary-color)":"1px solid var(--cometchat-border-color-default)",background:r?"var(--cometchat-primary-color)":"var(--cometchat-background-color-01)",color:r?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",fontSize:13,fontWeight:500,whiteSpace:"nowrap"},children:o},o)})})}function l({active:t,children:o}){return e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:12,padding:16,background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("span",{style:{fontSize:13,color:"var(--cometchat-text-color-secondary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"},children:"Chats"}),e.jsx(X,{}),e.jsx(Y,{active:t}),e.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--cometchat-text-color-secondary)",marginTop:4},children:"March 2026"}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:o})]})}function v({left:t,title:o,subtitle:r,right:i}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 2px"},children:[t,e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:3},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o}),r]}),i]})}function $({kind:t,count:o,src:r}){return e.jsxs("div",{style:{position:"relative",width:76,height:54,borderRadius:8,overflow:"hidden",flexShrink:0,border:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx("img",{src:r,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:t==="video"?"brightness(0.8)":void 0}}),t==="video"&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:22,height:22,borderRadius:"50%",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(z,{size:9})}),o>0&&e.jsxs("div",{style:{position:"absolute",right:4,bottom:4,padding:"0 6px",height:16,borderRadius:8,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,display:"flex",alignItems:"center"},children:["+",o]})]})}function n({title:t,kind:o,count:r=4,caption:i,sent:s,sender:d,srcOffset:p=0}){return e.jsx(v,{title:t,subtitle:e.jsx(g,{sent:s,sender:d,kind:o,count:r,caption:i}),right:e.jsx($,{kind:o,count:r-1,src:y[p%y.length]})})}function j({w:t,fill:o,fold:r,transform:i}){const s=Math.round(t*80/64);return e.jsxs("svg",{width:t,height:s,viewBox:"0 0 64 80",style:{position:"absolute",left:"50%",top:5,marginLeft:-t/2,transform:i,transformOrigin:"50% 100%"},children:[e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:o,stroke:"var(--cometchat-border-color-default)",strokeWidth:"1"}),e.jsx("path",{d:"M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z",fill:r})]})}function U({type:t="pdf"}){return e.jsxs("div",{style:{position:"relative",width:46,height:46,flexShrink:0},children:[e.jsx(j,{w:26,fill:"var(--cometchat-background-color-03)",fold:"var(--cometchat-border-color-default)",transform:"rotate(-11deg) translateX(-3px)"}),e.jsx(j,{w:26,fill:"var(--cometchat-background-color-02)",fold:"var(--cometchat-border-color-dark)",transform:"rotate(9deg) translateX(3px)"}),e.jsx("div",{style:{position:"absolute",left:"50%",top:2,transform:"translateX(-50%)",filter:"drop-shadow(0 1px 2px rgba(16,24,40,0.12))"},children:e.jsx(Z,{type:t,size:34})})]})}function c({title:t,count:o=12,caption:r,sent:i,sender:s,type:d="pdf",time:p}){return e.jsx(v,{left:e.jsx(U,{type:d}),title:t,subtitle:e.jsx(g,{sent:i,sender:s,kind:"file",count:o,caption:r}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:p})})}function q(){return e.jsx("div",{style:{width:44,height:44,borderRadius:"50%",flexShrink:0,background:"var(--cometchat-primary-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(z,{size:16})})}function a({title:t,caption:o,sent:r,sender:i,time:s}){return e.jsx(v,{left:e.jsx(q,{}),title:t,subtitle:e.jsx(g,{sent:r,sender:i,kind:"audio",caption:o}),right:e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)",flexShrink:0},children:s})})}const u={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(l,{active:"Photos",children:[e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,caption:"hello",srcOffset:1}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",srcOffset:2}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:3}),e.jsx(n,{title:"George Alan",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]})})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(l,{active:"Videos",children:[e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,caption:"the highlights 🎬",srcOffset:2}),e.jsx(n,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(n,{title:"Group 2",kind:"video",count:1,sender:"Pradeep",caption:"watch till the end",srcOffset:0}),e.jsx(n,{title:"George Alan",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"George Alan",kind:"video",count:1,sent:!0,srcOffset:2})]})})},m={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(l,{active:"Documents",children:[e.jsx(c,{title:"Group 1",count:12,sent:!0,type:"pdf",time:"4:30 PM"}),e.jsx(c,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",type:"doc",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:12,sent:!0,type:"xls",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:3,sent:!0,caption:"final drafts",type:"pdf",time:"4:30 PM"}),e.jsx(c,{title:"Design Team",count:9,sent:!0,caption:"here are all the assets and the final export from yesterday's review session",type:"ppt",time:"4:30 PM"})]})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(l,{active:"Audio",children:[e.jsx(a,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(a,{title:"Group 1",sender:"Pradeep",time:"4:30 PM"}),e.jsx(a,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(a,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(a,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"}),e.jsx(a,{title:"George Alan",sent:!0,time:"4:30 PM"})]})})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,padding:24,alignItems:"flex-start"},children:[e.jsxs(l,{active:"Photos",children:[e.jsx(n,{title:"Group 1",kind:"image",count:4,sent:!0,srcOffset:0}),e.jsx(n,{title:"Group 2",kind:"image",count:4,sender:"Pradeep",caption:"on the way!",srcOffset:2}),e.jsx(n,{title:"George Alan",kind:"image",count:1,sent:!0,caption:"check this out 👀",srcOffset:1})]}),e.jsxs(l,{active:"Videos",children:[e.jsx(n,{title:"Group 1",kind:"video",count:4,sent:!0,srcOffset:1}),e.jsx(n,{title:"Group 2",kind:"video",count:4,sender:"Pradeep",srcOffset:3}),e.jsx(n,{title:"George Alan",kind:"video",count:1,sent:!0,caption:"watch till the end",srcOffset:2})]}),e.jsxs(l,{active:"Documents",children:[e.jsx(c,{title:"Group 1",count:12,sent:!0,type:"pdf",time:"4:30 PM"}),e.jsx(c,{title:"Group 1",count:6,sender:"Pradeep",caption:"the signed copy",type:"doc",time:"4:30 PM"}),e.jsx(c,{title:"George Alan",count:12,sent:!0,type:"xls",time:"4:30 PM"})]}),e.jsxs(l,{active:"Audio",children:[e.jsx(a,{title:"Group 1",sent:!0,time:"4:30 PM"}),e.jsx(a,{title:"George Alan",sent:!0,caption:"Hello.mp3",time:"4:30 PM"}),e.jsx(a,{title:"Group 1",sender:"Pradeep",caption:"voice note 🎙",time:"4:30 PM"})]})]})};var w,P,G;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(G=(P=u.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var M,b,k;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(k=(b=f.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,A,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" />
        <DocRow title="George Alan" count={3} sent caption="final drafts" type="pdf" time="4:30 PM" />
        <DocRow title="Design Team" count={9} sent caption="here are all the assets and the final export from yesterday's review session" type="ppt" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,C,D;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(D=(C=x.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,L,V,F,W;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    padding: 24,
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
}`,...(V=(L=h.parameters)==null?void 0:L.docs)==null?void 0:V.source},description:{story:`All attachment-type filters side by side (excludes "All"). Each shows both an
 attachment-only preview and one with a caption.`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};const re=["Photos","Videos","Documents","Audio","Overview"];export{x as Audio,m as Documents,h as Overview,u as Photos,f as Videos,re as __namedExportsOrder,oe as default};
