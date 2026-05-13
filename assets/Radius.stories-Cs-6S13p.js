import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as C,S as P}from"./Section-CEDxe_IL.js";import{C as W,a as A}from"./CopyButton-91Z7xjo1.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={none:0,xxs:2,xs:4,sm:6,md:8,lg:10,xl:12,"2xl":16,"3xl":20,"4xl":24,full:9999},p=["none","xxs","xs","sm","md","lg","xl","2xl","3xl","4xl","full"],z=r=>r===0?"0rem":`${(r/16).toFixed(3).replace(/\.?0+$/,"")}rem`,O={title:"Foundation/Radius",component:B,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Border radius tokens define how rounded a corner is. The scale ranges from\n**none** (sharp) through **4xl** (very rounded), plus **full** for pills\nand circles.\n\nPrefer semantic sizes for new components (inputs use `md`, cards use\n`xl`, modals use `2xl`) rather than hand-picking a pixel value."}}},argTypes:{size:{control:"select",options:p,description:"Radius token.",table:{category:"Token"}}}};function B({size:r}){const s=T[r],n=`var(--radius-${r})`;return e.jsx("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:16,overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{style:{padding:56,background:"repeating-linear-gradient(45deg, var(--color-neutral-25) 0 8px, var(--color-neutral-50) 8px 16px)",display:"flex",justifyContent:"center"},children:e.jsx("div",{"aria-label":`radius-${r} preview`,style:{width:280,height:140,background:"var(--color-ep-50)",border:"2px solid var(--color-ep-500)",borderRadius:s}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",borderTop:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-25)"},children:[e.jsx(d,{label:"Token",value:`radius-${r}`}),e.jsx(d,{label:"Pixels",value:`${s}px`,mono:!0,divider:!0}),e.jsx(d,{label:"Rem (16px base)",value:r==="full"?"∞":z(s),mono:!0,divider:!0}),e.jsx(d,{label:"CSS variable",value:n,mono:!0,divider:!0})]})]})})}const d=({label:r,value:s,mono:n,divider:u})=>e.jsxs("div",{style:{padding:"14px 16px",borderLeft:u?"1px solid var(--color-neutral-200)":"none"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:4},children:r}),e.jsx("div",{style:{fontFamily:n?"var(--sb-font-mono)":"inherit",fontSize:13,fontWeight:600,color:"var(--color-neutral-900)",wordBreak:"break-all"},children:s})]}),i={args:{size:"md"},parameters:{docs:{disable:!0}}},o={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(C,{title:"Border radius",description:"Rounding scale from sharp to fully rounded. Every row shows a corner preview at the true pixel value.",meta:[{label:"tokens",value:String(p.length)},{label:"range",value:"0 → 24 px · full"}]}),e.jsx("div",{style:{overflow:"auto",border:"1px solid var(--color-neutral-200)",borderRadius:12,background:"var(--color-white)",boxShadow:"var(--shadow-xs)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:13,color:"var(--color-neutral-900)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--color-neutral-50)",textAlign:"left"},children:[e.jsx("th",{style:t,children:"Token"}),e.jsx("th",{style:t,children:"Size (16px base)"}),e.jsx("th",{style:t,children:"Pixels"}),e.jsx("th",{style:t,children:"Radius"}),e.jsx("th",{style:{...t,width:1},"aria-label":"Actions"})]})}),e.jsx("tbody",{children:p.map((r,s)=>{const n=T[r],u=`var(--radius-${r})`;return e.jsxs("tr",{style:{background:s%2===0?"var(--color-white)":"var(--color-neutral-25)"},children:[e.jsx("td",{style:l,children:e.jsxs("code",{style:c,children:["radius-",r]})}),e.jsx("td",{style:l,children:e.jsx("code",{style:c,children:r==="full"?"∞":z(n)})}),e.jsx("td",{style:l,children:e.jsxs("code",{style:c,children:[n,"px"]})}),e.jsx("td",{style:l,children:e.jsx($,{value:n})}),e.jsx("td",{style:{...l,textAlign:"right"},children:e.jsx(W,{value:u,label:"Copy",variant:"ghost"})})]},r)})})]})})]})},a={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(C,{title:"Usage guide",description:"Rules of thumb for when to reach for each size. Keep radii consistent within a surface so nested shapes feel related."}),e.jsxs(A,{kind:"tip",title:"Nested radii",children:["When one rounded surface sits inside another, the inner radius should be smaller than the outer. A card at ",e.jsx("code",{children:"radius-xl"})," (12px) with an avatar at ",e.jsx("code",{children:"radius-lg"})," (10px) will feel balanced."]}),e.jsx("div",{style:{height:24}}),e.jsx(P,{title:"Recommended pairings",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},children:[{token:"radius-none",use:"Tables, data grids, full-bleed bars"},{token:"radius-xs",use:"Tiny chips, tags, inline pills"},{token:"radius-sm",use:"Checkboxes, small badges"},{token:"radius-md",use:"Inputs, buttons, selects"},{token:"radius-lg",use:"Menus, dropdowns, toasts"},{token:"radius-xl",use:"Cards, list items, popovers"},{token:"radius-2xl",use:"Modals, sheets, large containers"},{token:"radius-3xl",use:"Hero sections, marketing cards"},{token:"radius-4xl",use:"Decorative hero tiles"},{token:"radius-full",use:"Pills, avatars, circular buttons"}].map(r=>e.jsxs("div",{style:{padding:"14px 16px",border:"1px solid var(--color-neutral-200)",borderRadius:12,background:"var(--color-white)",boxShadow:"var(--shadow-xs)",display:"flex",flexDirection:"column",gap:8},children:[e.jsx("code",{style:{...c,alignSelf:"flex-start",background:"var(--color-ep-50)",borderColor:"var(--color-ep-200)",color:"var(--color-ep-800)"},children:r.token}),e.jsx("div",{style:{fontSize:13,color:"var(--color-neutral-700)"},children:r.use})]},r.token))})})]})},$=({value:r})=>{const n=Math.min(r,72);return e.jsx("div",{"aria-hidden":!0,style:{width:72,height:72/2,overflow:"hidden"},children:e.jsx("div",{style:{width:72,height:72,background:"var(--color-ep-50)",border:"2px solid var(--color-ep-500)",borderTopLeftRadius:n}})})},t={padding:"11px 16px",fontWeight:600,fontSize:11,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-600)",borderBottom:"1px solid var(--color-neutral-200)",whiteSpace:"nowrap"},l={padding:"14px 16px",verticalAlign:"middle",borderBottom:"1px solid var(--color-neutral-100)"},c={fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:12,color:"var(--color-neutral-800)",background:"var(--color-neutral-50)",padding:"4px 8px",borderRadius:4,border:"1px solid var(--color-neutral-200)",display:"inline-block"};var h,x,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,m,y,b,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      borderRadius: 12,
      background: "var(--color-white)",
      boxShadow: "var(--shadow-xs)"
    }}>
        <table style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
        fontSize: 13,
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
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"Full radius scale as a reference table.",...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var k,j,w,S,R;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        gap: 14
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
          borderRadius: 12,
          background: "var(--color-white)",
          boxShadow: "var(--shadow-xs)",
          display: "flex",
          flexDirection: "column",
          gap: 8
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
            fontSize: 13,
            color: "var(--color-neutral-700)"
          }}>
                {item.use}
              </div>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"Suggested usage per component type.",...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};const U=["Playground","Scale","UsageGuide"];export{i as Playground,o as Scale,a as UsageGuide,U as __namedExportsOrder,O as default};
