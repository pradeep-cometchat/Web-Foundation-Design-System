import{j as t}from"./jsx-runtime-BYYWji4R.js";import{C as G}from"./ConfirmationDialog-BfKFNeDp.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const w={title:"Base Components/Dialog/Confirmation Dialogs/Leave Group",component:G,parameters:{layout:"centered"},decorators:[s=>t.jsx(j,{children:t.jsx(s,{})})]};function j({children:s}){return t.jsxs("div",{className:"dialog-story-inline",children:[t.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),s]})}const e={args:{variant:"leaveGroup"}},r={name:"Custom Title",args:{variant:"leaveGroup",title:"Leave Project Alpha?"}},o={name:"Custom Description",args:{variant:"leaveGroup",description:"You will no longer receive messages from this group. You can rejoin later if the group is public or if you receive a new invite."}},a={name:"Custom Labels",args:{variant:"leaveGroup",confirmLabel:"Leave Group",cancelLabel:"Stay"}},n={args:{variant:"leaveGroup",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "leaveGroup"
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "leaveGroup",
    title: "Leave Project Alpha?"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "leaveGroup",
    description: "You will no longer receive messages from this group. You can rejoin later if the group is public or if you receive a new invite."
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "leaveGroup",
    confirmLabel: "Leave Group",
    cancelLabel: "Stay"
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var L,C,y;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "leaveGroup",
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
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const P=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{o as CustomDescription,a as CustomLabels,r as CustomTitle,e as Default,n as Playground,P as __namedExportsOrder,w as default};
