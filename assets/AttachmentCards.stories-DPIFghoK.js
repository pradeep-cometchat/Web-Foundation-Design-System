import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as p,a,b as V,R as v,I as J,F as ee}from"./_shared-BqpVJyLP.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                  */const ue={title:"Core Components/Message Composer/Multi Attachments/Attachment Cards",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`**Attachment Cards.** The standalone attachment-card primitives — Document,
Image, Video and Audio — in every state, on both desktop and mobile.

The top-right corner is a **single slot**: it shows the remove **✕**
(default), a **spinner** (loading), or an **error** mark (failed) — never two
at once. On mobile there is no hover, so the ✕ is persistent; during loading
the spinner takes that slot instead of the ✕ (which would otherwise collide
with the error mark when an upload fails).`}}}},Q=({size:r=16})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{marginLeft:r*.08},children:e.jsx("path",{d:"M3 1.5v9l7.5-4.5L3 1.5Z",fill:"currentColor"})}),re=({size:r=16})=>e.jsxs("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"2.5",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"}),e.jsx("rect",{x:"7",y:"1.5",width:"2.5",height:"9",rx:"1",fill:"currentColor"})]}),te=()=>e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M1.5 1.5l7 7M8.5 1.5l-7 7",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),oe=()=>e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[e.jsx("rect",{x:"5",y:"2.5",width:"2",height:"5",rx:"1",fill:"currentColor"}),e.jsx("circle",{cx:"6",cy:"9",r:"1",fill:"currentColor"})]}),ne=({size:r=12})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 12 12",fill:"none",style:{animation:"ma-spin 0.9s linear infinite"},children:e.jsx("circle",{cx:"6",cy:"6",r:"4.5",stroke:"currentColor",strokeWidth:"1.6",strokeDasharray:"14 10",strokeLinecap:"round"})});function U(r,t){return r==="loading"?"none":r==="error"?"error":r==="hover"||t==="mobile"?"remove":"none"}function j({kind:r}){if(r==="none")return null;const t=r==="error"?"var(--cometchat-error-color)":"var(--cometchat-neutral-color-700)";return e.jsx("div",{style:{position:"absolute",top:-8,right:-8,width:22,height:22,borderRadius:"50%",background:t,color:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid var(--cometchat-background-color-01)",boxShadow:"var(--cometchat-shadow-xs)",zIndex:2},children:r==="remove"?e.jsx(te,{}):r==="loading"?e.jsx(ne,{size:11}):e.jsx(oe,{})})}function b({size:r=40,stroke:t=4,progress:o=62}){const n=(r-t)/2,s=2*Math.PI*n,m=s*(1-o/100);return e.jsxs("svg",{width:r,height:r,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:r/2,cy:r/2,r:n,stroke:"rgba(255,255,255,0.3)",strokeWidth:t,fill:"none"}),e.jsx("circle",{cx:r/2,cy:r/2,r:n,stroke:"var(--cometchat-static-white)",strokeWidth:t,fill:"none",strokeDasharray:s,strokeDashoffset:m,strokeLinecap:"round"})]})}const ie={pdf:"PDF",doc:"DOC",xls:"XLS",ppt:"PPT",zip:"ZIP",txt:"TXT",file:"FILE"};function se({type:r,size:t=54,loading:o=!1}){return e.jsxs("div",{style:{position:"relative",width:t,height:t,borderRadius:Math.round(t*.26),flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:o?"var(--cometchat-neutral-color-900)":"var(--cometchat-static-white)",boxShadow:o?"none":"0 1px 3px rgba(16,24,40,0.12)"},children:[e.jsx("div",{style:{display:"flex",filter:o?"brightness(0.45)":"none"},children:e.jsx(ee,{type:r,size:Math.round(t*.64)})}),o&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{size:Math.round(t*.62),stroke:3.5})})]})}function ae({size:r=60,loading:t=!1,playing:o=!1}){return e.jsxs("div",{style:{position:"relative",width:r,height:r,flexShrink:0},children:[e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:t?"var(--cometchat-neutral-color-900)":"var(--cometchat-primary-color)",color:t?"rgba(255,255,255,0.28)":"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?e.jsx(re,{size:Math.round(r*.3)}):e.jsx(Q,{size:Math.round(r*.3)})}),t&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{size:Math.round(r*.62),stroke:3.5})})]})}function le({progress:r=0}){return e.jsx("div",{style:{position:"relative",height:6,borderRadius:3,width:"100%",background:"var(--cometchat-neutral-color-300)"},children:e.jsx("div",{style:{position:"absolute",top:"50%",left:`calc(${r}% - ${r/100*16}px)`,transform:"translateY(-50%)",width:16,height:16,borderRadius:"50%",background:"var(--cometchat-static-white)",border:"1px solid var(--cometchat-border-color-default)",boxShadow:"var(--cometchat-shadow-xs)"}})})}function X(r,t){return{position:"relative",width:t?"100%":300,boxSizing:"border-box",display:"flex",alignItems:"center",gap:14,padding:14,borderRadius:16,background:"var(--cometchat-background-color-01)",border:`1px solid ${r==="error"?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`}}const Z={fontSize:15,fontWeight:600,color:"var(--cometchat-text-color-primary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};function de(r,t){return r==="error"?"Upload failed · Retry":t}const Y=r=>({fontSize:12,color:r==="error"?"var(--cometchat-error-color)":"var(--cometchat-text-color-tertiary)",fontFamily:"var(--cometchat-font-family, Inter, sans-serif)"});function i({state:r="default",platform:t="desktop",type:o="pdf",name:n="Invoice 45821.pdf"}){const s=t==="mobile";return e.jsxs("div",{style:X(r,s),children:[e.jsx(se,{type:o,loading:r==="loading"}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:Z,children:n}),e.jsx("span",{style:Y(r),children:de(r,ie[o])})]}),e.jsx(j,{kind:U(r,t)})]})}function y({state:r="default",platform:t="desktop",name:o="Watch by Billie.mp3",playing:n=!1}){const s=t==="mobile";return e.jsxs("div",{style:X(r,s),children:[e.jsx(ae,{loading:r==="loading",playing:n}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:Z,children:o}),r==="error"?e.jsx("span",{style:Y(r),children:"Upload failed · Retry"}):e.jsxs(e.Fragment,{children:[e.jsx(le,{progress:n?38:0}),e.jsxs("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:[n?"00:12":"00:00","/00:32"]})]})]}),e.jsx(j,{kind:U(r,t)})]})}function l({kind:r,state:t="default",platform:o="desktop",src:n=a[0]}){const s=o==="mobile",m=s?104:120,k=t==="loading"||t==="error",H=t==="hover"||t==="default"&&s?"remove":"none";return e.jsxs("div",{style:{position:"relative",width:m,height:m,borderRadius:14,overflow:"hidden",flexShrink:0,border:`1px solid ${t==="error"?"var(--cometchat-error-color)":"var(--cometchat-border-color-default)"}`},children:[e.jsx("img",{src:n,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",filter:k?"blur(2px) brightness(0.7)":void 0}}),r==="video"&&!k&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.45)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Q,{size:13})}),e.jsx("div",{style:{position:"absolute",bottom:6,left:6,padding:"1px 6px",borderRadius:4,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:10,fontWeight:500},children:"0:12"})]}),t==="loading"&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{size:36,stroke:4})}),t==="error"&&e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",gap:4,alignItems:"center",justifyContent:"center",color:"#fff"},children:[e.jsx("span",{className:"icon-rounded",style:{fontSize:22,"--icon-fill":1},children:"error"}),e.jsx("span",{style:{fontSize:10,fontWeight:600},children:"Retry"})]}),e.jsx(j,{kind:H})]})}function q({children:r}){return e.jsxs("div",{style:{width:360,borderRadius:28,border:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-02)",padding:12,boxShadow:"var(--cometchat-shadow-xs)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 12px 10px"},children:[e.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--cometchat-text-color-secondary)"},children:"9:41"}),e.jsx("div",{style:{width:60,height:5,borderRadius:3,background:"var(--cometchat-neutral-color-300)"}}),e.jsx("span",{style:{fontSize:12,color:"var(--cometchat-text-color-tertiary)"},children:"▮▮▮"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:"4px 12px 12px"},children:r})]})}const ce=["default","hover","loading","error"];function g({render:r}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40,padding:24},children:[e.jsx(V,{}),e.jsx(p,{title:"Desktop",children:e.jsx(v,{gap:20,children:ce.map(t=>e.jsx(J,{label:t,children:r(t,"desktop")},t))})}),e.jsx(p,{title:"Mobile",children:e.jsx(q,{children:["default","loading","error"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:t}),r(t,"mobile")]},t))})})]})}const x={parameters:{controls:{disable:!0}},render:()=>e.jsx(g,{render:(r,t)=>e.jsx(i,{state:r,platform:t,type:"pdf",name:"Invoice 45821.pdf"})})},h={parameters:{controls:{disable:!0}},render:()=>e.jsx(g,{render:(r,t)=>e.jsx(l,{kind:"image",state:r,platform:t,src:a[0]})})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(g,{render:(r,t)=>e.jsx(l,{kind:"video",state:r,platform:t,src:a[1]})})},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{render:(r,t)=>e.jsx(y,{state:r,platform:t,name:"Watch by Billie.mp3"})}),e.jsx("div",{style:{padding:"0 24px 24px"},children:e.jsx(p,{title:"Playing (pause + progress)",children:e.jsx("div",{style:{maxWidth:300},children:e.jsx(y,{name:"Watch by Billie.mp3",playing:!0})})})})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:40,padding:24,alignItems:"flex-start"},children:[e.jsx(V,{}),e.jsx(p,{title:"Desktop",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(y,{name:"Watch by Billie.mp3"}),e.jsxs(v,{gap:12,children:[e.jsx(l,{kind:"image",src:a[0]}),e.jsx(l,{kind:"video",src:a[1]})]})]})}),e.jsx(p,{title:"Mobile",children:e.jsxs(q,{children:[e.jsx(i,{platform:"mobile",type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(y,{platform:"mobile",name:"Watch by Billie.mp3"}),e.jsxs(v,{gap:10,children:[e.jsx(l,{kind:"image",platform:"mobile",src:a[0]}),e.jsx(l,{kind:"video",platform:"mobile",src:a[1]})]})]})})]})},c={name:"Document Types",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14,padding:24,maxWidth:320},children:[e.jsx(i,{type:"pdf",name:"Invoice 45821.pdf"}),e.jsx(i,{type:"doc",name:"Proposal draft.docx"}),e.jsx(i,{type:"xls",name:"Q3 Budget.xlsx"}),e.jsx(i,{type:"ppt",name:"Kickoff deck.pptx"}),e.jsx(i,{type:"zip",name:"Assets.zip"}),e.jsx(i,{type:"txt",name:"Notes.txt"}),e.jsx(i,{type:"file",name:"data.bin"})]})};var w,S,I;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <DocumentCard state={s} platform={p} type="pdf" name="Invoice 45821.pdf" />} />
}`,...(I=(S=x.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,M,D;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="image" state={s} platform={p} src={SAMPLE_IMAGES[0]} />} />
}`,...(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,T,W;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TypePage render={(s, p) => <MediaTile kind="video" state={s} platform={p} src={SAMPLE_IMAGES[1]} />} />
}`,...(W=(T=f.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var P,E,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <TypePage render={(s, p) => <AudioCard state={s} platform={p} name="Watch by Billie.mp3" />} />
      <div style={{
      padding: "0 24px 24px"
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
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,F,L,_,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    padding: 24,
    alignItems: "flex-start"
  }}>
      <SpinKeyframes />
      <Section title="Desktop">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 14
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
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:"Every card type in its default state, desktop and mobile.",...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};var G,O,K,$,N;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Document Types",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 14,
    padding: 24,
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
}`,...(K=(O=c.parameters)==null?void 0:O.docs)==null?void 0:K.source},description:{story:"Documents come in several file-type variants.",...(N=($=c.parameters)==null?void 0:$.docs)==null?void 0:N.description}}};const ye=["Document","Image","Video","Audio","Overview","FileTypes"];export{u as Audio,x as Document,c as FileTypes,h as Image,d as Overview,f as Video,ye as __namedExportsOrder,ue as default};
