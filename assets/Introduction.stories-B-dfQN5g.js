import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as o,b as l}from"./T-C6nayWAE.js";import{P as p}from"./PageHeader-BGkAZ-GI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"CometChat Foundation/Introduction",tags:["!autodocs"],parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},a={render:()=>e.jsxs("div",{style:{padding:"40px 48px 80px",maxWidth:1100,margin:"0 auto"},children:[e.jsx(p,{eyebrow:"CometChat Foundation",title:"CometChat UI Kit Tokens",description:"Design tokens from the CometChat Web UI Kit — spacing, typography, colors, radius, and button styles. These tokens power the CometChat SDK components and can be themed via CSS custom properties with light and dark mode support.",meta:[{label:"tokens",value:"120+"},{label:"themes",value:"Light · Dark"},{label:"font",value:"Roboto"},{label:"prefix",value:"--cometchat-*"}]}),e.jsx(n,{children:e.jsx(o,{children:"What's inside"})}),e.jsx("p",{style:{color:"var(--cometchat-neutral-color-600)",marginTop:0,maxWidth:720,fontSize:"14px",lineHeight:1.6},children:e.jsx(o,{children:"The CometChat UI Kit token system covers five areas. Each maps to a Storybook page."})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"var(--cometchat-spacing-3-5)",margin:"20px 0 40px"},children:[e.jsx(r,{title:"Colors",description:"Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens."}),e.jsx(r,{title:"Typography",description:"Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles."}),e.jsx(r,{title:"Spacing",description:"A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens."}),e.jsx(r,{title:"Radius",description:"Border radius scale from 2px to 1000px (max for pills), tied to the spacing system."})]}),e.jsx(n,{children:e.jsx(o,{children:"Dark mode"})}),e.jsx("p",{style:{color:"var(--cometchat-neutral-color-600)",marginTop:0,maxWidth:720,fontSize:"14px",lineHeight:1.6},children:e.jsx(m,{})}),e.jsx(n,{children:e.jsx(o,{children:"Usage"})}),e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)",marginTop:16},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:"CSS"})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:`.my-component {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  padding: var(--cometchat-padding-4);
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}`})})]})]})};function m(){const t=e.jsx("code",{children:'[data-theme="dark"]'});return l()==="ar"?e.jsxs(e.Fragment,{children:["طبّق ",t," على العنصر الجذر. يَنعكس التدرّج المحايد (يصبح 50 داكنًا و900 فاتحًا)، وتغمَق درجات اللون الأساسي الموسّع، وتتكيّف جميع الرموز الدلالية (الخلفيات والنصوص والحدود والأيقونات) تلقائيًا لأنها تشير إلى التدرّج المحايد."]}):e.jsxs(e.Fragment,{children:["Apply ",t," to the root element. The neutral scale inverts (50 becomes dark, 900 becomes light), extended primary shades darken, and all semantic tokens (backgrounds, text, borders, icons) automatically adapt since they reference the neutral scale."]})}function n({children:t}){return e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",letterSpacing:"-0.01em",color:"var(--cometchat-neutral-color-900)",borderBottom:"1px solid var(--cometchat-neutral-color-200)",paddingBottom:10,margin:"32px 0 8px"},children:t})}function r({title:t,description:s}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-5)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-01)",boxShadow:"var(--cometchat-shadow-xs)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("strong",{style:{fontSize:"16px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",lineHeight:"19.2px"},children:e.jsx(o,{children:t})}),e.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"var(--line-height-body)",color:"var(--cometchat-text-color-tertiary)"},children:e.jsx(o,{children:s})})]})}var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

      <SectionHeading><T>What's inside</T></SectionHeading>
      <p style={{
      color: "var(--cometchat-neutral-color-600)",
      marginTop: 0,
      maxWidth: 720,
      fontSize: "14px",
      lineHeight: 1.6
    }}>
        <T>The CometChat UI Kit token system covers five areas. Each maps to a Storybook page.</T>
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

      <SectionHeading><T>Dark mode</T></SectionHeading>
      <p style={{
      color: "var(--cometchat-neutral-color-600)",
      marginTop: 0,
      maxWidth: 720,
      fontSize: "14px",
      lineHeight: 1.6
    }}>
        {/* The code chip sits mid-sentence and Arabic word order differs, so
            this needs a real alternative rather than two wrapped fragments. */}
        <DarkModeCopy />
      </p>

      <SectionHeading><T>Usage</T></SectionHeading>
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Overview"];export{a as Overview,y as __namedExportsOrder,f as default};
