import{j as r}from"./jsx-runtime-BYYWji4R.js";import{I as u}from"./InfoSelectionDialog-BN4Q-wGB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={title:"Base Components/Dialog/Info Selection Dialogs/Message Info",component:u,parameters:{layout:"centered"},decorators:[n=>r.jsx(y,{children:r.jsx(n,{})})]};function y({children:n}){return r.jsxs("div",{className:"dialog-story-inline",children:[r.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),n]})}const e={args:{variant:"messageInfo",messagePreview:"Hey! Are we still meeting tomorrow at 3pm?",messageInfoItems:[{label:"Delivered",timestamp:"Today, 2:45 PM"},{label:"Read",timestamp:"Today, 2:47 PM"}]}},a={args:{variant:"messageInfo",messagePreview:"This message hasn't been read yet.",messageInfoItems:[{label:"Delivered",timestamp:"Today, 10:30 AM"},{label:"Read",timestamp:"—"}]}},s={args:{variant:"messageInfo",open:!0,messagePreview:"Hello! How are you?",messageInfoItems:[{label:"Delivered",timestamp:"Today, 3:00 PM"},{label:"Read",timestamp:"Today, 3:02 PM"}]},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},messagePreview:{control:"text"}}};var t,o,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Hey! Are we still meeting tomorrow at 3pm?",
    messageInfoItems: [{
      label: "Delivered",
      timestamp: "Today, 2:45 PM"
    }, {
      label: "Read",
      timestamp: "Today, 2:47 PM"
    }]
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "This message hasn't been read yet.",
    messageInfoItems: [{
      label: "Delivered",
      timestamp: "Today, 10:30 AM"
    }, {
      label: "Read",
      timestamp: "—"
    }]
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,g,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Hello! How are you?",
    messageInfoItems: [{
      label: "Delivered",
      timestamp: "Today, 3:00 PM"
    }, {
      label: "Read",
      timestamp: "Today, 3:02 PM"
    }]
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    open: {
      control: "boolean"
    },
    messagePreview: {
      control: "text"
    }
  }
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const w=["Default","Unread","Playground"];export{e as Default,s as Playground,a as Unread,w as __namedExportsOrder,P as default};
