import{j as e}from"./jsx-runtime-BYYWji4R.js";import{E as c}from"./EmojiKeyboard-2A3lJpWs.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const se={title:"Base Components/Emoji Keyboard",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An emoji picker popup with categories, search, and a grid of selectable emojis.\nAppears above the message composer when the emoji icon is clicked.\n\n**Structure (from Figma node 4105:547232 → Emoji Popup):**\n- Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Category label: 14px, weight 400, `--color-neutral-600`\n- Search: 28px height, `--radius-full`, `--color-neutral-100` bg\n- Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row\n- Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md`\n\n**Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags"}}},argTypes:{open:{control:"boolean",description:"Whether the keyboard is visible."},activeCategory:{control:"select",options:["recents","smileys","animals","food","activity","travel","objects","symbols","flags"],description:"Active emoji category."},onEmojiSelect:{control:!1},onClose:{control:!1}}},a={args:{open:!0,activeCategory:"smileys"}},r={args:{open:!0,activeCategory:"recents"}},o={args:{open:!0,activeCategory:"animals"}},s={args:{open:!0,activeCategory:"food"}},n={args:{open:!0,activeCategory:"symbols"}},t={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(c,{activeCategory:"smileys"}),e.jsx(c,{activeCategory:"animals"}),e.jsx(c,{activeCategory:"flags"})]})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(b,{title:"HTML",children:e.jsx(m,{language:"HTML",code:`<!-- Emoji Keyboard -->
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
</div>`})}),e.jsx(b,{title:"CSS (Foundation Variables)",children:e.jsx(m,{language:"CSS",code:`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  height: 28px;
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--space-2) var(--space-3);
  padding: 0 var(--space-3) var(--space-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: var(--font-size-5);
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-xs);
}

.emoji-keyboard__emoji:hover {
  background: var(--color-bg-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--color-ep-100);
}`})})]})},d={args:{open:!0,activeCategory:"smileys"},parameters:{docs:{disable:!0}}},m=({language:l,code:p})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:p})})]});function b({title:l,children:p}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:l}),p]})}var g,u,y,v,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:"Default state — Smileys & People category active (matches Figma).",...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.description}}};var _,x,h,f,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "recents"
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Recently used emojis.",...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};var S,C,w,E,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "animals"
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"Animals & Nature category.",...(z=(E=o.parameters)==null?void 0:E.docs)==null?void 0:z.description}}};var A,F,U,T,K;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "food"
  }
}`,...(U=(F=s.parameters)==null?void 0:F.docs)==null?void 0:U.source},description:{story:"Food & Drink category.",...(K=(T=s.parameters)==null?void 0:T.docs)==null?void 0:K.description}}};var P,D,W,H,R;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "symbols"
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source},description:{story:"Symbols category.",...(R=(H=n.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var L,M,V,B,G;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    gap: "var(--space-6)",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      <EmojiKeyboard activeCategory="smileys" />
      <EmojiKeyboard activeCategory="animals" />
      <EmojiKeyboard activeCategory="flags" />
    </div>
}`,...(V=(M=t.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:"All categories side by side for comparison.",...(G=(B=t.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var I,N,O,X,q;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  height: 28px;
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--space-2) var(--space-3);
  padding: 0 var(--space-3) var(--space-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: var(--font-size-5);
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-xs);
}

.emoji-keyboard__emoji:hover {
  background: var(--color-bg-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--color-ep-100);
}\`} />
      </UsageSection>
    </div>
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:"HTML & CSS usage reference for the Emoji Keyboard component.",...(q=(X=i.parameters)==null?void 0:X.docs)==null?void 0:q.description}}};var J,Q,Y,Z,$;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Interactive playground.",...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const ne=["Default","Recents","Animals","Food","Symbols","AllCategories","Usage","Playground"];export{t as AllCategories,o as Animals,a as Default,s as Food,d as Playground,r as Recents,n as Symbols,i as Usage,ne as __namedExportsOrder,se as default};
