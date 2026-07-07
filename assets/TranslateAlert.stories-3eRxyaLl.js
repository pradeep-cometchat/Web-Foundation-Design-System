import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as U}from"./InfoSelectionDialog-CQKJFTji.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={title:"Base Components/Dialog/Info Selection Dialogs/Translate Alert",component:U,parameters:{layout:"centered"},decorators:[t=>e.jsx(M,{children:e.jsx(t,{})})]};function M({children:t}){return e.jsxs("div",{className:"dialog-story-inline",children:[e.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),t]})}const o={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate"}},n={name:"Block Alert",args:{variant:"alert",alertIcon:"block",alertTitle:"User Blocked",alertDescription:"You have blocked this user.",alertButtonLabel:"OK"}},a={name:"Warning Alert",args:{variant:"alert",alertIcon:"warning",alertTitle:"Connection Lost",alertDescription:"Please check your internet connection.",alertButtonLabel:"Retry"}},r={name:"Error Alert",args:{variant:"alert",alertIcon:"error",alertTitle:"Message Failed",alertDescription:"Failed to send message. Please try again.",alertButtonLabel:"OK"}},l={name:"Info Alert",args:{variant:"alert",alertIcon:"info",alertTitle:"New Feature",alertDescription:"You can now translate messages in real-time.",alertButtonLabel:"OK"}},i={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate",open:!0},parameters:{docs:{disable:!0}},argTypes:{alertTitle:{control:"text"},alertDescription:{control:"text"},alertButtonLabel:{control:"text"},alertIcon:{control:"select",options:["block","warning","info","error","translate"]},open:{control:"boolean"}}},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(d,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<div class="info-selection-dialog__overlay">
  <div class="info-selection-dialog">
    <div class="info-selection-dialog__header">
      <h2 class="info-selection-dialog__title">Dialog Title</h2>
      <button class="info-selection-dialog__close">×</button>
    </div>
    <div class="info-selection-dialog__body">
      <!-- Content: member list, alerts, selections -->
    </div>
    <div class="info-selection-dialog__footer">
      <button class="info-selection-dialog__btn--cancel">Cancel</button>
      <button class="info-selection-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>`})}),e.jsx(d,{title:"CSS (CometChat Tokens)",children:e.jsx(g,{language:"CSS",code:`.info-selection-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-selection-dialog {
  width: 420px;
  max-height: 80vh;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info-selection-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.info-selection-dialog__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cometchat-spacing-4);
}

.info-selection-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.info-selection-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}`})})]})};function d({title:t,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,paddingBottom:8,borderBottom:"1px solid var(--cometchat-border-color-default)"},children:t}),s]})}function g({language:t,code:s}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:12,overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:14,fontFamily:"var(--cometchat-font-family)",fontSize:12,lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]})}var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate"
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Block Alert",
  args: {
    variant: "alert",
    alertIcon: "block",
    alertTitle: "User Blocked",
    alertDescription: "You have blocked this user.",
    alertButtonLabel: "OK"
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,x,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Warning Alert",
  args: {
    variant: "alert",
    alertIcon: "warning",
    alertTitle: "Connection Lost",
    alertDescription: "Please check your internet connection.",
    alertButtonLabel: "Retry"
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,k,S;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Error Alert",
  args: {
    variant: "alert",
    alertIcon: "error",
    alertTitle: "Message Failed",
    alertDescription: "Failed to send message. Please try again.",
    alertButtonLabel: "OK"
  }
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,B,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Info Alert",
  args: {
    variant: "alert",
    alertIcon: "info",
    alertTitle: "New Feature",
    alertDescription: "You can now translate messages in real-time.",
    alertButtonLabel: "OK"
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var C,D,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    alertTitle: {
      control: "text"
    },
    alertDescription: {
      control: "text"
    },
    alertButtonLabel: {
      control: "text"
    },
    alertIcon: {
      control: "select",
      options: ["block", "warning", "info", "error", "translate"]
    },
    open: {
      control: "boolean"
    }
  }
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,I,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<div class="info-selection-dialog__overlay">
  <div class="info-selection-dialog">
    <div class="info-selection-dialog__header">
      <h2 class="info-selection-dialog__title">Dialog Title</h2>
      <button class="info-selection-dialog__close">×</button>
    </div>
    <div class="info-selection-dialog__body">
      <!-- Content: member list, alerts, selections -->
    </div>
    <div class="info-selection-dialog__footer">
      <button class="info-selection-dialog__btn--cancel">Cancel</button>
      <button class="info-selection-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.info-selection-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-selection-dialog {
  width: 420px;
  max-height: 80vh;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info-selection-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.info-selection-dialog__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cometchat-spacing-4);
}

.info-selection-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.info-selection-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}\`} />
      </UsageSection>
    </div>
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const K=["Default","BlockAlert","WarningAlert","ErrorAlert","InfoAlert","Playground","Usage"];export{n as BlockAlert,o as Default,r as ErrorAlert,l as InfoAlert,i as Playground,c as Usage,a as WarningAlert,K as __namedExportsOrder,E as default};
