import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as b}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=["I just don't like it","Violence, hate or exploitation","Nudity or sexual activity","Scam, fraud or spam","False Information"];function p({open:s=!0,reasons:o=Z,onCancel:m,onReport:g}){const[c,E]=b.useState(new Set),[u,A]=b.useState("");if(!s)return null;const X=a=>{E($=>{const d=new Set($);return d.has(a)?d.delete(a):d.add(a),d})},f=c.size>0;return e.jsxs("div",{className:"flag-message-dialog",children:[e.jsx("div",{className:"flag-message-dialog__header",children:e.jsxs("div",{className:"flag-message-dialog__header-content",children:[e.jsxs("div",{className:"flag-message-dialog__header-top",children:[e.jsx("div",{className:"flag-message-dialog__title",children:"Report a message"}),e.jsx("button",{type:"button",className:"flag-message-dialog__close",onClick:m,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsx("p",{className:"flag-message-dialog__description",children:"Report this chat if it goes against our Community Standards. We won't tell the account you reported them."})]})}),e.jsxs("div",{className:"flag-message-dialog__body",children:[e.jsx("div",{className:"flag-message-dialog__badges",children:o.map(a=>e.jsx("button",{type:"button",className:`flag-message-dialog__badge ${c.has(a)?"flag-message-dialog__badge--selected":""}`,onClick:()=>X(a),children:a},a))}),e.jsxs("div",{className:"flag-message-dialog__field",children:[e.jsxs("label",{className:"flag-message-dialog__label",children:[e.jsx("span",{className:"flag-message-dialog__label-text",children:"Reason "}),e.jsx("span",{className:"flag-message-dialog__label-optional",children:"(Optional)"})]}),e.jsx("textarea",{className:"flag-message-dialog__textarea",placeholder:"Provide additional context for your report...",value:u,onChange:a=>A(a.target.value),rows:4})]})]}),e.jsxs("div",{className:"flag-message-dialog__buttons",children:[e.jsx("button",{type:"button",className:"flag-message-dialog__btn flag-message-dialog__btn--cancel",onClick:m,children:"Cancel"}),e.jsx("button",{type:"button",className:`flag-message-dialog__btn flag-message-dialog__btn--report ${f?"flag-message-dialog__btn--report-active":""}`,disabled:!f,onClick:()=>g==null?void 0:g(Array.from(c),u),children:"Report"})]})]})}try{p.displayName="FlagMessageDialog",p.__docgenInfo={description:"",displayName:"FlagMessageDialog",props:{open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},reasons:{defaultValue:{value:`[
  "I just don't like it",
  "Violence, hate or exploitation",
  "Nudity or sexual activity",
  "Scam, fraud or spam",
  "False Information",
]`},description:"Pre-defined report reasons",name:"reasons",required:!1,type:{name:"string[] | undefined"}},reportEnabled:{defaultValue:null,description:"Whether the report button is enabled (at least one reason selected)",name:"reportEnabled",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel/close is clicked",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onReport:{defaultValue:null,description:"Callback when report is submitted",name:"onReport",required:!1,type:{name:"((selectedReasons: string[], additionalContext: string) => void) | undefined"}}}}}catch{}const Q={title:"Base Components/Flag Message Dialog",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog for reporting or flagging inappropriate messages. Presents selectable\nreason badges, an optional text area for additional context, and cancel/report actions.\n\n**Structure (from Figma node 4090:860298):**\n- Container: 400px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Header: title (20px, bold, `--color-neutral-900`), close icon (24px), description (14px, `--color-neutral-700`)\n- Badges: pill-shaped (`--radius-full`), border `--color-neutral-200`, 14px medium text, wrap layout\n- Selected badge: `--color-ep-50` bg, `--color-ep-300` border, `--color-ep-700` text\n- Text area: `--color-neutral-50` bg, `--radius-md`, border `--color-neutral-100`, placeholder in `--color-neutral-600`\n- Cancel: outlined button, Report: disabled (`--color-neutral-200` bg) until a reason is selected, then `--color-error` bg"}}},argTypes:{open:{control:"boolean",description:"Whether the dialog is visible."},reasons:{control:!1,description:"Pre-defined report reasons."},onCancel:{control:!1},onReport:{control:!1}}},r={args:{open:!0}},t={args:{open:!0,reasons:["Harassment or bullying","Impersonation","Intellectual property violation","Self-harm or suicide","Other"]}},l={args:{open:!0,reasons:["Spam","Inappropriate content","Other"]}},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(_,{language:"HTML",code:`<!-- Flag Message Dialog -->
<div class="flag-message-dialog">
  <div class="flag-message-dialog__header">
    <div class="flag-message-dialog__header-content">
      <div class="flag-message-dialog__header-top">
        <span class="flag-message-dialog__title">Flag Message</span>
        <button class="flag-message-dialog__close" type="button"><!-- X icon --></button>
      </div>
      <p class="flag-message-dialog__description">
        Select a reason for flagging this message.
      </p>
    </div>
  </div>
  <div class="flag-message-dialog__body">
    <div class="flag-message-dialog__badges">
      <button class="flag-message-dialog__badge" type="button">Spam</button>
      <button class="flag-message-dialog__badge flag-message-dialog__badge--selected" type="button">
        Inappropriate content
      </button>
      <button class="flag-message-dialog__badge" type="button">Harassment</button>
    </div>
    <div class="flag-message-dialog__field">
      <label class="flag-message-dialog__label">
        <span class="flag-message-dialog__label-text">Additional details</span>
        <span class="flag-message-dialog__label-optional"> (optional)</span>
      </label>
      <textarea class="flag-message-dialog__textarea" placeholder="Provide more context..."></textarea>
    </div>
  </div>
  <div class="flag-message-dialog__buttons">
    <button class="flag-message-dialog__btn flag-message-dialog__btn--cancel">Cancel</button>
    <button class="flag-message-dialog__btn flag-message-dialog__btn--report flag-message-dialog__btn--report-active">Report</button>
  </div>
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(_,{language:"CSS",code:`.flag-message-dialog {
  width: 400px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.flag-message-dialog__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.flag-message-dialog__badge {
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  cursor: pointer;
}

.flag-message-dialog__badge--selected {
  background: var(--color-ep-50);
  border-color: var(--color-ep-300);
  color: var(--color-ep-700);
}

.flag-message-dialog__textarea {
  width: 100%;
  height: 88px;
  padding: var(--space-2);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  background: var(--color-bg-02);
  font-size: var(--font-size-2);
  resize: none;
}

.flag-message-dialog__btn--report-active {
  background: var(--color-error);
  color: var(--color-white);
}

.flag-message-dialog__btn--report-active:hover {
  background: var(--color-error-700);
}`})})]})},i={args:{open:!0},parameters:{docs:{disable:!0}}},_=({language:s,code:o})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:s})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]});function v({title:s,children:o}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:s}),o]})}var h,x,y,S,j;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Default state — no reason selected, Report button disabled. Matches Figma exactly.",...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var C,w,N,k,z;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    reasons: ["Harassment or bullying", "Impersonation", "Intellectual property violation", "Self-harm or suicide", "Other"]
  }
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source},description:{story:"Custom reasons for a different context.",...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var M,F,L,R,I;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: true,
    reasons: ["Spam", "Inappropriate content", "Other"]
  }
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:"Fewer reasons — minimal variant.",...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var D,H,U,T,V;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Flag Message Dialog -->
<div class="flag-message-dialog">
  <div class="flag-message-dialog__header">
    <div class="flag-message-dialog__header-content">
      <div class="flag-message-dialog__header-top">
        <span class="flag-message-dialog__title">Flag Message</span>
        <button class="flag-message-dialog__close" type="button"><!-- X icon --></button>
      </div>
      <p class="flag-message-dialog__description">
        Select a reason for flagging this message.
      </p>
    </div>
  </div>
  <div class="flag-message-dialog__body">
    <div class="flag-message-dialog__badges">
      <button class="flag-message-dialog__badge" type="button">Spam</button>
      <button class="flag-message-dialog__badge flag-message-dialog__badge--selected" type="button">
        Inappropriate content
      </button>
      <button class="flag-message-dialog__badge" type="button">Harassment</button>
    </div>
    <div class="flag-message-dialog__field">
      <label class="flag-message-dialog__label">
        <span class="flag-message-dialog__label-text">Additional details</span>
        <span class="flag-message-dialog__label-optional"> (optional)</span>
      </label>
      <textarea class="flag-message-dialog__textarea" placeholder="Provide more context..."></textarea>
    </div>
  </div>
  <div class="flag-message-dialog__buttons">
    <button class="flag-message-dialog__btn flag-message-dialog__btn--cancel">Cancel</button>
    <button class="flag-message-dialog__btn flag-message-dialog__btn--report flag-message-dialog__btn--report-active">Report</button>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.flag-message-dialog {
  width: 400px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.flag-message-dialog__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.flag-message-dialog__badge {
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  cursor: pointer;
}

.flag-message-dialog__badge--selected {
  background: var(--color-ep-50);
  border-color: var(--color-ep-300);
  color: var(--color-ep-700);
}

.flag-message-dialog__textarea {
  width: 100%;
  height: 88px;
  padding: var(--space-2);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  background: var(--color-bg-02);
  font-size: var(--font-size-2);
  resize: none;
}

.flag-message-dialog__btn--report-active {
  background: var(--color-error);
  color: var(--color-white);
}

.flag-message-dialog__btn--report-active:hover {
  background: var(--color-error-700);
}\`} />
      </UsageSection>
    </div>
}`,...(U=(H=n.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"HTML & CSS usage reference for the Flag Message Dialog component.",...(V=(T=n.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var P,W,O,q,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(O=(W=i.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"Interactive playground.",...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};const Y=["Default","CustomReasons","MinimalReasons","Usage","Playground"];export{t as CustomReasons,r as Default,l as MinimalReasons,i as Playground,n as Usage,Y as __namedExportsOrder,Q as default};
