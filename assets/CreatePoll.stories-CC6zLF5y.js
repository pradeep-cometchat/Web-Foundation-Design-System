import{j as e}from"./jsx-runtime-BYYWji4R.js";import{u as m,T as t}from"./T-C6nayWAE.js";import{r as y}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C({open:o=!0,onClose:a,onCreate:v,maxOptions:j=12}){const b=m(),[g,le]=y.useState(""),[n,f]=y.useState(["",""]),[L,i]=y.useState("");if(!o)return null;const ae=()=>{if(n.length>=j){i(b("You've reached the limit. You can add up to {n} options.").replace("{n}",String(j)));return}f([...n,""]),i("")},ne=(l,c)=>{const s=[...n];s[l]=c,f(s),i("")},ce=l=>{n.length<=2||(f(n.filter((c,s)=>s!==l)),i(""))},k=g.trim().length>0&&n.filter(l=>l.trim()).length>=2,se=()=>{if(!k){i(b("Please fill in all required fields before creating a poll."));return}v==null||v(g,n.filter(l=>l.trim()))};return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:e.jsx(t,{children:"Create Poll"})}),e.jsx("button",{type:"button",className:"create-poll__close",onClick:a,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:e.jsx(t,{children:"Question"})}),e.jsx("input",{type:"text",className:"create-poll__question-input",placeholder:b("Ask a question"),value:g,onChange:l=>le(l.target.value)})]}),e.jsxs("div",{className:"create-poll__section",children:[n.map((l,c)=>e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,"aria-label":"Reorder",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",placeholder:b("Option"),value:l,onChange:s=>ne(c,s.target.value)}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,"aria-label":"Add emoji",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",onClick:()=>ce(c),"aria-label":"Remove option",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]},c)),n.length<j&&e.jsxs("button",{type:"button",className:"create-poll__add-option",onClick:ae,children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:e.jsx(t,{children:"Add an option"})})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[L&&e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:e.jsx(t,{children:L})})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",onClick:a,children:e.jsx(t,{children:"Cancel"})}),e.jsx("button",{type:"button",className:`create-poll__btn create-poll__btn--create ${k?"create-poll__btn--active":""}`,onClick:se,children:e.jsx(t,{children:"Create"})})]})]})]})}try{C.displayName="CreatePoll",C.__docgenInfo={description:"",displayName:"CreatePoll",props:{open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when close/cancel is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onCreate:{defaultValue:null,description:"Callback when create is clicked",name:"onCreate",required:!1,type:{name:"((question: string, options: string[]) => void) | undefined"}},maxOptions:{defaultValue:{value:"12"},description:"Maximum number of options allowed. Default: 12",name:"maxOptions",required:!1,type:{name:"number | undefined"}}}}}catch{}const me={title:"Base Components/Create Poll",component:C,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog for creating a new poll. Includes a question input, dynamic option list
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
- Max limit — "You've reached the limit. You can add up to 12 options."`}}},argTypes:{open:{control:"boolean",description:"Whether the dialog is visible."},maxOptions:{control:{type:"number",min:2,max:20},description:"Maximum options allowed."},onClose:{control:!1},onCreate:{control:!1}}},d={args:{open:!0}},p={render:()=>e.jsx(ie,{})},u={render:()=>e.jsx(de,{})},x={render:()=>e.jsx(pe,{})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(w,{title:"HTML",children:e.jsx(N,{language:"HTML",code:`<!-- Create Poll Dialog -->
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
</div>`})}),e.jsx(w,{title:"CSS (CometChat Tokens)",children:e.jsx(N,{language:"CSS",code:`.create-poll {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.create-poll__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.create-poll__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.create-poll__question-input {
  width: 100%;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
}

.create-poll__option-field {
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
}

.create-poll__add-option {
  color: var(--cometchat-primary-color);
  font-weight: 500;
}

.create-poll__btn--cancel {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-dark);
}

