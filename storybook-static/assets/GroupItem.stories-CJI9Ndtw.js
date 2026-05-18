import{j as e}from"./jsx-runtime-BYYWji4R.js";import{G as a,d as s}from"./GroupItem-bExsbeWu.js";import{a as be}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=be["Group Avatar"],_e={title:"Base Components/List Item/Group Item",component:a,parameters:{layout:"centered"}},t=i=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:e.jsx(i,{})}),l={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"}},c={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"}},d={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"}},p={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}},m={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"AD",title:"Artistic Design",description:"24 Members"}},g={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"group",title:"Artistic Design",description:"24 Members"}},v={name:"Group Type — Public",decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Epic Game",description:"248 Members",groupType:"public"}},u={name:"Group Type — Private",decorators:[t],args:{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",groupType:"private"}},b={name:"Group Type — Protected",decorators:[t],args:{avatarUrl:r[8].imageUrl,title:"Innovative Online Shopping",description:"56 Members",groupType:"protected"}},x={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(s,{tone:"start"})},f={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(s,{tone:"end"})},n=({label:i,children:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:i}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:o})]}),h={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{label:"Default",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"})}),e.jsx(n,{label:"Hover",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"})}),e.jsx(n,{label:"Pressed",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"})}),e.jsx(n,{label:"Group Type — Public",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Epic Game",description:"248 Members",groupType:"public"})}),e.jsx(n,{label:"Group Type — Private",children:e.jsx(a,{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",groupType:"private"})}),e.jsx(n,{label:"Group Type — Protected",children:e.jsx(a,{avatarUrl:r[8].imageUrl,title:"Innovative Online Shopping",description:"56 Members",groupType:"protected"})}),e.jsx(n,{label:"Skeleton — Start",children:e.jsx(s,{tone:"start"})}),e.jsx(n,{label:"Skeleton — End",children:e.jsx(s,{tone:"end"})})]})})},y={name:"Group List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}),e.jsx(a,{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members"}),e.jsx(a,{avatarUrl:r[2].imageUrl,title:"Code Craze",description:"56 Members",state:"hover"}),e.jsx(a,{avatarUrl:r[7].imageUrl,title:"Health Haven",description:"1,024 Members",state:"pressed"}),e.jsx(s,{tone:"start"}),e.jsx(s,{tone:"end"})]})})},U={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(j,{title:"HTML",children:e.jsx(S,{language:"HTML",code:`<!-- Group Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Artistic Design" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Artistic Design</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">24 Members</span>
    </div>
  </div>
</div>

<!-- Group Item with type badge (private) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Bright Mind" />
      <!-- Private badge SVG positioned absolute bottom-right -->
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Bright Mind</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">12 Members</span>
    </div>
  </div>
</div>`})}),e.jsx(j,{title:"CSS (Foundation Variables)",children:e.jsx(S,{language:"CSS",code:`.list-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-01);
  border-radius: var(--radius-md);
  cursor: pointer;
  min-height: var(--space-14);
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--color-bg-02);
}

.list-item__avatar {
  position: relative;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
  overflow: visible;
}

.list-item__avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.list-item__content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-item__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}`})})]})},_={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,avatarIcon:"group",avatarText:"AD",groupType:"none",title:"Artistic Design",description:"24 Members",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},groupType:{control:"select",options:["none","public","private","protected"]},title:{control:"text"},description:{control:"text"},state:{control:"radio",options:["default","hover","pressed"]}}},S=({language:i,code:o})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:o})})]});function j({title:i,children:o}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:i}),o]})}var M,G,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "default"
  }
}`,...(T=(G=l.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var A,I,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "hover"
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var w,k,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "pressed"
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var W,C,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(z=(C=p.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var V,B,H;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "AD",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var E,L,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "group",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(O=(L=g.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,R,X;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Group Type — Public",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Epic Game",
    description: "248 Members",
    groupType: "public"
  }
}`,...(X=(R=v.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var q,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Group Type — Private",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    groupType: "private"
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,Y;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Group Type — Protected",
  decorators: [single],
  args: {
    avatarUrl: group[8].imageUrl,
    title: "Innovative Online Shopping",
    description: "56 Members",
    groupType: "protected"
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="start" />
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ae;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="end" />
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ie,se;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--space-8)"
  }}>
      <div style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }}>
        <Wrap label="Default">
          <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" state="default" />
        </Wrap>
        <Wrap label="Hover">
          <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" state="hover" />
        </Wrap>
        <Wrap label="Pressed">
          <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" state="pressed" />
        </Wrap>
        <Wrap label="Group Type — Public">
          <GroupItem avatarUrl={group[5].imageUrl} title="Epic Game" description="248 Members" groupType="public" />
        </Wrap>
        <Wrap label="Group Type — Private">
          <GroupItem avatarUrl={group[1].imageUrl} title="Bright Mind" description="12 Members" groupType="private" />
        </Wrap>
        <Wrap label="Group Type — Protected">
          <GroupItem avatarUrl={group[8].imageUrl} title="Innovative Online Shopping" description="56 Members" groupType="protected" />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <GroupItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <GroupItemSkeleton tone="end" />
        </Wrap>
      </div>
    </div>
}`,...(se=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,le,ce;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Group List",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--space-8)"
  }}>
      <div style={{
      width: 400,
      background: "var(--color-bg-01)",
      border: "1px solid var(--color-border-default)",
      overflow: "hidden"
    }}>
        <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
        <GroupItem avatarUrl={group[1].imageUrl} title="Bright Mind" description="12 Members" />
        <GroupItem avatarUrl={group[2].imageUrl} title="Code Craze" description="56 Members" state="hover" />
        <GroupItem avatarUrl={group[7].imageUrl} title="Health Haven" description="1,024 Members" state="pressed" />
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
      </div>
    </div>
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,me;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Group Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Artistic Design" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Artistic Design</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">24 Members</span>
    </div>
  </div>
</div>

<!-- Group Item with type badge (private) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Bright Mind" />
      <!-- Private badge SVG positioned absolute bottom-right -->
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Bright Mind</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">12 Members</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.list-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-01);
  border-radius: var(--radius-md);
  cursor: pointer;
  min-height: var(--space-14);
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--color-bg-02);
}

.list-item__avatar {
  position: relative;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
  overflow: visible;
}

.list-item__avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.list-item__content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-0-5);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-item__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}\`} />
      </UsageSection>
    </div>
}`,...(me=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,ve,ue;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  decorators: [single],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    avatarVariant: "image",
    avatarUrl: group[5].imageUrl,
    avatarIcon: "group",
    avatarText: "AD",
    groupType: "none",
    title: "Artistic Design",
    description: "24 Members",
    state: "default"
  },
  argTypes: {
    avatarVariant: {
      control: "radio",
      options: ["image", "text", "icon"]
    },
    avatarUrl: {
      control: "text"
    },
    avatarText: {
      control: "text"
    },
    avatarIcon: {
      control: "text"
    },
    groupType: {
      control: "select",
      options: ["none", "public", "private", "protected"]
    },
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    state: {
      control: "radio",
      options: ["default", "hover", "pressed"]
    }
  }
}`,...(ue=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};const Se=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","PublicGroup","PrivateGroup","ProtectedGroup","SkeletonStart","SkeletonEnd","AllStates","GroupList","Usage","Playground"];export{h as AllStates,g as AvatarIcon,p as AvatarImage,m as AvatarText,l as Default,y as GroupList,c as Hover,_ as Playground,d as Pressed,u as PrivateGroup,b as ProtectedGroup,v as PublicGroup,f as SkeletonEnd,x as SkeletonStart,U as Usage,Se as __namedExportsOrder,_e as default};
