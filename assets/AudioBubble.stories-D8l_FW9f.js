import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Be={title:"Core Components/Chat Bubbles/Audio Bubble",tags:["autodocs"],parameters:{layout:"centered"}},p={name:"Sent — Default",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"sent",status:"sent",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},b={name:"Sent — Delivered",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"sent",status:"delivered",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},m={name:"Sent — Read",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},h={name:"Sent — Playing",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})})},g={name:"Sent — Paused",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})})},v={name:"Received — Default",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"})})},x={name:"Received — Playing",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})})},y={name:"Received — Paused",render:()=>e.jsx(s,{children:e.jsx(t,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})})},S={name:"All Sent States",render:()=>e.jsxs(s,{width:420,children:[e.jsx(o,{children:e.jsx(i,{children:"Sent — Default (Sent)"})}),e.jsx(t,{variant:"sent",status:"sent",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(o,{children:e.jsx(i,{children:"Sent — Delivered"})}),e.jsx(t,{variant:"sent",status:"delivered",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(o,{children:e.jsx(i,{children:"Sent — Read"})}),e.jsx(t,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(o,{children:e.jsx(i,{children:"Sent — Playing"})}),e.jsx(t,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(o,{children:e.jsx(i,{children:"Sent — Paused"})}),e.jsx(t,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})]})},f={name:"All Received States",render:()=>e.jsxs(s,{width:420,children:[e.jsx(o,{children:e.jsx(i,{children:"Received — Default"})}),e.jsx(t,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(o,{children:e.jsx(i,{children:"Received — Playing"})}),e.jsx(t,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(o,{children:e.jsx(i,{children:"Received — Paused"})}),e.jsx(t,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",progress:.44})]})},j={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",width:500,padding:"var(--cometchat-spacing-4)"},children:[e.jsx(t,{variant:"sent",status:"read",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(t,{variant:"received",currentTime:"00:00",duration:"00:32",time:"4:56 pm"}),e.jsx(t,{variant:"sent",status:"read",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44}),e.jsx(t,{variant:"received",currentTime:"00:14",duration:"00:32",time:"4:56 pm",playing:!0,progress:.44})]})},w={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx(W,{language:"HTML",code:`<!-- Sent Audio Bubble -->
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
</div>`})}),e.jsx(c,{title:"CSS (CometChat Tokens)",children:e.jsx(W,{language:"CSS",code:`.chat-bubble-audio {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2);
  min-width: 200px;
}

.chat-bubble-audio-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-bubble-wrapper--received .chat-bubble-audio-btn {
  background: var(--cometchat-background-color-solid);
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
  background: var(--cometchat-icon-color-tertiary);
}

.chat-bubble-wrapper--sent .chat-bubble-audio-bar {
  background: rgba(255, 255, 255, 0.6);
}

.chat-bubble-audio-time {
  font-size: 10px;
  color: var(--cometchat-text-color-tertiary);
  white-space: nowrap;
}

