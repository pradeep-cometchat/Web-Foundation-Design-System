import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ja={title:"Core Components/Chat Bubbles/Image Bubble",tags:["autodocs"],parameters:{layout:"centered"}},m={name:"Single Image — Sent",parameters:{docs:{description:{story:"Single image displayed at full width within the sent bubble."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"single",variant:"sent"})})},p={name:"Single Image — Received",parameters:{docs:{description:{story:"Single image displayed at full width within the received bubble."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"single",variant:"received"})})},u={name:"2 Grid — Sent",parameters:{docs:{description:{story:"Two images displayed in a 2-column grid."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"2-grid",variant:"sent"})})},v={name:"2 Grid — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"2-grid",variant:"received"})})},b={name:"3 Grid — Sent",parameters:{docs:{description:{story:"Three images — one large on left, two stacked on right."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"3-grid",variant:"sent"})})},h={name:"3 Grid — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"3-grid",variant:"received"})})},x={name:"4 Grid — Sent",parameters:{docs:{description:{story:"Four images in a 2×2 grid layout."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"4-grid",variant:"sent"})})},y={name:"4 Grid — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"4-grid",variant:"received"})})},f={name:"4+ Grid — Sent",parameters:{docs:{description:{story:"Four images in a 2×2 grid with a '+N' overlay on the last image indicating more."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"sent"})})},j={name:"4+ Grid — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"received"})})},S={name:"Horizontal — Sent",parameters:{docs:{description:{story:"Landscape/horizontal image displayed wider than tall."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"horizontal",variant:"sent"})})},w={name:"Horizontal — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"horizontal",variant:"received"})})},_={name:"Vertical — Sent",parameters:{docs:{description:{story:"Portrait/vertical image displayed taller than wide."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"vertical",variant:"sent"})})},L={name:"Vertical — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"vertical",variant:"received"})})},R={name:"Single — Loading (Sent)",parameters:{docs:{description:{story:"Single image in loading state with a cancel button overlay."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"single-loading",variant:"sent"})})},C={name:"Single — Loading (Received)",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"single-loading",variant:"received"})})},G={name:"Multiple — Loading (Sent)",parameters:{docs:{description:{story:"Multiple images in loading state with a cancel button overlay."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"multiple-loading",variant:"sent"})})},I={name:"Multiple — Loading (Received)",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"multiple-loading",variant:"received"})})},B={name:"Sensitive Content — Sent",parameters:{docs:{description:{story:"Image hidden behind a sensitive content warning with a 'See Photo' action."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"sensitive",variant:"sent"})})},W={name:"Sensitive Content — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"sensitive",variant:"received"})})},k={name:"Placeholder — Sent",parameters:{docs:{description:{story:"Empty placeholder state before an image loads."}}},render:()=>e.jsx(r,{children:e.jsx(a,{layout:"placeholder",variant:"sent"})})},z={name:"Placeholder — Received",render:()=>e.jsx(r,{children:e.jsx(a,{layout:"placeholder",variant:"received"})})},D={name:"All Layouts",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",maxWidth:1200},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Single (Sent)"}),e.jsx(a,{layout:"single",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Single (Received)"}),e.jsx(a,{layout:"single",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"2 Grid (Sent)"}),e.jsx(a,{layout:"2-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"2 Grid (Received)"}),e.jsx(a,{layout:"2-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"3 Grid (Sent)"}),e.jsx(a,{layout:"3-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"3 Grid (Received)"}),e.jsx(a,{layout:"3-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"4 Grid (Sent)"}),e.jsx(a,{layout:"4-grid",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"4 Grid (Received)"}),e.jsx(a,{layout:"4-grid",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"4+ Grid (Sent)"}),e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"4+ Grid (Received)"}),e.jsx(a,{layout:"4+-grid",extraCount:3,variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Horizontal (Sent)"}),e.jsx(a,{layout:"horizontal",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Horizontal (Received)"}),e.jsx(a,{layout:"horizontal",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Single Loading (Sent)"}),e.jsx(a,{layout:"single-loading",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Single Loading (Received)"}),e.jsx(a,{layout:"single-loading",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Multiple Loading (Sent)"}),e.jsx(a,{layout:"multiple-loading",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Multiple Loading (Received)"}),e.jsx(a,{layout:"multiple-loading",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Sensitive Content (Sent)"}),e.jsx(a,{layout:"sensitive",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Sensitive Content (Received)"}),e.jsx(a,{layout:"sensitive",variant:"received"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Placeholder (Sent)"}),e.jsx(a,{layout:"placeholder",variant:"sent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(n,{children:"Placeholder (Received)"}),e.jsx(a,{layout:"placeholder",variant:"received"})]})]})},T={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(P,{title:"HTML Structure",children:e.jsx(ua,{language:"HTML",code:`<!-- Single Image -->
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
</div>`})}),e.jsx(P,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(s,{title:"Single",description:"One image at full container width, square aspect ratio."}),e.jsx(s,{title:"2 Grid",description:"Two images side by side, each taking 50% width with a 2px gap."}),e.jsx(s,{title:"3 Grid",description:"One large image on the left (50%), two stacked images on the right (50%)."}),e.jsx(s,{title:"4 Grid",description:"Four images in a 2×2 grid with 2px gaps."}),e.jsx(s,{title:"4+ Grid",description:"Same as 4 Grid but the last cell has a dark overlay with '+N' count."}),e.jsx(s,{title:"Horizontal",description:"Landscape image with wider aspect ratio (approx 5:3)."}),e.jsx(s,{title:"Vertical",description:"Portrait image with taller aspect ratio (approx 3:5)."}),e.jsx(s,{title:"Single Loading",description:"Blurred image with a circular cancel (×) button overlay."}),e.jsx(s,{title:"Multiple Loading",description:"Blurred grid with a circular cancel (×) button overlay."}),e.jsx(s,{title:"Sensitive Content",description:"Dark overlay with visibility_off icon, warning text, and 'See Photo' button."}),e.jsx(s,{title:"Placeholder",description:"Empty gray container with a landscape icon placeholder."})]})}),e.jsx(P,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(s,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"}),e.jsx(s,{title:"Grid Gap",description:"2px — Between grid images"}),e.jsx(s,{title:"Overlay (4+)",description:"rgba(0, 0, 0, 0.5) — Dark overlay with white '+N' text"}),e.jsx(s,{title:"Loading Overlay",description:"Blurred image with centered cancel button"}),e.jsx(s,{title:"Sensitive Background",description:"var(--cometchat-background-color-03) — Dark muted background"}),e.jsx(s,{title:"Sensitive Text",description:"var(--cometchat-text-color-primary) for title, var(--cometchat-text-color-tertiary) for description"})]})}),e.jsx(P,{title:"Figma Reference",children:e.jsx(s,{title:"Source File",description:"Design System — Web Chat UI Kits → Image Container (node 17303:78709)"})})]})},t=["https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531","https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46"];function a({layout:l,extraCount:o=0,variant:d="sent",time:la="4:56 pm",status:ca="read"}){const oa="var(--cometchat-radius-3)",M=d==="sent",da={borderRadius:oa,overflow:"hidden",background:M?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",padding:"var(--cometchat-spacing-2)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)",width:"fit-content"},c={width:232,borderRadius:"var(--cometchat-radius-2)",overflow:"hidden",position:"relative"},i={width:"100%",height:"100%",objectFit:"cover",display:"block"};function ga(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",padding:"0 var(--cometchat-spacing-1)"},children:[e.jsx("span",{style:{fontSize:"12px",color:M?"rgba(255,255,255,0.7)":"var(--cometchat-text-color-tertiary)"},children:la}),M&&e.jsx(pa,{status:ca})]})}function ma(){switch(l){case"single":return e.jsx("div",{style:{...c,height:232},children:e.jsx("img",{src:t[0],alt:"Single",style:{...i,height:232}})});case"2-grid":return e.jsxs("div",{style:{...c,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:i}),e.jsx("img",{src:t[1],alt:"",style:i})]});case"3-grid":return e.jsxs("div",{style:{...c,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:{...i,gridRow:"1 / 3"}}),e.jsx("img",{src:t[1],alt:"",style:i}),e.jsx("img",{src:t[2],alt:"",style:i})]});case"4-grid":return e.jsxs("div",{style:{...c,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:i}),e.jsx("img",{src:t[1],alt:"",style:i}),e.jsx("img",{src:t[2],alt:"",style:i}),e.jsx("img",{src:t[3],alt:"",style:i})]});case"4+-grid":return e.jsxs("div",{style:{...c,height:232,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2},children:[e.jsx("img",{src:t[0],alt:"",style:i}),e.jsx("img",{src:t[1],alt:"",style:i}),e.jsx("img",{src:t[2],alt:"",style:i}),e.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[e.jsx("img",{src:t[3],alt:"",style:i}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("span",{style:{color:"var(--cometchat-static-white)",fontSize:"18px",fontWeight:"600"},children:["+",o]})})]})]});case"horizontal":return e.jsx("div",{style:{...c,height:140},children:e.jsx("img",{src:t[0],alt:"",style:{...i,height:140}})});case"vertical":return e.jsx("div",{style:{...c,height:360},children:e.jsx("img",{src:t[0],alt:"",style:{...i,height:360}})});case"single-loading":return e.jsxs("div",{style:{...c,height:232},children:[e.jsx("img",{src:t[0],alt:"",style:{...i,height:232,filter:"blur(4px)"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-static-white)","--icon-fill":0},children:"close"})})})]});case"multiple-loading":return e.jsxs("div",{style:{...c,height:232},children:[e.jsxs("div",{style:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2,filter:"blur(4px)"},children:[e.jsx("img",{src:t[0],alt:"",style:i}),e.jsx("img",{src:t[1],alt:"",style:i}),e.jsx("img",{src:t[2],alt:"",style:i}),e.jsx("img",{src:t[3],alt:"",style:i})]}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-static-white)","--icon-fill":0},children:"close"})})})]});case"sensitive":return e.jsxs("div",{style:{...c,height:232,position:"relative"},children:[e.jsx("img",{src:t[0],alt:"",style:{...i,height:232,filter:"blur(20px)",transform:"scale(1.1)"}}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-4)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:36,color:"var(--cometchat-static-white)","--icon-fill":0},children:"visibility_off"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-static-white)",textAlign:"center"},children:"Sensitive Content"}),e.jsx("span",{style:{fontSize:"12px",color:"rgba(255,255,255,0.7)",textAlign:"center",lineHeight:"18px"},children:"This media may contain graphic or violent content."})]}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,borderTop:"1px solid rgba(255,255,255,0.2)",background:"rgba(0,0,0,0.5)",padding:"var(--cometchat-spacing-3)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-static-white)",cursor:"pointer"},children:"See Photo"})})]});case"placeholder":return e.jsx("div",{style:{...c,height:232,background:"var(--cometchat-background-color-02)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon-rounded",style:{fontSize:40,color:"var(--cometchat-text-color-quaternary)","--icon-fill":0},children:"landscape"})});default:return null}}return e.jsxs("div",{style:da,children:[ma(),ga()]})}function pa({status:l}){const d=l==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return l==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r({children:l,width:o=280}){return e.jsx("div",{style:{width:o,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:l})}function n({children:l}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:l})}function P({title:l,children:o}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:l}),o]})}function ua({language:l,code:o}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]})}function s({title:l,description:o}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:l}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:o})]})}const g={parameters:{docs:{disable:!0}}};var H,F,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var V,N,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var O,E,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(E=u.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var K,X,J;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "2 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="2-grid" variant="received" />
    </Wrapper>
}`,...(J=(X=v.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "3 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="3-grid" variant="received" />
    </Wrapper>
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ie,te,re;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "4 Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="4-grid" variant="received" />
    </Wrapper>
}`,...(le=(se=y.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,oe,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ge,me,pe;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "4+ Grid — Received",
  render: () => <Wrapper>
      <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
    </Wrapper>
}`,...(pe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ve,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var he,xe,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Horizontal — Received",
  render: () => <Wrapper>
      <ImageBubble layout="horizontal" variant="received" />
    </Wrapper>
}`,...(ye=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var fe,je,Se;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(je=_.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var we,_e,Le;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Vertical — Received",
  render: () => <Wrapper>
      <ImageBubble layout="vertical" variant="received" />
    </Wrapper>
}`,...(Le=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Re,Ce,Ge;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ge=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Ge.source}}};var Ie,Be,We;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Te,Pe,Me;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "Multiple — Loading (Received)",
  render: () => <Wrapper>
      <ImageBubble layout="multiple-loading" variant="received" />
    </Wrapper>
}`,...(Me=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var He,Fe,Ue;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ue=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Ue.source}}};var Ve,Ne,Ae;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: "Sensitive Content — Received",
  render: () => <Wrapper>
      <ImageBubble layout="sensitive" variant="received" />
    </Wrapper>
}`,...(Ae=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Oe,Ee,qe;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source}}};var Ke,Xe,Je;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: "Placeholder — Received",
  render: () => <Wrapper>
      <ImageBubble layout="placeholder" variant="received" />
    </Wrapper>
}`,...(Je=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Qe,Ye,Ze;D.parameters={...D.parameters,docs:{...(Qe=D.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
        <Label>Single (Sent)</Label>
        <ImageBubble layout="single" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Single (Received)</Label>
        <ImageBubble layout="single" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>2 Grid (Sent)</Label>
        <ImageBubble layout="2-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>2 Grid (Received)</Label>
        <ImageBubble layout="2-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>3 Grid (Sent)</Label>
        <ImageBubble layout="3-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>3 Grid (Received)</Label>
        <ImageBubble layout="3-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>4 Grid (Sent)</Label>
        <ImageBubble layout="4-grid" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>4 Grid (Received)</Label>
        <ImageBubble layout="4-grid" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>4+ Grid (Sent)</Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>4+ Grid (Received)</Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Horizontal (Sent)</Label>
        <ImageBubble layout="horizontal" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Horizontal (Received)</Label>
        <ImageBubble layout="horizontal" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Single Loading (Sent)</Label>
        <ImageBubble layout="single-loading" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Single Loading (Received)</Label>
        <ImageBubble layout="single-loading" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Multiple Loading (Sent)</Label>
        <ImageBubble layout="multiple-loading" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Multiple Loading (Received)</Label>
        <ImageBubble layout="multiple-loading" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Sensitive Content (Sent)</Label>
        <ImageBubble layout="sensitive" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Sensitive Content (Received)</Label>
        <ImageBubble layout="sensitive" variant="received" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Placeholder (Sent)</Label>
        <ImageBubble layout="placeholder" variant="sent" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Placeholder (Received)</Label>
        <ImageBubble layout="placeholder" variant="received" />
      </div>
    </div>
}`,...(Ze=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,ea,aa;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(aa=(ea=T.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ia,ta,ra,na,sa;g.parameters={...g.parameters,docs:{...(ia=g.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ra=(ta=g.parameters)==null?void 0:ta.docs)==null?void 0:ra.source},description:{story:"Interactive playground.",...(sa=(na=g.parameters)==null?void 0:na.docs)==null?void 0:sa.description}}};const Sa=["Single","SingleReceived","TwoGrid","TwoGridReceived","ThreeGrid","ThreeGridReceived","FourGrid","FourGridReceived","FourPlusGrid","FourPlusGridReceived","Horizontal","HorizontalReceived","Vertical","VerticalReceived","SingleLoading","SingleLoadingReceived","MultipleLoading","MultipleLoadingReceived","SensitiveContent","SensitiveContentReceived","Placeholder","PlaceholderReceived","AllLayouts","Usage","Playground"];export{D as AllLayouts,x as FourGrid,y as FourGridReceived,f as FourPlusGrid,j as FourPlusGridReceived,S as Horizontal,w as HorizontalReceived,G as MultipleLoading,I as MultipleLoadingReceived,k as Placeholder,z as PlaceholderReceived,g as Playground,B as SensitiveContent,W as SensitiveContentReceived,m as Single,R as SingleLoading,C as SingleLoadingReceived,p as SingleReceived,b as ThreeGrid,h as ThreeGridReceived,u as TwoGrid,v as TwoGridReceived,T as Usage,_ as Vertical,L as VerticalReceived,Sa as __namedExportsOrder,ja as default};
