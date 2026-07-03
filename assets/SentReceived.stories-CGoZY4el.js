import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as r,e as s,L as n,d as t,M as a}from"./_shared-l0Q3ErMB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const Se={title:"Core Components/Message Composer/Multi Attachments/Sent & Received",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`**Multi Attachments — Sent & Received.** How attachments render in the
conversation once sent.

Every **format goes separately** — images, videos, documents and audio each
become their own message bubble, stacked one below another. Multiple items of
the same format group into a grid (an image grid, a video grid); different
formats never share a bubble. A caption or a quoted reply attaches to a single
bubble.`}}}};function M({variant:i}){return e.jsxs(t,{variant:i,children:[e.jsx(a,{variant:i,images:3,showMeta:!1}),e.jsx(a,{variant:i,images:2,videoAt:[0,1],showMeta:!1}),e.jsx(a,{variant:i,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:i,files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})]})}const b={name:"Multiple Formats",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(M,{variant:"received"}),e.jsx(M,{variant:"sent"})]})},d={name:"Image Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:7})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,totalImages:7})})]})},o={name:"Video Grid (4+)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,videoAt:[0,1,2,3],totalImages:6})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,videoAt:[0,1,2,3],totalImages:6})})]})},c={parameters:{controls:{disable:!0}},render:()=>e.jsx(s,{children:e.jsxs(t,{variant:"sent",children:[e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Contract.pdf",meta:"12 Jun · 1.2 MB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"doc",name:"Notes.docx",meta:"12 Jun · 340 KB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"xls",name:"Budget.xlsx",meta:"12 Jun · 812 KB"}]})]})})},l={name:"With Caption",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Everything from the review 👆"})}),e.jsxs(t,{variant:"sent",children:[e.jsx(a,{variant:"sent",images:3,showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"12 Jun · 2.4 MB"}],showMeta:!1}),e.jsx(a,{variant:"sent",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}],caption:"Everything from the review 👆"})]})]})},m={name:"Quoted (Reply)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"Priya Nair",media:{kind:"file",count:3}},files:[{kind:"pdf",name:"Signed.pdf",meta:"12 Jun · 1.1 MB"}]})})]})},p={name:"Uploading & Failed",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Uploading"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:4,state:"uploading"})}),e.jsx(n,{children:"Failed"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",images:2,state:"failed"})})]})},v={name:"Receipt States",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(n,{children:"Sent"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"sent"})}),e.jsx(n,{children:"Delivered"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"delivered"})}),e.jsx(n,{children:"Read"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}],status:"read"})})]})},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Received · downloading"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,state:"downloading"})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",state:"downloading",files:[{kind:"audio",name:"Audio.mp3",meta:"00:32"}]})})]})},g={name:"Forwarded & Edited",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{children:[e.jsx(r,{}),e.jsx(n,{children:"Forwarded"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",forwarded:!0,images:2})}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",forwarded:!0,files:[{kind:"pdf",name:"Q3-Report.pdf",meta:"2.4 MB"}]})}),e.jsx(n,{children:"Edited"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",edited:!0,images:1,caption:"updated the caption ✍️"})})]})},h={name:"All States",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,padding:24,alignItems:"flex-start"},children:[e.jsx(r,{}),e.jsxs(s,{children:[e.jsx(n,{children:"Multiple formats (separate)"}),e.jsx(M,{variant:"sent"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"With caption"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",images:4,totalImages:5,caption:"Review pack 👆"})}),e.jsx(n,{children:"Quoted — reply to 6 images"}),e.jsx(t,{variant:"sent",children:e.jsx(a,{variant:"sent",quoted:{name:"George Alan",media:{kind:"image",count:6,caption:"hello"}},caption:"These look great! 🙌"})}),e.jsx(n,{children:"Quoted — reply to 6 videos"}),e.jsx(t,{variant:"received",children:e.jsx(a,{variant:"received",quoted:{name:"George Alan",media:{kind:"video",count:6}},caption:"On it 👍"})})]})]})};var f,x,k;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(x=b.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,S,C,A,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:'Multiple images collapse into a grid within one bubble ("+N" past four).',...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var w,y,R,L,Q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(y=o.parameters)==null?void 0:y.docs)==null?void 0:R.source},description:{story:"Multiple videos collapse into their own grid (play overlay on every tile).",...(Q=(L=o.parameters)==null?void 0:L.docs)==null?void 0:Q.description}}};var I,G,F,E,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ChatCanvas>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "pdf",
        name: "Contract.pdf",
        meta: "12 Jun · 1.2 MB"
      }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "doc",
        name: "Notes.docx",
        meta: "12 Jun · 340 KB"
      }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{
        kind: "xls",
        name: "Budget.xlsx",
        meta: "12 Jun · 812 KB"
      }]} />
      </MessageStack>
    </ChatCanvas>
}`,...(F=(G=c.parameters)==null?void 0:G.docs)==null?void 0:F.source},description:{story:"Several documents — each is its own bubble, stacked one below another.",...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.description}}};var K,J,D,W,N;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(D=(J=l.parameters)==null?void 0:J.docs)==null?void 0:D.source},description:{story:`Multiple attachments with a caption — an image album, and a stacked send
 where the caption attaches to the last bubble.`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.description}}};var O,T,U,V,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(T=m.parameters)==null?void 0:T.docs)==null?void 0:U.source},description:{story:`Replying **to** a multi-attachment message. The quoted preview summarises the
 original — "Reply to {name}" + an icon + "6 Images · hello" / "6 Videos".`,...(P=(V=m.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var _,H,z,X,Y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <Label>Failed</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={2} state="failed" /></MessageStack>
    </ChatCanvas>
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source},description:{story:"Uploading and failed delivery states.",...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,ae,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue).",...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var ne,se,re,ie,de;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=u.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Downloading — a received attachment being fetched (progress ring).",...(de=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var oe,ce,le,me,pe;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:"Forwarded and edited markers.",...(pe=(me=g.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ve,ue,ge,he,be;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
    gap: 24,
    padding: 24,
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
}`,...(ge=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:"Every state together.",...(be=(he=h.parameters)==null?void 0:he.docs)==null?void 0:be.description}}};const Ce=["MultipleFormats","ImageGrid","VideoGrid","Documents","WithCaption","Quoted","DeliveryStates","ReceiptStates","Downloading","ForwardedEdited","AllStates"];export{h as AllStates,p as DeliveryStates,c as Documents,u as Downloading,g as ForwardedEdited,d as ImageGrid,b as MultipleFormats,m as Quoted,v as ReceiptStates,o as VideoGrid,l as WithCaption,Ce as __namedExportsOrder,Se as default};
