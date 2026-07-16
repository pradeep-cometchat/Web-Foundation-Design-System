import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as r,m as s,L as n,h as t,M as a,U as Ge}from"./_shared-DB2Al-PE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Ne={title:"Core Components/Message Composer/Multi Attachments/Sent & Received",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`**Multi Attachments — Sent & Received.** How attachments render in the
conversation once sent.

Every **format goes separately** — images, videos, documents and audio each
become their own message bubble, stacked one below another. Multiple items of
the same format group into a grid (an image grid, a video grid); different
formats never share a bubble. A caption or a quoted reply attaches to a single
bubble.`}}}};function j({variant:i}){return e.jsxs(t,{variant:i,children:[e.jsx(a,{variant:i,images:3,showMeta:!1}),e.jsx(a,{variant:i,images:2,videoAt:[0,1],showMeta:!1}),e.jsx(a,{variant:i,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:i,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})}const x={name:"Multiple Formats",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(j,{variant:"received"}),e.jsx(j,{variant:"sent"})]})},c={name:"Image Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:7})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,totalImages:7})})]})},o={name:"Video Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,videoAt:[0,1,2,3],totalImages:6})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,videoAt:[0,1,2,3],totalImages:6})})]})},M=[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"}],S=[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"}],d={name:"3+ Files (Show More)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{children:'Documents — collapsed, click "Show more"'}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",files:[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"},{kind:"doc",name:"Notes.docx",meta:"120 KB · DOCX"},{kind:"ppt",name:"Kickoff_deck.pptx",meta:"5.1 MB · PPTX"},{kind:"zip",name:"Assets.zip",meta:"18 MB · ZIP"}]})}),e.jsx(n,{children:"Audio"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"},{kind:"audio",name:"Voice-note.mp3",meta:"00:18"},{kind:"audio",name:"Interview.mp3",meta:"12:03"},{kind:"audio",name:"Demo-take.mp3",meta:"02:47"}]})})]})},l={name:"Multiple Documents",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{children:"Default"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",files:[...M]})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...M]})}),e.jsx(n,{children:"With caption"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...M],caption:"Specs + the component list 📎"})}),e.jsx(n,{children:"Quoted (reply)"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",text:"can you send the docs?"},files:[...M]})})]})},m={name:"Multiple Audio",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{children:"Default"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",files:[...S]})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...S]})}),e.jsx(n,{children:"With caption"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...S],caption:"Both takes 🎧"})}),e.jsx(n,{children:"Quoted (reply)"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"audio",count:2}},files:[...S]})})]})},p={name:"With Caption",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Everything from the review 👆"})}),e.jsxs(t,{variant:"sent",children:[e.jsx(a,{variant:"sent",images:3,showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}],caption:"Everything from the review 👆"})]})]})},u={name:"Quoted (Reply)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"Priya Nair",media:{kind:"file",count:3}},files:[{kind:"pdf",name:"Signed.pdf",meta:"12 Jun · 1.1 MB"}]})})]})},v={name:"Uploading & Failed",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Uploading"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,state:"uploading"})}),e.jsx(n,{children:"Failed (error)"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"failed"})}),e.jsx(n,{children:"Retry"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"retry"})})]})},b={name:"Receipt States",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{children:"Sent"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"sent"})}),e.jsx(n,{children:"Delivered"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"delivered"})}),e.jsx(n,{children:"Read"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"read"})})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Received · downloading"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,state:"downloading"})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})]})},g={name:"Forwarded & Edited",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Forwarded"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",forwarded:!0,images:2})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",forwarded:!0,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(n,{children:"Edited"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",edited:!0,images:1,caption:"updated the caption ✍️"})})]})},f={name:"All States",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsx(r,{}),e.jsxs(s,{children:[e.jsx(n,{children:"Multiple formats (separate)"}),e.jsx(j,{variant:"sent"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"With caption"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Review pack 👆"})}),e.jsx(n,{children:"Quoted — reply to 6 images"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(n,{children:"Quoted — reply to 6 videos"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})})]})]})},k={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(Ge,{composed:[{name:"MessageStack",desc:"Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side."},{name:"MultiAttachmentBubble",desc:"One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt."},{name:"DownloadRing",desc:"Determinate progress ring shown while a received attachment downloads."}],html:`<!-- Multiple formats — each format is its OWN bubble, stacked -->
<div class="ma-stack ma-stack--sent">
  <div class="ma-bubble ma-bubble--sent"><!-- image grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- video grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- document card --></div>
  <div class="ma-bubble ma-bubble--sent">
    <!-- audio card -->
    <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
  </div>
