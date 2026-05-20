import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const H={title:"Core Components/Chat Area/Action Bubble/Divider",tags:["autodocs"],parameters:{layout:"centered"}},d={name:"Date Divider",render:()=>e.jsx(o,{children:e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:"Today"})})})},l={name:"New Message Divider",render:()=>e.jsx(o,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:"New"})]})})},n={name:"Thread Replies Divider",render:()=>e.jsx(o,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:"4 Replies"}),e.jsx("div",{className:"action-bubble-divider__line"})]})})},s={name:"All Dividers",render:()=>e.jsxs(o,{width:400,children:[e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:"Today"})}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:"New"})]}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:"4 Replies"}),e.jsx("div",{className:"action-bubble-divider__line"})]})]})},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx(z,{language:"HTML",code:`<!-- Date Divider (no lines) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
</div>

<!-- New Message Divider (line + label) -->
<div class="action-bubble-divider">
  <div class="action-bubble-divider__line action-bubble-divider__line--new"></div>
  <span class="action-bubble-divider__label action-bubble-divider__label--new">New</span>
</div>

<!-- Thread Replies Divider (label + line) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
  <div class="action-bubble-divider__line"></div>
</div>`})}),e.jsx(c,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(b,{title:"Date Divider",description:"Centered date label (Today, Yesterday, etc.) with pill border. No lines."}),e.jsx(b,{title:"New Message Divider",description:"Red line with 'New' label aligned right — marks unread messages."}),e.jsx(b,{title:"Thread Replies Divider",description:"Reply count label aligned left with line extending right."})]})})]})};function o({children:i,width:a=360}){return e.jsx("div",{style:{width:a,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:i})}function c({title:i,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:i}),a]})}function z({language:i,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function b({title:i,description:a}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:i}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:a})]})}const r={parameters:{docs:{disable:!0}}};var v,p,u;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Date Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
      </div>
    </Wrapper>
}`,...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,_,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "New Message Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new">New</span>
      </div>
    </Wrapper>
}`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var h,x,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Thread Replies Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var y,f,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All Dividers",
  render: () => <Wrapper width={400}>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
      </div>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new">New</span>
      </div>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,D,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Date Divider (no lines) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
</div>

<!-- New Message Divider (line + label) -->
<div class="action-bubble-divider">
  <div class="action-bubble-divider__line action-bubble-divider__line--new"></div>
  <span class="action-bubble-divider__label action-bubble-divider__label--new">New</span>
</div>

<!-- Thread Replies Divider (label + line) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
  <div class="action-bubble-divider__line"></div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Date Divider" description="Centered date label (Today, Yesterday, etc.) with pill border. No lines." />
          <StateCard title="New Message Divider" description="Red line with 'New' label aligned right — marks unread messages." />
          <StateCard title="Thread Replies Divider" description="Reply count label aligned left with line extending right." />
        </div>
      </UsageSection>
    </div>
}`,...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,R,C,W,M;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Interactive playground.",...(M=(W=r.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};const L=["DateDivider","NewMessageDivider","ThreadRepliesDivider","AllDividers","Usage","Playground"];export{s as AllDividers,d as DateDivider,l as NewMessageDivider,r as Playground,n as ThreadRepliesDivider,t as Usage,L as __namedExportsOrder,H as default};
