import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as t}from"./T-C6nayWAE.js";import{r as Je}from"./index-ClcD9ViR.js";import{b as r,n as i,L as s,h as n,M as a,o as ze,U as He}from"./_shared-CyTdT-MQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-DjvCsfWl.js";/* empty css                  */const sa={title:"Core Components/Message Composer/Multi Attachments/Sent & Received",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`**Multi Attachments — Sent & Received.** How attachments render in the
conversation once sent.

Every **format goes separately** — images, videos, documents and audio each
become their own message bubble, stacked one below another. Multiple items of
the same format group into a grid (an image grid, a video grid); different
formats never share a bubble. A caption or a quoted reply attaches to a single
bubble.`}}}};function y({variant:d}){return e.jsxs(n,{variant:d,children:[e.jsx(a,{variant:d,images:3,showMeta:!1}),e.jsx(a,{variant:d,images:2,videoAt:[0,1],showMeta:!1}),e.jsx(a,{variant:d,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:d,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})}const S={name:"Multiple Formats",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(y,{variant:"received"}),e.jsx(y,{variant:"sent"})]})},c={name:"Image Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:7})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,totalImages:7})})]})},l={name:"Video Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,videoAt:[0,1,2,3],totalImages:6})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,videoAt:[0,1,2,3],totalImages:6})})]})},A=[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"}],C=[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"}],m={name:"3+ Files (Show More)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:'Documents — collapsed, click "Show more"'})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[{kind:"pdf",name:"Design_specs.pdf",meta:"2.4 MB · PDF"},{kind:"xls",name:"Component_list.xlsx",meta:"340 KB · XLSX"},{kind:"doc",name:"Notes.docx",meta:"120 KB · DOCX"},{kind:"ppt",name:"Kickoff_deck.pptx",meta:"5.1 MB · PPTX"},{kind:"zip",name:"Assets.zip",meta:"18 MB · ZIP"}]})}),e.jsx(s,{children:e.jsx(t,{children:"Audio"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"},{kind:"audio",name:"Recording.m4a",meta:"01:14"},{kind:"audio",name:"Voice-note.mp3",meta:"00:18"},{kind:"audio",name:"Interview.mp3",meta:"12:03"},{kind:"audio",name:"Demo-take.mp3",meta:"02:47"}]})})]})},p={name:"Multiple Documents",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"Default"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[...A]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...A]})}),e.jsx(s,{children:e.jsx(t,{children:"With caption"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...A],caption:"Specs + the component list 📎"})}),e.jsx(s,{children:e.jsx(t,{children:"Quoted (reply)"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",text:"can you send the docs?"},files:[...A]})})]})},u={name:"Multiple Audio",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"Default"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",files:[...C]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...C]})}),e.jsx(s,{children:e.jsx(t,{children:"With caption"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[...C],caption:"Both takes 🎧"})}),e.jsx(s,{children:e.jsx(t,{children:"Quoted (reply)"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"audio",count:2}},files:[...C]})})]})},v={name:"With Caption",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Everything from the review 👆"})}),e.jsxs(n,{variant:"sent",children:[e.jsx(a,{variant:"sent",images:3,showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}],caption:"Everything from the review 👆"})]})]})},b={name:"Quoted (Reply)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"Priya Nair",media:{kind:"file",count:3}},files:[{kind:"pdf",name:"Signed.pdf",meta:"12 Jun · 1.1 MB"}]})})]})},h={name:"Uploading & Failed",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(s,{children:e.jsx(t,{children:"Uploading"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,state:"uploading"})}),e.jsx(s,{children:e.jsx(t,{children:"Failed (error)"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"failed"})}),e.jsx(s,{children:e.jsx(t,{children:"Retry"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"retry"})})]})},g={name:"Receipt States",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"Sent"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"sent"})}),e.jsx(s,{children:e.jsx(t,{children:"Delivered"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"delivered"})}),e.jsx(s,{children:e.jsx(t,{children:"Read"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"read"})})]})},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(s,{children:e.jsx(t,{children:"Received · downloading"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,state:"downloading"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})]})},k={name:"Unsupported File",parameters:{controls:{disable:!0}},render:function(){const[Ve,w]=Je.useState(!1),o=()=>w(!0);return e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"Single (click a thumbnail)"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:1,unsupported:!0,onUnsupportedClick:o})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:1,unsupported:!0,onUnsupportedClick:o})}),e.jsx(s,{children:e.jsx(t,{children:"Grid"})}),e.jsxs(n,{variant:"received",children:[e.jsx(a,{variant:"received",images:4,unsupported:!0,showMeta:!1,onUnsupportedClick:o}),e.jsx(a,{variant:"received",images:3,unsupported:!0,onUnsupportedClick:o})]}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,unsupported:!0,onUnsupportedClick:o})}),e.jsx(s,{children:e.jsx(t,{children:"Files & audio"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",unsupported:!0,files:[{kind:"file",name:"data.bin",meta:""},{kind:"ppt",name:"slides.key",meta:""},{kind:"audio",name:"clip.opus",meta:""}]})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",unsupported:!0,files:[{kind:"file",name:"archive.rar",meta:""}]})}),e.jsx(ze,{open:Ve,onClose:()=>w(!1)})]})}},f={name:"Forwarded & Edited",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{children:[e.jsx(r,{}),e.jsx(s,{children:e.jsx(t,{children:"Forwarded"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",forwarded:!0,images:2})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",forwarded:!0,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(s,{children:e.jsx(t,{children:"Edited"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",edited:!0,images:1,caption:"updated the caption ✍️"})})]})},M={name:"All States",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-6)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsx(r,{}),e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"Multiple formats (separate)"})}),e.jsx(y,{variant:"sent"})]}),e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{children:"With caption"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Review pack 👆"})}),e.jsx(s,{children:e.jsx(t,{children:"Quoted — reply to 6 images"})}),e.jsx(n,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(s,{children:e.jsx(t,{children:"Quoted — reply to 6 videos"})}),e.jsx(n,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})})]})]})},j={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(He,{composed:[{name:"MessageStack",desc:"Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side."},{name:"MultiAttachmentBubble",desc:"One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt."},{name:"DownloadRing",desc:"Determinate progress ring shown while a received attachment downloads."}],html:`<!-- Multiple formats — each format is its OWN bubble, stacked -->
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
      `})};var B,T,_;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(T=S.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,L,R,q,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:'Multiple images collapse into a grid within one bubble ("+N" past four).',...(U=(q=c.parameters)==null?void 0:q.docs)==null?void 0:U.description}}};var I,O,E,F,Q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"Multiple videos collapse into their own grid (play overlay on every tile).",...(Q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:Q.description}}};var G,K,W,P,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "3+ Files (Show More)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label><T>Documents — collapsed, click "Show more"</T></Label>
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
      <Label><T>Audio</T></Label>
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
}`,...(W=(K=m.parameters)==null?void 0:K.docs)==null?void 0:W.source},description:{story:`3+ documents or audio clips collapse to three cards with a "Show N more"
 control that expands the bubble (click it in the canvas). Media grids keep
 the "+N" overlay instead.`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};var X,V,J,z,H;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Multiple Documents",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label><T>Default</T></Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" files={[...DOC_SET]} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...DOC_SET]} />
      </MessageStack>
      <Label><T>With caption</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...DOC_SET]} caption="Specs + the component list 📎" />
      </MessageStack>
      <Label><T>Quoted (reply)</T></Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{
        name: "George Alan",
        text: "can you send the docs?"
      }} files={[...DOC_SET]} />
      </MessageStack>
    </ChatCanvas>
}`,...(J=(V=p.parameters)==null?void 0:V.docs)==null?void 0:J.source},description:{story:`Several documents — ONE bubble; each document is a washed card inside it.
 With a caption it sits under the cards; a reply quote sits above them.`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var Z,Y,$,ee,ae;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Multiple Audio",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label><T>Default</T></Label>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" files={[...AUDIO_SET]} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...AUDIO_SET]} />
      </MessageStack>
      <Label><T>With caption</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[...AUDIO_SET]} caption="Both takes 🎧" />
      </MessageStack>
      <Label><T>Quoted (reply)</T></Label>
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
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source},description:{story:"Several audio clips — like documents, one bubble with a card per clip.",...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var ne,te,se,ie,re;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:`Multiple attachments with a caption — an image album, and a stacked send
 where the caption attaches to the last bubble.`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.description}}};var de,oe,ce,le,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:`Replying **to** a multi-attachment message. The quoted preview summarises the
 original — "Reply to {name}" + an icon + "6 Images · hello" / "6 Videos".`,...(me=(le=b.parameters)==null?void 0:le.docs)==null?void 0:me.description}}};var pe,ue,ve,be,he;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Uploading & Failed",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label><T>Uploading</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} state="uploading" />
      </MessageStack>
      <Label><T>Failed (error)</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={2} state="failed" />
      </MessageStack>
      <Label><T>Retry</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={2} state="retry" />
      </MessageStack>
    </ChatCanvas>
}`,...(ve=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ve.source},description:{story:"Uploading and failed delivery states.",...(he=(be=h.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var ge,xe,ke,fe,Me;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Receipt States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <Label><T>Sent</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="sent" />
      </MessageStack>
      <Label><T>Delivered</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="delivered" />
      </MessageStack>
      <Label><T>Read</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Q3-Report.pdf",
        meta: "2.4 MB"
      }]} status="read" />
      </MessageStack>
    </ChatCanvas>
}`,...(ke=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ke.source},description:{story:"Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue).",...(Me=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Me.description}}};var je,Se,Ae,Ce,ye;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label><T>Received · downloading</T></Label>
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
}`,...(Ae=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:"Downloading — a received attachment being fetched (progress ring).",...(ye=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ye.description}}};var we,Be,Te,_e,De;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
        <Label><T>Single (click a thumbnail)</T></Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={1} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" images={1} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <Label><T>Grid</T></Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={4} unsupported showMeta={false} onUnsupportedClick={openDialog} />
          <MultiAttachmentBubble variant="received" images={3} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" images={4} unsupported onUnsupportedClick={openDialog} />
        </MessageStack>
        <Label><T>Files & audio</T></Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" unsupported files={[{
          kind: "file",
          name: "data.bin",
          meta: ""
        }, {
          kind: "ppt",
          name: "slides.key",
          meta: ""
        }, {
          kind: "audio",
          name: "clip.opus",
          meta: ""
        }]} />
        </MessageStack>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" unsupported files={[{
          kind: "file",
          name: "archive.rar",
          meta: ""
        }]} />
        </MessageStack>
        <UnsupportedFileDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </ChatCanvas>;
  }
}`,...(Te=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Te.source},description:{story:`Unsupported / undecodable attachments — image & video thumbnails fall back
 to the generic "?" file placeholder; documents and audio show the "?" icon
 with a download control.`,...(De=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:De.description}}};var Le,Re,qe,Ue,Ie;f.parameters={...f.parameters,docs:{...(Le=f.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: "Forwarded & Edited",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <SpinKeyframes />
      <Label><T>Forwarded</T></Label>
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
      <Label><T>Edited</T></Label>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" edited images={1} caption="updated the caption ✍️" />
      </MessageStack>
    </ChatCanvas>
}`,...(qe=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:qe.source},description:{story:"Forwarded and edited markers.",...(Ie=(Ue=f.parameters)==null?void 0:Ue.docs)==null?void 0:Ie.description}}};var Oe,Ee,Fe,Qe,Ge;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
        <Label><T>Multiple formats (separate)</T></Label>
        <SeparateStack variant="sent" />
      </ChatCanvas>
      <ChatCanvas>
        <Label><T>With caption</T></Label>
        <MessageStack variant="received">
          <MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Review pack 👆" />
        </MessageStack>
        <Label><T>Quoted — reply to 6 images</T></Label>
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
        <Label><T>Quoted — reply to 6 videos</T></Label>
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
}`,...(Fe=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source},description:{story:"Every state together.",...(Ge=(Qe=M.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.description}}};var Ke,We,Pe,Ne,Xe;j.parameters={...j.parameters,docs:{...(Ke=j.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Pe=(We=j.parameters)==null?void 0:We.docs)==null?void 0:Pe.source},description:{story:"Usage — HTML structure + token CSS.",...(Xe=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:Xe.description}}};const ia=["MultipleFormats","ImageGrid","VideoGrid","ExpandableFiles","Documents","MultipleAudio","WithCaption","Quoted","DeliveryStates","ReceiptStates","Downloading","Unsupported","ForwardedEdited","AllStates","Usage"];export{M as AllStates,h as DeliveryStates,p as Documents,x as Downloading,m as ExpandableFiles,f as ForwardedEdited,c as ImageGrid,u as MultipleAudio,S as MultipleFormats,b as Quoted,g as ReceiptStates,k as Unsupported,j as Usage,l as VideoGrid,v as WithCaption,ia as __namedExportsOrder,sa as default};
