import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as h,a as c,b as H,R as y,U as ne,I as ie,F as ce}from"./_shared-gpEOlAGR.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Se={title:"Core Components/Message Composer/Multi Attachments/Attachment Cards",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Attachment Cards.** The standalone attachment-card primitives — Document,
Image, Video and Audio — in every state, on both desktop and mobile.

The top-right corner is a **single slot**: it shows the remove **✕**
(default), a **spinner** (loading), or an **error** mark (failed) — never two
at once. On mobile there is no hover, so the ✕ is persistent; during loading
the spinner takes that slot instead of the ✕ (which would otherwise collide
with the error mark when an upload fails).`}}}},Y=({size:r=16})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{marginLeft:r*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),se=({size:r=16})=>e.jsxs("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"2.5",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"}),e.jsx("rect",{x:"7",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"})]}),le=()=>e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M1.5 1.5l7 7M8.5 1.5l-7 7",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),de=()=>e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"5",y:"2.5",width:"2",height:"5",rx:"1",fill:"currentColor"}),e.jsx("circle",{cx:"6",cy:"9",r:"1",fill:"currentColor"})]}),me=({size:r=12})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{animation:"ma-spin 0.9s linear infinite"},children:e.jsx("circle",{cx:"6",cy:"6",r:"4.5",stroke:"currentColor",strokeWidth:"1.6",strokeDasharray:"14 10",strokeLinecap:"round"})});function J(r,t){return r==="loading"?"none":r==="error"?t==="mobile"?"remove":"error":r==="hover"||t==="mobile"?"remove":"none"}function j({kind:r}){if(r==="none")return null;const t=r==="error"?"var(--cometchat-error-color)":"color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))";return e.jsx("div",{style:{position:"absolute",top:-8,right:-8,width:22,height:22,borderRadius:"50%",background:t,color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid var(--cometchat-background-color-01)",boxShadow:"var(--cometchat-shadow-xs)",zIndex:2},children:r==="remove"?e.jsx(le,{}):r==="loading"?e.jsx(me,{size:11}):e.jsx(de,{})})}function k({size:r=40,stroke:t=4,progress:n=62}){const a=(r-t)/2,o=2*Math.PI*a,s=o*(1-n/100);return e.jsxs("svg",{width:r,height:r,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:r/2,cy:r/2,r:a,stroke:"color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)",strokeWidth:t,fill:"none"}),e.jsx("circle",{cx:r/2,cy:r/2,r:a,stroke:"var(--cometchat-static-white)",strokeWidth:t,fill:"none",strokeDasharray:o,strokeDashoffset:s,strokeLinecap:"round"})]})}const pe={pdf:"PDF",doc:"DOC",xls:"XLS",ppt:"PPT",zip:"ZIP",txt:"TXT",file:"FILE"};function he({type:r,size:t=54,loading:n=!1,error:a=!1}){const o=Math.round(t*.26);return e.jsxs("div",{style:{position:"relative",width:t,height:t,borderRadius:o,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cometchat-static-white)",boxShadow:"0 1px 3px color-mix(in srgb, var(--cometchat-static-black) 12%, transparent)"},children:[e.jsx(ce,{type:r,size:Math.round(t*.64)}),(n||a)&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:o,display:"flex",alignItems:"center",justifyContent:"center",background:"color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)",color:"var(--cometchat-static-white)"},children:n?e.jsx(k,{size:Math.round(t*.62),stroke:3.5}):e.jsx("span",{className:"icon-rounded",style:{fontSize:Math.round(t*.42),"--icon-fill":1},children:"error"})})]})}function ue({size:r=60,loading:t=!1,error:n=!1,playing:a=!1}){return e.jsxs("div",{style:{position:"relative",width:r,height:r,flexShrink:0},children:[e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--cometchat-primary-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:a?e.jsx(se,{size:Math.round(r*.3)}):e.jsx(Y,{size:Math.round(r*.3)})}),(t||n)&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)",color:"var(--cometchat-static-white)"},children:t?e.jsx(k,{size:Math.round(r*.62),stroke:3.5}):e.jsx("span",{className:"icon-rounded",style:{fontSize:Math.round(r*.42),"--icon-fill":1},children:"error"})})]})}function ve({progress:r=0}){return e.jsxs("div",{style:{position:"relative",height:6,borderRadius:3,width:"100%",background:"var(--cometchat-neutral-color-300)"},children:[r>0&&e.jsx("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:`${r}%`,borderRadius:3,background:"var(--cometchat-primary-color)"}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:`calc(${r}% - ${r/100*16}px)`,transform:"translateY(-50%)",width:16,height:16,borderRadius:"50%",background:"var(--cometchat-static-white)",border:"1px solid var(--cometchat-border-color-default)",boxShadow:"var(--cometchat-shadow-xs)"}})]})}function ee(r,t){return{position:"relative",width:t?"100%":300,boxSizing:"border-box",display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3-5)",padding:"var(--cometchat-spacing-3-5)",borderRadius:"var(--cometchat-radius-4)",background:"var(--cometchat-background-color-01)",border:`1px solid ${r==="error"?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`}}const re={fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function xe(r,t){return r==="error"?"Upload failed · Retry":t}const te=r=>({fontSize:12,color:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-text-color-tertiary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"});function i({state:r="default",platform:t="desktop",type:n="pdf",name:a="Invoice 45821.pdf"}){const o=t==="mobile";return e.jsxs("div",{style:ee(r,o),children:[e.jsx(he,{type:n,loading:r==="loading",error:r==="error"&&o}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:re,children:a}),e.jsx("span",{style:te(r),children:xe(r,pe[n])})]}),e.jsx(j,{kind:J(r,t)})]})}function f({state:r="default",platform:t="desktop",name:n="Watch by Billie.mp3",playing:a=!1}){const o=t==="mobile";return e.jsxs("div",{style:ee(r,o),children:[e.jsx(ue,{loading:r==="loading",error:r==="error"&&o,playing:a}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:re,children:n}),r==="error"?e.jsx("span",{style:te(r),children:"Upload failed · Retry"}):e.jsxs(e.Fragment,{children:[e.jsx(ve,{progress:a?38:0}),e.jsxs("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:[a?"00:12":"00:00","/00:32"]})]})]}),e.jsx(j,{kind:J(r,t)})]})}function l({kind:r,state:t="default",platform:n="desktop",src:a=c[0]}){const o=n==="mobile",s=o?104:120,w=t==="loading"||t==="error",oe=t==="hover"||t==="default"&&o?"remove":"none";return e.jsxs("div",{style:{position:"relative",width:s,height:s,flexShrink:0},children:[e.jsxs("div",{style:{position:"relative",width:s,height:s,borderRadius:14,overflow:"hidden",border:`1px solid ${t==="error"?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`},children:[e.jsx("img",{src:a,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:w?"blur(2px) brightness(0.7)":void 0}}),r==="video"&&!w&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:32,height:32,borderRadius:"50%",background:"color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Y,{size:13})}),e.jsx("div",{style:{position:"absolute",bottom:6,left:6,padding:"1px var(--cometchat-spacing-1-5)",borderRadius:"var(--cometchat-radius-1)",background:"color-mix(in srgb, var(--cometchat-static-black) 60%, transparent)",color:"var(--cometchat-static-white)",fontSize:10,fontWeight:500},children:"0:12"})]}),t==="loading"&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(k,{size:36,stroke:4})}),t==="error"&&e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-1)",alignItems:"center",justifyContent:"center",color:"var(--cometchat-static-white)"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:22,"--icon-fill":1},children:"error"}),e.jsx("span",{style:{fontSize:10,fontWeight:600},children:"Retry"})]})]}),e.jsx(j,{kind:oe})]})}function ae({children:r}){return e.jsxs("div",{style:{width:360,borderRadius:28,border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing-3)",boxShadow:"var(--cometchat-shadow-xs)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--cometchat-spacing) var(--cometchat-spacing-3) var(--cometchat-spacing-2-5)"},children:[e.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)"},children:"9:41"}),e.jsx("div",{style:{width:60,height:5,borderRadius:3,background:"var(--cometchat-neutral-color-300)"}}),e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:"▮▮▮"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-1) var(--cometchat-spacing-3) var(--cometchat-spacing-3)"},children:r})]})}const ge=["default","hover","loading","error"];function b({render:r}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)"},children:[e.jsx(H,{}),e.jsx(h,{title:"Desktop",children:e.jsx(y,{gap:20,children:ge.map(t=>e.jsx(ie,{label:t,children:r(t,"desktop")},t))})}),e.jsx(h,{title:"Mobile",children:e.jsx(ae,{children:["default","loading","error"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t}),r(t,"mobile")]},t))})})]})}const u={parameters:{controls:{disable:!0}},render:()=>e.jsx(b,{render:(r,t)=>e.jsx(i,{state:r,platform:t,type:"pdf",name:"Invoice 45821.pdf"})})},v={parameters:{controls:{disable:!0}},render:()=>e.jsx(b,{render:(r,t)=>e.jsx(l,{kind:"image",state:r,platform:t,src:c[0]})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx(b,{render:(r,t)=>e.jsx(l,{kind:"video",state:r,platform:t,src:c[1]})})},g={parameters:{controls:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{render:(r,t)=>e.jsx(f,{state:r,platform:t,name:"Watch by Billie.mp3"})}),e.jsx("div",{style:{padding:"0 var(--cometchat-spacing-6) var(--cometchat-spacing-6)"},children:e.jsx(h,{title:"Playing (pause + progress)",children:e.jsx("div",{style:{maxWidth:300},children:e.jsx(f,{name:"Watch by Billie.mp3",playing:!0})})})})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsx(H,{}),e.jsx(h,{title:"Desktop",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3-5)"},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(f,{name:"Watch by Billie.mp3"}),e.jsxs(y,{gap:12,children:[e.jsx(l,{kind:"image",src:c[0]}),e.jsx(l,{kind:"video",src:c[1]})]})]})}),e.jsx(h,{title:"Mobile",children:e.jsxs(ae,{children:[e.jsx(i,{platform:"mobile",type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(f,{platform:"mobile",name:"Watch by Billie.mp3"}),e.jsxs(y,{gap:10,children:[e.jsx(l,{kind:"image",platform:"mobile",src:c[0]}),e.jsx(l,{kind:"video",platform:"mobile",src:c[1]})]})]})})]})},m={name:"Document Types",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3-5)",padding:"var(--cometchat-spacing-6)",maxWidth:320},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(i,{type:"doc",name:"Proposal draft.docx"}),e.jsx(i,{type:"xls",name:"Q3 Budget.xlsx"}),e.jsx(i,{type:"ppt",name:"Kickoff deck.pptx"}),e.jsx(i,{type:"zip",name:"Assets.zip"}),e.jsx(i,{type:"txt",name:"Notes.txt"}),e.jsx(i,{type:"file",name:"data.bin"})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(ne,{composed:[{name:"DocumentCard / AudioCard",desc:"300px cards — icon tile or play button + name + subtitle; red border + error treatment on failure."},{name:"MediaTile (image / video)",desc:"120px square tile; loading ring or error overlay in the centre."},{name:"CornerBadge",desc:"Single-slot corner: ✕ remove (hover / mobile), never colliding with loading or error."},{name:"FileTile / AudioButton",desc:"Icon carriers — translucent dark overlay hosts the progress ring (loading) or error mark (mobile error)."}],html:`<!-- Document card (desktop) -->
<div class="ma-card">
  <div class="ma-file-tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub">PDF</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Error (mobile): corner keeps ✕, error moves onto the icon overlay -->
<div class="ma-card ma-card--error">
  <div class="ma-file-tile">
    <span class="ma-file-icon ma-file-icon--pdf"></span>
    <div class="ma-tile-overlay"><span class="icon-rounded">error</span></div>
  </div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub ma-card__sub--error">Upload failed · Retry</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>`,css:`.ma-card {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-3-5);
  width: 300px; padding: var(--cometchat-spacing-3-5);
  border-radius: var(--cometchat-radius-4);
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-card--error { border-color: var(--cometchat-error-color); }

.ma-file-tile {
  position: relative; width: 54px; height: 54px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-3-5, 14px);
  background: var(--cometchat-static-white);
  box-shadow: 0 1px 3px color-mix(in srgb, var(--cometchat-static-black) 12%, transparent);
}
/* Loading/error overlay on the icon — same translucent treatment */
.ma-tile-overlay {
  position: absolute; inset: 0; border-radius: inherit;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--cometchat-static-black) 62%, transparent);
  color: var(--cometchat-static-white);
}

