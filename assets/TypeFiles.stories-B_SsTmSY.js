import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as P,S as m,R as c,I as a,D as t,e as p,d as i,M as s,P as w,f as C,g as R,h as F,j as o}from"./_shared-l0Q3ErMB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const O={title:"Core Components/Message Composer/Multi Attachments/Types/Files",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**File attachment — all states.** Documents (PDF / DOC / XLS) across the
composer (loading → default → hover → remove → error), delivered as stacked
file cards (single, multiple, uploading, failed), and as a search list.`}}}},r={name:"In Composer",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:40},children:[e.jsx(P,{}),e.jsx(m,{title:"States",children:e.jsxs(c,{gap:16,children:[e.jsx(a,{label:"Loading",children:e.jsx(t,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Default",children:e.jsx(t,{badge:"none",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Hover",children:e.jsx(t,{badge:"hover",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Remove",children:e.jsx(t,{badge:"remove",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})}),e.jsx(a,{label:"Error",children:e.jsx(t,{badge:"error",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})})]})}),e.jsx(m,{title:"File types",children:e.jsxs(c,{gap:16,children:[e.jsx(a,{label:"PDF",children:e.jsx(t,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"})}),e.jsx(a,{label:"DOC",children:e.jsx(t,{badge:"hover",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})}),e.jsx(a,{label:"XLS",children:e.jsx(t,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"})})]})})]})},d={name:"In Message",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(P,{}),e.jsxs(c,{gap:24,children:[["sent","received"].map(n=>e.jsxs(p,{width:320,children:[e.jsx(a,{label:`${n} · single`,children:e.jsx(i,{variant:n,children:e.jsx(s,{variant:n,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}]})})}),e.jsx(a,{label:`${n} · multiple (separate bubbles)`,children:e.jsxs(i,{variant:n,children:[e.jsx(s,{variant:n,files:[{kind:"pdf",name:"Contract.pdf",meta:"12 Jun · 1.2 MB"}],showMeta:!1}),e.jsx(s,{variant:n,files:[{kind:"doc",name:"Notes.docx",meta:"12 Jun · 340 KB"}],showMeta:!1}),e.jsx(s,{variant:n,files:[{kind:"xls",name:"Budget.xlsx",meta:"12 Jun · 812 KB"}]})]})})]},n)),e.jsxs(p,{width:320,children:[e.jsx(a,{label:"uploading",children:e.jsx(i,{variant:"sent",children:e.jsx(s,{variant:"sent",state:"uploading",files:[{kind:"pdf",name:"Deck.pdf",meta:"6.1 MB"}]})})}),e.jsx(a,{label:"failed",children:e.jsx(i,{variant:"sent",children:e.jsx(s,{variant:"sent",state:"failed",files:[{kind:"pdf",name:"Deck.pdf",meta:"6.1 MB"}]})})})]})]})]})},l={name:"In Search",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24},children:e.jsx(m,{title:"Document results",children:e.jsxs(w,{children:[e.jsx(C,{value:"review",active:"Documents"}),e.jsx(R,{}),e.jsx(F,{children:"Documents"}),e.jsx(o,{name:"Q3-Report.pdf",meta:"2.4 MB",type:"pdf",from:"You"}),e.jsx(o,{name:"Notes.docx",meta:"340 KB",type:"doc",from:"Priya"}),e.jsx(o,{name:"Budget.xlsx",meta:"812 KB",type:"xls",from:"Marketing"})]})})})};var u,f,x,v,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    gap: 40
  }}>
      <SpinKeyframes />
      <Section title="States">
        <Row gap={16}>
          <Item label="Loading"><DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Default"><DocumentPreview badge="none" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Hover"><DocumentPreview badge="hover" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Remove"><DocumentPreview badge="remove" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Error"><DocumentPreview badge="error" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Composer preview — every badge state, plus the three file types.",...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var h,b,D,j,M;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
              kind: "pdf",
              name: "Q3-Report.pdf",
              meta: "12 Jun · 2.4 MB"
            }]} />
              </MessageStack>
            </Item>
            <Item label={\`\${v} · multiple (separate bubbles)\`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{
              kind: "pdf",
              name: "Contract.pdf",
              meta: "12 Jun · 1.2 MB"
            }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{
              kind: "doc",
              name: "Notes.docx",
              meta: "12 Jun · 340 KB"
            }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{
              kind: "xls",
              name: "Budget.xlsx",
              meta: "12 Jun · 812 KB"
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
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:"Delivered — single card, several stacked, uploading and failed.",...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};var B,y,k,I,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "In Search",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
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
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"In search — the Documents filter renders a file list.",...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.description}}};const Q=["InComposer","InMessage","InSearch"];export{r as InComposer,d as InMessage,l as InSearch,Q as __namedExportsOrder,O as default};
