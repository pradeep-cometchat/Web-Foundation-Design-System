import{j as s}from"./jsx-runtime-BYYWji4R.js";import{C as h}from"./ConfirmationDialog-BHEsCC6a.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S={title:"Base Components/Dialog/Confirmation Dialogs/Delete User",component:h,parameters:{layout:"centered"},decorators:[o=>s.jsx(y,{children:s.jsx(o,{})})]};function y({children:o}){return s.jsxs("div",{className:"dialog-story-inline",children:[s.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),o]})}const e={args:{variant:"deleteUser"}},t={name:"Custom Title",args:{variant:"deleteUser",title:"Delete @jane_smith?"}},n={name:"Custom Description",args:{variant:"deleteUser",description:"This action will permanently delete the user account and all associated data including messages, media, and group memberships."}},a={name:"Custom Labels",args:{variant:"deleteUser",confirmLabel:"Delete Account",cancelLabel:"Keep Account"}},r={args:{variant:"deleteUser",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "deleteUser"
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "deleteUser",
    title: "Delete @jane_smith?"
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "deleteUser",
    description: "This action will permanently delete the user account and all associated data including messages, media, and group memberships."
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,C,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "deleteUser",
    confirmLabel: "Delete Account",
    cancelLabel: "Keep Account"
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var f,v,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "deleteUser",
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
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const A=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{n as CustomDescription,a as CustomLabels,t as CustomTitle,e as Default,r as Playground,A as __namedExportsOrder,S as default};
