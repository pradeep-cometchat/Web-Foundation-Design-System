import{j as r}from"./jsx-runtime-BYYWji4R.js";import{P as y,S as n}from"./Section-CigK6cgU.js";import{T as s}from"./TokenTable-BJA1pDSo.js";import{c as u,w as m}from"./contrast-DoK-L8TS.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CopyButton-CWX651uh.js";const F={title:"Foundation/Colors/Primitive",parameters:{layout:"fullscreen",themes:{themeOverride:"Light"}}},M={Primary:"#6852d6",White:"#ffffff",Black:"#0a0d12"},C={25:"#fafaff",50:"#f4f3ff",100:"#ebe9fe",200:"#d9d6fe",300:"#bdb4fe",400:"#9b8afb",500:"#7b70e4",600:"#6852d6",700:"#5925dc",800:"#4a1fb8",900:"#3e1c96",950:"#27115f"},P={25:"#fdfdfd",50:"#fafafa",100:"#f5f5f5",200:"#e9eaeb",300:"#d5d7da",400:"#a4a7ae",500:"#717680",600:"#535862",700:"#414651",800:"#252b37",900:"#181d27",950:"#0a0d12"},S={25:"#fafafa",50:"#f7f7f7",100:"#f0f0f1",200:"#ececed",300:"#cecfd2",400:"#94979c",500:"#85888e",600:"#61656c",700:"#373a41",800:"#22262f",900:"#13161b",950:"#0c0e12"},A={25:"#fffbfa",50:"#fef3f2",100:"#fee4e2",200:"#fecdca",300:"#fda29b",400:"#f97066",500:"#f04438",600:"#d92d20",700:"#b42318",800:"#912018",900:"#7a271a",950:"#55160c"},T={25:"#fffcf5",50:"#fffaeb",100:"#fef0c7",200:"#fedf89",300:"#fec84b",400:"#fdb022",500:"#f79009",600:"#dc6803",700:"#b54708",800:"#93370d",900:"#7a2e0e",950:"#4e1d09"},D={25:"#f6fef9",50:"#ecfdf3",100:"#dcfae6",200:"#abefc6",300:"#75e0a7",400:"#47cd89",500:"#17b26a",600:"#079455",700:"#067647",800:"#085d3a",900:"#074d31",950:"#053321"},W={25:"#f5f8ff",50:"#eff4ff",100:"#d1e0ff",200:"#b2ccff",300:"#84adff",400:"#528bff",500:"#2970ff",600:"#155eef",700:"#004eeb",800:"#0040c1",900:"#00359e",950:"#002266"},t={render:()=>r.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[r.jsx(y,{title:"Color Primitives",description:"The raw color palette scales that power the design system. These are referenced by semantic tokens (Text, Icon, Background, Border). Do not use primitives directly in components — always use semantic tokens.",meta:[{label:"palettes",value:"8"},{label:"scale",value:"25 → 950"}]}),r.jsx(n,{title:"Base",description:"Core brand anchors — Primary, White, and Black.",children:r.jsx(s,{searchable:!1,rows:Object.entries(M).map(([e,a])=>({name:`Base / ${e}`,value:a,cssVar:e==="Primary"?"var(--color-primary)":e==="White"?"var(--color-white)":"var(--color-static-black)",preview:r.jsx(o,{color:a,border:e==="White"})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Extended Primary",description:"Full 12-step tint/shade scale of the brand color. Used for buttons, links, focus rings, and brand surfaces.",children:r.jsx(s,{searchable:!1,rows:Object.entries(C).map(([e,a])=>({name:`Extended Primary / ${e}`,value:a,cssVar:`var(--color-ep-${e})`,preview:r.jsx(o,{color:a})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Neutral (LM) — Light Mode",description:"Surfaces, text, borders, and dividers for light backgrounds. Referenced by semantic tokens in light mode.",children:r.jsx(s,{searchable:!1,rows:Object.entries(P).map(([e,a])=>({name:`Neutral (LM) / Neutral ${e}`,value:a,cssVar:`var(--color-neutral-lm-${e})`,preview:r.jsx(o,{color:a,border:parseInt(e)<200})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Neutral (DM) — Dark Mode",description:"Surfaces, text, borders, and dividers for dark backgrounds. Referenced by semantic tokens in dark mode.",children:r.jsx(s,{searchable:!1,rows:Object.entries(S).map(([e,a])=>({name:`Neutral (DM) / Neutral ${e}`,value:a,cssVar:`var(--color-neutral-dm-${e})`,preview:r.jsx(o,{color:a,border:parseInt(e)<200})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Error",description:"Destructive actions, validation errors, and blocking states.",children:r.jsx(s,{searchable:!1,rows:Object.entries(A).map(([e,a])=>({name:`Error / Error ${e}`,value:a,cssVar:e==="600"?"var(--color-error)":`var(--color-error-${e})`,preview:r.jsx(o,{color:a})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Warning",description:"Non-blocking cautions and attention states.",children:r.jsx(s,{searchable:!1,rows:Object.entries(T).map(([e,a])=>({name:`Warning / Warning ${e}`,value:a,cssVar:e==="600"?"var(--color-warning)":`var(--color-warning-${e})`,preview:r.jsx(o,{color:a})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Success",description:"Confirmation, completed states, and positive outcomes.",children:r.jsx(s,{searchable:!1,rows:Object.entries(D).map(([e,a])=>({name:`Success / Success ${e}`,value:a,cssVar:e==="600"?"var(--color-success)":`var(--color-success-${e})`,preview:r.jsx(o,{color:a})})),previewHeader:"Color",valueHeader:"Hex"})}),r.jsx(n,{title:"Info",description:"Informational states — links, banners, non-destructive notices.",children:r.jsx(s,{searchable:!1,rows:Object.entries(W).map(([e,a])=>({name:`Info / Info ${e}`,value:a,cssVar:e==="600"?"var(--color-info)":`var(--color-info-${e})`,preview:r.jsx(o,{color:a})})),previewHeader:"Color",valueHeader:"Hex"})})]})};function o({color:e,border:a}){return r.jsx("div",{"aria-hidden":!0,style:{width:32,height:32,borderRadius:"var(--radius-sm)",background:e,border:a?"1px solid var(--color-border-default)":"none",flexShrink:0}})}const i={render:()=>{const e=[{name:"Extended Primary",shades:C,prefix:"ep"},{name:"Neutral (LM)",shades:P,prefix:"neutral-lm"},{name:"Neutral (DM)",shades:S,prefix:"neutral-dm"},{name:"Error",shades:A,prefix:"error"},{name:"Warning",shades:T,prefix:"warning"},{name:"Success",shades:D,prefix:"success"},{name:"Info",shades:W,prefix:"info"}];return r.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[r.jsx(y,{title:"Accessibility Audit",description:"WCAG 2.1 contrast ratios for every primitive shade against white (#ffffff) and black (#0a0d12). Use this to pick safe foreground/background pairings.",meta:[{label:"AAA",value:"≥ 7:1"},{label:"AA",value:"≥ 4.5:1"},{label:"AA Large",value:"≥ 3:1"}]}),e.map(({name:a,shades:O,prefix:l})=>r.jsx(n,{title:a,children:r.jsx(s,{searchable:!1,rows:Object.entries(O).map(([d,c])=>{const f=u(c,"#ffffff"),p=u(c,"#0a0d12");return{name:`${l}-${d}`,value:c,cssVar:`var(--color-${l}-${d})`,preview:r.jsx(o,{color:c}),description:`On white: ${f.toFixed(2)}:1 (${m(f)}) · On black: ${p.toFixed(2)}:1 (${m(p)})`}}),previewHeader:"Color",valueHeader:"Hex"})},a))]})}};var v,h,b,x,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Color Primitives" description="The raw color palette scales that power the design system. These are referenced by semantic tokens (Text, Icon, Background, Border). Do not use primitives directly in components — always use semantic tokens." meta={[{
      label: "palettes",
      value: "8"
    }, {
      label: "scale",
      value: "25 → 950"
    }]} />

      <Section title="Base" description="Core brand anchors — Primary, White, and Black.">
        <TokenTable searchable={false} rows={Object.entries(base).map(([name, hex]) => ({
        name: \`Base / \${name}\`,
        value: hex,
        cssVar: name === "Primary" ? "var(--color-primary)" : name === "White" ? "var(--color-white)" : "var(--color-static-black)",
        preview: <ColorDot color={hex} border={name === "White"} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Extended Primary" description="Full 12-step tint/shade scale of the brand color. Used for buttons, links, focus rings, and brand surfaces.">
        <TokenTable searchable={false} rows={Object.entries(extendedPrimary).map(([shade, hex]) => ({
        name: \`Extended Primary / \${shade}\`,
        value: hex,
        cssVar: \`var(--color-ep-\${shade})\`,
        preview: <ColorDot color={hex} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Neutral (LM) — Light Mode" description="Surfaces, text, borders, and dividers for light backgrounds. Referenced by semantic tokens in light mode.">
        <TokenTable searchable={false} rows={Object.entries(neutralLM).map(([shade, hex]) => ({
        name: \`Neutral (LM) / Neutral \${shade}\`,
        value: hex,
        cssVar: \`var(--color-neutral-lm-\${shade})\`,
        preview: <ColorDot color={hex} border={parseInt(shade) < 200} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Neutral (DM) — Dark Mode" description="Surfaces, text, borders, and dividers for dark backgrounds. Referenced by semantic tokens in dark mode.">
        <TokenTable searchable={false} rows={Object.entries(neutralDM).map(([shade, hex]) => ({
        name: \`Neutral (DM) / Neutral \${shade}\`,
        value: hex,
        cssVar: \`var(--color-neutral-dm-\${shade})\`,
        preview: <ColorDot color={hex} border={parseInt(shade) < 200} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Error" description="Destructive actions, validation errors, and blocking states.">
        <TokenTable searchable={false} rows={Object.entries(errorPalette).map(([shade, hex]) => ({
        name: \`Error / Error \${shade}\`,
        value: hex,
        cssVar: shade === "600" ? "var(--color-error)" : \`var(--color-error-\${shade})\`,
        preview: <ColorDot color={hex} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Warning" description="Non-blocking cautions and attention states.">
        <TokenTable searchable={false} rows={Object.entries(warningPalette).map(([shade, hex]) => ({
        name: \`Warning / Warning \${shade}\`,
        value: hex,
        cssVar: shade === "600" ? "var(--color-warning)" : \`var(--color-warning-\${shade})\`,
        preview: <ColorDot color={hex} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Success" description="Confirmation, completed states, and positive outcomes.">
        <TokenTable searchable={false} rows={Object.entries(successPalette).map(([shade, hex]) => ({
        name: \`Success / Success \${shade}\`,
        value: hex,
        cssVar: shade === "600" ? "var(--color-success)" : \`var(--color-success-\${shade})\`,
        preview: <ColorDot color={hex} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>

      <Section title="Info" description="Informational states — links, banners, non-destructive notices.">
        <TokenTable searchable={false} rows={Object.entries(infoPalette).map(([shade, hex]) => ({
        name: \`Info / Info \${shade}\`,
        value: hex,
        cssVar: shade === "600" ? "var(--color-info)" : \`var(--color-info-\${shade})\`,
        preview: <ColorDot color={hex} />
      }))} previewHeader="Color" valueHeader="Hex" />
      </Section>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"All primitive color palettes from Figma.",...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var g,k,H,j,$;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const palettes = [{
      name: "Extended Primary",
      shades: extendedPrimary,
      prefix: "ep"
    }, {
      name: "Neutral (LM)",
      shades: neutralLM,
      prefix: "neutral-lm"
    }, {
      name: "Neutral (DM)",
      shades: neutralDM,
      prefix: "neutral-dm"
    }, {
      name: "Error",
      shades: errorPalette,
      prefix: "error"
    }, {
      name: "Warning",
      shades: warningPalette,
      prefix: "warning"
    }, {
      name: "Success",
      shades: successPalette,
      prefix: "success"
    }, {
      name: "Info",
      shades: infoPalette,
      prefix: "info"
    }];
    return <div style={{
      padding: "var(--space-8)",
      maxWidth: 1200,
      margin: "0 auto"
    }}>
        <PageHeader title="Accessibility Audit" description="WCAG 2.1 contrast ratios for every primitive shade against white (#ffffff) and black (#0a0d12). Use this to pick safe foreground/background pairings." meta={[{
        label: "AAA",
        value: "≥ 7:1"
      }, {
        label: "AA",
        value: "≥ 4.5:1"
      }, {
        label: "AA Large",
        value: "≥ 3:1"
      }]} />

        {palettes.map(({
        name,
        shades,
        prefix
      }) => <Section key={name} title={name}>
            <TokenTable searchable={false} rows={Object.entries(shades).map(([shade, hex]) => {
          const onWhite = contrastRatio(hex, "#ffffff");
          const onBlack = contrastRatio(hex, "#0a0d12");
          return {
            name: \`\${prefix}-\${shade}\`,
            value: hex,
            cssVar: \`var(--color-\${prefix}-\${shade})\`,
            preview: <ColorDot color={hex} />,
            description: \`On white: \${onWhite.toFixed(2)}:1 (\${wcagRating(onWhite)}) · On black: \${onBlack.toFixed(2)}:1 (\${wcagRating(onBlack)})\`
          };
        })} previewHeader="Color" valueHeader="Hex" />
          </Section>)}
      </div>;
  }
}`,...(H=(k=i.parameters)==null?void 0:k.docs)==null?void 0:H.source},description:{story:"Accessibility audit — contrast ratios for every primitive shade against white and black.",...($=(j=i.parameters)==null?void 0:j.docs)==null?void 0:$.description}}};const U=["AllPalettes","AccessibilityAudit"];export{i as AccessibilityAudit,t as AllPalettes,U as __namedExportsOrder,F as default};
