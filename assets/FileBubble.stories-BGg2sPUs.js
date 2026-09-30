import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as r}from"./T-C6nayWAE.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ne={title:"Core Components/Chat Bubbles/File Bubble",tags:["autodocs"],parameters:{layout:"centered"}},p={name:"Sent — PDF",parameters:{docs:{description:{story:"Outgoing PDF file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},m={name:"Sent — DOC",parameters:{docs:{description:{story:"Outgoing Word document file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"sent",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},b={name:"Sent — XLS",parameters:{docs:{description:{story:"Outgoing Excel file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"sent",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},f={name:"Received — PDF",parameters:{docs:{description:{story:"Incoming PDF file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},u={name:"Received — DOC",parameters:{docs:{description:{story:"Incoming Word document file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"received",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},h={name:"Received — XLS",parameters:{docs:{description:{story:"Incoming Excel file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(n,{variant:"received",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},v={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",width:320,padding:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(j,{children:e.jsx(r,{children:"Sent — PDF"})}),e.jsx(n,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(j,{children:e.jsx(r,{children:"Received — PDF"})}),e.jsx(n,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]})]})},g={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(c,{title:"HTML Structure",children:e.jsx($,{language:"HTML",code:`<!-- Sent File Bubble -->
<div class="file-bubble file-bubble--sent">
  <!-- Preview area -->
  <div class="file-bubble__preview">
    <!-- Large file type icon (PDF/DOC/XLS) -->
  </div>
  <!-- Info bar -->
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">
      <!-- Small file type thumbnail -->
    </div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>

<!-- Received File Bubble -->
<div class="file-bubble file-bubble--received">
  <div class="file-bubble__preview">...</div>
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">...</div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>`})}),e.jsx(c,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — PDF",description:"Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white."}),e.jsx(t,{title:"Sent — DOC",description:"Same layout with Word document icon (blue)."}),e.jsx(t,{title:"Sent — XLS",description:"Same layout with Excel icon (green)."}),e.jsx(t,{title:"Received — PDF",description:"Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple."}),e.jsx(t,{title:"Received — DOC",description:"Same layout with Word document icon."}),e.jsx(t,{title:"Received — XLS",description:"Same layout with Excel icon."})]})}),e.jsx(c,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Preview Area",description:"White/light background showing a large file type icon (PDF, DOC, XLS) centered."}),e.jsx(t,{title:"File Thumbnail",description:"Small rounded square (36×36) with the file type icon at the left of the info bar."}),e.jsx(t,{title:"File Name",description:"Semibold text showing the file name (e.g. 'File.pdf')."}),e.jsx(t,{title:"File Meta",description:"Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB')."}),e.jsx(t,{title:"Download Icon",description:"Material icon 'download' at the right of the info bar. White on sent, purple on received."})]})}),e.jsx(c,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Info Bar",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Info Bar",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Preview Background",description:"var(--cometchat-static-white) — White"}),e.jsx(t,{title:"File Name (Sent)",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"File Name (Received)",description:"var(--cometchat-text-color-primary)"}),e.jsx(t,{title:"File Meta (Sent)",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"File Meta (Received)",description:"var(--cometchat-text-color-tertiary)"}),e.jsx(t,{title:"Download Icon (Sent)",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Download Icon (Received)",description:"var(--cometchat-icon-color-highlight)"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(c,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Design System — Web Chat UI Kits → Document Container (node 17219:542)"})})]})};function n({variant:i,fileName:a,fileDate:d,fileSize:x,fileType:S}){const o=i==="sent";return e.jsx("div",{style:{borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",minWidth:240,background:o?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-3)"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx(Y,{type:S,size:"small"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:1,flex:1,minWidth:0},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:o?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.jsx(r,{children:a})}),e.jsxs("span",{style:{fontSize:"12px",fontFamily:"var(--cometchat-font-family)",lineHeight:"18px",color:o?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e.jsx(r,{children:d})," • ",e.jsx(r,{children:x})]})]}),e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:o?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)","--icon-fill":0,flexShrink:0,cursor:"pointer"},children:"download"})]})})}function Y({type:i,size:a}){const d=a==="large",x=d?64:18,S=d?80:22,y={pdf:{bg:"var(--cometchat-error-color)",fold:"var(--cometchat-text-color-error)",text:"PDF"},doc:{bg:"var(--cometchat-info-color)",fold:"var(--cometchat-info-color)",text:"DOC"},xls:{bg:"var(--cometchat-success-color)",fold:"var(--cometchat-text-color-success)",text:"XLS"}}[i];return e.jsxs("svg",{width:x,height:S,viewBox:"0 0 64 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:y.bg}),e.jsx("path",{d:"M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z",fill:y.fold,opacity:"0.6"}),e.jsx("text",{x:"32",y:"56",textAnchor:"middle",fontSize:"16",fontWeight:"700",fill:"white",children:e.jsx(r,{children:y.text})})]})}function l({children:i,width:a=320}){return e.jsx("div",{style:{width:a,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:i})}function j({children:i}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:i})}function c({title:i,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:e.jsx(r,{children:i})}),a]})}function $({language:i,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function t({title:i,description:a}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:e.jsx(r,{children:i})}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:e.jsx(r,{children:a})})]})}const s={parameters:{docs:{disable:!0}}};var D,w,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Sent — PDF",
  parameters: {
    docs: {
      description: {
        story: "Outgoing PDF file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
    </Wrapper>
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,_,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sent — DOC",
  parameters: {
    docs: {
      description: {
        story: "Outgoing Word document file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="sent" fileName="Report.docx" fileDate="16 Sep, 2026" fileSize="1.2 MB" fileType="doc" />
    </Wrapper>
}`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,W,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Sent — XLS",
  parameters: {
    docs: {
      description: {
        story: "Outgoing Excel file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="sent" fileName="Data.xlsx" fileDate="16 Sep, 2026" fileSize="540 KB" fileType="xls" />
    </Wrapper>
}`,...(P=(W=b.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var T,z,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Received — PDF",
  parameters: {
    docs: {
      description: {
        story: "Incoming PDF file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
    </Wrapper>
}`,...(L=(z=f.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var k,O,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Received — DOC",
  parameters: {
    docs: {
      description: {
        story: "Incoming Word document file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="received" fileName="Report.docx" fileDate="16 Sep, 2026" fileSize="1.2 MB" fileType="doc" />
    </Wrapper>
}`,...(I=(O=u.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var N,K,M;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Received — XLS",
  parameters: {
    docs: {
      description: {
        story: "Incoming Excel file bubble."
      }
    }
  },
  render: () => <Wrapper>
      <FileBubble variant="received" fileName="Data.xlsx" fileDate="16 Sep, 2026" fileSize="540 KB" fileType="xls" />
    </Wrapper>
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var X,U,H;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-6)",
    width: 320,
    padding: "var(--cometchat-spacing-4)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Sent — PDF</T></Label>
        <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label><T>Received — PDF</T></Label>
        <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
    </div>
}`,...(H=(U=v.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var E,A,V;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--cometchat-spacing-8)",
    maxWidth: 1200,
    margin: "0 auto"
  }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={\`<!-- Sent File Bubble -->
<div class="file-bubble file-bubble--sent">
  <!-- Preview area -->
  <div class="file-bubble__preview">
    <!-- Large file type icon (PDF/DOC/XLS) -->
  </div>
  <!-- Info bar -->
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">
      <!-- Small file type thumbnail -->
    </div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>

<!-- Received File Bubble -->
<div class="file-bubble file-bubble--received">
  <div class="file-bubble__preview">...</div>
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">...</div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>\`} />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent — PDF" description="Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white." />
          <StateCard title="Sent — DOC" description="Same layout with Word document icon (blue)." />
          <StateCard title="Sent — XLS" description="Same layout with Excel icon (green)." />
          <StateCard title="Received — PDF" description="Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple." />
          <StateCard title="Received — DOC" description="Same layout with Word document icon." />
          <StateCard title="Received — XLS" description="Same layout with Excel icon." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Preview Area" description="White/light background showing a large file type icon (PDF, DOC, XLS) centered." />
          <StateCard title="File Thumbnail" description="Small rounded square (36×36) with the file type icon at the left of the info bar." />
          <StateCard title="File Name" description="Semibold text showing the file name (e.g. 'File.pdf')." />
          <StateCard title="File Meta" description="Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB')." />
          <StateCard title="Download Icon" description="Material icon 'download' at the right of the info bar. White on sent, purple on received." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "var(--cometchat-spacing-3)"
      }}>
          <StateCard title="Sent Info Bar" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Info Bar" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Preview Background" description="var(--cometchat-static-white) — White" />
          <StateCard title="File Name (Sent)" description="var(--cometchat-static-white)" />
          <StateCard title="File Name (Received)" description="var(--cometchat-text-color-primary)" />
          <StateCard title="File Meta (Sent)" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="File Meta (Received)" description="var(--cometchat-text-color-tertiary)" />
          <StateCard title="Download Icon (Sent)" description="var(--cometchat-static-white)" />
          <StateCard title="Download Icon (Received)" description="var(--cometchat-icon-color-highlight)" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Document Container (node 17219:542)" />
      </UsageSection>
    </div>
}`,...(V=(A=g.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,G,Z,J,Q;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(Z=(G=s.parameters)==null?void 0:G.docs)==null?void 0:Z.source},description:{story:"Interactive playground.",...(Q=(J=s.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const le=["SentPDF","SentDOC","SentXLS","ReceivedPDF","ReceivedDOC","ReceivedXLS","AllVariants","Usage","Playground"];export{v as AllVariants,s as Playground,u as ReceivedDOC,f as ReceivedPDF,h as ReceivedXLS,m as SentDOC,p as SentPDF,b as SentXLS,g as Usage,le as __namedExportsOrder,ne as default};
