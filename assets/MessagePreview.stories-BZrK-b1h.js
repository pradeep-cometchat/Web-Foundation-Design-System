import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({mode:d="reply",senderName:R,messageText:z,onClose:l}){return e.jsxs("div",{className:"message-preview",children:[e.jsx("div",{className:`message-preview__border message-preview__border--${d}`}),e.jsxs("div",{className:"message-preview__content",children:[e.jsx("span",{className:`message-preview__sender message-preview__sender--${d}`,children:R}),e.jsxs("div",{className:"message-preview__text-container",children:[d==="deleted"&&e.jsx("span",{className:"message-preview__deleted-icon",children:e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M4.7 15.3L15.3 4.7",stroke:"currentColor",strokeWidth:"1.5"})]})}),e.jsx("span",{className:"message-preview__text",children:z})]})]}),l&&e.jsx("button",{type:"button",className:"message-preview__close",onClick:l,"aria-label":"Dismiss",children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}try{s.displayName="MessagePreview",s.__docgenInfo={description:"",displayName:"MessagePreview",props:{mode:{defaultValue:{value:"reply"},description:"Mode: reply (quoting someone), edit (editing own message), or deleted",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"reply"'},{value:'"edit"'},{value:'"deleted"'}]}},senderName:{defaultValue:null,description:"Sender name displayed in the preview",name:"senderName",required:!0,type:{name:"string"}},messageText:{defaultValue:null,description:"Message text being quoted/edited",name:"messageText",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback when the close/dismiss button is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const H={title:"Base Components/Message Preview",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A compact message representation shown inside the message composer when replying to,\nediting, or referencing a deleted message. Displays the sender name, a truncated\nmessage preview, a colored left border, and an optional close/dismiss button.\n\n**Structure (from Figma — Reply Message Composer):**\n- Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)\n- Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)\n- Sender: 12px, weight 500, colored to match border\n- Message text: 12px, weight 400, `--color-neutral-500`, single line truncated\n- Close button: 20px, top-right, `--color-neutral-500`\n\n**Modes:**\n- `reply` — quoting another user's message (purple border + name)\n- `edit` — editing your own message (blue border + name)\n- `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)"}}},argTypes:{mode:{control:"select",options:["reply","edit","deleted"],description:"Preview mode."},senderName:{control:"text",description:"Sender name."},messageText:{control:"text",description:"Message text being quoted/edited."},onClose:{control:!1}}},r={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}},o={args:{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}}},t={args:{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"}},a={args:{mode:"reply",senderName:"Sarah Johnson",messageText:"Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",onClose:()=>{}}},n={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Reply"}),e.jsx(s,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Edit"}),e.jsx(s,{mode:"edit",senderName:"You",messageText:"Yes, it's available. Let me send you the details.",onClose:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Deleted"}),e.jsx(s,{mode:"deleted",senderName:"Dave",messageText:"This message was deleted"})]})]})},i={args:{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}},parameters:{docs:{disable:!0}}};var m,c,p,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {}
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Reply mode — quoting another user's message. Matches Figma exactly.",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var v,x,h,y,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {}
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Edit mode — editing your own message. Blue accent color.",...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var f,b,T,C,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted"
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"Deleted mode — referencing a deleted message with block icon.",...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};var j,_,S,M,A;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {}
  }
}`,...(S=(_=a.parameters)==null?void 0:_.docs)==null?void 0:S.source},description:{story:"Long message text — demonstrates truncation.",...(A=(M=a.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var L,I,D,k,B;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>Reply</div>
        <MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>Edit</div>
        <MessagePreview mode="edit" senderName="You" messageText="Yes, it's available. Let me send you the details." onClose={() => {}} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 8
      }}>Deleted</div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"All modes side by side for comparison.",...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};var P,q,W,Y,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:"Interactive playground.",...(E=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:E.description}}};const J=["Reply","Edit","Deleted","LongMessage","AllModes","Playground"];export{n as AllModes,t as Deleted,o as Edit,a as LongMessage,i as Playground,r as Reply,J as __namedExportsOrder,H as default};
