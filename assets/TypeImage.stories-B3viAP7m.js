import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as $,S as o,R as d,I as n,c as r,e as c,M as s,P as g,f as p,g as v,h as B,k as D,a as h,l as L}from"./_shared-BqpVJyLP.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const K={title:"Core Components/Message Composer/Multi Attachments/Types/Image",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Image attachment — all states.** Image files across every surface: queued
in the composer (loading → default → hover → remove → error), delivered in a
message (single, grids, "+N" overflow, uploading, failed), and in search.`}}}},t={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx($,{}),e.jsx(o,{title:"In Composer",children:e.jsxs(d,{gap:24,children:[e.jsx(n,{label:"Loading",children:e.jsx(r,{badge:"loading"})}),e.jsx(n,{label:"Default",children:e.jsx(r,{badge:"none"})}),e.jsx(n,{label:"Hover",children:e.jsx(r,{badge:"hover"})}),e.jsx(n,{label:"Remove",children:e.jsx(r,{badge:"remove"})}),e.jsx(n,{label:"Error",children:e.jsx(r,{badge:"error"})})]})})]})},i={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx($,{}),e.jsxs(d,{gap:24,children:[["sent","received"].map(a=>e.jsxs(c,{width:320,children:[e.jsx(n,{label:`${a} · single`,children:e.jsx(s,{variant:a,images:1})}),e.jsx(n,{label:`${a} · 2 grid`,children:e.jsx(s,{variant:a,images:2})}),e.jsx(n,{label:`${a} · 3 grid`,children:e.jsx(s,{variant:a,images:3})}),e.jsx(n,{label:`${a} · 4 grid`,children:e.jsx(s,{variant:a,images:4})}),e.jsx(n,{label:`${a} · 4+ overflow`,children:e.jsx(s,{variant:a,images:4,totalImages:9})})]},a)),e.jsxs(c,{width:320,children:[e.jsx(n,{label:"uploading",children:e.jsx(s,{variant:"sent",images:4,state:"uploading"})}),e.jsx(n,{label:"failed",children:e.jsx(s,{variant:"sent",images:2,state:"failed"})})]})]})]})},l={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs(d,{gap:24,children:[e.jsx(o,{title:"Media grid",children:e.jsxs(g,{children:[e.jsx(p,{value:"review",active:"Photos"}),e.jsx(v,{}),e.jsx(B,{children:"Photos"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--cometchat-spacing-1-5)"},children:Array.from({length:6}).map((a,m)=>e.jsx(D,{src:h[m%h.length]},m))})]})}),e.jsx(o,{title:"Conversation result",children:e.jsxs(g,{children:[e.jsx(p,{value:"review",active:"All"}),e.jsx(v,{}),e.jsx(L,{name:"Design Team",time:"4:56 pm",count:5,hue:250})]})})]})})};var u,b,I,x,j;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <Item label="Loading"><ImagePreview badge="loading" /></Item>
          <Item label="Default"><ImagePreview badge="none" /></Item>
          <Item label="Hover"><ImagePreview badge="hover" /></Item>
          <Item label="Remove"><ImagePreview badge="remove" /></Item>
          <Item label="Error"><ImagePreview badge="error" /></Item>
        </Row>
      </Section>
    </div>
}`,...(I=(b=t.parameters)==null?void 0:b.docs)==null?void 0:I.source},description:{story:"Composer preview — every badge state.",...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};var S,w,C,f,M;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
            <Item label={\`\${v} · single\`}><MultiAttachmentBubble variant={v} images={1} /></Item>
            <Item label={\`\${v} · 2 grid\`}><MultiAttachmentBubble variant={v} images={2} /></Item>
            <Item label={\`\${v} · 3 grid\`}><MultiAttachmentBubble variant={v} images={3} /></Item>
            <Item label={\`\${v} · 4 grid\`}><MultiAttachmentBubble variant={v} images={4} /></Item>
            <Item label={\`\${v} · 4+ overflow\`}><MultiAttachmentBubble variant={v} images={4} totalImages={9} /></Item>
          </ChatCanvas>)}
        <ChatCanvas width={320}>
          <Item label="uploading"><MultiAttachmentBubble variant="sent" images={4} state="uploading" /></Item>
          <Item label="failed"><MultiAttachmentBubble variant="sent" images={2} state="failed" /></Item>
        </ChatCanvas>
      </Row>
    </div>
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Delivered — single, grids and overflow, sent and received.",...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.description}}};var y,A,P,R,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
            <SearchHeader value="review" active="Photos" />
            <Divider />
            <ResultsLabel>Photos</ResultsLabel>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--cometchat-spacing-1-5)"
          }}>
              {Array.from({
              length: 6
            }).map((_, i) => <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} />)}
            </div>
          </Panel>
        </Section>
        <Section title="Conversation result">
          <Panel>
            <SearchHeader value="review" active="All" />
            <Divider />
            <ConversationResult name="Design Team" time="4:56 pm" count={5} hue={250} />
          </Panel>
        </Section>
      </Row>
    </div>
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:"In search — media grid tiles and a conversation result.",...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};const q=["InComposer","InMessage","InSearch"];export{t as InComposer,i as InMessage,l as InSearch,q as __namedExportsOrder,K as default};
