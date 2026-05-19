import{j as s}from"./jsx-runtime-BYYWji4R.js";import{C as L}from"./ConfirmationDialog-CIG7XHmY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={title:"Base Components/Dialog/Confirmation Dialogs/Block User",component:L,parameters:{layout:"centered"},decorators:[a=>s.jsx(U,{children:s.jsx(a,{})})]};function U({children:a}){return s.jsxs("div",{className:"dialog-story-inline",children:[s.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),a]})}const e={args:{variant:"blockUser"}},o={name:"Custom Title",args:{variant:"blockUser",title:"Block @john_doe?"}},r={name:"Custom Description",args:{variant:"blockUser",description:"Blocking this user will prevent them from sending you messages, seeing your online status, or adding you to groups."}},n={name:"Custom Labels",args:{variant:"blockUser",confirmLabel:"Yes, Block",cancelLabel:"Go Back"}},t={args:{variant:"blockUser",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "blockUser"
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "blockUser",
    title: "Block @john_doe?"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "blockUser",
    description: "Blocking this user will prevent them from sending you messages, seeing your online status, or adding you to groups."
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "blockUser",
    confirmLabel: "Yes, Block",
    cancelLabel: "Go Back"
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,v,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "blockUser",
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const _=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{r as CustomDescription,n as CustomLabels,o as CustomTitle,e as Default,t as Playground,_ as __namedExportsOrder,T as default};
