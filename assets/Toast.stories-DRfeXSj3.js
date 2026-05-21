import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ne}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({message:a,open:t=!0,duration:n=3e3,onClose:g}){return ne.useEffect(()=>{if(!t||n===0)return;const se=setTimeout(()=>{g==null||g()},n);return()=>clearTimeout(se)},[t,n,g]),t?e.jsx("div",{className:"toast",role:"status","aria-live":"polite",children:e.jsx("div",{className:"toast__content",children:e.jsx("span",{className:"toast__message",children:a})})}):null}try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"The message to display",name:"message",required:!0,type:{name:"string"}},open:{defaultValue:{value:"true"},description:"Whether the toast is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},duration:{defaultValue:{value:"3000"},description:"Auto-dismiss duration in ms. Set to 0 to disable. Default: 3000",name:"duration",required:!1,type:{name:"number | undefined"}},onClose:{defaultValue:null,description:"Callback when the toast is dismissed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ce={title:"Base Components/Toast",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A transient notification pill that appears briefly to confirm an action.
Dark background with white text, auto-dismisses after a set duration.

**Structure (from Figma node 4090:837860):**
- Outer: radius 8px, drop-shadow (shadow-lg)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered`}}},argTypes:{message:{control:"text",description:"The message to display."},open:{control:"boolean",description:"Whether the toast is visible."},duration:{control:{type:"number",min:0,step:500},description:"Auto-dismiss duration in ms. 0 to disable."},onClose:{control:!1}}},r={args:{message:"Message Copied",open:!0,duration:0}},o={args:{message:"Message Sent",open:!0,duration:0}},i={args:{message:"Message Deleted",open:!0,duration:0}},c={args:{message:"Link Copied",open:!0,duration:0}},d={args:{message:"Your message has been forwarded successfully",open:!0,duration:0}},p={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-4)",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"var(--cometchat-spacing-10)"},children:[e.jsx(s,{message:"Message Copied",open:!0,duration:0}),e.jsx(s,{message:"Message Sent",open:!0,duration:0}),e.jsx(s,{message:"Message Deleted",open:!0,duration:0}),e.jsx(s,{message:"Link Copied",open:!0,duration:0}),e.jsx(s,{message:"Reaction Added",open:!0,duration:0})]})};function u({title:a,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a}),t]})}const h=({language:a,code:t})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]}),f=({title:a,items:t})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:t.map(n=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",n]},n))})]}),l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(u,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Basic toast -->
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
</div>`})}),e.jsx(u,{title:"CSS (CometChat Tokens)",children:e.jsx(h,{language:"CSS",code:`.toast {
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
}`})}),e.jsx(u,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(f,{title:"Root",items:["toast"]}),e.jsx(f,{title:"Child Elements",items:["toast__content","toast__message"]})]})})]})},m={args:{message:"Message Copied",open:!0,duration:0},parameters:{docs:{disable:!0}}};var x,v,y,b,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Default state — exact match to Figma node 4090:837860.",...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var C,S,j,w,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: "Message Sent",
    open: true,
    duration: 0
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Message sent confirmation.",...(M=(w=o.parameters)==null?void 0:w.docs)==null?void 0:M.description}}};var T,k,L,D,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0
  }
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"Message deleted confirmation.",...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var W,A,z,B,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    message: "Link Copied",
    open: true,
    duration: 0
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Link copied confirmation.",...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var H,I,N,q,F;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:"Longer message text.",...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var V,G,O,P,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"All variants side by side.",...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var Y,X,J,K,Q;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=l.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Z,$,ee,te,ae;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const de=["Default","MessageSent","MessageDeleted","LinkCopied","LongMessage","States","Usage","Playground"];export{r as Default,c as LinkCopied,d as LongMessage,i as MessageDeleted,o as MessageSent,m as Playground,p as States,l as Usage,de as __namedExportsOrder,ce as default};
