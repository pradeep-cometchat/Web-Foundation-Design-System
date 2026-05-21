import{j as e}from"./jsx-runtime-BYYWji4R.js";import{E as d}from"./EmojiKeyboard-BCfxvT_P.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const te={title:"Base Components/Emoji Keyboard",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An emoji picker popup with categories, search, and a grid of selectable emojis.\nAppears above the message composer when the emoji icon is clicked.\n\n**Structure (from Figma node 4105:547232 → Emoji Popup):**\n- Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Category label: 14px, weight 400, `--color-neutral-600`\n- Search: 28px height, `--radius-full`, `--color-neutral-100` bg\n- Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row\n- Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md`\n\n**Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags"}}},argTypes:{open:{control:"boolean",description:"Whether the keyboard is visible."},activeCategory:{control:"select",options:["recents","smileys","animals","food","activity","travel","objects","symbols","flags"],description:"Active emoji category."},onEmojiSelect:{control:!1},onClose:{control:!1}}},a={args:{open:!0,activeCategory:"smileys"}},o={args:{open:!0,activeCategory:"recents"}},r={args:{open:!0,activeCategory:"animals"}},t={args:{open:!0,activeCategory:"food"}},n={args:{open:!0,activeCategory:"symbols"}},s={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-6)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(d,{activeCategory:"smileys"}),e.jsx(d,{activeCategory:"animals"}),e.jsx(d,{activeCategory:"flags"})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{title:"HTML",children:e.jsx(m,{language:"HTML",code:`<!-- Emoji Keyboard -->
<div class="emoji-keyboard">
  <div class="emoji-keyboard__header">
    <span class="emoji-keyboard__category-label">Smileys & People</span>
    <div class="emoji-keyboard__search">
      <span class="emoji-keyboard__search-icon"><!-- search SVG --></span>
      <span class="emoji-keyboard__search-text">Search</span>
    </div>
  </div>
  <div class="emoji-keyboard__grid">
    <button class="emoji-keyboard__emoji" type="button">😀</button>
    <button class="emoji-keyboard__emoji" type="button">😃</button>
    <button class="emoji-keyboard__emoji" type="button">😄</button>
    <!-- 10 per row -->
  </div>
  <div class="emoji-keyboard__tabs">
    <button class="emoji-keyboard__tab emoji-keyboard__tab--active" type="button">
      <span class="emoji-keyboard__tab-icon">😊</span>
    </button>
    <button class="emoji-keyboard__tab" type="button">
      <span class="emoji-keyboard__tab-icon">🐶</span>
    </button>
  </div>
</div>`})}),e.jsx(g,{title:"CSS (CometChat Tokens)",children:e.jsx(m,{language:"CSS",code:`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 28px;
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-2);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  padding: 0 var(--cometchat-spacing-3) var(--cometchat-spacing-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--cometchat-radius-1);
}

.emoji-keyboard__emoji:hover {
  background: var(--cometchat-background-color-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--cometchat-extended-primary-color-100);
}`})})]})},i={args:{open:!0,activeCategory:"smileys"},parameters:{docs:{disable:!0}}},m=({language:p,code:l})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:p})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:l})})]});function g({title:p,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:p}),l]})}var b,u,y,h,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:"Default state — Smileys & People category active (matches Figma).",...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var x,j,_,k,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "recents"
  }
}`,...(_=(j=o.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Recently used emojis.",...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.description}}};var C,S,w,E,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "animals"
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Animals & Nature category.",...(A=(E=r.parameters)==null?void 0:E.docs)==null?void 0:A.description}}};var T,U,F,K,P;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "food"
  }
}`,...(F=(U=t.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:"Food & Drink category.",...(P=(K=t.parameters)==null?void 0:K.docs)==null?void 0:P.description}}};var D,W,z,H,R;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "symbols"
  }
}`,...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"Symbols category.",...(R=(H=n.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var L,M,B,G,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      <EmojiKeyboard activeCategory="smileys" />
      <EmojiKeyboard activeCategory="animals" />
      <EmojiKeyboard activeCategory="flags" />
    </div>
}`,...(B=(M=s.parameters)==null?void 0:M.docs)==null?void 0:B.source},description:{story:"All categories side by side for comparison.",...(I=(G=s.parameters)==null?void 0:G.docs)==null?void 0:I.description}}};var N,O,V,X,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- Emoji Keyboard -->
<div class="emoji-keyboard">
  <div class="emoji-keyboard__header">
    <span class="emoji-keyboard__category-label">Smileys & People</span>
    <div class="emoji-keyboard__search">
      <span class="emoji-keyboard__search-icon"><!-- search SVG --></span>
      <span class="emoji-keyboard__search-text">Search</span>
    </div>
  </div>
  <div class="emoji-keyboard__grid">
    <button class="emoji-keyboard__emoji" type="button">😀</button>
    <button class="emoji-keyboard__emoji" type="button">😃</button>
    <button class="emoji-keyboard__emoji" type="button">😄</button>
    <!-- 10 per row -->
  </div>
  <div class="emoji-keyboard__tabs">
    <button class="emoji-keyboard__tab emoji-keyboard__tab--active" type="button">
      <span class="emoji-keyboard__tab-icon">😊</span>
    </button>
    <button class="emoji-keyboard__tab" type="button">
      <span class="emoji-keyboard__tab-icon">🐶</span>
    </button>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 28px;
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-2);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  padding: 0 var(--cometchat-spacing-3) var(--cometchat-spacing-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--cometchat-radius-1);
}

.emoji-keyboard__emoji:hover {
  background: var(--cometchat-background-color-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--cometchat-extended-primary-color-100);
}\`} />
      </UsageSection>
    </div>
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"HTML & CSS usage reference for the Emoji Keyboard component.",...(q=(X=c.parameters)==null?void 0:X.docs)==null?void 0:q.description}}};var J,Q,Y,Z,$;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(Y=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Interactive playground.",...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const ne=["Default","Recents","Animals","Food","Symbols","AllCategories","Usage","Playground"];export{s as AllCategories,r as Animals,a as Default,t as Food,i as Playground,o as Recents,n as Symbols,c as Usage,ne as __namedExportsOrder,te as default};
