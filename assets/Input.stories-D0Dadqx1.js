import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as i}from"./Textarea-DdWrHRUy.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Base Components/Input/Input",component:i,parameters:{layout:"centered"}},r=n=>e.jsx("div",{style:{width:360},children:e.jsx(n,{})}),a={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},t={decorators:[r],args:{label:"Email",required:!0,placeholder:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},o={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},l={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",error:"This is an error message."}},s={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!0}},d={name:"Without Icons",decorators:[r],args:{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user."}},c={name:"Without Icons — Error",decorators:[r],args:{label:"Users",required:!0,placeholder:"Add users",error:"This is an error message."}},u={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(320px, 1fr))",gap:"var(--space-8)",padding:"var(--space-8)",maxWidth:900,margin:"0 auto"},children:[e.jsx(i,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}),e.jsx(i,{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user."}),e.jsx(i,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",error:"This is an error message."}),e.jsx(i,{label:"Users",required:!0,placeholder:"Add users",error:"This is an error message."}),e.jsx(i,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!0}),e.jsx(i,{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user.",disabled:!0})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Input Field -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container">
    <span class="input-field__icon">mail</span>
    <input class="input-field__input" type="email" placeholder="george@cometchat.com" />
    <span class="input-field__icon">visibility_off</span>
  </div>
  <span class="input-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container input-field__container--error">
    <input class="input-field__input" type="email" value="invalid" />
  </div>
  <span class="input-field__hint input-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="input-field input-field--disabled">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
  </div>
  <div class="input-field__container">
    <input class="input-field__input" disabled value="george@cometchat.com" />
  </div>
</div>`})}),e.jsx(f,{title:"CSS (Foundation Variables)",children:e.jsx(h,{language:"CSS",code:`.input-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
  width: 100%;
}

.input-field__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.input-field__required {
  color: var(--color-text-highlight);
}

.input-field__container {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 44px;
  padding: 0 var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
}

.input-field__container:focus-within {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.input-field__container--error {
  border-color: var(--color-error);
}

.input-field__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.input-field__hint {
  font-size: var(--font-size-1);
  color: var(--color-text-tertiary);
}

.input-field__hint--error {
  color: var(--color-error);
}

.input-field--disabled .input-field__container {
  background: var(--color-bg-disabled);
  border-color: var(--color-border-default);
}`})})]})},g={decorators:[r],parameters:{docs:{disable:!0}},args:{label:"Email",required:!0,placeholder:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","url","number","tel"]},leadingIcon:{control:"text"},trailingIcon:{control:"text"}}},h=({language:n,code:m})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:m})})]});function f({title:n,children:m}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),m]})}var v,b,_;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user."
  }
}`,...(_=(b=a.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var x,y,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    placeholder: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user."
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var T,q,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user."
  }
}`,...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,w,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    error: "This is an error message."
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var U,z,C;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
    disabled: true
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var W,A,k;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Without Icons",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    hint: "This is a hint text to help user."
  }
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var D,F,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Without Icons — Error",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    error: "This is an error message."
  }
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,M,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
    gap: "var(--space-8)",
    padding: "var(--space-8)",
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <Input label="Email" required value="george@cometchat.com" leadingIcon="mail" trailingIcon="visibility_off" hint="This is a hint text to help user." />
      <Input label="Users" required placeholder="Add users" hint="This is a hint text to help user." />
      <Input label="Email" required value="george@cometchat.com" leadingIcon="mail" trailingIcon="visibility_off" error="This is an error message." />
      <Input label="Users" required placeholder="Add users" error="This is an error message." />
      <Input label="Email" required value="george@cometchat.com" leadingIcon="mail" trailingIcon="visibility_off" hint="This is a hint text to help user." disabled />
      <Input label="Users" required placeholder="Add users" hint="This is a hint text to help user." disabled />
    </div>
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var B,R,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Input Field -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container">
    <span class="input-field__icon">mail</span>
    <input class="input-field__input" type="email" placeholder="george@cometchat.com" />
    <span class="input-field__icon">visibility_off</span>
  </div>
  <span class="input-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container input-field__container--error">
    <input class="input-field__input" type="email" value="invalid" />
  </div>
  <span class="input-field__hint input-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="input-field input-field--disabled">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
  </div>
  <div class="input-field__container">
    <input class="input-field__input" disabled value="george@cometchat.com" />
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.input-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
  width: 100%;
}

.input-field__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.input-field__required {
  color: var(--color-text-highlight);
}

.input-field__container {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 44px;
  padding: 0 var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
}

.input-field__container:focus-within {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.input-field__container--error {
  border-color: var(--color-error);
}

.input-field__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.input-field__hint {
  font-size: var(--font-size-1);
  color: var(--color-text-tertiary);
}

.input-field__hint--error {
  color: var(--color-error);
}

.input-field--disabled .input-field__container {
  background: var(--color-bg-disabled);
  border-color: var(--color-border-default);
}\`} />
      </UsageSection>
    </div>
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var O,X,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [single],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    label: "Email",
    required: true,
    placeholder: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
    disabled: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    value: {
      control: "text"
    },
    hint: {
      control: "text"
    },
    error: {
      control: "text"
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "url", "number", "tel"]
    },
    leadingIcon: {
      control: "text"
    },
    trailingIcon: {
      control: "text"
    }
  }
}`,...(G=(X=g.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const Z=["Default","Placeholder","Filled","Error","Disabled","WithoutIcons","WithoutIconsError","AllStates","Usage","Playground"];export{u as AllStates,a as Default,s as Disabled,l as Error,o as Filled,t as Placeholder,g as Playground,p as Usage,d as WithoutIcons,c as WithoutIconsError,Z as __namedExportsOrder,Y as default};
