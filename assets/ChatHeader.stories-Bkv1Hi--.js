import{j as a}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import{T as E}from"./TypingIndicator-4aXDLT6o.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K={title:"Core Components/Chat Area/Chat Header",tags:["autodocs"],parameters:{layout:"padded"}},c={name:"Default",render:()=>a.jsx(n,{})},s={name:"With Typing Indicator",render:()=>a.jsx(n,{showTyping:!0})},o={name:"Last Seen",render:()=>a.jsx(n,{status:"Last seen today at 2:30 PM"})},i={name:"Without Back Button",render:()=>a.jsx(n,{showBack:!1})},d={name:"Loading",render:()=>a.jsx(G,{})},l={name:"All States",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[a.jsx(n,{}),a.jsx(n,{status:"Last seen today at 2:30 PM"}),a.jsx(n,{showTyping:!0}),a.jsx(G,{})]})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[a.jsx(p,{title:"HTML Structure",children:a.jsx(v,{language:"HTML",code:`<!-- Chat Area Header — Default -->
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
</div>`})}),a.jsx(p,{title:"CSS (CometChat Tokens)",children:a.jsx(v,{language:"CSS",code:`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--cometchat-font-family);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: var(--cometchat-text-color-primary);
}

.chat-header__status {
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-text-color-tertiary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}`})}),a.jsx(p,{title:"Variants",children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[a.jsx(m,{title:"Default",description:"Shows avatar, name, status (Online), and action buttons (video, call, more)."}),a.jsx(m,{title:"Last Seen",description:"User is offline — shows last seen timestamp instead of Online."}),a.jsx(m,{title:"With Typing",description:"Status text replaced with typing indicator (dots + 'Typing' in highlight color)."}),a.jsx(m,{title:"Loading",description:"Skeleton placeholders for all elements while data loads."})]})})]})};function n({showBack:e=!0,showTyping:t=!1,status:R="Online"}){return a.jsxs("div",{className:"chat-header",children:[e&&a.jsx("button",{className:"chat-header__back-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"arrow_back"})}),a.jsxs("div",{className:"chat-header__info",children:[a.jsx("div",{className:"chat-header__avatar",children:a.jsx("div",{className:"chat-header__avatar-placeholder",children:"GA"})}),a.jsxs("div",{className:"chat-header__text",children:[a.jsx("span",{className:"chat-header__name",children:"George Alan"}),a.jsx("div",{className:"chat-header__status-row",children:t?a.jsx(E,{activity:"typing",context:"single"}):a.jsx("span",{className:"chat-header__status",children:R})})]})]}),a.jsxs("div",{className:"chat-header__actions",children:[a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"videocam"})}),a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"call"})}),a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"more_vert"})})]})]})}function G(){return a.jsx("div",{className:"chat-header",children:a.jsxs("div",{className:"chat-header__info",children:[a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--avatar"}),a.jsxs("div",{className:"chat-header__text",children:[a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--name"}),a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--status"})]})]})})}function p({title:e,children:t}){return a.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[a.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e}),t]})}function v({language:e,code:t}){return a.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:a.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:e})}),a.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:a.jsx("code",{children:t})})]})}function m({title:e,description:t}){return a.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[a.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e}),a.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:t})]})}const r={parameters:{docs:{disable:!0}}};var _,u,g;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  render: () => <ChatHeader />
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "With Typing Indicator",
  render: () => <ChatHeader showTyping />
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,k,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Last Seen",
  render: () => <ChatHeader status="Last seen today at 2:30 PM" />
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var S,C,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Without Back Button",
  render: () => <ChatHeader showBack={false} />
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,N,H;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Loading",
  render: () => <ChatHeaderSkeleton />
}`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var L,B,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
  }}>
      <ChatHeader />
      <ChatHeader status="Last seen today at 2:30 PM" />
      <ChatHeader showTyping />
      <ChatHeaderSkeleton />
    </div>
}`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var z,A,U;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--cometchat-font-family);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: var(--cometchat-text-color-primary);
}

.chat-header__status {
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-text-color-tertiary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
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
}`,...(O=(M=r.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Interactive playground.",...(P=(I=r.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};const Q=["Default","WithTypingIndicator","LastSeen","WithoutBackButton","Loading","AllStates","Usage","Playground"];export{l as AllStates,c as Default,o as LastSeen,d as Loading,r as Playground,h as Usage,s as WithTypingIndicator,i as WithoutBackButton,Q as __namedExportsOrder,K as default};
