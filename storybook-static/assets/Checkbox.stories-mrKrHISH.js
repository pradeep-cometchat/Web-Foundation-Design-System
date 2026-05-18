import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as q}from"./index-ClcD9ViR.js";import{C as o}from"./Checkbox.impl-DkH5ngRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q={title:"Base Components/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A checkbox selection control — rounded square with check or minus icon.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked, Indeterminate.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-xs` (sm), `--radius-sm` (md), `--focus-ring-xs`."}}},argTypes:{size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},i={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(n,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(o,{size:"sm"}),e.jsx(o,{size:"md"}),e.jsx(o,{size:"md",disabled:!0})]})}),e.jsx(n,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(o,{size:"sm",checked:!0}),e.jsx(o,{size:"md",checked:!0}),e.jsx(o,{size:"md",checked:!0,disabled:!0})]})}),e.jsx(n,{title:"Indeterminate",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(o,{size:"sm",indeterminate:!0}),e.jsx(o,{size:"md",indeterminate:!0}),e.jsx(o,{size:"md",indeterminate:!0,disabled:!0})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(n,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(o,{size:"sm"}),e.jsx(o,{size:"sm",checked:!0}),e.jsx(o,{size:"sm",indeterminate:!0}),e.jsx(o,{size:"sm",disabled:!0}),e.jsx(o,{size:"sm",checked:!0,disabled:!0})]})}),e.jsx(n,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(o,{size:"md"}),e.jsx(o,{size:"md",checked:!0}),e.jsx(o,{size:"md",indeterminate:!0}),e.jsx(o,{size:"md",disabled:!0}),e.jsx(o,{size:"md",checked:!0,disabled:!0})]})})]})},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:[e.jsx(c,{label:"Remember me",description:"Save my login details for next time."}),e.jsx(c,{checked:!0,label:"Email notifications",description:"Get notified when someone sends you a message."}),e.jsx(o,{checked:!0,disabled:!0,label:"Auto-save",description:"This setting is managed by your admin."})]})},l={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:e.jsx(n,{title:"Settings list",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(c,{checked:!0,label:"Push notifications",description:"Receive alerts on your device."}),e.jsx(c,{label:"Marketing emails",description:"Tips, product updates, and inspiration."}),e.jsx(c,{checked:!0,label:"Security alerts",description:"Get notified about suspicious activity."}),e.jsx(o,{checked:!0,disabled:!0,label:"Two-factor auth",description:"Enforced by your organization."})]})})})};function c(a){const[s,x]=q.useState(a.checked??!1);return e.jsx(o,{...a,checked:s,onChange:x})}function n({title:a,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),s]})}const p=({language:a,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]}),h=({title:a,items:s})=>e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:s.map(x=>e.jsxs("code",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-primary)",background:"var(--color-bg-02)",padding:"var(--space-0-5) var(--space-2)",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-border-default)",display:"inline-block",width:"fit-content"},children:[".",x]},x))})]}),d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(n,{title:"HTML",children:e.jsx(p,{language:"HTML",code:`<!-- Basic checkbox (medium) -->
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
</label>`})}),e.jsx(n,{title:"CSS (Foundation Variables)",children:e.jsx(p,{language:"CSS",code:`.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-family: var(--font-family-heading);
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
  border: 1.5px solid var(--color-neutral-lm-300);
  background: transparent;
  transition: background 120ms ease, border-color 120ms ease;
}

.checkbox__box--sm { width: 16px; height: 16px; border-radius: var(--radius-xs); }
.checkbox__box--md { width: 20px; height: 20px; border-radius: var(--radius-sm); }
.checkbox__box--radio { border-radius: var(--radius-full); }

.checkbox__box:hover:not(:disabled) {
  border-color: var(--color-primary);
}

.checkbox__box:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

.checkbox__box--checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox__box--checked:hover:not(:disabled) {
  background: var(--color-ep-700);
  border-color: var(--color-ep-700);
}

.checkbox__label {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-lm-700);
  line-height: var(--line-height-h4);
}

