import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as b}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=["I just don't like it","Violence, hate or exploitation","Nudity or sexual activity","Scam, fraud or spam","False Information"];function m({open:o=!0,reasons:t=Z,onCancel:p,onReport:d}){const[g,E]=b.useState(new Set),[u,A]=b.useState("");if(!o)return null;const X=a=>{E($=>{const c=new Set($);return c.has(a)?c.delete(a):c.add(a),c})},f=g.size>0;return e.jsxs("div",{className:"flag-message-dialog",children:[e.jsx("div",{className:"flag-message-dialog__header",children:e.jsxs("div",{className:"flag-message-dialog__header-content",children:[e.jsxs("div",{className:"flag-message-dialog__header-top",children:[e.jsx("div",{className:"flag-message-dialog__title",children:"Report a message"}),e.jsx("button",{type:"button",className:"flag-message-dialog__close",onClick:p,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z",fill:"currentColor"})})})]}),e.jsx("p",{className:"flag-message-dialog__description",children:"Report this chat if it goes against our Community Standards. We won't tell the account you reported them."})]})}),e.jsxs("div",{className:"flag-message-dialog__body",children:[e.jsx("div",{className:"flag-message-dialog__badges",children:t.map(a=>e.jsx("button",{type:"button",className:`flag-message-dialog__badge ${g.has(a)?"flag-message-dialog__badge--selected":""}`,onClick:()=>X(a),children:a},a))}),e.jsxs("div",{className:"flag-message-dialog__field",children:[e.jsxs("label",{className:"flag-message-dialog__label",children:[e.jsx("span",{className:"flag-message-dialog__label-text",children:"Reason "}),e.jsx("span",{className:"flag-message-dialog__label-optional",children:"(Optional)"})]}),e.jsx("textarea",{className:"flag-message-dialog__textarea",placeholder:"Provide additional context for your report...",value:u,onChange:a=>A(a.target.value),rows:4})]})]}),e.jsxs("div",{className:"flag-message-dialog__buttons",children:[e.jsx("button",{type:"button",className:"flag-message-dialog__btn flag-message-dialog__btn--cancel",onClick:p,children:"Cancel"}),e.jsx("button",{type:"button",className:`flag-message-dialog__btn flag-message-dialog__btn--report ${f?"flag-message-dialog__btn--report-active":""}`,disabled:!f,onClick:()=>d==null?void 0:d(Array.from(g),u),children:"Report"})]})]})}try{m.displayName="FlagMessageDialog",m.__docgenInfo={description:"",displayName:"FlagMessageDialog",props:{open:{defaultValue:{value:"true"},description:"Whether the dialog is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},reasons:{defaultValue:{value:`[
  "I just don't like it",
  "Violence, hate or exploitation",
  "Nudity or sexual activity",
  "Scam, fraud or spam",
  "False Information",
]`},description:"Pre-defined report reasons",name:"reasons",required:!1,type:{name:"string[] | undefined"}},reportEnabled:{defaultValue:null,description:"Whether the report button is enabled (at least one reason selected)",name:"reportEnabled",required:!1,type:{name:"boolean | undefined"}},onCancel:{defaultValue:null,description:"Callback when cancel/close is clicked",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onReport:{defaultValue:null,description:"Callback when report is submitted",name:"onReport",required:!1,type:{name:"((selectedReasons: string[], additionalContext: string) => void) | undefined"}}}}}catch{}const Q={title:"Base Components/Dialog/Form Dialogs/Flag Message Dialog",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog for reporting or flagging inappropriate messages. Presents selectable\nreason badges, an optional text area for additional context, and cancel/report actions.\n\n**Structure (from Figma node 4090:860298):**\n- Container: 400px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Header: title (20px, bold, `--color-neutral-900`), close icon (24px), description (14px, `--color-neutral-700`)\n- Badges: pill-shaped (`--radius-full`), border `--color-neutral-200`, 14px medium text, wrap layout\n- Selected badge: `--color-ep-50` bg, `--color-ep-300` border, `--color-ep-700` text\n- Text area: `--color-neutral-50` bg, `--radius-md`, border `--color-neutral-100`, placeholder in `--color-neutral-600`\n- Cancel: outlined button, Report: disabled (`--color-neutral-200` bg) until a reason is selected, then `--color-error` bg"}}},argTypes:{open:{control:"boolean",description:"Whether the dialog is visible."},reasons:{control:!1,description:"Pre-defined report reasons."},onCancel:{control:!1},onReport:{control:!1}}},s={args:{open:!0}},r={args:{open:!0,reasons:["Harassment or bullying","Impersonation","Intellectual property violation","Self-harm or suicide","Other"]}},l={args:{open:!0,reasons:["Spam","Inappropriate content","Other"]}},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(h,{title:"HTML",children:e.jsx(_,{language:"HTML",code:`<!-- Flag Message Dialog -->
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
</div>`})}),e.jsx(h,{title:"CSS (CometChat Tokens)",children:e.jsx(_,{language:"CSS",code:`.flag-message-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.flag-message-dialog__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.flag-message-dialog__badge {
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.flag-message-dialog__badge--selected {
  background: var(--cometchat-extended-primary-color-50);
  border-color: var(--cometchat-extended-primary-color-300);
  color: var(--cometchat-extended-primary-color-900);
}

.flag-message-dialog__textarea {
  width: 100%;
  height: 88px;
  padding: var(--cometchat-spacing-2);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-02);
  font-size: 14px;
  resize: none;
}

.flag-message-dialog__btn--report-active {
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
}

.flag-message-dialog__btn--report-active:hover {
  background: var(--cometchat-error-color);
}`})})]})},i={args:{open:!0},parameters:{docs:{disable:!0}}},_=({language:o,code:t})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]});function h({title:o,children:t}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),t]})}var x,v,y,S,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Default state — no reason selected, Report button disabled. Matches Figma exactly.",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var j,k,w,N,M;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true,
    reasons: ["Harassment or bullying", "Impersonation", "Intellectual property violation", "Self-harm or suicide", "Other"]
  }
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Custom reasons for a different context.",...(M=(N=r.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var L,F,R,I,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    reasons: ["Spam", "Inappropriate content", "Other"]
  }
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"Fewer reasons — minimal variant.",...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var z,H,T,U,P;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.flag-message-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.flag-message-dialog__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.flag-message-dialog__badge {
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.flag-message-dialog__badge--selected {
  background: var(--cometchat-extended-primary-color-50);
  border-color: var(--cometchat-extended-primary-color-300);
  color: var(--cometchat-extended-primary-color-900);
}

.flag-message-dialog__textarea {
  width: 100%;
  height: 88px;
  padding: var(--cometchat-spacing-2);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-02);
  font-size: 14px;
  resize: none;
}

.flag-message-dialog__btn--report-active {
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
}

.flag-message-dialog__btn--report-active:hover {
  background: var(--cometchat-error-color);
}\`} />
      </UsageSection>
    </div>
}`,...(T=(H=n.parameters)==null?void 0:H.docs)==null?void 0:T.source},description:{story:"HTML & CSS usage reference for the Flag Message Dialog component.",...(P=(U=n.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var W,V,O,q,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(O=(V=i.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:"Interactive playground.",...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};const Y=["Default","CustomReasons","MinimalReasons","Usage","Playground"];export{r as CustomReasons,s as Default,l as MinimalReasons,i as Playground,n as Usage,Y as __namedExportsOrder,Q as default};
