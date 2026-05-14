import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as T,S as C}from"./Section-CfmrHga2.js";import{a}from"./CopyButton-DDy7kCx8.js";import{T as S}from"./TokenTable-BhPKziKW.js";import{f as d}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V={title:"Foundation/Effects/Focus Rings",component:A,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Focus states stack three layers:
1. The base elevation (matches \`shadow-xs\`).
2. A 2px white halo to separate the ring from the control.
3. A 4px colored outer ring — brand or error.

Always apply a visible focus ring to interactive elements. Use the **error**
variant for destructive controls so the focus color matches intent.`}}},argTypes:{variant:{control:"radio",options:Object.keys(d),description:"Focus ring style.",table:{category:"Token"}},label:{control:"text",description:"Button label.",table:{category:"Content"}}}};function A({variant:r,label:o}){const s=d[r],i=r==="error"?"focus-ring-error-xs":"focus-ring-xs";return e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-2xl)",overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:"var(--space-12)",background:"var(--color-neutral-25)",display:"flex",justifyContent:"center"},children:e.jsx("button",{type:"button",style:{padding:"10px 18px",borderRadius:"var(--radius-md)",border:"1px solid transparent",background:r==="error"?"var(--color-error-500)":"var(--color-ep-500)",color:"var(--color-white)",fontWeight:"var(--font-weight-semibold)",fontSize:"var(--font-size-2)",cursor:"pointer",boxShadow:`var(--${i})`,fontFamily:"inherit"},children:o})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--color-neutral-200)"},children:[e.jsx(l,{label:"Token",value:s.name}),e.jsx(l,{label:"CSS variable",value:`var(--${i})`,mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsxs(a,{kind:"tip",title:"Try tabbing through the canvas",children:["The preview above has the focus ring permanently applied for reference. In real usage, use ",e.jsx("code",{children:":focus-visible"})," so the ring only appears for keyboard users."]})})]})}const l=({label:r,value:o,mono:s,divider:i})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:i?"1px solid var(--color-neutral-200)":"none",background:"var(--color-neutral-25)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:"var(--space-1)"},children:r}),e.jsx("div",{style:{fontFamily:s?"var(--font-family-body)":"inherit",fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:o})]}),c={args:{variant:"default",label:"Focused button"},parameters:{docs:{disable:!0}}},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Focus ring reference",description:"Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones."}),e.jsx(S,{rows:Object.keys(d).map(r=>{const o=d[r],s=r==="error"?"focus-ring-error-xs":"focus-ring-xs";return{name:o.name,value:o.description??"",cssVar:`var(--${s})`,preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:32,borderRadius:"var(--radius-md)",background:r==="error"?"var(--color-error-500)":"var(--color-ep-500)",boxShadow:`var(--${s})`,margin:10}})}}),previewHeader:"Preview",valueHeader:"Use for"})]})},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Accessibility notes",description:"Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces."}),e.jsx(C,{title:"Do's and don'ts",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--space-4)"},children:[e.jsxs(a,{kind:"success",title:"Do",children:["Use ",e.jsx("code",{children:":focus-visible"})," so the ring appears for keyboard users but not on mouse clicks."]}),e.jsxs(a,{kind:"success",title:"Do",children:["Use the ",e.jsx("strong",{children:"error"})," variant only on destructive controls so color carries meaning consistently."]}),e.jsxs(a,{kind:"warning",title:"Don't",children:["Don't remove focus rings with ",e.jsx("code",{children:"outline: none"})," unless you provide an equivalent visible indicator."]}),e.jsx(a,{kind:"warning",title:"Don't",children:"Don't rely on the ring alone in forced-colors mode. Add a border state change as a backup."})]})})]})};var u,p,v;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Focused button"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(v=(p=c.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var m,g,h,f,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Focus ring reference" description="Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones." />
      <TokenTable rows={(Object.keys(focusRings) as FocusRingKey[]).map(key => {
      const t = focusRings[key];
      const cssVarName = key === "error" ? "focus-ring-error-xs" : "focus-ring-xs";
      return {
        name: t.name,
        value: t.description ?? "",
        cssVar: \`var(--\${cssVarName})\`,
        preview: <div aria-hidden style={{
          width: 56,
          height: 32,
          borderRadius: "var(--radius-md)",
          background: key === "error" ? "var(--color-error-500)" : "var(--color-ep-500)",
          boxShadow: \`var(--\${cssVarName})\`,
          margin: 10
        }} />
      };
    })} previewHeader="Preview" valueHeader="Use for" />
    </div>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Reference of focus ring tokens with descriptions.",...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,x,k,j,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Accessibility notes" description="Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces." />
      <Section title="Do's and don'ts">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "var(--space-4)"
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
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"Accessibility guidance.",...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};const q=["Playground","Reference","Accessibility"];export{n as Accessibility,c as Playground,t as Reference,q as __namedExportsOrder,V as default};
