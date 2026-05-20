import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as F}from"./avatars-9G6xvYo0.js";/* empty css               */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={title:"Foundation/Stickers",tags:["autodocs"],parameters:{layout:"padded",themes:{themeOverride:"Light"},docs:{description:{component:`Stickers are illustrated character expressions used in chat messages.
Each sticker is a pre-rendered PNG asset from the design system's avatar registry.

Source: \`foundation/tokens/avatars.ts\` → "Sticker Footage" category.`}}}},r=F["Sticker Footage"],n={name:"Sticker Catalog",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:z,children:[e.jsx("h2",{style:w,children:"Sticker Footage"}),e.jsx("p",{style:C,children:"Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN."})]}),e.jsx("div",{style:U,children:r.map(t=>e.jsxs("div",{style:L,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:T}),e.jsx("span",{style:W,children:t.name})]},t.name))})]})},s={name:"Sticker List",render:()=>e.jsx("div",{style:{maxWidth:480,margin:"0 auto"},children:e.jsx("div",{style:B,children:r.map(t=>e.jsxs("div",{style:I,children:[e.jsx("img",{src:t.imageUrl,alt:t.name,style:_}),e.jsx("span",{style:R,children:t.name})]},t.name))})})},l={name:"Sizes",render:()=>e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{style:z,children:[e.jsx("h2",{style:w,children:"Sticker Sizes"}),e.jsx("p",{style:C,children:"Stickers can be rendered at different sizes depending on context."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--space-8)",padding:"var(--space-6)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:r[0].imageUrl,alt:r[0].name,style:{width:48,height:48,objectFit:"contain"}}),e.jsx("span",{style:o,children:"48px (sm)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:r[0].imageUrl,alt:r[0].name,style:{width:80,height:80,objectFit:"contain"}}),e.jsx("span",{style:o,children:"80px (md)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:r[0].imageUrl,alt:r[0].name,style:{width:120,height:120,objectFit:"contain"}}),e.jsx("span",{style:o,children:"120px (lg)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:r[0].imageUrl,alt:r[0].name,style:{width:160,height:160,objectFit:"contain"}}),e.jsx("span",{style:o,children:"160px (xl)"})]})]})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"Token Source",children:e.jsx(p,{language:"TypeScript",code:`import { avatarRegistry } from "../tokens/avatars";

const stickers = avatarRegistry["Sticker Footage"];
// [
//   { name: "Sticker 01", imageUrl: "https://figma-alpha-api..." },
//   { name: "Sticker 02", imageUrl: "https://figma-alpha-api..." },
//   ...
// ]`})}),e.jsx(d,{title:"HTML Structure",children:e.jsx(p,{language:"HTML",code:`<!-- Sticker in chat bubble (no bubble background) -->
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
</div>`})}),e.jsx(d,{title:"Specifications",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(i,{title:"Format",description:"PNG with transparent background, pre-rendered at 2× resolution."}),e.jsx(i,{title:"Source",description:"avatarRegistry['Sticker Footage'] in foundation/tokens/avatars.ts"}),e.jsx(i,{title:"Sizes",description:"sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview)."}),e.jsx(i,{title:"Chat Bubble",description:"Stickers render without bubble background — just the image + timestamp."}),e.jsx(i,{title:"Picker Grid",description:"Displayed in a 4-column grid at 80×80px in the sticker picker panel."}),e.jsx(i,{title:"Count",description:"6 stickers in the current set."})]})})]})},z={marginBottom:"var(--space-6)",paddingBottom:"var(--space-4)",borderBottom:"1px solid var(--color-border-default)"},w={fontFamily:"var(--font-family-heading)",fontSize:"var(--font-size-5)",fontWeight:600,lineHeight:"var(--line-height-h2)",color:"var(--color-text-primary)",margin:0,marginBottom:"var(--space-2)"},C={fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-2)",lineHeight:"var(--line-height-body)",color:"var(--color-text-tertiary)",margin:0},U={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"var(--space-4)"},L={display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-4)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)",background:"var(--color-bg-01)"},T={width:80,height:80,objectFit:"contain"},W={fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",fontWeight:500,color:"var(--color-text-secondary)"},B={display:"flex",flexDirection:"column"},I={display:"flex",alignItems:"center",gap:"var(--space-4)",padding:"var(--space-3) var(--space-4)",borderBottom:"1px solid var(--color-border-light)"},_={width:40,height:40,objectFit:"contain"},R={fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-3)",fontWeight:500,color:"var(--color-text-primary)"},o={fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",marginTop:"var(--space-2)",display:"block"};function d({title:t,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:600,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:t}),a]})}function p({language:t,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function i({title:t,description:a}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:600,color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:t}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:a})]})}var m,g,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,u,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      gap: "var(--space-8)",
      padding: "var(--space-6)"
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
}`,...(S=(u=l.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var k,f,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        gap: "var(--space-3)"
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
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const M=["StickerCatalog","StickerList","StickerSizes","Usage"];export{n as StickerCatalog,s as StickerList,l as StickerSizes,c as Usage,M as __namedExportsOrder,D as default};
