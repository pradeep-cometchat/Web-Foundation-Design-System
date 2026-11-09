import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{T as s,u as se,c as ce,a as F}from"./T-CfqgOS6T.js";import{P as A}from"./PageHeader-BXwzsnl8.js";import{S as c,I as d}from"./Section-0Ig6zTZq.js";import{C as u}from"./Callout-DHl1xUC3.js";import{C as de}from"./CopyButton-Cpi-tf9_.js";import{i as v,a as $,b as he,c as le,d as V}from"./icons-DYXhLi95.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Re={title:"CometChat Foundation/Icons",component:me,tags:["autodocs"],parameters:{layout:"fullscreen",themes:{themeOverride:"Light"},docs:{description:{component:"**Material Symbols** — Google's modern icon font, served as a single\nvariable font. Every icon can be tuned along four axes (fill, weight,\ngrade, optical size) and rendered in three style variants (Outlined,\nRounded, Sharp).\n\nUse the `<Icon />` component (typed props + ligature name) or apply the\n`.icon-outlined` / `.icon-rounded` / `.icon-sharp` CSS classes. Any icon\nname from fonts.google.com/icons will work — the Browse page shows a\ncurated selection for quick reference."}}},argTypes:{name:{control:"text",description:"Ligature name of the icon (e.g. `home`, `settings`, `arrow_back`).",table:{category:"Token"}},variant:{control:"select",options:v,description:"Visual style variant.",table:{category:"Token"}},size:{control:{type:"range",min:16,max:96,step:4},description:"Font-size in pixels.",table:{category:"Size"}},weight:{control:{type:"select"},options:[100,200,300,400,500,600,700],description:"Stroke weight (100 = thin, 700 = heavy).",table:{category:"Axes"}},fill:{control:"radio",options:[0,1],description:"0 = outlined, 1 = filled.",table:{category:"Axes"}},grade:{control:{type:"range",min:-25,max:200,step:25},description:"Grade adds subtle weight without changing the overall size.",table:{category:"Axes"}},opticalSize:{control:{type:"range",min:20,max:48,step:4},description:"Optical size. Should match `size` for best rendering.",table:{category:"Axes"}},color:{control:"color",description:"Icon color.",table:{category:"Style"}}}};function me(t){const a=se(),n=`<Icon
  name="${t.name}"
  variant="${t.variant}"
  size={${t.size}}
  weight={${t.weight}}
  fill={${t.fill}}
  grade={${t.grade}}
  opticalSize={${t.opticalSize}}
/>`,o=`<span class="icon-${t.variant}" style="--icon-fill:${t.fill}; --icon-wght:${t.weight}; --icon-grad:${t.grade}; --icon-opsz:${t.opticalSize}; font-size:${t.size}px">
  ${t.name}
