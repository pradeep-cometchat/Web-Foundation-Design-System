import{j as e}from"./jsx-runtime-BYYWji4R.js";import{U as r,e as A,f as o}from"./GroupItem-bExsbeWu.js";import{a as Ue}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _=Ue["Female Avatar"],a=Ue["Male Avatar"],Ae={title:"Base Components/List Item/User Item",component:r,parameters:{layout:"centered"}},t=n=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:e.jsx(n,{})}),i={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"}},c={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"}},d={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"}},m={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,title:"George Alan"}},v={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan"}},g={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant"}},p={name:"Status — Online",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"}},u={name:"Status — Offline",decorators:[t],args:{avatarUrl:_[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline"}},f={decorators:[t],render:()=>e.jsx(o,{label:"A"})},x={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(A,{tone:"start"})},U={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(A,{tone:"end"})},s=({label:n,children:l})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:n}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:l})]}),b={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(s,{label:"Default",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"})}),e.jsx(s,{label:"Hover",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"})}),e.jsx(s,{label:"Pressed",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"})}),e.jsx(s,{label:"Status — Online",children:e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"})}),e.jsx(s,{label:"Skeleton — Start",children:e.jsx(A,{tone:"start"})}),e.jsx(s,{label:"Skeleton — End",children:e.jsx(A,{tone:"end"})}),e.jsx(s,{label:"Divider",children:e.jsx(o,{label:"A"})})]})})},h={name:"Alphabet List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:[e.jsx(o,{label:"A"}),e.jsx(r,{avatarUrl:_[6].imageUrl,title:"Anna Lane"}),e.jsx(r,{avatarUrl:a[0].imageUrl,title:"Aaron Scott"}),e.jsx(o,{label:"B"}),e.jsx(r,{avatarUrl:a[1].imageUrl,title:"Brian Michael"}),e.jsx(o,{label:"E"}),e.jsx(r,{avatarUrl:_[1].imageUrl,title:"Emma Rose"}),e.jsx(o,{label:"G"}),e.jsx(r,{avatarUrl:a[5].imageUrl,title:"George Alan"}),e.jsx(o,{label:"O"}),e.jsx(r,{avatarUrl:_[10].imageUrl,title:"Olivia Rhye"})]})})},y={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(I,{title:"HTML",children:e.jsx(j,{language:"HTML",code:`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--color-success-500)"></span>
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
</div>`})}),e.jsx(I,{title:"CSS (Foundation Variables)",children:e.jsx(j,{language:"CSS",code:`.list-item {
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
  background: var(--color-ep-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-ep-700);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: var(--space-2-5);
  height: var(--space-2-5);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-bg-01);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}`})})]})},S={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",textContent:"",messageStatus:"none",messageType:"none",messageTypeLabel:!1,state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},textContent:{control:"text"},messageStatus:{control:"select",options:["none","sending","sent","delivered","read","error"]},messageType:{control:"select",options:["none","photo","video","audio","file","location","sticker","gif","poll"]},messageTypeLabel:{control:"boolean"},state:{control:"radio",options:["default","hover","pressed"]}}},j=({language:n,code:l})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:n})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:l})})]});function I({title:n,children:l}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:n}),l]})}var G,k,w;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "default"
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,D,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "hover"
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var C,W,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "pressed"
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var L,E,V;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan"
  }
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var H,R,B;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan"
  }
}`,...(B=(R=v.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,P,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant"
  }
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var X,q,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online"
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,N,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline"
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [single],
  render: () => <UserItemDivider label="A" />
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <UserItemSkeleton tone="start" />
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,se;U.parameters={...U.parameters,docs:{...(re=U.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <UserItemSkeleton tone="end" />
}`,...(se=(ne=U.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=h.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ve,ge,pe;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--color-success-500)"></span>
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
  background: var(--color-ep-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-ep-700);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: var(--space-2-5);
  height: var(--space-2-5);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-bg-01);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}\`} />
      </UsageSection>
    </div>
}`,...(pe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,fe,xe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const je=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Divider","SkeletonStart","SkeletonEnd","AllStates","AlphabetList","Usage","Playground"];export{b as AllStates,h as AlphabetList,g as AvatarIcon,m as AvatarImage,v as AvatarText,i as Default,f as Divider,c as Hover,S as Playground,d as Pressed,U as SkeletonEnd,x as SkeletonStart,u as StatusOffline,p as StatusOnline,y as Usage,je as __namedExportsOrder,Ae as default};
