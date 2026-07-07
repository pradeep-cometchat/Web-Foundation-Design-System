import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as fe}from"./MessagePreview-BQuL-8-I.js";import{b as i,S as n,C as r,d as a,V as s,D as o,A as x,a as t,g as xe,h as ye,f,M as S,e as y,U as Se}from"./_shared-D1DhLxwk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Ae={title:"Core Components/Message Composer/Multi Attachments/In Composer",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Multi Attachments — In Composer.** How a batch of mixed attachments looks
while queued in the message composer, before the message is sent. Previews
sit in a horizontally scrollable strip between the input and the toolbar.`}}}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"hover"}),e.jsx(s,{badge:"hover"}),e.jsx(o,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(o,{badge:"hover",name:"Budget.xlsx",type:"xls",meta:"XLS · 812 KB"}),e.jsx(x,{badge:"hover"})]})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"loading"}),e.jsx(s,{badge:"loading",src:t[1]}),e.jsx(o,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(x,{badge:"loading"})]})]})},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"retry"}),e.jsx(s,{badge:"error"}),e.jsx(o,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-6)",maxWidth:760},children:[e.jsx(n,{title:"Single Line Composer",children:e.jsx(xe,{})}),e.jsx(n,{title:"Multi Line Composer",children:e.jsx(ye,{})})]})},m={name:"Drag & Drop (Composer)",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-8)",padding:"var(--cometchat-spacing-6)",maxWidth:760},children:[e.jsx(n,{title:"Single Line Composer",children:e.jsxs("div",{style:{position:"relative",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden"},children:[e.jsx(xe,{}),e.jsx(y,{compact:!0})]})}),e.jsx(n,{title:"Multi Line Composer",children:e.jsxs("div",{style:{position:"relative",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden"},children:[e.jsx(ye,{}),e.jsx(y,{compact:!0})]})})]})},h={name:"Drag & Drop",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:"var(--cometchat-spacing-6)"},children:e.jsxs("div",{style:{position:"relative",width:720,maxWidth:"100%",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)",overflow:"hidden",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{flex:1,padding:"var(--cometchat-spacing-4)",display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(f,{variant:"received",children:e.jsx(S,{variant:"received",images:1,caption:"and here's the hero shot 📸"})}),e.jsx(f,{variant:"sent",children:e.jsx(S,{variant:"sent",caption:"love these 🙌"})})]}),e.jsx("div",{style:{padding:"0 var(--cometchat-spacing-4) var(--cometchat-spacing-4)"},children:e.jsx(r,{children:e.jsx(a,{badge:"hover"})})}),e.jsx(y,{chatName:"George Alan"})]})})},g={name:"With Reply",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsxs(r,{reply:e.jsx(fe,{mode:"reply",senderName:"George Alan",messageText:"Awesome! Can I see a couple of pictures?",onClose:()=>{}}),children:[e.jsx(a,{badge:"hover"}),e.jsx(a,{badge:"hover",src:t[1]}),e.jsx(s,{badge:"hover",src:t[2]})]})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsxs(r,{children:[e.jsx(a,{badge:"hover",src:t[0]}),e.jsx(a,{badge:"hover",src:t[1]}),e.jsx(s,{badge:"hover",src:t[2]}),e.jsx(a,{badge:"hover",src:t[3]}),e.jsx(o,{badge:"hover",name:"Contract.pdf",type:"pdf",meta:"PDF · 1.2 MB"}),e.jsx(o,{badge:"hover",name:"Sheet.xlsx",type:"xls",meta:"XLS · 96 KB"}),e.jsx(x,{badge:"hover"})]})]})},u={name:"All States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)"},children:[e.jsx(i,{}),e.jsx(n,{title:"Mixed batch",children:e.jsxs(r,{children:[e.jsx(a,{badge:"hover"}),e.jsx(s,{badge:"hover"}),e.jsx(o,{badge:"hover",name:"Q3-Report.pdf",type:"pdf",meta:"PDF · 2.4 MB"}),e.jsx(x,{badge:"hover"})]})}),e.jsx(n,{title:"Uploading",children:e.jsxs(r,{children:[e.jsx(a,{badge:"loading"}),e.jsx(s,{badge:"loading",src:t[1]}),e.jsx(o,{badge:"loading",name:"Deck.pdf",type:"pdf",meta:"PDF · 6.1 MB"}),e.jsx(x,{badge:"loading"})]})}),e.jsx(n,{title:"Error & Retry",children:e.jsxs(r,{children:[e.jsx(a,{badge:"retry"}),e.jsx(s,{badge:"error"}),e.jsx(o,{badge:"none",name:"Notes.docx",type:"doc",meta:"DOC · 340 KB"})]})})]})},b={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(Se,{composed:[{name:"ComposerShell",desc:"Message composer with the horizontal, scrollable attachment preview strip."},{name:"ImagePreview / VideoPreview",desc:"72px media thumbnails; video carries a play overlay."},{name:"DocumentPreview / AudioPreview",desc:"File and audio chips at the same 72px height."},{name:"Badge",desc:"Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure."}],html:`<!-- Composer with attachment strip -->
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
</div>`,css:`
        .ma-composer {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--cometchat-border-color-default);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-01);
        }
        .ma-composer__input {
          padding: var(--cometchat-spacing-3);
          font: var(--cometchat-font-body-regular);
          color: var(--cometchat-text-color-primary);
        }
        .ma-composer__input::placeholder {
          color: var(--cometchat-text-color-placeholder);
        }

        /* The strip scrolls horizontally; top padding keeps corner badges unclipped */
        .ma-composer__strip {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ma-composer__toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--cometchat-spacing-1-5) var(--cometchat-spacing-3);
          border-top: 1px solid var(--cometchat-border-color-light);
        }
        .ma-composer__send {
          width: 36px;
          height: 36px;
          border-radius: var(--cometchat-radius-max);
          background: var(--cometchat-background-color-solid);
          color: var(--cometchat-static-white);
          box-shadow: var(--cometchat-shadow-xs);
        }
      `})};var w,j,P,D,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source},description:{story:"A full mixed batch — images, video, document and audio queued together.",...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var M,_,A,L,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:"Uploading — some attachments still in flight (spinner badge).",...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.description}}};var I,B,E,R,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"Error — one attachment failed to upload (error badge).",...(K=(R=l.parameters)==null?void 0:R.docs)==null?void 0:K.description}}};var G,F,O,V,W;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)",
    padding: "var(--cometchat-spacing-6)",
    maxWidth: 760
  }}>
      <Section title="Single Line Composer">
        <SingleLineComposer />
      </Section>
      <Section title="Multi Line Composer">
        <MultiLineComposer />
      </Section>
    </div>
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:`The design-system Single Line and Multi Line composers, empty (no
 attachments) — the base surface for the drag-and-drop states.`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var U,N,T,z,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Drag & Drop (Composer)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-8)",
    padding: "var(--cometchat-spacing-6)",
    maxWidth: 760
  }}>
      <Section title="Single Line Composer">
        <div style={{
        position: "relative",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden"
      }}>
          <SingleLineComposer />
          <DropOverlay compact />
        </div>
      </Section>
      <Section title="Multi Line Composer">
        <div style={{
        position: "relative",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden"
      }}>
          <MultiLineComposer />
          <DropOverlay compact />
        </div>
      </Section>
    </div>
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:`Dragging files onto a single composer — a compact overlay (icon + header
 only) covers just the composer, not the whole chat panel.`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.description}}};var Q,X,H,J,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(H=(X=h.parameters)==null?void 0:X.docs)==null?void 0:H.source},description:{story:`Dragging files over the chat — a dark full-bleed overlay with the upload
 icon and the destination chat name covers the conversation.`,...(Y=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Y.description}}};var Z,$,ee,ae,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:`Replying — the quoted message (DS MessagePreview) sits above the input
 while attachments are queued.`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var oe,te,se,ne,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Overflow — many attachments; the strip scrolls horizontally.",...(ie=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var ce,de,le,pe,me;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=u.parameters)==null?void 0:de.docs)==null?void 0:le.source},description:{story:"Every composer state stacked for review.",...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var he,ge,ve,ue,be;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
</div>\`} css={\`
        .ma-composer {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--cometchat-border-color-default);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-01);
        }
        .ma-composer__input {
          padding: var(--cometchat-spacing-3);
          font: var(--cometchat-font-body-regular);
          color: var(--cometchat-text-color-primary);
        }
        .ma-composer__input::placeholder {
          color: var(--cometchat-text-color-placeholder);
        }

        /* The strip scrolls horizontally; top padding keeps corner badges unclipped */
        .ma-composer__strip {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ma-composer__toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--cometchat-spacing-1-5) var(--cometchat-spacing-3);
          border-top: 1px solid var(--cometchat-border-color-light);
        }
        .ma-composer__send {
          width: 36px;
          height: 36px;
          border-radius: var(--cometchat-radius-max);
          background: var(--cometchat-background-color-solid);
          color: var(--cometchat-static-white);
          box-shadow: var(--cometchat-shadow-xs);
        }
      \`} />
}`,...(ve=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ve.source},description:{story:"Usage — HTML structure + token CSS.",...(be=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:be.description}}};const Le=["MixedBatch","Uploading","WithError","Composers","DragAndDropComposer","DragAndDrop","WithReply","Overflow","AllStates","Usage"];export{u as AllStates,p as Composers,h as DragAndDrop,m as DragAndDropComposer,c as MixedBatch,v as Overflow,d as Uploading,b as Usage,l as WithError,g as WithReply,Le as __namedExportsOrder,Ae as default};
