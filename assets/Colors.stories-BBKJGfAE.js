import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as Q}from"./index-ClcD9ViR.js";import{C as L,a as W}from"./CopyButton-DCKFQ-eI.js";import{P as X,S as o}from"./Section-BQ38l4e0.js";import{T as d}from"./TokenTable-DL_AOmtC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=r=>{const a=r.replace("#",""),t=a.length===3?a.split("").map(s=>s+s).join(""):a.length===8?a.slice(0,6):a,n=parseInt(t,16);return[n>>16&255,n>>8&255,n&255]},A=r=>{const a=r/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)},R=r=>{const[a,t,n]=Z(r);return .2126*A(a)+.7152*A(t)+.0722*A(n)},u=(r,a)=>{const t=R(r),n=R(a),s=Math.max(t,n),i=Math.min(t,n);return(s+.05)/(i+.05)},S=r=>r>=7?"AAA":r>=4.5?"AA":r>=3?"AA Large":"Fail",k=({value:r,name:a,cssVar:t,showContrast:n=!0,description:s})=>{const[i,p]=Q.useState(!1),h=u(r,"#ffffff"),c=u(r,"#000000"),l=Math.max(h,c),j=h>=c?"white":"black",m=S(l);return e.jsxs("div",{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),role:"group","aria-label":`${a} color swatch`,style:{display:"flex",flexDirection:"column",borderRadius:"var(--radius-xl)",overflow:"hidden",border:"1px solid var(--color-neutral-200)",background:"var(--color-white)",boxShadow:i?"var(--shadow-md)":"var(--shadow-xs)",transform:i?"translateY(-2px)":"translateY(0)",transition:"all 160ms ease"},children:[e.jsx("div",{"aria-hidden":!0,style:{background:r,height:88,position:"relative"},children:n&&e.jsx("span",{title:`Best against ${j}: ${l.toFixed(2)}:1 (${m})`,style:{position:"absolute",top:10,right:10,fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-bold)",letterSpacing:"0.04em",padding:"3px 7px",borderRadius:"var(--radius-full)",background:"var(--color-white)",color:m==="AAA"||m==="AA"?"var(--color-success-700)":m==="AA Large"?"var(--color-warning-700)":"var(--color-error-700)",boxShadow:"var(--shadow-xs)"},children:m})}),e.jsxs("div",{style:{padding:"var(--space-3) var(--space-3-5) var(--space-3-5)",display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-0-5)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",letterSpacing:"-0.005em"},children:a}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",fontFamily:"var(--font-family-body)",color:"var(--color-neutral-500)",textTransform:"uppercase"},children:r})]}),s&&e.jsx("div",{style:{fontSize:"var(--font-size-0)",color:"var(--color-neutral-600)"},children:s}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-1-5)",flexWrap:"wrap"},children:[e.jsx(L,{value:r,label:"HEX",variant:"solid"}),e.jsx(L,{value:t,label:"CSS",variant:"solid"})]})]})]})};try{k.displayName="Swatch",k.__docgenInfo={description:`Polished color swatch: large preview, quick hex readout, and
contrast-on-hover with on-click copy for both hex and CSS variable.`,displayName:"Swatch",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},cssVar:{defaultValue:null,description:"",name:"cssVar",required:!0,type:{name:"string"}},showContrast:{defaultValue:{value:"true"},description:"",name:"showContrast",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}}}}}catch{}const ee={primary:"#6852d6",white:"#ffffff"},H={25:"#fafaff",50:"#f4f3ff",100:"#ebe9fe",200:"#d9d6fe",300:"#bdb4fe",400:"#9b8afb",500:"#7b70e4",600:"#6852d6",700:"#5925dc",800:"#4a1fb8",900:"#3e1c96",950:"#27115f"},C={25:"#fdfdfd",50:"#fafafa",100:"#f5f5f5",200:"#e9eaeb",300:"#d5d7da",400:"#a4a7ae",500:"#717680",600:"#535862",700:"#414651",800:"#252b37",900:"#181d27",950:"#0a0d12"},J={25:"#fafafa",50:"#f7f7f7",100:"#f0f0f1",200:"#ececed",300:"#cecfd2",400:"#94979c",500:"#85888e",600:"#61656c",700:"#373a41",800:"#22262f",900:"#13161b",950:"#0c0e12"},T={base:"#155eef",25:"#f5f8ff",50:"#eff4ff",100:"#d1e0ff",200:"#b2ccff",300:"#84adff",400:"#528bff",500:"#2970ff",700:"#004eeb",800:"#0040c1",900:"#00359e",950:"#002266"},$={base:"#dc6803",25:"#fffcf5",50:"#fffaeb",100:"#fef0c7",200:"#fedf89",300:"#fec84b",400:"#fdb022",500:"#f79009",700:"#b54708",800:"#93370d",900:"#7a2e0e",950:"#4e1d09"},P={base:"#079455",25:"#f6fef9",50:"#ecfdf3",100:"#dcfae6",200:"#abefc6",300:"#75e0a7",400:"#47cd89",500:"#17b26a",700:"#067647",800:"#085d3a",900:"#074d31",950:"#053321"},O={base:"#d92d20",25:"#fffbfa",50:"#fef3f2",100:"#fee4e2",200:"#fecdca",300:"#fda29b",400:"#f97066",500:"#f04438",700:"#b42318",800:"#912018",900:"#7a271a",950:"#55160c"},de={title:"Foundation/Colors",component:te,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Pick a shade with the control. Copy the hex value or CSS variable directly from the swatch. The contrast badge shows the best WCAG rating against white or black."}}},argTypes:{family:{control:"select",options:["extendedPrimary","neutralLight","neutralDark","info","warning","success","error"],description:"Color family to sample from.",table:{category:"Token"}},shade:{control:"select",options:["25","50","100","200","300","400","500","600","700","800","900","950"],description:"Shade within the selected family.",table:{category:"Token"}}}},re={extendedPrimary:H,neutralLight:C,neutralDark:J,info:T,warning:$,success:P,error:O},ae={extendedPrimary:"--color-ep-",neutralLight:"--color-neutral-lm-",neutralDark:"--color-neutral-dm-",info:"--color-info-",warning:"--color-warning-",success:"--color-success-",error:"--color-error-"},V={extendedPrimary:"Extended Primary",neutralLight:"Neutral (Light)",neutralDark:"Neutral (Dark)",info:"Info",warning:"Warning",success:"Success",error:"Error"};function te({family:r,shade:a}){const t=re[r],n=t[a]?a:Object.keys(t)[0],s=t[n],i=`var(${ae[r]}${n})`,p=u(s,"#ffffff"),h=u(s,"#000000"),c=Math.max(p,h),l=S(c),j=p>=h?"white":"black";return e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-2xl)",overflow:"hidden",background:"var(--color-white)",boxShadow:"var(--shadow-sm)"},children:[e.jsx("div",{"aria-label":`${V[r]} ${n} preview`,style:{background:s,height:200,display:"flex",alignItems:"flex-end",padding:"var(--space-6)"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--space-1-5)",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",padding:"5px 10px",borderRadius:"var(--radius-full)",background:"var(--color-white)",color:l==="AAA"||l==="AA"?"var(--color-success-700)":l==="AA Large"?"var(--color-warning-700)":"var(--color-error-700)",boxShadow:"var(--shadow-sm)"},title:`Best against ${j}: ${c.toFixed(2)}:1`,children:[l," · ",c.toFixed(2),":1"]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",borderTop:"1px solid var(--color-neutral-200)",background:"var(--color-neutral-25)"},children:[e.jsx(g,{label:"Family",value:V[r]}),e.jsx(g,{label:"Shade",value:n,mono:!0,divider:!0}),e.jsx(g,{label:"Hex",value:s.toUpperCase(),mono:!0,divider:!0}),e.jsx(g,{label:"CSS variable",value:i,mono:!0,divider:!0})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--space-4)",marginTop:20},children:[e.jsxs(W,{kind:"tip",title:"How to read the contrast",children:["The pill on the preview shows the best WCAG 2.1 rating achievable against pure white or pure black. Aim for ",e.jsx("strong",{children:"AA (4.5:1)"})," ","for body text and ",e.jsx("strong",{children:"AA Large (3:1)"})," for icons and large text."]}),e.jsxs(W,{kind:"info",title:"Missing shades",children:["Some semantic palettes omit ",e.jsx("code",{children:"600"})," by design. When the selected shade doesn't exist, the Playground falls back to the first available shade."]})]})]})}const g=({label:r,value:a,mono:t,divider:n})=>e.jsxs("div",{style:{padding:"14px 16px",borderLeft:n?"1px solid var(--color-neutral-200)":"none"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-neutral-500)",marginBottom:"var(--space-1)"},children:r}),e.jsx("div",{style:{fontFamily:t?"var(--font-family-body)":"inherit",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",wordBreak:"break-all"},children:a})]}),x={args:{family:"extendedPrimary",shade:"500"},parameters:{docs:{disable:!0}}},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(X,{title:"Colors",description:"The complete color system. Hover any swatch to see the hex value, click to copy. Badges reflect the best WCAG contrast against white or black.",meta:[{label:"families",value:"7"},{label:"tokens",value:"74"},{label:"scale",value:"25 → 950"}]}),e.jsx(o,{title:"Primary",description:"The brand anchor. Use Primary for your main CTA and key brand moments.",children:e.jsx(y,{entries:Object.entries(ee),cssVarOf:r=>r==="primary"?"var(--color-primary)":"var(--color-white)",labelOf:r=>r==="primary"?"primary":"white"})}),e.jsx(o,{title:"Extended Primary",description:"The full 12-step tint/shade of the brand. Use for hovers, backgrounds, and subtle surfaces.",children:e.jsx(y,{entries:Object.entries(H),cssVarOf:r=>`var(--color-ep-${r})`,labelOf:r=>`ep-${r}`})}),e.jsx(o,{title:"Neutral · Light Mode",description:"Surfaces, text, and dividers for light backgrounds. In app code, prefer --color-neutral-<shade>; it automatically swaps to dark values under [data-theme='dark'].",children:e.jsx(y,{entries:Object.entries(C),cssVarOf:r=>`var(--color-neutral-lm-${r})`,labelOf:r=>`neutral-lm-${r}`})}),e.jsx(o,{title:"Neutral · Dark Mode",description:"Paired values for dark backgrounds.",children:e.jsx(y,{entries:Object.entries(J),cssVarOf:r=>`var(--color-neutral-dm-${r})`,labelOf:r=>`neutral-dm-${r}`})}),e.jsx(o,{title:"Info",description:"Informational states: links, banners, non-destructive notices.",children:e.jsx(w,{scale:T,family:"info"})}),e.jsx(o,{title:"Warning",description:"Non-blocking cautions. Use sparingly to avoid normalization.",children:e.jsx(w,{scale:$,family:"warning"})}),e.jsx(o,{title:"Success",description:"Confirmation, completed states, positive outcomes.",children:e.jsx(w,{scale:P,family:"success"})}),e.jsx(o,{title:"Error",description:"Destructive actions and blocking error states.",children:e.jsx(w,{scale:O,family:"error"})})]})},v={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(X,{title:"Accessibility audit",description:"Contrast ratios against white and black for every shade. Use this to pick safe foreground/background pairings without guessing.",meta:[{label:"AAA",value:"≥ 7:1"},{label:"AA",value:"≥ 4.5:1"},{label:"AA Large",value:"≥ 3:1"}]}),e.jsx(o,{title:"Extended Primary",children:e.jsx(d,{rows:f(H,"--color-ep-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})}),e.jsx(o,{title:"Neutral (Light Mode)",children:e.jsx(d,{rows:f(C,"--color-neutral-lm-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})}),e.jsx(o,{title:"Info",children:e.jsx(d,{rows:f(T,"--color-info-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})}),e.jsx(o,{title:"Warning",children:e.jsx(d,{rows:f($,"--color-warning-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})}),e.jsx(o,{title:"Success",children:e.jsx(d,{rows:f(P,"--color-success-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})}),e.jsx(o,{title:"Error",children:e.jsx(d,{rows:f(O,"--color-error-"),previewHeader:"Shade",valueHeader:"Hex",searchable:!1})})]})};function y({entries:r,cssVarOf:a,labelOf:t}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"var(--space-3-5)"},children:r.map(([n,s])=>e.jsx(k,{name:t(n),value:s,cssVar:a(n)},n))})}function w({scale:r,family:a}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"var(--space-3-5)"},children:K(r).map(([t,n])=>{const s=t==="base"?a:`${a}-${t}`,i=t==="base"?`var(--color-${a})`:`var(--color-${a}-${t})`;return e.jsx(k,{name:s,value:n,cssVar:i},t)})})}function K(r){return Object.entries(r).sort(([a],[t])=>a==="base"?-1:t==="base"?1:Number(a)-Number(t))}function f(r,a){return K(r).map(([t,n])=>{const s=u(n,"#ffffff"),i=u(n,"#000000");return{name:t==="base"?a.replace(/-$/,"").replace(/^--color-/,""):`${a.replace(/^--color-/,"")}${t}`,value:n,cssVar:t==="base"?`var(${a.replace(/-$/,"")})`:`var(${a}${t})`,preview:e.jsx("div",{"aria-hidden":!0,style:{width:56,height:28,borderRadius:"var(--radius-sm)",background:n,border:"1px solid var(--color-neutral-200)"}}),description:`On white ${s.toFixed(2)}:1 (${S(s)}) · On black ${i.toFixed(2)}:1 (${S(i)})`}})}var z,E,M;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    family: "extendedPrimary",
    shade: "500"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(M=(E=x.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var G,N,D,I,F;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      <PageHeader title="Colors" description="The complete color system. Hover any swatch to see the hex value, click to copy. Badges reflect the best WCAG contrast against white or black." meta={[{
      label: "families",
      value: "7"
    }, {
      label: "tokens",
      value: "74"
    }, {
      label: "scale",
      value: "25 → 950"
    }]} />

      <Section title="Primary" description="The brand anchor. Use Primary for your main CTA and key brand moments.">
        <SwatchGrid entries={Object.entries(primaryColors)} cssVarOf={k => k === "primary" ? "var(--color-primary)" : "var(--color-white)"} labelOf={k => k === "primary" ? "primary" : "white"} />
      </Section>

      <Section title="Extended Primary" description="The full 12-step tint/shade of the brand. Use for hovers, backgrounds, and subtle surfaces.">
        <SwatchGrid entries={Object.entries(extendedPrimary)} cssVarOf={k => \`var(--color-ep-\${k})\`} labelOf={k => \`ep-\${k}\`} />
      </Section>

      <Section title="Neutral · Light Mode" description="Surfaces, text, and dividers for light backgrounds. In app code, prefer --color-neutral-<shade>; it automatically swaps to dark values under [data-theme='dark'].">
        <SwatchGrid entries={Object.entries(neutralLight)} cssVarOf={k => \`var(--color-neutral-lm-\${k})\`} labelOf={k => \`neutral-lm-\${k}\`} />
      </Section>

      <Section title="Neutral · Dark Mode" description="Paired values for dark backgrounds.">
        <SwatchGrid entries={Object.entries(neutralDark)} cssVarOf={k => \`var(--color-neutral-dm-\${k})\`} labelOf={k => \`neutral-dm-\${k}\`} />
      </Section>

      <Section title="Info" description="Informational states: links, banners, non-destructive notices.">
        <SemanticGrid scale={info} family="info" />
      </Section>

      <Section title="Warning" description="Non-blocking cautions. Use sparingly to avoid normalization.">
        <SemanticGrid scale={warning} family="warning" />
      </Section>

      <Section title="Success" description="Confirmation, completed states, positive outcomes.">
        <SemanticGrid scale={success} family="success" />
      </Section>

      <Section title="Error" description="Destructive actions and blocking error states.">
        <SemanticGrid scale={error} family="error" />
      </Section>
    </div>
}`,...(D=(N=b.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:"Full palette reference — every family, every shade.",...(F=(I=b.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var B,_,U,q,Y;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <PageHeader title="Accessibility audit" description="Contrast ratios against white and black for every shade. Use this to pick safe foreground/background pairings without guessing." meta={[{
      label: "AAA",
      value: "≥ 7:1"
    }, {
      label: "AA",
      value: "≥ 4.5:1"
    }, {
      label: "AA Large",
      value: "≥ 3:1"
    }]} />
      <Section title="Extended Primary">
        <TokenTable rows={toContrastRows(extendedPrimary, "--color-ep-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
      <Section title="Neutral (Light Mode)">
        <TokenTable rows={toContrastRows(neutralLight, "--color-neutral-lm-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
      <Section title="Info">
        <TokenTable rows={toContrastRows(info, "--color-info-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
      <Section title="Warning">
        <TokenTable rows={toContrastRows(warning, "--color-warning-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
      <Section title="Success">
        <TokenTable rows={toContrastRows(success, "--color-success-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
      <Section title="Error">
        <TokenTable rows={toContrastRows(error, "--color-error-")} previewHeader="Shade" valueHeader="Hex" searchable={false} />
      </Section>
    </div>
}`,...(U=(_=v.parameters)==null?void 0:_.docs)==null?void 0:U.source},description:{story:"Contrast reference — every shade against #fff and #000.",...(Y=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Y.description}}};const fe=["Playground","AllPalettes","AccessibilityAudit"];export{v as AccessibilityAudit,b as AllPalettes,x as Playground,fe as __namedExportsOrder,de as default};
