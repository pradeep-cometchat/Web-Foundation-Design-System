import{j as e}from"./jsx-runtime-BYYWji4R.js";import{G as a,d as s}from"./GroupItem-BVaXZE0N.js";import{a as xe}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=xe["Group Avatar"],Ge={title:"Base Components/List Item/Group Item",component:a,parameters:{layout:"centered"}},t=M=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.jsx(M,{})}),o={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"}},i={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"}},l={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"}},c={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}},p={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"AD",title:"Artistic Design",description:"24 Members"}},d={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"group",title:"Artistic Design",description:"24 Members"}},m={name:"Status — Online",decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",statusIcon:"online"}},u={name:"Status — Offline",decorators:[t],args:{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",statusIcon:"offline"}},g={name:"Group Type — Public",decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Epic Game",description:"248 Members",groupType:"public"}},v={name:"Group Type — Private",decorators:[t],args:{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",groupType:"private"}},b={name:"Group Type — Protected",decorators:[t],args:{avatarUrl:r[8].imageUrl,title:"Innovative Online Shopping",description:"56 Members",groupType:"protected"}},U={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(s,{tone:"start"})},x={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(s,{tone:"end"})},n=({label:M,children:Ue})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:M}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:Ue})]}),f={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(n,{label:"Default",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"})}),e.jsx(n,{label:"Hover",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"})}),e.jsx(n,{label:"Pressed",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"})}),e.jsx(n,{label:"Group Type — Public",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Epic Game",description:"248 Members",groupType:"public"})}),e.jsx(n,{label:"Group Type — Private",children:e.jsx(a,{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",groupType:"private"})}),e.jsx(n,{label:"Group Type — Protected",children:e.jsx(a,{avatarUrl:r[8].imageUrl,title:"Innovative Online Shopping",description:"56 Members",groupType:"protected"})}),e.jsx(n,{label:"Skeleton — Start",children:e.jsx(s,{tone:"start"})}),e.jsx(n,{label:"Skeleton — End",children:e.jsx(s,{tone:"end"})})]})})},y={name:"Group List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:[e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}),e.jsx(a,{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members"}),e.jsx(a,{avatarUrl:r[2].imageUrl,title:"Code Craze",description:"56 Members",state:"hover"}),e.jsx(a,{avatarUrl:r[7].imageUrl,title:"Health Haven",description:"1,024 Members",state:"pressed"}),e.jsx(s,{tone:"start"}),e.jsx(s,{tone:"end"})]})})},S={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,avatarIcon:"group",avatarText:"AD",statusIcon:"none",groupType:"none",title:"Artistic Design",description:"24 Members",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},groupType:{control:"select",options:["none","public","private","protected"]},title:{control:"text"},description:{control:"text"},state:{control:"radio",options:["default","hover","pressed"]}}};var h,G,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "default"
  }
}`,...(I=(G=o.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var A,T,j;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "hover"
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var D,P,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "pressed"
  }
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var W,O,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var w,V,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "AD",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var C,H,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "group",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var L,z,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    statusIcon: "online"
  }
}`,...(_=(z=m.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var q,F,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    statusIcon: "offline"
  }
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,N,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Group Type — Public",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Epic Game",
    description: "248 Members",
    groupType: "public"
  }
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Group Type — Private",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    groupType: "private"
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Group Type — Protected",
  decorators: [single],
  args: {
    avatarUrl: group[8].imageUrl,
    title: "Innovative Online Shopping",
    description: "56 Members",
    groupType: "protected"
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="start" />
}`,...(ne=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="end" />
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,pe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      borderRadius: "var(--radius-lg)",
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
}`,...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,ve,be;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    statusIcon: "none",
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
    statusIcon: {
      control: "select",
      options: ["none", "online", "offline"]
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
}`,...(be=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Ie=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","PublicGroup","PrivateGroup","ProtectedGroup","SkeletonStart","SkeletonEnd","AllStates","GroupList","Playground"];export{f as AllStates,d as AvatarIcon,c as AvatarImage,p as AvatarText,o as Default,y as GroupList,i as Hover,S as Playground,l as Pressed,v as PrivateGroup,b as ProtectedGroup,g as PublicGroup,x as SkeletonEnd,U as SkeletonStart,u as StatusOffline,m as StatusOnline,Ie as __namedExportsOrder,Ge as default};
