import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as R,S as P}from"./Section-BQ38l4e0.js";import{C as W,a as A}from"./CopyButton-DCKFQ-eI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C={none:0,xxs:2,xs:4,sm:6,md:8,lg:10,xl:12,"2xl":16,"3xl":20,"4xl":24,full:9999},p=["none","xxs","xs","sm","md","lg","xl","2xl","3xl","4xl","full"],T=r=>r===0?"0rem":`${(r/16).toFixed(3).replace(/\.?0+$/,"")}rem`,O={title:"Foundation/Radius",component:B,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Border radius tokens define how rounded a corner is. The scale ranges from\n**none** (sharp) through **4xl** (very rounded), plus **full** for pills\nand circles.\n\nPrefer semantic sizes for new components (inputs use `md`, cards use\n`xl`, modals use `2xl`) rather than hand-picking a pixel value."}}},argTypes:{size:{control:"select",options:p,description:"Radius token.",table:{category:"Token"}}}};function B({size:r}){const n=C[r],a=`var(--radius-${r})`;return e.jsx("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-2xl)",overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:"var(--space-12)",background:"repeating-linear-gradient(45deg, var(--color-neutral-25) 0 8px, var(--color-neutral-50) 8px 16px)",display:"flex",justifyContent:"center"},children:e.jsx("div",{"aria-label":`radius-${r} preview`,style:{width:280,height:140,background:"var(--color-ep-50)",border:"2px solid var(--color-ep-500)",borderRadius:n}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",borderTop:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-25)"},children:[e.jsx(d,{label:"Token",value:`radius-${r}`}),e.jsx(d,{label:"Pixels",value:`${n}px`,mono:!0,divider:!0}),e.jsx(d,{label:"Rem (16px base)",value:r==="full"?"∞":T(n),mono:!0,divider:!0}),e.jsx(d,{label:"CSS variable",value:a,mono:!0,divider:!0})]})]})})}const d=({label:r,value:n,mono:a,divider:u})=>e.jsxs("div",{style:{padding:"14px 16px",borderLeft:u?"1px solid var(--color-neutral-200)":"none"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:"var(--space-1)"},children:r}),e.jsx("div",{style:{fontFamily:a?"var(--font-family-body)":"inherit",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",wordBreak:"break-all"},children:n})]}),i={args:{size:"md"},parameters:{docs:{disable:!0}}},s={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(R,{title:"Border radius",description:"Rounding scale from sharp to fully rounded. Every row shows a corner preview at the true pixel value.",meta:[{label:"tokens",value:String(p.length)},{label:"range",value:"0 → 24 px · full"}]}),e.jsx("div",{style:{overflow:"auto",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-xl)",background:"var(--color-white)",boxShadow:"var(--shadow-xs)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:"var(--font-size-1)",color:"var(--color-neutral-900)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-50)",textAlign:"left"},children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:o,children:"Size (16px base)"}),e.jsx("th",{style:o,children:"Pixels"}),e.jsx("th",{style:o,children:"Radius"}),e.jsx("th",{style:{...o,width:1},"aria-label":"Actions"})]})}),e.jsx("tbody",{children:p.map((r,n)=>{const a=C[r],u=`var(--radius-${r})`;return e.jsxs("tr",{style:{background:n%2===0?"var(--color-white)":"var(--color-neutral-25)"},children:[e.jsx("td",{style:l,children:e.jsxs("code",{style:c,children:["radius-",r]})}),e.jsx("td",{style:l,children:e.jsx("code",{style:c,children:r==="full"?"∞":T(a)})}),e.jsx("td",{style:l,children:e.jsxs("code",{style:c,children:[a,"px"]})}),e.jsx("td",{style:l,children:e.jsx($,{value:a})}),e.jsx("td",{style:{...l,textAlign:"right"},children:e.jsx(W,{value:u,label:"Copy",variant:"ghost"})})]},r)})})]})})]})},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(R,{title:"Usage guide",description:"Rules of thumb for when to reach for each size. Keep radii consistent within a surface so nested shapes feel related."}),e.jsxs(A,{kind:"tip",title:"Nested radii",children:["When one rounded surface sits inside another, the inner radius should be smaller than the outer. A card at ",e.jsx("code",{children:"radius-xl"})," (12px) with an avatar at ",e.jsx("code",{children:"radius-lg"})," (10px) will feel balanced."]}),e.jsx("div",{style:{height:24}}),e.jsx(P,{title:"Recommended pairings",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"var(--space-3-5)"},children:[{token:"radius-none",use:"Tables, data grids, full-bleed bars"},{token:"radius-xs",use:"Tiny chips, tags, inline pills"},{token:"radius-sm",use:"Checkboxes, small badges"},{token:"radius-md",use:"Inputs, buttons, selects"},{token:"radius-lg",use:"Menus, dropdowns, toasts"},{token:"radius-xl",use:"Cards, list items, popovers"},{token:"radius-2xl",use:"Modals, sheets, large containers"},{token:"radius-3xl",use:"Hero sections, marketing cards"},{token:"radius-4xl",use:"Decorative hero tiles"},{token:"radius-full",use:"Pills, avatars, circular buttons"}].map(r=>e.jsxs("div",{style:{padding:"14px 16px",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-xl)",background:"var(--color-white)",boxShadow:"var(--shadow-xs)",display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("code",{style:{...c,alignSelf:"flex-start",background:"var(--color-ep-50)",borderColor:"var(--color-ep-200)",color:"var(--color-ep-800)"},children:r.token}),e.jsx("div",{style:{fontSize:"var(--font-size-1)",color:"var(--color-neutral-700)"},children:r.use})]},r.token))})})]})},$=({value:r})=>{const a=Math.min(r,72);return e.jsx("div",{"aria-hidden":!0,style:{width:72,height:72/2,overflow:"hidden"},children:e.jsx("div",{style:{width:72,height:72,background:"var(--color-ep-50)",border:"2px solid var(--color-ep-500)",borderTopLeftRadius:a}})})},o={padding:"11px 16px",fontWeight:"var(--font-weight-semibold)",fontSize:"var(--font-size-0)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-600)",borderBottom:"1px solid var(--color-neutral-200)",whiteSpace:"nowrap"},l={padding:"14px 16px",verticalAlign:"middle",borderBottom:"1px solid var(--color-neutral-100)"},c={fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-neutral-800)",background:"var(--color-neutral-50)",padding:"4px 8px",borderRadius:"var(--radius-xs)",border:"1px solid var(--color-neutral-200)",display:"inline-block"};var x,h,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,m,y,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <PageHeader title="Border radius" description="Rounding scale from sharp to fully rounded. Every row shows a corner preview at the true pixel value." meta={[{
      label: "tokens",
      value: String(radiusOrder.length)
    }, {
      label: "range",
      value: "0 → 24 px · full"
    }]} />

      <div style={{
      overflow: "auto",
      border: "1px solid var(--color-neutral-200)",
      borderRadius: "var(--radius-xl)",
      background: "var(--color-white)",
      boxShadow: "var(--shadow-xs)"
    }}>
        <table style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
        fontSize: "var(--font-size-1)",
        color: "var(--color-neutral-900)"
      }}>
          <thead>
            <tr style={{
            background: "var(--color-neutral-50)",
            textAlign: "left"
          }}>
              <th style={th}>Token</th>
              <th style={th}>Size (16px base)</th>
              <th style={th}>Pixels</th>
              <th style={th}>Radius</th>
              <th style={{
              ...th,
              width: 1
            }} aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {radiusOrder.map((key, i) => {
            const value = radius[key];
            const cssVar = \`var(--radius-\${key})\`;
            return <tr key={key} style={{
              background: i % 2 === 0 ? "var(--color-white)" : "var(--color-neutral-25)"
            }}>
                  <td style={td}>
                    <code style={codeStyle}>radius-{key}</code>
                  </td>
                  <td style={td}>
                    <code style={codeStyle}>
                      {key === "full" ? "∞" : pxToRem(value)}
                    </code>
                  </td>
                  <td style={td}>
                    <code style={codeStyle}>{value}px</code>
                  </td>
                  <td style={td}>
                    <RadiusCorner value={value} />
                  </td>
                  <td style={{
                ...td,
                textAlign: "right"
              }}>
                    <CopyButton value={cssVar} label="Copy" variant="ghost" />
                  </td>
                </tr>;
          })}
          </tbody>
        </table>
      </div>
    </div>
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"Full radius scale as a reference table.",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var k,w,j,S,z;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <PageHeader title="Usage guide" description="Rules of thumb for when to reach for each size. Keep radii consistent within a surface so nested shapes feel related." />

      <Callout kind="tip" title="Nested radii">
        When one rounded surface sits inside another, the inner radius should
        be smaller than the outer. A card at <code>radius-xl</code> (12px) with
        an avatar at <code>radius-lg</code> (10px) will feel balanced.
      </Callout>
      <div style={{
      height: 24
    }} />

      <Section title="Recommended pairings">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "var(--space-3-5)"
      }}>
          {[{
          token: "radius-none",
          use: "Tables, data grids, full-bleed bars"
        }, {
          token: "radius-xs",
          use: "Tiny chips, tags, inline pills"
        }, {
          token: "radius-sm",
          use: "Checkboxes, small badges"
        }, {
          token: "radius-md",
          use: "Inputs, buttons, selects"
        }, {
          token: "radius-lg",
          use: "Menus, dropdowns, toasts"
        }, {
          token: "radius-xl",
          use: "Cards, list items, popovers"
        }, {
          token: "radius-2xl",
          use: "Modals, sheets, large containers"
        }, {
          token: "radius-3xl",
          use: "Hero sections, marketing cards"
        }, {
          token: "radius-4xl",
          use: "Decorative hero tiles"
        }, {
          token: "radius-full",
          use: "Pills, avatars, circular buttons"
        }].map(item => <div key={item.token} style={{
          padding: "14px 16px",
          border: "1px solid var(--color-neutral-200)",
          borderRadius: "var(--radius-xl)",
          background: "var(--color-white)",
          boxShadow: "var(--shadow-xs)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)"
        }}>
              <code style={{
            ...codeStyle,
            alignSelf: "flex-start",
            background: "var(--color-ep-50)",
            borderColor: "var(--color-ep-200)",
            color: "var(--color-ep-800)"
          }}>
                {item.token}
              </code>
              <div style={{
            fontSize: "var(--font-size-1)",
            color: "var(--color-neutral-700)"
          }}>
                {item.use}
              </div>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"Suggested usage per component type.",...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};const U=["Playground","Scale","UsageGuide"];export{i as Playground,s as Scale,t as UsageGuide,U as __namedExportsOrder,O as default};
