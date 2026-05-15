import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as c}from"./index-ClcD9ViR.js";import{C as P}from"./Checkbox.impl-DGA5g0vC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=s=>e.jsx(P,{...s,type:"radio"});try{n.displayName="RadioButton",n.__docgenInfo={description:'RadioButton — a single-select option within a group.\nWraps the Checkbox component with `type="radio"`.',displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Whether this radio is selected.",name:"checked",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Change handler.",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},size:{defaultValue:null,description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:"Primary label text.",name:"label",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"Supporting description below the label.",name:"description",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"Disabled state.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const I={title:"Base Components/Radio Button",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A single-select option within a group — circle with dot when selected.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-full` (circle), `--focus-ring-xs`."}}},argTypes:{size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},a={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(i,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"md",disabled:!0})]})}),e.jsx(i,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm",checked:!0}),e.jsx(n,{size:"md",checked:!0}),e.jsx(n,{size:"md",checked:!0,disabled:!0})]})})]})},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(i,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"sm",checked:!0}),e.jsx(n,{size:"sm",disabled:!0}),e.jsx(n,{size:"sm",checked:!0,disabled:!0})]})}),e.jsx(i,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"md"}),e.jsx(n,{size:"md",checked:!0}),e.jsx(n,{size:"md",disabled:!0}),e.jsx(n,{size:"md",checked:!0,disabled:!0})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:e.jsx(q,{})})},d={name:"Radio Group",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:400},children:[e.jsx(i,{title:"Notification preference",children:e.jsx(V,{})}),e.jsx(i,{title:"Plan selection",children:e.jsx(E,{})})]})},l={args:{size:"md",checked:!1,label:"Option A",description:"First option description.",disabled:!1},parameters:{docs:{disable:!0}}};function q(){const[s,t]=c.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:s==="a",onChange:()=>t("a"),label:"Option A",description:"First option description."}),e.jsx(n,{checked:s==="b",onChange:()=>t("b"),label:"Option B",description:"Second option description."}),e.jsx(n,{checked:s==="c",onChange:()=>t("c"),label:"Option C",description:"Third option description."})]})}function V(){const[s,t]=c.useState("all");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:s==="all",onChange:()=>t("all"),label:"All notifications",description:"Get notified for every message."}),e.jsx(n,{checked:s==="mentions",onChange:()=>t("mentions"),label:"Mentions only",description:"Only when someone mentions you."}),e.jsx(n,{checked:s==="none",onChange:()=>t("none"),label:"None",description:"Mute all notifications."})]})}function E(){const[s,t]=c.useState("pro");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:s==="free",onChange:()=>t("free"),label:"Free",description:"Basic features for individuals."}),e.jsx(n,{checked:s==="pro",onChange:()=>t("pro"),label:"Pro",description:"Advanced features for teams."}),e.jsx(n,{checked:s==="enterprise",onChange:()=>t("enterprise"),label:"Enterprise",description:"Custom solutions for large organizations."})]})}function i({title:s,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:s}),t]})}var p,u,m,x,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <RadioButton size="sm" />
          <RadioButton size="md" />
          <RadioButton size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
      }}>
          <RadioButton size="sm" checked />
          <RadioButton size="md" checked />
          <RadioButton size="md" checked disabled />
        </div>
      </Section>
    </div>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"All radio states.",...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var h,y,g,b,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          <RadioButton size="sm" />
          <RadioButton size="sm" checked />
          <RadioButton size="sm" disabled />
          <RadioButton size="sm" checked disabled />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{
        display: "flex",
        gap: "var(--space-6)"
      }}>
          <RadioButton size="md" />
          <RadioButton size="md" checked />
          <RadioButton size="md" disabled />
          <RadioButton size="md" checked disabled />
        </div>
      </Section>
    </div>
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"Sizes comparison.",...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var j,S,z,k,R;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      <RadioGroup />
    </div>
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"With label and description.",...(R=(k=r.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var B,C,D,G,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Radio Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
    maxWidth: 400
  }}>
      <Section title="Notification preference">
        <NotificationGroup />
      </Section>
      <Section title="Plan selection">
        <PlanGroup />
      </Section>
    </div>
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Radio group example — real-world usage.",...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.description}}};var W,_,w,A,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: false,
    label: "Option A",
    description: "First option description.",
    disabled: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source},description:{story:"Interactive playground — use the controls panel to configure.",...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};const H=["RadioStates","Sizes","WithText","RadioGroupExample","Playground"];export{l as Playground,d as RadioGroupExample,a as RadioStates,o as Sizes,r as WithText,H as __namedExportsOrder,I as default};