.create-poll__btn--active {
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}`})})]})},_={args:{open:!0,maxOptions:12},parameters:{docs:{disable:!0}}};function ie(){const o=m();return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:e.jsx(t,{children:"Create Poll"})}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:e.jsx(t,{children:"Question"})}),e.jsx("input",{type:"text",className:"create-poll__question-input",value:o("How do you prefer to shop?"),placeholder:o("Ask a question"),readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(r,{value:"Online"}),e.jsx(r,{value:"In-store"}),e.jsx(r,{value:"Others"}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:e.jsx(t,{children:"Add an option"})})]})]})]}),e.jsx("div",{className:"create-poll__footer",children:e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:e.jsx(t,{children:"Cancel"})}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:e.jsx(t,{children:"Create"})})]})})]})}function de(){const o=m();return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:e.jsx(t,{children:"Create Poll"})}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:e.jsx(t,{children:"Question"})}),e.jsx("input",{type:"text",className:"create-poll__question-input",value:o("How do you prefer to shop?"),placeholder:o("Ask a question"),readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(r,{value:"Online"}),e.jsx(r,{value:"In-store"}),e.jsx(r,{value:"Others"}),e.jsx(r,{value:""}),e.jsx(r,{value:""}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:e.jsx(t,{children:"Add an option"})})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:e.jsx(t,{children:"Please fill in all required fields before creating a poll."})})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:e.jsx(t,{children:"Cancel"})}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:e.jsx(t,{children:"Create"})})]})]})]})}function pe(){const o=m();return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:e.jsx(t,{children:"Create Poll"})}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:e.jsx(t,{children:"Question"})}),e.jsx("input",{type:"text",className:"create-poll__question-input",value:o("How do you prefer to shop?"),placeholder:o("Ask a question"),readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(r,{value:"Online"}),e.jsx(r,{value:"In-store"}),e.jsx(r,{value:"Others"}),e.jsx(r,{value:""}),e.jsx(r,{value:""}),e.jsx(r,{value:""}),e.jsx(r,{value:""})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:e.jsx(t,{children:"You've reached the limit. You can add up to 12 options."})})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:e.jsx(t,{children:"Cancel"})}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:e.jsx(t,{children:"Create"})})]})]})]})}function r({value:o}){const a=m();return e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",value:a(o),placeholder:a("Option"),readOnly:!0}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]})}const N=({language:o,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});function w({title:o,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(t,{children:o})}),a]})}var M,S,O,q,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(O=(S=d.parameters)==null?void 0:S.docs)==null?void 0:O.source},description:{story:"Empty state — 2 blank options, Create disabled.",...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.description}}};var B,P,H,V,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <FilledDemo />
}`,...(H=(P=p.parameters)==null?void 0:P.docs)==null?void 0:H.source},description:{story:"Filled state — Create button active (purple).",...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var E,D,T,I,U;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ValidationErrorDemo />
}`,...(T=(D=u.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"Validation error state.",...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var F,Q,z,X,Y;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <MaxOptionsDemo />
}`,...(z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:z.source},description:{story:"Max options reached (limit error).",...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,R,$,G,J;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.create-poll {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.create-poll__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.create-poll__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.create-poll__question-input {
  width: 100%;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
}

.create-poll__option-field {
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
}

.create-poll__add-option {
  color: var(--cometchat-primary-color);
  font-weight: 500;
}

.create-poll__btn--cancel {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-dark);
}

.create-poll__btn--active {
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}\`} />
      </UsageSection>
    </div>
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"HTML & CSS usage reference for the Create Poll component.",...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,ee,te,oe,re;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    open: true,
    maxOptions: 12
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Interactive playground.",...(re=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};const be=["Empty","Filled","ValidationError","MaxOptions","Usage","Playground"];export{d as Empty,p as Filled,x as MaxOptions,_ as Playground,h as Usage,u as ValidationError,be as __namedExportsOrder,me as default};
