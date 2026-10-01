import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as xe}from"./T-B-X7QtOX.js";import{U as o,a as _}from"./GroupItem-BCdDauI2.js";import{F as fe,A as be}from"./_alphabet-DWxTYM24.js";import{a as Ue}from"./avatars-DeYFvwHw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-DYXhLi95.js";import"./runtime-BcbsTeSr.js";const S=Ue["Female Avatar"],a=Ue["Male Avatar"],Ce={title:"Base Components/List Item/User Item",component:o,parameters:{layout:"centered"}},t=r=>e.jsx("div",{style:{width:400,background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:e.jsx(r,{})}),i={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"}},l={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"}},c={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"}},d={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,title:"George Alan"}},m={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan"}},g={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant"}},p={name:"Status — Online",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"}},v={name:"Status — Offline",decorators:[t],args:{avatarUrl:S[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline"}},u={decorators:[t],render:()=>e.jsx(fe,{})},h={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(_,{tone:"start"})},x={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(_,{tone:"end"})},n=({label:r,children:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:e.jsx(xe,{children:r})}),e.jsx("div",{style:{background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:s})]}),f={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(n,{label:"Default",children:e.jsx(o,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"default"})}),e.jsx(n,{label:"Hover",children:e.jsx(o,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"hover"})}),e.jsx(n,{label:"Pressed",children:e.jsx(o,{avatarUrl:a[5].imageUrl,title:"George Alan",state:"pressed"})}),e.jsx(n,{label:"Status — Online",children:e.jsx(o,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online"})}),e.jsx(n,{label:"Skeleton — Start",children:e.jsx(_,{tone:"start"})}),e.jsx(n,{label:"Skeleton — End",children:e.jsx(_,{tone:"end"})}),e.jsx(n,{label:"Divider",children:e.jsx(fe,{})})]})})},U={name:"Alphabet List",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsx("div",{style:{width:400,background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:e.jsx(be,{users:[{name:"Anna Lane",avatarUrl:S[6].imageUrl},{name:"Aaron Scott",avatarUrl:a[0].imageUrl},{name:"Brian Michael",avatarUrl:a[1].imageUrl},{name:"Emma Rose",avatarUrl:S[1].imageUrl},{name:"George Alan",avatarUrl:a[5].imageUrl},{name:"Olivia Rhye",avatarUrl:S[10].imageUrl}]})})})},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(j,{title:"HTML",children:e.jsx(A,{language:"HTML",code:`<!-- User Item -->
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
</div>`})}),e.jsx(j,{title:"CSS (CometChat Tokens)",children:e.jsx(A,{language:"CSS",code:`.list-item {
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
  inset-inline-end: 0;
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
}`})})]})},y={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",textContent:"",messageStatus:"none",messageType:"none",messageTypeLabel:!1,state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},textContent:{control:"text"},messageStatus:{control:"select",options:["none","sending","sent","delivered","read","error"]},messageType:{control:"select",options:["none","photo","video","audio","file","location","sticker","gif","poll"]},messageTypeLabel:{control:"boolean"},state:{control:"radio",options:["default","hover","pressed"]}}},A=({language:r,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function j({title:r,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:e.jsx(xe,{children:r})}),s]})}var k,I,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "default"
  }
}`,...(G=(I=i.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var T,C,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "hover"
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var W,L,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "pressed"
  }
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,H,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan"
  }
}`,...(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var E,V,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan"
  }
}`,...(R=(V=m.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var M,F,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant"
  }
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var B,X,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online"
  }
}`,...(q=(X=p.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,N;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline"
  }
}`,...(N=(K=v.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [single],
  render: () => <FirstLetterDivider />
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <UserItemSkeleton tone="start" />
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <UserItemSkeleton tone="end" />
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,oe,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
          <FirstLetterDivider />
        </Wrap>
      </div>
    </div>
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
        <AlphabetSections users={[{
        name: "Anna Lane",
        avatarUrl: female[6].imageUrl
      }, {
        name: "Aaron Scott",
        avatarUrl: male[0].imageUrl
      }, {
        name: "Brian Michael",
        avatarUrl: male[1].imageUrl
      }, {
        name: "Emma Rose",
        avatarUrl: female[1].imageUrl
      }, {
        name: "George Alan",
        avatarUrl: male[5].imageUrl
      }, {
        name: "Olivia Rhye",
        avatarUrl: female[10].imageUrl
      }]} />
      </div>
    </div>
}`,...(de=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ge,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  inset-inline-end: 0;
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
}`,...(pe=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ve,ue,he;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const we=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Divider","SkeletonStart","SkeletonEnd","AllStates","AlphabetList","Usage","Playground"];export{f as AllStates,U as AlphabetList,g as AvatarIcon,d as AvatarImage,m as AvatarText,i as Default,u as Divider,l as Hover,y as Playground,c as Pressed,x as SkeletonEnd,h as SkeletonStart,v as StatusOffline,p as StatusOnline,b as Usage,we as __namedExportsOrder,Ce as default};
