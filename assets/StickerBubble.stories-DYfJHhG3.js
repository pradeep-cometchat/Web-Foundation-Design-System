import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ae={title:"Core Components/Chat Bubbles/Sticker Bubble",tags:["autodocs"],parameters:{layout:"centered"}},i=["https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93ef91c-07e3-4c69-8c3b-abe87a2007bf","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82839107-6efc-4a55-a53d-da2460f7111c","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99d357d1-7499-4f9d-806d-b0e28e4fc953","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c81c176-7d75-47ec-90a2-22df905a8cb0","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07293b78-a1d8-489c-ad60-0d3a1a25ccc4","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df84d621-8da9-4e3c-b732-9118ab70eb24"],l={name:"Sent — Default",parameters:{docs:{description:{story:"Outgoing sticker bubble with read receipt."}}},render:()=>e.jsx(x,{children:e.jsx(n,{variant:"sent",status:"read",stickerUrl:i[0],time:"4:56 pm"})})},p={name:"Sent — Delivered",render:()=>e.jsx(x,{children:e.jsx(n,{variant:"sent",status:"delivered",stickerUrl:i[1],time:"4:56 pm"})})},m={name:"Sent — Sent",render:()=>e.jsx(x,{children:e.jsx(n,{variant:"sent",status:"sent",stickerUrl:i[2],time:"4:56 pm"})})},u={name:"Received — Default",parameters:{docs:{description:{story:"Incoming sticker bubble."}}},render:()=>e.jsx(x,{children:e.jsx(n,{variant:"received",stickerUrl:i[0],time:"4:56 pm"})})},b={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Sent — Read"}),e.jsx(n,{variant:"sent",status:"read",stickerUrl:i[0],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Sent — Delivered"}),e.jsx(n,{variant:"sent",status:"delivered",stickerUrl:i[1],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Sent — Sent"}),e.jsx(n,{variant:"sent",status:"sent",stickerUrl:i[2],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Received"}),e.jsx(n,{variant:"received",stickerUrl:i[0],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Received (Sticker 2)"}),e.jsx(n,{variant:"received",stickerUrl:i[1],time:"4:56 pm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(c,{children:"Received (Sticker 3)"}),e.jsx(n,{variant:"received",stickerUrl:i[2],time:"4:56 pm"})]})]})},g={name:"All Stickers (Sent)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)"},children:i.map((t,a)=>e.jsx(n,{variant:"sent",status:"read",stickerUrl:t,time:"4:56 pm"},a))})},v={name:"All Stickers (Received)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)"},children:i.map((t,a)=>e.jsx(n,{variant:"received",stickerUrl:t,time:"4:56 pm"},a))})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(o,{title:"HTML Structure",children:e.jsx(Y,{language:"HTML",code:`<!-- Sent Sticker Bubble -->
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
</div>`})}),e.jsx(o,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Sent — Read",description:"Purple background bubble with sticker image centered. Green read receipt + timestamp at bottom-right."}),e.jsx(r,{title:"Sent — Delivered",description:"Same with muted white double-check."}),e.jsx(r,{title:"Sent — Sent",description:"Same with muted white single-check."}),e.jsx(r,{title:"Received — Default",description:"Gray background bubble with sticker image centered. Timestamp only, no receipt."})]})}),e.jsx(o,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Bubble Background",description:"Rounded container (var(--cometchat-radius-3)) with sent/received background color."}),e.jsx(r,{title:"Sticker Image",description:"PNG with transparent background, rendered at 160×160 centered in the bubble."}),e.jsx(r,{title:"Timestamp + Receipt",description:"Bottom-right aligned below the sticker. Same pattern as other bubbles."})]})}),e.jsx(o,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(r,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(r,{title:"Sticker Size",description:"160×160px in chat bubble context"}),e.jsx(r,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform corners"}),e.jsx(r,{title:"Source",description:"avatarRegistry['Sticker Footage'] from foundation/tokens/avatars.ts"})]})}),e.jsx(o,{title:"Figma Reference",children:e.jsx(r,{title:"Source File",description:"Web Desktop — Chat UI Kits → Sticker Bubble (node 4080:303913)"})})]})};function n({variant:t,status:a,stickerUrl:s,time:J}){const S=t==="sent";return e.jsxs("div",{style:{borderRadius:"var(--cometchat-radius-3)",background:S?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",padding:"var(--cometchat-spacing-3)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)",width:220},children:[e.jsx("img",{src:s,alt:"Sticker",style:{width:160,height:160,objectFit:"contain"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",width:"100%"},children:[e.jsx("span",{style:{fontSize:"12px",color:S?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:J}),S&&a&&e.jsx(Q,{status:a})]})]})}function Q({status:t}){const s=t==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function x({children:t,width:a=280}){return e.jsx("div",{style:{width:a,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:t})}function c({children:t}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function o({title:t,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:t}),a]})}function Y({language:t,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function r({title:t,description:a}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:t}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:a})]})}const d={parameters:{docs:{disable:!0}}};var k,f,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,R,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  render: () => <Wrapper>
      <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
    </Wrapper>
}`,...(w=(R=p.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var C,B,U;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sent — Sent",
  render: () => <Wrapper>
      <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
    </Wrapper>
}`,...(U=(B=m.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var D,T,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(T=u.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var _,W,I;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <Label>Sent — Read</Label>
        <StickerBubble variant="sent" status="read" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Sent — Delivered</Label>
        <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Sent — Sent</Label>
        <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Received</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Received (Sticker 2)</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Received (Sticker 3)</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
    </div>
}`,...(I=(W=b.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var z,E,K;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(E=g.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var A,F,P;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(F=v.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var M,G,H;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var V,O,N,X,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(N=(O=d.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:"Interactive playground.",...(q=(X=d.parameters)==null?void 0:X.docs)==null?void 0:q.description}}};const re=["SentDefault","SentDelivered","SentSent","ReceivedDefault","AllVariants","AllStickers","AllStickersReceived","Usage","Playground"];export{g as AllStickers,v as AllStickersReceived,b as AllVariants,d as Playground,u as ReceivedDefault,l as SentDefault,p as SentDelivered,m as SentSent,h as Usage,re as __namedExportsOrder,ae as default};
