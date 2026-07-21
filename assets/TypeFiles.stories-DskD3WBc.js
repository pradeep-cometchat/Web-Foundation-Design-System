import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as K,S as m,R as p,I as a,D as t,m as v,h as o,M as d,P as L,o as X,p as O,q as Q,s as l,U as T}from"./_shared-B4utw3i8.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const $={title:"Core Components/Message Composer/Multi Attachments/Types/Files",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**File attachment — all states.** Documents (PDF / DOC / XLS) across the
composer (loading → default → hover → remove → error), delivered as stacked
file cards (single, multiple, uploading, failed), and as a search list.`}}}},s={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)"},children:[e.jsx(K,{}),e.jsx(m,{title:"States",children:e.jsxs(p,{gap:16,children:[e.jsx(a,{label:"Loading",children:e.jsx(t,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Default",children:e.jsx(t,{badge:"none",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Hover",children:e.jsx(t,{badge:"hover",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Remove",children:e.jsx(t,{badge:"remove",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Error",children:e.jsx(t,{badge:"error",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Retry",children:e.jsx(t,{badge:"retry",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})})]})}),e.jsx(m,{title:"File types",children:e.jsxs(p,{gap:16,children:[e.jsx(a,{label:"PDF",children:e.jsx(t,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"})}),e.jsx(a,{label:"DOC",children:e.jsx(t,{badge:"hover",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})}),e.jsx(a,{label:"XLS",children:e.jsx(t,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"})})]})})]})},r={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(K,{}),e.jsxs(p,{gap:24,children:[["sent","received"].map(n=>e.jsxs(v,{width:320,children:[e.jsx(a,{label:`${n} · single`,children:e.jsx(o,{variant:n,children:e.jsx(d,{variant:n,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}]})})}),e.jsx(a,{label:`${n} · multiple (one bubble)`,children:e.jsx(o,{variant:n,children:e.jsx(d,{variant:n,files:[{kind:"pdf",name:"Contract.pdf",meta:"1.2 MB · PDF"},{kind:"doc",name:"Notes.docx",meta:"340 KB · DOCX"},{kind:"xls",name:"Budget.xlsx",meta:"812 KB · XLSX"}]})})})]},n)),e.jsxs(v,{width:320,children:[e.jsx(a,{label:"uploading",children:e.jsx(o,{variant:"sent",children:e.jsx(d,{variant:"sent",state:"uploading",files:[{kind:"pdf",name:"Deck.pdf",meta:"6.1 MB"}]})})}),e.jsx(a,{label:"failed",children:e.jsx(o,{variant:"sent",children:e.jsx(d,{variant:"sent",state:"failed",files:[{kind:"pdf",name:"Deck.pdf",meta:"6.1 MB"}]})})})]})]})]})},c={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsx(m,{title:"Document results",children:e.jsxs(L,{children:[e.jsx(X,{value:"review",active:"Documents"}),e.jsx(O,{}),e.jsx(Q,{children:"Documents"}),e.jsx(l,{name:"Q3-Report.pdf",meta:"2.4 MB",type:"pdf",from:"You"}),e.jsx(l,{name:"Notes.docx",meta:"340 KB",type:"doc",from:"Priya"}),e.jsx(l,{name:"Budget.xlsx",meta:"812 KB",type:"xls",from:"Marketing"})]})})})},i={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(T,{composed:[{name:"DocumentPreview",desc:"Composer file chip — white app-tile icon + name + meta, single-slot corner badge."},{name:"FileTypeIcon",desc:"Per-type document glyph (PDF / DOC / XLS / PPT / ZIP / TXT / generic)."},{name:"MultiAttachmentBubble",desc:"Delivered file card; multiple documents stack as separate bubbles."},{name:"SearchBar",desc:"Design-system search input used by the Documents filter."},{name:"DocumentResult",desc:"Search list row — icon tile, name, size · sharer, download."}],html:`<!-- Composer preview chip -->
<div class="ma-doc-preview">
  <div class="ma-doc-preview__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-doc-preview__text">
    <p class="ma-doc-preview__name">Q3-Report.pdf</p>
    <p class="ma-doc-preview__meta">PDF · 2.4 MB</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — file card in a sent bubble (one document per bubble) -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-file-card">
    <div class="ma-file-card__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
    <div class="ma-file-card__text">
      <p class="ma-file-card__name">Q3-Report.pdf</p>
      <p class="ma-file-card__meta">12 Jun · 2.4 MB</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`,css:`.ma-doc-preview {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  height: 72px; padding: 0 var(--cometchat-spacing-3);
  border-radius: var(--cometchat-radius-2);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-02);
}
.ma-doc-preview__tile, .ma-file-card__tile {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-1-5);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-light);
}
.ma-doc-preview__name { font: var(--cometchat-font-caption1-medium); color: var(--cometchat-text-color-primary); }
.ma-doc-preview__meta { font: var(--cometchat-font-caption2-regular); color: var(--cometchat-text-color-secondary); }

