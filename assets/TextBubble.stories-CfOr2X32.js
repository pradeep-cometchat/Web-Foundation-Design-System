import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as s,u as ne}from"./T-CfqgOS6T.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const he={title:"Core Components/Chat Bubbles/Text Bubble",tags:["autodocs"],parameters:{layout:"centered"}},p={name:"Sent — Read",parameters:{docs:{description:{story:"Outgoing text message with read receipt."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},u={name:"Sent — Delivered",parameters:{docs:{description:{story:"Outgoing text message with delivered status."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},h={name:"Sent — Sent",parameters:{docs:{description:{story:"Outgoing text message with sent status."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"})})},b={name:"Sent — Long Text (Read More)",parameters:{docs:{description:{story:"Outgoing long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},g={name:"Received — Default",parameters:{docs:{description:{story:"Incoming text message."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"})})},v={name:"Received — Long Text (Read More)",parameters:{docs:{description:{story:"Incoming long text message truncated with a 'Read more' link."}}},render:()=>e.jsx(n,{children:e.jsx(a,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})})},x={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:400,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(c,{children:e.jsx(s,{children:"Sent — Read"})}),e.jsx(a,{variant:"sent",status:"read",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(c,{children:e.jsx(s,{children:"Sent — Delivered"})}),e.jsx(a,{variant:"sent",status:"delivered",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(c,{children:e.jsx(s,{children:"Sent — Sent"})}),e.jsx(a,{variant:"sent",status:"sent",message:"Hi, is the watch still up for sale?",time:"4:56 pm"}),e.jsx(c,{children:e.jsx(s,{children:"Sent — Long Text"})}),e.jsx(a,{variant:"sent",status:"read",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0}),e.jsx(c,{children:e.jsx(s,{children:"Received"})}),e.jsx(a,{variant:"received",message:"Sure! Sending them over now.",time:"4:56 pm"}),e.jsx(c,{children:e.jsx(s,{children:"Received — Long Text"})}),e.jsx(a,{variant:"received",message:"Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to...",time:"4:56 pm",truncate:!0})]})},y={name:"Mixed Languages",parameters:{docs:{description:{story:"An English message in an Arabic UI, and an Arabic message in an English UI. Each bubble stays on its sender's side; the text inside reads in its own language's direction."}}},render:()=>e.jsxs(n,{children:[e.jsx(a,{verbatim:!0,variant:"received",message:"مرحباً، هل الساعة ما زالت معروضة للبيع؟",time:"4:56 pm"}),e.jsx(a,{verbatim:!0,variant:"sent",status:"read",message:"Yes, it's still available! Want me to send a few more photos?",time:"4:57 pm"}),e.jsx(a,{verbatim:!0,variant:"received",message:"نعم من فضلك، أرسل صور الجانبين والحزام. وهل السعر قابل للتفاوض إذا استلمتها اليوم؟",time:"4:58 pm"}),e.jsx(a,{verbatim:!0,variant:"sent",status:"delivered",message:"Sure, sending them now. The price is a little flexible if you can pick it up today, and the original box and charger are included.",time:"4:59 pm"})]})},S={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"HTML Structure",children:e.jsx(ce,{language:"HTML",code:`<!-- Sent Text Bubble -->
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
</div>`})}),e.jsx(d,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — Read",description:"Purple background. White text. Green double-check receipt icon."}),e.jsx(t,{title:"Sent — Delivered",description:"Purple background. White text. Muted white double-check receipt icon."}),e.jsx(t,{title:"Sent — Sent",description:"Purple background. White text. Muted white single-check receipt icon."}),e.jsx(t,{title:"Sent — Long Text",description:"Purple background. Truncated text with 'Read more' link in white."}),e.jsx(t,{title:"Received — Default",description:"Gray background. Dark text. Timestamp only, no receipt."}),e.jsx(t,{title:"Received — Long Text",description:"Gray background. Truncated text with 'Read more' link in purple."})]})}),e.jsx(d,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Message Text",description:"Regular weight body text. White on sent, dark on received."}),e.jsx(t,{title:"Read More Link",description:"Shown when text exceeds max lines. White on sent, purple on received. Clickable."}),e.jsx(t,{title:"Timestamp",description:"Small muted text at bottom-right (e.g. '4:56 pm')."}),e.jsx(t,{title:"Receipt Status",description:"Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)."})]})}),e.jsx(d,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Sent Text",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Received Text",description:"var(--cometchat-text-color-primary)"}),e.jsx(t,{title:"Sent Timestamp",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"Received Timestamp",description:"var(--cometchat-text-color-tertiary)"}),e.jsx(t,{title:"Read More (Sent)",description:"var(--cometchat-static-white) — underlined"}),e.jsx(t,{title:"Read More (Received)",description:"var(--cometchat-icon-color-highlight) — purple"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(d,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)"})})]})};function a({variant:r,status:i,message:o,time:ae,truncate:j,verbatim:re}){const f=r==="sent",w=120,ie=ne(),m=re?o:ie(o),se=j&&m.length>w?m.slice(0,w)+"...":m;return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${r}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("span",{dir:"auto",style:{display:"block",fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"400",lineHeight:"20px",color:f?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",wordBreak:"break-word"},children:[e.jsx(e.Fragment,{children:se}),j&&m.length>w&&e.jsx("span",{style:{marginInlineStart:"var(--cometchat-spacing)",fontSize:"14px",fontFamily:"var(--cometchat-font-family)",fontWeight:"500",color:f?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)",cursor:"pointer"},children:e.jsx(s,{children:"Read more"})})]}),e.jsxs("div",{className:"chat-bubble-meta",children:[e.jsx("span",{className:"chat-bubble-meta-time",children:e.jsx(s,{children:ae})}),f&&i&&e.jsx(oe,{status:i})]})]})})}function oe({status:r}){const o=r==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return r==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function n({children:r,width:i=400}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:r})}function c({children:r}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:r})}function d({title:r,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(s,{children:r})}),i]})}function ce({language:r,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function t({title:r,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(s,{children:r})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(s,{children:i})})]})}const l={parameters:{docs:{disable:!0}}};var k,T,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,B,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,W,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,D,U;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(D=b.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var A,P,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(P=g.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,z,E;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(z=v.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,G,V;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(G=x.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var N,K,Y;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Mixed Languages",
  parameters: {
    docs: {
      description: {
        story: "An English message in an Arabic UI, and an Arabic message in an English UI. Each bubble stays on its sender's side; the text inside reads in its own language's direction."
      }
    }
  },
  render: () => <Wrapper>
      <TextBubble verbatim variant="received" message="مرحباً، هل الساعة ما زالت معروضة للبيع؟" time="4:56 pm" />
      <TextBubble verbatim variant="sent" status="read" message="Yes, it's still available! Want me to send a few more photos?" time="4:57 pm" />
      <TextBubble verbatim variant="received" message="نعم من فضلك، أرسل صور الجانبين والحزام. وهل السعر قابل للتفاوض إذا استلمتها اليوم؟" time="4:58 pm" />
      <TextBubble verbatim variant="sent" status="delivered" message="Sure, sending them now. The price is a little flexible if you can pick it up today, and the original box and charger are included." time="4:59 pm" />
    </Wrapper>
}`,...(Y=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,X,$;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(X=S.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var J,Q,Z,ee,te;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(Z=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Interactive playground.",...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const be=["SentRead","SentDelivered","SentSent","SentLongText","ReceivedDefault","ReceivedLongText","AllVariants","MixedLanguages","Usage","Playground"];export{x as AllVariants,y as MixedLanguages,l as Playground,g as ReceivedDefault,v as ReceivedLongText,u as SentDelivered,b as SentLongText,p as SentRead,h as SentSent,S as Usage,be as __namedExportsOrder,he as default};
