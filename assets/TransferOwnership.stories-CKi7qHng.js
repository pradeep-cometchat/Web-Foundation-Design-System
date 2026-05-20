import{j as s}from"./jsx-runtime-BYYWji4R.js";import{C as O}from"./ConfirmationDialog-BHEsCC6a.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _={title:"Base Components/Dialog/Confirmation Dialogs/Transfer Ownership",component:O,parameters:{layout:"centered"},decorators:[o=>s.jsx(T,{children:s.jsx(o,{})})]};function T({children:o}){return s.jsxs("div",{className:"dialog-story-inline",children:[s.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),o]})}const e={args:{variant:"transferOwnership"}},r={name:"Custom Title",args:{variant:"transferOwnership",title:"Transfer Ownership to @alex_admin?"}},n={name:"Custom Description",args:{variant:"transferOwnership",description:"You will lose all owner privileges and become a regular member. The new owner will have full control over group settings and members."}},a={name:"Custom Labels",args:{variant:"transferOwnership",confirmLabel:"Transfer Now",cancelLabel:"Keep Ownership"}},t={args:{variant:"transferOwnership",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership"
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "transferOwnership",
    title: "Transfer Ownership to @alex_admin?"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "transferOwnership",
    description: "You will lose all owner privileges and become a regular member. The new owner will have full control over group settings and members."
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,b,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "transferOwnership",
    confirmLabel: "Transfer Now",
    cancelLabel: "Keep Ownership"
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,x,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    confirmLabel: {
      control: "text"
    },
    cancelLabel: {
      control: "text"
    },
    open: {
      control: "boolean"
    }
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const S=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{n as CustomDescription,a as CustomLabels,r as CustomTitle,e as Default,t as Playground,S as __namedExportsOrder,_ as default};
