import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as h,a as s,b as ee,R as w,U as le,I as de,c as b,F as me}from"./_shared-B4utw3i8.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SearchBar-C2XVB5CY.js";/* empty css                  */const Ce={title:"Core Components/Message Composer/Multi Attachments/Attachment Cards",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Attachment Cards.** The standalone attachment-card primitives — Document,
Image, Video and Audio — in every state, on both desktop and mobile.

The top-right corner is a **single slot**: it shows the remove **✕**
(default), a **spinner** (loading), or an **error** mark (failed) — never two
at once. On mobile there is no hover, so the ✕ is persistent; during loading
the spinner takes that slot instead of the ✕ (which would otherwise collide
with the error mark when an upload fails).`}}}},re=({size:r=16})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{marginLeft:r*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),pe=({size:r=16})=>e.jsxs("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"2.5",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"}),e.jsx("rect",{x:"7",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"})]}),he=()=>e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M1.5 1.5l7 7M8.5 1.5l-7 7",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),y=({size:r=12})=>e.jsxs("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"5",y:"2.5",width:"2",height:"5",rx:"1",fill:"currentColor"}),e.jsx("circle",{cx:"6",cy:"9",r:"1",fill:"currentColor"})]}),ue=({size:r=12})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{animation:"ma-spin 0.9s linear infinite"},children:e.jsx("circle",{cx:"6",cy:"6",r:"4.5",stroke:"currentColor",strokeWidth:"1.6",strokeDasharray:"14 10",strokeLinecap:"round"})});function te(r,t){return r==="loading"?"none":r==="error"||r==="retry"?t==="mobile"?"remove":r:r==="hover"||t==="mobile"?"remove":"none"}function S({kind:r}){if(r==="none")return null;const t=r==="error"||r==="retry"?"var(--cometchat-error-color)":"color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))";return e.jsx("div",{style:{position:"absolute",top:-8,right:-8,width:22,height:22,borderRadius:"50%",background:t,color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid var(--cometchat-background-color-01)",boxShadow:"var(--cometchat-shadow-xs)",zIndex:2},children:r==="remove"?e.jsx(he,{}):r==="loading"?e.jsx(ue,{size:11}):r==="retry"?e.jsx(b,{}):e.jsx(y,{})})}function I({size:r=40,stroke:t=4,progress:n=62}){const o=(r-t)/2,a=2*Math.PI*o,c=a*(1-n/100);return e.jsxs("svg",{width:r,height:r,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:r/2,cy:r/2,r:o,stroke:"color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)",strokeWidth:t,fill:"none"}),e.jsx("circle",{cx:r/2,cy:r/2,r:o,stroke:"var(--cometchat-static-white)",strokeWidth:t,fill:"none",strokeDasharray:a,strokeDashoffset:c,strokeLinecap:"round"})]})}const ve={pdf:"PDF",doc:"DOC",xls:"XLS",ppt:"PPT",zip:"ZIP",txt:"TXT",file:"FILE"};function xe({type:r,size:t=54,loading:n=!1,error:o=!1,retry:a=!1}){const c=Math.round(t*.26);return e.jsxs("div",{style:{position:"relative",width:t,height:t,borderRadius:c,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(me,{type:r,size:t}),(n||o||a)&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:c,display:"flex",alignItems:"center",justifyContent:"center",background:"color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)",color:"var(--cometchat-static-white)"},children:n?e.jsx(I,{size:Math.round(t*.62),stroke:3.5}):e.jsx("div",{style:{width:Math.round(t*.38),height:Math.round(t*.38),borderRadius:"50%",background:"var(--cometchat-error-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:a?e.jsx(b,{size:Math.round(t*.24)}):e.jsx(y,{size:Math.round(t*.24)})})})]})}function ge({size:r=60,loading:t=!1,error:n=!1,retry:o=!1,playing:a=!1}){return e.jsxs("div",{style:{position:"relative",width:r,height:r,flexShrink:0},children:[e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--cometchat-primary-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:a?e.jsx(pe,{size:Math.round(r*.3)}):e.jsx(re,{size:Math.round(r*.3)})}),(t||n||o)&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)",color:"var(--cometchat-static-white)"},children:t?e.jsx(I,{size:Math.round(r*.62),stroke:3.5}):e.jsx("div",{style:{width:Math.round(r*.38),height:Math.round(r*.38),borderRadius:"50%",background:"var(--cometchat-error-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?e.jsx(b,{size:Math.round(r*.24)}):e.jsx(y,{size:Math.round(r*.24)})})})]})}function fe({progress:r=0}){return e.jsxs("div",{style:{position:"relative",height:6,borderRadius:3,width:"100%",background:"var(--cometchat-neutral-color-300)"},children:[r>0&&e.jsx("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:`${r}%`,borderRadius:3,background:"var(--cometchat-primary-color)"}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:`calc(${r}% - ${r/100*16}px)`,transform:"translateY(-50%)",width:16,height:16,borderRadius:"50%",background:"var(--cometchat-static-white)",border:"1px solid var(--cometchat-border-color-default)",boxShadow:"var(--cometchat-shadow-xs)"}})]})}function ae(r,t){return{position:"relative",width:t?"100%":300,boxSizing:"border-box",display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-3-5)",padding:"var(--cometchat-spacing-3-5)",borderRadius:"var(--cometchat-radius-4)",background:"var(--cometchat-background-color-01)",border:`1px solid ${r==="error"||r==="retry"?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`}}const oe={fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function ne(r,t){return r==="error"?"Upload failed":r==="retry"?"Tap to retry":t}const ie=r=>({fontSize:12,color:r==="error"||r==="retry"?"var(--cometchat-error-color)":"var(--cometchat-text-color-tertiary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"});function i({state:r="default",platform:t="desktop",type:n="pdf",name:o="Invoice 45821.pdf"}){const a=t==="mobile";return e.jsxs("div",{style:ae(r,a),children:[e.jsx(xe,{type:n,loading:r==="loading",error:r==="error"&&a,retry:r==="retry"&&a}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:oe,children:o}),e.jsx("span",{style:ie(r),children:ne(r,ve[n])})]}),e.jsx(S,{kind:te(r,t)})]})}function f({state:r="default",platform:t="desktop",name:n="Watch by Billie.mp3",playing:o=!1}){const a=t==="mobile";return e.jsxs("div",{style:ae(r,a),children:[e.jsx(ge,{loading:r==="loading",error:r==="error"&&a,retry:r==="retry"&&a,playing:o}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:oe,children:n}),r==="error"||r==="retry"?e.jsx("span",{style:ie(r),children:ne(r,"")}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{progress:o?38:0}),e.jsxs("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:[o?"00:12":"00:00","/00:32"]})]})]}),e.jsx(S,{kind:te(r,t)})]})}function l({kind:r,state:t="default",platform:n="desktop",src:o=s[0]}){const a=n==="mobile",c=a?104:120,k=t==="error"||t==="retry",C=t==="loading"||k,se=t==="hover"||t==="default"&&a?"remove":"none";return e.jsxs("div",{style:{position:"relative",width:c,height:c,flexShrink:0},children:[e.jsxs("div",{style:{position:"relative",width:c,height:c,borderRadius:14,overflow:"hidden",border:`1px solid ${k?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`},children:[e.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:C?"blur(2px) brightness(0.7)":void 0}}),r==="video"&&!C&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:44,height:44,borderRadius:"50%",background:"color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(re,{size:18})}),e.jsx("div",{style:{position:"absolute",bottom:6,left:6,padding:"1px var(--cometchat-spacing-1-5)",borderRadius:"var(--cometchat-radius-1)",background:"color-mix(in srgb, var(--cometchat-static-black) 60%, transparent)",color:"var(--cometchat-static-white)",fontSize:10,fontWeight:500},children:"0:12"})]}),t==="loading"&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(I,{size:36,stroke:4})}),k&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--cometchat-error-color)",color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:t==="retry"?e.jsx(b,{size:15}):e.jsx(y,{size:15})})})]}),e.jsx(S,{kind:se})]})}function ce({children:r}){return e.jsxs("div",{style:{width:360,borderRadius:28,border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)",padding:"var(--cometchat-spacing-3)",boxShadow:"var(--cometchat-shadow-xs)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--cometchat-spacing) var(--cometchat-spacing-3) var(--cometchat-spacing-2-5)"},children:[e.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)"},children:"9:41"}),e.jsx("div",{style:{width:60,height:5,borderRadius:3,background:"var(--cometchat-neutral-color-300)"}}),e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:"▮▮▮"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-1) var(--cometchat-spacing-3) var(--cometchat-spacing-3)"},children:r})]})}const be=["default","hover","loading","error","retry"];function j({render:r}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)"},children:[e.jsx(ee,{}),e.jsx(h,{title:"Desktop",children:e.jsx(w,{gap:20,children:be.map(t=>e.jsx(de,{label:t,children:r(t,"desktop")},t))})}),e.jsx(h,{title:"Mobile",children:e.jsx(ce,{children:["default","loading","error","retry"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t}),r(t,"mobile")]},t))})})]})}const u={parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{render:(r,t)=>e.jsx(i,{state:r,platform:t,type:"pdf",name:"Invoice 45821.pdf"})})},v={parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{render:(r,t)=>e.jsx(l,{kind:"image",state:r,platform:t,src:s[0]})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{render:(r,t)=>e.jsx(l,{kind:"video",state:r,platform:t,src:s[1]})})},g={parameters:{controls:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{render:(r,t)=>e.jsx(f,{state:r,platform:t,name:"Watch by Billie.mp3"})}),e.jsx("div",{style:{padding:"0 var(--cometchat-spacing-6) var(--cometchat-spacing-6)"},children:e.jsx(h,{title:"Playing (pause + progress)",children:e.jsx("div",{style:{maxWidth:300},children:e.jsx(f,{name:"Watch by Billie.mp3",playing:!0})})})})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--cometchat-spacing-10)",padding:"var(--cometchat-spacing-6)",alignItems:"flex-start"},children:[e.jsx(ee,{}),e.jsx(h,{title:"Desktop",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3-5)"},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(f,{name:"Watch by Billie.mp3"}),e.jsxs(w,{gap:12,children:[e.jsx(l,{kind:"image",src:s[0]}),e.jsx(l,{kind:"video",src:s[1]})]})]})}),e.jsx(h,{title:"Mobile",children:e.jsxs(ce,{children:[e.jsx(i,{platform:"mobile",type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(f,{platform:"mobile",name:"Watch by Billie.mp3"}),e.jsxs(w,{gap:10,children:[e.jsx(l,{kind:"image",platform:"mobile",src:s[0]}),e.jsx(l,{kind:"video",platform:"mobile",src:s[1]})]})]})})]})},m={name:"Document Types",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-3-5)",padding:"var(--cometchat-spacing-6)",maxWidth:320},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(i,{type:"doc",name:"Proposal draft.docx"}),e.jsx(i,{type:"xls",name:"Q3 Budget.xlsx"}),e.jsx(i,{type:"ppt",name:"Kickoff deck.pptx"}),e.jsx(i,{type:"zip",name:"Assets.zip"}),e.jsx(i,{type:"txt",name:"Notes.txt"}),e.jsx(i,{type:"file",name:"data.bin"})]})},p={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx(le,{composed:[{name:"DocumentCard / AudioCard",desc:"300px cards — icon tile or play button + name + subtitle; red border + error treatment on failure."},{name:"MediaTile (image / video)",desc:"120px square tile; loading ring or error overlay in the centre."},{name:"CornerBadge",desc:"Single-slot corner: ✕ remove (hover / mobile), never colliding with loading or error."},{name:"FileTile / AudioButton",desc:"Icon carriers — translucent dark overlay hosts the progress ring (loading) or error mark (mobile error)."}],html:`<!-- Document card (desktop) -->
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
}`})};var _,M,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <DocumentCard state={s} platform={p} type="pdf" name="Invoice 45821.pdf" />} />
}`,...(D=(M=u.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,R,T;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="image" state={s} platform={p} src={SAMPLE_IMAGES[0]} />} />
}`,...(T=(R=v.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,W,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="video" state={s} platform={p} src={SAMPLE_IMAGES[1]} />} />
}`,...(B=(W=x.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,F,L;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var U,G,O,$,K;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(G=d.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"Every card type in its default state, desktop and mobile.",...(K=($=d.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var V,q,N,Q,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:"Documents come in several file-type variants.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,z,H,Y,J;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"Usage — HTML structure + token CSS.",...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};const _e=["Document","Image","Video","Audio","Overview","FileTypes","Usage"];export{g as Audio,u as Document,m as FileTypes,v as Image,d as Overview,p as Usage,x as Video,_e as __namedExportsOrder,Ce as default};
