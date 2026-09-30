import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as o}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ye={title:"Core Components/Chat Bubbles/Call Bubble",tags:["autodocs"],parameters:{layout:"centered"}},p={name:"Audio — Ended (outgoing)",parameters:{docs:{description:{story:"Outgoing audio call that was answered and ended."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},b={name:"Audio — Cancelled (outgoing)",parameters:{docs:{description:{story:"Outgoing audio call that was cancelled by the caller."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},m={name:"Audio — Missed (incoming)",parameters:{docs:{description:{story:"Incoming audio call that was missed."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},u={name:"Audio — Rejected (incoming)",parameters:{docs:{description:{story:"Incoming audio call that was rejected."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM"})})},g={name:"Video — Ended (outgoing)",parameters:{docs:{description:{story:"Outgoing video call that was answered and ended."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"})})},h={name:"Video — Cancelled (outgoing)",parameters:{docs:{description:{story:"Outgoing video call that was cancelled by the caller."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"})})},v={name:"Video — Missed (incoming)",parameters:{docs:{description:{story:"Incoming video call that was missed."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 05:23 PM"})})},x={name:"Video — Rejected (incoming)",parameters:{docs:{description:{story:"Incoming video call that was rejected."}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 03:29 PM"})})},y={name:"With Call Back Button",parameters:{docs:{description:{story:'Call bubble with an optional "Call Back" action button.'}}},render:()=>e.jsx(l,{children:e.jsx(t,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM",showCallBack:!0})})},C={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs(l,{width:500,children:[e.jsx(r,{children:e.jsx(o,{children:"Audio — Ended (outgoing)"})}),e.jsx(t,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(r,{children:e.jsx(o,{children:"Video — Ended (outgoing)"})}),e.jsx(t,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"}),e.jsx(r,{children:e.jsx(o,{children:"Audio — Missed (incoming)"})}),e.jsx(t,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(r,{children:e.jsx(o,{children:"Video — Missed (incoming)"})}),e.jsx(t,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 05:23 PM"}),e.jsx(r,{children:e.jsx(o,{children:"Audio — Cancelled (outgoing)"})}),e.jsx(t,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(r,{children:e.jsx(o,{children:"With Call Back Button"})}),e.jsx(t,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM",showCallBack:!0})]})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(s,{title:"HTML Structure",children:e.jsx(f,{language:"HTML",code:`<!-- Outgoing Call Bubble (purple) -->
<div class="call-bubble call-bubble--outgoing">
  <div class="call-bubble__icon-wrapper">
    <!-- Voice call icon -->
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- Incoming/Missed Call Bubble (gray) -->
<div class="call-bubble call-bubble--incoming">
  <div class="call-bubble__icon-wrapper">
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- With Call Back Button -->
<div class="call-bubble call-bubble--incoming call-bubble--with-action">
  <div class="call-bubble__main">
    <div class="call-bubble__icon-wrapper">
      <svg>...</svg>
    </div>
    <div class="call-bubble__content">
      <span class="call-bubble__label">Voice call</span>
      <span class="call-bubble__timestamp">19 May, 03:29 PM</span>
    </div>
  </div>
  <div class="call-bubble__action">
    <button class="call-bubble__callback-btn">Call Back</button>
  </div>
</div>`})}),e.jsx(s,{title:"CSS (CometChat Tokens)",children:e.jsx(f,{language:"CSS",code:`.call-bubble {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border-radius: var(--cometchat-radius-3);
  min-width: 220px;
}

.call-bubble--outgoing {
  background: var(--cometchat-primary-color);
}

.call-bubble--incoming {
  background: var(--cometchat-neutral-color-300);
}

.call-bubble__icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-bubble--outgoing .call-bubble__icon-wrapper svg {
  color: var(--cometchat-icon-color-highlight);
}

.call-bubble--incoming .call-bubble__icon-wrapper svg {
  color: var(--cometchat-icon-color-highlight);
}

.call-bubble__label {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
}

.call-bubble--outgoing .call-bubble__label {
  color: var(--cometchat-static-white);
}

.call-bubble--incoming .call-bubble__label {
  color: var(--cometchat-text-color-primary);
}

.call-bubble__timestamp {
  font-size: 12px;
  line-height: 14.4px;
}

.call-bubble--outgoing .call-bubble__timestamp {
  color: rgba(255, 255, 255, 0.7);
}

.call-bubble--incoming .call-bubble__timestamp {
  color: var(--cometchat-text-color-tertiary);
}

.call-bubble__callback-btn {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  background: none;
  border: none;
  border-top: 1px solid var(--cometchat-border-color-default);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  width: 100%;
  text-align: center;
  cursor: pointer;
}`})}),e.jsx(s,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Audio — Ended (outgoing)",description:"Purple background. Phone icon in white circle. White text. Shown when an outgoing voice call ends normally."}),e.jsx(a,{title:"Audio — Cancelled (outgoing)",description:"Purple background. Same as ended — caller hung up before answer."}),e.jsx(a,{title:"Audio — Missed (incoming)",description:"Gray background. Phone icon in white circle. Dark text. Shown when an incoming call was not answered."}),e.jsx(a,{title:"Audio — Rejected (incoming)",description:"Gray background. Same as missed — user actively declined the call."}),e.jsx(a,{title:"Video — Ended (outgoing)",description:"Purple background. Video camera icon in white circle. White text."}),e.jsx(a,{title:"Video — Cancelled (outgoing)",description:"Purple background. Same as ended for video calls."}),e.jsx(a,{title:"Video — Missed (incoming)",description:"Gray background. Video camera icon in white circle. Dark text."}),e.jsx(a,{title:"Video — Rejected (incoming)",description:"Gray background. Same as missed for video calls."}),e.jsx(a,{title:"With Call Back Button",description:"Gray bubble with a 'Call Back' action button below the call info. Separated by a border-top divider."})]})}),e.jsx(s,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Icon Circle",description:"36×36 white circle containing the call type icon (phone or video camera) in purple."}),e.jsx(a,{title:"Label",description:"'Voice call' or 'Video call' — semibold, primary text color (white on outgoing, dark on incoming)."}),e.jsx(a,{title:"Timestamp",description:"Date and time (e.g. '19 May, 05:23 PM') — smaller, muted color."}),e.jsx(a,{title:"Call Back Button (optional)",description:"Full-width text button below the bubble content, separated by a top border."})]})}),e.jsx(s,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(a,{title:"Outgoing Background",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(a,{title:"Incoming Background",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(a,{title:"Icon Circle",description:"var(--cometchat-static-white) background, 36×36, full radius"}),e.jsx(a,{title:"Icon Color",description:"var(--cometchat-icon-color-highlight) — Purple on both variants"}),e.jsx(a,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"}),e.jsx(a,{title:"Padding",description:"var(--cometchat-spacing-3) vertical, var(--cometchat-spacing-4) horizontal"})]})})]})};function t({type:i,variant:c,label:ne,timestamp:re,showCallBack:se}){const n=c==="outgoing";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:n?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)",minWidth:220,alignSelf:n?"flex-end":"flex-start"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{width:36,height:36,borderRadius:"var(--cometchat-radius-max)",background:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:[i==="audio"&&n&&e.jsx(de,{}),i==="audio"&&!n&&e.jsx(pe,{}),i==="video"&&n&&e.jsx(be,{}),i==="video"&&!n&&e.jsx(me,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:n?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)"},children:e.jsx(o,{children:ne})}),e.jsx("span",{style:{fontSize:"12px",fontFamily:"var(--cometchat-font-family)",lineHeight:"18px",color:n?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)"},children:e.jsx(o,{children:re})})]})]}),se&&e.jsxs("div",{children:[e.jsx("div",{style:{height:1,background:"rgba(0, 0, 0, 0.12)",marginTop:"var(--cometchat-spacing-2)"}}),e.jsx("div",{style:{padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-4)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",color:"var(--cometchat-text-color-primary)",cursor:"pointer"},children:e.jsx(o,{children:"Call Back"})})})]})]})}function de(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":1},children:"phone_callback"})}function pe(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":1},children:"phone_missed"})}function be(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":1,"--icon-wght":300},children:"missed_video_call"})}function me(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":1,"--icon-wght":300},children:"missed_video_call"})}function l({children:i,width:c=400}){return e.jsx("div",{style:{width:c,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:i})}function r({children:i}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:i})}function s({title:i,children:c}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(o,{children:i})}),c]})}function f({language:i,code:c}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:c})})]})}function a({title:i,description:c}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(o,{children:i})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(o,{children:c})})]})}const d={parameters:{docs:{disable:!0}}};var _,w,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Audio — Ended (outgoing)",
  parameters: {
    docs: {
      description: {
        story: "Outgoing audio call that was answered and ended."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var k,S,V;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Audio — Cancelled (outgoing)",
  parameters: {
    docs: {
      description: {
        story: "Outgoing audio call that was cancelled by the caller."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var B,P,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Audio — Missed (incoming)",
  parameters: {
    docs: {
      description: {
        story: "Incoming audio call that was missed."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var A,T,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Audio — Rejected (incoming)",
  parameters: {
    docs: {
      description: {
        story: "Incoming audio call that was rejected."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" />
    </Wrapper>
}`,...(I=(T=u.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,L,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Video — Ended (outgoing)",
  parameters: {
    docs: {
      description: {
        story: "Outgoing video call that was answered and ended."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(R=(L=g.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var E,O,U;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Video — Cancelled (outgoing)",
  parameters: {
    docs: {
      description: {
        story: "Outgoing video call that was cancelled by the caller."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var D,G,H;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Video — Missed (incoming)",
  parameters: {
    docs: {
      description: {
        story: "Incoming video call that was missed."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var F,N,X;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Video — Rejected (incoming)",
  parameters: {
    docs: {
      description: {
        story: "Incoming video call that was rejected."
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 03:29 PM" />
    </Wrapper>
}`,...(X=(N=x.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var q,J,K;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "With Call Back Button",
  parameters: {
    docs: {
      description: {
        story: 'Call bubble with an optional "Call Back" action button.'
      }
    }
  },
  render: () => <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" showCallBack />
    </Wrapper>
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    layout: "padded"
  },
  render: () => <Wrapper width={500}>
      <Label><T>Audio — Ended (outgoing)</T></Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label><T>Video — Ended (outgoing)</T></Label>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label><T>Audio — Missed (incoming)</T></Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label><T>Video — Missed (incoming)</T></Label>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label><T>Audio — Cancelled (outgoing)</T></Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label><T>With Call Back Button</T></Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" showCallBack />
    </Wrapper>
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <CodeCard language="HTML" code={\`<!-- Outgoing Call Bubble (purple) -->
<div class="call-bubble call-bubble--outgoing">
  <div class="call-bubble__icon-wrapper">
    <!-- Voice call icon -->
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- Incoming/Missed Call Bubble (gray) -->
<div class="call-bubble call-bubble--incoming">
  <div class="call-bubble__icon-wrapper">
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- With Call Back Button -->
<div class="call-bubble call-bubble--incoming call-bubble--with-action">
  <div class="call-bubble__main">
    <div class="call-bubble__icon-wrapper">
      <svg>...</svg>
    </div>
    <div class="call-bubble__content">
      <span class="call-bubble__label">Voice call</span>
      <span class="call-bubble__timestamp">19 May, 03:29 PM</span>
    </div>
  </div>
  <div class="call-bubble__action">
    <button class="call-bubble__callback-btn">Call Back</button>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={\`.call-bubble {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border-radius: var(--cometchat-radius-3);
  min-width: 220px;
}

.call-bubble--outgoing {
  background: var(--cometchat-primary-color);
}

.call-bubble--incoming {
  background: var(--cometchat-neutral-color-300);
}

.call-bubble__icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-bubble--outgoing .call-bubble__icon-wrapper svg {
  color: var(--cometchat-icon-color-highlight);
}

.call-bubble--incoming .call-bubble__icon-wrapper svg {
  color: var(--cometchat-icon-color-highlight);
}

.call-bubble__label {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
}

.call-bubble--outgoing .call-bubble__label {
  color: var(--cometchat-static-white);
}

.call-bubble--incoming .call-bubble__label {
  color: var(--cometchat-text-color-primary);
}

.call-bubble__timestamp {
  font-size: 12px;
  line-height: 14.4px;
}

.call-bubble--outgoing .call-bubble__timestamp {
  color: rgba(255, 255, 255, 0.7);
}

.call-bubble--incoming .call-bubble__timestamp {
  color: var(--cometchat-text-color-tertiary);
}

.call-bubble__callback-btn {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  background: none;
  border: none;
  border-top: 1px solid var(--cometchat-border-color-default);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  width: 100%;
  text-align: center;
  cursor: pointer;
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Audio — Ended (outgoing)" description="Purple background. Phone icon in white circle. White text. Shown when an outgoing voice call ends normally." />
          <StateCard title="Audio — Cancelled (outgoing)" description="Purple background. Same as ended — caller hung up before answer." />
          <StateCard title="Audio — Missed (incoming)" description="Gray background. Phone icon in white circle. Dark text. Shown when an incoming call was not answered." />
          <StateCard title="Audio — Rejected (incoming)" description="Gray background. Same as missed — user actively declined the call." />
          <StateCard title="Video — Ended (outgoing)" description="Purple background. Video camera icon in white circle. White text." />
          <StateCard title="Video — Cancelled (outgoing)" description="Purple background. Same as ended for video calls." />
          <StateCard title="Video — Missed (incoming)" description="Gray background. Video camera icon in white circle. Dark text." />
          <StateCard title="Video — Rejected (incoming)" description="Gray background. Same as missed for video calls." />
          <StateCard title="With Call Back Button" description="Gray bubble with a 'Call Back' action button below the call info. Separated by a border-top divider." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Icon Circle" description="36×36 white circle containing the call type icon (phone or video camera) in purple." />
          <StateCard title="Label" description="'Voice call' or 'Video call' — semibold, primary text color (white on outgoing, dark on incoming)." />
          <StateCard title="Timestamp" description="Date and time (e.g. '19 May, 05:23 PM') — smaller, muted color." />
          <StateCard title="Call Back Button (optional)" description="Full-width text button below the bubble content, separated by a top border." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Outgoing Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Incoming Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Icon Circle" description="var(--cometchat-static-white) background, 36×36, full radius" />
          <StateCard title="Icon Color" description="var(--cometchat-icon-color-highlight) — Purple on both variants" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
          <StateCard title="Padding" description="var(--cometchat-spacing-3) vertical, var(--cometchat-spacing-4) horizontal" />
        </div>
      </UsageSection>
    </div>
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ie,oe,le,ce;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(oe=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:"Interactive playground.",...(ce=(le=d.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};const Ce=["AudioCallEnded","AudioCallCancelled","AudioCallMissed","AudioCallRejected","VideoCallEnded","VideoCallCancelled","VideoCallMissed","VideoCallRejected","WithCallBackButton","AllStates","Usage","Playground"];export{C as AllStates,b as AudioCallCancelled,p as AudioCallEnded,m as AudioCallMissed,u as AudioCallRejected,d as Playground,j as Usage,h as VideoCallCancelled,g as VideoCallEnded,v as VideoCallMissed,x as VideoCallRejected,y as WithCallBackButton,Ce as __namedExportsOrder,ye as default};
