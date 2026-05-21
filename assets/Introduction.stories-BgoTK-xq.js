import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as s}from"./PageHeader-CbY7ZPU9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"CometChat Foundation/Introduction",tags:["!autodocs"],parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},t={render:()=>e.jsxs("div",{style:{padding:"40px 48px 80px",maxWidth:1100,margin:"0 auto"},children:[e.jsx(s,{eyebrow:"CometChat Foundation",title:"CometChat UI Kit Tokens",description:"Design tokens from the CometChat Web UI Kit — spacing, typography, colors, radius, and button styles. These tokens power the CometChat SDK components and can be themed via CSS custom properties with light and dark mode support.",meta:[{label:"tokens",value:"120+"},{label:"themes",value:"Light · Dark"},{label:"font",value:"Roboto"},{label:"prefix",value:"--cometchat-*"}]}),e.jsx(r,{children:"What's inside"}),e.jsx("p",{style:{color:"var(--cometchat-neutral-color-600)",marginTop:0,maxWidth:720,fontSize:"14px",lineHeight:1.6},children:"The CometChat UI Kit token system covers five areas. Each maps to a Storybook page."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"var(--cometchat-spacing-3-5)",margin:"20px 0 40px"},children:[e.jsx(o,{title:"Colors",description:"Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens."}),e.jsx(o,{title:"Typography",description:"Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles."}),e.jsx(o,{title:"Spacing",description:"A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens."}),e.jsx(o,{title:"Radius",description:"Border radius scale from 2px to 1000px (max for pills), tied to the spacing system."})]}),e.jsx(r,{children:"Dark mode"}),e.jsxs("p",{style:{color:"var(--cometchat-neutral-color-600)",marginTop:0,maxWidth:720,fontSize:"14px",lineHeight:1.6},children:["Apply ",e.jsx("code",{children:'[data-theme="dark"]'})," to the root element. The neutral scale inverts (50 becomes dark, 900 becomes light), extended primary shades darken, and all semantic tokens (backgrounds, text, borders, icons) automatically adapt since they reference the neutral scale."]}),e.jsx(r,{children:"Usage"}),e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)",marginTop:16},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:"CSS"})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:`.my-component {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  padding: var(--cometchat-padding-4);
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}`})})]})]})};function r({children:a}){return e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",letterSpacing:"-0.01em",color:"var(--cometchat-neutral-color-900)",borderBottom:"1px solid var(--cometchat-neutral-color-200)",paddingBottom:10,margin:"32px 0 8px"},children:a})}function o({title:a,description:d}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-5)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-01)",boxShadow:"var(--cometchat-shadow-xs)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("strong",{style:{fontSize:"16px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",lineHeight:"19.2px"},children:a}),e.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"var(--line-height-body)",color:"var(--cometchat-text-color-tertiary)"},children:d})]})}var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "40px 48px 80px",
    maxWidth: 1100,
    margin: "0 auto"
  }}>
      <PageHeader eyebrow="CometChat Foundation" title="CometChat UI Kit Tokens" description="Design tokens from the CometChat Web UI Kit — spacing, typography, colors, radius, and button styles. These tokens power the CometChat SDK components and can be themed via CSS custom properties with light and dark mode support." meta={[{
      label: "tokens",
      value: "120+"
    }, {
      label: "themes",
      value: "Light · Dark"
    }, {
      label: "font",
      value: "Roboto"
    }, {
      label: "prefix",
      value: "--cometchat-*"
    }]} />

      <SectionHeading>What's inside</SectionHeading>
      <p style={{
      color: "var(--cometchat-neutral-color-600)",
      marginTop: 0,
      maxWidth: 720,
      fontSize: "14px",
      lineHeight: 1.6
    }}>
        The CometChat UI Kit token system covers five areas. Each maps to a Storybook page.
      </p>

      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "var(--cometchat-spacing-3-5)",
      margin: "20px 0 40px"
    }}>
        <Card title="Colors" description="Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens." />
        <Card title="Typography" description="Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles." />
        <Card title="Spacing" description="A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens." />
        <Card title="Radius" description="Border radius scale from 2px to 1000px (max for pills), tied to the spacing system." />
      </div>

      <SectionHeading>Dark mode</SectionHeading>
      <p style={{
      color: "var(--cometchat-neutral-color-600)",
      marginTop: 0,
      maxWidth: 720,
      fontSize: "14px",
      lineHeight: 1.6
    }}>
        Apply <code>[data-theme="dark"]</code> to the root element. The neutral scale inverts (50 becomes dark, 900 becomes light), extended primary shades darken, and all semantic tokens (backgrounds, text, borders, icons) automatically adapt since they reference the neutral scale.
      </p>

      <SectionHeading>Usage</SectionHeading>
      <div style={{
      border: "1px solid var(--cometchat-border-color-default)",
      borderRadius: "var(--cometchat-radius-3)",
      overflow: "hidden",
      background: "var(--cometchat-background-color-02)",
      marginTop: 16
    }}>
        <div style={{
        padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
        borderBottom: "1px solid var(--cometchat-border-color-default)",
        background: "var(--cometchat-background-color-03)"
      }}>
          <span style={{
          fontSize: "10px",
          fontWeight: "600",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--cometchat-text-color-secondary)"
        }}>CSS</span>
        </div>
        <pre style={{
        margin: 0,
        padding: "var(--cometchat-spacing-3-5)",
        fontFamily: "var(--cometchat-font-family)",
        fontSize: "12px",
        lineHeight: 1.6,
        color: "var(--cometchat-text-color-primary)",
        overflowX: "auto"
      }}>
          <code>{\`.my-component {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  padding: var(--cometchat-padding-4);
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}\`}</code>
        </pre>
      </div>
    </div>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const u=["Overview"];export{t as Overview,u as __namedExportsOrder,g as default};
