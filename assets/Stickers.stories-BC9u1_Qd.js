import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as z}from"./avatars-9G6xvYo0.js";/* empty css                         */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={title:"CometChat Foundation/Stickers",tags:["autodocs"],parameters:{layout:"padded",themes:{themeOverride:"Light"},docs:{description:{component:`Stickers are illustrated character expressions used in chat messages.
Each sticker is a pre-rendered PNG asset from the design system's avatar registry.

Source: \`foundation/tokens/avatars.ts\` → "Sticker Footage" category.`}}}},a=z["Sticker Footage"],n={name:"Sticker Catalog",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:C,children:[e.jsx("h2",{style:w,children:"Sticker Footage"}),e.jsx("p",{style:F,children:"Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN."})]}),e.jsx("div",{style:U,children:a.map(t=>e.jsxs("div",{style:L,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:T}),e.jsx("span",{style:W,children:t.name})]},t.name))})]})},s={name:"Sticker List",render:()=>e.jsx("div",{style:{maxWidth:480,margin:"0 auto"},children:e.jsx("div",{style:B,children:a.map(t=>e.jsxs("div",{style:I,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:_}),e.jsx("span",{style:R,children:t.name})]},t.name))})})},c={name:"Sizes",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:C,children:[e.jsx("h2",{style:w,children:"Sticker Sizes"}),e.jsx("p",{style:F,children:"Stickers can be rendered at different sizes depending on context."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-6)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:48,height:48,objectFit:"contain"}}),e.jsx("span",{style:l,children:"48px (sm)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:80,height:80,objectFit:"contain"}}),e.jsx("span",{style:l,children:"80px (md)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:120,height:120,objectFit:"contain"}}),e.jsx("span",{style:l,children:"120px (lg)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:a[0].imageUrl,alt:a[0].name,style:{width:160,height:160,objectFit:"contain"}}),e.jsx("span",{style:l,children:"160px (xl)"})]})]})]})},o={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"Token Source",children:e.jsx(m,{language:"TypeScript",code:`import { avatarRegistry } from "../tokens/avatars";

const stickers = avatarRegistry["Sticker Footage"];
// [
//   { name: "Sticker 01", imageUrl: "https://figma-alpha-api..." },
//   { name: "Sticker 02", imageUrl: "https://figma-alpha-api..." },
//   ...
// ]`})}),e.jsx(d,{title:"HTML Structure",children:e.jsx(m,{language:"HTML",code:`<!-- Sticker in chat bubble (no bubble background) -->
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
</div>`})}),e.jsx(d,{title:"Specifications",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(i,{title:"Format",description:"PNG with transparent background, pre-rendered at 2× resolution."}),e.jsx(i,{title:"Source",description:"avatarRegistry['Sticker Footage'] in foundation/tokens/avatars.ts"}),e.jsx(i,{title:"Sizes",description:"sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview)."}),e.jsx(i,{title:"Chat Bubble",description:"Stickers render without bubble background — just the image + timestamp."}),e.jsx(i,{title:"Picker Grid",description:"Displayed in a 4-column grid at 80×80px in the sticker picker panel."}),e.jsx(i,{title:"Count",description:"6 stickers in the current set."})]})})]})},C={marginBottom:"var(--cometchat-spacing-6)",paddingBottom:"var(--cometchat-spacing-4)",borderBottom:"1px solid var(--cometchat-border-color-default)"},w={fontFamily:"var(--cometchat-font-family)",fontSize:"20px",fontWeight:600,lineHeight:"30px",color:"var(--cometchat-text-color-primary)",margin:0,marginBottom:"var(--cometchat-spacing-2)"},F={fontFamily:"var(--cometchat-font-family)",fontSize:"14px",lineHeight:"20px",color:"var(--cometchat-text-color-tertiary)",margin:0},U={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"var(--cometchat-spacing-4)"},L={display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-4)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-01)"},T={width:80,height:80,objectFit:"contain"},W={fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:500,color:"var(--cometchat-text-color-secondary)"},B={display:"flex",flexDirection:"column"},I={display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-4)",borderBottom:"1px solid var(--cometchat-border-color-light)"},_={width:40,height:40,objectFit:"contain"},R={fontFamily:"var(--cometchat-font-family)",fontSize:"16px",fontWeight:500,color:"var(--cometchat-text-color-primary)"},l={fontFamily:"var(--cometchat-font-family)",fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",marginTop:"var(--cometchat-spacing-2)",display:"block"};function d({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:t}),r]})}function m({language:t,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function i({title:t,description:r}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:600,color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:t}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:r})]})}var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Sticker Catalog",
  render: () => <div style={{
    maxWidth: 800,
    margin: "0 auto"
  }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Sticker Footage</h2>
        <p style={descStyle}>
          Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN.
        </p>
      </div>
      <div style={gridStyle}>
        {stickers.map(sticker => <div key={sticker.name} style={cardStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={stickerImgStyle} />
            <span style={cardLabelStyle}>{sticker.name}</span>
          </div>)}
      </div>
    </div>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Sticker List",
  render: () => <div style={{
    maxWidth: 480,
    margin: "0 auto"
  }}>
      <div style={listStyle}>
        {stickers.map(sticker => <div key={sticker.name} style={listItemStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={listStickerImgStyle} />
            <span style={listLabelStyle}>{sticker.name}</span>
          </div>)}
      </div>
    </div>
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var u,b,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div style={{
    maxWidth: 800,
    margin: "0 auto"
  }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Sticker Sizes</h2>
        <p style={descStyle}>
          Stickers can be rendered at different sizes depending on context.
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
          <span style={sizeLabelStyle}>48px (sm)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 80,
          height: 80,
          objectFit: "contain"
        }} />
          <span style={sizeLabelStyle}>80px (md)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 120,
          height: 120,
          objectFit: "contain"
        }} />
          <span style={sizeLabelStyle}>120px (lg)</span>
        </div>
        <div style={{
        textAlign: "center"
      }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{
          width: 160,
          height: 160,
          objectFit: "contain"
        }} />
          <span style={sizeLabelStyle}>160px (xl)</span>
        </div>
      </div>
    </div>
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,f,j;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const M=["StickerCatalog","StickerList","StickerSizes","Usage"];export{n as StickerCatalog,s as StickerList,c as StickerSizes,o as Usage,M as __namedExportsOrder,D as default};
