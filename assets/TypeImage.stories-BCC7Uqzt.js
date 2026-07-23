import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as L,S as l,R as c,I as a,d as i,m as g,M as t,P as p,o as v,p as b,q as H,t as U,a as h,u as q,U as G}from"./_shared-BASKXJNT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Q={title:"Core Components/Message Composer/Multi Attachments/Types/Image",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Image attachment — all states.** Image files across every surface: queued
in the composer (loading → default → hover → remove → error), delivered in a
message (single, grids, "+N" overflow, uploading, failed), and in search.`}}}},s={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(L,{}),e.jsx(l,{title:"In Composer",children:e.jsxs(c,{gap:24,children:[e.jsx(a,{label:"Loading",children:e.jsx(i,{badge:"loading"})}),e.jsx(a,{label:"Default",children:e.jsx(i,{badge:"none"})}),e.jsx(a,{label:"Hover",children:e.jsx(i,{badge:"hover"})}),e.jsx(a,{label:"Remove",children:e.jsx(i,{badge:"remove"})}),e.jsx(a,{label:"Error",children:e.jsx(i,{badge:"error"})}),e.jsx(a,{label:"Retry",children:e.jsx(i,{badge:"retry"})})]})})]})},n={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(L,{}),e.jsxs(c,{gap:24,children:[["sent","received"].map(r=>e.jsxs(g,{width:320,children:[e.jsx(a,{label:`${r} · single`,children:e.jsx(t,{variant:r,images:1})}),e.jsx(a,{label:`${r} · 2 grid`,children:e.jsx(t,{variant:r,images:2})}),e.jsx(a,{label:`${r} · 3 grid`,children:e.jsx(t,{variant:r,images:3})}),e.jsx(a,{label:`${r} · 4 grid`,children:e.jsx(t,{variant:r,images:4})}),e.jsx(a,{label:`${r} · 4+ overflow`,children:e.jsx(t,{variant:r,images:4,totalImages:9})})]},r)),e.jsxs(g,{width:320,children:[e.jsx(a,{label:"uploading",children:e.jsx(t,{variant:"sent",images:4,state:"uploading"})}),e.jsx(a,{label:"failed",children:e.jsx(t,{variant:"sent",images:2,state:"failed"})})]})]})]})},o={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(c,{gap:24,children:[e.jsx(l,{title:"Media grid",children:e.jsxs(p,{children:[e.jsx(v,{value:"review",active:"Photos"}),e.jsx(b,{}),e.jsx(H,{children:"Photos"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--cometchat-spacing-1-5)"},children:Array.from({length:6}).map((r,m)=>e.jsx(U,{src:h[m%h.length]},m))})]})}),e.jsx(l,{title:"Conversation result",children:e.jsxs(p,{children:[e.jsx(v,{value:"review",active:"All"}),e.jsx(b,{}),e.jsx(q,{name:"Design Team",time:"4:56 pm",count:5,hue:250})]})})]})})},d={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(G,{composed:[{name:"ImagePreview",desc:"Composer thumbnail with the single-slot corner badge (remove / loading / error)."},{name:"MultiAttachmentBubble",desc:"Delivered image grid (1–4 tiles + “+N” overflow) with time + read receipt."},{name:"SearchBar",desc:"Design-system search input used by the Photos filter."},{name:"MediaTile",desc:"Square media-grid result tile in search."}],html:`<!-- Composer preview -->
<div class="ma-image-preview">
  <img class="ma-image-preview__img" src="photo.jpg" alt="" />
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — image grid in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-grid ma-grid--2">
    <img src="1.jpg" alt="" /><img src="2.jpg" alt="" />
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>

<!-- In search — Photos filter media grid -->
<div class="ma-search__grid">
  <div class="ma-tile"><img src="1.jpg" alt="" /></div>
  <!-- … -->
</div>`,css:`.ma-image-preview { position: relative; width: 72px; height: 72px; }
.ma-image-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-badge {
  position: absolute; top: -6px; right: -6px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  color: var(--cometchat-static-white);
}
.ma-badge--remove { background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white)); }

.ma-bubble--sent {
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  background: var(--cometchat-send-bubble-background);
}
.ma-grid { display: grid; gap: 2px; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-grid--2 { grid-template-columns: 1fr 1fr; }
.ma-bubble__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-tile { aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }`})};var u,x,j,I,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "In Composer",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <SpinKeyframes />
      <Section title="In Composer">
        <Row gap={24}>
          <Item label="Loading"><ImagePreview badge="loading" /></Item>
          <Item label="Default"><ImagePreview badge="none" /></Item>
          <Item label="Hover"><ImagePreview badge="hover" /></Item>
          <Item label="Remove"><ImagePreview badge="remove" /></Item>
          <Item label="Error"><ImagePreview badge="error" /></Item>
          <Item label="Retry"><ImagePreview badge="retry" /></Item>
        </Row>
      </Section>
    </div>
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source},description:{story:"Composer preview — every badge state.",...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.description}}};var f,y,S,C,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"Delivered — single, grids and overflow, sent and received.",...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.description}}};var _,P,A,R,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
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
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source},description:{story:"In search — media grid tiles and a conversation result.",...(D=(R=o.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};var k,B,E,T,$;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "ImagePreview",
    desc: "Composer thumbnail with the single-slot corner badge (remove / loading / error)."
  }, {
    name: "MultiAttachmentBubble",
    desc: "Delivered image grid (1–4 tiles + “+N” overflow) with time + read receipt."
  }, {
    name: "SearchBar",
    desc: "Design-system search input used by the Photos filter."
  }, {
    name: "MediaTile",
    desc: "Square media-grid result tile in search."
  }]} html={\`<!-- Composer preview -->
<div class="ma-image-preview">
  <img class="ma-image-preview__img" src="photo.jpg" alt="" />
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — image grid in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-grid ma-grid--2">
    <img src="1.jpg" alt="" /><img src="2.jpg" alt="" />
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>

<!-- In search — Photos filter media grid -->
<div class="ma-search__grid">
  <div class="ma-tile"><img src="1.jpg" alt="" /></div>
  <!-- … -->
</div>\`} css={\`.ma-image-preview { position: relative; width: 72px; height: 72px; }
.ma-image-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-badge {
  position: absolute; top: -6px; right: -6px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  color: var(--cometchat-static-white);
}
.ma-badge--remove { background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white)); }

.ma-bubble--sent {
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  background: var(--cometchat-send-bubble-background);
}
.ma-grid { display: grid; gap: 2px; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-grid--2 { grid-template-columns: 1fr 1fr; }
.ma-bubble__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-tile { aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }\`} />
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"Usage — HTML structure + token CSS.",...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.description}}};const V=["InComposer","InMessage","InSearch","Usage"];export{s as InComposer,n as InMessage,o as InSearch,d as Usage,V as __namedExportsOrder,Q as default};
