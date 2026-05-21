import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie={title:"Core Components/Chat Bubbles/Text Bubble",tags:["autodocs"],parameters:{layout:"centered"}},l={name:"Sent — Read",parameters:{docs:{description:{story:"Outgoing text message with read receipt."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},p={name:"Sent — Delivered",parameters:{docs:{description:{story:"Outgoing text message with delivered status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},m={name:"Sent — Sent",parameters:{docs:{description:{story:"Outgoing text message with sent status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},u={name:"Sent — Long Text (Read More)",parameters:{docs:{description:{story:"Outgoing long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},h={name:"Received — Default",parameters:{docs:{description:{story:"Incoming text message."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"})})},b={name:"Received — Long Text (Read More)",parameters:{docs:{description:{story:"Incoming long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},g={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:400,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(n,{children:"Sent — Read"}),e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Delivered"}),e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Sent"}),e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Long Text"}),e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0}),e.jsx(n,{children:"Received"}),e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"}),e.jsx(n,{children:"Received — Long Text"}),e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})]})},v={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx(Z,{language:"HTML",code:`<!-- Sent Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Hi, is the watch still up for sale?</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Sure! Sending them over now.</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>

<!-- Long Text with Read More -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text chat-bubble-text--truncated">
      Hey! I just wanted to let you know that...
    </p>
    <a class="chat-bubble-read-more">Read more</a>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>`})}),e.jsx(c,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — Read",description:"Purple background. White text. Green double-check receipt icon."}),e.jsx(t,{title:"Sent — Delivered",description:"Purple background. White text. Muted white double-check receipt icon."}),e.jsx(t,{title:"Sent — Sent",description:"Purple background. White text. Muted white single-check receipt icon."}),e.jsx(t,{title:"Sent — Long Text",description:"Purple background. Truncated text with 'Read more' link in white."}),e.jsx(t,{title:"Received — Default",description:"Gray background. Dark text. Timestamp only, no receipt."}),e.jsx(t,{title:"Received — Long Text",description:"Gray background. Truncated text with 'Read more' link in purple."})]})}),e.jsx(c,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Message Text",description:"Regular weight body text. White on sent, dark on received."}),e.jsx(t,{title:"Read More Link",description:"Shown when text exceeds max lines. White on sent, purple on received. Clickable."}),e.jsx(t,{title:"Timestamp",description:"Small muted text at bottom-right (e.g. '4:56 pm')."}),e.jsx(t,{title:"Receipt Status",description:"Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)."})]})}),e.jsx(c,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Sent Text",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Received Text",description:"var(--cometchat-text-color-primary)"}),e.jsx(t,{title:"Sent Timestamp",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"Received Timestamp",description:"var(--cometchat-text-color-tertiary)"}),e.jsx(t,{title:"Read More (Sent)",description:"var(--cometchat-static-white) — underlined"}),e.jsx(t,{title:"Read More (Received)",description:"var(--cometchat-icon-color-highlight) — purple"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(c,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)"})})]})};function r({variant:a,status:i,message:s,time:J,truncate:S}){const x=a==="sent",y=120,Q=S&&s.length>y?s.slice(0,y)+"...":s;return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${a}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("span",{style:{fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"400",lineHeight:"20px",color:x?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",wordBreak:"break-word"},children:[Q,S&&s.length>y&&e.jsx("span",{style:{marginLeft:"var(--cometchat-spacing)",fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"500",color:x?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:"Read more"})]}),e.jsxs("div",{className:"chat-bubble-meta",children:[e.jsx("span",{className:"chat-bubble-meta-time",children:J}),x&&i&&e.jsx(Y,{status:i})]})]})})}function Y({status:a}){const s=a==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return a==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o({children:a,width:i=400}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function n({children:a}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function c({title:a,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:a}),i]})}function Z({language:a,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function t({title:a,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:a}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:i})]})}const d={parameters:{docs:{disable:!0}}};var f,w,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Sent — Read",
  parameters: {
    docs: {
      description: {
        story: "Outgoing text message with read receipt."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="sent" status="read" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,T,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  parameters: {
    docs: {
      description: {
        story: "Outgoing text message with delivered status."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="sent" status="delivered" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,C,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Sent — Sent",
  parameters: {
    docs: {
      description: {
        story: "Outgoing text message with sent status."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="sent" status="sent" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var W,I,H;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Sent — Long Text (Read More)",
  parameters: {
    docs: {
      description: {
        story: "Outgoing long text message truncated with a 'Read more' link."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="sent" status="read" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </Wrapper>
}`,...(H=(I=u.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var M,D,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Received — Default",
  parameters: {
    docs: {
      description: {
        story: "Incoming text message."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="received" message="Sure! Sending them over now." time="4:56 pm" />
    </Wrapper>
}`,...(U=(D=h.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var P,O,q;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Received — Long Text (Read More)",
  parameters: {
    docs: {
      description: {
        story: "Incoming long text message truncated with a 'Read more' link."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble variant="received" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </Wrapper>
}`,...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,F,A;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)",
    width: 400,
    padding: "var(--cometchat-spacing-4)"
  }}>
      <Label>Sent — Read</Label>
      <TextBubble variant="sent" status="read" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <TextBubble variant="sent" status="delivered" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Sent</Label>
      <TextBubble variant="sent" status="sent" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Long Text</Label>
      <TextBubble variant="sent" status="read" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
      <Label>Received</Label>
      <TextBubble variant="received" message="Sure! Sending them over now." time="4:56 pm" />
      <Label>Received — Long Text</Label>
      <TextBubble variant="received" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </div>
}`,...(A=(F=g.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var G,V,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Sent Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Hi, is the watch still up for sale?</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Sure! Sending them over now.</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>

<!-- Long Text with Read More -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text chat-bubble-text--truncated">
      Hey! I just wanted to let you know that...
    </p>
    <a class="chat-bubble-read-more">Read more</a>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
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
          <StateCard title="Sent — Read" description="Purple background. White text. Green double-check receipt icon." />
          <StateCard title="Sent — Delivered" description="Purple background. White text. Muted white double-check receipt icon." />
          <StateCard title="Sent — Sent" description="Purple background. White text. Muted white single-check receipt icon." />
          <StateCard title="Sent — Long Text" description="Purple background. Truncated text with 'Read more' link in white." />
          <StateCard title="Received — Default" description="Gray background. Dark text. Timestamp only, no receipt." />
          <StateCard title="Received — Long Text" description="Gray background. Truncated text with 'Read more' link in purple." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Message Text" description="Regular weight body text. White on sent, dark on received." />
          <StateCard title="Read More Link" description="Shown when text exceeds max lines. White on sent, purple on received. Clickable." />
          <StateCard title="Timestamp" description="Small muted text at bottom-right (e.g. '4:56 pm')." />
          <StateCard title="Receipt Status" description="Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)." />
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
          <StateCard title="Sent Text" description="var(--cometchat-static-white)" />
          <StateCard title="Received Text" description="var(--cometchat-text-color-primary)" />
          <StateCard title="Sent Timestamp" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="Received Timestamp" description="var(--cometchat-text-color-tertiary)" />
          <StateCard title="Read More (Sent)" description="var(--cometchat-static-white) — underlined" />
          <StateCard title="Read More (Received)" description="var(--cometchat-icon-color-highlight) — purple" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)" />
      </UsageSection>
    </div>
}`,...(N=(V=v.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,K,_,X,$;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(_=(K=d.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"Interactive playground.",...($=(X=d.parameters)==null?void 0:X.docs)==null?void 0:$.description}}};const se=["SentRead","SentDelivered","SentSent","SentLongText","ReceivedDefault","ReceivedLongText","AllVariants","Usage","Playground"];export{g as AllVariants,d as Playground,h as ReceivedDefault,b as ReceivedLongText,p as SentDelivered,u as SentLongText,l as SentRead,m as SentSent,v as Usage,se as __namedExportsOrder,ie as default};
