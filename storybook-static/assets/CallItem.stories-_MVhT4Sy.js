import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as i,a as C}from"./GroupItem-bExsbeWu.js";import{a as Re}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=Re["Female Avatar"],t=Re["Male Avatar"],Pe={title:"Base Components/List Item/Call Item",component:i,parameters:{layout:"centered"}},a=o=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:e.jsx(o,{})}),l={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"}},c={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"}},d={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"}},m={name:"Avatar — Image",decorators:[a],args:{avatarVariant:"image",avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},p={name:"Avatar — Text",decorators:[a],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},g={name:"Avatar — Icon",decorators:[a],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},v={name:"Status — Online",decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},u={name:"Status — Offline",decorators:[a],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline",direction:"incoming",type:"voice",dateTime:"Yesterday, 9:00 pm"}},b={decorators:[a],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"}},S={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},y={decorators:[a],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"}},f={decorators:[a],args:{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"}},x={name:"Action — Voice",decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},U={name:"Action — Video",decorators:[a],args:{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"}},_={name:"Missed Video Call",decorators:[a],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"missed",type:"video",dateTime:"11 September, 8:14 pm"}},T={name:"Skeleton — Start",decorators:[a],render:()=>e.jsx(C,{tone:"start"})},h={name:"Skeleton — End",decorators:[a],render:()=>e.jsx(C,{tone:"end"})},r=({label:o,children:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:o}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",overflow:"hidden"},children:s})]}),A={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(r,{label:"Default",children:e.jsx(i,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"})}),e.jsx(r,{label:"Hover",children:e.jsx(i,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"})}),e.jsx(r,{label:"Pressed",children:e.jsx(i,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"})}),e.jsx(r,{label:"Incoming",children:e.jsx(i,{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Declined",children:e.jsx(i,{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Missed",children:e.jsx(i,{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Video Action",children:e.jsx(i,{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Status — Online",children:e.jsx(i,{avatarUrl:t[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Skeleton — Start",children:e.jsx(C,{tone:"start"})}),e.jsx(r,{label:"Skeleton — End",children:e.jsx(C,{tone:"end"})})]})})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(W,{title:"HTML",children:e.jsx(G,{language:"HTML",code:`<!-- Call Item -->
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
    <span class="list-item__title" style="color: var(--color-error)">Emma Rose</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon" style="color: var(--color-error)">call_missed</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
  </div>
</div>`})}),e.jsx(W,{title:"CSS (Foundation Variables)",children:e.jsx(G,{language:"CSS",code:`.list-item {
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
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.list-item__trailing-icon {
  font-size: var(--font-size-5);
  color: var(--color-icon-tertiary);
}`})})]})},I={decorators:[a],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:t[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},dateTime:{control:"text"},direction:{control:"radio",options:["incoming","outgoing","declined","missed"]},type:{control:"radio",options:["voice","video"]},state:{control:"radio",options:["default","hover","pressed"]}}},G=({language:o,code:s})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:s})})]});function W({title:o,children:s}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:o}),s]})}var k,V,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "default"
  }
}`,...(z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var M,O,w;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "hover"
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var R,E,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "pressed"
  }
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var L,H,J;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,F,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var Y,X,q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    direction: "incoming",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(re=(te=b.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ie,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,le,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "declined",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    direction: "missed",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ve,ue;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Action — Voice",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ue=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var be,Se,ye;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "Action — Video",
  decorators: [single],
  args: {
    avatarUrl: female[7].imageUrl,
    title: "Mia Ward",
    direction: "outgoing",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ye=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var fe,xe,Ue;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Missed Video Call",
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "missed",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(Ue=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:Ue.source}}};var _e,Te,he;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <CallItemSkeleton tone="start" />
}`,...(he=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Ae,je,Ie;h.parameters={...h.parameters,docs:{...(Ae=h.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <CallItemSkeleton tone="end" />
}`,...(Ie=(je=h.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Ce,Ge,We;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(We=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var ke,Ve,ze;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    <span class="list-item__title" style="color: var(--color-error)">Emma Rose</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon" style="color: var(--color-error)">call_missed</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
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
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.list-item__trailing-icon {
  font-size: var(--font-size-5);
  color: var(--color-icon-tertiary);
}\`} />
      </UsageSection>
    </div>
}`,...(ze=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Me,Oe,we;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(we=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:we.source}}};const Fe=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Incoming","Outgoing","Declined","Missed","VoiceCall","VideoCall","MissedVideoCall","SkeletonStart","SkeletonEnd","AllStates","Usage","Playground"];export{A as AllStates,g as AvatarIcon,m as AvatarImage,p as AvatarText,y as Declined,l as Default,c as Hover,b as Incoming,f as Missed,_ as MissedVideoCall,S as Outgoing,I as Playground,d as Pressed,h as SkeletonEnd,T as SkeletonStart,u as StatusOffline,v as StatusOnline,j as Usage,U as VideoCall,x as VoiceCall,Fe as __namedExportsOrder,Pe as default};