.ma-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-card__sub { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-tertiary); }
.ma-card__sub--error { color: var(--cometchat-error-color); }

.ma-badge {
  position: absolute; top: -8px; right: -8px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white));
  color: var(--cometchat-static-white);
  box-shadow: var(--cometchat-shadow-xs);
}`})};var S,I,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <DocumentCard state={s} platform={p} type="pdf" name="Invoice 45821.pdf" />} />
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var C,M,D;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="image" state={s} platform={p} src={SAMPLE_IMAGES[0]} />} />
}`,...(D=(M=v.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,R,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="video" state={s} platform={p} src={SAMPLE_IMAGES[1]} />} />
}`,...(T=(R=x.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,W,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <TypePage render={(s, p) => <AudioCard state={s} platform={p} name="Watch by Billie.mp3" />} />
      <div style={{
      padding: "0 var(--cometchat-spacing-6) var(--cometchat-spacing-6)"
    }}>
        <Section title="Playing (pause + progress)">
          <div style={{
          maxWidth: 300
        }}>
            <AudioCard name="Watch by Billie.mp3" playing />
          </div>
        </Section>
      </div>
    </>
}`,...(B=(W=g.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,F,L,U,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--cometchat-spacing-10)",
    padding: "var(--cometchat-spacing-6)",
    alignItems: "flex-start"
  }}>
      <SpinKeyframes />
      <Section title="Desktop">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-3-5)"
      }}>
          <DocumentCard type="pdf" name="Invoice 45821.pdf" />
          <AudioCard name="Watch by Billie.mp3" />
          <Row gap={12}>
            <MediaTile kind="image" src={SAMPLE_IMAGES[0]} />
            <MediaTile kind="video" src={SAMPLE_IMAGES[1]} />
          </Row>
        </div>
      </Section>
      <Section title="Mobile">
        <MobileFrame>
          <DocumentCard platform="mobile" type="pdf" name="Invoice 45821.pdf" />
          <AudioCard platform="mobile" name="Watch by Billie.mp3" />
          <Row gap={10}>
            <MediaTile kind="image" platform="mobile" src={SAMPLE_IMAGES[0]} />
            <MediaTile kind="video" platform="mobile" src={SAMPLE_IMAGES[1]} />
          </Row>
        </MobileFrame>
      </Section>
    </div>
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:"Every card type in its default state, desktop and mobile.",...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.description}}};var G,O,N,$,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Document Types",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-3-5)",
    padding: "var(--cometchat-spacing-6)",
    maxWidth: 320
  }}>
      <DocumentCard type="pdf" name="Invoice 45821.pdf" />
      <DocumentCard type="doc" name="Proposal draft.docx" />
      <DocumentCard type="xls" name="Q3 Budget.xlsx" />
      <DocumentCard type="ppt" name="Kickoff deck.pptx" />
      <DocumentCard type="zip" name="Assets.zip" />
      <DocumentCard type="txt" name="Notes.txt" />
      <DocumentCard type="file" name="data.bin" />
    </div>
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:"Documents come in several file-type variants.",...(K=($=m.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var V,q,Q,X,Z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <UsageDoc composed={[{
    name: "DocumentCard / AudioCard",
    desc: "300px cards — icon tile or play button + name + subtitle; red border + error treatment on failure."
  }, {
    name: "MediaTile (image / video)",
    desc: "120px square tile; loading ring or error overlay in the centre."
  }, {
    name: "CornerBadge",
    desc: "Single-slot corner: ✕ remove (hover / mobile), never colliding with loading or error."
  }, {
    name: "FileTile / AudioButton",
    desc: "Icon carriers — translucent dark overlay hosts the progress ring (loading) or error mark (mobile error)."
  }]} html={\`<!-- Document card (desktop) -->
<div class="ma-card">
  <div class="ma-file-tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub">PDF</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Error (mobile): corner keeps ✕, error moves onto the icon overlay -->
<div class="ma-card ma-card--error">
  <div class="ma-file-tile">
    <span class="ma-file-icon ma-file-icon--pdf"></span>
    <div class="ma-tile-overlay"><span class="icon-rounded">error</span></div>
  </div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub ma-card__sub--error">Upload failed · Retry</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>\`} css={\`.ma-card {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-3-5);
  width: 300px; padding: var(--cometchat-spacing-3-5);
  border-radius: var(--cometchat-radius-4);
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-card--error { border-color: var(--cometchat-error-color); }

.ma-file-tile {
  position: relative; width: 54px; height: 54px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-3-5, 14px);
  background: var(--cometchat-static-white);
  box-shadow: 0 1px 3px color-mix(in srgb, var(--cometchat-static-black) 12%, transparent);
}
/* Loading/error overlay on the icon — same translucent treatment */
.ma-tile-overlay {
  position: absolute; inset: 0; border-radius: inherit;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--cometchat-static-black) 62%, transparent);
  color: var(--cometchat-static-white);
}

.ma-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-card__sub { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-tertiary); }
.ma-card__sub--error { color: var(--cometchat-error-color); }

.ma-badge {
  position: absolute; top: -8px; right: -8px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white));
  color: var(--cometchat-static-white);
  box-shadow: var(--cometchat-shadow-xs);
}\`} />
}`,...(Q=(q=p.parameters)==null?void 0:q.docs)==null?void 0:Q.source},description:{story:"Usage — HTML structure + token CSS.",...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};const Ie=["Document","Image","Video","Audio","Overview","FileTypes","Usage"];export{g as Audio,u as Document,m as FileTypes,v as Image,d as Overview,p as Usage,x as Video,Ie as __namedExportsOrder,Se as default};
