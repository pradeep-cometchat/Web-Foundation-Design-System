import{j as t}from"./jsx-runtime-BYYWji4R.js";import{C as M}from"./ConfirmationDialog-CIG7XHmY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R={title:"Base Components/Dialog/Confirmation Dialogs/Kick Member",component:M,parameters:{layout:"centered"},decorators:[s=>t.jsx(L,{children:t.jsx(s,{})})]};function L({children:s}){return t.jsxs("div",{className:"dialog-story-inline",children:[t.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),s]})}const e={args:{variant:"kickMember"}},r={name:"Custom Title",args:{variant:"kickMember",title:"Remove from Design Team?"}},n={name:"Custom Description",args:{variant:"kickMember",description:"This member will be removed from the group but can rejoin if they have an invite link. Their previous messages will remain."}},o={name:"Custom Labels",args:{variant:"kickMember",confirmLabel:"Remove Member",cancelLabel:"Keep in Group"}},a={args:{variant:"kickMember",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "kickMember"
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "kickMember",
    title: "Remove from Design Team?"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,b,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "kickMember",
    description: "This member will be removed from the group but can rejoin if they have an invite link. Their previous messages will remain."
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,k,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "kickMember",
    confirmLabel: "Remove Member",
    cancelLabel: "Keep in Group"
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,C,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "kickMember",
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
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const S=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{n as CustomDescription,o as CustomLabels,r as CustomTitle,e as Default,a as Playground,S as __namedExportsOrder,R as default};
