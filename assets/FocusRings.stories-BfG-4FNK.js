import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as T,S as C}from"./Section-CEDxe_IL.js";import{a}from"./CopyButton-DMuNKf-I.js";import{T as S}from"./TokenTable-C3PumEs-.js";import{f as l}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V={title:"Foundation/Effects/Focus Rings",component:A,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Focus states stack three layers:
1. The base elevation (matches \`shadow-xs\`).
2. A 2px white halo to separate the ring from the control.
3. A 4px colored outer ring — brand or error.

Always apply a visible focus ring to interactive elements. Use the **error**
variant for destructive controls so the focus color matches intent.`}}},argTypes:{variant:{control:"radio",options:Object.keys(l),description:"Focus ring style.",table:{category:"Token"}},label:{control:"text",description:"Button label.",table:{category:"Content"}}}};function A({variant:r,label:o}){const t=l[r],i=r==="error"?"focus-ring-error-xs":"focus-ring-xs";return e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:16,overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:56,background:"var(--color-neutral-25)",display:"flex",justifyContent:"center"},children:e.jsx("button",{type:"button",style:{padding:"10px 18px",borderRadius:8,border:"1px solid transparent",background:r==="error"?"var(--color-error-500)":"var(--color-ep-500)",color:"var(--color-white)",fontWeight:600,fontSize:14,cursor:"pointer",boxShadow:`var(--${i})`,fontFamily:"inherit"},children:o})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--color-neutral-200)"},children:[e.jsx(d,{label:"Token",value:t.name}),e.jsx(d,{label:"CSS variable",value:`var(--${i})`,mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsxs(a,{kind:"tip",title:"Try tabbing through the canvas",children:["The preview above has the focus ring permanently applied for reference. In real usage, use ",e.jsx("code",{children:":focus-visible"})," so the ring only appears for keyboard users."]})})]})}const d=({label:r,value:o,mono:t,divider:i})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:i?"1px solid var(--color-neutral-200)":"none",background:"var(--color-neutral-25)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:4},children:r}),e.jsx("div",{style:{fontFamily:t?"var(--sb-font-mono)":"inherit",fontSize:14,fontWeight:600,color:"var(--color-neutral-900)"},children:o})]}),c={args:{variant:"default",label:"Focused button"},parameters:{docs:{disable:!0}}},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Focus ring reference",description:"Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones."}),e.jsx(S,{rows:Object.keys(l).map(r=>{const o=l[r],t=r==="error"?"focus-ring-error-xs":"focus-ring-xs";return{name:o.name,value:o.description??"",cssVar:`var(--${t})`,preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:32,borderRadius:8,background:r==="error"?"var(--color-error-500)":"var(--color-ep-500)",boxShadow:`var(--${t})`,margin:10}})}}),previewHeader:"Preview",valueHeader:"Use for"})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Accessibility notes",description:"Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces."}),e.jsx(C,{title:"Do's and don'ts",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},children:[e.jsxs(a,{kind:"success",title:"Do",children:["Use ",e.jsx("code",{children:":focus-visible"})," so the ring appears for keyboard users but not on mouse clicks."]}),e.jsxs(a,{kind:"success",title:"Do",children:["Use the ",e.jsx("strong",{children:"error"})," variant only on destructive controls so color carries meaning consistently."]}),e.jsxs(a,{kind:"warning",title:"Don't",children:["Don't remove focus rings with ",e.jsx("code",{children:"outline: none"})," unless you provide an equivalent visible indicator."]}),e.jsx(a,{kind:"warning",title:"Don't",children:"Don't rely on the ring alone in forced-colors mode. Add a border state change as a backup."})]})})]})};var u,p,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Focused button"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,v,h,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: 32,
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
          borderRadius: 8,
          background: key === "error" ? "var(--color-error-500)" : "var(--color-ep-500)",
          boxShadow: \`var(--\${cssVarName})\`,
          margin: 10
        }} />
      };
    })} previewHeader="Preview" valueHeader="Use for" />
    </div>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"Reference of focus ring tokens with descriptions.",...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,x,k,j,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: 32,
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Accessibility notes" description="Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces." />
      <Section title="Do's and don'ts">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16
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
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"Accessibility guidance.",...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};const q=["Playground","Reference","Accessibility"];export{s as Accessibility,c as Playground,n as Reference,q as __namedExportsOrder,V as default};
