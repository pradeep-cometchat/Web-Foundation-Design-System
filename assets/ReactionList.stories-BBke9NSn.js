import{j as a}from"./jsx-runtime-BYYWji4R.js";import{r as le}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({tabs:s,items:u,activeTab:v,onTabChange:y,onItemClick:g}){var h;const[b,ie]=le.useState(v||((h=s[0])==null?void 0:h.key)||"all"),re=e=>{ie(e),y==null||y(e)},ne=b==="all"?u:u.filter(e=>e.emoji===b);return a.jsxs("div",{className:"reaction-list",role:"dialog","aria-label":"Reaction details",children:[a.jsx("div",{className:"reaction-list__tabs",role:"tablist",children:s.map(e=>a.jsx("button",{type:"button",role:"tab","aria-selected":b===e.key,className:`reaction-list__tab ${b===e.key?"reaction-list__tab--active":""}`,onClick:()=>re(e.key),children:e.label},e.key))}),a.jsx("div",{className:"reaction-list__body",role:"tabpanel",children:ne.map((e,oe)=>a.jsxs("button",{type:"button",className:"reaction-list__item",onClick:()=>{var j;(j=e.onClick)==null||j.call(e),g==null||g(e)},children:[a.jsx("div",{className:"reaction-list__avatar",children:e.avatar?a.jsx("img",{src:e.avatar,alt:e.name}):a.jsx(ce,{name:e.name})}),a.jsxs("div",{className:"reaction-list__text",children:[a.jsx("span",{className:"reaction-list__name",children:e.name}),e.subtitle&&a.jsx("span",{className:"reaction-list__subtitle",children:e.subtitle})]}),a.jsx("span",{className:"reaction-list__emoji",children:e.emoji})]},oe))})]})}function ce({name:s}){const u=s.split(" ").map(v=>v[0]).join("").slice(0,2).toUpperCase();return a.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-neutral-200, #e9eaeb)",fontFamily:"var(--font-family-body, Inter, sans-serif)",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600, #535862)"},children:u})}try{t.displayName="ReactionList",t.__docgenInfo={description:"",displayName:"ReactionList",props:{tabs:{defaultValue:null,description:'Tabs to display (e.g. "All 5", "😍 3", "👍 2")',name:"tabs",required:!0,type:{name:"ReactionTab[]"}},items:{defaultValue:null,description:"List of reactor items",name:"items",required:!0,type:{name:"ReactionListItem[]"}},activeTab:{defaultValue:null,description:"Initially active tab key. Default: first tab",name:"activeTab",required:!1,type:{name:"string | undefined"}},onTabChange:{defaultValue:null,description:"Callback when a tab is selected",name:"onTabChange",required:!1,type:{name:"((key: string) => void) | undefined"}},onItemClick:{defaultValue:null,description:"Callback when a list item is clicked",name:"onItemClick",required:!1,type:{name:"((item: ReactionListItem) => void) | undefined"}}}}}catch{}const ve={title:"Base Components/Reaction List",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup showing who reacted to a message, with emoji filter tabs and a list of reactors.
Each item shows an avatar, name, optional subtitle, and the emoji they reacted with.

**Structure (from Figma node 4043:476218):**
- Container: radius-2xl (16px), shadow-lg, border \`#f5f5f5\`, bg white
- Tabs: border-bottom \`#e9eaeb\`, pt-8, height 40px
  - Active tab: text \`#6852d6\`, border-bottom 2px \`#6852d6\`
  - Inactive tab: text \`#717680\`
- List items: px-20 py-8, gap-12
  - Avatar: 32×32, full-round
  - Name: 14px medium, #181d27
  - Subtitle: 12px regular, #414651
  - Emoji: 20px, 24px wide`}}},argTypes:{tabs:{control:"object",description:"Tabs to display (e.g. 'All 5', '😍 3')."},items:{control:"object",description:"List of reactor items."},activeTab:{control:"text",description:"Initially active tab key."},onTabChange:{control:!1},onItemClick:{control:!1}}},te=[{label:"All 1",key:"all"},{label:"😍 1",key:"😍"}],se=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"}],p=[{label:"All 5",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"}],d=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"}],me=[{label:"All 8",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"},{label:"😂 2",key:"😂"},{label:"🔥 1",key:"🔥"}],pe=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"},{name:"Charlie Brown",avatar:"https://i.pravatar.cc/32?u=charlie",emoji:"😂"},{name:"Diana Prince",avatar:"https://i.pravatar.cc/32?u=diana",emoji:"😂"},{name:"Eve Wilson",avatar:"https://i.pravatar.cc/32?u=eve",emoji:"🔥"}],i={args:{tabs:te,items:se,activeTab:"all"}},r={args:{tabs:p,items:d,activeTab:"all"}},n={args:{tabs:me,items:pe,activeTab:"all"}},o={args:{tabs:p,items:d,activeTab:"👍"}},l={args:{tabs:[{label:"All 1",key:"all"},{label:"👍 1",key:"👍"}],items:[{name:"You",emoji:"👍",subtitle:"Tap to remove"}],activeTab:"all"}},c={parameters:{layout:"fullscreen"},render:()=>a.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-8)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[a.jsx("div",{style:f,children:"Single reaction"}),a.jsx(t,{tabs:te,items:se,activeTab:"all"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[a.jsx("div",{style:f,children:"Multiple reactions"}),a.jsx(t,{tabs:p,items:d,activeTab:"all"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[a.jsx("div",{style:f,children:"Filtered (👍)"}),a.jsx(t,{tabs:p,items:d,activeTab:"👍"})]})]})},m={args:{tabs:p,items:d,activeTab:"all"},parameters:{docs:{disable:!0}}},f={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"};var x,T,R,_,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tabs: singleReactionTabs,
    items: singleReactionItems,
    activeTab: "all"
  }
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source},description:{story:"Default state — single reaction, exact match to Figma node 4043:476218.",...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var S,w,I,D,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all"
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source},description:{story:"Multiple reactions with different emojis.",...(A=(D=r.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var L,E,N,C,F;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tabs: manyEmojiTabs,
    items: manyEmojiItems,
    activeTab: "all"
  }
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"Many emoji types with several reactors.",...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var M,B,P,q,V;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "👍"
  }
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:"Filtered view — showing only a specific emoji tab.",...(V=(q=o.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var W,Y,z,O,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: "All 1",
      key: "all"
    }, {
      label: "👍 1",
      key: "👍"
    }],
    items: [{
      name: "You",
      emoji: "👍",
      subtitle: "Tap to remove"
    }],
    activeTab: "all"
  }
}`,...(z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:z.source},description:{story:'Single user with "Tap to remove" subtitle.',...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.description}}};var J,U,$,H,K;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    gap: "var(--space-8)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Single reaction</div>
        <ReactionList tabs={singleReactionTabs} items={singleReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Multiple reactions</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Filtered (👍)</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="👍" />
      </div>
    </div>
}`,...($=(U=c.parameters)==null?void 0:U.docs)==null?void 0:$.source},description:{story:"All variants side by side.",...(K=(H=c.parameters)==null?void 0:H.docs)==null?void 0:K.description}}};var Q,X,Z,ee,ae;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};const ye=["Default","MultipleReactions","ManyEmojis","FilteredByEmoji","OwnReaction","States","Playground"];export{i as Default,o as FilteredByEmoji,n as ManyEmojis,r as MultipleReactions,l as OwnReaction,m as Playground,c as States,ye as __namedExportsOrder,ve as default};
