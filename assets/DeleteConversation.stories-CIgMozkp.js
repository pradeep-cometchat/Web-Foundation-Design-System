import{j as o}from"./jsx-runtime-BYYWji4R.js";import{C as S}from"./ConfirmationDialog-nKBIVOvl.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U={title:"Base Components/Dialog/Confirmation Dialogs/Delete Conversation",component:S,parameters:{layout:"centered"},decorators:[n=>o.jsx(j,{children:o.jsx(n,{})})]};function j({children:n}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const a={args:{variant:"deleteConversation"}},t={args:{variant:"deleteConversation",title:"Delete Chat with John?",description:"All messages in this chat will be permanently removed. This cannot be undone."}},e={name:"Custom Labels",args:{variant:"deleteConversation",confirmLabel:"Delete Forever",cancelLabel:"Keep Chat"}},r={args:{variant:"deleteConversation",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};function l({title:n,children:c}){return o.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[o.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:n}),c]})}function s({language:n,code:c}){return o.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[o.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:o.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:n})}),o.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:o.jsx("code",{children:c})})]})}const i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>o.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[o.jsx(l,{title:"HTML",children:o.jsx(s,{language:"HTML",code:`<div class="confirmation-dialog__overlay">
  <div class="confirmation-dialog">
    <div class="confirmation-dialog__icon-wrap">
      <div class="confirmation-dialog__icon">
        <!-- SVG icon here -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Delete Conversation?</h2>
      <p class="confirmation-dialog__description">
        This conversation will be permanently deleted. This action cannot be undone.
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      </div>
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Delete</button>
      </div>
    </div>
  </div>
</div>`})}),o.jsx(l,{title:"CSS (CometChat Tokens)",children:o.jsx(s,{language:"CSS",code:`.confirmation-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.confirmation-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-6);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__icon {
  width: 48px;
  height: 48px;
  color: var(--cometchat-error-color);
}

.confirmation-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--cometchat-text-color-primary);
}

.confirmation-dialog__description {
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  color: var(--cometchat-text-color-secondary);
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  padding: var(--cometchat-spacing-3) 0 0;
}

.confirmation-dialog__btn--cancel {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}

.confirmation-dialog__btn--confirm {
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}`})})]})};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation"
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,h,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description: "All messages in this chat will be permanently removed. This cannot be undone."
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,u,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "deleteConversation",
    confirmLabel: "Delete Forever",
    cancelLabel: "Keep Chat"
  }
}`,...(x=(u=e.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,_,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    confirmLabel: {
      control: "text"
    },
    cancelLabel: {
      control: "text"
    },
    open: {
      control: "boolean"
    }
  }
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var C,w,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="confirmation-dialog__overlay">
  <div class="confirmation-dialog">
    <div class="confirmation-dialog__icon-wrap">
      <div class="confirmation-dialog__icon">
        <!-- SVG icon here -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Delete Conversation?</h2>
      <p class="confirmation-dialog__description">
        This conversation will be permanently deleted. This action cannot be undone.
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      </div>
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Delete</button>
      </div>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.confirmation-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.confirmation-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-6);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__icon {
  width: 48px;
  height: 48px;
  color: var(--cometchat-error-color);
}

.confirmation-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--cometchat-text-color-primary);
}

.confirmation-dialog__description {
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  color: var(--cometchat-text-color-secondary);
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  padding: var(--cometchat-spacing-3) 0 0;
}

.confirmation-dialog__btn--cancel {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}

.confirmation-dialog__btn--confirm {
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}\`} />
      </UsageSection>
    </div>
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const H=["Default","CustomContent","CustomLabels","Playground","Usage"];export{t as CustomContent,e as CustomLabels,a as Default,r as Playground,i as Usage,H as __namedExportsOrder,U as default};
