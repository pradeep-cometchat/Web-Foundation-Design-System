import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r({mode:s="reply",senderName:a,messageText:$,onClose:m}){return e.jsxs("div",{className:"message-preview",children:[e.jsx("div",{className:`message-preview__border message-preview__border--${s}`}),e.jsxs("div",{className:"message-preview__content",children:[e.jsx("span",{className:`message-preview__sender message-preview__sender--${s}`,children:a}),e.jsxs("div",{className:"message-preview__text-container",children:[s==="deleted"&&e.jsx("span",{className:"message-preview__deleted-icon",children:e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M4.7 15.3L15.3 4.7",stroke:"currentColor",strokeWidth:"1.5"})]})}),e.jsx("span",{className:"message-preview__text",children:$})]})]}),m&&e.jsx("button",{type:"button",className:"message-preview__close",onClick:m,"aria-label":"Dismiss",children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}try{r.displayName="MessagePreview",r.__docgenInfo={description:"",displayName:"MessagePreview",props:{mode:{defaultValue:{value:"reply"},description:"Mode: reply (quoting someone), edit (editing own message), or deleted",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"reply"'},{value:'"edit"'},{value:'"deleted"'}]}},senderName:{defaultValue:null,description:"Sender name displayed in the preview",name:"senderName",required:!0,type:{name:"string"}},messageText:{defaultValue:null,description:"Message text being quoted/edited",name:"messageText",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback when the close/dismiss button is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const Z={title:"Base Components/Message Preview",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A compact message representation shown inside the message composer when replying to,\nediting, or referencing a deleted message. Displays the sender name, a truncated\nmessage preview, a colored left border, and an optional close/dismiss button.\n\n**Structure (from Figma — Reply Message Composer):**\n- Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)\n- Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)\n- Sender: 12px, weight 500, colored to match border\n- Message text: 12px, weight 400, `--color-neutral-500`, single line truncated\n- Close button: 20px, top-right, `--color-neutral-500`\n\n**Modes:**\n- `reply` — quoting another user's message (purple border + name)\n- `edit` — editing your own message (blue border + name)\n- `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)"}}},argTypes:{mode:{control:"select",options:["reply","edit","deleted"],description:"Preview mode."},senderName:{control:"text",description:"Sender name."},messageText:{control:"text",description:"Message text being quoted/edited."},onClose:{control:!1}}},t={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}},o={args:{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}}},n={args:{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"}},i={args:{mode:"reply",senderName:"Sarah Johnson",messageText:"Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",onClose:()=>{}}},c={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Reply"}),e.jsx(r,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Edit"}),e.jsx(r,{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:"Deleted"}),e.jsx(r,{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"})]})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(p,{language:"HTML",code:`<!-- Reply mode -->
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
  right: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}`})})]})},l={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}},parameters:{docs:{disable:!0}}},p=({language:s,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:s})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});function g({title:s,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:s}),a]})}var v,u,h,w,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Reply mode — quoting another user's message. Matches Figma exactly.",...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var _,y,f,b,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {}
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Edit mode — editing your own message. Blue accent color.",...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var S,j,T,k,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted"
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Deleted mode — referencing a deleted message with block icon.",...(N=(k=n.parameters)==null?void 0:k.docs)==null?void 0:N.description}}};var M,A,L,D,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {}
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:"Long message text — demonstrates truncation.",...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var z,W,B,P,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:"All modes side by side for comparison.",...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var U,q,G,H,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"HTML & CSS usage reference for the Message Preview component.",...(Y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Y.description}}};var E,V,F,X,J;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(V=l.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"Interactive playground.",...(J=(X=l.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};const ee=["Reply","Edit","Deleted","LongMessage","AllModes","Usage","Playground"];export{c as AllModes,n as Deleted,o as Edit,i as LongMessage,l as Playground,t as Reply,d as Usage,ee as __namedExportsOrder,Z as default};
