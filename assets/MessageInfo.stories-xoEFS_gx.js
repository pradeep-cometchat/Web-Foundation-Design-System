import{j as p}from"./jsx-runtime-BYYWji4R.js";import{I as J}from"./InfoSelectionDialog-B4eWRkk-.js";import{a as j}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const e=j["Female Avatar"],d=j["Male Avatar"],q={title:"Base Components/Dialog/Info Selection Dialogs/Message Info",component:J,parameters:{layout:"centered"},decorators:[l=>p.jsx(O,{children:p.jsx(l,{})})]};function O({children:l}){return p.jsxs("div",{className:"dialog-story-inline",children:[p.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),l]})}const a={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},r={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"---"}]}},s={name:"Delivered Only",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"---"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}]}},n={args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",messageInfoError:`Looks like something went wrong.
Please try again.`}},m={name:"Group Message Info",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:d[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:e[8].imageUrl,readTimestamp:"28 Apr, 01:51 pm",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:e[11].imageUrl,readTimestamp:"05 May, 08:35 pm",deliveredTimestamp:"05 May, 08:35 pm"}]}},o={name:"Group — Partially Read",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:d[6].imageUrl,readTimestamp:"22 Apr, 01:36 pm",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:e[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:e[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"05 May, 08:35 pm"}]}},t={name:"Group — Unread",args:{variant:"messageInfo",messagePreview:"Thanks! Looks good.",groupMessageInfoUsers:[{name:"Andrew Joseph",avatar:d[6].imageUrl,readTimestamp:"---",deliveredTimestamp:"22 Apr, 12:15 pm"},{name:"Nancy Grace",avatar:e[8].imageUrl,readTimestamp:"---",deliveredTimestamp:"28 Apr, 01:51 pm"},{name:"Susan Marie",avatar:e[11].imageUrl,readTimestamp:"---",deliveredTimestamp:"---"}]}},i={args:{variant:"messageInfo",open:!0,messagePreview:"Thanks! Looks good.",messageInfoItems:[{label:"Read",timestamp:"24/8/2024, 5:02 pm"},{label:"Delivered",timestamp:"24/8/2024, 4:56 pm"}],messageInfoError:""},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"},messagePreview:{control:"text"},messageInfoError:{control:"text"}}};var g,c,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "24/8/2024, 5:02 pm"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }]
  }
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var u,f,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "---"
    }, {
      label: "Delivered",
      timestamp: "---"
    }]
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var I,k,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Delivered Only",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "---"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }]
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var U,w,h;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoError: "Looks like something went wrong.\\nPlease try again."
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var A,P,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Group Message Info",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "22 Apr, 01:36 pm",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "28 Apr, 01:51 pm",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "05 May, 08:35 pm",
      deliveredTimestamp: "05 May, 08:35 pm"
    }]
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var b,G,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Group — Partially Read",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "22 Apr, 01:36 pm",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "05 May, 08:35 pm"
    }]
  }
}`,...(L=(G=o.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var D,S,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Group — Unread",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [{
      name: "Andrew Joseph",
      avatar: male[6].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "22 Apr, 12:15 pm"
    }, {
      name: "Nancy Grace",
      avatar: female[8].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "28 Apr, 01:51 pm"
    }, {
      name: "Susan Marie",
      avatar: female[11].imageUrl,
      readTimestamp: "---",
      deliveredTimestamp: "---"
    }]
  }
}`,...(R=(S=t.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var x,E,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [{
      label: "Read",
      timestamp: "24/8/2024, 5:02 pm"
    }, {
      label: "Delivered",
      timestamp: "24/8/2024, 4:56 pm"
    }],
    messageInfoError: ""
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
    },
    messageInfoError: {
      control: "text"
    }
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const H=["Default","Unread","DeliveredOnly","Error","GroupMessageInfo","GroupPartiallyRead","GroupUnread","Playground"];export{a as Default,s as DeliveredOnly,n as Error,m as GroupMessageInfo,o as GroupPartiallyRead,t as GroupUnread,i as Playground,r as Unread,H as __namedExportsOrder,q as default};
