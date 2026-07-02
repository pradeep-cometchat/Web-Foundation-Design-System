import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as w,S as M,R as k,I as n,A as t,e as R,d,M as o,P as C,f as P,g as B,h as D,i as l}from"./_shared-BqpVJyLP.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const N={title:"Core Components/Message Composer/Multi Attachments/Types/Audio",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Audio attachment — all states.** An audio *file* attached from the picker.

> **Not a voice note.** A voice note is *recorded* in the composer via the
> mic and cannot be added through the attachment picker. It shares this
> waveform card visually, but it is a separate recording flow — so it is not
> represented as an attachable type here.`}}}};function $(){return e.jsxs("div",{style:{display:"flex",gap:10,padding:"12px 14px",borderRadius:"var(--cometchat-radius-2)",background:"var(--cometchat-background-color-02)",border:"1px solid var(--cometchat-border-color-default)",maxWidth:640},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:"var(--cometchat-icon-color-highlight)","--icon-fill":0},children:"info"}),e.jsxs("span",{style:{fontSize:13,lineHeight:"20px",color:"var(--cometchat-text-color-secondary)"},children:["This is an ",e.jsx("strong",{children:"audio file attachment"}),". A ",e.jsx("strong",{children:"voice note"})," looks identical but is recorded via the mic — it is not attachable in the composer, so it isn't shown as a type here."]})]})}const s={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:32},children:[e.jsx(w,{}),e.jsx($,{}),e.jsx(M,{title:"In Composer",children:e.jsxs(k,{gap:16,children:[e.jsx(n,{label:"Loading",children:e.jsx(t,{badge:"loading"})}),e.jsx(n,{label:"Default",children:e.jsx(t,{badge:"none"})}),e.jsx(n,{label:"Hover",children:e.jsx(t,{badge:"hover"})}),e.jsx(n,{label:"Remove",children:e.jsx(t,{badge:"remove"})}),e.jsx(n,{label:"Error",children:e.jsx(t,{badge:"error"})})]})})]})},r={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(w,{}),e.jsx(k,{gap:24,children:["sent","received"].map(a=>e.jsxs(R,{width:320,children:[e.jsx(n,{label:`${a} · single`,children:e.jsx(d,{variant:a,children:e.jsx(o,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})}),e.jsx(n,{label:`${a} · playing`,children:e.jsx(d,{variant:a,children:e.jsx(o,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32",playing:!0}]})})}),e.jsx(n,{label:`${a} · with a document (separate bubbles)`,children:e.jsxs(d,{variant:a,children:[e.jsx(o,{variant:a,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],showMeta:!1}),e.jsx(o,{variant:a,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})})]},a))})]})},i={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsx(M,{title:"Audio results",children:e.jsxs(C,{children:[e.jsx(P,{value:"review",active:"Audio"}),e.jsx(B,{}),e.jsx(D,{children:"Audio"}),e.jsx(l,{title:"Audio.mp3",meta:"00:32",from:"You"}),e.jsx(l,{title:"Recording.m4a",meta:"01:14",from:"Priya"})]})})})};var c,m,p,u,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "In Composer",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 32
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
        </Row>
      </Section>
    </div>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Composer preview — every badge state.",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,v,g,x,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "In Message",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:`Delivered — an audio message is always its own bubble. When sent alongside a
 document, each format is a separate bubble stacked one below another.`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var j,A,y,I,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:y.source},description:{story:"In search — the Audio filter renders a play-list of audio results.",...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.description}}};const Q=["InComposer","InMessage","InSearch"];export{s as InComposer,r as InMessage,i as InSearch,Q as __namedExportsOrder,N as default};
