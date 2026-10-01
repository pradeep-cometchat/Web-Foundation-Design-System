import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as c}from"./T-B-X7QtOX.js";/* empty css                    */import{a as Y}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ce={title:"Core Components/Chat Bubbles/Sticker Bubble",tags:["autodocs"],parameters:{layout:"centered"}},i=Y["Sticker Footage"].map(t=>t.imageUrl),p={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing sticker bubble with read receipt."}}},render:()=>e.jsx(S,{children:e.jsx(n,{variant:"sent",status:"read",stickerUrl:i[0],time:"4:56 pm"})})},m={name:"Sent — Delivered",render:()=>e.jsx(S,{children:e.jsx(n,{variant:"sent",status:"delivered",stickerUrl:i[1],time:"4:56 pm"})})},u={name:"Sent — Sent",render:()=>e.jsx(S,{children:e.jsx(n,{variant:"sent",status:"sent",stickerUrl:i[2],time:"4:56 pm"})})},b={name:"Received — Default",parameters:{docs:{description:{story:"Incoming sticker bubble."}}},render:()=>e.jsx(S,{children:e.jsx(n,{variant:"received",stickerUrl:i[0],time:"4:56 pm"})})},v={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Sent — Read"})}),e.jsx(n,{variant:"sent",status:"read",stickerUrl:i[0],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Sent — Delivered"})}),e.jsx(n,{variant:"sent",status:"delivered",stickerUrl:i[1],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Sent — Sent"})}),e.jsx(n,{variant:"sent",status:"sent",stickerUrl:i[2],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Received"})}),e.jsx(n,{variant:"received",stickerUrl:i[0],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Received (Sticker 2)"})}),e.jsx(n,{variant:"received",stickerUrl:i[1],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(c,{children:"Received (Sticker 3)"})}),e.jsx(n,{variant:"received",stickerUrl:i[2],time:"4:56 pm"})]})]})},g={name:"All Stickers (Sent)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)"},children:i.map((t,r)=>e.jsx(n,{variant:"sent",status:"read",stickerUrl:t,time:"4:56 pm"},r))})},h={name:"All Stickers (Received)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)"},children:i.map((t,r)=>e.jsx(n,{variant:"received",stickerUrl:t,time:"4:56 pm"},r))})},x={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(l,{title:"HTML Structure",children:e.jsx($,{language:"HTML",code:`<!-- Sent Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--sent">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
    <span class="sticker-bubble__receipt">✓✓</span>
  </div>
</div>

<!-- Received Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--received">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
  </div>
</div>`})}),e.jsx(l,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent — Read",description:"Purple background bubble with sticker image centered. Green read receipt + timestamp at bottom-right."}),e.jsx(a,{title:"Sent — Delivered",description:"Same with muted white double-check."}),e.jsx(a,{title:"Sent — Sent",description:"Same with muted white single-check."}),e.jsx(a,{title:"Received — Default",description:"Gray background bubble with sticker image centered. Timestamp only, no receipt."})]})}),e.jsx(l,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Bubble Background",description:"Rounded container (var(--cometchat-radius-3)) with sent/received background color."}),e.jsx(a,{title:"Sticker Image",description:"PNG with transparent background, rendered at 160×160 centered in the bubble."}),e.jsx(a,{title:"Timestamp + Receipt",description:"Bottom-right aligned below the sticker. Same pattern as other bubbles."})]})}),e.jsx(l,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Sticker Size",description:"160×160px in chat bubble context"}),e.jsx(a,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform corners"}),e.jsx(a,{title:"Source",description:"avatarRegistry['Sticker Footage'] from foundation/tokens/avatars.ts"})]})}),e.jsx(l,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Web Desktop — Chat UI Kits → Sticker Bubble (node 4080:303913)"})})]})};function n({variant:t,status:r,stickerUrl:o,time:Q}){const k=t==="sent";return e.jsxs("div",{style:{borderRadius:"var(--cometchat-radius-3)",background:k?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",padding:"var(--cometchat-spacing-3)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)",width:220},children:[e.jsx("img",{src:o,alt:"Sticker",style:{width:160,height:160,objectFit:"contain"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",width:"100%"},children:[e.jsx("span",{style:{fontSize:"12px",color:k?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(c,{children:Q})}),k&&r&&e.jsx(Z,{status:r})]})]})}function Z({status:t}){const o=t==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function S({children:t,width:r=280}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:t})}function s({children:t}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function l({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(c,{children:t})}),r]})}function $({language:t,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function a({title:t,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(c,{children:t})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(c,{children:r})})]})}const d={parameters:{docs:{disable:!0}}};var f,y,j;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Sent — Default",
  parameters: {
    docs: {
      description: {
        story: "Outgoing sticker bubble with read receipt."
      }
    }
  },
  render: () => <Wrapper>
      <StickerBubble variant="sent" status="read" stickerUrl={STICKERS[0]} time="4:56 pm" />
    </Wrapper>
}`,...(j=(y=p.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var R,T,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  render: () => <Wrapper>
      <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
    </Wrapper>
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var B,U,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Sent — Sent",
  render: () => <Wrapper>
      <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
    </Wrapper>
}`,...(w=(U=u.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var D,L,_;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Received — Default",
  parameters: {
    docs: {
      description: {
        story: "Incoming sticker bubble."
      }
    }
  },
  render: () => <Wrapper>
      <StickerBubble variant="received" stickerUrl={STICKERS[0]} time="4:56 pm" />
    </Wrapper>
}`,...(_=(L=b.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var W,I,E;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-4)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sent — Read</T></Label>
        <StickerBubble variant="sent" status="read" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sent — Delivered</T></Label>
        <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sent — Sent</T></Label>
        <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received</T></Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received (Sticker 2)</T></Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received (Sticker 3)</T></Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
    </div>
}`,...(E=(I=v.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var K,A,z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "All Stickers (Sent)",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-4)",
    padding: "var(--cometchat-spacing-4)"
  }}>
      {STICKERS.map((url, i) => <StickerBubble key={i} variant="sent" status="read" stickerUrl={url} time="4:56 pm" />)}
    </div>
}`,...(z=(A=g.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var F,P,M;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All Stickers (Received)",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-4)",
    padding: "var(--cometchat-spacing-4)"
  }}>
      {STICKERS.map((url, i) => <StickerBubble key={i} variant="received" stickerUrl={url} time="4:56 pm" />)}
    </div>
}`,...(M=(P=h.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var G,H,V;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Sent Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--sent">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
    <span class="sticker-bubble__receipt">✓✓</span>
  </div>
</div>

<!-- Received Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--received">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent — Read" description="Purple background bubble with sticker image centered. Green read receipt + timestamp at bottom-right." />
          <StateCard title="Sent — Delivered" description="Same with muted white double-check." />
          <StateCard title="Sent — Sent" description="Same with muted white single-check." />
          <StateCard title="Received — Default" description="Gray background bubble with sticker image centered. Timestamp only, no receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Bubble Background" description="Rounded container (var(--cometchat-radius-3)) with sent/received background color." />
          <StateCard title="Sticker Image" description="PNG with transparent background, rendered at 160×160 centered in the bubble." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned below the sticker. Same pattern as other bubbles." />
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
          <StateCard title="Sticker Size" description="160×160px in chat bubble context" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform corners" />
          <StateCard title="Source" description="avatarRegistry['Sticker Footage'] from foundation/tokens/avatars.ts" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Sticker Bubble (node 4080:303913)" />
      </UsageSection>
    </div>
}`,...(V=(H=x.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var O,N,X,q,J;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(X=(N=d.parameters)==null?void 0:N.docs)==null?void 0:X.source},description:{story:"Interactive playground.",...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};const se=["SentDefault","SentDelivered","SentSent","ReceivedDefault","AllVariants","AllStickers","AllStickersReceived","Usage","Playground"];export{g as AllStickers,h as AllStickersReceived,v as AllVariants,d as Playground,b as ReceivedDefault,p as SentDefault,m as SentDelivered,u as SentSent,x as Usage,se as __namedExportsOrder,ce as default};
