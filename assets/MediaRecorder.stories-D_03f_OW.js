import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as i}from"./T-C6nayWAE.js";import{M as o}from"./MultiLineComposer-W8D7cswf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I={title:"Base Components/Media Recorder/Single Line Composer",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'A single-line message composer with inline voice recording controls.\nShows the recording waveform, duration timer, and action buttons inline\nwith the message input area.\n\n**Structure (from Figma node 191:21271):**\n- Container: full-width, border `#e9eaeb`, radius-md (8px), px-12 py-6\n- Left: add icon (20px, `#a4a7ae`) + placeholder text (14px, `#717680`)\n- Mic icon: 24px, `#a4a7ae`\n- Recording area: status icon + duration (14px, `#414651`) + waveform (`#6852d6`) + action btn\n- Send button: 36px circle, disabled (`#f5f5f5`) or active (`#6852d6`)\n\n**States:**\n- Recording: red dot (pulsing) + timer + waveform + pause btn + send\n- Paused: play btn (purple) + "00:00" + waveform + delete btn + send\n- Playing: pause btn (purple) + timer + waveform + delete btn + send'}}},argTypes:{state:{control:"select",options:["recording","paused","playing"],description:"Current state of the recorder."},duration:{control:"text",description:"Duration string (e.g. '00:32')."},placeholder:{control:"text",description:"Placeholder text for the input area."},onTogglePlayPause:{control:!1},onDelete:{control:!1},onSend:{control:!1}}},t={args:{state:"recording",duration:"00:32"}},r={args:{state:"paused",duration:"00:00"}},a={args:{state:"playing",duration:"00:24"}},n={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-10)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)",maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("div",{style:d,children:e.jsx(i,{children:"Recording"})}),e.jsx(o,{state:"recording",duration:"00:32"})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:e.jsx(i,{children:"Paused"})}),e.jsx(o,{state:"paused",duration:"00:00"})]}),e.jsxs("div",{children:[e.jsx("div",{style:d,children:e.jsx(i,{children:"Playing"})}),e.jsx(o,{state:"playing",duration:"00:24"})]})]})},s={args:{state:"recording",duration:"00:32",placeholder:"Type your message..."},parameters:{docs:{disable:!0}}},d={fontSize:"10px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--cometchat-neutral-color-500)",marginBottom:"var(--cometchat-spacing-2)"};var c,l,p,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: "recording",
    duration: "00:32"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Recording state — red dot pulsing, timer counting, pause button.",...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var g,y,v,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: "paused",
    duration: "00:00"
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Paused state — play button, timer reset, delete button available.",...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var f,b,S,P,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: "playing",
    duration: "00:24"
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:"Playing state — pause button (purple), timer counting, delete button.",...(j=(P=a.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var R,T,w,M,L;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        <div style={stateLabelStyle}><T>Recording</T></div>
        <MediaRecorder state="recording" duration="00:32" />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Paused</T></div>
        <MediaRecorder state="paused" duration="00:00" />
      </div>
      <div>
        <div style={stateLabelStyle}><T>Playing</T></div>
        <MediaRecorder state="playing" duration="00:24" />
      </div>
    </div>
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"All states stacked for comparison.",...(L=(M=n.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var C,D,W,A,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source},description:{story:"Interactive playground — use the controls panel to configure.",...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};const O=["Recording","Paused","Playing","States","Playground"];export{r as Paused,s as Playground,a as Playing,t as Recording,n as States,O as __namedExportsOrder,I as default};
