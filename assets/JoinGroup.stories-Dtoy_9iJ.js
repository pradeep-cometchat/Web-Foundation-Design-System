import{j as o}from"./jsx-runtime-BYYWji4R.js";import{F as y}from"./FormDialog-BJ2jaGMt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={title:"Base Components/Dialog/Form Dialogs/Join Group",component:y,parameters:{layout:"centered"},decorators:[a=>o.jsx(j,{children:o.jsx(a,{})})]};function j({children:a}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),a]})}const r={args:{variant:"joinGroup"}},t={name:"With Password Visible",args:{variant:"joinGroup"}},e={args:{variant:"joinGroup",open:!0},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"}}},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>o.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[o.jsx(i,{title:"HTML",children:o.jsx(d,{language:"HTML",code:`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Dialog Title</h2>
      <button class="form-dialog__close">×</button>
    </div>
    <div class="form-dialog__body">
      <label class="form-dialog__label">Field Label</label>
      <input class="form-dialog__input" placeholder="Enter value" />
    </div>
    <div class="form-dialog__footer">
      <button class="form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn--submit">Submit</button>
    </div>
  </div>
</div>`})}),o.jsx(i,{title:"CSS (CometChat Tokens)",children:o.jsx(d,{language:"CSS",code:`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-3);
}

.form-dialog__label {
  font: var(--cometchat-font-body-medium);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__input {
  height: 40px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.form-dialog__btn--submit {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}`})})]})};function i({title:a,children:c}){return o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:a}),c]})}function d({language:a,code:c}){return o.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[o.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:o.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:a})}),o.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:o.jsx("code",{children:c})})]})}var l,s,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "joinGroup"
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var g,p,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With Password Visible",
  args: {
    variant: "joinGroup"
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,b,f;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "joinGroup",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    open: {
      control: "boolean"
    }
  }
}`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,x,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Dialog Title</h2>
      <button class="form-dialog__close">×</button>
    </div>
    <div class="form-dialog__body">
      <label class="form-dialog__label">Field Label</label>
      <input class="form-dialog__input" placeholder="Enter value" />
    </div>
    <div class="form-dialog__footer">
      <button class="form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn--submit">Submit</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-3);
}

.form-dialog__label {
  font: var(--cometchat-font-body-medium);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__input {
  height: 40px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.form-dialog__btn--submit {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}\`} />
      </UsageSection>
    </div>
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const U=["Default","WithPasswordVisible","Playground","Usage"];export{r as Default,e as Playground,n as Usage,t as WithPasswordVisible,U as __namedExportsOrder,T as default};
