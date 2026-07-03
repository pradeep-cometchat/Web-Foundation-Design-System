import{j as o}from"./jsx-runtime-BYYWji4R.js";import{C as M}from"./ConfirmationDialog-nKBIVOvl.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const H={title:"Base Components/Dialog/Confirmation Dialogs/Ban Member",component:M,parameters:{layout:"centered"},decorators:[n=>o.jsx(D,{children:o.jsx(n,{})})]};function D({children:n}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const a={args:{variant:"banMember"}},t={name:"Custom Title",args:{variant:"banMember",title:"Ban @toxic_user from Community?"}},r={name:"Custom Description",args:{variant:"banMember",description:"This member will be permanently removed and will not be able to rejoin this group. All their messages will remain visible."}},e={name:"Custom Labels",args:{variant:"banMember",confirmLabel:"Ban Permanently",cancelLabel:"Nevermind"}},i={args:{variant:"banMember",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>o.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[o.jsx(l,{title:"HTML",children:o.jsx(d,{language:"HTML",code:`<div class="confirmation-dialog__overlay">
  <div class="confirmation-dialog">
    <div class="confirmation-dialog__icon-wrap">
      <div class="confirmation-dialog__icon">
        <!-- Warning/Error SVG icon -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Dialog Title</h2>
      <p class="confirmation-dialog__description">
        Are you sure you want to perform this action?
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>`})}),o.jsx(l,{title:"CSS (CometChat Tokens)",children:o.jsx(d,{language:"CSS",code:`.confirmation-dialog__overlay {
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
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-error);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__title {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  text-align: center;
}

.confirmation-dialog__description {
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-secondary);
  text-align: center;
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
}

.confirmation-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
}

.confirmation-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
}`})})]})};function l({title:n,children:s}){return o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:n}),s]})}function d({language:n,code:s}){return o.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[o.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:o.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:n})}),o.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:o.jsx("code",{children:s})})]})}var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "banMember"
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,f,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "banMember",
    title: "Ban @toxic_user from Community?"
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,v,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "banMember",
    description: "This member will be permanently removed and will not be able to rejoin this group. All their messages will remain visible."
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var _,y,C;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "banMember",
    confirmLabel: "Ban Permanently",
    cancelLabel: "Nevermind"
  }
}`,...(C=(y=e.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,S,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "banMember",
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
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,T,L;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <!-- Warning/Error SVG icon -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Dialog Title</h2>
      <p class="confirmation-dialog__description">
        Are you sure you want to perform this action?
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Confirm</button>
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
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-error);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__title {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  text-align: center;
}

.confirmation-dialog__description {
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-secondary);
  text-align: center;
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
}

.confirmation-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
}

.confirmation-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
}\`} />
      </UsageSection>
    </div>
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const A=["Default","CustomTitle","CustomDescription","CustomLabels","Playground","Usage"];export{r as CustomDescription,e as CustomLabels,t as CustomTitle,a as Default,i as Playground,c as Usage,A as __namedExportsOrder,H as default};
