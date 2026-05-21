import{j as a}from"./jsx-runtime-BYYWji4R.js";import{F as C}from"./FormDialog-BJ2jaGMt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z={title:"Base Components/Dialog/Form Dialogs/Create Group",component:C,parameters:{layout:"centered"},decorators:[o=>a.jsx(G,{children:a.jsx(o,{})})]};function G({children:o}){return a.jsxs("div",{className:"dialog-story-inline",children:[a.jsx("style",{children:".dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),o]})}const r={name:"Public (Default)",args:{variant:"createGroup",initialGroupType:"public"}},t={name:"Private",args:{variant:"createGroup",initialGroupType:"private"}},e={name:"Protected (with Password)",args:{variant:"createGroup",initialGroupType:"protected"}},n={args:{variant:"createGroup",initialGroupType:"public",open:!0},parameters:{docs:{disable:!0}},argTypes:{initialGroupType:{control:"select",options:["public","private","protected"]},open:{control:"boolean"}}};function d({title:o,children:i}){return a.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[a.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),i]})}function s({language:o,code:i}){return a.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:a.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),a.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:a.jsx("code",{children:i})})]})}const c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[a.jsx(d,{title:"HTML",children:a.jsx(s,{language:"HTML",code:`<div class="form-dialog__overlay">
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
</div>`})}),a.jsx(d,{title:"CSS (CometChat Tokens)",children:a.jsx(s,{language:"CSS",code:`.form-dialog__overlay {
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
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-1);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
}

.form-dialog__tab--active {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-highlight);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.form-dialog__btn--submit {
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--cometchat-radius-2);
  height: 44px;
}`})})]})};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Public (Default)",
  args: {
    variant: "createGroup",
    initialGroupType: "public"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Private",
  args: {
    variant: "createGroup",
    initialGroupType: "private"
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,h,f;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Protected (with Password)",
  args: {
    variant: "createGroup",
    initialGroupType: "protected"
  }
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var _,x,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,w,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-1);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
}

.form-dialog__tab--active {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-highlight);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.form-dialog__btn--submit {
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--cometchat-radius-2);
  height: 44px;
}\`} />
      </UsageSection>
    </div>
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const D=["PublicType","PrivateType","ProtectedType","Playground","Usage"];export{n as Playground,t as PrivateType,e as ProtectedType,r as PublicType,c as Usage,D as __namedExportsOrder,z as default};
