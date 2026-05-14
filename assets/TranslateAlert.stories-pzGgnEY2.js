import{j as a}from"./jsx-runtime-BYYWji4R.js";import{I as g}from"./InfoSelectionDialog-BN4Q-wGB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x={title:"Base Components/Dialog/Info Selection Dialogs/Translate Alert",component:g,parameters:{layout:"centered"},decorators:[n=>a.jsx(d,{children:a.jsx(n,{})})]};function d({children:n}){return a.jsxs("div",{className:"dialog-story-inline",children:[a.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const e={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate"}},t={args:{variant:"alert",alertTitle:"Message Already in Selected Language",alertDescription:"Selected language for translation is similar to the language of the original message.",alertButtonLabel:"Understood",alertIcon:"translate",open:!0},parameters:{docs:{disable:!0}},argTypes:{alertTitle:{control:"text"},alertDescription:{control:"text"},alertButtonLabel:{control:"text"},alertIcon:{control:"select",options:["block","warning","info","error","translate"]},open:{control:"boolean"}}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","Playground"];export{e as Default,t as Playground,b as __namedExportsOrder,x as default};
