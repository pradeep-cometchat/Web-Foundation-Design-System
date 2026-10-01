import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-B-X7QtOX.js";import{a as T}from"./avatars-DeYFvwHw.js";/* empty css                         */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={title:"CometChat Foundation/Stickers",tags:["autodocs"],parameters:{layout:"padded",themes:{themeOverride:"Light"},docs:{description:{component:`Stickers are illustrated character expressions used in chat messages.
Each sticker is a pre-rendered PNG asset from the design system's avatar registry.

Source: \`foundation/tokens/avatars.ts\` → "Sticker Footage" category.`}}}},a=T["Sticker Footage"],s={name:"Sticker Catalog",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:w,children:[e.jsx("h2",{style:F,children:e.jsx(i,{children:"Sticker Footage"})}),e.jsx("p",{style:z,children:e.jsx(i,{children:"Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN."})})]}),e.jsx("div",{style:U,children:a.map(t=>e.jsxs("div",{style:L,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:W}),e.jsx("span",{dir:"ltr",style:B,children:t.name})]},t.name))})]})},c={name:"Sticker List",render:()=>e.jsx("div",{style:{maxWidth:480,margin:"0 auto"},children:e.jsx("div",{style:I,children:a.map(t=>e.jsxs("div",{style:_,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:R}),e.jsx("span",{dir:"ltr",style:A,children:t.name})]},t.name))})})},o={name:"Sizes",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:w,children:[e.jsx("h2",{style:F,children:e.jsx(i,{children:"Sticker Sizes"})}),e.jsx("p",{style:z,children:e.jsx(i,{children:"Stickers can be rendered at different sizes depending on context."})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-6)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:48,height:48,objectFit:"contain"}}),e.jsx("span",{dir:"ltr",style:d,children:"48px (sm)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:80,height:80,objectFit:"contain"}}),e.jsx("span",{dir:"ltr",style:d,children:"80px (md)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:120,height:120,objectFit:"contain"}}),e.jsx("span",{dir:"ltr",style:d,children:"120px (lg)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:160,height:160,objectFit:"contain"}}),e.jsx("span",{dir:"ltr",style:d,children:"160px (xl)"})]})]})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(m,{title:"Token Source",children:e.jsx(p,{language:"TypeScript",code:`import { avatarRegistry } from "../tokens/avatars";

const stickers = avatarRegistry["Sticker Footage"];
// [
//   { name: "Sticker 01", imageUrl: "https://figma-alpha-api..." },
//   { name: "Sticker 02", imageUrl: "https://figma-alpha-api..." },
//   ...
// ]`})}),e.jsx(m,{title:"HTML Structure",children:e.jsx(p,{language:"HTML",code:`<!-- Sticker in chat bubble (no bubble background) -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-sticker">
    <img src="sticker-01.png" alt="Sticker 01" width="120" height="120" />
  </div>
  <div class="chat-bubble-meta">
    <span class="chat-bubble-meta-time">4:56 pm</span>
    <span class="icon-rounded chat-bubble-meta-receipt">done_all</span>
  </div>
</div>

<!-- Sticker grid in picker panel -->
<div class="sticker-picker__grid">
  <button class="sticker-picker__item">
    <img src="sticker-01.png" alt="Sticker 01" width="80" height="80" />
  </button>
</div>`})}),e.jsx(m,{title:"Specifications",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{title:"Format",description:"PNG with transparent background, pre-rendered at 2× resolution."}),e.jsx(r,{title:"Source",description:"avatarRegistry['Sticker Footage'] in foundation/tokens/avatars.ts"}),e.jsx(r,{title:"Sizes",description:"sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview)."}),e.jsx(r,{title:"Chat Bubble",description:"Stickers render without bubble background — just the image + timestamp."}),e.jsx(r,{title:"Picker Grid",description:"Displayed in a 4-column grid at 80×80px in the sticker picker panel."}),e.jsx(r,{title:"Count",description:"6 stickers in the current set."})]})})]})},w={marginBottom:"var(--cometchat-spacing-6)",paddingBottom:"var(--cometchat-spacing-4)",borderBottom:"1px solid var(--cometchat-border-color-default)"},F={fontFamily:"var(--cometchat-font-family)",fontSize:"20px",fontWeight:600,lineHeight:"30px",color:"var(--cometchat-text-color-primary)",margin:0,marginBottom:"var(--cometchat-spacing-2)"},z={fontFamily:"var(--cometchat-font-family)",fontSize:"14px",lineHeight:"20px",color:"var(--cometchat-text-color-tertiary)",margin:0},U={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"var(--cometchat-spacing-4)"},L={display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-4)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-01)"},W={width:80,height:80,objectFit:"contain"},B={fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:500,color:"var(--cometchat-text-color-secondary)"},I={display:"flex",flexDirection:"column"},_={display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-4)",borderBottom:"1px solid var(--cometchat-border-color-light)"},R={width:40,height:40,objectFit:"contain"},A={fontFamily:"var(--cometchat-font-family)",fontSize:"16px",fontWeight:500,color:"var(--cometchat-text-color-primary)"},d={fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",marginTop:"var(--cometchat-spacing-2)",display:"block"};function m({title:t,children:n}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:t})}),n]})}function p({language:t,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}function r({title:t,description:n}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:600,color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:t})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:n})})]})}var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Sticker Catalog",
  render: () => <div style={{
    maxWidth: 800,
    margin: "0 auto"
  }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}><T>Sticker Footage</T></h2>
        <p style={descStyle}>
          <T>Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN.</T>
        </p>
      </div>
      <div style={gridStyle}>
        {stickers.map(sticker => <div key={sticker.name} style={cardStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={stickerImgStyle} />
            <span dir="ltr" style={cardLabelStyle}>{sticker.name}</span>
          </div>)}
      </div>
    </div>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,v,u;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Sticker List",
  render: () => <div style={{
    maxWidth: 480,
    margin: "0 auto"
  }}>
      <div style={listStyle}>
        {stickers.map(sticker => <div key={sticker.name} style={listItemStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={listStickerImgStyle} />
            <span dir="ltr" style={listLabelStyle}>{sticker.name}</span>
          </div>)}
      </div>
    </div>
}`,...(u=(v=c.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var b,S,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div style={{
    maxWidth: 800,
    margin: "0 auto"
  }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}><T>Sticker Sizes</T></h2>
        <p style={descStyle}>
          <T>Stickers can be rendered at different sizes depending on context.</T>
        </p>
      </div>
      <div style={{
      display: "flex",
      alignItems: "flex-end",
      gap: "var(--cometchat-spacing-8)",
      padding: "var(--cometchat-spacing-6)"
    }}>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 48,
          height: 48,
          objectFit: "contain"
        }} />
          <span dir="ltr" style={sizeLabelStyle}>48px (sm)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 80,
          height: 80,
          objectFit: "contain"
        }} />
          <span dir="ltr" style={sizeLabelStyle}>80px (md)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 120,
          height: 120,
          objectFit: "contain"
        }} />
          <span dir="ltr" style={sizeLabelStyle}>120px (lg)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 160,
          height: 160,
          objectFit: "contain"
        }} />
          <span dir="ltr" style={sizeLabelStyle}>160px (xl)</span>
        </div>
      </div>
    </div>
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var f,j,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <UsageSection title="Token Source">
        <CodeCard language="TypeScript" code={\`import { avatarRegistry } from "../tokens/avatars";

const stickers = avatarRegistry["Sticker Footage"];
// [
//   { name: "Sticker 01", imageUrl: "https://figma-alpha-api..." },
//   { name: "Sticker 02", imageUrl: "https://figma-alpha-api..." },
//   ...
// ]\`} />
      </UsageSection>

      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Sticker in chat bubble (no bubble background) -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-sticker">
    <img src="sticker-01.png" alt="Sticker 01" width="120" height="120" />
  </div>
  <div class="chat-bubble-meta">
    <span class="chat-bubble-meta-time">4:56 pm</span>
    <span class="icon-rounded chat-bubble-meta-receipt">done_all</span>
  </div>
</div>

<!-- Sticker grid in picker panel -->
<div class="sticker-picker__grid">
  <button class="sticker-picker__item">
    <img src="sticker-01.png" alt="Sticker 01" width="80" height="80" />
  </button>
</div>\`} />
      </UsageSection>

      <UsageSection title="Specifications">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Format" description="PNG with transparent background, pre-rendered at 2× resolution." />
          <StateCard title="Source" description="avatarRegistry['Sticker Footage'] in foundation/tokens/avatars.ts" />
          <StateCard title="Sizes" description="sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview)." />
          <StateCard title="Chat Bubble" description="Stickers render without bubble background — just the image + timestamp." />
          <StateCard title="Picker Grid" description="Displayed in a 4-column grid at 80×80px in the sticker picker panel." />
          <StateCard title="Count" description="6 stickers in the current set." />
        </div>
      </UsageSection>
    </div>
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const O=["StickerCatalog","StickerList","StickerSizes","Usage"];export{s as StickerCatalog,c as StickerList,o as StickerSizes,l as Usage,O as __namedExportsOrder,E as default};
