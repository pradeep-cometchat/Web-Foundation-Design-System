import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as _}from"./MultiLineComposer-C3lbFSIE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={title:"Base Components/Media Recorder/Multi Line Composer",component:_,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light-gray",values:[{name:"light-gray",value:"#F4F4F5"},{name:"white",value:"#ffffff"}]},docs:{description:{component:"The **Voice Note Popup** lets users record, pause, stop, and preview a voice message.\n\n### States\n| State | Circle | Rings | Center button |\n|---|---|---|---|\n| `idle` | Lavender (`ep-200`) | None | Mic |\n| `recording` | Purple (`ep-600`) | Pulsing outer + inner | Pause |\n| `paused` | Purple (`ep-600`) | Inner only (static) | Mic |\n| `preview` | — | — | Play + waveform |"}}},argTypes:{recordingState:{control:"select",options:["idle","recording","paused","preview"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string shown in the popup (e.g. `00:00:10`)."},onRecord:{action:"record"},onPause:{action:"pause"},onStop:{action:"stop"},onDelete:{action:"delete"},onPlay:{action:"play"}}},d=[r=>e.jsx("div",{style:{width:320},children:e.jsx(r,{})})],o={decorators:d,args:{recordingState:"idle",duration:"00:00:00"}},t={decorators:d,args:{recordingState:"recording",duration:"00:00:10"}},n={decorators:d,args:{recordingState:"paused",duration:"00:00:10"}},a={decorators:d,args:{recordingState:"preview",duration:"0:32"}},s={parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--space-6)"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--space-4)",alignItems:"stretch"},children:["idle","recording","paused","preview"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.08em",color:"#717680",paddingLeft:4},children:r}),e.jsx("div",{style:{flex:1,display:"flex"},children:e.jsx(_,{recordingState:r,duration:r==="preview"?"0:32":"00:00:10"})})]},r))})})},i={decorators:d,args:{recordingState:"idle",duration:"00:00:00"},parameters:{docs:{disable:!0}}};var c,p,l,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "idle",
    duration: "00:00:00"
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:`**Idle** — ready to record.
Circle is lavender, no rings. Center button shows mic.`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var m,v,y,f,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "recording",
    duration: "00:00:10"
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`**Recording** — actively capturing audio.
Circle turns purple; two concentric rings pulse outward. Center button → pause.`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var x,h,w,P,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "paused",
    duration: "00:00:10"
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:`**Paused** — recording on hold.
Circle stays purple, rings collapse, duration dims. Center button → mic to resume.`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};var b,j,D,R,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: singleDecorator,
  args: {
    recordingState: "preview",
    duration: "0:32"
  }
}`,...(D=(j=a.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:`**Preview** — playback mode after recording stops.
Shows a waveform and a play button.`,...(I=(R=a.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var L,M,T,z,k;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(M=s.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"**All states** — side-by-side visual reference for all four variants.",...(k=(z=s.parameters)==null?void 0:z.docs)==null?void 0:k.description}}};var A,F,E,N,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(F=i.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:"**Playground** — use controls to explore every prop.",...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};const H=["Idle","Recording","Paused","Preview","AllStates","Playground"];export{s as AllStates,o as Idle,n as Paused,i as Playground,a as Preview,t as Recording,H as __namedExportsOrder,G as default};
