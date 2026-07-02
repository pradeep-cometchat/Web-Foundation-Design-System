import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as p,S as g,C as a,c as r,V as m,D as n,A as c,a as o}from"./_shared-BqpVJyLP.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const X={title:"Core Components/Message Composer/Multi Attachments/In Composer",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Composer.** How a batch of mixed attachments looks
while queued in the message composer, before the message is sent. Previews
sit in a horizontally scrollable strip between the input and the toolbar.`}}}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(p,{}),e.jsxs(a,{children:[e.jsx(r,{badge:"hover"}),e.jsx(m,{badge:"hover"}),e.jsx(n,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(n,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"}),e.jsx(c,{badge:"hover"})]})]})},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(p,{}),e.jsxs(a,{children:[e.jsx(r,{badge:"none"}),e.jsx(r,{badge:"loading",src:o[1]}),e.jsx(n,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(c,{badge:"none"})]})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(p,{}),e.jsxs(a,{children:[e.jsx(r,{badge:"none"}),e.jsx(m,{badge:"error"}),e.jsx(n,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx(p,{}),e.jsxs(a,{children:[e.jsx(r,{badge:"hover",src:o[0]}),e.jsx(r,{badge:"hover",src:o[1]}),e.jsx(m,{badge:"hover",src:o[2]}),e.jsx(r,{badge:"hover",src:o[3]}),e.jsx(n,{badge:"hover",name:"Contract.pdf",type:"pdf",meta:"PDF · 1.2 MB"}),e.jsx(n,{badge:"hover",name:"Sheet.xlsx",type:"xls",meta:"XLS · 96 KB"}),e.jsx(c,{badge:"hover"})]})]})},l={name:"All States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40,padding:24},children:[e.jsx(p,{}),e.jsx(g,{title:"Mixed batch",children:e.jsxs(a,{children:[e.jsx(r,{badge:"hover"}),e.jsx(m,{badge:"hover"}),e.jsx(n,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(c,{badge:"hover"})]})}),e.jsx(g,{title:"Uploading",children:e.jsxs(a,{children:[e.jsx(r,{badge:"none"}),e.jsx(r,{badge:"loading",src:o[1]}),e.jsx(n,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"})]})}),e.jsx(g,{title:"Error",children:e.jsxs(a,{children:[e.jsx(r,{badge:"none"}),e.jsx(m,{badge:"error"}),e.jsx(n,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})})]})};var h,v,b,x,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" />
        <VideoPreview badge="hover" />
        <DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" />
        <DocumentPreview badge="hover" name="Budget.xlsx" type="xls" meta="XLS · 812 KB" />
        <AudioPreview badge="hover" />
      </ComposerShell>
    </div>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"A full mixed batch — images, video, document and audio queued together.",...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var S,j,P,y,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="none" />
        <ImagePreview badge="loading" src={SAMPLE_IMAGES[1]} />
        <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
        <AudioPreview badge="none" />
      </ComposerShell>
    </div>
}`,...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.source},description:{story:"Uploading — some attachments still in flight (spinner badge).",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var w,D,M,A,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="none" />
        <VideoPreview badge="error" />
        <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
      </ComposerShell>
    </div>
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Error — one attachment failed to upload (error badge).",...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var B,E,I,K,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[0]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[1]} />
        <VideoPreview badge="hover" src={SAMPLE_IMAGES[2]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[3]} />
        <DocumentPreview badge="hover" name="Contract.pdf" type="pdf" meta="PDF · 1.2 MB" />
        <DocumentPreview badge="hover" name="Sheet.xlsx" type="xls" meta="XLS · 96 KB" />
        <AudioPreview badge="hover" />
      </ComposerShell>
    </div>
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"Overflow — many attachments; the strip scrolls horizontally.",...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.description}}};var F,_,O,G,V;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 40,
    padding: 24
  }}>
      <SpinKeyframes />
      <Section title="Mixed batch">
        <ComposerShell>
          <ImagePreview badge="hover" />
          <VideoPreview badge="hover" />
          <DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" />
          <AudioPreview badge="hover" />
        </ComposerShell>
      </Section>
      <Section title="Uploading">
        <ComposerShell>
          <ImagePreview badge="none" />
          <ImagePreview badge="loading" src={SAMPLE_IMAGES[1]} />
          <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
        </ComposerShell>
      </Section>
      <Section title="Error">
        <ComposerShell>
          <ImagePreview badge="none" />
          <VideoPreview badge="error" />
          <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
        </ComposerShell>
      </Section>
    </div>
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"Every composer state stacked for review.",...(V=(G=l.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};const q=["MixedBatch","Uploading","WithError","Overflow","AllStates"];export{l as AllStates,s as MixedBatch,i as Overflow,t as Uploading,d as WithError,q as __namedExportsOrder,X as default};
