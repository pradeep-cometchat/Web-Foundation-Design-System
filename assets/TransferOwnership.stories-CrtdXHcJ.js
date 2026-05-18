import{j as t}from"./jsx-runtime-BYYWji4R.js";import{I as v}from"./InfoSelectionDialog-DgueSHec.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Base Components/Dialog/Info Selection Dialogs/Transfer Ownership",component:v,parameters:{layout:"centered"},decorators:[e=>t.jsx(S,{children:t.jsx(e,{})})]};function S({children:e}){return t.jsxs("div",{className:"dialog-story-inline",children:[t.jsx("style",{children:".dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }"}),e]})}const o=[{name:"Alex Mason",role:"Admin",selected:!0,avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b73199c2-91b1-46e4-9849-b3fea799e498"},{name:"Andrew Joseph",role:"Admin",avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6beb722b-11db-4be8-9f1a-60157b76feb9"},{name:"Avery Quinn",role:"Moderator",avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5465792f-83e4-48ed-aeb1-81826c8b5637"},{name:"Brian Michael",avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f82649c4-8036-49c4-b556-7556fc5f13d0"},{name:"Cameron Lee",avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a512421-65ce-420c-8478-06396f493956"},{name:"Charles Dean",avatar:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc0d8a3-adc7-4d66-b3c2-8b5e71249852"}],a={args:{variant:"transferOwnership",members:o}},r={name:"No Selection",args:{variant:"transferOwnership",members:o.map(e=>({...e,selected:!1}))}},n={name:"Moderator Selected",args:{variant:"transferOwnership",members:o.map(e=>({...e,selected:e.name==="Avery Quinn"}))}},s={args:{variant:"transferOwnership",open:!0,members:o},parameters:{docs:{disable:!0}},argTypes:{open:{control:"boolean"}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership",
    members: MEMBERS
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "No Selection",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map(m => ({
      ...m,
      selected: false
    }))
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Moderator Selected",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map(m => ({
      ...m,
      selected: m.name === "Avery Quinn"
    }))
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "transferOwnership",
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const z=["Default","NoSelection","ModeratorSelected","Playground"];export{a as Default,n as ModeratorSelected,r as NoSelection,s as Playground,z as __namedExportsOrder,O as default};
