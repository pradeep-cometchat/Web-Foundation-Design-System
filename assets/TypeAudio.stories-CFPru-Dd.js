import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as P,S as B,R as D,I as t,A as r,g as H,f as c,M as d,P as L,h as U,i as $,j as E,k as l,U as Y}from"./_shared-CTCF2_mf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const q={title:"Core Components/Message Composer/Multi Attachments/Types/Audio",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Audio attachment — all states.** An audio *file* attached from the picker.

> **Not a voice note.** A voice note is *recorded* in the composer via the
> mic and cannot be added through the attachment picker. It shares this
> waveform card visually, but it is a separate recording flow — so it is not
> represented as an attachable type here.`}}}};function K(){return e.jsxs("div",{style:{display:"flex",gap:"var(--cometchat-spacing-2-5)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-3-5)",borderRadius:"var(--cometchat-radius-2)",background:"var(--cometchat-background-color-02)",border:"1px solid var(--cometchat-border-color-default)",maxWidth:640},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":0},children:"info"}),e.jsxs("span",{style:{fontSize:13,lineHeight:"20px",color:"var(--cometchat-text-color-secondary)"},children:["This is an ",e.jsx("strong",{children:"audio file attachment"}),". A ",e.jsx("strong",{children:"voice note"})," looks identical but is recorded via the mic — it is not attachable in the composer, so it isn't shown as a type here."]})]})}const n={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)"},children:[e.jsx(P,{}),e.jsx(K,{}),e.jsx(B,{title:"In Composer",children:e.jsxs(D,{gap:16,children:[e.jsx(t,{label:"Loading",children:e.jsx(r,{badge:"loading"})}),e.jsx(t,{label:"Default",children:e.jsx(r,{badge:"none"})}),e.jsx(t,{label:"Hover",children:e.jsx(r,{badge:"hover"})}),e.jsx(t,{label:"Remove",children:e.jsx(r,{badge:"remove"})}),e.jsx(t,{label:"Error",children:e.jsx(r,{badge:"error"})}),e.jsx(t,{label:"Retry",children:e.jsx(r,{badge:"retry"})})]})})]})},s={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(P,{}),e.jsx(D,{gap:24,children:["sent","received"].map(a=>e.jsxs(H,{width:320,children:[e.jsx(t,{label:`${a} · single`,children:e.jsx(c,{variant:a,children:e.jsx(d,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})}),e.jsx(t,{label:`${a} · playing`,children:e.jsx(c,{variant:a,children:e.jsx(d,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32",playing:!0}]})})}),e.jsx(t,{label:`${a} · with a document (separate bubbles)`,children:e.jsxs(c,{variant:a,children:[e.jsx(d,{variant:a,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],showMeta:!1}),e.jsx(d,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})})]},a))})]})},i={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsx(B,{title:"Audio results",children:e.jsxs(L,{children:[e.jsx(U,{value:"review",active:"Audio"}),e.jsx($,{}),e.jsx(E,{children:"Audio"}),e.jsx(l,{title:"Audio.mp3",meta:"00:32",from:"You"}),e.jsx(l,{title:"Recording.m4a",meta:"01:14",from:"Priya"})]})})})},o={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(Y,{composed:[{name:"AudioPreview",desc:"Composer audio chip — play button, title, seek bar, time; single-slot corner badge."},{name:"AudioCard / PlayButton / AudioSeekBar",desc:"Media-player card: play/pause button, elapsed-fill seek bar, mm:ss / mm:ss."},{name:"MultiAttachmentBubble",desc:"Delivered audio message; always its own bubble, download affordance once sent."},{name:"SearchBar",desc:"Design-system search input used by the Audio filter."},{name:"AudioResult",desc:"Search list row — play button, title, seek bar, time · sender."}],html:`<!-- Delivered — audio card in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-audio-card">
    <button class="ma-play-btn" aria-label="Play">play_arrow</button>
    <div class="ma-audio-card__body">
      <p class="ma-audio-card__title">Audio.mp3</p>
      <div class="ma-seek"><div class="ma-seek__fill"></div><div class="ma-seek__knob"></div></div>
      <p class="ma-audio-card__time">00:00/00:32</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`,css:`.ma-audio-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-play-btn {
  width: 40px; height: 40px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);          /* sent bubble */
  color: var(--cometchat-primary-color);
  /* received bubble: background primary, color static-white */
}
.ma-audio-card__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-seek {
  position: relative; height: 6px; width: 100%;
  border-radius: var(--cometchat-radius-1);
  background: color-mix(in srgb, var(--cometchat-static-white) 30%, transparent);
}
.ma-seek__fill {
  height: 100%; border-radius: var(--cometchat-radius-1);
  background: var(--cometchat-static-white);           /* received: primary-color */
}
.ma-seek__knob {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-default);
  box-shadow: var(--cometchat-shadow-xs);
}
.ma-audio-card__time {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`})};var m,u,p,b,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "In Composer",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)"
  }}>
      <SpinKeyframes />
      <Callout />
      <Section title="In Composer">
        <Row gap={16}>
          <Item label="Loading"><AudioPreview badge="loading" /></Item>
          <Item label="Default"><AudioPreview badge="none" /></Item>
          <Item label="Hover"><AudioPreview badge="hover" /></Item>
          <Item label="Remove"><AudioPreview badge="remove" /></Item>
          <Item label="Error"><AudioPreview badge="error" /></Item>
          <Item label="Retry"><AudioPreview badge="retry" /></Item>
        </Row>
      </Section>
    </div>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"Composer preview — every badge state.",...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var v,g,x,y,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "In Message",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map(v => <ChatCanvas key={v} width={320}>
            <Item label={\`\${v} · single\`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{
              kind: "audio",
              name: "Audio.mp3",
              meta: "00:32"
            }]} />
              </MessageStack>
            </Item>
            <Item label={\`\${v} · playing\`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{
              kind: "audio",
              name: "Audio.mp3",
              meta: "00:32",
              playing: true
            }]} />
              </MessageStack>
            </Item>
            <Item label={\`\${v} · with a document (separate bubbles)\`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{
              kind: "pdf",
              name: "Q3-Report.pdf",
              meta: "2.4 MB"
            }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{
              kind: "audio",
              name: "Audio.mp3",
              meta: "00:32"
            }]} />
              </MessageStack>
            </Item>
          </ChatCanvas>)}
      </Row>
    </div>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:`Delivered — an audio message is always its own bubble. When sent alongside a
 document, each format is a separate bubble stacked one below another.`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var w,k,A,j,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Audio results">
        <Panel>
          <SearchHeader value="review" active="Audio" />
          <Divider />
          <ResultsLabel>Audio</ResultsLabel>
          <AudioResult title="Audio.mp3" meta="00:32" from="You" />
          <AudioResult title="Recording.m4a" meta="01:14" from="Priya" />
        </Panel>
      </Section>
    </div>
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"In search — the Audio filter renders a play-list of audio results.",...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.description}}};var I,S,M,R,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "AudioPreview",
    desc: "Composer audio chip — play button, title, seek bar, time; single-slot corner badge."
  }, {
    name: "AudioCard / PlayButton / AudioSeekBar",
    desc: "Media-player card: play/pause button, elapsed-fill seek bar, mm:ss / mm:ss."
  }, {
    name: "MultiAttachmentBubble",
    desc: "Delivered audio message; always its own bubble, download affordance once sent."
  }, {
    name: "SearchBar",
    desc: "Design-system search input used by the Audio filter."
  }, {
    name: "AudioResult",
    desc: "Search list row — play button, title, seek bar, time · sender."
  }]} html={\`<!-- Delivered — audio card in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-audio-card">
    <button class="ma-play-btn" aria-label="Play">play_arrow</button>
    <div class="ma-audio-card__body">
      <p class="ma-audio-card__title">Audio.mp3</p>
      <div class="ma-seek"><div class="ma-seek__fill"></div><div class="ma-seek__knob"></div></div>
      <p class="ma-audio-card__time">00:00/00:32</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>\`} css={\`.ma-audio-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-play-btn {
  width: 40px; height: 40px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);          /* sent bubble */
  color: var(--cometchat-primary-color);
  /* received bubble: background primary, color static-white */
}
.ma-audio-card__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-seek {
  position: relative; height: 6px; width: 100%;
  border-radius: var(--cometchat-radius-1);
  background: color-mix(in srgb, var(--cometchat-static-white) 30%, transparent);
}
.ma-seek__fill {
  height: 100%; border-radius: var(--cometchat-radius-1);
  background: var(--cometchat-static-white);           /* received: primary-color */
}
.ma-seek__knob {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-default);
  box-shadow: var(--cometchat-shadow-xs);
}
.ma-audio-card__time {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}\`} />
}`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source},description:{story:"Usage — HTML structure + token CSS.",...(C=(R=o.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};const F=["InComposer","InMessage","InSearch","Usage"];export{n as InComposer,s as InMessage,i as InSearch,o as Usage,F as __namedExportsOrder,q as default};
