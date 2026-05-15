import{j as r}from"./jsx-runtime-BYYWji4R.js";import{P as E,S as k}from"./Section-BQ38l4e0.js";import{a as O,C as _}from"./CopyButton-DCKFQ-eI.js";import{T as f}from"./TokenTable-DL_AOmtC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p=.6,b="#ffffff",u="#000000",y={sm:{size:"sm",blur:8,opacity:p,tint:{light:b,dark:u}},md:{size:"md",blur:16,opacity:p,tint:{light:b,dark:u}},lg:{size:"lg",blur:24,opacity:p,tint:{light:b,dark:u}},xl:{size:"xl",blur:40,opacity:p,tint:{light:b,dark:u}}},w=(e,a)=>{const n=e.replace("#",""),o=n.length===3?n.split("").map(c=>c+c).join(""):n,t=parseInt(o,16),i=t>>16&255,m=t>>8&255,s=t&255;return`rgba(${i}, ${m}, ${s}, ${a})`},j=["sm","md","lg","xl"],q={title:"Foundation/Effects/Backdrop Blur",component:G,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Backdrop blur creates a frosted-glass effect for panels, sheets, and
overlays placed over content (photos, video, colored backgrounds).

Each token pairs a **blur radius** with a theme-specific **tint + opacity**.
Use the light tint on light-mode surfaces, the dark tint on dark-mode
surfaces. The blur radius stays the same across themes — only the tint
flips.`}}},argTypes:{size:{control:"select",options:j,description:"Blur size token.",table:{category:"Token"}},theme:{control:"radio",options:["light","dark"],description:"Theme tint to apply.",table:{category:"Token"}},label:{control:"text",description:"Card label.",table:{category:"Content"}}}},h="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80";function G({size:e,theme:a,label:n}){const o=y[e],i=`background: ${w(o.tint[a],o.opacity)};
backdrop-filter: blur(var(--backdrop-blur-${e}));
-webkit-backdrop-filter: blur(var(--backdrop-blur-${e}));`;return r.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[r.jsxs("div",{style:{borderRadius:"var(--radius-2xl)",overflow:"hidden",border:"1px solid var(--color-neutral-200)",boxShadow:"var(--shadow-sm)"},children:[r.jsx("div",{style:{padding:"var(--space-10)",backgroundImage:`url(${h})`,backgroundSize:"cover",backgroundPosition:"center",minHeight:280,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(x,{theme:a,size:e,label:n})}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",background:"var(--color-neutral-25)",borderTop:"1px solid var(--color-neutral-200)"},children:[r.jsx(g,{label:"Token",value:`backdrop-blur-${e}`}),r.jsx(g,{label:"Blur",value:`${o.blur}px`,mono:!0,divider:!0}),r.jsx(g,{label:"Opacity",value:`${Math.round(o.opacity*100)}%`,mono:!0,divider:!0}),r.jsx(g,{label:"Theme",value:a,mono:!0,divider:!0})]})]}),r.jsx("div",{style:{marginTop:20},children:r.jsx(f,{searchable:!1,title:"Copy-ready CSS",rows:[{name:`backdrop-blur-${e}`,value:`${o.blur}px · ${a}`,cssVar:i}]})})]})}const g=({label:e,value:a,mono:n,divider:o})=>r.jsxs("div",{style:{padding:"14px 16px",borderLeft:o?"1px solid var(--color-neutral-200)":"none"},children:[r.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:"var(--space-1)"},children:e}),r.jsx("div",{style:{fontFamily:n?"var(--font-family-body)":"inherit",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",textTransform:n&&e==="Theme"?"capitalize":"none"},children:a})]}),x=({size:e,theme:a,label:n})=>{const o=y[e],t=o.tint[a],i=w(t,o.opacity),m=a==="light"?"#181d27":"#fafafa",s=a==="light"?"#535862":"#cecfd2",c=a==="light"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.08)";return r.jsxs("div",{style:{width:"100%",maxWidth:420,padding:"22px 24px",borderRadius:"var(--radius-xl)",background:i,border:`1px solid ${c}`,backdropFilter:`blur(${o.blur}px)`,WebkitBackdropFilter:`blur(${o.blur}px)`,color:m,boxShadow:a==="light"?"0 8px 24px -6px rgba(10,13,18,0.25)":"0 8px 24px -6px rgba(0,0,0,0.5)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:28,gap:"var(--space-3)"},children:[r.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)"},children:n??`backdrop-blur-${e}`}),r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--space-1-5)",fontSize:"var(--font-size-1)",color:s,fontWeight:"var(--font-weight-medium)"},children:[r.jsx(V,{theme:a}),a]})]}),r.jsxs("div",{style:{fontSize:"var(--font-size-0)",color:s,fontFamily:"var(--font-family-body)"},children:["Color: ",t.toUpperCase()," · Opacity:"," ",Math.round(o.opacity*100),"% · Blur: ",o.blur]})]})},V=({theme:e})=>e==="light"?r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[r.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"currentColor"}),r.jsxs("g",{stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[r.jsx("path",{d:"M12 3v2"}),r.jsx("path",{d:"M12 19v2"}),r.jsx("path",{d:"M3 12h2"}),r.jsx("path",{d:"M19 12h2"}),r.jsx("path",{d:"M5.6 5.6l1.4 1.4"}),r.jsx("path",{d:"M17 17l1.4 1.4"}),r.jsx("path",{d:"M5.6 18.4l1.4-1.4"}),r.jsx("path",{d:"M17 7l1.4-1.4"})]})]}):r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:r.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",fill:"currentColor"})}),v={args:{size:"md",theme:"light",label:"Frosted card"},parameters:{docs:{disable:!0}}},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>r.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[r.jsx(E,{title:"Backdrop blur",description:"Translucent surfaces for panels, sheets, and floating UI placed over content. Four sizes × two theme tints, rendered over a photo so you can see how each combination reads.",meta:[{label:"sizes",value:"4"},{label:"themes",value:"2"},{label:"range",value:"8 → 40 px"}]}),r.jsxs(O,{kind:"info",title:"Browser support",children:[r.jsx("code",{children:"backdrop-filter"})," is supported in all modern browsers. Include ",r.jsx("code",{children:"-webkit-backdrop-filter"})," for older Safari. Provide a solid-color fallback (no blur) so the surface still reads on unsupported browsers."]}),r.jsx("div",{style:{height:24}}),r.jsx("div",{style:{borderRadius:"var(--radius-2xl)",overflow:"hidden",border:"1px solid var(--color-neutral-200)",boxShadow:"var(--shadow-sm)"},children:r.jsx("div",{style:{padding:"var(--space-10)",backgroundImage:`url(${h})`,backgroundSize:"cover",backgroundPosition:"center"},children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"var(--space-5)"},children:j.map(e=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"},children:[r.jsx(x,{size:e,theme:"light"}),r.jsx(x,{size:e,theme:"dark"})]},e))})})})]})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>r.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[r.jsx(E,{title:"Backdrop blur reference",description:"Every size with its blur radius and CSS variable."}),r.jsx(k,{title:"Blur sizes",description:"The radius is theme-agnostic. Apply it with a matching tint from the token pair.",children:r.jsx(f,{rows:j.map(e=>{const a=y[e];return{name:`backdrop-blur-${e}`,value:`${a.blur}px`,cssVar:`var(--backdrop-blur-${e})`,preview:r.jsx("div",{"aria-hidden":!0,style:{position:"relative",width:84,height:48,borderRadius:"var(--radius-md)",overflow:"hidden",backgroundImage:`url(${h})`,backgroundSize:"cover",backgroundPosition:"center"},children:r.jsx("div",{style:{position:"absolute",inset:0,margin:"auto",width:56,height:28,borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.6)",backdropFilter:`blur(${a.blur}px)`,WebkitBackdropFilter:`blur(${a.blur}px)`,top:10,left:14}})})}}),previewHeader:"Preview",valueHeader:"Blur",searchable:!1})}),r.jsx(k,{title:"Theme tints",description:"Shared across every blur size. Swap based on surface theme; don't hand-pick a custom alpha.",children:r.jsx(f,{searchable:!1,rows:[{name:"backdrop-bg-light",value:"rgba(255, 255, 255, 0.6)",cssVar:"var(--backdrop-bg-light)",preview:r.jsx(S,{color:"#ffffff",opacity:.6,label:"light"})},{name:"backdrop-bg-dark",value:"rgba(0, 0, 0, 0.6)",cssVar:"var(--backdrop-bg-dark)",preview:r.jsx(S,{color:"#000000",opacity:.6,label:"dark"})}],previewHeader:"Preview",valueHeader:"rgba()"})}),r.jsx(k,{title:"Usage",description:"Apply blur + matching tint + a subtle border. Always include a fallback background for unsupported browsers.",children:r.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-neutral-25)"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",borderBottom:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-50)"},children:[r.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-600)"},children:"CSS"}),r.jsx(_,{value:`.glass-panel {
  background: var(--backdrop-bg-light);
  backdrop-filter: blur(var(--backdrop-blur-md));
  -webkit-backdrop-filter: blur(var(--backdrop-blur-md));
  border: 1px solid var(--backdrop-border-light);
  border-radius: 12px;
}

