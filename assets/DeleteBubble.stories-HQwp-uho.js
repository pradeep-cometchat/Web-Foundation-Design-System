import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $={title:"Core Components/Chat Bubbles/Delete Bubble",tags:["autodocs"],parameters:{layout:"centered"}},l={name:"Sent — Read",parameters:{docs:{description:{story:"Deleted outgoing message with read receipt."}}},render:()=>e.jsx(g,{children:e.jsx(s,{variant:"sent",status:"read",time:"4:56 pm"})})},d={name:"Sent — Delivered",parameters:{docs:{description:{story:"Deleted outgoing message with delivered status."}}},render:()=>e.jsx(g,{children:e.jsx(s,{variant:"sent",status:"delivered",time:"4:56 pm"})})},p={name:"Sent — Sent",parameters:{docs:{description:{story:"Deleted outgoing message with sent status."}}},render:()=>e.jsx(g,{children:e.jsx(s,{variant:"sent",status:"sent",time:"4:56 pm"})})},m={name:"Received — Default",parameters:{docs:{description:{story:"Deleted incoming message."}}},render:()=>e.jsx(g,{children:e.jsx(s,{variant:"received",time:"4:56 pm"})})},b={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:400,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(h,{children:e.jsx(i,{children:"Sent — Read"})}),e.jsx(s,{variant:"sent",status:"read",time:"4:56 pm"}),e.jsx(h,{children:e.jsx(i,{children:"Sent — Delivered"})}),e.jsx(s,{variant:"sent",status:"delivered",time:"4:56 pm"}),e.jsx(h,{children:e.jsx(i,{children:"Sent — Sent"})}),e.jsx(s,{variant:"sent",status:"sent",time:"4:56 pm"}),e.jsx(h,{children:e.jsx(i,{children:"Received"})}),e.jsx(s,{variant:"received",time:"4:56 pm"})]})},u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(n,{title:"HTML Structure",children:e.jsx(x,{language:"HTML",code:`<!-- Sent Delete Bubble -->
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
</div>`})}),e.jsx(n,{title:"CSS (CometChat Tokens)",children:e.jsx(x,{language:"CSS",code:`.delete-bubble__content {
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
}`})}),e.jsx(n,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent — Read",description:"Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt."}),e.jsx(a,{title:"Sent — Delivered",description:"Same as read with double check in muted white."}),e.jsx(a,{title:"Sent — Sent",description:"Same with single check in muted white."}),e.jsx(a,{title:"Received — Default",description:"Light gray background. Block icon + italic text in muted dark. No receipt."})]})}),e.jsx(n,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Block Icon",description:"Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received."}),e.jsx(a,{title:"Message Text",description:"'This message was deleted' — italic, regular weight, muted color."}),e.jsx(a,{title:"Timestamp + Receipt",description:"Bottom-right aligned. Time + read receipt (sent only)."})]})}),e.jsx(n,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Sent Text/Icon",description:"rgba(255, 255, 255, 0.7) — Muted white"}),e.jsx(a,{title:"Received Text/Icon",description:"var(--cometchat-text-color-tertiary) — Muted dark"}),e.jsx(a,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(n,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)"})})]})};function s({variant:t,status:r,time:c}){const v=t==="sent";return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${t}`,children:e.jsxs("div",{className:"chat-bubble-body",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:v?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)","--icon-fill":0},children:"block"}),e.jsx("span",{style:{fontSize:"14px",fontStyle:"italic",fontWeight:"400",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:v?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(i,{children:"This message was deleted"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",marginTop:"var(--cometchat-spacing-1)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:e.jsx(i,{children:c})}),v&&r&&e.jsx(V,{status:r})]})]})})}function V({status:t}){const c=t==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function g({children:t,width:r=400}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:t})}function h({children:t}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function n({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:t})}),r]})}function x({language:t,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function a({title:t,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:t})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:r})})]})}const o={parameters:{docs:{disable:!0}}};var S,y,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,w,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,T,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var C,B,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var L,W,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
      <Label><T>Sent — Delivered</T></Label>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
      <Label><T>Sent — Sent</T></Label>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
      <Label><T>Received</T></Label>
      <DeleteBubble variant="received" time="4:56 pm" />
    </div>
}`,...(M=(W=b.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var U,I,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(I=u.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var H,A,F,N,P;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(F=(A=o.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Interactive playground.",...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};const q=["SentRead","SentDelivered","SentSent","ReceivedDefault","AllVariants","Usage","Playground"];export{b as AllVariants,o as Playground,m as ReceivedDefault,d as SentDelivered,l as SentRead,p as SentSent,u as Usage,q as __namedExportsOrder,$ as default};
