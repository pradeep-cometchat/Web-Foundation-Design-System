import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function U(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z",fill:"currentColor"})})}function ee(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1.5C14.69 1.5 18.5 5.31 18.5 10C18.5 14.69 14.69 18.5 10 18.5C5.31 18.5 1.5 14.69 1.5 10C1.5 5.31 5.31 1.5 10 1.5ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM9.25 9V15H10.75V9H9.25Z",fill:"currentColor"})})}function te(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.5 8.5L5 12L11 4",stroke:"#56e8a7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L9 12L15 4",stroke:"#56e8a7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function se(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function re(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M12 19V23M8 23H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function ae(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"})]})}function ne(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M14 3V9C14 10.1 14.9 11 16 11H21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function ie(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 2L9 11M18 2L12.5 18L9 11M18 2L2 7.5L9 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function s({title:t="Thread",parentMessage:$,replies:u,dateLabel:g="Today",composerPlaceholder:x="Type your message...",onClose:J}){const p=u.length;return e.jsxs("div",{className:"thread-view",children:[e.jsxs("div",{className:"thread-view__header",children:[e.jsx("div",{className:"thread-view__header-text",children:e.jsx("div",{className:"thread-view__title",children:t})}),e.jsxs("div",{className:"thread-view__header-actions",children:[e.jsx("button",{type:"button",className:"thread-view__header-btn",onClick:J,"aria-label":"Close",children:e.jsx(U,{})}),e.jsx("button",{type:"button",className:"thread-view__header-btn","aria-label":"Info",children:e.jsx(ee,{})})]})]}),e.jsxs("div",{className:"thread-view__chat",children:[g&&e.jsx("div",{className:"thread-view__date-chip",children:e.jsx("span",{className:"thread-view__date-chip-text",children:g})}),e.jsx(v,{message:$}),p>0&&e.jsxs("div",{className:"thread-view__separator",children:[e.jsxs("span",{className:"thread-view__separator-text",children:[p," ",p===1?"reply":"replies"]}),e.jsx("div",{className:"thread-view__separator-line"})]}),u.map((K,Q)=>e.jsx(v,{message:K},Q))]}),e.jsx("div",{className:"thread-view__composer",children:e.jsxs("div",{className:"thread-view__composer-inner",children:[e.jsx("input",{className:"thread-view__composer-input",type:"text",placeholder:x,"aria-label":x}),e.jsx("div",{className:"thread-view__composer-divider"}),e.jsxs("div",{className:"thread-view__composer-toolbar",children:[e.jsxs("div",{className:"thread-view__composer-icons",children:[e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(se,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(re,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(ae,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(ne,{})}),e.jsx("span",{className:"thread-view__composer-icon",style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)"},children:"Aa"})]}),e.jsx("button",{type:"button",className:"thread-view__send-btn","aria-label":"Send",children:e.jsx(ie,{})})]})]})})]})}function v({message:t}){return e.jsx("div",{className:`thread-view__message ${t.isSent?"thread-view__message--sent":"thread-view__message--received"}`,children:e.jsxs("div",{className:`thread-view__bubble ${t.isSent?"thread-view__bubble--sent":"thread-view__bubble--received"}`,children:[e.jsx("p",{className:"thread-view__bubble-text",children:t.text}),e.jsxs("div",{className:"thread-view__bubble-meta",children:[e.jsx("span",{className:"thread-view__bubble-time",children:t.time}),t.isSent&&t.isRead&&e.jsx("span",{className:"thread-view__read-receipt",children:e.jsx(te,{})})]})]})})}try{s.displayName="ThreadView",s.__docgenInfo={description:"",displayName:"ThreadView",props:{title:{defaultValue:{value:"Thread"},description:'Title of the thread panel. Default: "Thread"',name:"title",required:!1,type:{name:"string | undefined"}},parentMessage:{defaultValue:null,description:"The parent message that started the thread",name:"parentMessage",required:!0,type:{name:"ThreadMessage"}},replies:{defaultValue:null,description:"Reply messages in the thread",name:"replies",required:!0,type:{name:"ThreadMessage[]"}},dateLabel:{defaultValue:{value:"Today"},description:'Date label for the date chip (e.g. "Today")',name:"dateLabel",required:!1,type:{name:"string | undefined"}},composerPlaceholder:{defaultValue:{value:"Type your message..."},description:'Placeholder text for the composer. Default: "Type your message..."',name:"composerPlaceholder",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"Callback when close is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const pe={title:"Base Components/Thread View",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A side panel displaying a threaded conversation with the parent message,
reply separator, reply bubbles, and a message composer.

**Structure (from Figma node 4090:846250):**
- Container: 420px wide, full height, white bg, border \`#f5f5f5\`
- Header: 64px, "Thread" (20px bold), close + info icons
- Chat area: date chip, parent bubble, "N replies" separator + line, reply bubbles
- Sent bubbles: bg \`#6852d6\`, white text, radius 12px
- Received bubbles: bg \`#e9eaeb\`, dark text, radius 12px
- Composer: input + toolbar with icons + send button`}}},argTypes:{title:{control:"text",description:"Panel title."},dateLabel:{control:"text",description:"Date chip label."},composerPlaceholder:{control:"text",description:"Composer placeholder text."},parentMessage:{control:"object",description:"The parent message."},replies:{control:"object",description:"Reply messages."},onClose:{control:!1}}},c={text:"Thanks! Looks good.",time:"4:56 pm",isSent:!0,isRead:!0},d={text:"Hey, check out this new design I've been working on!",time:"4:50 pm",isSent:!1},m=[{text:"Thanks",time:"4:56 pm",isSent:!1},{text:"Great, I'll check it out. Any other recommendations?",time:"4:56 pm",isSent:!0,isRead:!0},{text:"You're welcome! Let me know if you find any other good deals.",time:"4:56 pm",isSent:!1},{text:"Thanks! Will do",time:"4:56 pm",isSent:!0,isRead:!0}],oe=[{text:"Sounds good!",time:"5:01 pm",isSent:!0,isRead:!0}],X=[{text:"I love it! The colors are perfect.",time:"4:52 pm",isSent:!0,isRead:!0},{text:"Thanks! I spent a lot of time on the palette.",time:"4:53 pm",isSent:!1},{text:"Can you share the Figma link?",time:"4:54 pm",isSent:!0,isRead:!0},{text:"Sure, I'll send it over in a minute.",time:"4:55 pm",isSent:!1},{text:"Got it, thanks!",time:"4:56 pm",isSent:!0,isRead:!0},{text:"Let me know if you have any feedback.",time:"4:57 pm",isSent:!1}],r={args:{title:"Thread",parentMessage:c,replies:m,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},a={args:{title:"Thread",parentMessage:d,replies:X,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},n={args:{title:"Thread",parentMessage:c,replies:oe,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},i={args:{title:"Thread",parentMessage:d,replies:[],dateLabel:"Yesterday"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},o={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",padding:"var(--space-6)",overflowX:"auto",height:800},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:h,children:"Outgoing parent + 4 replies"}),e.jsx(s,{parentMessage:c,replies:m,dateLabel:"Today"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:h,children:"Incoming parent + many replies"}),e.jsx(s,{parentMessage:d,replies:X,dateLabel:"Today"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:h,children:"No replies"}),e.jsx(s,{parentMessage:d,replies:[],dateLabel:"Yesterday"})]})]})},l={args:{title:"Thread",parentMessage:c,replies:m,dateLabel:"Today"},parameters:{docs:{disable:!0}},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},h={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"};var y,w,f,j,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: defaultReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Default — outgoing parent message with 4 replies. Exact match to Figma.",...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var _,L,k,S,T;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: longReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"Incoming parent message — thread started by another user.",...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var C,M,N,R,I;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: shortReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Single reply thread.",...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var V,P,W,D,B;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: [],
    dateLabel: "Yesterday"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(W=(P=i.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"No replies yet — just the parent message.",...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var H,q,Z,Y,z;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    padding: "var(--space-6)",
    overflowX: "auto",
    height: 800
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Outgoing parent + 4 replies</div>
        <ThreadView parentMessage={outgoingParent} replies={defaultReplies} dateLabel="Today" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>Incoming parent + many replies</div>
        <ThreadView parentMessage={incomingParent} replies={longReplies} dateLabel="Today" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <div style={stateLabelStyle}>No replies</div>
        <ThreadView parentMessage={incomingParent} replies={[]} dateLabel="Yesterday" />
      </div>
    </div>
}`,...(Z=(q=o.parameters)==null?void 0:q.docs)==null?void 0:Z.source},description:{story:"All variants side by side.",...(z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:z.description}}};var A,E,F,O,G;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: defaultReplies,
    dateLabel: "Today"
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Interactive playground — use the controls panel to configure.",...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.description}}};const he=["Default","IncomingParent","SingleReply","NoReplies","States","Playground"];export{r as Default,a as IncomingParent,i as NoReplies,l as Playground,n as SingleReply,o as States,he as __namedExportsOrder,pe as default};
