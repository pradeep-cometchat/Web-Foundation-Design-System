import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as c}from"./MessagePreview-BQuL-8-I.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z={title:"Base Components/Message Preview",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A compact message representation shown inside the message composer when replying to,\nediting, or referencing a deleted message. Displays the sender name, a truncated\nmessage preview, a colored left border, and an optional close/dismiss button.\n\n**Structure (from Figma — Reply Message Composer):**\n- Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)\n- Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)\n- Sender: 12px, weight 500, colored to match border\n- Message text: 12px, weight 400, `--color-neutral-500`, single line truncated\n- Close button: 20px, top-right, `--color-neutral-500`\n\n**Modes:**\n- `reply` — quoting another user's message (purple border + name)\n- `edit` — editing your own message (blue border + name)\n- `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)"}}},argTypes:{mode:{control:"select",options:["reply","edit","deleted"],description:"Preview mode."},senderName:{control:"text",description:"Sender name."},messageText:{control:"text",description:"Message text being quoted/edited."},onClose:{control:!1}}},s={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}},a={args:{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}}},r={args:{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"}},t={args:{mode:"reply",senderName:"Sarah Johnson",messageText:"Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",onClose:()=>{}}},o={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Reply"}),e.jsx(c,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Edit"}),e.jsx(c,{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Deleted"}),e.jsx(c,{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"})]})]})},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(p,{title:"HTML",children:e.jsx(m,{language:"HTML",code:`<!-- Reply mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--reply"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--reply">George Alan</span>
    <div class="message-preview__text-container">
      <span class="message-preview__text">Awesome! Can I see a couple of pictures?</span>
    </div>
  </div>
  <button class="message-preview__close" type="button"><!-- X icon --></button>
</div>

<!-- Deleted mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--deleted"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--deleted">Dave</span>
    <div class="message-preview__text-container">
      <span class="message-preview__deleted-icon"><!-- block icon --></span>
      <span class="message-preview__text">This message was deleted</span>
    </div>
  </div>
</div>`})}),e.jsx(p,{title:"CSS (CometChat Tokens)",children:e.jsx(m,{language:"CSS",code:`.message-preview {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  background: var(--cometchat-background-color-03);
  border-radius: var(--cometchat-radius-1);
  overflow: hidden;
  position: relative;
}

.message-preview__border {
  width: 4px;
  align-self: stretch;
  border-radius: var(--cometchat-radius-1) 0 0 var(--cometchat-radius-1);
}

.message-preview__border--reply {
  background: var(--cometchat-primary-color);
}

.message-preview__sender {
  font-size: 12px;
  font-weight: 500;
}

.message-preview__sender--reply {
  color: var(--cometchat-primary-color);
}

.message-preview__text {
  font-size: 12px;
  font-weight: 400;
  color: var(--cometchat-text-color-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-preview__close {
  position: absolute;
  top: var(--cometchat-spacing-2);
  right: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}`})})]})},i={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}},parameters:{docs:{disable:!0}}},m=({language:d,code:l})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:d})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:l})})]});function p({title:d,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:d}),l]})}var g,v,u,h,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  }
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source},description:{story:"Reply mode — quoting another user's message. Matches Figma exactly.",...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var x,y,f,_,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {}
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Edit mode — editing your own message. Blue accent color.",...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var S,C,T,j,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted"
  }
}`,...(T=(C=r.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Deleted mode — referencing a deleted message with block icon.",...(M=(j=r.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};var A,k,D,N,I;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {}
  }
}`,...(D=(k=t.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"Long message text — demonstrates truncation.",...(I=(N=t.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var z,L,B,R,U;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)"
  }}>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>Reply</div>
        <MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>Edit</div>
        <MessagePreview mode="edit" senderName="You" messageText="Yes, it's available. Let me send you the details." onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--cometchat-spacing-2)"
      }}>Deleted</div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
}`,...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"All modes side by side for comparison.",...(U=(R=o.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var W,P,G,H,Y;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- Reply mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--reply"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--reply">George Alan</span>
    <div class="message-preview__text-container">
      <span class="message-preview__text">Awesome! Can I see a couple of pictures?</span>
    </div>
  </div>
  <button class="message-preview__close" type="button"><!-- X icon --></button>
</div>

<!-- Deleted mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--deleted"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--deleted">Dave</span>
    <div class="message-preview__text-container">
      <span class="message-preview__deleted-icon"><!-- block icon --></span>
      <span class="message-preview__text">This message was deleted</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.message-preview {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  background: var(--cometchat-background-color-03);
  border-radius: var(--cometchat-radius-1);
  overflow: hidden;
  position: relative;
}

.message-preview__border {
  width: 4px;
  align-self: stretch;
  border-radius: var(--cometchat-radius-1) 0 0 var(--cometchat-radius-1);
}

.message-preview__border--reply {
  background: var(--cometchat-primary-color);
}

.message-preview__sender {
  font-size: 12px;
  font-weight: 500;
}

.message-preview__sender--reply {
  color: var(--cometchat-primary-color);
}

.message-preview__text {
  font-size: 12px;
  font-weight: 400;
  color: var(--cometchat-text-color-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-preview__close {
  position: absolute;
  top: var(--cometchat-spacing-2);
  right: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}\`} />
      </UsageSection>
    </div>
}`,...(G=(P=n.parameters)==null?void 0:P.docs)==null?void 0:G.source},description:{story:"HTML & CSS usage reference for the Message Preview component.",...(Y=(H=n.parameters)==null?void 0:H.docs)==null?void 0:Y.description}}};var E,q,F,X,J;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"Interactive playground.",...(J=(X=i.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};const $=["Reply","Edit","Deleted","LongMessage","AllModes","Usage","Playground"];export{o as AllModes,r as Deleted,a as Edit,t as LongMessage,i as Playground,s as Reply,n as Usage,$ as __namedExportsOrder,Z as default};
