import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as J}from"./MultiLineComposer-Xef-Tz0h.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $={title:"Base Components/Media Recorder/Multi Line Composer",component:J,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light-gray",values:[{name:"light-gray",value:"#F4F4F5"},{name:"white",value:"#ffffff"}]},docs:{description:{component:"The **Voice Note Popup** lets users record, pause, stop, and preview a voice message.\n\n### States\n| State | Circle | Rings | Center button |\n|---|---|---|---|\n| `idle` | Lavender (`ep-200`) | None | Mic |\n| `recording` | Purple (`ep-600`) | Pulsing outer + inner | Pause |\n| `paused` | Purple (`ep-600`) | Inner only (static) | Mic |\n| `preview` | — | — | Play + waveform |"}}},argTypes:{recordingState:{control:"select",options:["idle","recording","paused","preview"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string shown in the popup (e.g. `00:00:10`)."},onRecord:{action:"record"},onPause:{action:"pause"},onStop:{action:"stop"},onDelete:{action:"delete"},onPlay:{action:"play"}}},l=[o=>e.jsx("div",{style:{width:320},children:e.jsx(o,{})})],r={decorators:l,args:{recordingState:"idle",duration:"00:00:00"}},a={decorators:l,args:{recordingState:"recording",duration:"00:00:10"}},t={decorators:l,args:{recordingState:"paused",duration:"00:00:10"}},n={decorators:l,args:{recordingState:"preview",duration:"0:32"}},s={parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--cometchat-spacing-4)",alignItems:"stretch"},children:["idle","recording","paused","preview"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.08em",color:"#717680",paddingLeft:4},children:o}),e.jsx("div",{style:{flex:1,display:"flex"},children:e.jsx(J,{recordingState:o,duration:o==="preview"?"0:32":"00:00:10"})})]},o))})})},c={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(d,{language:"HTML",code:`<!-- Voice Note Popup — Idle state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer">
      <div class="ml-composer__wave-inner">
        <div class="ml-composer__wave-center">
          <svg class="ml-composer__wave-mic"><!-- mic icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:00</span>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--destructive"><!-- stop --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- pause --></button>
  </div>
</div>

<!-- Recording state (active rings) -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer ml-composer__wave-outer--visible ml-composer__wave-outer--pulse">
      <div class="ml-composer__wave-inner ml-composer__wave-inner--visible">
        <div class="ml-composer__wave-center ml-composer__wave-center--active">
          <svg class="ml-composer__wave-mic"><!-- pause icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:10</span>
  <div class="ml-composer__actions">...</div>
</div>

<!-- Preview state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__preview">
    <button class="ml-composer__play-btn"><!-- play icon --></button>
    <div class="ml-composer__waveform">
      <div class="ml-composer__waveform-bars">
        <div class="ml-composer__waveform-bar" style="height: 8px"></div>
        <div class="ml-composer__waveform-bar" style="height: 16px"></div>
        <!-- more bars -->
      </div>
      <span class="ml-composer__preview-duration">0:32</span>
    </div>
  </div>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--send"><!-- send --></button>
  </div>
</div>`})}),e.jsx(m,{title:"CSS (CometChat Tokens)",children:e.jsx(d,{language:"CSS",code:`.ml-composer__popup {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-4);
  max-width: 300px;
}

.ml-composer__popup-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.ml-composer__wave-center {
  width: 92px;
  height: 92px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-200);
}

.ml-composer__wave-center--active {
  background: var(--cometchat-primary-color);
}

.ml-composer__wave-outer--visible {
  background: var(--cometchat-extended-primary-color-50);
}

.ml-composer__wave-inner--visible {
  background: var(--cometchat-extended-primary-color-100);
}

.ml-composer__duration {
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
}

.ml-composer__play-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}

.ml-composer__action-btn--destructive {
  width: 52px;
  height: 52px;
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border-radius: var(--cometchat-radius-3);
}

