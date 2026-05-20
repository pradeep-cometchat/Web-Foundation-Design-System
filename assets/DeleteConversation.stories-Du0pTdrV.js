import{j as n}from"./jsx-runtime-BYYWji4R.js";import{C as j}from"./ConfirmationDialog-BHEsCC6a.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U={title:"Base Components/Dialog/Confirmation Dialogs/Delete Conversation",component:j,parameters:{layout:"centered"},decorators:[o=>n.jsx(z,{children:n.jsx(o,{})})]};function z({children:o}){return n.jsxs("div",{className:"dialog-story-inline",children:[n.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),o]})}const a={args:{variant:"deleteConversation"}},e={args:{variant:"deleteConversation",title:"Delete Chat with John?",description:"All messages in this chat will be permanently removed. This cannot be undone."}},r={name:"Custom Labels",args:{variant:"deleteConversation",confirmLabel:"Delete Forever",cancelLabel:"Keep Chat"}},i={args:{variant:"deleteConversation",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};function s({title:o,children:l}){return n.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[n.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:o}),l]})}function c({language:o,code:l}){return n.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:n.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:o})}),n.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:n.jsx("code",{children:l})})]})}const t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>n.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[n.jsx(s,{title:"HTML",children:n.jsx(c,{language:"HTML",code:`<div class="confirmation-dialog__overlay">
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
</div>`})}),n.jsx(s,{title:"CSS (Foundation Variables)",children:n.jsx(c,{language:"CSS",code:`.confirmation-dialog__overlay {
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
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-6);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  background: var(--color-bg-02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__icon {
  width: 48px;
  height: 48px;
  color: var(--color-error);
}

.confirmation-dialog__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h2);
  color: var(--color-text-primary);
}

.confirmation-dialog__description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  color: var(--color-text-secondary);
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-3) 0 0;
}

.confirmation-dialog__btn--cancel {
  background: var(--color-bg-01);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  height: 40px;
}

.confirmation-dialog__btn--confirm {
  background: var(--color-error);
  color: var(--color-static-white);
  border: none;
  border-radius: var(--radius-md);
  height: 40px;
}`})})]})};var d,g,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation"
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,v,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description: "All messages in this chat will be permanently removed. This cannot be undone."
  }
}`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var u,b,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "deleteConversation",
    confirmLabel: "Delete Forever",
    cancelLabel: "Keep Chat"
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,_,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var C,w,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
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
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-6);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  background: var(--color-bg-02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__icon {
  width: 48px;
  height: 48px;
  color: var(--color-error);
}

.confirmation-dialog__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h2);
  color: var(--color-text-primary);
}

.confirmation-dialog__description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  color: var(--color-text-secondary);
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-3) 0 0;
}

.confirmation-dialog__btn--cancel {
  background: var(--color-bg-01);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  height: 40px;
}

.confirmation-dialog__btn--confirm {
  background: var(--color-error);
  color: var(--color-static-white);
  border: none;
  border-radius: var(--radius-md);
  height: 40px;
}\`} />
      </UsageSection>
    </div>
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const F=["Default","CustomContent","CustomLabels","Playground","Usage"];export{e as CustomContent,r as CustomLabels,a as Default,i as Playground,t as Usage,F as __namedExportsOrder,U as default};
