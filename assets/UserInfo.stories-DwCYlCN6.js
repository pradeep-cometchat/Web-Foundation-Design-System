import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as H}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Core Components/Info Area/User Info",tags:["autodocs"],parameters:{layout:"centered"}},W=H["Male Avatar"],i={render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(C,{}),e.jsx(d,{})]})]})},a={name:"With Image",render:()=>e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(d,{})]})]})},t={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",padding:"var(--space-8)",overflowX:"auto"},children:[e.jsx(f,{label:"Text Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(C,{}),e.jsx(d,{})]})]})}),e.jsx(f,{label:"Image Avatar",children:e.jsxs("div",{style:{width:420,height:800,display:"flex",flexDirection:"column",background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(s,{}),e.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[e.jsx(A,{}),e.jsx(d,{})]})]})})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx(p,{language:"HTML",code:`<!-- User Info Panel -->
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
</div>`})}),e.jsx(c,{title:"CSS (Foundation Variables)",children:e.jsx(p,{language:"CSS",code:`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--color-bg-01);
  border-left: 1px solid var(--color-border-light);
}

.user-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--color-border-light);
}

.user-info__close-icon {
  font-size: 24px;
  color: var(--color-text-primary);
  cursor: pointer;
}

.user-info__header-title {
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: var(--color-text-primary);
}

.user-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
  border-bottom: 1px solid var(--color-border-light);
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  background: var(--color-extended-primary-400);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar-text {
  font-family: var(--font-family-heading);
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.user-info__name {
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-text-primary);
}

.user-info__status {
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-secondary);
}

.user-info__action-list {
  border-bottom: 1px solid var(--color-border-light);
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
  color: var(--color-error-600);
}`})}),e.jsx(c,{title:"States",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:e.jsx(B,{title:"Default",description:"Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)."})})})]})};function s(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:64,padding:"8px 16px",borderBottom:"1px solid var(--color-border-light, #f5f5f5)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-text-primary)",cursor:"pointer"},children:"close"}),e.jsx("span",{style:{flex:1,fontFamily:"var(--font-family-heading)",fontSize:20,fontWeight:700,lineHeight:"30px",color:"var(--color-text-primary)"},children:"User Info"})]})}function C(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--color-border-light, #f5f5f5)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--radius-full, 9999px)",background:"var(--color-extended-primary-400, #7a70e4)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontFamily:"var(--font-family-heading)",fontSize:40,fontWeight:600,color:"white"},children:"SF"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-heading)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--color-text-primary)"},children:"George Alan"}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--color-text-secondary, #414651)"},children:"Online"})]})]})}function d(){return e.jsxs("div",{style:{borderBottom:"1px solid var(--color-border-light, #f5f5f5)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-error-600, #d92d20)"},children:"block"}),e.jsx("span",{style:{fontSize:16,color:"var(--color-error-600, #d92d20)"},children:"Block"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",cursor:"pointer"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:24,color:"var(--color-error-600, #d92d20)"},children:"delete"}),e.jsx("span",{style:{fontSize:16,color:"var(--color-error-600, #d92d20)"},children:"Delete Chat"})]})]})}function A(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px 20px",borderBottom:"1px solid var(--color-border-light, #f5f5f5)"},children:[e.jsx("div",{style:{width:120,height:120,borderRadius:"var(--radius-full, 9999px)",overflow:"hidden"},children:e.jsx("img",{src:W[5].imageUrl,alt:"George Alan",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-heading)",fontSize:20,fontWeight:500,lineHeight:"30px",color:"var(--color-text-primary)"},children:"George Alan"}),e.jsx("span",{style:{fontSize:12,lineHeight:"18px",color:"var(--color-text-secondary, #414651)"},children:"Online"})]})]})}function f({label:n,children:r}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:n}),r]})}function c({title:n,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:n}),r]})}function p({language:n,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function B({title:n,description:r}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:n}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:r})]})}const o={parameters:{docs:{disable:!0}}};var x,u,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 420,
    height: 800,
    display: "flex",
    flexDirection: "column",
    background: "var(--color-bg-01)",
    border: "1px solid var(--color-border-default)",
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
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,h,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With Image",
  render: () => <div style={{
    width: 420,
    height: 800,
    display: "flex",
    flexDirection: "column",
    background: "var(--color-bg-01)",
    border: "1px solid var(--color-border-default)",
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
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var y,b,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    padding: "var(--space-8)",
    overflowX: "auto"
  }}>
      <StateLabel label="Text Avatar">
        <div style={{
        width: 420,
        height: 800,
        display: "flex",
        flexDirection: "column",
        background: "var(--color-bg-01)",
        border: "1px solid var(--color-border-default)",
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
        background: "var(--color-bg-01)",
        border: "1px solid var(--color-border-default)",
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
}`,...(_=(b=t.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var j,S,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
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

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--color-bg-01);
  border-left: 1px solid var(--color-border-light);
}

.user-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--color-border-light);
}

.user-info__close-icon {
  font-size: 24px;
  color: var(--color-text-primary);
  cursor: pointer;
}

.user-info__header-title {
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: var(--color-text-primary);
}

.user-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
  border-bottom: 1px solid var(--color-border-light);
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  background: var(--color-extended-primary-400);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar-text {
  font-family: var(--font-family-heading);
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.user-info__name {
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-text-primary);
}

.user-info__status {
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-secondary);
}

.user-info__action-list {
  border-bottom: 1px solid var(--color-border-light);
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
  color: var(--color-error-600);
}\`} />
      </UsageSection>

      <UsageSection title="States">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Default" description="Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)." />
        </div>
      </UsageSection>
    </div>
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,z,U,D,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(U=(z=o.parameters)==null?void 0:z.docs)==null?void 0:U.source},description:{story:"Interactive playground.",...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.description}}};const R=["Default","WithImage","AllStates","Usage","Playground"];export{t as AllStates,i as Default,o as Playground,l as Usage,a as WithImage,R as __namedExportsOrder,Y as default};
