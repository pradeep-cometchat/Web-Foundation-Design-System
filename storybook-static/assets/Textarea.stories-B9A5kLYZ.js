import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as r}from"./Textarea-DdWrHRUy.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V={title:"Base Components/Input/Textarea",component:r,parameters:{layout:"centered"}},a=t=>e.jsx("div",{style:{width:360},children:e.jsx(t,{})}),o={decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}},i={decorators:[a],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}},n={name:"Placeholder — Error",decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}},l={name:"Filled — Error",decorators:[a],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}},s={decorators:[a],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0}},d={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(320px, 1fr))",gap:"var(--space-8)",padding:"var(--space-8)",maxWidth:900,margin:"0 auto"},children:[e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(x,{title:"HTML",children:e.jsx(h,{language:"HTML",code:`<!-- Textarea Field -->
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
</div>`})}),e.jsx(x,{title:"CSS (Foundation Variables)",children:e.jsx(h,{language:"CSS",code:`.textarea-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
  width: 100%;
}

.textarea-field__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.textarea-field__required {
  color: var(--color-text-highlight);
}

.textarea-field__input {
  width: 100%;
  padding: var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
  resize: vertical;
}

.textarea-field__input:focus {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.textarea-field__input--error {
  border-color: var(--color-error);
}

.textarea-field__input:disabled {
  background: var(--color-bg-disabled);
  border-color: var(--color-border-default);
  cursor: not-allowed;
  resize: none;
}

.textarea-field__hint {
  font-size: var(--font-size-1);
  color: var(--color-text-tertiary);
}

.textarea-field__hint--error {
  color: var(--color-error);
}`})})]})},p={decorators:[a],parameters:{docs:{disable:!0}},args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!1,resizable:!0,rows:4},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},resizable:{control:"boolean"},rows:{control:{type:"range",min:2,max:10}}}},h=({language:t,code:u})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:u})})]});function x({title:t,children:u}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:t}),u]})}var b,m,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user."
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,v,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,z,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: true
  }
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var k,C,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." />
      <Textarea label="Description" required placeholder="Enter a description..." error="This is an error message." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." hint="This is a hint text to help user." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." error="This is an error message." />
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." disabled />
    </div>
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,U,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.textarea-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
  width: 100%;
}

.textarea-field__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.textarea-field__required {
  color: var(--color-text-highlight);
}

.textarea-field__input {
  width: 100%;
  padding: var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
  resize: vertical;
}

.textarea-field__input:focus {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.textarea-field__input--error {
  border-color: var(--color-error);
}

.textarea-field__input:disabled {
  background: var(--color-bg-disabled);
  border-color: var(--color-border-default);
  cursor: not-allowed;
  resize: none;
}

.textarea-field__hint {
  font-size: var(--font-size-1);
  color: var(--color-text-tertiary);
}

.textarea-field__hint--error {
  color: var(--color-error);
}\`} />
      </UsageSection>
    </div>
}`,...(P=(U=c.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var W,H,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const O=["Default","Filled","PlaceholderError","FilledError","Disabled","AllStates","Usage","Playground"];export{d as AllStates,o as Default,s as Disabled,i as Filled,l as FilledError,n as PlaceholderError,p as Playground,c as Usage,O as __namedExportsOrder,V as default};
