import{j as t}from"./jsx-runtime-BYYWji4R.js";import{r as gt}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({tabs:e,items:i,activeTab:g,onTabChange:h,onItemClick:x}){var _;const[b,mt]=gt.useState(g||((_=e[0])==null?void 0:_.key)||"all"),ut=a=>{mt(a),h==null||h(a)},vt=b==="all"?i:i.filter(a=>a.emoji===b);return t.jsxs("div",{className:"reaction-list",role:"dialog","aria-label":"Reaction details",children:[t.jsx("div",{className:"reaction-list__tabs",role:"tablist",children:e.map(a=>t.jsx("button",{type:"button",role:"tab","aria-selected":b===a.key,className:`reaction-list__tab ${b===a.key?"reaction-list__tab--active":""}`,onClick:()=>ut(a.key),children:a.label},a.key))}),t.jsx("div",{className:"reaction-list__body",role:"tabpanel",children:vt.map((a,bt)=>t.jsxs("button",{type:"button",className:"reaction-list__item",onClick:()=>{var f;(f=a.onClick)==null||f.call(a),x==null||x(a)},children:[t.jsx("div",{className:"reaction-list__avatar",children:a.avatar?t.jsx("img",{src:a.avatar,alt:a.name}):t.jsx(ht,{name:a.name})}),t.jsxs("div",{className:"reaction-list__text",children:[t.jsx("span",{className:"reaction-list__name",children:a.name}),a.subtitle&&t.jsx("span",{className:"reaction-list__subtitle",children:a.subtitle})]}),t.jsx("span",{className:"reaction-list__emoji",children:a.emoji})]},bt))})]})}function ht({name:e}){const i=e.split(" ").map(g=>g[0]).join("").slice(0,2).toUpperCase();return t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cometchat-neutral-color-300)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)"},children:i})}try{n.displayName="ReactionList",n.__docgenInfo={description:"",displayName:"ReactionList",props:{tabs:{defaultValue:null,description:'Tabs to display (e.g. "All 5", "😍 3", "👍 2")',name:"tabs",required:!0,type:{name:"ReactionTab[]"}},items:{defaultValue:null,description:"List of reactor items",name:"items",required:!0,type:{name:"ReactionListItem[]"}},activeTab:{defaultValue:null,description:"Initially active tab key. Default: first tab",name:"activeTab",required:!1,type:{name:"string | undefined"}},onTabChange:{defaultValue:null,description:"Callback when a tab is selected",name:"onTabChange",required:!1,type:{name:"((key: string) => void) | undefined"}},onItemClick:{defaultValue:null,description:"Callback when a list item is clicked",name:"onItemClick",required:!1,type:{name:"((item: ReactionListItem) => void) | undefined"}}}}}catch{}const Tt={title:"Base Components/Reaction List",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup showing who reacted to a message, with emoji filter tabs and a list of reactors.
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
  - Emoji: 20px, 24px wide`}}},argTypes:{tabs:{control:"object",description:"Tabs to display (e.g. 'All 5', '😍 3')."},items:{control:"object",description:"List of reactor items."},activeTab:{control:"text",description:"Initially active tab key."},onTabChange:{control:!1},onItemClick:{control:!1}}},dt=[{label:"All 1",key:"all"},{label:"😍 1",key:"😍"}],pt=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"}],u=[{label:"All 5",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"}],v=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"}],xt=[{label:"All 8",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"},{label:"😂 2",key:"😂"},{label:"🔥 1",key:"🔥"}],yt=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"},{name:"Charlie Brown",avatar:"https://i.pravatar.cc/32?u=charlie",emoji:"😂"},{name:"Diana Prince",avatar:"https://i.pravatar.cc/32?u=diana",emoji:"😂"},{name:"Eve Wilson",avatar:"https://i.pravatar.cc/32?u=eve",emoji:"🔥"}],o={args:{tabs:dt,items:pt,activeTab:"all"}},s={args:{tabs:u,items:v,activeTab:"all"}},r={args:{tabs:xt,items:yt,activeTab:"all"}},c={args:{tabs:u,items:v,activeTab:"👍"}},l={args:{tabs:[{label:"All 1",key:"all"},{label:"👍 1",key:"👍"}],items:[{name:"You",emoji:"👍",subtitle:"Tap to remove"}],activeTab:"all"}},d={parameters:{layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-8)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:y,children:"Single reaction"}),t.jsx(n,{tabs:dt,items:pt,activeTab:"all"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:y,children:"Multiple reactions"}),t.jsx(n,{tabs:u,items:v,activeTab:"all"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:y,children:"Filtered (👍)"}),t.jsx(n,{tabs:u,items:v,activeTab:"👍"})]})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(T,{title:"HTML",children:t.jsx(j,{language:"HTML",code:`<!-- Reaction List -->
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
</div>`})}),t.jsx(T,{title:"CSS (CometChat Tokens)",children:t.jsx(j,{language:"CSS",code:`.reaction-list {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  width: 280px;
  display: flex;
  flex-direction: column;
}

