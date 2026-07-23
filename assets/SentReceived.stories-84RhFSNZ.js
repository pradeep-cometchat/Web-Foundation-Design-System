import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as Ve}from"./index-ClcD9ViR.js";import{b as i,m as s,L as t,h as n,M as a,n as Je,U as ze}from"./_shared-tknUeeqK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const na={title:"Core Components/Message Composer/Multi Attachments/Sent & Received",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`**Multi Attachments — Sent & Received.** How attachments render in the
conversation once sent.

Every **format goes separately** — images, videos, documents and audio each
become their own message bubble, stacked one below another. Multiple items of
the same format group into a grid (an image grid, a video grid); different
formats never share a bubble. A caption or a quoted reply attaches to a single
bubble.`}}}};function C({variant:r}){return e.jsxs(n,{variant:r,children:[e.jsx(a,{variant:r,images:3,showMeta:!1}),e.jsx(a,{variant:r,images:2,videoAt:[0,1],showMeta:!1}),e.jsx(a,{variant:r,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:r,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})}const S={name:"Multiple Formats",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(C,{variant:"received"}),e.jsx(C,{variant:"sent"})]})},d={name:"Image Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:7})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,totalImages:7})})]})},c={name:"Video Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,videoAt:[0,1,2,3],totalImages:6})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,videoAt:[0,1,2,3],totalImages:6})})]})},j=[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"}],A=[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"}],l={name:"3+ Files (Show More)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{children:'Documents — collapsed, click "Show more"'}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"},{kind:"doc",name:"Notes.docx",meta:"120 KB · DOCX"},{kind:"ppt",name:"Kickoff_deck.pptx",meta:"5.1 MB · PPTX"},{kind:"zip",name:"Assets.zip",meta:"18 MB · ZIP"}]})}),e.jsx(t,{children:"Audio"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"},{kind:"audio",name:"Voice-note.mp3",meta:"00:18"},{kind:"audio",name:"Interview.mp3",meta:"12:03"},{kind:"audio",name:"Demo-take.mp3",meta:"02:47"}]})})]})},m={name:"Multiple Documents",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{children:"Default"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[...j]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...j]})}),e.jsx(t,{children:"With caption"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...j],caption:"Specs + the component list 📎"})}),e.jsx(t,{children:"Quoted (reply)"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",text:"can you send the docs?"},files:[...j]})})]})},p={name:"Multiple Audio",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{children:"Default"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[...A]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...A]})}),e.jsx(t,{children:"With caption"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...A],caption:"Both takes 🎧"})}),e.jsx(t,{children:"Quoted (reply)"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"audio",count:2}},files:[...A]})})]})},u={name:"With Caption",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Everything from the review 👆"})}),e.jsxs(n,{variant:"sent",children:[e.jsx(a,{variant:"sent",images:3,showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}],caption:"Everything from the review 👆"})]})]})},v={name:"Quoted (Reply)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"Priya Nair",media:{kind:"file",count:3}},files:[{kind:"pdf",name:"Signed.pdf",meta:"12 Jun · 1.1 MB"}]})})]})},b={name:"Uploading & Failed",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(t,{children:"Uploading"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,state:"uploading"})}),e.jsx(t,{children:"Failed (error)"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"failed"})}),e.jsx(t,{children:"Retry"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"retry"})})]})},g={name:"Receipt States",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{children:"Sent"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"sent"})}),e.jsx(t,{children:"Delivered"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"delivered"})}),e.jsx(t,{children:"Read"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"read"})})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(t,{children:"Received · downloading"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,state:"downloading"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})]})},k={name:"Unsupported File",parameters:{controls:{disable:!0}},render:function(){const[Xe,y]=Ve.useState(!1),o=()=>y(!0);return e.jsxs(s,{children:[e.jsx(t,{children:"Single (click a thumbnail)"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:1,unsupported:!0,onUnsupportedClick:o})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:1,unsupported:!0,onUnsupportedClick:o})}),e.jsx(t,{children:"Grid"}),e.jsxs(n,{variant:"received",children:[e.jsx(a,{variant:"received",images:4,unsupported:!0,showMeta:!1,onUnsupportedClick:o}),e.jsx(a,{variant:"received",images:3,unsupported:!0,onUnsupportedClick:o})]}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,unsupported:!0,onUnsupportedClick:o})}),e.jsx(t,{children:"Files & audio"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",unsupported:!0,files:[{kind:"file",name:"data.bin",meta:"FILE"},{kind:"ppt",name:"slides.key",meta:"FILE"},{kind:"audio",name:"clip.opus",meta:"FILE"}]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",unsupported:!0,files:[{kind:"file",name:"archive.rar",meta:"FILE"}]})}),e.jsx(Je,{open:Xe,onClose:()=>y(!1)})]})}},f={name:"Forwarded & Edited",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(i,{}),e.jsx(t,{children:"Forwarded"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",forwarded:!0,images:2})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",forwarded:!0,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(t,{children:"Edited"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",edited:!0,images:1,caption:"updated the caption ✍️"})})]})},x={name:"All States",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsx(i,{}),e.jsxs(s,{children:[e.jsx(t,{children:"Multiple formats (separate)"}),e.jsx(C,{variant:"sent"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"With caption"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Review pack 👆"})}),e.jsx(t,{children:"Quoted — reply to 6 images"}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(t,{children:"Quoted — reply to 6 videos"}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})})]})]})},M={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(ze,{composed:[{name:"MessageStack",desc:"Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side."},{name:"MultiAttachmentBubble",desc:"One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt."},{name:"DownloadRing",desc:"Determinate progress ring shown while a received attachment downloads."}],html:`<!-- Multiple formats — each format is its OWN bubble, stacked -->
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
</div>`,css:`
        .ma-stack {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ma-stack--sent {
          align-items: flex-end;
        }
        .ma-stack--received {
          align-items: flex-start;
        }

        .ma-bubble {
          width: fit-content;
          padding: var(--cometchat-spacing-2);
          border-radius: var(--cometchat-radius-3);
          display: flex;
          flex-direction: column;
          gap: var(--cometchat-spacing-1);
        }
        .ma-bubble--sent {
          background: var(--cometchat-send-bubble-background);
        }
        .ma-bubble--received {
          background: var(--cometchat-received-bubble-background);
        }

        .ma-quote {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-2-5);
          border-radius: var(--cometchat-radius-1-5);
          background: color-mix(
            in srgb,
            var(--cometchat-static-white) 16%,
            transparent
          );
        }
        .ma-quote__bar {
          width: 3px;
          border-radius: var(--cometchat-radius);
          background: var(--cometchat-static-white);
        }
        .ma-quote__name {
          font: var(--cometchat-font-caption1-semibold);
          color: var(--cometchat-static-white);
        }
        .ma-quote__summary {
          font: var(--cometchat-font-caption1-regular);
          color: color-mix(
            in srgb,
            var(--cometchat-static-white) 70%,
            transparent
          );
        }

        .ma-bubble__caption {
          font: var(--cometchat-font-body-regular);
          color: var(--cometchat-static-white);
        }
        .ma-bubble__meta {
          align-self: flex-end;
          font: var(--cometchat-font-caption1-regular);
          color: color-mix(
            in srgb,
            var(--cometchat-static-white) 70%,
            transparent
          );
        }
      `})};var w,B,_;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(B=S.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var L,D,R,I,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Image Grid (4+)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} totalImages={7} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} totalImages={7} />
      </MessageStack>
    </ChatCanvas>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source},description:{story:'Multiple images collapse into a grid within one bubble ("+N" past four).',...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var F,q,U,O,Q;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Video Grid (4+)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} />
      </MessageStack>
    </ChatCanvas>
}`,...(U=(q=c.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"Multiple videos collapse into their own grid (play overlay on every tile).",...(Q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Q.description}}};var G,T,K,W,P;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(T=l.parameters)==null?void 0:T.docs)==null?void 0:K.source},description:{story:`3+ documents or audio clips collapse to three cards with a "Show N more"
 control that expands the bubble (click it in the canvas). Media grids keep
 the "+N" overlay instead.`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.description}}};var N,X,V,J,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(X=m.parameters)==null?void 0:X.docs)==null?void 0:V.source},description:{story:`Several documents — ONE bubble; each document is a washed card inside it.
 With a caption it sits under the cards; a reply quote sits above them.`,...(z=(J=m.parameters)==null?void 0:J.docs)==null?void 0:z.description}}};var H,Z,Y,$,ee;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:Y.source},description:{story:"Several audio clips — like documents, one bubble with a card per clip.",...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,ne,te,se,ie;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:`Multiple attachments with a caption — an image album, and a stacked send
 where the caption attaches to the last bubble.`,...(ie=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var re,oe,de,ce,le;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:de.source},description:{story:`Replying **to** a multi-attachment message. The quoted preview summarises the
 original — "Reply to {name}" + an icon + "6 Images · hello" / "6 Videos".`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var me,pe,ue,ve,be;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Uploading & Failed",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Uploading</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} state="uploading" />
      </MessageStack>
      <Label>Failed (error)</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={2} state="failed" />
      </MessageStack>
      <Label>Retry</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={2} state="retry" />
      </MessageStack>
    </ChatCanvas>
}`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Uploading and failed delivery states.",...(be=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:be.description}}};var ge,he,ke,fe,xe;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Receipt States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label>Sent</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="sent" />
      </MessageStack>
      <Label>Delivered</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="delivered" />
      </MessageStack>
      <Label>Read</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="read" />
      </MessageStack>
    </ChatCanvas>
}`,...(ke=(he=g.parameters)==null?void 0:he.docs)==null?void 0:ke.source},description:{story:"Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue).",...(xe=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:xe.description}}};var Me,Se,je,Ae,Ce;h.parameters={...h.parameters,docs:{...(Me=h.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Received · downloading</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} state="downloading" />
      </MessageStack>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" state="downloading" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} />
      </MessageStack>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" state="downloading" files={[{
        kind: "audio",
        name: "Audio.mp3",
        meta: "00:32"
      }]} />
      </MessageStack>
    </ChatCanvas>
}`,...(je=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:je.source},description:{story:"Downloading — a received attachment being fetched (progress ring).",...(Ce=(Ae=h.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.description}}};var ye,we,Be,_e,Le;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "Unsupported File",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => setDialogOpen(true);
    return <ChatCanvas>
        <Label>Single (click a thumbnail)</Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={1} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" images={1} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <Label>Grid</Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={4} unsupported showMeta={false} onUnsupportedClick={openDialog} />
          <MultiAttachmentBubble variant="received" images={3} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" images={4} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <Label>Files & audio</Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" unsupported files={[{
          kind: "file",
          name: "data.bin",
          meta: "FILE"
        }, {
          kind: "ppt",
          name: "slides.key",
          meta: "FILE"
        }, {
          kind: "audio",
          name: "clip.opus",
          meta: "FILE"
        }]} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" unsupported files={[{
          kind: "file",
          name: "archive.rar",
          meta: "FILE"
        }]} />
        </MessageStack>
        <UnsupportedFileDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </ChatCanvas>;
  }
}`,...(Be=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Be.source},description:{story:`Unsupported / undecodable attachments — image & video thumbnails fall back
 to the generic "?" file placeholder; documents and audio show the "?" icon
 with a download control.`,...(Le=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Le.description}}};var De,Re,Ie,Ee,Fe;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "Forwarded & Edited",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label>Forwarded</Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" forwarded images={2} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" forwarded files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} />
      </MessageStack>
      <Label>Edited</Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" edited images={1} caption="updated the caption ✍️" />
      </MessageStack>
    </ChatCanvas>
}`,...(Ie=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source},description:{story:"Forwarded and edited markers.",...(Fe=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.description}}};var qe,Ue,Oe,Qe,Ge;x.parameters={...x.parameters,docs:{...(qe=x.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Review pack 👆" />
        </MessageStack>
        <Label>Quoted — reply to 6 images</Label>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" quoted={{
          name: "George Alan",
          media: {
            kind: "image",
            count: 6,
            caption: "hello"
          }
        }} caption="These look great! 🙌" />
        </MessageStack>
        <Label>Quoted — reply to 6 videos</Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" quoted={{
          name: "George Alan",
          media: {
            kind: "video",
            count: 6
          }
        }} caption="On it 👍" />
        </MessageStack>
      </ChatCanvas>
    </div>
}`,...(Oe=(Ue=x.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source},description:{story:"Every state together.",...(Ge=(Qe=x.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.description}}};var Te,Ke,We,Pe,Ne;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
</div>\`} css={\`
        .ma-stack {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ma-stack--sent {
          align-items: flex-end;
        }
        .ma-stack--received {
          align-items: flex-start;
        }

        .ma-bubble {
          width: fit-content;
          padding: var(--cometchat-spacing-2);
          border-radius: var(--cometchat-radius-3);
          display: flex;
          flex-direction: column;
          gap: var(--cometchat-spacing-1);
        }
        .ma-bubble--sent {
          background: var(--cometchat-send-bubble-background);
        }
        .ma-bubble--received {
          background: var(--cometchat-received-bubble-background);
        }

        .ma-quote {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2) var(--cometchat-spacing-2-5);
          border-radius: var(--cometchat-radius-1-5);
          background: color-mix(
            in srgb,
            var(--cometchat-static-white) 16%,
            transparent
          );
        }
        .ma-quote__bar {
          width: 3px;
          border-radius: var(--cometchat-radius);
          background: var(--cometchat-static-white);
        }
        .ma-quote__name {
          font: var(--cometchat-font-caption1-semibold);
          color: var(--cometchat-static-white);
        }
        .ma-quote__summary {
          font: var(--cometchat-font-caption1-regular);
          color: color-mix(
            in srgb,
            var(--cometchat-static-white) 70%,
            transparent
          );
        }

        .ma-bubble__caption {
          font: var(--cometchat-font-body-regular);
          color: var(--cometchat-static-white);
        }
        .ma-bubble__meta {
          align-self: flex-end;
          font: var(--cometchat-font-caption1-regular);
          color: color-mix(
            in srgb,
            var(--cometchat-static-white) 70%,
            transparent
          );
        }
      \`} />
}`,...(We=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:We.source},description:{story:"Usage — HTML structure + token CSS.",...(Ne=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.description}}};const ta=["MultipleFormats","ImageGrid","VideoGrid","ExpandableFiles","Documents","MultipleAudio","WithCaption","Quoted","DeliveryStates","ReceiptStates","Downloading","Unsupported","ForwardedEdited","AllStates","Usage"];export{x as AllStates,b as DeliveryStates,m as Documents,h as Downloading,l as ExpandableFiles,f as ForwardedEdited,d as ImageGrid,p as MultipleAudio,S as MultipleFormats,v as Quoted,g as ReceiptStates,k as Unsupported,M as Usage,c as VideoGrid,u as WithCaption,ta as __namedExportsOrder,na as default};
