import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import{T as F}from"./TypingIndicator-CW2KLN2j.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K={title:"Core Components/Chat Area/Chat Header",tags:["autodocs"],parameters:{layout:"padded"}},s={name:"Default",render:()=>e.jsx(n,{})},o={name:"With Typing Indicator",render:()=>e.jsx(n,{showTyping:!0})},i={name:"Last Seen",render:()=>e.jsx(n,{status:"Last seen today at 2:30 PM"})},d={name:"Without Back Button",render:()=>e.jsx(n,{showBack:!1})},c={name:"Loading",render:()=>e.jsx(G,{})},l={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(n,{}),e.jsx(n,{status:"Last seen today at 2:30 PM"}),e.jsx(n,{showTyping:!0}),e.jsx(G,{})]})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(v,{title:"HTML Structure",children:e.jsx(m,{language:"HTML",code:`<!-- Chat Area Header — Default -->
<div class="chat-header">
  <button class="chat-header__back-btn">
    <span class="icon-rounded">arrow_back</span>
  </button>
  <div class="chat-header__info">
    <div class="chat-header__avatar">
      <img src="avatar.jpg" alt="User" />
    </div>
    <div class="chat-header__text">
      <span class="chat-header__name">George Alan</span>
      <span class="chat-header__status">Online</span>
    </div>
  </div>
  <div class="chat-header__actions">
    <button class="chat-header__action-btn">
      <span class="icon-rounded">videocam</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">call</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">more_vert</span>
    </button>
  </div>
</div>

<!-- Chat Area Header — Loading -->
<div class="chat-header">
  <div class="chat-header__skeleton chat-header__skeleton--back"></div>
  <div class="chat-header__info">
    <div class="chat-header__skeleton chat-header__skeleton--avatar"></div>
    <div class="chat-header__text">
      <div class="chat-header__skeleton chat-header__skeleton--name"></div>
      <div class="chat-header__skeleton chat-header__skeleton--status"></div>
    </div>
  </div>
  <div class="chat-header__actions">
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
  </div>
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(m,{language:"CSS",code:`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--font-family-heading);
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-h3);
  color: var(--color-text-primary);
}

.chat-header__status {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-text-quaternary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}`})}),e.jsx(v,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(p,{title:"Default",description:"Shows avatar, name, status (Online), and action buttons (video, call, more)."}),e.jsx(p,{title:"Last Seen",description:"User is offline — shows last seen timestamp instead of Online."}),e.jsx(p,{title:"With Typing",description:"Status text replaced with typing indicator (dots + 'Typing' in highlight color)."}),e.jsx(p,{title:"Loading",description:"Skeleton placeholders for all elements while data loads."})]})})]})};function n({showBack:a=!0,showTyping:t=!1,status:V="Online"}){return e.jsxs("div",{className:"chat-header",children:[a&&e.jsx("button",{className:"chat-header__back-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-icon-primary)"},children:"arrow_back"})}),e.jsxs("div",{className:"chat-header__info",children:[e.jsx("div",{className:"chat-header__avatar",children:e.jsx("div",{className:"chat-header__avatar-placeholder",children:"GA"})}),e.jsxs("div",{className:"chat-header__text",children:[e.jsx("span",{className:"chat-header__name",children:"George Alan"}),e.jsx("div",{className:"chat-header__status-row",children:t?e.jsx(F,{activity:"typing",context:"single"}):e.jsx("span",{className:"chat-header__status",children:V})})]})]}),e.jsxs("div",{className:"chat-header__actions",children:[e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-icon-primary)"},children:"videocam"})}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-icon-primary)"},children:"call"})}),e.jsx("button",{className:"chat-header__action-btn",children:e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-icon-primary)"},children:"more_vert"})})]})]})}function G(){return e.jsx("div",{className:"chat-header",children:e.jsxs("div",{className:"chat-header__info",children:[e.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--avatar"}),e.jsxs("div",{className:"chat-header__text",children:[e.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--name"}),e.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--status"})]})]})})}function v({title:a,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:a}),t]})}function m({language:a,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function p({title:a,description:t}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:a}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:t})]})}const r={parameters:{docs:{disable:!0}}};var _,u,g;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  render: () => <ChatHeader />
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With Typing Indicator",
  render: () => <ChatHeader showTyping />
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,j,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Last Seen",
  render: () => <ChatHeader status="Last seen today at 2:30 PM" />
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,w,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Without Back Button",
  render: () => <ChatHeader showBack={false} />
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,H,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Loading",
  render: () => <ChatHeaderSkeleton />
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var T,z,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <ChatHeader />
      <ChatHeader status="Last seen today at 2:30 PM" />
      <ChatHeader showTyping />
      <ChatHeaderSkeleton />
    </div>
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var W,A,U;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Chat Area Header — Default -->
<div class="chat-header">
  <button class="chat-header__back-btn">
    <span class="icon-rounded">arrow_back</span>
  </button>
  <div class="chat-header__info">
    <div class="chat-header__avatar">
      <img src="avatar.jpg" alt="User" />
    </div>
    <div class="chat-header__text">
      <span class="chat-header__name">George Alan</span>
      <span class="chat-header__status">Online</span>
    </div>
  </div>
  <div class="chat-header__actions">
    <button class="chat-header__action-btn">
      <span class="icon-rounded">videocam</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">call</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">more_vert</span>
    </button>
  </div>
</div>

<!-- Chat Area Header — Loading -->
<div class="chat-header">
  <div class="chat-header__skeleton chat-header__skeleton--back"></div>
  <div class="chat-header__info">
    <div class="chat-header__skeleton chat-header__skeleton--avatar"></div>
    <div class="chat-header__text">
      <div class="chat-header__skeleton chat-header__skeleton--name"></div>
      <div class="chat-header__skeleton chat-header__skeleton--status"></div>
    </div>
  </div>
  <div class="chat-header__actions">
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--font-family-heading);
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-h3);
  color: var(--color-text-primary);
}

.chat-header__status {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-text-quaternary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Default" description="Shows avatar, name, status (Online), and action buttons (video, call, more)." />
          <StateCard title="Last Seen" description="User is offline — shows last seen timestamp instead of Online." />
          <StateCard title="With Typing" description="Status text replaced with typing indicator (dots + 'Typing' in highlight color)." />
          <StateCard title="Loading" description="Skeleton placeholders for all elements while data loads." />
        </div>
      </UsageSection>
    </div>
}`,...(U=(A=h.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var D,M,O,I,P;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(O=(M=r.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Interactive playground.",...(P=(I=r.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};const Q=["Default","WithTypingIndicator","LastSeen","WithoutBackButton","Loading","AllStates","Usage","Playground"];export{l as AllStates,s as Default,i as LastSeen,c as Loading,r as Playground,h as Usage,o as WithTypingIndicator,d as WithoutBackButton,Q as __namedExportsOrder,K as default};
