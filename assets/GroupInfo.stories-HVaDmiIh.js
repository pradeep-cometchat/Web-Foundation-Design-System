import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as g}from"./avatars-9G6xvYo0.js";import{S as B}from"./SearchBar-C2XVB5CY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const E={title:"Core Components/Info Area/Group Info",tags:["autodocs"],parameters:{layout:"centered"}},T=g["Group Avatar"],t=g["Male Avatar"],c=g["Female Avatar"],s={render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(M,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(D,{}),e.jsx(G,{})]})]})},d={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-8)",overflowX:"auto"},children:e.jsx(H,{label:"Default",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(M,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(D,{}),e.jsx(G,{})]})]})})})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(p,{title:"HTML Structure",children:e.jsx(h,{language:"HTML",code:`<!-- Group Info Panel -->
<div class="group-info">
  <!-- Header -->
  <div class="group-info__header">
    <span class="icon-rounded group-info__close-icon">close</span>
    <span class="group-info__header-title">Group Info</span>
  </div>

  <!-- Profile Section -->
  <div class="group-info__profile">
    <div class="group-info__avatar">
      <img src="group-avatar.jpg" alt="Group" />
    </div>
    <p class="group-info__name">Innovative Online Shop...</p>
    <span class="group-info__meta">44 Members</span>
  </div>

  <!-- Action List -->
  <div class="group-info__action-list">
    <div class="group-info__action-item group-info__action-item--highlight">
      <span class="icon-rounded">group_add</span>
      <span>Add Members</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">logout</span>
      <span>Leave</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete and Exit</span>
    </div>
  </div>

  <!-- Members Section -->
  <div class="group-info__members">
    <!-- Tabs (Secondary Tab component) -->
    <div class="group-info__tabs">
      <button class="group-info__tab group-info__tab--active">View Members</button>
      <button class="group-info__tab">Banned Members</button>
    </div>

    <!-- Search (SearchBar base component) -->
    <div class="group-info__search">
      <!-- SearchBar component -->
    </div>

    <!-- Member List -->
    <div class="group-info__member-item">
      <img src="avatar.jpg" class="group-info__member-avatar" />
      <span class="group-info__member-name">Alex Mason</span>
      <span class="group-info__member-badge group-info__member-badge--owner">Owner</span>
    </div>
  </div>
</div>`})}),e.jsx(p,{title:"CSS (CometChat Tokens)",children:e.jsx(h,{language:"CSS",code:`.group-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-left: 1px solid var(--cometchat-border-color-light);
}

.group-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.group-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
}

.group-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
}

.group-info__name {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.group-info__meta {
  font-size: 12px;
  line-height: 18px;
  color: var(--cometchat-text-color-secondary);
}

.group-info__action-list {
  border-top: 1px solid var(--cometchat-border-color-light);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.group-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
}

.group-info__action-item--highlight {
  color: var(--cometchat-extended-primary-color-600);
}

.group-info__action-item--danger {
  color: var(--cometchat-error-color);
}

.group-info__tabs {
  display: flex;
  margin: 0 16px;
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
}

.group-info__tab {
  flex: 1;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: var(--cometchat-radius-max);
  color: var(--cometchat-text-color-tertiary);
}

.group-info__tab--active {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  color: var(--cometchat-extended-primary-color-600);
}

.group-info__member-badge--owner {
  background: var(--cometchat-extended-primary-color-600);
  color: white;
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}

.group-info__member-badge--admin {
  background: var(--cometchat-extended-primary-color-100);
  border: 1px solid var(--cometchat-extended-primary-color-400);
  color: var(--cometchat-extended-primary-color-600);
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}

.group-info__member-badge--moderator {
  background: var(--cometchat-extended-primary-color-100);
  color: var(--cometchat-extended-primary-color-600);
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}`})}),e.jsx(p,{title:"States",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:e.jsx(m,{title:"Default",description:"Shows group avatar, name, member count, action buttons (Add Members, Leave, Delete and Exit), tabbed member list with role badges."})})}),e.jsx(p,{title:"Composed From",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(m,{title:"SearchBar",description:"Base Component — Search input used in the members section."}),e.jsx(m,{title:"Avatar",description:"Foundation — Group avatar images from the avatar registry."})]})})]})};function M(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:64,padding:"8px 16px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-text-color-primary)",cursor:"pointer"},children:"close"}),e.jsx("span",{style:{flex:1,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:700,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:"Group Info"})]})}function A(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--cometchat-radius-max)",overflow:"hidden"},children:e.jsx("img",{src:T[7].imageUrl,alt:"Innovative Online Shopping",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,width:244,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--cometchat-text-color-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},children:"Innovative Online Shop..."}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--cometchat-text-color-secondary)"},children:"44 Members"})]})]})}function D(){return e.jsxs("div",{style:{borderTop:"1px solid var(--cometchat-border-color-light)",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-primary-color)"},children:"group_add"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-primary-color)"},children:"Add Members"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"logout"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:"Leave"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"delete"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:"Delete and Exit"})]})]})}function G(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx("div",{style:{padding:"16px 16px 0"},children:e.jsxs("div",{style:{display:"flex",background:"var(--cometchat-background-color-03)",border:"1px solid var(--cometchat-border-color-light)",borderRadius:"var(--cometchat-radius-max)",overflow:"hidden"},children:[e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",height:32,padding:"6px 16px",borderRadius:"var(--cometchat-radius-max)",background:"var(--color-bg-01, white)",border:"1px solid var(--cometchat-border-color-light)",fontFamily:"var(--cometchat-font-family)",fontSize:14,fontWeight:500,lineHeight:"20px",color:"var(--cometchat-primary-color)",cursor:"pointer"},children:"View Members"}),e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",height:32,padding:"6px 16px",borderRadius:"var(--cometchat-radius-max)",fontFamily:"var(--cometchat-font-family)",fontSize:14,fontWeight:500,lineHeight:"20px",color:"var(--color-text-quaternary, #717680)",cursor:"pointer"},children:"Banned Members"})]})}),e.jsx("div",{style:{padding:"12px 16px"},children:e.jsx(B,{placeholder:"Search"})}),e.jsx(r,{name:"Alex Mason",avatar:t[5].imageUrl,role:"owner"}),e.jsx(r,{name:"Andrew Joseph",avatar:t[3].imageUrl,role:"admin"}),e.jsx(r,{name:"Avery Quinn",avatar:c[3].imageUrl,role:"moderator"}),e.jsx(r,{name:"Brian Michael",avatar:t[1].imageUrl}),e.jsx(r,{name:"Cameron Lee",avatar:t[10].imageUrl}),e.jsx(r,{name:"Charles Dean",avatar:c[7].imageUrl}),e.jsx(r,{name:"Dana Cooper",avatar:c[1].imageUrl}),e.jsx(r,{name:"Emily",avatar:t[8].imageUrl}),e.jsx(r,{name:"George Alan",avatar:t[6].imageUrl}),e.jsx(r,{name:"Jennifer Lynn",avatar:c[5].imageUrl}),e.jsx("div",{style:{padding:"20px 20px",cursor:"pointer"},children:e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-primary-color)"},children:"View all (6 more)"})})]})}function r({name:o,avatar:a,role:i}){const U={owner:{background:"var(--cometchat-primary-color)",color:"white",padding:"4px 12px",borderRadius:"var(--cometchat-radius-max)",fontSize:12,lineHeight:"18px",fontWeight:400},admin:{background:"var(--cometchat-extended-primary-color-100)",border:"1px solid var(--cometchat-extended-primary-color-400)",color:"var(--cometchat-primary-color)",padding:"4px 12px",borderRadius:"var(--cometchat-radius-max)",fontSize:12,lineHeight:"18px",fontWeight:400},moderator:{background:"var(--cometchat-extended-primary-color-100)",color:"var(--cometchat-primary-color)",padding:"4px 12px",borderRadius:"var(--cometchat-radius-max)",fontSize:12,lineHeight:"18px",fontWeight:400}};return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"8px 16px"},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:"var(--cometchat-radius-max)",overflow:"hidden",flexShrink:0},children:e.jsx("img",{src:a,alt:o,style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:0},children:[e.jsx("span",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:16,fontWeight:500,lineHeight:"24px",color:"var(--color-text-primary, #181d27)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o}),i&&e.jsx("span",{style:U[i],children:i.charAt(0).toUpperCase()+i.slice(1)})]})]})}function H({label:o,children:a}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:o}),a]})}function p({title:o,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:o}),a]})}function h({language:o,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function m({title:o,description:a}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:o}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:a})]})}const n={parameters:{docs:{disable:!0}}};var x,u,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 420,
    height: 800,
    display: "flex",
    flexDirection: "column",
    background: "var(--cometchat-background-color-01)",
    border: "1px solid var(--cometchat-border-color-default)",
    overflow: "hidden"
  }}>
      <GroupInfoHeader />
      <div style={{
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column"
    }}>
        <GroupInfoProfile />
        <GroupInfoActions />
        <GroupInfoMembersTabs />
      </div>
    </div>
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,b,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-8)",
    overflowX: "auto"
  }}>
      <StateLabel label="Default">
        <div style={{
        width: 420,
        height: 800,
        display: "flex",
        flexDirection: "column",
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        overflow: "hidden"
      }}>
          <GroupInfoHeader />
          <div style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column"
        }}>
            <GroupInfoProfile />
            <GroupInfoActions />
            <GroupInfoMembersTabs />
          </div>
        </div>
      </StateLabel>
    </div>
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,j,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Group Info Panel -->
<div class="group-info">
  <!-- Header -->
  <div class="group-info__header">
    <span class="icon-rounded group-info__close-icon">close</span>
    <span class="group-info__header-title">Group Info</span>
  </div>

  <!-- Profile Section -->
  <div class="group-info__profile">
    <div class="group-info__avatar">
      <img src="group-avatar.jpg" alt="Group" />
    </div>
    <p class="group-info__name">Innovative Online Shop...</p>
    <span class="group-info__meta">44 Members</span>
  </div>

  <!-- Action List -->
  <div class="group-info__action-list">
    <div class="group-info__action-item group-info__action-item--highlight">
      <span class="icon-rounded">group_add</span>
      <span>Add Members</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">logout</span>
      <span>Leave</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete and Exit</span>
    </div>
  </div>

  <!-- Members Section -->
  <div class="group-info__members">
    <!-- Tabs (Secondary Tab component) -->
    <div class="group-info__tabs">
      <button class="group-info__tab group-info__tab--active">View Members</button>
      <button class="group-info__tab">Banned Members</button>
    </div>

    <!-- Search (SearchBar base component) -->
    <div class="group-info__search">
      <!-- SearchBar component -->
    </div>

    <!-- Member List -->
    <div class="group-info__member-item">
      <img src="avatar.jpg" class="group-info__member-avatar" />
      <span class="group-info__member-name">Alex Mason</span>
      <span class="group-info__member-badge group-info__member-badge--owner">Owner</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.group-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-left: 1px solid var(--cometchat-border-color-light);
}

