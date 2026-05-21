import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as c}from"./PageHeader-CbY7ZPU9.js";import{S as s}from"./Section-CYLonVyP.js";import{T as l}from"./TokenTable-CnRlQz3u.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CopyButton-qvhmePoZ.js";const f={title:"CometChat Foundation/Radius",tags:["autodocs"],parameters:{layout:"fullscreen"}},n=[{name:"radius-none",value:0,cssVar:"--cometchat-radius-none",isNew:!0},{name:"radius",value:2,cssVar:"--cometchat-radius",isNew:!1},{name:"radius-1",value:4,cssVar:"--cometchat-radius-1",isNew:!1},{name:"radius-1-5",value:6,cssVar:"--cometchat-radius-1-5",isNew:!0},{name:"radius-2",value:8,cssVar:"--cometchat-radius-2",isNew:!1},{name:"radius-2-5",value:10,cssVar:"--cometchat-radius-2-5",isNew:!0},{name:"radius-3",value:12,cssVar:"--cometchat-radius-3",isNew:!1},{name:"radius-4",value:16,cssVar:"--cometchat-radius-4",isNew:!1},{name:"radius-5",value:20,cssVar:"--cometchat-radius-5",isNew:!1},{name:"radius-6",value:24,cssVar:"--cometchat-radius-6",isNew:!1},{name:"radius-max",value:1e3,cssVar:"--cometchat-radius-max",isNew:!1}];function d(){return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"var(--radius-full, 9999px)",background:"var(--color-success-50, #ecfdf3)",color:"var(--color-success-700, #067647)",fontSize:10,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"New"})}const r={render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1400,margin:"0 auto"},children:[e.jsx(c,{eyebrow:"CometChat Foundation",title:"Border Radius",description:"Border radius scale tied to the spacing system. From sharp corners (0px) to fully rounded pills (1000px max).",meta:[{label:"tokens",value:"11"},{label:"range",value:"0–1000px"}]}),e.jsx(s,{title:"Radius Scale",description:"Each radius token maps to a spacing value for consistency.",children:e.jsx(l,{rows:n.map(a=>({name:a.name,value:`${a.value}px`,cssVar:`var(${a.cssVar})`,preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{"aria-hidden":!0,style:{width:48,height:48,background:"var(--color-ep-100)",border:"2px solid var(--color-ep-500)",borderRadius:a.value>=1e3?"50%":a.value}}),a.isNew&&e.jsx(d,{})]})})),previewHeader:"Preview",valueHeader:"Value"})}),e.jsx(s,{title:"Visual Comparison",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)"},children:n.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{width:64,height:64,background:"var(--color-ep-100)",border:"2px solid var(--color-ep-500)",borderRadius:a.value>=1e3?"50%":a.value}}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-secondary)",fontWeight:"var(--font-weight-medium)"},children:[a.value,"px"]}),e.jsx("code",{style:{fontSize:"10px",color:"var(--cometchat-text-color-tertiary)"},children:a.name})]},a.name))})})]})};var t,i,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1400,
    margin: "0 auto"
  }}>
      <PageHeader eyebrow="CometChat Foundation" title="Border Radius" description="Border radius scale tied to the spacing system. From sharp corners (0px) to fully rounded pills (1000px max)." meta={[{
      label: "tokens",
      value: "11"
    }, {
      label: "range",
      value: "0–1000px"
    }]} />

      <Section title="Radius Scale" description="Each radius token maps to a spacing value for consistency.">
        <TokenTable rows={radiusTokens.map(t => ({
        name: t.name,
        value: \`\${t.value}px\`,
        cssVar: \`var(\${t.cssVar})\`,
        preview: <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8
        }}>
                <div aria-hidden style={{
            width: 48,
            height: 48,
            background: "var(--color-ep-100)",
            border: "2px solid var(--color-ep-500)",
            borderRadius: t.value >= 1000 ? "50%" : t.value
          }} />
                {t.isNew && <NewChip />}
              </div>
      }))} previewHeader="Preview" valueHeader="Value" />
      </Section>

      <Section title="Visual Comparison">
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--cometchat-spacing-4)",
        padding: "var(--cometchat-spacing-4)"
      }}>
          {radiusTokens.map(t => <div key={t.name} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--cometchat-spacing-2)"
        }}>
              <div style={{
            width: 64,
            height: 64,
            background: "var(--color-ep-100)",
            border: "2px solid var(--color-ep-500)",
            borderRadius: t.value >= 1000 ? "50%" : t.value
          }} />
              <span style={{
            fontSize: "12px",
            color: "var(--cometchat-text-color-secondary)",
            fontWeight: "var(--font-weight-medium)"
          }}>{t.value}px</span>
              <code style={{
            fontSize: "10px",
            color: "var(--cometchat-text-color-tertiary)"
          }}>{t.name}</code>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["AllTokens"];export{r as AllTokens,y as __namedExportsOrder,f as default};