[data-theme="dark"] .glass-panel {
  background: var(--backdrop-bg-dark);
  border-color: var(--backdrop-border-dark);
}`,label:"Copy"})]}),r.jsx("pre",{style:{margin:0,padding:"var(--space-4)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.65,color:"var(--color-neutral-800)",overflowX:"auto"},children:r.jsx("code",{children:`.glass-panel {
  background: var(--backdrop-bg-light);
  backdrop-filter: blur(var(--backdrop-blur-md));
  -webkit-backdrop-filter: blur(var(--backdrop-blur-md));
  border: 1px solid var(--backdrop-border-light);
  border-radius: 12px;
}

[data-theme="dark"] .glass-panel {
  background: var(--backdrop-bg-dark);
  border-color: var(--backdrop-border-dark);
}`})})]})})]})},S=({color:e,opacity:a,label:n})=>r.jsx("div",{"aria-label":`${n} tint`,style:{position:"relative",width:84,height:48,borderRadius:"var(--radius-md)",overflow:"hidden",backgroundImage:`url(${h})`,backgroundSize:"cover",backgroundPosition:"center"},children:r.jsx("div",{style:{position:"absolute",inset:0,background:w(e,a)}})});var z,T,C;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "md",
    theme: "light",
    label: "Frosted card"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(C=(T=v.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var B,$,I,P,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <PageHeader title="Backdrop blur" description="Translucent surfaces for panels, sheets, and floating UI placed over content. Four sizes × two theme tints, rendered over a photo so you can see how each combination reads." meta={[{
      label: "sizes",
      value: "4"
    }, {
      label: "themes",
      value: "2"
    }, {
      label: "range",
      value: "8 → 40 px"
    }]} />

      <Callout kind="info" title="Browser support">
        <code>backdrop-filter</code> is supported in all modern browsers.
        Include <code>-webkit-backdrop-filter</code> for older Safari. Provide a
        solid-color fallback (no blur) so the surface still reads on unsupported
        browsers.
      </Callout>
      <div style={{
      height: 24
    }} />

      <div style={{
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      border: "1px solid var(--color-neutral-200)",
      boxShadow: "var(--shadow-sm)"
    }}>
        <div style={{
        padding: "var(--space-10)",
        backgroundImage: \`url(\${BACKDROP_IMAGE})\`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "var(--space-5)"
        }}>
            {backdropBlurOrder.map(size => <div key={size} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-4)"
          }}>
                <BlurCard size={size} theme="light" />
                <BlurCard size={size} theme="dark" />
              </div>)}
          </div>
        </div>
      </div>
    </div>
}`,...(I=($=l.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"Every size, rendered in light and dark, over a real photo backdrop.",...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var A,H,W,F,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      <PageHeader title="Backdrop blur reference" description="Every size with its blur radius and CSS variable." />
      <Section title="Blur sizes" description="The radius is theme-agnostic. Apply it with a matching tint from the token pair.">
        <TokenTable rows={backdropBlurOrder.map(size => {
        const t = backdropBlur[size];
        return {
          name: \`backdrop-blur-\${size}\`,
          value: \`\${t.blur}px\`,
          cssVar: \`var(--backdrop-blur-\${size})\`,
          preview: <div aria-hidden style={{
            position: "relative",
            width: 84,
            height: 48,
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            backgroundImage: \`url(\${BACKDROP_IMAGE})\`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
                  <div style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: 56,
              height: 28,
              borderRadius: "var(--radius-sm)",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: \`blur(\${t.blur}px)\`,
              WebkitBackdropFilter: \`blur(\${t.blur}px)\`,
              top: 10,
              left: 14
            }} />
                </div>
        };
      })} previewHeader="Preview" valueHeader="Blur" searchable={false} />
      </Section>

      <Section title="Theme tints" description="Shared across every blur size. Swap based on surface theme; don't hand-pick a custom alpha.">
        <TokenTable searchable={false} rows={[{
        name: "backdrop-bg-light",
        value: "rgba(255, 255, 255, 0.6)",
        cssVar: "var(--backdrop-bg-light)",
        preview: <TintSwatch color="#ffffff" opacity={0.6} label="light" />
      }, {
        name: "backdrop-bg-dark",
        value: "rgba(0, 0, 0, 0.6)",
        cssVar: "var(--backdrop-bg-dark)",
        preview: <TintSwatch color="#000000" opacity={0.6} label="dark" />
      }]} previewHeader="Preview" valueHeader="rgba()" />
      </Section>

      <Section title="Usage" description="Apply blur + matching tint + a subtle border. Always include a fallback background for unsupported browsers.">
        <div style={{
        border: "1px solid var(--color-neutral-200)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--color-neutral-25)"
      }}>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid var(--color-neutral-200)",
          background: "var(--color-neutral-50)"
        }}>
            <span style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)"
          }}>
              CSS
            </span>
            <CopyButton value={\`.glass-panel {
  background: var(--backdrop-bg-light);
  backdrop-filter: blur(var(--backdrop-blur-md));
  -webkit-backdrop-filter: blur(var(--backdrop-blur-md));
  border: 1px solid var(--backdrop-border-light);
  border-radius: 12px;
}

[data-theme="dark"] .glass-panel {
  background: var(--backdrop-bg-dark);
  border-color: var(--backdrop-border-dark);
}\`} label="Copy" />
          </div>
          <pre style={{
          margin: 0,
          padding: "var(--space-4)",
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-1)",
          lineHeight: 1.65,
          color: "var(--color-neutral-800)",
          overflowX: "auto"
        }}>
            <code>{\`.glass-panel {
  background: var(--backdrop-bg-light);
  backdrop-filter: blur(var(--backdrop-blur-md));
  -webkit-backdrop-filter: blur(var(--backdrop-blur-md));
  border: 1px solid var(--backdrop-border-light);
  border-radius: 12px;
}

[data-theme="dark"] .glass-panel {
  background: var(--backdrop-bg-dark);
  border-color: var(--backdrop-border-dark);
}\`}</code>
          </pre>
        </div>
      </Section>
    </div>
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:"Token reference table.",...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};const Y=["Playground","Gallery","Reference"];export{l as Gallery,v as Playground,d as Reference,Y as __namedExportsOrder,q as default};
