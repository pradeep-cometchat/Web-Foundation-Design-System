import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as J}from"./MultiLineComposer-CkAe01tQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $={title:"Base Components/Media Recorder/Multi Line Composer",component:J,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light-gray",values:[{name:"light-gray",value:"#F4F4F5"},{name:"white",value:"#ffffff"}]},docs:{description:{component:"The **Voice Note Popup** lets users record, pause, stop, and preview a voice message.\n\n### States\n| State | Circle | Rings | Center button |\n|---|---|---|---|\n| `idle` | Lavender (`ep-200`) | None | Mic |\n| `recording` | Purple (`ep-600`) | Pulsing outer + inner | Pause |\n| `paused` | Purple (`ep-600`) | Inner only (static) | Mic |\n| `preview` | — | — | Play + waveform |"}}},argTypes:{recordingState:{control:"select",options:["idle","recording","paused","preview"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string shown in the popup (e.g. `00:00:10`)."},onRecord:{action:"record"},onPause:{action:"pause"},onStop:{action:"stop"},onDelete:{action:"delete"},onPlay:{action:"play"}}},l=[o=>e.jsx("div",{style:{width:320},children:e.jsx(o,{})})],r={decorators:l,args:{recordingState:"idle",duration:"00:00:00"}},s={decorators:l,args:{recordingState:"recording",duration:"00:00:10"}},n={decorators:l,args:{recordingState:"paused",duration:"00:00:10"}},a={decorators:l,args:{recordingState:"preview",duration:"0:32"}},t={parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--space-6)"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--space-4)",alignItems:"stretch"},children:["idle","recording","paused","preview"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.08em",color:"#717680",paddingLeft:4},children:o}),e.jsx("div",{style:{flex:1,display:"flex"},children:e.jsx(J,{recordingState:o,duration:o==="preview"?"0:32":"00:00:10"})})]},o))})})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(m,{title:"HTML",children:e.jsx(d,{language:"HTML",code:`<!-- Voice Note Popup — Idle state -->
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
</div>`})}),e.jsx(m,{title:"CSS (Foundation Variables)",children:e.jsx(d,{language:"CSS",code:`.ml-composer__popup {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  max-width: 300px;
}

.ml-composer__popup-title {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.ml-composer__wave-center {
  width: 92px;
  height: 92px;
  border-radius: var(--radius-full);
  background: var(--color-ep-200);
}

.ml-composer__wave-center--active {
  background: var(--color-ep-600);
}

.ml-composer__wave-outer--visible {
  background: var(--color-ep-50);
}

.ml-composer__wave-inner--visible {
  background: var(--color-ep-100);
}

.ml-composer__duration {
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.ml-composer__play-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--color-ep-600);
  color: var(--color-white);
}

.ml-composer__action-btn--destructive {
  width: 52px;
  height: 52px;
  background: var(--color-error);
  color: var(--color-white);
  border-radius: var(--radius-xl);
}

.ml-composer__action-btn--send {
  width: 48px;
  height: 48px;
  background: var(--color-ep-600);
  border-radius: var(--radius-full);
  color: var(--color-white);
}`})})]})},c={decorators:l,args:{recordingState:"idle",duration:"00:00:00"},parameters:{docs:{disable:!0}}},d=({language:o,code:p})=>e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-01)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-02)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:o})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:p})})]});function m({title:o,children:p}){return e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)"},children:o}),p]})}var v,u,_,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "idle",
    duration: "00:00:00"
  }
}`,...(_=(u=r.parameters)==null?void 0:u.docs)==null?void 0:_.source},description:{story:`**Idle** — ready to record.
Circle is lavender, no rings. Center button shows mic.`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var w,f,x,h,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "recording",
    duration: "00:00:10"
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`**Recording** — actively capturing audio.
Circle turns purple; two concentric rings pulse outward. Center button → pause.`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var S,C,j,P,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "paused",
    duration: "00:00:10"
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:`**Paused** — recording on hold.
Circle stays purple, rings collapse, duration dims. Center button → mic to resume.`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var z,T,D,L,M;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "preview",
    duration: "0:32"
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:`**Preview** — playback mode after recording stops.
Shows a waveform and a play button.`,...(M=(L=a.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var V,N,U,R,I;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--space-6)"
  }}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "var(--space-4)",
      alignItems: "stretch"
    }}>
      {(["idle", "recording", "paused", "preview"] as const).map(state => <div key={state} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }}>
          <span style={{
          fontSize: "var(--font-size-0)",
          fontWeight: "var(--font-weight-semibold)",
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
}`,...(U=(N=t.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"**All states** — side-by-side visual reference for all four variants.",...(I=(R=t.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var F,H,W,A,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={\`.ml-composer__popup {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  max-width: 300px;
}

.ml-composer__popup-title {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.ml-composer__wave-center {
  width: 92px;
  height: 92px;
  border-radius: var(--radius-full);
  background: var(--color-ep-200);
}

.ml-composer__wave-center--active {
  background: var(--color-ep-600);
}

.ml-composer__wave-outer--visible {
  background: var(--color-ep-50);
}

.ml-composer__wave-inner--visible {
  background: var(--color-ep-100);
}

.ml-composer__duration {
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.ml-composer__play-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--color-ep-600);
  color: var(--color-white);
}

.ml-composer__action-btn--destructive {
  width: 52px;
  height: 52px;
  background: var(--color-error);
  color: var(--color-white);
  border-radius: var(--radius-xl);
}

.ml-composer__action-btn--send {
  width: 48px;
  height: 48px;
  background: var(--color-ep-600);
  border-radius: var(--radius-full);
  color: var(--color-white);
}\`} />
      </UsageSection>
    </div>
}`,...(W=(H=i.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:"**Usage** — HTML & CSS reference for the Multi Line Composer (Voice Note Popup).",...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var E,O,X,q,G;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(X=(O=c.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"**Playground** — use controls to explore every prop.",...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};const ee=["Idle","Recording","Paused","Preview","AllStates","Usage","Playground"];export{t as AllStates,r as Idle,n as Paused,c as Playground,a as Preview,s as Recording,i as Usage,ee as __namedExportsOrder,$ as default};
