import{j as e}from"./jsx-runtime-BYYWji4R.js";import{U as r,e as j,f as n}from"./GroupItem-BhNWYf5e.js";import{a as Ge}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=Ge["Female Avatar"],a=Ge["Male Avatar"],we={title:"Base Components/List Item/User Item",component:r,parameters:{layout:"centered"}},t=T=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.jsx(T,{})}),l={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"}},i={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"}},c={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"}},m={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,title:"George Alan"}},d={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan"}},g={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant"}},p={name:"Status — Online",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"}},u={name:"Status — Offline",decorators:[t],args:{avatarUrl:o[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline"}},v={name:"With Text Content",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",textContent:"Hey, let's catch up later!"}},U={name:"With Message Status",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",messageStatus:"read",textContent:"Hey, let's catch up later!"}},x={name:"With Message Type",decorators:[t],args:{avatarUrl:o[1].imageUrl,title:"Emma Rose",messageType:"photo",messageTypeLabel:!0}},f={name:"Full Preview",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online",messageStatus:"read",messageType:"photo",messageTypeLabel:!0,textContent:"Hey, let's catch up later!"}},y={decorators:[t],render:()=>e.jsx(n,{label:"A"})},h={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(j,{tone:"start"})},S={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(j,{tone:"end"})},s=({label:T,children:We})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:T}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:We})]}),b={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(s,{label:"Default",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"})}),e.jsx(s,{label:"Hover",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"})}),e.jsx(s,{label:"Pressed",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"})}),e.jsx(s,{label:"Status — Online",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"})}),e.jsx(s,{label:"With Text Content",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",textContent:"Hey, let's catch up later!"})}),e.jsx(s,{label:"Full Preview",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online",messageStatus:"read",messageType:"photo",messageTypeLabel:!0,textContent:"Hey, let's catch up later!"})}),e.jsx(s,{label:"Skeleton — Start",children:e.jsx(j,{tone:"start"})}),e.jsx(s,{label:"Skeleton — End",children:e.jsx(j,{tone:"end"})}),e.jsx(s,{label:"Divider",children:e.jsx(n,{label:"A"})})]})})},A={name:"Alphabet List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:[e.jsx(n,{label:"A"}),e.jsx(r,{avatarUrl:o[6].imageUrl,title:"Anna Lane"}),e.jsx(r,{avatarUrl:a[0].imageUrl,title:"Aaron Scott"}),e.jsx(n,{label:"B"}),e.jsx(r,{avatarUrl:a[1].imageUrl,title:"Brian Michael"}),e.jsx(n,{label:"E"}),e.jsx(r,{avatarUrl:o[1].imageUrl,title:"Emma Rose"}),e.jsx(n,{label:"G"}),e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan"}),e.jsx(n,{label:"O"}),e.jsx(r,{avatarUrl:o[10].imageUrl,title:"Olivia Rhye"})]})})},I={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",textContent:"",messageStatus:"none",messageType:"none",messageTypeLabel:!1,state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},textContent:{control:"text"},messageStatus:{control:"select",options:["none","sending","sent","delivered","read","error"]},messageType:{control:"select",options:["none","photo","video","audio","file","location","sticker","gif","poll"]},messageTypeLabel:{control:"boolean"},state:{control:"radio",options:["default","hover","pressed"]}}};var G,W,C;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "default"
  }
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var k,D,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "hover"
  }
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var O,w,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "pressed"
  }
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var H,R,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan"
  }
}`,...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,V,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan"
  }
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var _,B,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant"
  }
}`,...(z=(B=g.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var q,J,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online"
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline"
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Text Content",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    textContent: "Hey, let's catch up later!"
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;U.parameters={...U.parameters,docs:{...(ee=U.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "With Message Status",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!"
  }
}`,...(te=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,ne;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "With Message Type",
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    messageType: "photo",
    messageTypeLabel: true
  }
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Full Preview",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!"
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,me,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  decorators: [single],
  render: () => <UserItemDivider label="A" />
}`,...(de=(me=y.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,pe,ue;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <UserItemSkeleton tone="start" />
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ve,Ue,xe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <UserItemSkeleton tone="end" />
}`,...(xe=(Ue=S.parameters)==null?void 0:Ue.docs)==null?void 0:xe.source}}};var fe,ye,he;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="default" />
        </Wrap>
        <Wrap label="Hover">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="hover" />
        </Wrap>
        <Wrap label="Pressed">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="pressed" />
        </Wrap>
        <Wrap label="Status — Online">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" statusIcon="online" />
        </Wrap>
        <Wrap label="With Text Content">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" textContent="Hey, let's catch up later!" />
        </Wrap>
        <Wrap label="Full Preview">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" statusIcon="online" messageStatus="read" messageType="photo" messageTypeLabel textContent="Hey, let's catch up later!" />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <UserItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <UserItemSkeleton tone="end" />
        </Wrap>
        <Wrap label="Divider">
          <UserItemDivider label="A" />
        </Wrap>
      </div>
    </div>
}`,...(he=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Se,be,Ae;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "Alphabet List",
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
        <UserItemDivider label="A" />
        <UserItem avatarUrl={female[6].imageUrl} title="Anna Lane" />
        <UserItem avatarUrl={male[0].imageUrl} title="Aaron Scott" />
        <UserItemDivider label="B" />
        <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />
        <UserItemDivider label="E" />
        <UserItem avatarUrl={female[1].imageUrl} title="Emma Rose" />
        <UserItemDivider label="G" />
        <UserItem avatarUrl={male[5].imageUrl} title="George Alan" />
        <UserItemDivider label="O" />
        <UserItem avatarUrl={female[10].imageUrl} title="Olivia Rhye" />
      </div>
    </div>
}`,...(Ae=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var Ie,je,Te;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  decorators: [single],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    avatarIcon: "smart_toy",
    avatarText: "GA",
    statusIcon: "none",
    title: "George Alan",
    textContent: "",
    messageStatus: "none",
    messageType: "none",
    messageTypeLabel: false,
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
    textContent: {
      control: "text"
    },
    messageStatus: {
      control: "select",
      options: ["none", "sending", "sent", "delivered", "read", "error"]
    },
    messageType: {
      control: "select",
      options: ["none", "photo", "video", "audio", "file", "location", "sticker", "gif", "poll"]
    },
    messageTypeLabel: {
      control: "boolean"
    },
    state: {
      control: "radio",
      options: ["default", "hover", "pressed"]
    }
  }
}`,...(Te=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};const Ee=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","WithTextContent","WithMessageStatus","WithMessageType","FullPreview","Divider","SkeletonStart","SkeletonEnd","AllStates","AlphabetList","Playground"];export{b as AllStates,A as AlphabetList,g as AvatarIcon,m as AvatarImage,d as AvatarText,l as Default,y as Divider,f as FullPreview,i as Hover,I as Playground,c as Pressed,S as SkeletonEnd,h as SkeletonStart,u as StatusOffline,p as StatusOnline,U as WithMessageStatus,x as WithMessageType,v as WithTextContent,Ee as __namedExportsOrder,we as default};
