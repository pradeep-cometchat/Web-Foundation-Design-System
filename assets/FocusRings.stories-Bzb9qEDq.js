import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as C}from"./PageHeader-CbY7ZPU9.js";import{S as T}from"./Section-CYLonVyP.js";import{C as n}from"./Callout-DbyIvtll.js";import{T as S}from"./TokenTable-CnRlQz3u.js";import{f as d}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CopyButton-qvhmePoZ.js";const $={title:"CometChat Foundation/Effects/Focus Rings",component:A,tags:["autodocs"],parameters:{layout:"fullscreen",themes:{themeOverride:"Light"},docs:{description:{component:`Focus states stack three layers:
1. The base elevation (matches \`shadow-xs\`).
2. A 2px white halo to separate the ring from the control.
3. A 4px colored outer ring — brand or error.

Always apply a visible focus ring to interactive elements. Use the **error**
variant for destructive controls so the focus color matches intent.`}}},argTypes:{variant:{control:"radio",options:Object.keys(d),description:"Focus ring style.",table:{category:"Token"}},label:{control:"text",description:"Button label.",table:{category:"Content"}}}};function A({variant:r,label:t}){const o=d[r],i=r==="error"?"focus-ring-error":"focus-ring";return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-4)",overflow:"hidden",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-sm)"},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-12)",background:"var(--cometchat-background-color-01)",display:"flex",justifyContent:"center"},children:e.jsx("button",{type:"button",style:{padding:"10px 18px",borderRadius:"var(--cometchat-radius-2)",border:"1px solid transparent",background:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-extended-primary-color-500)",color:"var(--cometchat-static-white)",fontWeight:"600",fontSize:"14px",cursor:"pointer",boxShadow:`var(--cometchat-${i})`,fontFamily:"inherit"},children:t})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx(l,{label:"Token",value:o.name}),e.jsx(l,{label:"CSS variable",value:`var(--cometchat-${i})`,mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsxs(n,{kind:"tip",title:"Try tabbing through the canvas",children:["The preview above has the focus ring permanently applied for reference. In real usage, use ",e.jsx("code",{children:":focus-visible"})," so the ring only appears for keyboard users."]})})]})}const l=({label:r,value:t,mono:o,divider:i})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:i?"1px solid var(--cometchat-border-color-default)":"none",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)",marginBottom:"var(--cometchat-spacing-1)"},children:r}),e.jsx("div",{style:{fontFamily:o?"var(--cometchat-font-family)":"inherit",fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)"},children:t})]}),c={args:{variant:"default",label:"Focused button"},parameters:{docs:{disable:!0}}},a={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(C,{title:"Focus ring reference",description:"Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones."}),e.jsx(S,{rows:Object.keys(d).map(r=>{const t=d[r],o=r==="error"?"focus-ring-error":"focus-ring";return{name:t.name,value:t.description??"",cssVar:`var(--cometchat-${o})`,preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:32,borderRadius:"var(--cometchat-radius-2)",background:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-extended-primary-color-500)",boxShadow:`var(--cometchat-${o})`,margin:10}})}}),previewHeader:"Preview",valueHeader:"Use for"})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(C,{title:"Accessibility notes",description:"Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces."}),e.jsx(T,{title:"Do's and don'ts",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-4)"},children:[e.jsxs(n,{kind:"success",title:"Do",children:["Use ",e.jsx("code",{children:":focus-visible"})," so the ring appears for keyboard users but not on mouse clicks."]}),e.jsxs(n,{kind:"success",title:"Do",children:["Use the ",e.jsx("strong",{children:"error"})," variant only on destructive controls so color carries meaning consistently."]}),e.jsxs(n,{kind:"warning",title:"Don't",children:["Don't remove focus rings with ",e.jsx("code",{children:"outline: none"})," unless you provide an equivalent visible indicator."]}),e.jsx(n,{kind:"warning",title:"Don't",children:"Don't rely on the ring alone in forced-colors mode. Add a border state change as a backup."})]})})]})};var u,m,p;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Focused button"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,v,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Focus ring reference" description="Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones." />
      <TokenTable rows={(Object.keys(focusRings) as FocusRingKey[]).map(key => {
      const t = focusRings[key];
      const cssVarName = key === "error" ? "focus-ring-error" : "focus-ring";
      return {
        name: t.name,
        value: t.description ?? "",
        cssVar: \`var(--cometchat-\${cssVarName})\`,
        preview: <div aria-hidden style={{
          width: 56,
          height: 32,
          borderRadius: "var(--cometchat-radius-2)",
          background: key === "error" ? "var(--cometchat-error-color)" : "var(--cometchat-extended-primary-color-500)",
          boxShadow: \`var(--cometchat-\${cssVarName})\`,
          margin: 10
        }} />
      };
    })} previewHeader="Preview" valueHeader="Use for" />
    </div>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Reference of focus ring tokens with descriptions.",...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,x,k,j,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Accessibility notes" description="Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces." />
      <Section title="Do's and don'ts">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-4)"
      }}>
          <Callout kind="success" title="Do">
            Use <code>:focus-visible</code> so the ring appears for keyboard
            users but not on mouse clicks.
          </Callout>
          <Callout kind="success" title="Do">
            Use the <strong>error</strong> variant only on destructive controls
            so color carries meaning consistently.
          </Callout>
          <Callout kind="warning" title="Don't">
            Don't remove focus rings with <code>outline: none</code> unless you
            provide an equivalent visible indicator.
          </Callout>
          <Callout kind="warning" title="Don't">
            Don't rely on the ring alone in forced-colors mode. Add a border
            state change as a backup.
          </Callout>
        </div>
      </Section>
    </div>
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"Accessibility guidance.",...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};const N=["Playground","Reference","Accessibility"];export{s as Accessibility,c as Playground,a as Reference,N as __namedExportsOrder,$ as default};
