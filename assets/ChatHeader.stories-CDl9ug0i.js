import{j as a}from"./jsx-runtime-BYYWji4R.js";import{T as r}from"./T-C6nayWAE.js";/* empty css                    */import{T as V}from"./TypingIndicator-BfTmKHib.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Core Components/Chat Area/Chat Header",tags:["autodocs"],parameters:{layout:"padded"}},s={name:"Default",render:()=>a.jsx(n,{})},o={name:"With Typing Indicator",render:()=>a.jsx(n,{showTyping:!0})},i={name:"Last Seen",render:()=>a.jsx(n,{status:"Last seen today at 2:30 PM"})},d={name:"Without Back Button",render:()=>a.jsx(n,{showBack:!1})},l={name:"Loading",render:()=>a.jsx(R,{})},h={name:"All States",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[a.jsx(n,{}),a.jsx(n,{status:"Last seen today at 2:30 PM"}),a.jsx(n,{showTyping:!0}),a.jsx(R,{})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[a.jsx(v,{title:"HTML Structure",children:a.jsx(_,{language:"HTML",code:`<!-- Chat Area Header — Default -->
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
</div>`})}),a.jsx(v,{title:"CSS (CometChat Tokens)",children:a.jsx(_,{language:"CSS",code:`.chat-header {
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
}`})}),a.jsx(v,{title:"Variants",children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[a.jsx(p,{title:"Default",description:"Shows avatar, name, status (Online), and action buttons (video, call, more)."}),a.jsx(p,{title:"Last Seen",description:"User is offline — shows last seen timestamp instead of Online."}),a.jsx(p,{title:"With Typing",description:"Status text replaced with typing indicator (dots + 'Typing' in highlight color)."}),a.jsx(p,{title:"Loading",description:"Skeleton placeholders for all elements while data loads."})]})})]})};function n({showBack:e=!0,showTyping:t=!1,status:E="Online"}){return a.jsxs("div",{className:"chat-header",children:[e&&a.jsx("button",{className:"chat-header__back-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},"data-icon-mirror":!0,children:"arrow_back"})}),a.jsxs("div",{className:"chat-header__info",children:[a.jsx("div",{className:"chat-header__avatar",children:a.jsx("div",{className:"chat-header__avatar-placeholder",children:a.jsx(r,{children:"GA"})})}),a.jsxs("div",{className:"chat-header__text",children:[a.jsx("span",{className:"chat-header__name",children:a.jsx(r,{children:"George Alan"})}),a.jsx("div",{className:"chat-header__status-row",children:t?a.jsx(V,{activity:"typing",context:"single"}):a.jsx("span",{className:"chat-header__status",children:a.jsx(r,{children:E})})})]})]}),a.jsxs("div",{className:"chat-header__actions",children:[a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"videocam"})}),a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"call"})}),a.jsx("button",{className:"chat-header__action-btn",children:a.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-icon-color-primary)"},children:"more_vert"})})]})]})}function R(){return a.jsx("div",{className:"chat-header",children:a.jsxs("div",{className:"chat-header__info",children:[a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--avatar"}),a.jsxs("div",{className:"chat-header__text",children:[a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--name"}),a.jsx("div",{className:"chat-header__skeleton chat-header__skeleton--status"})]})]})})}function v({title:e,children:t}){return a.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[a.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:a.jsx(r,{children:e})}),t]})}function _({language:e,code:t}){return a.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:a.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:e})}),a.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:a.jsx("code",{children:t})})]})}function p({title:e,description:t}){return a.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[a.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:a.jsx(r,{children:e})}),a.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:a.jsx(r,{children:t})})]})}const c={parameters:{docs:{disable:!0}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  render: () => <ChatHeader />
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With Typing Indicator",
  render: () => <ChatHeader showTyping />
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,k,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Last Seen",
  render: () => <ChatHeader status="Last seen today at 2:30 PM" />
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,w,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Without Back Button",
  render: () => <ChatHeader showBack={false} />
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var N,H,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Loading",
  render: () => <ChatHeaderSkeleton />
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var B,W,z;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var A,U,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(U=m.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var M,O,I,P,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(I=(O=c.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:"Interactive playground.",...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};const Z=["Default","WithTypingIndicator","LastSeen","WithoutBackButton","Loading","AllStates","Usage","Playground"];export{h as AllStates,s as Default,i as LastSeen,l as Loading,c as Playground,m as Usage,o as WithTypingIndicator,d as WithoutBackButton,Z as __namedExportsOrder,Y as default};
