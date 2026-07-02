import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as r,b as A,U as o}from"./GroupItem-C7Luoi0J.js";import{a as fe}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _=fe["Female Avatar"],a=fe["Male Avatar"],Ae={title:"Base Components/List Item/User Item",component:r,parameters:{layout:"centered"}},t=n=>e.jsx("div",{style:{width:400,background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:e.jsx(n,{})}),i={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"}},c={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"}},d={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"}},m={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,title:"George Alan"}},g={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan"}},p={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant"}},v={name:"Status — Online",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"}},u={name:"Status — Offline",decorators:[t],args:{avatarUrl:_[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline"}},h={decorators:[t],render:()=>e.jsx(o,{label:"A"})},x={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(A,{tone:"start"})},f={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(A,{tone:"end"})},s=({label:n,children:l})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:n}),e.jsx("div",{style:{background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:l})]}),U={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(s,{label:"Default",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"})}),e.jsx(s,{label:"Hover",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"})}),e.jsx(s,{label:"Pressed",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"})}),e.jsx(s,{label:"Status — Online",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"})}),e.jsx(s,{label:"Skeleton — Start",children:e.jsx(A,{tone:"start"})}),e.jsx(s,{label:"Skeleton — End",children:e.jsx(A,{tone:"end"})}),e.jsx(s,{label:"Divider",children:e.jsx(o,{label:"A"})})]})})},b={name:"Alphabet List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:[e.jsx(o,{label:"A"}),e.jsx(r,{avatarUrl:_[6].imageUrl,title:"Anna Lane"}),e.jsx(r,{avatarUrl:a[0].imageUrl,title:"Aaron Scott"}),e.jsx(o,{label:"B"}),e.jsx(r,{avatarUrl:a[1].imageUrl,title:"Brian Michael"}),e.jsx(o,{label:"E"}),e.jsx(r,{avatarUrl:_[1].imageUrl,title:"Emma Rose"}),e.jsx(o,{label:"G"}),e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan"}),e.jsx(o,{label:"O"}),e.jsx(r,{avatarUrl:_[10].imageUrl,title:"Olivia Rhye"})]})})},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(I,{title:"HTML",children:e.jsx(j,{language:"HTML",code:`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--cometchat-success-color)"></span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">Hey, let's catch up later!</span>
    </div>
  </div>
</div>

<!-- User Item with initials -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <span class="list-item__avatar-initials">GA</span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
  </div>
</div>`})}),e.jsx(I,{title:"CSS (CometChat Tokens)",children:e.jsx(j,{language:"CSS",code:`.list-item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  min-height: 56px;
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--cometchat-background-color-02);
}

.list-item__avatar {
  position: relative;
  width: var(--cometchat-spacing-10);
  height: var(--cometchat-spacing-10);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-extended-primary-color-900);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.list-item__subtitle {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}`})})]})},S={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",textContent:"",messageStatus:"none",messageType:"none",messageTypeLabel:!1,state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},textContent:{control:"text"},messageStatus:{control:"select",options:["none","sending","sent","delivered","read","error"]},messageType:{control:"select",options:["none","photo","video","audio","file","location","sticker","gif","poll"]},messageTypeLabel:{control:"boolean"},state:{control:"radio",options:["default","hover","pressed"]}}},j=({language:n,code:l})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:l})})]});function I({title:n,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:n}),l]})}var k,G,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "default"
  }
}`,...(T=(G=i.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var C,w,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "hover"
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,O,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "pressed"
  }
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var E,H,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan"
  }
}`,...(z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var V,R,B;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan"
  }
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,P,F;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant"
  }
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var X,q,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online"
  }
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,N,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline"
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [single],
  render: () => <UserItemDivider label="A" />
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <UserItemSkeleton tone="start" />
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <UserItemSkeleton tone="end" />
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;U.parameters={...U.parameters,docs:{...(oe=U.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--cometchat-spacing-8)"
  }}>
      <div style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-3)"
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
}`,...(ie=(le=U.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Alphabet List",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "var(--cometchat-spacing-8)"
  }}>
      <div style={{
      width: 400,
      background: "var(--cometchat-background-color-01)",
      border: "1px solid var(--cometchat-border-color-default)",
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
}`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,pe,ve;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)"
  }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={\`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--cometchat-success-color)"></span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">Hey, let's catch up later!</span>
    </div>
  </div>
</div>

<!-- User Item with initials -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <span class="list-item__avatar-initials">GA</span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.list-item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  min-height: 56px;
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--cometchat-background-color-02);
}

.list-item__avatar {
  position: relative;
  width: var(--cometchat-spacing-10);
  height: var(--cometchat-spacing-10);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-extended-primary-color-900);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.list-item__subtitle {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}\`} />
      </UsageSection>
    </div>
}`,...(ve=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ue,he,xe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};const je=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Divider","SkeletonStart","SkeletonEnd","AllStates","AlphabetList","Usage","Playground"];export{U as AllStates,b as AlphabetList,p as AvatarIcon,m as AvatarImage,g as AvatarText,i as Default,h as Divider,c as Hover,S as Playground,d as Pressed,f as SkeletonEnd,x as SkeletonStart,u as StatusOffline,v as StatusOnline,y as Usage,je as __namedExportsOrder,Ae as default};