.ma-file-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-file-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-file-card__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`})};var u,f,h,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    gap: "var(--cometchat-spacing-10)"
  }}>
      <SpinKeyframes />
      <Section title="States">
        <Row gap={16}>
          <Item label="Loading"><DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Default"><DocumentPreview badge="none" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Hover"><DocumentPreview badge="hover" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Remove"><DocumentPreview badge="remove" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Error"><DocumentPreview badge="error" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Retry"><DocumentPreview badge="retry" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
        </Row>
      </Section>
      <Section title="File types">
        <Row gap={16}>
          <Item label="PDF"><DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" /></Item>
          <Item label="DOC"><DocumentPreview badge="hover" name="Notes.docx" type="doc" meta="DOC · 340 KB" /></Item>
          <Item label="XLS"><DocumentPreview badge="hover" name="Budget.xlsx" type="xls" meta="XLS · 812 KB" /></Item>
        </Row>
      </Section>
    </div>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Composer preview — every badge state, plus the three file types.",...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var x,D,y,w,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
              kind: "pdf",
              name: "Q3-Report.pdf",
              meta: "12 Jun · 2.4 MB"
            }]} />
              </MessageStack>
            </Item>
            <Item label={\`\${v} · multiple (one bubble)\`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{
              kind: "pdf",
              name: "Contract.pdf",
              meta: "1.2 MB · PDF"
            }, {
              kind: "doc",
              name: "Notes.docx",
              meta: "340 KB · DOCX"
            }, {
              kind: "xls",
              name: "Budget.xlsx",
              meta: "812 KB · XLSX"
            }]} />
              </MessageStack>
            </Item>
          </ChatCanvas>)}
        <ChatCanvas width={320}>
          <Item label="uploading"><MessageStack variant="sent"><MultiAttachmentBubble variant="sent" state="uploading" files={[{
              kind: "pdf",
              name: "Deck.pdf",
              meta: "6.1 MB"
            }]} /></MessageStack></Item>
          <Item label="failed"><MessageStack variant="sent"><MultiAttachmentBubble variant="sent" state="failed" files={[{
              kind: "pdf",
              name: "Deck.pdf",
              meta: "6.1 MB"
            }]} /></MessageStack></Item>
        </ChatCanvas>
      </Row>
    </div>
}`,...(y=(D=r.parameters)==null?void 0:D.docs)==null?void 0:y.source},description:{story:"Delivered — single card, several stacked, uploading and failed.",...(_=(w=r.parameters)==null?void 0:w.docs)==null?void 0:_.description}}};var j,B,M,k,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <Section title="Document results">
        <Panel>
          <SearchHeader value="review" active="Documents" />
          <Divider />
          <ResultsLabel>Documents</ResultsLabel>
          <DocumentResult name="Q3-Report.pdf" meta="2.4 MB" type="pdf" from="You" />
          <DocumentResult name="Notes.docx" meta="340 KB" type="doc" from="Priya" />
          <DocumentResult name="Budget.xlsx" meta="812 KB" type="xls" from="Marketing" />
        </Panel>
      </Section>
    </div>
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source},description:{story:"In search — the Documents filter renders a file list.",...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var S,I,C,R,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "DocumentPreview",
    desc: "Composer file chip — white app-tile icon + name + meta, single-slot corner badge."
  }, {
    name: "FileTypeIcon",
    desc: "Per-type document glyph (PDF / DOC / XLS / PPT / ZIP / TXT / generic)."
  }, {
    name: "MultiAttachmentBubble",
    desc: "Delivered file card; multiple documents stack as separate bubbles."
  }, {
    name: "SearchBar",
    desc: "Design-system search input used by the Documents filter."
  }, {
    name: "DocumentResult",
    desc: "Search list row — icon tile, name, size · sharer, download."
  }]} html={\`<!-- Composer preview chip -->
<div class="ma-doc-preview">
  <div class="ma-doc-preview__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-doc-preview__text">
    <p class="ma-doc-preview__name">Q3-Report.pdf</p>
    <p class="ma-doc-preview__meta">PDF · 2.4 MB</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — file card in a sent bubble (one document per bubble) -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-file-card">
    <div class="ma-file-card__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
    <div class="ma-file-card__text">
      <p class="ma-file-card__name">Q3-Report.pdf</p>
      <p class="ma-file-card__meta">12 Jun · 2.4 MB</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>\`} css={\`.ma-doc-preview {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  height: 72px; padding: 0 var(--cometchat-spacing-3);
  border-radius: var(--cometchat-radius-2);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-02);
}
.ma-doc-preview__tile, .ma-file-card__tile {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-1-5);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-light);
}
.ma-doc-preview__name { font: var(--cometchat-font-caption1-medium); color: var(--cometchat-text-color-primary); }
.ma-doc-preview__meta { font: var(--cometchat-font-caption2-regular); color: var(--cometchat-text-color-secondary); }

.ma-file-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-file-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-file-card__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}\`} />
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source},description:{story:"Usage — HTML structure + token CSS.",...(F=(R=i.parameters)==null?void 0:R.docs)==null?void 0:F.description}}};const z=["InComposer","InMessage","InSearch","Usage"];export{s as InComposer,r as InMessage,c as InSearch,i as Usage,z as __namedExportsOrder,$ as default};
