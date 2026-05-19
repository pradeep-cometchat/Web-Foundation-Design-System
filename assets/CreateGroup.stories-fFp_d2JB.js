import{j as a}from"./jsx-runtime-BYYWji4R.js";import{F as T}from"./FormDialog-sMcv9wqN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U={title:"Base Components/Dialog/Form Dialogs/Create Group",component:T,parameters:{layout:"centered"},decorators:[r=>a.jsx(j,{children:a.jsx(r,{})})]};function j({children:r}){return a.jsxs("div",{className:"dialog-story-inline",children:[a.jsx("style",{children:".dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),r]})}const o={name:"Public (Default)",args:{variant:"createGroup",initialGroupType:"public"}},e={name:"Private",args:{variant:"createGroup",initialGroupType:"private"}},n={name:"Protected (with Password)",args:{variant:"createGroup",initialGroupType:"protected"}},i={args:{variant:"createGroup",initialGroupType:"public",open:!0},parameters:{docs:{disable:!0}},argTypes:{initialGroupType:{control:"select",options:["public","private","protected"]},open:{control:"boolean"}}};function l({title:r,children:s}){return a.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[a.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),s]})}function d({language:r,code:s}){return a.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:a.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:r})}),a.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:a.jsx("code",{children:s})})]})}const t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[a.jsx(l,{title:"HTML",children:a.jsx(d,{language:"HTML",code:`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Create Group</h2>
      <button class="form-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="form-dialog__body">
      <div class="form-dialog__tabs">
        <button class="form-dialog__tab form-dialog__tab--active">Public</button>
        <button class="form-dialog__tab">Private</button>
        <button class="form-dialog__tab">Protected</button>
      </div>
      <div class="form-dialog__field">
        <div class="form-dialog__label-wrap">
          <label class="form-dialog__label">Group Name</label>
          <span class="form-dialog__required">*</span>
        </div>
        <div class="form-dialog__input-wrap">
          <input class="form-dialog__input" placeholder="Enter group name" />
        </div>
      </div>
    </div>
    <div class="form-dialog__actions">
      <button class="form-dialog__btn form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn form-dialog__btn--submit">Create</button>
    </div>
  </div>
</div>`})}),a.jsx(l,{title:"CSS (Foundation Variables)",children:a.jsx(d,{language:"CSS",code:`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 400px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background: var(--color-bg-02);
}

.form-dialog__tab--active {
  background: var(--color-bg-01);
  color: var(--color-text-highlight);
  box-shadow: var(--shadow-sm);
}

.form-dialog__body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.form-dialog__btn--submit {
  background: var(--color-btn-primary-bg);
  color: var(--color-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  height: 44px;
}`})})]})};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Public (Default)",
  args: {
    variant: "createGroup",
    initialGroupType: "public"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,m;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Private",
  args: {
    variant: "createGroup",
    initialGroupType: "private"
  }
}`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,f,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Protected (with Password)",
  args: {
    variant: "createGroup",
    initialGroupType: "protected"
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "createGroup",
    initialGroupType: "public",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    initialGroupType: {
      control: "select",
      options: ["public", "private", "protected"]
    },
    open: {
      control: "boolean"
    }
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,G,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Create Group</h2>
      <button class="form-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="form-dialog__body">
      <div class="form-dialog__tabs">
        <button class="form-dialog__tab form-dialog__tab--active">Public</button>
        <button class="form-dialog__tab">Private</button>
        <button class="form-dialog__tab">Protected</button>
      </div>
      <div class="form-dialog__field">
        <div class="form-dialog__label-wrap">
          <label class="form-dialog__label">Group Name</label>
          <span class="form-dialog__required">*</span>
        </div>
        <div class="form-dialog__input-wrap">
          <input class="form-dialog__input" placeholder="Enter group name" />
        </div>
      </div>
    </div>
    <div class="form-dialog__actions">
      <button class="form-dialog__btn form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn form-dialog__btn--submit">Create</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
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
  width: 400px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background: var(--color-bg-02);
}

.form-dialog__tab--active {
  background: var(--color-bg-01);
  color: var(--color-text-highlight);
  box-shadow: var(--shadow-sm);
}

.form-dialog__body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.form-dialog__btn--submit {
  background: var(--color-btn-primary-bg);
  color: var(--color-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  height: 44px;
}\`} />
      </UsageSection>
    </div>
}`,...(S=(G=t.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};const D=["PublicType","PrivateType","ProtectedType","Playground","Usage"];export{i as Playground,e as PrivateType,n as ProtectedType,o as PublicType,t as Usage,D as __namedExportsOrder,U as default};
