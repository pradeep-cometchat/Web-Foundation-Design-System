import{j as a}from"./jsx-runtime-BYYWji4R.js";import{P as c}from"./PageHeader-CbY7ZPU9.js";import{S as n}from"./Section-CYLonVyP.js";import{T as i}from"./TokenTable-CnRlQz3u.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CopyButton-qvhmePoZ.js";const N={title:"CometChat Foundation/Spacing",tags:["autodocs"],parameters:{layout:"fullscreen"}},p=[{step:"spacing",value:2,isNew:!1},{step:"spacing-1",value:4,isNew:!1},{step:"spacing-1-5",value:6,isNew:!0},{step:"spacing-2",value:8,isNew:!1},{step:"spacing-2-5",value:10,isNew:!0},{step:"spacing-3",value:12,isNew:!1},{step:"spacing-3-5",value:14,isNew:!0},{step:"spacing-4",value:16,isNew:!1},{step:"spacing-5",value:20,isNew:!1},{step:"spacing-6",value:24,isNew:!1},{step:"spacing-7",value:28,isNew:!1},{step:"spacing-8",value:32,isNew:!1},{step:"spacing-9",value:36,isNew:!1},{step:"spacing-10",value:40,isNew:!1},{step:"spacing-11",value:44,isNew:!1},{step:"spacing-12",value:48,isNew:!1},{step:"spacing-13",value:52,isNew:!1},{step:"spacing-14",value:56,isNew:!1},{step:"spacing-15",value:60,isNew:!1},{step:"spacing-16",value:64,isNew:!1},{step:"spacing-17",value:68,isNew:!1},{step:"spacing-18",value:72,isNew:!1},{step:"spacing-19",value:76,isNew:!1},{step:"spacing-20",value:80,isNew:!1},{step:"spacing-24",value:96,isNew:!0},{step:"spacing-32",value:128,isNew:!0},{step:"spacing-40",value:160,isNew:!0},{step:"spacing-48",value:192,isNew:!0},{step:"spacing-max",value:1e3,isNew:!1}],o=p.filter(e=>e.step!=="spacing-max"&&parseInt(e.step.replace("spacing-","")||"0")<=10).map(e=>({step:e.step.replace("spacing","padding"),value:e.value,ref:e.step})),d=p.filter(e=>e.step!=="spacing-max").map(e=>({step:e.step.replace("spacing","margin"),value:e.value,ref:e.step}));function u(){return a.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"var(--radius-full, 9999px)",background:"var(--color-success-50, #ecfdf3)",color:"var(--color-success-700, #067647)",fontSize:10,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"New"})}const s={render:()=>a.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1400,margin:"0 auto"},children:[a.jsx(c,{eyebrow:"CometChat Foundation",title:"Spacing",description:"A 4px-based spacing scale from 2px to 80px (plus a max of 1000px). Padding and margin tokens map directly to the spacing scale.",meta:[{label:"base",value:"4px"},{label:"steps",value:"30"},{label:"range",value:"2–1000px"}]}),a.jsx(n,{title:"Spacing Scale",description:"Core spacing values used for padding, margin, and gap.",children:a.jsx(i,{rows:p.map(e=>({name:e.step,value:`${e.value}px`,cssVar:`var(--cometchat-${e.step})`,preview:a.jsxs("div",{"aria-hidden":!0,style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{background:"var(--color-ep-500)",width:Math.min(e.value,200),height:10,borderRadius:"var(--radius-xxs)"}}),e.isNew&&a.jsx(u,{})]})})),previewHeader:"Ruler",valueHeader:"Value"})}),a.jsx(n,{title:"Padding Tokens",description:"Mapped to spacing values (0–10).",children:a.jsx(i,{searchable:!1,rows:o.map(e=>({name:e.step,value:`${e.value}px`,cssVar:`var(--cometchat-${e.step})`,description:`→ ${e.ref}`})),previewHeader:"",valueHeader:"Value"})}),a.jsx(n,{title:"Margin Tokens",description:"Mapped to spacing values (0–20).",children:a.jsx(i,{searchable:!1,rows:d.map(e=>({name:e.step,value:`${e.value}px`,cssVar:`var(--cometchat-${e.step})`,description:`→ ${e.ref}`})),previewHeader:"",valueHeader:"Value"})})]})};var t,l,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1400,
    margin: "0 auto"
  }}>
      <PageHeader eyebrow="CometChat Foundation" title="Spacing" description="A 4px-based spacing scale from 2px to 80px (plus a max of 1000px). Padding and margin tokens map directly to the spacing scale." meta={[{
      label: "base",
      value: "4px"
    }, {
      label: "steps",
      value: "30"
    }, {
      label: "range",
      value: "2–1000px"
    }]} />

      <Section title="Spacing Scale" description="Core spacing values used for padding, margin, and gap.">
        <TokenTable rows={spacingTokens.map(t => ({
        name: t.step,
        value: \`\${t.value}px\`,
        cssVar: \`var(--cometchat-\${t.step})\`,
        preview: <div aria-hidden style={{
          display: "flex",
          alignItems: "center",
          gap: 8
        }}>
                <div style={{
            background: "var(--color-ep-500)",
            width: Math.min(t.value, 200),
            height: 10,
            borderRadius: "var(--radius-xxs)"
          }} />
                {t.isNew && <NewChip />}
              </div>
      }))} previewHeader="Ruler" valueHeader="Value" />
      </Section>

      <Section title="Padding Tokens" description="Mapped to spacing values (0–10).">
        <TokenTable searchable={false} rows={paddingTokens.map(t => ({
        name: t.step,
        value: \`\${t.value}px\`,
        cssVar: \`var(--cometchat-\${t.step})\`,
        description: \`→ \${t.ref}\`
      }))} previewHeader="" valueHeader="Value" />
      </Section>

      <Section title="Margin Tokens" description="Mapped to spacing values (0–20).">
        <TokenTable searchable={false} rows={marginTokens.map(t => ({
        name: t.step,
        value: \`\${t.value}px\`,
        cssVar: \`var(--cometchat-\${t.step})\`,
        description: \`→ \${t.ref}\`
      }))} previewHeader="" valueHeader="Value" />
      </Section>
    </div>
}`,...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const b=["AllTokens"];export{s as AllTokens,b as __namedExportsOrder,N as default};