.group-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.group-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
}

.group-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
}

.group-info__name {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.group-info__meta {
  font-size: 12px;
  line-height: 18px;
  color: var(--cometchat-text-color-secondary);
}

.group-info__action-list {
  border-top: 1px solid var(--cometchat-border-color-light);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.group-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
}

.group-info__action-item--highlight {
  color: var(--cometchat-extended-primary-color-600);
}

.group-info__action-item--danger {
  color: var(--cometchat-error-color);
}

.group-info__tabs {
  display: flex;
  margin: 0 16px;
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
}

.group-info__tab {
  flex: 1;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: var(--cometchat-radius-max);
  color: var(--cometchat-text-color-tertiary);
}

.group-info__tab--active {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  color: var(--cometchat-extended-primary-color-600);
}

.group-info__member-badge--owner {
  background: var(--cometchat-extended-primary-color-600);
  color: white;
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}

.group-info__member-badge--admin {
  background: var(--cometchat-extended-primary-color-100);
  border: 1px solid var(--cometchat-extended-primary-color-400);
  color: var(--cometchat-extended-primary-color-600);
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}

.group-info__member-badge--moderator {
  background: var(--cometchat-extended-primary-color-100);
  color: var(--cometchat-extended-primary-color-600);
  padding: 4px 12px;
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
}\`} />
      </UsageSection>

      <UsageSection title="States">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Default" description="Shows group avatar, name, member count, action buttons (Add Members, Leave, Delete and Exit), tabbed member list with role badges." />
        </div>
      </UsageSection>

      <UsageSection title="Composed From">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="SearchBar" description="Base Component — Search input used in the members section." />
          <StateCard title="Avatar" description="Foundation — Group avatar images from the avatar registry." />
        </div>
      </UsageSection>
    </div>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,k,z,C,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(z=(k=n.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"Interactive playground.",...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};const N=["Default","AllStates","Usage","Playground"];export{d as AllStates,s as Default,n as Playground,l as Usage,N as __namedExportsOrder,E as default};
