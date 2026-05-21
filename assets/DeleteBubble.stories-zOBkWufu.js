import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Core Components/Chat Bubbles/Delete Bubble",tags:["autodocs"],parameters:{layout:"centered"}},o={name:"Sent — Read",parameters:{docs:{description:{story:"Deleted outgoing message with read receipt."}}},render:()=>e.jsx(g,{children:e.jsx(i,{variant:"sent",status:"read",time:"4:56 pm"})})},l={name:"Sent — Delivered",parameters:{docs:{description:{story:"Deleted outgoing message with delivered status."}}},render:()=>e.jsx(g,{children:e.jsx(i,{variant:"sent",status:"delivered",time:"4:56 pm"})})},d={name:"Sent — Sent",parameters:{docs:{description:{story:"Deleted outgoing message with sent status."}}},render:()=>e.jsx(g,{children:e.jsx(i,{variant:"sent",status:"sent",time:"4:56 pm"})})},p={name:"Received — Default",parameters:{docs:{description:{story:"Deleted incoming message."}}},render:()=>e.jsx(g,{children:e.jsx(i,{variant:"received",time:"4:56 pm"})})},m={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:400,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(u,{children:"Sent — Read"}),e.jsx(i,{variant:"sent",status:"read",time:"4:56 pm"}),e.jsx(u,{children:"Sent — Delivered"}),e.jsx(i,{variant:"sent",status:"delivered",time:"4:56 pm"}),e.jsx(u,{children:"Sent — Sent"}),e.jsx(i,{variant:"sent",status:"sent",time:"4:56 pm"}),e.jsx(u,{children:"Received"}),e.jsx(i,{variant:"received",time:"4:56 pm"})]})},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(s,{title:"HTML Structure",children:e.jsx(v,{language:"HTML",code:`<!-- Sent Delete Bubble -->
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
</div>`})}),e.jsx(s,{title:"CSS (CometChat Tokens)",children:e.jsx(v,{language:"CSS",code:`.delete-bubble__content {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
}

.delete-bubble__icon {
  font-size: 20px;
  --icon-fill: 0;
}

.chat-bubble-wrapper--sent .delete-bubble__icon {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__icon {
  color: var(--cometchat-text-color-tertiary);
}

.delete-bubble__text {
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 16.8px;
}

.chat-bubble-wrapper--sent .delete-bubble__text {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__text {
  color: var(--cometchat-text-color-tertiary);
}`})}),e.jsx(s,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent — Read",description:"Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt."}),e.jsx(a,{title:"Sent — Delivered",description:"Same as read with double check in muted white."}),e.jsx(a,{title:"Sent — Sent",description:"Same with single check in muted white."}),e.jsx(a,{title:"Received — Default",description:"Light gray background. Block icon + italic text in muted dark. No receipt."})]})}),e.jsx(s,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Block Icon",description:"Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received."}),e.jsx(a,{title:"Message Text",description:"'This message was deleted' — italic, regular weight, muted color."}),e.jsx(a,{title:"Timestamp + Receipt",description:"Bottom-right aligned. Time + read receipt (sent only)."})]})}),e.jsx(s,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Sent Text/Icon",description:"rgba(255, 255, 255, 0.7) — Muted white"}),e.jsx(a,{title:"Received Text/Icon",description:"var(--cometchat-text-color-tertiary) — Muted dark"}),e.jsx(a,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(s,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)"})})]})};function i({variant:t,status:r,time:n}){const h=t==="sent";return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${t}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:h?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)","--icon-fill":0},children:"block"}),e.jsx("span",{style:{fontSize:"14px",fontStyle:"italic",fontWeight:"400",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:h?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)"},children:"This message was deleted"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",marginTop:"var(--cometchat-spacing-1)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:n}),h&&r&&e.jsx(P,{status:r})]})]})})}function P({status:t}){const n=t==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function g({children:t,width:r=400}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:t})}function u({children:t}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function s({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:t}),r]})}function v({language:t,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function a({title:t,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:t}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:r})]})}const c={parameters:{docs:{disable:!0}}};var x,S,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,j,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,_,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,B,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(B=p.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var R,L,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
      <Label>Sent — Sent</Label>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
      <Label>Received</Label>
      <DeleteBubble variant="received" time="4:56 pm" />
    </div>
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var M,U,I;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.delete-bubble__content {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
}

.delete-bubble__icon {
  font-size: 20px;
  --icon-fill: 0;
}

.chat-bubble-wrapper--sent .delete-bubble__icon {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__icon {
  color: var(--cometchat-text-color-tertiary);
}

.delete-bubble__text {
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 16.8px;
}

.chat-bubble-wrapper--sent .delete-bubble__text {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__text {
  color: var(--cometchat-text-color-tertiary);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
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
        gap: "var(--cometchat-spacing-3)"
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Sent Text/Icon" description="rgba(255, 255, 255, 0.7) — Muted white" />
          <StateCard title="Received Text/Icon" description="var(--cometchat-text-color-tertiary) — Muted dark" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)" />
      </UsageSection>
    </div>
}`,...(I=(U=b.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var z,H,A,F,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source},description:{story:"Interactive playground.",...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.description}}};const X=["SentRead","SentDelivered","SentSent","ReceivedDefault","AllVariants","Usage","Playground"];export{m as AllVariants,c as Playground,p as ReceivedDefault,l as SentDelivered,o as SentRead,d as SentSent,b as Usage,X as __namedExportsOrder,O as default};
