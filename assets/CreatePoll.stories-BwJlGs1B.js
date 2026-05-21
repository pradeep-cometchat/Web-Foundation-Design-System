import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function g({open:l=!0,onClose:a,onCreate:x,maxOptions:h=12}){const[b,te]=j.useState(""),[r,v]=j.useState(["",""]),[f,s]=j.useState("");if(!l)return null;const oe=()=>{if(r.length>=h){s(`You've reached the limit. You can add up to ${h} options.`);return}v([...r,""]),s("")},re=(o,n)=>{const c=[...r];c[o]=n,v(c),s("")},le=o=>{r.length<=2||(v(r.filter((n,c)=>c!==o)),s(""))},y=b.trim().length>0&&r.filter(o=>o.trim()).length>=2,ae=()=>{if(!y){s("Please fill in all required fields before creating a poll.");return}x==null||x(b,r.filter(o=>o.trim()))};return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close",onClick:a,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",placeholder:"Ask a question",value:b,onChange:o=>te(o.target.value)})]}),e.jsxs("div",{className:"create-poll__section",children:[r.map((o,n)=>e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,"aria-label":"Reorder",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",placeholder:"Option",value:o,onChange:c=>re(n,c.target.value)}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,"aria-label":"Add emoji",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",onClick:()=>le(n),"aria-label":"Remove option",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]},n)),r.length<h&&e.jsxs("button",{type:"button",className:"create-poll__add-option",onClick:oe,children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[f&&e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:f})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:`create-poll__btn create-poll__btn--create ${y?"create-poll__btn--active":""}`,onClick:ae,children:"Create"})]})]})]})}try{g.displayName="CreatePoll",g.__docgenInfo={description:"",displayName:"CreatePoll",props:{open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Callback when close/cancel is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onCreate:{defaultValue:null,description:"Callback when create is clicked",name:"onCreate",required:!1,type:{name:"((question: string, options: string[]) => void) | undefined"}},maxOptions:{defaultValue:{value:"12"},description:"Maximum number of options allowed. Default: 12",name:"maxOptions",required:!1,type:{name:"number | undefined"}}}}}catch{}const ue={title:"Base Components/Create Poll",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog for creating a new poll. Includes a question input, dynamic option list
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
- Max limit — "You've reached the limit. You can add up to 12 options."`}}},argTypes:{open:{control:"boolean",description:"Whether the dialog is visible."},maxOptions:{control:{type:"number",min:2,max:20},description:"Maximum options allowed."},onClose:{control:!1},onCreate:{control:!1}}},i={args:{open:!0}},d={render:()=>e.jsx(ne,{})},p={render:()=>e.jsx(ce,{})},u={render:()=>e.jsx(se,{})},_={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(L,{title:"HTML",children:e.jsx(C,{language:"HTML",code:`<!-- Create Poll Dialog -->
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
</div>`})}),e.jsx(L,{title:"CSS (CometChat Tokens)",children:e.jsx(C,{language:"CSS",code:`.create-poll {
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
}`})})]})},m={args:{open:!0,maxOptions:12},parameters:{docs:{disable:!0}}};function ne(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsx("div",{className:"create-poll__footer",children:e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})})]})}function ce(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsxs("button",{type:"button",className:"create-poll__add-option",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{children:"Add an option"})]})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:"Please fill in all required fields before creating a poll."})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})]})]})}function se(){return e.jsxs("div",{className:"create-poll",children:[e.jsxs("div",{className:"create-poll__header",children:[e.jsx("span",{className:"create-poll__title",children:"Create Poll"}),e.jsx("button",{type:"button",className:"create-poll__close","aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"create-poll__body",children:[e.jsxs("div",{className:"create-poll__section",children:[e.jsx("label",{className:"create-poll__label",children:"Question"}),e.jsx("input",{type:"text",className:"create-poll__question-input",defaultValue:"How do you prefer to shop?",readOnly:!0})]}),e.jsxs("div",{className:"create-poll__section",children:[e.jsx(t,{value:"Online"}),e.jsx(t,{value:"In-store"}),e.jsx(t,{value:"Others"}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsx(t,{value:""}),e.jsx(t,{value:""})]})]}),e.jsxs("div",{className:"create-poll__footer",children:[e.jsxs("div",{className:"create-poll__error",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"currentColor"}),e.jsx("path",{d:"M12 8V13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"white"})]}),e.jsx("span",{children:"You've reached the limit. You can add up to 12 options."})]}),e.jsxs("div",{className:"create-poll__buttons",children:[e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--cancel",children:"Cancel"}),e.jsx("button",{type:"button",className:"create-poll__btn create-poll__btn--create create-poll__btn--active",children:"Create"})]})]})]})}function t({value:l}){return e.jsxs("div",{className:"create-poll__option-row",children:[e.jsx("button",{type:"button",className:"create-poll__drag",tabIndex:-1,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8H21M3 16H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"create-poll__option-field",children:[e.jsx("input",{type:"text",className:"create-poll__option-input",defaultValue:l,placeholder:"Option",readOnly:!0}),e.jsx("button",{type:"button",className:"create-poll__emoji-btn",tabIndex:-1,children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("button",{type:"button",className:"create-poll__remove",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]})}const C=({language:l,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]});function L({title:l,children:a}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:l}),a]})}var k,N,w,M,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source},description:{story:"Empty state — 2 blank options, Create disabled.",...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var O,q,W,B,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FilledDemo />
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:"Filled state — Create button active (purple).",...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.description}}};var P,H,E,A,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ValidationErrorDemo />
}`,...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.source},description:{story:"Validation error state.",...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var I,T,U,F,Q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <MaxOptionsDemo />
}`,...(U=(T=u.parameters)==null?void 0:T.docs)==null?void 0:U.source},description:{story:"Max options reached (limit error).",...(Q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Q.description}}};var z,X,Y,Z,R;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"HTML & CSS usage reference for the Create Poll component.",...(R=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:R.description}}};var $,G,J,K,ee;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    open: true,
    maxOptions: 12
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Interactive playground.",...(ee=(K=m.parameters)==null?void 0:K.docs)==null?void 0:ee.description}}};const _e=["Empty","Filled","ValidationError","MaxOptions","Usage","Playground"];export{i as Empty,d as Filled,u as MaxOptions,m as Playground,_ as Usage,p as ValidationError,_e as __namedExportsOrder,ue as default};
