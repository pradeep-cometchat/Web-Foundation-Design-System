import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as u,b as l}from"./T-C6nayWAE.js";import{P as T}from"./PageHeader-BGkAZ-GI.js";import{S as D}from"./Section-DfJq-BPU.js";import{C as s}from"./Callout-DtyXdUXQ.js";import{T as S}from"./TokenTable-B7-Z39Rr.js";import{f as d}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-CU6COA3w.js";import"./CopyButton-DNDq52Kj.js";const L={title:"CometChat Foundation/Effects/Focus Rings",component:R,tags:["autodocs"],parameters:{layout:"fullscreen",themes:{themeOverride:"Light"},docs:{description:{component:`Focus states stack three layers:
1. The base elevation (matches \`shadow-xs\`).
2. A 2px white halo to separate the ring from the control.
3. A 4px colored outer ring — brand or error.

Always apply a visible focus ring to interactive elements. Use the **error**
variant for destructive controls so the focus color matches intent.`}}},argTypes:{variant:{control:"radio",options:Object.keys(d),description:"Focus ring style.",table:{category:"Token"}},label:{control:"text",description:"Button label.",table:{category:"Content"}}}};function R({variant:r,label:t}){const o=d[r],i=r==="error"?"focus-ring-error":"focus-ring";return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-4)",overflow:"hidden",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-sm)"},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-12)",background:"var(--cometchat-background-color-01)",display:"flex",justifyContent:"center"},children:e.jsx("button",{type:"button",style:{padding:"10px 18px",borderRadius:"var(--cometchat-radius-2)",border:"1px solid transparent",background:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-extended-primary-color-500)",color:"var(--cometchat-static-white)",fontWeight:"600",fontSize:"14px",cursor:"pointer",boxShadow:`var(--cometchat-${i})`,fontFamily:"inherit"},children:e.jsx(u,{children:t})})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx(m,{label:"Token",value:o.name}),e.jsx(m,{label:"CSS variable",value:`var(--cometchat-${i})`,mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsx(s,{kind:"tip",title:"Try tabbing through the canvas",children:e.jsx(A,{})})})]})}const m=({label:r,value:t,mono:o,divider:i})=>e.jsxs("div",{style:{padding:"16px 20px",borderInlineStart:i?"1px solid var(--cometchat-border-color-default)":"none",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(u,{children:r})}),e.jsx("div",{style:{fontFamily:o?"var(--cometchat-font-family)":"inherit",fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)"},children:t})]}),c={args:{variant:"default",label:"Focused button"},parameters:{docs:{disable:!0}}},a={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Focus ring reference",description:"Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones."}),e.jsx(S,{rows:Object.keys(d).map(r=>{const t=d[r],o=r==="error"?"focus-ring-error":"focus-ring";return{name:t.name,value:t.description??"",cssVar:`var(--cometchat-${o})`,preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:32,borderRadius:"var(--cometchat-radius-2)",background:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-extended-primary-color-500)",boxShadow:`var(--cometchat-${o})`,margin:10}})}}),previewHeader:"Preview",valueHeader:"Use for"})]})},n={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(T,{title:"Accessibility notes",description:"Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces."}),e.jsx(D,{title:"Do's and don'ts",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(s,{kind:"success",title:"Do",children:e.jsx(V,{})}),e.jsx(s,{kind:"success",title:"Do",children:e.jsx(W,{})}),e.jsx(s,{kind:"warning",title:"Don't",children:e.jsx(P,{})}),e.jsx(s,{kind:"warning",title:"Don't",children:e.jsx(u,{children:"Don't rely on the ring alone in forced-colors mode. Add a border state change as a backup."})})]})})]})};function A(){const r=e.jsx("code",{children:":focus-visible"});return l()==="ar"?e.jsxs(e.Fragment,{children:["تُطبَّق حلقة التركيز في المعاينة أعلاه بشكل دائم لأغراض المرجع. في الاستخدام الفعلي، استخدم ",r," حتى تظهر الحلقة لمستخدمي لوحة المفاتيح فقط."]}):e.jsxs(e.Fragment,{children:["The preview above has the focus ring permanently applied for reference. In real usage, use ",r," so the ring only appears for keyboard users."]})}function V(){const r=e.jsx("code",{children:":focus-visible"});return l()==="ar"?e.jsxs(e.Fragment,{children:["استخدم ",r," لتظهر الحلقة لمستخدمي لوحة المفاتيح دون نقرات الفأرة."]}):e.jsxs(e.Fragment,{children:["Use ",r," so the ring appears for keyboard users but not on mouse clicks."]})}function W(){return l()==="ar"?e.jsxs(e.Fragment,{children:["استخدم نمط ",e.jsx("strong",{children:"error"})," على عناصر التحكّم التدميرية فقط، حتى يحمل اللون معنًى متّسقًا."]}):e.jsxs(e.Fragment,{children:["Use the ",e.jsx("strong",{children:"error"})," variant only on destructive controls so color carries meaning consistently."]})}function P(){const r=e.jsx("code",{children:"outline: none"});return l()==="ar"?e.jsxs(e.Fragment,{children:["لا تُزِل حلقات التركيز عبر ",r," ما لم توفّر مؤشّرًا مرئيًا مكافئًا."]}):e.jsxs(e.Fragment,{children:["Don't remove focus rings with ",r," unless you provide an equivalent visible indicator."]})}var p,h,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Focused button"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,f,x,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Reference of focus ring tokens with descriptions.",...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var j,k,w,C,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
            <DoFocusVisibleCopy />
          </Callout>
          <Callout kind="success" title="Do">
            <DoErrorVariantCopy />
          </Callout>
          <Callout kind="warning" title="Don't">
            <DontRemoveCopy />
          </Callout>
          <Callout kind="warning" title="Don't">
            <T>
              Don't rely on the ring alone in forced-colors mode. Add a border
              state change as a backup.
            </T>
          </Callout>
        </div>
      </Section>
    </div>
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Accessibility guidance.",...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};const _=["Playground","Reference","Accessibility"];export{n as Accessibility,c as Playground,a as Reference,_ as __namedExportsOrder,L as default};
