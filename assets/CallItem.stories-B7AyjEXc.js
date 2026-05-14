import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as o,a as h}from"./GroupItem-BhNWYf5e.js";import{a as Ve}from"./avatars-9G6xvYo0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=Ve["Female Avatar"],t=Ve["Male Avatar"],Le={title:"Base Components/List Item/Call Item",component:o,parameters:{layout:"centered"}},a=j=>e.jsx("div",{style:{width:400,background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.jsx(j,{})}),i={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"}},s={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"}},l={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"}},c={name:"Avatar — Image",decorators:[a],args:{avatarVariant:"image",avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},m={name:"Avatar — Text",decorators:[a],args:{avatarVariant:"text",avatarText:"GA",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},d={name:"Avatar — Icon",decorators:[a],args:{avatarVariant:"icon",avatarIcon:"smart_toy",title:"Assistant",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},p={name:"Status — Online",decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},g={name:"Status — Offline",decorators:[a],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",statusIcon:"offline",direction:"incoming",type:"voice",dateTime:"Yesterday, 9:00 pm"}},v={decorators:[a],args:{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"}},u={decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},S={decorators:[a],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"}},U={decorators:[a],args:{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"}},y={name:"Action — Voice",decorators:[a],args:{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"}},b={name:"Action — Video",decorators:[a],args:{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"}},x={name:"Missed Video Call",decorators:[a],args:{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"missed",type:"video",dateTime:"11 September, 8:14 pm"}},f={name:"Skeleton — Start",decorators:[a],render:()=>e.jsx(h,{tone:"start"})},T={name:"Skeleton — End",decorators:[a],render:()=>e.jsx(h,{tone:"end"})},r=({label:j,children:ke})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-medium)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:j}),e.jsx("div",{style:{background:"var(--color-bg-01)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:ke})]}),A={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--space-8)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(r,{label:"Default",children:e.jsx(o,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"})}),e.jsx(r,{label:"Hover",children:e.jsx(o,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"hover"})}),e.jsx(r,{label:"Pressed",children:e.jsx(o,{avatarUrl:t[5].imageUrl,title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"pressed"})}),e.jsx(r,{label:"Incoming",children:e.jsx(o,{avatarUrl:n[10].imageUrl,title:"Olivia Rhye",direction:"incoming",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Declined",children:e.jsx(o,{avatarUrl:n[5].imageUrl,title:"Jessica Lane",direction:"declined",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Missed",children:e.jsx(o,{avatarUrl:n[1].imageUrl,title:"Emma Rose",direction:"missed",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Video Action",children:e.jsx(o,{avatarUrl:n[7].imageUrl,title:"Mia Ward",direction:"outgoing",type:"video",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Status — Online",children:e.jsx(o,{avatarUrl:t[5].imageUrl,title:"George Alan",statusIcon:"online",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm"})}),e.jsx(r,{label:"Skeleton — Start",children:e.jsx(h,{tone:"start"})}),e.jsx(r,{label:"Skeleton — End",children:e.jsx(h,{tone:"end"})})]})})},I={decorators:[a],parameters:{docs:{disable:!0}},args:{avatarVariant:"image",avatarUrl:t[5].imageUrl,avatarIcon:"smart_toy",avatarText:"GA",statusIcon:"none",title:"George Alan",direction:"outgoing",type:"voice",dateTime:"11 September, 8:14 pm",state:"default"},argTypes:{avatarVariant:{control:"radio",options:["image","text","icon"]},avatarUrl:{control:"text"},avatarText:{control:"text"},avatarIcon:{control:"text"},statusIcon:{control:"select",options:["none","online","offline"]},title:{control:"text"},dateTime:{control:"text"},direction:{control:"radio",options:["incoming","outgoing","declined","missed"]},type:{control:"radio",options:["voice","video"]},state:{control:"radio",options:["default","hover","pressed"]}}};var G,C,W;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "default"
  }
}`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var V,k,O;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "hover"
  }
}`,...(O=(k=s.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var R,M,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "pressed"
  }
}`,...(E=(M=l.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var D,L,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(L=c.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var J,P,_;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var H,z,Y;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(z=d.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var B,F,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var K,N,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Z,$;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    direction: "incoming",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(te=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "declined",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,se,le;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    direction: "missed",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(le=(se=U.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,me,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Action — Voice",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(de=(me=y.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,ve;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Action — Video",
  decorators: [single],
  args: {
    avatarUrl: female[7].imageUrl,
    title: "Mia Ward",
    direction: "outgoing",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(ve=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ue,Se,Ue;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Missed Video Call",
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "missed",
    type: "video",
    dateTime: "11 September, 8:14 pm"
  }
}`,...(Ue=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Ue.source}}};var ye,be,xe;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <CallItemSkeleton tone="start" />
}`,...(xe=(be=f.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var fe,Te,Ae;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Skeleton — End",
  decorators: [single],
  render: () => <CallItemSkeleton tone="end" />
}`,...(Ae=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ie,he,je;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(je=(he=A.parameters)==null?void 0:he.docs)==null?void 0:je.source}}};var Ge,Ce,We;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};const we=["Default","Hover","Pressed","AvatarImage","AvatarText","AvatarIcon","StatusOnline","StatusOffline","Incoming","Outgoing","Declined","Missed","VoiceCall","VideoCall","MissedVideoCall","SkeletonStart","SkeletonEnd","AllStates","Playground"];export{A as AllStates,d as AvatarIcon,c as AvatarImage,m as AvatarText,S as Declined,i as Default,s as Hover,v as Incoming,U as Missed,x as MissedVideoCall,u as Outgoing,I as Playground,l as Pressed,T as SkeletonEnd,f as SkeletonStart,g as StatusOffline,p as StatusOnline,b as VideoCall,y as VoiceCall,we as __namedExportsOrder,Le as default};