</span>`;return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsxs("div",{style:{border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-4)",overflow:"hidden",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-sm)"},children:[e.jsx("div",{"aria-label":`${t.name} preview`,style:{padding:"var(--cometchat-spacing-12)",background:"repeating-linear-gradient(45deg, var(--cometchat-background-color-01) 0 8px, var(--cometchat-neutral-color-100) 8px 16px)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:220},children:e.jsx(d,{...t,mirror:!1})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",borderTop:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-background-color-01)"},children:[e.jsx(b,{label:"Name",value:t.name,mono:!0}),e.jsx(b,{label:"Variant",value:a($[t.variant]),divider:!0}),e.jsx(b,{label:"Size",value:`${t.size}px`,mono:!0,divider:!0}),e.jsx(b,{label:"Weight",value:String(t.weight),mono:!0,divider:!0}),e.jsx(b,{label:"Fill",value:t.fill===1?"filled":"outlined",divider:!0})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"var(--cometchat-spacing-4)",marginTop:20},children:[e.jsx(R,{language:"TSX",code:n}),e.jsx(R,{language:"CSS",code:o})]})]})}const b=({label:t,value:a,mono:n,divider:o})=>e.jsxs("div",{style:{padding:"14px 16px",borderInlineStart:o?"1px solid var(--cometchat-neutral-color-200)":"none"},children:[e.jsx("div",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(s,{children:t})}),e.jsx("div",{style:{fontFamily:n?"var(--cometchat-font-family)":"inherit",fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-900)",wordBreak:"break-all"},children:a})]}),R=({language:t,code:a})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderBottom:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-neutral-color-100)"},children:[e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-neutral-color-600)"},children:t}),e.jsx(de,{value:a,label:"Copy",variant:"ghost"})]}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-neutral-color-800)",overflowX:"auto"},children:e.jsx("code",{children:a})})]}),C={args:{name:"favorite",variant:"outlined",size:64,weight:400,fill:0,grade:0,opticalSize:48,color:"var(--cometchat-extended-primary-color-700)"},parameters:{docs:{disable:!0}}};function pe(){const[t,a]=g.useState(""),[n,o]=g.useState("outlined"),[r,m]=g.useState(0),[l,f]=g.useState("All"),L=g.useMemo(()=>{const z=t.trim().toLowerCase();return(l==="All"?le.map(h=>({category:h,icons:V[h]})):[{category:l,icons:V[l]}]).map(({category:h,icons:i})=>({category:h,icons:z?i.filter(p=>p.toLowerCase().includes(z)):i})).filter(h=>h.icons.length>0)},[t,l]);return{query:t,setQuery:a,variant:n,setVariant:o,fill:r,setFill:m,category:l,setCategory:f,results:L}}const j={parameters:{controls:{disable:!0},layout:"fullscreen",docs:{disable:!0}},render:()=>e.jsx(ue,{})};function ue(){const t=ce(),a=se(),{query:n,setQuery:o,variant:r,setVariant:m,fill:l,setFill:f,category:L,setCategory:z,results:T}=pe(),h=T.reduce((i,p)=>i+p.icons.length,0);return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"Icon library",description:"Browse a curated set of Material Symbols. Click any icon to copy its ligature name. The full catalog (~3,000 icons) is available at fonts.google.com/icons — any name from there will render correctly.",meta:[{label:"curated",value:String(he)},{label:"variants",value:"3"},{label:"axes",value:"4"}]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-3)",marginBottom:20,padding:"var(--cometchat-spacing-3-5)",border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-xs)",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",flex:"1 1 260px",minWidth:220},children:[e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",insetInlineStart:12,top:"50%",transform:"translateY(-50%)",color:"var(--cometchat-neutral-color-400)"},children:e.jsx(d,{name:"search",variant:"rounded",size:18,ariaLabel:""})}),e.jsx("input",{type:"search",dir:"ltr",value:n,onChange:i=>o(i.target.value),placeholder:"Search icons",style:{width:"100%",fontSize:"12px",paddingBlock:"8px",paddingLeft:t?"12px":"32px",paddingRight:t?"32px":"12px",textAlign:t?"right":"left",borderRadius:"var(--cometchat-radius-2)",border:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-static-white)",outline:"none",fontFamily:"inherit",color:"var(--cometchat-neutral-color-900)"}})]}),e.jsx(O,{value:r,onChange:m,options:v.map(i=>({value:i,label:a($[i])}))}),e.jsx(O,{value:l,onChange:f,options:[{value:0,label:"Outlined"},{value:1,label:"Filled"}]}),e.jsxs("select",{value:L,onChange:i=>z(i.target.value),style:{fontSize:"12px",padding:"8px 12px",borderRadius:"var(--cometchat-radius-2)",border:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-static-white)",color:"var(--cometchat-neutral-color-900)",fontFamily:"inherit",cursor:"pointer"},children:[e.jsx("option",{value:"All",children:a("All categories")}),le.map(i=>e.jsx("option",{value:i,children:a(i)},i))]}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--cometchat-neutral-color-600)",marginInlineStart:"auto"},children:[h," icon",h===1?"":"s"]})]}),T.length===0?e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",textAlign:"center",color:"var(--cometchat-neutral-color-500)",border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:['No icons match "',n,'".']}):T.map(({category:i,icons:p})=>e.jsx(c,{title:i,description:`${p.length} icon${p.length===1?"":"s"}`,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:10},children:p.map(W=>e.jsx(ge,{name:W,variant:r,fill:l},W))})},i))]})}const ge=({name:t,variant:a,fill:n=0})=>{const[o,r]=g.useState(!1),[m,l]=g.useState(!1),f=async()=>{try{await navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),1e3)}catch{}};return e.jsxs("button",{type:"button",onClick:f,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),"aria-label":`Copy icon name ${t}`,title:t,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-1-5)",padding:"14px 8px",borderRadius:"var(--cometchat-radius-2-5)",border:`1px solid ${o?"var(--cometchat-success-color)":m?"var(--cometchat-extended-primary-color-300)":"var(--cometchat-neutral-color-200)"}`,background:o?"var(--cometchat-background-color-success)":m?"var(--cometchat-extended-primary-color-50)":"var(--cometchat-static-white)",cursor:"pointer",fontFamily:"inherit",transition:"all 120ms ease",boxShadow:m?"var(--cometchat-shadow-sm)":"var(--cometchat-shadow-xs)"},children:[e.jsx(d,{name:t,variant:a,fill:n,mirror:!1,size:28,opticalSize:24,color:o?"var(--cometchat-success-color)":"var(--cometchat-neutral-color-800)"}),e.jsx("span",{style:{fontSize:"10px",fontFamily:"var(--cometchat-font-family)",color:o?"var(--cometchat-success-color)":"var(--cometchat-neutral-color-600)",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o?"copied":t})]})};function M({variant:t,children:a}){const n={unicodeBidi:"isolate"};return e.jsxs(e.Fragment,{children:[e.jsx("span",{style:n,children:e.jsx(s,{children:$[t]})}),e.jsx("span",{style:n,children:" · "}),e.jsx("span",{style:n,children:a})]})}function ve(){const t=e.jsx("code",{children:"<link>"});return F()==="ar"?e.jsxs(e.Fragment,{children:["تُحمَّل الأنماط الثلاثة (Outlined وRounded وSharp) من Google Fonts عبر"," ",t," ","واحد في رأس معاينة Storybook. في تطبيقك، أدرِج ورقة الأنماط نفسها، أو استضِف ملفات الخط المتغيّر ذاتيًا لدعم العمل دون اتصال."]}):e.jsxs(e.Fragment,{children:["The three style variants (Outlined, Rounded, Sharp) are loaded from Google Fonts as a single ",t," in Storybook's preview head. In your app, include the same stylesheet, or self-host the variable font files for offline support."]})}function xe(){const t=e.jsx("code",{children:"ariaLabel"}),a=e.jsx("code",{children:'role="img"'});return F()==="ar"?e.jsxs(e.Fragment,{children:["مرّر ",t," يصف الإجراء. يضبط مكوّن Icon قيمة ",a," والتسمية تلقائيًا."]}):e.jsxs(e.Fragment,{children:["Pass an ",t," describing the action. The Icon component sets ",a," and the label automatically."]})}function ye(){const t=e.jsx("code",{children:'ariaLabel=""'}),a=e.jsx("code",{children:"aria-hidden"});return F()==="ar"?e.jsxs(e.Fragment,{children:["عندما تقع الأيقونة بجوار تسمية مرئية (زر يحمل نصًّا مثلًا)، مرّر ",t,". عندئذٍ يعرض المكوّن ",a," فتتجاهلها برامج قراءة الشاشة."]}):e.jsxs(e.Fragment,{children:["When the icon sits next to a visible label (e.g. a button with text), pass"," ",t,". The component renders ",a," so screen readers skip it."]})}function fe(){const t=e.jsx("code",{children:"opticalSize"}),a=e.jsx("code",{children:"size"});return F()==="ar"?e.jsxs(e.Fragment,{children:["اضبط ",t," قريبًا من قيمة ",a," المعروضة. القيم غير المتطابقة تجعل الخطوط تبدو رفيعة أو سميكة أكثر من اللازم."]}):e.jsxs(e.Fragment,{children:["Set ",t," close to the rendered ",a,". Mismatched values make strokes look too thin or too thick."]})}function O({value:t,onChange:a,options:n}){return e.jsx("div",{role:"tablist",style:{display:"inline-flex",padding:3,borderRadius:"var(--cometchat-radius-2)",background:"var(--cometchat-neutral-color-200)",gap:2},children:n.map(o=>{const r=o.value===t;return e.jsx("button",{role:"tab","aria-selected":r,onClick:()=>a(o.value),type:"button",style:{padding:"5px 12px",fontSize:"12px",fontWeight:"600",borderRadius:"var(--cometchat-radius-1-5)",border:"none",background:r?"var(--cometchat-static-white)":"transparent",color:r?"var(--cometchat-neutral-color-900)":"var(--cometchat-neutral-color-600)",cursor:"pointer",fontFamily:"inherit",boxShadow:r?"var(--cometchat-shadow-xs)":"none",transition:"all 120ms ease"},children:e.jsx(s,{children:o.label})},String(o.value))})})}const S={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"Style variants",description:"Three sibling fonts share every ligature name — only the geometry differs. Pick one variant for your product and stick to it."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--cometchat-spacing-4)",marginBottom:32},children:v.map(t=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-static-white)",boxShadow:"var(--cometchat-shadow-xs)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-3-5)"},children:[e.jsx(d,{name:"favorite",variant:t,size:72,opticalSize:48}),e.jsx("strong",{style:{fontSize:"14px",color:"var(--cometchat-neutral-color-900)"},children:e.jsx(s,{children:$[t]})}),e.jsxs("span",{style:{fontSize:"10px",fontFamily:"var(--cometchat-font-family)",color:"var(--cometchat-neutral-color-600)"},children:[".icon-",t]})]},t))}),e.jsx(c,{title:"Outlined vs filled",description:"Every variant supports both outlined and filled states via the FILL axis. Use filled for selected or active states, outlined for default.",children:e.jsx("div",{style:{border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-static-white)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:"12px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--cometchat-neutral-color-100)"},children:[e.jsx("th",{style:x,children:e.jsx(s,{children:"Name"})}),v.map(t=>e.jsx("th",{style:x,children:e.jsx(M,{variant:t,children:e.jsx(s,{children:"outlined"})})},`${t}-o`)),v.map(t=>e.jsx("th",{style:x,children:e.jsx(M,{variant:t,children:e.jsx(s,{children:"filled"})})},`${t}-f`))]})}),e.jsx("tbody",{children:["home","settings","favorite","delete","notifications","search","cloud_upload","visibility","lock","shopping_cart"].map((t,a)=>e.jsxs("tr",{style:{background:a%2===0?"var(--cometchat-static-white)":"var(--cometchat-background-color-01)"},children:[e.jsx("td",{style:y,children:e.jsx("code",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:"12px",padding:"3px 7px",borderRadius:"var(--cometchat-radius-1)",background:"var(--cometchat-neutral-color-100)",border:"1px solid var(--cometchat-neutral-color-200)"},children:t})}),v.map(n=>e.jsx("td",{style:y,children:e.jsx(d,{name:t,variant:n,size:24,fill:0})},`${n}-o`)),v.map(n=>e.jsx("td",{style:y,children:e.jsx(d,{name:t,variant:n,size:24,fill:1})},`${n}-f`))]},t))})]})})})]})},w={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"Variable axes",description:"Material Symbols ship as a single variable font with four live axes. Tune them with font-variation-settings or the Icon component props."}),e.jsx(c,{title:"Weight",description:"Stroke thickness. 100 is thinnest, 700 is heaviest. Default is 400.",children:e.jsx(I,{values:[100,200,300,400,500,600,700],axis:"wght"})}),e.jsx(c,{title:"Fill",description:"0 is outlined, 1 is filled. Use filled icons for emphasis or selected states; outlined for neutral or default states.",children:e.jsx(I,{values:[0,1],axis:"FILL"})}),e.jsx(c,{title:"Grade",description:"Adjusts stroke thickness without changing overall size. Useful for low-contrast surfaces (dark mode can benefit from a lower grade).",children:e.jsx(I,{values:[-25,0,100,200],axis:"GRAD",labelFormat:t=>t>0?`+${t}`:String(t)})}),e.jsx(c,{title:"Optical size",description:"Optimizes the icon's geometry for its rendered size. Match `opsz` to your `font-size` for best results.",children:e.jsx(I,{values:[20,24,40,48],axis:"opsz",size:40,labelFormat:t=>`${t}px`})})]})},I=({values:t,axis:a,size:n=48,labelFormat:o})=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t.length}, 1fr)`,gap:10},children:t.map(r=>e.jsxs("div",{style:{padding:"20px 10px 14px",borderRadius:"var(--cometchat-radius-2-5)",border:"1px solid var(--cometchat-neutral-color-200)",background:"var(--cometchat-static-white)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,boxShadow:"var(--cometchat-shadow-xs)"},children:[e.jsx(d,{name:"favorite",size:n,opticalSize:a==="opsz"?r:48,weight:a==="wght"?r:400,fill:a==="FILL"?r:0,grade:a==="GRAD"?r:0}),e.jsx("span",{style:{fontSize:"10px",fontFamily:"var(--cometchat-font-family)",color:"var(--cometchat-neutral-color-600)"},children:o?o(r):r})]},r))}),k={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"Using icons",description:"Two ways to render an icon: the typed React component, or the CSS utility class."}),e.jsx(u,{kind:"info",title:"Font delivery",children:e.jsx(ve,{})}),e.jsx("div",{style:{height:24}}),e.jsx(c,{title:"React component",children:e.jsx(R,{language:"TSX",code:`import { Icon } from "@foundation/components/Icon";

<Icon name="home" />
<Icon name="favorite" variant="rounded" fill={1} color="var(--cometchat-error-color)" />
<Icon name="settings" size={32} weight={500} opticalSize={24} />`})}),e.jsx(c,{title:"CSS utility class",children:e.jsx(R,{language:"HTML",code:`<span class="icon-outlined">home</span>

<span
  class="icon-rounded"
  style="--icon-fill: 1; --icon-wght: 500; font-size: 32px"
>
  favorite
</span>`})}),e.jsx(c,{title:"Accessibility",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-4)"},children:[e.jsx(u,{kind:"success",title:"Meaningful icons",children:e.jsx(xe,{})}),e.jsx(u,{kind:"success",title:"Decorative icons",children:e.jsx(ye,{})}),e.jsx(u,{kind:"warning",title:"Don't use emoji as icons",children:e.jsx(s,{children:"Material Symbols are vector, weight-tunable, and theme-aware. Emoji aren't — they render inconsistently across platforms."})}),e.jsx(u,{kind:"warning",title:"Match optical size",children:e.jsx(fe,{})})]})}),e.jsxs(c,{title:"Right-to-left",children:[e.jsx(u,{kind:"info",title:"Which icons flip in RTL",children:e.jsx(s,{children:"The web kit flips every icon that Google marks to mirror in its Android icon set: arrows, send, reply and call direction, and also videocam, content_copy, chat and sticky_note_2. Apple's guidelines say not to flip icons of real-world objects, so on iOS those four stay as drawn. Each UI Kit follows its own platform's icons; the layout rules are the same everywhere."})}),e.jsx("div",{style:{height:16}}),e.jsx("div",{style:{border:"1px solid var(--cometchat-neutral-color-200)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-static-white)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:"12px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--cometchat-neutral-color-100)"},children:[e.jsx("th",{style:{...x,textTransform:"none"},children:e.jsx(s,{children:"Icon"})}),e.jsx("th",{style:{...x,textTransform:"none"},children:e.jsx(s,{children:"As drawn"})}),e.jsx("th",{style:{...x,textTransform:"none"},children:e.jsx(s,{children:"Web and Android, RTL"})}),e.jsx("th",{style:{...x,textTransform:"none"},children:e.jsx(s,{children:"iOS, RTL"})})]})}),e.jsx("tbody",{children:["videocam","content_copy","chat","sticky_note_2"].map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:y,children:e.jsx("code",{style:{fontFamily:"var(--cometchat-font-family-mono, monospace)"},children:t})}),e.jsx("td",{style:y,children:e.jsx(d,{name:t,mirror:!1})}),e.jsx("td",{style:y,children:e.jsx(d,{name:t,mirror:!1,style:{transform:"scaleX(-1)"}})}),e.jsx("td",{style:y,children:e.jsx(d,{name:t,mirror:!1})})]},t))})]})}),e.jsx("div",{style:{height:16}}),e.jsx(u,{kind:"tip",title:"Media controls never flip",children:e.jsx(s,{children:"Play and pause stay as drawn, and audio and video players keep their controls and progress left to right in every language."})})]})]})},x={padding:"11px 16px",fontWeight:"600",fontSize:"10px",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-neutral-color-600)",borderBottom:"1px solid var(--cometchat-neutral-color-200)",textAlign:"start"},y={padding:"12px 16px",verticalAlign:"middle",borderBottom:"1px solid var(--cometchat-neutral-color-200)"};var _,B,D;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: "favorite",
    variant: "outlined",
    size: 64,
    weight: 400,
    fill: 0,
    grade: 0,
    opticalSize: 48,
    color: "var(--cometchat-extended-primary-color-700)"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(D=(B=C.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,P,U,E,G;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen",
    docs: {
      disable: true
    }
  },
  render: () => <BrowseView />
}`,...(U=(P=j.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"Searchable, categorized browser of the icon registry.",...(G=(E=j.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var X,N,q,K,Q;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Style variants" description="Three sibling fonts share every ligature name — only the geometry differs. Pick one variant for your product and stick to it." />
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--cometchat-spacing-4)",
      marginBottom: 32
    }}>
        {iconVariants.map(v => <div key={v} style={{
        padding: "var(--cometchat-spacing-6)",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-neutral-color-200)",
        background: "var(--cometchat-static-white)",
        boxShadow: "var(--cometchat-shadow-xs)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--cometchat-spacing-3-5)"
      }}>
            <Icon name="favorite" variant={v} size={72} opticalSize={48} />
            <strong style={{
          fontSize: "14px",
          color: "var(--cometchat-neutral-color-900)"
        }}>
              <T>{iconVariantLabel[v]}</T>
            </strong>
            <span style={{
          fontSize: "10px",
          fontFamily: "var(--cometchat-font-family)",
          color: "var(--cometchat-neutral-color-600)"
        }}>
              .icon-{v}
            </span>
          </div>)}
      </div>

      <Section title="Outlined vs filled" description="Every variant supports both outlined and filled states via the FILL axis. Use filled for selected or active states, outlined for default.">
        <div style={{
        border: "1px solid var(--cometchat-neutral-color-200)",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden",
        background: "var(--cometchat-static-white)"
      }}>
          <table style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          fontSize: "12px"
        }}>
            <thead>
              <tr style={{
              background: "var(--cometchat-neutral-color-100)"
            }}>
                <th style={th}>
                  <T>Name</T>
                </th>
                {iconVariants.map(v => <th key={\`\${v}-o\`} style={th}>
                    <VariantHeader variant={v}>
                      <T>outlined</T>
                    </VariantHeader>
                  </th>)}
                {iconVariants.map(v => <th key={\`\${v}-f\`} style={th}>
                    <VariantHeader variant={v}>
                      <T>filled</T>
                    </VariantHeader>
                  </th>)}
              </tr>
            </thead>
            <tbody>
              {["home", "settings", "favorite", "delete", "notifications", "search", "cloud_upload", "visibility", "lock", "shopping_cart"].map((name, i) => <tr key={name} style={{
              background: i % 2 === 0 ? "var(--cometchat-static-white)" : "var(--cometchat-background-color-01)"
            }}>
                  <td style={td}>
                    <code style={{
                  fontFamily: "var(--cometchat-font-family)",
                  fontSize: "12px",
                  padding: "3px 7px",
                  borderRadius: "var(--cometchat-radius-1)",
                  background: "var(--cometchat-neutral-color-100)",
                  border: "1px solid var(--cometchat-neutral-color-200)"
                }}>
                      {name}
                    </code>
                  </td>
                  {iconVariants.map(v => <td key={\`\${v}-o\`} style={td}>
                      <Icon name={name} variant={v} size={24} fill={0} />
                    </td>)}
                  {iconVariants.map(v => <td key={\`\${v}-f\`} style={td}>
                      <Icon name={name} variant={v} size={24} fill={1} />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
}`,...(q=(N=S.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Side-by-side comparison of the three style variants.",...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,J,Z,ee,te;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Variable axes" description="Material Symbols ship as a single variable font with four live axes. Tune them with font-variation-settings or the Icon component props." />

      <Section title="Weight" description="Stroke thickness. 100 is thinnest, 700 is heaviest. Default is 400.">
        <AxisRow values={[100, 200, 300, 400, 500, 600, 700]} axis="wght" />
      </Section>

      <Section title="Fill" description="0 is outlined, 1 is filled. Use filled icons for emphasis or selected states; outlined for neutral or default states.">
        <AxisRow values={[0, 1]} axis="FILL" />
      </Section>

      <Section title="Grade" description="Adjusts stroke thickness without changing overall size. Useful for low-contrast surfaces (dark mode can benefit from a lower grade).">
        <AxisRow values={[-25, 0, 100, 200]} axis="GRAD" labelFormat={v => v > 0 ? \`+\${v}\` : String(v)} />
      </Section>

      <Section title="Optical size" description="Optimizes the icon's geometry for its rendered size. Match \`opsz\` to your \`font-size\` for best results.">
        <AxisRow values={[20, 24, 40, 48]} axis="opsz" size={40} labelFormat={v => \`\${v}px\`} />
      </Section>
    </div>
}`,...(Z=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Z.source},description:{story:"Axis reference — weight, fill, grade, optical size.",...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,oe,re,ie;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <PageHeader title="Using icons" description="Two ways to render an icon: the typed React component, or the CSS utility class." />

      <Callout kind="info" title="Font delivery">
        <FontDeliveryCopy />
      </Callout>
      <div style={{
      height: 24
    }} />

      <Section title="React component">
        <CodeCard language="TSX" code={\`import { Icon } from "@foundation/components/Icon";

<Icon name="home" />
<Icon name="favorite" variant="rounded" fill={1} color="var(--cometchat-error-color)" />
<Icon name="settings" size={32} weight={500} opticalSize={24} />\`} />
      </Section>

      <Section title="CSS utility class">
        <CodeCard language="HTML" code={\`<span class="icon-outlined">home</span>

<span
  class="icon-rounded"
  style="--icon-fill: 1; --icon-wght: 500; font-size: 32px"
>
  favorite
</span>\`} />
      </Section>

      <Section title="Accessibility">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-4)"
      }}>
          <Callout kind="success" title="Meaningful icons">
            <MeaningfulIconsCopy />
          </Callout>
          <Callout kind="success" title="Decorative icons">
            <DecorativeIconsCopy />
          </Callout>
          <Callout kind="warning" title="Don't use emoji as icons">
            <T>
              Material Symbols are vector, weight-tunable, and theme-aware.
              Emoji aren't — they render inconsistently across platforms.
            </T>
          </Callout>
          <Callout kind="warning" title="Match optical size">
            <OpticalSizeCopy />
          </Callout>
        </div>
      </Section>

      <Section title="Right-to-left">
        <Callout kind="info" title="Which icons flip in RTL">
          <T>
            The web kit flips every icon that Google marks to mirror in its Android icon set: arrows, send, reply and call direction, and also videocam, content_copy, chat and sticky_note_2. Apple's guidelines say not to flip icons of real-world objects, so on iOS those four stay as drawn. Each UI Kit follows its own platform's icons; the layout rules are the same everywhere.
          </T>
        </Callout>
        <div style={{
        height: 16
      }} />
        <div style={{
        border: "1px solid var(--cometchat-neutral-color-200)",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden",
        background: "var(--cometchat-static-white)"
      }}>
          <table style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          fontSize: "12px"
        }}>
            <thead>
              <tr style={{
              background: "var(--cometchat-neutral-color-100)"
            }}>
                {/* Not uppercased: it would print "iOS" as "IOS". */}
                <th style={{
                ...th,
                textTransform: "none"
              }}><T>Icon</T></th>
                <th style={{
                ...th,
                textTransform: "none"
              }}><T>As drawn</T></th>
                <th style={{
                ...th,
                textTransform: "none"
              }}><T>Web and Android, RTL</T></th>
                <th style={{
                ...th,
                textTransform: "none"
              }}><T>iOS, RTL</T></th>
              </tr>
            </thead>
            <tbody>
              {["videocam", "content_copy", "chat", "sticky_note_2"].map(name => <tr key={name}>
                  <td style={td}>
                    <code style={{
                  fontFamily: "var(--cometchat-font-family-mono, monospace)"
                }}>{name}</code>
                  </td>
                  <td style={td}><Icon name={name} mirror={false} /></td>
                  <td style={td}><Icon name={name} mirror={false} style={{
                  transform: "scaleX(-1)"
                }} /></td>
                  <td style={td}><Icon name={name} mirror={false} /></td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div style={{
        height: 16
      }} />
        <Callout kind="tip" title="Media controls never flip">
          <T>
            Play and pause stay as drawn, and audio and video players keep their controls and progress left to right in every language.
          </T>
        </Callout>
      </Section>
    </div>
}`,...(oe=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Implementation guide.",...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.description}}};const Fe=["Playground","Browse","Variants","Axes","Usage"];export{w as Axes,j as Browse,C as Playground,k as Usage,S as Variants,Fe as __namedExportsOrder,Re as default};
