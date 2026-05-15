import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ge}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({tabs:t,items:i,activeTab:g,onTabChange:y,onItemClick:f}){var x;const[b,me]=ge.useState(g||((x=t[0])==null?void 0:x.key)||"all"),ue=a=>{me(a),y==null||y(a)},ve=b==="all"?i:i.filter(a=>a.emoji===b);return e.jsxs("div",{className:"reaction-list",role:"dialog","aria-label":"Reaction details",children:[e.jsx("div",{className:"reaction-list__tabs",role:"tablist",children:t.map(a=>e.jsx("button",{type:"button",role:"tab","aria-selected":b===a.key,className:`reaction-list__tab ${b===a.key?"reaction-list__tab--active":""}`,onClick:()=>ue(a.key),children:a.label},a.key))}),e.jsx("div",{className:"reaction-list__body",role:"tabpanel",children:ve.map((a,be)=>e.jsxs("button",{type:"button",className:"reaction-list__item",onClick:()=>{var h;(h=a.onClick)==null||h.call(a),f==null||f(a)},children:[e.jsx("div",{className:"reaction-list__avatar",children:a.avatar?e.jsx("img",{src:a.avatar,alt:a.name}):e.jsx(ye,{name:a.name})}),e.jsxs("div",{className:"reaction-list__text",children:[e.jsx("span",{className:"reaction-list__name",children:a.name}),a.subtitle&&e.jsx("span",{className:"reaction-list__subtitle",children:a.subtitle})]}),e.jsx("span",{className:"reaction-list__emoji",children:a.emoji})]},be))})]})}function ye({name:t}){const i=t.split(" ").map(g=>g[0]).join("").slice(0,2).toUpperCase();return e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-neutral-200, #e9eaeb)",fontFamily:"var(--font-family-body, Inter, sans-serif)",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600, #535862)"},children:i})}try{n.displayName="ReactionList",n.__docgenInfo={description:"",displayName:"ReactionList",props:{tabs:{defaultValue:null,description:'Tabs to display (e.g. "All 5", "😍 3", "👍 2")',name:"tabs",required:!0,type:{name:"ReactionTab[]"}},items:{defaultValue:null,description:"List of reactor items",name:"items",required:!0,type:{name:"ReactionListItem[]"}},activeTab:{defaultValue:null,description:"Initially active tab key. Default: first tab",name:"activeTab",required:!1,type:{name:"string | undefined"}},onTabChange:{defaultValue:null,description:"Callback when a tab is selected",name:"onTabChange",required:!1,type:{name:"((key: string) => void) | undefined"}},onItemClick:{defaultValue:null,description:"Callback when a list item is clicked",name:"onItemClick",required:!1,type:{name:"((item: ReactionListItem) => void) | undefined"}}}}}catch{}const Te={title:"Base Components/Reaction List",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup showing who reacted to a message, with emoji filter tabs and a list of reactors.
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
  - Emoji: 20px, 24px wide`}}},argTypes:{tabs:{control:"object",description:"Tabs to display (e.g. 'All 5', '😍 3')."},items:{control:"object",description:"List of reactor items."},activeTab:{control:"text",description:"Initially active tab key."},onTabChange:{control:!1},onItemClick:{control:!1}}},de=[{label:"All 1",key:"all"},{label:"😍 1",key:"😍"}],pe=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"}],u=[{label:"All 5",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"}],v=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"}],fe=[{label:"All 8",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"},{label:"😂 2",key:"😂"},{label:"🔥 1",key:"🔥"}],_e=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"},{name:"Charlie Brown",avatar:"https://i.pravatar.cc/32?u=charlie",emoji:"😂"},{name:"Diana Prince",avatar:"https://i.pravatar.cc/32?u=diana",emoji:"😂"},{name:"Eve Wilson",avatar:"https://i.pravatar.cc/32?u=eve",emoji:"🔥"}],s={args:{tabs:de,items:pe,activeTab:"all"}},r={args:{tabs:u,items:v,activeTab:"all"}},o={args:{tabs:fe,items:_e,activeTab:"all"}},l={args:{tabs:u,items:v,activeTab:"👍"}},c={args:{tabs:[{label:"All 1",key:"all"},{label:"👍 1",key:"👍"}],items:[{name:"You",emoji:"👍",subtitle:"Tap to remove"}],activeTab:"all"}},d={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",gap:"var(--space-8)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:_,children:"Single reaction"}),e.jsx(n,{tabs:de,items:pe,activeTab:"all"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:_,children:"Multiple reactions"}),e.jsx(n,{tabs:u,items:v,activeTab:"all"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:_,children:"Filtered (👍)"}),e.jsx(n,{tabs:u,items:v,activeTab:"👍"})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(T,{title:"HTML",children:e.jsx(j,{language:"HTML",code:`<!-- Reaction List -->
<div class="reaction-list">
  <div class="reaction-list__tabs">
    <button class="reaction-list__tab reaction-list__tab--active" type="button">All 5</button>
    <button class="reaction-list__tab" type="button">😍 3</button>
    <button class="reaction-list__tab" type="button">👍 2</button>
  </div>
  <div class="reaction-list__body">
    <button class="reaction-list__item" type="button">
      <div class="reaction-list__avatar">
        <img src="avatar.jpg" alt="You" />
      </div>
      <div class="reaction-list__text">
        <span class="reaction-list__name">You</span>
        <span class="reaction-list__subtitle">Tap to remove</span>
      </div>
      <span class="reaction-list__emoji">😍</span>
    </button>
    <button class="reaction-list__item" type="button">
      <div class="reaction-list__avatar">
        <img src="avatar2.jpg" alt="George" />
      </div>
      <div class="reaction-list__text">
        <span class="reaction-list__name">George Alan</span>
      </div>
      <span class="reaction-list__emoji">😍</span>
    </button>
  </div>
</div>`})}),e.jsx(T,{title:"CSS (Foundation Variables)",children:e.jsx(j,{language:"CSS",code:`.reaction-list {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  width: 280px;
  display: flex;
  flex-direction: column;
}

.reaction-list__tabs {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-bottom: 1px solid var(--color-border-default);
}

.reaction-list__tab {
  height: 40px;
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  border-bottom: 2px solid transparent;
}

.reaction-list__tab--active {
  color: var(--color-ep-500);
  border-bottom-color: var(--color-ep-500);
}

.reaction-list__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  cursor: pointer;
}

