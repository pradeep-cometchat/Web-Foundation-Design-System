import{j as r}from"./jsx-runtime-BYYWji4R.js";import{C as h}from"./ConfirmationDialog-BfKFNeDp.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j={title:"Base Components/Dialog/Confirmation Dialogs/Delete Conversation",component:h,parameters:{layout:"centered"},decorators:[a=>r.jsx(x,{children:r.jsx(a,{})})]};function x({children:a}){return r.jsxs("div",{className:"dialog-story-inline",children:[r.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),a]})}const e={args:{variant:"deleteConversation"}},n={args:{variant:"deleteConversation",title:"Delete Chat with John?",description:"All messages in this chat will be permanently removed. This cannot be undone."}},t={name:"Custom Labels",args:{variant:"deleteConversation",confirmLabel:"Delete Forever",cancelLabel:"Keep Chat"}},o={args:{variant:"deleteConversation",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation"
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description: "All messages in this chat will be permanently removed. This cannot be undone."
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "deleteConversation",
    confirmLabel: "Delete Forever",
    cancelLabel: "Keep Chat"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,v,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
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
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const w=["Default","CustomContent","CustomLabels","Playground"];export{n as CustomContent,t as CustomLabels,e as Default,o as Playground,w as __namedExportsOrder,j as default};
