import{j as e}from"./jsx-runtime-BYYWji4R.js";import{P as w,S as R}from"./Section-CEDxe_IL.js";import{a as T}from"./CopyButton-DMuNKf-I.js";import{T as E}from"./TokenTable-C3PumEs-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={0:0,"0.5":2,1:4,"1.5":6,2:8,3:12,4:16,5:20,6:24,8:32,10:40,12:48,16:64,20:80,24:96,32:128,40:160,48:192,56:224,64:256,80:320,96:384,120:480,140:560,160:640,180:720,192:768,256:1024,320:1280,360:1440,400:1600,480:1920},c=Object.entries(o).sort(([,a],[,r])=>a-r),V={title:"Foundation/Spacing",component:H,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`A 4px scale with half-steps at the small end. Use spacing tokens for
padding, margin, and gap so layout rhythm stays consistent across the
product.`}}},argTypes:{token:{control:"select",options:c.map(([a])=>a),description:"Spacing token key.",table:{category:"Token"}},axis:{control:"radio",options:["horizontal","vertical"],description:"Direction of the visual ruler.",table:{category:"Preview"}}}};function H({token:a,axis:r}){const n=o[a],l=`var(--space-${String(a).replace(".","-")})`;return e.jsx("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:16,overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{"aria-label":`Spacing ${n}px preview`,style:{display:"flex",alignItems:"center",justifyContent:"center",padding:40,background:"repeating-linear-gradient(45deg, var(--color-neutral-25) 0 8px, var(--color-neutral-50) 8px 16px)",minHeight:r==="vertical"?240:120},children:e.jsx("div",{style:{background:"var(--color-ep-500)",width:r==="horizontal"?n:6,height:r==="vertical"?n:18,borderRadius:3,boxShadow:"var(--shadow-sm)"}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderTop:"1px solid var(--color-neutral-200)"},children:[e.jsx(d,{label:"Token",value:`spacing.${String(a)}`}),e.jsx(d,{label:"Value",value:`${n}px`,mono:!0,divider:!0}),e.jsx(d,{label:"CSS variable",value:l,mono:!0,divider:!0})]})]})})}const d=({label:a,value:r,mono:n,divider:l})=>e.jsxs("div",{style:{padding:"16px 20px",borderLeft:l?"1px solid var(--color-neutral-200)":"none",background:"var(--color-neutral-25)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:4},children:a}),e.jsx("div",{style:{fontFamily:n?"var(--sb-font-mono)":"inherit",fontSize:14,fontWeight:600,color:"var(--color-neutral-900)",wordBreak:"break-all"},children:r})]}),s={args:{token:4,axis:"horizontal"},parameters:{docs:{disable:!0}}},t={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(w,{title:"Spacing scale",description:"A 4px scale with half-steps at the small end. Bars are truncated at 200px for layout purposes.",meta:[{label:"tokens",value:String(c.length)},{label:"range",value:"0 → 1920 px"}]}),e.jsxs(T,{kind:"tip",title:"Naming convention",children:["Half-steps keep their Figma name (",e.jsx("code",{children:"0.5"}),", ",e.jsx("code",{children:"1.5"}),"), integer steps match the 4px multiplier. CSS variables use a hyphen in place of the dot, e.g. ",e.jsx("code",{children:"var(--space-0-5)"}),"."]}),e.jsx("div",{style:{height:24}}),e.jsx(E,{rows:c.map(([a,r])=>({name:`spacing.${a}`,value:`${r}px`,cssVar:`var(--space-${String(a).replace(".","-")})`,preview:e.jsx("div",{"aria-hidden":!0,style:{display:"flex",alignItems:"center",gap:8,minWidth:220},children:e.jsx("div",{style:{background:"var(--color-ep-500)",width:Math.min(r,200),height:10,borderRadius:2}})})})),previewHeader:"Ruler",valueHeader:"Value"})]})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:32,maxWidth:1200,margin:"0 auto"},children:[e.jsx(w,{title:"Layout example",description:"A card using spacing tokens directly. Every inset, gap, and margin is a variable — nothing is magic."}),e.jsx(R,{title:"Stack and inline",children:e.jsx("div",{style:{padding:"var(--space-6)",background:"var(--color-white)",border:"1px solid var(--color-neutral-200)",borderRadius:12,boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[4,8,12,16,24].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{style:{width:o[a],height:16,background:"var(--color-ep-500)",borderRadius:2}}),e.jsxs("code",{style:{fontFamily:"var(--sb-font-mono)",fontSize:12,color:"var(--color-neutral-700)"},children:["var(--space-",a,") → ",o[a],"px"]})]},a))})})]})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    token: 4,
    axis: "horizontal"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,v,h,x,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <PageHeader title="Spacing scale" description="A 4px scale with half-steps at the small end. Bars are truncated at 200px for layout purposes." meta={[{
      label: "tokens",
      value: String(spacingEntries.length)
    }, {
      label: "range",
      value: "0 → 1920 px"
    }]} />

      <Callout kind="tip" title="Naming convention">
        Half-steps keep their Figma name (<code>0.5</code>, <code>1.5</code>),
        integer steps match the 4px multiplier. CSS variables use a hyphen in
        place of the dot, e.g. <code>var(--space-0-5)</code>.
      </Callout>
      <div style={{
      height: 24
    }} />

      <TokenTable rows={spacingEntries.map(([key, value]) => ({
      name: \`spacing.\${key}\`,
      value: \`\${value}px\`,
      cssVar: \`var(--space-\${String(key).replace(".", "-")})\`,
      preview: <div aria-hidden style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 220
      }}>
              <div style={{
          background: "var(--color-ep-500)",
          width: Math.min(value, 200),
          height: 10,
          borderRadius: 2
        }} />
            </div>
    }))} previewHeader="Ruler" valueHeader="Value" />
    </div>
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"Full spacing scale with a visual ruler.",...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var b,f,S,k,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      <PageHeader title="Layout example" description="A card using spacing tokens directly. Every inset, gap, and margin is a variable — nothing is magic." />
      <Section title="Stack and inline">
        <div style={{
        padding: "var(--space-6)",
        background: "var(--color-white)",
        border: "1px solid var(--color-neutral-200)",
        borderRadius: 12,
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }}>
          {([4, 8, 12, 16, 24] as const).map(key => <div key={key} style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)"
        }}>
              <div style={{
            width: spacing[key],
            height: 16,
            background: "var(--color-ep-500)",
            borderRadius: 2
          }} />
              <code style={{
            fontFamily: "var(--sb-font-mono)",
            fontSize: 12,
            color: "var(--color-neutral-700)"
          }}>
                var(--space-{key}) → {spacing[key]}px
              </code>
            </div>)}
        </div>
      </Section>
    </div>
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:"Example layout using real tokens.",...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};const A=["Playground","Scale","LayoutExample"];export{i as LayoutExample,s as Playground,t as Scale,A as __namedExportsOrder,V as default};
