import{j as r}from"./jsx-runtime-BYYWji4R.js";import{I as M}from"./InfoSelectionDialog-B4eWRkk-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y={title:"Base Components/Dialog/Info Selection Dialogs/Add Members",component:M,parameters:{layout:"centered"},decorators:[e=>r.jsx(S,{children:r.jsx(e,{})})]};function S({children:e}){return r.jsxs("div",{className:"dialog-story-inline",children:[r.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),e]})}const t=[{name:"George Alan",status:"Online"},{name:"Tessa Johnson",status:"Last seen 2h ago"},{name:"John Smith",status:"Online"},{name:"Sophia Williams",status:"Last seen 1d ago"},{name:"Michael Brown",status:"Online"},{name:"Safiya Ahmed",status:"Last seen 30m ago"},{name:"Emma Davis",status:"Online"},{name:"Robert Wilson",status:"Last seen 5h ago"}],a={args:{variant:"addMembers",members:t}},n={args:{variant:"addMembers",members:t.map((e,b)=>({...e,selected:b<3}))}},s={args:{variant:"addMembers",open:!0,members:t},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"}}};var o,m,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "addMembers",
    members: MEMBERS
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "addMembers",
    members: MEMBERS.map((m, i) => ({
      ...m,
      selected: i < 3
    }))
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "addMembers",
    open: true,
    members: MEMBERS
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    open: {
      control: "boolean"
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const x=["Default","WithSelection","Playground"];export{a as Default,s as Playground,n as WithSelection,x as __namedExportsOrder,y as default};
