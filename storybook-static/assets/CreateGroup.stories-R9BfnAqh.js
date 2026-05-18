import{j as o}from"./jsx-runtime-BYYWji4R.js";import{F as T}from"./FormDialog-sMcv9wqN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={title:"Base Components/Dialog/Form Dialogs/Create Group",component:T,parameters:{layout:"centered"},decorators:[n=>o.jsx(P,{children:o.jsx(n,{})})]};function P({children:n}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const e={name:"Public (Default)",args:{variant:"createGroup",initialGroupType:"public"}},r={name:"Private",args:{variant:"createGroup",initialGroupType:"private"}},a={name:"Protected (with Password)",args:{variant:"createGroup",initialGroupType:"protected"}},t={args:{variant:"createGroup",initialGroupType:"public",open:!0},parameters:{docs:{disable:!0}},argTypes:{initialGroupType:{control:"select",options:["public","private","protected"]},open:{control:"boolean"}}};var i,s,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Public (Default)",
  args: {
    variant: "createGroup",
    initialGroupType: "public"
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Private",
  args: {
    variant: "createGroup",
    initialGroupType: "private"
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Protected (with Password)",
  args: {
    variant: "createGroup",
    initialGroupType: "protected"
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,v,G;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "createGroup",
    initialGroupType: "public",
    open: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    initialGroupType: {
      control: "select",
      options: ["public", "private", "protected"]
    },
    open: {
      control: "boolean"
    }
  }
}`,...(G=(v=t.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const D=["PublicType","PrivateType","ProtectedType","Playground"];export{t as Playground,r as PrivateType,a as ProtectedType,e as PublicType,D as __namedExportsOrder,h as default};
