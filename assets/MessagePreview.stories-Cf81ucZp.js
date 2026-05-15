import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r({mode:s="reply",senderName:a,messageText:$,onClose:p}){return e.jsxs("div",{className:"message-preview",children:[e.jsx("div",{className:`message-preview__border message-preview__border--${s}`}),e.jsxs("div",{className:"message-preview__content",children:[e.jsx("span",{className:`message-preview__sender message-preview__sender--${s}`,children:a}),e.jsxs("div",{className:"message-preview__text-container",children:[s==="deleted"&&e.jsx("span",{className:"message-preview__deleted-icon",children:e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M4.7 15.3L15.3 4.7",stroke:"currentColor",strokeWidth:"1.5"})]})}),e.jsx("span",{className:"message-preview__text",children:$})]})]}),p&&e.jsx("button",{type:"button",className:"message-preview__close",onClick:p,"aria-label":"Dismiss",children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}try{r.displayName="MessagePreview",r.__docgenInfo={description:"",displayName:"MessagePreview",props:{mode:{defaultValue:{value:"reply"},description:"Mode: reply (quoting someone), edit (editing own message), or deleted",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"reply"'},{value:'"edit"'},{value:'"deleted"'}]}},senderName:{defaultValue:null,description:"Sender name displayed in the preview",name:"senderName",required:!0,type:{name:"string"}},messageText:{defaultValue:null,description:"Message text being quoted/edited",name:"messageText",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback when the close/dismiss button is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const Z={title:"Base Components/Message Preview",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A compact message representation shown inside the message composer when replying to,\nediting, or referencing a deleted message. Displays the sender name, a truncated\nmessage preview, a colored left border, and an optional close/dismiss button.\n\n**Structure (from Figma — Reply Message Composer):**\n- Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)\n- Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)\n- Sender: 12px, weight 500, colored to match border\n- Message text: 12px, weight 400, `--color-neutral-500`, single line truncated\n- Close button: 20px, top-right, `--color-neutral-500`\n\n**Modes:**\n- `reply` — quoting another user's message (purple border + name)\n- `edit` — editing your own message (blue border + name)\n- `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)"}}},argTypes:{mode:{control:"select",options:["reply","edit","deleted"],description:"Preview mode."},senderName:{control:"text",description:"Sender name."},messageText:{control:"text",description:"Message text being quoted/edited."},onClose:{control:!1}}},o={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}},t={args:{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}}},n={args:{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"}},i={args:{mode:"reply",senderName:"Sarah Johnson",messageText:"Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",onClose:()=>{}}},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"Reply"}),e.jsx(r,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"Edit"}),e.jsx(r,{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:"Deleted"}),e.jsx(r,{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"})]})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(m,{language:"HTML",code:`<!-- Reply mode -->
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
</div>`})}),e.jsx(g,{title:"CSS (Foundation Variables)",children:e.jsx(m,{language:"CSS",code:`.message-preview {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  background: var(--color-bg-03);
  border-radius: var(--radius-xs);
  overflow: hidden;
  position: relative;
}

.message-preview__border {
  width: 4px;
  align-self: stretch;
  border-radius: var(--radius-xs) 0 0 var(--radius-xs);
}

.message-preview__border--reply {
  background: var(--color-ep-600);
}

.message-preview__sender {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-medium);
}

.message-preview__sender--reply {
  color: var(--color-ep-600);
}

.message-preview__text {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-preview__close {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  width: 20px;
  height: 20px;
  color: var(--color-text-tertiary);
}

.message-preview__close:hover {
  background: var(--color-bg-04);
}`})})]})},c={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}},parameters:{docs:{disable:!0}}},m=({language:s,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:s})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});function g({title:s,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:s}),a]})}var v,u,w,x,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:"Reply mode — quoting another user's message. Matches Figma exactly.",...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var f,_,y,b,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {}
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source},description:{story:"Edit mode — editing your own message. Blue accent color.",...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var C,j,T,N,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted"
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Deleted mode — referencing a deleted message with block icon.",...(M=(N=n.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var z,k,A,L,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {}
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"Long message text — demonstrates truncation.",...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.description}}};var I,W,B,P,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>Reply</div>
        <MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>Edit</div>
        <MessagePreview mode="edit" senderName="You" messageText="Yes, it's available. Let me send you the details." onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)"
      }}>Deleted</div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:"All modes side by side for comparison.",...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var U,q,G,H,Y;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.message-preview {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  background: var(--color-bg-03);
  border-radius: var(--radius-xs);
  overflow: hidden;
  position: relative;
}

.message-preview__border {
  width: 4px;
  align-self: stretch;
  border-radius: var(--radius-xs) 0 0 var(--radius-xs);
}

.message-preview__border--reply {
  background: var(--color-ep-600);
}

.message-preview__sender {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-medium);
}

.message-preview__sender--reply {
  color: var(--color-ep-600);
}

.message-preview__text {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-preview__close {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  width: 20px;
  height: 20px;
  color: var(--color-text-tertiary);
}

.message-preview__close:hover {
  background: var(--color-bg-04);
}\`} />
      </UsageSection>
    </div>
}`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"HTML & CSS usage reference for the Message Preview component.",...(Y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Y.description}}};var E,V,F,X,J;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"Interactive playground.",...(J=(X=c.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};const ee=["Reply","Edit","Deleted","LongMessage","AllModes","Usage","Playground"];export{d as AllModes,n as Deleted,t as Edit,i as LongMessage,c as Playground,o as Reply,l as Usage,ee as __namedExportsOrder,Z as default};
