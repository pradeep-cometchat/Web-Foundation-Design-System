import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const je={title:"Core Components/Chat Area/Action Bubble/Action List",tags:["autodocs"],parameters:{layout:"centered"}},i={name:"Group Created",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George created the group"})})},s={name:"Member Joined",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George joined the group"})})},c={name:"Made Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George made Emma an admin"})})},l={name:"Member Left",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George left the group"})})},p={name:"Removed As Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You removed Jack as admin"})})},m={name:"Member Added",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George added Jack"})})},u={name:"Admin Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Admin Removed"})})},g={name:"Member Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George removed Jack"})})},b={name:"Group Name Changed",render:()=>e.jsx(a,{children:e.jsx(r,{label:'Group name changed to "Watch World"'})})},h={name:"User Blocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You blocked George"})})},v={name:"Group Profile Updated",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Group Profile updated"})})},x={name:"User Unblocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You unblocked George"})})},G={name:"All Group Actions",render:()=>e.jsxs(a,{width:400,children:[e.jsx(r,{label:"George created the group"}),e.jsx(r,{label:"George joined the group"}),e.jsx(r,{label:"George made Emma an admin"}),e.jsx(r,{label:"George left the group"}),e.jsx(r,{label:"You removed Jack as admin"}),e.jsx(r,{label:"George added Jack"}),e.jsx(r,{label:"Admin Removed"}),e.jsx(r,{label:"George removed Jack"}),e.jsx(r,{label:'Group name changed to "Watch World"'}),e.jsx(r,{label:"You blocked George"}),e.jsx(r,{label:"Group Profile updated"}),e.jsx(r,{label:"You unblocked George"})]})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"HTML Structure",children:e.jsx(be,{language:"HTML",code:`<!-- Group Action (centered badge, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-group-badge">
    <span class="action-bubble-group-badge__label">George created the group</span>
  </div>
</div>`})}),e.jsx(A,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(o,{title:"Group Created",description:"When a user creates a new group."}),e.jsx(o,{title:"Member Joined",description:"When a user joins the group."}),e.jsx(o,{title:"Made Admin",description:"When a user is promoted to admin."}),e.jsx(o,{title:"Member Left",description:"When a user leaves the group."}),e.jsx(o,{title:"Removed As Admin",description:"When admin privileges are revoked."}),e.jsx(o,{title:"Member Added",description:"When a user adds someone to the group."}),e.jsx(o,{title:"Admin Removed",description:"Generic admin removal notification."}),e.jsx(o,{title:"Member Removed",description:"When a user is removed from the group."}),e.jsx(o,{title:"Group Name Changed",description:"When the group name is updated."}),e.jsx(o,{title:"User Blocked",description:"When a user blocks another user."}),e.jsx(o,{title:"Group Profile Updated",description:"When group profile/avatar changes."}),e.jsx(o,{title:"User Unblocked",description:"When a user unblocks another user."})]})})]})};function r({label:t}){return e.jsx("div",{className:"action-bubble-divider",children:e.jsx("div",{className:"action-bubble-group-badge",children:e.jsx("span",{className:"action-bubble-group-badge__label",children:t})})})}function a({children:t,width:n=360}){return e.jsx("div",{style:{width:n,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:t})}function A({title:t,children:n}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:t}),n]})}function be({language:t,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}function o({title:t,description:n}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:t}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:n})]})}const d={parameters:{docs:{disable:!0}}};var f,W,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Group Created",
  render: () => <Wrapper>
      <GroupActionDivider label="George created the group" />
    </Wrapper>
}`,...(k=(W=i.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var S,C,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Member Joined",
  render: () => <Wrapper>
      <GroupActionDivider label="George joined the group" />
    </Wrapper>
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var M,U,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Made Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="George made Emma an admin" />
    </Wrapper>
}`,...(D=(U=c.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var R,J,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Member Left",
  render: () => <Wrapper>
      <GroupActionDivider label="George left the group" />
    </Wrapper>
}`,...(B=(J=l.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var P,Y,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Removed As Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="You removed Jack as admin" />
    </Wrapper>
}`,...(L=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var N,T,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Member Added",
  render: () => <Wrapper>
      <GroupActionDivider label="George added Jack" />
    </Wrapper>
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,E,H;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Admin Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="Admin Removed" />
    </Wrapper>
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var z,I,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Member Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="George removed Jack" />
    </Wrapper>
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var F,O,X;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Group Name Changed",
  render: () => <Wrapper>
      <GroupActionDivider label='Group name changed to "Watch World"' />
    </Wrapper>
}`,...(X=(O=b.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var q,K,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "User Blocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You blocked George" />
    </Wrapper>
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Group Profile Updated",
  render: () => <Wrapper>
      <GroupActionDivider label="Group Profile updated" />
    </Wrapper>
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "User Unblocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ne,de;G.parameters={...G.parameters,docs:{...(te=G.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(de=(ne=G.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,se,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,pe,me,ue,ge;d.parameters={...d.parameters,docs:{...(le=d.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(me=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Interactive playground.",...(ge=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};const Ae=["GroupCreated","MemberJoined","MadeAdmin","MemberLeft","RemovedAsAdmin","MemberAdded","AdminRemoved","MemberRemoved","GroupNameChanged","UserBlocked","GroupProfileUpdated","UserUnblocked","AllGroupActions","Usage","Playground"];export{u as AdminRemoved,G as AllGroupActions,i as GroupCreated,b as GroupNameChanged,v as GroupProfileUpdated,c as MadeAdmin,m as MemberAdded,s as MemberJoined,l as MemberLeft,g as MemberRemoved,d as Playground,p as RemovedAsAdmin,j as Usage,h as UserBlocked,x as UserUnblocked,Ae as __namedExportsOrder,je as default};
