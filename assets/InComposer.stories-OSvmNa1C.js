import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as se}from"./MessagePreview-BQuL-8-I.js";import{b as n,S as u,C as r,d as a,V as s,D as o,A as v,a as t,f as b,M as x,e as ne,U as ie}from"./_shared-B-cAXUmV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const ve={title:"Core Components/Message Composer/Multi Attachments/In Composer",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Composer.** How a batch of mixed attachments looks
while queued in the message composer, before the message is sent. Previews
sit in a horizontally scrollable strip between the input and the toolbar.`}}}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"hover"}),e.jsx(s,{badge:"hover"}),e.jsx(o,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(o,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"}),e.jsx(v,{badge:"hover"})]})]})},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"loading"}),e.jsx(s,{badge:"loading",src:t[1]}),e.jsx(o,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(v,{badge:"loading"})]})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"retry"}),e.jsx(s,{badge:"error"}),e.jsx(o,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})]})},l={name:"Drag & Drop",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs("div",{style:{position:"relative",width:720,maxWidth:"100%",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)",overflow:"hidden",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{flex:1,padding:"var(--cometchat-spacing-4)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(b,{variant:"received",children:e.jsx(x,{variant:"received",images:1,caption:"and here's the hero shot 📸"})}),e.jsx(b,{variant:"sent",children:e.jsx(x,{variant:"sent",caption:"love these 🙌"})})]}),e.jsx("div",{style:{padding:"0 var(--cometchat-spacing-4) var(--cometchat-spacing-4)"},children:e.jsx(r,{children:e.jsx(a,{badge:"hover"})})}),e.jsx(ne,{chatName:"George Alan"})]})})},p={name:"With Reply",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsxs(r,{reply:e.jsx(se,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}),children:[e.jsx(a,{badge:"hover"}),e.jsx(a,{badge:"hover",src:t[1]}),e.jsx(s,{badge:"hover",src:t[2]})]})]})},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"hover",src:t[0]}),e.jsx(a,{badge:"hover",src:t[1]}),e.jsx(s,{badge:"hover",src:t[2]}),e.jsx(a,{badge:"hover",src:t[3]}),e.jsx(o,{badge:"hover",name:"Contract.pdf",type:"pdf",meta:"PDF · 1.2 MB"}),e.jsx(o,{badge:"hover",name:"Sheet.xlsx",type:"xls",meta:"XLS · 96 KB"}),e.jsx(v,{badge:"hover"})]})]})},h={name:"All States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)"},children:[e.jsx(n,{}),e.jsx(u,{title:"Mixed batch",children:e.jsxs(r,{children:[e.jsx(a,{badge:"hover"}),e.jsx(s,{badge:"hover"}),e.jsx(o,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(v,{badge:"hover"})]})}),e.jsx(u,{title:"Uploading",children:e.jsxs(r,{children:[e.jsx(a,{badge:"loading"}),e.jsx(s,{badge:"loading",src:t[1]}),e.jsx(o,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(v,{badge:"loading"})]})}),e.jsx(u,{title:"Error & Retry",children:e.jsxs(r,{children:[e.jsx(a,{badge:"retry"}),e.jsx(s,{badge:"error"}),e.jsx(o,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})})]})},g={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(ie,{composed:[{name:"ComposerShell",desc:"Message composer with the horizontal, scrollable attachment preview strip."},{name:"ImagePreview / VideoPreview",desc:"72px media thumbnails; video carries a play overlay."},{name:"DocumentPreview / AudioPreview",desc:"File and audio chips at the same 72px height."},{name:"Badge",desc:"Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure."}],html:`<!-- Composer with attachment strip -->
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
}`})};var y,w,f,S,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"A full mixed batch — images, video, document and audio queued together.",...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var P,_,D,M,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:"Uploading — some attachments still in flight (spinner badge).",...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var C,k,I,B,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <ImagePreview badge="retry" />
        <VideoPreview badge="error" />
        <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
      </ComposerShell>
    </div>
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"Error — one attachment failed to upload (error badge).",...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var R,K,L,G,F;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Drag & Drop",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <div style={{
      position: "relative",
      width: 720,
      maxWidth: "100%",
      borderRadius: "var(--cometchat-radius-3)",
      border: "1px solid var(--cometchat-border-color-default)",
      background: "var(--cometchat-background-color-02)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        flex: 1,
        padding: "var(--cometchat-spacing-4)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-2)"
      }}>
          <MessageStack variant="received">
            <MultiAttachmentBubble variant="received" images={1} caption="and here's the hero shot 📸" />
          </MessageStack>
          <MessageStack variant="sent">
            <MultiAttachmentBubble variant="sent" caption="love these 🙌" />
          </MessageStack>
        </div>
        <div style={{
        padding: "0 var(--cometchat-spacing-4) var(--cometchat-spacing-4)"
      }}>
          <ComposerShell>
            <ImagePreview badge="hover" />
          </ComposerShell>
        </div>
        <DropOverlay chatName="George Alan" />
      </div>
    </div>
}`,...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:`Dragging files over the chat — a dark full-bleed overlay with the upload
 icon and the destination chat name covers the conversation.`,...(F=(G=l.parameters)==null?void 0:G.docs)==null?void 0:F.description}}};var V,U,O,N,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "With Reply",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-6)"
  }}>
      <SpinKeyframes />
      <ComposerShell reply={<MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />}>
        <ImagePreview badge="hover" />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[1]} />
        <VideoPreview badge="hover" src={SAMPLE_IMAGES[2]} />
      </ComposerShell>
    </div>
}`,...(O=(U=p.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:`Replying — the quoted message (DS MessagePreview) sits above the input
 while attachments are queued.`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};var T,z,q,Q,X;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.source},description:{story:"Overflow — many attachments; the strip scrolls horizontally.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var H,J,Y,Z,$;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      <Section title="Error & Retry">
        <ComposerShell>
          <ImagePreview badge="retry" />
          <VideoPreview badge="error" />
          <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
        </ComposerShell>
      </Section>
    </div>
}`,...(Y=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Y.source},description:{story:"Every composer state stacked for review.",...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,re,oe,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"Usage — HTML structure + token CSS.",...(te=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};const ue=["MixedBatch","Uploading","WithError","DragAndDrop","WithReply","Overflow","AllStates","Usage"];export{h as AllStates,l as DragAndDrop,i as MixedBatch,m as Overflow,c as Uploading,g as Usage,d as WithError,p as WithReply,ue as __namedExportsOrder,ve as default};
