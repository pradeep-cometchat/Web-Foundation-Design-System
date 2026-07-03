import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as s}from"./MultiLineComposer-Xef-Tz0h.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z={title:"Base Components/Media Recorder/Single Line Composer",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'A single-line message composer with inline voice recording controls.\nShows the recording waveform, duration timer, and action buttons inline\nwith the message input area.\n\n**Structure (from Figma node 191:21271):**\n- Container: full-width, border `#e9eaeb`, radius-md (8px), px-12 py-6\n- Left: add icon (20px, `#a4a7ae`) + placeholder text (14px, `#717680`)\n- Mic icon: 24px, `#a4a7ae`\n- Recording area: status icon + duration (14px, `#414651`) + waveform (`#6852d6`) + action btn\n- Send button: 36px circle, disabled (`#f5f5f5`) or active (`#6852d6`)\n\n**States:**\n- Recording: red dot (pulsing) + timer + waveform + pause btn + send\n- Paused: play btn (purple) + "00:00" + waveform + delete btn + send\n- Playing: pause btn (purple) + timer + waveform + delete btn + send'}}},argTypes:{state:{control:"select",options:["recording","paused","playing"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string (e.g. '00:32')."},placeholder:{control:"text",description:"Placeholder text for the input area."},onTogglePlayPause:{control:!1},onDelete:{control:!1},onSend:{control:!1}}},t={args:{state:"recording",duration:"00:32"}},r={args:{state:"paused",duration:"00:00"}},a={args:{state:"playing",duration:"00:24"}},n={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)",maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Recording"}),e.jsx(s,{state:"recording",duration:"00:32"})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Paused"}),e.jsx(s,{state:"paused",duration:"00:00"})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Playing"}),e.jsx(s,{state:"playing",duration:"00:24"})]})]})},o={args:{state:"recording",duration:"00:32",placeholder:"Type your message..."},parameters:{docs:{disable:!0}}},i={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"};var d,c,p,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: "recording",
    duration: "00:32"
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Recording state — red dot pulsing, timer counting, pause button.",...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var m,g,y,v,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: "paused",
    duration: "00:00"
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Paused state — play button, timer reset, delete button available.",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var f,h,b,S,P;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: "playing",
    duration: "00:24"
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Playing state — pause button (purple), timer counting, delete button.",...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.description}}};var R,j,w,M,L;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-10)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)",
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
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"All states stacked for comparison.",...(L=(M=n.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var T,C,D,W,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Interactive playground — use the controls panel to configure.",...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};const F=["Recording","Paused","Playing","States","Playground"];export{r as Paused,o as Playground,a as Playing,t as Recording,n as States,F as __namedExportsOrder,z as default};
