import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const We={title:"Core Components/Chat Bubbles/Audio Bubble",tags:["autodocs"],parameters:{layout:"centered"}},u={name:"Sent — Default",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"sent",status:"sent",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},p={name:"Sent — Delivered",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"sent",status:"delivered",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},b={name:"Sent — Read",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},m={name:"Sent — Playing",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})})},v={name:"Sent — Paused",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})})},h={name:"Received — Default",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},g={name:"Received — Playing",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})})},x={name:"Received — Paused",render:()=>e.jsx(i,{children:e.jsx(a,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})})},y={name:"All Sent States",render:()=>e.jsxs(i,{width:420,children:[e.jsx(s,{children:"Sent — Default (Sent)"}),e.jsx(a,{variant:"sent",status:"sent",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(s,{children:"Sent — Delivered"}),e.jsx(a,{variant:"sent",status:"delivered",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(s,{children:"Sent — Read"}),e.jsx(a,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(s,{children:"Sent — Playing"}),e.jsx(a,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(s,{children:"Sent — Paused"}),e.jsx(a,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})]})},f={name:"All Received States",render:()=>e.jsxs(i,{width:420,children:[e.jsx(s,{children:"Received — Default"}),e.jsx(a,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(s,{children:"Received — Playing"}),e.jsx(a,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(s,{children:"Received — Paused"}),e.jsx(a,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})]})},S={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",width:500,padding:"var(--space-4)"},children:[e.jsx(a,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(a,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(a,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(a,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})]})},w={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(o,{title:"HTML Structure",children:e.jsx(R,{language:"HTML",code:`<!-- Sent Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars (dynamic heights) -->
          <span class="chat-bubble-audio-bar" style="height: 4px"></span>
          <span class="chat-bubble-audio-bar" style="height: 10px"></span>
          <span class="chat-bubble-audio-bar" style="height: 18px"></span>
          <!-- ... more bars ... -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`})}),e.jsx(o,{title:"CSS (Foundation Variables)",children:e.jsx(R,{language:"CSS",code:`.chat-bubble-audio {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  min-width: 200px;
}

.chat-bubble-audio-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: var(--color-bg-solid);
  color: var(--color-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-bubble-wrapper--received .chat-bubble-audio-btn {
  background: var(--color-bg-solid);
}

.chat-bubble-audio-wave {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.chat-bubble-audio-bar {
  width: 3px;
  border-radius: 1px;
  background: var(--color-icon-tertiary);
}

.chat-bubble-wrapper--sent .chat-bubble-audio-bar {
  background: rgba(255, 255, 255, 0.6);
}

.chat-bubble-audio-time {
  font-size: var(--font-size-0);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}

.chat-bubble-wrapper--sent .chat-bubble-audio-time {
  color: rgba(255, 255, 255, 0.7);
}`})}),e.jsx(o,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(r,{title:"Sent — Default",description:"Purple background, white play button, white waveform bars. Shows single check for sent status."}),e.jsx(r,{title:"Sent — Delivered",description:"Same as default with double check (✓✓) in white/muted color indicating delivery."}),e.jsx(r,{title:"Sent — Read",description:"Double check (✓✓) in green/highlight color indicating the message was read."}),e.jsx(r,{title:"Sent — Playing",description:"Play button becomes pause icon. Waveform shows progress with highlighted portion."}),e.jsx(r,{title:"Received — Default",description:"Light gray background, purple play button, purple waveform bars. No receipt indicator."}),e.jsx(r,{title:"Received — Playing",description:"Play button becomes pause icon. Waveform shows progress with highlighted portion."})]})}),e.jsx(o,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(r,{title:"Play/Pause Button",description:"Circular button (48×48) with play_arrow or pause icon. White bg with purple icon on both variants."}),e.jsx(r,{title:"Waveform",description:"Series of vertical bars with varying heights representing audio amplitude. Animates on playback."}),e.jsx(r,{title:"Duration Label",description:"Shows current time / total duration (e.g. 00:00/00:32). Updates during playback."}),e.jsx(r,{title:"Timestamp",description:"Message time displayed below the audio content (e.g. 4:56 pm)."}),e.jsx(r,{title:"Receipt Status",description:"Sent bubbles show delivery status: ✓ sent, ✓✓ delivered, ✓✓ (green) read."})]})}),e.jsx(o,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(r,{title:"Sent Background",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(r,{title:"Received Background",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(r,{title:"Sent Waveform",description:"rgba(255, 255, 255, 0.6) — Semi-transparent white"}),e.jsx(r,{title:"Received Waveform",description:"var(--color-icon-highlight-primary) — Purple"}),e.jsx(r,{title:"Play Button (Sent)",description:"var(--color-bg-solid) white background, purple icon"}),e.jsx(r,{title:"Play Button (Received)",description:"var(--color-bg-solid) white background, purple icon"}),e.jsx(r,{title:"Border Radius",description:"var(--radius-xl) — 12px uniform on all corners"})]})}),e.jsx(o,{title:"Figma Reference",children:e.jsx(r,{title:"Source File",description:"Web Desktop — Chat UI Kits → Audio section (node 4072:76974)"})})]})};function a({variant:t,status:n,currentTime:d,duration:me,time:ve,playing:he,progress:ge=0}){const c=t==="sent",j=Se();return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${t}`,children:e.jsxs("div",{className:"chat-bubble-body",style:{padding:"var(--space-3)",minWidth:240},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)"},children:[e.jsx("button",{style:{width:48,height:48,borderRadius:"var(--radius-full)",background:"var(--color-static-white)",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:e.jsx(ye,{playing:he,color:"var(--color-icon-highlight-primary)"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,flex:1,minWidth:0},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:2.5,height:28,overflow:"hidden"},children:j.map((xe,T)=>{const k=T/j.length<=ge;return e.jsx("span",{style:{width:3,minWidth:2,height:`${xe}px`,borderRadius:1.5,background:c?k?"var(--color-static-white)":"rgba(255, 255, 255, 0.5)":k?"var(--color-icon-highlight-primary)":"rgba(108, 92, 231, 0.4)",flexShrink:0}},T)})}),e.jsxs("span",{style:{fontSize:"var(--font-size-1)",fontFamily:"var(--font-family-body)",color:c?"rgba(255, 255, 255, 0.8)":"var(--color-text-secondary)",lineHeight:1},children:[d,"/",me]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--space-1)",marginTop:"var(--space-2)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:ve}),c&&n&&e.jsx(fe,{status:n})]})]})})}function ye({playing:t,color:n}){return t?e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:n,children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:n,children:e.jsx("path",{d:"M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"})})}function fe({status:t}){const d=t==="read"?"var(--color-message-seen)":"rgba(255, 255, 255, 0.7)";return t==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Se(){return[2,3,4,6,8,5,10,14,20,24,18,22,16,20,14,18,22,16,12,20,24,18,14,20,24,16,10,4,2,2,3,2,2,3,4,2,6,10,14,10,8,6,10,14,10,8]}function i({children:t,width:n=360}){return e.jsx("div",{style:{width:n,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:t})}function s({children:t}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t})}function o({title:t,children:n}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:t}),n]})}function R({language:t,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:t})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}function r({title:t,description:n}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:t}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:n})]})}const l={parameters:{docs:{disable:!0}}};var W,P,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Sent — Default",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(B=(P=u.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var C,A,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var D,U,z;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Sent — Read",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var I,M,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Sent — Playing",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,_,H;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Sent — Paused",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(H=(_=v.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var N,E,K;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Received — Default",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(K=(E=h.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var $,O,X;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Received — Playing",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
}`,...(X=(O=g.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var Z,q,G;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Received — Paused",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "All Sent States",
  render: () => <Wrapper width={420}>
      <Label>Sent — Default (Sent)</Label>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Read</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Playing</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label>Sent — Paused</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "All Received States",
  render: () => <Wrapper width={420}>
      <Label>Received — Default</Label>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Received — Playing</Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label>Received — Paused</Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    width: 500,
    padding: "var(--space-4)"
  }}>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </div>
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,oe,de;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Sent Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars (dynamic heights) -->
          <span class="chat-bubble-audio-bar" style="height: 4px"></span>
          <span class="chat-bubble-audio-bar" style="height: 10px"></span>
          <span class="chat-bubble-audio-bar" style="height: 18px"></span>
          <!-- ... more bars ... -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.chat-bubble-audio {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  min-width: 200px;
}

.chat-bubble-audio-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: var(--color-bg-solid);
  color: var(--color-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-bubble-wrapper--received .chat-bubble-audio-btn {
  background: var(--color-bg-solid);
}

.chat-bubble-audio-wave {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.chat-bubble-audio-bar {
  width: 3px;
  border-radius: 1px;
  background: var(--color-icon-tertiary);
}

.chat-bubble-wrapper--sent .chat-bubble-audio-bar {
  background: rgba(255, 255, 255, 0.6);
}

.chat-bubble-audio-time {
  font-size: var(--font-size-0);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}

.chat-bubble-wrapper--sent .chat-bubble-audio-time {
  color: rgba(255, 255, 255, 0.7);
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent — Default" description="Purple background, white play button, white waveform bars. Shows single check for sent status." />
          <StateCard title="Sent — Delivered" description="Same as default with double check (✓✓) in white/muted color indicating delivery." />
          <StateCard title="Sent — Read" description="Double check (✓✓) in green/highlight color indicating the message was read." />
          <StateCard title="Sent — Playing" description="Play button becomes pause icon. Waveform shows progress with highlighted portion." />
          <StateCard title="Received — Default" description="Light gray background, purple play button, purple waveform bars. No receipt indicator." />
          <StateCard title="Received — Playing" description="Play button becomes pause icon. Waveform shows progress with highlighted portion." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Play/Pause Button" description="Circular button (48×48) with play_arrow or pause icon. White bg with purple icon on both variants." />
          <StateCard title="Waveform" description="Series of vertical bars with varying heights representing audio amplitude. Animates on playback." />
          <StateCard title="Duration Label" description="Shows current time / total duration (e.g. 00:00/00:32). Updates during playback." />
          <StateCard title="Timestamp" description="Message time displayed below the audio content (e.g. 4:56 pm)." />
          <StateCard title="Receipt Status" description="Sent bubbles show delivery status: ✓ sent, ✓✓ delivered, ✓✓ (green) read." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Sent Waveform" description="rgba(255, 255, 255, 0.6) — Semi-transparent white" />
          <StateCard title="Received Waveform" description="var(--color-icon-highlight-primary) — Purple" />
          <StateCard title="Play Button (Sent)" description="var(--color-bg-solid) white background, purple icon" />
          <StateCard title="Play Button (Received)" description="var(--color-bg-solid) white background, purple icon" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Audio section (node 4072:76974)" />
      </UsageSection>
    </div>
}`,...(de=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var le,ce,ue,pe,be;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(ue=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"Interactive playground.",...(be=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:be.description}}};const Pe=["SentDefault","SentDelivered","SentRead","SentPlaying","SentPaused","ReceivedDefault","ReceivedPlaying","ReceivedPaused","AllSentStates","AllReceivedStates","AllVariants","Usage","Playground"];export{f as AllReceivedStates,y as AllSentStates,S as AllVariants,l as Playground,h as ReceivedDefault,x as ReceivedPaused,g as ReceivedPlaying,u as SentDefault,p as SentDelivered,v as SentPaused,m as SentPlaying,b as SentRead,w as Usage,Pe as __namedExportsOrder,We as default};
