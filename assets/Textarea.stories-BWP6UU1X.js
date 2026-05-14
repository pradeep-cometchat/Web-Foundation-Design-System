import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as r}from"./Textarea-DdWrHRUy.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={title:"Base Components/Input/Textarea",component:r,parameters:{layout:"centered"}},t=P=>e.jsx("div",{style:{width:360},children:e.jsx(P,{})}),a={decorators:[t],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}},o={decorators:[t],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}},s={name:"Placeholder — Error",decorators:[t],args:{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}},n={name:"Filled — Error",decorators:[t],args:{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}},i={decorators:[t],args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0}},l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(320px, 1fr))",gap:"var(--space-8)",padding:"var(--space-8)",maxWidth:900,margin:"0 auto"},children:[e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",hint:"This is a hint text to help user."}),e.jsx(r,{label:"Description",required:!0,value:"A little about the company and the team that you'll be working with.",error:"This is an error message."}),e.jsx(r,{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!0})]})},c={decorators:[t],parameters:{docs:{disable:!0}},args:{label:"Description",required:!0,placeholder:"Enter a description...",hint:"This is a hint text to help user.",disabled:!1,resizable:!0,rows:4},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},resizable:{control:"boolean"},rows:{control:{type:"range",min:2,max:10}}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user."
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,m,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    hint: "This is a hint text to help user."
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,x,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Placeholder — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    error: "This is an error message."
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,D,q;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Filled — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    error: "This is an error message."
  }
}`,...(q=(D=n.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,w,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: true
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var f,j,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
    gap: "var(--space-8)",
    padding: "var(--space-8)",
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." />
      <Textarea label="Description" required placeholder="Enter a description..." error="This is an error message." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." hint="This is a hint text to help user." />
      <Textarea label="Description" required value="A little about the company and the team that you'll be working with." error="This is an error message." />
      <Textarea label="Description" required placeholder="Enter a description..." hint="This is a hint text to help user." disabled />
    </div>
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var S,k,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: false,
    resizable: true,
    rows: 4
  },
  argTypes: {
    label: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    value: {
      control: "text"
    },
    hint: {
      control: "text"
    },
    error: {
      control: "text"
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    resizable: {
      control: "boolean"
    },
    rows: {
      control: {
        type: "range",
        min: 2,
        max: 10
      }
    }
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const I=["Default","Filled","PlaceholderError","FilledError","Disabled","AllStates","Playground"];export{l as AllStates,a as Default,i as Disabled,o as Filled,n as FilledError,s as PlaceholderError,c as Playground,I as __namedExportsOrder,B as default};
