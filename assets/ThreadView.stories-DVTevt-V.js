import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function oe(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z",fill:"currentColor"})})}function de(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1.5C14.69 1.5 18.5 5.31 18.5 10C18.5 14.69 14.69 18.5 10 18.5C5.31 18.5 1.5 14.69 1.5 10C1.5 5.31 5.31 1.5 10 1.5ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM9.25 9V15H10.75V9H9.25Z",fill:"currentColor"})})}function le(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.5 8.5L5 12L11 4",stroke:"#56e8a7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L9 12L15 4",stroke:"#56e8a7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ce(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function pe(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M12 19V23M8 23H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function he(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"})]})}function ve(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M14 3V9C14 10.1 14.9 11 16 11H21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function ue(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 2L9 11M18 2L12.5 18L9 11M18 2L2 7.5L9 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function a({title:t="Thread",parentMessage:r,replies:m,dateLabel:b="Today",composerPlaceholder:_="Type your message...",onClose:se}){const v=m.length;return e.jsxs("div",{className:"thread-view",children:[e.jsxs("div",{className:"thread-view__header",children:[e.jsx("div",{className:"thread-view__header-text",children:e.jsx("div",{className:"thread-view__title",children:t})}),e.jsxs("div",{className:"thread-view__header-actions",children:[e.jsx("button",{type:"button",className:"thread-view__header-btn",onClick:se,"aria-label":"Close",children:e.jsx(oe,{})}),e.jsx("button",{type:"button",className:"thread-view__header-btn","aria-label":"Info",children:e.jsx(de,{})})]})]}),e.jsxs("div",{className:"thread-view__chat",children:[b&&e.jsx("div",{className:"thread-view__date-chip",children:e.jsx("span",{className:"thread-view__date-chip-text",children:b})}),e.jsx(x,{message:r}),v>0&&e.jsxs("div",{className:"thread-view__separator",children:[e.jsxs("span",{className:"thread-view__separator-text",children:[v," ",v===1?"reply":"replies"]}),e.jsx("div",{className:"thread-view__separator-line"})]}),m.map((ie,ne)=>e.jsx(x,{message:ie},ne))]}),e.jsx("div",{className:"thread-view__composer",children:e.jsxs("div",{className:"thread-view__composer-inner",children:[e.jsx("input",{className:"thread-view__composer-input",type:"text",placeholder:_,"aria-label":_}),e.jsx("div",{className:"thread-view__composer-divider"}),e.jsxs("div",{className:"thread-view__composer-toolbar",children:[e.jsxs("div",{className:"thread-view__composer-icons",children:[e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(ce,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(pe,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(he,{})}),e.jsx("span",{className:"thread-view__composer-icon",children:e.jsx(ve,{})}),e.jsx("span",{className:"thread-view__composer-icon",style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-medium)"},children:"Aa"})]}),e.jsx("button",{type:"button",className:"thread-view__send-btn","aria-label":"Send",children:e.jsx(ue,{})})]})]})})]})}function x({message:t}){return e.jsx("div",{className:`thread-view__message ${t.isSent?"thread-view__message--sent":"thread-view__message--received"}`,children:e.jsxs("div",{className:`thread-view__bubble ${t.isSent?"thread-view__bubble--sent":"thread-view__bubble--received"}`,children:[e.jsx("p",{className:"thread-view__bubble-text",children:t.text}),e.jsxs("div",{className:"thread-view__bubble-meta",children:[e.jsx("span",{className:"thread-view__bubble-time",children:t.time}),t.isSent&&t.isRead&&e.jsx("span",{className:"thread-view__read-receipt",children:e.jsx(le,{})})]})]})})}try{a.displayName="ThreadView",a.__docgenInfo={description:"",displayName:"ThreadView",props:{title:{defaultValue:{value:"Thread"},description:'Title of the thread panel. Default: "Thread"',name:"title",required:!1,type:{name:"string | undefined"}},parentMessage:{defaultValue:null,description:"The parent message that started the thread",name:"parentMessage",required:!0,type:{name:"ThreadMessage"}},replies:{defaultValue:null,description:"Reply messages in the thread",name:"replies",required:!0,type:{name:"ThreadMessage[]"}},dateLabel:{defaultValue:{value:"Today"},description:'Date label for the date chip (e.g. "Today")',name:"dateLabel",required:!1,type:{name:"string | undefined"}},composerPlaceholder:{defaultValue:{value:"Type your message..."},description:'Placeholder text for the composer. Default: "Type your message..."',name:"composerPlaceholder",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"Callback when close is clicked",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const xe={title:"Base Components/Thread View",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A side panel displaying a threaded conversation with the parent message,
reply separator, reply bubbles, and a message composer.

**Structure (from Figma node 4090:846250):**
- Container: 420px wide, full height, white bg, border \`#f5f5f5\`
- Header: 64px, "Thread" (20px bold), close + info icons
- Chat area: date chip, parent bubble, "N replies" separator + line, reply bubbles
- Sent bubbles: bg \`#6852d6\`, white text, radius 12px
- Received bubbles: bg \`#e9eaeb\`, dark text, radius 12px
- Composer: input + toolbar with icons + send button`}}},argTypes:{title:{control:"text",description:"Panel title."},dateLabel:{control:"text",description:"Date chip label."},composerPlaceholder:{control:"text",description:"Composer placeholder text."},parentMessage:{control:"object",description:"The parent message."},replies:{control:"object",description:"Reply messages."},onClose:{control:!1}}},h={text:"Thanks! Looks good.",time:"4:56 pm",isSent:!0,isRead:!0},p={text:"Hey, check out this new design I've been working on!",time:"4:50 pm",isSent:!1},g=[{text:"Thanks",time:"4:56 pm",isSent:!1},{text:"Great, I'll check it out. Any other recommendations?",time:"4:56 pm",isSent:!0,isRead:!0},{text:"You're welcome! Let me know if you find any other good deals.",time:"4:56 pm",isSent:!1},{text:"Thanks! Will do",time:"4:56 pm",isSent:!0,isRead:!0}],ge=[{text:"Sounds good!",time:"5:01 pm",isSent:!0,isRead:!0}],re=[{text:"I love it! The colors are perfect.",time:"4:52 pm",isSent:!0,isRead:!0},{text:"Thanks! I spent a lot of time on the palette.",time:"4:53 pm",isSent:!1},{text:"Can you share the Figma link?",time:"4:54 pm",isSent:!0,isRead:!0},{text:"Sure, I'll send it over in a minute.",time:"4:55 pm",isSent:!1},{text:"Got it, thanks!",time:"4:56 pm",isSent:!0,isRead:!0},{text:"Let me know if you have any feedback.",time:"4:57 pm",isSent:!1}],s={args:{title:"Thread",parentMessage:h,replies:g,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},i={args:{title:"Thread",parentMessage:p,replies:re,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},n={args:{title:"Thread",parentMessage:h,replies:ge,dateLabel:"Today"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},o={args:{title:"Thread",parentMessage:p,replies:[],dateLabel:"Yesterday"},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},d={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",padding:"var(--space-6)",overflowX:"auto",height:800},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:u,children:"Outgoing parent + 4 replies"}),e.jsx(a,{parentMessage:h,replies:g,dateLabel:"Today"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:u,children:"Incoming parent + many replies"}),e.jsx(a,{parentMessage:p,replies:re,dateLabel:"Today"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("div",{style:u,children:"No replies"}),e.jsx(a,{parentMessage:p,replies:[],dateLabel:"Yesterday"})]})]})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(y,{title:"HTML",children:e.jsx(w,{language:"HTML",code:`<!-- Thread View -->
<div class="thread-view">
  <div class="thread-view__header">
    <div class="thread-view__header-text">
      <h2 class="thread-view__title">Thread</h2>
    </div>
    <div class="thread-view__header-actions">
      <button class="thread-view__header-btn" type="button"><!-- info icon --></button>
      <button class="thread-view__header-btn" type="button"><!-- close icon --></button>
    </div>
  </div>
  <div class="thread-view__chat">
    <div class="thread-view__date-chip">
      <span class="thread-view__date-chip-text">Today</span>
    </div>
    <!-- Sent bubble -->
    <div class="thread-view__message thread-view__message--sent">
      <div class="thread-view__bubble thread-view__bubble--sent">
        <p class="thread-view__bubble-text">Thanks! Looks good.</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__read-receipt"><!-- tick SVG --></span>
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
    <!-- Reply separator -->
    <div class="thread-view__separator">
      <span class="thread-view__separator-text">2 replies</span>
      <div class="thread-view__separator-line"></div>
    </div>
    <!-- Received bubble -->
    <div class="thread-view__message thread-view__message--received">
      <div class="thread-view__bubble thread-view__bubble--received">
        <p class="thread-view__bubble-text">Thanks</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
  <div class="thread-view__composer">...</div>
</div>`})}),e.jsx(y,{title:"CSS (Foundation Variables)",children:e.jsx(w,{language:"CSS",code:`.thread-view {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
}

.thread-view__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 64px;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
}

.thread-view__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.thread-view__bubble {
  max-width: 75%;
  border-radius: var(--radius-xl);
  padding: var(--space-3) var(--space-3) var(--space-1);
}

.thread-view__bubble--sent {
  background: var(--color-ep-500);
}

.thread-view__bubble--received {
  background: var(--color-bg-04);
}

.thread-view__bubble--sent .thread-view__bubble-text {
  color: var(--color-static-white);
}

.thread-view__separator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-5);
}

.thread-view__separator-text {
  font-size: var(--font-size-2);
  color: var(--color-text-secondary);
}

.thread-view__separator-line {
  flex: 1;
  height: 1px;
  background: var(--color-bg-04);
}`})})]})},c={args:{title:"Thread",parentMessage:h,replies:g,dateLabel:"Today"},parameters:{docs:{disable:!0}},decorators:[t=>e.jsx("div",{style:{height:800},children:e.jsx(t,{})})]},u={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)"},w=({language:t,code:r})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]});function y({title:t,children:r}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:t}),r]})}var f,j,S,k,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: defaultReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Default — outgoing parent message with 4 replies. Exact match to Figma.",...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var L,C,M,N,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: longReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source},description:{story:"Incoming parent message — thread started by another user.",...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var V,I,P,W,z;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: shortReplies,
    dateLabel: "Today"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Single reply thread.",...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};var D,H,B,U,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: [],
    dateLabel: "Yesterday"
  },
  decorators: [Story => <div style={{
    height: 800
  }}><Story /></div>]
}`,...(B=(H=o.parameters)==null?void 0:H.docs)==null?void 0:B.source},description:{story:"No replies yet — just the parent message.",...(q=(U=o.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var F,Z,Y,A,G;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:Y.source},description:{story:"All variants side by side.",...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.description}}};var E,O,X,$,J;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Thread View -->
<div class="thread-view">
  <div class="thread-view__header">
    <div class="thread-view__header-text">
      <h2 class="thread-view__title">Thread</h2>
    </div>
    <div class="thread-view__header-actions">
      <button class="thread-view__header-btn" type="button"><!-- info icon --></button>
      <button class="thread-view__header-btn" type="button"><!-- close icon --></button>
    </div>
  </div>
  <div class="thread-view__chat">
    <div class="thread-view__date-chip">
      <span class="thread-view__date-chip-text">Today</span>
    </div>
    <!-- Sent bubble -->
    <div class="thread-view__message thread-view__message--sent">
      <div class="thread-view__bubble thread-view__bubble--sent">
        <p class="thread-view__bubble-text">Thanks! Looks good.</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__read-receipt"><!-- tick SVG --></span>
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
    <!-- Reply separator -->
    <div class="thread-view__separator">
      <span class="thread-view__separator-text">2 replies</span>
      <div class="thread-view__separator-line"></div>
    </div>
    <!-- Received bubble -->
    <div class="thread-view__message thread-view__message--received">
      <div class="thread-view__bubble thread-view__bubble--received">
        <p class="thread-view__bubble-text">Thanks</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
  <div class="thread-view__composer">...</div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.thread-view {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
}

.thread-view__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 64px;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
}

.thread-view__title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.thread-view__bubble {
  max-width: 75%;
  border-radius: var(--radius-xl);
  padding: var(--space-3) var(--space-3) var(--space-1);
}

.thread-view__bubble--sent {
  background: var(--color-ep-500);
}

.thread-view__bubble--received {
  background: var(--color-bg-04);
}

.thread-view__bubble--sent .thread-view__bubble-text {
  color: var(--color-static-white);
}

.thread-view__separator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-5);
}

.thread-view__separator-text {
  font-size: var(--font-size-2);
  color: var(--color-text-secondary);
}

.thread-view__separator-line {
  flex: 1;
  height: 1px;
  background: var(--color-bg-04);
}\`} />
      </UsageSection>
    </div>
}`,...(X=(O=l.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"HTML & CSS usage reference for the Thread View component.",...(J=($=l.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var K,Q,ee,te,ae;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:ee.source},description:{story:"Interactive playground — use the controls panel to configure.",...(ae=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const we=["Default","IncomingParent","SingleReply","NoReplies","States","Usage","Playground"];export{s as Default,i as IncomingParent,o as NoReplies,c as Playground,n as SingleReply,d as States,l as Usage,we as __namedExportsOrder,xe as default};
