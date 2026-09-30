import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";/* empty css                    */import{a as ua}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const La={title:"Core Components/Chat Bubbles/Image Bubble",tags:["autodocs"],parameters:{layout:"centered"}},p={name:"Single Image — Sent",parameters:{docs:{description:{story:"Single image displayed at full width within the sent bubble."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"single",variant:"sent"})})},u={name:"Single Image — Received",parameters:{docs:{description:{story:"Single image displayed at full width within the received bubble."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"single",variant:"received"})})},v={name:"2 Grid — Sent",parameters:{docs:{description:{story:"Two images displayed in a 2-column grid."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"2-grid",variant:"sent"})})},b={name:"2 Grid — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"2-grid",variant:"received"})})},h={name:"3 Grid — Sent",parameters:{docs:{description:{story:"Three images — one large on left, two stacked on right."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"3-grid",variant:"sent"})})},x={name:"3 Grid — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"3-grid",variant:"received"})})},y={name:"4 Grid — Sent",parameters:{docs:{description:{story:"Four images in a 2×2 grid layout."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"4-grid",variant:"sent"})})},j={name:"4 Grid — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"4-grid",variant:"received"})})},f={name:"4+ Grid — Sent",parameters:{docs:{description:{story:"Four images in a 2×2 grid with a '+N' overlay on the last image indicating more."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"sent"})})},S={name:"4+ Grid — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"received"})})},w={name:"Horizontal — Sent",parameters:{docs:{description:{story:"Landscape/horizontal image displayed wider than tall."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"horizontal",variant:"sent"})})},_={name:"Horizontal — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"horizontal",variant:"received"})})},L={name:"Vertical — Sent",parameters:{docs:{description:{story:"Portrait/vertical image displayed taller than wide."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"vertical",variant:"sent"})})},R={name:"Vertical — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"vertical",variant:"received"})})},T={name:"Single — Loading (Sent)",parameters:{docs:{description:{story:"Single image in loading state with a cancel button overlay."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"single-loading",variant:"sent"})})},C={name:"Single — Loading (Received)",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"single-loading",variant:"received"})})},G={name:"Multiple — Loading (Sent)",parameters:{docs:{description:{story:"Multiple images in loading state with a cancel button overlay."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"multiple-loading",variant:"sent"})})},I={name:"Multiple — Loading (Received)",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"multiple-loading",variant:"received"})})},B={name:"Sensitive Content — Sent",parameters:{docs:{description:{story:"Image hidden behind a sensitive content warning with a 'See Photo' action."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"sensitive",variant:"sent"})})},W={name:"Sensitive Content — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"sensitive",variant:"received"})})},k={name:"Placeholder — Sent",parameters:{docs:{description:{story:"Empty placeholder state before an image loads."}}},render:()=>e.jsx(n,{children:e.jsx(a,{layout:"placeholder",variant:"sent"})})},z={name:"Placeholder — Received",render:()=>e.jsx(n,{children:e.jsx(a,{layout:"placeholder",variant:"received"})})},D={name:"All Layouts",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",maxWidth:1200},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Single (Sent)"})}),e.jsx(a,{layout:"single",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Single (Received)"})}),e.jsx(a,{layout:"single",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"2 Grid (Sent)"})}),e.jsx(a,{layout:"2-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"2 Grid (Received)"})}),e.jsx(a,{layout:"2-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"3 Grid (Sent)"})}),e.jsx(a,{layout:"3-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"3 Grid (Received)"})}),e.jsx(a,{layout:"3-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"4 Grid (Sent)"})}),e.jsx(a,{layout:"4-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"4 Grid (Received)"})}),e.jsx(a,{layout:"4-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"4+ Grid (Sent)"})}),e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"4+ Grid (Received)"})}),e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Horizontal (Sent)"})}),e.jsx(a,{layout:"horizontal",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Horizontal (Received)"})}),e.jsx(a,{layout:"horizontal",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Single Loading (Sent)"})}),e.jsx(a,{layout:"single-loading",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Single Loading (Received)"})}),e.jsx(a,{layout:"single-loading",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Multiple Loading (Sent)"})}),e.jsx(a,{layout:"multiple-loading",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Multiple Loading (Received)"})}),e.jsx(a,{layout:"multiple-loading",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Sensitive Content (Sent)"})}),e.jsx(a,{layout:"sensitive",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Sensitive Content (Received)"})}),e.jsx(a,{layout:"sensitive",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Placeholder (Sent)"})}),e.jsx(a,{layout:"placeholder",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(s,{children:e.jsx(i,{children:"Placeholder (Received)"})}),e.jsx(a,{layout:"placeholder",variant:"received"})]})]})},P={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(M,{title:"HTML Structure",children:e.jsx(ba,{language:"HTML",code:`<!-- Single Image -->
<div class="image-bubble image-bubble--single">
  <img src="..." alt="..." class="image-bubble__img" />
</div>

<!-- 2 Grid -->
<div class="image-bubble image-bubble--grid-2">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 3 Grid (1 large left + 2 stacked right) -->
<div class="image-bubble image-bubble--grid-3">
  <img src="..." class="image-bubble__img image-bubble__img--large" />
  <div class="image-bubble__stack">
    <img src="..." class="image-bubble__img" />
    <img src="..." class="image-bubble__img" />
  </div>
</div>

<!-- 4 Grid -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 4+ Grid (with overlay count) -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <div class="image-bubble__img image-bubble__more">
    <img src="..." />
    <span class="image-bubble__more-count">+3</span>
  </div>
</div>

<!-- Loading State -->
<div class="image-bubble image-bubble--single image-bubble--loading">
  <img src="..." class="image-bubble__img" />
  <button class="image-bubble__cancel">
    <span class="icon-rounded">close</span>
  </button>
</div>

<!-- Sensitive Content -->
<div class="image-bubble image-bubble--sensitive">
  <span class="icon-rounded">visibility_off</span>
  <span class="image-bubble__sensitive-title">Sensitive Content</span>
  <span class="image-bubble__sensitive-desc">This media may contain graphic or violent content</span>
  <button class="image-bubble__sensitive-btn">See Photo</button>
</div>`})}),e.jsx(M,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(l,{title:"Single",description:"One image at full container width, square aspect ratio."}),e.jsx(l,{title:"2 Grid",description:"Two images side by side, each taking 50% width with a 2px gap."}),e.jsx(l,{title:"3 Grid",description:"One large image on the left (50%), two stacked images on the right (50%)."}),e.jsx(l,{title:"4 Grid",description:"Four images in a 2×2 grid with 2px gaps."}),e.jsx(l,{title:"4+ Grid",description:"Same as 4 Grid but the last cell has a dark overlay with '+N' count."}),e.jsx(l,{title:"Horizontal",description:"Landscape image with wider aspect ratio (approx 5:3)."}),e.jsx(l,{title:"Vertical",description:"Portrait image with taller aspect ratio (approx 3:5)."}),e.jsx(l,{title:"Single Loading",description:"Blurred image with a circular cancel (×) button overlay."}),e.jsx(l,{title:"Multiple Loading",description:"Blurred grid with a circular cancel (×) button overlay."}),e.jsx(l,{title:"Sensitive Content",description:"Dark overlay with visibility_off icon, warning text, and 'See Photo' button."}),e.jsx(l,{title:"Placeholder",description:"Empty gray container with a landscape icon placeholder."})]})}),e.jsx(M,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(l,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"}),e.jsx(l,{title:"Grid Gap",description:"2px — Between grid images"}),e.jsx(l,{title:"Overlay (4+)",description:"rgba(0, 0, 0, 0.5) — Dark overlay with white '+N' text"}),e.jsx(l,{title:"Loading Overlay",description:"Blurred image with centered cancel button"}),e.jsx(l,{title:"Sensitive Background",description:"var(--cometchat-background-color-03) — Dark muted background"}),e.jsx(l,{title:"Sensitive Text",description:"var(--cometchat-text-color-primary) for title, var(--cometchat-text-color-tertiary) for description"})]})}),e.jsx(M,{title:"Figma Reference",children:e.jsx(l,{title:"Source File",description:"Design System — Web Chat UI Kits → Image Container (node 17303:78709)"})})]})},t=ua["Media Footage"].map(c=>c.imageUrl);function a({layout:c,extraCount:d=0,variant:g="sent",time:ca="4:56 pm",status:oa="read"}){const da="var(--cometchat-radius-3)",F=g==="sent",ga={borderRadius:da,overflow:"hidden",background:F?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",padding:"var(--cometchat-spacing-2)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)",width:"fit-content"},o={width:232,borderRadius:"var(--cometchat-radius-2)",overflow:"hidden",position:"relative"},r={width:"100%",height:"100%",objectFit:"cover",display:"block"};function ma(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",padding:"0 var(--cometchat-spacing-1)"},children:[e.jsx("span",{style:{fontSize:"12px",color:F?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(i,{children:ca})}),F&&e.jsx(va,{status:oa})]})}function pa(){switch(c){case"single":return e.jsx("div",{style:{...o,height:232},children:e.jsx("img",{src:t[0],alt:"Single",style:{...r,height:232}})});case"2-grid":return e.jsxs("div",{style:{...o,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:r}),e.jsx("img",{src:t[1],alt:"",style:r})]});case"3-grid":return e.jsxs("div",{style:{...o,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:{...r,gridRow:"1 / 3"}}),e.jsx("img",{src:t[1],alt:"",style:r}),e.jsx("img",{src:t[2],alt:"",style:r})]});case"4-grid":return e.jsxs("div",{style:{...o,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:r}),e.jsx("img",{src:t[1],alt:"",style:r}),e.jsx("img",{src:t[2],alt:"",style:r}),e.jsx("img",{src:t[3],alt:"",style:r})]});case"4+-grid":return e.jsxs("div",{style:{...o,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:r}),e.jsx("img",{src:t[1],alt:"",style:r}),e.jsx("img",{src:t[2],alt:"",style:r}),e.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[e.jsx("img",{src:t[3],alt:"",style:r}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"var(--cometchat-static-white)",fontSize:"18px",fontWeight:"600"},children:e.jsx(i,{children:`+${d}`})})})]})]});case"horizontal":return e.jsx("div",{style:{...o,height:140},children:e.jsx("img",{src:t[0],alt:"",style:{...r,height:140}})});case"vertical":return e.jsx("div",{style:{...o,height:360},children:e.jsx("img",{src:t[0],alt:"",style:{...r,height:360}})});case"single-loading":return e.jsxs("div",{style:{...o,height:232},children:[e.jsx("img",{src:t[0],alt:"",style:{...r,height:232,filter:"blur(4px)"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-static-white)","--icon-fill":0},children:"close"})})})]});case"multiple-loading":return e.jsxs("div",{style:{...o,height:232},children:[e.jsxs("div",{style:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2,filter:"blur(4px)"},children:[e.jsx("img",{src:t[0],alt:"",style:r}),e.jsx("img",{src:t[1],alt:"",style:r}),e.jsx("img",{src:t[2],alt:"",style:r}),e.jsx("img",{src:t[3],alt:"",style:r})]}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-static-white)","--icon-fill":0},children:"close"})})})]});case"sensitive":return e.jsxs("div",{style:{...o,height:232,position:"relative"},children:[e.jsx("img",{src:t[0],alt:"",style:{...r,height:232,filter:"blur(20px)",transform:"scale(1.1)"}}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-4)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:36,color:"var(--cometchat-static-white)","--icon-fill":0},children:"visibility_off"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-static-white)",textAlign:"center"},children:e.jsx(i,{children:"Sensitive Content"})}),e.jsx("span",{style:{fontSize:"12px",color:"rgba(255,255,255,0.7)",textAlign:"center",lineHeight:"18px"},children:e.jsx(i,{children:"This media may contain graphic or violent content."})})]}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,borderTop:"1px solid rgba(255,255,255,0.2)",background:"rgba(0,0,0,0.5)",padding:"var(--cometchat-spacing-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-static-white)",cursor:"pointer"},children:e.jsx(i,{children:"See Photo"})})})]});case"placeholder":return e.jsx("div",{style:{...o,height:232,background:"var(--cometchat-background-color-02)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:40,color:"var(--cometchat-text-color-quaternary)","--icon-fill":0},children:"landscape"})});default:return null}}return e.jsxs("div",{style:ga,children:[pa(),ma()]})}function va({status:c}){const g=c==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return c==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:g,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:g,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:g,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function n({children:c,width:d=280}){return e.jsx("div",{style:{width:d,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:c})}function s({children:c}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:c})}function M({title:c,children:d}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:c})}),d]})}function ba({language:c,code:d}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:c})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:d})})]})}function l({title:c,description:d}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:c})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:d})})]})}const m={parameters:{docs:{disable:!0}}};var H,U,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Single Image — Sent",
  parameters: {
    docs: {
      description: {
        story: "Single image displayed at full width within the sent bubble."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="single" variant="sent" />
    </Wrapper>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var N,A,O;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Single Image — Received",
  parameters: {
    docs: {
      description: {
        story: "Single image displayed at full width within the received bubble."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="single" variant="received" />
    </Wrapper>
}`,...(O=(A=u.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var E,q,K;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "2 Grid — Sent",
  parameters: {
    docs: {
      description: {
        story: "Two images displayed in a 2-column grid."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="2-grid" variant="sent" />
    </Wrapper>
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var X,$,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "2 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="2-grid" variant="received" />
    </Wrapper>
}`,...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "3 Grid — Sent",
  parameters: {
    docs: {
      description: {
        story: "Three images — one large on left, two stacked on right."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="3-grid" variant="sent" />
    </Wrapper>
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ie;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "3 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="3-grid" variant="received" />
    </Wrapper>
}`,...(ie=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,te,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "4 Grid — Sent",
  parameters: {
    docs: {
      description: {
        story: "Four images in a 2×2 grid layout."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="4-grid" variant="sent" />
    </Wrapper>
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,le,ce;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "4 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="4-grid" variant="received" />
    </Wrapper>
}`,...(ce=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var oe,de,ge;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "4+ Grid — Sent",
  parameters: {
    docs: {
      description: {
        story: "Four images in a 2×2 grid with a '+N' overlay on the last image indicating more."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="4+-grid" extraCount={3} variant="sent" />
    </Wrapper>
}`,...(ge=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var me,pe,ue;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "4+ Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
    </Wrapper>
}`,...(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ve,be,he;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Horizontal — Sent",
  parameters: {
    docs: {
      description: {
        story: "Landscape/horizontal image displayed wider than tall."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="horizontal" variant="sent" />
    </Wrapper>
}`,...(he=(be=w.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ye,je;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Horizontal — Received",
  render: () => <Wrapper>
      <ImageBubble layout="horizontal" variant="received" />
    </Wrapper>
}`,...(je=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var fe,Se,we;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Vertical — Sent",
  parameters: {
    docs: {
      description: {
        story: "Portrait/vertical image displayed taller than wide."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="vertical" variant="sent" />
    </Wrapper>
}`,...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var _e,Le,Re;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Vertical — Received",
  render: () => <Wrapper>
      <ImageBubble layout="vertical" variant="received" />
    </Wrapper>
}`,...(Re=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var Te,Ce,Ge;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "Single — Loading (Sent)",
  parameters: {
    docs: {
      description: {
        story: "Single image in loading state with a cancel button overlay."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="single-loading" variant="sent" />
    </Wrapper>
}`,...(Ge=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Ge.source}}};var Ie,Be,We;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Single — Loading (Received)",
  render: () => <Wrapper>
      <ImageBubble layout="single-loading" variant="received" />
    </Wrapper>
}`,...(We=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var ke,ze,De;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "Multiple — Loading (Sent)",
  parameters: {
    docs: {
      description: {
        story: "Multiple images in loading state with a cancel button overlay."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="multiple-loading" variant="sent" />
    </Wrapper>
}`,...(De=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Pe,Me,Fe;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "Multiple — Loading (Received)",
  render: () => <Wrapper>
      <ImageBubble layout="multiple-loading" variant="received" />
    </Wrapper>
}`,...(Fe=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var He,Ue,Ve;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: "Sensitive Content — Sent",
  parameters: {
    docs: {
      description: {
        story: "Image hidden behind a sensitive content warning with a 'See Photo' action."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="sensitive" variant="sent" />
    </Wrapper>
}`,...(Ve=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var Ne,Ae,Oe;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: "Sensitive Content — Received",
  render: () => <Wrapper>
      <ImageBubble layout="sensitive" variant="received" />
    </Wrapper>
}`,...(Oe=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ee,qe,Ke;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "Placeholder — Sent",
  parameters: {
    docs: {
      description: {
        story: "Empty placeholder state before an image loads."
      }
    }
  },
  render: () => <Wrapper>
      <ImageBubble layout="placeholder" variant="sent" />
    </Wrapper>
}`,...(Ke=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Xe,$e,Je;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: "Placeholder — Received",
  render: () => <Wrapper>
      <ImageBubble layout="placeholder" variant="received" />
    </Wrapper>
}`,...(Je=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Ye,Ze;D.parameters={...D.parameters,docs:{...(Qe=D.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: "All Layouts",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-4)",
    padding: "var(--cometchat-spacing-4)",
    maxWidth: 1200
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Single (Sent)</T></Label>
        <ImageBubble layout="single" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Single (Received)</T></Label>
        <ImageBubble layout="single" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>2 Grid (Sent)</T></Label>
        <ImageBubble layout="2-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>2 Grid (Received)</T></Label>
        <ImageBubble layout="2-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>3 Grid (Sent)</T></Label>
        <ImageBubble layout="3-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>3 Grid (Received)</T></Label>
        <ImageBubble layout="3-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>4 Grid (Sent)</T></Label>
        <ImageBubble layout="4-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>4 Grid (Received)</T></Label>
        <ImageBubble layout="4-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>4+ Grid (Sent)</T></Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>4+ Grid (Received)</T></Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Horizontal (Sent)</T></Label>
        <ImageBubble layout="horizontal" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Horizontal (Received)</T></Label>
        <ImageBubble layout="horizontal" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Single Loading (Sent)</T></Label>
        <ImageBubble layout="single-loading" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Single Loading (Received)</T></Label>
        <ImageBubble layout="single-loading" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Multiple Loading (Sent)</T></Label>
        <ImageBubble layout="multiple-loading" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Multiple Loading (Received)</T></Label>
        <ImageBubble layout="multiple-loading" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sensitive Content (Sent)</T></Label>
        <ImageBubble layout="sensitive" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sensitive Content (Received)</T></Label>
        <ImageBubble layout="sensitive" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Placeholder (Sent)</T></Label>
        <ImageBubble layout="placeholder" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Placeholder (Received)</T></Label>
        <ImageBubble layout="placeholder" variant="received" />
      </div>
    </div>
}`,...(Ze=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ia;P.parameters={...P.parameters,docs:{...(ea=P.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Single Image -->
<div class="image-bubble image-bubble--single">
  <img src="..." alt="..." class="image-bubble__img" />
</div>

<!-- 2 Grid -->
<div class="image-bubble image-bubble--grid-2">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 3 Grid (1 large left + 2 stacked right) -->
<div class="image-bubble image-bubble--grid-3">
  <img src="..." class="image-bubble__img image-bubble__img--large" />
  <div class="image-bubble__stack">
    <img src="..." class="image-bubble__img" />
    <img src="..." class="image-bubble__img" />
  </div>
</div>

<!-- 4 Grid -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 4+ Grid (with overlay count) -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <div class="image-bubble__img image-bubble__more">
    <img src="..." />
    <span class="image-bubble__more-count">+3</span>
  </div>
</div>

<!-- Loading State -->
<div class="image-bubble image-bubble--single image-bubble--loading">
  <img src="..." class="image-bubble__img" />
  <button class="image-bubble__cancel">
    <span class="icon-rounded">close</span>
  </button>
</div>

<!-- Sensitive Content -->
<div class="image-bubble image-bubble--sensitive">
  <span class="icon-rounded">visibility_off</span>
  <span class="image-bubble__sensitive-title">Sensitive Content</span>
  <span class="image-bubble__sensitive-desc">This media may contain graphic or violent content</span>
  <button class="image-bubble__sensitive-btn">See Photo</button>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Single" description="One image at full container width, square aspect ratio." />
          <StateCard title="2 Grid" description="Two images side by side, each taking 50% width with a 2px gap." />
          <StateCard title="3 Grid" description="One large image on the left (50%), two stacked images on the right (50%)." />
          <StateCard title="4 Grid" description="Four images in a 2×2 grid with 2px gaps." />
          <StateCard title="4+ Grid" description="Same as 4 Grid but the last cell has a dark overlay with '+N' count." />
          <StateCard title="Horizontal" description="Landscape image with wider aspect ratio (approx 5:3)." />
          <StateCard title="Vertical" description="Portrait image with taller aspect ratio (approx 3:5)." />
          <StateCard title="Single Loading" description="Blurred image with a circular cancel (×) button overlay." />
          <StateCard title="Multiple Loading" description="Blurred grid with a circular cancel (×) button overlay." />
          <StateCard title="Sensitive Content" description="Dark overlay with visibility_off icon, warning text, and 'See Photo' button." />
          <StateCard title="Placeholder" description="Empty gray container with a landscape icon placeholder." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
          <StateCard title="Grid Gap" description="2px — Between grid images" />
          <StateCard title="Overlay (4+)" description="rgba(0, 0, 0, 0.5) — Dark overlay with white '+N' text" />
          <StateCard title="Loading Overlay" description="Blurred image with centered cancel button" />
          <StateCard title="Sensitive Background" description="var(--cometchat-background-color-03) — Dark muted background" />
          <StateCard title="Sensitive Text" description="var(--cometchat-text-color-primary) for title, var(--cometchat-text-color-tertiary) for description" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Image Container (node 17303:78709)" />
      </UsageSection>
    </div>
}`,...(ia=(aa=P.parameters)==null?void 0:aa.docs)==null?void 0:ia.source}}};var ra,ta,na,sa,la;m.parameters={...m.parameters,docs:{...(ra=m.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(na=(ta=m.parameters)==null?void 0:ta.docs)==null?void 0:na.source},description:{story:"Interactive playground.",...(la=(sa=m.parameters)==null?void 0:sa.docs)==null?void 0:la.description}}};const Ra=["Single","SingleReceived","TwoGrid","TwoGridReceived","ThreeGrid","ThreeGridReceived","FourGrid","FourGridReceived","FourPlusGrid","FourPlusGridReceived","Horizontal","HorizontalReceived","Vertical","VerticalReceived","SingleLoading","SingleLoadingReceived","MultipleLoading","MultipleLoadingReceived","SensitiveContent","SensitiveContentReceived","Placeholder","PlaceholderReceived","AllLayouts","Usage","Playground"];export{D as AllLayouts,y as FourGrid,j as FourGridReceived,f as FourPlusGrid,S as FourPlusGridReceived,w as Horizontal,_ as HorizontalReceived,G as MultipleLoading,I as MultipleLoadingReceived,k as Placeholder,z as PlaceholderReceived,m as Playground,B as SensitiveContent,W as SensitiveContentReceived,p as Single,T as SingleLoading,C as SingleLoadingReceived,u as SingleReceived,h as ThreeGrid,x as ThreeGridReceived,v as TwoGrid,b as TwoGridReceived,P as Usage,L as Vertical,R as VerticalReceived,Ra as __namedExportsOrder,La as default};
