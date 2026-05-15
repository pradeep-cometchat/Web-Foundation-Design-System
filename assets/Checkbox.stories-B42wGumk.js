import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as O}from"./index-ClcD9ViR.js";import{C as s}from"./Checkbox.impl-DGA5g0vC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={title:"Base Components/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A checkbox selection control — rounded square with check or minus icon.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked, Indeterminate.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-xs` (sm), `--radius-sm` (md), `--focus-ring-xs`."}}},argTypes:{size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},a={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(i,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",disabled:!0})]})}),e.jsx(i,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(s,{size:"sm",checked:!0}),e.jsx(s,{size:"md",checked:!0}),e.jsx(s,{size:"md",checked:!0,disabled:!0})]})}),e.jsx(i,{title:"Indeterminate",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(s,{size:"sm",indeterminate:!0}),e.jsx(s,{size:"md",indeterminate:!0}),e.jsx(s,{size:"md",indeterminate:!0,disabled:!0})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(i,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",checked:!0}),e.jsx(s,{size:"sm",indeterminate:!0}),e.jsx(s,{size:"sm",disabled:!0}),e.jsx(s,{size:"sm",checked:!0,disabled:!0})]})}),e.jsx(i,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(s,{size:"md"}),e.jsx(s,{size:"md",checked:!0}),e.jsx(s,{size:"md",indeterminate:!0}),e.jsx(s,{size:"md",disabled:!0}),e.jsx(s,{size:"md",checked:!0,disabled:!0})]})})]})},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:[e.jsx(t,{label:"Remember me",description:"Save my login details for next time."}),e.jsx(t,{checked:!0,label:"Email notifications",description:"Get notified when someone sends you a message."}),e.jsx(s,{checked:!0,disabled:!0,label:"Auto-save",description:"This setting is managed by your admin."})]})},d={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:e.jsx(i,{title:"Settings list",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(t,{checked:!0,label:"Push notifications",description:"Receive alerts on your device."}),e.jsx(t,{label:"Marketing emails",description:"Tips, product updates, and inspiration."}),e.jsx(t,{checked:!0,label:"Security alerts",description:"Get notified about suspicious activity."}),e.jsx(s,{checked:!0,disabled:!0,label:"Two-factor auth",description:"Enforced by your organization."})]})})})},c={args:{size:"md",checked:!1,indeterminate:!1,label:"Remember me",description:"Save my login details for next time.",disabled:!1},parameters:{docs:{disable:!0}},render:n=>e.jsx(t,{...n})};function t(n){const[l,P]=O.useState(n.checked??!1);return e.jsx(s,{...n,checked:l,onChange:P})}function i({title:n,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),l]})}var m,p,x,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source},description:{story:"All checkbox states.",...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,y,k,v,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"Sizes comparison.",...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var g,z,j,C,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source},description:{story:"With label and description.",...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var D,T,E,R,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:"Real-world examples.",...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.description}}};var w,A,G,I,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source},description:{story:"Interactive playground — use the controls panel to configure.",...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};const H=["CheckboxStates","Sizes","WithText","Examples","Playground"];export{a as CheckboxStates,d as Examples,c as Playground,r as Sizes,o as WithText,H as __namedExportsOrder,F as default};
