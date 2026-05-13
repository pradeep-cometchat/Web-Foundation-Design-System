import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as i,S as W}from"./Section-CEDxe_IL.js";import{T as l}from"./TokenTable-Cs5yM_eT.js";import{C as H,a as I}from"./CopyButton-91Z7xjo1.js";import{s as d}from"./shadows-CEUPI6uQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={title:"Foundation/Effects/Shadows",component:E,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Five elevation tokens from **xs** (subtle lift) to **xl** (modals).
Each token may stack multiple drop shadows for a more natural falloff.

Pair elevation with borders and background tokens, not alone — shadows
alone are not a reliable visual cue in high-contrast modes.`}}},argTypes:{level:{control:"select",options:Object.keys(d),description:"Elevation level.",table:{category:"Token"}}}};function E({level:a}){const r=d[a];return e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:16,overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:56,background:"var(--color-neutral-25)",display:"flex",justifyContent:"center"},children:e.jsx("div",{"aria-label":`shadow-${a} preview`,style:{width:280,height:140,borderRadius:14,background:"var(--color-white)",boxShadow:`var(--shadow-${a})`}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",borderTop:"1px solid var(--color-neutral-200)"},children:[e.jsx(h,{label:"Token",value:r.name}),e.jsx(h,{label:"Layers",value:String(r.layers.length),mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsx(l,{searchable:!1,title:"Copy-ready value",rows:[{name:r.name,value:r.css,cssVar:`var(--shadow-${a})`}]})})]})}const h=({label:a,value:r,mono:$,divider:V})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:V?"1px solid var(--color-neutral-200)":"none",background:"var(--color-neutral-25)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:4},children:a}),e.jsx("div",{style:{fontFamily:$?"var(--sb-font-mono)":"inherit",fontSize:14,fontWeight:600,color:"var(--color-neutral-900)"},children:r})]}),n={args:{level:"md"},parameters:{docs:{disable:!0}}},o={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(i,{title:"Elevation scale",description:"Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy.",meta:[{label:"levels",value:"5"}]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:20,padding:32,background:"var(--color-neutral-25)",border:"1px solid var(--color-neutral-200)",borderRadius:16},children:Object.keys(d).map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"center"},children:[e.jsx("div",{"aria-label":`shadow-${a}`,style:{width:"100%",height:100,borderRadius:12,background:"var(--color-white)",boxShadow:`var(--shadow-${a})`}}),e.jsxs("strong",{style:{fontSize:13,fontWeight:600,color:"var(--color-neutral-900)"},children:["shadow-",a]}),e.jsx(H,{value:`var(--shadow-${a})`,label:"Copy",variant:"solid"})]},a))})]})},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(i,{title:"Shadow reference",description:"Every elevation token with its layer count and full CSS value."}),e.jsx(l,{rows:Object.keys(d).map(a=>{const r=d[a];return{name:r.name,value:`${r.layers.length} layer${r.layers.length>1?"s":""}`,cssVar:`var(--shadow-${a})`,description:r.css,preview:e.jsx("div",{"aria-hidden":!0,style:{width:64,height:32,borderRadius:6,background:"var(--color-white)",boxShadow:`var(--shadow-${a})`}})}}),previewHeader:"Preview",valueHeader:"Layers"})]})},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(i,{title:"Usage guide",description:"Guidelines for when to reach for each elevation. If in doubt, use the smaller one."}),e.jsx(I,{kind:"warning",title:"Don't rely on shadow alone",children:"In high-contrast or forced-colors modes, shadows may be stripped. Pair elevation with borders and surface color changes so the boundary is still clear."}),e.jsx("div",{style:{height:24}}),e.jsx(W,{title:"When to use each level",children:e.jsx(l,{searchable:!1,rows:[{name:"shadow-xs",value:"Inputs, chips, subtle lift",cssVar:"var(--shadow-xs)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:6,background:"var(--color-white)",boxShadow:"var(--shadow-xs)"}})},{name:"shadow-sm",value:"Cards, list items",cssVar:"var(--shadow-sm)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:6,background:"var(--color-white)",boxShadow:"var(--shadow-sm)"}})},{name:"shadow-md",value:"Dropdowns, menus, floating buttons",cssVar:"var(--shadow-md)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:6,background:"var(--color-white)",boxShadow:"var(--shadow-md)"}})},{name:"shadow-lg",value:"Popovers, tooltips with elevation",cssVar:"var(--shadow-lg)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:6,background:"var(--color-white)",boxShadow:"var(--shadow-lg)"}})},{name:"shadow-xl",value:"Modals, sheets, dialogs",cssVar:"var(--shadow-xl)",preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:6,background:"var(--color-white)",boxShadow:"var(--shadow-xl)"}})}],previewHeader:"Preview",valueHeader:"Typical use"})})]})};var c,u,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: "md"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var w,p,m,g,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      <PageHeader title="Elevation scale" description="Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy." meta={[{
      label: "levels",
      value: "5"
    }]} />

      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 20,
      padding: 32,
      background: "var(--color-neutral-25)",
      border: "1px solid var(--color-neutral-200)",
      borderRadius: 16
    }}>
        {(Object.keys(shadows) as ShadowKey[]).map(key => <div key={key} style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center"
      }}>
            <div aria-label={\`shadow-\${key}\`} style={{
          width: "100%",
          height: 100,
          borderRadius: 12,
          background: "var(--color-white)",
          boxShadow: \`var(--shadow-\${key})\`
        }} />
            <strong style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--color-neutral-900)"
        }}>
              shadow-{key}
            </strong>
            <CopyButton value={\`var(--shadow-\${key})\`} label="Copy" variant="solid" />
          </div>)}
      </div>
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"All elevation tokens side by side.",...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var y,x,f,k,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <PageHeader title="Shadow reference" description="Every elevation token with its layer count and full CSS value." />
      <TokenTable rows={(Object.keys(shadows) as ShadowKey[]).map(key => {
      const s = shadows[key];
      return {
        name: s.name,
        value: \`\${s.layers.length} layer\${s.layers.length > 1 ? "s" : ""}\`,
        cssVar: \`var(--shadow-\${key})\`,
        description: s.css,
        preview: <div aria-hidden style={{
          width: 64,
          height: 32,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: \`var(--shadow-\${key})\`
        }} />
      };
    })} previewHeader="Preview" valueHeader="Layers" />
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Shadow token reference.",...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var j,R,P,T,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        cssVar: "var(--shadow-xs)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-xs)"
        }} />
      }, {
        name: "shadow-sm",
        value: "Cards, list items",
        cssVar: "var(--shadow-sm)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-sm)"
        }} />
      }, {
        name: "shadow-md",
        value: "Dropdowns, menus, floating buttons",
        cssVar: "var(--shadow-md)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-md)"
        }} />
      }, {
        name: "shadow-lg",
        value: "Popovers, tooltips with elevation",
        cssVar: "var(--shadow-lg)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-lg)"
        }} />
      }, {
        name: "shadow-xl",
        value: "Modals, sheets, dialogs",
        cssVar: "var(--shadow-xl)",
        preview: <div aria-hidden style={{
          width: 56,
          height: 28,
          borderRadius: 6,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-xl)"
        }} />
      }]} previewHeader="Preview" valueHeader="Typical use" />
      </Section>
    </div>
}`,...(P=(R=t.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"Suggested usage per level.",...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};const K=["Playground","Scale","Reference","UsageGuide"];export{n as Playground,s as Reference,o as Scale,t as UsageGuide,K as __namedExportsOrder,F as default};