.reaction-list__tabs {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.reaction-list__tab {
  height: 40px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-tertiary);
  border-bottom: 2px solid transparent;
}

.reaction-list__tab--active {
  color: var(--cometchat-extended-primary-color-500);
  border-bottom-color: var(--cometchat-extended-primary-color-500);
}

.reaction-list__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  cursor: pointer;
}

.reaction-list__item:hover {
  background: var(--cometchat-background-color-02);
}

.reaction-list__avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
}

.reaction-list__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.reaction-list__subtitle {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.reaction-list__emoji {
  font-size: 20px;
  width: 24px;
}`})})]})},m={args:{tabs:u,items:v,activeTab:"all"},parameters:{docs:{disable:!0}}},y={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)"},j=({language:e,code:i})=>t.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:e})}),t.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:t.jsx("code",{children:i})})]});function T({title:e,children:i}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e}),i]})}var S,k,R,w,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: singleReactionTabs,
    items: singleReactionItems,
    activeTab: "all"
  }
}`,...(R=(k=o.parameters)==null?void 0:k.docs)==null?void 0:R.source},description:{story:"Default state — single reaction, exact match to Figma node 4043:476218.",...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var L,I,D,A,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all"
  }
}`,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Multiple reactions with different emojis.",...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var z,M,N,U,F;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tabs: manyEmojiTabs,
    items: manyEmojiItems,
    activeTab: "all"
  }
}`,...(N=(M=r.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Many emoji types with several reactors.",...(F=(U=r.parameters)==null?void 0:U.docs)==null?void 0:F.description}}};var W,Y,B,G,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "👍"
  }
}`,...(B=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:B.source},description:{story:"Filtered view — showing only a specific emoji tab.",...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var P,q,V,O,J;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:'Single user with "Tap to remove" subtitle.',...(J=(O=l.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var X,$,K,Q,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    gap: "var(--cometchat-spacing-8)",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Single reaction</div>
        <ReactionList tabs={singleReactionTabs} items={singleReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Multiple reactions</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}>Filtered (👍)</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="👍" />
      </div>
    </div>
}`,...(K=($=d.parameters)==null?void 0:$.docs)==null?void 0:K.source},description:{story:"All variants side by side.",...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var tt,at,et,it,nt;p.parameters={...p.parameters,docs:{...(tt=p.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.reaction-list {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  width: 280px;
  display: flex;
  flex-direction: column;
}

.reaction-list__tabs {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.reaction-list__tab {
  height: 40px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-tertiary);
  border-bottom: 2px solid transparent;
}

.reaction-list__tab--active {
  color: var(--cometchat-extended-primary-color-500);
  border-bottom-color: var(--cometchat-extended-primary-color-500);
}

.reaction-list__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  cursor: pointer;
}

.reaction-list__item:hover {
  background: var(--cometchat-background-color-02);
}

.reaction-list__avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
}

.reaction-list__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.reaction-list__subtitle {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.reaction-list__emoji {
  font-size: 20px;
  width: 24px;
}\`} />
      </UsageSection>
    </div>
}`,...(et=(at=p.parameters)==null?void 0:at.docs)==null?void 0:et.source},description:{story:"HTML & CSS usage reference for the Reaction List component.",...(nt=(it=p.parameters)==null?void 0:it.docs)==null?void 0:nt.description}}};var ot,st,rt,ct,lt;m.parameters={...m.parameters,docs:{...(ot=m.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=m.parameters)==null?void 0:st.docs)==null?void 0:rt.source},description:{story:"Interactive playground — use the controls panel to configure.",...(lt=(ct=m.parameters)==null?void 0:ct.docs)==null?void 0:lt.description}}};const St=["Default","MultipleReactions","ManyEmojis","FilteredByEmoji","OwnReaction","States","Usage","Playground"];export{o as Default,c as FilteredByEmoji,r as ManyEmojis,s as MultipleReactions,l as OwnReaction,m as Playground,d as States,p as Usage,St as __namedExportsOrder,Tt as default};
