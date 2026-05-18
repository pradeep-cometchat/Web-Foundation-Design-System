import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{C as E}from"./Checkbox.impl-DkH5ngRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=o=>e.jsx(E,{...o,type:"radio"});try{n.displayName="RadioButton",n.__docgenInfo={description:'RadioButton — a single-select option within a group.\nWraps the Checkbox component with `type="radio"`.',displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Whether this radio is selected.",name:"checked",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Change handler.",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},size:{defaultValue:null,description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:"Primary label text.",name:"label",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"Supporting description below the label.",name:"description",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"Disabled state.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const Y={title:"Base Components/Radio Button",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A single-select option within a group — circle with dot when selected.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-full` (circle), `--focus-ring-xs`."}}},argTypes:{size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},t={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(s,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"md",disabled:!0})]})}),e.jsx(s,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm",checked:!0}),e.jsx(n,{size:"md",checked:!0}),e.jsx(n,{size:"md",checked:!0,disabled:!0})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-5)"},children:[e.jsx(s,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"sm",checked:!0}),e.jsx(n,{size:"sm",disabled:!0}),e.jsx(n,{size:"sm",checked:!0,disabled:!0})]})}),e.jsx(s,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsx(n,{size:"md"}),e.jsx(n,{size:"md",checked:!0}),e.jsx(n,{size:"md",disabled:!0}),e.jsx(n,{size:"md",checked:!0,disabled:!0})]})})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",maxWidth:400},children:e.jsx(L,{})})},c={name:"Radio Group",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)",maxWidth:400},children:[e.jsx(s,{title:"Notification preference",children:e.jsx(U,{})}),e.jsx(s,{title:"Plan selection",children:e.jsx(I,{})})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(s,{title:"HTML",children:e.jsx(u,{language:"HTML",code:`<!-- Radio Button (uses Checkbox markup with type="radio") -->
<label class="checkbox checkbox--md">
  <input class="checkbox__input" type="radio" name="group" />
  <span class="checkbox__control checkbox__control--radio">
    <span class="checkbox__dot"></span>
  </span>
  <span class="checkbox__text">
    <span class="checkbox__label">Option A</span>
    <span class="checkbox__description">First option description.</span>
  </span>
</label>

<!-- Radio Group -->
<div role="radiogroup" aria-label="Preference">
  <label class="checkbox checkbox--md">
    <input class="checkbox__input" type="radio" name="pref" checked />
    <span class="checkbox__control checkbox__control--radio checkbox__control--checked">
      <span class="checkbox__dot"></span>
    </span>
    <span class="checkbox__text">
      <span class="checkbox__label">All notifications</span>
      <span class="checkbox__description">Get notified for every message.</span>
    </span>
  </label>
  <label class="checkbox checkbox--md">
    <input class="checkbox__input" type="radio" name="pref" />
    <span class="checkbox__control checkbox__control--radio">
      <span class="checkbox__dot"></span>
    </span>
    <span class="checkbox__text">
      <span class="checkbox__label">Mentions only</span>
      <span class="checkbox__description">Only when someone mentions you.</span>
    </span>
  </label>
</div>`})}),e.jsx(s,{title:"CSS (Foundation Variables)",children:e.jsx(u,{language:"CSS",code:`/* Radio uses the same .checkbox base with --radio modifier */
.checkbox__control--radio {
  border-radius: var(--radius-full);
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--color-neutral-lm-300);
  background: var(--color-bg-01);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox__control--radio.checkbox__control--checked {
  border-color: var(--color-ep-700);
  background: var(--color-ep-700);
}

.checkbox__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-white);
}

.checkbox__control--radio:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

.checkbox__label {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.checkbox__description {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
}`})})]})},d={args:{size:"md",checked:!1,label:"Option A",description:"First option description.",disabled:!1},parameters:{docs:{disable:!0}}};function L(){const[o,a]=p.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:o==="a",onChange:()=>a("a"),label:"Option A",description:"First option description."}),e.jsx(n,{checked:o==="b",onChange:()=>a("b"),label:"Option B",description:"Second option description."}),e.jsx(n,{checked:o==="c",onChange:()=>a("c"),label:"Option C",description:"Third option description."})]})}function U(){const[o,a]=p.useState("all");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:o==="all",onChange:()=>a("all"),label:"All notifications",description:"Get notified for every message."}),e.jsx(n,{checked:o==="mentions",onChange:()=>a("mentions"),label:"Mentions only",description:"Only when someone mentions you."}),e.jsx(n,{checked:o==="none",onChange:()=>a("none"),label:"None",description:"Mute all notifications."})]})}function I(){const[o,a]=p.useState("pro");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{checked:o==="free",onChange:()=>a("free"),label:"Free",description:"Basic features for individuals."}),e.jsx(n,{checked:o==="pro",onChange:()=>a("pro"),label:"Pro",description:"Advanced features for teams."}),e.jsx(n,{checked:o==="enterprise",onChange:()=>a("enterprise"),label:"Enterprise",description:"Custom solutions for large organizations."})]})}function s({title:o,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:o}),a]})}const u=({language:o,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});var x,h,m,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:"All radio states.",...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var g,k,_,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(k=r.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:"Sizes comparison.",...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var j,S,z,C,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"With label and description.",...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var w,B,D,G,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"Radio group example — real-world usage.",...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.description}}};var W,O,T,M,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Radio Button (uses Checkbox markup with type="radio") -->
<label class="checkbox checkbox--md">
  <input class="checkbox__input" type="radio" name="group" />
  <span class="checkbox__control checkbox__control--radio">
    <span class="checkbox__dot"></span>
  </span>
  <span class="checkbox__text">
    <span class="checkbox__label">Option A</span>
    <span class="checkbox__description">First option description.</span>
  </span>
</label>

<!-- Radio Group -->
<div role="radiogroup" aria-label="Preference">
  <label class="checkbox checkbox--md">
    <input class="checkbox__input" type="radio" name="pref" checked />
    <span class="checkbox__control checkbox__control--radio checkbox__control--checked">
      <span class="checkbox__dot"></span>
    </span>
    <span class="checkbox__text">
      <span class="checkbox__label">All notifications</span>
      <span class="checkbox__description">Get notified for every message.</span>
    </span>
  </label>
  <label class="checkbox checkbox--md">
    <input class="checkbox__input" type="radio" name="pref" />
    <span class="checkbox__control checkbox__control--radio">
      <span class="checkbox__dot"></span>
    </span>
    <span class="checkbox__text">
      <span class="checkbox__label">Mentions only</span>
      <span class="checkbox__description">Only when someone mentions you.</span>
    </span>
  </label>
</div>\`} />
      </Section>
      <Section title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`/* Radio uses the same .checkbox base with --radio modifier */
.checkbox__control--radio {
  border-radius: var(--radius-full);
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--color-neutral-lm-300);
  background: var(--color-bg-01);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox__control--radio.checkbox__control--checked {
  border-color: var(--color-ep-700);
  background: var(--color-ep-700);
}

.checkbox__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-white);
}

.checkbox__control--radio:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

.checkbox__label {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.checkbox__description {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
}\`} />
      </Section>
    </div>
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:"HTML & CSS usage reference for the Radio Button component.",...(F=(M=l.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var N,P,V,q,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Interactive playground — use the controls panel to configure.",...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};const Z=["RadioStates","Sizes","WithText","RadioGroupExample","Usage","Playground"];export{d as Playground,c as RadioGroupExample,t as RadioStates,r as Sizes,l as Usage,i as WithText,Z as __namedExportsOrder,Y as default};
