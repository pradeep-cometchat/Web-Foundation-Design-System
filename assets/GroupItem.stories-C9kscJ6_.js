import{j as e}from"./jsx-runtime-BYYWji4R.js";import{G as a,d as n}from"./GroupItem-BhNWYf5e.js";import{a as oe}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=oe["Group Avatar"],me={title:"Base Components/List Item/Group Item",component:a,parameters:{layout:"centered"}},t=U=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.jsx(U,{})}),o={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"}},i={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"}},l={decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"}},c={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}},d={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"AD",title:"Artistic Design",description:"24 Members"}},p={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"group",title:"Artistic Design",description:"24 Members"}},m={name:"Status — Online",decorators:[t],args:{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",statusIcon:"online"}},g={name:"Status — Offline",decorators:[t],args:{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members",statusIcon:"offline"}},u={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(n,{tone:"start"})},v={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(n,{tone:"end"})},s=({label:U,children:se})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:U}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:se})]}),x={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(s,{label:"Default",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"default"})}),e.jsx(s,{label:"Hover",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"hover"})}),e.jsx(s,{label:"Pressed",children:e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members",state:"pressed"})}),e.jsx(s,{label:"Skeleton — Start",children:e.jsx(n,{tone:"start"})}),e.jsx(s,{label:"Skeleton — End",children:e.jsx(n,{tone:"end"})})]})})},b={name:"Group List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:[e.jsx(a,{avatarUrl:r[5].imageUrl,title:"Artistic Design",description:"24 Members"}),e.jsx(a,{avatarUrl:r[1].imageUrl,title:"Bright Mind",description:"12 Members"}),e.jsx(a,{avatarUrl:r[2].imageUrl,title:"Code Craze",description:"56 Members",state:"hover"}),e.jsx(a,{avatarUrl:r[7].imageUrl,title:"Health Haven",description:"1,024 Members",state:"pressed"}),e.jsx(n,{tone:"start"}),e.jsx(n,{tone:"end"})]})})},f={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:r[5].imageUrl,avatarIcon:"group",avatarText:"AD",statusIcon:"none",title:"Artistic Design",description:"24 Members",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},description:{control:"text"},state:{control:"radio",options:["default","hover","pressed"]}}};var S,A,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "default"
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var h,M,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "hover"
  }
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var y,j,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "pressed"
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var G,T,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var w,V,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "AD",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var O,E,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "group",
    title: "Artistic Design",
    description: "24 Members"
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var P,R,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    statusIcon: "online"
  }
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var L,z,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    statusIcon: "offline"
  }
}`,...(_=(z=g.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var q,F,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="start" />
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,N,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="end" />
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <Wrap label="Skeleton — Start">
          <GroupItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <GroupItemSkeleton tone="end" />
        </Wrap>
      </div>
    </div>
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const ge=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","SkeletonStart","SkeletonEnd","AllStates","GroupList","Playground"];export{x as AllStates,p as AvatarIcon,c as AvatarImage,d as AvatarText,o as Default,b as GroupList,i as Hover,f as Playground,l as Pressed,v as SkeletonEnd,u as SkeletonStart,g as StatusOffline,m as StatusOnline,ge as __namedExportsOrder,me as default};