.checkbox__description {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-neutral-lm-600);
  line-height: var(--line-height-body);
}`})}),e.jsx(n,{title:"Available Classes",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(h,{title:"Sizes",items:["checkbox__box--sm","checkbox__box--md"]}),e.jsx(h,{title:"States",items:["checkbox__box--checked","checkbox--disabled"]}),e.jsx(h,{title:"Variants",items:["checkbox__box--radio"]}),e.jsx(h,{title:"Child Elements",items:["checkbox__box","checkbox__icon","checkbox__text","checkbox__label","checkbox__description"]})]})})]})},b={args:{size:"md",checked:!1,indeterminate:!1,label:"Remember me",description:"Save my login details for next time.",disabled:!1},parameters:{docs:{disable:!0}},render:a=>e.jsx(c,{...a})};var m,k,u,v,_;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-5)"
  }}>
      <Section title="Unchecked">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
      }}>
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
      }}>
          <Checkbox size="sm" checked />
          <Checkbox size="md" checked />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
      <Section title="Indeterminate">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
      }}>
          <Checkbox size="sm" indeterminate />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" indeterminate disabled />
        </div>
      </Section>
    </div>
}`,...(u=(k=i.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:"All checkbox states.",...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.description}}};var f,g,y,C,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-5)"
  }}>
      <Section title="Small (16px)">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
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
        gap: "var(--space-6)"
      }}>
          <Checkbox size="md" />
          <Checkbox size="md" checked />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" disabled />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
    </div>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Sizes comparison.",...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var j,z,w,T,D;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    maxWidth: 400
  }}>
      <ControlledCheckbox label="Remember me" description="Save my login details for next time." />
      <ControlledCheckbox checked label="Email notifications" description="Get notified when someone sends you a message." />
      <Checkbox checked disabled label="Auto-save" description="This setting is managed by your admin." />
    </div>
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source},description:{story:"With label and description.",...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var R,E,M,W,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    maxWidth: 400
  }}>
      <Section title="Settings list">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }}>
          <ControlledCheckbox checked label="Push notifications" description="Receive alerts on your device." />
          <ControlledCheckbox label="Marketing emails" description="Tips, product updates, and inspiration." />
          <ControlledCheckbox checked label="Security alerts" description="Get notified about suspicious activity." />
          <Checkbox checked disabled label="Two-factor auth" description="Enforced by your organization." />
        </div>
      </Section>
    </div>
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Real-world examples.",...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var G,L,B,H,F;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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

      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-family: var(--font-family-heading);
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
  border: 1.5px solid var(--color-neutral-lm-300);
  background: transparent;
  transition: background 120ms ease, border-color 120ms ease;
}

.checkbox__box--sm { width: 16px; height: 16px; border-radius: var(--radius-xs); }
.checkbox__box--md { width: 20px; height: 20px; border-radius: var(--radius-sm); }
.checkbox__box--radio { border-radius: var(--radius-full); }

.checkbox__box:hover:not(:disabled) {
  border-color: var(--color-primary);
}

.checkbox__box:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

.checkbox__box--checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox__box--checked:hover:not(:disabled) {
  background: var(--color-ep-700);
  border-color: var(--color-ep-700);
}

.checkbox__label {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-lm-700);
  line-height: var(--line-height-h4);
}

.checkbox__description {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-neutral-lm-600);
  line-height: var(--line-height-body);
}\`} />
      </Section>

      <Section title="Available Classes">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <ClassGroup title="Sizes" items={["checkbox__box--sm", "checkbox__box--md"]} />
          <ClassGroup title="States" items={["checkbox__box--checked", "checkbox--disabled"]} />
          <ClassGroup title="Variants" items={["checkbox__box--radio"]} />
          <ClassGroup title="Child Elements" items={["checkbox__box", "checkbox__icon", "checkbox__text", "checkbox__label", "checkbox__description"]} />
        </div>
      </Section>
    </div>
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"Raw HTML + CSS usage with foundation variables.",...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.description}}};var I,O,U,P,V;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"Interactive playground — use the controls panel to configure.",...(V=(P=b.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};const Y=["CheckboxStates","Sizes","WithText","Examples","Usage","Playground"];export{i as CheckboxStates,l as Examples,b as Playground,r as Sizes,d as Usage,t as WithText,Y as __namedExportsOrder,Q as default};
