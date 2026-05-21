import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as q}from"./index-ClcD9ViR.js";import{C as c}from"./Checkbox.impl-_-276H_E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q={title:"Base Components/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A checkbox selection control — rounded square with check or minus icon.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked, Indeterminate.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-xs` (sm), `--radius-sm` (md), `--focus-ring-xs`."}}},argTypes:{size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},s={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-5)"},children:[e.jsx(a,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(c,{size:"sm"}),e.jsx(c,{size:"md"}),e.jsx(c,{size:"md",disabled:!0})]})}),e.jsx(a,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(c,{size:"sm",checked:!0}),e.jsx(c,{size:"md",checked:!0}),e.jsx(c,{size:"md",checked:!0,disabled:!0})]})}),e.jsx(a,{title:"Indeterminate",children:e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(c,{size:"sm",indeterminate:!0}),e.jsx(c,{size:"md",indeterminate:!0}),e.jsx(c,{size:"md",indeterminate:!0,disabled:!0})]})})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-5)"},children:[e.jsx(a,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(c,{size:"sm"}),e.jsx(c,{size:"sm",checked:!0}),e.jsx(c,{size:"sm",indeterminate:!0}),e.jsx(c,{size:"sm",disabled:!0}),e.jsx(c,{size:"sm",checked:!0,disabled:!0})]})}),e.jsx(a,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(c,{size:"md"}),e.jsx(c,{size:"md",checked:!0}),e.jsx(c,{size:"md",indeterminate:!0}),e.jsx(c,{size:"md",disabled:!0}),e.jsx(c,{size:"md",checked:!0,disabled:!0})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",maxWidth:400},children:[e.jsx(n,{label:"Remember me",description:"Save my login details for next time."}),e.jsx(n,{checked:!0,label:"Email notifications",description:"Get notified when someone sends you a message."}),e.jsx(c,{checked:!0,disabled:!0,label:"Auto-save",description:"This setting is managed by your admin."})]})},l={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",maxWidth:400},children:e.jsx(a,{title:"Settings list",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(n,{checked:!0,label:"Push notifications",description:"Receive alerts on your device."}),e.jsx(n,{label:"Marketing emails",description:"Tips, product updates, and inspiration."}),e.jsx(n,{checked:!0,label:"Security alerts",description:"Get notified about suspicious activity."}),e.jsx(c,{checked:!0,disabled:!0,label:"Two-factor auth",description:"Enforced by your organization."})]})})})};function n(o){const[t,b]=q.useState(o.checked??!1);return e.jsx(c,{...o,checked:t,onChange:b})}function a({title:o,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),t]})}const m=({language:o,code:t})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]}),h=({title:o,items:t})=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)"},children:t.map(b=>e.jsxs("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-primary)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing) var(--cometchat-spacing-2)",borderRadius:"var(--cometchat-radius-1)",border:"1px solid var(--cometchat-border-color-default)",display:"inline-block",width:"fit-content"},children:[".",b]},b))})]}),d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(a,{title:"HTML",children:e.jsx(m,{language:"HTML",code:`<!-- Basic checkbox (medium) -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Remember me</span>
    <span class="checkbox__description">Save my login details for next time.</span>
  </div>
</label>

<!-- Checked checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" role="checkbox" aria-checked="true">
    <span class="checkbox__icon">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Email notifications</span>
  </div>
</label>

<!-- Small checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--sm" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Agree to terms</span>
  </div>
</label>

<!-- Disabled checkbox -->
<label class="checkbox checkbox--disabled">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" disabled role="checkbox" aria-checked="true">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Managed by admin</span>
  </div>
</label>

<!-- Radio variant -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--radio" role="radio" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Option A</span>
  </div>
</label>`})}),e.jsx(a,{title:"CSS (CometChat Tokens)",children:e.jsx(m,{language:"CSS",code:`.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--cometchat-spacing-3);
  font-family: var(--cometchat-font-family);
  cursor: pointer;
}

.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.checkbox__box {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--cometchat-neutral-color-300);
  background: transparent;
  transition: background 120ms ease, border-color 120ms ease;
}

.checkbox__box--sm { width: 16px; height: 16px; border-radius: var(--cometchat-radius-1); }
.checkbox__box--md { width: 20px; height: 20px; border-radius: 6px; }
.checkbox__box--radio { border-radius: var(--cometchat-radius-max); }

.checkbox__box:hover:not(:disabled) {
  border-color: var(--cometchat-primary-color);
}

.checkbox__box:focus-visible {
  box-shadow: var(--cometchat-focus-ring);
}

.checkbox__box--checked {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
}

.checkbox__box--checked:hover:not(:disabled) {
  background: var(--cometchat-extended-primary-color-900);
  border-color: var(--cometchat-extended-primary-color-900);
}

.checkbox__label {
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-neutral-color-700);
  line-height: 19.2px;
}