</div>

<!-- Quoted reply to a multi-attachment message -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-quote">
    <div class="ma-quote__bar"></div>
    <div>
      <p class="ma-quote__name">Reply to George Alan</p>
      <p class="ma-quote__summary"><span class="icon-rounded">image</span> 6 Images · hello</p>
    </div>
  </div>
  <p class="ma-bubble__caption">These look great! 🙌</p>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`,css:`.ma-stack { display: flex; flex-direction: column; gap: 3px; }
.ma-stack--sent { align-items: flex-end; }
.ma-stack--received { align-items: flex-start; }

.ma-bubble {
  width: fit-content;
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  display: flex; flex-direction: column; gap: var(--cometchat-spacing-1);
}
.ma-bubble--sent { background: var(--cometchat-send-bubble-background); }
.ma-bubble--received { background: var(--cometchat-received-bubble-background); }

.ma-quote {
  display: flex; gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-2-5);
  border-radius: var(--cometchat-radius-1-5);
  background: color-mix(in srgb, var(--cometchat-static-white) 16%, transparent);
}
.ma-quote__bar { width: 3px; border-radius: var(--cometchat-radius); background: var(--cometchat-static-white); }
.ma-quote__name { font: var(--cometchat-font-caption1-semibold); color: var(--cometchat-static-white); }
.ma-quote__summary {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-bubble__caption { font: var(--cometchat-font-body-regular); color: var(--cometchat-static-white); }
.ma-bubble__meta {
  align-self: flex-end;
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`})};var A,y,w;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Multiple Formats",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <SeparateStack variant="received" />
      <SeparateStack variant="sent" />
    </ChatCanvas>
}`,...(w=(y=x.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,B,_,L,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Image Grid (4+)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} totalImages={7} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} totalImages={7} /></MessageStack>
    </ChatCanvas>
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source},description:{story:'Multiple images collapse into a grid within one bubble ("+N" past four).',...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.description}}};var R,q,I,E,Q;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Video Grid (4+)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} /></MessageStack>
    </ChatCanvas>
}`,...(I=(q=o.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:"Multiple videos collapse into their own grid (play overlay on every tile).",...(Q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:Q.description}}};var F,G,O,T,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "3+ Files (Show More)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label>Documents — collapsed, click "Show more"</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" files={[{
        kind: "pdf",
        name: "Design_specs.pdf",
        meta: "2.4 MB · PDF"
      }, {
        kind: "xls",
        name: "Component_list.xlsx",
        meta: "340 KB · XLSX"
      }, {
        kind: "doc",
        name: "Notes.docx",
        meta: "120 KB · DOCX"
      }, {
        kind: "ppt",
        name: "Kickoff_deck.pptx",
        meta: "5.1 MB · PPTX"
      }, {
        kind: "zip",
        name: "Assets.zip",
        meta: "18 MB · ZIP"
      }]} />
      </MessageStack>
      <Label>Audio</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "audio",
        name: "Audio.mp3",
        meta: "00:32"
      }, {
        kind: "audio",
        name: "Recording.m4a",
        meta: "01:14"
      }, {
        kind: "audio",
        name: "Voice-note.mp3",
        meta: "00:18"
      }, {
        kind: "audio",
        name: "Interview.mp3",
        meta: "12:03"
      }, {
        kind: "audio",
        name: "Demo-take.mp3",
        meta: "02:47"
      }]} />
      </MessageStack>
    </ChatCanvas>
}`,...(O=(G=d.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:`3+ documents or audio clips collapse to three cards with a "Show N more"
 control that expands the bubble (click it in the canvas). Media grids keep
 the "+N" overlay instead.`,...(U=(T=d.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var K,W,P,N,X;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Multiple Documents",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label>Default</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" files={[...DOC_SET]} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...DOC_SET]} />
      </MessageStack>
      <Label>With caption</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...DOC_SET]} caption="Specs + the component list 📎" />
      </MessageStack>
      <Label>Quoted (reply)</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{
        name: "George Alan",
        text: "can you send the docs?"
      }} files={[...DOC_SET]} />
      </MessageStack>
    </ChatCanvas>
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:`Several documents — ONE bubble; each document is a washed card inside it.
 With a caption it sits under the cards; a reply quote sits above them.`,...(X=(N=l.parameters)==null?void 0:N.docs)==null?void 0:X.description}}};var V,J,z,H,Z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Multiple Audio",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label>Default</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" files={[...AUDIO_SET]} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...AUDIO_SET]} />
      </MessageStack>
      <Label>With caption</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...AUDIO_SET]} caption="Both takes 🎧" />
      </MessageStack>
      <Label>Quoted (reply)</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{
        name: "George Alan",
        media: {
          kind: "audio",
          count: 2
        }
      }} files={[...AUDIO_SET]} />
      </MessageStack>
    </ChatCanvas>
}`,...(z=(J=m.parameters)==null?void 0:J.docs)==null?void 0:z.source},description:{story:"Several audio clips — like documents, one bubble with a card per clip.",...(Z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Z.description}}};var Y,$,ee,ae,te;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Caption",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Everything from the review 👆" />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={3} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "12 Jun · 2.4 MB"
      }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "audio",
        name: "Audio.mp3",
        meta: "00:32"
      }]} caption="Everything from the review 👆" />
      </MessageStack>
    </ChatCanvas>
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:`Multiple attachments with a caption — an image album, and a stacked send
 where the caption attaches to the last bubble.`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var ne,se,re,ie,ce;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Quoted (Reply)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{
        name: "George Alan",
        media: {
          kind: "image",
          count: 6,
          caption: "hello"
        }
      }} caption="These look great! 🙌" />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" quoted={{
        name: "George Alan",
        media: {
          kind: "video",
          count: 6
        }
      }} caption="On it 👍" />
      </MessageStack>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{
        name: "Priya Nair",
        media: {
          kind: "file",
          count: 3
        }
      }} files={[{
        kind: "pdf",
        name: "Signed.pdf",
        meta: "12 Jun · 1.1 MB"
      }]} />
      </MessageStack>
    </ChatCanvas>
}`,...(re=(se=u.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:`Replying **to** a multi-attachment message. The quoted preview summarises the
 original — "Reply to {name}" + an icon + "6 Images · hello" / "6 Videos".`,...(ce=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var oe,de,le,me,pe;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Uploading & Failed",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Uploading</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} state="uploading" /></MessageStack>
      <Label>Failed (error)</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={2} state="failed" /></MessageStack>
      <Label>Retry</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={2} state="retry" /></MessageStack>
    </ChatCanvas>
}`,...(le=(de=v.parameters)==null?void 0:de.docs)==null?void 0:le.source},description:{story:"Uploading and failed delivery states.",...(pe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ue,ve,be,he,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Receipt States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label>Sent</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="sent" /></MessageStack>
      <Label>Delivered</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="delivered" /></MessageStack>
      <Label>Read</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="read" /></MessageStack>
    </ChatCanvas>
}`,...(be=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:be.source},description:{story:"Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue).",...(ge=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var fe,ke,xe,Me,Se;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Received · downloading</Label>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} state="downloading" /></MessageStack>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" state="downloading" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} /></MessageStack>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" state="downloading" files={[{
        kind: "audio",
        name: "Audio.mp3",
        meta: "00:32"
      }]} /></MessageStack>
    </ChatCanvas>
}`,...(xe=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:xe.source},description:{story:"Downloading — a received attachment being fetched (progress ring).",...(Se=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:Se.description}}};var je,Ae,ye,we,Ce;g.parameters={...g.parameters,docs:{...(je=g.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "Forwarded & Edited",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Forwarded</Label>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" forwarded images={2} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" forwarded files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} /></MessageStack>
      <Label>Edited</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" edited images={1} caption="updated the caption ✍️" /></MessageStack>
    </ChatCanvas>
}`,...(ye=(Ae=g.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source},description:{story:"Forwarded and edited markers.",...(Ce=(we=g.parameters)==null?void 0:we.docs)==null?void 0:Ce.description}}};var Be,_e,Le,De,Re;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    layout: "padded",
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-6)",
    padding: "var(--cometchat-spacing-6)",
    alignItems: "flex-start"
  }}>
      <SpinKeyframes />
      <ChatCanvas>
        <Label>Multiple formats (separate)</Label>
        <SeparateStack variant="sent" />
      </ChatCanvas>
      <ChatCanvas>
        <Label>With caption</Label>
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Review pack 👆" /></MessageStack>
        <Label>Quoted — reply to 6 images</Label>
        <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" quoted={{
          name: "George Alan",
          media: {
            kind: "image",
            count: 6,
            caption: "hello"
          }
        }} caption="These look great! 🙌" /></MessageStack>
        <Label>Quoted — reply to 6 videos</Label>
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" quoted={{
          name: "George Alan",
          media: {
            kind: "video",
            count: 6
          }
        }} caption="On it 👍" /></MessageStack>
      </ChatCanvas>
    </div>
}`,...(Le=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:Le.source},description:{story:"Every state together.",...(Re=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Re.description}}};var qe,Ie,Ee,Qe,Fe;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "MessageStack",
    desc: "Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side."
  }, {
    name: "MultiAttachmentBubble",
    desc: "One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt."
  }, {
    name: "DownloadRing",
    desc: "Determinate progress ring shown while a received attachment downloads."
  }]} html={\`<!-- Multiple formats — each format is its OWN bubble, stacked -->
<div class="ma-stack ma-stack--sent">
  <div class="ma-bubble ma-bubble--sent"><!-- image grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- video grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- document card --></div>
  <div class="ma-bubble ma-bubble--sent">
    <!-- audio card -->
    <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
  </div>
</div>

<!-- Quoted reply to a multi-attachment message -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-quote">
    <div class="ma-quote__bar"></div>
    <div>
      <p class="ma-quote__name">Reply to George Alan</p>
      <p class="ma-quote__summary"><span class="icon-rounded">image</span> 6 Images · hello</p>
    </div>
  </div>
  <p class="ma-bubble__caption">These look great! 🙌</p>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>\`} css={\`.ma-stack { display: flex; flex-direction: column; gap: 3px; }
.ma-stack--sent { align-items: flex-end; }
.ma-stack--received { align-items: flex-start; }

.ma-bubble {
  width: fit-content;
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  display: flex; flex-direction: column; gap: var(--cometchat-spacing-1);
}
.ma-bubble--sent { background: var(--cometchat-send-bubble-background); }
.ma-bubble--received { background: var(--cometchat-received-bubble-background); }

.ma-quote {
  display: flex; gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-2-5);
  border-radius: var(--cometchat-radius-1-5);
  background: color-mix(in srgb, var(--cometchat-static-white) 16%, transparent);
}
.ma-quote__bar { width: 3px; border-radius: var(--cometchat-radius); background: var(--cometchat-static-white); }
.ma-quote__name { font: var(--cometchat-font-caption1-semibold); color: var(--cometchat-static-white); }
.ma-quote__summary {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-bubble__caption { font: var(--cometchat-font-body-regular); color: var(--cometchat-static-white); }
.ma-bubble__meta {
  align-self: flex-end;
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}\`} />
}`,...(Ee=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source},description:{story:"Usage — HTML structure + token CSS.",...(Fe=(Qe=k.parameters)==null?void 0:Qe.docs)==null?void 0:Fe.description}}};const Xe=["MultipleFormats","ImageGrid","VideoGrid","ExpandableFiles","Documents","MultipleAudio","WithCaption","Quoted","DeliveryStates","ReceiptStates","Downloading","ForwardedEdited","AllStates","Usage"];export{f as AllStates,v as DeliveryStates,l as Documents,h as Downloading,d as ExpandableFiles,g as ForwardedEdited,c as ImageGrid,m as MultipleAudio,x as MultipleFormats,u as Quoted,b as ReceiptStates,k as Usage,o as VideoGrid,p as WithCaption,Xe as __namedExportsOrder,Ne as default};
