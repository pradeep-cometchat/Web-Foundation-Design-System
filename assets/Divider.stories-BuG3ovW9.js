import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={title:"Core Components/Chat Area/Action Bubble/Divider",tags:["autodocs"],parameters:{layout:"centered"}},n={name:"Date Divider",render:()=>e.jsx(o,{children:e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:e.jsx(i,{children:"Today"})})})})},l={name:"New Message Divider",render:()=>e.jsx(o,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:e.jsx(i,{children:"New"})})]})})},s={name:"Thread Replies Divider",render:()=>e.jsx(o,{children:e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:e.jsx(i,{children:"4 Replies"})}),e.jsx("div",{className:"action-bubble-divider__line"})]})})},t={name:"All Dividers",render:()=>e.jsxs(o,{width:400,children:[e.jsx("div",{className:"action-bubble-divider",children:e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--date",children:e.jsx(i,{children:"Today"})})}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("div",{className:"action-bubble-divider__line action-bubble-divider__line--new"}),e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--new",children:e.jsx(i,{children:"New"})})]}),e.jsxs("div",{className:"action-bubble-divider",children:[e.jsx("span",{className:"action-bubble-divider__label action-bubble-divider__label--thread",children:e.jsx(i,{children:"4 Replies"})}),e.jsx("div",{className:"action-bubble-divider__line"})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(v,{title:"HTML Structure",children:e.jsx(B,{language:"HTML",code:`<!-- Date Divider (no lines) -->
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
</div>`})}),e.jsx(v,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(b,{title:"Date Divider",description:"Centered date label (Today, Yesterday, etc.) with pill border. No lines."}),e.jsx(b,{title:"New Message Divider",description:"Red line with 'New' label aligned right — marks unread messages."}),e.jsx(b,{title:"Thread Replies Divider",description:"Reply count label aligned left with line extending right."})]})})]})};function o({children:a,width:r=360}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:a})}function v({title:a,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:a})}),r]})}function B({language:a,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function b({title:a,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:a})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:r})})]})}const d={parameters:{docs:{disable:!0}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Date Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date"><T>Today</T></span>
      </div>
    </Wrapper>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,h,g;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "New Message Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new"><T>New</T></span>
      </div>
    </Wrapper>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,j,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Thread Replies Divider",
  render: () => <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread"><T>4 Replies</T></span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,f,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All Dividers",
  render: () => <Wrapper width={400}>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date"><T>Today</T></span>
      </div>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new"><T>New</T></span>
      </div>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread"><T>4 Replies</T></span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var D,T,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var R,C,W,M,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source},description:{story:"Interactive playground.",...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};const I=["DateDivider","NewMessageDivider","ThreadRepliesDivider","AllDividers","Usage","Playground"];export{t as AllDividers,n as DateDivider,l as NewMessageDivider,d as Playground,s as ThreadRepliesDivider,c as Usage,I as __namedExportsOrder,E as default};
