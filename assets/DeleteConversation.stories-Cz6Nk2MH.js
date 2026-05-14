import{j as o}from"./jsx-runtime-BYYWji4R.js";import{C as g}from"./ConfirmationDialog-BfKFNeDp.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"Base Components/Dialog/Confirmation Dialogs/Delete Conversation",component:g,parameters:{layout:"centered"},decorators:[r=>o.jsx(v,{children:o.jsx(r,{})})]};function v({children:r}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),r]})}const e={args:{variant:"deleteConversation"}},n={args:{variant:"deleteConversation",title:"Delete Chat with John?",description:"All messages in this chat will be permanently removed. This cannot be undone."}},t={args:{variant:"deleteConversation",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description: "All messages in this chat will be permanently removed. This cannot be undone."
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","CustomContent","Playground"];export{n as CustomContent,e as Default,t as Playground,y as __namedExportsOrder,f as default};
