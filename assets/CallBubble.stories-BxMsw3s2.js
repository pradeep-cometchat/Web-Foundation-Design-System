import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const he={title:"Core Components/Chat Bubbles/Call Bubble",tags:["autodocs"],parameters:{layout:"centered"}},d={name:"Audio — Ended (outgoing)",parameters:{docs:{description:{story:"Outgoing audio call that was answered and ended."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},b={name:"Audio — Cancelled (outgoing)",parameters:{docs:{description:{story:"Outgoing audio call that was cancelled by the caller."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},p={name:"Audio — Missed (incoming)",parameters:{docs:{description:{story:"Incoming audio call that was missed."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 05:23 PM"})})},u={name:"Audio — Rejected (incoming)",parameters:{docs:{description:{story:"Incoming audio call that was rejected."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM"})})},g={name:"Video — Ended (outgoing)",parameters:{docs:{description:{story:"Outgoing video call that was answered and ended."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"})})},m={name:"Video — Cancelled (outgoing)",parameters:{docs:{description:{story:"Outgoing video call that was cancelled by the caller."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"})})},v={name:"Video — Missed (incoming)",parameters:{docs:{description:{story:"Incoming video call that was missed."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 05:23 PM"})})},h={name:"Video — Rejected (incoming)",parameters:{docs:{description:{story:"Incoming video call that was rejected."}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 03:29 PM"})})},y={name:"With Call Back Button",parameters:{docs:{description:{story:'Call bubble with an optional "Call Back" action button.'}}},render:()=>e.jsx(o,{children:e.jsx(i,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM",showCallBack:!0})})},x={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs(o,{width:500,children:[e.jsx(n,{children:"Audio — Ended (outgoing)"}),e.jsx(i,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(n,{children:"Video — Ended (outgoing)"}),e.jsx(i,{type:"video",variant:"outgoing",label:"Video call",timestamp:"19 May, 05:23 PM"}),e.jsx(n,{children:"Audio — Missed (incoming)"}),e.jsx(i,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(n,{children:"Video — Missed (incoming)"}),e.jsx(i,{type:"video",variant:"incoming",label:"Video call",timestamp:"19 May, 05:23 PM"}),e.jsx(n,{children:"Audio — Cancelled (outgoing)"}),e.jsx(i,{type:"audio",variant:"outgoing",label:"Voice call",timestamp:"19 May, 05:23 PM"}),e.jsx(n,{children:"With Call Back Button"}),e.jsx(i,{type:"audio",variant:"incoming",label:"Voice call",timestamp:"19 May, 03:29 PM",showCallBack:!0})]})},f={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx(C,{language:"HTML",code:`<!-- Outgoing Call Bubble (purple) -->
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
</div>`})}),e.jsx(c,{title:"CSS (Foundation Variables)",children:e.jsx(C,{language:"CSS",code:`.call-bubble {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-xl);
  min-width: 220px;
}

.call-bubble--outgoing {
  background: var(--color-send-bubble-bg);
}

.call-bubble--incoming {
  background: var(--color-received-bubble-bg);
}

.call-bubble__icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--color-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-bubble--outgoing .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble--incoming .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-body);
}

.call-bubble--outgoing .call-bubble__label {
  color: var(--color-static-white);
}

.call-bubble--incoming .call-bubble__label {
  color: var(--color-text-primary);
}

.call-bubble__timestamp {
  font-size: var(--font-size-1);
  line-height: var(--line-height-caption-1);
}

.call-bubble--outgoing .call-bubble__timestamp {
  color: rgba(255, 255, 255, 0.7);
}

.call-bubble--incoming .call-bubble__timestamp {
  color: var(--color-text-tertiary);
}

.call-bubble__callback-btn {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  background: none;
  border: none;
  border-top: 1px solid var(--color-border-default);
  padding: var(--space-2) var(--space-4);
  width: 100%;
  text-align: center;
  cursor: pointer;
}`})}),e.jsx(c,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Audio — Ended (outgoing)",description:"Purple background. Phone icon in white circle. White text. Shown when an outgoing voice call ends normally."}),e.jsx(a,{title:"Audio — Cancelled (outgoing)",description:"Purple background. Same as ended — caller hung up before answer."}),e.jsx(a,{title:"Audio — Missed (incoming)",description:"Gray background. Phone icon in white circle. Dark text. Shown when an incoming call was not answered."}),e.jsx(a,{title:"Audio — Rejected (incoming)",description:"Gray background. Same as missed — user actively declined the call."}),e.jsx(a,{title:"Video — Ended (outgoing)",description:"Purple background. Video camera icon in white circle. White text."}),e.jsx(a,{title:"Video — Cancelled (outgoing)",description:"Purple background. Same as ended for video calls."}),e.jsx(a,{title:"Video — Missed (incoming)",description:"Gray background. Video camera icon in white circle. Dark text."}),e.jsx(a,{title:"Video — Rejected (incoming)",description:"Gray background. Same as missed for video calls."}),e.jsx(a,{title:"With Call Back Button",description:"Gray bubble with a 'Call Back' action button below the call info. Separated by a border-top divider."})]})}),e.jsx(c,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Icon Circle",description:"36×36 white circle containing the call type icon (phone or video camera) in purple."}),e.jsx(a,{title:"Label",description:"'Voice call' or 'Video call' — semibold, primary text color (white on outgoing, dark on incoming)."}),e.jsx(a,{title:"Timestamp",description:"Date and time (e.g. '19 May, 05:23 PM') — smaller, muted color."}),e.jsx(a,{title:"Call Back Button (optional)",description:"Full-width text button below the bubble content, separated by a top border."})]})}),e.jsx(c,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(a,{title:"Outgoing Background",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(a,{title:"Incoming Background",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(a,{title:"Icon Circle",description:"var(--color-static-white) background, 36×36, full radius"}),e.jsx(a,{title:"Icon Color",description:"var(--color-icon-highlight-primary) — Purple on both variants"}),e.jsx(a,{title:"Border Radius",description:"var(--radius-xl) — 12px uniform on all corners"}),e.jsx(a,{title:"Padding",description:"var(--space-3) vertical, var(--space-4) horizontal"})]})})]})};function i({type:l,variant:t,label:re,timestamp:ne,showCallBack:ce}){const r=t==="outgoing";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",borderRadius:"var(--radius-xl)",overflow:"hidden",background:r?"var(--color-send-bubble-bg)":"var(--color-received-bubble-bg)",minWidth:220,alignSelf:r?"flex-end":"flex-start"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3) var(--space-4)"},children:[e.jsxs("div",{style:{width:36,height:36,borderRadius:"var(--radius-full)",background:"var(--color-static-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:[l==="audio"&&r&&e.jsx(se,{}),l==="audio"&&!r&&e.jsx(de,{}),l==="video"&&r&&e.jsx(be,{}),l==="video"&&!r&&e.jsx(pe,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-body)",color:r?"var(--color-static-white)":"var(--color-text-primary)"},children:re}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-caption-1)",color:r?"rgba(255, 255, 255, 0.7)":"var(--color-text-tertiary)"},children:ne})]})]}),ce&&e.jsxs("div",{children:[e.jsx("div",{style:{height:1,background:"rgba(0, 0, 0, 0.12)",marginTop:"var(--space-2)"}}),e.jsx("div",{style:{padding:"var(--space-3) var(--space-4)",textAlign:"center"},children:e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",fontFamily:"var(--font-family-body)",color:"var(--color-text-primary)",cursor:"pointer"},children:"Call Back"})})]})]})}function se(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--color-icon-highlight-primary)","--icon-fill":1},children:"phone_callback"})}function de(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--color-icon-highlight-primary)","--icon-fill":1},children:"phone_missed"})}function be(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--color-icon-highlight-primary)","--icon-fill":1,"--icon-wght":300},children:"missed_video_call"})}function pe(){return e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--color-icon-highlight-primary)","--icon-fill":1,"--icon-wght":300},children:"missed_video_call"})}function o({children:l,width:t=400}){return e.jsx("div",{style:{width:t,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:l})}function n({children:l}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:l})}function c({title:l,children:t}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:l}),t]})}function C({language:l,code:t}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:l})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:t})})]})}function a({title:l,description:t}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:l}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:t})]})}const s={parameters:{docs:{disable:!0}}};var j,w,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var M,S,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var k,B,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,A,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var I,L,R;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(L=g.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var E,T,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var U,D,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(D=v.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var F,H,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,q,J;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(q=y.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    layout: "padded"
  },
  render: () => <Wrapper width={500}>
      <Label>Audio — Ended (outgoing)</Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>Video — Ended (outgoing)</Label>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label>Audio — Missed (incoming)</Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>Video — Missed (incoming)</Label>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label>Audio — Cancelled (outgoing)</Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>With Call Back Button</Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" showCallBack />
    </Wrapper>
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard language="CSS" code={\`.call-bubble {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-xl);
  min-width: 220px;
}

.call-bubble--outgoing {
  background: var(--color-send-bubble-bg);
}

.call-bubble--incoming {
  background: var(--color-received-bubble-bg);
}

.call-bubble__icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--color-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-bubble--outgoing .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble--incoming .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-body);
}

.call-bubble--outgoing .call-bubble__label {
  color: var(--color-static-white);
}

.call-bubble--incoming .call-bubble__label {
  color: var(--color-text-primary);
}

.call-bubble__timestamp {
  font-size: var(--font-size-1);
  line-height: var(--line-height-caption-1);
}

.call-bubble--outgoing .call-bubble__timestamp {
  color: rgba(255, 255, 255, 0.7);
}

.call-bubble--incoming .call-bubble__timestamp {
  color: var(--color-text-tertiary);
}

.call-bubble__callback-btn {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  background: none;
  border: none;
  border-top: 1px solid var(--color-border-default);
  padding: var(--space-2) var(--space-4);
  width: 100%;
  text-align: center;
  cursor: pointer;
}\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
      }}>
          <StateCard title="Outgoing Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Incoming Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Icon Circle" description="var(--color-static-white) background, 36×36, full radius" />
          <StateCard title="Icon Color" description="var(--color-icon-highlight-primary) — Purple on both variants" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
          <StateCard title="Padding" description="var(--space-3) vertical, var(--space-4) horizontal" />
        </div>
      </UsageSection>
    </div>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ie,le,oe,te;s.parameters={...s.parameters,docs:{...(ae=s.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(le=(ie=s.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"Interactive playground.",...(te=(oe=s.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};const ye=["AudioCallEnded","AudioCallCancelled","AudioCallMissed","AudioCallRejected","VideoCallEnded","VideoCallCancelled","VideoCallMissed","VideoCallRejected","WithCallBackButton","AllStates","Usage","Playground"];export{x as AllStates,b as AudioCallCancelled,d as AudioCallEnded,p as AudioCallMissed,u as AudioCallRejected,s as Playground,f as Usage,m as VideoCallCancelled,g as VideoCallEnded,v as VideoCallMissed,h as VideoCallRejected,y as WithCallBackButton,ye as __namedExportsOrder,he as default};
