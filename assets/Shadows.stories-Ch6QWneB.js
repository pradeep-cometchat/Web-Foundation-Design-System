import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as c}from"./PageHeader-CbY7ZPU9.js";import{S as W}from"./Section-CYLonVyP.js";import{T as n}from"./TokenTable-CnRlQz3u.js";import{C as H}from"./CopyButton-qvhmePoZ.js";import{C as I}from"./Callout-DbyIvtll.js";import{s as i}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M={title:"CometChat Foundation/Effects/Shadows",component:E,tags:["autodocs"],parameters:{layout:"fullscreen",themes:{themeOverride:"Light"},docs:{description:{component:`Five elevation tokens from **xs** (subtle lift) to **xl** (modals).
Each token may stack multiple drop shadows for a more natural falloff.

Pair elevation with borders and background tokens, not alone — shadows
alone are not a reliable visual cue in high-contrast modes.`}}},argTypes:{level:{control:"select",options:Object.keys(i),description:"Elevation level.",table:{category:"Token"}}}};function E({level:a}){const t=i[a];return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-4)",overflow:"hidden",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-sm)"},children:[e.jsx("div",{style:{padding:"var(--cometchat-spacing-12)",background:"var(--cometchat-background-color-01)",display:"flex",justifyContent:"center"},children:e.jsx("div",{"aria-label":`shadow-${a} preview`,style:{width:280,height:140,borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-static-white)",boxShadow:`var(--cometchat-shadow-${a})`}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--cometchat-border-color-default)"},children:[e.jsx(l,{label:"Token",value:t.name}),e.jsx(l,{label:"Layers",value:String(t.layers.length),mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsx(n,{searchable:!1,title:"Copy-ready value",rows:[{name:t.name,value:t.css,cssVar:`var(--cometchat-shadow-${a})`}]})})]})}const l=({label:a,value:t,mono:$,divider:V})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:V?"1px solid var(--cometchat-border-color-default)":"none",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)",marginBottom:"var(--cometchat-spacing-1)"},children:a}),e.jsx("div",{style:{fontFamily:$?"var(--cometchat-font-family)":"inherit",fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)"},children:t})]}),d={args:{level:"md"},parameters:{docs:{disable:!0}}},r={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"Elevation scale",description:"Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy.",meta:[{label:"levels",value:"5"}]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"var(--cometchat-spacing-5)",padding:"var(--cometchat-spacing-8)",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-4)"},children:Object.keys(i).map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)",alignItems:"center"},children:[e.jsx("div",{"aria-label":`shadow-${a}`,style:{width:"100%",height:100,borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-static-white)",boxShadow:`var(--cometchat-shadow-${a})`}}),e.jsxs("strong",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-primary)"},children:["shadow-",a]}),e.jsx(H,{value:`var(--cometchat-shadow-${a})`,label:"Copy",variant:"solid"})]},a))})]})},o={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"Shadow reference",description:"Every elevation token with its layer count and full CSS value."}),e.jsx(n,{rows:Object.keys(i).map(a=>{const t=i[a];return{name:t.name,value:`${t.layers.length} layer${t.layers.length>1?"s":""}`,cssVar:`var(--cometchat-shadow-${a})`,description:t.css,preview:e.jsx("div",{"aria-hidden":!0,style:{width:64,height:32,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:`var(--cometchat-shadow-${a})`}})}}),previewHeader:"Preview",valueHeader:"Layers"})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"Usage guide",description:"Guidelines for when to reach for each elevation. If in doubt, use the smaller one."}),e.jsx(I,{kind:"warning",title:"Don't rely on shadow alone",children:"In high-contrast or forced-colors modes, shadows may be stripped. Pair elevation with borders and surface color changes so the boundary is still clear."}),e.jsx("div",{style:{height:24}}),e.jsx(W,{title:"When to use each level",children:e.jsx(n,{searchable:!1,rows:[{name:"shadow-xs",value:"Inputs, chips, subtle lift",cssVar:"var(--cometchat-shadow-xs)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-xs)"}})},{name:"shadow-sm",value:"Cards, list items",cssVar:"var(--cometchat-shadow-sm)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-sm)"}})},{name:"shadow-md",value:"Dropdowns, menus, floating buttons",cssVar:"var(--cometchat-shadow-md)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-md)"}})},{name:"shadow-lg",value:"Popovers, tooltips with elevation",cssVar:"var(--cometchat-shadow-lg)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-lg)"}})},{name:"shadow-xl",value:"Modals, sheets, dialogs",cssVar:"var(--cometchat-shadow-xl)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-xl)"}})}],previewHeader:"Preview",valueHeader:"Typical use"})})]})};var h,m,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: "md"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(v=(m=d.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,p,w,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <PageHeader title="Elevation scale" description="Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy." meta={[{
      label: "levels",
      value: "5"
    }]} />

      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "var(--cometchat-spacing-5)",
      padding: "var(--cometchat-spacing-8)",
      background: "var(--cometchat-background-color-01)",
      border: "1px solid var(--cometchat-border-color-default)",
      borderRadius: "var(--cometchat-radius-4)"
    }}>
        {(Object.keys(shadows) as ShadowKey[]).map(key => <div key={key} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-3)",
        alignItems: "center"
      }}>
            <div aria-label={\`shadow-\${key}\`} style={{
          width: "100%",
          height: 100,
          borderRadius: "var(--cometchat-radius-3)",
          background: "var(--cometchat-static-white)",
          boxShadow: \`var(--cometchat-shadow-\${key})\`
        }} />
            <strong style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-primary)"
        }}>
              shadow-{key}
            </strong>
            <CopyButton value={\`var(--cometchat-shadow-\${key})\`} label="Copy" variant="solid" />
          </div>)}
      </div>
    </div>
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source},description:{story:"All elevation tokens side by side.",...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var y,x,f,k,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <PageHeader title="Shadow reference" description="Every elevation token with its layer count and full CSS value." />
      <TokenTable rows={(Object.keys(shadows) as ShadowKey[]).map(key => {
      const s = shadows[key];
      return {
        name: s.name,
        value: \`\${s.layers.length} layer\${s.layers.length > 1 ? "s" : ""}\`,
        cssVar: \`var(--cometchat-shadow-\${key})\`,
        description: s.css,
        preview: <div aria-hidden style={{
          width: 64,
          height: 32,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: \`var(--cometchat-shadow-\${key})\`
        }} />
      };
    })} previewHeader="Preview" valueHeader="Layers" />
    </div>
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Shadow token reference.",...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var j,R,C,P,T;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      <PageHeader title="Usage guide" description="Guidelines for when to reach for each elevation. If in doubt, use the smaller one." />
      <Callout kind="warning" title="Don't rely on shadow alone">
        In high-contrast or forced-colors modes, shadows may be stripped. Pair
        elevation with borders and surface color changes so the boundary is
        still clear.
      </Callout>
      <div style={{
      height: 24
    }} />
      <Section title="When to use each level">
        <TokenTable searchable={false} rows={[{
        name: "shadow-xs",
        value: "Inputs, chips, subtle lift",
        cssVar: "var(--cometchat-shadow-xs)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-xs)"
        }} />
      }, {
        name: "shadow-sm",
        value: "Cards, list items",
        cssVar: "var(--cometchat-shadow-sm)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-sm)"
        }} />
      }, {
        name: "shadow-md",
        value: "Dropdowns, menus, floating buttons",
        cssVar: "var(--cometchat-shadow-md)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-md)"
        }} />
      }, {
        name: "shadow-lg",
        value: "Popovers, tooltips with elevation",
        cssVar: "var(--cometchat-shadow-lg)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-lg)"
        }} />
      }, {
        name: "shadow-xl",
        value: "Modals, sheets, dialogs",
        cssVar: "var(--cometchat-shadow-xl)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: "var(--cometchat-radius-1-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-xl)"
        }} />
      }]} previewHeader="Preview" valueHeader="Typical use" />
      </Section>
    </div>
}`,...(C=(R=s.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Suggested usage per level.",...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};const _=["Playground","Scale","Reference","UsageGuide"];export{d as Playground,o as Reference,r as Scale,s as UsageGuide,_ as __namedExportsOrder,M as default};
