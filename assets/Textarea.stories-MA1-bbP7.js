import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as r}from"./Textarea-DrnQmtjo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Base Components/Input/Textarea",component:r,parameters:{layout:"centered"}},a=t=>e.jsx("div",{style:{width:360},children:e.jsx(t,{})}),o={decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}},i={decorators:[a],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}},n={name:"Placeholder — Error",decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}},l={name:"Filled — Error",decorators:[a],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}},s={decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0}},c={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(320px, 1fr))",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-8)",maxWidth:900,margin:"0 auto"},children:[e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(x,{title:"HTML",children:e.jsx(u,{language:"HTML",code:`<!-- Textarea Field -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input" rows="4" placeholder="Enter a description..."></textarea>
  <span class="textarea-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input textarea-field__input--error" rows="4">Content here</textarea>
  <span class="textarea-field__hint textarea-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="textarea-field textarea-field--disabled">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
  </div>
  <textarea class="textarea-field__input" rows="4" disabled placeholder="Enter a description..."></textarea>
</div>`})}),e.jsx(x,{title:"CSS (CometChat Tokens)",children:e.jsx(u,{language:"CSS",code:`.textarea-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.textarea-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-secondary);
}

.textarea-field__required {
  color: var(--cometchat-text-color-highlight);
}

.textarea-field__input {
  width: 100%;
  padding: var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  resize: vertical;
}

.textarea-field__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.textarea-field__input--error {
  border-color: var(--cometchat-error-color);
}

.textarea-field__input:disabled {
  background: var(--cometchat-background-color-disabled);
  border-color: var(--cometchat-border-color-default);
  cursor: not-allowed;
  resize: none;
}

.textarea-field__hint {
  font-size: 12px;
  color: var(--cometchat-text-color-tertiary);
}

.textarea-field__hint--error {
  color: var(--cometchat-error-color);
}`})})]})},p={decorators:[a],parameters:{docs:{disable:!0}},args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!1,resizable:!0,rows:4},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},resizable:{control:"boolean"},rows:{control:{type:"range",min:2,max:10}}}},u=({language:t,code:h})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:h})})]});function x({title:t,children:h}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t}),h]})}var m,b,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user."
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,v,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    hint: "This is a hint text to help user."
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var y,w,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Placeholder — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    error: "This is an error message."
  }
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,q,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Filled — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    error: "This is an error message."
  }
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,k,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: true
  }
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,z,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." />
      <Textarea label="Description" required placeholder="Enter a description..." error="This is an error message." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." hint="This is a hint text to help user." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." error="This is an error message." />
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." disabled />
    </div>
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var U,F,P;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Textarea Field -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input" rows="4" placeholder="Enter a description..."></textarea>
  <span class="textarea-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input textarea-field__input--error" rows="4">Content here</textarea>
  <span class="textarea-field__hint textarea-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="textarea-field textarea-field--disabled">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
  </div>
  <textarea class="textarea-field__input" rows="4" disabled placeholder="Enter a description..."></textarea>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.textarea-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.textarea-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-secondary);
}

.textarea-field__required {
  color: var(--cometchat-text-color-highlight);
}

.textarea-field__input {
  width: 100%;
  padding: var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  resize: vertical;
}

.textarea-field__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.textarea-field__input--error {
  border-color: var(--cometchat-error-color);
}

.textarea-field__input:disabled {
  background: var(--cometchat-background-color-disabled);
  border-color: var(--cometchat-border-color-default);
  cursor: not-allowed;
  resize: none;
}

.textarea-field__hint {
  font-size: 12px;
  color: var(--cometchat-text-color-tertiary);
}

.textarea-field__hint--error {
  color: var(--cometchat-error-color);
}\`} />
      </UsageSection>
    </div>
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,H,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [single],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: false,
    resizable: true,
    rows: 4
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
    resizable: {
      control: "boolean"
    },
    rows: {
      control: {
        type: "range",
        min: 2,
        max: 10
      }
    }
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const X=["Default","Filled","PlaceholderError","FilledError","Disabled","AllStates","Usage","Playground"];export{c as AllStates,o as Default,s as Disabled,i as Filled,l as FilledError,n as PlaceholderError,p as Playground,d as Usage,X as __namedExportsOrder,O as default};
