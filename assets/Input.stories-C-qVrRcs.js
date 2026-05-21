import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as a}from"./Textarea-DrnQmtjo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Base Components/Input/Input",component:a,parameters:{layout:"centered"}},r=i=>e.jsx("div",{style:{width:360},children:e.jsx(i,{})}),n={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},t={decorators:[r],args:{label:"Email",required:!0,placeholder:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},o={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}},l={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",error:"This is an error message."}},s={decorators:[r],args:{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!0}},c={name:"Without Icons",decorators:[r],args:{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user."}},d={name:"Without Icons — Error",decorators:[r],args:{label:"Users",required:!0,placeholder:"Add users",error:"This is an error message."}},p={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(320px, 1fr))",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-8)",maxWidth:900,margin:"0 auto"},children:[e.jsx(a,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user."}),e.jsx(a,{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user."}),e.jsx(a,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",error:"This is an error message."}),e.jsx(a,{label:"Users",required:!0,placeholder:"Add users",error:"This is an error message."}),e.jsx(a,{label:"Email",required:!0,value:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!0}),e.jsx(a,{label:"Users",required:!0,placeholder:"Add users",hint:"This is a hint text to help user.",disabled:!0})]})},u={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(f,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Input Field -->
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
</div>`})}),e.jsx(f,{title:"CSS (CometChat Tokens)",children:e.jsx(g,{language:"CSS",code:`.input-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.input-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-secondary);
}

.input-field__required {
  color: var(--cometchat-text-color-highlight);
}

.input-field__container {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  height: 44px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
}

.input-field__container:focus-within {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.input-field__container--error {
  border-color: var(--cometchat-error-color);
}

.input-field__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
}

.input-field__hint {
  font-size: 12px;
  color: var(--cometchat-text-color-tertiary);
}

.input-field__hint--error {
  color: var(--cometchat-error-color);
}

.input-field--disabled .input-field__container {
  background: var(--cometchat-background-color-disabled);
  border-color: var(--cometchat-border-color-default);
}`})})]})},m={decorators:[r],parameters:{docs:{disable:!0}},args:{label:"Email",required:!0,placeholder:"george@cometchat.com",leadingIcon:"mail",trailingIcon:"visibility_off",hint:"This is a hint text to help user.",disabled:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","url","number","tel"]},leadingIcon:{control:"text"},trailingIcon:{control:"text"}}},g=({language:i,code:h})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:h})})]});function f({title:i,children:h}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:i}),h]})}var b,v,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user."
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,y,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,j,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    error: "This is an error message."
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var U,k,C;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var W,A,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Without Icons",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    hint: "This is a hint text to help user."
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var D,F,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Without Icons — Error",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    error: "This is an error message."
  }
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,M,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
    gap: "var(--cometchat-spacing-8)",
    padding: "var(--cometchat-spacing-8)",
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
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var B,R,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.input-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.input-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-secondary);
}

.input-field__required {
  color: var(--cometchat-text-color-highlight);
}

.input-field__container {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  height: 44px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
}

.input-field__container:focus-within {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.input-field__container--error {
  border-color: var(--cometchat-error-color);
}

.input-field__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
}

.input-field__hint {
  font-size: 12px;
  color: var(--cometchat-text-color-tertiary);
}

.input-field__hint--error {
  color: var(--cometchat-error-color);
}

.input-field--disabled .input-field__container {
  background: var(--cometchat-background-color-disabled);
  border-color: var(--cometchat-border-color-default);
}\`} />
      </UsageSection>
    </div>
}`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var X,G,J;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Z=["Default","Placeholder","Filled","Error","Disabled","WithoutIcons","WithoutIconsError","AllStates","Usage","Playground"];export{p as AllStates,n as Default,s as Disabled,l as Error,o as Filled,t as Placeholder,m as Playground,u as Usage,c as WithoutIcons,d as WithoutIconsError,Z as __namedExportsOrder,Y as default};
