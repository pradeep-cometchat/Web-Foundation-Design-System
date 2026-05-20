import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function f({open:l=!0,onClose:a,onCreate:b,maxOptions:v=12}){const[m,te]=j.useState(""),[r,h]=j.useState(["",""]),[g,c]=j.useState("");if(!l)return null;const oe=()=>{if(r.length>=v){c(`You've reached the limit. You can add up to ${v} options.`);return}h([...r,""]),c("")},re=(o,n)=>{const s=[...r];s[o]=n,h(s),c("")},le=o=>{r.length<=2||(h(r.filter((n,s)=>s!==o)),c(""))},y=m.trim().length>0&&r.filter(o=>o.trim()).length>=2,ae=()=>{if(!y){c("Please fill in all required fields before creating a poll.");return}b==null||b(m,r.filter(o=>o.trim()))};return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close",onClick:a,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",placeholder:"Ask a question",value:m,onChange:o=>te(o.target.value)})]}),e.jsxs("div",{className:"create-poll__section",children:[r.map((o,n)=>e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,"aria-label":"Reorder",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",placeholder:"Option",value:o,onChange:s=>re(n,s.target.value)}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,"aria-label":"Add emoji",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",onClick:()=>le(n),"aria-label":"Remove option",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]},n)),r.length<v&&e.jsxs("button",{type:"button",className:"create-poll__add-option",onClick:oe,children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[g&&e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:g})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:`create-poll__btn create-poll__btn--create ${y?"create-poll__btn--active":""}`,onClick:ae,children:"Create"})]})]})]})}try{f.displayName="CreatePoll",f.__docgenInfo={description:"",displayName:"CreatePoll",props:{open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when close/cancel is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onCreate:{defaultValue:null,description:"Callback when create is clicked",name:"onCreate",required:!1,type:{name:"((question: string, options: string[]) => void) | undefined"}},maxOptions:{defaultValue:{value:"12"},description:"Maximum number of options allowed. Default: 12",name:"maxOptions",required:!1,type:{name:"number | undefined"}}}}}catch{}const ue={title:"Base Components/Create Poll",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog for creating a new poll. Includes a question input, dynamic option list
with drag handles, emoji buttons, delete buttons, an "Add an option" link, error
states, and Cancel/Create action buttons.

**Structure (from Figma):**
- Container: 420px, \`--radius-3xl\` (20px), \`--shadow-lg\`
- Header: 64px, "Create Poll" (20px, bold), close X, border-bottom
- Question: label (16px, medium) + rounded input (14px, border \`--color-neutral-200\`)
- Options: drag handle (≡) + rounded input with emoji icon (😊) + X delete button
- "+ Add an option": ⊕ icon + text in \`--color-ep-600\`
- Error: pink banner (\`--color-error-50\` bg) with error icon + message
- Buttons: Cancel (outlined) + Create (disabled: gray / active: \`--color-ep-600\`)
- Max options: 12

**States:**
- Empty — 2 blank options, Create disabled
- Filled — question + options filled, Create active (purple)
- Validation error — "Please fill in all required fields before creating a poll."
- Max limit — "You've reached the limit. You can add up to 12 options."`}}},argTypes:{open:{control:"boolean",description:"Whether the dialog is visible."},maxOptions:{control:{type:"number",min:2,max:20},description:"Maximum options allowed."},onClose:{control:!1},onCreate:{control:!1}}},i={args:{open:!0}},d={render:()=>e.jsx(ne,{})},p={render:()=>e.jsx(se,{})},u={render:()=>e.jsx(ce,{})},_={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(L,{title:"HTML",children:e.jsx(C,{language:"HTML",code:`<!-- Create Poll Dialog -->
<div class="create-poll">
  <div class="create-poll__header">
    <span class="create-poll__title">Create Poll</span>
    <button class="create-poll__close" type="button"><!-- X icon --></button>
  </div>
  <div class="create-poll__body">
    <div class="create-poll__section">
      <label class="create-poll__label">Question</label>
      <input class="create-poll__question-input" placeholder="Ask a question" />
    </div>
    <div class="create-poll__section">
      <div class="create-poll__option-row">
        <button class="create-poll__drag" type="button"><!-- drag icon --></button>
        <div class="create-poll__option-field">
          <input class="create-poll__option-input" placeholder="Option" />
          <button class="create-poll__emoji-btn" type="button"><!-- emoji icon --></button>
        </div>
        <button class="create-poll__remove" type="button"><!-- X icon --></button>
      </div>
      <button class="create-poll__add-option" type="button">
        <!-- + icon --> <span>Add an option</span>
      </button>
    </div>
  </div>
  <div class="create-poll__footer">
    <div class="create-poll__buttons">
      <button class="create-poll__btn create-poll__btn--cancel">Cancel</button>
      <button class="create-poll__btn create-poll__btn--create create-poll__btn--active">Create</button>
    </div>
  </div>
</div>`})}),e.jsx(L,{title:"CSS (Foundation Variables)",children:e.jsx(C,{language:"CSS",code:`.create-poll {
  width: 420px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.create-poll__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
}

.create-poll__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.create-poll__question-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  font-size: var(--font-size-2);
  color: var(--color-text-primary);
}

.create-poll__option-field {
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
}

.create-poll__add-option {
  color: var(--color-ep-600);
  font-weight: var(--font-weight-medium);
}

.create-poll__btn--cancel {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-dark);
}

.create-poll__btn--active {
  background: var(--color-ep-600);
  color: var(--color-white);
}`})})]})},x={args:{open:!0,maxOptions:12},parameters:{docs:{disable:!0}}};function ne(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsx("div",{className:"create-poll__footer",children:e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})})]})}function se(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:"Please fill in all required fields before creating a poll."})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})]})]})}function ce(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsx(t,{value:""})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:"You've reached the limit. You can add up to 12 options."})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})]})]})}function t({value:l}){return e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",defaultValue:l,placeholder:"Option",readOnly:!0}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]})}const C=({language:l,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});function L({title:l,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:l}),a]})}var N,k,w,M,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Empty state — 2 blank options, Create disabled.",...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var O,q,V,W,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FilledDemo />
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:"Filled state — Create button active (purple).",...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var P,H,z,E,A;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ValidationErrorDemo />
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source},description:{story:"Validation error state.",...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.description}}};var D,I,F,U,Q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <MaxOptionsDemo />
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source},description:{story:"Max options reached (limit error).",...(Q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var T,X,Y,Z,R;_.parameters={..._.parameters,docs:{...(T=_.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Create Poll Dialog -->
<div class="create-poll">
  <div class="create-poll__header">
    <span class="create-poll__title">Create Poll</span>
    <button class="create-poll__close" type="button"><!-- X icon --></button>
  </div>
  <div class="create-poll__body">
    <div class="create-poll__section">
      <label class="create-poll__label">Question</label>
      <input class="create-poll__question-input" placeholder="Ask a question" />
    </div>
    <div class="create-poll__section">
      <div class="create-poll__option-row">
        <button class="create-poll__drag" type="button"><!-- drag icon --></button>
        <div class="create-poll__option-field">
          <input class="create-poll__option-input" placeholder="Option" />
          <button class="create-poll__emoji-btn" type="button"><!-- emoji icon --></button>
        </div>
        <button class="create-poll__remove" type="button"><!-- X icon --></button>
      </div>
      <button class="create-poll__add-option" type="button">
        <!-- + icon --> <span>Add an option</span>
      </button>
    </div>
  </div>
  <div class="create-poll__footer">
    <div class="create-poll__buttons">
      <button class="create-poll__btn create-poll__btn--cancel">Cancel</button>
      <button class="create-poll__btn create-poll__btn--create create-poll__btn--active">Create</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.create-poll {
  width: 420px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.create-poll__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
}

.create-poll__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.create-poll__question-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  font-size: var(--font-size-2);
  color: var(--color-text-primary);
}

.create-poll__option-field {
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
}

.create-poll__add-option {
  color: var(--color-ep-600);
  font-weight: var(--font-weight-medium);
}

.create-poll__btn--cancel {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-dark);
}

.create-poll__btn--active {
  background: var(--color-ep-600);
  color: var(--color-white);
}\`} />
      </UsageSection>
    </div>
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"HTML & CSS usage reference for the Create Poll component.",...(R=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:R.description}}};var $,G,J,K,ee;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    open: true,
    maxOptions: 12
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Interactive playground.",...(ee=(K=x.parameters)==null?void 0:K.docs)==null?void 0:ee.description}}};const _e=["Empty","Filled","ValidationError","MaxOptions","Usage","Playground"];export{i as Empty,d as Filled,u as MaxOptions,x as Playground,_ as Usage,p as ValidationError,_e as __namedExportsOrder,ue as default};
