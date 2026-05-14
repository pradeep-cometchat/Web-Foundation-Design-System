import{j as o}from"./jsx-runtime-BYYWji4R.js";import{I as b}from"./InfoSelectionDialog-BN4Q-wGB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x={title:"Base Components/Dialog/Info Selection Dialogs/Banned Alert",component:b,parameters:{layout:"centered"},decorators:[n=>o.jsx(g,{children:o.jsx(n,{})})]};function g({children:n}){return o.jsxs("div",{className:"dialog-story-inline",children:[o.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const e={args:{variant:"alert",alertTitle:"You are no longer part of the group",alertDescription:"You have been banned from this group by the administrator.",alertButtonLabel:"Understood",alertIcon:"block"}},r={args:{variant:"alert",alertTitle:"You have been removed",alertDescription:"You have been kicked from this group by the administrator.",alertButtonLabel:"Understood",alertIcon:"block"}},t={args:{variant:"alert",alertTitle:"You are no longer part of the group",alertDescription:"You have been banned from this group by the administrator.",alertButtonLabel:"Understood",alertIcon:"block",open:!0},parameters:{docs:{disable:!0}},argTypes:{alertTitle:{control:"text"},alertDescription:{control:"text"},alertButtonLabel:{control:"text"},alertIcon:{control:"select",options:["block","warning","info","error"]},open:{control:"boolean"}}};var a,l,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "You are no longer part of the group",
    alertDescription: "You have been banned from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block"
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "You have been removed",
    alertDescription: "You have been kicked from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "alert",
    alertTitle: "You are no longer part of the group",
    alertDescription: "You have been banned from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block",
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
      options: ["block", "warning", "info", "error"]
    },
    open: {
      control: "boolean"
    }
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["Default","KickedFromGroup","Playground"];export{e as Default,r as KickedFromGroup,t as Playground,y as __namedExportsOrder,x as default};
