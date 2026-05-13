import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as J}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({checked:n=!1,indeterminate:t=!1,onChange:o,type:b="checkbox",size:m="md",label:u,description:y,disabled:k=!1,className:X})=>{const f=n||t,g=()=>{k||o==null||o(!n)},Y=["checkbox",k&&"checkbox--disabled",X].filter(Boolean).join(" "),Z=["checkbox__box",`checkbox__box--${m}`,b==="radio"&&"checkbox__box--radio",f&&"checkbox__box--checked"].filter(Boolean).join(" ");return e.jsxs("div",{className:Y,onClick:g,children:[e.jsx("button",{type:"button",role:b==="radio"?"radio":"checkbox","aria-checked":t?"mixed":n,"aria-label":u??"Checkbox",disabled:k,className:Z,onClick:d=>d.stopPropagation(),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),g())},children:f&&e.jsx("span",{className:"checkbox__icon",children:b==="radio"?e.jsx(ne,{size:m}):t?e.jsx(ie,{size:m}):e.jsx(ee,{size:m})})}),(u||y)&&e.jsxs("div",{className:"checkbox__text",children:[u&&e.jsx("span",{className:"checkbox__label",children:u}),y&&e.jsx("span",{className:"checkbox__description",children:y})]})]})},ee=({size:n})=>{const t=n==="sm"?10:12;return e.jsx("svg",{width:t,height:t,viewBox:"0 0 12 12",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M2 6l3 3 5-5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},ie=({size:n})=>{const t=n==="sm"?10:12;return e.jsx("svg",{width:t,height:t,viewBox:"0 0 12 12",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M2.5 6h7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})},ne=({size:n})=>{const t=n==="sm"?6:8;return e.jsx("svg",{width:t,height:t,viewBox:"0 0 8 8",fill:"none","aria-hidden":!0,children:e.jsx("circle",{cx:"4",cy:"4",r:"3",fill:"currentColor"})})};try{i.displayName="Checkbox",i.__docgenInfo={description:`Checkbox & Radio — a selection control.

Types: checkbox (rounded square with check/minus), radio (circle with dot).
Sizes: sm (16px), md (20px).
States: default, hover, focus, disabled, checked, indeterminate.`,displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"Checked state.",name:"checked",required:!1,type:{name:"boolean | undefined"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate state (checkbox only, overrides checked visually).",name:"indeterminate",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Change handler.",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},type:{defaultValue:{value:"checkbox"},description:'Type. Default: "checkbox".',name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"checkbox"'},{value:'"radio"'}]}},size:{defaultValue:{value:"md"},description:'Size. Default: "md".',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:null,description:"Primary label text.",name:"label",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"Supporting description below the label.",name:"description",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"Disabled state.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional className.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const oe={title:"Base Components/Checkbox",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A selection control — checkbox (square with check/minus) or radio (circle with dot).\n\n**Types:** Checkbox, Radio.\n\n**Sizes:** sm (16px), md (20px).\n\n**States:** Default, Hover, Focus, Disabled, Checked, Indeterminate.\n\n**Text:** Optional label (16px/500) and description (14px/400).\n\nUses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,\n`--radius-xs` (sm), `--radius-sm` (md), `--radius-full` (radio), `--focus-ring-xs`."}}},argTypes:{type:{control:"select",options:["checkbox","radio"],table:{category:"Appearance"}},size:{control:"select",options:["sm","md"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}}},h={args:{type:"checkbox",size:"md",checked:!1,indeterminate:!1,label:"Remember me",description:"Save my login details for next time.",disabled:!1},parameters:{docs:{disable:!0}},render:n=>e.jsx(a,{...n})},r={name:"Checkbox States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(s,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{size:"sm"}),e.jsx(i,{size:"md"}),e.jsx(i,{size:"md",disabled:!0})]})}),e.jsx(s,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{size:"sm",checked:!0}),e.jsx(i,{size:"md",checked:!0}),e.jsx(i,{size:"md",checked:!0,disabled:!0})]})}),e.jsx(s,{title:"Indeterminate",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{size:"sm",indeterminate:!0}),e.jsx(i,{size:"md",indeterminate:!0}),e.jsx(i,{size:"md",indeterminate:!0,disabled:!0})]})})]})},c={name:"Radio States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(s,{title:"Unchecked",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{type:"radio",size:"sm"}),e.jsx(i,{type:"radio",size:"md"}),e.jsx(i,{type:"radio",size:"md",disabled:!0})]})}),e.jsx(s,{title:"Checked",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{type:"radio",size:"sm",checked:!0}),e.jsx(i,{type:"radio",size:"md",checked:!0}),e.jsx(i,{type:"radio",size:"md",checked:!0,disabled:!0})]})})]})},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,maxWidth:400},children:[e.jsx(s,{title:"Checkbox with text",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Remember me",description:"Save my login details for next time."}),e.jsx(a,{checked:!0,label:"Email notifications",description:"Get notified when someone sends you a message."}),e.jsx(i,{checked:!0,disabled:!0,label:"Auto-save",description:"This setting is managed by your admin."})]})}),e.jsx(s,{title:"Radio with text",children:e.jsx(Q,{})})]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(s,{title:"Small (16px)",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{size:"sm"}),e.jsx(i,{size:"sm",checked:!0}),e.jsx(i,{size:"sm",indeterminate:!0}),e.jsx(i,{type:"radio",size:"sm"}),e.jsx(i,{type:"radio",size:"sm",checked:!0})]})}),e.jsx(s,{title:"Medium (20px)",children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(i,{size:"md"}),e.jsx(i,{size:"md",checked:!0}),e.jsx(i,{size:"md",indeterminate:!0}),e.jsx(i,{type:"radio",size:"md"}),e.jsx(i,{type:"radio",size:"md",checked:!0})]})})]})},x={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:[e.jsx(s,{title:"Settings list",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{checked:!0,label:"Push notifications",description:"Receive alerts on your device."}),e.jsx(a,{label:"Marketing emails",description:"Tips, product updates, and inspiration."}),e.jsx(a,{checked:!0,label:"Security alerts",description:"Get notified about suspicious activity."}),e.jsx(i,{checked:!0,disabled:!0,label:"Two-factor auth",description:"Enforced by your organization."})]})}),e.jsx(s,{title:"Radio group",children:e.jsx(Q,{})})]})};function a(n){const[t,o]=J.useState(n.checked??!1);return e.jsx(i,{...n,checked:t,onChange:o})}function Q(){const[n,t]=J.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{type:"radio",checked:n==="a",onChange:()=>t("a"),label:"Option A",description:"First option description."}),e.jsx(i,{type:"radio",checked:n==="b",onChange:()=>t("b"),label:"Option B",description:"Second option description."}),e.jsx(i,{type:"radio",checked:n==="c",onChange:()=>t("c"),label:"Option C",description:"Third option description."})]})}function s({title:n,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10},children:n}),t]})}var j,v,C;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "checkbox",
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
}`,...(C=(v=h.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,z,_,D,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Checkbox States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <Section title="Unchecked">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox size="sm" checked />
          <Checkbox size="md" checked />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
      <Section title="Indeterminate">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox size="sm" indeterminate />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" indeterminate disabled />
        </div>
      </Section>
    </div>
}`,...(_=(z=r.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:"All checkbox states.",...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var R,T,q,N,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Radio States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <Section title="Unchecked">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox type="radio" size="sm" />
          <Checkbox type="radio" size="md" />
          <Checkbox type="radio" size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox type="radio" size="sm" checked />
          <Checkbox type="radio" size="md" checked />
          <Checkbox type="radio" size="md" checked disabled />
        </div>
      </Section>
    </div>
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:"All radio states.",...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.description}}};var W,A,V,B,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 400
  }}>
      <Section title="Checkbox with text">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
          <ControlledCheckbox label="Remember me" description="Save my login details for next time." />
          <ControlledCheckbox checked label="Email notifications" description="Get notified when someone sends you a message." />
          <Checkbox checked disabled label="Auto-save" description="This setting is managed by your admin." />
        </div>
      </Section>
      <Section title="Radio with text">
        <RadioGroup />
      </Section>
    </div>
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source},description:{story:"With label and description.",...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var I,M,O,P,U;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <Section title="Small (16px)">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox size="sm" />
          <Checkbox size="sm" checked />
          <Checkbox size="sm" indeterminate />
          <Checkbox type="radio" size="sm" />
          <Checkbox type="radio" size="sm" checked />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{
        display: "flex",
        gap: 24
      }}>
          <Checkbox size="md" />
          <Checkbox size="md" checked />
          <Checkbox size="md" indeterminate />
          <Checkbox type="radio" size="md" />
          <Checkbox type="radio" size="md" checked />
        </div>
      </Section>
    </div>
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Sizes comparison.",...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var L,F,H,K,$;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 400
  }}>
      <Section title="Settings list">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
          <ControlledCheckbox checked label="Push notifications" description="Receive alerts on your device." />
          <ControlledCheckbox label="Marketing emails" description="Tips, product updates, and inspiration." />
          <ControlledCheckbox checked label="Security alerts" description="Get notified about suspicious activity." />
          <Checkbox checked disabled label="Two-factor auth" description="Enforced by your organization." />
        </div>
      </Section>
      <Section title="Radio group">
        <RadioGroup />
      </Section>
    </div>
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Real-world examples.",...($=(K=x.parameters)==null?void 0:K.docs)==null?void 0:$.description}}};const de=["Playground","CheckboxStates","RadioStates","WithText","Sizes","Examples"];export{r as CheckboxStates,x as Examples,h as Playground,c as RadioStates,p as Sizes,l as WithText,de as __namedExportsOrder,oe as default};
