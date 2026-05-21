import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z={title:"Core Components/Chat Area/Action Bubble/Divider",tags:["autodocs"],parameters:{layout:"centered"}},d={name:"Date Divider",render:()=>e.jsx(c,{children:e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:"Today"})})})},n={name:"New Message Divider",render:()=>e.jsx(c,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:"New"})]})})},l={name:"Thread Replies Divider",render:()=>e.jsx(c,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:"4 Replies"}),e.jsx("div",{className:"action-bubble-divider__line"})]})})},t={name:"All Dividers",render:()=>e.jsxs(c,{width:400,children:[e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:"Today"})}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:"New"})]}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:"4 Replies"}),e.jsx("div",{className:"action-bubble-divider__line"})]})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(b,{title:"HTML Structure",children:e.jsx(k,{language:"HTML",code:`<!-- Date Divider (no lines) -->
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
</div>`})}),e.jsx(b,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(o,{title:"Date Divider",description:"Centered date label (Today, Yesterday, etc.) with pill border. No lines."}),e.jsx(o,{title:"New Message Divider",description:"Red line with 'New' label aligned right — marks unread messages."}),e.jsx(o,{title:"Thread Replies Divider",description:"Reply count label aligned left with line extending right."})]})})]})};function c({children:a,width:i=360}){return e.jsx("div",{style:{width:i,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function b({title:a,children:i}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:a}),i]})}function k({language:a,code:i}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]})}function o({title:a,description:i}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:a}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:i})]})}const r={parameters:{docs:{disable:!0}}};var v,p,u;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Date Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
      </div>
    </Wrapper>
}`,...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,_,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "New Message Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new">New</span>
      </div>
    </Wrapper>
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var g,x,N;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Thread Replies Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var y,j,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var f,D,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Date Divider" description="Centered date label (Today, Yesterday, etc.) with pill border. No lines." />
          <StateCard title="New Message Divider" description="Red line with 'New' label aligned right — marks unread messages." />
          <StateCard title="Thread Replies Divider" description="Reply count label aligned left with line extending right." />
        </div>
      </UsageSection>
    </div>
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,R,C,W,M;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Interactive playground.",...(M=(W=r.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};const L=["DateDivider","NewMessageDivider","ThreadRepliesDivider","AllDividers","Usage","Playground"];export{t as AllDividers,d as DateDivider,n as NewMessageDivider,r as Playground,l as ThreadRepliesDivider,s as Usage,L as __namedExportsOrder,z as default};