.ml-composer__action-btn--send {
  width: 48px;
  height: 48px;
  background: var(--cometchat-primary-color);
  border-radius: var(--cometchat-radius-max);
  color: var(--cometchat-static-white);
}`})})]})},i={decorators:l,args:{recordingState:"idle",duration:"00:00:00"},parameters:{docs:{disable:!0}}},d=({language:o,code:p})=>e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:p})})]});function m({title:o,children:p}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-neutral-color-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)"},children:o}),p]})}var v,u,_,g,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "idle",
    duration: "00:00:00"
  }
}`,...(_=(u=r.parameters)==null?void 0:u.docs)==null?void 0:_.source},description:{story:`**Idle** — ready to record.
Circle is lavender, no rings. Center button shows mic.`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var b,x,w,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "recording",
    duration: "00:00:10"
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:`**Recording** — actively capturing audio.
Circle turns purple; two concentric rings pulse outward. Center button → pause.`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var S,C,k,j,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "paused",
    duration: "00:00:10"
  }
}`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:`**Paused** — recording on hold.
Circle stays purple, rings collapse, duration dims. Center button → mic to resume.`,...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};var T,D,L,M,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "preview",
    duration: "0:32"
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:`**Preview** — playback mode after recording stops.
Shows a waveform and a play button.`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var U,R,V,z,I;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "var(--cometchat-spacing-4)",
      alignItems: "stretch"
    }}>
      {(["idle", "recording", "paused", "preview"] as const).map(state => <div key={state} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-2)"
      }}>
          <span style={{
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#717680",
          paddingLeft: 4
        }}>
            {state}
          </span>
          <div style={{
          flex: 1,
          display: "flex"
        }}>
            <MultiLineComposer recordingState={state} duration={state === "preview" ? "0:32" : "00:00:10"} />
          </div>
        </div>)}
      </div>
    </div>
}`,...(V=(R=s.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"**All states** — side-by-side visual reference for all four variants.",...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};var H,W,F,A,B;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        <UsageCodeCard language="HTML" code={\`<!-- Voice Note Popup — Idle state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer">
      <div class="ml-composer__wave-inner">
        <div class="ml-composer__wave-center">
          <svg class="ml-composer__wave-mic"><!-- mic icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:00</span>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--destructive"><!-- stop --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- pause --></button>
  </div>
</div>

<!-- Recording state (active rings) -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer ml-composer__wave-outer--visible ml-composer__wave-outer--pulse">
      <div class="ml-composer__wave-inner ml-composer__wave-inner--visible">
        <div class="ml-composer__wave-center ml-composer__wave-center--active">
          <svg class="ml-composer__wave-mic"><!-- pause icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:10</span>
  <div class="ml-composer__actions">...</div>
</div>

<!-- Preview state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__preview">
    <button class="ml-composer__play-btn"><!-- play icon --></button>
    <div class="ml-composer__waveform">
      <div class="ml-composer__waveform-bars">
        <div class="ml-composer__waveform-bar" style="height: 8px"></div>
        <div class="ml-composer__waveform-bar" style="height: 16px"></div>
        <!-- more bars -->
      </div>
      <span class="ml-composer__preview-duration">0:32</span>
    </div>
  </div>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--send"><!-- send --></button>
  </div>
</div>\`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={\`.ml-composer__popup {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-4);
  max-width: 300px;
}

.ml-composer__popup-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.ml-composer__wave-center {
  width: 92px;
  height: 92px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-200);
}

.ml-composer__wave-center--active {
  background: var(--cometchat-primary-color);
}

.ml-composer__wave-outer--visible {
  background: var(--cometchat-extended-primary-color-50);
}

.ml-composer__wave-inner--visible {
  background: var(--cometchat-extended-primary-color-100);
}

.ml-composer__duration {
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
}

.ml-composer__play-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}

.ml-composer__action-btn--destructive {
  width: 52px;
  height: 52px;
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border-radius: var(--cometchat-radius-3);
}

.ml-composer__action-btn--send {
  width: 48px;
  height: 48px;
  background: var(--cometchat-primary-color);
  border-radius: var(--cometchat-radius-max);
  color: var(--cometchat-static-white);
}\`} />
      </UsageSection>
    </div>
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:"**Usage** — HTML & CSS reference for the Multi Line Composer (Voice Note Popup).",...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var E,O,X,q,G;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "idle",
    duration: "00:00:00"
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(X=(O=i.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"**Playground** — use controls to explore every prop.",...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};const ee=["Idle","Recording","Paused","Preview","AllStates","Usage","Playground"];export{s as AllStates,r as Idle,t as Paused,i as Playground,n as Preview,a as Recording,c as Usage,ee as __namedExportsOrder,$ as default};
