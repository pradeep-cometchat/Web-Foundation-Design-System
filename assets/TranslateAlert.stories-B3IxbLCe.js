import{j as l}from"./jsx-runtime-BYYWji4R.js";import{I as S}from"./InfoSelectionDialog-CItJn-0W.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={title:"Base Components/Dialog/Info Selection Dialogs/Translate Alert",component:S,parameters:{layout:"centered"},decorators:[s=>l.jsx(k,{children:l.jsx(s,{})})]};function k({children:s}){return l.jsxs("div",{className:"dialog-story-inline",children:[l.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),s]})}const e={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate"}},r={name:"Block Alert",args:{variant:"alert",alertIcon:"block",alertTitle:"User Blocked",alertDescription:"You have blocked this user.",alertButtonLabel:"OK"}},t={name:"Warning Alert",args:{variant:"alert",alertIcon:"warning",alertTitle:"Connection Lost",alertDescription:"Please check your internet connection.",alertButtonLabel:"Retry"}},a={name:"Error Alert",args:{variant:"alert",alertIcon:"error",alertTitle:"Message Failed",alertDescription:"Failed to send message. Please try again.",alertButtonLabel:"OK"}},n={name:"Info Alert",args:{variant:"alert",alertIcon:"info",alertTitle:"New Feature",alertDescription:"You can now translate messages in real-time.",alertButtonLabel:"OK"}},o={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate",open:!0},parameters:{docs:{disable:!0}},argTypes:{alertTitle:{control:"text"},alertDescription:{control:"text"},alertButtonLabel:{control:"text"},alertIcon:{control:"select",options:["block","warning","info","error","translate"]},open:{control:"boolean"}}};var i,c,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate"
  }
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Block Alert",
  args: {
    variant: "alert",
    alertIcon: "block",
    alertTitle: "User Blocked",
    alertDescription: "You have blocked this user.",
    alertButtonLabel: "OK"
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Warning Alert",
  args: {
    variant: "alert",
    alertIcon: "warning",
    alertTitle: "Connection Lost",
    alertDescription: "Please check your internet connection.",
    alertButtonLabel: "Retry"
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,A,B;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Error Alert",
  args: {
    variant: "alert",
    alertIcon: "error",
    alertTitle: "Message Failed",
    alertDescription: "Failed to send message. Please try again.",
    alertButtonLabel: "OK"
  }
}`,...(B=(A=a.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,y,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Info Alert",
  args: {
    variant: "alert",
    alertIcon: "info",
    alertTitle: "New Feature",
    alertDescription: "You can now translate messages in real-time.",
    alertButtonLabel: "OK"
  }
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var h,v,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const F=["Default","BlockAlert","WarningAlert","ErrorAlert","InfoAlert","Playground"];export{r as BlockAlert,e as Default,a as ErrorAlert,n as InfoAlert,o as Playground,t as WarningAlert,F as __namedExportsOrder,E as default};
