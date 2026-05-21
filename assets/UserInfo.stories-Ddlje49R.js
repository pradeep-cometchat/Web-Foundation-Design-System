import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as H}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Core Components/Info Area/User Info",tags:["autodocs"],parameters:{layout:"centered"}},W=H["Male Avatar"],r={render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(l,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(C,{}),e.jsx(s,{})]})]})},a={name:"With Image",render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(l,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(s,{})]})]})},i={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-8)",overflowX:"auto"},children:[e.jsx(p,{label:"Text Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(l,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(C,{}),e.jsx(s,{})]})]})}),e.jsx(p,{label:"Image Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(l,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(s,{})]})]})})]})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(d,{title:"HTML Structure",children:e.jsx(f,{language:"HTML",code:`<!-- User Info Panel -->
<div class="user-info">
  <!-- Header -->
  <div class="user-info__header">
    <span class="icon-rounded user-info__close-icon">close</span>
    <span class="user-info__header-title">User Info</span>
  </div>

  <!-- Profile Section -->
  <div class="user-info__profile">
    <div class="user-info__avatar">
      <span class="user-info__avatar-text">SF</span>
    </div>
    <p class="user-info__name">George Alan</p>
    <span class="user-info__status">Online</span>
  </div>

  <!-- Action List -->
  <div class="user-info__action-list">
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">block</span>
      <span>Block</span>
    </div>
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete Chat</span>
    </div>
  </div>
</div>`})}),e.jsx(d,{title:"CSS (CometChat Tokens)",children:e.jsx(f,{language:"CSS",code:`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-left: 1px solid var(--cometchat-border-color-light);
}

.user-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__close-icon {
  font-size: 24px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.user-info__header-title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-400);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar-text {
  font-family: var(--cometchat-font-family);
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.user-info__name {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__status {
  font-size: 12px;
  line-height: 18px;
  color: var(--cometchat-text-color-secondary);
}

.user-info__action-list {
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
}

.user-info__action-item--danger {
  color: var(--cometchat-error-color);
}`})}),e.jsx(d,{title:"States",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:e.jsx(B,{title:"Default",description:"Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)."})})})]})};function l(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:64,padding:"8px 16px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-text-color-primary)",cursor:"pointer"},children:"close"}),e.jsx("span",{style:{flex:1,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:700,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:"User Info"})]})}function C(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-extended-primary-color-400)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:40,fontWeight:600,color:"white"},children:"SF"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:"George Alan"}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--cometchat-text-color-secondary)"},children:"Online"})]})]})}function s(){return e.jsxs("div",{style:{borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"block"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:"Block"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"delete"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:"Delete Chat"})]})]})}function A(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--cometchat-radius-max)",overflow:"hidden"},children:e.jsx("img",{src:W[5].imageUrl,alt:"George Alan",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:"George Alan"}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--cometchat-text-color-secondary)"},children:"Online"})]})]})}function p({label:o,children:t}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:o}),t]})}function d({title:o,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:o}),t]})}function f({language:o,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function B({title:o,description:t}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:o}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:t})]})}const n={parameters:{docs:{disable:!0}}};var m,h,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 420,
    height: 800,
    display: "flex",
    flexDirection: "column",
    background: "var(--cometchat-background-color-01)",
    border: "1px solid var(--cometchat-border-color-default)",
    overflow: "hidden"
  }}>
      <UserInfoHeader />
      <div style={{
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column"
    }}>
        <UserInfoProfile />
        <UserInfoActions />
      </div>
    </div>
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "With Image",
  render: () => <div style={{
    width: 420,
    height: 800,
    display: "flex",
    flexDirection: "column",
    background: "var(--cometchat-background-color-01)",
    border: "1px solid var(--cometchat-border-color-default)",
    overflow: "hidden"
  }}>
      <UserInfoHeader />
      <div style={{
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column"
    }}>
        <UserInfoProfileWithImage />
        <UserInfoActions />
      </div>
    </div>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,b,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-8)",
    overflowX: "auto"
  }}>
      <StateLabel label="Text Avatar">
        <div style={{
        width: 420,
        height: 800,
        display: "flex",
        flexDirection: "column",
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        overflow: "hidden"
      }}>
          <UserInfoHeader />
          <div style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column"
        }}>
            <UserInfoProfile />
            <UserInfoActions />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Image Avatar">
        <div style={{
        width: 420,
        height: 800,
        display: "flex",
        flexDirection: "column",
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        overflow: "hidden"
      }}>
          <UserInfoHeader />
          <div style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column"
        }}>
            <UserInfoProfileWithImage />
            <UserInfoActions />
          </div>
        </div>
      </StateLabel>
    </div>
}`,...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var j,S,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- User Info Panel -->
<div class="user-info">
  <!-- Header -->
  <div class="user-info__header">
    <span class="icon-rounded user-info__close-icon">close</span>
    <span class="user-info__header-title">User Info</span>
  </div>

  <!-- Profile Section -->
  <div class="user-info__profile">
    <div class="user-info__avatar">
      <span class="user-info__avatar-text">SF</span>
    </div>
    <p class="user-info__name">George Alan</p>
    <span class="user-info__status">Online</span>
  </div>

  <!-- Action List -->
  <div class="user-info__action-list">
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">block</span>
      <span>Block</span>
    </div>
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete Chat</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-left: 1px solid var(--cometchat-border-color-light);
}

.user-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__close-icon {
  font-size: 24px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.user-info__header-title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-400);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar-text {
  font-family: var(--cometchat-font-family);
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.user-info__name {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__status {
  font-size: 12px;
  line-height: 18px;
  color: var(--cometchat-text-color-secondary);
}

.user-info__action-list {
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
}

.user-info__action-item--danger {
  color: var(--cometchat-error-color);
}\`} />
      </UsageSection>

      <UsageSection title="States">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Default" description="Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)." />
        </div>
      </UsageSection>
    </div>
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,I,U,D,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(U=(I=n.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"Interactive playground.",...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.description}}};const R=["Default","WithImage","AllStates","Usage","Playground"];export{i as AllStates,r as Default,n as Playground,c as Usage,a as WithImage,R as __namedExportsOrder,Y as default};
