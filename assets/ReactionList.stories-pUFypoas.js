import{j as t}from"./jsx-runtime-BYYWji4R.js";import{u as xt,T as n}from"./T-C6nayWAE.js";import{r as yt}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o({tabs:e,items:i,activeTab:h,onTabChange:x,onItemClick:y}){var f;const ut=xt(),[g,vt]=yt.useState(h||((f=e[0])==null?void 0:f.key)||"all"),bt=a=>{vt(a),x==null||x(a)},gt=g==="all"?i:i.filter(a=>a.emoji===g);return t.jsxs("div",{className:"reaction-list",role:"dialog","aria-label":"Reaction details",children:[t.jsx("div",{className:"reaction-list__tabs",role:"tablist",children:e.map(a=>t.jsx("button",{type:"button",role:"tab","aria-selected":g===a.key,className:`reaction-list__tab ${g===a.key?"reaction-list__tab--active":""}`,onClick:()=>bt(a.key),children:t.jsx(n,{children:a.label})},a.key))}),t.jsx("div",{className:"reaction-list__body",role:"tabpanel",children:gt.map((a,ht)=>t.jsxs("button",{type:"button",className:"reaction-list__item",onClick:()=>{var j;(j=a.onClick)==null||j.call(a),y==null||y(a)},children:[t.jsx("div",{className:"reaction-list__avatar",children:a.avatar?t.jsx("img",{src:a.avatar,alt:a.name}):t.jsx(_t,{name:ut(a.name)})}),t.jsxs("div",{className:"reaction-list__text",children:[t.jsx("span",{className:"reaction-list__name",children:t.jsx(n,{children:a.name})}),a.subtitle&&t.jsx("span",{className:"reaction-list__subtitle",children:t.jsx(n,{children:a.subtitle})})]}),t.jsx("span",{className:"reaction-list__emoji",children:a.emoji})]},ht))})]})}function _t({name:e}){const i=e.split(" ").map(h=>h[0]).join("").slice(0,2).toUpperCase();return t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cometchat-neutral-color-300)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)"},children:i})}try{o.displayName="ReactionList",o.__docgenInfo={description:"",displayName:"ReactionList",props:{tabs:{defaultValue:null,description:'Tabs to display (e.g. "All 5", "😍 3", "👍 2")',name:"tabs",required:!0,type:{name:"ReactionTab[]"}},items:{defaultValue:null,description:"List of reactor items",name:"items",required:!0,type:{name:"ReactionListItem[]"}},activeTab:{defaultValue:null,description:"Initially active tab key. Default: first tab",name:"activeTab",required:!1,type:{name:"string | undefined"}},onTabChange:{defaultValue:null,description:"Callback when a tab is selected",name:"onTabChange",required:!1,type:{name:"((key: string) => void) | undefined"}},onItemClick:{defaultValue:null,description:"Callback when a list item is clicked",name:"onItemClick",required:!1,type:{name:"((item: ReactionListItem) => void) | undefined"}}}}}catch{}const wt={title:"Base Components/Reaction List",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup showing who reacted to a message, with emoji filter tabs and a list of reactors.
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
  - Emoji: 20px, 24px wide`}}},argTypes:{tabs:{control:"object",description:"Tabs to display (e.g. 'All 5', '😍 3')."},items:{control:"object",description:"List of reactor items."},activeTab:{control:"text",description:"Initially active tab key."},onTabChange:{control:!1},onItemClick:{control:!1}}},pt=[{label:"All 1",key:"all"},{label:"😍 1",key:"😍"}],mt=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"}],v=[{label:"All 5",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"}],b=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"}],ft=[{label:"All 8",key:"all"},{label:"😍 3",key:"😍"},{label:"👍 2",key:"👍"},{label:"😂 2",key:"😂"},{label:"🔥 1",key:"🔥"}],jt=[{name:"You",avatar:"https://i.pravatar.cc/32?u=you",emoji:"😍",subtitle:"Tap to remove"},{name:"George Alan",avatar:"https://i.pravatar.cc/32?u=george",emoji:"😍"},{name:"Pourav Raj",avatar:"https://i.pravatar.cc/32?u=pourav",emoji:"😍"},{name:"Alice Johnson",avatar:"https://i.pravatar.cc/32?u=alice",emoji:"👍"},{name:"Bob Smith",avatar:"https://i.pravatar.cc/32?u=bob",emoji:"👍"},{name:"Charlie Brown",avatar:"https://i.pravatar.cc/32?u=charlie",emoji:"😂"},{name:"Diana Prince",avatar:"https://i.pravatar.cc/32?u=diana",emoji:"😂"},{name:"Eve Wilson",avatar:"https://i.pravatar.cc/32?u=eve",emoji:"🔥"}],s={args:{tabs:pt,items:mt,activeTab:"all"}},r={args:{tabs:v,items:b,activeTab:"all"}},c={args:{tabs:ft,items:jt,activeTab:"all"}},l={args:{tabs:v,items:b,activeTab:"👍"}},d={args:{tabs:[{label:"All 1",key:"all"},{label:"👍 1",key:"👍"}],items:[{name:"You",emoji:"👍",subtitle:"Tap to remove"}],activeTab:"all"}},p={parameters:{layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",gap:"var(--cometchat-spacing-8)",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:_,children:t.jsx(n,{children:"Single reaction"})}),t.jsx(o,{tabs:pt,items:mt,activeTab:"all"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:_,children:t.jsx(n,{children:"Multiple reactions"})}),t.jsx(o,{tabs:v,items:b,activeTab:"all"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[t.jsx("div",{style:_,children:t.jsx(n,{children:"Filtered (👍)"})}),t.jsx(o,{tabs:v,items:b,activeTab:"👍"})]})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>t.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[t.jsx(S,{title:"HTML",children:t.jsx(T,{language:"HTML",code:`<!-- Reaction List -->
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
</div>`})}),t.jsx(S,{title:"CSS (CometChat Tokens)",children:t.jsx(T,{language:"CSS",code:`.reaction-list {
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
}`})})]})},u={args:{tabs:v,items:b,activeTab:"all"},parameters:{docs:{disable:!0}}},_={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)"},T=({language:e,code:i})=>t.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:t.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:e})}),t.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:t.jsx("code",{children:i})})]});function S({title:e,children:i}){return t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:t.jsx(n,{children:e})}),i]})}var k,R,w,C,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tabs: singleReactionTabs,
    items: singleReactionItems,
    activeTab: "all"
  }
}`,...(w=(R=s.parameters)==null?void 0:R.docs)==null?void 0:w.source},description:{story:"Default state — single reaction, exact match to Figma node 4043:476218.",...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};var I,D,A,E,z;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all"
  }
}`,...(A=(D=r.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"Multiple reactions with different emojis.",...(z=(E=r.parameters)==null?void 0:E.docs)==null?void 0:z.description}}};var M,N,U,F,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tabs: manyEmojiTabs,
    items: manyEmojiItems,
    activeTab: "all"
  }
}`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"Many emoji types with several reactors.",...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var Y,B,G,H,P;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "👍"
  }
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"Filtered view — showing only a specific emoji tab.",...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.description}}};var q,V,O,J,X;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:'Single user with "Tap to remove" subtitle.',...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var $,K,Q,Z,tt;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}><T>Single reaction</T></div>
        <ReactionList tabs={singleReactionTabs} items={singleReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>Multiple reactions</T></div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="all" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <div style={stateLabelStyle}><T>Filtered (👍)</T></div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="👍" />
      </div>
    </div>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"All variants side by side.",...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var at,et,it,nt,ot;m.parameters={...m.parameters,docs:{...(at=m.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(it=(et=m.parameters)==null?void 0:et.docs)==null?void 0:it.source},description:{story:"HTML & CSS usage reference for the Reaction List component.",...(ot=(nt=m.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var st,rt,ct,lt,dt;u.parameters={...u.parameters,docs:{...(st=u.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=u.parameters)==null?void 0:rt.docs)==null?void 0:ct.source},description:{story:"Interactive playground — use the controls panel to configure.",...(dt=(lt=u.parameters)==null?void 0:lt.docs)==null?void 0:dt.description}}};const Ct=["Default","MultipleReactions","ManyEmojis","FilteredByEmoji","OwnReaction","States","Usage","Playground"];export{s as Default,l as FilteredByEmoji,c as ManyEmojis,r as MultipleReactions,d as OwnReaction,u as Playground,p as States,m as Usage,Ct as __namedExportsOrder,wt as default};
