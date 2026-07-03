import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as g,S as h,C as o,c as a,V as t,D as r,A as p,a as s,U as Q}from"./_shared-gpEOlAGR.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Z={title:"Core Components/Message Composer/Multi Attachments/In Composer",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Composer.** How a batch of mixed attachments looks
while queued in the message composer, before the message is sent. Previews
sit in a horizontally scrollable strip between the input and the toolbar.`}}}},n={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{}),e.jsxs(o,{children:[e.jsx(a,{badge:"hover"}),e.jsx(t,{badge:"hover"}),e.jsx(r,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(r,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"}),e.jsx(p,{badge:"hover"})]})]})},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{}),e.jsxs(o,{children:[e.jsx(a,{badge:"loading"}),e.jsx(t,{badge:"loading",src:s[1]}),e.jsx(r,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(p,{badge:"loading"})]})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{}),e.jsxs(o,{children:[e.jsx(a,{badge:"none"}),e.jsx(t,{badge:"error"}),e.jsx(r,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{}),e.jsxs(o,{children:[e.jsx(a,{badge:"hover",src:s[0]}),e.jsx(a,{badge:"hover",src:s[1]}),e.jsx(t,{badge:"hover",src:s[2]}),e.jsx(a,{badge:"hover",src:s[3]}),e.jsx(r,{badge:"hover",name:"Contract.pdf",type:"pdf",meta:"PDF · 1.2 MB"}),e.jsx(r,{badge:"hover",name:"Sheet.xlsx",type:"xls",meta:"XLS · 96 KB"}),e.jsx(p,{badge:"hover"})]})]})},l={name:"All States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)"},children:[e.jsx(g,{}),e.jsx(h,{title:"Mixed batch",children:e.jsxs(o,{children:[e.jsx(a,{badge:"hover"}),e.jsx(t,{badge:"hover"}),e.jsx(r,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(p,{badge:"hover"})]})}),e.jsx(h,{title:"Uploading",children:e.jsxs(o,{children:[e.jsx(a,{badge:"loading"}),e.jsx(t,{badge:"loading",src:s[1]}),e.jsx(r,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(p,{badge:"loading"})]})}),e.jsx(h,{title:"Error",children:e.jsxs(o,{children:[e.jsx(a,{badge:"none"}),e.jsx(t,{badge:"error"}),e.jsx(r,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})})]})},m={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(Q,{composed:[{name:"ComposerShell",desc:"Message composer with the horizontal, scrollable attachment preview strip."},{name:"ImagePreview / VideoPreview",desc:"72px media thumbnails; video carries a play overlay."},{name:"DocumentPreview / AudioPreview",desc:"File and audio chips at the same 72px height."},{name:"Badge",desc:"Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure."}],html:`<!-- Composer with attachment strip -->
<div class="ma-composer">
  <input class="ma-composer__input" placeholder="Type your message..." />

  <div class="ma-composer__strip">
    <div class="ma-image-preview">
      <img src="photo.jpg" alt="" />
      <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
    </div>
    <div class="ma-doc-preview"><!-- file chip --></div>
    <div class="ma-audio-preview"><!-- audio chip --></div>
  </div>

  <div class="ma-composer__toolbar">
    <button class="ma-composer__attach" aria-label="Attach">add_circle</button>
    <button class="ma-composer__send" aria-label="Send">send</button>
  </div>
</div>`,css:`.ma-composer {
  display: flex; flex-direction: column;
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
}
.ma-composer__input {
  padding: var(--cometchat-spacing-3);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}
.ma-composer__input::placeholder { color: var(--cometchat-text-color-placeholder); }

/* The strip scrolls horizontally; top padding keeps corner badges unclipped */
.ma-composer__strip {
  display: flex; gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5);
  overflow-x: auto; scrollbar-width: none;
}

.ma-composer__toolbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--cometchat-spacing-1-5) var(--cometchat-spacing-3);
  border-top: 1px solid var(--cometchat-border-color-light);
}
.ma-composer__send {
  width: 36px; height: 36px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  box-shadow: var(--cometchat-shadow-xs);
}`})};var v,b,u,x,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
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
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source},description:{story:"A full mixed batch — images, video, document and audio queued together.",...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var y,S,f,P,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="loading" />
        <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
        <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
        <AudioPreview badge="loading" />
      </ComposerShell>
    </div>
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Uploading — some attachments still in flight (spinner badge).",...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var _,D,M,A,C;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="none" />
        <VideoPreview badge="error" />
        <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
      </ComposerShell>
    </div>
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Error — one attachment failed to upload (error badge).",...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var B,E,I,k,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
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
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"Overflow — many attachments; the strip scrolls horizontally.",...(K=(k=d.parameters)==null?void 0:k.docs)==null?void 0:K.description}}};var F,L,U,V,O;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-10)",
    padding: "var(--cometchat-spacing-6)"
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
          <ImagePreview badge="loading" />
          <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
          <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
          <AudioPreview badge="loading" />
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
}`,...(U=(L=l.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Every composer state stacked for review.",...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};var G,R,z,T,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "ComposerShell",
    desc: "Message composer with the horizontal, scrollable attachment preview strip."
  }, {
    name: "ImagePreview / VideoPreview",
    desc: "72px media thumbnails; video carries a play overlay."
  }, {
    name: "DocumentPreview / AudioPreview",
    desc: "File and audio chips at the same 72px height."
  }, {
    name: "Badge",
    desc: "Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure."
  }]} html={\`<!-- Composer with attachment strip -->
<div class="ma-composer">
  <input class="ma-composer__input" placeholder="Type your message..." />

  <div class="ma-composer__strip">
    <div class="ma-image-preview">
      <img src="photo.jpg" alt="" />
      <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
    </div>
    <div class="ma-doc-preview"><!-- file chip --></div>
    <div class="ma-audio-preview"><!-- audio chip --></div>
  </div>

  <div class="ma-composer__toolbar">
    <button class="ma-composer__attach" aria-label="Attach">add_circle</button>
    <button class="ma-composer__send" aria-label="Send">send</button>
  </div>
</div>\`} css={\`.ma-composer {
  display: flex; flex-direction: column;
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
}
.ma-composer__input {
  padding: var(--cometchat-spacing-3);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}
.ma-composer__input::placeholder { color: var(--cometchat-text-color-placeholder); }

/* The strip scrolls horizontally; top padding keeps corner badges unclipped */
.ma-composer__strip {
  display: flex; gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5);
  overflow-x: auto; scrollbar-width: none;
}

.ma-composer__toolbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--cometchat-spacing-1-5) var(--cometchat-spacing-3);
  border-top: 1px solid var(--cometchat-border-color-light);
}
.ma-composer__send {
  width: 36px; height: 36px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  box-shadow: var(--cometchat-shadow-xs);
}\`} />
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"Usage — HTML structure + token CSS.",...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};const $=["MixedBatch","Uploading","WithError","Overflow","AllStates","Usage"];export{l as AllStates,n as MixedBatch,d as Overflow,c as Uploading,m as Usage,i as WithError,$ as __namedExportsOrder,Z as default};
