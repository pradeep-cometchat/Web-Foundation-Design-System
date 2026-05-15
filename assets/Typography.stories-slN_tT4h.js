import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as g,S as N}from"./Section-CigK6cgU.js";import{T as m}from"./TokenTable-BJA1pDSo.js";import{C as q}from"./CopyButton-CWX651uh.js";import{C as _}from"./Callout-BB-HyLdv.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={0:10,1:12,2:14,3:16,4:18,5:20,6:24,7:32},I={title:40,h1:32,h2:30,h3:28,h4:24,body:20,caption1:18,caption2:16},o={regular:400,medium:500,semibold:600,bold:700},r=(n,t,a,i=["bold","semibold","medium","regular"],v)=>({name:n,sizeKey:t,sizePx:D[t],lineHeightKey:a,lineHeightPx:I[a],weights:i,decoration:v}),h={title:r("Title",7,"title"),h1:r("Heading 1",6,"h1"),h2:r("Heading 2",5,"h2"),h3:r("Heading 3",4,"h3"),h4:r("Heading 4",3,"h4"),body:r("Body",2,"body"),caption1:r("Caption 1",1,"caption1"),caption2:r("Caption 2",0,"caption2"),button:r("Button",2,"body"),link:r("Link",2,"body",["regular"],"underline")},y={title:"--line-height-title",h1:"--line-height-h1",h2:"--line-height-h2",h3:"--line-height-h3",h4:"--line-height-h4",body:"--line-height-body",caption1:"--line-height-caption-1",caption2:"--line-height-caption-2"},ee={title:"Foundation/Typography",component:G,tags:["autodocs"],parameters:{layout:"fullscreen",themes:{themeOverride:"Light"},docs:{description:{component:"Type styles are composed from four primitives: **font size**, **font weight**,\n**line height**, and **letter spacing**. Use a semantic style (`body`, `h1`,\n`caption1`, etc.) rather than hand-picking values so rhythm stays consistent\nand future changes cascade automatically.\n\nFont family: **Inter** (loaded from Google Fonts), exposed as\n`var(--font-family-heading)` and `var(--font-family-body)`."}}},argTypes:{style:{control:"select",options:Object.keys(h),description:"Semantic text style.",table:{category:"Token"}},weight:{control:"select",options:Object.keys(o),description:"Font weight.",table:{category:"Token"}},sample:{control:"text",description:"Preview text.",table:{category:"Content"}}}};function G({style:n,weight:t,sample:a}){const i=h[n],v=`font-size: var(--font-size-${i.sizeKey});
line-height: var(${y[i.lineHeightKey]});
font-weight: var(--font-weight-${t});`;return e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-2xl)",overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:"48px 40px",background:"linear-gradient(180deg, var(--color-neutral-25) 0%, var(--color-white) 100%)"},children:e.jsx("div",{style:{fontFamily:"var(--font-family-heading)",fontSize:i.sizePx,lineHeight:`${i.lineHeightPx}px`,fontWeight:o[t],textDecoration:i.decoration??"none",color:"var(--color-neutral-900)"},children:a})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderTop:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-25)"},children:[e.jsx(u,{label:"Style",value:i.name}),e.jsx(u,{label:"Font size",value:`${i.sizePx}px`,mono:!0,divider:!0}),e.jsx(u,{label:"Line height",value:`${i.lineHeightPx}px`,mono:!0,divider:!0})]})]}),e.jsx("div",{style:{marginTop:20},children:e.jsx(m,{searchable:!1,title:"Copy-ready CSS",rows:[{name:`${i.name} / ${t}`,value:`${i.sizePx}px · ${i.lineHeightPx}px · ${o[t]}`,cssVar:v}]})})]})}const u=({label:n,value:t,mono:a,divider:i})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:i?"1px solid var(--color-neutral-200)":"none"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:"var(--space-1)"},children:n}),e.jsx("div",{style:{fontFamily:a?"var(--font-family-body)":"inherit",fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:t})]}),p={args:{style:"h1",weight:"semibold",sample:"The quick brown fox jumps over the lazy dog"},parameters:{docs:{disable:!0}}},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(g,{title:"Font size scale",description:"Every font-size token, smallest to largest. Each row shows a live Aa preview alongside the CSS variable.",meta:[{label:"steps",value:"8"},{label:"range",value:"10 → 32 px"}]}),e.jsx(m,{rows:Object.entries(D).map(([n,t])=>({name:`fontSize.${n}`,value:`${t}px`,cssVar:`var(--font-size-${n})`,preview:e.jsx("span",{style:{fontSize:t,fontFamily:"var(--font-family-heading)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",lineHeight:1},children:"Aa"})})),previewHeader:"Preview",valueHeader:"Size"})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(g,{title:"Line heights",description:"Absolute line heights per text tier. Pair each font-size step with its matching line-height for correct rhythm.",meta:[{label:"tokens",value:"8"}]}),e.jsx(m,{rows:Object.entries(I).map(([n,t])=>({name:`lineHeight.${n}`,value:`${t}px`,cssVar:`var(${y[n]})`,preview:e.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",width:t,height:8,borderRadius:"var(--radius-xxs)",background:"var(--color-ep-500)"}})})),previewHeader:"Preview",valueHeader:"Value"})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(g,{title:"Text styles",description:"Every semantic style paired with every supported weight. Copy a ready-to-paste CSS snippet from any row.",meta:[{label:"styles",value:String(Object.keys(h).length)},{label:"weights",value:String(Object.keys(o).length)}]}),e.jsxs(_,{kind:"tip",children:["Prefer semantic styles (",e.jsx("code",{children:"body"}),", ",e.jsx("code",{children:"h1"}),","," ",e.jsx("code",{children:"caption1"}),") over hand-picking font-size and line-height. Swapping a style later is one edit; swapping a magic number is many."]}),e.jsx("div",{style:{height:24}}),Object.entries(h).map(([n,t])=>e.jsx(N,{title:t.name,description:e.jsxs(e.Fragment,{children:[e.jsxs("code",{children:[t.sizePx,"px"]})," ·"," ",e.jsxs("code",{children:["line-height: ",t.lineHeightPx,"px"]})," · weights:"," ",t.weights.join(", "),t.decoration?` · ${t.decoration}`:""]}),children:e.jsx("div",{style:{display:"grid",gap:10},children:t.weights.map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",alignItems:"center",gap:"var(--space-4)",padding:"14px 18px",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",background:"var(--color-white)"},children:[e.jsxs("span",{style:{fontFamily:"var(--font-family-heading)",fontSize:t.sizePx,lineHeight:`${t.lineHeightPx}px`,fontWeight:o[a],textDecoration:t.decoration??"none",color:"var(--color-neutral-900)",minWidth:0},children:[t.name," · ",a]}),e.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-neutral-600)",whiteSpace:"nowrap"},children:[t.sizePx,"px / ",t.lineHeightPx,"px · ",o[a]]}),e.jsx(q,{value:`font-size: var(--font-size-${t.sizeKey}); line-height: var(${y[t.lineHeightKey]}); font-weight: var(--font-weight-${a});`,label:"Copy CSS",variant:"solid"})]},a))})},n))]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(g,{title:"Font weights",description:"Four weights map to CSS numeric values. Apply via var(--font-weight-<key>).",meta:[{label:"weights",value:"4"}]}),e.jsx(m,{rows:Object.entries(o).map(([n,t])=>({name:`fontWeight.${n}`,value:String(t),cssVar:`var(--font-weight-${n})`,preview:e.jsx("span",{style:{fontFamily:"var(--font-family-heading)",fontWeight:t,fontSize:"var(--font-size-4)",color:"var(--color-neutral-900)"},children:"Aa"})})),previewHeader:"Preview",valueHeader:"Weight"})]})};var f,x,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    style: "h1",
    weight: "semibold",
    sample: "The quick brown fox jumps over the lazy dog"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,S,j,z,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      <PageHeader title="Font size scale" description="Every font-size token, smallest to largest. Each row shows a live Aa preview alongside the CSS variable." meta={[{
      label: "steps",
      value: "8"
    }, {
      label: "range",
      value: "10 → 32 px"
    }]} />
      <TokenTable rows={Object.entries(fontSize).map(([key, value]) => ({
      name: \`fontSize.\${key}\`,
      value: \`\${value}px\`,
      cssVar: \`var(--font-size-\${key})\`,
      preview: <span style={{
        fontSize: value,
        fontFamily: "var(--font-family-heading)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-900)",
        lineHeight: 1
      }}>
              Aa
            </span>
    }))} previewHeader="Preview" valueHeader="Size" />
    </div>
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Every font-size step and what it maps to.",...(k=(z=s.parameters)==null?void 0:z.docs)==null?void 0:k.description}}};var H,P,$,W,C;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      <PageHeader title="Line heights" description="Absolute line heights per text tier. Pair each font-size step with its matching line-height for correct rhythm." meta={[{
      label: "tokens",
      value: "8"
    }]} />
      <TokenTable rows={Object.entries(lineHeight).map(([key, value]) => ({
      name: \`lineHeight.\${key}\`,
      value: \`\${value}px\`,
      cssVar: \`var(\${lineHeightCssName[key as keyof typeof lineHeight]})\`,
      preview: <span aria-hidden style={{
        display: "inline-block",
        width: value,
        height: 8,
        borderRadius: "var(--radius-xxs)",
        background: "var(--color-ep-500)"
      }} />
    }))} previewHeader="Preview" valueHeader="Value" />
    </div>
}`,...($=(P=l.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:"Line-height tokens.",...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.description}}};var T,F,O,A,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      <PageHeader title="Text styles" description="Every semantic style paired with every supported weight. Copy a ready-to-paste CSS snippet from any row." meta={[{
      label: "styles",
      value: String(Object.keys(textStyles).length)
    }, {
      label: "weights",
      value: String(Object.keys(fontWeight).length)
    }]} />
      <Callout kind="tip">
        Prefer semantic styles (<code>body</code>, <code>h1</code>,{" "}
        <code>caption1</code>) over hand-picking font-size and line-height.
        Swapping a style later is one edit; swapping a magic number is many.
      </Callout>
      <div style={{
      height: 24
    }} />
      {Object.entries(textStyles).map(([key, token]) => <Section key={key} title={token.name} description={<>
              <code>{token.sizePx}px</code> ·{" "}
              <code>line-height: {token.lineHeightPx}px</code> · weights:{" "}
              {token.weights.join(", ")}
              {token.decoration ? \` · \${token.decoration}\` : ""}
            </>}>
          <div style={{
        display: "grid",
        gap: 10
      }}>
            {token.weights.map(w => <div key={w} style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          alignItems: "center",
          gap: "var(--space-4)",
          padding: "14px 18px",
          border: "1px solid var(--color-neutral-200)",
          borderRadius: "var(--radius-lg)",
          background: "var(--color-white)"
        }}>
                <span style={{
            fontFamily: "var(--font-family-heading)",
            fontSize: token.sizePx,
            lineHeight: \`\${token.lineHeightPx}px\`,
            fontWeight: fontWeight[w],
            textDecoration: token.decoration ?? "none",
            color: "var(--color-neutral-900)",
            minWidth: 0
          }}>
                  {token.name} · {w}
                </span>
                <span style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "var(--font-size-1)",
            color: "var(--color-neutral-600)",
            whiteSpace: "nowrap"
          }}>
                  {token.sizePx}px / {token.lineHeightPx}px · {fontWeight[w]}
                </span>
                <CopyButton value={\`font-size: var(--font-size-\${token.sizeKey}); line-height: var(\${lineHeightCssName[token.lineHeightKey]}); font-weight: var(--font-weight-\${w});\`} label="Copy CSS" variant="solid" />
              </div>)}
          </div>
        </Section>)}
    </div>
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"All semantic text styles rendered with every available weight.",...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var L,V,R,B,K;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      <PageHeader title="Font weights" description="Four weights map to CSS numeric values. Apply via var(--font-weight-<key>)." meta={[{
      label: "weights",
      value: "4"
    }]} />
      <TokenTable rows={Object.entries(fontWeight).map(([key, value]) => ({
      name: \`fontWeight.\${key}\`,
      value: String(value),
      cssVar: \`var(--font-weight-\${key})\`,
      preview: <span style={{
        fontFamily: "var(--font-family-heading)",
        fontWeight: value,
        fontSize: "var(--font-size-4)",
        color: "var(--color-neutral-900)"
      }}>
              Aa
            </span>
    }))} previewHeader="Preview" valueHeader="Weight" />
    </div>
}`,...(R=(V=c.parameters)==null?void 0:V.docs)==null?void 0:R.source},description:{story:"Font weight reference.",...(K=(B=c.parameters)==null?void 0:B.docs)==null?void 0:K.description}}};const te=["Playground","Scale","LineHeights","Styles","Weights"];export{l as LineHeights,p as Playground,s as Scale,d as Styles,c as Weights,te as __namedExportsOrder,ee as default};
