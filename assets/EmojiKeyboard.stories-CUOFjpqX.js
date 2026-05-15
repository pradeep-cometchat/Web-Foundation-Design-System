import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ie}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={recents:"Recently Used",smileys:"Smiley & People",animals:"Animals & Nature",food:"Food & Drink",activity:"Activity",travel:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags"},ce={recents:["😀","😂","❤️","👍","🎉","🔥","😍","🙏","😊","💯"],smileys:["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓","🧐"],animals:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🐧","🐦","🐤","🦆"],food:["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬"],activity:["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🏓","🏸","🏒","🏑","🥍","🏏","🥅","⛳","🏹","🎣"],travel:["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🚲","🛴","🛹","🚁"],objects:["⌚","📱","💻","⌨️","🖥️","🖨️","🖱️","🖲️","🕹️","🗜️","💾","💿","📀","📼","📷","📸","📹","🎥","📽️","🎞️"],symbols:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️"],flags:["🏁","🚩","🎌","🏴","🏳️","🏳️‍🌈","🏳️‍⚧️","🇺🇸","🇬🇧","🇫🇷","🇩🇪","🇯🇵","🇰🇷","🇨🇳","🇮🇳","🇧🇷","🇨🇦","🇦🇺","🇮🇹","🇪🇸"]};function o({open:r=!0,activeCategory:s="smileys",onEmojiSelect:b}){const[y,se]=ie.useState(s);if(!r)return null;const te=ce[y];return e.jsxs("div",{className:"emoji-keyboard",children:[e.jsxs("div",{className:"emoji-keyboard__header",children:[e.jsx("span",{className:"emoji-keyboard__category-label",children:u[y]}),e.jsxs("div",{className:"emoji-keyboard__search",children:[e.jsx("svg",{className:"emoji-keyboard__search-icon",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"currentColor"})}),e.jsx("span",{className:"emoji-keyboard__search-text",children:"Search"})]})]}),e.jsx("div",{className:"emoji-keyboard__grid",children:te.map((a,ne)=>e.jsx("button",{type:"button",className:"emoji-keyboard__emoji",onClick:()=>b==null?void 0:b(a),"aria-label":a,children:a},ne))}),e.jsx("div",{className:"emoji-keyboard__tabs",children:Object.keys(u).map(a=>e.jsx("button",{type:"button",className:`emoji-keyboard__tab ${y===a?"emoji-keyboard__tab--active":""}`,onClick:()=>se(a),"aria-label":u[a],children:e.jsx("span",{className:"emoji-keyboard__tab-icon",children:de[a]})},a))})]})}const de={recents:"🕐",smileys:"😀",animals:"🐻",food:"🍔",activity:"⚽",travel:"✈️",objects:"💡",symbols:"❤️",flags:"🏁"};try{o.displayName="EmojiKeyboard",o.__docgenInfo={description:"",displayName:"EmojiKeyboard",props:{open:{defaultValue:{value:"true"},description:"Whether the keyboard is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},activeCategory:{defaultValue:{value:"smileys"},description:"Currently active category",name:"activeCategory",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"objects"'},{value:'"recents"'},{value:'"smileys"'},{value:'"animals"'},{value:'"food"'},{value:'"activity"'},{value:'"travel"'},{value:'"symbols"'},{value:'"flags"'}]}},onEmojiSelect:{defaultValue:null,description:"Callback when an emoji is selected",name:"onEmojiSelect",required:!1,type:{name:"((emoji: string) => void) | undefined"}},onClose:{defaultValue:null,description:"Callback when closed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const be={title:"Base Components/Emoji Keyboard",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An emoji picker popup with categories, search, and a grid of selectable emojis.\nAppears above the message composer when the emoji icon is clicked.\n\n**Structure (from Figma node 4105:547232 → Emoji Popup):**\n- Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Category label: 14px, weight 400, `--color-neutral-600`\n- Search: 28px height, `--radius-full`, `--color-neutral-100` bg\n- Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row\n- Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md`\n\n**Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags"}}},argTypes:{open:{control:"boolean",description:"Whether the keyboard is visible."},activeCategory:{control:"select",options:["recents","smileys","animals","food","activity","travel","objects","symbols","flags"],description:"Active emoji category."},onEmojiSelect:{control:!1},onClose:{control:!1}}},t={args:{open:!0,activeCategory:"smileys"}},n={args:{open:!0,activeCategory:"recents"}},i={args:{open:!0,activeCategory:"animals"}},c={args:{open:!0,activeCategory:"food"}},d={args:{open:!0,activeCategory:"symbols"}},l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(o,{activeCategory:"smileys"}),e.jsx(o,{activeCategory:"animals"}),e.jsx(o,{activeCategory:"flags"})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(v,{title:"HTML",children:e.jsx(g,{language:"HTML",code:`<!-- Emoji Keyboard -->
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
</div>`})}),e.jsx(v,{title:"CSS (Foundation Variables)",children:e.jsx(g,{language:"CSS",code:`.emoji-keyboard {
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
}`})})]})},m={args:{open:!0,activeCategory:"smileys"},parameters:{docs:{disable:!0}}},g=({language:r,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function v({title:r,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:r}),s]})}var j,_,h,x,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  }
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source},description:{story:"Default state — Smileys & People category active (matches Figma).",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var k,C,S,w,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "recents"
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"Recently used emojis.",...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var E,A,F,z,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "animals"
  }
}`,...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Animals & Nature category.",...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var U,K,P,T,D;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "food"
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:"Food & Drink category.",...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var V,W,H,M,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "symbols"
  }
}`,...(H=(W=d.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:"Symbols category.",...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var q,B,I,O,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"All categories side by side for comparison.",...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.description}}};var Z,X,$,J,Q;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"HTML & CSS usage reference for the Emoji Keyboard component.",...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,ee,ae,re,oe;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Interactive playground.",...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};const ye=["Default","Recents","Animals","Food","Symbols","AllCategories","Usage","Playground"];export{l as AllCategories,i as Animals,t as Default,c as Food,m as Playground,n as Recents,d as Symbols,p as Usage,ye as __namedExportsOrder,be as default};
