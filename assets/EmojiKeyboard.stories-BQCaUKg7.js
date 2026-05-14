import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as Y}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p={recents:"Recently Used",smileys:"Smiley & People",animals:"Animals & Nature",food:"Food & Drink",activity:"Activity",travel:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags"},ee={recents:["😀","😂","❤️","👍","🎉","🔥","😍","🙏","😊","💯"],smileys:["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓","🧐"],animals:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🐧","🐦","🐤","🦆"],food:["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬"],activity:["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🏓","🏸","🏒","🏑","🥍","🏏","🥅","⛳","🏹","🎣"],travel:["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🚲","🛴","🛹","🚁"],objects:["⌚","📱","💻","⌨️","🖥️","🖨️","🖱️","🖲️","🕹️","🗜️","💾","💿","📀","📼","📷","📸","📹","🎥","📽️","🎞️"],symbols:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️"],flags:["🏁","🚩","🎌","🏴","🏳️","🏳️‍🌈","🏳️‍⚧️","🇺🇸","🇬🇧","🇫🇷","🇩🇪","🇯🇵","🇰🇷","🇨🇳","🇮🇳","🇧🇷","🇨🇦","🇦🇺","🇮🇹","🇪🇸"]};function s({open:y=!0,activeCategory:G="smileys",onEmojiSelect:d}){const[m,J]=Y.useState(G);if(!y)return null;const Q=ee[m];return e.jsxs("div",{className:"emoji-keyboard",children:[e.jsxs("div",{className:"emoji-keyboard__header",children:[e.jsx("span",{className:"emoji-keyboard__category-label",children:p[m]}),e.jsxs("div",{className:"emoji-keyboard__search",children:[e.jsx("svg",{className:"emoji-keyboard__search-icon",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"currentColor"})}),e.jsx("span",{className:"emoji-keyboard__search-text",children:"Search"})]})]}),e.jsx("div",{className:"emoji-keyboard__grid",children:Q.map((a,X)=>e.jsx("button",{type:"button",className:"emoji-keyboard__emoji",onClick:()=>d==null?void 0:d(a),"aria-label":a,children:a},X))}),e.jsx("div",{className:"emoji-keyboard__tabs",children:Object.keys(p).map(a=>e.jsx("button",{type:"button",className:`emoji-keyboard__tab ${m===a?"emoji-keyboard__tab--active":""}`,onClick:()=>J(a),"aria-label":p[a],children:e.jsx("span",{className:"emoji-keyboard__tab-icon",children:ae[a]})},a))})]})}const ae={recents:"🕐",smileys:"😀",animals:"🐻",food:"🍔",activity:"⚽",travel:"✈️",objects:"💡",symbols:"❤️",flags:"🏁"};try{s.displayName="EmojiKeyboard",s.__docgenInfo={description:"",displayName:"EmojiKeyboard",props:{open:{defaultValue:{value:"true"},description:"Whether the keyboard is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},activeCategory:{defaultValue:{value:"smileys"},description:"Currently active category",name:"activeCategory",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"objects"'},{value:'"recents"'},{value:'"smileys"'},{value:'"animals"'},{value:'"food"'},{value:'"activity"'},{value:'"travel"'},{value:'"symbols"'},{value:'"flags"'}]}},onEmojiSelect:{defaultValue:null,description:"Callback when an emoji is selected",name:"onEmojiSelect",required:!1,type:{name:"((emoji: string) => void) | undefined"}},onClose:{defaultValue:null,description:"Callback when closed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const te={title:"Base Components/Emoji Keyboard",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An emoji picker popup with categories, search, and a grid of selectable emojis.\nAppears above the message composer when the emoji icon is clicked.\n\n**Structure (from Figma node 4105:547232 → Emoji Popup):**\n- Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`\n- Category label: 14px, weight 400, `--color-neutral-600`\n- Search: 28px height, `--radius-full`, `--color-neutral-100` bg\n- Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row\n- Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md`\n\n**Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags"}}},argTypes:{open:{control:"boolean",description:"Whether the keyboard is visible."},activeCategory:{control:"select",options:["recents","smileys","animals","food","activity","travel","objects","symbols","flags"],description:"Active emoji category."},onEmojiSelect:{control:!1},onClose:{control:!1}}},r={args:{open:!0,activeCategory:"smileys"}},o={args:{open:!0,activeCategory:"recents"}},t={args:{open:!0,activeCategory:"animals"}},i={args:{open:!0,activeCategory:"food"}},n={args:{open:!0,activeCategory:"symbols"}},c={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-6)",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(s,{activeCategory:"smileys"}),e.jsx(s,{activeCategory:"animals"}),e.jsx(s,{activeCategory:"flags"})]})},l={args:{open:!0,activeCategory:"smileys"},parameters:{docs:{disable:!0}}};var u,g,v,b,j;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Default state — Smileys & People category active (matches Figma).",...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var f,C,h,x,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "recents"
  }
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source},description:{story:"Recently used emojis.",...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.description}}};var k,S,N,A,E;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "animals"
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"Animals & Nature category.",...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var w,F,P,D,K;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "food"
  }
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Food & Drink category.",...(K=(D=i.parameters)==null?void 0:D.docs)==null?void 0:K.description}}};var L,R,V,q,O;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "symbols"
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"Symbols category.",...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var W,I,T,B,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:"All categories side by side for comparison.",...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var Z,z,H,U,$;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    open: true,
    activeCategory: "smileys"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(H=(z=l.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"Interactive playground.",...($=(U=l.parameters)==null?void 0:U.docs)==null?void 0:$.description}}};const ie=["Default","Recents","Animals","Food","Symbols","AllCategories","Playground"];export{c as AllCategories,t as Animals,r as Default,i as Food,l as Playground,o as Recents,n as Symbols,ie as __namedExportsOrder,te as default};
