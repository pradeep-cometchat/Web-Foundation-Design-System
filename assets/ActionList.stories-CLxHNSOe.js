import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const je={title:"Core Components/Chat Area/Action Bubble/Action List",tags:["autodocs"],parameters:{layout:"centered"}},s={name:"Group Created",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George created the group"})})},i={name:"Member Joined",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George joined the group"})})},l={name:"Made Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George made Emma an admin"})})},c={name:"Member Left",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George left the group"})})},p={name:"Removed As Admin",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You removed Jack as admin"})})},m={name:"Member Added",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George added Jack"})})},u={name:"Admin Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Admin Removed"})})},b={name:"Member Removed",render:()=>e.jsx(a,{children:e.jsx(r,{label:"George removed Jack"})})},g={name:"Group Name Changed",render:()=>e.jsx(a,{children:e.jsx(r,{label:'Group name changed to "Watch World"'})})},v={name:"User Blocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You blocked George"})})},h={name:"Group Profile Updated",render:()=>e.jsx(a,{children:e.jsx(r,{label:"Group Profile updated"})})},x={name:"User Unblocked",render:()=>e.jsx(a,{children:e.jsx(r,{label:"You unblocked George"})})},G={name:"All Group Actions",render:()=>e.jsxs(a,{width:400,children:[e.jsx(r,{label:"George created the group"}),e.jsx(r,{label:"George joined the group"}),e.jsx(r,{label:"George made Emma an admin"}),e.jsx(r,{label:"George left the group"}),e.jsx(r,{label:"You removed Jack as admin"}),e.jsx(r,{label:"George added Jack"}),e.jsx(r,{label:"Admin Removed"}),e.jsx(r,{label:"George removed Jack"}),e.jsx(r,{label:'Group name changed to "Watch World"'}),e.jsx(r,{label:"You blocked George"}),e.jsx(r,{label:"Group Profile updated"}),e.jsx(r,{label:"You unblocked George"})]})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(A,{title:"HTML Structure",children:e.jsx(ge,{language:"HTML",code:`<!-- Group Action (centered badge, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-group-badge">
    <span class="action-bubble-group-badge__label">George created the group</span>
  </div>
</div>`})}),e.jsx(A,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(o,{title:"Group Created",description:"When a user creates a new group."}),e.jsx(o,{title:"Member Joined",description:"When a user joins the group."}),e.jsx(o,{title:"Made Admin",description:"When a user is promoted to admin."}),e.jsx(o,{title:"Member Left",description:"When a user leaves the group."}),e.jsx(o,{title:"Removed As Admin",description:"When admin privileges are revoked."}),e.jsx(o,{title:"Member Added",description:"When a user adds someone to the group."}),e.jsx(o,{title:"Admin Removed",description:"Generic admin removal notification."}),e.jsx(o,{title:"Member Removed",description:"When a user is removed from the group."}),e.jsx(o,{title:"Group Name Changed",description:"When the group name is updated."}),e.jsx(o,{title:"User Blocked",description:"When a user blocks another user."}),e.jsx(o,{title:"Group Profile Updated",description:"When group profile/avatar changes."}),e.jsx(o,{title:"User Unblocked",description:"When a user unblocks another user."})]})})]})};function r({label:n}){return e.jsx("div",{className:"action-bubble-divider",children:e.jsx("div",{className:"action-bubble-group-badge",children:e.jsx("span",{className:"action-bubble-group-badge__label",children:n})})})}function a({children:n,width:d=360}){return e.jsx("div",{style:{width:d,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:n})}function A({title:n,children:d}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:n}),d]})}function ge({language:n,code:d}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:d})})]})}function o({title:n,description:d}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:n}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:d})]})}const t={parameters:{docs:{disable:!0}}};var f,W,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Group Created",
  render: () => <Wrapper>
      <GroupActionDivider label="George created the group" />
    </Wrapper>
}`,...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var S,y,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Member Joined",
  render: () => <Wrapper>
      <GroupActionDivider label="George joined the group" />
    </Wrapper>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var M,U,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Made Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="George made Emma an admin" />
    </Wrapper>
}`,...(D=(U=l.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var R,J,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Member Left",
  render: () => <Wrapper>
      <GroupActionDivider label="George left the group" />
    </Wrapper>
}`,...(B=(J=c.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var P,Y,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Removed As Admin",
  render: () => <Wrapper>
      <GroupActionDivider label="You removed Jack as admin" />
    </Wrapper>
}`,...(L=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var w,z,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Member Added",
  render: () => <Wrapper>
      <GroupActionDivider label="George added Jack" />
    </Wrapper>
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var T,_,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Admin Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="Admin Removed" />
    </Wrapper>
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,I,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Member Removed",
  render: () => <Wrapper>
      <GroupActionDivider label="George removed Jack" />
    </Wrapper>
}`,...(V=(I=b.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var F,O,X;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Group Name Changed",
  render: () => <Wrapper>
      <GroupActionDivider label='Group name changed to "Watch World"' />
    </Wrapper>
}`,...(X=(O=g.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var q,K,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "User Blocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You blocked George" />
    </Wrapper>
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Group Profile Updated",
  render: () => <Wrapper>
      <GroupActionDivider label="Group Profile updated" />
    </Wrapper>
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "User Unblocked",
  render: () => <Wrapper>
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,de,te;G.parameters={...G.parameters,docs:{...(ne=G.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(de=G.parameters)==null?void 0:de.docs)==null?void 0:te.source}}};var se,ie,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        gap: "var(--space-3)"
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
}`,...(le=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,me,ue,be;t.parameters={...t.parameters,docs:{...(ce=t.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(me=(pe=t.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Interactive playground.",...(be=(ue=t.parameters)==null?void 0:ue.docs)==null?void 0:be.description}}};const Ae=["GroupCreated","MemberJoined","MadeAdmin","MemberLeft","RemovedAsAdmin","MemberAdded","AdminRemoved","MemberRemoved","GroupNameChanged","UserBlocked","GroupProfileUpdated","UserUnblocked","AllGroupActions","Usage","Playground"];export{u as AdminRemoved,G as AllGroupActions,s as GroupCreated,g as GroupNameChanged,h as GroupProfileUpdated,l as MadeAdmin,m as MemberAdded,i as MemberJoined,c as MemberLeft,b as MemberRemoved,t as Playground,p as RemovedAsAdmin,j as Usage,v as UserBlocked,x as UserUnblocked,Ae as __namedExportsOrder,je as default};
