import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as s,u as ee}from"./T-B-X7QtOX.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const de={title:"Core Components/Chat Bubbles/Text Bubble",tags:["autodocs"],parameters:{layout:"centered"}},m={name:"Sent — Read",parameters:{docs:{description:{story:"Outgoing text message with read receipt."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},u={name:"Sent — Delivered",parameters:{docs:{description:{story:"Outgoing text message with delivered status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},h={name:"Sent — Sent",parameters:{docs:{description:{story:"Outgoing text message with sent status."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},b={name:"Sent — Long Text (Read More)",parameters:{docs:{description:{story:"Outgoing long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},g={name:"Received — Default",parameters:{docs:{description:{story:"Incoming text message."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"})})},v={name:"Received — Long Text (Read More)",parameters:{docs:{description:{story:"Incoming long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(o,{children:e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},x={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:400,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(n,{children:e.jsx(s,{children:"Sent — Read"})}),e.jsx(r,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:e.jsx(s,{children:"Sent — Delivered"})}),e.jsx(r,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:e.jsx(s,{children:"Sent — Sent"})}),e.jsx(r,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(n,{children:e.jsx(s,{children:"Sent — Long Text"})}),e.jsx(r,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0}),e.jsx(n,{children:e.jsx(s,{children:"Received"})}),e.jsx(r,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"}),e.jsx(n,{children:e.jsx(s,{children:"Received — Long Text"})}),e.jsx(r,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})]})},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"HTML Structure",children:e.jsx(ae,{language:"HTML",code:`<!-- Sent Text Bubble -->
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
</div>`})}),e.jsx(d,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — Read",description:"Purple background. White text. Green double-check receipt icon."}),e.jsx(t,{title:"Sent — Delivered",description:"Purple background. White text. Muted white double-check receipt icon."}),e.jsx(t,{title:"Sent — Sent",description:"Purple background. White text. Muted white single-check receipt icon."}),e.jsx(t,{title:"Sent — Long Text",description:"Purple background. Truncated text with 'Read more' link in white."}),e.jsx(t,{title:"Received — Default",description:"Gray background. Dark text. Timestamp only, no receipt."}),e.jsx(t,{title:"Received — Long Text",description:"Gray background. Truncated text with 'Read more' link in purple."})]})}),e.jsx(d,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Message Text",description:"Regular weight body text. White on sent, dark on received."}),e.jsx(t,{title:"Read More Link",description:"Shown when text exceeds max lines. White on sent, purple on received. Clickable."}),e.jsx(t,{title:"Timestamp",description:"Small muted text at bottom-right (e.g. '4:56 pm')."}),e.jsx(t,{title:"Receipt Status",description:"Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)."})]})}),e.jsx(d,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Sent Text",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Received Text",description:"var(--cometchat-text-color-primary)"}),e.jsx(t,{title:"Sent Timestamp",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"Received Timestamp",description:"var(--cometchat-text-color-tertiary)"}),e.jsx(t,{title:"Read More (Sent)",description:"var(--cometchat-static-white) — underlined"}),e.jsx(t,{title:"Read More (Received)",description:"var(--cometchat-icon-color-highlight) — purple"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(d,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)"})})]})};function r({variant:a,status:i,message:c,time:Y,truncate:j}){const S=a==="sent",f=120,p=ee()(c),Z=j&&p.length>f?p.slice(0,f)+"...":p;return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${a}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("span",{style:{fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"400",lineHeight:"20px",color:S?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",wordBreak:"break-word"},children:[e.jsx(e.Fragment,{children:Z}),j&&p.length>f&&e.jsx("span",{style:{marginInlineStart:"var(--cometchat-spacing)",fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"500",color:S?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:e.jsx(s,{children:"Read more"})})]}),e.jsxs("div",{className:"chat-bubble-meta",children:[e.jsx("span",{className:"chat-bubble-meta-time",children:e.jsx(s,{children:Y})}),S&&i&&e.jsx(te,{status:i})]})]})})}function te({status:a}){const c=a==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return a==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o({children:a,width:i=400}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function n({children:a}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function d({title:a,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(s,{children:a})}),i]})}function ae({language:a,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function t({title:a,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(s,{children:a})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(s,{children:i})})]})}const l={parameters:{docs:{disable:!0}}};var w,k,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var R,L,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(L=u.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var B,I,W;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var H,M,D;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var U,P,O;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(P=g.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,z,F;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(z=v.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var A,G,V;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      <Label><T>Sent — Read</T></Label>
      <TextBubble variant="sent" status="read" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label><T>Sent — Delivered</T></Label>
      <TextBubble variant="sent" status="delivered" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label><T>Sent — Sent</T></Label>
      <TextBubble variant="sent" status="sent" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label><T>Sent — Long Text</T></Label>
      <TextBubble variant="sent" status="read" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
      <Label><T>Received</T></Label>
      <TextBubble variant="received" message="Sure! Sending them over now." time="4:56 pm" />
      <Label><T>Received — Long Text</T></Label>
      <TextBubble variant="received" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </div>
}`,...(V=(G=x.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var N,E,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(E=y.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var _,X,$,J,Q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...($=(X=l.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Interactive playground.",...(Q=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const le=["SentRead","SentDelivered","SentSent","SentLongText","ReceivedDefault","ReceivedLongText","AllVariants","Usage","Playground"];export{x as AllVariants,l as Playground,g as ReceivedDefault,v as ReceivedLongText,u as SentDelivered,b as SentLongText,m as SentRead,h as SentSent,y as Usage,le as __namedExportsOrder,de as default};
