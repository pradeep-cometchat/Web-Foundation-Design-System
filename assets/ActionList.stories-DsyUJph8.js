import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as A}from"./T-B-X7QtOX.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const fe={title:"Core Components/Chat Area/Action Bubble/Action List",tags:["autodocs"],parameters:{layout:"centered"}},i={name:"Group Created",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George created the group"})})},s={name:"Member Joined",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George joined the group"})})},c={name:"Made Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George made Emma an admin"})})},l={name:"Member Left",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George left the group"})})},p={name:"Removed As Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You removed Jack as admin"})})},m={name:"Member Added",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George added Jack"})})},u={name:"Admin Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Admin Removed"})})},g={name:"Member Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George removed Jack"})})},b={name:"Group Name Changed",render:()=>e.jsx(a,{children:e.jsx(r,{label:'Group name changed to "Watch World"'})})},h={name:"User Blocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You blocked George"})})},v={name:"Group Profile Updated",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Group Profile updated"})})},x={name:"User Unblocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You unblocked George"})})},G={name:"All Group Actions",render:()=>e.jsxs(a,{width:400,children:[e.jsx(r,{label:"George created the group"}),e.jsx(r,{label:"George joined the group"}),e.jsx(r,{label:"George made Emma an admin"}),e.jsx(r,{label:"George left the group"}),e.jsx(r,{label:"You removed Jack as admin"}),e.jsx(r,{label:"George added Jack"}),e.jsx(r,{label:"Admin Removed"}),e.jsx(r,{label:"George removed Jack"}),e.jsx(r,{label:'Group name changed to "Watch World"'}),e.jsx(r,{label:"You blocked George"}),e.jsx(r,{label:"Group Profile updated"}),e.jsx(r,{label:"You unblocked George"})]})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(f,{title:"HTML Structure",children:e.jsx(he,{language:"HTML",code:`<!-- Group Action (centered badge, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-group-badge">
    <span class="action-bubble-group-badge__label">George created the group</span>
  </div>
</div>`})}),e.jsx(f,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(o,{title:"Group Created",description:"When a user creates a new group."}),e.jsx(o,{title:"Member Joined",description:"When a user joins the group."}),e.jsx(o,{title:"Made Admin",description:"When a user is promoted to admin."}),e.jsx(o,{title:"Member Left",description:"When a user leaves the group."}),e.jsx(o,{title:"Removed As Admin",description:"When admin privileges are revoked."}),e.jsx(o,{title:"Member Added",description:"When a user adds someone to the group."}),e.jsx(o,{title:"Admin Removed",description:"Generic admin removal notification."}),e.jsx(o,{title:"Member Removed",description:"When a user is removed from the group."}),e.jsx(o,{title:"Group Name Changed",description:"When the group name is updated."}),e.jsx(o,{title:"User Blocked",description:"When a user blocks another user."}),e.jsx(o,{title:"Group Profile Updated",description:"When group profile/avatar changes."}),e.jsx(o,{title:"User Unblocked",description:"When a user unblocks another user."})]})})]})};function r({label:n}){return e.jsx("div",{className:"action-bubble-divider",children:e.jsx("div",{className:"action-bubble-group-badge",children:e.jsx("span",{className:"action-bubble-group-badge__label",children:e.jsx(A,{children:n})})})})}function a({children:n,width:t=360}){return e.jsx("div",{style:{width:t,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:n})}function f({title:n,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(A,{children:n})}),t]})}function he({language:n,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function o({title:n,description:t}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(A,{children:n})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(A,{children:t})})]})}const d={parameters:{docs:{disable:!0}}};var W,k,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Group Created",
  render: () => <Wrapper>
      <GroupActionDivider label="George created the group" />
    </Wrapper>
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,y,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Member Joined",
  render: () => <Wrapper>
      <GroupActionDivider label="George joined the group" />
    </Wrapper>
}`,...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var U,D,R;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Made Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="George made Emma an admin" />
    </Wrapper>
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var J,B,P;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Member Left",
  render: () => <Wrapper>
      <GroupActionDivider label="George left the group" />
    </Wrapper>
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var Y,L,N;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Removed As Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="You removed Jack as admin" />
    </Wrapper>
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var T,_,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Member Added",
  render: () => <Wrapper>
      <GroupActionDivider label="George added Jack" />
    </Wrapper>
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,H,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Admin Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="Admin Removed" />
    </Wrapper>
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var I,V,F;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Member Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="George removed Jack" />
    </Wrapper>
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var O,X,q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Group Name Changed",
  render: () => <Wrapper>
      <GroupActionDivider label='Group name changed to "Watch World"' />
    </Wrapper>
}`,...(q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var K,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "User Blocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You blocked George" />
    </Wrapper>
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,re;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Group Profile Updated",
  render: () => <Wrapper>
      <GroupActionDivider label="Group Profile updated" />
    </Wrapper>
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "User Unblocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,de,ie;G.parameters={...G.parameters,docs:{...(te=G.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "All Group Actions",
  render: () => <Wrapper width={400}>
      <GroupActionDivider label="George created the group" />
      <GroupActionDivider label="George joined the group" />
      <GroupActionDivider label="George made Emma an admin" />
      <GroupActionDivider label="George left the group" />
      <GroupActionDivider label="You removed Jack as admin" />
      <GroupActionDivider label="George added Jack" />
      <GroupActionDivider label="Admin Removed" />
      <GroupActionDivider label="George removed Jack" />
      <GroupActionDivider label='Group name changed to "Watch World"' />
      <GroupActionDivider label="You blocked George" />
      <GroupActionDivider label="Group Profile updated" />
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
}`,...(ie=(de=G.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var se,ce,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Group Action (centered badge, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-group-badge">
    <span class="action-bubble-group-badge__label">George created the group</span>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Group Created" description="When a user creates a new group." />
          <StateCard title="Member Joined" description="When a user joins the group." />
          <StateCard title="Made Admin" description="When a user is promoted to admin." />
          <StateCard title="Member Left" description="When a user leaves the group." />
          <StateCard title="Removed As Admin" description="When admin privileges are revoked." />
          <StateCard title="Member Added" description="When a user adds someone to the group." />
          <StateCard title="Admin Removed" description="Generic admin removal notification." />
          <StateCard title="Member Removed" description="When a user is removed from the group." />
          <StateCard title="Group Name Changed" description="When the group name is updated." />
          <StateCard title="User Blocked" description="When a user blocks another user." />
          <StateCard title="Group Profile Updated" description="When group profile/avatar changes." />
          <StateCard title="User Unblocked" description="When a user unblocks another user." />
        </div>
      </UsageSection>
    </div>
}`,...(le=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,me,ue,ge,be;d.parameters={...d.parameters,docs:{...(pe=d.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ue=(me=d.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Interactive playground.",...(be=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};const We=["GroupCreated","MemberJoined","MadeAdmin","MemberLeft","RemovedAsAdmin","MemberAdded","AdminRemoved","MemberRemoved","GroupNameChanged","UserBlocked","GroupProfileUpdated","UserUnblocked","AllGroupActions","Usage","Playground"];export{u as AdminRemoved,G as AllGroupActions,i as GroupCreated,b as GroupNameChanged,v as GroupProfileUpdated,c as MadeAdmin,m as MemberAdded,s as MemberJoined,l as MemberLeft,g as MemberRemoved,d as Playground,p as RemovedAsAdmin,j as Usage,h as UserBlocked,x as UserUnblocked,We as __namedExportsOrder,fe as default};
