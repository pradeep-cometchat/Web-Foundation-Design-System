import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as o}from"./T-B-X7QtOX.js";import{a as W}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={title:"Core Components/Info Area/User Info",tags:["autodocs"],parameters:{layout:"centered"}},B=W["Male Avatar"],a={render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(d,{})]})]})},i={name:"With Image",render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(H,{}),e.jsx(d,{})]})]})},c={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-8)",overflowX:"auto"},children:[e.jsx(f,{label:"Text Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(d,{})]})]})}),e.jsx(f,{label:"Image Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(H,{}),e.jsx(d,{})]})]})})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(p,{title:"HTML Structure",children:e.jsx(m,{language:"HTML",code:`<!-- User Info Panel -->
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
</div>`})}),e.jsx(p,{title:"CSS (CometChat Tokens)",children:e.jsx(m,{language:"CSS",code:`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-inline-start: 1px solid var(--cometchat-border-color-light);
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
}`})}),e.jsx(p,{title:"States",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:e.jsx(T,{title:"Default",description:"Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)."})})})]})};function s(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:64,padding:"8px 16px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-text-color-primary)",cursor:"pointer"},children:"close"}),e.jsx("span",{style:{flex:1,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:700,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:e.jsx(o,{children:"User Info"})})]})}function A(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-extended-primary-color-400)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontFamily:"var(--cometchat-font-family)",fontSize:40,fontWeight:600,color:"white"},children:e.jsx(o,{children:"SF"})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:e.jsx(o,{children:"George Alan"})}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--cometchat-text-color-secondary)"},children:e.jsx(o,{children:"Online"})})]})]})}function d(){return e.jsxs("div",{style:{borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"block"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:e.jsx(o,{children:"Block"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--cometchat-error-color)"},children:"delete"}),e.jsx("span",{style:{fontSize:16,color:"var(--cometchat-error-color)"},children:e.jsx(o,{children:"Delete Chat"})})]})]})}function H(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--cometchat-border-color-light)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--cometchat-radius-max)",overflow:"hidden"},children:e.jsx("img",{src:B[5].imageUrl,alt:"George Alan",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--cometchat-font-family)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--cometchat-text-color-primary)"},children:e.jsx(o,{children:"George Alan"})}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--cometchat-text-color-secondary)"},children:e.jsx(o,{children:"Online"})})]})]})}function f({label:n,children:t}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:e.jsx(o,{children:n})}),t]})}function p({title:n,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(o,{children:n})}),t]})}function m({language:n,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function T({title:n,description:t}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(o,{children:n})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(o,{children:t})})]})}const r={parameters:{docs:{disable:!0}}};var h,x,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,_,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var S,w,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  border-inline-start: 1px solid var(--cometchat-border-color-light);
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var I,U,D,z,C;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(D=(U=r.parameters)==null?void 0:U.docs)==null?void 0:D.source},description:{story:"Interactive playground.",...(C=(z=r.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};const M=["Default","WithImage","AllStates","Usage","Playground"];export{c as AllStates,a as Default,r as Playground,l as Usage,i as WithImage,M as __namedExportsOrder,G as default};
