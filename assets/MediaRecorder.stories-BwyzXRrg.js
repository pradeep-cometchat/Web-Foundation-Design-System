import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as o}from"./MultiLineComposer-CkAe01tQ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const k={title:"Base Components/Media Recorder/Single Line Composer",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'A single-line message composer with inline voice recording controls.\nShows the recording waveform, duration timer, and action buttons inline\nwith the message input area.\n\n**Structure (from Figma node 191:21271):**\n- Container: full-width, border `#e9eaeb`, radius-md (8px), px-12 py-6\n- Left: add icon (20px, `#a4a7ae`) + placeholder text (14px, `#717680`)\n- Mic icon: 24px, `#a4a7ae`\n- Recording area: status icon + duration (14px, `#414651`) + waveform (`#6852d6`) + action btn\n- Send button: 36px circle, disabled (`#f5f5f5`) or active (`#6852d6`)\n\n**States:**\n- Recording: red dot (pulsing) + timer + waveform + pause btn + send\n- Paused: play btn (purple) + "00:00" + waveform + delete btn + send\n- Playing: pause btn (purple) + timer + waveform + delete btn + send'}}},argTypes:{state:{control:"select",options:["recording","paused","playing"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string (e.g. '00:32')."},placeholder:{control:"text",description:"Placeholder text for the input area."},onTogglePlayPause:{control:!1},onDelete:{control:!1},onSend:{control:!1}}},r={args:{state:"recording",duration:"00:32"}},t={args:{state:"paused",duration:"00:00"}},a={args:{state:"playing",duration:"00:24"}},n={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-10)",display:"flex",flexDirection:"column",gap:"var(--space-8)",maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Recording"}),e.jsx(o,{state:"recording",duration:"00:32"})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Paused"}),e.jsx(o,{state:"paused",duration:"00:00"})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Playing"}),e.jsx(o,{state:"playing",duration:"00:24"})]})]})},s={args:{state:"recording",duration:"00:32",placeholder:"Type your message..."},parameters:{docs:{disable:!0}}},i={fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500, #535862)",marginBottom:"var(--space-2)"};var d,c,l,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: "recording",
    duration: "00:32"
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Recording state — red dot pulsing, timer counting, pause button.",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var m,g,y,v,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: "paused",
    duration: "00:00"
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Paused state — play button, timer reset, delete button available.",...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var x,h,b,S,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: "playing",
    duration: "00:24"
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Playing state — pause button (purple), timer counting, delete button.",...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.description}}};var R,j,w,M,L;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-8)",
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <div>
        <div style={stateLabelStyle}>Recording</div>
        <MediaRecorder state="recording" duration="00:32" />
      </div>
      <div>
        <div style={stateLabelStyle}>Paused</div>
        <MediaRecorder state="paused" duration="00:00" />
      </div>
      <div>
        <div style={stateLabelStyle}>Playing</div>
        <MediaRecorder state="playing" duration="00:24" />
      </div>
    </div>
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"All states stacked for comparison.",...(L=(M=n.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var T,C,D,W,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: "recording",
    duration: "00:32",
    placeholder: "Type your message..."
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Interactive playground — use the controls panel to configure.",...(z=(W=s.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};const F=["Recording","Paused","Playing","States","Playground"];export{t as Paused,s as Playground,a as Playing,r as Recording,n as States,F as __namedExportsOrder,k as default};
