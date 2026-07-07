import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as i,c as C}from"./GroupItem-1TqWs5R1.js";import{a as De}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=De["Female Avatar"],a=De["Male Avatar"],Pe={title:"Base Components/List Item/Call Item",component:i,parameters:{layout:"centered"}},t=o=>e.jsx("div",{style:{width:400,background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:e.jsx(o,{})}),l={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"}},c={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"}},m={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"}},d={name:"Avatar — Image",decorators:[t],args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},p={name:"Avatar — Text",decorators:[t],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},g={name:"Avatar — Icon",decorators:[t],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},v={name:"Status — Online",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},u={name:"Status — Offline",decorators:[t],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline",direction:"incoming",type:"voice",dateTime:"Yesterday, 9:00 pm"}},S={decorators:[t],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"}},h={decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},b={decorators:[t],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"}},x={decorators:[t],args:{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"}},y={name:"Action — Voice",decorators:[t],args:{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},U={name:"Action — Video",decorators:[t],args:{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"}},_={name:"Missed Video Call",decorators:[t],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"missed",type:"video",dateTime:"11 September, 8:14 pm"}},f={name:"Skeleton — Start",decorators:[t],render:()=>e.jsx(C,{tone:"start"})},T={name:"Skeleton — End",decorators:[t],render:()=>e.jsx(C,{tone:"end"})},r=({label:o,children:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"500",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:o}),e.jsx("div",{style:{background:"var(--cometchat-background-color-01)",border:"1px solid var(--cometchat-border-color-default)",overflow:"hidden"},children:s})]}),A={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--cometchat-spacing-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(r,{label:"Default",children:e.jsx(i,{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"})}),e.jsx(r,{label:"Hover",children:e.jsx(i,{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"})}),e.jsx(r,{label:"Pressed",children:e.jsx(i,{avatarUrl:a[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"})}),e.jsx(r,{label:"Incoming",children:e.jsx(i,{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Declined",children:e.jsx(i,{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Missed",children:e.jsx(i,{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Video Action",children:e.jsx(i,{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Status — Online",children:e.jsx(i,{avatarUrl:a[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Skeleton — Start",children:e.jsx(C,{tone:"start"})}),e.jsx(r,{label:"Skeleton — End",children:e.jsx(C,{tone:"end"})})]})})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(G,{title:"HTML",children:e.jsx(k,{language:"HTML",code:`<!-- Call Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon">call_made</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
  </div>
</div>

<!-- Missed call (red icon) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="Emma Rose" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title" style="color: var(--cometchat-error-color)">Emma Rose</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon" style="color: var(--cometchat-error-color)">call_missed</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
  </div>
</div>`})}),e.jsx(G,{title:"CSS (CometChat Tokens)",children:e.jsx(k,{language:"CSS",code:`.list-item {
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
  width: var(--cometchat-spacing-10);
  height: var(--cometchat-spacing-10);
  border-radius: var(--cometchat-radius-max);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.list-item__subtitle {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.list-item__trailing-icon {
  font-size: 20px;
  color: var(--cometchat-icon-color-tertiary);
}`})})]})},I={decorators:[t],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:a[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},dateTime:{control:"text"},direction:{control:"radio",options:["incoming","outgoing","declined","missed"]},type:{control:"radio",options:["voice","video"]},state:{control:"radio",options:["default","hover","pressed"]}}},k=({language:o,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function G({title:o,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),s]})}var W,V,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "default"
  }
}`,...(M=(V=l.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,R,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "hover"
  }
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,w,L;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "pressed"
  }
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var z,H,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,B,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var Y,X,q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(q=(X=g.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var K,N,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline",
    direction: "incoming",
    type: "voice",
    dateTime: "Yesterday, 9:00 pm"
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    direction: "incoming",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(re=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,ie,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,le,ce;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "declined",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,de,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    direction: "missed",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,ve,ue;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Action — Voice",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ue=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var Se,he,be;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "Action — Video",
  decorators: [single],
  args: {
    avatarUrl: female[7].imageUrl,
    title: "Mia Ward",
    direction: "outgoing",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(be=(he=U.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,ye,Ue;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Missed Video Call",
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "missed",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(Ue=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:Ue.source}}};var _e,fe,Te;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <CallItemSkeleton tone="start" />
}`,...(Te=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ae,je,Ie;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <CallItemSkeleton tone="end" />
}`,...(Ie=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Ce,ke,Ge;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
          <CallItem avatarUrl={male[5].imageUrl} title="George Alan" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" state="default" />
        </Wrap>
        <Wrap label="Hover">
          <CallItem avatarUrl={male[5].imageUrl} title="George Alan" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" state="hover" />
        </Wrap>
        <Wrap label="Pressed">
          <CallItem avatarUrl={male[5].imageUrl} title="George Alan" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" state="pressed" />
        </Wrap>
        <Wrap label="Incoming">
          <CallItem avatarUrl={female[10].imageUrl} title="Olivia Rhye" direction="incoming" type="voice" dateTime="11 September, 8:14 pm" />
        </Wrap>
        <Wrap label="Declined">
          <CallItem avatarUrl={female[5].imageUrl} title="Jessica Lane" direction="declined" type="voice" dateTime="11 September, 8:14 pm" />
        </Wrap>
        <Wrap label="Missed">
          <CallItem avatarUrl={female[1].imageUrl} title="Emma Rose" direction="missed" type="voice" dateTime="11 September, 8:14 pm" />
        </Wrap>
        <Wrap label="Video Action">
          <CallItem avatarUrl={female[7].imageUrl} title="Mia Ward" direction="outgoing" type="video" dateTime="11 September, 8:14 pm" />
        </Wrap>
        <Wrap label="Status — Online">
          <CallItem avatarUrl={male[5].imageUrl} title="George Alan" statusIcon="online" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <CallItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <CallItemSkeleton tone="end" />
        </Wrap>
      </div>
    </div>
}`,...(Ge=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var We,Ve,Me;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Call Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon">call_made</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
  </div>
</div>

<!-- Missed call (red icon) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="Emma Rose" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title" style="color: var(--cometchat-error-color)">Emma Rose</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon" style="color: var(--cometchat-error-color)">call_missed</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
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
  width: var(--cometchat-spacing-10);
  height: var(--cometchat-spacing-10);
  border-radius: var(--cometchat-radius-max);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.list-item__subtitle {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.list-item__trailing-icon {
  font-size: 20px;
  color: var(--cometchat-icon-color-tertiary);
}\`} />
      </UsageSection>
    </div>
}`,...(Me=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Oe,Re,Ee;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
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
    dateTime: {
      control: "text"
    },
    direction: {
      control: "radio",
      options: ["incoming", "outgoing", "declined", "missed"]
    },
    type: {
      control: "radio",
      options: ["voice", "video"]
    },
    state: {
      control: "radio",
      options: ["default", "hover", "pressed"]
    }
  }
}`,...(Ee=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};const Be=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Incoming","Outgoing","Declined","Missed","VoiceCall","VideoCall","MissedVideoCall","SkeletonStart","SkeletonEnd","AllStates","Usage","Playground"];export{A as AllStates,g as AvatarIcon,d as AvatarImage,p as AvatarText,b as Declined,l as Default,c as Hover,S as Incoming,x as Missed,_ as MissedVideoCall,h as Outgoing,I as Playground,m as Pressed,T as SkeletonEnd,f as SkeletonStart,u as StatusOffline,v as StatusOnline,j as Usage,U as VideoCall,y as VoiceCall,Be as __namedExportsOrder,Pe as default};
