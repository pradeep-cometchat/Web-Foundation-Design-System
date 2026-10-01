import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as c}from"./T-B-X7QtOX.js";import{M as d}from"./MessagePreview-D7viVcBv.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee={title:"Base Components/Message Preview",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A compact message representation shown inside the message composer when replying to,\nediting, or referencing a deleted message. Displays the sender name, a truncated\nmessage preview, a colored left border, and an optional close/dismiss button.\n\n**Structure (from Figma — Reply Message Composer):**\n- Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)\n- Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)\n- Sender: 12px, weight 500, colored to match border\n- Message text: 12px, weight 400, `--color-neutral-500`, single line truncated\n- Close button: 20px, top-right, `--color-neutral-500`\n\n**Modes:**\n- `reply` — quoting another user's message (purple border + name)\n- `edit` — editing your own message (blue border + name)\n- `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)"}}},argTypes:{mode:{control:"select",options:["reply","edit","deleted"],description:"Preview mode."},senderName:{control:"text",description:"Sender name."},messageText:{control:"text",description:"Message text being quoted/edited."},onClose:{control:!1}}},s={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}},r={args:{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}}},a={args:{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"}},t={args:{mode:"reply",senderName:"Sarah Johnson",messageText:"Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",onClose:()=>{}}},o={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(c,{children:"Reply"})}),e.jsx(d,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(c,{children:"Edit"})}),e.jsx(d,{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(c,{children:"Deleted"})}),e.jsx(d,{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"})]})]})},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(p,{language:"HTML",code:`<!-- Reply mode -->
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
</div>`})}),e.jsx(g,{title:"CSS (CometChat Tokens)",children:e.jsx(p,{language:"CSS",code:`.message-preview {
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
  inset-inline-end: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}`})})]})},i={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}},parameters:{docs:{disable:!0}}},p=({language:l,code:m})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:m})})]});function g({title:l,children:m}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(c,{children:l})}),m]})}var v,u,h,x,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Reply mode — quoting another user's message. Matches Figma exactly.",...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var y,f,_,b,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {}
  }
}`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source},description:{story:"Edit mode — editing your own message. Blue accent color.",...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var S,C,j,M,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted"
  }
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:"Deleted mode — referencing a deleted message with block icon.",...(A=(M=a.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var k,D,N,I,z;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {}
  }
}`,...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Long message text — demonstrates truncation.",...(z=(I=t.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};var L,B,R,U,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      }}><T>Reply</T></div>
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
      }}><T>Edit</T></div>
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
      }}><T>Deleted</T></div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
}`,...(R=(B=o.parameters)==null?void 0:B.docs)==null?void 0:R.source},description:{story:"All modes side by side for comparison.",...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var P,G,H,Y,E;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  inset-inline-end: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}\`} />
      </UsageSection>
    </div>
}`,...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"HTML & CSS usage reference for the Message Preview component.",...(E=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:E.description}}};var q,F,X,J,O;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(F=i.parameters)==null?void 0:F.docs)==null?void 0:X.source},description:{story:"Interactive playground.",...(O=(J=i.parameters)==null?void 0:J.docs)==null?void 0:O.description}}};const se=["Reply","Edit","Deleted","LongMessage","AllModes","Usage","Playground"];export{o as AllModes,a as Deleted,r as Edit,t as LongMessage,i as Playground,s as Reply,n as Usage,se as __namedExportsOrder,ee as default};