.checkbox__description {
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
  line-height: 16.8px;
}`})}),e.jsx(a,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(h,{title:"Sizes",items:["checkbox__box--sm","checkbox__box--md"]}),e.jsx(h,{title:"States",items:["checkbox__box--checked","checkbox--disabled"]}),e.jsx(h,{title:"Variants",items:["checkbox__box--radio"]}),e.jsx(h,{title:"Child Elements",items:["checkbox__box","checkbox__icon","checkbox__text","checkbox__label","checkbox__description"]})]})})]})},x={args:{size:"md",checked:!1,indeterminate:!1,label:"Remember me",description:"Save my login details for next time.",disabled:!1},parameters:{docs:{disable:!0}},render:o=>e.jsx(n,{...o})};var p,k,u,_,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-5)"
  }}>
      <Section title="Unchecked">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)"
      }}>
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)"
      }}>
          <Checkbox size="sm" checked />
          <Checkbox size="md" checked />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
      <Section title="Indeterminate">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)"
      }}>
          <Checkbox size="sm" indeterminate />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" indeterminate disabled />
        </div>
      </Section>
    </div>
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:"All checkbox states.",...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.description}}};var v,f,y,C,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-5)"
  }}>
      <Section title="Small (16px)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)"
      }}>
          <Checkbox size="sm" />
          <Checkbox size="sm" checked />
          <Checkbox size="sm" indeterminate />
          <Checkbox size="sm" disabled />
          <Checkbox size="sm" checked disabled />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)"
      }}>
          <Checkbox size="md" />
          <Checkbox size="md" checked />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" disabled />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
    </div>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Sizes comparison.",...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var j,z,w,T,D;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)",
    maxWidth: 400
  }}>
      <ControlledCheckbox label="Remember me" description="Save my login details for next time." />
      <ControlledCheckbox checked label="Email notifications" description="Get notified when someone sends you a message." />
      <Checkbox checked disabled label="Auto-save" description="This setting is managed by your admin." />
    </div>
}`,...(w=(z=r.parameters)==null?void 0:z.docs)==null?void 0:w.source},description:{story:"With label and description.",...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var R,E,M,W,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)",
    maxWidth: 400
  }}>
      <Section title="Settings list">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-4)"
      }}>
          <ControlledCheckbox checked label="Push notifications" description="Receive alerts on your device." />
          <ControlledCheckbox label="Marketing emails" description="Tips, product updates, and inspiration." />
          <ControlledCheckbox checked label="Security alerts" description="Get notified about suspicious activity." />
          <Checkbox checked disabled label="Two-factor auth" description="Enforced by your organization." />
        </div>
      </Section>
    </div>
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Real-world examples.",...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var G,L,B,H,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      <Section title="HTML">
        <CodeCard language="HTML" code={\`<!-- Basic checkbox (medium) -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Remember me</span>
    <span class="checkbox__description">Save my login details for next time.</span>
  </div>
</label>

<!-- Checked checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" role="checkbox" aria-checked="true">
    <span class="checkbox__icon">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Email notifications</span>
  </div>
</label>

<!-- Small checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--sm" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Agree to terms</span>
  </div>
</label>

<!-- Disabled checkbox -->
<label class="checkbox checkbox--disabled">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" disabled role="checkbox" aria-checked="true">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Managed by admin</span>
  </div>
</label>

<!-- Radio variant -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--radio" role="radio" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Option A</span>
  </div>
</label>\`} />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--cometchat-spacing-3);
  font-family: var(--cometchat-font-family);
  cursor: pointer;
}

.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.checkbox__box {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--cometchat-neutral-color-300);
  background: transparent;
  transition: background 120ms ease, border-color 120ms ease;
}

.checkbox__box--sm { width: 16px; height: 16px; border-radius: var(--cometchat-radius-1); }
.checkbox__box--md { width: 20px; height: 20px; border-radius: 6px; }
.checkbox__box--radio { border-radius: var(--cometchat-radius-max); }

.checkbox__box:hover:not(:disabled) {
  border-color: var(--cometchat-primary-color);
}

.checkbox__box:focus-visible {
  box-shadow: var(--cometchat-focus-ring);
}

.checkbox__box--checked {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
}

.checkbox__box--checked:hover:not(:disabled) {
  background: var(--cometchat-extended-primary-color-900);
  border-color: var(--cometchat-extended-primary-color-900);
}

.checkbox__label {
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-neutral-color-700);
  line-height: 19.2px;
}

.checkbox__description {
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
  line-height: 16.8px;
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <ClassGroup title="Sizes" items={["checkbox__box--sm", "checkbox__box--md"]} />
          <ClassGroup title="States" items={["checkbox__box--checked", "checkbox--disabled"]} />
          <ClassGroup title="Variants" items={["checkbox__box--radio"]} />
          <ClassGroup title="Child Elements" items={["checkbox__box", "checkbox__icon", "checkbox__text", "checkbox__label", "checkbox__description"]} />
        </div>
      </Section>
    </div>
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var O,U,P,F,V;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: false,
    indeterminate: false,
    label: "Remember me",
    description: "Save my login details for next time.",
    disabled: false
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  render: args => <ControlledCheckbox {...args as any} />
}`,...(P=(U=x.parameters)==null?void 0:U.docs)==null?void 0:P.source},description:{story:"Interactive playground — use the controls panel to configure.",...(V=(F=x.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};const Y=["CheckboxStates","Sizes","WithText","Examples","Usage","Playground"];export{s as CheckboxStates,l as Examples,x as Playground,i as Sizes,d as Usage,r as WithText,Y as __namedExportsOrder,Q as default};
