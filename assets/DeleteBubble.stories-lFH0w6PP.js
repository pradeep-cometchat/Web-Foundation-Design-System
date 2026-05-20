import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Core Components/Chat Bubbles/Delete Bubble",tags:["autodocs"],parameters:{layout:"centered"}},o={name:"Sent — Read",parameters:{docs:{description:{story:"Deleted outgoing message with read receipt."}}},render:()=>e.jsx(v,{children:e.jsx(i,{variant:"sent",status:"read",time:"4:56 pm"})})},d={name:"Sent — Delivered",parameters:{docs:{description:{story:"Deleted outgoing message with delivered status."}}},render:()=>e.jsx(v,{children:e.jsx(i,{variant:"sent",status:"delivered",time:"4:56 pm"})})},c={name:"Sent — Sent",parameters:{docs:{description:{story:"Deleted outgoing message with sent status."}}},render:()=>e.jsx(v,{children:e.jsx(i,{variant:"sent",status:"sent",time:"4:56 pm"})})},p={name:"Received — Default",parameters:{docs:{description:{story:"Deleted incoming message."}}},render:()=>e.jsx(v,{children:e.jsx(i,{variant:"received",time:"4:56 pm"})})},b={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",width:400,padding:"var(--space-4)"},children:[e.jsx(m,{children:"Sent — Read"}),e.jsx(i,{variant:"sent",status:"read",time:"4:56 pm"}),e.jsx(m,{children:"Sent — Delivered"}),e.jsx(i,{variant:"sent",status:"delivered",time:"4:56 pm"}),e.jsx(m,{children:"Sent — Sent"}),e.jsx(i,{variant:"sent",status:"sent",time:"4:56 pm"}),e.jsx(m,{children:"Received"}),e.jsx(i,{variant:"received",time:"4:56 pm"})]})},u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(s,{title:"HTML Structure",children:e.jsx(h,{language:"HTML",code:`<!-- Sent Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`})}),e.jsx(s,{title:"CSS (Foundation Variables)",children:e.jsx(h,{language:"CSS",code:`.delete-bubble__content {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.delete-bubble__icon {
  font-size: 20px;
  --icon-fill: 0;
}

.chat-bubble-wrapper--sent .delete-bubble__icon {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__icon {
  color: var(--color-text-tertiary);
}

.delete-bubble__text {
  font-size: var(--font-size-2);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
}

.chat-bubble-wrapper--sent .delete-bubble__text {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__text {
  color: var(--color-text-tertiary);
}`})}),e.jsx(s,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Sent — Read",description:"Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt."}),e.jsx(a,{title:"Sent — Delivered",description:"Same as read with double check in muted white."}),e.jsx(a,{title:"Sent — Sent",description:"Same with single check in muted white."}),e.jsx(a,{title:"Received — Default",description:"Light gray background. Block icon + italic text in muted dark. No receipt."})]})}),e.jsx(s,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Block Icon",description:"Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received."}),e.jsx(a,{title:"Message Text",description:"'This message was deleted' — italic, regular weight, muted color."}),e.jsx(a,{title:"Timestamp + Receipt",description:"Bottom-right aligned. Time + read receipt (sent only)."})]})}),e.jsx(s,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(a,{title:"Sent Text/Icon",description:"rgba(255, 255, 255, 0.7) — Muted white"}),e.jsx(a,{title:"Received Text/Icon",description:"var(--color-text-tertiary) — Muted dark"}),e.jsx(a,{title:"Border Radius",description:"var(--radius-xl) — 12px uniform on all corners"})]})}),e.jsx(s,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)"})})]})};function i({variant:t,status:r,time:n}){const g=t==="sent";return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${t}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:g?"rgba(255, 255, 255, 0.7)":"var(--color-text-tertiary)","--icon-fill":0},children:"block"}),e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontStyle:"italic",fontWeight:"var(--font-weight-regular)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-body)",color:g?"rgba(255, 255, 255, 0.7)":"var(--color-text-tertiary)"},children:"This message was deleted"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--space-1)",marginTop:"var(--space-1)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:n}),g&&r&&e.jsx(N,{status:r})]})]})})}function N({status:t}){const n=t==="read"?"var(--color-message-seen)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function v({children:t,width:r=400}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:t})}function m({children:t}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function s({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:t}),r]})}function h({language:t,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function a({title:t,description:r}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:t}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:r})]})}const l={parameters:{docs:{disable:!0}}};var x,f,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Sent — Read",
  parameters: {
    docs: {
      description: {
        story: "Deleted outgoing message with read receipt."
      }
    }
  },
  render: () => <Wrapper>
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
    </Wrapper>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,w,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  parameters: {
    docs: {
      description: {
        story: "Deleted outgoing message with delivered status."
      }
    }
  },
  render: () => <Wrapper>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
    </Wrapper>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var _,k,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Sent — Sent",
  parameters: {
    docs: {
      description: {
        story: "Deleted outgoing message with sent status."
      }
    }
  },
  render: () => <Wrapper>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
    </Wrapper>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var B,C,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Received — Default",
  parameters: {
    docs: {
      description: {
        story: "Deleted incoming message."
      }
    }
  },
  render: () => <Wrapper>
      <DeleteBubble variant="received" time="4:56 pm" />
    </Wrapper>
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var T,L,z;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
      <Label>Sent — Sent</Label>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
      <Label>Received</Label>
      <DeleteBubble variant="received" time="4:56 pm" />
    </div>
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var W,M,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Sent Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.delete-bubble__content {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.delete-bubble__icon {
  font-size: 20px;
  --icon-fill: 0;
}

.chat-bubble-wrapper--sent .delete-bubble__icon {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__icon {
  color: var(--color-text-tertiary);
}

.delete-bubble__text {
  font-size: var(--font-size-2);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
}

.chat-bubble-wrapper--sent .delete-bubble__text {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__text {
  color: var(--color-text-tertiary);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent — Read" description="Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt." />
          <StateCard title="Sent — Delivered" description="Same as read with double check in muted white." />
          <StateCard title="Sent — Sent" description="Same with single check in muted white." />
          <StateCard title="Received — Default" description="Light gray background. Block icon + italic text in muted dark. No receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Block Icon" description="Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received." />
          <StateCard title="Message Text" description="'This message was deleted' — italic, regular weight, muted color." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned. Time + read receipt (sent only)." />
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
          <StateCard title="Sent Text/Icon" description="rgba(255, 255, 255, 0.7) — Muted white" />
          <StateCard title="Received Text/Icon" description="var(--color-text-tertiary) — Muted dark" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)" />
      </UsageSection>
    </div>
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var I,F,V,H,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(V=(F=l.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"Interactive playground.",...(A=(H=l.parameters)==null?void 0:H.docs)==null?void 0:A.description}}};const X=["SentRead","SentDelivered","SentSent","ReceivedDefault","AllVariants","Usage","Playground"];export{b as AllVariants,l as Playground,p as ReceivedDefault,d as SentDelivered,o as SentRead,c as SentSent,u as Usage,X as __namedExportsOrder,O as default};
