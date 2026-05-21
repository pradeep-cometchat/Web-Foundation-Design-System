import{j as e}from"./jsx-runtime-BYYWji4R.js";/* empty css                    */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ae={title:"Core Components/Chat Bubbles/File Bubble",tags:["autodocs"],parameters:{layout:"centered"}},d={name:"Sent — PDF",parameters:{docs:{description:{story:"Outgoing PDF file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},p={name:"Sent — DOC",parameters:{docs:{description:{story:"Outgoing Word document file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"sent",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},m={name:"Sent — XLS",parameters:{docs:{description:{story:"Outgoing Excel file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"sent",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},b={name:"Received — PDF",parameters:{docs:{description:{story:"Incoming PDF file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})})},f={name:"Received — DOC",parameters:{docs:{description:{story:"Incoming Word document file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"received",fileName:"Report.docx",fileDate:"16 Sep, 2026",fileSize:"1.2 MB",fileType:"doc"})})},u={name:"Received — XLS",parameters:{docs:{description:{story:"Incoming Excel file bubble."}}},render:()=>e.jsx(n,{children:e.jsx(r,{variant:"received",fileName:"Data.xlsx",fileDate:"16 Sep, 2026",fileSize:"540 KB",fileType:"xls"})})},v={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-6)",width:320,padding:"var(--cometchat-spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(y,{children:"Sent — PDF"}),e.jsx(r,{variant:"sent",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-2)"},children:[e.jsx(y,{children:"Received — PDF"}),e.jsx(r,{variant:"received",fileName:"File.pdf",fileDate:"16 Sep, 2026",fileSize:"200 KB",fileType:"pdf"})]})]})},h={parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"var(--cometchat-spacing-8)",maxWidth:1200,margin:"0 auto"},children:[e.jsx(o,{title:"HTML Structure",children:e.jsx(Y,{language:"HTML",code:`<!-- Sent File Bubble -->
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
</div>`})}),e.jsx(o,{title:"Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent — PDF",description:"Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white."}),e.jsx(t,{title:"Sent — DOC",description:"Same layout with Word document icon (blue)."}),e.jsx(t,{title:"Sent — XLS",description:"Same layout with Excel icon (green)."}),e.jsx(t,{title:"Received — PDF",description:"Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple."}),e.jsx(t,{title:"Received — DOC",description:"Same layout with Word document icon."}),e.jsx(t,{title:"Received — XLS",description:"Same layout with Excel icon."})]})}),e.jsx(o,{title:"Anatomy",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Preview Area",description:"White/light background showing a large file type icon (PDF, DOC, XLS) centered."}),e.jsx(t,{title:"File Thumbnail",description:"Small rounded square (36×36) with the file type icon at the left of the info bar."}),e.jsx(t,{title:"File Name",description:"Semibold text showing the file name (e.g. 'File.pdf')."}),e.jsx(t,{title:"File Meta",description:"Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB')."}),e.jsx(t,{title:"Download Icon",description:"Material icon 'download' at the right of the info bar. White on sent, purple on received."})]})}),e.jsx(o,{title:"Design Tokens",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--cometchat-spacing-3)"},children:[e.jsx(t,{title:"Sent Info Bar",description:"var(--cometchat-send-bubble-background) — Primary purple"}),e.jsx(t,{title:"Received Info Bar",description:"var(--cometchat-received-bubble-background) — Light gray"}),e.jsx(t,{title:"Preview Background",description:"var(--cometchat-static-white) — White"}),e.jsx(t,{title:"File Name (Sent)",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"File Name (Received)",description:"var(--cometchat-text-color-primary)"}),e.jsx(t,{title:"File Meta (Sent)",description:"rgba(255, 255, 255, 0.7)"}),e.jsx(t,{title:"File Meta (Received)",description:"var(--cometchat-text-color-tertiary)"}),e.jsx(t,{title:"Download Icon (Sent)",description:"var(--cometchat-static-white)"}),e.jsx(t,{title:"Download Icon (Received)",description:"var(--cometchat-icon-color-highlight)"}),e.jsx(t,{title:"Border Radius",description:"var(--cometchat-radius-3) — 12px uniform on all corners"})]})}),e.jsx(o,{title:"Figma Reference",children:e.jsx(t,{title:"Source File",description:"Design System — Web Chat UI Kits → Document Container (node 17219:542)"})})]})};function r({variant:i,fileName:a,fileDate:s,fileSize:g,fileType:x}){const l=i==="sent";return e.jsx("div",{style:{borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",minWidth:240,background:l?"var(--cometchat-send-bubble-background)":"var(--cometchat-received-bubble-background)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--cometchat-spacing-2)",padding:"var(--cometchat-spacing-3) var(--cometchat-spacing-3)"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"var(--cometchat-radius-1-5)",background:"var(--cometchat-static-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx(Q,{type:x,size:"small"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:1,flex:1,minWidth:0},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600",fontFamily:"var(--cometchat-font-family)",lineHeight:"20px",color:l?"var(--cometchat-static-white)":"var(--cometchat-text-color-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),e.jsxs("span",{style:{fontSize:"12px",fontFamily:"var(--cometchat-font-family)",lineHeight:"18px",color:l?"rgba(255, 255, 255, 0.7)":"var(--cometchat-text-color-tertiary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s," • ",g]})]}),e.jsx("span",{className:"icon-rounded",style:{fontSize:20,color:l?"var(--cometchat-static-white)":"var(--cometchat-icon-color-highlight)","--icon-fill":0,flexShrink:0,cursor:"pointer"},children:"download"})]})})}function Q({type:i,size:a}){const s=a==="large",g=s?64:18,x=s?80:22,S={pdf:{bg:"var(--cometchat-error-color)",fold:"var(--color-error-800)",text:"PDF"},doc:{bg:"var(--cometchat-info-color)",fold:"var(--color-info-800)",text:"DOC"},xls:{bg:"var(--cometchat-success-color)",fold:"var(--color-success-800)",text:"XLS"}}[i];return e.jsxs("svg",{width:g,height:x,viewBox:"0 0 64 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z",fill:S.bg}),e.jsx("path",{d:"M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z",fill:S.fold,opacity:"0.6"}),e.jsx("text",{x:"32",y:"56",textAnchor:"middle",fontSize:"16",fontWeight:"700",fill:"white",children:S.text})]})}function n({children:i,width:a=320}){return e.jsx("div",{style:{width:a,display:"flex",flexDirection:"column",gap:"var(--cometchat-spacing-4)",padding:"var(--cometchat-spacing-4)",background:"var(--cometchat-background-color-01)",borderRadius:"var(--cometchat-radius-3)",border:"1px solid var(--cometchat-border-color-default)"},children:i})}function y({children:i}){return e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"var(--cometchat-text-color-tertiary)",textTransform:"uppercase",letterSpacing:"0.06em"},children:i})}function o({title:i,children:a}){return e.jsxs("div",{style:{marginBottom:"var(--cometchat-spacing-6)"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"var(--cometchat-text-color-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"var(--cometchat-spacing-2)",paddingBottom:"var(--cometchat-spacing-2)",borderBottom:"1px solid var(--cometchat-border-color-default)"},children:i}),a]})}function Y({language:i,code:a}){return e.jsxs("div",{style:{border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",overflow:"hidden",background:"var(--cometchat-background-color-02)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--cometchat-spacing-2) var(--cometchat-spacing-3)",borderBottom:"1px solid var(--cometchat-border-color-default)",background:"var(--cometchat-background-color-03)"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:"600",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--cometchat-text-color-secondary)"},children:i})}),e.jsx("pre",{style:{margin:0,padding:"var(--cometchat-spacing-3-5)",fontFamily:"var(--cometchat-font-family)",fontSize:"12px",lineHeight:1.6,color:"var(--cometchat-text-color-primary)",overflowX:"auto"},children:e.jsx("code",{children:a})})]})}function t({title:i,description:a}){return e.jsxs("div",{style:{padding:"var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",border:"1px solid var(--cometchat-border-color-default)",borderRadius:"var(--cometchat-radius-3)",background:"var(--cometchat-background-color-01)"},children:[e.jsx("strong",{style:{fontSize:"14px",fontWeight:"600",color:"var(--cometchat-text-color-primary)",display:"block",marginBottom:"var(--cometchat-spacing-1)"},children:i}),e.jsx("span",{style:{fontSize:"12px",color:"var(--cometchat-text-color-tertiary)",lineHeight:"18px"},children:a})]})}const c={parameters:{docs:{disable:!0}}};var D,w,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var j,C,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var B,R,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var P,T,z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(T=b.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var L,k,O;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(k=f.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var I,N,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(N=u.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var M,X,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <Label>Sent — PDF</Label>
        <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--cometchat-spacing-2)"
    }}>
        <Label>Received — PDF</Label>
        <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
    </div>
}`,...(U=(X=v.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var H,E,A;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var V,q,G,Z,J;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Interactive playground.",...(J=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:J.description}}};const re=["SentPDF","SentDOC","SentXLS","ReceivedPDF","ReceivedDOC","ReceivedXLS","AllVariants","Usage","Playground"];export{v as AllVariants,c as Playground,f as ReceivedDOC,b as ReceivedPDF,u as ReceivedXLS,p as SentDOC,d as SentPDF,m as SentXLS,h as Usage,re as __namedExportsOrder,ae as default};
