import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie={title:"Core Components/Chat Bubbles/Text Bubble",tags:["autodocs"],parameters:{layout:"centered"}},c={name:"Sent — Read",parameters:{docs:{description:{story:"Outgoing text message with read receipt."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},p={name:"Sent — Delivered",parameters:{docs:{description:{story:"Outgoing text message with delivered status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},u={name:"Sent — Sent",parameters:{docs:{description:{story:"Outgoing text message with sent status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},m={name:"Sent — Long Text (Read More)",parameters:{docs:{description:{story:"Outgoing long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},b={name:"Received — Default",parameters:{docs:{description:{story:"Incoming text message."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"})})},h={name:"Received — Long Text (Read More)",parameters:{docs:{description:{story:"Incoming long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},v={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",width:400,padding:"var(--space-4)"},children:[e.jsx(n,{children:"Sent — Read"}),e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Delivered"}),e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Sent"}),e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:"Sent — Long Text"}),e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0}),e.jsx(n,{children:"Received"}),e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"}),e.jsx(n,{children:"Received — Long Text"}),e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})]})},g={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"HTML Structure",children:e.jsx(Z,{language:"HTML",code:`<!-- Sent Text Bubble -->
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
</div>`})}),e.jsx(d,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Sent — Read",description:"Purple background. White text. Green double-check receipt icon."}),e.jsx(t,{title:"Sent — Delivered",description:"Purple background. White text. Muted white double-check receipt icon."}),e.jsx(t,{title:"Sent — Sent",description:"Purple background. White text. Muted white single-check receipt icon."}),e.jsx(t,{title:"Sent — Long Text",description:"Purple background. Truncated text with 'Read more' link in white."}),e.jsx(t,{title:"Received — Default",description:"Gray background. Dark text. Timestamp only, no receipt."}),e.jsx(t,{title:"Received — Long Text",description:"Gray background. Truncated text with 'Read more' link in purple."})]})}),e.jsx(d,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Message Text",description:"Regular weight body text. White on sent, dark on received."}),e.jsx(t,{title:"Read More Link",description:"Shown when text exceeds max lines. White on sent, purple on received. Clickable."}),e.jsx(t,{title:"Timestamp",description:"Small muted text at bottom-right (e.g. '4:56 pm')."}),e.jsx(t,{title:"Receipt Status",description:"Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)."})]})}),e.jsx(d,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(t,{title:"Sent Text",description:"var(--color-static-white)"}),e.jsx(t,{title:"Received Text",description:"var(--color-text-primary)"}),e.jsx(t,{title:"Sent Timestamp",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"Received Timestamp",description:"var(--color-text-tertiary)"}),e.jsx(t,{title:"Read More (Sent)",description:"var(--color-static-white) — underlined"}),e.jsx(t,{title:"Read More (Received)",description:"var(--color-icon-highlight-primary) — purple"}),e.jsx(t,{title:"Border Radius",description:"var(--radius-xl) — 12px uniform on all corners"})]})}),e.jsx(d,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)"})})]})};function r({variant:a,status:i,message:s,time:J,truncate:S}){const x=a==="sent",y=120,Q=S&&s.length>y?s.slice(0,y)+"...":s;return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${a}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("span",{style:{fontSize:"var(--font-size-2)",fontFamily:"var(--font-family-body)",fontWeight:"var(--font-weight-regular)",lineHeight:"var(--line-height-body)",color:x?"var(--color-static-white)":"var(--color-text-primary)",wordBreak:"break-word"},children:[Q,S&&s.length>y&&e.jsx("span",{style:{marginLeft:"var(--space-0-5)",fontSize:"var(--font-size-2)",fontFamily:"var(--font-family-body)",fontWeight:"var(--font-weight-medium)",color:x?"var(--color-static-white)":"var(--color-icon-highlight-primary)",cursor:"pointer"},children:"Read more"})]}),e.jsxs("div",{className:"chat-bubble-meta",children:[e.jsx("span",{className:"chat-bubble-meta-time",children:J}),x&&i&&e.jsx(Y,{status:i})]})]})})}function Y({status:a}){const s=a==="read"?"var(--color-message-seen)":"rgba(255, 255, 255, 0.7)";return a==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o({children:a,width:i=400}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:a})}function n({children:a}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function d({title:a,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:a}),i]})}function Z({language:a,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function t({title:a,description:i}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:a}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:i})]})}const l={parameters:{docs:{disable:!0}}};var f,w,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,T,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,C,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var W,I,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(I=m.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var M,D,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(D=b.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var U,P,O;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(P=h.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,F,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    width: 400,
    padding: "var(--space-4)"
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
}`,...(A=(F=v.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var G,V,N;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
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
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Sent Text" description="var(--color-static-white)" />
          <StateCard title="Received Text" description="var(--color-text-primary)" />
          <StateCard title="Sent Timestamp" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="Received Timestamp" description="var(--color-text-tertiary)" />
          <StateCard title="Read More (Sent)" description="var(--color-static-white) — underlined" />
          <StateCard title="Read More (Received)" description="var(--color-icon-highlight-primary) — purple" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)" />
      </UsageSection>
    </div>
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,K,_,X,$;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(_=(K=l.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"Interactive playground.",...($=(X=l.parameters)==null?void 0:X.docs)==null?void 0:$.description}}};const se=["SentRead","SentDelivered","SentSent","SentLongText","ReceivedDefault","ReceivedLongText","AllVariants","Usage","Playground"];export{v as AllVariants,l as Playground,b as ReceivedDefault,h as ReceivedLongText,p as SentDelivered,m as SentLongText,c as SentRead,u as SentSent,g as Usage,se as __namedExportsOrder,ie as default};
