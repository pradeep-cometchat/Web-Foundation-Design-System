import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const re={title:"Core Components/Chat Bubbles/File Bubble",tags:["autodocs"],parameters:{layout:"centered"}},c={name:"Sent — PDF",parameters:{docs:{description:{story:"Outgoing PDF file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},p={name:"Sent — DOC",parameters:{docs:{description:{story:"Outgoing Word document file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"sent",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},b={name:"Sent — XLS",parameters:{docs:{description:{story:"Outgoing Excel file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"sent",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},f={name:"Received — PDF",parameters:{docs:{description:{story:"Incoming PDF file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},v={name:"Received — DOC",parameters:{docs:{description:{story:"Incoming Word document file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"received",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},u={name:"Received — XLS",parameters:{docs:{description:{story:"Incoming Excel file bubble."}}},render:()=>e.jsx(l,{children:e.jsx(t,{variant:"received",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},m={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)",width:320,padding:"var(--space-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx(y,{children:"Sent — PDF"}),e.jsx(t,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx(y,{children:"Received — PDF"}),e.jsx(t,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]})]})},g={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--space-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(o,{title:"HTML Structure",children:e.jsx(Y,{language:"HTML",code:`<!-- Sent File Bubble -->
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
</div>`})}),e.jsx(o,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(i,{title:"Sent — PDF",description:"Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white."}),e.jsx(i,{title:"Sent — DOC",description:"Same layout with Word document icon (blue)."}),e.jsx(i,{title:"Sent — XLS",description:"Same layout with Excel icon (green)."}),e.jsx(i,{title:"Received — PDF",description:"Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple."}),e.jsx(i,{title:"Received — DOC",description:"Same layout with Word document icon."}),e.jsx(i,{title:"Received — XLS",description:"Same layout with Excel icon."})]})}),e.jsx(o,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(i,{title:"Preview Area",description:"White/light background showing a large file type icon (PDF, DOC, XLS) centered."}),e.jsx(i,{title:"File Thumbnail",description:"Small rounded square (36×36) with the file type icon at the left of the info bar."}),e.jsx(i,{title:"File Name",description:"Semibold text showing the file name (e.g. 'File.pdf')."}),e.jsx(i,{title:"File Meta",description:"Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB')."}),e.jsx(i,{title:"Download Icon",description:"Material icon 'download' at the right of the info bar. White on sent, purple on received."})]})}),e.jsx(o,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-3)"},children:[e.jsx(i,{title:"Sent Info Bar",description:"var(--color-send-bubble-bg) — Primary purple"}),e.jsx(i,{title:"Received Info Bar",description:"var(--color-received-bubble-bg) — Light gray"}),e.jsx(i,{title:"Preview Background",description:"var(--color-static-white) — White"}),e.jsx(i,{title:"File Name (Sent)",description:"var(--color-static-white)"}),e.jsx(i,{title:"File Name (Received)",description:"var(--color-text-primary)"}),e.jsx(i,{title:"File Meta (Sent)",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(i,{title:"File Meta (Received)",description:"var(--color-text-tertiary)"}),e.jsx(i,{title:"Download Icon (Sent)",description:"var(--color-static-white)"}),e.jsx(i,{title:"Download Icon (Received)",description:"var(--color-icon-highlight-primary)"}),e.jsx(i,{title:"Border Radius",description:"var(--radius-xl) — 12px uniform on all corners"})]})}),e.jsx(o,{title:"Figma Reference",children:e.jsx(i,{title:"Source File",description:"Design System — Web Chat UI Kits → Document Container (node 17219:542)"})})]})};function t({variant:a,fileName:r,fileDate:d,fileSize:x,fileType:h}){const n=a==="sent";return e.jsx("div",{style:{borderRadius:"var(--radius-xl)",overflow:"hidden",minWidth:240,background:n?"var(--color-send-bubble-bg)":"var(--color-received-bubble-bg)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-3) var(--space-3)"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"var(--radius-sm)",background:"var(--color-static-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx(Q,{type:h,size:"small"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:1,flex:1,minWidth:0},children:[e.jsx("span",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-body)",color:n?"var(--color-static-white)":"var(--color-text-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r}),e.jsxs("span",{style:{fontSize:"var(--font-size-1)",fontFamily:"var(--font-family-body)",lineHeight:"var(--line-height-caption-1)",color:n?"rgba(255, 255, 255, 0.7)":"var(--color-text-tertiary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[d," • ",x]})]}),e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:n?"var(--color-static-white)":"var(--color-icon-highlight-primary)","--icon-fill":0,flexShrink:0,cursor:"pointer"},children:"download"})]})})}function Q({type:a,size:r}){const d=r==="large",x=d?64:18,h=d?80:22,S={pdf:{bg:"var(--color-bg-error-solid)",fold:"var(--color-error-800)",text:"PDF"},doc:{bg:"var(--color-bg-info-solid)",fold:"var(--color-info-800)",text:"DOC"},xls:{bg:"var(--color-bg-success-solid)",fold:"var(--color-success-800)",text:"XLS"}}[a];return e.jsxs("svg",{width:x,height:h,viewBox:"0 0 64 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:S.bg}),e.jsx("path",{d:"M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z",fill:S.fold,opacity:"0.6"}),e.jsx("text",{x:"32",y:"56",textAnchor:"middle",fontSize:"16",fontWeight:"700",fill:"white",children:S.text})]})}function l({children:a,width:r=320}){return e.jsx("div",{style:{width:r,display:"flex",flexDirection:"column",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--color-bg-01)",borderRadius:"var(--radius-xl)",border:"1px solid var(--color-border-default)"},children:a})}function y({children:a}){return e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a})}function o({title:a,children:r}){return e.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--space-2)",paddingBottom:"var(--space-2)",borderBottom:"1px solid var(--color-border-default)"},children:a}),r]})}function Y({language:a,code:r}){return e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",overflow:"hidden",background:"var(--color-bg-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--space-2) var(--space-3)",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-bg-03)"},children:e.jsx("span",{style:{fontSize:"var(--font-size-0)",fontWeight:"var(--font-weight-semibold)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-text-secondary)"},children:a})}),e.jsx("pre",{style:{margin:0,padding:"var(--space-3-5)",fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-1)",lineHeight:1.6,color:"var(--color-text-primary)",overflowX:"auto"},children:e.jsx("code",{children:r})})]})}function i({title:a,description:r}){return e.jsxs("div",{style:{padding:"var(--space-3-5) var(--space-4)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-01)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-2)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-text-primary)",display:"block",marginBottom:"var(--space-1)"},children:a}),e.jsx("span",{style:{fontSize:"var(--font-size-1)",color:"var(--color-text-tertiary)",lineHeight:"var(--line-height-caption-1)"},children:r})]})}const s={parameters:{docs:{disable:!0}}};var w,D,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var j,C,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var B,R,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,P,T;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(P=f.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,O,I;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(O=v.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var N,K,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var X,k,U;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
    width: 320,
    padding: "var(--space-4)"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <Label>Sent — PDF</Label>
        <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }}>
        <Label>Received — PDF</Label>
        <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
    </div>
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var H,E,A;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "var(--space-8)",
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
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
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
        gap: "var(--space-3)"
      }}>
          <StateCard title="Sent Info Bar" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Info Bar" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Preview Background" description="var(--color-static-white) — White" />
          <StateCard title="File Name (Sent)" description="var(--color-static-white)" />
          <StateCard title="File Name (Received)" description="var(--color-text-primary)" />
          <StateCard title="File Meta (Sent)" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="File Meta (Received)" description="var(--color-text-tertiary)" />
          <StateCard title="Download Icon (Sent)" description="var(--color-static-white)" />
          <StateCard title="Download Icon (Received)" description="var(--color-icon-highlight-primary)" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Document Container (node 17219:542)" />
      </UsageSection>
    </div>
}`,...(A=(E=g.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var V,q,G,Z,J;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(G=(q=s.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Interactive playground.",...(J=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:J.description}}};const te=["SentPDF","SentDOC","SentXLS","ReceivedPDF","ReceivedDOC","ReceivedXLS","AllVariants","Usage","Playground"];export{m as AllVariants,s as Playground,v as ReceivedDOC,f as ReceivedPDF,u as ReceivedXLS,p as SentDOC,c as SentPDF,b as SentXLS,g as Usage,te as __namedExportsOrder,re as default};
