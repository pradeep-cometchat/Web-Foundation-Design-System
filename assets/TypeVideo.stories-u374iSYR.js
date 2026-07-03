import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as E,S as o,R as d,I as a,V as r,e as c,M as t,P as v,f as p,g,h as L,k as $,a as h,l as B}from"./_shared-l0Q3ErMB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const G={title:"Core Components/Message Composer/Multi Attachments/Types/Video",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Video attachment — all states.** Same lifecycle as images, but every tile
carries a play overlay (and a duration badge in search). Composer preview
states, delivered single/grid/overflow, uploading/failed, and search.`}}}},s={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(E,{}),e.jsx(o,{title:"In Composer",children:e.jsxs(d,{gap:24,children:[e.jsx(a,{label:"Loading",children:e.jsx(r,{badge:"loading"})}),e.jsx(a,{label:"Default",children:e.jsx(r,{badge:"none"})}),e.jsx(a,{label:"Hover",children:e.jsx(r,{badge:"hover"})}),e.jsx(a,{label:"Remove",children:e.jsx(r,{badge:"remove"})}),e.jsx(a,{label:"Error",children:e.jsx(r,{badge:"error"})})]})})]})},i={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(E,{}),e.jsxs(d,{gap:24,children:[["sent","received"].map(n=>e.jsxs(c,{width:320,children:[e.jsx(a,{label:`${n} · single`,children:e.jsx(t,{variant:n,images:1,videoAt:[0]})}),e.jsx(a,{label:`${n} · 2 grid`,children:e.jsx(t,{variant:n,images:2,videoAt:[0,1]})}),e.jsx(a,{label:`${n} · 4 grid`,children:e.jsx(t,{variant:n,images:4,videoAt:[0,1,2,3]})}),e.jsx(a,{label:`${n} · 4+ overflow`,children:e.jsx(t,{variant:n,images:4,videoAt:[0,1,2],totalImages:8})})]},n)),e.jsxs(c,{width:320,children:[e.jsx(a,{label:"uploading",children:e.jsx(t,{variant:"sent",images:2,videoAt:[0,1],state:"uploading"})}),e.jsx(a,{label:"failed",children:e.jsx(t,{variant:"sent",images:1,videoAt:[0],state:"failed"})})]})]})]})},l={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(d,{gap:24,children:[e.jsx(o,{title:"Media grid",children:e.jsxs(v,{children:[e.jsx(p,{value:"review",active:"Videos"}),e.jsx(g,{}),e.jsx(L,{children:"Videos"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--cometchat-spacing-1-5)"},children:Array.from({length:6}).map((n,m)=>e.jsx($,{src:h[m%h.length],video:!0,duration:"0:12"},m))})]})}),e.jsx(o,{title:"Conversation result",children:e.jsxs(v,{children:[e.jsx(p,{value:"review",active:"All"}),e.jsx(g,{}),e.jsx(B,{name:"Marketing",time:"Mon",count:4,hue:150})]})})]})})};var u,b,x,j,I;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "In Composer",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <SpinKeyframes />
      <Section title="In Composer">
        <Row gap={24}>
          <Item label="Loading"><VideoPreview badge="loading" /></Item>
          <Item label="Default"><VideoPreview badge="none" /></Item>
          <Item label="Hover"><VideoPreview badge="hover" /></Item>
          <Item label="Remove"><VideoPreview badge="remove" /></Item>
          <Item label="Error"><VideoPreview badge="error" /></Item>
        </Row>
      </Section>
    </div>
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"Composer preview — every badge state.",...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.description}}};var A,w,y,M,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
            <Item label={\`\${v} · single\`}><MultiAttachmentBubble variant={v} images={1} videoAt={[0]} /></Item>
            <Item label={\`\${v} · 2 grid\`}><MultiAttachmentBubble variant={v} images={2} videoAt={[0, 1]} /></Item>
            <Item label={\`\${v} · 4 grid\`}><MultiAttachmentBubble variant={v} images={4} videoAt={[0, 1, 2, 3]} /></Item>
            <Item label={\`\${v} · 4+ overflow\`}><MultiAttachmentBubble variant={v} images={4} videoAt={[0, 1, 2]} totalImages={8} /></Item>
          </ChatCanvas>)}
        <ChatCanvas width={320}>
          <Item label="uploading"><MultiAttachmentBubble variant="sent" images={2} videoAt={[0, 1]} state="uploading" /></Item>
          <Item label="failed"><MultiAttachmentBubble variant="sent" images={1} videoAt={[0]} state="failed" /></Item>
        </ChatCanvas>
      </Row>
    </div>
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"Delivered — single, grids, overflow, sent and received.",...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var C,f,R,P,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <Row gap={24}>
        <Section title="Media grid">
          <Panel>
            <SearchHeader value="review" active="Videos" />
            <Divider />
            <ResultsLabel>Videos</ResultsLabel>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--cometchat-spacing-1-5)"
          }}>
              {Array.from({
              length: 6
            }).map((_, i) => <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video duration="0:12" />)}
            </div>
          </Panel>
        </Section>
        <Section title="Conversation result">
          <Panel>
            <SearchHeader value="review" active="All" />
            <Divider />
            <ConversationResult name="Marketing" time="Mon" count={4} hue={150} />
          </Panel>
        </Section>
      </Row>
    </div>
}`,...(R=(f=l.parameters)==null?void 0:f.docs)==null?void 0:R.source},description:{story:"In search — video tiles with play + duration, and a conversation result.",...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};const K=["InComposer","InMessage","InSearch"];export{s as InComposer,i as InMessage,l as InSearch,K as __namedExportsOrder,G as default};
