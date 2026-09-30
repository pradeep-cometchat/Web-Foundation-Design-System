import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as te}from"./T-C6nayWAE.js";import{T as a}from"./Toast-Oc6-wNX4.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ce={title:"Base Components/Toast",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A transient notification pill that appears briefly to confirm an action.
Dark background with white text, auto-dismisses after a set duration.

**Structure (from Figma node 4090:837860):**
- Outer: radius 8px, drop-shadow (shadow-lg)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered`}}},argTypes:{message:{control:"text",description:"The message to display."},open:{control:"boolean",description:"Whether the toast is visible."},duration:{control:{type:"number",min:0,step:500},description:"Auto-dismiss duration in ms. 0 to disable."},onClose:{control:!1}}},o={args:{message:"Message Copied",open:!0,duration:0}},n={args:{message:"Message Sent",open:!0,duration:0}},r={args:{message:"Message Deleted",open:!0,duration:0}},i={args:{message:"Link Copied",open:!0,duration:0}},c={args:{message:"Your message has been forwarded successfully",open:!0,duration:0}},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"var(--cometchat-spacing-10)"},children:[e.jsx(a,{message:"Message Copied",open:!0,duration:0}),e.jsx(a,{message:"Message Sent",open:!0,duration:0}),e.jsx(a,{message:"Message Deleted",open:!0,duration:0}),e.jsx(a,{message:"Link Copied",open:!0,duration:0}),e.jsx(a,{message:"Reaction Added",open:!0,duration:0})]})};function m({title:t,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(te,{children:t})}),s]})}const u=({language:t,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]}),h=({title:t,items:s})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(te,{children:t})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:s.map(g=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",g]},g))})]}),p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(u,{language:"HTML",code:`<!-- Basic toast -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Copied</span>
  </div>
</div>

<!-- Toast with different messages -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Sent</span>
  </div>
</div>

<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Link Copied</span>
  </div>
</div>`})}),e.jsx(m,{title:"CSS (CometChat Tokens)",children:e.jsx(u,{language:"CSS",code:`.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  filter: drop-shadow(0px 12px 8px rgba(10, 13, 18, 0.08))
    drop-shadow(0px 4px 3px rgba(10, 13, 18, 0.03))
    drop-shadow(0px 2px 1px rgba(10, 13, 18, 0.04));
}

.toast__content {
  display: flex;
  align-items: flex-start;
  padding: var(--cometchat-spacing-2);
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-1);
}

.toast__message {
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-static-white);
  text-align: center;
  white-space: nowrap;
}`})}),e.jsx(m,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(h,{title:"Root",items:["toast"]}),e.jsx(h,{title:"Child Elements",items:["toast__content","toast__message"]})]})})]})},l={args:{message:"Message Copied",open:!0,duration:0},parameters:{docs:{disable:!0}}};var x,v,f,y,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"Default state — exact match to Figma node 4090:837860.",...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var C,S,_,j,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: "Message Sent",
    open: true,
    duration: 0
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source},description:{story:"Message sent confirmation.",...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var M,T,k,L,D;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Message deleted confirmation.",...(D=(L=r.parameters)==null?void 0:L.docs)==null?void 0:D.description}}};var R,W,z,A,B;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: "Link Copied",
    open: true,
    duration: 0
  }
}`,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"Link copied confirmation.",...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var H,E,F,I,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Longer message text.",...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.description}}};var O,P,U,Y,X;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-4)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "var(--cometchat-spacing-10)"
  }}>
      <Toast message="Message Copied" open={true} duration={0} />
      <Toast message="Message Sent" open={true} duration={0} />
      <Toast message="Message Deleted" open={true} duration={0} />
      <Toast message="Link Copied" open={true} duration={0} />
      <Toast message="Reaction Added" open={true} duration={0} />
    </div>
}`,...(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"All variants side by side.",...(X=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:X.description}}};var q,J,K,N,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Basic toast -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Copied</span>
  </div>
</div>

<!-- Toast with different messages -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Sent</span>
  </div>
</div>

<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Link Copied</span>
  </div>
</div>\`} />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  filter: drop-shadow(0px 12px 8px rgba(10, 13, 18, 0.08))
    drop-shadow(0px 4px 3px rgba(10, 13, 18, 0.03))
    drop-shadow(0px 2px 1px rgba(10, 13, 18, 0.04));
}

.toast__content {
  display: flex;
  align-items: flex-start;
  padding: var(--cometchat-spacing-2);
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-1);
}

.toast__message {
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-static-white);
  text-align: center;
  white-space: nowrap;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Root" items={["toast"]} />
          <ClassGroup title="Child Elements" items={["toast__content", "toast__message"]} />
        </div>
      </Section>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};var V,Z,$,ee,ae;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};const de=["Default","MessageSent","MessageDeleted","LinkCopied","LongMessage","States","Usage","Playground"];export{o as Default,i as LinkCopied,c as LongMessage,r as MessageDeleted,n as MessageSent,l as Playground,d as States,p as Usage,de as __namedExportsOrder,ce as default};
