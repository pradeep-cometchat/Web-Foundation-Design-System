import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as a}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $={title:"Core Components/Chat Bubbles/Collaborative Whiteboard Bubble",tags:["autodocs"],parameters:{layout:"centered"}},d={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing collaborative whiteboard bubble with read receipt."}}},render:()=>e.jsx(g,{children:e.jsx(n,{variant:"sent",status:"read",time:"4:56 pm"})})},b={name:"Sent — Delivered",parameters:{docs:{description:{story:"Outgoing collaborative whiteboard bubble with delivered status."}}},render:()=>e.jsx(g,{children:e.jsx(n,{variant:"sent",status:"delivered",time:"4:56 pm"})})},p={name:"Sent — Sent",parameters:{docs:{description:{story:"Outgoing collaborative whiteboard bubble with sent status."}}},render:()=>e.jsx(g,{children:e.jsx(n,{variant:"sent",status:"sent",time:"4:56 pm"})})},h={name:"Received — Default",parameters:{docs:{description:{story:"Incoming collaborative whiteboard bubble."}}},render:()=>e.jsx(g,{children:e.jsx(n,{variant:"received",time:"4:56 pm"})})},m={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",width:340,padding:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(v,{children:e.jsx(a,{children:"Sent — Read"})}),e.jsx(n,{variant:"sent",status:"read",time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(v,{children:e.jsx(a,{children:"Received"})}),e.jsx(n,{variant:"received",time:"4:56 pm"})]})]})},u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(s,{title:"HTML Structure",children:e.jsx(N,{language:"HTML",code:`<!-- Sent Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">
      <img src="..." alt="Whiteboard preview" />
    </div>
    <div class="collab-wb-bubble__info">
      <span class="collab-wb-bubble__icon"><!-- SVG icon --></span>
      <div class="collab-wb-bubble__text">
        <span class="collab-wb-bubble__title">Collaborative Whiteboard</span>
        <span class="collab-wb-bubble__desc">Open whiteboard to draw together</span>
      </div>
    </div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">...</div>
    <div class="collab-wb-bubble__info">...</div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`})}),e.jsx(s,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — Default",description:"Purple background. White whiteboard icon, white title/description, white 'Open Whiteboard' button. Green read receipt."}),e.jsx(t,{title:"Sent — Delivered",description:"Same as default with double check in muted white indicating delivery."}),e.jsx(t,{title:"Sent — Sent",description:"Same as default with single check in muted white indicating sent."}),e.jsx(t,{title:"Received — Default",description:"Light gray background. Purple whiteboard icon, dark title, gray description, purple 'Open Whiteboard' button. No receipt."})]})}),e.jsx(s,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Preview Image",description:"Whiteboard preview with dotted grid background, text boxes with selection handles, and collaborative cursors (Sarah, Jason, Stephen)."}),e.jsx(t,{title:"Whiteboard Icon",description:"Custom SVG whiteboard icon (from ActionSheet). White on sent, purple on received."}),e.jsx(t,{title:"Title",description:"'Collaborative Whiteboard' — semibold, primary size."}),e.jsx(t,{title:"Description",description:"'Open whiteboard to draw together' in muted color."}),e.jsx(t,{title:"Separator",description:"Full-width 1px line dividing info from action."}),e.jsx(t,{title:"Action Button",description:"'Open Whiteboard' — semibold, centered. White on sent, purple on received."}),e.jsx(t,{title:"Timestamp + Receipt",description:"Bottom-right aligned. Time + read receipt (sent only)."})]})}),e.jsx(s,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Preview Background",description:"White with dotted grid pattern"}),e.jsx(t,{title:"Sent Separator",description:"rgba(255, 255, 255, 0.2) — Semi-transparent white"}),e.jsx(t,{title:"Received Separator",description:"rgba(0, 0, 0, 0.12) — Semi-transparent black"}),e.jsx(t,{title:"Action Text (Sent)",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Action Text (Received)",description:"var(--cometchat-icon-color-highlight) — Purple"})]})}),e.jsx(s,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Web Desktop — Chat UI Kits → Collaborative Whiteboard section (node 4104:453092)"})})]})};function n({variant:i,status:r,time:c}){const o=i==="sent";return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${i}`,children:e.jsxs("div",{className:"chat-bubble-body",style:{padding:0,overflow:"hidden",minWidth:260},children:[e.jsx("div",{style:{margin:"var(--cometchat-spacing-2)",marginBottom:0,borderRadius:"var(--cometchat-radius-2)",overflow:"hidden",background:"var(--cometchat-static-white)",aspectRatio:"4 / 3",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(G,{})}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-3) var(--cometchat-spacing-2)"},children:[e.jsx("span",{style:{flexShrink:0,color:o?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",display:"flex"},children:e.jsx(F,{})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,minWidth:0},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:o?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)"},children:e.jsx(a,{children:"Collaborative Whiteboard"})}),e.jsx("span",{style:{fontSize:"12px",fontFamily:"var(--cometchat-font-family)",lineHeight:"18px",color:o?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(a,{children:"Open whiteboard to draw together"})})]})]}),e.jsx("div",{style:{height:1,background:o?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.12)"}}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",color:o?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:e.jsx(a,{children:"Open Whiteboard"})})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",padding:"0 var(--cometchat-spacing-3) var(--cometchat-spacing-2)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:e.jsx(a,{children:c})}),o&&r&&e.jsx(M,{status:r})]})]})})}function F(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20.16 15.84",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M17.4679 0H18.24C19.135 0 19.887 0.612421 20.0998 1.44108L14.6916 6.84924C14.6549 6.88596 14.6073 6.90978 14.5559 6.91712L12.576 7.19996C12.4176 7.22259 12.2818 7.08683 12.3044 6.92843L12.5873 4.94854C12.5946 4.89713 12.6184 4.84949 12.6552 4.81277L17.4679 0Z",fill:"currentColor"}),e.jsx("path",{d:"M15.3466 0L11.5945 3.75211C11.3283 4.01833 11.1556 4.3637 11.1024 4.7364L10.8195 6.7163C10.6555 7.86464 11.6397 8.84894 12.7881 8.68489L14.768 8.40205C15.1407 8.3488 15.4861 8.17611 15.7523 7.9099L20.16 3.50218V13.92C20.16 14.9804 19.3004 15.84 18.24 15.84H1.92C0.859616 15.84 0 14.9804 0 13.92V10.03C0.138008 10.0301 0.277687 9.99222 0.402751 9.91263L0.586065 9.79595C1.58623 9.15927 3.7211 7.80027 4.3322 7.45107C4.43421 7.39278 4.63006 7.32443 4.87351 7.29801C5.11445 7.27186 5.33773 7.29385 5.5019 7.35405C5.65327 7.40955 5.73091 7.48567 5.77426 7.58151C5.82369 7.69078 5.8772 7.93568 5.75398 8.4121C5.51412 9.33959 5.26658 10.4095 5.33946 11.3038C5.37704 11.765 5.50392 12.2502 5.82249 12.6542C6.15314 13.0735 6.62627 13.3246 7.19678 13.4197C8.33384 13.6092 9.37679 12.938 10.107 12.3036C10.8753 11.6361 11.5146 10.8173 11.8801 10.3299C12.1286 9.99852 12.0615 9.52842 11.7301 9.27989C11.3987 9.03136 10.9286 9.09852 10.6801 9.42989C10.3256 9.90251 9.76491 10.6137 9.12321 11.1712C8.4434 11.7619 7.86635 12.0106 7.4434 11.9401C7.17392 11.8952 7.06101 11.8023 7.00036 11.7254C6.92763 11.6332 6.85796 11.4699 6.8345 11.182C6.78531 10.5784 6.95777 9.74828 7.2062 8.78768C7.38299 8.1041 7.37649 7.48399 7.14093 6.96326C6.89928 6.42911 6.46692 6.11023 6.01829 5.94573C5.58246 5.78593 5.11574 5.76292 4.71167 5.80677C4.31013 5.85035 3.90598 5.967 3.58799 6.14871C2.98422 6.49372 1.05774 7.71764 0 8.39088V1.92C0 0.859613 0.859613 0 1.92 0H15.3466Z",fill:"currentColor"})]})}function M({status:i}){const c=i==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return i==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function G(){return e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 280 210",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"280",height:"210",fill:"#fafafa"}),e.jsx("pattern",{id:"dots",x:"0",y:"0",width:"12",height:"12",patternUnits:"userSpaceOnUse",children:e.jsx("circle",{cx:"1",cy:"1",r:"0.6",fill:"#ddd"})}),e.jsx("rect",{width:"280",height:"210",fill:"url(#dots)"}),e.jsx("rect",{x:"50",y:"50",width:"160",height:"50",fill:"#f0f0f0",stroke:"#888",strokeWidth:"1"}),e.jsx("rect",{x:"46",y:"46",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"126",y:"46",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"206",y:"46",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"46",y:"71",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"206",y:"71",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"46",y:"96",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"126",y:"96",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"206",y:"96",width:"8",height:"8",fill:"#666"}),e.jsx("text",{x:"75",y:"82",fontSize:"18",fontWeight:"500",fill:"#333",children:e.jsx(a,{children:"Collaborative"})}),e.jsx("rect",{x:"90",y:"120",width:"140",height:"50",fill:"#f0f0f0",stroke:"#888",strokeWidth:"1"}),e.jsx("rect",{x:"86",y:"116",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"156",y:"116",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"226",y:"116",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"86",y:"141",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"226",y:"141",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"86",y:"166",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"156",y:"166",width:"8",height:"8",fill:"#666"}),e.jsx("rect",{x:"226",y:"166",width:"8",height:"8",fill:"#666"}),e.jsx("text",{x:"115",y:"152",fontSize:"18",fontWeight:"500",fill:"#333",children:e.jsx(a,{children:"Whiteboard"})}),e.jsx("polygon",{points:"175,35 178,47 182,43",fill:"#f87171"}),e.jsx("rect",{x:"170",y:"22",width:"40",height:"16",rx:"4",fill:"#fecaca"}),e.jsx("text",{x:"178",y:"33",fontSize:"8",fill:"#dc2626",fontWeight:"500",children:e.jsx(a,{children:"Sarah"})}),e.jsx("polygon",{points:"42",y:"110",fill:"#34d399"}),e.jsx("polygon",{points:"42,110 45,122 49,118",fill:"#34d399"}),e.jsx("rect",{x:"35",y:"120",width:"38",height:"16",rx:"4",fill:"#d1fae5"}),e.jsx("text",{x:"42",y:"131",fontSize:"8",fill:"#059669",fontWeight:"500",children:e.jsx(a,{children:"Jason"})}),e.jsx("polygon",{points:"220,155 223,167 227,163",fill:"#a78bfa"}),e.jsx("rect",{x:"215",y:"165",width:"50",height:"16",rx:"4",fill:"#ede9fe"}),e.jsx("text",{x:"222",y:"176",fontSize:"8",fill:"#7c3aed",fontWeight:"500",children:e.jsx(a,{children:"Stephen"})})]})}function g({children:i,width:r=340}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:i})}function v({children:i}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:i})}function s({title:i,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(a,{children:i})}),r]})}function N({language:i,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function t({title:i,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(a,{children:i})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(a,{children:r})})]})}const l={parameters:{docs:{disable:!0}}};var x,f,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Sent — Default",
  parameters: {
    docs: {
      description: {
        story: "Outgoing collaborative whiteboard bubble with read receipt."
      }
    }
  },
  render: () => <Wrapper>
      <WhiteboardBubble variant="sent" status="read" time="4:56 pm" />
    </Wrapper>
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,j,S;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  parameters: {
    docs: {
      description: {
        story: "Outgoing collaborative whiteboard bubble with delivered status."
      }
    }
  },
  render: () => <Wrapper>
      <WhiteboardBubble variant="sent" status="delivered" time="4:56 pm" />
    </Wrapper>
}`,...(S=(j=b.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,W,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sent — Sent",
  parameters: {
    docs: {
      description: {
        story: "Outgoing collaborative whiteboard bubble with sent status."
      }
    }
  },
  render: () => <Wrapper>
      <WhiteboardBubble variant="sent" status="sent" time="4:56 pm" />
    </Wrapper>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var k,B,L;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Received — Default",
  parameters: {
    docs: {
      description: {
        story: "Incoming collaborative whiteboard bubble."
      }
    }
  },
  render: () => <Wrapper>
      <WhiteboardBubble variant="received" time="4:56 pm" />
    </Wrapper>
}`,...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,R,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)",
    width: 340,
    padding: "var(--cometchat-spacing-4)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sent — Read</T></Label>
        <WhiteboardBubble variant="sent" status="read" time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received</T></Label>
        <WhiteboardBubble variant="received" time="4:56 pm" />
      </div>
    </div>
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var O,U,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Sent Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">
      <img src="..." alt="Whiteboard preview" />
    </div>
    <div class="collab-wb-bubble__info">
      <span class="collab-wb-bubble__icon"><!-- SVG icon --></span>
      <div class="collab-wb-bubble__text">
        <span class="collab-wb-bubble__title">Collaborative Whiteboard</span>
        <span class="collab-wb-bubble__desc">Open whiteboard to draw together</span>
      </div>
    </div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">...</div>
    <div class="collab-wb-bubble__info">...</div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent — Default" description="Purple background. White whiteboard icon, white title/description, white 'Open Whiteboard' button. Green read receipt." />
          <StateCard title="Sent — Delivered" description="Same as default with double check in muted white indicating delivery." />
          <StateCard title="Sent — Sent" description="Same as default with single check in muted white indicating sent." />
          <StateCard title="Received — Default" description="Light gray background. Purple whiteboard icon, dark title, gray description, purple 'Open Whiteboard' button. No receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Preview Image" description="Whiteboard preview with dotted grid background, text boxes with selection handles, and collaborative cursors (Sarah, Jason, Stephen)." />
          <StateCard title="Whiteboard Icon" description="Custom SVG whiteboard icon (from ActionSheet). White on sent, purple on received." />
          <StateCard title="Title" description="'Collaborative Whiteboard' — semibold, primary size." />
          <StateCard title="Description" description="'Open whiteboard to draw together' in muted color." />
          <StateCard title="Separator" description="Full-width 1px line dividing info from action." />
          <StateCard title="Action Button" description="'Open Whiteboard' — semibold, centered. White on sent, purple on received." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned. Time + read receipt (sent only)." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Preview Background" description="White with dotted grid pattern" />
          <StateCard title="Sent Separator" description="rgba(255, 255, 255, 0.2) — Semi-transparent white" />
          <StateCard title="Received Separator" description="rgba(0, 0, 0, 0.12) — Semi-transparent black" />
          <StateCard title="Action Text (Sent)" description="var(--cometchat-static-white)" />
          <StateCard title="Action Text (Received)" description="var(--cometchat-icon-color-highlight) — Purple" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Collaborative Whiteboard section (node 4104:453092)" />
      </UsageSection>
    </div>
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var A,I,P,V,H;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Interactive playground.",...(H=(V=l.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};const q=["SentDefault","SentDelivered","SentSent","ReceivedDefault","AllVariants","Usage","Playground"];export{m as AllVariants,l as Playground,h as ReceivedDefault,d as SentDefault,b as SentDelivered,p as SentSent,u as Usage,q as __namedExportsOrder,$ as default};
