import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as re}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({message:s,open:a=!0,duration:r=3e3,onClose:g}){return re.useEffect(()=>{if(!a||r===0)return;const te=setTimeout(()=>{g==null||g()},r);return()=>clearTimeout(te)},[a,r,g]),a?e.jsx("div",{className:"toast",role:"status","aria-live":"polite",children:e.jsx("div",{className:"toast__content",children:e.jsx("span",{className:"toast__message",children:s})})}):null}try{t.displayName="Toast",t.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"The message to display",name:"message",required:!0,type:{name:"string"}},open:{defaultValue:{value:"true"},description:"Whether the toast is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},duration:{defaultValue:{value:"3000"},description:"Auto-dismiss duration in ms. Set to 0 to disable. Default: 3000",name:"duration",required:!1,type:{name:"number | undefined"}},onClose:{defaultValue:null,description:"Callback when the toast is dismissed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const de={title:"Base Components/Toast",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A transient notification pill that appears briefly to confirm an action.
Dark background with white text, auto-dismisses after a set duration.

**Structure (from Figma node 4090:837860):**
- Outer: radius 8px, drop-shadow (shadow-lg)
- Content: bg \`#0a0d12\` (static-black), radius-xs (4px), padding 8px
- Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered`}}},argTypes:{message:{control:"text",description:"The message to display."},open:{control:"boolean",description:"Whether the toast is visible."},duration:{control:{type:"number",min:0,step:500},description:"Auto-dismiss duration in ms. 0 to disable."},onClose:{control:!1}}},n={args:{message:"Message Copied",open:!0,duration:0}},o={args:{message:"Message Sent",open:!0,duration:0}},i={args:{message:"Message Deleted",open:!0,duration:0}},d={args:{message:"Link Copied",open:!0,duration:0}},c={args:{message:"Your message has been forwarded successfully",open:!0,duration:0}},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"var(--space-10)"},children:[e.jsx(t,{message:"Message Copied",open:!0,duration:0}),e.jsx(t,{message:"Message Sent",open:!0,duration:0}),e.jsx(t,{message:"Message Deleted",open:!0,duration:0}),e.jsx(t,{message:"Link Copied",open:!0,duration:0}),e.jsx(t,{message:"Reaction Added",open:!0,duration:0})]})};function m({title:s,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:s}),a]})}const f=({language:s,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:s})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),v=({title:s,items:a})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:s}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:a.map(r=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",r]},r))})]}),p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(f,{language:"HTML",code:`<!-- Basic toast -->
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
</div>`})}),e.jsx(m,{title:"CSS (Foundation Variables)",children:e.jsx(f,{language:"CSS",code:`.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  filter: drop-shadow(0px 12px 8px rgba(10, 13, 18, 0.08))
    drop-shadow(0px 4px 3px rgba(10, 13, 18, 0.03))
    drop-shadow(0px 2px 1px rgba(10, 13, 18, 0.04));
}

.toast__content {
  display: flex;
  align-items: flex-start;
  padding: var(--space-2);
  background: var(--color-neutral-lm-950, #0a0d12);
  border-radius: var(--radius-xs);
}

.toast__message {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-white);
  text-align: center;
  white-space: nowrap;
}`})}),e.jsx(m,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(v,{title:"Root",items:["toast"]}),e.jsx(v,{title:"Child Elements",items:["toast__content","toast__message"]})]})})]})},u={args:{message:"Message Copied",open:!0,duration:0},parameters:{docs:{disable:!0}}};var x,h,y,b,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "Message Copied",
    open: true,
    duration: 0
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Default state — exact match to Figma node 4090:837860.",...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var S,C,w,j,M;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    message: "Message Sent",
    open: true,
    duration: 0
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"Message sent confirmation.",...(M=(j=o.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};var T,k,L,z,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0
  }
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"Message deleted confirmation.",...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var R,W,A,B,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: "Link Copied",
    open: true,
    duration: 0
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"Link copied confirmation.",...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var F,H,V,I,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0
  }
}`,...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:"Longer message text.",...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var q,G,O,P,U;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "var(--space-10)"
  }}>
      <Toast message="Message Copied" open={true} duration={0} />
      <Toast message="Message Sent" open={true} duration={0} />
      <Toast message="Message Deleted" open={true} duration={0} />
      <Toast message="Link Copied" open={true} duration={0} />
      <Toast message="Reaction Added" open={true} duration={0} />
    </div>
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"All variants side by side.",...(U=(P=l.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var Y,X,J,K,Q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
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

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  filter: drop-shadow(0px 12px 8px rgba(10, 13, 18, 0.08))
    drop-shadow(0px 4px 3px rgba(10, 13, 18, 0.03))
    drop-shadow(0px 2px 1px rgba(10, 13, 18, 0.04));
}

.toast__content {
  display: flex;
  align-items: flex-start;
  padding: var(--space-2);
  background: var(--color-neutral-lm-950, #0a0d12);
  border-radius: var(--radius-xs);
}

.toast__message {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-white);
  text-align: center;
  white-space: nowrap;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Root" items={["toast"]} />
          <ClassGroup title="Child Elements" items={["toast__content", "toast__message"]} />
        </div>
      </Section>
    </div>
}`,...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Z,$,ee,ae,se;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};const ce=["Default","MessageSent","MessageDeleted","LinkCopied","LongMessage","States","Usage","Playground"];export{n as Default,d as LinkCopied,c as LongMessage,i as MessageDeleted,o as MessageSent,u as Playground,l as States,p as Usage,ce as __namedExportsOrder,de as default};
