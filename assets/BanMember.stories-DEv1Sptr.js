import{j as o}from"./jsx-runtime-BYYWji4R.js";import{C as M}from"./ConfirmationDialog-BfKFNeDp.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={title:"Base Components/Dialog/Confirmation Dialogs/Ban Member",component:M,parameters:{layout:"centered"},decorators:[s=>o.jsx(h,{children:o.jsx(s,{})})]};function h({children:s}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),s]})}const e={args:{variant:"banMember"}},n={name:"Custom Title",args:{variant:"banMember",title:"Ban @toxic_user from Community?"}},r={name:"Custom Description",args:{variant:"banMember",description:"This member will be permanently removed and will not be able to rejoin this group. All their messages will remain visible."}},a={name:"Custom Labels",args:{variant:"banMember",confirmLabel:"Ban Permanently",cancelLabel:"Nevermind"}},t={args:{variant:"banMember",open:!0},parameters:{docs:{disable:!0}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},open:{control:"boolean"}}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "banMember"
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Custom Title",
  args: {
    variant: "banMember",
    title: "Ban @toxic_user from Community?"
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,d,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Custom Description",
  args: {
    variant: "banMember",
    description: "This member will be permanently removed and will not be able to rejoin this group. All their messages will remain visible."
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,x,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Custom Labels",
  args: {
    variant: "banMember",
    confirmLabel: "Ban Permanently",
    cancelLabel: "Nevermind"
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,y,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "banMember",
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
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const _=["Default","CustomTitle","CustomDescription","CustomLabels","Playground"];export{r as CustomDescription,a as CustomLabels,n as CustomTitle,e as Default,t as Playground,_ as __namedExportsOrder,B as default};