.chat-bubble-wrapper--sent .chat-bubble-audio-time {
  color: rgba(255, 255, 255, 0.7);
}`})}),e.jsx(c,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent — Default",description:"Purple background, white play button, white waveform bars. Shows single check for sent status."}),e.jsx(a,{title:"Sent — Delivered",description:"Same as default with double check (✓✓) in white/muted color indicating delivery."}),e.jsx(a,{title:"Sent — Read",description:"Double check (✓✓) in green/highlight color indicating the message was read."}),e.jsx(a,{title:"Sent — Playing",description:"Play button becomes pause icon. Waveform shows progress with highlighted portion."}),e.jsx(a,{title:"Received — Default",description:"Light gray background, purple play button, purple waveform bars. No receipt indicator."}),e.jsx(a,{title:"Received — Playing",description:"Play button becomes pause icon. Waveform shows progress with highlighted portion."})]})}),e.jsx(c,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Play/Pause Button",description:"Circular button (48×48) with play_arrow or pause icon. White bg with purple icon on both variants."}),e.jsx(a,{title:"Waveform",description:"Series of vertical bars with varying heights representing audio amplitude. Animates on playback."}),e.jsx(a,{title:"Duration Label",description:"Shows current time / total duration (e.g. 00:00/00:32). Updates during playback."}),e.jsx(a,{title:"Timestamp",description:"Message time displayed below the audio content (e.g. 4:56 pm)."}),e.jsx(a,{title:"Receipt Status",description:"Sent bubbles show delivery status: ✓ sent, ✓✓ delivered, ✓✓ (green) read."})]})}),e.jsx(c,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Sent Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Received Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Sent Waveform",description:"rgba(255, 255, 255, 0.6) — Semi-transparent white"}),e.jsx(a,{title:"Received Waveform",description:"var(--cometchat-icon-color-highlight) — Purple"}),e.jsx(a,{title:"Play Button (Sent)",description:"var(--cometchat-background-color-solid) white background, purple icon"}),e.jsx(a,{title:"Play Button (Received)",description:"var(--cometchat-background-color-solid) white background, purple icon"}),e.jsx(a,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(c,{title:"Figma Reference",children:e.jsx(a,{title:"Source File",description:"Web Desktop — Chat UI Kits → Audio section (node 4072:76974)"})})]})};function t({variant:r,status:n,currentTime:d,duration:he,time:ge,playing:ve,progress:xe=0}){const u=r==="sent",T=je();return e.jsx("div",{className:`chat-bubble-wrapper chat-bubble-wrapper--${r}`,children:e.jsxs("div",{className:"chat-bubble-body",style:{padding:"var(--cometchat-spacing-3)",minWidth:240},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)"},children:[e.jsx("button",{style:{width:48,height:48,borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-static-white)",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:e.jsx(Se,{playing:ve,color:"var(--cometchat-icon-color-highlight)"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,flex:1,minWidth:0},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:2.5,height:28,overflow:"hidden"},children:T.map((ye,k)=>{const R=k/T.length<=xe;return e.jsx("span",{style:{width:3,minWidth:2,height:`${ye}px`,borderRadius:1.5,background:u?R?"var(--cometchat-static-white)":"rgba(255, 255, 255, 0.5)":R?"var(--cometchat-icon-color-highlight)":"rgba(108, 92, 231, 0.4)",flexShrink:0}},k)})}),e.jsxs("span",{style:{fontSize:"12px",fontFamily:"var(--cometchat-font-family)",color:u?"rgba(255, 255, 255, 0.8)":"var(--cometchat-text-color-secondary)",lineHeight:1},children:[e.jsx(i,{children:d}),"/",e.jsx(i,{children:he})]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--cometchat-spacing-1)",marginTop:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{className:"chat-bubble-meta-time",children:e.jsx(i,{children:ge})}),u&&n&&e.jsx(fe,{status:n})]})]})})}function Se({playing:r,color:n}){return r?e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:n,children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:n,children:e.jsx("path",{d:"M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"})})}function fe({status:r}){const d=r==="read"?"var(--cometchat-message-seen-color)":"rgba(255, 255, 255, 0.7)";return r==="sent"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8.5L6.5 11.5L12.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 8.5L5 11.5L11 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.5 8.5L8.5 11.5L14.5 4.5",stroke:d,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function je(){return[2,3,4,6,8,5,10,14,20,24,18,22,16,20,14,18,22,16,12,20,24,18,14,20,24,16,10,4,2,2,3,2,2,3,4,2,6,10,14,10,8,6,10,14,10,8]}function s({children:r,width:n=360}){return e.jsx("div",{style:{width:n,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:r})}function o({children:r}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:r})}function c({title:r,children:n}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(i,{children:r})}),n]})}function W({language:r,code:n}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:r})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:n})})]})}function a({title:r,description:n}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(i,{children:r})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(i,{children:n})})]})}const l={parameters:{docs:{disable:!0}}};var P,B,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Sent — Default",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var A,L,D;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Sent — Delivered",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(D=(L=b.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var U,I,M;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Sent — Read",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var z,_,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Sent — Playing",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
}`,...(H=(_=h.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var F,V,N;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Sent — Paused",
  render: () => <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,K,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Received — Default",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
}`,...($=(K=v.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var O,X,Z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Received — Playing",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var q,G,J;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Received — Paused",
  render: () => <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "All Sent States",
  render: () => <Wrapper width={420}>
      <Label><T>Sent — Default (Sent)</T></Label>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label><T>Sent — Delivered</T></Label>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label><T>Sent — Read</T></Label>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label><T>Sent — Playing</T></Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label><T>Sent — Paused</T></Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(ee=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ae,re;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "All Received States",
  render: () => <Wrapper width={420}>
      <Label><T>Received — Default</T></Label>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label><T>Received — Playing</T></Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label><T>Received — Paused</T></Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,ie,se;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-4)",
    width: 500,
    padding: "var(--cometchat-spacing-4)"
  }}>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </div>
}`,...(se=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,ce,de;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
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

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.chat-bubble-audio {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2);
  min-width: 200px;
}

.chat-bubble-audio-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-bubble-wrapper--received .chat-bubble-audio-btn {
  background: var(--cometchat-background-color-solid);
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
  background: var(--cometchat-icon-color-tertiary);
}

.chat-bubble-wrapper--sent .chat-bubble-audio-bar {
  background: rgba(255, 255, 255, 0.6);
}

.chat-bubble-audio-time {
  font-size: 10px;
  color: var(--cometchat-text-color-tertiary);
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
        gap: "var(--cometchat-spacing-3)"
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
        gap: "var(--cometchat-spacing-3)"
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
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Sent Waveform" description="rgba(255, 255, 255, 0.6) — Semi-transparent white" />
          <StateCard title="Received Waveform" description="var(--cometchat-icon-color-highlight) — Purple" />
          <StateCard title="Play Button (Sent)" description="var(--cometchat-background-color-solid) white background, purple icon" />
          <StateCard title="Play Button (Received)" description="var(--cometchat-background-color-solid) white background, purple icon" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Audio section (node 4072:76974)" />
      </UsageSection>
    </div>
}`,...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,ue,pe,be,me;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(pe=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Interactive playground.",...(me=(be=l.parameters)==null?void 0:be.docs)==null?void 0:me.description}}};const Ce=["SentDefault","SentDelivered","SentRead","SentPlaying","SentPaused","ReceivedDefault","ReceivedPlaying","ReceivedPaused","AllSentStates","AllReceivedStates","AllVariants","Usage","Playground"];export{f as AllReceivedStates,S as AllSentStates,j as AllVariants,l as Playground,v as ReceivedDefault,y as ReceivedPaused,x as ReceivedPlaying,p as SentDefault,b as SentDelivered,g as SentPaused,h as SentPlaying,m as SentRead,w as Usage,Ce as __namedExportsOrder,Be as default};