.reaction-list__item:hover {
  background: var(--color-bg-02);
}

.reaction-list__avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.reaction-list__name {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.reaction-list__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.reaction-list__emoji {
  font-size: var(--font-size-5);
  width: 24px;
}`})})]})},m={args:{tabs:u,items:v,activeTab:"all"},parameters:{docs:{disable:!0}}},_={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"},j=({language:t,code:i})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:i})})]});function T({title:t,children:i}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:t}),i]})}var w,S,R,k,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tabs: singleReactionTabs,
    items: singleReactionItems,
    activeTab: "all"
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source},description:{story:"Default state — single reaction, exact match to Figma node 4043:476218.",...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var C,L,I,D,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all"
  }
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source},description:{story:"Multiple reactions with different emojis.",...(A=(D=r.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var E,M,N,F,U;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tabs: manyEmojiTabs,
    items: manyEmojiItems,
    activeTab: "all"
  }
}`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Many emoji types with several reactors.",...(U=(F=o.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};var W,Y,B,V,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "👍"
  }
}`,...(B=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:B.source},description:{story:"Filtered view — showing only a specific emoji tab.",...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var H,P,q,O,J;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:q.source},description:{story:'Single user with "Tap to remove" subtitle.',...(J=(O=c.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var X,$,K,Q,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=($=d.parameters)==null?void 0:$.docs)==null?void 0:K.source},description:{story:"All variants side by side.",...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,ae,te,ie,ne;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Reaction List -->
<div class="reaction-list">
  <div class="reaction-list__tabs">
    <button class="reaction-list__tab reaction-list__tab--active" type="button">All 5</button>
    <button class="reaction-list__tab" type="button">😍 3</button>
    <button class="reaction-list__tab" type="button">👍 2</button>
  </div>
  <div class="reaction-list__body">
    <button class="reaction-list__item" type="button">
      <div class="reaction-list__avatar">
        <img src="avatar.jpg" alt="You" />
      </div>
      <div class="reaction-list__text">
        <span class="reaction-list__name">You</span>
        <span class="reaction-list__subtitle">Tap to remove</span>
      </div>
      <span class="reaction-list__emoji">😍</span>
    </button>
    <button class="reaction-list__item" type="button">
      <div class="reaction-list__avatar">
        <img src="avatar2.jpg" alt="George" />
      </div>
      <div class="reaction-list__text">
        <span class="reaction-list__name">George Alan</span>
      </div>
      <span class="reaction-list__emoji">😍</span>
    </button>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.reaction-list {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  width: 280px;
  display: flex;
  flex-direction: column;
}

.reaction-list__tabs {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-bottom: 1px solid var(--color-border-default);
}

.reaction-list__tab {
  height: 40px;
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  border-bottom: 2px solid transparent;
}

.reaction-list__tab--active {
  color: var(--color-ep-500);
  border-bottom-color: var(--color-ep-500);
}

.reaction-list__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  cursor: pointer;
}

.reaction-list__item:hover {
  background: var(--color-bg-02);
}

.reaction-list__avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.reaction-list__name {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.reaction-list__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.reaction-list__emoji {
  font-size: var(--font-size-5);
  width: 24px;
}\`} />
      </UsageSection>
    </div>
}`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"HTML & CSS usage reference for the Reaction List component.",...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var se,re,oe,le,ce;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ce=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};const we=["Default","MultipleReactions","ManyEmojis","FilteredByEmoji","OwnReaction","States","Usage","Playground"];export{s as Default,l as FilteredByEmoji,o as ManyEmojis,r as MultipleReactions,c as OwnReaction,m as Playground,d as States,p as Usage,we as __namedExportsOrder,Te as default};
