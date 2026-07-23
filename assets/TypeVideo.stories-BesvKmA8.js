import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as T,S as d,R as c,I as a,V as r,m as p,M as i,P as v,o as g,p as h,q as $,t as H,a as u,u as U,U as G}from"./_shared-tknUeeqK.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const J={title:"Core Components/Message Composer/Multi Attachments/Types/Video",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Video attachment — all states.** Same lifecycle as images, but every tile
carries a play overlay (and a duration badge in search). Composer preview
states, delivered single/grid/overflow, uploading/failed, and search.`}}}},n={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(T,{}),e.jsx(d,{title:"In Composer",children:e.jsxs(c,{gap:24,children:[e.jsx(a,{label:"Loading",children:e.jsx(r,{badge:"loading"})}),e.jsx(a,{label:"Default",children:e.jsx(r,{badge:"none"})}),e.jsx(a,{label:"Hover",children:e.jsx(r,{badge:"hover"})}),e.jsx(a,{label:"Remove",children:e.jsx(r,{badge:"remove"})}),e.jsx(a,{label:"Error",children:e.jsx(r,{badge:"error"})}),e.jsx(a,{label:"Retry",children:e.jsx(r,{badge:"retry"})})]})})]})},s={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(T,{}),e.jsxs(c,{gap:24,children:[["sent","received"].map(t=>e.jsxs(p,{width:320,children:[e.jsx(a,{label:`${t} · single`,children:e.jsx(i,{variant:t,images:1,videoAt:[0]})}),e.jsx(a,{label:`${t} · 2 grid`,children:e.jsx(i,{variant:t,images:2,videoAt:[0,1]})}),e.jsx(a,{label:`${t} · 4 grid`,children:e.jsx(i,{variant:t,images:4,videoAt:[0,1,2,3]})}),e.jsx(a,{label:`${t} · 4+ overflow`,children:e.jsx(i,{variant:t,images:4,videoAt:[0,1,2],totalImages:8})})]},t)),e.jsxs(p,{width:320,children:[e.jsx(a,{label:"uploading",children:e.jsx(i,{variant:"sent",images:2,videoAt:[0,1],state:"uploading"})}),e.jsx(a,{label:"failed",children:e.jsx(i,{variant:"sent",images:1,videoAt:[0],state:"failed"})})]})]})]})},o={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs(c,{gap:24,children:[e.jsx(d,{title:"Media grid",children:e.jsxs(v,{children:[e.jsx(g,{value:"review",active:"Videos"}),e.jsx(h,{}),e.jsx($,{children:"Videos"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--cometchat-spacing-1-5)"},children:Array.from({length:6}).map((t,m)=>e.jsx(H,{src:u[m%u.length],video:!0,duration:"0:12"},m))})]})}),e.jsx(d,{title:"Conversation result",children:e.jsxs(v,{children:[e.jsx(g,{value:"review",active:"All"}),e.jsx(h,{}),e.jsx(U,{name:"Marketing",time:"Mon",count:4,hue:150})]})})]})})},l={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(G,{composed:[{name:"VideoPreview",desc:"Composer thumbnail with a centered play overlay and the single-slot corner badge."},{name:"MultiAttachmentBubble",desc:"Delivered video grid — every tile carries a play overlay; “+N” for overflow."},{name:"SearchBar",desc:"Design-system search input used by the Videos filter."},{name:"MediaTile",desc:"Search video tile with play overlay + duration badge."}],html:`<!-- Composer preview -->
<div class="ma-video-preview">
  <img class="ma-video-preview__img" src="clip.jpg" alt="" />
  <span class="ma-play">play_arrow</span>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- In search — Videos filter tile -->
<div class="ma-tile">
  <img src="clip.jpg" alt="" />
  <span class="ma-tile__play">play_arrow</span>
  <span class="ma-tile__duration">0:12</span>
</div>`,css:`.ma-video-preview { position: relative; width: 72px; height: 72px; }
.ma-video-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-play {
  position: absolute; inset: 0; margin: auto;
  width: 30px; height: 30px; border-radius: var(--cometchat-radius-max);
  background: color-mix(in srgb, var(--cometchat-static-black) 45%, transparent);
  color: var(--cometchat-static-white);
}

.ma-tile { position: relative; aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-tile__duration {
  position: absolute; left: 6px; bottom: 6px;
  padding: 1px var(--cometchat-spacing-1-5);
  border-radius: var(--cometchat-radius-1);
  font: var(--cometchat-font-caption2-medium);
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
}`})};var b,x,w,y,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <Item label="Loading"><VideoPreview badge="loading" /></Item>
          <Item label="Default"><VideoPreview badge="none" /></Item>
          <Item label="Hover"><VideoPreview badge="hover" /></Item>
          <Item label="Remove"><VideoPreview badge="remove" /></Item>
          <Item label="Error"><VideoPreview badge="error" /></Item>
          <Item label="Retry"><VideoPreview badge="retry" /></Item>
        </Row>
      </Section>
    </div>
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"Composer preview — every badge state.",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var I,f,S,M,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:"Delivered — single, grids, overflow, sent and received.",...(A=(M=s.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var C,_,R,V,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(_=o.parameters)==null?void 0:_.docs)==null?void 0:R.source},description:{story:"In search — video tiles with play + duration, and a conversation result.",...(P=(V=o.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var k,D,B,E,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "VideoPreview",
    desc: "Composer thumbnail with a centered play overlay and the single-slot corner badge."
  }, {
    name: "MultiAttachmentBubble",
    desc: "Delivered video grid — every tile carries a play overlay; “+N” for overflow."
  }, {
    name: "SearchBar",
    desc: "Design-system search input used by the Videos filter."
  }, {
    name: "MediaTile",
    desc: "Search video tile with play overlay + duration badge."
  }]} html={\`<!-- Composer preview -->
<div class="ma-video-preview">
  <img class="ma-video-preview__img" src="clip.jpg" alt="" />
  <span class="ma-play">play_arrow</span>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- In search — Videos filter tile -->
<div class="ma-tile">
  <img src="clip.jpg" alt="" />
  <span class="ma-tile__play">play_arrow</span>
  <span class="ma-tile__duration">0:12</span>
</div>\`} css={\`.ma-video-preview { position: relative; width: 72px; height: 72px; }
.ma-video-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-play {
  position: absolute; inset: 0; margin: auto;
  width: 30px; height: 30px; border-radius: var(--cometchat-radius-max);
  background: color-mix(in srgb, var(--cometchat-static-black) 45%, transparent);
  color: var(--cometchat-static-white);
}

.ma-tile { position: relative; aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-tile__duration {
  position: absolute; left: 6px; bottom: 6px;
  padding: 1px var(--cometchat-spacing-1-5);
  border-radius: var(--cometchat-radius-1);
  font: var(--cometchat-font-caption2-medium);
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
}\`} />
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"Usage — HTML structure + token CSS.",...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};const Q=["InComposer","InMessage","InSearch","Usage"];export{n as InComposer,s as InMessage,o as InSearch,l as Usage,Q as __namedExportsOrder,J as default};
